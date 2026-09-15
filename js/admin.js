// ============================================================
//  ADMIN.JS – citește statisticile locale de vizite și randează
//  cardurile + graficele (bare) din admin.html.
//  Sursă date: localStorage("en_visits_v1"), populat de js/analytics.js
//  la fiecare încărcare a index.html. Vezi nota din admin.html pentru
//  limitările acestei abordări (date per-dispozitiv, nu globale).
// ============================================================

(function () {
  const STORAGE_KEY = 'en_visits_v1';
  const MONTH_LABELS = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function loadData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function fmtDateShort(dateKey) {
    const [, m, d] = dateKey.split('-');
    return `${d}.${m}`;
  }

  function last30Days(data) {
    const out = [];
    const now = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      out.push({ key, label: fmtDateShort(key), value: data[key] || 0 });
    }
    return out;
  }

  function last12Months(data) {
    const totals = {}; // "YYYY-MM" -> sum
    Object.keys(data).forEach((dateKey) => {
      const monthKey = dateKey.slice(0, 7);
      totals[monthKey] = (totals[monthKey] || 0) + data[dateKey];
    });
    const out = [];
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      out.push({ key, label: `${MONTH_LABELS[d.getMonth()]} ${String(d.getFullYear()).slice(2)}`, value: totals[key] || 0 });
    }
    return out;
  }

  function renderBarChart(containerId, series) {
    const container = document.getElementById(containerId);
    const maxVal = Math.max(1, ...series.map((s) => s.value));
    const barGap = 6;
    const barWidth = Math.max(10, Math.min(28, Math.floor(600 / series.length) - barGap));
    const chartHeight = 160;
    const width = series.length * (barWidth + barGap) + barGap;
    const height = chartHeight + 40;

    if (series.every((s) => s.value === 0)) {
      container.innerHTML = '<p class="admin-empty">Nu există încă vizite înregistrate în această perioadă.</p>';
      return;
    }

    let bars = '';
    series.forEach((s, i) => {
      const x = barGap + i * (barWidth + barGap);
      const barHeight = Math.round((s.value / maxVal) * (chartHeight - 20));
      const y = chartHeight - barHeight;
      bars += `
        <rect class="admin-bar" x="${x}" y="${y}" width="${barWidth}" height="${Math.max(barHeight, s.value > 0 ? 2 : 0)}" rx="2">
          <title>${s.label}: ${s.value} vizite unice</title>
        </rect>
        ${s.value > 0 ? `<text class="admin-bar-value" x="${x + barWidth / 2}" y="${y - 4}" text-anchor="middle">${s.value}</text>` : ''}
        <text class="admin-bar-label" x="${x + barWidth / 2}" y="${chartHeight + 14}" text-anchor="middle">${s.label}</text>
      `;
    });

    container.innerHTML = `
      <svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
        <line class="admin-axis-line" x1="0" y1="${chartHeight}" x2="${width}" y2="${chartHeight}" />
        ${bars}
      </svg>
    `;
  }

  function init() {
    const data = loadData();
    const dayKeys = Object.keys(data);
    const total = dayKeys.reduce((sum, k) => sum + data[k], 0);
    const todayKey = new Date().toISOString().slice(0, 10);
    const monthPrefix = todayKey.slice(0, 7);
    const monthTotal = dayKeys.filter((k) => k.startsWith(monthPrefix)).reduce((sum, k) => sum + data[k], 0);

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-today').textContent = data[todayKey] || 0;
    document.getElementById('stat-month').textContent = monthTotal;

    renderBarChart('chart-days', last30Days(data));
    renderBarChart('chart-months', last12Months(data));
  }

  document.addEventListener('DOMContentLoaded', init);
})();
