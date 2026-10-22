/* ========================================
   Study Mode JavaScript
   ======================================== */

(function() {
  'use strict';

  // Active list state. The topic and search term are combined with AND.
  var currentTopic = 'all';
  var currentSearch = '';
  var studySelections = {};

  // Per-track configuration is provided by the page before this script loads.
  // Falling back to the GENL bank keeps existing pages working unchanged.
  function getConfig() {
    return window.TRACK_CONFIG || {};
  }

  function getDb() {
    var globalName = getConfig().bankGlobal || 'QUESTIONS_DB';
    return window[globalName];
  }

  function getQuestions(db) {
    return db && Array.isArray(db.questions) ? db.questions : [];
  }

  function getTopics(db) {
    if (db && db.metadata && Array.isArray(db.metadata.topics)) {
      return db.metadata.topics;
    }

    // Defensive fallback for banks that do not publish a topic list.
    var seen = {};
    return getQuestions(db).reduce(function(topics, question) {
      if (question.topic && !seen[question.topic]) {
        seen[question.topic] = true;
        topics.push(question.topic);
      }
      return topics;
    }, []);
  }

  document.addEventListener('DOMContentLoaded', function() {
    updateStudySummary();
    buildCheatsheetNav();
    buildTopicFilter();
    bindStudyControls();
    renderQuestions();
    renderSourceNotice();
  });

  // ---- Study Summary ----
  function updateStudySummary() {
    var db = getDb();
    var questions = getQuestions(db);
    var topics = getTopics(db);

    setText('studyQuestionCount', questions.length);
    setText('studyTopicCount', topics.length);
    setText('studyTabQuestionCount', questions.length);
  }

  function setText(id, value) {
    var element = document.getElementById(id);
    if (element) element.textContent = String(value);
  }

  // ---- Tab Switching ----
  window.showTab = function(tab, btn) {
    var activeButton = btn || document.querySelector('.study-tab[data-tab="' + tab + '"]');
    var activePanel = document.getElementById('tab-' + tab);
    if (!activeButton || !activePanel) return;

    document.querySelectorAll('.study-tab').forEach(function(t) {
      var isActive = t === activeButton;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      t.tabIndex = isActive ? 0 : -1;
    });

    document.querySelectorAll('.study-panel').forEach(function(panel) {
      var isActive = panel === activePanel;
      panel.classList.toggle('active', isActive);
      if (isActive) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  };

  function handleTabKeydown(event) {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('.study-tab'));
    var currentIndex = tabs.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    var nextIndex = null;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    tabs[nextIndex].focus();
    window.showTab(tabs[nextIndex].dataset.tab, tabs[nextIndex]);
  }

  // ---- Cheat Sheet Section Navigation ----
  // The cheat sheet is long enough that a generated jump bar is more reliable
  // than hand-maintained anchors as sections are added or renamed.
  function buildCheatsheetNav() {
    var nav = document.getElementById('cheatsheetNav');
    var panel = document.getElementById('tab-cheatsheet');
    if (!nav || !panel) return;

    // The browser cannot resolve a section hash until this function creates the
    // IDs. Remove the hash first so the browser's own fragment scrolling cannot
    // race the deterministic restore below, then put the hash back afterwards.
    var deepLinkHash = '';
    if (window.location.hash.indexOf('#cheatsheet-section-') === 0) {
      deepLinkHash = window.location.hash;
      replaceHistoryUrl(window.location.pathname + window.location.search);
    }

    var headings = panel.querySelectorAll('.ref-section h3');
    var fragment = document.createDocumentFragment();

    headings.forEach(function(heading, index) {
      var section = heading.closest('.ref-section');
      if (!section) return;

      var sectionId = section.id || 'cheatsheet-section-' + (index + 1) + '-' + slugify(heading.textContent);
      sectionId = uniqueId(sectionId, section);
      section.id = sectionId;

      var link = document.createElement('a');
      link.href = '#' + sectionId;
      link.textContent = heading.textContent.trim();
      fragment.appendChild(link);
    });

    nav.appendChild(fragment);
    nav.hidden = headings.length < 2;

    if (deepLinkHash) {
      var targetSection = document.getElementById(deepLinkHash.slice(1));
      if (targetSection) {
        // Restore deep links instantly. A smooth scroll from the top of a long
        // cheat sheet delays the useful content by several seconds.
        targetSection.scrollIntoView({ behavior: 'instant', block: 'start' });
      }

      replaceHistoryUrl(window.location.pathname + window.location.search + deepLinkHash);
    }
  }

  function slugify(text) {
    return text.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section';
  }

  function uniqueId(candidate, element) {
    var id = candidate;
    var suffix = 2;

    while (document.getElementById(id) && document.getElementById(id) !== element) {
      id = candidate + '-' + suffix;
      suffix += 1;
    }

    return id;
  }

  // ---- Topic Filter ----
  function buildTopicFilter() {
    var container = document.getElementById('topicFilter');
    var db = getDb();
    if (!container || !db) return;

    var counts = {};
    getQuestions(db).forEach(function(question) {
      counts[question.topic] = (counts[question.topic] || 0) + 1;
    });

    container.innerHTML = '';
    container.appendChild(createTopicButton('all', 'All', getQuestions(db).length));

    getTopics(db).forEach(function(topic) {
      container.appendChild(createTopicButton(topic, topic, counts[topic] || 0));
    });
  }

  function createTopicButton(topic, label, count) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-btn' + (topic === currentTopic ? ' active' : '');
    button.dataset.topic = topic;
    button.setAttribute('aria-pressed', topic === currentTopic ? 'true' : 'false');
    button.textContent = label + ' (' + count + ')';
    button.addEventListener('click', function() {
      setTopicFilter(topic);
    });
    return button;
  }

  function setTopicFilter(topic) {
    currentTopic = topic;

    document.querySelectorAll('.topic-filter .topic-btn').forEach(function(candidate) {
      var isActive = candidate.dataset.topic === topic;
      candidate.classList.toggle('active', isActive);
      candidate.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    renderQuestions();
  }

  // Kept for compatibility with any older inline handlers on cached pages.
  window.filterByTopic = function(topic) {
    setTopicFilter(topic);
  };

  function clearStudyFilters() {
    currentTopic = 'all';
    currentSearch = '';

    var searchInput = document.getElementById('questionSearch');
    if (searchInput) searchInput.value = '';

    document.querySelectorAll('.topic-filter .topic-btn').forEach(function(button) {
      var isActive = button.dataset.topic === 'all';
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    renderQuestions();

    if (searchInput) searchInput.focus();
  }

  window.clearStudyFilters = clearStudyFilters;

  // ---- Render Questions ----
  function renderQuestions() {
    var container = document.getElementById('questionList');
    var db = getDb();
    if (!container || !db) return;

    var allQuestions = getQuestions(db);
    var visibleQuestions = allQuestions.filter(function(question) {
      var topicMatches = currentTopic === 'all' || question.topic === currentTopic;
      return topicMatches && matchesSearch(question, currentSearch);
    });

    // A filter change resets interaction state so a re-rendered card cannot
    // reveal an answer using a selection the user can no longer see.
    studySelections = {};

    var html = '';
    visibleQuestions.forEach(function(question) {
      html += renderQuestionCard(question);
    });

    if (visibleQuestions.length === 0) {
      html = '<div class="study-empty">' +
        '<h3>No questions match your filters</h3>' +
        '<p>Try a different search term or clear the topic filter.</p>' +
        '<button class="btn btn-secondary btn-sm" type="button" data-clear-filters>Clear filters</button>' +
        '</div>';
    }

    container.innerHTML = html;
    updateResultCount(visibleQuestions.length, allQuestions.length);
    updateClearButton();
  }

  function matchesSearch(question, searchTerm) {
    if (!searchTerm) return true;

    var searchable = [
      question.topic,
      question.question,
      Array.isArray(question.options) ? question.options.join(' ') : '',
      question.explanation
    ].join(' ').toLowerCase();

    return searchable.indexOf(searchTerm) !== -1;
  }

  function renderQuestionCard(question) {
    var letters = ['A', 'B', 'C', 'D', 'E'];
    var multiSelectBadge = question.multiSelect
      ? '<span class="multi-select-badge">Select ' + question.correctAnswers.length + '</span>'
      : '';

    var html = '<div class="question-card" id="study-q-' + question.id + '" role="group" aria-labelledby="study-q-text-' + question.id + '">';
    html += '  <div class="question-header">';
    html += '    <span class="question-number">Q' + question.id + '</span>';
    html += '    <span class="question-topic">' + escapeHtml(question.topic) + '</span>';
    html += '  </div>';
    html += '  <h3 class="question-text" id="study-q-text-' + question.id + '">' + escapeHtml(question.question) + multiSelectBadge + '</h3>';
    html += '  <div class="options-list" id="study-opts-' + question.id + '">';

    question.options.forEach(function(option, index) {
      html += '<button class="option-btn" type="button" aria-pressed="false" data-qid="' + question.id + '" data-index="' + index + '">';
      html += '  <span class="option-letter">' + letters[index] + '</span>';
      html += '  <span class="option-text">' + escapeHtml(option) + '</span>';
      html += '</button>';
    });

    html += '  </div>';
    html += '  <button class="show-answer-btn" id="show-btn-' + question.id + '" type="button" aria-expanded="false" aria-controls="study-expl-' + question.id + '" data-qid="' + question.id + '">Show Answer</button>';
    html += '  <div class="explanation" id="study-expl-' + question.id + '" role="region" aria-label="Explanation" aria-live="polite">';
    html += '    <div class="explanation-label">Explanation</div>';
    html += '    <p>' + escapeHtml(question.explanation) + '</p>';
    html += '  </div>';
    html += '</div>';

    return html;
  }

  function updateResultCount(visibleCount, totalCount) {
    var resultCount = document.getElementById('questionResultCount');
    if (!resultCount) return;

    var text;
    if (visibleCount === totalCount) {
      text = 'Showing all ' + totalCount + ' question' + (totalCount === 1 ? '' : 's');
    } else {
      text = 'Showing ' + visibleCount + ' of ' + totalCount + ' questions';
    }

    resultCount.textContent = text;
  }

  function updateClearButton() {
    var clearButton = document.getElementById('clearFilters');
    if (!clearButton) return;
    clearButton.disabled = currentTopic === 'all' && currentSearch === '';
  }

  // ---- Study Interaction ----
  window.selectStudyOption = function(qId, optIndex, button) {
    var db = getDb();
    if (!db || !button || button.disabled) return;

    var question = getQuestions(db).find(function(candidate) {
      return candidate.id === qId;
    });
    if (!question) return;

    if (question.multiSelect) {
      if (!studySelections[qId]) studySelections[qId] = [];

      var selectedIndex = studySelections[qId].indexOf(optIndex);
      if (selectedIndex > -1) {
        studySelections[qId].splice(selectedIndex, 1);
        button.classList.remove('selected');
        button.setAttribute('aria-pressed', 'false');
      } else {
        studySelections[qId].push(optIndex);
        button.classList.add('selected');
        button.setAttribute('aria-pressed', 'true');
      }
    } else {
      var optionsContainer = document.getElementById('study-opts-' + qId);
      if (!optionsContainer) return;

      optionsContainer.querySelectorAll('.option-btn').forEach(function(candidate) {
        candidate.classList.remove('selected');
        candidate.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('selected');
      button.setAttribute('aria-pressed', 'true');
      studySelections[qId] = [optIndex];
    }
  };

  window.showStudyAnswer = function(qId) {
    var db = getDb();
    if (!db) return;

    var question = getQuestions(db).find(function(candidate) {
      return candidate.id === qId;
    });
    if (!question) return;

    var card = document.getElementById('study-q-' + qId);
    if (!card || card.dataset.answered === 'true') return;
    card.dataset.answered = 'true';

    var optionsContainer = document.getElementById('study-opts-' + qId);
    var explanation = document.getElementById('study-expl-' + qId);
    var showButton = document.getElementById('show-btn-' + qId);
    if (!optionsContainer || !explanation || !showButton) return;

    var selected = studySelections[qId] || [];

    optionsContainer.querySelectorAll('.option-btn').forEach(function(button, index) {
      var isCorrect = question.correctAnswers.indexOf(index) > -1;
      var isSelected = selected.indexOf(index) > -1;
      var statusText = '';

      button.disabled = true;
      button.classList.remove('selected');
      button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');

      if (isCorrect) {
        button.classList.add('correct');
        statusText = isSelected ? 'Correct answer, selected' : 'Correct answer';
      } else if (isSelected) {
        button.classList.add('incorrect');
        statusText = 'Incorrect answer, selected';
      }

      // The visual colors alone do not communicate correctness to screen
      // readers, so append a hidden status to the button's accessible name.
      if (statusText) appendOptionStatus(button, statusText);
    });

    explanation.classList.add('visible');

    // Keep the control focusable after reveal so keyboard users do not lose
    // their place. The card-level answered flag prevents repeated activation.
    showButton.setAttribute('aria-disabled', 'true');
    showButton.textContent = 'Answer shown';
    showButton.setAttribute('aria-expanded', 'true');
  };

  function appendOptionStatus(button, text) {
    var status = document.createElement('span');
    status.className = 'sr-only option-status';
    status.textContent = ' ' + text;
    button.appendChild(status);
  }

  // ---- Control Binding ----
  function bindStudyControls() {
    var searchInput = document.getElementById('questionSearch');
    if (searchInput) {
      searchInput.addEventListener('input', function() {
        currentSearch = searchInput.value.trim().toLowerCase();
        renderQuestions();
      });
    }

    var clearButton = document.getElementById('clearFilters');
    if (clearButton) {
      clearButton.addEventListener('click', clearStudyFilters);
    }

    var questionList = document.getElementById('questionList');
    if (questionList) {
      questionList.addEventListener('click', handleQuestionListClick);
    }

    var tabs = document.querySelector('.study-tabs');
    if (tabs) {
      tabs.addEventListener('keydown', handleTabKeydown);
      tabs.querySelectorAll('.study-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
          window.showTab(tab.dataset.tab, tab);
        });
      });
    }
  }

  function handleQuestionListClick(event) {
    var target = event.target;
    if (!target || typeof target.closest !== 'function') return;

    var optionButton = target.closest('.option-btn');
    if (optionButton) {
      window.selectStudyOption(
        parseInt(optionButton.dataset.qid, 10),
        parseInt(optionButton.dataset.index, 10),
        optionButton
      );
      return;
    }

    var answerButton = target.closest('.show-answer-btn');
    if (answerButton) {
      window.showStudyAnswer(parseInt(answerButton.dataset.qid, 10));
      return;
    }

    if (target.closest('[data-clear-filters]')) {
      clearStudyFilters();
    }
  }

  // ---- Attribution ----
  // The combined AIIO bank carries a sources array. Render it where the page
  // provides a sourceNotice element. GENL uses a static notice in the page.
  function renderSourceNotice() {
    var container = document.getElementById('sourceNotice');
    var db = getDb();
    if (!container || !db || !db.metadata || !Array.isArray(db.metadata.sources)) return;

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
        html += '. ' + escapeHtml(trimTerminalPunctuation(source.copyright));
      }

      if (source.licenseUrl) {
        html += '. Licensed under <a href="' + escapeHtml(source.licenseUrl) +
          '" target="_blank" rel="noopener">' + escapeHtml(trimTerminalPunctuation(source.license)) + '</a>';
      } else if (source.license) {
        html += '. ' + escapeHtml(trimTerminalPunctuation(source.license));
      }

      if (source.changes) {
        html += '. Changes: ' + escapeHtml(trimTerminalPunctuation(source.changes));
      }
      html += '.</p>';
    });

    container.innerHTML = html;
    container.classList.remove('hidden');
  }

  // ---- Utility ----
  function replaceHistoryUrl(url) {
    if (!window.history || !window.history.replaceState) return;

    // Some origins, including direct file:// use, reject replaceState. The
    // scroll restore still works without rewriting the address bar.
    try {
      window.history.replaceState(null, '', url);
    } catch (error) {
      // Ignore history restrictions and keep the page functional.
    }
  }

  function trimTerminalPunctuation(text) {
    return String(text).replace(/[.!?]+$/, '');
  }

  function escapeHtml(text) {
    if (text === null || typeof text === 'undefined') return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

})();
