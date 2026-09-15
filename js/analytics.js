// ============================================================
//  ANALYTICS.JS – contorizare locală a vizitelor unice/zi
//  Notă: datele sunt stocate doar în acest browser (localStorage),
//  nu există un backend care să agrege vizitele tuturor utilizatorilor.
// ============================================================

(function () {
  const STORAGE_KEY = 'en_visits_v1';
  const LAST_DATE_KEY = 'en_visits_last_date';
  const MAX_DAYS = 400; // păstrăm cel mult ~13 luni de istoric

  function todayKey() {
    return new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
  }

  function loadData() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function pruneOldEntries(data) {
    const keys = Object.keys(data).sort();
    if (keys.length > MAX_DAYS) {
      keys.slice(0, keys.length - MAX_DAYS).forEach((k) => delete data[k]);
    }
    return data;
  }

  const dateKey = todayKey();
  const data = loadData();

  // numărăm o singură vizită per zi per browser (evită umflarea la refresh)
  if (localStorage.getItem(LAST_DATE_KEY) !== dateKey) {
    data[dateKey] = (data[dateKey] || 0) + 1;
    localStorage.setItem(LAST_DATE_KEY, dateKey);
  } else if (!(dateKey in data)) {
    data[dateKey] = 0;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(pruneOldEntries(data)));
})();
