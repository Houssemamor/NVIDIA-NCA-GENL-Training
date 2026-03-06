/* ========================================
   Mock Exam JavaScript
   ======================================== */

(function() {
  'use strict';

  // ---- State ----
  var state = {
    questions: [],       // Shuffled questions for this exam (with shuffled options)
    answers: {},         // { questionIndex: [selectedOptionIndices] }
    marked: {},          // { questionIndex: true }
    currentIndex: 0,
    timeRemaining: 3600, // 60 minutes in seconds
    timerInterval: null,
    startTime: null,
    finished: false,
    totalQuestions: 50
  };

  var STORAGE_KEY = 'nca_genl_exam_session';
  var HISTORY_KEY = 'nca_genl_history';

  // ---- Init ----
  document.addEventListener('DOMContentLoaded', function() {
    checkForSavedSession();
  });

  function checkForSavedSession() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        var session = JSON.parse(saved);
        if (session && session.questions && session.questions.length > 0 && !session.finished) {
          document.getElementById('resumePrompt').classList.remove('hidden');
          return;
        }
      } catch(e) {}
    }
  }

  // ---- Start Exam ----
  window.startExam = function() {
    localStorage.removeItem(STORAGE_KEY);
    prepareExam();
    showExamUI();
  };

  window.resumeExam = function() {
    var saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    state.questions = saved.questions;
    state.answers = saved.answers || {};
    state.marked = saved.marked || {};
    state.currentIndex = saved.currentIndex || 0;
    state.timeRemaining = saved.timeRemaining || 3600;
    state.startTime = Date.now();
    state.finished = false;
    state.totalQuestions = state.questions.length;
    showExamUI();
  };

  window.discardSession = function() {
    localStorage.removeItem(STORAGE_KEY);
    document.getElementById('resumePrompt').classList.add('hidden');
  };

  function prepareExam() {
    if (typeof QUESTIONS_DB === 'undefined') {
      alert('Questions database not loaded.');
      return;
    }

    // Pick 50 random questions (or all if fewer)
    var allQ = QUESTIONS_DB.questions.slice();
    shuffleArray(allQ);
    var selected = allQ.slice(0, state.totalQuestions);

    // Shuffle options for each question
    state.questions = selected.map(function(q) {
      return shuffleQuestion(q);
    });

    state.answers = {};
    state.marked = {};
    state.currentIndex = 0;
    state.timeRemaining = 3600;
    state.startTime = Date.now();
    state.finished = false;
  }

  function shuffleQuestion(q) {
    // Create index mapping for shuffled options
    var indices = q.options.map(function(_, i) { return i; });
    shuffleArray(indices);

    var shuffledOptions = indices.map(function(i) { return q.options[i]; });

    // Map correct answers to new positions
    var newCorrectAnswers = q.correctAnswers.map(function(origIdx) {
      return indices.indexOf(origIdx);
    });

    return {
      id: q.id,
      question: q.question,
      options: shuffledOptions,
      correctAnswers: newCorrectAnswers,
      correctAnswer: newCorrectAnswers[0],
      explanation: q.explanation,
      topic: q.topic,
      multiSelect: q.multiSelect
    };
  }

  // ---- UI ----
  function showExamUI() {
    document.getElementById('examSetup').style.display = 'none';
    document.getElementById('examContainer').classList.add('active');
    document.getElementById('resultsContainer').classList.remove('active');

    buildQuestionGrid();
    renderCurrentQuestion();
    startTimer();
  }

  function buildQuestionGrid() {
    var grid = document.getElementById('questionGrid');
    var html = '';
    for (var i = 0; i < state.questions.length; i++) {
      html += '<button class="q-grid-btn' + (i === 0 ? ' current' : '') +
        '" onclick="goToQuestion(' + i + ')" id="grid-' + i + '">' + (i + 1) + '</button>';
    }
    grid.innerHTML = html;
  }

  function updateQuestionGrid() {
    for (var i = 0; i < state.questions.length; i++) {
      var btn = document.getElementById('grid-' + i);
      if (!btn) continue;

      btn.className = 'q-grid-btn';
      if (i === state.currentIndex) btn.classList.add('current');
      if (state.answers[i] && state.answers[i].length > 0) btn.classList.add('answered');
      if (state.marked[i]) btn.classList.add('flagged');
    }
  }

  function renderCurrentQuestion() {
    var q = state.questions[state.currentIndex];
    if (!q) return;

    var letters = ['A', 'B', 'C', 'D', 'E'];

    document.getElementById('qNumber').textContent = 'Q' + (state.currentIndex + 1);
    document.getElementById('qTopic').textContent = q.topic;

    var multiTag = q.multiSelect ?
      '<span class="multi-select-badge">Select ' + q.correctAnswers.length + '</span>' : '';
    document.getElementById('qText').innerHTML = escapeHtml(q.question) + multiTag;

    // Build options
    var optHtml = '';
    var selected = state.answers[state.currentIndex] || [];

    q.options.forEach(function(opt, i) {
      var isSelected = selected.indexOf(i) > -1;
      optHtml += '<button class="option-btn' + (isSelected ? ' selected' : '') +
        '" onclick="selectExamOption(' + i + ', this)">';
      optHtml += '<span class="option-letter">' + letters[i] + '</span>';
      optHtml += '<span class="option-text">' + escapeHtml(opt) + '</span>';
      optHtml += '</button>';
    });
    document.getElementById('qOptions').innerHTML = optHtml;

    // Update progress
    document.getElementById('progressText').textContent =
      (state.currentIndex + 1) + ' / ' + state.questions.length;
    document.getElementById('progressFill').style.width =
      ((state.currentIndex + 1) / state.questions.length * 100) + '%';

    var answeredCount = Object.keys(state.answers).filter(function(k) {
      return state.answers[k] && state.answers[k].length > 0;
    }).length;
    document.getElementById('answeredCount').textContent = answeredCount + ' answered';

    // Update nav buttons
    document.getElementById('prevBtn').disabled = state.currentIndex === 0;
    document.getElementById('nextBtn').textContent =
      state.currentIndex === state.questions.length - 1 ? 'Next →' : 'Next →';

    // Update mark button
    var markBtn = document.getElementById('markBtn');
    if (state.marked[state.currentIndex]) {
      markBtn.classList.add('marked');
      markBtn.innerHTML = '&#9873; Marked';
    } else {
      markBtn.classList.remove('marked');
      markBtn.innerHTML = '&#9873; Mark for Review';
    }

    updateQuestionGrid();
    saveSession();
  }

  // ---- Option Selection ----
  window.selectExamOption = function(optIndex, btn) {
    var q = state.questions[state.currentIndex];

    if (q.multiSelect) {
      // Toggle for multi-select
      if (!state.answers[state.currentIndex]) state.answers[state.currentIndex] = [];
      var idx = state.answers[state.currentIndex].indexOf(optIndex);
      if (idx > -1) {
        state.answers[state.currentIndex].splice(idx, 1);
        btn.classList.remove('selected');
      } else {
        state.answers[state.currentIndex].push(optIndex);
        btn.classList.add('selected');
      }
    } else {
      // Single select
      state.answers[state.currentIndex] = [optIndex];
      var allBtns = document.querySelectorAll('#qOptions .option-btn');
      allBtns.forEach(function(b) { b.classList.remove('selected'); });
      btn.classList.add('selected');
    }

    updateQuestionGrid();
    saveSession();
  };

  // ---- Navigation ----
  window.goToQuestion = function(idx) {
    state.currentIndex = idx;
    renderCurrentQuestion();
  };

  window.prevQuestion = function() {
    if (state.currentIndex > 0) {
      state.currentIndex--;
      renderCurrentQuestion();
    }
  };

  window.nextQuestion = function() {
    if (state.currentIndex < state.questions.length - 1) {
      state.currentIndex++;
      renderCurrentQuestion();
    }
  };

  window.toggleMark = function() {
    state.marked[state.currentIndex] = !state.marked[state.currentIndex];
    renderCurrentQuestion();
  };

  // ---- Timer ----
  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);

    updateTimerDisplay();

    state.timerInterval = setInterval(function() {
      state.timeRemaining--;
      if (state.timeRemaining <= 0) {
        state.timeRemaining = 0;
        clearInterval(state.timerInterval);
        alert('Time is up! Your exam will be submitted automatically.');
        submitExam();
        return;
      }
      updateTimerDisplay();
      // Save every 10 seconds
      if (state.timeRemaining % 10 === 0) saveSession();
    }, 1000);
  }

  function updateTimerDisplay() {
    var mins = Math.floor(state.timeRemaining / 60);
    var secs = state.timeRemaining % 60;
    var display = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
    document.getElementById('timerDisplay').textContent = display;

    var timerEl = document.getElementById('timer');
    timerEl.classList.remove('warning', 'critical');
    if (state.timeRemaining <= 300) {
      timerEl.classList.add('critical');
    } else if (state.timeRemaining <= 600) {
      timerEl.classList.add('warning');
    }
  }

  // ---- Submit ----
  window.confirmSubmit = function() {
    var answeredCount = Object.keys(state.answers).filter(function(k) {
      return state.answers[k] && state.answers[k].length > 0;
    }).length;
    var unanswered = state.questions.length - answeredCount;

    var msg = 'Submit your exam?';
    if (unanswered > 0) {
      msg = 'You have ' + unanswered + ' unanswered question' + (unanswered > 1 ? 's' : '') + '. Submit anyway?';
    }

    if (confirm(msg)) {
      submitExam();
    }
  };

  function submitExam() {
    state.finished = true;
    if (state.timerInterval) clearInterval(state.timerInterval);

    var results = calculateResults();
    showResults(results);
    saveHistory(results);
    localStorage.removeItem(STORAGE_KEY);
  }

  function calculateResults() {
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var details = [];

    state.questions.forEach(function(q, i) {
      var userAnswers = (state.answers[i] || []).slice().sort();
      var correctAnswers = q.correctAnswers.slice().sort();

      var isCorrect = userAnswers.length === correctAnswers.length &&
        userAnswers.every(function(v, idx) { return v === correctAnswers[idx]; });
      var isUnanswered = userAnswers.length === 0;

      if (isUnanswered) {
        unanswered++;
      } else if (isCorrect) {
        correct++;
      } else {
        incorrect++;
      }

      details.push({
        question: q,
        userAnswers: userAnswers,
        correctAnswers: correctAnswers,
        isCorrect: isCorrect,
        isUnanswered: isUnanswered,
        index: i
      });
    });

    var timeUsed = 3600 - state.timeRemaining;
    var percent = Math.round((correct / state.questions.length) * 100);

    return {
      correct: correct,
      incorrect: incorrect,
      unanswered: unanswered,
      total: state.questions.length,
      percent: percent,
      timeUsed: timeUsed,
      details: details
    };
  }

  // ---- Results Display ----
  var lastResults = null;

  function showResults(results) {
    lastResults = results;

    document.getElementById('examContainer').classList.remove('active');
    document.getElementById('resultsContainer').classList.add('active');

    // Score circle
    var circle = document.getElementById('scoreCircle');
    circle.className = 'results-score-circle';
    if (results.percent >= 90) circle.classList.add('excellent');
    else if (results.percent >= 80) circle.classList.add('good');
    else if (results.percent >= 70) circle.classList.add('moderate');
    else circle.classList.add('needs-work');

    document.getElementById('scorePercent').textContent = results.percent + '%';
    document.getElementById('scoreRaw').textContent = results.correct + '/' + results.total;

    // Message
    var msg, detail;
    if (results.percent >= 90) {
      msg = 'Excellent Preparation!';
      detail = 'You are well-prepared for the NCA-GENL certification exam.';
    } else if (results.percent >= 80) {
      msg = 'Good Preparation';
      detail = 'Solid understanding. Review weak areas for even better results.';
    } else if (results.percent >= 70) {
      msg = 'Moderate Preparation';
      detail = 'You have a foundation but need more study in several areas.';
    } else {
      msg = 'More Study Needed';
      detail = 'Focus on the areas where you missed questions and review the cheat sheet.';
    }
    document.getElementById('resultsMessage').textContent = msg;
    document.getElementById('resultsDetail').textContent = detail;

    // Stats
    document.getElementById('resultCorrect').textContent = results.correct;
    document.getElementById('resultIncorrect').textContent = results.incorrect;
    document.getElementById('resultUnanswered').textContent = results.unanswered;

    var mins = Math.floor(results.timeUsed / 60);
    var secs = results.timeUsed % 60;
    document.getElementById('resultTime').textContent =
      mins + 'm ' + (secs < 10 ? '0' : '') + secs + 's';
  }

  // ---- Review ----
  window.showReview = function() {
    var section = document.getElementById('reviewSection');
    section.classList.remove('hidden');
    filterReview('all', document.querySelector('.review-filter-bar .topic-btn'));
    section.scrollIntoView({ behavior: 'smooth' });
  };

  window.filterReview = function(filter, btn) {
    if (!lastResults) return;

    // Update buttons
    document.querySelectorAll('.review-filter-bar .topic-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    var details = lastResults.details;
    if (filter === 'incorrect') {
      details = details.filter(function(d) { return !d.isCorrect && !d.isUnanswered; });
    } else if (filter === 'correct') {
      details = details.filter(function(d) { return d.isCorrect; });
    } else if (filter === 'unanswered') {
      details = details.filter(function(d) { return d.isUnanswered; });
    }

    renderReview(details);
  };

  function renderReview(details) {
    var container = document.getElementById('reviewList');
    var letters = ['A', 'B', 'C', 'D', 'E'];

    if (details.length === 0) {
      container.innerHTML = '<div class="text-center text-muted" style="padding: 40px 0;">No questions match this filter.</div>';
      return;
    }

    var html = '';
    details.forEach(function(d) {
      var q = d.question;

      html += '<div class="question-card">';
      html += '<div class="question-header">';
      html += '<span class="question-number">Q' + (d.index + 1) + '</span>';
      html += '<span class="question-topic">' + q.topic + '</span>';
      html += '</div>';

      var multiTag = q.multiSelect ?
        '<span class="multi-select-badge">Multi-Select</span>' : '';
      html += '<div class="question-text">' + escapeHtml(q.question) + multiTag + '</div>';

      html += '<div class="options-list">';
      q.options.forEach(function(opt, i) {
        var isCorrect = q.correctAnswers.indexOf(i) > -1;
        var isSelected = d.userAnswers.indexOf(i) > -1;
        var cls = 'option-btn';

        if (isCorrect) cls += ' correct';
        else if (isSelected) cls += ' incorrect';

        html += '<div class="' + cls + '" style="cursor:default;">';
        html += '<span class="option-letter">' + letters[i] + '</span>';
        html += '<span class="option-text">' + escapeHtml(opt) + '</span>';
        html += '</div>';
      });
      html += '</div>';

      html += '<div class="explanation visible">';
      html += '<div class="explanation-label">Explanation</div>';
      html += '<p>' + escapeHtml(q.explanation) + '</p>';
      html += '</div>';

      html += '</div>';
    });

    container.innerHTML = html;
  }

  // ---- Restart ----
  window.restartExam = function() {
    if (confirm('Start a new exam with fresh random questions?')) {
      localStorage.removeItem(STORAGE_KEY);
      state = {
        questions: [],
        answers: {},
        marked: {},
        currentIndex: 0,
        timeRemaining: 3600,
        timerInterval: null,
        startTime: null,
        finished: false,
        totalQuestions: 50
      };
      document.getElementById('resultsContainer').classList.remove('active');
      document.getElementById('reviewSection').classList.add('hidden');
      document.getElementById('examSetup').style.display = '';
      document.getElementById('resumePrompt').classList.add('hidden');
    }
  };

  // ---- Session Storage ----
  function saveSession() {
    if (state.finished) return;
    var data = {
      questions: state.questions,
      answers: state.answers,
      marked: state.marked,
      currentIndex: state.currentIndex,
      timeRemaining: state.timeRemaining,
      finished: false
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function saveHistory(results) {
    var history = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
    var now = new Date();
    history.push({
      date: now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      score: results.correct,
      total: results.total,
      percent: results.percent,
      timeUsed: results.timeUsed
    });
    // Keep last 50 attempts
    if (history.length > 50) history = history.slice(-50);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  }

  // ---- Utility ----
  function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
