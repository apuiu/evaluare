// ============================================================
//  FIZICĂ - CLASA A VI-A  |  Schelet – conținut de completat
// ============================================================

const phFizica6 = (titlu) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">În pregătire</div>
    <p>Conținutul lecției <strong>${titlu}</strong> va fi adăugat în curând.</p>
  </div>
</div>`;

const phChFizica6 = (id, title) => ({ id, title, content: phFizica6(title) });

const fizica6Data = {
  title: "Fizică – Clasa a VI-a",
  subtitle: "Mărimi fizice, mișcare, forțe, presiune, temperatura",
  subject: "fizica",
  grade: 6,
  sections: [
    {
      id: "u1-marimi-fizice",
      title: "Unitatea 1 – Mărimi fizice și instrumente de măsură",
      subtitle: "Conținut în pregătire",
      icon: "📐",
      chapters: [
        phChFizica6("u1-l1-marimi-unitati",      "L1: Mărimi fizice și unități de măsură"),
        phChFizica6("u1-l2-instrumente-masura",   "L2: Instrumente de măsură și erori"),
        phChFizica6("u1-l3-stari-agregare",        "L3: Stările de agregare ale materiei"),
        phChFizica6("u1-recap",                    "Recapitulare și evaluare – Unitatea 1")
      ]
    },
    {
      id: "u2-miscare-repaus",
      title: "Unitatea 2 – Mișcare și repaus",
      subtitle: "Conținut în pregătire",
      icon: "🏃",
      chapters: [
        phChFizica6("u2-l1-miscare-repaus",       "L1: Mișcarea și repausul. Sisteme de referință"),
        phChFizica6("u2-l2-viteza-medie",          "L2: Viteza medie"),
        phChFizica6("u2-l3-miscare-uniforma",      "L3: Mișcarea rectilinie uniformă"),
        phChFizica6("u2-recap",                    "Recapitulare și evaluare – Unitatea 2")
      ]
    },
    {
      id: "u3-forte",
      title: "Unitatea 3 – Forțe",
      subtitle: "Conținut în pregătire",
      icon: "💪",
      chapters: [
        phChFizica6("u3-l1-forta",                "L1: Forța – efect, reprezentare, măsurare"),
        phChFizica6("u3-l2-greutate-masa",         "L2: Greutatea și masa. Legea atracției gravitaționale"),
        phChFizica6("u3-l3-forte-echilibru",       "L3: Forțe în echilibru"),
        phChFizica6("u3-recap",                    "Recapitulare și evaluare – Unitatea 3")
      ]
    },
    {
      id: "u4-presiunea",
      title: "Unitatea 4 – Presiunea",
      subtitle: "Conținut în pregătire",
      icon: "🌊",
      chapters: [
        phChFizica6("u4-l1-presiunea",             "L1: Presiunea. Formula și unități de măsură"),
        phChFizica6("u4-l2-pascal",                "L2: Presiunea în lichide. Legea lui Pascal"),
        phChFizica6("u4-l3-arhimede",              "L3: Presiunea atmosferică. Legea lui Arhimede"),
        phChFizica6("u4-recap",                    "Recapitulare și evaluare – Unitatea 4")
      ]
    },
    {
      id: "u5-caldura-temperatura",
      title: "Unitatea 5 – Căldură și temperatură",
      subtitle: "Conținut în pregătire",
      icon: "🌡️",
      chapters: [
        phChFizica6("u5-l1-temperatura",           "L1: Temperatura și măsurarea ei"),
        phChFizica6("u5-l2-caldura",               "L2: Căldura – transfer termic"),
        phChFizica6("u5-l3-dilatare",              "L3: Dilatarea termică a corpurilor"),
        phChFizica6("u5-recap",                    "Recapitulare și evaluare – Unitatea 5")
      ]
    }
  ]
};
