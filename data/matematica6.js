// ============================================================
//  MATEMATICĂ - CLASA A VI-A
//  Conținut original, aliniat cu programa OMEN 3393/2017
//  Lecții standardizate: explicații, tips & tricks, exemple, exerciții
// ============================================================

const htmlList = (items) => items.map((item) => `<li>${item}</li>`).join("\n");
const htmlSteps = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const solvedBlocks = (items) => items.map((item, index) => `
  <div class="rezolvat">
    <div class="rezolvat-label">Problema ${index + 1} - ${item.label}</div>
    <p><strong>Se dă:</strong> ${item.given}</p>
    <p><strong>Se cere:</strong> ${item.ask}</p>
    <p><strong>Rezolvare:</strong> ${item.solve}</p>
    ${item.check ? `<p><strong>Verificare:</strong> ${item.check}</p>` : ""}
    <p><strong>Răspuns:</strong> ${item.answer}</p>
  </div>`).join("\n");

const axisSvg = `
<svg style="width:100%;max-width:520px;height:120px;margin:14px 0" viewBox="0 0 520 120" role="img" aria-label="Axa numerelor">
  <line x1="35" y1="60" x2="485" y2="60" stroke="#111827" stroke-width="2"/>
  <polygon points="485,60 474,54 474,66" fill="#111827"/>
  ${[-4,-3,-2,-1,0,1,2,3,4].map((n,i)=>`<line x1="${70+i*45}" y1="52" x2="${70+i*45}" y2="68" stroke="#111827"/><text x="${70+i*45}" y="90" font-size="13" text-anchor="middle">${n}</text>`).join("")}
</svg>`;

const vennSvg = `
<svg style="width:100%;max-width:420px;height:210px;margin:14px 0" viewBox="0 0 420 210" role="img" aria-label="Diagramă Venn pentru două mulțimi">
  <ellipse cx="170" cy="105" rx="110" ry="70" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <ellipse cx="250" cy="105" rx="110" ry="70" fill="#dcfce7" stroke="#16a34a" stroke-width="2" opacity="0.88"/>
  <text x="95" y="58" font-size="18" fill="#075985" font-weight="700">A</text>
  <text x="315" y="58" font-size="18" fill="#166534" font-weight="700">B</text>
  <text x="208" y="111" font-size="14" fill="#1f2937" text-anchor="middle">A ∩ B</text>
</svg>`;

const angleSvg = `
<svg style="width:100%;max-width:420px;height:220px;margin:14px 0" viewBox="0 0 420 220" role="img" aria-label="Unghi cu vârful O">
  <line x1="70" y1="160" x2="350" y2="160" stroke="#1f2937" stroke-width="3"/>
  <line x1="170" y1="160" x2="305" y2="55" stroke="#1f2937" stroke-width="3"/>
  <path d="M205 160 A35 35 0 0 1 197 138" fill="none" stroke="#f97316" stroke-width="3"/>
  <text x="160" y="181" font-size="16" font-weight="700">O</text><text x="355" y="164" font-size="16">A</text><text x="310" y="55" font-size="16">B</text>
</svg>`;

const triangleSvg = `
<svg style="width:100%;max-width:420px;height:260px;margin:14px 0" viewBox="0 0 420 260" role="img" aria-label="Triunghi ABC cu înălțime">
  <polygon points="85,210 335,210 210,45" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
  <line x1="210" y1="45" x2="210" y2="210" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="72" y="232" font-size="16" font-weight="700">A</text><text x="340" y="232" font-size="16" font-weight="700">B</text><text x="207" y="35" font-size="16" font-weight="700">C</text><text x="220" y="135" font-size="14" fill="#b91c1c">înălțime</text>
</svg>`;

const tableSets = `
<table class="teoria-table"><thead><tr><th>Operație</th><th>Notație</th><th>Interpretare</th></tr></thead><tbody>
<tr><td>Reuniune</td><td>$A \\cup B$</td><td>elementele care sunt în A sau în B</td></tr>
<tr><td>Intersecție</td><td>$A \\cap B$</td><td>elementele comune</td></tr>
<tr><td>Diferență</td><td>$A \\setminus B$</td><td>elementele din A care nu sunt în B</td></tr>
</tbody></table>`;

const examplesByType = {
  set: [
    { label: "bază", given: "$A=\\{0,2,4,6\\}$", ask: "stabilește dacă $4\\in A$ și $5\\in A$", solve: "4 apare în lista elementelor, iar 5 nu apare.", answer: "$4\\in A$, $5\\notin A$" },
    { label: "mediu", given: "$B=\\{x\\in ℕ \\mid x<8, x \\text{ este par}\\}$", ask: "scrierea prin enumerare", solve: "Numerele naturale pare mai mici decât 8 sunt 0, 2, 4 și 6.", answer: "$B=\\{0,2,4,6\\}$" },
    { label: "tip examen", given: "$C=\\{1,2,3,4,6,12\\}$", ask: "elementele din C care divid 12 și sunt mai mari decât 2", solve: "Divizorii lui 12 din C sunt toți termenii dați; păstrăm doar elementele mai mari decât 2.", check: "3, 4, 6 și 12 divid 12.", answer: "$\\{3,4,6,12\\}$" }
  ],
  setop: [
    { label: "bază", given: "$A=\\{1,2,3,4\\}$ și $B=\\{3,4,5\\}$", ask: "$A\\cup B$ și $A\\cap B$", solve: "Reuniunea adună elementele distincte, iar intersecția păstrează elementele comune.", answer: "$A\\cup B=\\{1,2,3,4,5\\}$, $A\\cap B=\\{3,4\\}$" },
    { label: "mediu", given: "$A=\\{2,4,6,8\\}$ și $B=\\{1,2,3,4\\}$", ask: "$A\\setminus B$", solve: "Din A eliminăm elementele care apar și în B: 2 și 4.", answer: "$A\\setminus B=\\{6,8\\}$" },
    { label: "tip examen", given: "12 elevi joacă fotbal, 9 joacă baschet, 4 joacă ambele", ask: "câți joacă cel puțin unul dintre sporturi", solve: "Folosim reuniunea: $12+9-4=17$, deoarece cei 4 au fost numărați de două ori.", answer: "17 elevi" }
  ],
  divisibility: [
    { label: "bază", given: "numărul 372", ask: "dacă este divizibil cu 3", solve: "Suma cifrelor este $3+7+2=12$, iar 12 este divizibil cu 3.", answer: "372 este divizibil cu 3" },
    { label: "mediu", given: "numerele 24 și 36", ask: "CMMDC", solve: "$24=2^3\\cdot3$, $36=2^2\\cdot3^2$. Factorii comuni cu exponent minim sunt $2^2$ și 3.", answer: "$CMMDC(24,36)=12$" },
    { label: "tip examen", given: "48 de caiete și 60 de creioane", ask: "numărul maxim de pachete identice", solve: "Calculăm $CMMDC(48,60)=12$. Fiecare pachet primește 4 caiete și 5 creioane.", check: "$12\\cdot4=48$, $12\\cdot5=60$.", answer: "12 pachete" }
  ],
  ratio: [
    { label: "bază", given: "raportul 12:18", ask: "forma simplificată", solve: "Împărțim ambii termeni la 6: $12:18=2:3$.", answer: "2:3" },
    { label: "mediu", given: "$\\frac{x}{12}=\\frac{5}{6}$", ask: "x", solve: "Din proporție: $6x=12\\cdot5=60$, deci $x=10$.", answer: "$x=10$" },
    { label: "tip examen", given: "un produs de 160 lei se reduce cu 25%", ask: "prețul final", solve: "25% din 160 este $\\frac{25}{100}\\cdot160=40$. Scădem reducerea: $160-40=120$.", answer: "120 lei" }
  ],
  integer: [
    { label: "bază", given: "$-7+12-5$", ask: "valoarea expresiei", solve: "$-7+12=5$, apoi $5-5=0$.", answer: "0" },
    { label: "mediu", given: "$(-3)\\cdot4+18:(-2)$", ask: "valoarea expresiei", solve: "$(-3)\\cdot4=-12$, $18:(-2)=-9$, deci $-12-9=-21$.", answer: "-21" },
    { label: "tip examen", given: "$-2x>6$, cu $x\\inℤ$", ask: "soluțiile", solve: "Împărțim la -2 și schimbăm sensul: $x<-3$.", answer: "$x\\inℤ, x<-3$" }
  ],
  rational: [
    { label: "bază", given: "$\\frac{2}{3}+\\frac{1}{6}$", ask: "suma", solve: "Aducem la numitorul 6: $\\frac{4}{6}+\\frac{1}{6}=\\frac{5}{6}$.", answer: "$\\frac{5}{6}$" },
    { label: "mediu", given: "$\\frac{5}{7}:\\frac{10}{21}$", ask: "câtul", solve: "Înmulțim cu inversa: $\\frac{5}{7}\\cdot\\frac{21}{10}=\\frac{3}{2}$.", answer: "$\\frac{3}{2}$" },
    { label: "tip examen", given: "$\\frac{x}{3}+\\frac{1}{2}=\\frac{5}{6}$", ask: "x", solve: "$\\frac{x}{3}=\\frac{5}{6}-\\frac{1}{2}=\\frac{1}{3}$, deci $x=1$.", check: "$\\frac{1}{3}+\\frac{1}{2}=\\frac{5}{6}$.", answer: "$x=1$" }
  ],
  geometry: [
    { label: "bază", given: "un unghi de 37°", ask: "complementul lui", solve: "Unghiurile complementare au suma 90°, deci $90°-37°=53°$.", answer: "53°" },
    { label: "mediu", given: "două unghiuri suplementare, unul de 124°", ask: "celălalt unghi", solve: "Unghiurile suplementare au suma 180°, deci $180°-124°=56°$.", answer: "56°" },
    { label: "tip examen", given: "două drepte secante formează un unghi de 48°", ask: "unghiul opus la vârf și unul adiacent", solve: "Unghiul opus la vârf este egal cu 48°. Unghiul adiacent este suplementar: $180°-48°=132°$.", answer: "48° și 132°" }
  ],
  triangle: [
    { label: "bază", given: "un triunghi cu două unghiuri de 45° și 65°", ask: "al treilea unghi", solve: "Suma unghiurilor este 180°, deci $180°-45°-65°=70°$.", answer: "70°" },
    { label: "mediu", given: "un triunghi isoscel cu unghiul la vârf de 40°", ask: "unghiurile de la bază", solve: "Unghiurile de la bază sunt egale: $(180°-40°):2=70°$.", answer: "70° și 70°" },
    { label: "tip examen", given: "un triunghi dreptunghic cu catetele 6 cm și 8 cm", ask: "ipotenuza și perimetrul", solve: "$c^2=6^2+8^2=100$, deci $c=10$ cm. Perimetrul este $6+8+10=24$ cm.", answer: "ipotenuza 10 cm, perimetrul 24 cm" }
  ]
};

const commonExercises = {
  set: ["Scrie prin enumerare o mulțime definită prin proprietate.", "Verifică trei afirmații de apartenență folosind $\\in$ și $\\notin$.", "Construiește două mulțimi egale scrise în ordine diferită.", "Găsește o mulțime vidă definită printr-o condiție imposibilă.", "Rezolvă o cerință cu două condiții simultane."],
  setop: ["Calculează reuniunea și intersecția a două mulțimi date.", "Calculează $A\\setminus B$ și $B\\setminus A$.", "Desenează o diagramă Venn pentru două mulțimi cu două elemente comune.", "Rezolvă o problemă cu elevi care aleg două activități.", "Explică de ce la reuniune elementele comune nu se repetă."],
  divisibility: ["Verifică divizibilitatea unui număr cu 2, 3, 5 și 9.", "Descompune 180 în factori primi.", "Calculează $CMMDC(72,96)$.", "Calculează $CMMMC(18,24)$.", "Rezolvă o problemă cu pachete identice sau evenimente repetitive."],
  ratio: ["Simplifică un raport numeric.", "Află termenul necunoscut dintr-o proporție.", "Împarte o sumă în părți proporționale.", "Rezolvă o problemă cu procente sau reducere.", "Interpretează un tabel sau o probabilitate simplă."],
  integer: ["Ordonează crescător cinci numere întregi.", "Calculează o expresie cu semne diferite.", "Rezolvă o ecuație în ℤ.", "Rezolvă o inecuație în ℤ și scrie trei soluții.", "Compune o problemă care se rezolvă cu o ecuație."],
  rational: ["Compară două fracții.", "Calculează o sumă sau diferență de fracții.", "Calculează un produs sau cât de fracții.", "Rezolvă o ecuație cu fracții.", "Rezolvă o problemă cu parte din întreg."],
  geometry: ["Află complementul și suplementul unui unghi dat.", "Identifică unghiuri opuse la vârf într-un desen.", "Folosește o secantă pentru a determina un unghi necunoscut.", "Construiește mediatoarea unui segment.", "Rezolvă o problemă cu rază, diametru sau unghi la centru."],
  triangle: ["Află un unghi necunoscut dintr-un triunghi.", "Calculează perimetrul unui triunghi.", "Aplică o proprietate a triunghiului isoscel sau echilateral.", "Precizează cazul de congruență folosit.", "Aplică teorema lui Pitagora într-o problemă cu lungimi." ]
};

const typeTips = {
  set: ["Scrie elementele fără repetări.", "Ordinea elementelor nu schimbă mulțimea.", "Verifică fiecare condiție din enunț, nu doar prima."],
  setop: ["La diferență contează ordinea mulțimilor.", "Intersecția înseamnă elemente comune, reuniunea înseamnă cel puțin într-una.", "În probleme cu două categorii, scade intersecția o singură dată."],
  divisibility: ["Începe cu criteriile rapide înainte de împărțiri lungi.", "CMMDC folosește factorii comuni, CMMMC folosește toți factorii necesari.", "Verifică rezultatul prin divizibilitate sau înmulțire."],
  ratio: ["Decide întâi dacă mărimile sunt direct sau invers proporționale.", "Procentele se transformă în fracții cu numitorul 100.", "În proporții, verifică prin produsul mezilor și al extremilor."],
  integer: ["Pentru numere negative, compară poziția pe axă.", "La produs și cât, regula semnelor se aplică înaintea calculului numeric.", "La inecuații, schimbă sensul când împarți la număr negativ."],
  rational: ["Adu fracțiile la numitor comun doar la adunare și scădere.", "La împărțire, înmulțește cu inversa celei de-a doua fracții.", "Păstrează semnul minus până la final."],
  geometry: ["Desenul trebuie să respecte relațiile din enunț: paralel, perpendicular, egal.", "Nu măsura pe desen dacă problema cere calcul exact.", "Pentru unghiuri, caută sume de 90°, 180° sau 360°."],
  triangle: ["Ipotenuza este întotdeauna latura opusă unghiului drept.", "Într-un triunghi isoscel, marchează laturile egale înainte de calcul.", "Pentru congruență, verifică ordinea elementelor corespondente." ]
};

const typeSteps = {
  set: ["Identifică proprietatea elementelor.", "Scrie elementele între acolade.", "Elimină repetările.", "Verifică apartenența fiecărui element cerut."],
  setop: ["Scrie separat cele două mulțimi.", "Alege operația cerută.", "Păstrează elementele potrivite operației.", "Verifică dacă ai repetat vreun element."],
  divisibility: ["Descompune sau aplică un criteriu de divizibilitate.", "Alege factorii ceruți de metodă.", "Calculează ordonat.", "Verifică prin înmulțire sau împărțire exactă."],
  ratio: ["Scrie raportul sau proporția.", "Simplifică dacă este posibil.", "Aplică produsul în cruce sau regula de trei.", "Scrie răspunsul cu unitatea corectă."],
  integer: ["Rezolvă parantezele și puterile.", "Aplică regula semnelor.", "Efectuează operațiile de același rang de la stânga la dreapta.", "Verifică soluția în ℤ."],
  rational: ["Transformă numerele în fracții când ajută.", "Alege metoda potrivită operației.", "Simplifică rezultatul.", "Verifică prin înlocuire sau calcul invers."],
  geometry: ["Notează datele pe desen.", "Identifică relația geometrică folosită.", "Scrie ecuația de unghiuri sau lungimi.", "Verifică dacă rezultatul are sens în desen."],
  triangle: ["Marchează laturile și unghiurile cunoscute.", "Alege proprietatea triunghiului potrivit.", "Calculează necunoscuta.", "Verifică suma unghiurilor sau relația de lungimi." ]
};

const visuals = { set: vennSvg, setop: vennSvg, integer: axisSvg, rational: axisSvg, geometry: angleSvg, triangle: triangleSvg };
const tables = { setop: tableSets };

function makeLesson(topic) {
  return `
<div class="content-block">
  <div class="retine"><div class="retine-label">Ce învățăm</div><p>${topic.learn}</p></div>
  <h4>Termeni și notații</h4><ul>${htmlList(topic.terms)}</ul>
  <h4>Formule / Proprietăți</h4><ul>${htmlList(topic.properties)}</ul>
  ${tables[topic.type] || ""}
  ${visuals[topic.type] || ""}
  <h4>Cum aplicăm</h4><ol>${htmlSteps(topic.steps || typeSteps[topic.type])}</ol>
  <div class="atentie"><div class="atentie-label">Tips & tricks</div><ul>${htmlList(topic.tips || typeTips[topic.type])}</ul></div>
  ${solvedBlocks(topic.examples || examplesByType[topic.type])}
  <h4>Exerciții propuse</h4><ol>${htmlSteps(topic.exercises || commonExercises[topic.type])}</ol>
</div>`;
}

function makeRecap(data) {
  return `
<div class="content-block">
  <div class="retine"><div class="retine-label">Recapitulare</div><p>${data.summary}</p></div>
  <h4>Formule-cheie</h4><ul>${htmlList(data.keys)}</ul>
  <div class="atentie"><div class="atentie-label">Greșeli frecvente</div><ul>${htmlList(data.mistakes)}</ul></div>
  ${solvedBlocks([data.problem])}
  <h4>Exerciții mixte</h4><ol>${htmlSteps(data.exercises)}</ol>
</div>`;
}

const topicData = {
  "1.1.1-multimi": {type:"set", learn:"Recunoaștem mulțimile, scriem elementele lor corect și folosim notațiile de apartenență pentru numere naturale.", terms:["mulțime: colecție de obiecte bine determinate", "element: obiect care aparține unei mulțimi", "$x\\in A$: x aparține lui A", "$x\\notin A$: x nu aparține lui A", "$ℕ=\\{0,1,2,3,...\\}$"], properties:["Elementele unei mulțimi nu se repetă.", "Ordinea elementelor nu contează.", "Mulțimea vidă se notează $\\emptyset$.", "O mulțime poate fi scrisă prin enumerare sau prin proprietate."]},
  "1.1.2-relatii-multimi": {type:"set", learn:"Comparăm mulțimi prin egalitate și incluziune și justificăm relațiile dintre ele.", terms:["$A=B$: aceleași elemente", "$A\\subseteq B$: fiecare element din A este și în B", "$A\\subset B$: incluziune strictă", "submulțime"], properties:["$A\\subseteq A$ pentru orice mulțime A.", "$\\emptyset\\subseteq A$ pentru orice mulțime A.", "Dacă $A\\subseteq B$ și $B\\subseteq A$, atunci $A=B$.", "Pentru incluziune strictă, B are cel puțin un element care nu este în A."]},
  "1.2.1-operatii-multimi": {type:"setop", learn:"Calculăm reuniunea, intersecția și diferența mulțimilor și interpretăm operațiile în probleme.", terms:["$A\\cup B$: reuniune", "$A\\cap B$: intersecție", "$A\\setminus B$: diferență", "element comun"], properties:["Reuniunea conține toate elementele distincte.", "Intersecția conține doar elementele comune.", "Diferența $A\\setminus B$ păstrează din A ce nu este în B.", "$A\\setminus B$ poate fi diferită de $B\\setminus A$."]},
  "1.2.2-aplicatii-multimi": {type:"setop", learn:"Rezolvăm probleme cu mulțimi folosind cuvintele «și», «sau», «numai».", terms:["cardinal: numărul de elemente", "diagramă Venn", "numai A: $A\\setminus B$", "cel puțin una: reuniune"], properties:["Pentru două mulțimi finite: $|A\\cup B|=|A|+|B|-|A\\cap B|$.", "«Și» indică de obicei intersecția.", "«Sau» indică de obicei reuniunea.", "Elementele comune nu se numără de două ori." ]},
  "1.3.1-recapitulare-divizibilitate": {type:"divisibility", learn:"Revedem divizibilitatea și criteriile rapide pentru numere naturale.", terms:["$a\\mid b$: $a$ divide pe $b$ fără rest", "divizor: număr care divide exact un alt număr", "multiplu: rezultatul înmulțirii unui număr cu un întreg", "număr prim: are exact 2 divizori, 1 și el însuși"], properties:["Divizibil cu 2: ultima cifră este pară.", "Divizibil cu 3 sau 9: suma cifrelor este divizibilă cu 3 sau 9.", "Divizibil cu 5: ultima cifră este 0 sau 5.", "Divizibil cu 10: ultima cifră este 0." ]},
  "1.3.2-descompunere-factori-primi": {type:"divisibility", learn:"Descompunem numere naturale în produs de factori primi.", terms:["factor prim: factor din descompunere care este număr prim", "descompunere: scriere ca produs de factori primi", "putere: $a^n$ = factorul $a$ repetat de $n$ ori la înmulțire", "produs de factori: înmulțirea factorilor primi obținuți"], properties:["Orice număr natural mai mare decât 1 are descompunere unică în factori primi.", "Factorii egali se scriu ca puteri.", "Rezultatul se verifică prin înmulțire.", "Factorii din descompunere trebuie să fie numere prime." ]},
  "1.3.3-cmmdc": {type:"divisibility", learn:"Calculăm CMMDC și îl folosim în probleme cu împărțiri în grupe identice.", terms:["CMMDC: cel mai mare divizor comun al mai multor numere", "divizor comun: număr care divide exact toți termenii dați", "numere prime între ele: au CMMDC = 1", "factor comun: factor prim care apare în descompunerea ambelor numere"], properties:["CMMDC folosește factorii comuni cu exponentul cel mai mic.", "Dacă CMMDC este 1, numerele sunt prime între ele.", "CMMDC nu depășește numărul mai mic.", "CMMDC este util la simplificarea fracțiilor." ]},
  "1.3.4-cmmmc": {type:"divisibility", learn:"Calculăm CMMMC pentru multipli comuni și probleme de repetare.", terms:["CMMMC: cel mai mic multiplu comun al mai multor numere", "multiplu comun: număr divizibil exact cu toți termenii dați", "factor necomun: factor prim care apare în descompunerea unui număr, dar nu a altuia", "exponent maxim: cea mai mare putere a unui factor din descompunere"], properties:["CMMMC folosește toți factorii primi cu exponentul cel mai mare.", "CMMMC este cel puțin egal cu numărul mai mare.", "Pentru numere prime între ele, CMMMC este produsul lor.", "Dacă un număr divide pe celălalt, CMMMC este numărul mai mare." ]},
  "1.3.5-proprietati-divizibilitate": {type:"divisibility", learn:"Aplicăm proprietăți ale divizibilității pentru sume, diferențe și produse.", terms:["divizibilitate: $a\\mid b$ înseamnă că $b = a \\cdot k$, cu $k$ întreg", "sumă divizibilă: dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b+c)$", "diferență divizibilă: dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b-c)$ pentru $b\\ge c$", "tranzitivitate: dacă $a\\mid b$ și $b\\mid c$, atunci $a\\mid c$"], properties:["Dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b+c)$.", "Dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b-c)$ pentru $b\\ge c$.", "Dacă $a\\mid b$, atunci $a\\mid b\\cdot k$.", "Dacă $a\\mid b$ și $b\\mid c$, atunci $a\\mid c$." ]},

  // ── Cap.2 Rapoarte – topicuri complete ────────────────────────────────────
  "2.1.1-rapoarte": {type:"ratio",
    learn: "Un raport compară două mărimi de același fel prin împărțire. Raportul $a:b=\\frac{a}{b}$ arată de câte ori prima mărime este mai mare (sau mai mică) decât a doua.",
    terms: ["raport $a:b=\\frac{a}{b}$, cu $b\\ne0$: compară două mărimi prin împărțire", "raport subunitar: $\\frac{a}{b}<1$ ⇒ $a<b$", "raport supraunitar: $\\frac{a}{b}>1$ ⇒ $a>b$", "raport unitar: $\\frac{a}{b}=1$ ⇒ $a=b$", "simplificare: împărțim ambii termeni cu CMMDC$(a,b)$"],
    properties: ["Raportul rămâne același dacă înmulțim sau împărțim ambii termeni cu același număr nenul.", "Simplificare: $\\frac{a}{b}=\\frac{a\\div d}{b\\div d}$ unde $d=$CMMDC$(a,b)$.", "Raportul nu are unitate de măsură dacă mărimile sunt de același fel.", "Ordinea contează: $a:b\\ne b:a$ în general."],
    steps: ["Identifică cei doi termeni $a$ (numărătorul) și $b$ (numitorul, $b\\ne0$).", "Verifică dacă unitățile sunt aceleași; dacă nu, convertește.", "Calculează CMMDC$(a,b)$ și simplifică.", "Interpretează: subunitar ($<1$), supraunitar ($>1$) sau unitar ($=1$)."],
    tips: ["Raportul $5:3\\ne3:5$ – ordinea contează!", "Nu confunda raportul cu diferența: raportul $6:2=3$ (înseamnă «de 3 ori mai mare»).", "La probleme cu hărți, raportul reprezintă scara: mic/mare real."],
    examples: [{label:"simplificare",given:"Raportul $36:24$",ask:"Forma ireductibilă",solve:"CMMDC$(36,24)=12$. $\\frac{36}{24}=\\frac{3}{2}$.",answer:"$3:2$"},{label:"aplicat",given:"O clasă are 15 fete și 10 băieți",ask:"Raportul fete:băieți",solve:"$\\frac{15}{10}=\\frac{3}{2}$, deci sunt de $1{,}5$ ori mai multe fete.",answer:"$3:2$"},{label:"tip examen",given:"Raportul lungime:lățime este $5:3$; lățimea $= 9$ cm",ask:"Lungimea dreptunghiului",solve:"$\\frac{L}{9}=\\frac{5}{3}\\Rightarrow L=\\frac{5\\cdot9}{3}=15$ cm.",answer:"$L=15$ cm"}],
    exercises: ["Simplificați: $48:36$, $120:90$, $75:25$.", "O școală are 480 elevi și 32 profesori. Calculați raportul elevi:profesori.", "Raportul $a:b=2:5$ și $a=14$. Găsiți $b$.", "Comparați rapoartele $7:4$ și $9:5$. Care este mai mare?"]},

  "2.1.2-proportii": {type:"ratio",
    learn: "O proporție este egalitatea a două rapoarte: $\\frac{a}{b}=\\frac{c}{d}$. Proprietatea fundamentală: produsul extremilor = produsul mezilor ($a\\cdot d=b\\cdot c$).",
    terms: ["proporție: egalitate $\\frac{a}{b}=\\frac{c}{d}$, cu $b,d\\ne0$", "extremii proporției: termenii $a$ și $d$ (primul și ultimul)", "mezii proporției: termenii $b$ și $c$ (al doilea și al treilea)", "proprietatea fundamentală: $a\\cdot d=b\\cdot c$"],
    properties: ["Proprietatea fundamentală: $a\\cdot d=b\\cdot c$ (produsul extremilor = produsul mezilor).", "Al 4-lea termen: $d=\\frac{b\\cdot c}{a}$ (sau orice alt termen necunoscut).", "Ordinea termenilor contează: $\\frac{2}{3}=\\frac{4}{6}$ ✓, dar $\\frac{2}{3}=\\frac{6}{4}$ ✗.", "Verificare: înmulțește extremii și mezii – trebuie să fie egale."],
    steps: ["Scrie proporția și identifică termenul necunoscut $x$.", "Aplică proprietatea fundamentală: produsul extremilor = produsul mezilor.", "Rezolvă pentru $x$: împarțim produsul la coeficientul lui $x$.", "Verifică: înlocuiește $x$ și verifică egalitatea."],
    tips: ["Extremii sunt PRIMUL și ULTIMUL termen; mezii sunt AL DOILEA și AL TREILEA.", "Dacă $\\frac{a}{b}=\\frac{c}{d}$, atunci și $\\frac{a}{c}=\\frac{b}{d}$ (proprietate derivată).", "Verifică întotdeauna: produsele trebuie să fie egale."],
    examples: [{label:"verificare",given:"$\\frac{3}{5}=\\frac{9}{15}$",ask:"Este o proporție?",solve:"Extremi: $3\\cdot15=45$; mezii: $5\\cdot9=45$. Egal → este proporție.",answer:"Da"},{label:"termen necunoscut",given:"$\\frac{x}{8}=\\frac{3}{4}$",ask:"Găsiți $x$",solve:"$x\\cdot4=8\\cdot3=24\\Rightarrow x=6$.",answer:"$x=6$"},{label:"tip examen",given:"$\\frac{12}{x}=\\frac{4}{7}$",ask:"Găsiți $x$",solve:"$12\\cdot7=x\\cdot4\\Rightarrow84=4x\\Rightarrow x=21$.",answer:"$x=21$"}],
    exercises: ["Verificați dacă sunt proporții: a) $\\frac{6}{8}=\\frac{9}{12}$; b) $\\frac{5}{7}=\\frac{10}{15}$.", "Găsiți $x$: a) $\\frac{x}{6}=\\frac{4}{8}$; b) $\\frac{9}{x}=\\frac{3}{7}$.", "Scrieți 3 proporții care au ca mez numerele 6 și 8.", "Dacă $\\frac{a}{3}=\\frac{b}{5}$ și $a+b=16$, găsiți $a$ și $b$."]},

  "2.1.3-sir-rapoarte": {type:"ratio",
    learn: "Un șir de rapoarte egale: $\\frac{a}{m}=\\frac{b}{n}=k$. Constanta $k$ se calculează din sumă: $k=\\frac{a+b}{m+n}$. Fiecare termen se obține înmulțind $k$ cu «partea» sa.",
    terms: ["$\\frac{a}{m}=\\frac{b}{n}=k$: toate rapoartele au aceeași valoare $k$", "constantă de proporționalitate $k$: valoarea comună a tuturor rapoartelor", "proprietatea sumei: $\\frac{a+b}{m+n}=k$", "împărțire proporțională: distribuire în funcție de $k$"],
    properties: ["Dacă $\\frac{a}{m}=\\frac{b}{n}=k$, atunci $a=k\\cdot m$ și $b=k\\cdot n$.", "Proprietatea sumei: $\\frac{a+b}{m+n}=k$.", "Dacă $a+b=S$: $k=\\frac{S}{m+n}$, apoi $a=k\\cdot m$, $b=k\\cdot n$.", "Proprietatea diferenței: $\\frac{a-b}{m-n}=k$ (cu $m\\ne n$)."],
    steps: ["Scrie rapoartele egale: $\\frac{a}{m}=\\frac{b}{n}=...=k$.", "Dacă suma este dată, calculează $k=\\frac{\\text{suma}}{\\text{suma părților}}$.", "Calculează fiecare termen: $a=k\\cdot m$, $b=k\\cdot n$, etc.", "Verifică: suma termenilor trebuie să corespundă sumei date."],
    tips: ["Însumează întâi toți numitorii («părțile») pentru a calcula $k$.", "Verifică că suma termenilor obținuți = suma inițială dată.", "Ordinea părților contează: $\\frac{a}{3}=\\frac{b}{5}$ dă alt rezultat față de $\\frac{a}{5}=\\frac{b}{3}$."],
    examples: [{label:"calcul k",given:"$\\frac{x}{3}=\\frac{y}{5}=\\frac{z}{2}$ și $x+y+z=30$",ask:"Găsiți $x$, $y$, $z$",solve:"$k=\\frac{30}{3+5+2}=3$. Deci $x=9$, $y=15$, $z=6$.",answer:"$x=9$, $y=15$, $z=6$"},{label:"împărțire",given:"Suma 48 se împarte în raportul $3:5$",ask:"Cele două părți",solve:"$k=\\frac{48}{3+5}=6$. P1: $3\\cdot6=18$; P2: $5\\cdot6=30$.",answer:"18 și 30"},{label:"tip examen",given:"Trei numere proporționale cu $2, 3, 7$; suma $=48$",ask:"Cele trei numere",solve:"$k=\\frac{48}{2+3+7}=4$. Numerele: $8, 12, 28$.",answer:"$8, 12, 28$"}],
    exercises: ["Împărțiți 84 în raportul $3:4$.", "$\\frac{a}{4}=\\frac{b}{7}=\\frac{c}{3}$ și $a+b+c=70$. Găsiți $a, b, c$.", "Trei elevi colectează 180 materiale în raportul $2:3:4$. Câte fiecare?", "Suma a 3 numere este 156; sunt proporționale cu $1:3:8$. Găsiți numerele."]},

  "2.1.4-marimi-proportionale": {type:"ratio",
    learn: "Două mărimi sunt direct proporționale dacă raportul lor este constant ($y=kx$). Sunt invers proporționale dacă produsul lor este constant ($x\\cdot y=k$).",
    terms: ["mărimi direct proporționale: $y/x=k$ constant; când $x$ crește, $y$ crește la fel", "mărimi invers proporționale: $x\\cdot y=k$ constant; când $x$ crește, $y$ scade", "constantă de proporționalitate $k$: valoarea fixă a raportului (sau a produsului)", "test direct: $y_1/x_1=y_2/x_2$; test invers: $x_1\\cdot y_1=x_2\\cdot y_2$"],
    properties: ["Direct proporționale: $y_1:y_2=x_1:x_2$ (rapoartele sunt egale).", "Invers proporționale: $x_1\\cdot y_1=x_2\\cdot y_2$ (produsele sunt egale).", "La direct: graficul este o dreaptă prin origine.", "La invers: dacă $x$ se dublează, $y$ se înjumătățește."],
    steps: ["Identifică tipul: cresc împreună → direct; unul crește, altul scade → invers.", "Direct: $y_2=\\frac{x_2\\cdot y_1}{x_1}$.", "Invers: $y_2=\\frac{x_1\\cdot y_1}{x_2}$.", "Verifică: direct → rapoarte egale; invers → produse egale."],
    tips: ["Test rapid: dublăm $x$ → se dublează $y$? → direct. Se înjumătățește $y$? → invers.", "Viteză și distanță (timp fix) → direct proporționale.", "Viteză și timp (distanță fixă) → invers proporționale."],
    examples: [{label:"direct",given:"3 kg de mere costă 12 lei. Cât costă 7 kg?",ask:"Prețul pentru 7 kg",solve:"Direct: $k=12/3=4$ lei/kg. $7\\cdot4=28$ lei.",answer:"28 lei"},{label:"invers",given:"6 muncitori termină o lucrare în 8 zile. 4 muncitori în câte zile?",ask:"Numărul de zile",solve:"Invers: $k=6\\cdot8=48$. $d=48/4=12$ zile.",answer:"12 zile"},{label:"tip examen",given:"Umbra unui copac și înălțimea soarelui pe cer",ask:"Tip de proporționalitate",solve:"Când soarele urcă, umbra scade → invers proporționale.",answer:"Invers proporționale"}],
    exercises: ["5 caiete costă 15 lei. Câte caiete cumperi cu 27 lei?", "12 robinete umplu un bazin în 4 ore. 8 robinete în câte ore?", "Dacă $y$ este direct proporțional cu $x$ și $y=20$ pentru $x=4$, găsiți $y$ pentru $x=7$.", "O hartă are scara $1:50000$. Un drum măsoară 3 cm pe hartă. Ce distanță reală are?"]},

  "2.1.5-regula-trei": {type:"ratio",
    learn: "Regula de trei simplă rezolvă probleme cu două mărimi proporționale. La direct: $y_2=\\frac{x_2\\cdot y_1}{x_1}$. La invers: $y_2=\\frac{x_1\\cdot y_1}{x_2}$.",
    terms: ["regulă de trei simplă: metodă de calcul a unui termen necunoscut dintr-o proporție", "tabel cu două rânduri: organizează perechile de date $(x, y)$", "proporționalitate directă: raportul $x/y$ este constant", "proporționalitate inversă: produsul $x\\cdot y$ este constant"],
    properties: ["Direct: $y_2=\\frac{x_2\\cdot y_1}{x_1}$ (mărimile cresc/scad în același sens).", "Invers: $y_2=\\frac{x_1\\cdot y_1}{x_2}$ (mărimile evoluează în sens opus).", "Identifică întâi tipul de proporționalitate – greșeala de tip dă rezultat complet greșit.", "Verifică prin înlocuire: $\\frac{y_1}{x_1}=\\frac{y_2}{x_2}$ (direct) sau $x_1 y_1=x_2 y_2$ (invers)."],
    steps: ["Organizează datele în tabel cu două coloane.", "Determină tipul: direct (aceeași direcție) sau invers (direcții opuse).", "Aplică formula potrivită pentru $y_2$.", "Verifică rezultatul prin înlocuire."],
    tips: ["Împărțire directă: înmulțești cu necunoscuta pe aceeași linie.", "La invers: încrucișezi – înmulțești prin încrucișare.", "Verifică întotdeauna că unitățile de măsură corespund."],
    examples: [{label:"direct",given:"4 muncitori produc 120 piese. Câte produc 7?",ask:"Numărul de piese",solve:"Direct: $x=\\frac{7\\cdot120}{4}=210$ piese.",answer:"210 piese"},{label:"invers",given:"3 mașini ară un câmp în 6 ore. 9 mașini în câte ore?",ask:"Numărul de ore",solve:"Invers: $3\\cdot6=9\\cdot x\\Rightarrow x=2$ ore.",answer:"2 ore"},{label:"tip examen",given:"O mașinărie produce 240 cutii în 4 ore. Câte în 7 ore?",ask:"Producția în 7 ore",solve:"Direct: $x=\\frac{7\\cdot240}{4}=420$ cutii.",answer:"420 cutii"}],
    exercises: ["8 kg de roșii costă 24 lei. Cât costă 5 kg?", "O mașină parcurge 240 km în 3 ore. În câte ore parcurge 400 km?", "15 lucrători construiesc un perete în 8 zile. 10 lucrători în câte zile?", "Scara unui plan este 1:200. Camera are 4 cm pe plan. Cât măsoară în realitate?"]},

  "2.1.6-procente": {type:"ratio",
    learn: "Procentul $p\\%$ înseamnă $p$ din 100: $p\\%=\\frac{p}{100}$. Cele trei calcule de bază: valoarea procentuală, procentul și întregul.",
    terms: ["procent $p\\%$: raport față de 100; $p\\%=\\frac{p}{100}$", "valoarea procentuală: $V_p=\\frac{p}{100}\\cdot A$ (cât reprezintă $p\\%$ din întregul $A$)", "calculul procentului: $p=\\frac{V_p}{A}\\cdot100$", "calculul întregului: $A=\\frac{V_p\\cdot100}{p}$"],
    properties: ["$100\\%=$ întregul; $50\\%=$ jumătate; $25\\%=$ un sfert; $10\\%=$ o zecime.", "Creștere cu $p\\%$: noul întreg $=A\\cdot\\left(1+\\frac{p}{100}\\right)$.", "Scădere cu $p\\%$: noul întreg $=A\\cdot\\left(1-\\frac{p}{100}\\right)$.", "Creștere cu $20\\%$ apoi scădere cu $20\\%$ NU revine la valoarea inițială."],
    steps: ["Identifică ce se cere: valoarea procentuală, procentul sau întregul.", "Valoare: $V_p=\\frac{p\\cdot A}{100}$.", "Procent: $p=\\frac{V_p\\cdot100}{A}$.", "Întreg: $A=\\frac{V_p\\cdot100}{p}$."],
    tips: ["$10\\%$ se calculează rapid: împarți la 10. $5\\%$: împarți la 20.", "La creștere/scădere: pornește de la $A$ și adaugă/scade valoarea calculată.", "Creștere $p\\%$ urmată de scădere $p\\%$ NU revine la $A$ (greșeală frecventă)."],
    examples: [{label:"calcul valoare",given:"$p=30\\%$, $A=200$",ask:"Valoarea procentuală",solve:"$V_p=\\frac{30}{100}\\cdot200=60$.",answer:"60"},{label:"calcul procent",given:"Dintr-o clasă de 30 elevi, 12 au luat nota 10",ask:"Procentul",solve:"$p=\\frac{12\\cdot100}{30}=40\\%$.",answer:"$40\\%$"},{label:"tip examen",given:"Un produs costă 120 lei; prețul a crescut cu $15\\%$",ask:"Noul preț",solve:"Creștere: $120\\cdot\\frac{15}{100}=18$ lei. Noul preț: $120+18=138$ lei.",answer:"138 lei"}],
    exercises: ["Calculați $35\\%$ din 280.", "Dintr-o clasă de 25 elevi, 20 au absolvit. Ce procent?", "Un produs costă 90 lei după o reducere de $10\\%$. Care era prețul inițial?", "Un produs costă 80 lei, se scumpește cu $25\\%$, apoi se reduce cu $20\\%$. Prețul final?"]},

  "2.2.1-reprezentare-date": {type:"ratio",
    learn: "Datele se organizează în tabele de frecvență și se reprezintă grafic (bare, circulare, liniare). Fiecare tip de grafic are scop precis.",
    terms: ["frecvență: de câte ori apare o valoare în setul de date", "diagramă cu bare: dreptunghiuri cu înălțimi proporționale cu frecvențele", "diagramă circulară: disc împărțit în sectoare proporționale cu procentele", "scara unui grafic: intervalul ales pe axe (trebuie să fie constant)"],
    properties: ["Suma frecvențelor = numărul total de date.", "Diagramă circulară: unghiul unui sector $=\\frac{\\text{frecvență}}{\\text{total}}\\cdot360°$.", "Un grafic corect are: titlu, etichete pe axe, scară uniformă.", "Frecvența relativă $=\\frac{\\text{frecvență}}{\\text{total}}\\cdot100\\%$."],
    steps: ["Organizează datele în tabel: valoare | frecvență.", "Calculează totalul și frecvențele relative (procente).", "Alege tipul de grafic: bare = comparație; circular = proporții; linie = evoluție.", "Trasează graficul cu scară uniformă, titlu și etichete."],
    tips: ["La diagrama circulară, suma procentelor trebuie să fie exact $100\\%$.", "Scara neuniformă deformează graficul și induce în eroare.", "Diagrama cu bare este cel mai frecvent utilizată la examene."],
    examples: [{label:"frecvență",given:"Note: 7,8,9,8,7,10,9,8,7,8",ask:"Tabel de frecvență",solve:"Nota 7: de 3 ori; Nota 8: de 4 ori; Nota 9: de 2 ori; Nota 10: de 1 ori. Total: 10.",answer:"Tabel cu frecvențele calculate"},{label:"unghi sector",given:"$25\\%$ din elevi preferă matematica",ask:"Unghiul sectorului în diagrama circulară",solve:"$\\frac{25}{100}\\cdot360°=90°$.",answer:"$90°$"},{label:"citire grafic",given:"Diagrama arată: luna A=120, luna B=90",ask:"Cu câte procente a scăzut?",solve:"Scădere: $120-90=30$. Procent: $\\frac{30}{120}\\cdot100=25\\%$.",answer:"$25\\%$"}],
    exercises: ["Note: 5,6,7,7,8,8,8,9,9,10,10,10. Faceți tabelul de frecvență.", "Calculați unghiurile sectorului: matematică 30%, română 25%, alte materii 45%.", "Vânzări în 3 luni: 200, 250, 300. Cu ce procent a crescut față de luna 1?", "Ce tip de diagramă este potrivit pentru evoluția temperaturii în cursul unei zile?"]},

  "2.2.2-probabilitati": {type:"ratio",
    learn: "Probabilitatea unui eveniment: $P(E)=\\frac{\\text{cazuri favorabile}}{\\text{cazuri posibile}}$. $P(E)\\in[0,1]$: $P=0$ (imposibil), $P=1$ (sigur).",
    terms: ["experiment aleatoriu: experiment al cărui rezultat nu se poate prezice", "spațiu de eșantionare: mulțimea tuturor rezultatelor posibile", "probabilitate: $P(E)=\\frac{\\text{nr. cazuri favorabile}}{\\text{nr. cazuri posibile}}$; $P\\in[0,1]$", "eveniment contrar $\\bar{E}$: $P(\\bar{E})=1-P(E)$"],
    properties: ["$P(E)\\in[0,1]$ întotdeauna.", "Evenimentul contrar: $P(\\bar{E})=1-P(E)$.", "Suma probabilităților tuturor rezultatelor posibile este 1.", "Evenimentele egale ca șanse: zar corect, monedă corectă, tragere la sorți echitabilă."],
    steps: ["Listează toate rezultatele posibile (spațiul de eșantionare).", "Numără cazurile favorabile (cele care satisfac evenimentul).", "Calculează: $P(E)=\\frac{\\text{fav}}{\\text{posibile}}$.", "Dacă se cere contrarul: $P(\\bar{E})=1-P(E)$."],
    tips: ["$P=0$: imposibil; $P=0{,}5$: egal probabil; $P=1$: sigur.", "Probabilitatea NU depinde de ce s-a întâmplat înainte (zaruri, monede independente).", "Enumerarea corectă a spațiului de eșantionare este esențială."],
    examples: [{label:"zar",given:"Se aruncă un zar cu fețele 1-6",ask:"$P$ de a obține număr par",solve:"Spațiu: $\\{1,2,3,4,5,6\\}$. Favorabile: $\\{2,4,6\\}\\to3$. $P=\\frac{3}{6}=\\frac{1}{2}$.",answer:"$P=\\frac{1}{2}$"},{label:"bilete",given:"Urnă cu 5 bilete albe și 3 roșii",ask:"$P$ de a extrage bilet alb",solve:"Total $8$. Favorabile: $5$. $P=\\frac{5}{8}$.",answer:"$P=\\frac{5}{8}$"},{label:"contrar",given:"$P(\\text{ploaie})=0{,}3$",ask:"$P$ să NU plouă",solve:"$P(\\overline{\\text{ploaie}})=1-0{,}3=0{,}7$.",answer:"$0{,}7$"}],
    exercises: ["Un zar: care este $P$ de a obține număr mai mare decât 4?", "O cutie: 3 bile roșii, 4 albastre, 5 verzi. Care este $P$(verde)?", "Dintr-un pachet de 52 cărți de joc extragi una. Care este $P$(as)?", "Dacă $P(A)=0{,}45$, calculați $P(\\bar{A})$."]},


  // ── Cap.3 Numere întregi – topicuri complete ─────────────────────────────
  "3.1.1-reprezentare-axa": {type:"integer",
    learn: "Numerele întregi $\\mathbb{Z}=\\{...,-2,-1,0,1,2,...\\}$ se reprezintă pe o axă orientată. Pe axă numerele cresc de la stânga la dreapta.",
    terms: ["$\\mathbb{Z}=\\{...,-2,-1,0,1,2,...\\}$: mulțimea numerelor întregi", "număr întreg pozitiv: $+1,+2,...$ (la dreapta lui 0)", "număr întreg negativ: $-1,-2,...$ (la stânga lui 0)", "opusul lui $a$: numărul $-a$, simetric față de 0 pe axă"],
    properties: ["Pe axă numerele cresc de la stânga la dreapta: $-3<-2<-1<0<1<2$.", "Opusul lui $a$ este $-a$; opusul lui $-5$ este $5$.", "Orice număr negativ este mai mic decât orice număr pozitiv.", "Dintre două numere negative, este mai mare cel mai apropiat de 0: $-2>-5$."],
    steps: ["Trasează axa, marchează 0, adaugă o scară egală în ambele direcții.", "Numerele pozitive → la dreapta; negative → la stânga.", "Pentru comparare: cel mai la dreapta pe axă → cel mai mare.", "Opusul lui $a$: reflectă punctul față de 0."],
    tips: ["$-2>-5$ (deși $2<5$): pe axă $-2$ este mai la dreapta.", "Opusul lui 0 este 0.", "La ordonare: scrie întâi cel mai mic (cel mai la stânga pe axă)."],
    examples: [{label:"ordonare",given:"$-3,1,-7,0,5,-1$",ask:"Ordonare crescătoare",solve:"Pe axă de la stânga la dreapta: $-7<-3<-1<0<1<5$.",answer:"$-7,-3,-1,0,1,5$"},{label:"opus",given:"$a=-4$",ask:"Opusul lui $a$ și opusul opusului",solve:"Opusul lui $-4$ este $4$. Opusul lui $4$ este $-4$, deci $-(-4)=4$.",answer:"Opusul este $4$; $-(-4)=4$"},{label:"tip examen",given:"Punctele $A(-3)$ și $B(5)$ pe axă",ask:"Distanța $AB$ și mijlocul $[AB]$",solve:"$AB=5-(-3)=8$ unități. Mijlocul: $\\frac{-3+5}{2}=1$.",answer:"$AB=8$; mijlocul este $1$"}],
    exercises: ["Ordonați crescător: $-8,3,-1,0,-5,7,-2$.", "Găsiți opusul fiecărui număr: $-6,9,0,-100$.", "Scrieți 4 numere întregi aflate între $-5$ și $3$.", "Care număr întreg este cel mai mare dar negativ?"]},

  "3.1.2-modul": {type:"integer",
    learn: "Modulul $|a|$ este distanța de la $a$ la originea 0 pe axă: $|a|\\geq0$. Dacă $a\\geq0$: $|a|=a$; dacă $a<0$: $|a|=-a$.",
    terms: ["$|a|$: modulul lui $a$; distanța de la $a$ la 0; $|a|\\geq0$", "definire: $|a|=a$ dacă $a\\geq0$; $|a|=-a$ dacă $a<0$", "numere cu același modul: $a$ și $-a$ (simetrice față de 0)", "$|a|=0$ numai dacă $a=0$"],
    properties: ["$|a|\\geq0$ pentru orice $a\\in\\mathbb{Z}$.", "$|a|=|-a|$: un număr și opusul lui au același modul.", "Dacă $|a|=b$ cu $b>0$, atunci $a=b$ sau $a=-b$.", "Comparare numere negative: mai mare = cel cu modulul mai mic ($-3>-7$)."],
    steps: ["Dacă $a\\geq0$: $|a|=a$.", "Dacă $a<0$: $|a|=-a$ (inversezi semnul).", "Dacă $|a|=k>0$: $a=k$ sau $a=-k$ (două soluții).", "Comparare $a,b<0$: mai mare = cel cu modul mai mic."],
    tips: ["$|-7|=7$, nu $-7$. Modulul este mereu pozitiv sau zero.", "Dacă $|x|=5$: $x=5$ sau $x=-5$ (două soluții).", "Dintre $-9$ și $-4$: $-4>-9$ pentru că $|-4|=4<|-9|=9$."],
    examples: [{label:"calcul modul",given:"$a=-9$, $b=7$, $c=-7$",ask:"Calculați $|a|$, $|b|$, $|c|$",solve:"$|-9|=9$; $|7|=7$; $|-7|=7$. Deci $|b|=|c|=7$.",answer:"$|a|=9$, $|b|=|c|=7$"},{label:"ecuație cu modul",given:"$|x|=12$",ask:"Toate valorile întregi ale lui $x$",solve:"$|x|=12\\Rightarrow x=12$ sau $x=-12$.",answer:"$x=12$ sau $x=-12$"},{label:"tip examen",given:"Comparare $-9$ și $-4$",ask:"Care este mai mare?",solve:"$|-9|=9>|-4|=4$, deci pe axă $-4$ este mai la dreapta → $-4>-9$.",answer:"$-4>-9$"}],
    exercises: ["Calculați $|-15|$, $|+8|$, $|-100|$, $|0|$.", "Rezolvați: $|x|=7$; $|x|=0$; $|x|=-3$.", "Ordonați crescător: $-4,6,-9,|-3|,|-6|$.", "Găsiți toate numerele întregi $x$ cu $|x|\\leq3$."]},

  "3.2.1-adunare-scadere": {type:"integer",
    learn: "La adunarea și scăderea numerelor întregi cu semne diferite: scăderea se transformă în adunarea opusului: $a-b=a+(-b)$.",
    terms: ["opusul lui $a$: $-a$ (același modul, semn opus)", "adunare cu semne diferite: scade modulele și păstrează semnul celui cu modulul mai mare", "scădere: $a-b=a+(-b)$ (se adaugă opusul)", "termeni asemănători: termeni cu aceleași semne"],
    properties: ["$a-b=a+(-b)$: scăderea devine adunarea opusului.", "Semne egale: aduni modulele și păstrezi semnul. Ex: $(-3)+(-5)=-8$.", "Semne diferite: scazi modulele și iei semnul numărului cu modul mai mare. Ex: $(-3)+7=4$.", "Comutativitate la adunare: $a+b=b+a$."],
    steps: ["Transformă scăderile în adunări ale opusului.", "Grupează termenii pozitivi și negativi.", "Calculează suma pozitivelor și suma negativelor.", "Combină: dacă suma pozitivelor > suma negativelor → pozitiv; altfel → negativ."],
    tips: ["Scăderea = adunarea opusului: $5-(-3)=5+3=8$.", "Nu confunda $-(-a)=a$ cu $-(a)=-a$.", "Verifică semnul final: dacă modulul pozitivului > modulul negativului → rezultat pozitiv."],
    examples: [{label:"semne diferite",given:"$(-7)+12$",ask:"Valoarea",solve:"Module: $7$ și $12$. Diferența $12-7=5$. Semnul: al celui cu modul mai mare (+). Rezultat: $+5$.",answer:"$5$"},{label:"scădere",given:"$8-(-3)$",ask:"Valoarea",solve:"$8-(-3)=8+3=11$.",answer:"$11$"},{label:"tip examen",given:"$-15+8-(-4)+(-6)$",ask:"Valoarea expresiei",solve:"$=-15+8+4-6=-15+12=-3$.",answer:"$-3$"}],
    exercises: ["Calculați: $(-4)+7$; $(-8)+(-5)$; $12+(-15)$.", "Calculați: $(-6)-(-3)$; $5-8$; $(-7)-(-10)$.", "Calculați $-3+7-(-2)-4+(-5)$.", "Un submarit coboară $150$ m apoi urcă $80$ m. La ce adâncime se află?"]},

  "3.2.2-inmultire": {type:"integer",
    learn: "La înmulțirea numerelor întregi se aplică regula semnelor: semne identice → rezultat pozitiv; semne diferite → rezultat negativ.",
    terms: ["regula semnelor: $(+)\\cdot(+)=+$; $(-)\\cdot(-)=+$; $(+)\\cdot(-)=-$; $(-)\\cdot(+)=-$", "produs cu factor 0: $a\\cdot0=0$ pentru orice $a$", "produs cu factor $-1$: $(-1)\\cdot a=-a$", "putere a unui întreg negativ: $(-a)^n>0$ dacă $n$ par; $(-a)^n<0$ dacă $n$ impar"],
    properties: ["$(+)\\cdot(+)=+$; $(-)\\cdot(-)=+$; $(+)\\cdot(-)=-$; $(-)\\cdot(+)=-$.", "Dacă oricare factor este 0, produsul este 0.", "Comutativitate: $a\\cdot b=b\\cdot a$.", "Asociativitate: $(a\\cdot b)\\cdot c=a\\cdot(b\\cdot c)$."],
    steps: ["Calculează produsul modulelor.", "Aplică regula semnelor pentru semnul rezultatului.", "Verifică: 0 \\cdot orice = 0.", "La mai mulți factori: numără factorii negativi; par → pozitiv; impar → negativ."],
    tips: ["Doi negativi înmulțiți → pozitiv: $(-3)\\cdot(-4)=12$.", "Numărul de semne minus: par → $+$; impar → $-$.", "Verifică prin înmulțire inversă: $12\\div(-4)=-3$ ✓."],
    examples: [{label:"semne identice",given:"$(-3)\\cdot(-4)$",ask:"Produsul",solve:"Module: $3\\cdot4=12$. Ambii negativi (semne identice) → $+12$.",answer:"$12$"},{label:"semne diferite",given:"$(-5)\\cdot7$",ask:"Produsul",solve:"Module: $5\\cdot7=35$. Semne diferite → $-35$.",answer:"$-35$"},{label:"tip examen",given:"$(-2)\\cdot3\\cdot(-4)\\cdot(-1)$",ask:"Produsul",solve:"Module: $2\\cdot3\\cdot4\\cdot1=24$. 3 factori negativi (impar) → $-24$.",answer:"$-24$"}],
    exercises: ["Calculați: $(-6)\\cdot5$; $(-4)\\cdot(-7)$; $8\\cdot(-3)$.", "Calculați: $(-2)\\cdot(-5)\\cdot3$.", "Care este semnul lui $(-3)^5$? Dar al lui $(-3)^4$?", "Dacă $a\\cdot b=-20$ și $a=-4$, găsiți $b$."]},

  "3.2.3-impartire": {type:"integer",
    learn: "La împărțirea numerelor întregi se aplică aceeași regulă a semnelor ca la înmulțire. NU se împarte niciodată la 0.",
    terms: ["împărțire: $a:b=c$ dacă $b\\cdot c=a$, cu $b\\ne0$", "câtul a două numere întregi cu semne identice: pozitiv", "câtul a două numere întregi cu semne diferite: negativ", "verificare: $c\\cdot b=a$"],
    properties: ["$(+):(+)=+$; $(-):(-) =+$; $(-) :(+)=-$; $(+):(-)=-$.", "Împărțirea la 0 este nedefinită (imposibilă).", "Verificare: câtul $\\times$ împărțitorul = deîmpărțitul.", "Câtul este 0 dacă și numai dacă deîmpărțitul este 0 ($0:b=0$, $b\\ne0$)."],
    steps: ["Verifică $b\\ne0$.", "Calculează câtul modulelor.", "Aplică regula semnelor.", "Verifică: cât $\\times$ împărțitor = deîmpărțit."],
    tips: ["Aceeași regulă a semnelor ca la înmulțire.", "$0:(\\text{orice}\\ne0)=0$, dar $a:0$ = IMPOSIBIL.", "Verificarea prin înmulțire inversă este obligatorie la examen."],
    examples: [{label:"semne identice",given:"$(-24):(-4)$",ask:"Câtul",solve:"Module: $24:4=6$. Semne identice → $+6$.",answer:"$6$"},{label:"semne diferite",given:"$(-36):9$",ask:"Câtul",solve:"Module: $36:9=4$. Semne diferite → $-4$.",answer:"$-4$"},{label:"tip examen",given:"$\\frac{-48}{-6}$",ask:"Calculați și verificați",solve:"$(-48):(-6)=8$. Verificare: $8\\cdot(-6)=-48$ ✓.",answer:"$8$"}],
    exercises: ["Calculați: $(-35):7$; $(-42):(-6)$; $56:(-8)$.", "Calculați $\\frac{-144}{12}$ și $\\frac{-100}{-25}$.", "Găsiți $x$: $x\\cdot(-5)=-30$; $(-6)\\cdot x=42$.", "Este posibilă împărțirea $(-7):0$? Justificați."]},

  "3.2.4-puteri": {type:"integer",
    learn: "Puterea $a^n$ înseamnă produsul lui $a$ luat de $n$ ori: $a^n=\\underbrace{a\\cdot a\\cdots a}_{n \\text{ ori}}$. Baza negativă cu exponent par → rezultat pozitiv; cu exponent impar → negativ.",
    terms: ["putere $a^n$: produsul bazei $a$ luat de $n$ ori ($n\\in\\mathbb{N}^*$)", "baza $a$: numărul care se înmulțește", "exponentul $n$: de câte ori se înmulțește baza", "regulă: $(-a)^n>0$ dacă $n$ par; $(-a)^n<0$ dacă $n$ impar"],
    properties: ["$a^0=1$ pentru $a\\ne0$; $a^1=a$.", "$(-a)^{2k}=(a)^{2k}>0$ (exponent par → pozitiv).", "$(-a)^{2k+1}=-(a^{2k+1})<0$ (exponent impar → negativ).", "$a^m\\cdot a^n=a^{m+n}$; $(a^m)^n=a^{m\\cdot n}$."],
    steps: ["Calculează $|a|^n$ (produsul modulelor).", "Dacă $a>0$: rezultatul este pozitiv.", "Dacă $a<0$: exponent par → $+$; exponent impar → $-$.", "Aplică regula produsului de puteri dacă e cazul."],
    tips: ["$(-3)^2=9$ (par → pozitiv), dar $-3^2=-9$ (minus în față se aplică după ridicare la putere).", "Nu confunda $(-3)^2=9$ cu $-(3^2)=-9$.", "$0^n=0$ pentru $n\\geq1$."],
    examples: [{label:"exponent par",given:"$(-4)^2$",ask:"Valoarea",solve:"$(-4)^2=(-4)\\cdot(-4)=16$. Exponent par → pozitiv.",answer:"$16$"},{label:"exponent impar",given:"$(-2)^3$",ask:"Valoarea",solve:"$(-2)^3=(-2)\\cdot(-2)\\cdot(-2)=-8$. Exponent impar → negativ.",answer:"$-8$"},{label:"tip examen",given:"$(-3)^4-(-2)^3$",ask:"Valoarea expresiei",solve:"$(-3)^4=81$; $(-2)^3=-8$. $81-(-8)=81+8=89$.",answer:"$89$"}],
    exercises: ["Calculați: $(-5)^2$; $(-2)^5$; $(-1)^{10}$; $(-1)^7$.", "Comparați: $(-3)^4$ și $3^4$; $(-2)^3$ și $2^3$.", "Calculați $(-3)^2+(-4)^2$.", "Este $(-a)^3=-a^3$ adevărat? Justificați cu un exemplu."]},

  "3.2.5-calcule-combinate": {type:"integer",
    learn: "Ordinea operațiilor în expresii cu numere întregi: 1. paranteze (interior→exterior), 2. puteri, 3. înmulțiri/împărțiri, 4. adunări/scăderi.",
    terms: ["paranteze rotunde $()$: prima prioritate (interior → exterior)", "paranteze pătrate $[]$ și acolade $\\{\\}$: tot paranteze, rezolvate din interior", "putere: a doua prioritate", "ordinea completă: paranteze → puteri → $\\cdot\\,:\\to +\\,-$"],
    properties: ["Rezolvă întâi parantezele interioare.", "Puterile se calculează înaintea produselor și câturilor.", "Înmulțirile/împărțirile → de la stânga la dreapta.", "Adunările/scăderile → ultimele, de la stânga la dreapta."],
    steps: ["Rezolvă parantezele de la interior la exterior.", "Calculează toate puterile.", "Efectuează înmulțirile și împărțirile de la stânga la dreapta.", "Efectuează adunările și scăderile de la stânga la dreapta."],
    tips: ["Dacă lipsesc parantezele, ordinea devine esențială: $2+3\\cdot4=14$, nu $20$.", "Parantezele schimbă ordinea: $(2+3)\\cdot4=20$.", "Calculează câte o operație pe rând și rescrie expresia."],
    examples: [{label:"expresie simplă",given:"$3+2\\cdot4-6:2$",ask:"Valoarea",solve:"Produse/câturi: $2\\cdot4=8$, $6:2=3$. Adunare/scădere: $3+8-3=8$.",answer:"$8$"},{label:"cu paranteze",given:"$(5-2)^2\\cdot(-3)+4$",ask:"Valoarea",solve:"Paranteze: $5-2=3$. Putere: $3^2=9$. Produs: $9\\cdot(-3)=-27$. Adunare: $-27+4=-23$.",answer:"$-23$"},{label:"tip examen",given:"$-2[3-(5-8)]+4\\cdot(-2)^3$",ask:"Valoarea",solve:"Interior paranteze: $5-8=-3$. Paranteze: $3-(-3)=6$. $-2\\cdot6=-12$. $(-2)^3=-8$, $4\\cdot(-8)=-32$. $-12+(-32)=-44$.",answer:"$-44$"}],
    exercises: ["Calculați: $5\\cdot(-2)+3-(-4):2$.", "Calculați: $[(-3)^2-5]\\cdot(-2)$.", "Calculați: $-3\\cdot[5-(8-4)]+2^3$.", "Puneți paranteze pentru ca $6+4\\cdot3$ să aibă rezultatul 30."]},

  "3.3.1-ecuatii": {type:"integer",
    learn: "O ecuație în $\\mathbb{Z}$ este o egalitate care conține o necunoscută $x$. Rezolvarea: izolăm $x$ aplicând operații inverse pe ambii membri.",
    terms: ["ecuație: egalitate cu necunoscuta $x$, ex: $2x-3=7$", "soluție: valoarea lui $x$ care satisface ecuația", "ecuație echivalentă: obținută prin operații legale (adunare/scădere/înmulțire pe ambii membri)", "verificare: înlocuiește soluția în ecuație și controlează egalitatea"],
    properties: ["Adăugând același număr pe ambii membri, ecuația rămâne echivalentă.", "Scăzând același număr din ambii membri, ecuația rămâne echivalentă.", "Înmulțind/împărțind ambii membri cu același număr $\\ne0$, ecuația rămâne echivalentă.", "Soluția se verifică obligatoriu prin înlocuire."],
    steps: ["Izolează termenul cu $x$: mută termenii liberi în membrul opus (schimbă semnul).", "Calculează suma termenilor liberi.", "Împarte/înmulțește pentru a obține coeficientul 1 la $x$.", "Verifică prin înlocuire."],
    tips: ["La mutarea unui termen dintr-un membru în altul, semnul se schimbă.", "Dacă $x$ are coeficient negativ, înmulțirea cu $-1$ schimbă toate semnele.", "Verificarea este obligatorie la examen."],
    examples: [{label:"ecuație simplă",given:"$x+5=12$",ask:"Găsiți $x$",solve:"$x=12-5=7$. Verificare: $7+5=12$ ✓.",answer:"$x=7$"},{label:"cu coeficient",given:"$3x-4=-13$",ask:"Găsiți $x$",solve:"$3x=-13+4=-9 \\Rightarrow x=-3$. Verificare: $3\\cdot(-3)-4=-13$ ✓.",answer:"$x=-3$"},{label:"tip examen",given:"$-2x+7=-1$",ask:"Găsiți $x$",solve:"$-2x=-1-7=-8 \\Rightarrow x=4$. Verificare: $-2\\cdot4+7=-1$ ✓.",answer:"$x=4$"}],
    exercises: ["Rezolvați: $x-8=3$; $x+(-5)=-2$.", "Rezolvați: $4x=(-28)$; $-3x=15$.", "Rezolvați: $2x+5=-7$.", "Un număr întreg, înmulțit cu $-3$ și adunat cu 4, dă $-14$. Găsiți numărul."]},

  "3.3.2-inecuatii": {type:"integer",
    learn: "O inecuație în $\\mathbb{Z}$ are infinit de soluții. La înmulțirea/împărțirea cu un număr negativ, sensul inegalității se inversează.",
    terms: ["inecuație: relație de inegalitate cu necunoscuta $x$, ex: $2x-1<5$", "mulțimea soluțiilor: toate valorile întregi care satisfac inecuația", "$<,>,\\leq,\\geq$: simbolurile de inegalitate", "inversarea sensului: la înmulțire/împărțire cu număr negativ"],
    properties: ["Adăugând același număr pe ambii membri: sensul se păstrează.", "Înmulțind/împărțind cu același număr $>0$: sensul se păstrează.", "Înmulțind/împărțind cu același număr $<0$: sensul se INVERSEAZĂ.", "Soluțiile formează o mulțime infinită: se scrie $x\\in\\mathbb{Z}$, $x>k$ etc."],
    steps: ["Mută termenii cu $x$ în stânga, termenii liberi în dreapta.", "Calculează sumele din ambele membre.", "Dacă coeficientul lui $x$ este negativ, inversează sensul la împărțire.", "Scrie mulțimea soluțiilor și exemplifică 2-3 soluții întregi."],
    tips: ["Cel mai frecvent greșit: păstrarea sensului la împărțire cu negativ.", "Verifică cu o valoare concretă din mulțimea soluțiilor.", "$x\\geq-2$ înseamnă $x\\in\\{-2,-1,0,1,2,...\\}$."],
    examples: [{label:"inecuație simplă",given:"$x+3>7$",ask:"Soluțiile întregi",solve:"$x>7-3=4$. Soluțiile: $x\\in\\{5,6,7,...\\}$.",answer:"$x\\in\\mathbb{Z}$, $x>4$"},{label:"inversare sens",given:"$-2x\\leq6$",ask:"Soluțiile întregi",solve:"Împărțim la $-2$ și INVERSĂM: $x\\geq-3$. Soluțiile: $\\{-3,-2,-1,0,1,...\\}$.",answer:"$x\\geq-3$, $x\\in\\mathbb{Z}$"},{label:"tip examen",given:"$3x-5<10$",ask:"Soluțiile întregi cu $x>0$",solve:"$3x<15\\Rightarrow x<5$. Cu $x>0$: $x\\in\\{1,2,3,4\\}$.",answer:"$x\\in\\{1,2,3,4\\}$"}],
    exercises: ["Rezolvați în $\\mathbb{Z}$: $x-4\\geq2$; $x+7<3$.", "Rezolvați în $\\mathbb{Z}$: $-3x>12$; $2x\\leq-8$.", "Găsiți soluțiile întregi ale lui $-1<x\\leq4$.", "Câte numere întregi satisfac $-5<2x\\leq6$?"]},

  "3.3.3-probleme": {type:"integer",
    learn: "Problemele cu numere întregi se traduc în ecuații sau inecuații. Pașii: definim necunoscuta, scriem ecuația, rezolvăm, verificăm în contextul problemei.",
    terms: ["model matematic: ecuația sau inecuația care descrie problema", "necunoscuta $x$: valoarea pe care o căutăm", "condiție de existență: restricții din enunț (ex: $x$ întreg, $x>0$)", "verificare contextuală: soluția matematică respectă condițiile problemei"],
    properties: ["Definim necunoscuta clar: $x =$ ... (ce reprezintă).", "Scriem ecuația din relațiile date în enunț.", "Rezolvăm matematic.", "Verificăm că soluția satisface condițiile problemei (ex: să fie întreg, pozitiv, etc.)."],
    steps: ["Notează necunoscuta: «Fie $x$ = ...».", "Scrie ecuația sau inecuația bazată pe informațiile din enunț.", "Rezolvă ecuația/inecuația.", "Verifică: înlocuiește și controlează că toate condițiile sunt respectate."],
    tips: ["Definește necunoscuta înainte de a scrie ecuația.", "Citește enunțul de două ori: prima oară pentru înțelegere, a doua oară pentru date.", "Verificarea în contextul problemei poate elimina soluții matematice care nu sunt valide."],
    examples: [{label:"problemă sumă",given:"Suma unui număr întreg și dublul său este $-15$",ask:"Numărul",solve:"Fie $x$ numărul. $x+2x=-15\\Rightarrow3x=-15\\Rightarrow x=-5$. Verificare: $-5+(-10)=-15$ ✓.",answer:"$x=-5$"},{label:"problemă diferență",given:"Diferența unui număr și $-3$ este $8$",ask:"Numărul",solve:"$x-(-3)=8\\Rightarrow x+3=8\\Rightarrow x=5$.",answer:"$x=5$"},{label:"tip examen",given:"Termometrul arată $-8°C$ dimineața și temperatura crește cu $15°C$ ziua",ask:"Temperatura de la prânz",solve:"$-8+15=7°C$.",answer:"$7°C$"}],
    exercises: ["Suma a două numere întregi consecutive este $-11$. Găsiți numerele.", "Un număr întreg scăzut din $-3$ dă $10$. Găsiți numărul.", "Temperatura scade de la $5°C$ la $-9°C$. Cu câte grade a scăzut?", "Triplul unui număr întreg este cu $4$ mai mic decât $-2$. Găsiți numărul."]},

  "3.3.4-ordinea-operatii": {type:"integer",
    learn: "Parantezele și ordinea operațiilor controlează calculul: parantezele interioare se rezolvă primele; puterile înainte de produse; produsele înainte de sume.",
    terms: ["paranteze rotunde $(\\,)$: prioritate maximă, se rezolvă de la interior la exterior", "paranteze pătrate $[\\,]$ și acolade $\\{\\,\\}$: aceeași prioritate, conven. ordonate", "putere: rezolvată înaintea produselor și câturilor", "ordinea: $()\\to[\\,]\\to\\{\\}$ → puteri → $\\cdot\\div$ → $+-$"],
    properties: ["Parantezele: din interior spre exterior.", "Puterile: înaintea produselor și câturilor.", "Produse și câturi: de la stânga la dreapta.", "Sume și diferențe: ultimele, de la stânga la dreapta."],
    steps: ["Rezolvă parantezele cele mai interioare.", "Calculează puterile.", "Efectuează înmulțirile și împărțirile.", "Efectuează adunările și scăderile."],
    tips: ["Rescrie expresia după fiecare pas pentru a evita greșeli.", "La paranteze pătrate: rezolvă mai întâi rotundele din interior.", "Un minus în față de paranteză: schimbă toate semnele din paranteză."],
    examples: [{label:"paranteze imbricate",given:"$2\\cdot[3-(5-8)]$",ask:"Valoarea",solve:"Interior: $5-8=-3$. Paranteză: $3-(-3)=6$. Produs: $2\\cdot6=12$.",answer:"$12$"},{label:"minus în față",given:"$-(3-7)+2^2$",ask:"Valoarea",solve:"Paranteză: $3-7=-4$. Minus în față: $-(-4)=4$. Putere: $2^2=4$. Sumă: $4+4=8$.",answer:"$8$"},{label:"tip examen",given:"$-3\\{2-[4-(-1)^3]\\}$",ask:"Valoarea",solve:"$(-1)^3=-1$. $4-(-1)=5$. $2-5=-3$. $-3\\cdot(-3)=9$.",answer:"$9$"}],
    exercises: ["Calculați: $3\\cdot[5-(3-8)]$.", "Calculați: $-(4-6)^2+3$.", "Calculați: $-2\\{3-[2-(-3)^2]\\}$.", "Scrieți o expresie cu 3 tipuri de paranteze care are valoarea 10."]}};

const compactRows = [
["4.1.1-numar-rational","rational","Înțelegem numerele raționale ca fracții cu numitor nenul.","$\\frac{a}{b}$, $b\\ne0$","Orice număr întreg este număr rațional."],
["4.1.2-reprezentare-axa","rational","Reprezentăm fracții și zecimale pe axă.","$|x|$","Numerele opuse sunt la aceeași distanță de 0."],
["4.1.3-comparare","rational","Comparăm și ordonăm numere raționale.","numitor comun, produs în cruce","Pentru același numitor, comparăm numărătorii."],
["4.2.1-adunare-scadere","rational","Adunăm și scădem numere raționale.","numitor comun","La adunare și scădere se aduce la același numitor."],
["4.2.2-inmultire-impartire","rational","Înmulțim și împărțim fracții.","inversul unei fracții nenule","Împărțirea se transformă în înmulțire cu inversul."],
["4.2.3-puteri","rational","Aplicăm reguli de calcul cu puteri pentru numere raționale.","$a^m\\cdot a^n=a^{m+n}$","Exponentul negativ cere inversul bazei nenule."],
["4.2.4-ordinea-operatii","rational","Calculăm expresii cu numere raționale în ordinea corectă.","ordine de calcul","Parantezele se rezolvă înaintea operațiilor exterioare."],
["4.3.1-ecuatii-tipuri","rational","Rezolvăm ecuații cu numere raționale.","ecuație echivalentă","Poți înmulți ecuația cu numitorul comun nenul."],
["4.3.2-probleme","rational","Modelăm probleme cu fracții prin ecuații.","parte din întreg","Verificarea trebuie făcută în contextul problemei."],
["5.1.1-unghiuri-recapitulare","geometry","Recapitulăm măsurarea și clasificarea unghiurilor.","$\\angle AOB$","Unghiul drept are 90°, iar unghiul alungit are 180°."],
["5.1.2-suplementare-complementare","geometry","Folosim unghiuri complementare și suplementare.","complementare: 90°; suplementare: 180°","Unghiul necunoscut se află prin scădere."],
["5.1.3-opuse-varf","geometry","Identificăm unghiuri opuse la vârf și unghiuri în jurul unui punct.","unghiuri opuse la vârf","Unghiurile opuse la vârf sunt egale; în jurul unui punct suma este 360°."],
["5.1.4-unghiuri-adiacente","geometry","Recunoaștem unghiurile adiacente și calculăm măsuri.","vârf comun și latură comună","Dacă formează un unghi alungit, suma lor este 180°."],
["5.2.1-paralele-axioma","geometry","Înțelegem dreptele paralele și axioma paralelelor.","$a\\parallel b$","Prin exteriorul unei drepte trece o singură paralelă la dreapta dată."],
["5.2.2-unghiuri-secanta","geometry","Numim unghiurile formate de două drepte tăiate de o secantă.","corespondente, alterne interne","Denumirea corectă indică proprietatea folosită."],
["5.2.3-paralele-secanta-criterii","geometry","Aplicăm criterii de paralelism cu unghiuri formate de secantă.","unghiuri corespondente egale","Dacă unghiurile corespondente sunt egale, dreptele sunt paralele."],
["5.2.4-aplicatii","geometry","Folosim unghiuri și paralele în configurații compuse.","linie auxiliară","O paralelă auxiliară poate transforma problema într-una cunoscută."],
["5.3.1-perpendiculare","geometry","Recunoaștem perpendicularitatea și distanța de la punct la dreaptă.","$a\\perp b$","Distanța se măsoară pe perpendiculară."],
["5.3.2-mediatoare","geometry","Construim mediatoarea și folosim punctele egal depărtate de capete.","mediatoare","Orice punct de pe mediatoare este egal depărtat de capetele segmentului."],
["5.3.3-simetrie","geometry","Construim simetrice față de o dreaptă.","axă de simetrie","Axa este mediatoarea segmentului dintre punct și imaginea lui."],
["5.4.1-cerc-elemente","geometry","Identificăm centrul, raza, diametrul, coarda și arcul.","rază, diametru, coardă","Diametrul este dublul razei."],
["5.4.2-unghi-centru","geometry","Legăm unghiul la centru de arcul corespunzător.","unghi la centru","Măsura unghiului la centru este egală cu măsura arcului mic corespunzător."],
["6.1.1-clasificare","triangle","Clasificăm triunghiurile și calculăm perimetrul.","triunghi, latură, vârf","Perimetrul este suma laturilor."],
["6.1.2-unghi-sum","triangle","Folosim suma unghiurilor unui triunghi.","$A+B+C=180°$","În orice triunghi, suma unghiurilor este 180°."],
["6.1.3-bisectoare","triangle","Folosim bisectoarea și mediana în triunghi.","bisectoare, mediană","Bisectoarea împarte unghiul în două unghiuri egale; mediana unește vârful cu mijlocul laturii opuse."],
["6.2.1-inaltime","triangle","Trasăm înălțimea și identificăm ortocentrul.","înălțime, ortocentru","Înălțimea este perpendiculara din vârf pe latura opusă sau prelungirea ei."],
["6.2.2-mediatoare-circumcentru","triangle","Folosim mediatoarele pentru circumcentru.","circumcentru","Mediatoarele laturilor se intersectează într-un punct egal depărtat de vârfuri."],
["6.2.3-centroizi","triangle","Identificăm centrul de greutate al triunghiului.","centroid, mediană","Centrul de greutate împarte fiecare mediană în raport 2:1 de la vârf."],
["6.3.1-congruenta-lll","triangle","Aplicăm cazul LLL de congruență.","LLL","Trei laturi corespondente egale determină triunghiuri congruente."],
["6.3.2-congruenta-lul-ulu","triangle","Aplicăm cazurile LUL și ULU.","LUL, ULU","La LUL, unghiul trebuie să fie cuprins între laturile egale."],
["6.3.3-dreptunghice-congruenta","triangle","Folosim criterii de congruență pentru triunghiuri dreptunghice.","catetă, ipotenuză","Ipotenuza și o catetă egale pot demonstra congruența."],
["6.4.1-isoscel","triangle","Folosim proprietățile triunghiului isoscel.","bază, laturi egale","Unghiurile de la bază sunt egale."],
["6.4.2-echilateral","triangle","Folosim proprietățile triunghiului echilateral.","laturi egale","Fiecare unghi al triunghiului echilateral are 60°."],
["6.4.3-pitagora","triangle","Aplicăm teorema lui Pitagora în triunghi dreptunghic.","catete, ipotenuză","$c^2=a^2+b^2$, unde c este ipotenuza."]
];

compactRows.forEach(([id,type,learn,term,prop]) => {
  topicData[id] = { type, learn, terms:[term, "date cunoscute", "necunoscută", "unitate de măsură, unde este cazul"], properties:[prop, "Rezultatul se verifică prin calcul invers sau înlocuire.", "Cerința trebuie citită complet înainte de alegerea metodei.", "Răspunsul final se scrie clar, cu unitate dacă problema o cere."] };
});

const recaps = {
  "cap1-recap": {summary:"Recapitularea unește mulțimile și divizibilitatea: scriere corectă, operații cu mulțimi, factori primi, CMMDC și CMMMC.", keys:["$A\\cup B$, $A\\cap B$, $A\\setminus B$", "CMMDC: factori comuni cu exponent minim", "CMMMC: toți factorii cu exponent maxim", "Criteriile de divizibilitate reduc calculele lungi"], mistakes:["Repetarea elementelor în reuniune", "Confundarea lui CMMDC cu CMMMC", "Folosirea diferenței ca și cum ordinea nu ar conta"], problem:{label:"sinteză",given:"$A=\\{2,3,4,6,12\\}$, $B=\\{3,6,9,12\\}$",ask:"$A\\cap B$ și CMMDC dintre 36 și 48",solve:"$A\\cap B=\\{3,6,12\\}$. $36=2^2\\cdot3^2$, $48=2^4\\cdot3$, deci CMMDC este $2^2\\cdot3=12$.",answer:"$A\\cap B=\\{3,6,12\\}$ și CMMDC=12"}, exercises:commonExercises.divisibility},
  "cap2-recap": {summary:"Recapitularea conectează rapoarte, proporții, procente, grafice și probabilități în probleme aplicative.", keys:["$p\\%=\\frac{p}{100}$", "În proporție, produsul mezilor este egal cu produsul extremilor", "La proporționalitate directă raportul este constant", "Probabilitatea este raportul dintre cazuri favorabile și cazuri posibile"], mistakes:["Aplicarea regulii de trei fără identificarea tipului de proporționalitate", "Confundarea procentului cu valoarea procentuală", "Citirea greșită a scării unui grafic"], problem:examplesByType.ratio[2], exercises:commonExercises.ratio},
  "cap3-recap": {summary:"Recapitularea consolidează numerele întregi, operațiile cu semne, ecuațiile și inecuațiile în ℤ.", keys:["Pe axă, numerele cresc spre dreapta", "$|a|$ este distanța de la a la 0", "Semne identice la produs sau cât dau rezultat pozitiv", "La împărțirea unei inecuații cu număr negativ se schimbă sensul"], mistakes:["Compararea numerelor negative ca și cum ar fi pozitive", "Uitarea parantezelor în expresii cu minus", "Păstrarea sensului inegalității după împărțire la număr negativ"], problem:examplesByType.integer[2], exercises:commonExercises.integer},
  "cap4-recap": {summary:"Recapitularea folosește numere raționale în calcule, comparații, ecuații și probleme cu părți din întreg.", keys:["$\\frac{a}{b}$ are $b\\ne0$", "Pentru adunare se folosește numitor comun", "Împărțirea la o fracție înseamnă înmulțirea cu inversa", "Ecuațiile cu fracții se verifică prin înlocuire"], mistakes:["Adunarea numărătorilor și numitorilor separat", "Împărțirea fără inversarea celei de-a doua fracții", "Pierderea semnului minus"], problem:examplesByType.rational[2], exercises:commonExercises.rational},
  "cap5-recap": {summary:"Recapitularea reunește unghiurile, paralelismul, perpendicularitatea, mediatoarea, simetria și cercul.", keys:["Complementare: suma 90°", "Suplementare: suma 180°", "Unghiurile opuse la vârf sunt egale", "Distanța de la punct la dreaptă se măsoară pe perpendiculară", "Diametrul este dublul razei"], mistakes:["Confundarea unghiurilor complementare cu cele suplementare", "Măsurarea oblică a distanței punct-dreaptă", "Numirea greșită a unghiurilor la drepte paralele"], problem:examplesByType.geometry[2], exercises:commonExercises.geometry},
  "cap6-recap": {summary:"Recapitularea consolidează triunghiul: clasificare, linii importante, congruență, triunghi isoscel/echilateral și Pitagora.", keys:["Suma unghiurilor unui triunghi este 180°", "Perimetrul este suma laturilor", "În triunghi isoscel, unghiurile de la bază sunt egale", "În triunghi echilateral, fiecare unghi are 60°", "Pitagora: $c^2=a^2+b^2$"], mistakes:["Folosirea teoremei lui Pitagora într-un triunghi care nu este dreptunghic", "Alegerea greșită a ipotenuzei", "Aplicarea cazului LUL când unghiul nu este cuprins între laturile date"], problem:examplesByType.triangle[2], exercises:commonExercises.triangle}
};

const chapter = (id, title) => ({ id, title, content: makeLesson(topicData[id]) });
const recapChapter = (id, title) => ({ id, title, content: makeRecap(recaps[id]) });

const matematica6Data = {
  title: "Matematică – Clasa a VI-a",
  subtitle: "Mulțimi, numere întregi și raționale, proporționalitate, geometrie",
  subject: "matematica",
  grade: 6,
  sections: [
    { id:"cap1-multimi-naturale", title:"1. MULȚIMI. MULȚIMEA NUMERELOR NATURALE", subtitle:"Mulțimi, relații, operații, divizibilitate în ℕ", icon:"🔢", chapters:[chapter("1.1.1-multimi","L1: Mulțimi. Mulțimea numerelor naturale"),chapter("1.1.2-relatii-multimi","L2: Relații între mulțimi"),chapter("1.2.1-operatii-multimi","L3: Reuniunea, intersecția și diferența mulțimilor"),chapter("1.2.2-aplicatii-multimi","L4: Aplicații - Operații cu mulțimi"),chapter("1.3.1-recapitulare-divizibilitate","L5: Recapitulare și completări. Divizibilitate"),chapter("1.3.2-descompunere-factori-primi","L6: Descompunerea numerelor în produs de factori primi"),chapter("1.3.3-cmmdc","L7: CMMDC. Numere prime între ele"),chapter("1.3.4-cmmmc","L8: CMMMC. Cel mai mic multiplu comun"),chapter("1.3.5-proprietati-divizibilitate","L9: Proprietăți ale divizibilității"),recapChapter("cap1-recap","Recapitulare și evaluare: Mulțimi și divizibilitate")]},
    { id:"cap2-rapoarte-proportii", title:"2. RAPOARTE. PROPORȚII", subtitle:"Rapoarte, proporții, procente, date și probabilități", icon:"📊", chapters:[chapter("2.1.1-rapoarte","L1: Rapoarte"),chapter("2.1.2-proportii","L2: Proporții"),chapter("2.1.3-sir-rapoarte","L3: Șir de rapoarte egale"),chapter("2.1.4-marimi-proportionale","L4: Mărimi direct proporționale și invers proporționale"),chapter("2.1.5-regula-trei","L5: Regula de trei simplă"),chapter("2.1.6-procente","L6: Procente și rapoarte în viața cotidiană"),chapter("2.2.1-reprezentare-date","L7: Reprezentarea datelor prin grafice"),chapter("2.2.2-probabilitati","L8: Probabilități"),recapChapter("cap2-recap","Recapitulare și evaluare: Rapoarte și proporții")]},
    { id:"cap3-numere-intregi", title:"3. MULȚIMEA NUMERELOR ÎNTREGI", subtitle:"Reprezentare, operații, ecuații și inecuații în ℤ", icon:"➖", chapters:[chapter("3.1.1-reprezentare-axa","L1: Mulțimea numerelor întregi și reprezentare pe axă"),chapter("3.1.2-modul","L2: Modulul unui număr întreg. Compararea și ordonarea"),chapter("3.2.1-adunare-scadere","L3: Adunarea și scăderea numerelor întregi"),chapter("3.2.2-inmultire","L4: Înmulțirea numerelor întregi"),chapter("3.2.3-impartire","L5: Împărțirea numerelor întregi"),chapter("3.2.4-puteri","L6: Puterea cu exponent natural a unui număr întreg"),chapter("3.2.5-calcule-combinate","L7: Calcule cu operații combinate"),chapter("3.3.1-ecuatii","L8: Ecuații în mulțimea numerelor întregi"),chapter("3.3.2-inecuatii","L9: Inecuații în mulțimea numerelor întregi"),chapter("3.3.3-probleme","L10: Probleme rezolvate cu ecuații/inecuații în ℤ"),chapter("3.3.4-ordinea-operatii","L11: Ordinea efectuării operațiilor și paranteze"),recapChapter("cap3-recap","Recapitulare și evaluare: Numere întregi")]},
    { id:"cap4-numere-rationale", title:"4. MULȚIMEA NUMERELOR RAȚIONALE", subtitle:"Reprezentare, comparare, operații și ecuații în ℚ", icon:"½", chapters:[chapter("4.1.1-numar-rational","L1: Număr rațional. Mulțimea numerelor raționale"),chapter("4.1.2-reprezentare-axa","L2: Reprezentarea numerelor raționale pe axă. Modul"),chapter("4.1.3-comparare","L3: Compararea și ordonarea numerelor raționale"),chapter("4.2.1-adunare-scadere","L4: Adunarea și scăderea numerelor raționale"),chapter("4.2.2-inmultire-impartire","L5: Înmulțirea și împărțirea numerelor raționale"),chapter("4.2.3-puteri","L6: Puteri cu exponent întreg. Reguli de calcul"),chapter("4.2.4-ordinea-operatii","L7: Ordinea efectuării operațiilor"),chapter("4.3.1-ecuatii-tipuri","L8: Ecuații în mulțimea numerelor raționale"),chapter("4.3.2-probleme","L9: Probleme rezolvate cu ecuații în ℚ"),recapChapter("cap4-recap","Recapitulare și evaluare: Numere raționale")]},
    { id:"cap5-notiuni-geometrice", title:"5. NOȚIUNI GEOMETRICE FUNDAMENTALE", subtitle:"Unghiuri, drepte, cerc și simetrie", icon:"📐", chapters:[chapter("5.1.1-unghiuri-recapitulare","L1: Recapitulare și completări. Unghiuri"),chapter("5.1.2-suplementare-complementare","L2: Unghiuri suplementare și complementare"),chapter("5.1.3-opuse-varf","L3: Unghiuri opuse la vârf. Unghiuri în jurul unui punct"),chapter("5.1.4-unghiuri-adiacente","L4: Unghiuri adiacente"),chapter("5.2.1-paralele-axioma","L5: Drepte paralele. Axioma paralelelor"),chapter("5.2.2-unghiuri-secanta","L6: Unghiuri formate de o secantă"),chapter("5.2.3-paralele-secanta-criterii","L7: Unghiuri cu drepte paralele. Criterii de paralelism"),chapter("5.2.4-aplicatii","L8: Aplicații practice în poligoane și corpuri"),chapter("5.3.1-perpendiculare","L9: Drepte perpendiculare. Distanță punct-dreaptă"),chapter("5.3.2-mediatoare","L10: Mediatoarea unui segment"),chapter("5.3.3-simetrie","L11: Simetrie față de o dreaptă"),chapter("5.4.1-cerc-elemente","L12: Cercul. Elemente în cerc"),chapter("5.4.2-unghi-centru","L13: Unghi la centru. Măsura unghiului la centru"),recapChapter("cap5-recap","Recapitulare și evaluare: Noțiuni geometrice")]},
    { id:"cap6-triunghiul", title:"6. TRIUNGHIUL", subtitle:"Clasificare, linii importante, congruență și Pitagora", icon:"△", chapters:[chapter("6.1.1-clasificare","L1: Triunghiul. Clasificare. Perimetru"),chapter("6.1.2-unghi-sum","L2: Suma unghiurilor într-un triunghi"),chapter("6.1.3-bisectoare","L3: Bisectoarea unui unghi. Mediană"),chapter("6.2.1-inaltime","L4: Înălțimea în triunghi. Ortocentru"),chapter("6.2.2-mediatoare-circumcentru","L5: Mediatoarele laturilor. Circumcentru"),chapter("6.2.3-centroizi","L6: Centroizi - recapitulare și localizare"),chapter("6.3.1-congruenta-lll","L7: Congruența triunghiurilor. Cazul LLL"),chapter("6.3.2-congruenta-lul-ulu","L8: Congruența triunghiurilor. Cazurile LUL și ULU"),chapter("6.3.3-dreptunghice-congruenta","L9: Congruența triunghiurilor dreptunghice"),chapter("6.4.1-isoscel","L10: Triunghiul isoscel. Proprietăți"),chapter("6.4.2-echilateral","L11: Triunghiul echilateral. Proprietăți"),chapter("6.4.3-pitagora","L12: Triunghiul dreptunghic. Teorema lui Pitagora"),recapChapter("cap6-recap","Recapitulare și evaluare: Triunghiul")]}
  ]
};
