/* ========================================
   Study Mode JavaScript
   ======================================== */

(function() {
  'use strict';

  var currentFilter = 'all';

  document.addEventListener('DOMContentLoaded', function() {
    buildTopicFilter();
    renderQuestions('all');
  });

  // ---- Tab Switching ----
  window.showTab = function(tab) {
    // Update tab buttons
    var tabs = document.querySelectorAll('.study-tab');
    tabs.forEach(function(t) { t.classList.remove('active'); });
    event.target.classList.add('active');

    // Update panels
    document.querySelectorAll('.study-panel').forEach(function(p) {
      p.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
  };

  // ---- Topic Filter ----
  function buildTopicFilter() {
    var container = document.getElementById('topicFilter');
    if (!container || typeof QUESTIONS_DB === 'undefined') return;

    var topics = QUESTIONS_DB.metadata.topics;
    var html = '<button class="topic-btn active" onclick="filterByTopic(\'all\', this)">All (' + QUESTIONS_DB.questions.length + ')</button>';

    // Count questions per topic
    var counts = {};
    QUESTIONS_DB.questions.forEach(function(q) {
      counts[q.topic] = (counts[q.topic] || 0) + 1;
    });

    topics.forEach(function(topic) {
      html += '<button class="topic-btn" onclick="filterByTopic(\'' +
        topic.replace(/'/g, "\\'") + '\', this)">' +
        topic + ' (' + (counts[topic] || 0) + ')</button>';
    });

    container.innerHTML = html;
  }

  window.filterByTopic = function(topic, btn) {
    currentFilter = topic;

    // Update button states
    document.querySelectorAll('.topic-filter .topic-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    renderQuestions(topic);
  };

  // ---- Render Questions ----
  function renderQuestions(topic) {
    var container = document.getElementById('questionList');
    if (!container || typeof QUESTIONS_DB === 'undefined') return;

    var questions = QUESTIONS_DB.questions;
    if (topic !== 'all') {
      questions = questions.filter(function(q) { return q.topic === topic; });
    }

    var html = '';
    questions.forEach(function(q, idx) {
      var letters = ['A', 'B', 'C', 'D', 'E'];
      var multiTag = q.multiSelect ?
        '<span class="multi-select-badge">Select ' + q.correctAnswers.length + '</span>' : '';

      html += '<div class="question-card" id="study-q-' + q.id + '">';
      html += '  <div class="question-header">';
      html += '    <span class="question-number">Q' + q.id + '</span>';
      html += '    <span class="question-topic">' + q.topic + '</span>';
      html += '  </div>';
      html += '  <div class="question-text">' + escapeHtml(q.question) + multiTag + '</div>';
      html += '  <div class="options-list" id="study-opts-' + q.id + '">';

      q.options.forEach(function(opt, i) {
        html += '<button class="option-btn" onclick="selectStudyOption(' + q.id + ', ' + i + ', this)">';
        html += '  <span class="option-letter">' + letters[i] + '</span>';
        html += '  <span class="option-text">' + escapeHtml(opt) + '</span>';
        html += '</button>';
      });

      html += '  </div>';
      html += '  <button class="show-answer-btn" id="show-btn-' + q.id + '" onclick="showStudyAnswer(' + q.id + ')">Show Answer</button>';
      html += '  <div class="explanation" id="study-expl-' + q.id + '">';
      html += '    <div class="explanation-label">Explanation</div>';
      html += '    <p>' + escapeHtml(q.explanation) + '</p>';
      html += '  </div>';
      html += '</div>';
    });

    if (questions.length === 0) {
      html = '<div class="text-center text-muted" style="padding: 60px 0;">No questions found for this topic.</div>';
    }

    container.innerHTML = html;
  }

  // ---- Study Interaction ----
  var studySelections = {};

  window.selectStudyOption = function(qId, optIndex, btn) {
    var q = QUESTIONS_DB.questions.find(function(x) { return x.id === qId; });
    if (!q) return;

    if (q.multiSelect) {
      // Toggle selection for multi-select
      if (!studySelections[qId]) studySelections[qId] = [];
      var idx = studySelections[qId].indexOf(optIndex);
      if (idx > -1) {
        studySelections[qId].splice(idx, 1);
        btn.classList.remove('selected');
      } else {
        studySelections[qId].push(optIndex);
        btn.classList.add('selected');
      }
    } else {
      // Single select - clear others first
      var container = document.getElementById('study-opts-' + qId);
      container.querySelectorAll('.option-btn').forEach(function(b) {
        b.classList.remove('selected');
      });
      btn.classList.add('selected');
      studySelections[qId] = [optIndex];
    }
  };

  window.showStudyAnswer = function(qId) {
    var q = QUESTIONS_DB.questions.find(function(x) { return x.id === qId; });
    if (!q) return;

    var container = document.getElementById('study-opts-' + qId);
    var buttons = container.querySelectorAll('.option-btn');
    var selected = studySelections[qId] || [];

    buttons.forEach(function(btn, i) {
      btn.style.pointerEvents = 'none';
      var isCorrect = q.correctAnswers.indexOf(i) > -1;
      var isSelected = selected.indexOf(i) > -1;

      if (isCorrect) {
        btn.classList.add('correct');
        btn.classList.remove('selected');
      }
      if (isSelected && !isCorrect) {
        btn.classList.add('incorrect');
        btn.classList.remove('selected');
      }
    });

    // Show explanation
    document.getElementById('study-expl-' + qId).classList.add('visible');

    // Hide the button
    document.getElementById('show-btn-' + qId).style.display = 'none';
  };

  // ---- Utility ----
  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

})();
