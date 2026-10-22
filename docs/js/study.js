/* ========================================
   Study Mode JavaScript
   ======================================== */

(function() {
  'use strict';

  var currentFilter = 'all';

  // Per-track configuration is provided by the page before this script loads.
  // Falling back to the GENL bank keeps existing pages working unchanged.
  function getConfig() {
    return window.TRACK_CONFIG || {};
  }

  function getDb() {
    var globalName = getConfig().bankGlobal || 'QUESTIONS_DB';
    return window[globalName];
  }

  document.addEventListener('DOMContentLoaded', function() {
    buildTopicFilter();
    renderQuestions('all');
    renderSourceNotice();
  });

  // ---- Tab Switching ----
  window.showTab = function(tab, btn) {
    var tabs = document.querySelectorAll('.study-tab');
    tabs.forEach(function(t) {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });

    // Prefer the explicit button reference. The fallback keeps older inline
    // handlers working in browsers that still expose window.event.
    var activeButton = btn || (window.event && window.event.target);
    if (activeButton) {
      activeButton.classList.add('active');
      activeButton.setAttribute('aria-selected', 'true');
    }

    document.querySelectorAll('.study-panel').forEach(function(p) {
      p.classList.remove('active');
    });
    document.getElementById('tab-' + tab).classList.add('active');
  };

  // ---- Topic Filter ----
  function buildTopicFilter() {
    var container = document.getElementById('topicFilter');
    var db = getDb();
    if (!container || !db) return;

    var topics = db.metadata.topics;
    var html = '<button class="topic-btn active" onclick="filterByTopic(\'all\', this)">All (' + db.questions.length + ')</button>';

    // Count questions per topic
    var counts = {};
    db.questions.forEach(function(q) {
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
    var db = getDb();
    if (!container || !db) return;

    var questions = db.questions;
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

  // ---- Attribution ----
  // The combined AIIO bank carries a sources array. Render it where the page
  // provides a sourceNotice element. GENL pages have no sources array and are
  // left unchanged.
  function renderSourceNotice() {
    var container = document.getElementById('sourceNotice');
    var db = getDb();
    if (!container || !db || !Array.isArray(db.metadata.sources)) return;

    var html = '<strong>Question sources</strong>';
    db.metadata.sources.forEach(function(source) {
      html += '<p>' + escapeHtml(source.title) + ' by ';

      if (source.url) {
        html += '<a href="' + escapeHtml(source.url) + '" target="_blank" rel="noopener">' +
          escapeHtml(source.author) + '</a>';
      } else {
        html += escapeHtml(source.author);
      }

      if (source.copyright) {
        html += '. ' + escapeHtml(source.copyright);
      }

      if (source.licenseUrl) {
        html += '. Licensed under <a href="' + escapeHtml(source.licenseUrl) +
          '" target="_blank" rel="noopener">' + escapeHtml(source.license) + '</a>';
      } else if (source.license) {
        html += '. ' + escapeHtml(source.license);
      }

      if (source.changes) {
        html += '. Changes: ' + escapeHtml(source.changes);
      }
      html += '.</p>';
    });

    container.innerHTML = html;
    container.classList.remove('hidden');
  }

  // ---- Study Interaction ----
  var studySelections = {};

  window.selectStudyOption = function(qId, optIndex, btn) {
    var db = getDb();
    if (!db) return;
    var q = db.questions.find(function(x) { return x.id === qId; });
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
    var db = getDb();
    if (!db) return;
    var q = db.questions.find(function(x) { return x.id === qId; });
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
