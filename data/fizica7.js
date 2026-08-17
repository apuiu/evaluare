// ============================================================
//  FIZICĂ - CLASA A VII-A  |  Schelet – conținut de completat
// ============================================================

const phFizica7 = (titlu) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">În pregătire</div>
    <p>Conținutul lecției <strong>${titlu}</strong> va fi adăugat în curând.</p>
  </div>
</div>`;

const phChFizica7 = (id, title) => ({ id, title, content: phFizica7(title) });

const fizica7Data = {
  title: "Fizică – Clasa a VII-a",
  subtitle: "Optică, electricitate statică, curent electric, magnetism",
  subject: "fizica",
  grade: 7,
  sections: [
    {
      id: "u1-optica",
      title: "Unitatea 1 – Optică geometrică",
      subtitle: "Conținut în pregătire",
      icon: "💡",
      chapters: [
        phChFizica7("u1-l1-lumina",               "L1: Lumina – surse, propagare, viteză"),
        phChFizica7("u1-l2-reflexia",              "L2: Reflexia luminii. Oglinzi"),
        phChFizica7("u1-l3-refractia",             "L3: Refracția luminii. Lentile"),
        phChFizica7("u1-l4-ochiul-lupe",           "L4: Ochiul uman și instrumente optice"),
        phChFizica7("u1-recap",                    "Recapitulare și evaluare – Unitatea 1")
      ]
    },
    {
      id: "u2-electricitate-statica",
      title: "Unitatea 2 – Electricitate statică",
      subtitle: "Conținut în pregătire",
      icon: "⚡",
      chapters: [
        phChFizica7("u2-l1-electrostatica",        "L1: Electrostatică. Electrizarea corpurilor"),
        phChFizica7("u2-l2-legea-coulomb",         "L2: Forța electrică. Legea lui Coulomb"),
        phChFizica7("u2-l3-camp-electric",         "L3: Câmpul electric"),
        phChFizica7("u2-recap",                    "Recapitulare și evaluare – Unitatea 2")
      ]
    },
    {
      id: "u3-curentul-electric",
      title: "Unitatea 3 – Curentul electric",
      subtitle: "Conținut în pregătire",
      icon: "🔌",
      chapters: [
        phChFizica7("u3-l1-curentul-electric",     "L1: Curentul electric. Tensiune, intensitate"),
        phChFizica7("u3-l2-legea-ohm",             "L2: Legea lui Ohm. Rezistența electrică"),
        phChFizica7("u3-l3-circuite",              "L3: Circuite electrice. Serie și paralel"),
        phChFizica7("u3-l4-efecte-curent",         "L4: Efectele curentului electric"),
        phChFizica7("u3-recap",                    "Recapitulare și evaluare – Unitatea 3")
      ]
    },
    {
      id: "u4-magnetism",
      title: "Unitatea 4 – Fenomene magnetice",
      subtitle: "Conținut în pregătire",
      icon: "🧲",
      chapters: [
        phChFizica7("u4-l1-magneti",               "L1: Magneți. Câmpul magnetic"),
        phChFizica7("u4-l2-electromagnetism",       "L2: Electromagnetism. Inductanță"),
        phChFizica7("u4-recap",                    "Recapitulare și evaluare – Unitatea 4")
      ]
    }
  ]
};
