// ============================================================
//  CHIMIE - CLASA A VII-A
//  Conținut aliniat cu programa școlară în vigoare
//  U1–U2: conținut complet | U3–U8: placeholder (de completat)
// ============================================================

// ─── Funcții helper (prefixate Ch7 pentru a evita coliziuni) ───

const listCh7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const solvedCh7 = (items) => items.map((item, index) => `
  <div class="rezolvat">
    <div class="rezolvat-label">Exemplu ${index + 1} – ${item.label}</div>
    <p><strong>Se dă:</strong> ${item.given}</p>
    <p><strong>Se cere:</strong> ${item.ask}</p>
    <p><strong>Rezolvare:</strong> ${item.solve}</p>
    ${item.check ? `<p><strong>Verificare:</strong> ${item.check}</p>` : ""}
    <p><strong>Răspuns:</strong> ${item.answer}</p>
  </div>`).join("\n");

const lessonCh7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Ce învățăm</div>
    <p>${data.learn}</p>
  </div>
  <h4>Termeni și noțiuni</h4>
  <ul>${listCh7(data.terms)}</ul>
  <h4>Proprietăți / Reguli</h4>
  <ul>${listCh7(data.properties)}</ul>
  <h4>Cum aplicăm</h4>
  <ol>${listCh7(data.steps)}</ol>
  <div class="atentie">
    <div class="atentie-label">Atenție!</div>
    <ul>${listCh7(data.tips)}</ul>
  </div>
  ${solvedCh7(data.examples)}
  <h4>Exerciții propuse</h4>
  <ol>${listCh7(data.exercises)}</ol>
</div>`;

const recapCh7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Recapitulare</div>
    <p>${data.summary}</p>
  </div>
  <h4>Idei-cheie</h4>
  <ul>${listCh7(data.keys)}</ul>
  <div class="atentie">
    <div class="atentie-label">Greșeli frecvente</div>
    <ul>${listCh7(data.mistakes)}</ul>
  </div>
  ${solvedCh7([data.problem])}
  <h4>Exerciții mixte</h4>
  <ol>${listCh7(data.exercises)}</ol>
</div>`;

const chapterCh7    = (id, title) => ({ id, title, content: lessonCh7(topicsCh7[id]) });
const recapChCh7    = (id, title) => ({ id, title, content: recapCh7(recapTopicsCh7[id]) });

// ─── Placeholder pentru lecții necompletate ───
const phCh7 = (titlu) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">În pregătire</div>
    <p>Conținutul lecției <strong>${titlu}</strong> va fi adăugat în curând cu ajutorul manualului.</p>
  </div>
</div>`;
const phChapterCh7 = (id, title) => ({ id, title, content: phCh7(title) });

// ============================================================
//  TOPICS – conținut lecții (U1 și U2 complete)
// ============================================================

const topicsCh7 = {

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 1 – Substanțe și amestecuri
  // ══════════════════════════════════════════════════════════

  "u1-l1-substante-pure": {
    learn: "Distingem substanțele pure de amestecuri și clasificăm amestecurile ca omogene sau eterogene.",
    terms: [
      "<strong>Substanță pură</strong>: compoziție chimică constantă, proprietăți fizice bine definite.",
      "<strong>Amestec</strong>: două sau mai multe substanțe combinate fără reacție chimică.",
      "<strong>Amestec omogen</strong> (soluție): compoziție uniformă, componentele nu se disting vizual.",
      "<strong>Amestec eterogen</strong>: componente cu distribuție neuniformă, vizibile cu ochiul liber.",
      "<strong>Componente</strong>: substanțele individuale care alcătuiesc amestecul."
    ],
    properties: [
      "Substanța pură are punct de topire și punct de fierbere fix la presiune dată.",
      "Amestecul omogen: un singur aspect vizual, ex: apă cu sare dizolvată, aer, oțet.",
      "Amestecul eterogen: două sau mai multe faze distincte, ex: nisip cu apă, granit.",
      "Amestecurile se pot separa prin metode fizice (filtrare, distilare etc.).",
      "Substanțele pure nu se pot separa în componente prin metode fizice."
    ],
    steps: [
      "Verifică dacă substanța are compoziție constantă.",
      "Compoziție constantă → substanță pură; compoziție variabilă → amestec.",
      "Pentru amestec: componentele sunt vizibile cu ochiul liber?",
      "Vizibile → amestec eterogen; nevizibile → amestec omogen (soluție)."
    ],
    tips: [
      "Apa distilată ($H_2O$), aurul pur, oxigenul pur – substanțe pure.",
      "Aerul este amestec omogen de gaze ($N_2 \\approx 78\\%$, $O_2 \\approx 21\\%$, $Ar \\approx 1\\%$).",
      "Granitul, sângele, laptele – amestecuri eterogene.",
      "Nu confunda substanță pură cu substanță simplă (ex: $O_2$ este substanță simplă, dar și pură)."
    ],
    examples: [
      {
        label: "clasificare",
        given: "apă distilată, aer, nisip cu apă",
        ask: "substanță pură sau amestec omogen / eterogen?",
        solve: "Apa distilată are compoziție constantă ($H_2O$) → substanță pură. Aerul: gaze uniform amestecate, invizibile → amestec omogen. Nisip cu apă: componentele se văd distinct → amestec eterogen.",
        answer: "apă dist. → substanță pură; aer → omogen; nisip+apă → eterogen"
      },
      {
        label: "saramură",
        given: "apă cu sare ($NaCl$) dizolvată",
        ask: "ce tip de amestec este?",
        solve: "Sarea este uniform distribuită în apă; cristalele nu se văd → amestec omogen (soluție).",
        answer: "amestec omogen (soluție)"
      },
      {
        label: "granit",
        given: "granit (cuarț + feldspat + mică)",
        ask: "substanță pură sau amestec? ce tip?",
        solve: "Granitul conține mai multe minerale distincte, vizibile → amestec eterogen.",
        answer: "amestec eterogen"
      }
    ],
    exercises: [
      "Clasificați fiecare: zahăr, apă cu zahăr, ulei cu apă, oxigen pur, oțet.",
      "Dați câte un exemplu de amestec omogen și eterogen din bucătărie.",
      "De ce apa de mare este amestec și nu substanță pură?",
      "Ce proprietate a substanțelor pure le face utile ca etalon în laborator?"
    ]
  },

  "u1-l2-metode-separare": {
    learn: "Aplicăm metoda de separare potrivită în funcție de natura componentelor amestecului.",
    terms: [
      "<strong>Filtrare</strong>: separarea solidului nedizolvat de lichid printr-un filtru de hârtie.",
      "<strong>Decantare</strong>: separarea lichidelor nemiscibile sau solid greu de lichid, prin repaus și turnare.",
      "<strong>Distilare</strong>: separarea lichidelor miscibile cu puncte de fierbere diferite.",
      "<strong>Cristalizare</strong>: izolarea substanței dizolvate prin evaporarea controlată a solventului.",
      "<strong>Centrifugare</strong>: separarea particulelor fine suspendate prin rotație rapidă.",
      "<strong>Solvent</strong>: lichidul care dizolvă; <strong>solvat (dizolvat)</strong>: substanța dizolvată."
    ],
    properties: [
      "Filtrarea separă solide nedizolvate; substanța dizolvată trece prin filtru.",
      "Decantarea se aplică la lichide nemiscibile (ex: apă + ulei) sau precipitate dense.",
      "Distilarea: componenta cu punct de fierbere mai mic se vaporizează și se condensează separat.",
      "Cristalizarea dă solvatul pur (ex: sare); distilarea dă solventul pur (ex: apă).",
      "Centrifugarea înlocuiește filtrarea pentru particulele prea fine (ex: separare plasmă–celule)."
    ],
    steps: [
      "Identifică tipul amestecului (omogen sau eterogen).",
      "Eterogen solid + lichid → filtrare sau decantare.",
      "Eterogen lichid + lichid nemiscibile → decantare cu pâlnie separatoare.",
      "Omogen lichid + lichid miscibile → distilare.",
      "Omogen solid dizolvat în lichid → cristalizare sau evaporare."
    ],
    tips: [
      "Filtrare: solidul rămâne pe filtru (reziduu); lichidul trece (filtrat).",
      "Distilarea apei de mare → apă pură; sarea rămâne în vas.",
      "Evaporarea recuperează solvatul (sarea); distilarea recuperează solventul (apa).",
      "Uleiul plutește pe apă ($\\rho_{ulei} < \\rho_{apă}$) → decantare cu pâlnie separatoare."
    ],
    examples: [
      {
        label: "filtrare",
        given: "apă cu nisip",
        ask: "metoda de separare și ce se obține",
        solve: "Nisipul este solid nedizolvat → filtrare. Apa (filtrat) trece prin filtru; nisipul (reziduu) rămâne.",
        answer: "filtrare; filtrat = apă curată, reziduu = nisip"
      },
      {
        label: "distilare",
        given: "amestec apă (f.f. 100°C) + alcool etilic (f.f. 78°C)",
        ask: "metoda de separare și ordinea distilării",
        solve: "Punctele de fierbere sunt diferite → distilare. La 78°C vaporii de alcool se colectează și condensează primii.",
        answer: "distilare; primul distilat = alcool etilic"
      },
      {
        label: "cristalizare",
        given: "soluție saturată de $NaCl$ în apă",
        ask: "cum obținem sarea pură?",
        solve: "Se încălzește soluția pentru a evapora apa → la răcire, $NaCl$ cristalizează.",
        answer: "cristalizare; se obține $NaCl$ solid pur"
      }
    ],
    exercises: [
      "Ce metodă folosiți pentru a recupera cerneala (solubilă în apă)? Justificați.",
      "Descrieți pașii pentru separarea uleiului de apă în laborator.",
      "Un chimist vrea să recupereze zahărul dintr-o soluție apoasă. Ce metodă alege?",
      "De ce filtrarea nu poate separa o soluție de sare?"
    ]
  },

  "u1-l3-proprietati-fizice": {
    learn: "Identificăm și folosim proprietățile fizice pentru a caracteriza și recunoaște substanțele.",
    terms: [
      "<strong>Stare de agregare</strong>: solidă, lichidă sau gazoasă (la temperatura camerei).",
      "<strong>Punct de topire (T<sub>t</sub>)</strong>: temperatura la care solidul trece în lichid.",
      "<strong>Punct de fierbere (T<sub>f</sub>)</strong>: temperatura la care lichidul trece în vapori.",
      "<strong>Densitate</strong>: $\\rho = \\dfrac{m}{V}$, în g/cm³ sau kg/m³.",
      "<strong>Solubilitate</strong>: masa (g) de substanță dizolvată în 100 g solvent la temperatură dată.",
      "<strong>Conductibilitate</strong>: capacitatea de a conduce căldura sau curentul electric."
    ],
    properties: [
      "Proprietățile fizice se observă sau se măsoară fără a schimba compoziția chimică.",
      "Substanța pură are $T_t$ și $T_f$ fixe; amestecul topeste/fierbe pe interval.",
      "Densitatea apei la 4°C este 1 g/cm³ (etalon de referință).",
      "Corpul plutește dacă $\\rho_{corp} < \\rho_{lichid}$; se scufundă dacă $\\rho_{corp} > \\rho_{lichid}$.",
      "Solubilitatea majorității solidelor crește cu temperatura; a gazelor scade."
    ],
    steps: [
      "Observă culoarea, forma, mirosul și starea de agregare.",
      "Măsoară masa cu balanța și volumul cu cilindrul gradat.",
      "Calculează densitatea: $\\rho = m / V$.",
      "Compară valorile obținute cu tabelele de referință pentru identificare."
    ],
    tips: [
      "Proprietăți fizice: culoare, punct de topire, densitate, solubilitate.",
      "Proprietăți chimice: ardere, oxidare, coroziune, reacție cu acizi.",
      "$T_t$ gheață = 0°C; $T_f$ apă = 100°C (la 1 atm).",
      "Valori de referință: $\\rho_{Fe}=7{,}9$ g/cm³; $\\rho_{Al}=2{,}7$ g/cm³; $\\rho_{Au}=19{,}3$ g/cm³."
    ],
    examples: [
      {
        label: "densitate",
        given: "bucată de fier: masa = 158 g, volumul = 20 cm³",
        ask: "densitatea fierului",
        solve: "$\\rho = \\dfrac{m}{V} = \\dfrac{158}{20} = 7{,}9$ g/cm³",
        answer: "$\\rho = 7{,}9$ g/cm³"
      },
      {
        label: "identificare",
        given: "o substanță pură fierbe la 78°C",
        ask: "ce substanță este?",
        solve: "Punctul de fierbere 78°C este caracteristic alcoolului etilic ($C_2H_5OH$).",
        answer: "alcool etilic (etanol)"
      },
      {
        label: "plutire",
        given: "un corp are $\\rho = 0{,}8$ g/cm³",
        ask: "plutește sau se scufundă în apă ($\\rho_{apă}=1$ g/cm³)?",
        solve: "$0{,}8 < 1$ → corpul este mai puțin dens decât apa → plutește.",
        answer: "plutește"
      }
    ],
    exercises: [
      "Calculați densitatea unui lichid cu masa 250 g și volumul 200 mL.",
      "Cum deosebim experimental o substanță pură de un amestec folosind punctul de topire?",
      "Un corp cu $\\rho = 2{,}5$ g/cm³ plutește sau se scufundă în apă? Justificați.",
      "Enumerați 4 proprietăți fizice ale cuprului ($Cu$)."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 2 – Structura atomului
  // ══════════════════════════════════════════════════════════

  "u2-l1-atomul": {
    learn: "Descriem structura atomului și identificăm particulele subatomice cu sarcinile și masele lor.",
    terms: [
      "<strong>Atom</strong>: cea mai mică particulă a unui element chimic, cu proprietățile sale chimice.",
      "<strong>Nucleu</strong>: centrul atomului, format din protoni și neutroni.",
      "<strong>Proton (p)</strong>: sarcină electrică +1, masă ≈ 1 u.a.",
      "<strong>Neutron (n)</strong>: sarcină electrică 0, masă ≈ 1 u.a.",
      "<strong>Electron (e⁻)</strong>: sarcină electrică −1, masă neglijabilă (~0 u.a.).",
      "<strong>Număr atomic Z</strong>: numărul de protoni din nucleu (identifcă elementul).",
      "<strong>Număr de masă A</strong>: numărul total de nucleoni (protoni + neutroni).",
      "<strong>Nr. de neutroni N</strong>: $N = A - Z$."
    ],
    properties: [
      "Atomul este neutru electric: numărul de protoni = numărul de electroni.",
      "Masa atomului este concentrată în nucleu (electroni au masă neglijabilă).",
      "Electronii se mișcă în straturi (învelișul electronic) în jurul nucleului.",
      "$A = Z + N$, deci $N = A - Z$.",
      "Simbolul complet al unui atom: $^A_Z X$ (X = simbol element)."
    ],
    steps: [
      "Citește Z (număr atomic) din tabelul periodic sau din datele problemei.",
      "Calculează numărul de neutroni: $N = A - Z$.",
      "Atom neutru: numărul de electroni = Z.",
      "Scrie simbolul complet: $^A_Z X$."
    ],
    tips: [
      "Z = numărul de protoni, NU numărul de masă A!",
      "Atomul este neutru: nr. protoni = nr. electroni.",
      "Neutronii nu au sarcină electrică.",
      "Electronii se află în afara nucleului, în învelișul electronic."
    ],
    examples: [
      {
        label: "sodiu",
        given: "$^{23}_{11}Na$",
        ask: "nr. de protoni, neutroni și electroni",
        solve: "Z = 11 (nr. protoni). A = 23, deci N = 23 − 11 = 12 neutroni. Atom neutru → 11 electroni.",
        answer: "11 protoni, 12 neutroni, 11 electroni"
      },
      {
        label: "oxigen",
        given: "oxigenul: Z = 8, A = 16",
        ask: "compoziția nucleului",
        solve: "Z = 8 protoni; N = 16 − 8 = 8 neutroni. Nucleul: 8 protoni + 8 neutroni.",
        answer: "8 protoni și 8 neutroni în nucleu"
      },
      {
        label: "calcul invers",
        given: "un atom are 15 protoni și 16 neutroni",
        ask: "Z, A și simbolul complet",
        solve: "Z = 15 (fosfor, P); A = 15 + 16 = 31. Simbolul: $^{31}_{15}P$.",
        answer: "Z = 15, A = 31, simbol $^{31}_{15}P$"
      }
    ],
    exercises: [
      "Determinați nr. de protoni, neutroni și electroni pentru $^{40}_{20}Ca$.",
      "Un atom are Z = 17 și A = 35. Care este elementul? Câți neutroni are?",
      "Completați simbolul $^{?}_{26}Fe$ știind că fierul are 30 neutroni.",
      "Ce particulă subatomică are sarcina −1 și masă neglijabilă?"
    ]
  },

  "u2-l2-elemente-chimice": {
    learn: "Recunoaștem elementele chimice prin simbol și le clasificăm ca metale, nemetale sau gaze nobile.",
    terms: [
      "<strong>Element chimic</strong>: mulțimea atomilor cu același număr atomic Z.",
      "<strong>Simbol chimic</strong>: 1–2 litere ce reprezintă elementul (prima majusculă, a doua minusculă).",
      "<strong>Metal</strong>: lustru metalic, conductor electric și termic, maleabil, ductil.",
      "<strong>Nemetal</strong>: conductori slabi sau izolatori, fragili (solide) sau gazoși.",
      "<strong>Gaz nobil</strong>: grupa 18, stabile chimic, monoatomice, înveliș electronic complet.",
      "<strong>Substanță simplă</strong>: formată din atomi ai unui singur element (ex: $O_2$, $Fe$, $S_8$)."
    ],
    properties: [
      "Simbolul derivă adesea din denumirea latină: Fe (Ferrum), Au (Aurum), Na (Natrium), K (Kalium), Pb (Plumbum).",
      "Metalele: predominant în stânga și centrul tabelului periodic.",
      "Nemetalele: C, N, O, F, S, P, Se, Cl, Br, I – situate în dreapta.",
      "Gazele nobile (He, Ne, Ar, Kr, Xe, Rn): înveliș complet → nu formează compuși în condiții normale.",
      "Substanța simplă ≠ elementul chimic: O este elementul; $O_2$ este substanța simplă."
    ],
    steps: [
      "Localizează elementul în tabelul periodic după Z sau denumire.",
      "Scrie simbolul corect (prima literă majusculă, a doua minusculă).",
      "Identifică poziția: stânga/centru → metal; dreapta → nemetal; coloana 18 → gaz nobil.",
      "Notează masa atomică relativă (Ar) din tabelul periodic."
    ],
    tips: [
      "Nu scrie CU sau cu pentru cupru – corect este Cu.",
      "K, Na, Fe, Au, Pb, Cu, Hg – simboluri din limbile latină sau germană.",
      "Substanțele simple ale nemetalelor gazoase sunt diatomice: $H_2$, $O_2$, $N_2$, $F_2$, $Cl_2$.",
      "Nu confundați elementul cu substanța simplă la examen!"
    ],
    examples: [
      {
        label: "identificare din simbol",
        given: "simbol Fe",
        ask: "denumirea elementului și clasificarea",
        solve: "Fe = fier (din latinescul Ferrum), metal de tranziție, Ar ≈ 56.",
        answer: "fier, metal"
      },
      {
        label: "scriere simboluri",
        given: "clor, calciu, cupru",
        ask: "scrieți simbolurile chimice corecte",
        solve: "Clor → Cl; Calciu → Ca; Cupru → Cu.",
        answer: "Cl, Ca, Cu"
      },
      {
        label: "element vs. substanță simplă",
        given: "azot",
        ask: "simbolul elementului și formula substanței simple",
        solve: "Elementul azot: simbol N (Z = 7). Substanța simplă: moleculă diatomică $N_2$.",
        answer: "element: N; substanță simplă: $N_2$"
      }
    ],
    exercises: [
      "Scrieți simbolul pentru: hidrogen, oxigen, carbon, sodiu, clor.",
      "Numiți elementele cu simbolul: K, Ca, Pb, Au, Hg.",
      "Din lista Fe, O, Cu, Ar, Cl – care sunt nemetale sau gaze nobile?",
      "De ce simbolul potasiului este K și nu P? (Indiciu: denumire latină)"
    ]
  },

  "u2-l3-tabelul-periodic": {
    learn: "Folosim tabelul periodic pentru a identifica grupe, perioade și a anticipa proprietățile elementelor.",
    terms: [
      "<strong>Perioadă</strong>: rând orizontal din tabelul periodic; nr. perioadei = nr. straturi electronice.",
      "<strong>Grupă</strong>: coloană verticală; determină nr. electroni de valență (grupe principale).",
      "<strong>Metale alcaline</strong>: grupa 1 (Li, Na, K, Rb, Cs), reactivi, formează cationi $M^+$.",
      "<strong>Metale alcalino-pământoase</strong>: grupa 2 (Mg, Ca, Ba), formează cationi $M^{2+}$.",
      "<strong>Halogeni</strong>: grupa 17 (F, Cl, Br, I), nemetale reactive, formează anioni $X^-$.",
      "<strong>Electroni de valență</strong>: electronii de pe ultimul strat, implicați în legăturile chimice."
    ],
    properties: [
      "Tabelul periodic are 7 perioade și 18 grupe.",
      "Nr. perioadei = nr. de straturi electronice ale atomului.",
      "Grupe principale (1–2 și 13–18): nr. grupei = nr. electroni de valență.",
      "Electronegativitatea crește spre dreapta și în sus în tabelul periodic.",
      "Elementele din aceeași grupă au proprietăți chimice similare (aceiași nr. electroni de valență)."
    ],
    steps: [
      "Localizează elementul în tabelul periodic (rând și coloană).",
      "Citește nr. perioadei (rândul) → nr. de straturi electronice.",
      "Citește nr. grupei → nr. electroni de valență (grupe principale 1–2, 13–18).",
      "Clasifică: metal / nemetal / metaloid / gaz nobil."
    ],
    tips: [
      "Perioadă = nr. straturi electronice; Grupă = nr. electroni de valență.",
      "Elementele din aceeași grupă au proprietăți chimice asemănătoare.",
      "Gazele nobile (grupa 18): 8 electroni de valență (excepție He cu 2) → stabile chimic.",
      "Halogenii (grupa 17): 7 electroni de valență → reacționează puternic cu metalele."
    ],
    examples: [
      {
        label: "localizare clor",
        given: "Cl, Z = 17",
        ask: "perioadă, grupă, tip și nr. electroni de valență",
        solve: "Cl este în perioada 3 (3 straturi), grupa 17 (halogeni). Are 7 electroni de valență. Este nemetal.",
        answer: "perioada 3, grupa 17, nemetal, 7 electroni de valență"
      },
      {
        label: "proprietăți similare",
        given: "Li (Z = 3) și Na (Z = 11)",
        ask: "de ce au proprietăți chimice similare?",
        solve: "Li și Na sunt ambele în grupa 1 (metale alcaline), au câte 1 electron de valență → reacționează similar cu apa și acizii.",
        answer: "aceeași grupă (1), câte 1 electron de valență"
      },
      {
        label: "număr de straturi",
        given: "Na, Z = 11",
        ask: "numărul de straturi electronice și repartiția electronilor",
        solve: "Na este în perioada 3 → 3 straturi: K(2), L(8), M(1). Total: 11 electroni.",
        answer: "3 straturi; K(2) L(8) M(1)"
      }
    ],
    exercises: [
      "Localizați în tabelul periodic O, Mg, Al, Br, Kr. Indicați perioada și grupa.",
      "Care element din perioada 2 are 4 electroni de valență?",
      "De ce gazele nobile nu reacționează chimic în condiții normale?",
      "Comparați Na și K: asemănări (grupă, electroni de valență) și deosebiri (perioadă, reactivitate)."
    ]
  },

  "u2-l4-izotopi": {
    learn: "Definim izotopii, calculăm nr. de neutroni și înțelegem de ce masa atomică relativă este o medie ponderată.",
    terms: [
      "<strong>Izotopi</strong>: atomi ai aceluiași element (Z egal) cu număr de masă A diferit (N diferit).",
      "<strong>Nucleon</strong>: orice particulă din nucleu (proton sau neutron).",
      "<strong>Abundență izotopică</strong>: procentul fiecărui izotop în natura.",
      "<strong>Masă atomică relativă (Ar)</strong>: media ponderată a maselor izotopilor după abundență.",
      "<strong>Radioizotop</strong>: izotop cu nucleu instabil, emite radiații (ex: $^{14}C$, $^{235}U$)."
    ],
    properties: [
      "Izotopii au Z egal → aceiași nr. de protoni și electroni → proprietăți chimice identice.",
      "Izotopii au A diferit → N diferit → proprietăți fizice ușor diferite (masă, densitate).",
      "Masa atomică relativă din tabel este media ponderată: $\\bar{A} = \\sum A_i \\cdot p_i$.",
      "$p_i$ este fracția izotopică (nu procentul): dacă abundența este 75%, atunci $p_i = 0{,}75$.",
      "Izotop ≠ izobar: izobarii au A egal dar Z diferit; izotopii au Z egal și A diferit."
    ],
    steps: [
      "Verifică dacă Z este identic pentru ambii atomi → același element.",
      "Verifică dacă A diferă → sunt izotopi.",
      "Calculează N pentru fiecare: $N = A - Z$.",
      "Masa medie: $\\bar{A} = A_1 \\cdot p_1 + A_2 \\cdot p_2 + ...$ (cu $p_i$ fracție, nu procent)."
    ],
    tips: [
      "Izotopii diferă prin numărul de neutroni, NU prin protoni.",
      "Hidrogen are 3 izotopi: $^1H$ (protiu), $^2H$ (deuteriu), $^3H$ (tritiu).",
      "Izotop ≠ izobar: la izobari A egal, Z diferit (ex: $^{14}C$ și $^{14}N$).",
      "La calculul masei medii, convertiți procentele în fracții ($\\div 100$)."
    ],
    examples: [
      {
        label: "identificare izotopi",
        given: "$^{35}_{17}Cl$ și $^{37}_{17}Cl$",
        ask: "sunt izotopi? justificați",
        solve: "Z = 17 pentru ambii → același element (Cl). A diferit (35 ≠ 37) → sunt izotopi ai clorului.",
        answer: "da, izotopi ai clorului"
      },
      {
        label: "neutroni",
        given: "$^{35}Cl$ și $^{37}Cl$ (Z = 17 pentru ambii)",
        ask: "câți neutroni are fiecare?",
        solve: "$^{35}Cl$: N = 35 − 17 = 18; $^{37}Cl$: N = 37 − 17 = 20.",
        answer: "18, respectiv 20 neutroni"
      },
      {
        label: "masă atomică medie",
        given: "clorul: 75% $^{35}Cl$ și 25% $^{37}Cl$",
        ask: "calculați masa atomică medie a clorului",
        solve: "$\\bar{A} = 35 \\cdot 0{,}75 + 37 \\cdot 0{,}25 = 26{,}25 + 9{,}25 = 35{,}5$",
        answer: "$\\bar{A}_{Cl} = 35{,}5$ u.a."
      }
    ],
    exercises: [
      "$^{12}C$ și $^{14}C$: sunt izotopi? Justificați.",
      "$^{14}N$ și $^{14}C$: sunt izotopi? De ce nu? (Indiciu: izobar)",
      "Calculați masa atomică medie a borului: 20% $^{10}B$ și 80% $^{11}B$.",
      "Ce rămâne identic la izotopi față de atomul obișnuit al elementului și ce diferă?"
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 3 – Legătura chimică
  // ══════════════════════════════════════════════════════════

  "u3-l1-configuratie-electronica": {
    learn: "Scriem configurația electronică a atomilor pe straturi și identificăm electronii de valență.",
    terms: [
      "<strong>Strat electronic</strong>: zonă de energie definită în jurul nucleului (K, L, M, N...).",
      "<strong>Capacitate maximă</strong>: K – 2e; L – 8e; M – 8e (pentru Z=11–18).",
      "<strong>Electroni de valență</strong>: electronii de pe ultimul strat (incomplet), implicați în legăturile chimice.",
      "<strong>Regula octetului</strong>: atomii tind să atingă 8 electroni pe ultimul strat.",
      "<strong>Configurație</strong>: notată K(e₁) L(e₂) M(e₃); ex: Na → K(2) L(8) M(1)."
    ],
    properties: [
      "Straturile se completează de la interior spre exterior: K(max 2) → L(max 8) → M(max 8 pentru Z≤18).",
      "Nr. electronilor de valență = nr. grupei (pentru grupe principale 1–2 și 13–18).",
      "Gazele nobile au stratul exterior complet: 8 electroni (He: 2) → nu formează compuși.",
      "Metalele au 1–3 electroni de valență → cedează electroni.",
      "Nemetalele au 4–7 electroni de valență → câștigă sau partajează electroni."
    ],
    steps: [
      "Citește Z din tabelul periodic.",
      "Completează straturile în ordine: K(max 2), L(max 8), M(restul).",
      "Ultimii electroni plasați → electroni de valență.",
      "Scrie configurația: K(e₁) L(e₂) M(e₃)."
    ],
    tips: [
      "K max 2 electroni; L max 8; M max 8 (pentru elementele Z = 11–18).",
      "Electronii de valență determină reactivitatea chimică.",
      "Dacă ultimul strat are 8e (sau 2e pentru He) → stabil (gaz nobil).",
      "Metal: puțini electroni de valență (1–3); nemetal: mulți (4–7)."
    ],
    examples: [
      {
        label: "sodiu",
        given: "Na, Z = 11",
        ask: "configurația electronică și nr. electroni de valență",
        solve: "K(2): 2e; L(8): 8e; M: 11-2-8 = 1e → M(1). 1 electron de valență (grupa 1).",
        answer: "K(2) L(8) M(1); 1 electron de valență"
      },
      {
        label: "sulf",
        given: "S, Z = 16",
        ask: "configurația electronică",
        solve: "K(2), L(8), M: 16-2-8 = 6e → M(6). 6 electroni de valență (grupa 16).",
        answer: "K(2) L(8) M(6); 6 electroni de valență"
      },
      {
        label: "argon",
        given: "Ar, Z = 18",
        ask: "configurația și de ce este stabil chimic",
        solve: "K(2) L(8) M(8). 8 electroni de valență → strat complet → regulă octet satisfăcută → stabil (gaz nobil).",
        answer: "K(2) L(8) M(8); strat complet → inert chimic"
      }
    ],
    exercises: [
      "Scrieți configurația electronică pentru: O (Z=8), Mg (Z=12), Cl (Z=17), Ca (Z=20).",
      "Câți electroni de valență are aluminiul (Z=13)? Ce tip de element este?",
      "De ce gazele nobile nu formează compuși chimici în condiții normale?",
      "Comparați configurația electronică a Na (Z=11) și K (Z=19). Ce au în comun?"
    ]
  },

  "u3-l2-legatura-ionica": {
    learn: "Explicăm formarea legăturii ionice prin transfer de electroni și scriem formulele compușilor ionici.",
    terms: [
      "<strong>Legătură ionică</strong>: atracție electrostatică între un cation și un anion.",
      "<strong>Cation</strong>: ion cu sarcină pozitivă (metal care cedează electroni).",
      "<strong>Anion</strong>: ion cu sarcină negativă (nemetal care câștigă electroni).",
      "<strong>Transfer de electroni</strong>: metal → nemetal.",
      "<strong>Neutralitate electrică</strong>: suma sarcinilor ionice în compus = 0.",
      "<strong>Compus ionic</strong>: rețea cristalină de cationi și anioni (ex: NaCl, MgO)."
    ],
    properties: [
      "Legătura ionică se formează între metal (cedează e⁻) și nemetal (primește e⁻).",
      "Metalele alcaline (gr.1) → cationi M⁺; alcalino-pământoase (gr.2) → M²⁺.",
      "Halogenii (gr.17) → anioni X⁻; oxigenul → O²⁻; sulful → S²⁻.",
      "Formula se scrie cu indicii inversați față de sarcini (și simplificați).",
      "Compușii ionici: solide cristaline, punct de topire ridicat, conduători în topitură/soluție."
    ],
    steps: [
      "Identifică metalul (pierde e⁻) și nemetalul (câștigă e⁻).",
      "Determină sarcinile ionice din grupă sau din tabelul periodic.",
      "Inversează sarcinile → indici (simplifică dacă ai un factor comun).",
      "Verifică: sarcina_cation × indice_cation + sarcina_anion × indice_anion = 0."
    ],
    tips: [
      "Metalul apare întotdeauna primul în formula compusului ionic.",
      "Sarcini egale → indicii 1:1 (ex: NaCl, MgO, CaS).",
      "Al³⁺ și O²⁻ → MCM(3,2)=6 → Al₂O₃ (2×3=6; 3×2=6 ✓).",
      "Compușii ionici nu sunt moleculare – nu există molecule izolate de NaCl."
    ],
    examples: [
      {
        label: "NaCl",
        given: "Na (gr.1) și Cl (gr.17)",
        ask: "formula compusului ionic format",
        solve: "Na → Na⁺ (cedează 1e⁻); Cl → Cl⁻ (primește 1e⁻). Sarcini: +1 și −1, egale → 1:1. Formula: $NaCl$. Verificare: +1−1=0 ✓.",
        answer: "$NaCl$; clorură de sodiu"
      },
      {
        label: "MgCl₂",
        given: "Mg (gr.2, sarcină 2+) și Cl (gr.17, sarcină 1−)",
        ask: "formula compusului ionic",
        solve: "Mg²⁺ și Cl⁻. Invers: Mg→indice 1, Cl→indice 2. Formula: $MgCl_2$. Verificare: 1×(+2) + 2×(−1) = 0 ✓.",
        answer: "$MgCl_2$; clorură de magneziu"
      },
      {
        label: "Al₂O₃",
        given: "Al³⁺ și O²⁻",
        ask: "formula compusului ionic",
        solve: "MCM(3,2) = 6. Al: 6/3 = 2; O: 6/2 = 3. Formula: $Al_2O_3$. Verificare: 2×(+3) + 3×(−2) = 0 ✓.",
        answer: "$Al_2O_3$; oxid de aluminiu"
      }
    ],
    exercises: [
      "Scrieți formulele ionice: K⁺ + Br⁻; Ca²⁺ + Cl⁻; Na⁺ + O²⁻; Fe³⁺ + O²⁻.",
      "Ce tip de particule se formează când un metal cedează electroni?",
      "De ce $NaCl$ conduce curentul electric în soluție, dar nu în stare solidă?",
      "Determinați formula compusului format din Ca²⁺ și PO₄³⁻."
    ]
  },

  "u3-l3-legatura-covalenta": {
    learn: "Explicăm formarea legăturii covalente prin punerea în comun de electroni și scriem structuri Lewis simple.",
    terms: [
      "<strong>Legătură covalentă</strong>: pereche de electroni partajată de doi atomi nemetalici.",
      "<strong>Dublet de legătură</strong>: cei 2 electroni comuni ai legăturii.",
      "<strong>Legătură simplă</strong>: 1 pereche comună (ex: H–H, H–Cl).",
      "<strong>Legătură dublă</strong>: 2 perechi comune (ex: O=O, C=O).",
      "<strong>Legătură triplă</strong>: 3 perechi comune (ex: N≡N).",
      "<strong>Moleculă polară</strong>: distribuție asimetrică a electronilor (ex: HCl, H₂O).",
      "<strong>Moleculă nepolară</strong>: distribuție simetrică (ex: H₂, Cl₂, CO₂)."
    ],
    properties: [
      "Legătura covalentă se formează între doi atomi de nemetal.",
      "Fiecare atom contribuie cu câte 1 electron la perechea de legătură.",
      "H are nevoie de 2e (duet); celelalte nemetale au nevoie de 8e (octet).",
      "Tipuri: H face 1 legătură; O face 2; N face 3; C face 4; halogenii fac 1.",
      "Electronegativitatea: F > O > N > Cl > Br > C > H (crește spre dreapta/sus în tabel)."
    ],
    steps: [
      "Numără electronii de valență ai fiecărui atom.",
      "Plasează câte 2 electroni în perechea de legătură între atomi.",
      "Completează octetul fiecărui atom cu electroni neparticipanți.",
      "Dacă un atom nu are octet complet, formează o legătură dublă sau triplă."
    ],
    tips: [
      "H face mereu 1 singură legătură covalentă.",
      "Dacă rămân electroni fără pereche pe un atom → formează altă legătură.",
      "Legătura polară: atomul mai electronegativ atrage mai puternic perechea de electroni.",
      "CO₂ are 2 legături duble (O=C=O) și este nepolară datorită simetriei."
    ],
    examples: [
      {
        label: "H₂",
        given: "2 atomi H, fiecare cu 1 electron de valență",
        ask: "structura Lewis a $H_2$",
        solve: "Fiecare H contribuie cu 1e⁻ → pereche de legătură: H–H. Ambii H au 2e⁻ → duet complet.",
        answer: "H–H (legătură simplă, moleculă nepolară)"
      },
      {
        label: "HCl",
        given: "H (1e⁻ valență) și Cl (7e⁻ valență)",
        ask: "tipul legăturii și polaritatea moleculei",
        solve: "1 pereche comună H–Cl. Cl are 3 perechi neparticipante + octet complet. Cl este mai electronegativ → moleculă polară.",
        answer: "H–Cl; legătură covalentă polară"
      },
      {
        label: "O₂",
        given: "2 atomi de O, fiecare cu 6e⁻ valență",
        ask: "tipul legăturii din $O_2$",
        solve: "Fiecare O are nevoie de 2e⁻ pentru octet. O pereche comună nu e suficientă → 2 perechi comune → legătură dublă: O=O.",
        answer: "O=O (legătură dublă)"
      }
    ],
    exercises: [
      "Câte perechi comune are legătura din $N_2$ (N are 5 electroni de valență)?",
      "Explicați de ce $H_2O$ are 2 legături covalente (O face 2 legături).",
      "$CO_2$ sau $NaCl$ – care are legătură covalentă? Justificați.",
      "De ce $HF$ este mai polară decât $HCl$? (Indiciu: electronegativitate)"
    ]
  },

  "u3-l4-formule-valenta": {
    learn: "Scriem formule chimice corecte folosind valența elementelor și regulile de echilibrare a sarcinilor.",
    terms: [
      "<strong>Valența</strong>: numărul de legături pe care le formează un atom al elementului.",
      "<strong>Indicele (subscriptul)</strong>: numărul de atomi dintr-o formulă chimică.",
      "<strong>Formula empirică</strong>: cel mai simplu raport al atomilor (ex: $CH_2O$).",
      "<strong>Formula moleculară</strong>: numărul real de atomi din moleculă (ex: $C_6H_{12}O_6$).",
      "<strong>Radicalul acid</strong>: grupare de atomi cu sarcină negativă derivată din acid (ex: $SO_4^{2-}$, $NO_3^-$).",
      "<strong>Regula încrucișării</strong>: indicii sunt inversul valențelor (simplificat)."
    ],
    properties: [
      "Valența H = I (etalon); O = II; Na, K = I; Ca, Mg = II; Al = III; Fe = II sau III.",
      "Suma produselor (valență × indice) trebuie să fie egală pentru ambele elemente.",
      "Indicii se simplifică dacă au un factor comun (ex: Mg₂O₂ → MgO).",
      "Indicele 1 nu se scrie în formulă (NaCl, nu Na₁Cl₁).",
      "La radicali cu indice >1 se pun paranteze: $Ca(OH)_2$, $Al_2(SO_4)_3$."
    ],
    steps: [
      "Scrie simbolurile: metal (sau pozitivul) primul, nemetal (sau negativul) al doilea.",
      "Notează valențele deasupra simbolurilor.",
      "Inversează valențele → indicii.",
      "Simplifică indicii dacă au factor comun și verifică."
    ],
    tips: [
      "Valențele egale → indici 1:1 (simplificare automată).",
      "Nu modifica indicii din formulele chimice standard (ex: nu schimba $H_2O$ în $H_4O_2$).",
      "La $Fe_2O_3$: Fe are valența III, O are valența II → MCM(3,2)=6 → Fe₂O₃.",
      "La compuși cu radicali (OH⁻, SO₄²⁻, NO₃⁻): pune radicalul în paranteză dacă indicele > 1."
    ],
    examples: [
      {
        label: "oxid de calciu",
        given: "Ca (val.II) și O (val.II)",
        ask: "formula oxidului de calciu",
        solve: "Valențe egale (II = II) → indicii egali → simplifică: 1:1. Formula: $CaO$.",
        answer: "$CaO$"
      },
      {
        label: "clorură de aluminiu",
        given: "Al (val.III) și Cl (val.I)",
        ask: "formula clorurii de aluminiu",
        solve: "MCM(3,1) = 3. Al: 3/3 = 1; Cl: 3/1 = 3. Formula: $AlCl_3$. Verificare: 1×III = 3×I → 3=3 ✓.",
        answer: "$AlCl_3$"
      },
      {
        label: "sulfat de calciu",
        given: "$Ca^{2+}$ și $SO_4^{2-}$",
        ask: "formula sulfatului de calciu",
        solve: "Sarcini: 2+ și 2− → egale → 1:1. Formula: $CaSO_4$ (radicalul SO₄ nu se pune în paranteză la indice 1).",
        answer: "$CaSO_4$; sulfat de calciu"
      }
    ],
    exercises: [
      "Scrieți formulele: oxid de magneziu (Mg II, O II); clorură de sodiu (Na I, Cl I); oxid de aluminiu (Al III, O II).",
      "Care este valența fierului în $Fe_2O_3$? Justificați.",
      "Scrieți formula sulfurii de fier(II) (Fe II, S II).",
      "Ce reprezintă indicele 3 în formula $AlCl_3$?"
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 4 – Reacții chimice
  // ══════════════════════════════════════════════════════════

  "u4-l1-transformari": {
    learn: "Distingem transformările fizice de cele chimice și identificăm indiciile unei reacții chimice.",
    terms: [
      "<strong>Transformare fizică</strong>: se schimbă forma/starea, nu compoziția chimică.",
      "<strong>Transformare chimică</strong> (reacție chimică): se formează substanțe noi cu proprietăți diferite.",
      "<strong>Reactanți</strong>: substanțele inițiale (din stânga ecuației).",
      "<strong>Produse</strong>: substanțele noi formate (din dreapta ecuației).",
      "<strong>Indicii de reacție chimică</strong>: degajare de gaz, precipitat, schimbare de culoare, variație de temperatură, lumină."
    ],
    properties: [
      "Transformarea fizică este de obicei reversibilă (topire, fierbere, dizolvare).",
      "Transformarea chimică este de obicei ireversibilă în condiții normale (ardere, ruginire).",
      "La transformarea fizică, proprietățile chimice ale substanței rămân neschimbate.",
      "La reacția chimică, se rup și se formează legături chimice → substanțe noi.",
      "Legea conservării masei se aplică la ambele tipuri de transformare."
    ],
    steps: [
      "Observă dacă apar substanțe cu proprietăți noi (culoare, miros, precipitat, gaz).",
      "Dacă da → reacție chimică; dacă nu → transformare fizică.",
      "Identifică indiciile: bule de gaz, precipitat, schimbare de culoare, căldură/lumină.",
      "Precizează reactanții și produsele reacției chimice."
    ],
    tips: [
      "Topire, fierbere, dizolvare, cristalizare → transformări fizice.",
      "Ruginire, ardere, fermentație, fotosinteza → reacții chimice.",
      "Reversibilitate ≠ criteriu absolut: unele reacții chimice sunt reversibile.",
      "Ghid rapid: apar substanțe noi? → reacție chimică."
    ],
    examples: [
      {
        label: "fizică vs. chimică",
        given: "a) topirea gheții; b) arderea hârtiei",
        ask: "clasificați transformările",
        solve: "a) Gheața → apă: compoziția $H_2O$ rămâne neschimbată → transformare fizică. b) Hârtia arde: se formează $CO_2$ și $H_2O$ → substanțe noi → reacție chimică.",
        answer: "a) fizică (reversibilă); b) chimică (ireversibilă)"
      },
      {
        label: "indicii reacție",
        given: "zinc + acid clorhidric → bule de gaz + lichid incolor",
        ask: "ce tip de transformare este?",
        solve: "Se degajă gaz ($H_2$) → indicator de reacție chimică → transformare chimică.",
        answer: "reacție chimică"
      },
      {
        label: "dizolvare",
        given: "dizolvarea zahărului în apă",
        ask: "fizică sau chimică?",
        solve: "Zahărul se poate recupera prin evaporarea apei → compoziția nu s-a schimbat → transformare fizică.",
        answer: "fizică (reversibilă)"
      }
    ],
    exercises: [
      "Clasificați: fierul ruginit, gheața topită, lemnul ars, zahărul dizolvat în apă.",
      "Ce observi când adaugi oțet peste bicarbonat de sodiu? Ce tip de transformare este?",
      "Poate fi fotosinteza considerată reacție chimică? Justificați.",
      "Dați 2 exemple de transformări fizice și 2 chimice din viața cotidiană."
    ]
  },

  "u4-l2-ecuatii-chimice": {
    learn: "Scriem și echilibrăm ecuații chimice, respectând legea conservării masei.",
    terms: [
      "<strong>Ecuație chimică</strong>: reprezentarea simbolică a unei reacții chimice.",
      "<strong>Coeficient stoechiometric</strong>: numărul din fața formulei, arată raportul molar.",
      "<strong>Echilibrare</strong>: ajustarea coeficienților astfel ca nr. atomi/element să fie egal în ambii membri.",
      "<strong>Membrul stâng</strong>: reactanți (substanțele inițiale).",
      "<strong>Membrul drept</strong>: produse (substanțele formate).",
      "<strong>Regulă</strong>: se modifică coeficienții, NU indicii (formulele chimice)."
    ],
    properties: [
      "Ecuația echilibrată: nr. atomi al fiecărui element este egal în stânga și dreapta.",
      "Coeficientul 1 nu se scrie în ecuație.",
      "Formulele chimice (indicii) nu se modifică la echilibrare.",
      "Săgeata (→) înseamnă 'se transformă în'; $\\Delta$ deasupra = cu căldură; $\\downarrow$ = precipitat; $\\uparrow$ = gaz.",
      "Coeficienții trebuie să fie numere întregi minime (simplificați)."
    ],
    steps: [
      "Scrie formulele corecte ale reactanților și produselor.",
      "Numără atomii fiecărui element în membrul stâng și drept.",
      "Adaugă coeficienți pentru a egala numărul de atomi (începe cu elementul din cel mai puțin compuși).",
      "Verifică final: toți atomii egali în ambii membri."
    ],
    tips: [
      "Începe echilibrarea cu metalul sau cu elementul cu indicele cel mai mare.",
      "Nu schimba indicii din formulele chimice – modifică numai coeficienții.",
      "Dacă apar fracții, înmulțești toți coeficienții cu numitorul fracției.",
      "Verifică mereu la final numărând fiecare element."
    ],
    examples: [
      {
        label: "arderea magneziului",
        given: "$Mg + O_2 \\rightarrow MgO$ (neechilibrată)",
        ask: "echilibrați ecuația",
        solve: "O: stânga 2, dreapta 1 → coef. 2 la MgO: $Mg + O_2 \\rightarrow 2MgO$. Mg: stânga 1, dreapta 2 → coef. 2 la Mg: $2Mg + O_2 \\rightarrow 2MgO$.",
        check: "Stânga: 2Mg, 2O. Dreapta: 2Mg, 2O ✓.",
        answer: "$2Mg + O_2 \\rightarrow 2MgO$"
      },
      {
        label: "arderea fierului",
        given: "$Fe + O_2 \\rightarrow Fe_2O_3$ (neechilibrată)",
        ask: "echilibrați ecuația",
        solve: "Fe: x în stânga, 2 în dreapta. O: 2y în stânga, 3 în dreapta. MCM(2,3)=6 → O₂: coef. 3, Fe₂O₃: coef. 2, Fe: coef. 4.",
        check: "Stânga: 4Fe, 6O. Dreapta: 4Fe, 6O ✓.",
        answer: "$4Fe + 3O_2 \\rightarrow 2Fe_2O_3$"
      },
      {
        label: "arderea glucozei",
        given: "$C_6H_{12}O_6 + O_2 \\rightarrow CO_2 + H_2O$ (neechilibrată)",
        ask: "echilibrați ecuația",
        solve: "C: 6 → coef. 6 la $CO_2$. H: 12 → coef. 6 la $H_2O$. O: stânga O₂+6 = dreapta 12+6=18 → coef. 6 la $O_2$.",
        answer: "$C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O$"
      }
    ],
    exercises: [
      "Echilibrați: $H_2 + O_2 \\rightarrow H_2O$.",
      "Echilibrați: $Al + Cl_2 \\rightarrow AlCl_3$.",
      "Echilibrați: $Ca + H_2O \\rightarrow Ca(OH)_2 + H_2$.",
      "Câte molecule de $H_2O$ se formează la arderea a 2 molecule de $H_2$ (ecuația echilibrată)?"
    ]
  },

  "u4-l3-legea-conservarii": {
    learn: "Aplicăm legea conservării masei pentru a calcula masa substanțelor implicate în reacții chimice.",
    terms: [
      "<strong>Legea conservării masei</strong> (Lomonosov–Lavoisier): masa totală a reactanților = masa totală a produselor.",
      "<strong>Masă molară M</strong>: masa unui mol de substanță (g/mol); $M = \\sum A_r$ atomilor din formulă.",
      "<strong>Mol</strong>: $6{,}022 \\times 10^{23}$ particule (numărul lui Avogadro).",
      "<strong>Raport stoechiometric</strong>: raportul molar dat de coeficienții ecuației.",
      "<strong>Bilanț de masă</strong>: $m_{reactanți} = m_{produse}$."
    ],
    properties: [
      "Legea conservării masei: reacțiile chimice nu creează și nu distrug materie.",
      "$\\sum m_{reactanți} = \\sum m_{produse}$ (chiar dacă un produs gazos se pierde).",
      "Masa molară: $M(H_2O) = 2 \\cdot 1 + 16 = 18$ g/mol.",
      "Calculul stoechiometric: numărul de moli × masa molară = masa în grame.",
      "Raportul masic se stabilește din coeficienți × mase molare."
    ],
    steps: [
      "Scrie și echilibrează ecuația chimică.",
      "Calculează masele molare ale substanțelor implicate.",
      "Stabilește raportul molar din coeficienți.",
      "Calculează masa necunoscută prin regulă de trei simplă."
    ],
    tips: [
      "Legea conservării masei: suma maselor totale nu se schimbă.",
      "Dacă un produs gazos se pierde (ex: $CO_2$), reziduul solid e mai ușor – dar suma totală e conservată.",
      "Masa molară se calculează adunând $A_r$ ale tuturor atomilor din formulă.",
      "Verificare: $m_{reactanți} = m_{produse}$."
    ],
    examples: [
      {
        label: "bilanț simplu",
        given: "$2Mg + O_2 \\rightarrow 2MgO$; m(Mg) = 48 g, m($O_2$) = 32 g",
        ask: "masa de $MgO$ formată",
        solve: "Legea conservării masei: $m(MgO) = m(Mg) + m(O_2) = 48 + 32 = 80$ g.",
        answer: "$m(MgO) = 80$ g"
      },
      {
        label: "masă molară",
        given: "$H_2SO_4$",
        ask: "calculați masa molară",
        solve: "$M(H_2SO_4) = 2 \\cdot 1 + 32 + 4 \\cdot 16 = 2 + 32 + 64 = 98$ g/mol.",
        answer: "$M(H_2SO_4) = 98$ g/mol"
      },
      {
        label: "calcul stoechiometric",
        given: "$2H_2 + O_2 \\rightarrow 2H_2O$; 4 g de $H_2$",
        ask: "masa de $H_2O$ formată",
        solve: "$M(H_2) = 2$ g/mol → 4 g = 2 mol $H_2$. Din ecuație: 2 mol $H_2$ → 2 mol $H_2O$. $M(H_2O) = 18$ g/mol → $2 \\times 18 = 36$ g.",
        answer: "36 g $H_2O$"
      }
    ],
    exercises: [
      "Calculați masa molară a: $NaCl$, $CaCO_3$, $H_2SO_4$, $Al_2O_3$.",
      "$2Na + Cl_2 \\rightarrow 2NaCl$. Câți grame de $NaCl$ se obțin din 46 g de $Na$?",
      "La arderea a 12 g C se formează $CO_2$. Ce masă de $CO_2$ se obține? ($C + O_2 \\rightarrow CO_2$)",
      "De ce masa unui corp care rugineste creste? Aplicați legea conservării masei."
    ]
  },

  "u4-l4-tipuri-reactii": {
    learn: "Clasificăm reacțiile chimice în sinteză, descompunere, substituție și schimb ionic.",
    terms: [
      "<strong>Sinteză (combinare)</strong>: A + B → AB (mai mulți reactanți → 1 produs).",
      "<strong>Descompunere</strong>: AB → A + B (1 reactant → mai mulți produși).",
      "<strong>Substituție (înlocuire)</strong>: A + BC → AC + B (un element înlocuieste altul din compus).",
      "<strong>Schimb ionic (dublă substituție)</strong>: AB + CD → AD + CB.",
      "<strong>Combustie</strong>: ardere cu $O_2$, cu degajare de căldură și lumină.",
      "<strong>Seria activității metalelor</strong>: metalul mai activ înlocuieste cel mai puțin activ."
    ],
    properties: [
      "Sinteză: 2 sau mai mulți reactanți → 1 singur produs (ex: $2H_2 + O_2 \\rightarrow 2H_2O$).",
      "Descompunere: 1 reactant → 2 sau mai mulți produși (ex: $2HgO \\rightarrow 2Hg + O_2$).",
      "Substituție: metalul mai reactiv înlocuieste pe cel mai puțin reactiv (ex: $Fe + CuSO_4$).",
      "Schimb ionic: 2 săruri/compuși ionici formează 2 compuși noi; merge dacă se formează ↓, ↑ sau $H_2O$.",
      "Combustia este o reacție de sinteză sau oxidare cu eliberare de energie."
    ],
    steps: [
      "Numără substanțele reactante și produse.",
      "Sinteză: mai mulți reactanți → 1 produs.",
      "Descompunere: 1 reactant → mai mulți produși.",
      "Element simplu apare sau dispare → substituție.",
      "Doi compuși ionici schimbă parteneri → schimb ionic."
    ],
    tips: [
      "Combustia completă a compușilor cu C și H → $CO_2 + H_2O$.",
      "Descompunerea are nevoie de obicei de energie (căldură ∆, lumină, curent electric).",
      "Schimbul ionic merge la capăt numai dacă se formează precipitat ($\\downarrow$), gaz ($\\uparrow$) sau apă.",
      "Seria activității: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au."
    ],
    examples: [
      {
        label: "sinteză",
        given: "$2H_2 + O_2 \\rightarrow 2H_2O$",
        ask: "tipul reacției",
        solve: "Doi reactanți simpli formează un singur produs ($H_2O$) → reacție de sinteză.",
        answer: "sinteză"
      },
      {
        label: "descompunere",
        given: "$2HgO \\xrightarrow{\\Delta} 2Hg + O_2$",
        ask: "tipul reacției",
        solve: "Un singur reactant ($HgO$) se descompune la încălzire în două produse ($Hg$ și $O_2$) → descompunere.",
        answer: "descompunere"
      },
      {
        label: "substituție",
        given: "$Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$",
        ask: "tipul reacției și de ce are loc",
        solve: "Fe (mai reactiv decât Cu) înlocuieste Cu din $CuSO_4$ → substituție. Fierul se acoperă cu un depozit roșu de cupru.",
        answer: "substituție; Fe este mai activ decât Cu"
      },
      {
        label: "schimb ionic",
        given: "$NaCl + AgNO_3 \\rightarrow AgCl \\downarrow + NaNO_3$",
        ask: "tipul reacției și de ce merge la capăt",
        solve: "Doi compuși ionici schimbă anionii. Se formează $AgCl$ precipitat alb (insolubil) → schimb ionic.",
        answer: "schimb ionic; merge la capăt datorită precipitatului $AgCl\\downarrow$"
      }
    ],
    exercises: [
      "Clasificați: $C + O_2 \\rightarrow CO_2$; $2KClO_3 \\xrightarrow{\\Delta} 2KCl + 3O_2$; $Zn + H_2SO_4 \\rightarrow ZnSO_4 + H_2$.",
      "De ce $Fe + CuSO_4 \\rightarrow FeSO_4 + Cu$ este substituție și nu schimb ionic?",
      "Echilibrați și clasificați: $Na + H_2O \\rightarrow NaOH + H_2$.",
      "Ce tip de reacție este combustia metanului: $CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$?"
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 5 – Oxizi
  // ══════════════════════════════════════════════════════════

  "u5-l1-definitie-clasificare": {
    learn: "Definim oxizii, le scriem formulele și îi clasificăm în bazici și acizi.",
    terms: [
      "<strong>Oxid</strong>: compus binar format din oxigen și un alt element.",
      "<strong>Oxid bazic (metalic)</strong>: metal + O; reacționează cu apa → baze.",
      "<strong>Oxid acid (anhidridă)</strong>: nemetal + O; reacționează cu apa → acizi.",
      "<strong>Oxid indiferent</strong>: nu reacționează cu apa (ex: $CO$, $NO$).",
      "<strong>Oxid amfoter</strong>: reacționează și cu acizi și cu baze (ex: $Al_2O_3$, $ZnO$)."
    ],
    properties: [
      "Oxid = compus binar cu O; formula generală: $E_xO_y$ (indicii din valențe).",
      "Oxigen apare mereu cu valența II în oxizi.",
      "Oxid metalic (bazic): metal din stânga/centru tabelului + O₂.",
      "Oxid nemetalic (acid/anhidridă): nemetal din dreapta tabelului + O₂.",
      "Reacția de formare: element + O₂ → oxid (cu sau fără catalizator/căldură)."
    ],
    steps: [
      "Verifică dacă compusul este binar și conține O.",
      "Celălalt element este metal → oxid bazic; nemetal → oxid acid.",
      "Scrie formula cu valențele (O mereu II): inversează valențele → indicii.",
      "Denumire: 'oxid de [element]' sau 'dioxid / trioxid de [element]'."
    ],
    tips: [
      "Oxizii metalici + H₂O → baze (hidroxizi).",
      "Oxizii nemetalici + H₂O → acizi (oxoacizi).",
      "CO și NO sunt indiferenți – excepții importante de memorat.",
      "Anhidridă = oxid acid (termeni echivalenți)."
    ],
    examples: [
      {
        label: "oxid metalic",
        given: "Ca (val.II) + O₂",
        ask: "formula oxidului și clasificarea",
        solve: "Ca(II) + O(II): valențe egale → 1:1. Formula: $CaO$. Ca = metal → oxid metalic (bazic).",
        answer: "$CaO$ – oxid metalic (bazic)"
      },
      {
        label: "oxid nemetalic",
        given: "C (val.IV) + O₂",
        ask: "formula și clasificarea",
        solve: "C(IV) + O(II): MCM(4,2)=4 → C: 1, O: 2. Formula: $CO_2$. C = nemetal → oxid acid.",
        answer: "$CO_2$ – oxid acid (nemetalic)"
      },
      {
        label: "nomenclatură",
        given: "$SO_3$",
        ask: "denumirea și tipul",
        solve: "S: 1 atom, O: 3 atomi → valența S = 3×2 = VI. Denumire: trioxid de sulf (anhidridă sulfurică). S = nemetal → oxid acid.",
        answer: "trioxid de sulf; oxid acid"
      }
    ],
    exercises: [
      "Scrieți formulele: oxid de magneziu (Mg II), dioxid de sulf (S IV), oxid de fier(III) (Fe III), trioxid de sulf (S VI).",
      "Clasificați ca bazic sau acid: $Na_2O$, $SO_2$, $Fe_2O_3$, $CO_2$, $CuO$.",
      "Scrieți ecuația formării $MgO$ prin arderea magneziului.",
      "De ce $CO_2$ se numește anhidridă carbonică?"
    ]
  },

  "u5-l2-oxizi-metalici": {
    learn: "Descriem proprietățile oxizilor metalici și scriem ecuațiile reacțiilor lor caracteristice.",
    terms: [
      "<strong>Oxid bazic</strong>: oxid metalic care formează baze cu apa.",
      "<strong>Hidroxid</strong>: baza formată din oxid metalic + apă.",
      "<strong>Neutralizare</strong>: reacția oxid bazic + acid → sare + apă.",
      "<strong>Oxid amfoter</strong>: reacționează atât cu acizi cât și cu baze tari ($Al_2O_3$, $ZnO$).",
      "<strong>Anhidridă bazică</strong>: termen echivalent cu oxid bazic."
    ],
    properties: [
      "Obținere: arderea metalului cu O₂ (ex: $4Fe + 3O_2 \\rightarrow 2Fe_2O_3$).",
      "Reacție cu apa → hidroxid: $MO + H_2O \\rightarrow M(OH)_2$ (nu toți!)",
      "Reacție cu acid → sare + apă: $CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$.",
      "Reacție cu oxid acid → sare: $CaO + CO_2 \\rightarrow CaCO_3$.",
      "$Fe_2O_3$ nu reacționează direct cu apa rece; $CaO$ reacționează viguros."
    ],
    steps: [
      "Obținere: $2M + O_2 \\rightarrow 2MO$ (sau ajustați coeficienții după valență).",
      "Reacție cu apă: $MO + H_2O \\rightarrow M(OH)_2$.",
      "Reacție cu acid: $MO + 2HCl \\rightarrow MCl_2 + H_2O$.",
      "Verificați echilibrarea fiecărei ecuații."
    ],
    tips: [
      "Var nestins = $CaO$; var stins = $Ca(OH)_2$; $CaO + H_2O \\rightarrow Ca(OH)_2$ (exotermă).",
      "Nu toți oxizii metalici reacționează cu apa ($Fe_2O_3$ nu reacționează direct cu apa rece).",
      "$Na_2O + H_2O \\rightarrow 2NaOH$ – reacție violentă (alcali).",
      "Oxidul de cupru ($CuO$) este negru; sulfatul de cupru ($CuSO_4$) este albastru – schimbare de culoare vizibilă."
    ],
    examples: [
      {
        label: "obținere CaO",
        given: "arderea calciului",
        ask: "ecuația formării $CaO$",
        solve: "$2Ca + O_2 \\rightarrow 2CaO$. Verificare: 2Ca, 2O → 2Ca, 2O ✓.",
        answer: "$2Ca + O_2 \\rightarrow 2CaO$"
      },
      {
        label: "reacție cu apă",
        given: "$CaO$ + apă",
        ask: "produsul și ecuația",
        solve: "$CaO + H_2O \\rightarrow Ca(OH)_2$. Hidroxid de calciu (var stins); reacție exotermă.",
        answer: "$CaO + H_2O \\rightarrow Ca(OH)_2$"
      },
      {
        label: "reacție cu acid",
        given: "$CuO + H_2SO_4$ diluat",
        ask: "produsele și ecuația",
        solve: "$CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$. $CuO$ negru se dizolvă → soluție albastră de $CuSO_4$.",
        answer: "$CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$"
      }
    ],
    exercises: [
      "Echilibrați: $Fe + O_2 \\rightarrow Fe_3O_4$.",
      "Ce se obține când $Na_2O$ reacționează cu apa? Scrieți ecuația.",
      "Scrieți ecuația reacției $MgO$ cu $HCl$.",
      "De ce $CaO$ (var nestins) se foloseste în construcții?"
    ]
  },

  "u5-l3-oxizi-nemetalici": {
    learn: "Descriem proprietățile oxizilor acizi și scriem ecuațiile reacțiilor lor caracteristice.",
    terms: [
      "<strong>Oxid acid (anhidridă)</strong>: oxid nemetalic care formează acizi cu apa.",
      "<strong>Oxoacid</strong>: acid format din oxid acid + apă.",
      "<strong>Anhidridă carbonică</strong>: $CO_2$ (oxid acid al carbonului).",
      "<strong>Anhidridă sulfuroasă</strong>: $SO_2$; <strong>anhidridă sulfurică</strong>: $SO_3$.",
      "<strong>Ploaia acidă</strong>: formată din $SO_2$, $NO_2$ + vaporii de apă din atmosferă."
    ],
    properties: [
      "Obținere: arderea nemetalului cu O₂ (ex: $S + O_2 \\rightarrow SO_2$).",
      "Reacție cu apa → acid: $SO_3 + H_2O \\rightarrow H_2SO_4$.",
      "Reacție cu baza → sare + apă: $CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O$.",
      "Reacție cu oxid bazic → sare: $CO_2 + CaO \\rightarrow CaCO_3$.",
      "Oxizii acizi contribuie la poluarea atmosferică și ploaia acidă."
    ],
    steps: [
      "Obținere: $nemetal + O_2 \\rightarrow oxid\\,acid$.",
      "Reacție cu apa: $oxid\\,acid + H_2O \\rightarrow acid$.",
      "Reacție cu baza: $oxid\\,acid + 2MOH \\rightarrow M_2A + H_2O$.",
      "Echilibrați ecuațiile."
    ],
    tips: [
      "$CO_2 + H_2O \\rightarrow H_2CO_3$ (acid carbonic, slab, instabil – se descompune rapid).",
      "$SO_3 + H_2O \\rightarrow H_2SO_4$ (acid sulfuric concentrat – extrem de coroziv!).",
      "Ploaia acidă: $SO_2 + H_2O \\rightarrow H_2SO_3$ (acid sulfuros).",
      "Anhidridă = oxid acid (termeni echivalenți)."
    ],
    examples: [
      {
        label: "obținere SO₂",
        given: "arderea sulfului",
        ask: "ecuația formării $SO_2$",
        solve: "$S + O_2 \\rightarrow SO_2$. Sulful arde cu flacără albăstruie.",
        answer: "$S + O_2 \\rightarrow SO_2$"
      },
      {
        label: "reacție cu apă",
        given: "$CO_2 + H_2O$",
        ask: "produsul și ecuația",
        solve: "$CO_2 + H_2O \\rightarrow H_2CO_3$ (acid carbonic, slab și instabil).",
        answer: "$CO_2 + H_2O \\rightarrow H_2CO_3$"
      },
      {
        label: "reacție cu baza",
        given: "$CO_2 + NaOH$ (exces)",
        ask: "produsele și ecuația",
        solve: "$CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O$. Se obține carbonat de sodiu (sodă de rufe) și apă.",
        answer: "$CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O$"
      }
    ],
    exercises: [
      "Scrieți ecuația arderii carbonului: $C + O_2 \\rightarrow ?$.",
      "$SO_3$ reacționează cu apa. Ce se obține? Scrieți ecuația.",
      "De ce ploaia acidă este periculoasă? Ce oxizi acizi contribuie la formarea ei?",
      "Comparați $CO_2$ și $SO_3$: asemănări (tip oxid) și deosebiri (acid format cu apa)."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 6 – Acizi
  // ══════════════════════════════════════════════════════════

  "u6-l1-acizi-definitie": {
    learn: "Definim acizii, îi clasificăm în hidracizi și oxoacizi și scriem formulele și denumirile corect.",
    terms: [
      "<strong>Acid</strong>: substanță care cedează protoni ($H^+$) în soluție apoasă.",
      "<strong>pH</strong>: măsura acidității; pH < 7 = acid; pH = 7 = neutru; pH > 7 = bazic.",
      "<strong>Hidracid</strong>: acid fără oxigen (ex: $HCl$, $HBr$, $H_2S$).",
      "<strong>Oxoacid (oxacid)</strong>: acid cu oxigen (ex: $H_2SO_4$, $HNO_3$, $H_3PO_4$).",
      "<strong>Acid tare</strong>: ionizare completă în apă ($HCl$, $H_2SO_4$, $HNO_3$).",
      "<strong>Acid slab</strong>: ionizare parțială ($H_2CO_3$, $CH_3COOH$).",
      "<strong>Hârtie de turnesol</strong>: indicator; devine roșie în mediu acid."
    ],
    properties: [
      "Soluția acidă: înroșeste hârtia de turnesol albastru, pH < 7.",
      "Hidracizi: formula HₙX (X = halogen sau S); ex: HCl, HBr, HI, HF, H₂S.",
      "Oxoacizi: formula HₙXOₘ; ex: H₂SO₄, HNO₃, H₃PO₄, H₂CO₃.",
      "Nomenclatură hidracizi: 'acid + [rădăcina]hidric' (Cl→clor→acid clorhidric).",
      "Nomenclatură oxoacizi: 'acid + [element] + ic' (mai oxidat) sau 'os' (mai puțin oxidat)."
    ],
    steps: [
      "Verifică dacă formula începe cu H.",
      "Conține și O → oxoacid; nu conține O → hidracid.",
      "Hidracid: acid + rădăcina halogenuluui + hidric (ex: HCl = acid clorhidric).",
      "Oxoacid: acid + element + ic/os (ex: H₂SO₄ = acid sulfuric; H₂SO₃ = acid sulfuros)."
    ],
    tips: [
      "Acizi tari: $HCl$, $H_2SO_4$, $HNO_3$ – ionizare completă → corozivi.",
      "Acizi slabi: $H_2CO_3$, $CH_3COOH$ (oțetul) – ionizare parțială.",
      "$H_2SO_4$ concentrat: se diluează turnând ACID în APĂ, nu invers (reacție puternic exotermă).",
      "Acidul din stomac este $HCl$; acidul din oțet este $CH_3COOH$."
    ],
    examples: [
      {
        label: "hidracid",
        given: "$HCl$",
        ask: "tipul și denumirea acidului",
        solve: "$HCl$: H + Cl, fără O → hidracid. Cl → rădăcina 'clor' → acid clorhidric.",
        answer: "hidracid; acid clorhidric"
      },
      {
        label: "oxoacid",
        given: "$H_2SO_4$",
        ask: "tipul și denumirea",
        solve: "$H_2SO_4$: H + S + O → oxoacid. S în stare de oxidare +VI (val. max) → acid sulfuric.",
        answer: "oxoacid; acid sulfuric"
      },
      {
        label: "formula din denumire",
        given: "acid azotic",
        ask: "formula chimică",
        solve: "Acid azotic = $HNO_3$ (N val. V, acid oxoacid al azotului).",
        answer: "$HNO_3$"
      }
    ],
    exercises: [
      "Clasificați și denumiți: $HBr$, $H_3PO_4$, $H_2S$, $HNO_2$.",
      "Scrieți formula pentru: acid fosforic, acid fluorhidric, acid carbonic.",
      "Ce culoare capătă hârtia de turnesol în contact cu o soluție acidă?",
      "De ce acidul sulfuric se diluează turnând acidul în apă și nu invers?"
    ]
  },

  "u6-l2-acizi-proprietati": {
    learn: "Descriem proprietățile chimice ale acizilor și scriem ecuațiile reacțiilor lor principale.",
    terms: [
      "<strong>Reacție acid + metal</strong>: acid + M activ → sare + $H_2\\uparrow$.",
      "<strong>Reacție acid + oxid bazic</strong>: acid + MO → sare + $H_2O$.",
      "<strong>Neutralizare</strong>: acid + baza → sare + $H_2O$.",
      "<strong>Seria activității metalelor</strong>: metalele mai active decât H reacționează cu acizii.",
      "<strong>Corrosivitate</strong>: acizii atacă metale, piele, textile."
    ],
    properties: [
      "Acid + metal activ (mai activ decât H): $M + 2HCl \\rightarrow MCl_2 + H_2\\uparrow$.",
      "Acid + oxid bazic: $MO + H_2SO_4 \\rightarrow MSO_4 + H_2O$.",
      "Acid + baza (neutralizare): $NaOH + HCl \\rightarrow NaCl + H_2O$.",
      "Nu toate metalele reacționează cu acizii diluați: Cu, Ag, Au, Pt nu reacționează cu HCl.",
      "Proprietăți generale: gust acru, corozivi, înroșesc turnesolul, pH < 7."
    ],
    steps: [
      "Acid + metal: $M + n \\cdot HX \\rightarrow MX_n + \\frac{n}{2}H_2\\uparrow$.",
      "Acid + oxid: $MO + 2HCl \\rightarrow MCl_2 + H_2O$.",
      "Neutralizare: $MOH + HX \\rightarrow MX + H_2O$.",
      "Echilibrați și verificați."
    ],
    tips: [
      "H₂ se degajă ca gaz (bule) → metodă de recunoaștere a reacției acid + metal.",
      "Cu și Ag nu reacționează cu $HCl$ diluat sau $H_2SO_4$ diluat.",
      "Neutralizare: produsele sunt întotdeauna sare + apă.",
      "Schimbarea de culoare $CuO$ (negru) → $CuSO_4$ (albastru) vizibilă la reacția cu $H_2SO_4$."
    ],
    examples: [
      {
        label: "acid + metal",
        given: "$Zn + HCl$ diluat",
        ask: "produsele și ecuația echilibrată",
        solve: "$Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow$. Se degajă hidrogen gazos și se formează clorură de zinc (incoloră).",
        answer: "$Zn + 2HCl \\rightarrow ZnCl_2 + H_2\\uparrow$"
      },
      {
        label: "acid + oxid",
        given: "$Fe_2O_3 + H_2SO_4$",
        ask: "produsele și ecuația",
        solve: "$Fe_2O_3 + 3H_2SO_4 \\rightarrow Fe_2(SO_4)_3 + 3H_2O$. Sulfat de fier(III) galben-brun și apă.",
        answer: "$Fe_2O_3 + 3H_2SO_4 \\rightarrow Fe_2(SO_4)_3 + 3H_2O$"
      },
      {
        label: "neutralizare",
        given: "$NaOH + HNO_3$",
        ask: "produsele și ecuația",
        solve: "$NaOH + HNO_3 \\rightarrow NaNO_3 + H_2O$. Azotat de sodiu (sare solubilă) și apă.",
        answer: "$NaOH + HNO_3 \\rightarrow NaNO_3 + H_2O$"
      }
    ],
    exercises: [
      "Scrieți ecuația reacției $Mg + H_2SO_4$ diluat.",
      "Ce se obține la neutralizarea $Ca(OH)_2$ cu $HCl$? Scrieți ecuația.",
      "De ce cuprul nu reacționează cu $HCl$ diluat? (Indiciu: seria activității)",
      "Calculați masa de $ZnCl_2$ obținută din 65 g Zn (M=65 g/mol) cu $HCl$ în exces."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 7 – Baze (Hidroxizi)
  // ══════════════════════════════════════════════════════════

  "u7-l1-baze-definitie": {
    learn: "Definim bazele, le clasificăm în solubile și insolubile și scriem formulele și denumirile corect.",
    terms: [
      "<strong>Baza</strong>: substanță care eliberează ioni $OH^-$ în soluție apoasă.",
      "<strong>Ion hidroxid</strong>: $OH^-$ (grupare funcțională a bazelor).",
      "<strong>Alcali</strong>: baze solubile puternice (NaOH, KOH, Ca(OH)₂, Ba(OH)₂).",
      "<strong>Baza tare</strong>: ionizare completă (NaOH, KOH).",
      "<strong>Baza slabă</strong>: ionizare parțială ($NH_3$ în soluție apoasă).",
      "<strong>Turnesol albastru</strong>: indicator; rămâne albastru (sau devine albastru dacă era roșu) în mediu bazic.",
      "<strong>Fenolftaleina</strong>: incoloră în acid/neutru, roz-violet în baze."
    ],
    properties: [
      "Formula generală: $M(OH)_n$ (n = valența metalului).",
      "Baze solubile (alcali): NaOH (sodă caustică), KOH (potasă), Ca(OH)₂ (var stins), Ba(OH)₂.",
      "Baze insolubile: Fe(OH)₃, Cu(OH)₂ (albastru), Al(OH)₃, Zn(OH)₂, Mg(OH)₂.",
      "Soluția bazică: pH > 7, albăstreste turnesolul, senzație alunecoasă.",
      "Bazele tari sunt corozive – provoacă arsuri chimice (sodă caustică)."
    ],
    steps: [
      "Verifică dacă formula conține grupe $OH$.",
      "Numără grupele OH → valența metalului.",
      "Denumire: 'hidroxid de [metal]' (cu valență dacă metalul e polivalent).",
      "Verifică solubilitatea: metale alcaline/alcalino-pământoase → solubile; tranziție → insolubile."
    ],
    tips: [
      "NaOH = sodă caustică; Ca(OH)₂ = var stins; NH₃(aq) = amoniac (baza fără metal).",
      "Bazele tari sunt periculoase – provoacă arsuri chimice mai grave decât mulți acizi.",
      "Ca(OH)₂ este utilizat în construcții (tencuiala), dezinfecție, industria alimentară.",
      "Fenolftaleina: incoloră → roz în prezența bazei = schimbare de culoare vizuală dramatică."
    ],
    examples: [
      {
        label: "formula bazei",
        given: "hidroxid de calciu (Ca val.II)",
        ask: "formula chimică",
        solve: "Ca are valența II → 2 grupe OH → $Ca(OH)_2$. OH se pune în paranteză deoarece indicele este 2.",
        answer: "$Ca(OH)_2$"
      },
      {
        label: "denumire",
        given: "$Fe(OH)_3$",
        ask: "denumirea și solubilitatea",
        solve: "Fier cu 3 grupe OH → val. III. Denumire: hidroxid de fier(III). Metal de tranziție → insolubil.",
        answer: "hidroxid de fier(III); insolubil (precipitat brun-roșcat)"
      },
      {
        label: "identificare",
        given: "soluție necunoscută → fenolftaleina devine roz",
        ask: "acid sau baza?",
        solve: "Fenolftaleina devine roz în mediu bazic (pH > 7) → soluția este bazică.",
        answer: "baza (soluție bazică, pH > 7)"
      }
    ],
    exercises: [
      "Scrieți formulele: hidroxid de sodiu, hidroxid de aluminiu, hidroxid de fier(II).",
      "Ce culoare capătă hârtia de turnesol în prezența $NaOH$?",
      "De ce $NaOH$ se numește sodă caustică?",
      "Care baze sunt solubile în apă? Dați 3 exemple."
    ]
  },

  "u7-l2-baze-proprietati": {
    learn: "Descriem proprietățile chimice ale bazelor și scriem ecuațiile reacțiilor lor principale.",
    terms: [
      "<strong>Neutralizare</strong>: baza + acid → sare + apă.",
      "<strong>Precipitat</strong>: substanță insolubilă formată în soluție, notată cu $\\downarrow$.",
      "<strong>Descompunere termică</strong>: $M(OH)_n \\xrightarrow{\\Delta} MO + H_2O$.",
      "<strong>Testul CO₂</strong>: $Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$ (soluție tulbure).",
      "<strong>Hidroxid amfoter</strong>: reacționează și cu acizi și cu baze ($Al(OH)_3$, $Zn(OH)_2$)."
    ],
    properties: [
      "Baza + acid (neutralizare) → sare + apă.",
      "Baza + oxid acid → sare + apă (ex: $Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$).",
      "Baza insolubila + Δ → oxid metalic + apă (ex: $Cu(OH)_2 \\rightarrow CuO + H_2O$).",
      "Baza solubilă + sare solubilă → precipitat (baza insolubilă) + sare nouă.",
      "Proprietăți: gust săpunos, pH > 7, senzație alunecoasă, corozive."
    ],
    steps: [
      "Baza + acid: $MOH + HX \\rightarrow MX + H_2O$.",
      "Baza + oxid acid: $Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$.",
      "Descompunere: $M(OH)_n \\xrightarrow{\\Delta} MO_{n/2} + \\frac{n}{2}H_2O$.",
      "Precipitare: $CuSO_4 + 2NaOH \\rightarrow Cu(OH)_2\\downarrow + Na_2SO_4$."
    ],
    tips: [
      "Apa de var ($Ca(OH)_2$) limpede + $CO_2$ → tulburare albă = test clasic pentru $CO_2$.",
      "Descompunere $Cu(OH)_2$: albastru → $CuO$ negru (schimbare de culoare vizibilă).",
      "$Al(OH)_3$ este amfoter: reacționează cu $HCl$ (acid) ȘI cu $NaOH$ (baza).",
      "Nu confundați $CaO$ (var nestins, oxid) cu $Ca(OH)_2$ (var stins, baza)."
    ],
    examples: [
      {
        label: "neutralizare",
        given: "$KOH + H_2SO_4$",
        ask: "produsele și ecuația echilibrată",
        solve: "$2KOH + H_2SO_4 \\rightarrow K_2SO_4 + 2H_2O$. Sulfat de potasiu și apă.",
        answer: "$2KOH + H_2SO_4 \\rightarrow K_2SO_4 + 2H_2O$"
      },
      {
        label: "testul CO₂",
        given: "$Ca(OH)_2$ (apă de var) + $CO_2$",
        ask: "produsele, ecuația și ce observăm",
        solve: "$Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$. Precipitat alb de $CaCO_3$ → soluția se tulbură.",
        answer: "$Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$; soluție albă tulbure"
      },
      {
        label: "descompunere termică",
        given: "$Cu(OH)_2$ la încălzire",
        ask: "produsele și ecuația",
        solve: "$Cu(OH)_2 \\xrightarrow{\\Delta} CuO + H_2O$. Culoarea albastră a $Cu(OH)_2$ devine neagră ($CuO$).",
        answer: "$Cu(OH)_2 \\xrightarrow{\\Delta} CuO + H_2O$"
      }
    ],
    exercises: [
      "Scrieți ecuația neutralizării $Ca(OH)_2$ cu $HCl$.",
      "Cum identificăm $CO_2$ în laborator cu apa de var? Descrieți reacția.",
      "Ce se obține la descompunerea termică a $Fe(OH)_3$? Scrieți ecuația.",
      "Calculați masa de $NaCl$ obținută din neutralizarea a 40 g $NaOH$ cu $HCl$ în exces."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 8 – Săruri
  // ══════════════════════════════════════════════════════════

  "u8-l1-saruri-definitie": {
    learn: "Definim sărurile, le clasificăm și le scriem formulele și denumirile corect.",
    terms: [
      "<strong>Sare</strong>: compus ionic format din cationul unui metal și anionul unui acid.",
      "<strong>Sare medie (normală)</strong>: neutru electric, fără H sau OH suplimentar (ex: $NaCl$, $CaSO_4$).",
      "<strong>Sare acidă</strong>: mai conține H în anion (ex: $NaHCO_3$, $KHSO_4$).",
      "<strong>Sare bazică</strong>: mai conține OH (ex: $Cu(OH)Cl$).",
      "<strong>Anioni principali</strong>: $Cl^-$ (clorur-), $SO_4^{2-}$ (sulfat), $NO_3^-$ (azotat), $CO_3^{2-}$ (carbonat), $PO_4^{3-}$ (fosfat), $HCO_3^-$ (bicarbonat)."
    ],
    properties: [
      "Formula: cationul (metalul) primul, anionul al doilea.",
      "Neutralitate electrică: sarcina cationului × indicele = sarcina anionului × indicele.",
      "Săruri solubile: NaCl, KNO₃, Na₂SO₄, CaCl₂, MgSO₄.",
      "Săruri insolubile: BaSO₄, AgCl, CaCO₃, PbSO₄.",
      "Nomenclatură: anion-ură (din hidracizi) sau anion-at/it (din oxoacizi) + 'de' + metal."
    ],
    steps: [
      "Identifică cationul (metalul, cu valența lui) și anionul (derivat din acid).",
      "Inversează valențele/sarcinile → indicii; simplifică.",
      "Scrie formula: cation + anion (cu paranteze dacă indicele anionului > 1).",
      "Denumire: anion + 'de' + metal."
    ],
    tips: [
      "Anionii: $Cl^-$ → clorur-ă; $SO_4^{2-}$ → sulfat; $NO_3^-$ → azotat; $CO_3^{2-}$ → carbonat.",
      "$NaHCO_3$ (bicarbonat = sare acidă) ≠ $Na_2CO_3$ (carbonat = sare medie).",
      "$CaCO_3$ = calcarul, marmura, creta – insolubil, prezent în natură.",
      "La $Al_2(SO_4)_3$: sulfatul se pune în paranteză cu indicele 3."
    ],
    examples: [
      {
        label: "formula sării",
        given: "$Ca^{2+}$ și $Cl^-$",
        ask: "formula și denumirea sării",
        solve: "2 ioni $Cl^-$ pentru 1 $Ca^{2+}$ (sarcini: 2+ și 2×1− = 0). Formula: $CaCl_2$. Denumire: clorură de calciu.",
        answer: "$CaCl_2$; clorură de calciu"
      },
      {
        label: "denumire din formulă",
        given: "$Na_2SO_4$",
        ask: "denumirea sării",
        solve: "$Na^+$ (sodiu) + $SO_4^{2-}$ (sulfat) → sulfat de sodiu.",
        answer: "sulfat de sodiu"
      },
      {
        label: "sare acidă",
        given: "$NaHCO_3$",
        ask: "tipul sării și denumirea",
        solve: "Conține $HCO_3^-$ (anion acid cu H) → sare acidă. Denumire: bicarbonat de sodiu (hidrogenocarbonat de sodiu).",
        answer: "sare acidă; bicarbonat de sodiu"
      }
    ],
    exercises: [
      "Scrieți formula: azotat de potasiu, sulfat de magneziu, clorură de aluminiu, fosfat de calciu.",
      "Denumiți: $FeCl_3$, $BaSO_4$, $Na_3PO_4$, $KHCO_3$.",
      "Care săruri sunt insolubile: $NaCl$, $BaSO_4$, $AgCl$, $CaCO_3$, $KNO_3$?",
      "Ce diferență există între $Na_2CO_3$ și $NaHCO_3$?"
    ]
  },

  "u8-l2-saruri-obtinere": {
    learn: "Aplicăm metodele corecte de obținere a sărurilor și scriem ecuațiile corespunzătoare.",
    terms: [
      "<strong>Metal + nemetal → sare</strong>: reacție directă de sinteză (ex: $2Na + Cl_2 \\rightarrow 2NaCl$).",
      "<strong>Metal + acid → sare + H₂</strong>: reacție de substituție.",
      "<strong>Oxid bazic + acid → sare + H₂O</strong>: neutralizare oxid.",
      "<strong>Baza + acid → sare + H₂O</strong>: neutralizare.",
      "<strong>Sare + sare → precipitat</strong>: schimb ionic (merge dacă se formează ↓, ↑ sau H₂O).",
      "<strong>Oxid acid + baza → sare + H₂O</strong>."
    ],
    properties: [
      "Metal activ + nemetal → sare directă: $2Na + Cl_2 \\rightarrow 2NaCl$.",
      "Metal + acid diluat → sare + $H_2$: $Zn + H_2SO_4 \\rightarrow ZnSO_4 + H_2$.",
      "Oxid bazic + acid → sare + H₂O: $CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$.",
      "Baza + acid → sare + H₂O: $NaOH + HCl \\rightarrow NaCl + H_2O$.",
      "Precipitare: $BaCl_2 + Na_2SO_4 \\rightarrow BaSO_4\\downarrow + 2NaCl$."
    ],
    steps: [
      "Alege metoda în funcție de substanțele disponibile și de solubilitatea produsului.",
      "Scrie formulele corecte ale reactanților și produselor.",
      "Echilibrează ecuația.",
      "Verifică dacă reacția are loc (precipitat ↓, gaz ↑, sau apă → reacție completă)."
    ],
    tips: [
      "Neutralizarea acid-baza: cea mai versatilă metodă, dă săruri solubile.",
      "Precipitarea: alege ionii potriviți pentru a forma sarea insolubilă dorită.",
      "Schimbul ionic (sare + sare) merge la capăt numai dacă se formează $\\downarrow$, $\\uparrow$ sau $H_2O$.",
      "La săruri cu $CO_3^{2-}$ și acid → se degajă $CO_2\\uparrow$ (bule)."
    ],
    examples: [
      {
        label: "metal + acid",
        given: "$Fe + H_2SO_4$ diluat",
        ask: "ecuația formării sării",
        solve: "$Fe + H_2SO_4 \\rightarrow FeSO_4 + H_2\\uparrow$. Sulfat de fier(II) verde-pal și hidrogen gazos.",
        answer: "$Fe + H_2SO_4 \\rightarrow FeSO_4 + H_2\\uparrow$"
      },
      {
        label: "neutralizare",
        given: "$Ca(OH)_2 + H_3PO_4$",
        ask: "ecuația echilibrată",
        solve: "$3Ca(OH)_2 + 2H_3PO_4 \\rightarrow Ca_3(PO_4)_2\\downarrow + 6H_2O$. Fosfat de calciu (precipitat alb) și apă.",
        answer: "$3Ca(OH)_2 + 2H_3PO_4 \\rightarrow Ca_3(PO_4)_2\\downarrow + 6H_2O$"
      },
      {
        label: "precipitare",
        given: "$AgNO_3 + NaCl$",
        ask: "produsele și ecuația",
        solve: "$AgNO_3 + NaCl \\rightarrow AgCl\\downarrow + NaNO_3$. Precipitat alb de $AgCl$ (insolubil).",
        answer: "$AgNO_3 + NaCl \\rightarrow AgCl\\downarrow + NaNO_3$"
      }
    ],
    exercises: [
      "Scrieți ecuația obținerii $Na_2SO_4$ prin neutralizarea $NaOH$ cu $H_2SO_4$.",
      "Prin ce metodă obțineți $BaSO_4$ (insolubil)? Scrieți ecuația.",
      "Echilibrați: $Mg + HCl \\rightarrow MgCl_2 + H_2$.",
      "Calculați masa de $NaCl$ din $2Na + Cl_2 \\rightarrow 2NaCl$, pornind de la 46 g Na (M = 23 g/mol)."
    ]
  }

};

// ============================================================
//  RECAPITULĂRI (U1 și U2)
// ============================================================

const recapTopicsCh7 = {

  "u1-recap": {
    summary: "Substanțele pot fi pure (compoziție constantă, proprietăți fizice fixe) sau amestecuri (omogene – compoziție uniformă; eterogene – componente vizibile). Metodele de separare se aleg după natura componentelor. Proprietățile fizice permit identificarea substanțelor fără a le modifica chimic.",
    keys: [
      "Substanță pură: compoziție constantă, punct de topire/fierbere fix.",
      "Amestec omogen (soluție): un singur aspect, ex: apă cu sare.",
      "Amestec eterogen: faze vizibile, ex: nisip cu apă.",
      "Filtrare → solid + lichid; Distilare → lichide miscibile cu f.f. diferite.",
      "Cristalizare/Evaporare → solid dizolvat; Decantare → lichide nemiscibile.",
      "Densitate: $\\rho = \\dfrac{m}{V}$; corp plutește dacă $\\rho_{corp} < \\rho_{lichid}$."
    ],
    mistakes: [
      "Apa cu zahăr este amestec omogen, nu substanță pură.",
      "Filtrarea nu separă substanțe dizolvate (soluții) – numai solide nedizolvate.",
      "Distilare ≠ evaporare: distilarea recuperează solventul; evaporarea recuperează solvatul.",
      "Proprietățile fizice ≠ chimice: topirea este fizică; arderea este chimică."
    ],
    problem: {
      label: "evaluare unitate 1",
      given: "3 probe: apă distilată, saramură (apă + $NaCl$), nisip cu apă",
      ask: "clasificați fiecare și indicați metoda de separare pentru ultimele două",
      solve: "Apa distilată – substanță pură. Saramura – amestec omogen → cristalizare/evaporare. Nisip cu apă – amestec eterogen → filtrare sau decantare.",
      answer: "pură; omogen → cristalizare; eterogen → filtrare"
    },
    exercises: [
      "Un geolog găsește o rocă cu mai multe minerale vizibile. Ce tip de amestec este?",
      "Descrieți cum obțineți apă pură din apă de mare folosind aparatura de laborator.",
      "Densitatea aluminiului este 2,7 g/cm³. Calculați masa unui bloc cu volumul 40 cm³.",
      "Care proprietate fizică stă la baza separării alcoolului din apă?"
    ]
  },

  "u2-recap": {
    summary: "Atomul este format din nucleu (protoni Z + neutroni N) și înveliș electronic (electroni, Z la număr în atom neutru). Elementele chimice, organizate în tabelul periodic după Z crescător, au simboluri unice. Izotopii sunt atomi ai aceluiași element cu A diferit; masa atomică relativă este media lor ponderată.",
    keys: [
      "Z = nr. protoni = nr. electroni (atom neutru).",
      "A = Z + N; N = A − Z.",
      "Perioadă = nr. straturi electronice; Grupă = nr. electroni de valență.",
      "Izotopi: Z egal, A diferit (N diferit); proprietăți chimice identice.",
      "$\\bar{A} = \\sum A_i \\cdot p_i$ – masa atomică medie ponderată.",
      "Simbol: prima literă majusculă, a doua minusculă (Na, Cl, Fe, Cu)."
    ],
    mistakes: [
      "Z ≠ A: Z = nr. protoni; A = nr. masă (protoni + neutroni).",
      "Izotop ≠ izobar: izotopii au Z egal; izobarii au A egal.",
      "Electronii nu sunt în nucleu; masa lor este neglijabilă față de nucleu.",
      "Substanța simplă ≠ elementul chimic: $O_2$ ≠ O."
    ],
    problem: {
      label: "evaluare unitate 2",
      given: "$^{40}_{20}Ca$",
      ask: "determinați Z, N, nr. electroni, perioada, grupa; verificați dacă $^{42}_{20}Ca$ este izotop",
      solve: "Z = 20 (protoni), A = 40, N = 40 − 20 = 20. Atom neutru: 20 electroni. Ca este în perioada 4, grupa 2. $^{42}Ca$: Z = 20 egal → da, izotop al calciului.",
      answer: "Z=20, N=20, 20e⁻; p.4, g.2; $^{42}Ca$ este izotop al Ca"
    },
    exercises: [
      "Determinați compoziția nucleului pentru $^{56}_{26}Fe$.",
      "Scrieți simbolul $^A_ZX$ al atomului cu 8 protoni și 8 neutroni.",
      "Calculați masa atomică medie a Mg: 79% $^{24}Mg$, 10% $^{25}Mg$, 11% $^{26}Mg$.",
      "Localizați carbonul (Z = 6) în tabelul periodic: perioadă, grupă, nr. electroni de valență."
    ]
  },

  "u3-recap": {
    summary: "Electronii de valență determină tipul legăturii chimice. Legătura ionică (metal + nemetal, transfer de electroni, formare cationi/anioni) și covalentă (nemetal + nemetal, punere în comun) sunt cele două tipuri principale. Formulele chimice se scriu inversând valențele elementelor.",
    keys: [
      "Configurație electronică: K(2) L(8) M(...) – straturile se completează de la interior.",
      "Legătură ionică: transfer e⁻; metal → cation, nemetal → anion.",
      "Legătură covalentă: punere în comun; nemetal + nemetal.",
      "Regulă inversare valențe: $Al^{III}$ + $O^{II}$ → $Al_2O_3$ (MCM(3,2)=6).",
      "Compuși ionici: solide cristaline, conduători în soluție/topitură."
    ],
    mistakes: [
      "Nu confundați legătura ionică cu cea covalentă: NaCl ionic, $H_2O$ covalent.",
      "La formula ionică: simplificați indicii (Mg₂O₂ → MgO).",
      "NaCl nu este moleculă – este rețea cristalină ionică.",
      "Indicele 1 nu se scrie: NaCl, nu Na₁Cl₁."
    ],
    problem: {
      label: "evaluare U3",
      given: "Na (val.I) și S (val.II)",
      ask: "tipul de legătură, formula compusului și configurația lui Na (Z=11)",
      solve: "Na (metal) + S (nemetal) → legătură ionică. Na→Na⁺, S→S²⁻. Indicii: Na×2, S×1 → $Na_2S$. Configurație Na: K(2) L(8) M(1).",
      answer: "ionică; $Na_2S$; K(2) L(8) M(1)"
    },
    exercises: [
      "Scrieți configurația electronică pentru: Cl (Z=17), Ca (Z=20), Al (Z=13).",
      "Determinați formula compusului ionic format din $Mg^{2+}$ și $Br^-$.",
      "Câte perechi de electroni partajate are legătura triplă din $N_2$?",
      "Scrieți formula oxidului de fier(III) ($Fe$ val.III, $O$ val.II)."
    ]
  },

  "u4-recap": {
    summary: "Reacțiile chimice formează substanțe noi și se reprezintă prin ecuații chimice echilibrate (nr. atomi egal în ambii membri). Legea conservării masei: suma maselor reactanților = suma maselor produselor. Tipuri: sinteză, descompunere, substituție, schimb ionic.",
    keys: [
      "Transformare chimică: substanțe noi; indicii: gaz, precipitat, culoare, căldură.",
      "Echilibrare: se modifică coeficienții, nu indicii formulelor.",
      "Legea conservării masei: $\\sum m_{reactanți} = \\sum m_{produse}$.",
      "Sinteză: A+B→AB; Descompunere: AB→A+B; Substituție: A+BC→AC+B.",
      "Schimb ionic: AB+CD→AD+CB; merge dacă apare $\\downarrow$, $\\uparrow$ sau $H_2O$."
    ],
    mistakes: [
      "Nu modifica indicii (formulele) la echilibrare – modifică numai coeficienții.",
      "Arderea nu face să dispară materia – produșii gazoși conservă masa.",
      "Masa molară $H_2O$ = 18 g/mol (nu 16): $2 \\times 1 + 16 = 18$.",
      "Coeficientul 1 nu se scrie în ecuație."
    ],
    problem: {
      label: "evaluare U4",
      given: "$4Al + 3O_2 \\rightarrow 2Al_2O_3$; 54 g Al",
      ask: "tipul reacției, verificarea echilibrării și masa de $Al_2O_3$ formată",
      solve: "Sinteză (mai mulți reactanți → 1 produs). Verificare: Al: 4=4; O: 6=6 ✓. $M(Al)=27$ g/mol → 54g=2 mol Al. Din ecuație: 4 mol Al→2 mol $Al_2O_3$ → 2 mol Al→1 mol $Al_2O_3$. $M(Al_2O_3)=102$ g/mol → 102 g.",
      answer: "sinteză; echilibrată ✓; 102 g $Al_2O_3$"
    },
    exercises: [
      "Echilibrați și clasificați: $Na + H_2O \\rightarrow NaOH + H_2$.",
      "Calculați masa de $CaO$ din calcinarea a 100 g $CaCO_3$: $CaCO_3 \\xrightarrow{\\Delta} CaO + CO_2$.",
      "Ce tip de reacție este: $Pb(NO_3)_2 + Na_2SO_4 \\rightarrow PbSO_4\\downarrow + 2NaNO_3$?",
      "Verificați dacă este corect echilibrată: $3Fe + 2O_2 \\rightarrow Fe_3O_4$."
    ]
  },

  "u5-recap": {
    summary: "Oxizii sunt compuși binari ai oxigenului cu un alt element. Oxizii metalici (bazici) reacționează cu apa formând baze și cu acizii formând sare + apă. Oxizii nemetalici (acizi) reacționează cu apa formând acizi și cu bazele formând sare + apă.",
    keys: [
      "Oxid binar cu O; formula $E_xO_y$ din valențe (O mereu val. II).",
      "Oxid bazic (metalic) + H₂O → hidroxid; + acid → sare + H₂O.",
      "Oxid acid (nemetalic) + H₂O → acid; + baza → sare + H₂O.",
      "Oxid bazic + oxid acid → sare (fără apă).",
      "Exemple: $CaO$ (bazic), $CO_2$ (acid), $Fe_2O_3$ (bazic), $SO_3$ (acid)."
    ],
    mistakes: [
      "CO și NO sunt oxizi indiferenți – nu formează baze sau acizi cu apa.",
      "$Fe_2O_3$ nu reacționează direct cu apa rece – nu scrie $Fe_2O_3 + H_2O \\rightarrow Fe(OH)_3$ spontan.",
      "Anhidridă = oxid acid (nu orice oxid este anhidridă).",
      "Nu confundați $CaO$ (var nestins) cu $Ca(OH)_2$ (var stins)."
    ],
    problem: {
      label: "evaluare U5",
      given: "$CaO$",
      ask: "clasificare, ecuația cu apa și ecuația cu $HCl$",
      solve: "$CaO$ = oxid metalic (bazic). Cu apa: $CaO + H_2O \\rightarrow Ca(OH)_2$ (var stins). Cu $HCl$: $CaO + 2HCl \\rightarrow CaCl_2 + H_2O$.",
      answer: "bazic; $CaO+H_2O\\rightarrow Ca(OH)_2$; $CaO+2HCl\\rightarrow CaCl_2+H_2O$"
    },
    exercises: [
      "Scrieți formulele: oxid de zinc (Zn II), pentoxid de azot (N V), oxid de crom(III) (Cr III).",
      "Ce reacție are loc între $SO_3$ și $CaO$? Scrieți ecuația.",
      "Calculați masa molară a $Fe_2O_3$ și $SO_3$.",
      "De ce $CO_2$ din respirație nu este toxic imediat, dar $CO$ (monoxid) este periculos?"
    ]
  },

  "u6-recap": {
    summary: "Acizii au pH < 7 și înroșesc turnesolul. Hidracizii (fără O: HCl, HBr, H₂S) și oxoacizii (cu O: H₂SO₄, HNO₃, H₃PO₄) sunt cele două clase. Reacțiile principale: cu metale active (→ sare + H₂), cu oxizi bazici (→ sare + H₂O), cu baze – neutralizare (→ sare + H₂O).",
    keys: [
      "Hidracid = H + nemetal fără O: $HCl$, $HBr$, $HI$, $H_2S$.",
      "Oxoacid = H + nemetal + O: $H_2SO_4$, $HNO_3$, $H_3PO_4$, $H_2CO_3$.",
      "Acid + metal activ → sare + $H_2\\uparrow$.",
      "Acid + oxid bazic → sare + $H_2O$.",
      "Acid + baza → sare + $H_2O$ (neutralizare)."
    ],
    mistakes: [
      "Nu toate metalele reacționează cu acizi diluați: Cu, Ag, Au, Pt sunt inactive.",
      "$H_2SO_4$ concentrat ≠ $H_2SO_4$ diluat – proprietăți diferite!",
      "Turnesol → roșu în acizi; albastru în baze (nu invers!).",
      "Acid fosforic are 3 H: $H_3PO_4$, nu $HPO_4$."
    ],
    problem: {
      label: "evaluare U6",
      given: "$Al + H_2SO_4$ diluat; 27 g $Al$",
      ask: "ecuația echilibrată și masa de $H_2$ obținută",
      solve: "$2Al + 3H_2SO_4 \\rightarrow Al_2(SO_4)_3 + 3H_2\\uparrow$. $M(Al)=27$ g/mol → 27g=1 mol Al. Din ecuație: 2 mol Al→3 mol $H_2$ → 1 mol Al→1,5 mol $H_2$. $M(H_2)=2$ g/mol → $1{,}5 \\times 2 = 3$ g.",
      answer: "$2Al+3H_2SO_4 \\rightarrow Al_2(SO_4)_3+3H_2\\uparrow$; 3 g $H_2$"
    },
    exercises: [
      "Denumiți și clasificați: $HI$, $H_2SO_3$, $HClO_4$, $H_2Se$.",
      "Calculați masa de $MgCl_2$ din $Mg + 2HCl \\rightarrow MgCl_2 + H_2$, pornind de la 12 g Mg.",
      "Ce se observă la adăugarea unui metal activ (Zn) în acid? Explicați.",
      "Ce acid se găsește în stomacul uman? Ce rol îndeplineste?"
    ]
  },

  "u7-recap": {
    summary: "Bazele conțin grupe OH⁻, au pH > 7 și albăstresc turnesolul. Alcalii (NaOH, KOH, Ca(OH)₂) sunt solubili și corozivi. Reacțiile principale: neutralizare (+ acid → sare + H₂O), reacție cu oxizi acizi (→ sare + H₂O), descompunere termică (baze insolubile → oxid + H₂O).",
    keys: [
      "Formula bazei: $M(OH)_n$; n = valența metalului.",
      "Solubile: NaOH, KOH, $Ca(OH)_2$, $Ba(OH)_2$; insolubile: $Fe(OH)_3$, $Cu(OH)_2$, $Al(OH)_3$.",
      "Baza + acid → sare + $H_2O$ (neutralizare).",
      "Baza + oxid acid → sare + $H_2O$; ex: $Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$.",
      "Baza insolubilă + Δ → oxid metalic + $H_2O$."
    ],
    mistakes: [
      "Nu confundați $CaO$ (var nestins, oxid) cu $Ca(OH)_2$ (var stins, baza).",
      "Fenolftaleina → roz în baze; incoloră în acid/neutru (nu invers!).",
      "Bazele se numesc hidroxizi, nu oxizi ($CuO \\neq Cu(OH)_2$).",
      "$Al(OH)_3$ este amfoter – reacționează și cu acizi și cu baze tari."
    ],
    problem: {
      label: "evaluare U7",
      given: "$NaOH + H_2SO_4$; 80 g NaOH",
      ask: "ecuația echilibrată, tipul reacției și masa de $Na_2SO_4$ formată",
      solve: "$2NaOH + H_2SO_4 \\rightarrow Na_2SO_4 + 2H_2O$. Neutralizare. $M(NaOH)=40$ g/mol → 80g=2 mol. Din ecuație: 2 mol NaOH→1 mol $Na_2SO_4$. $M(Na_2SO_4)=142$ g/mol → 142 g.",
      answer: "neutralizare; 142 g $Na_2SO_4$"
    },
    exercises: [
      "Scrieți ecuația reacției $Ba(OH)_2 + HCl$.",
      "Ce se obține la descompunerea termică a $Al(OH)_3$? Scrieți ecuația.",
      "Calculați masa de $Cu(OH)_2$ din $CuSO_4 + 2NaOH \\rightarrow Cu(OH)_2\\downarrow + Na_2SO_4$, pornind de la 160 g $CuSO_4$.",
      "Cum deosebim o soluție acidă de una bazică? Descrieți 2 metode experimentale."
    ]
  },

  "u8-recap": {
    summary: "Sărurile sunt compuși ionici din cationi metalici și anioni acizi. Sărurile medii (normale): fără H/OH suplimentar; săruri acide: mai conțin H în anion. Metodele principale de obținere: metal + acid, oxid + acid, baza + acid, precipitare (sare + sare).",
    keys: [
      "Sare medie: $M_aA_b$, neutru electric; ex: NaCl, $CaSO_4$, $Na_2CO_3$.",
      "Sare acidă: mai conține H în anion; ex: $NaHCO_3$, $KHSO_4$.",
      "Metode: M+acid→sare+H₂; MO+acid→sare+H₂O; MOH+acid→sare+H₂O.",
      "Precipitare: sare + sare → $\\downarrow$ + sare solubilă.",
      "Insolubile: $BaSO_4$, $AgCl$, $CaCO_3$, $PbSO_4$."
    ],
    mistakes: [
      "$NaHCO_3$ ≠ $Na_2CO_3$: bicarbonatul este sare acidă; carbonatul este sare medie.",
      "Reacția sare+sare merge numai dacă se formează precipitat, gaz sau apă.",
      "$BaSO_4$ este insolubil – reacția $BaCl_2 + Na_2SO_4$ are loc și dă $\\downarrow$.",
      "Nu confundați $CaCO_3$ (calcarul) cu $Na_2CO_3$ (soda)."
    ],
    problem: {
      label: "evaluare U8",
      given: "$CaCO_3 + 2HCl \\rightarrow CaCl_2 + H_2O + CO_2\\uparrow$; 50 g $CaCO_3$",
      ask: "tipul reacției, ce se observă și masa de $CaCl_2$ formată",
      solve: "Schimb ionic (sare + acid → sare nouă + H₂O + gaz). Se observă bule de $CO_2$. $M(CaCO_3)=100$ g/mol → 50g=0,5 mol. Din ecuație: 1:1 → 0,5 mol $CaCl_2$. $M(CaCl_2)=111$ g/mol → $0{,}5 \\times 111 = 55{,}5$ g.",
      answer: "schimb ionic; bule $CO_2\\uparrow$; 55,5 g $CaCl_2$"
    },
    exercises: [
      "Scrieți ecuația obținerii $K_2SO_4$ prin neutralizarea $KOH$ cu $H_2SO_4$.",
      "Ce tip de sare este $Ca(HCO_3)_2$ (bicarbonat de calciu)?",
      "Calculați masa de $AgCl\\downarrow$ din $AgNO_3 + HCl \\rightarrow AgCl\\downarrow + HNO_3$, pornind de la 170 g $AgNO_3$.",
      "Cum identificăm carbonații în laborator? Scrieți ecuația reacției cu $HCl$."
    ]
  }

};

// ============================================================
//  HELPER – secțiune placeholder pentru U3–U8
// ============================================================

const phSectionCh7 = (unitId, unitTitle, lectii) => ({
  id: unitId,
  title: unitTitle,
  subtitle: "Conținut în pregătire",
  icon: "🔬",
  chapters: lectii.map(([id, title]) => phChapterCh7(id, title))
});

// ============================================================
//  DATE PRINCIPALE – chimie7Data
// ============================================================

const chimie7Data = {
  title: "Chimie – Clasa a VII-a",
  subtitle: "Substanțe, atomi, legături, reacții chimice",
  subject: "chimie",
  grade: 7,
  sections: [
    {
      id: "u1-substante-amestecuri",
      title: "Unitatea 1 – Substanțe și amestecuri",
      subtitle: "Substanțe pure, amestecuri, separare, proprietăți fizice",
      icon: "🧪",
      chapters: [
        chapterCh7("u1-l1-substante-pure",   "L1: Substanțe pure și amestecuri"),
        chapterCh7("u1-l2-metode-separare",   "L2: Metode de separare a amestecurilor"),
        chapterCh7("u1-l3-proprietati-fizice", "L3: Proprietățile fizice ale substanțelor"),
        recapChCh7("u1-recap",                "Recapitulare și evaluare – Unitatea 1")
      ]
    },
    {
      id: "u2-structura-atomului",
      title: "Unitatea 2 – Structura atomului",
      subtitle: "Atom, elemente chimice, tabelul periodic, izotopi",
      icon: "⚛️",
      chapters: [
        chapterCh7("u2-l1-atomul",            "L1: Atomul – structură și particule subatomice"),
        chapterCh7("u2-l2-elemente-chimice",   "L2: Elementele chimice și simbolurile lor"),
        chapterCh7("u2-l3-tabelul-periodic",   "L3: Tabelul periodic al elementelor"),
        chapterCh7("u2-l4-izotopi",            "L4: Izotopi și masa atomică relativă"),
        recapChCh7("u2-recap",                 "Recapitulare și evaluare – Unitatea 2")
      ]
    },
    {
      id: "u3-legatura-chimica",
      title: "Unitatea 3 – Legătura chimică",
      subtitle: "Configurație electronică, legătură ionică și covalentă, formule",
      icon: "🔗",
      chapters: [
        chapterCh7("u3-l1-configuratie-electronica", "L1: Configurația electronică"),
        chapterCh7("u3-l2-legatura-ionica",           "L2: Legătura ionică"),
        chapterCh7("u3-l3-legatura-covalenta",        "L3: Legătura covalentă"),
        chapterCh7("u3-l4-formule-valenta",           "L4: Formule chimice și valența"),
        recapChCh7("u3-recap",                        "Recapitulare și evaluare – Unitatea 3")
      ]
    },
    {
      id: "u4-reactii-chimice",
      title: "Unitatea 4 – Reacții chimice",
      subtitle: "Transformări chimice, ecuații, legea conservării masei, tipuri",
      icon: "⚗️",
      chapters: [
        chapterCh7("u4-l1-transformari",       "L1: Transformări fizice și chimice"),
        chapterCh7("u4-l2-ecuatii-chimice",    "L2: Ecuații chimice – scriere și echilibrare"),
        chapterCh7("u4-l3-legea-conservarii",  "L3: Legea conservării masei"),
        chapterCh7("u4-l4-tipuri-reactii",     "L4: Tipuri de reacții chimice"),
        recapChCh7("u4-recap",                 "Recapitulare și evaluare – Unitatea 4")
      ]
    },
    {
      id: "u5-oxizi",
      title: "Unitatea 5 – Oxizi",
      subtitle: "Definiție, clasificare, oxizi metalici și nemetalici",
      icon: "🌫️",
      chapters: [
        chapterCh7("u5-l1-definitie-clasificare", "L1: Oxizi – definiție și clasificare"),
        chapterCh7("u5-l2-oxizi-metalici",         "L2: Oxizi metalici (bazici)"),
        chapterCh7("u5-l3-oxizi-nemetalici",       "L3: Oxizi nemetalici (acizi)"),
        recapChCh7("u5-recap",                     "Recapitulare și evaluare – Unitatea 5")
      ]
    },
    {
      id: "u6-acizi",
      title: "Unitatea 6 – Acizi",
      subtitle: "Hidracizi, oxoacizi, proprietăți și reacții",
      icon: "🧫",
      chapters: [
        chapterCh7("u6-l1-acizi-definitie",   "L1: Acizi – definiție, clasificare, nomenclatură"),
        chapterCh7("u6-l2-acizi-proprietati", "L2: Proprietăți și reacții ale acizilor"),
        recapChCh7("u6-recap",                "Recapitulare și evaluare – Unitatea 6")
      ]
    },
    {
      id: "u7-baze",
      title: "Unitatea 7 – Baze (Hidroxizi)",
      subtitle: "Definiție, clasificare, proprietăți și reacții",
      icon: "💧",
      chapters: [
        chapterCh7("u7-l1-baze-definitie",   "L1: Baze – definiție și clasificare"),
        chapterCh7("u7-l2-baze-proprietati", "L2: Proprietăți și reacții ale bazelor"),
        recapChCh7("u7-recap",               "Recapitulare și evaluare – Unitatea 7")
      ]
    },
    {
      id: "u8-saruri",
      title: "Unitatea 8 – Săruri",
      subtitle: "Definiție, clasificare, metode de obținere",
      icon: "🧂",
      chapters: [
        chapterCh7("u8-l1-saruri-definitie",  "L1: Săruri – definiție și clasificare"),
        chapterCh7("u8-l2-saruri-obtinere",   "L2: Metode de obținere ale sărurilor"),
        recapChCh7("u8-recap",                "Recapitulare și evaluare – Unitatea 8")
      ]
    }
  ]
};
