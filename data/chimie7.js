// ============================================================
//  CHIMIE - CLASA A VII-A
//  Conținut aliniat cu programa școlară în vigoare
//  U1–U8: conținut complet | U9–U10: Apă și Aer/Ardere (noi)
// ============================================================

// ─── Funcții helper (prefixate Ch7 pentru a evita coliziuni) ───

const listCh7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const DIF_LABELS_CH7 = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil", "f-dificil": "Foarte dificil" };
const exListCh7 = (items) => items.map((item) => `<li><span class="dif-badge dif-${item.level}">${DIF_LABELS_CH7[item.level]}</span> ${item.text}${item.solution ? `<details class="rezolvare-toggle"><summary>Vezi rezolvarea</summary><p>${item.solution}</p></details>` : ""}</li>`).join("\n");

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
  <ol>${exListCh7(data.exercises)}</ol>
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
  <ol>${exListCh7(data.exercises)}</ol>
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
    learn: "O substanță pură are o compoziție chimică fixă și proprietăți fizice bine definite (punct de topire, punct de fierbere, densitate), care nu se schimbă indiferent de proba analizată — de exemplu, apa distilată fierbe mereu la 100°C. Un amestec, în schimb, conține două sau mai multe substanțe combinate fără reacție chimică, iar proprietățile lui depind de proporția componentelor. Amestecurile se împart în omogene (o singură fază vizibilă, ca aerul sau apa sărată) și eterogene (mai multe faze distincte, vizibile cu ochiul liber, ca nisipul cu apă).",
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
      {level:"usor",text:"Este apa distilată o substanță pură sau un amestec?",solution:"Este substanță pură, deoarece are compoziție chimică fixă ($H_2O$) și proprietăți constante."},
      {level:"usor",text:"Este aerul un amestec omogen sau eterogen?",solution:"Este amestec omogen, deoarece gazele sunt uniform distribuite și nu se disting vizual."},
      {level:"usor",text:"Clasificați: zahăr, apă cu zahăr, ulei cu apă, oxigen pur, oțet.",solution:"Zahăr – substanță pură; apă cu zahăr – amestec omogen; ulei cu apă – amestec eterogen; oxigen pur – substanță pură; oțet – amestec omogen."},
      {level:"mediu",text:"Dați câte un exemplu de amestec omogen și eterogen din bucătărie.",solution:"Omogen: apă cu sare dizolvată; eterogen: salata cu ulei și oțet neamestecate."},
      {level:"mediu",text:"De ce apa de mare este amestec și nu substanță pură?",solution:"Conține săruri dizolvate și alte substanțe, deci compoziția variază de la o zonă la alta, spre deosebire de o substanță pură cu compoziție fixă."},
      {level:"mediu",text:"Ce proprietate a substanțelor pure le face utile ca etalon în laborator?",solution:"Punctul de topire/fierbere fix, care permite verificarea purității unei probe prin comparație."},
      {level:"dificil",text:"Un amestec de apă și alcool fierbe pe un interval de temperaturi, nu la o valoare fixă. Ce indică acest lucru?",solution:"Indică faptul că este un amestec, deoarece componentele au puncte de fierbere diferite, iar amestecul fierbe treptat."},
      {level:"dificil",text:"Explicați de ce granitul este considerat amestec eterogen, deși pare un singur bloc solid.",solution:"La examinare se disting clar mineralele componente (cuarț, feldspat, mică), cu culori și texturi diferite, deci este amestec eterogen."},
      {level:"f-dificil",text:"O probă necunoscută are punct de topire variabil între 40°C și 45°C. Este substanță pură sau amestec?",solution:"Este amestec, pentru că substanțele pure au punct de topire fix, la o singură temperatură, nu pe un interval."},
      {level:"f-dificil",text:"Explicați diferența dintre o substanță simplă (ex. $O_2$) și o substanță pură.",solution:"Orice substanță simplă este și substanță pură, dar nu orice substanță pură este simplă — apa ($H_2O$) este substanță pură compusă, nu simplă."}
    ]
  },

  "u1-l2-metode-separare": {
    learn: "Alegerea metodei de separare a unui amestec depinde de tipul componentelor: dacă avem un solid nedizolvat într-un lichid, folosim filtrarea (solidul rămâne pe filtru, lichidul trece); dacă avem lichide nemiscibile (ca apa și uleiul), folosim decantarea; dacă avem lichide miscibile cu puncte de fierbere diferite, folosim distilarea (componenta mai volatilă se evaporă și se condensează separat); iar dacă avem un solid dizolvat într-un lichid și vrem să recuperăm solidul, folosim cristalizarea sau evaporarea.",
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
      "Uleiul plutește pe apă ($\\rho_{\text{ulei}} < \\rho_{\text{apă}}$) → decantare cu pâlnie separatoare."
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
      {level:"usor",text:"Ce metodă separă un solid nedizolvat de un lichid?",solution:"Filtrarea."},
      {level:"usor",text:"Ce metodă separă apa de ulei (lichide nemiscibile)?",solution:"Decantarea, cu pâlnia separatoare."},
      {level:"usor",text:"Ce metodă recuperează sarea dintr-o soluție apoasă de sare?",solution:"Cristalizarea (prin evaporarea apei)."},
      {level:"mediu",text:"Ce metodă folosiți pentru a recupera cerneala (solubilă în apă)? Justificați.",solution:"Distilarea sau evaporarea, deoarece cerneala este dizolvată omogen și trebuie separată de solvent prin schimbare de stare."},
      {level:"mediu",text:"Descrieți pașii pentru separarea uleiului de apă în laborator.",solution:"Se toarnă amestecul într-o pâlnie separatoare, se lasă în repaus până se formează 2 straturi, apoi se deschide robinetul pentru a scurge stratul inferior (apa), lăsând uleiul deasupra."},
      {level:"mediu",text:"Un chimist vrea să recupereze zahărul dintr-o soluție apoasă. Ce metodă alege?",solution:"Cristalizarea sau evaporarea apei, până rămâne zahărul solid."},
      {level:"dificil",text:"De ce filtrarea nu poate separa o soluție de sare?",solution:"Pentru că sarea este dizolvată complet (particule foarte mici) și trece prin porii filtrului odată cu apa."},
      {level:"dificil",text:"Un amestec conține apă, alcool și nisip. Descrieți ordinea metodelor de separare folosite.",solution:"Mai întâi filtrare pentru a separa nisipul, apoi distilare pentru a separa apa de alcool (puncte de fierbere diferite)."},
      {level:"f-dificil",text:"Explicați de ce distilarea apei sărate dă apă pură, iar sarea rămâne în balonul de distilare.",solution:"Apa se evaporă la 100°C și vaporii se condensează separat (apă pură); sarea nu este volatilă la această temperatură, deci rămâne în balon."},
      {level:"f-dificil",text:"Comparați cristalizarea și distilarea: ce substanță se recuperează în fiecare caz?",solution:"Cristalizarea recuperează solvatul (substanța dizolvată, ex. sarea); distilarea recuperează solventul (ex. apa) sub formă lichidă purificată."}
    ]
  },

  "u1-l3-proprietati-fizice": {
    learn: "Proprietățile fizice ale unei substanțe (culoare, stare de agregare, punct de topire, punct de fierbere, densitate, solubilitate, conductibilitate) se pot observa sau măsura FĂRĂ a-i schimba compoziția chimică și ne ajută să o identificăm sau să o deosebim de altele. Densitatea, una dintre cele mai utile proprietăți, se calculează cu formula $\\rho=\\dfrac{m}{V}$ și decide dacă un corp plutește sau se scufundă într-un lichid: dacă densitatea corpului este mai mică decât a lichidului, corpul plutește; dacă este mai mare, se scufundă. Substanțele pure au punct de topire și de fierbere fixe, în timp ce amestecurile topesc sau fierb pe un interval de temperaturi.",
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
        ask: "plutește sau se scufundă în apă ($\\rho_{\text{apă}}=1$ g/cm³)?",
        solve: "$0{,}8 < 1$ → corpul este mai puțin dens decât apa → plutește.",
        answer: "plutește"
      }
    ],
    exercises: [
      {level:"usor",text:"Ce este densitatea și cu ce formulă se calculează?",solution:"Densitatea este masa unității de volum; $\\rho=\\dfrac{m}{V}$."},
      {level:"usor",text:"Calculați densitatea unui corp cu masa 100 g și volumul 50 cm³.",solution:"$\\rho=\\dfrac{100}{50}=2$ g/cm³."},
      {level:"usor",text:"Enumerați 3 proprietăți fizice ale unei substanțe.",solution:"Culoare, punct de topire, densitate (sau oricare 3 din: stare de agregare, punct de fierbere, solubilitate, conductibilitate)."},
      {level:"mediu",text:"Calculați densitatea unui lichid cu masa 250 g și volumul 200 mL.",solution:"$\\rho=\\dfrac{250}{200}=1{,}25$ g/cm³."},
      {level:"mediu",text:"Cum deosebim experimental o substanță pură de un amestec folosind punctul de topire?",solution:"Substanța pură se topește la o temperatură fixă; amestecul se topește pe un interval de temperaturi."},
      {level:"mediu",text:"Un corp cu $\\rho = 2{,}5$ g/cm³ plutește sau se scufundă în apă? Justificați.",solution:"Se scufundă, pentru că densitatea lui (2,5 g/cm³) este mai mare decât a apei (1 g/cm³)."},
      {level:"dificil",text:"Enumerați 4 proprietăți fizice ale cuprului ($Cu$).",solution:"Culoare roșiatică-aramă, stare solidă la temperatura camerei, bun conductor electric și termic, densitate 8,96 g/cm³."},
      {level:"dificil",text:"Un corp cu masa 45 g are volumul 30 cm³. Va pluti pe apă sau pe mercur ($\\rho_{Hg}=13{,}6$ g/cm³)?",solution:"$\\rho=45/30=1{,}5$ g/cm³; se scufundă în apă (1,5>1) dar plutește pe mercur (1,5<13,6)."},
      {level:"f-dificil",text:"O probă de aur pur ($\\rho=19{,}3$ g/cm³) are masa 96,5 g. Calculați volumul și explicați cum ați verifica autenticitatea.",solution:"$V=\\dfrac{96{,}5}{19{,}3}=5$ cm³; se compară densitatea calculată cu valoarea de referință a aurului pur — dacă diferă, proba conține impurități."},
      {level:"f-dificil",text:"Explicați de ce punctul de fierbere este o proprietate fizică mai fiabilă pentru identificare decât culoarea.",solution:"Culoarea poate fi asemănătoare pentru mai multe substanțe, în timp ce punctul de fierbere este o valoare numerică precisă și caracteristică fiecărei substanțe pure."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 2 – Structura atomului
  // ══════════════════════════════════════════════════════════

  "u2-l1-atomul": {
    learn: "Atomul este cea mai mică particulă a unui element chimic care păstrează proprietățile acestuia. Este format dintr-un nucleu central (protoni, cu sarcină pozitivă, și neutroni, fără sarcină) și un înveliș electronic (electroni, cu sarcină negativă, care se mișcă în jurul nucleului). Numărul de protoni, numit număr atomic Z, identifică elementul chimic — orice atom cu Z=8 este oxigen. Numărul de masă A reprezintă totalul protonilor și neutronilor ($A=Z+N$), iar cum atomul este neutru electric, numărul de electroni este întotdeauna egal cu numărul de protoni.",
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
      {level:"usor",text:"Ce sarcină electrică are protonul?",solution:"Sarcină pozitivă (+1)."},
      {level:"usor",text:"Unde se află protonii și neutronii într-un atom?",solution:"În nucleu, centrul atomului."},
      {level:"usor",text:"Un atom are Z=6. Câți electroni are (atom neutru)?",solution:"6 electroni, egal cu numărul de protoni."},
      {level:"mediu",text:"Determinați nr. de protoni, neutroni și electroni pentru $^{40}_{20}Ca$.",solution:"Z=20 protoni, N=40-20=20 neutroni, 20 electroni (atom neutru)."},
      {level:"mediu",text:"Un atom are Z=17 și A=35. Care este elementul? Câți neutroni are?",solution:"Z=17 este clorul (Cl); N=35-17=18 neutroni."},
      {level:"mediu",text:"Completați simbolul $^{?}_{26}Fe$ știind că fierul are 30 neutroni.",solution:"A=Z+N=26+30=56, deci $^{56}_{26}Fe$."},
      {level:"dificil",text:"Un atom are 15 protoni și 16 neutroni. Determinați Z, A și simbolul complet.",solution:"Z=15 (fosfor), A=15+16=31, simbol $^{31}_{15}P$."},
      {level:"dificil",text:"Explicați de ce masa atomului este concentrată aproape în întregime în nucleu.",solution:"Protonii și neutronii au masă aproximativ egală (~1 u.a. fiecare), în timp ce electronii au masă neglijabilă, deci nucleul conține practic toată masa."},
      {level:"f-dificil",text:"Un atom neutru are 26 electroni și numărul de masă 56. Calculați Z și N.",solution:"Z=26 (egal cu nr. electronilor); N=56-26=30."},
      {level:"f-dificil",text:"Ce particulă subatomică are sarcina −1 și masă neglijabilă?",solution:"Electronul."}
    ]
  },

  "u2-l2-elemente-chimice": {
    learn: "Un element chimic reprezintă mulțimea tuturor atomilor cu același număr atomic Z; fiecare element are un simbol chimic unic, format din 1–2 litere (prima majusculă, a doua minusculă), adesea derivat din denumirea latină (Fe = Ferrum, Au = Aurum, Na = Natrium). Elementele se împart în metale (lustru metalic, bune conductoare de căldură și electricitate, maleabile), nemetale (conductori slabi, fragile în stare solidă sau gazoase) și gaze nobile (foarte stabile chimic, cu înveliș electronic complet). Este important să nu confundăm elementul chimic (oxigenul O) cu substanța simplă corespunzătoare (molecula $O_2$).",
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
      {level:"usor",text:"Scrieți simbolul chimic pentru hidrogen și oxigen.",solution:"H și O."},
      {level:"usor",text:"Ce caracteristici are un metal?",solution:"Lustru metalic, conductor electric și termic, maleabil și ductil."},
      {level:"usor",text:"Din ce grupă fac parte gazele nobile?",solution:"Grupa 18."},
      {level:"mediu",text:"Scrieți simbolul pentru: clor, calciu, cupru.",solution:"Cl, Ca, Cu."},
      {level:"mediu",text:"Numiți elementele cu simbolul: K, Ca, Pb.",solution:"Potasiu, calciu, plumb."},
      {level:"mediu",text:"Din lista Fe, O, Cu, Ar, Cl – care sunt nemetale sau gaze nobile?",solution:"O și Cl sunt nemetale; Ar este gaz nobil."},
      {level:"dificil",text:"De ce simbolul potasiului este K și nu P?",solution:"Pentru că simbolul provine din denumirea latină Kalium, nu din denumirea românească potasiu."},
      {level:"dificil",text:"Explicați diferența dintre elementul azot și substanța simplă azot.",solution:"Elementul azot este simbolul N (Z=7); substanța simplă este molecula diatomică $N_2$, formată din 2 atomi de azot legați."},
      {level:"f-dificil",text:"Enumerați 3 elemente al căror simbol chimic nu corespunde inițialelor denumirii românești.",solution:"Fe (fier, din Ferrum), Au (aur, din Aurum), Na (sodiu, din Natrium)."},
      {level:"f-dificil",text:"Explicați de ce substanțele simple ale multor nemetale gazoase sunt diatomice.",solution:"Atomii izolați ai acestor nemetale nu au octet complet, deci formează o legătură covalentă cu un alt atom identic pentru a-și completa stratul de valență, rezultând molecule diatomice ($H_2$, $O_2$, $N_2$, $Cl_2$)."}
    ]
  },

  "u2-l3-tabelul-periodic": {
    learn: "Tabelul periodic organizează toate elementele chimice cunoscute în 7 rânduri orizontale, numite perioade, și 18 coloane verticale, numite grupe. Numărul perioadei arată câte straturi electronice are atomul, iar pentru grupele principale (1–2 și 13–18), numărul grupei arată câți electroni de valență are elementul, ceea ce explică de ce elementele din aceeași grupă au proprietăți chimice similare — toate metalele alcaline din grupa 1 (Li, Na, K) reacționează similar cu apa, deoarece au fiecare un singur electron de valență.",
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
      {level:"usor",text:"Câte perioade și câte grupe are tabelul periodic?",solution:"7 perioade și 18 grupe."},
      {level:"usor",text:"Ce arată numărul perioadei unui element?",solution:"Numărul de straturi electronice ale atomului."},
      {level:"usor",text:"Din ce grupă fac parte halogenii?",solution:"Grupa 17."},
      {level:"mediu",text:"Localizați în tabelul periodic O, Mg, Al. Indicați perioada și grupa.",solution:"O: perioada 2, grupa 16; Mg: perioada 3, grupa 2; Al: perioada 3, grupa 13."},
      {level:"mediu",text:"Care element din perioada 2 are 4 electroni de valență?",solution:"Carbonul (C), grupa 14."},
      {level:"mediu",text:"De ce gazele nobile nu reacționează chimic în condiții normale?",solution:"Au stratul electronic exterior complet (8 electroni, sau 2 la heliu), deci nu au tendința de a câștiga, ceda sau partaja electroni."},
      {level:"dificil",text:"Comparați Na și K: asemănări și deosebiri.",solution:"Asemănări: aceeași grupă (1), câte 1 electron de valență; deosebiri: perioade diferite (Na-3, K-4), K este mai reactiv."},
      {level:"dificil",text:"De ce Li și Na au proprietăți chimice similare, deși au număr diferit de electroni?",solution:"Ambele sunt în grupa 1 și au câte 1 electron de valență pe ultimul strat, ceea ce determină comportamentul lor chimic asemănător."},
      {level:"f-dificil",text:"Localizați clorul (Z=17) și determinați perioada, grupa, tipul și numărul de electroni de valență.",solution:"Perioada 3, grupa 17 (halogeni), nemetal, 7 electroni de valență."},
      {level:"f-dificil",text:"Explicați de ce electronegativitatea crește spre dreapta și în sus în tabelul periodic.",solution:"Spre dreapta, atomii au tot mai mulți electroni de valență și atrag mai puternic electronii pentru octet; spre sus, electronii de valență sunt mai apropiați de nucleu, deci atrași mai puternic."}
    ]
  },

  "u2-l4-izotopi": {
    learn: "Izotopii sunt atomi ai aceluiași element chimic (același număr atomic Z), dar cu un număr diferit de neutroni, ceea ce le dă un număr de masă A diferit. Deoarece au același Z, izotopii au proprietăți chimice identice, dar proprietăți fizice ușor diferite (masă, densitate). Masa atomică relativă ($A_r$) trecută în tabelul periodic pentru fiecare element este de fapt o medie ponderată a maselor izotopilor naturali, ținând cont de abundența fiecăruia — clorul natural este format din 75% $^{35}Cl$ și 25% $^{37}Cl$, ceea ce dă o masă medie de 35,5.",
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
      {level:"usor",text:"Ce înseamnă că doi atomi sunt izotopi?",solution:"Au același Z (același element), dar A diferit (număr diferit de neutroni)."},
      {level:"usor",text:"$^{12}C$ și $^{14}C$: sunt izotopi?",solution:"Da, ambii au Z=6 (carbon), dar A diferit (12 și 14)."},
      {level:"usor",text:"Ce rămâne identic la izotopi și ce diferă?",solution:"Rămân identici numărul de protoni și electroni (Z); diferă numărul de neutroni (N) și numărul de masă (A)."},
      {level:"mediu",text:"$^{14}N$ și $^{14}C$: sunt izotopi? De ce nu?",solution:"Nu, au A egal dar Z diferit (7, respectiv 6) — sunt izobari, nu izotopi."},
      {level:"mediu",text:"Câți neutroni are fiecare izotop, $^{35}Cl$ și $^{37}Cl$ (Z=17)?",solution:"$^{35}Cl$: N=35-17=18; $^{37}Cl$: N=37-17=20."},
      {level:"mediu",text:"Calculați masa atomică medie a borului: 20% $^{10}B$ și 80% $^{11}B$.",solution:"$\\bar A=10\\times0{,}2+11\\times0{,}8=2+8{,}8=10{,}8$."},
      {level:"dificil",text:"Calculați masa atomică medie a Mg: 79% $^{24}Mg$, 10% $^{25}Mg$, 11% $^{26}Mg$.",solution:"$\\bar A=24\\times0{,}79+25\\times0{,}10+26\\times0{,}11=18{,}96+2{,}5+2{,}86=24{,}32$."},
      {level:"dificil",text:"Explicați diferența dintre izotop și izobar, cu câte un exemplu.",solution:"Izotopii au Z egal, A diferit (ex: $^{35}Cl$ și $^{37}Cl$); izobarii au A egal, Z diferit (ex: $^{14}C$ și $^{14}N$)."},
      {level:"f-dificil",text:"Clorul natural are masa medie 35,5, format din $^{35}Cl$ și $^{37}Cl$. Estimați procentele aproximative ale celor doi izotopi.",solution:"Din $35p+37(1-p)=35{,}5$ rezultă $-2p=-1{,}5$, deci $p=0{,}75$ — aproximativ 75% $^{35}Cl$ și 25% $^{37}Cl$."},
      {level:"f-dificil",text:"De ce izotopii radioactivi (ex. $^{14}C$) sunt utili pentru datarea probelor arheologice?",solution:"Se dezintegrează cu o viteză cunoscută (timp de înjumătățire fix), deci măsurând cât $^{14}C$ mai rămâne într-o probă putem calcula vârsta aproximativă a acesteia."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 3 – Legătura chimică
  // ══════════════════════════════════════════════════════════

  "u3-l1-configuratie-electronica": {
    learn: "Configurația electronică arată distribuția electronilor unui atom pe straturile energetice (K, L, M, N...), pornind de la nucleu spre exterior. Straturile se completează în ordine, fiecare având o capacitate maximă (K – 2 electroni, L – 8 electroni, M – 8 electroni pentru elementele cu Z între 11 și 18); electronii de pe ultimul strat, numiți electroni de valență, sunt cei implicați în formarea legăturilor chimice și determină reactivitatea elementului. Conform regulii octetului, atomii tind să-și completeze ultimul strat la 8 electroni (sau 2, ca la heliu), motiv pentru care gazele nobile, care au deja acest strat complet, sunt practic inerte chimic.",
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
      {level:"usor",text:"Care este capacitatea maximă a stratului K?",solution:"2 electroni."},
      {level:"usor",text:"Ce sunt electronii de valență?",solution:"Electronii de pe ultimul strat electronic al atomului, implicați în formarea legăturilor chimice."},
      {level:"usor",text:"Scrieți configurația electronică a Na (Z=11).",solution:"K(2) L(8) M(1)."},
      {level:"mediu",text:"Scrieți configurația electronică pentru O (Z=8) și Mg (Z=12).",solution:"O: K(2) L(6); Mg: K(2) L(8) M(2)."},
      {level:"mediu",text:"Câți electroni de valență are aluminiul (Z=13)? Ce tip de element este?",solution:"K(2) L(8) M(3) → 3 electroni de valență; este metal."},
      {level:"mediu",text:"Scrieți configurația pentru Cl (Z=17) și Ca (Z=20).",solution:"Cl: K(2) L(8) M(7); Ca: K(2) L(8) M(8) N(2)."},
      {level:"dificil",text:"De ce gazele nobile nu formează compuși chimici în condiții normale?",solution:"Au ultimul strat complet (8 electroni, sau 2 la heliu), deci nu au tendința de a ceda, accepta sau partaja electroni."},
      {level:"dificil",text:"Comparați configurația electronică a Na (Z=11) și K (Z=19). Ce au în comun?",solution:"Na: K(2)L(8)M(1); K: K(2)L(8)M(8)N(1); ambele au 1 electron pe ultimul strat → aceeași grupă (1), proprietăți chimice asemănătoare."},
      {level:"f-dificil",text:"Un atom are configurația K(2) L(8) M(6). Determinați Z, numărul grupei și tipul elementului.",solution:"Z=2+8+6=16 (sulf); grupa 16 (6 electroni de valență); este nemetal."},
      {level:"f-dificil",text:"Explicați legătura dintre numărul grupei și numărul de electroni de valență pentru grupele principale.",solution:"Pentru grupele principale (1-2 și 13-18), numărul electronilor de valență este egal cu cifra unităților numărului grupei (ex: grupa 16 → 6 electroni de valență)."}
    ]
  },

  "u3-l2-legatura-ionica": {
    learn: "Legătura ionică se formează prin transfer complet de electroni de la un atom de metal (care cedează electroni și devine cation, ion pozitiv) la un atom de nemetal (care acceptă electroni și devine anion, ion negativ), rezultând o atracție electrostatică puternică între ionii de semn contrar. Metalele din grupele 1 și 2 formează cationi cu sarcina +1, respectiv +2, iar nemetalele din grupele 16 și 17 formează anioni cu sarcina -2, respectiv -1. Formula unui compus ionic se scrie astfel încât suma sarcinilor pozitive să fie egală cu suma sarcinilor negative, iar compușii ionici formează rețele cristaline solide cu punct de topire ridicat.",
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
      {level:"usor",text:"Ce este un cation și ce este un anion?",solution:"Cationul este un ion cu sarcină pozitivă (metal ce a cedat electroni); anionul este un ion cu sarcină negativă (nemetal ce a acceptat electroni)."},
      {level:"usor",text:"Ce tip de particule se formează când un metal cedează electroni?",solution:"Cationi (ioni pozitivi)."},
      {level:"usor",text:"Scrieți formula ionică pentru Na⁺ + Cl⁻.",solution:"$NaCl$."},
      {level:"mediu",text:"Scrieți formulele ionice: K⁺ + Br⁻; Ca²⁺ + Cl⁻.",solution:"$KBr$; $CaCl_2$."},
      {level:"mediu",text:"Scrieți formulele ionice: Na⁺ + O²⁻; Fe³⁺ + O²⁻.",solution:"$Na_2O$; $Fe_2O_3$."},
      {level:"mediu",text:"De ce $NaCl$ conduce curentul electric în soluție, dar nu în stare solidă?",solution:"În soluție ionii sunt liberi să se deplaseze și transportă sarcina electrică; în stare solidă ionii sunt fixați în rețeaua cristalină."},
      {level:"dificil",text:"Determinați formula compusului format din Ca²⁺ și PO₄³⁻.",solution:"MCM(2,3)=6; Ca: 6/2=3, PO₄: 6/3=2 → $Ca_3(PO_4)_2$."},
      {level:"dificil",text:"Explicați de ce compușii ionici au punct de topire ridicat.",solution:"Forțele electrostatice dintre ionii de semn contrar din rețeaua cristalină sunt foarte puternice, deci este nevoie de multă energie termică pentru a le rupe."},
      {level:"f-dificil",text:"Un compus ionic are formula $Al_2X_3$, unde Al are sarcina 3+. Determinați sarcina ionului X.",solution:"Suma sarcinilor = 0: 2×(+3) + 3×(sarcina X) = 0 → sarcina X = -2."},
      {level:"f-dificil",text:"Explicați de ce metalele din grupa 1 formează întotdeauna cationi cu sarcina +1.",solution:"Au un singur electron de valență, pe care îl cedează ușor pentru a atinge configurația stabilă a gazului nobil anterior, rezultând un ion cu sarcina +1."}
    ]
  },

  "u3-l3-legatura-covalenta": {
    learn: "Legătura covalentă se formează între doi atomi de nemetal prin punerea în comun a unei perechi de electroni (câte unul de la fiecare atom), astfel încât ambii atomi să ajungă la configurația stabilă de octet (8 electroni pe ultimul strat), sau duet în cazul hidrogenului (2 electroni). În funcție de câte perechi de electroni sunt partajate, legătura poate fi simplă (o pereche, ex. H–Cl), dublă (două perechi, ex. O=O) sau triplă (trei perechi, ex. N≡N). Dacă cei doi atomi au electronegativități diferite, perechea de electroni este atrasă mai puternic spre atomul mai electronegativ, rezultând o legătură polară; dacă atomii sunt identici sau molecula este simetrică, molecula este nepolară.",
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
      {level:"usor",text:"Ce este o legătură covalentă?",solution:"O pereche de electroni partajată de doi atomi de nemetal."},
      {level:"usor",text:"Câți electroni are nevoie hidrogenul pentru a fi stabil?",solution:"2 electroni (regula duetului)."},
      {level:"usor",text:"Ce fel de legătură are $H_2$: simplă, dublă sau triplă?",solution:"Simplă (o singură pereche de electroni comună)."},
      {level:"mediu",text:"Câte perechi comune are legătura din $N_2$ (N are 5 electroni de valență)?",solution:"3 perechi comune (legătură triplă, N≡N), deoarece fiecare N are nevoie de încă 3 electroni pentru octet."},
      {level:"mediu",text:"Explicați de ce $H_2O$ are 2 legături covalente (O face 2 legături).",solution:"Oxigenul are 6 electroni de valență și are nevoie de încă 2 pentru octet, deci formează câte o legătură simplă cu fiecare din cei 2 atomi de H."},
      {level:"mediu",text:"$CO_2$ sau $NaCl$ – care are legătură covalentă? Justificați.",solution:"$CO_2$, deoarece este format din 2 nemetale (C și O) care partajează electroni; $NaCl$ are legătură ionică."},
      {level:"dificil",text:"De ce $HF$ este mai polară decât $HCl$?",solution:"Fluorul este mai electronegativ decât clorul, deci atrage mai puternic perechea de electroni comună, mărind polaritatea legăturii."},
      {level:"dificil",text:"Descrieți structura Lewis a $O_2$ și explicați tipul legăturii.",solution:"Fiecare O are 6 electroni de valență și are nevoie de 2 pentru octet; se formează 2 perechi comune → legătură dublă O=O."},
      {level:"f-dificil",text:"Explicați de ce $CO_2$ este o moleculă nepolară, deși are legături polare C=O.",solution:"Molecula este liniară și simetrică (O=C=O), astfel efectele de polaritate ale celor două legături C=O se anulează reciproc."},
      {level:"f-dificil",text:"Comparați numărul de legături pe care le pot forma H, O, N și C.",solution:"H formează 1 legătură, O formează 2, N formează 3, iar C formează 4, corespunzător numărului de electroni necesari pentru octet (sau duet, la H)."}
    ]
  },

  "u3-l4-formule-valenta": {
    learn: "Valența unui element reprezintă numărul de legături chimice pe care le poate forma un atom al acestuia și determină indicii (subscriptele) din formula chimică a unui compus. Pentru a scrie corect o formulă, se aplică regula încrucișării: indicele fiecărui element devine egal cu valența celuilalt element (simplificate ulterior la cel mai mic raport), astfel încât suma produselor valență×indice să fie egală pentru ambele componente. Radicalii acizi, precum $SO_4^{2-}$, $NO_3^-$ sau $OH^-$, se comportă ca o singură unitate cu propria valență (egală cu sarcina electrică) și se pun între paranteze atunci când apar cu indice mai mare decât 1 (ex: $Al_2(SO_4)_3$).",
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
      {level:"usor",text:"Ce reprezintă valența unui element?",solution:"Numărul de legături chimice pe care le poate forma un atom al elementului."},
      {level:"usor",text:"Care este valența oxigenului și a hidrogenului?",solution:"Oxigen: II; hidrogen: I."},
      {level:"usor",text:"Ce reprezintă indicele 3 în formula $AlCl_3$?",solution:"Numărul de atomi de clor din moleculă (3 atomi Cl)."},
      {level:"mediu",text:"Scrieți formula oxidului de magneziu (Mg II, O II).",solution:"Valențe egale → indici 1:1 → $MgO$."},
      {level:"mediu",text:"Scrieți formula clorurii de sodiu (Na I, Cl I) și a oxidului de aluminiu (Al III, O II).",solution:"$NaCl$; $Al_2O_3$."},
      {level:"mediu",text:"Care este valența fierului în $Fe_2O_3$? Justificați.",solution:"Valența III, deoarece MCM(x,2)=6 cu indicele Fe=2 înseamnă x=3."},
      {level:"dificil",text:"Scrieți formula sulfurii de fier(II) (Fe II, S II).",solution:"Valențe egale → indici 1:1 → $FeS$."},
      {level:"dificil",text:"Scrieți formula fosfatului de calciu, știind că Ca are valența II, iar radicalul $PO_4$ are valența III.",solution:"MCM(2,3)=6; Ca: 6/2=3, PO₄: 6/3=2 → $Ca_3(PO_4)_2$."},
      {level:"f-dificil",text:"Explicați de ce formula $Mg_2O_2$ este incorectă și care este forma corectă.",solution:"Indicii 2:2 se pot simplifica la cel mai mic raport 1:1, deci forma corectă este $MgO$."},
      {level:"f-dificil",text:"Un element X formează cu oxigenul (val. II) compusul $X_2O_5$. Determinați valența lui X.",solution:"Suma produselor: 2×val(X) = 5×2=10 → val(X)=5, deci X are valența V."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 4 – Reacții chimice
  // ══════════════════════════════════════════════════════════

  "u4-l1-transformari": {
    learn: "O transformare fizică modifică forma, starea de agregare sau aspectul unei substanțe, dar nu îi schimbă compoziția chimică — substanța inițială poate fi de obicei recuperată (topirea, fierberea, dizolvarea, cristalizarea). O transformare chimică (reacția chimică) presupune ruperea legăturilor din substanțele inițiale (reactanți) și formarea unor legături noi, rezultând substanțe cu proprietăți complet diferite (produși de reacție), proces în general ireversibil. Recunoaștem o reacție chimică după anumite indicii: degajare de gaz (efervescență), apariția unui precipitat, schimbarea culorii, degajare sau absorbție de căldură, sau emisie de lumină.",
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
      {level:"usor",text:"Ce este o transformare fizică?",solution:"O transformare în care se schimbă forma sau starea de agregare a substanței, fără a-i modifica compoziția chimică."},
      {level:"usor",text:"Numiți 2 indicii ale unei reacții chimice.",solution:"Degajare de gaz și schimbare de culoare (sau oricare 2 din: precipitat, căldură, lumină)."},
      {level:"usor",text:"Topirea gheții este transformare fizică sau chimică?",solution:"Fizică, deoarece compoziția $H_2O$ rămâne neschimbată."},
      {level:"mediu",text:"Clasificați: fierul ruginit, gheața topită, lemnul ars, zahărul dizolvat în apă.",solution:"Fierul ruginit – chimică; gheața topită – fizică; lemnul ars – chimică; zahărul dizolvat – fizică."},
      {level:"mediu",text:"Ce observați când adăugați oțet peste bicarbonat de sodiu? Ce tip de transformare este?",solution:"Se degajă bule de gaz ($CO_2$) cu efervescență → transformare chimică."},
      {level:"mediu",text:"Dați 2 exemple de transformări fizice și 2 chimice din viața cotidiană.",solution:"Fizice: topirea untului, evaporarea apei; chimice: arderea gazului la aragaz, ruginirea unui cui."},
      {level:"dificil",text:"Poate fi fotosinteza considerată reacție chimică? Justificați.",solution:"Da, deoarece din $CO_2$ și $H_2O$ se formează substanțe noi (glucoză și $O_2$), cu proprietăți complet diferite de reactanți."},
      {level:"dificil",text:"Explicați de ce dizolvarea sării în apă este o transformare fizică, deși aparent 'dispare'.",solution:"Sarea nu reacționează chimic, doar se disipează printre moleculele de apă; poate fi recuperată integral prin evaporarea apei, deci compoziția nu s-a schimbat."},
      {level:"f-dificil",text:"Un elev topește ceară, apoi o arde. Analizați cele două etape.",solution:"Topirea este transformare fizică (ceara își schimbă starea, dar rămâne aceeași substanță); arderea este transformare chimică (se formează $CO_2$ și $H_2O$, substanțe noi, ireversibil)."},
      {level:"f-dificil",text:"De ce reversibilitatea nu este un criteriu absolut pentru a distinge transformările fizice de cele chimice?",solution:"Deoarece există și reacții chimice reversibile, deci criteriul cel mai sigur este dacă se formează sau nu substanțe cu compoziție/proprietăți noi."}
    ]
  },

  "u4-l2-ecuatii-chimice": {
    learn: "O ecuație chimică reprezintă simbolic o reacție chimică, cu reactanții scriși în stânga săgeții și produșii în dreapta; coeficienții stoechiometrici (numerele din fața formulelor) arată raportul molar în care substanțele participă la reacție. Pentru ca ecuația să respecte legea conservării masei, ea trebuie echilibrată astfel încât numărul de atomi al fiecărui element să fie identic în ambii membri — acest lucru se realizează exclusiv prin ajustarea coeficienților, niciodată prin modificarea indicilor din formulele chimice, deoarece aceasta ar schimba identitatea substanței. Simbolurile suplimentare din ecuații ($\\Delta$ pentru încălzire, $\\downarrow$ pentru precipitat, $\\uparrow$ pentru degajare de gaz) oferă informații suplimentare despre condițiile și rezultatele reacției.",
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
      {level:"usor",text:"Ce reprezintă coeficientul stoechiometric dintr-o ecuație chimică?",solution:"Raportul molar (numărul de molecule/moli) în care participă o substanță la reacție."},
      {level:"usor",text:"Ce se modifică la echilibrarea unei ecuații: coeficienții sau indicii?",solution:"Doar coeficienții; indicii din formulele chimice nu se modifică niciodată."},
      {level:"usor",text:"Ce înseamnă simbolul $\\uparrow$ dintr-o ecuație chimică?",solution:"Se degajă un gaz."},
      {level:"mediu",text:"Echilibrați: $H_2 + O_2 \\rightarrow H_2O$.",solution:"$2H_2 + O_2 \\rightarrow 2H_2O$."},
      {level:"mediu",text:"Echilibrați: $Al + Cl_2 \\rightarrow AlCl_3$.",solution:"$2Al + 3Cl_2 \\rightarrow 2AlCl_3$."},
      {level:"mediu",text:"Echilibrați: $Ca + H_2O \\rightarrow Ca(OH)_2 + H_2$.",solution:"$Ca + 2H_2O \\rightarrow Ca(OH)_2 + H_2$."},
      {level:"dificil",text:"Câte molecule de $H_2O$ se formează la arderea a 2 molecule de $H_2$ (ecuația echilibrată)?",solution:"Din $2H_2+O_2\\rightarrow 2H_2O$, raportul $H_2:H_2O$ este 1:1, deci 2 molecule de $H_2$ formează 2 molecule de $H_2O$."},
      {level:"dificil",text:"Echilibrați: $Fe_2O_3 + CO \\rightarrow Fe + CO_2$.",solution:"$Fe_2O_3 + 3CO \\rightarrow 2Fe + 3CO_2$."},
      {level:"f-dificil",text:"Echilibrați: $C_3H_8 + O_2 \\rightarrow CO_2 + H_2O$.",solution:"$C_3H_8 + 5O_2 \\rightarrow 3CO_2 + 4H_2O$."},
      {level:"f-dificil",text:"Explicați de ce nu putem echilibra o ecuație modificând indicii din formule (ex: transformând $H_2O$ în $H_2O_2$).",solution:"Modificarea indicilor schimbă identitatea substanței (apa devine apă oxigenată, o substanță complet diferită), deci ecuația nu ar mai descrie reacția reală."}
    ]
  },

  "u4-l3-legea-conservarii": {
    learn: "Legea conservării masei (formulată de Lomonosov și Lavoisier) arată că, într-o reacție chimică, masa totală a substanțelor reactante este egală cu masa totală a produșilor de reacție, deoarece atomii nu se creează și nu se distrug, ci doar se rearanjează în legături noi. Pentru calcule cantitative, folosim conceptul de mol (o cantitate de substanță ce conține $6{,}022 \\times 10^{23}$ particule — numărul lui Avogadro) și masa molară M (masa în grame a unui mol, egală cu suma maselor atomice relative din formulă). Coeficienții unei ecuații echilibrate indică raportul molar dintre substanțe, permițându-ne să calculăm, printr-o regulă de trei simplă, masa oricărei substanțe implicate în reacție dacă o cunoaștem pe a alteia.",
    terms: [
      "<strong>Legea conservării masei</strong> (Lomonosov–Lavoisier): masa totală a reactanților = masa totală a produselor.",
      "<strong>Masă molară M</strong>: masa unui mol de substanță (g/mol); $M = \\sum A_r$ atomilor din formulă.",
      "<strong>Mol</strong>: $6{,}022 \\times 10^{23}$ particule (numărul lui Avogadro).",
      "<strong>Raport stoechiometric</strong>: raportul molar dat de coeficienții ecuației.",
      "<strong>Bilanț de masă</strong>: $m_{\text{reactanți}} = m_{produse}$."
    ],
    properties: [
      "Legea conservării masei: reacțiile chimice nu creează și nu distrug materie.",
      "$\\sum m_{\text{reactanți}} = \\sum m_{produse}$ (chiar dacă un produs gazos se pierde).",
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
      "Verificare: $m_{\text{reactanți}} = m_{produse}$."
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
      {level:"usor",text:"Cine a formulat legea conservării masei?",solution:"Lomonosov și Lavoisier."},
      {level:"usor",text:"Ce reprezintă un mol de substanță?",solution:"O cantitate ce conține $6{,}022\\times10^{23}$ particule (numărul lui Avogadro)."},
      {level:"usor",text:"Calculați masa molară a $NaCl$.",solution:"$M(NaCl)=23+35{,}5=58{,}5$ g/mol."},
      {level:"mediu",text:"Calculați masa molară a: $CaCO_3$, $H_2SO_4$.",solution:"$M(CaCO_3)=40+12+3\\times16=100$ g/mol; $M(H_2SO_4)=2+32+64=98$ g/mol."},
      {level:"mediu",text:"$2Na + Cl_2 \\rightarrow 2NaCl$. Câte grame de $NaCl$ se obțin din 46 g de $Na$?",solution:"$M(Na)=23$ g/mol → 46 g = 2 mol Na → 2 mol NaCl; $M(NaCl)=58{,}5$ → $2\\times58{,}5=117$ g."},
      {level:"mediu",text:"La arderea a 12 g C se formează $CO_2$ ($C+O_2\\rightarrow CO_2$). Ce masă de $CO_2$ se obține?",solution:"$M(C)=12$ g/mol → 12 g = 1 mol C → 1 mol $CO_2$; $M(CO_2)=44$ g/mol → 44 g."},
      {level:"dificil",text:"De ce masa unui corp care rugineaște crește?",solution:"Fierul se combină cu oxigenul din aer, iar masa oxidului format este egală cu suma masei fierului și a oxigenului adăugat, deci masa totală crește vizibil pentru corpul solid."},
      {level:"dificil",text:"8 g de $CH_4$ ars complet produc $CO_2$ și $H_2O$ ($CH_4+2O_2\\rightarrow CO_2+2H_2O$). Calculați masa de $O_2$ necesară.",solution:"$M(CH_4)=16$ g/mol → 8 g = 0,5 mol → necesită 1 mol $O_2$; $M(O_2)=32$ g/mol → 32 g."},
      {level:"f-dificil",text:"Explicați de ce, deși masa se conservă mereu, un recipient deschis în care arde o lumânare pare să piardă masă.",solution:"O parte din produșii de reacție ($CO_2$ și vapori de $H_2O$) sunt gaze care se împrăștie în atmosferă și scapă din recipient, dar masa totală rămâne conservată."},
      {level:"f-dificil",text:"Calculați masa de $CaO$ obținută din descompunerea a 50 g $CaCO_3$ ($CaCO_3 \\rightarrow CaO + CO_2$), știind $M(CaCO_3)=100$ g/mol, $M(CaO)=56$ g/mol.",solution:"50 g $CaCO_3$ = 0,5 mol → 0,5 mol $CaO$ → $0{,}5\\times56=28$ g $CaO$."}
    ]
  },

  "u4-l4-tipuri-reactii": {
    learn: "Reacțiile chimice se clasifică în funcție de modul în care se rearanjează substanțele: sinteza (combinarea) presupune unirea a doi sau mai mulți reactanți într-un singur produs ($A+B\\rightarrow AB$); descompunerea este procesul invers, în care un singur reactant se transformă în mai mulți produși ($AB\\rightarrow A+B$), de obicei cu aport de energie; substituția (înlocuirea simplă) are loc atunci când un element mai reactiv ia locul unui element mai puțin reactiv dintr-un compus ($A+BC\\rightarrow AC+B$), iar schimbul ionic (dubla substituție) presupune schimbul de parteneri între doi compuși ionici ($AB+CD\\rightarrow AD+CB$), reacție care are loc complet doar dacă se formează un precipitat, un gaz sau apă. Ordinea reactivității metalelor (seria activității) determină dacă o reacție de substituție are loc: un metal poate înlocui doar un metal situat sub el în această serie.",
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
      {level:"usor",text:"Ce tip de reacție este $A+B\\rightarrow AB$?",solution:"Reacție de sinteză (combinare)."},
      {level:"usor",text:"Ce tip de reacție este $AB\\rightarrow A+B$?",solution:"Reacție de descompunere."},
      {level:"usor",text:"Clasificați: $C+O_2\\rightarrow CO_2$.",solution:"Sinteză (doi reactanți formează un singur produs)."},
      {level:"mediu",text:"Clasificați: $2KClO_3\\xrightarrow{\\Delta}2KCl+3O_2$.",solution:"Descompunere (un reactant formează mai mulți produși, cu ajutorul căldurii)."},
      {level:"mediu",text:"Clasificați: $Zn+H_2SO_4\\rightarrow ZnSO_4+H_2$.",solution:"Substituție (zincul înlocuiește hidrogenul din acid, fiind mai reactiv)."},
      {level:"mediu",text:"De ce $Fe+CuSO_4\\rightarrow FeSO_4+Cu$ este substituție și nu schimb ionic?",solution:"Pentru că un element (Fe) înlocuiește un alt element (Cu) dintr-un compus, nu se schimbă doi parteneri ionici între doi compuși."},
      {level:"dificil",text:"Echilibrați și clasificați: $Na+H_2O\\rightarrow NaOH+H_2$.",solution:"$2Na+2H_2O\\rightarrow 2NaOH+H_2$; substituție (Na înlocuiește H din apă)."},
      {level:"dificil",text:"Ce tip de reacție este combustia metanului: $CH_4+2O_2\\rightarrow CO_2+2H_2O$?",solution:"Combustie (un tip particular de reacție de oxidare, cu degajare de căldură și lumină)."},
      {level:"f-dificil",text:"De ce reacția $Cu+ZnSO_4\\rightarrow$ nu are loc, deși pare o substituție posibilă?",solution:"Cuprul este mai puțin reactiv decât zincul în seria activității metalelor, deci nu poate înlocui zincul din compusul său."},
      {level:"f-dificil",text:"Explicați de ce reacția de schimb ionic $NaCl+AgNO_3\\rightarrow AgCl\\downarrow+NaNO_3$ are loc complet.",solution:"Deoarece se formează $AgCl$, un precipitat insolubil, care iese din soluție, deplasând echilibrul reacției spre formarea produșilor."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 5 – Oxizi
  // ══════════════════════════════════════════════════════════

  "u5-l1-definitie-clasificare": {
    learn: "Un oxid este un compus binar (format din doar 2 elemente) alcătuit din oxigen și un alt element, oxigenul păstrându-și în oxizi valența II. În funcție de natura celuilalt element, oxizii se clasifică în oxizi bazici (metal + O), care reacționează cu apa formând baze (hidroxizi), și oxizi acizi sau anhidride (nemetal + O), care reacționează cu apa formând acizi. Există și excepții: unii oxizi sunt indiferenți (nu reacționează cu apa, precum $CO$ sau $NO$), iar alții sunt amfoteri, reacționând atât cu acizii cât și cu bazele tari (de exemplu $Al_2O_3$ sau $ZnO$).",
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
      {level:"usor",text:"Ce este un oxid?",solution:"Un compus binar format din oxigen și un alt element."},
      {level:"usor",text:"Ce valență are oxigenul în oxizi?",solution:"II."},
      {level:"usor",text:"Scrieți formula oxidului de magneziu (Mg II).",solution:"$MgO$."},
      {level:"mediu",text:"Scrieți formulele: dioxid de sulf (S IV), oxid de fier(III) (Fe III).",solution:"$SO_2$; $Fe_2O_3$."},
      {level:"mediu",text:"Clasificați ca bazic sau acid: $Na_2O$, $SO_2$, $Fe_2O_3$, $CO_2$.",solution:"$Na_2O$ și $Fe_2O_3$ - bazici (metal); $SO_2$ și $CO_2$ - acizi (nemetal)."},
      {level:"mediu",text:"Scrieți ecuația formării $MgO$ prin arderea magneziului.",solution:"$2Mg + O_2 \\rightarrow 2MgO$."},
      {level:"dificil",text:"Scrieți formula trioxidului de sulf și determinați valența sulfului.",solution:"$SO_3$; valența S = 3×valența O / nr. atomi S = 3×2/1 = VI."},
      {level:"dificil",text:"De ce $CO_2$ se numește anhidridă carbonică?",solution:"Pentru că prin reacția cu apa formează acidul carbonic ($H_2CO_3$); 'anhidridă' înseamnă oxid acid."},
      {level:"f-dificil",text:"Explicați diferența dintre un oxid amfoter și unul indiferent, cu câte un exemplu.",solution:"Oxidul amfoter reacționează atât cu acizi cât și cu baze (ex: $Al_2O_3$); oxidul indiferent nu reacționează nici cu apa, nici cu acizi/baze uzuale (ex: $CO$, $NO$)."},
      {level:"f-dificil",text:"Un element X (nemetal) formează cu oxigenul compusul $X_2O_5$. Ce tip de oxid este și ce se va obține prin reacția cu apa?",solution:"Este oxid acid (nemetal + O); prin reacția cu apa va forma un acid (oxoacid) corespunzător."}
    ]
  },

  "u5-l2-oxizi-metalici": {
    learn: "Oxizii metalici (oxizii bazici) se obțin prin arderea sau oxidarea directă a metalelor cu oxigen și au proprietatea caracteristică de a reacționa cu apa formând baze (hidroxizi) — $CaO$ (var nestins) reacționează exoterm cu apa formând $Ca(OH)_2$ (var stins). De asemenea, oxizii metalici reacționează cu acizii într-o reacție de neutralizare, formând o sare și apă, și pot reacționa cu oxizii acizi formând direct o sare — reacția $CaO + CO_2 \\rightarrow CaCO_3$ fiind un exemplu tipic. Nu toți oxizii metalici reacționează la fel de ușor cu apa: unii, precum $Fe_2O_3$, nu reacționează direct cu apa rece, spre deosebire de oxizii metalelor alcaline și alcalino-pământoase, care reacționează energic.",
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
      {level:"usor",text:"Cum se obțin oxizii metalici?",solution:"Prin arderea sau oxidarea directă a metalelor cu oxigen."},
      {level:"usor",text:"Ce se formează atunci când un oxid bazic reacționează cu apa?",solution:"O bază (hidroxid)."},
      {level:"usor",text:"Cum se numește popular $CaO$?",solution:"Var nestins."},
      {level:"mediu",text:"Echilibrați: $Fe + O_2 \\rightarrow Fe_3O_4$.",solution:"$3Fe + 2O_2 \\rightarrow Fe_3O_4$."},
      {level:"mediu",text:"Ce se obține când $Na_2O$ reacționează cu apa? Scrieți ecuația.",solution:"$Na_2O + H_2O \\rightarrow 2NaOH$ (hidroxid de sodiu)."},
      {level:"mediu",text:"Scrieți ecuația reacției $MgO$ cu $HCl$.",solution:"$MgO + 2HCl \\rightarrow MgCl_2 + H_2O$."},
      {level:"dificil",text:"De ce $CaO$ (var nestins) se folosește în construcții?",solution:"Reacționează exoterm cu apa formând $Ca(OH)_2$, care apoi se combină cu $CO_2$ din aer, întărindu-se treptat."},
      {level:"dificil",text:"Scrieți ecuația reacției dintre $CaO$ și $CO_2$ și precizați tipul reacției.",solution:"$CaO + CO_2 \\rightarrow CaCO_3$; reacție de sinteză între un oxid bazic și un oxid acid."},
      {level:"f-dificil",text:"Explicați de ce $Fe_2O_3$ nu reacționează direct cu apa rece, spre deosebire de $CaO$.",solution:"Fierul este mult mai puțin reactiv decât calciul (metal alcalino-pământos), deci oxidul său este mai stabil și nu reacționează în condiții normale."},
      {level:"f-dificil",text:"Scrieți ecuația completă a obținerii sulfatului de cupru din oxid de cupru și acid sulfuric, precizând observația vizuală.",solution:"$CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$; oxidul de cupru negru se dizolvă, obținându-se o soluție albastră."}
    ]
  },

  "u5-l3-oxizi-nemetalici": {
    learn: "Oxizii nemetalici (oxizii acizi sau anhidridele) se obțin prin arderea nemetalelor în oxigen și au proprietatea de a reacționa cu apa formând acizi (oxoacizi) — de exemplu, $SO_3 + H_2O \\rightarrow H_2SO_4$ (acid sulfuric). De asemenea, reacționează cu bazele formând o sare și apă (ex: $CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O$) și cu oxizii bazici formând direct săruri. Unii oxizi acizi, precum $SO_2$ și oxizii de azot ($NO_x$), rezultați din arderea combustibililor fosili, sunt principalii responsabili pentru fenomenul de ploaie acidă, deoarece reacționează cu vaporii de apă din atmosferă formând acizi care cad apoi odată cu precipitațiile.",
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
      {level:"usor",text:"Cum se obțin oxizii nemetalici (acizi)?",solution:"Prin arderea nemetalelor în oxigen."},
      {level:"usor",text:"Ce se formează când un oxid acid reacționează cu apa?",solution:"Un acid (oxoacid)."},
      {level:"usor",text:"Scrieți ecuația arderii carbonului: $C + O_2 \\rightarrow ?$",solution:"$C + O_2 \\rightarrow CO_2$."},
      {level:"mediu",text:"$SO_3$ reacționează cu apa. Ce se obține? Scrieți ecuația.",solution:"$SO_3 + H_2O \\rightarrow H_2SO_4$ (acid sulfuric)."},
      {level:"mediu",text:"Scrieți ecuația reacției $CO_2$ cu $NaOH$ în exces.",solution:"$CO_2 + 2NaOH \\rightarrow Na_2CO_3 + H_2O$."},
      {level:"mediu",text:"De ce ploaia acidă este periculoasă? Ce oxizi acizi contribuie la formarea ei?",solution:"Distruge vegetația, acidifiază solurile și apele, corodează construcțiile; principalii vinovați sunt $SO_2$ și oxizii de azot ($NO_x$)."},
      {level:"dificil",text:"Comparați $CO_2$ și $SO_3$: asemănări și deosebiri.",solution:"Asemănări: ambii sunt oxizi acizi, reacționează cu apa și cu bazele; deosebiri: $CO_2$ formează acid carbonic slab și instabil, $SO_3$ formează acid sulfuric puternic și stabil."},
      {level:"dificil",text:"Scrieți ecuația formării ploii acide prin reacția $SO_2$ cu apa.",solution:"$SO_2 + H_2O \\rightarrow H_2SO_3$ (acid sulfuros)."},
      {level:"f-dificil",text:"Explicați de ce acidul carbonic ($H_2CO_3$) format din $CO_2$ dizolvat în apă este considerat instabil.",solution:"Se descompune ușor înapoi în $CO_2$ și $H_2O$, motiv pentru care apa carbogazoasă eliberează bule de $CO_2$ la deschiderea sticlei."},
      {level:"f-dificil",text:"Scrieți ecuația reacției dintre $P_2O_5$ (oxid acid, valența P=V) și apă, știind că se formează acid fosforic $H_3PO_4$.",solution:"$P_2O_5 + 3H_2O \\rightarrow 2H_3PO_4$."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 6 – Acizi
  // ══════════════════════════════════════════════════════════

  "u6-l1-acizi-definitie": {
    learn: "Acizii sunt substanțe care, dizolvate în apă, cedează ioni de hidrogen ($H^+$), imprimând soluției un caracter acid (pH sub 7) și proprietatea de a înroși hârtia de turnesol albastru. În funcție de compoziție, se clasifică în hidracizi, care nu conțin oxigen și au formula generală $H_nX$ (ex: $HCl$, $H_2S$), și oxoacizi, care conțin oxigen și au formula generală $H_nXO_m$ (ex: $H_2SO_4$, $HNO_3$). De asemenea, acizii se împart în acizi tari, care se ionizează complet în apă și sunt puternic corozivi ($HCl$, $H_2SO_4$, $HNO_3$), și acizi slabi, care se ionizează doar parțial ($H_2CO_3$, $CH_3COOH$).",
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
      {level:"usor",text:"Ce este un acid?",solution:"O substanță care cedează ioni $H^+$ în soluție apoasă."},
      {level:"usor",text:"Ce culoare capătă hârtia de turnesol în contact cu o soluție acidă?",solution:"Roșie."},
      {level:"usor",text:"Ce este un hidracid?",solution:"Un acid care nu conține oxigen (formula $H_nX$), ex: $HCl$, $H_2S$."},
      {level:"mediu",text:"Clasificați și denumiți: $HBr$, $H_3PO_4$.",solution:"$HBr$ - hidracid, acid bromhidric; $H_3PO_4$ - oxoacid, acid fosforic."},
      {level:"mediu",text:"Scrieți formula pentru: acid fosforic, acid fluorhidric.",solution:"$H_3PO_4$; $HF$."},
      {level:"mediu",text:"De ce acidul sulfuric se diluează turnând acidul în apă și nu invers?",solution:"Reacția de diluare este puternic exotermică; turnând acidul în apă, căldura se dispersă treptat, evitând stropirea cu acid fierbinte."},
      {level:"dificil",text:"Clasificați și denumiți: $H_2S$, $HNO_2$.",solution:"$H_2S$ - hidracid, acid sulfhidric; $HNO_2$ - oxoacid, acid azotos."},
      {level:"dificil",text:"Care este diferența dintre un acid tare și un acid slab? Dați exemple.",solution:"Acidul tare se ionizează complet în apă ($HCl$, $H_2SO_4$); acidul slab se ionizează doar parțial ($H_2CO_3$, $CH_3COOH$)."},
      {level:"f-dificil",text:"Explicați diferența de nomenclatură dintre $H_2SO_4$ (acid sulfuric) și $H_2SO_3$ (acid sulfuros).",solution:"Sufixul '-ic' se folosește pentru acidul cu numărul de oxidare mai mare al sulfului (+VI), iar '-os' pentru cel mai mic (+IV)."},
      {level:"f-dificil",text:"De ce acidul acetic ($CH_3COOH$, oțetul) este considerat un acid slab, deși este folosit frecvent în alimentație?",solution:"Se ionizează doar parțial în apă, fiind mult mai puțin coroziv decât acizii tari, ceea ce îl face sigur pentru consum în concentrații mici."}
    ]
  },

  "u6-l2-acizi-proprietati": {
    learn: "Acizii manifestă un set caracteristic de reacții chimice: reacționează cu metalele situate înaintea hidrogenului în seria activității, degajând hidrogen gazos și formând o sare ($M + 2HCl \\rightarrow MCl_2 + H_2\\uparrow$); reacționează cu oxizii bazici, formând o sare și apă; și reacționează cu bazele într-o reacție de neutralizare, formând întotdeauna o sare și apă. Nu toate metalele reacționează cu acizii: metalele situate după hidrogen în seria activității (Cu, Ag, Au, Pt) nu reacționează cu acizii diluați precum $HCl$ sau $H_2SO_4$ diluat, deoarece nu pot ceda electroni mai ușor decât hidrogenul.",
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
      {level:"usor",text:"Ce se degajă atunci când un acid reacționează cu un metal activ?",solution:"Hidrogen gazos ($H_2$)."},
      {level:"usor",text:"Ce se formează la neutralizarea unui acid cu o bază?",solution:"O sare și apă."},
      {level:"usor",text:"Scrieți ecuația reacției $Mg + H_2SO_4$ diluat.",solution:"$Mg + H_2SO_4 \\rightarrow MgSO_4 + H_2\\uparrow$."},
      {level:"mediu",text:"Ce se obține la neutralizarea $Ca(OH)_2$ cu $HCl$? Scrieți ecuația.",solution:"$Ca(OH)_2 + 2HCl \\rightarrow CaCl_2 + 2H_2O$."},
      {level:"mediu",text:"De ce cuprul nu reacționează cu $HCl$ diluat?",solution:"Cuprul este situat după hidrogen în seria activității metalelor, deci nu poate înlocui hidrogenul din acid."},
      {level:"mediu",text:"Scrieți ecuația reacției $ZnO + H_2SO_4$.",solution:"$ZnO + H_2SO_4 \\rightarrow ZnSO_4 + H_2O$."},
      {level:"dificil",text:"Calculați masa de $ZnCl_2$ obținută din 65 g Zn (M=65 g/mol) cu $HCl$ în exces.",solution:"1 mol Zn → 1 mol $ZnCl_2$; $M(ZnCl_2)=136$ g/mol → 136 g."},
      {level:"dificil",text:"Scrieți ecuația reacției dintre $Fe_2O_3$ și $H_2SO_4$ și precizați observația de culoare.",solution:"$Fe_2O_3 + 3H_2SO_4 \\rightarrow Fe_2(SO_4)_3 + 3H_2O$; soluție galben-brună."},
      {level:"f-dificil",text:"Explicați de ce reacția dintre un acid și un metal nu este posibilă pentru toate metalele.",solution:"Doar metalele mai reactive decât hidrogenul pot ceda electroni mai ușor decât acesta, deplasându-l din acid; metalele nobile (Cu, Ag, Au) nu au această capacitate."},
      {level:"f-dificil",text:"Un elev neutralizează complet 20 g $NaOH$ (M=40 g/mol) cu $HCl$. Calculați masa de $NaCl$ obținută (M=58,5 g/mol).",solution:"20 g NaOH = 0,5 mol → 0,5 mol NaCl → $0{,}5\\times58{,}5=29{,}25$ g."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 7 – Baze (Hidroxizi)
  // ══════════════════════════════════════════════════════════

  "u7-l1-baze-definitie": {
    learn: "O bază este o substanță care, dizolvată în apă, eliberează ioni hidroxid ($OH^-$), conferind soluției un caracter bazic (pH peste 7) și proprietatea de a albăstri hârtia de turnesol roșie sau de a colora fenolftaleina în roz-violet. Formula generală a unei baze este $M(OH)_n$, unde n este valența metalului; bazele metalelor alcaline și alcalino-pământoase (NaOH, KOH, Ca(OH)₂, Ba(OH)₂), numite și alcali, sunt solubile în apă și se ionizează complet (baze tari), în timp ce bazele metalelor de tranziție (Fe(OH)₃, Cu(OH)₂, Al(OH)₃) sunt de regulă insolubile și formează precipitate colorate caracteristice.",
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
      {level:"usor",text:"Ce este o bază?",solution:"O substanță care eliberează ioni $OH^-$ în soluție apoasă."},
      {level:"usor",text:"Ce culoare capătă hârtia de turnesol în prezența $NaOH$?",solution:"Albastră."},
      {level:"usor",text:"Scrieți formula hidroxidului de sodiu.",solution:"$NaOH$."},
      {level:"mediu",text:"Scrieți formulele: hidroxid de aluminiu, hidroxid de fier(II).",solution:"$Al(OH)_3$; $Fe(OH)_2$."},
      {level:"mediu",text:"De ce $NaOH$ se numește sodă caustică?",solution:"Pentru că este o bază tare, extrem de corozivă, care poate provoca arsuri chimice grave."},
      {level:"mediu",text:"Care baze sunt solubile în apă? Dați 3 exemple.",solution:"Bazele metalelor alcaline și alcalino-pământoase: $NaOH$, $KOH$, $Ca(OH)_2$."},
      {level:"dificil",text:"Denumiți $Fe(OH)_3$ și precizați solubilitatea.",solution:"Hidroxid de fier(III); este insolubil (precipitat brun-roșcat)."},
      {level:"dificil",text:"O soluție necunoscută colorează fenolftaleina în roz. Ce tip de soluție este?",solution:"Bazică (pH>7), deoarece fenolftaleina devine roz-violet doar în mediu bazic."},
      {level:"f-dificil",text:"Explicați de ce bazele tari sunt considerate periculoase, adesea mai mult decât acizii tari.",solution:"Dizolvă grăsimilea și proteinele din țesuturi, pătrunzând mai adânc și provocând arsuri chimice mai severe decât mulți acizi."},
      {level:"f-dificil",text:"Un metal M formează hidroxidul $M(OH)_2$. Ce valență are metalul și cum se numește compusul dacă M=Mg?",solution:"Valența II; compusul se numește hidroxid de magneziu."}
    ]
  },

  "u7-l2-baze-proprietati": {
    learn: "Bazele reacționează cu acizii într-o reacție de neutralizare, formând întotdeauna o sare și apă, și cu oxizii acizi, formând de asemenea o sare și apă (reacția $Ca(OH)_2 + CO_2 \\rightarrow CaCO_3\\downarrow + H_2O$ fiind folosită ca test clasic pentru identificarea dioxidului de carbon, apa de var devenind tulbure). Bazele insolubile se descompun termic, formând oxidul metalic corespunzător și apă ($Cu(OH)_2 \\xrightarrow{\\Delta} CuO + H_2O$), iar o bază solubilă poate reacționa cu o sare solubilă pentru a forma o bază insolubilă (precipitat) și o nouă sare. Unele hidroxizi, precum $Al(OH)_3$, sunt amfoteri, reacționând atât cu acizii cât și cu bazele tari.",
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
      {level:"usor",text:"Ce se formează la reacția dintre o bază și un acid?",solution:"O sare și apă (neutralizare)."},
      {level:"usor",text:"Scrieți ecuația neutralizării $Ca(OH)_2$ cu $HCl$.",solution:"$Ca(OH)_2 + 2HCl \\rightarrow CaCl_2 + 2H_2O$."},
      {level:"usor",text:"Ce culoare are precipitatul format la testul cu apă de var pentru $CO_2$?",solution:"Alb ($CaCO_3$)."},
      {level:"mediu",text:"Cum identificăm $CO_2$ în laborator cu apa de var? Descrieți reacția.",solution:"$CO_2$ trecut prin apa de var tulbură soluția: $Ca(OH)_2+CO_2\\rightarrow CaCO_3\\downarrow+H_2O$."},
      {level:"mediu",text:"Ce se obține la descompunerea termică a $Fe(OH)_3$? Scrieți ecuația.",solution:"$2Fe(OH)_3 \\xrightarrow{\\Delta} Fe_2O_3 + 3H_2O$."},
      {level:"mediu",text:"Scrieți ecuația reacției de precipitare $CuSO_4 + NaOH$.",solution:"$CuSO_4 + 2NaOH \\rightarrow Cu(OH)_2\\downarrow + Na_2SO_4$."},
      {level:"dificil",text:"Calculați masa de $NaCl$ obținută din neutralizarea a 40 g $NaOH$ (M=40 g/mol) cu $HCl$ în exces.",solution:"40 g NaOH = 1 mol → 1 mol NaCl (M=58,5 g/mol) → 58,5 g."},
      {level:"dificil",text:"De ce $Al(OH)_3$ este considerat un hidroxid amfoter?",solution:"Deoarece reacționează atât cu acizii, cât și cu bazele tari, formând săruri în ambele cazuri."},
      {level:"f-dificil",text:"Explicați de ce culoarea se schimbă de la albastru la negru la descompunerea termică a $Cu(OH)_2$.",solution:"Prin încălzire, $Cu(OH)_2$ (albastru) pierde apă și se transformă în $CuO$ (negru): $Cu(OH)_2 \\xrightarrow{\\Delta} CuO + H_2O$."},
      {level:"f-dificil",text:"Scrieți ecuația completă și echilibrată a reacției dintre $Al(OH)_3$ și exces de $NaOH$, știind că se formează aluminatul de sodiu $NaAlO_2$.",solution:"$Al(OH)_3 + NaOH \\rightarrow NaAlO_2 + 2H_2O$."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 8 – Săruri
  // ══════════════════════════════════════════════════════════

  "u8-l1-saruri-definitie": {
    learn: "O sare este un compus ionic format din cationul unui metal (sau al unui ion echivalent, ca $NH_4^+$) și anionul provenit dintr-un acid, rezultat de obicei în urma unei reacții de neutralizare sau a altor metode de obținere. Sărurile se clasifică în săruri medii (neutre), care nu mai conțin H sau OH suplimentar în structură (ex: $NaCl$, $CaSO_4$), săruri acide, care păstrează un atom de hidrogen ionizabil în anion (ex: $NaHCO_3$), și săruri bazice, care conțin și grupări OH (ex: $Cu(OH)Cl$). Solubilitatea sărurilor variază considerabil: în timp ce majoritatea azotaților și clorurilor sunt solubile, sulfatul de bariu ($BaSO_4$), clorura de argint ($AgCl$) și carbonatul de calciu ($CaCO_3$) sunt exemple clasice de săruri insolubile.",
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
      {level:"usor",text:"Ce este o sare?",solution:"Un compus ionic format din cationul unui metal și anionul unui acid."},
      {level:"usor",text:"Ce este o sare medie (normală)?",solution:"O sare neutră electric, fără H sau OH suplimentar, ex: $NaCl$."},
      {level:"usor",text:"Denumiți sarea $FeCl_3$.",solution:"Clorură de fier(III)."},
      {level:"mediu",text:"Scrieți formula: azotat de potasiu, sulfat de magneziu.",solution:"$KNO_3$; $MgSO_4$."},
      {level:"mediu",text:"Denumiți: $BaSO_4$, $Na_3PO_4$.",solution:"Sulfat de bariu; fosfat de sodiu."},
      {level:"mediu",text:"Care săruri sunt insolubile din lista: $NaCl$, $BaSO_4$, $AgCl$, $KNO_3$?",solution:"$BaSO_4$ și $AgCl$ sunt insolubile."},
      {level:"dificil",text:"Ce diferență există între $Na_2CO_3$ și $NaHCO_3$?",solution:"$Na_2CO_3$ este o sare medie; $NaHCO_3$ este o sare acidă, păstrând un H ionizabil în anion."},
      {level:"dificil",text:"Scrieți formula fosfatului de calciu, știind că $PO_4$ are valența III.",solution:"MCM(2,3)=6 → $Ca_3(PO_4)_2$."},
      {level:"f-dificil",text:"Explicați de ce $CaCO_3$ (calcar, marmură, cretă) este atât de răspândit în natură, deși este o sare insolubilă.",solution:"Fiind insolubil, nu este dizolvat de apele naturale, ci se depune și se acumulează în timp, formând roci sedimentare."},
      {level:"f-dificil",text:"Un compus are formula $Cu(OH)Cl$. Ce tip de sare este și ce grupări conține?",solution:"Este o sare bazică, deoarece conține atât o grupare $OH^-$ cât și un anion de acid ($Cl^-$)."}
    ]
  },

  "u8-l2-saruri-obtinere": {
    learn: "Sărurile se pot obține prin mai multe metode, alese în funcție de reactanții disponibili și de solubilitatea produsului dorit: combinarea directă a unui metal cu un nemetal ($2Na + Cl_2 \\rightarrow 2NaCl$), reacția unui metal activ cu un acid (cu degajare de hidrogen), reacția unui oxid bazic cu un acid, reacția de neutralizare dintre o bază și un acid, sau reacția de schimb ionic dintre două săruri solubile, atunci când unul din produși este un precipitat insolubil. Alegerea metodei potrivite depinde de disponibilitatea reactanților: neutralizarea este cea mai versatilă pentru obținerea sărurilor solubile, în timp ce schimbul ionic este metoda preferată pentru obținerea sărurilor greu solubile, precum $BaSO_4$ sau $AgCl$.",
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
      {level:"usor",text:"Numiți 2 metode de obținere a sărurilor.",solution:"Neutralizare (bază + acid) și reacția metal + acid."},
      {level:"usor",text:"Ce se degajă la reacția unui metal activ cu un acid?",solution:"Hidrogen gazos."},
      {level:"usor",text:"Scrieți ecuația obținerii $NaCl$ din elemente.",solution:"$2Na + Cl_2 \\rightarrow 2NaCl$."},
      {level:"mediu",text:"Scrieți ecuația obținerii $Na_2SO_4$ prin neutralizarea $NaOH$ cu $H_2SO_4$.",solution:"$2NaOH + H_2SO_4 \\rightarrow Na_2SO_4 + 2H_2O$."},
      {level:"mediu",text:"Prin ce metodă obțineți $BaSO_4$ (insolubil)? Scrieți ecuația.",solution:"Prin schimb ionic: $BaCl_2 + Na_2SO_4 \\rightarrow BaSO_4\\downarrow + 2NaCl$."},
      {level:"mediu",text:"Echilibrați: $Mg + HCl \\rightarrow MgCl_2 + H_2$.",solution:"$Mg + 2HCl \\rightarrow MgCl_2 + H_2$."},
      {level:"dificil",text:"Calculați masa de $NaCl$ din $2Na + Cl_2 \\rightarrow 2NaCl$, pornind de la 46 g Na (M=23 g/mol).",solution:"46 g Na = 2 mol → 2 mol NaCl (M=58,5 g/mol) → $2\\times58{,}5=117$ g."},
      {level:"dificil",text:"Scrieți ecuația obținerii $CuSO_4$ din reacția oxidului de cupru cu acid sulfuric.",solution:"$CuO + H_2SO_4 \\rightarrow CuSO_4 + H_2O$."},
      {level:"f-dificil",text:"Explicați de ce reacția $AgNO_3 + NaCl \\rightarrow AgCl\\downarrow + NaNO_3$ este o metodă bună de obținere a $AgCl$.",solution:"Deoarece $AgCl$ este insolubil și precipită imediat din soluție, asigurând un randament ridicat."},
      {level:"f-dificil",text:"Un elev vrea să obțină $CaCO_3$ pur în laborator. Ce metodă ar recomanda folosind carbonat de sodiu și o sare de calciu solubilă?",solution:"Schimb ionic: $Na_2CO_3 + CaCl_2 \\rightarrow CaCO_3\\downarrow + 2NaCl$, urmat de filtrarea precipitatului."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 9 – Apa
  // ══════════════════════════════════════════════════════════

  "u9-l1-proprietati-apa": {
    learn: "Apa ($H_2O$) este cea mai răspândită substanță de pe Pământ și are proprietăți fizice remarcabile: este lichidă la temperatura camerei, incoloră, inodoră, insipidă, cu densitatea maximă la 4°C (aprox. 1 g/cm³), punctul de topire 0°C și punctul de fierbere 100°C la presiune normală. Molecula de apă este polară, cu doi atomi de hidrogen legați covalent de un atom de oxigen printr-un unghi de aproximativ 104,5°, ceea ce îi conferă proprietatea de a forma legături de hidrogen între molecule — responsabile pentru tensiunea superficială ridicată, căldura specifică mare și anomalia densității (gheața plutește pe apă, fiind mai puțin densă decât apa lichidă). Din punct de vedere chimic, apa este un oxid (oxidul de hidrogen) și poate participa la numeroase reacții: cu metalele active, cu oxizii metalici (→ baze) și cu oxizii nemetalici (→ acizi).",
    terms: [
      "<strong>Molecula de apă</strong>: $H_2O$, structură unghiulară (104,5°), polară.",
      "<strong>Legătură de hidrogen</strong>: atracție slabă între moleculele de apă, responsabilă de multe proprietăți speciale.",
      "<strong>Anomalia apei</strong>: gheața este mai puțin densă decât apa lichidă (plutește).",
      "<strong>Tensiune superficială</strong>: forța care 'întinde' suprafața apei, permițând unor insecte să meargă pe apă.",
      "<strong>Căldură specifică</strong>: cantitate mare de energie necesară pentru a încălzi apa cu 1°C (4,18 J/g·°C)."
    ],
    properties: [
      "Punct de topire: 0°C; punct de fierbere: 100°C (la presiune normală, 1 atm).",
      "Densitate maximă la 4°C (~1 g/cm³); gheața (0°C) este mai puțin densă → plutește.",
      "Moleculă polară → apa este solvent bun pentru substanțe ionice și polare.",
      "Apa reacționează cu metale active (Na, K, Ca): $2Na+2H_2O\\rightarrow 2NaOH+H_2\\uparrow$.",
      "Apa reacționează cu oxizi bazici → baze; cu oxizi acizi → acizi."
    ],
    steps: [
      "Verifică dacă substanța reacționează cu apa (metal activ, oxid bazic sau oxid acid).",
      "Scrie ecuația reacției și identifică produsul (bază, acid sau hidroxid).",
      "Verifică echilibrarea ecuației.",
      "Ține cont de starea de agregare (gheață/lichid/vapori) în funcție de temperatură."
    ],
    tips: [
      "Apa pură (distilată) nu conduce curentul electric; apa cu săruri dizolvate (naturală) conduce.",
      "Nu confunda apa grea ($D_2O$) cu apa obișnuită – conține deuteriu în loc de hidrogen.",
      "Gheața plutește datorită anomaliei densității – fenomen esențial pentru viața acvatică pe timp de iarnă.",
      "Vaporii de apă sunt incolori – 'aburul' vizibil este de fapt picături fine de apă lichidă."
    ],
    examples: [
      {
        label: "reacția cu sodiul",
        given: "$Na$ + $H_2O$",
        ask: "produsele și ecuația echilibrată",
        solve: "$2Na+2H_2O\\rightarrow 2NaOH+H_2\\uparrow$. Reacție violentă, cu degajare de hidrogen și formarea hidroxidului de sodiu.",
        answer: "$2Na+2H_2O\\rightarrow 2NaOH+H_2\\uparrow$"
      },
      {
        label: "densitatea gheții",
        given: "gheața plutește pe apă lichidă",
        ask: "explicați fenomenul",
        solve: "La îngheț, moleculele de apă formează o rețea cristalină cu goluri (legături de hidrogen ordonate), ocupând un volum mai mare decât apa lichidă la aceeași masă → densitate mai mică → plutește.",
        answer: "gheața are densitate mai mică decât apa lichidă"
      },
      {
        label: "apa ca oxid",
        given: "$H_2+O_2\\rightarrow H_2O$ (neechilibrată)",
        ask: "echilibrați ecuația formării apei",
        solve: "$2H_2+O_2\\rightarrow 2H_2O$. Verificare: H: 4=4; O: 2=2.",
        answer: "$2H_2+O_2\\rightarrow 2H_2O$"
      }
    ],
    exercises: [
      {level:"usor",text:"La ce temperatură îngheață și la ce temperatură fierbe apa (presiune normală)?",solution:"Îngheață la 0°C și fierbe la 100°C."},
      {level:"usor",text:"Ce formă are molecula de apă?",solution:"Unghiulară (îndoită), cu un unghi de aproximativ 104,5° între cele două legături O-H."},
      {level:"usor",text:"De ce apa este considerată un solvent bun?",solution:"Pentru că este o moleculă polară, capabilă să dizolve multe substanțe ionice și polare."},
      {level:"mediu",text:"Scrieți ecuația reacției dintre potasiu și apă.",solution:"$2K+2H_2O\\rightarrow 2KOH+H_2\\uparrow$."},
      {level:"mediu",text:"De ce gheața plutește pe apă?",solution:"Deoarece are o densitate mai mică decât apa lichidă, datorită rețelei cristaline cu goluri formate prin legăturile de hidrogen."},
      {level:"mediu",text:"Echilibrați ecuația formării apei din elemente: $H_2+O_2\\rightarrow H_2O$.",solution:"$2H_2+O_2\\rightarrow 2H_2O$."},
      {level:"dificil",text:"Ce se întâmplă când $CaO$ reacționează cu apa? Scrieți ecuația.",solution:"$CaO+H_2O\\rightarrow Ca(OH)_2$ (reacție exotermă, se formează var stins)."},
      {level:"dificil",text:"Explicați de ce apa are o căldură specifică neobișnuit de mare.",solution:"Datorită legăturilor de hidrogen numeroase dintre molecule, este nevoie de multă energie pentru a crește agitația termică a moleculelor."},
      {level:"f-dificil",text:"De ce apa pură (distilată) nu conduce curentul electric, dar apa de la robinet da?",solution:"Apa pură conține foarte puțini ioni liberi; apa de la robinet conține săruri dizolvate (ioni), care permit conducerea curentului electric."},
      {level:"f-dificil",text:"Explicați rolul legăturilor de hidrogen în determinarea tensiunii superficiale a apei.",solution:"Legăturile de hidrogen atrag moleculele de la suprafață mai puternic spre interior decât spre exterior, creând o 'peliculă' care rezistă la deformare."}
    ]
  },

  "u9-l2-apa-solvent": {
    learn: "Apa este numită 'solventul universal' datorită capacității sale de a dizolva un număr foarte mare de substanțe, atât ionice (săruri, precum $NaCl$), cât și polare (zahăr, alcool), moleculele de apă înconjurând și separând ionii sau moleculele substanței dizolvate (solvatul). O soluție este un amestec omogen format din solvent (substanța în cantitate mai mare, de obicei apa) și solvat (substanța dizolvată); concentrația procentuală masică arată câte grame de solvat sunt dizolvate în 100 g de soluție, calculându-se cu formula $c\\% = \\dfrac{m_{solvat}}{m_{\text{soluție}}} \\times 100$. Solubilitatea unei substanțe (cantitatea maximă ce se poate dizolva la o temperatură dată) variază cu temperatura — de regulă, solubilitatea substanțelor solide crește cu temperatura, în timp ce solubilitatea gazelor în apă scade odată cu creșterea temperaturii.",
    terms: [
      "<strong>Soluție</strong>: amestec omogen format din solvent și solvat.",
      "<strong>Solvent</strong>: substanța în cantitate mai mare (de obicei apa).",
      "<strong>Solvat (substanță dizolvată)</strong>: substanța în cantitate mai mică, dizolvată în solvent.",
      "<strong>Concentrație procentuală masică</strong>: $c\\% = \\dfrac{m_{solvat}}{m_{\text{soluție}}} \\times 100$.",
      "<strong>Solubilitate</strong>: cantitatea maximă de solvat ce se dizolvă în 100 g solvent, la o temperatură dată.",
      "<strong>Soluție saturată</strong>: conține cantitatea maximă posibilă de solvat dizolvat, la acea temperatură."
    ],
    properties: [
      "Masa soluției = masa solventului + masa solvatului: $m_{\text{soluție}}=m_{solvent}+m_{solvat}$.",
      "Solubilitatea solidelor în apă crește, de regulă, cu temperatura.",
      "Solubilitatea gazelor în apă scade odată cu creșterea temperaturii.",
      "O soluție saturată nu mai poate dizolva solvat suplimentar la acea temperatură.",
      "Substanțele nepolare (ex: uleiul) nu se dizolvă în apă (polară) – 'asemănătorul dizolvă asemănătorul'."
    ],
    steps: [
      "Identifică solventul (de obicei substanța în exces) și solvatul.",
      "Calculează masa soluției: $m_{\text{soluție}}=m_{solvent}+m_{solvat}$.",
      "Aplică formula concentrației: $c\\%=\\dfrac{m_{solvat}}{m_{\text{soluție}}}\\times100$.",
      "Verifică dacă rezultatul este rezonabil (0 < c% < 100)."
    ],
    tips: [
      "Nu confunda masa solventului cu masa soluției – soluția include ambele componente!",
      "'Asemănătorul dizolvă asemănătorul': substanțele polare se dizolvă bine în solvenți polari (apă).",
      "Agitarea și încălzirea grăbesc dizolvarea, dar nu schimbă concentrația finală a unei soluții date.",
      "O soluție diluată are mult solvent și puțin solvat; una concentrată, invers."
    ],
    examples: [
      {
        label: "calcul concentrație",
        given: "20 g sare dizolvată în 180 g apă",
        ask: "concentrația procentuală a soluției",
        solve: "$m_{\text{soluție}}=20+180=200$ g. $c\\%=\\dfrac{20}{200}\\times100=10\\%$.",
        answer: "$c=10\\%$"
      },
      {
        label: "calcul masă solvat",
        given: "soluție de 250 g cu $c=8\\%$",
        ask: "masa de sare dizolvată",
        solve: "$m_{solvat}=\\dfrac{8\\times250}{100}=20$ g.",
        answer: "20 g sare"
      },
      {
        label: "masa solventului",
        given: "soluție cu masa 150 g și $c=12\\%$",
        ask: "masa apei (solventului)",
        solve: "$m_{solvat}=\\dfrac{12\\times150}{100}=18$ g; $m_{solvent}=150-18=132$ g.",
        answer: "132 g apă"
      }
    ],
    exercises: [
      {level:"usor",text:"Ce este o soluție?",solution:"Un amestec omogen format din solvent și solvat."},
      {level:"usor",text:"Care este formula concentrației procentuale masice?",solution:"$c\\% = \\dfrac{m_{solvat}}{m_{\text{soluție}}} \\times 100$."},
      {level:"usor",text:"Cum variază solubilitatea majorității solidelor cu creșterea temperaturii?",solution:"Crește."},
      {level:"mediu",text:"Calculați concentrația unei soluții obținute din 30 g zahăr dizolvat în 270 g apă.",solution:"$m_{\text{soluție}}=300$ g; $c\\%=\\dfrac{30}{300}\\times100=10\\%$."},
      {level:"mediu",text:"O soluție de 400 g are concentrația 5%. Calculați masa de solvat.",solution:"$m_{solvat}=\\dfrac{5\\times400}{100}=20$ g."},
      {level:"mediu",text:"O soluție cu masa 200 g conține 24 g sare. Calculați masa apei.",solution:"$m_{\text{apă}}=200-24=176$ g."},
      {level:"dificil",text:"De ce solubilitatea gazelor în apă scade la creșterea temperaturii?",solution:"Agitația termică mai mare face ca moleculele de gaz să iasă mai ușor din soluție."},
      {level:"dificil",text:"Explicați de ce uleiul nu se dizolvă în apă.",solution:"Uleiul este o substanță nepolară, iar apa este polară; conform regulii 'asemănătorul dizolvă asemănătorul', cele două nu se amestecă."},
      {level:"f-dificil",text:"Ce masă de apă trebuie adăugată la 50 g soluție cu $c=20\\%$ pentru a obține o soluție cu $c=10\\%$ (fără a adăuga solvat)?",solution:"$m_{solvat}=10$ g (constant); pentru $c=10\\%$: $m_{\\text{soluție nouă}}=100$ g; deci se adaugă $100-50=50$ g apă."},
      {level:"f-dificil",text:"O soluție saturată de sare la 20°C conține 36 g sare la 100 g apă. Ce se întâmplă dacă se adaugă 10 g sare suplimentară fără a schimba temperatura?",solution:"Sarea suplimentară nu se mai dizolvă, deoarece soluția este deja saturată; rămâne ca precipitat nedizolvat."}
    ]
  },

  "u9-l3-apa-potabila": {
    learn: "Apa potabilă este apa care îndeplinește standardele de calitate necesare pentru consumul uman, fiind lipsită de microorganisme patogene, substanțe toxice și având o concentrație scăzută de săruri minerale, în limite sigure pentru sănătate. Sursele de apă (râuri, lacuri, ape subterane) pot fi poluate cu substanțe chimice (îngrășăminte, pesticide, deșeuri industriale), microorganisme sau deșeuri menajere, motiv pentru care apa captată din natură trece printr-un proces de tratare înainte de a ajunge la robinet: decantare/sedimentare (îndepărtarea particulelor mari), filtrare (îndepărtarea particulelor fine) și dezinfectare, de obicei cu clor sau ozon, pentru a distruge microorganismele patogene. Protejarea resurselor de apă potabilă este esențială, deoarece doar o mică parte din apa Pământului (aproximativ 2,5%) este apă dulce, iar din aceasta, o proporție și mai mică este ușor accesibilă pentru consum.",
    terms: [
      "<strong>Apă potabilă</strong>: apă sigură pentru consum, fără microorganisme patogene sau substanțe toxice.",
      "<strong>Poluarea apei</strong>: contaminarea apei cu substanțe chimice, microorganisme sau deșeuri dăunătoare.",
      "<strong>Decantare/sedimentare</strong>: etapă de tratare în care particulele mari se depun la fund.",
      "<strong>Filtrare</strong>: etapă de tratare ce reține particulele fine rămase în apă.",
      "<strong>Dezinfectare</strong>: distrugerea microorganismelor patogene, de obicei cu clor sau ozon.",
      "<strong>Duritatea apei</strong>: conținutul de săruri de calciu și magneziu dizolvate."
    ],
    properties: [
      "Doar ~2,5% din apa Pământului este apă dulce; o mică parte din aceasta este ușor accesibilă.",
      "Surse de poluare: îngrășăminte și pesticide agricole, deșeuri industriale, ape uzate menajere netratate.",
      "Tratarea apei: decantare → filtrare → dezinfectare (clor/ozon).",
      "Apa dură (bogată în $Ca^{2+}$ și $Mg^{2+}$) formează depuneri (crustă de calcar) în conducte și aparate de încălzit apa.",
      "Testarea calității apei se face prin analize chimice (pH, duritate, conținut de nitrați) și bacteriologice."
    ],
    steps: [
      "Identifică sursa de apă și potențialele surse de poluare din apropiere.",
      "Aplică decantarea/sedimentarea pentru particulele mari.",
      "Aplică filtrarea pentru particulele fine rămase.",
      "Aplică dezinfectarea (clor sau ozon) pentru distrugerea microorganismelor."
    ],
    tips: [
      "Nu orice apă limpede este și potabilă – claritatea nu garantează absența poluanților chimici sau bacteriilor.",
      "Clorinarea excesivă poate da apei un miros/gust neplăcut, dar este necesară pentru siguranță sanitară.",
      "Fierberea apei distruge multe microorganisme, dar nu elimină poluanții chimici (metale grele, nitrați).",
      "Economisirea apei este esențială – resursele de apă dulce ușor accesibile sunt limitate."
    ],
    examples: [
      {
        label: "etapele tratării apei",
        given: "apă captată dintr-un râu",
        ask: "descrieți etapele principale de tratare până devine potabilă",
        solve: "1) Decantare/sedimentare – particulele mari se depun. 2) Filtrare – particulele fine sunt reținute. 3) Dezinfectare cu clor sau ozon – distruge microorganismele patogene.",
        answer: "decantare → filtrare → dezinfectare"
      },
      {
        label: "surse de poluare",
        given: "o zonă agricolă intensivă lângă un râu",
        ask: "ce poluanți probabili ajung în apă?",
        solve: "Îngrășăminte (nitrați, fosfați) și pesticide, spălate de ploi de pe câmpuri în râu.",
        answer: "nitrați, fosfați, pesticide"
      },
      {
        label: "duritatea apei",
        given: "apă cu conținut ridicat de $Ca^{2+}$ și $Mg^{2+}$",
        ask: "ce fenomen apare la fierberea repetată?",
        solve: "Se formează depuneri de calcar (piatra de cazan) pe pereții vasului/rezistenței de încălzire.",
        answer: "depuneri de calcar (apă dură)"
      }
    ],
    exercises: [
      {level:"usor",text:"Ce este apa potabilă?",solution:"Apă sigură pentru consum, fără microorganisme patogene sau substanțe toxice."},
      {level:"usor",text:"Numiți o etapă a tratării apei potabile.",solution:"Filtrarea (sau decantarea, sau dezinfectarea)."},
      {level:"usor",text:"Ce substanțe se folosesc pentru dezinfectarea apei?",solution:"Clor sau ozon."},
      {level:"mediu",text:"Ce procent din apa Pământului este apă dulce?",solution:"Aproximativ 2,5%."},
      {level:"mediu",text:"Enumerați 3 surse posibile de poluare a apei.",solution:"Îngrășăminte agricole, deșeuri industriale, ape uzate menajere netratate."},
      {level:"mediu",text:"Ce este duritatea apei?",solution:"Conținutul de săruri de calciu și magneziu dizolvate în apă."},
      {level:"dificil",text:"De ce fierberea apei nu este suficientă pentru a o face complet sigură de consumat?",solution:"Fierberea distruge microorganismele, dar nu elimină poluanții chimici precum metalele grele sau nitrații."},
      {level:"dificil",text:"Explicați ordinea corectă a etapelor de tratare a apei și de ce este importantă.",solution:"Decantare (particule mari) → filtrare (particule fine) → dezinfectare (microorganisme); ordinea permite eliminarea treptată a impurităților."},
      {level:"f-dificil",text:"De ce apa dură formează depuneri de calcar la fierbere repetată?",solution:"La încălzire, sărurile de calciu și magneziu dizolvate se descompun și precipită sub formă de carbonați insolubili, depunându-se pe pereții vasului."},
      {level:"f-dificil",text:"Explicați de ce protejarea surselor de apă dulce este considerată o prioritate globală.",solution:"Doar o mică fracțiune din apa Pământului este apă dulce ușor accesibilă, iar cererea tot mai mare pune presiune pe resurse limitate și vulnerabile la poluare."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 10 – Aerul și arderea
  // ══════════════════════════════════════════════════════════

  "u10-l1-compozitia-aerului": {
    learn: "Aerul este un amestec omogen de gaze care alcătuiește atmosfera Pământului, compus în principal din azot ($N_2$, aproximativ 78%) și oxigen ($O_2$, aproximativ 21%), restul de aproximativ 1% fiind format din alte gaze: argon, dioxid de carbon ($CO_2$), vapori de apă și gaze rare, în proporții variabile. Azotul este un gaz inert din punct de vedere chimic în condiții normale, cu rol de a dilua oxigenul (o atmosferă cu oxigen pur ar face arderile necontrolabil de violente), în timp ce oxigenul este esențial pentru respirația organismelor vii și pentru arderea combustibililor. Dioxidul de carbon, deși prezent în cantitate mică (aproximativ 0,04%), joacă un rol esențial în fotosinteza plantelor și în efectul de seră natural, care menține temperatura Pământului la un nivel favorabil vieții.",
    terms: [
      "<strong>Aer</strong>: amestec omogen de gaze ce formează atmosfera Pământului.",
      "<strong>Azot ($N_2$)</strong>: gaz majoritar (~78%), inert chimic în condiții normale.",
      "<strong>Oxigen ($O_2$)</strong>: gaz necesar respirației și arderii (~21%).",
      "<strong>Gaze rare</strong>: argon, neon, heliu etc., prezente în cantități foarte mici, inerte chimic.",
      "<strong>Efect de seră</strong>: reținerea căldurii de către gaze precum $CO_2$, menținând temperatura Pământului."
    ],
    properties: [
      "Compoziția aerului uscat: ~78% $N_2$, ~21% $O_2$, ~1% alte gaze (argon, $CO_2$, gaze rare).",
      "Azotul este inert chimic în condiții normale – nu întreține arderea sau respirația.",
      "Oxigenul întreține arderea și respirația – fără el, flacăra se stinge.",
      "$CO_2$ (~0,04%) este esențial pentru fotosinteză și contribuie la efectul de seră.",
      "Vaporii de apă din aer variază cu umiditatea și clima locală."
    ],
    steps: [
      "Identifică proporția aproximativă a fiecărui gaz component al aerului.",
      "Determină rolul fiecărui gaz (respirație, ardere, efect de seră, inerție chimică).",
      "Analizează efectul modificării proporției unui component (ex: creșterea $CO_2$).",
      "Compară aerul cu alte amestecuri de gaze (ex: aerul îmbogățit cu oxigen)."
    ],
    tips: [
      "Nu confunda azotul (inert, majoritar) cu oxigenul (activ chimic, întreține arderea).",
      "O atmosferă cu oxigen pur ar face arderile extrem de violente și periculoase.",
      "Argonul este cel mai abundent dintre gazele rare din aer (~0,93%).",
      "Creșterea concentrației de $CO_2$ din activități umane amplifică efectul de seră natural."
    ],
    examples: [
      {
        label: "compoziția aerului",
        given: "1000 L de aer uscat",
        ask: "câți litri sunt azot și câți oxigen (aproximativ)?",
        solve: "78% din 1000 L = 780 L $N_2$; 21% din 1000 L = 210 L $O_2$.",
        answer: "~780 L $N_2$; ~210 L $O_2$"
      },
      {
        label: "rolul oxigenului",
        given: "o lumânare arde într-un vas închis",
        ask: "de ce se stinge după un timp?",
        solve: "Oxigenul din vasul închis se consumă treptat prin ardere; când concentrația scade suficient, flacăra nu se mai poate întreține și se stinge.",
        answer: "oxigenul se epuizează"
      },
      {
        label: "rolul azotului",
        given: "aerul conține 78% azot",
        ask: "de ce este important acest procent mare de azot inert?",
        solve: "Diluează oxigenul, prevenind arderi și reacții de oxidare necontrolate care ar avea loc într-o atmosferă bogată în oxigen pur.",
        answer: "azotul dilută oxigenul, prevenind arderi violente"
      }
    ],
    exercises: [
      {level:"usor",text:"Care sunt cele 2 gaze majoritare din aer?",solution:"Azotul (~78%) și oxigenul (~21%)."},
      {level:"usor",text:"Ce rol are oxigenul din aer?",solution:"Întreține respirația organismelor și arderea."},
      {level:"usor",text:"Este azotul un gaz reactiv sau inert în condiții normale?",solution:"Inert."},
      {level:"mediu",text:"Calculați câți litri de oxigen se găsesc în 500 L de aer (21% $O_2$).",solution:"$500\\times0{,}21=105$ L."},
      {level:"mediu",text:"De ce se stinge o lumânare într-un borcan închis după un timp?",solution:"Pentru că oxigenul din interior se consumă prin ardere și nu mai este suficient pentru a întreține flacăra."},
      {level:"mediu",text:"Ce gaz din aer contribuie la efectul de seră și la fotosinteză?",solution:"Dioxidul de carbon ($CO_2$)."},
      {level:"dificil",text:"De ce o atmosferă cu oxigen pur ar fi periculoasă?",solution:"Arderile ar deveni extrem de violente și necontrolabile, orice scânteie putând declanșa incendii masive."},
      {level:"dificil",text:"Explicați rolul azotului ca 'diluant' al oxigenului din aer.",solution:"Fiind inert chimic, azotul scade proporția de oxigen din amestec, moderând viteza reacțiilor de ardere și oxidare."},
      {level:"f-dificil",text:"Calculați volumul de azot dintr-o cameră cu volumul de aer 60 m³ (78% $N_2$).",solution:"$60\\times0{,}78=46{,}8$ m³."},
      {level:"f-dificil",text:"Explicați de ce creșterea concentrației de $CO_2$ din atmosferă, deși reprezintă un procent mic, are efecte globale semnificative.",solution:"$CO_2$ este un gaz cu efect de seră puternic, care reține căldura radiată de Pământ; chiar creșteri mici ale concentrației sale amplifică semnificativ încălzirea globală."}
    ]
  },

  "u10-l2-oxidarea-arderea": {
    learn: "Oxidarea este o reacție chimică generală în care o substanță se combină cu oxigenul (sau cedează electroni), iar arderea este un caz particular de oxidare rapidă, însoțită de degajare de căldură și, de obicei, de lumină (flacără). Pentru ca o ardere să aibă loc, sunt necesare simultan trei condiții, cunoscute sub numele de triunghiul focului: combustibilul (substanța care arde), comburantul (de obicei oxigenul din aer) și temperatura de aprindere (căldura minimă necesară pentru a începe reacția); eliminarea oricăruia dintre acești trei factori stinge sau previne arderea. În funcție de cantitatea de oxigen disponibilă, arderea poate fi completă, atunci când combustibilii cu carbon și hidrogen (precum metanul) produc doar $CO_2$ și $H_2O$ ($CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$), sau incompletă, atunci când oxigenul este insuficient și rezultă și monoxid de carbon ($CO$), o substanță incoloră, inodoră și extrem de toxică, sau chiar funingine (carbon nears).",
    terms: [
      "<strong>Oxidare</strong>: reacție chimică de combinare cu oxigenul (sau cedare de electroni).",
      "<strong>Ardere (combustie)</strong>: oxidare rapidă, cu degajare de căldură și lumină.",
      "<strong>Combustibil</strong>: substanța care arde (lemn, gaz metan, benzină).",
      "<strong>Comburant</strong>: substanța care întreține arderea, de obicei oxigenul din aer.",
      "<strong>Triunghiul focului</strong>: combustibil + comburant + temperatură de aprindere, toate necesare simultan.",
      "<strong>Ardere completă / incompletă</strong>: cu suficient oxigen (→ $CO_2+H_2O$) / cu oxigen insuficient (→ și $CO$ sau funingine)."
    ],
    properties: [
      "Ardere completă: combustibil + oxigen suficient → $CO_2$ + $H_2O$ (+ căldură).",
      "Ardere incompletă: oxigen insuficient → $CO$ (toxic) și/sau funingine (C) alături de $CO_2$ și $H_2O$.",
      "$CO$ este incolor, inodor și extrem de toxic – se leagă puternic de hemoglobină, blocând transportul oxigenului.",
      "Triunghiul focului: eliminarea unui singur element (combustibil, comburant sau căldură) stinge focul.",
      "Stingerea incendiilor se bazează pe eliminarea unuia din cei 3 factori (ex: apa reduce temperatura; $CO_2$ elimină oxigenul)."
    ],
    steps: [
      "Identifică combustibilul, comburantul și sursa de aprindere într-un scenariu de ardere.",
      "Scrie ecuația chimică a arderii complete (produși: $CO_2$ și $H_2O$).",
      "Verifică dacă există suficient oxigen; dacă nu, ia în calcul și $CO$/funingine (ardere incompletă).",
      "Propune o metodă de stingere bazată pe eliminarea unuia din factorii triunghiului focului."
    ],
    tips: [
      "CO este numit 'ucigașul tăcut' – nu poate fi detectat cu simțurile, dar este letal în concentrații mici.",
      "Flacăra albastră indică ardere completă (eficientă); flacăra galbenă/portocalie, cu fum, indică ardere incompletă.",
      "Nu stinge niciodată un incendiu electric cu apă – riscul de electrocutare!",
      "Stingătoarele cu $CO_2$ funcționează prin înlăturarea oxigenului (comburantului) din zona incendiului."
    ],
    examples: [
      {
        label: "ardere completă",
        given: "$CH_4$ arde cu suficient oxigen",
        ask: "scrieți ecuația arderii complete",
        solve: "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$. Produșii sunt dioxid de carbon și apă, fără reziduuri toxice.",
        answer: "$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$"
      },
      {
        label: "ardere incompletă",
        given: "cărbune ars cu oxigen insuficient",
        ask: "ce produs toxic se poate forma?",
        solve: "Se formează monoxid de carbon ($CO$), alături de $CO_2$, deoarece nu este suficient oxigen pentru oxidarea completă a tot carbonul.",
        answer: "monoxid de carbon ($CO$)"
      },
      {
        label: "triunghiul focului",
        given: "un incendiu de proporții mici",
        ask: "cum poate fi stins folosind principiul triunghiului focului?",
        solve: "Se poate elimina comburantul (acoperind flacăra, blocând accesul aerului) sau se poate reduce temperatura (turnând apă, dacă nu e incendiu electric).",
        answer: "eliminarea comburantului sau a căldurii"
      }
    ],
    exercises: [
      {level:"usor",text:"Ce este oxidarea?",solution:"O reacție chimică în care o substanță se combină cu oxigenul."},
      {level:"usor",text:"Ce este arderea?",solution:"O oxidare rapidă, cu degajare de căldură și lumină."},
      {level:"usor",text:"Care sunt cei 3 factori din triunghiul focului?",solution:"Combustibil, comburant și temperatură de aprindere."},
      {level:"mediu",text:"Scrieți ecuația arderii complete a metanului ($CH_4$).",solution:"$CH_4 + 2O_2 \\rightarrow CO_2 + 2H_2O$."},
      {level:"mediu",text:"Ce produs toxic se formează la arderea incompletă a combustibililor cu carbon?",solution:"Monoxid de carbon ($CO$)."},
      {level:"mediu",text:"De ce este periculos monoxidul de carbon?",solution:"Este incolor și inodor, deci nedetectabil, și se leagă puternic de hemoglobină, blocând transportul oxigenului."},
      {level:"dificil",text:"Explicați diferența dintre flacăra albastră și cea galbenă la un aragaz.",solution:"Flacăra albastră indică ardere completă (suficient oxigen); flacăra galbenă/portocalie indică ardere incompletă, cu funingine și posibil $CO$."},
      {level:"dificil",text:"De ce nu trebuie stins un incendiu electric cu apă?",solution:"Apa conduce curentul electric și poate provoca electrocutarea persoanei care încearcă să stingă focul."},
      {level:"f-dificil",text:"Explicați principiul de funcționare al unui stingător cu $CO_2$ pe baza triunghiului focului.",solution:"$CO_2$ este mai dens decât aerul și înlocuiește oxigenul din jurul flăcării, eliminând comburantul necesar arderii."},
      {level:"f-dificil",text:"Un aragaz produce flacără galbenă cu fum negru. Ce modificare ar recomanda pentru a obține ardere completă?",solution:"Creșterea aportului de aer (oxigen) la arzător, pentru a asigura suficient oxigen pentru arderea completă a gazului."}
    ]
  },

  "u10-l3-combustibili-poluare": {
    learn: "Combustibilii sunt substanțe care eliberează energie prin ardere și se clasifică, după starea de agregare, în combustibili solizi (cărbune, lemn), lichizi (benzină, motorină) și gazoși (gaz metan, GPL); cei mai utilizați combustibili fosili (cărbune, petrol, gaze naturale) s-au format din resturi organice vechi de milioane de ani și sunt resurse neregenerabile pe scara timpului uman. Arderea combustibililor fosili eliberează în atmosferă $CO_2$ (principalul gaz cu efect de seră responsabil de încălzirea globală), dar și alți poluanți precum oxizii de sulf ($SO_2$) și oxizii de azot ($NO_x$), care contribuie la formarea ploii acide, precum și particule fine (funingine) care afectează calitatea aerului și sănătatea respiratorie. Reducerea poluării aerului implică folosirea unor combustibili mai curați (gaz metan în locul cărbunelui), filtre de captare a poluanților, precum și trecerea treptată la surse regenerabile de energie (solară, eoliană, hidro), care nu eliberează gaze poluante la utilizare.",
    terms: [
      "<strong>Combustibil</strong>: substanță care eliberează energie prin ardere.",
      "<strong>Combustibili fosili</strong>: cărbune, petrol, gaze naturale – formați din resturi organice, neregenerabili.",
      "<strong>Poluant atmosferic</strong>: substanță eliberată în aer care dăunează mediului sau sănătății ($CO_2$, $SO_2$, $NO_x$, funingine).",
      "<strong>Ploaie acidă</strong>: precipitații acide formate din $SO_2$ și $NO_x$ reacționând cu vaporii de apă din atmosferă.",
      "<strong>Energie regenerabilă</strong>: surse de energie ce nu se epuizează și nu produc poluare la utilizare (solară, eoliană, hidro)."
    ],
    properties: [
      "Combustibili solizi: cărbune, lemn; lichizi: benzină, motorină; gazoși: gaz metan, GPL.",
      "Combustibilii fosili sunt resurse neregenerabile – se formează în milioane de ani.",
      "Arderea combustibililor fosili eliberează $CO_2$, $SO_2$, $NO_x$ și particule (funingine).",
      "$SO_2$ și $NO_x$ + vapori de apă din atmosferă → ploaie acidă.",
      "Sursele regenerabile (solar, eolian, hidro) nu eliberează gaze poluante la utilizare."
    ],
    steps: [
      "Identifică tipul de combustibil folosit (solid, lichid, gazos; fosil sau regenerabil).",
      "Scrie ecuația arderii și identifică produșii, inclusiv poluanții eventuali.",
      "Analizează impactul asupra mediului (efect de seră, ploaie acidă, calitatea aerului).",
      "Propune măsuri de reducere a poluării (combustibili mai curați, filtre, energie regenerabilă)."
    ],
    tips: [
      "Gazul metan arde mai curat decât cărbunele – produce mai puțină funingine și poluanți.",
      "Ploaia acidă distruge vegetația, acidifiază solurile și apele, corodează clădirile și monumentele.",
      "Panourile solare și turbinele eoliene nu eliberează poluanți la generarea energiei, spre deosebire de centralele pe combustibili fosili.",
      "Filtrele catalitice de la autovehicule reduc emisiile de $NO_x$ și $CO$ eliberate în atmosferă."
    ],
    examples: [
      {
        label: "clasificare combustibili",
        given: "cărbune, benzină, gaz metan",
        ask: "clasificați după starea de agregare",
        solve: "Cărbune – combustibil solid; benzină – combustibil lichid; gaz metan – combustibil gazos.",
        answer: "solid, lichid, gazos"
      },
      {
        label: "formarea ploii acide",
        given: "arderea unui combustibil cu conținut de sulf",
        ask: "explicați formarea ploii acide",
        solve: "Sulful din combustibil arde formând $SO_2$, care reacționează cu vaporii de apă din atmosferă: $SO_2+H_2O\\rightarrow H_2SO_3$ (acid sulfuros), care cade sub formă de ploaie acidă.",
        answer: "$SO_2+H_2O\\rightarrow H_2SO_3$"
      },
      {
        label: "alternative energetice",
        given: "o comunitate dorește să reducă poluarea aerului",
        ask: "ce soluții pot fi propuse?",
        solve: "Trecerea la surse regenerabile (panouri solare, turbine eoliene), folosirea unor combustibili mai curați și instalarea de filtre pentru captarea poluanților.",
        answer: "energie regenerabilă, combustibili curați, filtre"
      }
    ],
    exercises: [
      {level:"usor",text:"Numiți un combustibil solid, unul lichid și unul gazos.",solution:"Cărbune (solid), benzină (lichid), gaz metan (gazos)."},
      {level:"usor",text:"Ce sunt combustibilii fosili?",solution:"Combustibili formați din resturi organice vechi de milioane de ani (cărbune, petrol, gaze naturale)."},
      {level:"usor",text:"Ce gaz cu efect de seră rezultă din arderea combustibililor fosili?",solution:"Dioxid de carbon ($CO_2$)."},
      {level:"mediu",text:"Ce poluanți formează ploaia acidă?",solution:"Oxizii de sulf ($SO_2$) și oxizii de azot ($NO_x$)."},
      {level:"mediu",text:"Numiți 2 surse de energie regenerabilă.",solution:"Solară și eoliană (sau hidro)."},
      {level:"mediu",text:"De ce gazul metan este considerat un combustibil mai curat decât cărbunele?",solution:"Produce mai puțină funingine și poluanți la ardere, iar arderea sa este mai completă."},
      {level:"dificil",text:"Explicați formarea ploii acide pornind de la arderea unui combustibil cu sulf.",solution:"Sulful arde formând $SO_2$, care reacționează cu vaporii de apă din atmosferă: $SO_2+H_2O\\rightarrow H_2SO_3$, precipitând sub formă de ploaie acidă."},
      {level:"dificil",text:"Ce măsuri pot reduce poluarea aerului generată de trafic auto?",solution:"Filtre catalitice pentru reducerea emisiilor de $NO_x$ și $CO$, folosirea vehiculelor electrice sau hibride, transport public."},
      {level:"f-dificil",text:"De ce combustibilii fosili sunt considerați resurse neregenerabile, spre deosebire de energia solară?",solution:"Se formează prin procese geologice care durează milioane de ani, mult mai lent decât rata lor de consum actuală; energia solară este disponibilă continuu, practic nelimitat."},
      {level:"f-dificil",text:"Explicați legătura dintre creșterea concentrației de $CO_2$ din atmosferă și încălzirea globală.",solution:"$CO_2$ este un gaz cu efect de seră ce reține căldura radiată de suprafața Pământului; creșterea concentrației sale amplifică reținerea căldurii, ducând la creșterea temperaturii medii globale."}
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
      {level:"usor",text:"Ce este o substanță pură?",solution:"O substanță cu compoziție constantă și proprietăți fizice fixe."},
      {level:"usor",text:"Ce tip de amestec este apa cu ulei?",solution:"Amestec eterogen."},
      {level:"usor",text:"Ce metodă separă un solid nedizolvat dintr-un lichid?",solution:"Filtrarea."},
      {level:"mediu",text:"Un geolog găsește o rocă cu mai multe minerale vizibile. Ce tip de amestec este?",solution:"Amestec eterogen."},
      {level:"mediu",text:"Descrieți cum obțineți apă pură din apă de mare folosind aparatura de laborator.",solution:"Prin distilare: apa se încălzește până la fierbere, vaporii sunt condensați și colectați separat de sare."},
      {level:"mediu",text:"Densitatea aluminiului este 2,7 g/cm³. Calculați masa unui bloc cu volumul 40 cm³.",solution:"$m=\\rho\\times V=2{,}7\\times40=108$ g."},
      {level:"dificil",text:"Care proprietate fizică stă la baza separării alcoolului din apă?",solution:"Punctul de fierbere diferit (distilare fracționată)."},
      {level:"dificil",text:"Explicați de ce filtrarea nu poate separa sarea dizolvată din apă.",solution:"Sarea este dizolvată la nivel molecular/ionic, particulele fiind mult mai mici decât porii filtrului."},
      {level:"f-dificil",text:"Un amestec conține nisip, sare și apă. Propuneți un procedeu complet de separare a celor 3 componente.",solution:"Filtrare pentru nisip (insolubil); apoi evaporare/distilare a filtratului pentru a separa apa de sare."},
      {level:"f-dificil",text:"De ce două lichide cu puncte de fierbere foarte apropiate sunt greu de separat prin distilare simplă?",solution:"Vaporii ambelor lichide se formează aproape simultan, deci condensul conține un amestec, necesitând distilare fracționată repetată."}
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
      {level:"usor",text:"Ce reprezintă Z într-un atom?",solution:"Numărul atomic, egal cu numărul de protoni."},
      {level:"usor",text:"Ce relație există între A, Z și N?",solution:"$A=Z+N$."},
      {level:"usor",text:"Ce sunt izotopii?",solution:"Atomi ai aceluiași element (Z egal) cu număr diferit de neutroni."},
      {level:"mediu",text:"Determinați compoziția nucleului pentru $^{56}_{26}Fe$.",solution:"26 protoni, N=56-26=30 neutroni."},
      {level:"mediu",text:"Scrieți simbolul $^A_ZX$ al atomului cu 8 protoni și 8 neutroni.",solution:"$^{16}_{8}O$."},
      {level:"mediu",text:"Localizați carbonul (Z=6) în tabelul periodic: perioadă, grupă, nr. electroni de valență.",solution:"Perioada 2, grupa 14, 4 electroni de valență."},
      {level:"dificil",text:"Calculați masa atomică medie a Mg: 79% $^{24}Mg$, 10% $^{25}Mg$, 11% $^{26}Mg$.",solution:"$\\bar A=24\\times0{,}79+25\\times0{,}10+26\\times0{,}11=24{,}32$."},
      {level:"dificil",text:"Explicați de ce numărul de electroni de valență determină numărul grupei pentru grupele principale.",solution:"Elementele din aceeași grupă au același număr de electroni pe ultimul strat, ceea ce le conferă proprietăți chimice similare."},
      {level:"f-dificil",text:"Un atom neutru are 17 electroni și 18 neutroni. Determinați Z, A, elementul și verificați dacă este izotop cu $^{37}Cl$.",solution:"Z=17 (clor), A=35, deci $^{35}Cl$; da, este izotop al $^{37}Cl$."},
      {level:"f-dificil",text:"De ce electronii nu contribuie semnificativ la masa atomului, deși determină proprietățile chimice?",solution:"Masa electronului este de ~1840 ori mai mică decât a unui proton/neutron, deci contribuția lor la masă este neglijabilă."}
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
      {level:"usor",text:"Ce tip de legătură se formează între un metal și un nemetal?",solution:"Legătură ionică."},
      {level:"usor",text:"Ce tip de legătură se formează între doi nemetale?",solution:"Legătură covalentă."},
      {level:"usor",text:"Scrieți configurația electronică a Ca (Z=20).",solution:"K(2) L(8) M(8) N(2)."},
      {level:"mediu",text:"Scrieți configurația electronică pentru: Cl (Z=17), Al (Z=13).",solution:"Cl: K(2)L(8)M(7); Al: K(2)L(8)M(3)."},
      {level:"mediu",text:"Determinați formula compusului ionic format din $Mg^{2+}$ și $Br^-$.",solution:"$MgBr_2$."},
      {level:"mediu",text:"Câte perechi de electroni partajate are legătura triplă din $N_2$?",solution:"3 perechi."},
      {level:"dificil",text:"Scrieți formula oxidului de fier(III) ($Fe$ val.III, $O$ val.II).",solution:"$Fe_2O_3$."},
      {level:"dificil",text:"Explicați de ce NaCl nu este considerat o moleculă.",solution:"NaCl este un compus ionic care formează o rețea cristalină de ioni, nu unități discrete izolate."},
      {level:"f-dificil",text:"Un element X (Z=12) formează o legătură cu Cl (Z=17). Determinați tipul legăturii și formula compusului.",solution:"X=Mg (metal) + Cl (nemetal) → legătură ionică; $Mg^{2+}$ și $Cl^-$ → $MgCl_2$."},
      {level:"f-dificil",text:"Explicați legătura dintre numărul de electroni de valență și tipul legăturii chimice formate.",solution:"Metalele (puțini electroni de valență) cedează electroni ușor, formând legături ionice; nemetalele tind să partajeze electroni, formând legături covalente."}
    ]
  },

  "u4-recap": {
    summary: "Reacțiile chimice formează substanțe noi și se reprezintă prin ecuații chimice echilibrate (nr. atomi egal în ambii membri). Legea conservării masei: suma maselor reactanților = suma maselor produselor. Tipuri: sinteză, descompunere, substituție, schimb ionic.",
    keys: [
      "Transformare chimică: substanțe noi; indicii: gaz, precipitat, culoare, căldură.",
      "Echilibrare: se modifică coeficienții, nu indicii formulelor.",
      "Legea conservării masei: $\\sum m_{\text{reactanți}} = \\sum m_{produse}$.",
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
      {level:"usor",text:"Ce este o ecuație chimică echilibrată?",solution:"O ecuație în care numărul de atomi al fiecărui element este egal în ambii membri."},
      {level:"usor",text:"Ce lege stă la baza echilibrării ecuațiilor chimice?",solution:"Legea conservării masei."},
      {level:"usor",text:"Ce tip de reacție este $A+B\\rightarrow AB$?",solution:"Sinteză."},
      {level:"mediu",text:"Echilibrați și clasificați: $Na + H_2O \\rightarrow NaOH + H_2$.",solution:"$2Na+2H_2O\\rightarrow 2NaOH+H_2$; substituție."},
      {level:"mediu",text:"Calculați masa de $CaO$ din calcinarea a 100 g $CaCO_3$: $CaCO_3\\xrightarrow{\\Delta}CaO+CO_2$.",solution:"100 g $CaCO_3$ = 1 mol → 1 mol CaO; $M(CaO)=56$ g/mol → 56 g."},
      {level:"mediu",text:"Ce tip de reacție este: $Pb(NO_3)_2 + Na_2SO_4 \\rightarrow PbSO_4\\downarrow + 2NaNO_3$?",solution:"Schimb ionic (dublă substituție)."},
      {level:"dificil",text:"Verificați dacă este corect echilibrată: $3Fe + 2O_2 \\rightarrow Fe_3O_4$.",solution:"Da; Fe: 3=3; O: 4=4."},
      {level:"dificil",text:"Explicați de ce masa se conservă chiar și atunci când un gaz se degajă și pare să dispară.",solution:"Gazul degajat are propria masă, care se include în calculul total; el nu dispare, ci difuzează în atmosferă."},
      {level:"f-dificil",text:"4 g de $H_2$ reacționează complet cu $O_2$ în exces. Calculați masa de $H_2O$ obținută ($2H_2+O_2\\rightarrow 2H_2O$).",solution:"4 g $H_2$ = 2 mol → 2 mol $H_2O$; $M(H_2O)=18$ g/mol → 36 g."},
      {level:"f-dificil",text:"Explicați diferența dintre o reacție de substituție și una de schimb ionic, cu exemple.",solution:"Substituție: un element înlocuiește altul dintr-un compus (ex: $Fe+CuSO_4\\rightarrow FeSO_4+Cu$); schimb ionic: doi compuși ionici schimbă parteneri (ex: $AgNO_3+NaCl\\rightarrow AgCl\\downarrow+NaNO_3$)."}
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
      {level:"usor",text:"Ce este un oxid?",solution:"Un compus binar al oxigenului cu un alt element."},
      {level:"usor",text:"Ce se formează când un oxid bazic reacționează cu apa?",solution:"O bază (hidroxid)."},
      {level:"usor",text:"Ce se formează când un oxid acid reacționează cu apa?",solution:"Un acid."},
      {level:"mediu",text:"Scrieți formulele: oxid de zinc (Zn II), oxid de crom(III) (Cr III).",solution:"$ZnO$; $Cr_2O_3$."},
      {level:"mediu",text:"Ce reacție are loc între $SO_3$ și $CaO$? Scrieți ecuația.",solution:"$SO_3+CaO\\rightarrow CaSO_4$ (sinteză, sare fără apă)."},
      {level:"mediu",text:"Calculați masa molară a $Fe_2O_3$.",solution:"$M=2\\times56+3\\times16=160$ g/mol."},
      {level:"dificil",text:"De ce $CO_2$ din respirație nu este toxic imediat, dar $CO$ (monoxid) este periculos?",solution:"$CO_2$ nu se leagă puternic de hemoglobină; $CO$ se leagă foarte puternic, blocând transportul oxigenului."},
      {level:"dificil",text:"Scrieți formula pentoxidului de azot (N valența V).",solution:"$N_2O_5$."},
      {level:"f-dificil",text:"Explicați de ce $CO$ este considerat un oxid indiferent.",solution:"Nu reacționează cu apa pentru a forma nici acid, nici bază, spre deosebire de majoritatea oxizilor nemetalici."},
      {level:"f-dificil",text:"Un oxid metalic $M_2O_3$ are masa molară 102 g/mol. Identificați metalul M știind $A_r(O)=16$.",solution:"$2M+48=102\\Rightarrow M=27$ → aluminiu (Al)."}
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
      {level:"usor",text:"Ce culoare capătă turnesolul în mediu acid?",solution:"Roșu."},
      {level:"usor",text:"Ce este un hidracid?",solution:"Un acid fără oxigen (ex: $HCl$)."},
      {level:"usor",text:"Ce se degajă la reacția unui acid cu un metal activ?",solution:"Hidrogen gazos."},
      {level:"mediu",text:"Denumiți și clasificați: $HI$, $H_2SO_3$.",solution:"$HI$ - hidracid, acid iodhidric; $H_2SO_3$ - oxoacid, acid sulfuros."},
      {level:"mediu",text:"Calculați masa de $MgCl_2$ din $Mg + 2HCl \\rightarrow MgCl_2 + H_2$, pornind de la 12 g Mg (M=24 g/mol).",solution:"12 g Mg = 0,5 mol → 0,5 mol $MgCl_2$ (M=95 g/mol) → 47,5 g."},
      {level:"mediu",text:"Ce se observă la adăugarea unui metal activ (Zn) în acid?",solution:"Se degajă bule de gaz (hidrogen) și metalul se dizolvă treptat."},
      {level:"dificil",text:"Ce acid se găsește în stomacul uman? Ce rol îndeplinește?",solution:"Acid clorhidric ($HCl$); ajută la digestia proteinelor și distruge bacteriile din alimente."},
      {level:"dificil",text:"Scrieți ecuația echilibrată a reacției dintre $Al$ și $H_2SO_4$ diluat.",solution:"$2Al+3H_2SO_4\\rightarrow Al_2(SO_4)_3+3H_2\\uparrow$."},
      {level:"f-dificil",text:"De ce $H_2SO_4$ concentrat are proprietăți diferite de $H_2SO_4$ diluat?",solution:"Concentrat este un puternic agent deshidratant și oxidant, carbonizând materiile organice; diluat reacționează mai blând, tipic pentru un acid."},
      {level:"f-dificil",text:"Calculați numărul de moli de $H_2$ obținuți din 4,05 g Al (M=27 g/mol) reacționând cu exces de $H_2SO_4$ diluat.",solution:"4,05 g Al = 0,15 mol; raport Al:H2 = 2:3 → 0,15×3/2=0,225 mol $H_2$."}
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
      {level:"usor",text:"Ce culoare capătă turnesolul în mediu bazic?",solution:"Albastru."},
      {level:"usor",text:"Ce reprezintă un alcali?",solution:"O bază solubilă și puternică (ex: NaOH, KOH)."},
      {level:"usor",text:"Ce se formează la neutralizarea unei baze cu un acid?",solution:"O sare și apă."},
      {level:"mediu",text:"Scrieți ecuația reacției $Ba(OH)_2 + HCl$.",solution:"$Ba(OH)_2+2HCl\\rightarrow BaCl_2+2H_2O$."},
      {level:"mediu",text:"Ce se obține la descompunerea termică a $Al(OH)_3$? Scrieți ecuația.",solution:"$2Al(OH)_3\\xrightarrow{\\Delta}Al_2O_3+3H_2O$."},
      {level:"mediu",text:"Calculați masa de $Cu(OH)_2$ din $CuSO_4 + 2NaOH \\rightarrow Cu(OH)_2\\downarrow + Na_2SO_4$, pornind de la 160 g $CuSO_4$ (M=160 g/mol).",solution:"160 g $CuSO_4$ = 1 mol → 1 mol $Cu(OH)_2$ (M=98 g/mol) → 98 g."},
      {level:"dificil",text:"Cum deosebim o soluție acidă de una bazică? Descrieți 2 metode experimentale.",solution:"Cu turnesol (roșu în acid, albastru în bază) sau cu fenolftaleină (incoloră în acid, roz în bază)."},
      {level:"dificil",text:"De ce $Al(OH)_3$ este considerat un hidroxid amfoter?",solution:"Reacționează atât cu acizii cât și cu bazele tari, comportându-se fie ca bază, fie ca acid."},
      {level:"f-dificil",text:"Explicați de ce apa de var ($Ca(OH)_2$) devine tulbure la trecerea $CO_2$ prin ea.",solution:"Se formează $CaCO_3$, un precipitat alb insolubil: $Ca(OH)_2+CO_2\\rightarrow CaCO_3\\downarrow+H_2O$."},
      {level:"f-dificil",text:"Calculați masa de $Ca(OH)_2$ necesară pentru a neutraliza complet 73 g $HCl$ (M=36,5 g/mol).",solution:"73 g HCl = 2 mol; raport 1:2 → 1 mol $Ca(OH)_2$ (M=74 g/mol) → 74 g."}
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
      {level:"usor",text:"Ce este o sare medie?",solution:"O sare neutră electric, fără H sau OH suplimentar."},
      {level:"usor",text:"Ce este o sare acidă? Dați un exemplu.",solution:"O sare care păstrează un H ionizabil în anion, ex: $NaHCO_3$."},
      {level:"usor",text:"Numiți o metodă de obținere a sărurilor.",solution:"Neutralizare (bază + acid), sau orice altă metodă corectă."},
      {level:"mediu",text:"Scrieți ecuația obținerii $K_2SO_4$ prin neutralizarea $KOH$ cu $H_2SO_4$.",solution:"$2KOH+H_2SO_4\\rightarrow K_2SO_4+2H_2O$."},
      {level:"mediu",text:"Ce tip de sare este $Ca(HCO_3)_2$ (bicarbonat de calciu)?",solution:"Sare acidă (conține H în anion)."},
      {level:"mediu",text:"Calculați masa de $AgCl\\downarrow$ din $AgNO_3 + HCl \\rightarrow AgCl\\downarrow + HNO_3$, pornind de la 170 g $AgNO_3$ (M=170 g/mol).",solution:"170 g $AgNO_3$ = 1 mol → 1 mol $AgCl$ (M=143,5 g/mol) → 143,5 g."},
      {level:"dificil",text:"Cum identificăm carbonații în laborator? Scrieți ecuația reacției cu $HCl$.",solution:"Se adaugă $HCl$; dacă apar bule de $CO_2$, proba conține carbonat: $CaCO_3+2HCl\\rightarrow CaCl_2+H_2O+CO_2\\uparrow$."},
      {level:"dificil",text:"Explicați de ce reacția $BaCl_2 + Na_2SO_4 \\rightarrow BaSO_4\\downarrow + 2NaCl$ are loc complet.",solution:"Se formează $BaSO_4$, un precipitat insolubil, deplasând reacția spre formarea produșilor."},
      {level:"f-dificil",text:"Un elev are 106 g $Na_2CO_3$ (M=106 g/mol) și le face să reacționeze cu exces de $HCl$. Calculați masa de $CO_2$ degajată (M=44 g/mol).",solution:"106 g = 1 mol → 1 mol $CO_2$ → 44 g."},
      {level:"f-dificil",text:"Explicați diferența dintre o sare solubilă și una insolubilă, cu exemple din fiecare categorie.",solution:"Sărurile solubile se dizolvă complet în apă (ex: $NaCl$, $KNO_3$); sărurile insolubile rămân ca precipitat (ex: $BaSO_4$, $AgCl$, $CaCO_3$)."}
    ]
  },

  "u9-recap": {
    summary: "Apa ($H_2O$) este o moleculă polară cu proprietăți fizice speciale (anomalia densității, căldură specifică mare, tensiune superficială) datorate legăturilor de hidrogen. Este solvent universal pentru soluții, a căror concentrație procentuală se calculează raportând masa solvatului la masa soluției. Apa potabilă necesită tratare (decantare, filtrare, dezinfectare) pentru a elimina poluanții și microorganismele.",
    keys: [
      "Punct de topire 0°C, punct de fierbere 100°C (presiune normală).",
      "Gheața plutește pe apă – densitate mai mică datorită rețelei cristaline cu goluri.",
      "$c\\%=\\dfrac{m_{solvat}}{m_{\text{soluție}}}\\times100$; $m_{\text{soluție}}=m_{solvent}+m_{solvat}$.",
      "Tratarea apei: decantare → filtrare → dezinfectare (clor/ozon).",
      "Apa reacționează cu metale active (→ bază + $H_2$), cu oxizi bazici (→ bază) și cu oxizi acizi (→ acid)."
    ],
    mistakes: [
      "Nu confunda masa soluției cu masa solventului în calculul concentrației.",
      "Apa pură nu conduce curentul electric – conductivitatea vine de la sărurile dizolvate.",
      "Fierberea apei nu elimină poluanții chimici, doar microorganismele.",
      "Solubilitatea gazelor scade cu temperatura (invers față de majoritatea solidelor)."
    ],
    problem: {
      label: "evaluare unitate 9",
      given: "30 g sare dizolvată în 270 g apă; se cere și reacția sodiului cu apa",
      ask: "calculați concentrația soluției și scrieți ecuația reacției Na + apă",
      solve: "$m_{\text{soluție}}=30+270=300$ g; $c\\%=\\dfrac{30}{300}\\times100=10\\%$. Reacția: $2Na+2H_2O\\rightarrow 2NaOH+H_2\\uparrow$.",
      answer: "$c=10\\%$; $2Na+2H_2O\\rightarrow 2NaOH+H_2\\uparrow$"
    },
    exercises: [
      {level:"usor",text:"Care este formula chimică a apei?",solution:"$H_2O$."},
      {level:"usor",text:"Ce este o soluție saturată?",solution:"O soluție care conține cantitatea maximă posibilă de solvat dizolvat, la o anumită temperatură."},
      {level:"usor",text:"Numiți o etapă de tratare a apei potabile.",solution:"Filtrarea (sau decantare, sau dezinfectare)."},
      {level:"mediu",text:"Calculați concentrația unei soluții din 25 g sare în 225 g apă.",solution:"$m_{\text{soluție}}=250$ g; $c\\%=\\dfrac{25}{250}\\times100=10\\%$."},
      {level:"mediu",text:"Scrieți ecuația reacției dintre calciu și apă.",solution:"$Ca+2H_2O\\rightarrow Ca(OH)_2+H_2\\uparrow$."},
      {level:"mediu",text:"De ce gheața plutește pe apă?",solution:"Are densitate mai mică decât apa lichidă, datorită structurii cristaline cu goluri formate prin legăturile de hidrogen."},
      {level:"dificil",text:"O soluție de 500 g are concentrația 4%. Calculați masele solvatului și solventului.",solution:"$m_{solvat}=\\dfrac{4\\times500}{100}=20$ g; $m_{solvent}=500-20=480$ g."},
      {level:"dificil",text:"Explicați de ce apa este numită 'solvent universal'.",solution:"Fiind o moleculă polară, poate dizolva un număr foarte mare de substanțe ionice și polare, mai multe decât orice alt solvent comun."},
      {level:"f-dificil",text:"Un râu poluat cu nitrați din îngrășăminte agricole este folosit ca sursă de apă potabilă. Ce etape de tratare ar reduce riscurile și care sunt limitele lor?",solution:"Decantarea și filtrarea elimină particulele solide, iar dezinfectarea distruge microorganismele, dar niciuna nu elimină eficient nitrații dizolvați, care necesită tratamente suplimentare speciale."},
      {level:"f-dificil",text:"Explicați legătura dintre legăturile de hidrogen și cel puțin 2 proprietăți neobișnuite ale apei.",solution:"Legăturile de hidrogen sunt responsabile pentru căldura specifică mare a apei și pentru anomalia densității gheții (rețea cu goluri, mai puțin densă decât apa lichidă)."}
    ]
  },

  "u10-recap": {
    summary: "Aerul este un amestec de gaze (78% $N_2$, 21% $O_2$, restul alte gaze), esențial pentru respirație și ardere. Arderea este o oxidare rapidă ce necesită combustibil, comburant și temperatură de aprindere (triunghiul focului) și poate fi completă (→ $CO_2+H_2O$) sau incompletă (→ și $CO$ toxic/funingine). Combustibilii fosili poluează aerul ($CO_2$, $SO_2$, $NO_x$), contribuind la efectul de seră și ploaia acidă, motiv pentru care sursele regenerabile sunt din ce în ce mai folosite.",
    keys: [
      "Aer: ~78% $N_2$ (inert), ~21% $O_2$ (întreține arderea/respirația), ~1% alte gaze.",
      "Triunghiul focului: combustibil + comburant + temperatură de aprindere.",
      "Ardere completă: $CO_2+H_2O$; ardere incompletă: și $CO$ (toxic) și/sau funingine.",
      "$SO_2$ și $NO_x$ + vapori apă → ploaie acidă; $CO_2$ → efect de seră amplificat.",
      "Combustibili: solizi, lichizi, gazoși; fosili (neregenerabili) vs. regenerabili (solar, eolian)."
    ],
    mistakes: [
      "Nu confunda oxidarea (proces general) cu arderea (oxidare rapidă, cu flacără).",
      "$CO$ (monoxid, toxic) ≠ $CO_2$ (dioxid, produs normal al arderii complete).",
      "Azotul nu întreține arderea – doar oxigenul o face.",
      "Nu orice combustibil ars produce aceiași poluanți – depinde de compoziția lui (sulf → $SO_2$, azot → $NO_x$)."
    ],
    problem: {
      label: "evaluare unitate 10",
      given: "un aragaz cu flacără galbenă și fum",
      ask: "identificați tipul arderii, scrieți ecuația arderii complete și propuneți o soluție",
      solve: "Flacăra galbenă cu fum indică ardere incompletă (oxigen insuficient), cu formare posibilă de $CO$ și funingine. Ecuația arderii complete a metanului: $CH_4+2O_2\\rightarrow CO_2+2H_2O$. Soluție: creșterea admisiei de aer la arzător.",
      answer: "ardere incompletă; $CH_4+2O_2\\rightarrow CO_2+2H_2O$; mărirea admisiei de aer"
    },
    exercises: [
      {level:"usor",text:"Care sunt cele două gaze majoritare din aer?",solution:"Azot (~78%) și oxigen (~21%)."},
      {level:"usor",text:"Ce este arderea?",solution:"O oxidare rapidă, cu degajare de căldură și lumină."},
      {level:"usor",text:"Ce produs toxic apare la arderea incompletă?",solution:"Monoxid de carbon ($CO$)."},
      {level:"mediu",text:"Scrieți ecuația arderii complete a metanului.",solution:"$CH_4+2O_2\\rightarrow CO_2+2H_2O$."},
      {level:"mediu",text:"Ce poluanți contribuie la ploaia acidă?",solution:"$SO_2$ și $NO_x$."},
      {level:"mediu",text:"Numiți cei 3 factori ai triunghiului focului.",solution:"Combustibil, comburant, temperatură de aprindere."},
      {level:"dificil",text:"Calculați volumul de oxigen din 800 L de aer (21% $O_2$).",solution:"$800\\times0{,}21=168$ L."},
      {level:"dificil",text:"De ce este periculos $CO$ deși este incolor și inodor?",solution:"Se leagă foarte puternic de hemoglobină, blocând transportul oxigenului în sânge, fără a putea fi detectat prin simțuri."},
      {level:"f-dificil",text:"Explicați cum contribuie arderea combustibililor fosili atât la efectul de seră, cât și la ploaia acidă.",solution:"$CO_2$ amplifică efectul de seră prin reținerea căldurii; $SO_2$ și $NO_x$ reacționează cu vaporii de apă formând acizi care cad ca ploaie acidă."},
      {level:"f-dificil",text:"Propuneți 2 măsuri pentru reducerea poluării aerului generate de arderea combustibililor.",solution:"Folosirea surselor regenerabile de energie (solar, eolian) și instalarea de filtre/catalizatoare pentru reducerea emisiilor poluante."}
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
    },
    {
      id: "u9-apa",
      title: "Unitatea 9 – Apa",
      subtitle: "Proprietăți, apa ca solvent, apă potabilă și tratarea apei",
      icon: "💦",
      chapters: [
        chapterCh7("u9-l1-proprietati-apa", "L1: Proprietățile apei"),
        chapterCh7("u9-l2-apa-solvent",      "L2: Apa ca solvent – soluții și concentrație"),
        chapterCh7("u9-l3-apa-potabila",     "L3: Apa potabilă – poluare și tratare"),
        recapChCh7("u9-recap",               "Recapitulare și evaluare – Unitatea 9")
      ]
    },
    {
      id: "u10-aer-ardere",
      title: "Unitatea 10 – Aerul și arderea",
      subtitle: "Compoziția aerului, oxidare, ardere, combustibili și poluare",
      icon: "🔥",
      chapters: [
        chapterCh7("u10-l1-compozitia-aerului",   "L1: Compoziția aerului"),
        chapterCh7("u10-l2-oxidarea-arderea",      "L2: Oxidarea și arderea"),
        chapterCh7("u10-l3-combustibili-poluare",  "L3: Combustibili și poluarea aerului"),
        recapChCh7("u10-recap",                    "Recapitulare și evaluare – Unitatea 10")
      ]
    }
  ]
};
