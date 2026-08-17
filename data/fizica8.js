// ============================================================
//  FIZICĂ - CLASA A VIII-A  |  Schelet – conținut de completat
// ============================================================

const phFizica8 = (titlu) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">În pregătire</div>
    <p>Conținutul lecției <strong>${titlu}</strong> va fi adăugat în curând.</p>
  </div>
</div>`;

const phChFizica8 = (id, title) => ({ id, title, content: phFizica8(title) });

const fizica8Data = {
  title: "Fizică – Clasa a VIII-a",
  subtitle: "Mecanică, termodinamică, curent alternativ, optică ondulatorie",
  subject: "fizica",
  grade: 8,
  sections: [
    {
      id: "u1-mecanica",
      title: "Unitatea 1 – Mecanică",
      subtitle: "Conținut în pregătire",
      icon: "⚙️",
      chapters: [
        phChFizica8("u1-l1-lucrul-mecanic",        "L1: Lucrul mecanic. Puterea mecanică"),
        phChFizica8("u1-l2-energia-mecanica",       "L2: Energia cinetică și potențială"),
        phChFizica8("u1-l3-conservarea-energiei",   "L3: Legea conservării energiei mecanice"),
        phChFizica8("u1-l4-masini-simple",          "L4: Mașini simple. Randamentul"),
        phChFizica8("u1-recap",                     "Recapitulare și evaluare – Unitatea 1")
      ]
    },
    {
      id: "u2-termodinamica",
      title: "Unitatea 2 – Termodinamică",
      subtitle: "Conținut în pregătire",
      icon: "🌡️",
      chapters: [
        phChFizica8("u2-l1-caldura-specifica",      "L1: Căldura specifică. Ecuația calorimetrică"),
        phChFizica8("u2-l2-schimbari-stare",        "L2: Schimbări de stare de agregare"),
        phChFizica8("u2-l3-masini-termice",         "L3: Mașini termice. Randamentul termic"),
        phChFizica8("u2-recap",                     "Recapitulare și evaluare – Unitatea 2")
      ]
    },
    {
      id: "u3-curent-alternativ",
      title: "Unitatea 3 – Curent alternativ și energie electrică",
      subtitle: "Conținut în pregătire",
      icon: "🔋",
      chapters: [
        phChFizica8("u3-l1-curent-alternativ",      "L1: Curentul alternativ. Tensiunea alternativă"),
        phChFizica8("u3-l2-puterea-electrica",      "L2: Puterea electrică și energia electrică"),
        phChFizica8("u3-l3-transformatorul",        "L3: Transformatorul. Producerea și transportul energiei"),
        phChFizica8("u3-recap",                     "Recapitulare și evaluare – Unitatea 3")
      ]
    },
    {
      id: "u4-optica-ondulatorie",
      title: "Unitatea 4 – Optică ondulatorie și atomică",
      subtitle: "Conținut în pregătire",
      icon: "🌈",
      chapters: [
        phChFizica8("u4-l1-spectrul-electromagnetic", "L1: Spectrul electromagnetic"),
        phChFizica8("u4-l2-efectul-fotoelectric",    "L2: Efectul fotoelectric. Fotonul"),
        phChFizica8("u4-l3-radioactivitate",         "L3: Radioactivitate și aplicații"),
        phChFizica8("u4-recap",                     "Recapitulare și evaluare – Unitatea 4")
      ]
    }
  ]
};
