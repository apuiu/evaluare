// ============================================================
//  APP.JS – Evaluare Nationala (taburi + tree sidebar)
// ============================================================

const DATA = {
  romana:    {
    5: typeof romana5Data !== 'undefined' ? romana5Data : null,
    6: typeof romana6Data !== 'undefined' ? romana6Data : null,
    7: typeof romana7Data !== 'undefined' ? romana7Data : null,
    8: typeof romana8Data !== 'undefined' ? romana8Data : null
  },
  matematica:{
    5: typeof matematica5Data !== 'undefined' ? matematica5Data : null,
    6: typeof matematica6Data !== 'undefined' ? matematica6Data : null,
    7: typeof matematica7Data !== 'undefined' ? matematica7Data : null,
    8: typeof matematica8Data !== 'undefined' ? matematica8Data : null
  },
  fizica: {
    5: null,
    6: typeof fizica6Data !== 'undefined' ? fizica6Data : null,
    7: typeof fizica7Data !== 'undefined' ? fizica7Data : null,
    8: typeof fizica8Data !== 'undefined' ? fizica8Data : null
  },
  chimie: {
    5: null,
    6: null,
    7: typeof chimie7Data !== 'undefined' ? chimie7Data : null,
    8: null
  }
};

const GRADE_LABELS = {
  5: 'Clasa a V-a',
  6: 'Clasa a VI-a',
  7: 'Clasa a VII-a',
  8: 'Clasa a VIII-a'
};

const state = {
  tab: 'romana',
  grade: null,
  sectionId: null,
  chapterId: null,
  openGrades:   new Set(),
  openSections: new Set()
};

// ─── INIT ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  switchTab('romana');
  document.getElementById('search-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') doSearch(e.target.value.trim());
  });
});

// ─── TAB SWITCH ──────────────────────────────────────────────
function switchTab(tab) {
  state.tab      = tab;
  state.grade    = null;
  state.sectionId= null;
  state.chapterId= null;
  state.openGrades.clear();
  state.openSections.clear();

  document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
  document.getElementById('tab-' + tab).classList.add('active');
  document.body.dataset.tab = tab;

  buildSidebar();
  renderWelcome();
}

// ─── SIDEBAR TREE ─────────────────────────────────────────────
function buildSidebar() {
  var html = '';
  for (var g = 5; g <= 8; g++) { html += buildGradeNode(g); }
  document.getElementById('sidebar').innerHTML = html;
}

function buildGradeNode(grade) {
  var data    = DATA[state.tab][grade];
  var hasData = !!(data && data.sections);
  var isOpen  = state.openGrades.has(grade);
  var body    = '';

  if (hasData && isOpen) {
    var secHtml = '';
    for (var i = 0; i < data.sections.length; i++) {
      secHtml += buildSectionNode(grade, data.sections[i]);
    }
    body = '<div class="tree-grade-body">' + secHtml + '</div>';
  }

  var onclick = hasData ? 'onclick="toggleGrade(' + grade + ')"' : '';
  var arrow   = hasData ? (isOpen ? '&#9660;' : '&#9654;') : '&#128274;';
  var soon    = !hasData ? '<span class="tree-soon">In curand</span>' : '';

  return '<div class="tree-grade-wrap">' +
    '<div class="tree-grade-row' + (!hasData ? ' locked' : '') + '" ' + onclick + '>' +
      '<span class="tree-arrow">' + arrow + '</span>' +
      '<span class="tree-grade-label">' + GRADE_LABELS[grade] + '</span>' +
      soon +
    '</div>' +
    body +
  '</div>';
}

function buildSectionNode(grade, sec) {
  var key    = grade + '-' + sec.id;
  var isOpen = state.openSections.has(key);
  var body   = '';

  if (isOpen) {
    var chHtml = '';
    for (var i = 0; i < sec.chapters.length; i++) {
      chHtml += buildChapterNode(grade, sec, sec.chapters[i]);
    }
    body = '<div class="tree-section-body">' + chHtml + '</div>';
  }

  var arrow = isOpen ? '&#9660;' : '&#9654;';

  return '<div class="tree-section-wrap">' +
    '<div class="tree-section-row' + (isOpen ? ' open' : '') + '" ' +
      'onclick="toggleSection(' + grade + ',\'' + sec.id + '\')">' +
      '<span class="tree-arrow">' + arrow + '</span>' +
      '<span class="tree-section-icon">' + sec.icon + '</span>' +
      '<span>' + sec.title + '</span>' +
    '</div>' +
    body +
  '</div>';
}

function buildChapterNode(grade, sec, ch) {
  var isActive = (state.grade === grade && state.sectionId === sec.id && state.chapterId === ch.id);
  return '<div class="tree-chapter-row' + (isActive ? ' active' : '') + '" ' +
    'onclick="selectChapter(' + grade + ',\'' + sec.id + '\',\'' + ch.id + '\')">' +
    ch.title +
    '</div>';
}

// ─── TREE INTERACTIONS ────────────────────────────────────────
function toggleGrade(grade) {
  if (state.openGrades.has(grade)) { state.openGrades.delete(grade); }
  else { state.openGrades.add(grade); }
  buildSidebar();
}

function toggleSection(grade, sectionId) {
  var key = grade + '-' + sectionId;
  if (state.openSections.has(key)) { state.openSections.delete(key); }
  else { state.openSections.add(key); }
  buildSidebar();
}

function selectChapter(grade, sectionId, chapterId) {
  state.grade     = grade;
  state.sectionId = sectionId;
  state.chapterId = chapterId;
  state.openGrades.add(grade);
  state.openSections.add(grade + '-' + sectionId);
  buildSidebar();
  renderChapter();
}

// ─── RENDER: WELCOME ──────────────────────────────────────────
function renderWelcome() {
  var isRo  = state.tab === 'romana';
  var icon  = isRo ? '&#128221;' : '&#128208;';
  var title = isRo ? 'Limba Romana' : 'Matematica';
  var available = [];
  for (var g = 5; g <= 8; g++) {
    if (DATA[state.tab][g] && DATA[state.tab][g].sections) available.push(GRADE_LABELS[g]);
  }
  var hint = available.length
    ? '&#9989; Disponibil acum: ' + available.join(', ') + '.'
    : '&#9203; Continutul pentru ' + title + ' va fi disponibil in curand.';

  document.getElementById('content').innerHTML =
    '<div class="welcome-screen">' +
      '<div class="welcome-icon">' + icon + '</div>' +
      '<h1>' + title + '</h1>' +
      '<p>Selecteaza o clasa din meniu pentru a accesa teoria.</p>' +
      '<p class="welcome-hint">' + hint + '</p>' +
    '</div>';
}

// ─── RENDER: CHAPTER ──────────────────────────────────────────
function renderChapter() {
  var tab       = state.tab;
  var grade     = state.grade;
  var sectionId = state.sectionId;
  var chapterId = state.chapterId;
  var data      = DATA[tab][grade];

  var section = null;
  for (var i = 0; i < data.sections.length; i++) {
    if (data.sections[i].id === sectionId) { section = data.sections[i]; break; }
  }

  var chapter = null;
  for (var j = 0; j < section.chapters.length; j++) {
    if (section.chapters[j].id === chapterId) { chapter = section.chapters[j]; break; }
  }

  var tabLabel = tab === 'romana' ? 'Romana' : 'Matematica';

  // Flat list of all chapters for prev/next
  var flat = [];
  for (var s = 0; s < data.sections.length; s++) {
    for (var c = 0; c < data.sections[s].chapters.length; c++) {
      flat.push({ sectionId: data.sections[s].id, chapterId: data.sections[s].chapters[c].id, title: data.sections[s].chapters[c].title });
    }
  }
  var idx  = -1;
  for (var k = 0; k < flat.length; k++) {
    if (flat[k].sectionId === sectionId && flat[k].chapterId === chapterId) { idx = k; break; }
  }
  var prev = idx > 0 ? flat[idx - 1] : null;
  var next = idx < flat.length - 1 ? flat[idx + 1] : null;

  var prevBtn = prev
    ? '<button class="btn-nav btn-prev" onclick="selectChapter(' + grade + ',\'' + prev.sectionId + '\',\'' + prev.chapterId + '\')">&#8592; ' + prev.title + '</button>'
    : '<div></div>';
  var nextBtn = next
    ? '<button class="btn-nav btn-next" onclick="selectChapter(' + grade + ',\'' + next.sectionId + '\',\'' + next.chapterId + '\')">' + next.title + ' &#8594;</button>'
    : '<div></div>';

  document.getElementById('content').innerHTML =
    '<div class="chapter-view">' +
      '<nav class="breadcrumb">' +
        '<span class="bc-link" onclick="switchTab(\'' + tab + '\')">' + tabLabel + '</span>' +
        '<span class="bc-sep">&#8250;</span>' +
        '<span class="bc-link" onclick="toggleGrade(' + grade + ')">' + GRADE_LABELS[grade] + '</span>' +
        '<span class="bc-sep">&#8250;</span>' +
        '<span class="bc-link" onclick="toggleSection(' + grade + ',\'' + sectionId + '\')">' + section.title + '</span>' +
        '<span class="bc-sep">&#8250;</span>' +
        '<span class="bc-current">' + chapter.title + '</span>' +
      '</nav>' +

      '<div class="chapter-header">' +
        '<span class="chapter-badge">' + section.icon + ' ' + section.title + '</span>' +
        '<h1>' + chapter.title + '</h1>' +
      '</div>' +

      '<div class="chapter-body">' +
        chapter.content +
      '</div>' +

      '<div class="chapter-footer">' +
        prevBtn + nextBtn +
      '</div>' +
    '</div>';

  // Render KaTeX formulas if auto-render is available
  if (typeof renderMathInElement !== 'undefined') {
    var el = document.getElementById('content');
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true  },
        { left: '\\[', right: '\\]', display: true  },
        { left: '$',  right: '$',  display: false },
        { left: '\\(', right: '\\)', display: false }
      ],
      throwOnError: false
    });
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── SEARCH ───────────────────────────────────────────────────
function doSearch(query) {
  if (!query) return;
  var q       = query.toLowerCase();
  var results = [];

  var subjects = Object.keys(DATA);
  for (var si = 0; si < subjects.length; si++) {
    var subject = subjects[si];
    var grades  = Object.keys(DATA[subject]);
    for (var gi = 0; gi < grades.length; gi++) {
      var grade = parseInt(grades[gi]);
      var data  = DATA[subject][grade];
      if (!data) continue;
      for (var se = 0; se < data.sections.length; se++) {
        var sec = data.sections[se];
        for (var ch = 0; ch < sec.chapters.length; ch++) {
          var chapter = sec.chapters[ch];
          if ((chapter.title + chapter.content).toLowerCase().indexOf(q) !== -1) {
            results.push({ subject: subject, grade: grade, sectionId: sec.id, chapterId: chapter.id, chTitle: chapter.title, secTitle: sec.title });
          }
        }
      }
    }
  }

  var rows = '';
  for (var r = 0; r < results.length; r++) {
    var res = results[r];
    rows += '<div class="search-result" onclick="switchTab(\'' + res.subject + '\');selectChapter(' + res.grade + ',\'' + res.sectionId + '\',\'' + res.chapterId + '\')">' +
      '<strong>' + esc(res.chTitle) + '</strong>' +
      '<span>' + (res.subject === 'romana' ? 'Romana' : 'Matematica') + ' &middot; ' + GRADE_LABELS[res.grade] + ' &middot; ' + esc(res.secTitle) + '</span>' +
    '</div>';
  }

  document.getElementById('content').innerHTML =
    '<div class="chapter-view">' +
      '<h2 style="margin-bottom:20px;color:#1a2744">&#128269; &ldquo;' + esc(query) + '&rdquo; &mdash; ' + results.length + ' rezultat' + (results.length !== 1 ? 'e' : '') + '</h2>' +
      (results.length === 0 ? '<p style="color:#888">Niciun rezultat gasit.</p>' : rows) +
    '</div>';
}

function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
