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
    exercises: ["Calculați: $3\\cdot[5-(3-8)]$.", "Calculați: $-(4-6)^2+3$.", "Calculați: $-2\\{3-[2-(-3)^2]\\}$.", "Scrieți o expresie cu 3 tipuri de paranteze care are valoarea 10."]},

  // ── Cap.4 Numere raționale – topicuri complete ───────────────────────────
  "4.1.1-numar-rational": {type:"rational",
    learn: "Un număr rațional este orice număr care se poate scrie ca fracție $\\frac{a}{b}$ cu $a\\in\\mathbb{Z}$ și $b\\in\\mathbb{Z}^*$. Mulțimea $\\mathbb{Q}$ cuprinde $\\mathbb{Z}$.",
    terms: ["număr rațional: orice număr de forma $\\frac{a}{b}$, cu $a\\in\\mathbb{Z}$, $b\\ne0$", "fracție ireductibilă: $\\frac{a}{b}$ cu CMMDC$(a,b)=1$", "$\\mathbb{Q}$: mulțimea numerelor raționale; $\\mathbb{Z}\\subset\\mathbb{Q}$", "zecimale finite și periodice: reprezentări ale numerelor raționale"],
    properties: ["Orice număr întreg este rațional: $n=\\frac{n}{1}$.", "O fracție nu se schimbă la înmulțirea/împărțirea ambilor termeni cu același număr $\\ne0$.", "Fracție ireductibilă: ambii termeni se împart cu CMMDC.", "Zecimalele finite și periodice reprezintă numere raționale."],
    steps: ["Verifică: se poate scrie ca $\\frac{a}{b}$? → rațional.", "Simplifică fracția: împarte cu CMMDC$(a,b)$.", "Transformă în zecimal: împarte numărătorul la numitor.", "Compară cu $\\mathbb{Z}$: orice întreg este și rațional."],
    tips: ["$\\frac{6}{4}=\\frac{3}{2}$ (fracții egale – împărțire la 2).", "Orice întreg $n$ se scrie ca fracție: $\\frac{n}{1}$.", "Fracțiile cu numitor 0 sunt NEDEFINITE."],
    examples: [{label:"verificare rațional",given:"$\\frac{7}{3}$, $-5$, $\\sqrt{2}$",ask:"Care sunt raționale?",solve:"$\\frac{7}{3}\\in\\mathbb{Q}$ ✓; $-5=\\frac{-5}{1}\\in\\mathbb{Q}$ ✓; $\\sqrt{2}$ nu se poate scrie ca fracție → irațional.",answer:"$\\frac{7}{3}$ și $-5$ sunt raționale"},{label:"fracție ireductibilă",given:"$\\frac{36}{48}$",ask:"Forma ireductibilă",solve:"CMMDC$(36,48)=12$. $\\frac{36}{48}=\\frac{3}{4}$.",answer:"$\\frac{3}{4}$"},{label:"tip examen",given:"$\\frac{15}{25}$",ask:"Scrieți ca fracție ireductibilă și ca zecimal",solve:"CMMDC$(15,25)=5$: $\\frac{3}{5}=0{,}6$.",answer:"$\\frac{3}{5}=0{,}6$"}],
    exercises: ["Simplificați: $\\frac{24}{36}$, $\\frac{48}{60}$, $\\frac{45}{75}$.", "Scrieți 3 fracții egale cu $\\frac{2}{5}$.", "Este $\\sqrt{4}$ număr rațional? Dar $\\sqrt{5}$? Justificați.", "Scrieți $1{,}25$ ca fracție ireductibilă."]},

  "4.1.2-reprezentare-axa": {type:"rational",
    learn: "Numerele raționale se reprezintă pe axă prin împărțirea segmentului unitate. $|x|$ este distanța de la $x$ la 0; numerele opuse sunt simetrice față de 0.",
    terms: ["reprezentare pe axă: împărțirea segmentului unitate în $b$ părți egale pentru $\\frac{a}{b}$", "$|x|$: modulul numărului rațional $x$; distanța de la $x$ la 0", "numere opuse: $x$ și $-x$ (simetrice față de 0)", "numere raționale între două întregi: ex. $\\frac{3}{4}$ este între 0 și 1"],
    properties: ["Orice număr rațional are un loc unic pe axă.", "Numerele opuse sunt la aceeași distanță de 0: $|x|=|-x|$.", "Pe axă, numerele cresc de la stânga la dreapta.", "Dacă $\\frac{a}{b}>0$: la dreapta lui 0; dacă $\\frac{a}{b}<0$: la stânga."],
    steps: ["Identifică semnul fracției: pozitiv → dreapta; negativ → stânga.", "Împarte segmentul unitate în $b$ părți egale.", "Numără $a$ diviziuni de la 0.", "Marchează punctul și verifică."],
    tips: ["$\\frac{3}{4}$ este la $\\frac{3}{4}$ din distanța de la 0 la 1.", "Numărul opus se obține prin reflecție față de 0.", "$|{-\\frac{2}{3}}|=\\frac{2}{3}$: modulul ignoră semnul."],
    examples: [{label:"reprezentare",given:"$\\frac{2}{5}$ pe axă",ask:"Poziția pe axă",solve:"Împărțim segmentul $[0,1]$ în 5 părți egale. Numărăm 2 diviziuni de la 0 → punctul $\\frac{2}{5}$.",answer:"Al doilea marcaj din 5 de la 0"},{label:"modul",given:"$x=-\\frac{3}{4}$",ask:"$|x|$ și opusul lui $x$",solve:"$|-\\frac{3}{4}|=\\frac{3}{4}$. Opusul: $-(-\\frac{3}{4})=\\frac{3}{4}$.",answer:"$|x|=\\frac{3}{4}$; opusul este $\\frac{3}{4}$"},{label:"tip examen",given:"$-\\frac{5}{3}$ pe axă",ask:"Locul față de $-1$ și $-2$",solve:"$-\\frac{5}{3}\\approx-1{,}67$, deci se află între $-2$ și $-1$, mai aproape de $-2$.",answer:"Între $-2$ și $-1$"}],
    exercises: ["Reprezentați pe axă: $\\frac{1}{3}$, $-\\frac{3}{2}$, $\\frac{5}{4}$.", "Calculați $|{-\\frac{7}{5}}|$ și opusul său.", "Ordonați crescător: $-\\frac{2}{3}$, $\\frac{1}{4}$, $-\\frac{1}{2}$, $0$, $\\frac{3}{4}$.", "Găsiți 3 numere raționale între $\\frac{1}{3}$ și $\\frac{1}{2}$."]},

  "4.1.3-comparare": {type:"rational",
    learn: "Compararea numerelor raționale: fracții cu același numitor → comparăm numărătorii; numitori diferiți → aducem la numitor comun sau folosim produsul încrucișat.",
    terms: ["numitor comun: CMMMC al numitorilor; permite compararea directă", "produs încrucișat: $\\frac{a}{b}\\lessgtr\\frac{c}{d}$ ⟺ $a\\cdot d\\lessgtr b\\cdot c$ (pentru $b,d>0$)", "ordine: $-\\frac{a}{b}<0<\\frac{c}{d}$ pentru $a,b,c,d>0$", "simplificiare înainte de comparare: reduce fracțiile la forma ireductibilă"],
    properties: ["Același numitor: $\\frac{a}{n}\\lessgtr\\frac{b}{n}$ ⟺ $a\\lessgtr b$.", "Produsul încrucișat (numitori pozitivi): $\\frac{a}{b}<\\frac{c}{d}$ ⟺ $a\\cdot d<b\\cdot c$.", "Orice număr negativ < 0 < orice număr pozitiv.", "La comparare, atenție la semnul numitorului!"],
    steps: ["Dacă numitorii sunt egali: compară numărătorii.", "Dacă nu: calculează CMMMC sau folosește produsul încrucișat.", "Produsul încrucișat: $\\frac{a}{b}$ vs. $\\frac{c}{d}$ → compară $a\\cdot d$ cu $b\\cdot c$.", "Precizează semnul: $<$, $>$ sau $=$."],
    tips: ["La numitori diferiți: transformă la același numitor SAU folosești încrucișarea.", "Atenție: dacă numitorii au semne diferite, inversează sensul la încrucișare.", "Fracțiile negative: $-\\frac{3}{4}<-\\frac{1}{4}$ (modulul mai mare → negativ mai mic)."],
    examples: [{label:"același numitor",given:"$\\frac{3}{7}$ și $\\frac{5}{7}$",ask:"Comparare",solve:"Numitori egali: $3<5$ → $\\frac{3}{7}<\\frac{5}{7}$.",answer:"$\\frac{3}{7}<\\frac{5}{7}$"},{label:"numitori diferiți",given:"$\\frac{3}{4}$ și $\\frac{5}{6}$",ask:"Comparare",solve:"Numitor comun 12: $\\frac{9}{12}$ și $\\frac{10}{12}$. $9<10$ → $\\frac{3}{4}<\\frac{5}{6}$.",answer:"$\\frac{3}{4}<\\frac{5}{6}$"},{label:"tip examen",given:"Ordonați crescător: $-\\frac{2}{3}$, $\\frac{1}{2}$, $-\\frac{1}{4}$, $\\frac{3}{5}$",ask:"Ordine crescătoare",solve:"Negative: $-\\frac{2}{3}\\approx-0{,}67<-\\frac{1}{4}=-0{,}25$. Pozitive: $\\frac{1}{2}<\\frac{3}{5}$.",answer:"$-\\frac{2}{3}<-\\frac{1}{4}<\\frac{1}{2}<\\frac{3}{5}$"}],
    exercises: ["Comparați: $\\frac{4}{9}$ și $\\frac{5}{11}$.", "Ordonați crescător: $\\frac{2}{3}$, $\\frac{3}{4}$, $\\frac{5}{8}$, $\\frac{7}{12}$.", "Comparați: $-\\frac{5}{6}$ și $-\\frac{7}{9}$.", "Găsiți 2 fracții între $\\frac{1}{3}$ și $\\frac{1}{2}$."]},

  "4.2.1-adunare-scadere": {type:"rational",
    learn: "Adunarea și scăderea fracțiilor cu numitori diferiți se face prin aducerea la numitor comun (CMMMC). Scăderea devine adunarea fracției opuse.",
    terms: ["numitor comun: CMMMC al numitorilor fracțiilor", "amplificare: înmulțim numărătorul și numitorul cu același număr $\\ne0$", "fracție opusă: $-\\frac{a}{b}=\\frac{-a}{b}$", "$\\frac{a}{b}-\\frac{c}{d}=\\frac{a}{b}+(-\\frac{c}{d})$"],
    properties: ["La adunare/scădere: aducem la același numitor (CMMMC).", "$\\frac{a}{n}+\\frac{b}{n}=\\frac{a+b}{n}$ (numitori egali).", "$\\frac{a}{b}-\\frac{c}{d}=\\frac{a\\cdot d-c\\cdot b}{b\\cdot d}$ (numitori diferiți, neoptimal).", "Simplificăm rezultatul la forma ireductibilă."],
    steps: ["Calculează CMMMC al numitorilor.", "Amplifică fiecare fracție pentru a obține numitorul comun.", "Adună/scade numărătorii; numitorul rămâne.", "Simplifică rezultatul."],
    tips: ["CMMMC dă cel mai mic numitor comun → calcule mai mici.", "Verificare: $\\frac{a}{b}+\\frac{c}{d}-\\frac{c}{d}=\\frac{a}{b}$ (scade ce ai adunat).", "Fracțiile negative: $-\\frac{3}{4}+\\frac{1}{2}=-\\frac{3}{4}+\\frac{2}{4}=-\\frac{1}{4}$."],
    examples: [{label:"numitori egali",given:"$\\frac{5}{8}-\\frac{3}{8}$",ask:"Diferența",solve:"Numitorii sunt egali: $\\frac{5-3}{8}=\\frac{2}{8}=\\frac{1}{4}$.",answer:"$\\frac{1}{4}$"},{label:"numitori diferiți",given:"$\\frac{2}{3}+\\frac{3}{4}$",ask:"Suma",solve:"CMMMC$(3,4)=12$: $\\frac{8}{12}+\\frac{9}{12}=\\frac{17}{12}$.",answer:"$\\frac{17}{12}$"},{label:"tip examen",given:"$\\frac{5}{6}-\\frac{1}{4}+\\frac{1}{3}$",ask:"Valoarea",solve:"CMMMC$(6,4,3)=12$: $\\frac{10}{12}-\\frac{3}{12}+\\frac{4}{12}=\\frac{11}{12}$.",answer:"$\\frac{11}{12}$"}],
    exercises: ["Calculați: $\\frac{3}{5}+\\frac{1}{5}$; $\\frac{7}{8}-\\frac{3}{8}$.", "Calculați: $\\frac{2}{3}+\\frac{1}{4}$; $\\frac{5}{6}-\\frac{1}{3}$.", "Calculați: $\\frac{3}{4}-\\frac{1}{6}+\\frac{1}{12}$.", "Un recipient conține $\\frac{3}{5}$ litri; se toarnă $\\frac{1}{4}$ litri. Cât a rămas?"]},

  "4.2.2-inmultire-impartire": {type:"rational",
    learn: "Înmulțirea fracțiilor: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{a\\cdot c}{b\\cdot d}$. Împărțirea: se înmulțește cu inversa fracției de la numitor: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$.",
    terms: ["înmulțire fracții: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{ac}{bd}$", "inversul (reciproca) lui $\\frac{a}{b}$: $\\frac{b}{a}$ (cu $a\\ne0$)", "împărțire: $\\frac{a}{b}:\\frac{c}{d}=\\frac{a}{b}\\cdot\\frac{d}{c}$ (înmulțire cu inversa)", "simplificare înainte de înmulțire: reduce numărătorii cu numitorii"],
    properties: ["La înmulțire: înmulțești numărătorii și numitorii separat.", "La împărțire: înmulțești cu inversa (răstorni a doua fracție).", "Inversul lui $\\frac{a}{b}$ este $\\frac{b}{a}$ (cu $a\\ne0$).", "Simplificarea în cruce înainte de înmulțire reduce calculele."],
    steps: ["Înmulțire: $\\frac{a}{b}\\cdot\\frac{c}{d}=\\frac{a\\cdot c}{b\\cdot d}$.", "Împărțire: răstoarnă a doua fracție și înmulțești.", "Simplifică în cruce înainte de calcul.", "Simplifică rezultatul final."],
    tips: ["La împărțire: PRIMA fracție rămâne, a DOUA se răstoarnă.", "Simplificarea în cruce: un numărător cu numitorul celeilalte fracții.", "$\\frac{a}{b}\\cdot\\frac{b}{a}=1$ (inversele se anulează)."],
    examples: [{label:"înmulțire",given:"$\\frac{3}{4}\\cdot\\frac{8}{9}$",ask:"Produsul",solve:"Simplificăm în cruce: $3$ și $9$ → $1$ și $3$; $8$ și $4$ → $2$ și $1$. $\\frac{1\\cdot2}{1\\cdot3}=\\frac{2}{3}$.",answer:"$\\frac{2}{3}$"},{label:"împărțire",given:"$\\frac{5}{6}:\\frac{10}{9}$",ask:"Câtul",solve:"$\\frac{5}{6}\\cdot\\frac{9}{10}$. Simplificăm: $5$ cu $10$→$\\frac{1}{2}$; $9$ cu $6$→$\\frac{3}{2}$. $\\frac{1\\cdot3}{2\\cdot2}=\\frac{3}{4}$.",answer:"$\\frac{3}{4}$"},{label:"tip examen",given:"$\\frac{7}{12}:\\frac{7}{4}$",ask:"Câtul",solve:"$\\frac{7}{12}\\cdot\\frac{4}{7}=\\frac{4}{12}=\\frac{1}{3}$.",answer:"$\\frac{1}{3}$"}],
    exercises: ["Calculați: $\\frac{2}{3}\\cdot\\frac{9}{4}$; $\\frac{5}{8}\\cdot\\frac{4}{15}$.", "Calculați: $\\frac{3}{4}:\\frac{9}{8}$; $\\frac{7}{10}:\\frac{7}{5}$.", "Simplificați în cruce: $\\frac{6}{7}\\cdot\\frac{14}{9}$.", "De câte ori încape $\\frac{2}{5}$ în $\\frac{4}{3}$?"]},

  "4.2.3-puteri": {type:"rational",
    learn: "Puterile cu exponent întreg: $\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$; $\\left(\\frac{a}{b}\\right)^{-n}=\\left(\\frac{b}{a}\\right)^n$. Regulile de calcul: $x^m\\cdot x^n=x^{m+n}$.",
    terms: ["putere cu exponent natural: $\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$", "putere cu exponent negativ: $\\left(\\frac{a}{b}\\right)^{-n}=\\left(\\frac{b}{a}\\right)^n$", "$x^0=1$ pentru $x\\ne0$; $x^1=x$", "regulă: $x^m\\cdot x^n=x^{m+n}$; $(x^m)^n=x^{m\\cdot n}$"],
    properties: ["$\\left(\\frac{a}{b}\\right)^n=\\frac{a^n}{b^n}$: ridici separat numărătorul și numitorul.", "$x^{-n}=\\frac{1}{x^n}$ pentru $x\\ne0$.", "$x^m\\cdot x^n=x^{m+n}$; $\\frac{x^m}{x^n}=x^{m-n}$.", "$(x\\cdot y)^n=x^n\\cdot y^n$."],
    steps: ["Dacă exponentul este pozitiv: ridici numărătorul și numitorul la acea putere.", "Dacă exponentul este negativ: inversi fracția, apoi ridici la puterea pozitivă.", "Simplifică rezultatul.", "Aplică regulile produsului/câtului de puteri dacă e cazul."],
    tips: ["$\\left(\\frac{2}{3}\\right)^{-2}=\\left(\\frac{3}{2}\\right)^2=\\frac{9}{4}$: inversezi și ridici la putere.", "$\\frac{x^5}{x^3}=x^{5-3}=x^2$: scazi exponenții la împărțire.", "Orice fracție la puterea 0 este 1 (dacă fracția $\\ne0$)."],
    examples: [{label:"exponent pozitiv",given:"$\\left(\\frac{2}{3}\\right)^3$",ask:"Valoarea",solve:"$\\frac{2^3}{3^3}=\\frac{8}{27}$.",answer:"$\\frac{8}{27}$"},{label:"exponent negativ",given:"$\\left(\\frac{3}{4}\\right)^{-2}$",ask:"Valoarea",solve:"Inversezi: $\\left(\\frac{4}{3}\\right)^2=\\frac{16}{9}$.",answer:"$\\frac{16}{9}$"},{label:"tip examen",given:"$\\left(\\frac{1}{2}\\right)^3\\cdot2^3$",ask:"Valoarea",solve:"$\\frac{1^3}{2^3}\\cdot2^3=\\frac{1}{8}\\cdot8=1$.",answer:"$1$"}],
    exercises: ["Calculați: $\\left(\\frac{3}{5}\\right)^2$; $\\left(\\frac{2}{3}\\right)^4$.", "Calculați: $\\left(\\frac{1}{3}\\right)^{-3}$; $\\left(\\frac{5}{2}\\right)^{-2}$.", "Simplificați: $\\frac{\\left(\\frac{2}{3}\\right)^5}{\\left(\\frac{2}{3}\\right)^3}$.", "Calculați $\\left(\\frac{1}{2}\\right)^{10}$."]},

  "4.2.4-ordinea-operatii": {type:"rational",
    learn: "Ordinea operațiilor cu numere raționale: paranteze → puteri → înmulțiri/împărțiri → adunări/scăderi. Regulile sunt identice cu cele din $\\mathbb{Z}$.",
    terms: ["ordine completă: paranteze → puteri → $\\cdot\\div$ → $+\\,-$", "simplificare intermediară: simplifică după fiecare pas", "fracție compusă: fracție al cărei numărător sau numitor conține fracții", "expresie mixtă: numere întregi și fracții combinate"],
    properties: ["Parantezele: din interior spre exterior.", "Puterile: înaintea produselor.", "Produse și câturi: de la stânga la dreapta.", "Sume și diferențe: ultimele, de la stânga la dreapta."],
    steps: ["Rezolvă parantezele de la interior la exterior.", "Calculează puterile.", "Efectuează înmulțirile și împărțirile.", "Efectuează adunările și scăderile. Simplifică la final."],
    tips: ["Simplifică fracțiile intermediare – evită numere mari.", "La fracții compuse: tratează numărătorul și numitorul ca expresii separate.", "Verifică: înlocuiește valoarea calculată în expresie și recalculează un pas."],
    examples: [{label:"expresie cu fracții",given:"$\\frac{1}{2}+\\frac{3}{4}\\cdot2$",ask:"Valoarea",solve:"Produs: $\\frac{3}{4}\\cdot2=\\frac{6}{4}=\\frac{3}{2}$. Adunare: $\\frac{1}{2}+\\frac{3}{2}=\\frac{4}{2}=2$.",answer:"$2$"},{label:"cu paranteze",given:"$\\left(\\frac{2}{3}+\\frac{1}{6}\\right)\\cdot3$",ask:"Valoarea",solve:"Paranteze: $\\frac{4}{6}+\\frac{1}{6}=\\frac{5}{6}$. Produs: $\\frac{5}{6}\\cdot3=\\frac{15}{6}=\\frac{5}{2}$.",answer:"$\\frac{5}{2}$"},{label:"tip examen",given:"$\\frac{3}{4}:\\frac{3}{8}-\\left(\\frac{1}{2}\\right)^2$",ask:"Valoarea",solve:"Împărțire: $\\frac{3}{4}\\cdot\\frac{8}{3}=2$. Putere: $\\left(\\frac{1}{2}\\right)^2=\\frac{1}{4}$. Scădere: $2-\\frac{1}{4}=\\frac{7}{4}$.",answer:"$\\frac{7}{4}$"}],
    exercises: ["Calculați: $\\frac{2}{3}\\cdot\\frac{3}{4}+\\frac{1}{6}$.", "Calculați: $\\left(\\frac{1}{3}+\\frac{1}{6}\\right)\\cdot4-\\frac{1}{2}$.", "Calculați: $\\frac{5}{6}:\\frac{5}{12}-\\frac{3}{4}$.", "Calculați: $\\left(\\frac{2}{3}\\right)^2+\\frac{1}{3}\\cdot\\frac{3}{2}$."]},

  "4.3.1-ecuatii-tipuri": {type:"rational",
    learn: "Ecuațiile cu numere raționale se rezolvă izolând necunoscuta $x$. O metodă eficientă: înmulțim toți membrii cu CMMMC al numitorilor pentru a elimina fracțiile.",
    terms: ["ecuație cu fracții: ecuație al cărei coeficienți sau termeni liberi sunt fracții", "CMMMC al numitorilor: folosit pentru a elimina fracțiile din ecuație", "soluție: valoarea lui $x$ care satisface ecuația", "verificare: înlocuieste $x$ și controlează egalitatea"],
    properties: ["Metoda CMMMC: înmulțim toți termenii cu CMMMC → ecuație fără fracții.", "Operațiile echivalente păstrează egalitatea: adunare, scădere, înmulțire/împărțire cu $\\ne0$.", "Soluția poate fi fracție sau număr întreg.", "Verificarea prin înlocuire este obligatorie."],
    steps: ["Calculează CMMMC al numitorilor din ecuație.", "Înmulțește toți termenii cu CMMMC.", "Rezolvă ecuația obținută (fără fracții).", "Verifică soluția prin înlocuire."],
    tips: ["Înmulțind cu CMMMC, fiecare fracție se simplifică → dispărare denominatorii.", "Dacă soluția este fracție, simplic-o la forma ireductibilă.", "Verificarea: înlocuieste în ecuația originală (cu fracțiile)."],
    examples: [{label:"ecuație simplă",given:"$\\frac{x}{3}+\\frac{1}{2}=\\frac{5}{6}$",ask:"Găsiți $x$",solve:"CMMMC$(3,2,6)=6$. Înmulțim: $2x+3=5$. $2x=2\\Rightarrow x=1$. Verificare: $\\frac{1}{3}+\\frac{1}{2}=\\frac{5}{6}$ ✓.",answer:"$x=1$"},{label:"coeficient fracționar",given:"$\\frac{2x}{5}=\\frac{4}{3}$",ask:"Găsiți $x$",solve:"$2x=\\frac{4}{3}\\cdot5=\\frac{20}{3}\\Rightarrow x=\\frac{10}{3}$.",answer:"$x=\\frac{10}{3}$"},{label:"tip examen",given:"$\\frac{x-1}{4}-\\frac{x+1}{6}=\\frac{1}{2}$",ask:"Găsiți $x$",solve:"CMMMC=12: $3(x-1)-2(x+1)=6$. $3x-3-2x-2=6$. $x=11$.",answer:"$x=11$"}],
    exercises: ["Rezolvați: $\\frac{x}{4}+\\frac{1}{2}=\\frac{3}{4}$.", "Rezolvați: $\\frac{3x}{5}=\\frac{9}{10}$.", "Rezolvați: $\\frac{x+2}{3}-\\frac{x-1}{6}=1$.", "Rezolvați: $\\frac{2x-1}{4}+\\frac{x}{3}=\\frac{5}{6}$."]},

  "4.3.2-probleme": {type:"rational",
    learn: "Problemele cu fracții se rezolvă scriind ecuații care modelează relațiile din enunț. Cheia: definim necunoscuta, scriem ecuația, rezolvăm și verificăm în context.",
    terms: ["model matematic: ecuația care descrie problema", "parte din întreg: $\\frac{p}{q}\\cdot A$", "necunoscuta $x$: valoarea căutată (poate fi o cantitate sau o fracție)", "verificare contextuală: soluția trebuie să aibă sens în problemă"],
    properties: ["«$\\frac{p}{q}$ din $A$» înseamnă $\\frac{p}{q}\\cdot A$.", "«$x$ din $A$ este $B$»: $x=\\frac{B}{A}\\cdot A$... sau $x\\cdot A=B$.", "La probleme cu prețuri, mase, distanțe: unitatea contează.", "Verifică că soluția satisface condițiile enunțului."],
    steps: ["Notează necunoscuta: «Fie $x$ = ...».", "Scrie ecuația din relațiile enunțate.", "Rezolvă ecuația (eventual cu metoda CMMMC).", "Verifică și redactează răspunsul complet."],
    tips: ["«O treime din $x$» = $\\frac{1}{3}x$.", "«$x$ este cu $\\frac{1}{4}$ mai mult decât $y$» → $x=y+\\frac{1}{4}y=\\frac{5}{4}y$.", "Verificarea în context poate elimina soluții negative sau imposibile."],
    examples: [{label:"parte din total",given:"$\\frac{3}{5}$ din suma a două numere este 18. Suma este?",ask:"Suma celor două numere",solve:"$\\frac{3}{5}\\cdot S=18\\Rightarrow S=18\\cdot\\frac{5}{3}=30$.",answer:"Suma este 30"},{label:"probleme cu prețuri",given:"Un obiect costă $\\frac{2}{3}$ din prețul inițial după o reducere. Prețul redus: 40 lei.",ask:"Prețul inițial",solve:"$\\frac{2}{3}\\cdot P=40\\Rightarrow P=40\\cdot\\frac{3}{2}=60$ lei.",answer:"Prețul inițial este 60 lei"},{label:"tip examen",given:"Un rezervor plin se goleste $\\frac{1}{3}$ și se umple $\\frac{1}{4}$. Ce fracție din rezervor este plină?",ask:"Fracția rămasă",solve:"$1-\\frac{1}{3}+\\frac{1}{4}=\\frac{12-4+3}{12}=\\frac{11}{12}$.",answer:"$\\frac{11}{12}$ din rezervor"}],
    exercises: ["$\\frac{2}{3}$ din un număr este 14. Găsiți numărul.", "Un tren parcurge $\\frac{3}{5}$ din traseu: 180 km. Cât este traseul total?", "Un elev citeste $\\frac{1}{4}$ dintr-o carte luni și $\\frac{1}{3}$ marți. Ce fracție a mai rămas?", "Prețul creste cu $\\frac{1}{5}$ față de 60 lei. Noul preț?"]}

,

  // ── Cap.5 Geometrie – topicuri complete ──────────────────────────────────
  "5.1.1-unghiuri-recapitulare": {type:"geometry",
    learn: "Un unghi este figura geometrică formată din două semidrepte cu același vârf. Clasificare după măsura în grade: ascuțit (<90°), drept (90°), obtuz (>90°), alungit (180°).",
    terms: ["unghi $\\angle AOB$: figura formată de semidreaptele OA și OB cu vârful O", "unghi ascuțit: $0°<\\alpha<90°$", "unghi drept: $\\alpha=90°$", "unghi obtuz: $90°<\\alpha<180°$", "unghi alungit: $\\alpha=180°$ (semidrepte opuse)"],
    properties: ["Unghiul drept = 90°; alungit = 180°; complet = 360°.", "Suma unghiurilor din jurul unui punct = 360°.", "Suma unghiurilor pe un unghi alungit = 180°.", "Un grad (°) = 60 minute ('); un minut = 60 secunde (\")."],
    steps: ["Identifică vârful și cele două laturi.", "Folosește raportatorul pentru măsurare.", "Clasifică: ascuțit (<90°), drept (=90°), obtuz (>90°), alungit (=180°).", "Compară cu valorile de referință 90° și 180°."],
    tips: ["90° = colț de caiet; 180° = linie dreaptă.", "Nu confunda ascuțit cu obtuz: ascuțit < 90° < obtuz.", "Unghiurile se măsoară față de normală, nu față de latură."],
    examples: [{label:"clasificare",given:"Unghiuri: 35°, 90°, 120°, 180°",ask:"Clasificați fiecare",solve:"35°→ascuțit; 90°→drept; 120°→obtuz; 180°→alungit.",answer:"35° ascuțit, 90° drept, 120° obtuz, 180° alungit"},{label:"calcul unghi",given:"$\\angle AOB=180°$; $\\angle AOC=65°$",ask:"$\\angle COB$",solve:"$\\angle COB=180°-65°=115°$.",answer:"$115°$"},{label:"tip examen",given:"Un unghi este de 3 ori complementul său",ask:"Unghiul",solve:"$\\alpha=3(90°-\\alpha)\\Rightarrow4\\alpha=270°\\Rightarrow\\alpha=67{,}5°$.",answer:"$67{,}5°$"}],
    exercises: ["Clasificați: 15°, 89°, 91°, 135°, 90°, 180°.", "Un unghi este triplu față de altul; suma lor este 160°. Găsiți ambele.", "Calculați $\\angle AOC$ dacă $\\angle AOB=55°$ și $\\angle BOC=35°$.", "Câte grade are unghiul format de limbile ceasului la ora 3?"]},

  "5.1.2-suplementare-complementare": {type:"geometry",
    learn: "Unghiurile complementare au suma 90°; suplementare — suma 180°. Dacă cunoaștem un unghi, calculăm celălalt prin scădere.",
    terms: ["unghiuri complementare: $\\alpha+\\beta=90°$", "unghiuri suplementare: $\\alpha+\\beta=180°$", "complementul lui $\\alpha$: $90°-\\alpha$", "suplementul lui $\\alpha$: $180°-\\alpha$"],
    properties: ["Complementare: suma = 90°; ambele sunt ascuțite.", "Suplementare: suma = 180°; cel puțin unul poate fi obtuz.", "Complementul unui unghi drept = 0° (degenerat).", "Suplementul unui unghi alungit = 0°."],
    steps: ["Complementar: $\\beta=90°-\\alpha$.", "Suplementar: $\\beta=180°-\\alpha$.", "Suma dată → scade unghiul cunoscut.", "Verifică: suma = 90° (complementare) sau 180° (suplementare)."],
    tips: ["Complementare → 90° → fiecare ascuțit.", "Suplementare → 180° → cel puțin unul ascuțit sau drept.", "Nu confunda 90° (complementare) cu 180° (suplementare)."],
    examples: [{label:"complementar",given:"$\\alpha=37°$",ask:"Complementul",solve:"$\\beta=90°-37°=53°$. Verificare: $37°+53°=90°$ ✓.",answer:"$53°$"},{label:"suplementar",given:"$\\alpha=124°$",ask:"Suplementul",solve:"$\\beta=180°-124°=56°$. Verificare: $124°+56°=180°$ ✓.",answer:"$56°$"},{label:"tip examen",given:"Un unghi este cu 20° mai mare decât suplementul său",ask:"Cele două unghiuri",solve:"$\\alpha=180°-\\alpha+20°\\Rightarrow2\\alpha=200°\\Rightarrow\\alpha=100°$. Suplementul: $80°$.",answer:"$100°$ și $80°$"}],
    exercises: ["Calculați complementul și suplementul lui: 25°, 45°, 60°, 80°.", "Un unghi și complementul său sunt în raportul $2:1$. Găsiți unghiurile.", "Un unghi este cu 30° mai mic decât suplementul său. Găsiți unghiul.", "Dacă un unghi este egal cu suplementul său, ce unghi este?"]},

  "5.1.3-opuse-varf": {type:"geometry",
    learn: "Două drepte secante formează 4 unghiuri. Unghiurile opuse la vârf sunt egale; unghiurile adiacente sunt suplementare (suma 180°).",
    terms: ["unghiuri opuse la vârf: nealăturate, formate de două drepte secante; sunt egale", "unghiuri adiacente la intersecție: alăturate; suma lor = 180°", "drepte secante: se intersectează într-un punct"],
    properties: ["Unghiurile opuse la vârf sunt egale: $\\angle 1=\\angle 3$, $\\angle 2=\\angle 4$.", "Unghiurile adiacente sunt suplementare: $\\angle 1+\\angle 2=180°$.", "Suma celor 4 unghiuri = 360°.", "Din 1 unghi cunoscut, calculezi celelalte 3."],
    steps: ["Identifică intersecția și cele 4 unghiuri.", "Opuse la vârf (nealăturate) → egale.", "Adiacente (alăturate) → suma 180°.", "Calculează celelalte unghiuri din cel cunoscut."],
    tips: ["Opuse la vârf = nealăturate (nu au latură comună).", "Din 1 unghi → calculezi toate celelalte 3.", "Suma celor 4 unghiuri = 360°: verificare."],
    examples: [{label:"calcul",given:"Drepte secante; $\\angle 1=65°$",ask:"Celelalte 3 unghiuri",solve:"$\\angle 3=65°$ (opuse). $\\angle 2=180°-65°=115°$ (adiacent). $\\angle 4=115°$.",answer:"$\\angle 3=65°$; $\\angle 2=\\angle 4=115°$"},{label:"ecuație",given:"$\\angle 1=3x-10°$ și $\\angle 3=2x+20°$ (opuse la vârf)",ask:"Unghiurile",solve:"Opuse → egale: $3x-10=2x+20\\Rightarrow x=30°$. $\\angle 1=\\angle 3=80°$.",answer:"$80°$ și $80°$"},{label:"tip examen",given:"$\\angle 1=2\\cdot\\angle 2$",ask:"Toate unghiurile",solve:"$\\angle 1+\\angle 2=180°\\Rightarrow2\\angle 2+\\angle 2=180°\\Rightarrow\\angle 2=60°$, $\\angle 1=120°$.",answer:"$120°$, $60°$, $120°$, $60°$"}],
    exercises: ["Drepte secante; $\\angle 1=48°$. Calculați celelalte 3 unghiuri.", "Dacă $\\angle 1=5x+10°$ și $\\angle 3=3x+30°$, găsiți $x$.", "Un unghi este de 3 ori adiacentul său. Calculați unghiurile.", "Verificați că suma celor 4 unghiuri = 360°."]},

  "5.1.4-unghiuri-adiacente": {type:"geometry",
    learn: "Unghiurile adiacente au vârf comun și o latură comună. Pe un unghi alungit, suma lor = 180°. Bisectoarea unui unghi îl împarte în două unghiuri egale.",
    terms: ["unghiuri adiacente: vârf comun + latură comună", "bisectoarea unui unghi: semidreapta ce împarte unghiul în 2 unghiuri egale", "proprietatea bisectoarei: $OM$ bisectoarea → $\\angle AOM=\\angle MOB=\\frac{\\angle AOB}{2}$"],
    properties: ["Adiacente pe unghi alungit: $\\alpha+\\beta=180°$.", "Bisectoarea: fiecare unghi = jumătate din unghiul inițial.", "Bisectoarea unui unghi de 90° face câte 45°.", "Suma unghiurilor adiacente care acoperă un unghi alungit = 180°."],
    steps: ["Verifică dacă unghiurile sunt adiacente (vârf + latură comune).", "Pe unghi alungit: suma = 180°.", "Bisectoarea: fiecare = jumătate.", "Calculează prin scădere sau înjumătățire."],
    tips: ["Bisectoarea → înjumătățire: $\\angle AOM=\\angle AOB/2$.", "Adiacente pe unghi alungit → suplementare.", "Nu confunda bisectoarea cu mediatoarea."],
    examples: [{label:"adiacente",given:"$\\angle AOB=180°$; $\\angle AOC=65°$",ask:"$\\angle COB$",solve:"$\\angle COB=180°-65°=115°$.",answer:"$115°$"},{label:"bisectoare",given:"$\\angle AOB=76°$; OM bisectoarea",ask:"$\\angle AOM$ și $\\angle MOB$",solve:"$\\angle AOM=\\angle MOB=76°/2=38°$.",answer:"$38°$ fiecare"},{label:"tip examen",given:"Bisectoarea lui $\\angle AOC$ face 30° cu OA",ask:"$\\angle COB$ dacă $\\angle AOB=180°$",solve:"$\\angle AOC=2\\times30°=60°$. $\\angle COB=180°-60°=120°$.",answer:"$\\angle COB=120°$"}],
    exercises: ["$\\angle AOB=180°$; $\\angle AOC=72°$. Calculați $\\angle COB$.", "Bisectoarea lui $\\angle AOB=110°$. Calculați $\\angle AOM$.", "Trei raze OA, OB, OC; $\\angle AOB=50°$, $\\angle BOC=70°$. Calculați $\\angle AOC$.", "Bisectoarele a două unghiuri suplementare adiacente fac între ele ce unghi?"]},

  "5.2.1-paralele-axioma": {type:"geometry",
    learn: "Două drepte sunt paralele dacă nu se intersectează. Axioma lui Euclid: printr-un punct exterior unei drepte trece exact o singură paralelă la acea dreaptă.",
    terms: ["drepte paralele: $a\\parallel b$; nu se intersectează niciodată", "distanța dintre paralele: constantă; = lungimea perpendicularei comune", "axioma paralelelor: printr-un punct exterior trece EXACT 1 paralelă la dreapta dată", "tranzitivitate: $a\\parallel b$ și $b\\parallel c$ → $a\\parallel c$"],
    properties: ["$a\\parallel b$ și $b\\parallel c$ → $a\\parallel c$.", "$a\\parallel b$ și $a\\perp c$ → $b\\perp c$.", "Distanța dintre două drepte paralele este constantă.", "Prin un punct exterior trece exact O singură paralelă la o dreaptă."],
    steps: ["Verifică dacă dreptele nu se intersectează.", "Aplică axioma: exact 1 paralelă printr-un punct exterior.", "Tranzitivitate: $a\\parallel b$, $b\\parallel c$ → $a\\parallel c$.", "Perpendicularele comune: $a\\perp c$, $b\\perp c$ → $a\\parallel b$."],
    tips: ["Axioma: EXACT 1 paralelă (nu mai multe, nu zero).", "Paralele → distanță constantă una față de alta.", "$a\\perp b$ și $a\\perp c$ → $b\\parallel c$."],
    examples: [{label:"axioma",given:"Dreapta $d$ și punctul $P\\notin d$",ask:"Câte paralele la $d$ trec prin $P$?",solve:"Axioma lui Euclid: exact O singură dreaptă.",answer:"Exact 1 dreaptă"},{label:"tranzitivitate",given:"$a\\parallel b$ și $b\\parallel c$",ask:"Relația dintre $a$ și $c$",solve:"Tranzitivitate: $a\\parallel c$.",answer:"$a\\parallel c$"},{label:"tip examen",given:"$a\\parallel b$; $a\\perp c$",ask:"Relația dintre $b$ și $c$",solve:"$a\\parallel b$, $a\\perp c$ → $b\\perp c$.",answer:"$b\\perp c$"}],
    exercises: ["Pot exista 2 paralele printr-un punct exterior la o dreaptă? Justificați.", "Dacă $a\\parallel b$ și $b\\parallel c$, ce relație există între $a$ și $c$?", "Dacă $a\\perp b$ și $a\\perp c$, ce relație există între $b$ și $c$?", "Câte perpendiculare se pot duce dintr-un punct pe o dreaptă?"]},

  "5.2.2-unghiuri-secanta": {type:"geometry",
    learn: "O secantă ce taie două drepte formează 8 unghiuri. La drepte paralele: corespondente = egale; alterne interne = egale; co-interne = suplementare (suma 180°).",
    terms: ["secantă: dreaptă ce taie alte două drepte", "corespondente: aceeași poziție față de secantă și drepte (ex: $\\angle 1$ și $\\angle 5$)", "alterne interne: de o parte și alta a secantei, între drepte (ex: $\\angle 3$ și $\\angle 6$)", "co-interne: aceeași parte a secantei, între drepte; suma = 180° (la paralele)"],
    properties: ["La drepte PARALELE: corespondente egale.", "La drepte PARALELE: alterne interne egale.", "La drepte PARALELE: alterne externe egale.", "La drepte PARALELE: co-interne suplementare (suma 180°)."],
    steps: ["Identifică secanta și cele 8 unghiuri.", "Localizează tipul de pereche cerut.", "Dacă paralele: aplică proprietatea (egal sau 180°).", "Calculează unghiul necunoscut."],
    tips: ["Corespondente = 'în același colț' față de secantă.", "Alterne interne = 'de-o parte și alta', ÎNTRE drepte.", "Co-interne = aceeași parte; suma = 180° la paralele."],
    examples: [{label:"corespondente",given:"$a\\parallel b$; $\\angle 1=65°$",ask:"$\\angle 5$ (corespondent)",solve:"Paralele → corespondente egale: $\\angle 5=65°$.",answer:"$\\angle 5=65°$"},{label:"alterne interne",given:"$a\\parallel b$; $\\angle 3=70°$",ask:"$\\angle 6$ (altern intern)",solve:"Alterne interne la paralele: $\\angle 6=70°$.",answer:"$\\angle 6=70°$"},{label:"tip examen",given:"$a\\parallel b$; co-intern $\\angle 4=110°$",ask:"Co-internul",solve:"$\\angle 5=180°-110°=70°$.",answer:"$\\angle 5=70°$"}],
    exercises: ["$a\\parallel b$; $\\angle 1=72°$. Calculați toate celelalte 7 unghiuri.", "Identificați alterne interne și corespondente dintr-un desen.", "Co-interne: $\\angle 3=55°$, calculați co-internul dacă $a\\parallel b$.", "Dacă $\\angle 1=\\angle 5$ (corespondente), ce putem concluziona?"]},

  "5.2.3-paralele-secanta-criterii": {type:"geometry",
    learn: "Criteriile de paralelism (reciprocele proprietăților): corespondente egale → paralele; alterne interne egale → paralele; co-interne suplementare → paralele.",
    terms: ["criteriu de paralelism: condiție suficientă pentru $a\\parallel b$", "corespondente egale → $a\\parallel b$", "alterne interne egale → $a\\parallel b$", "co-interne suplementare → $a\\parallel b$"],
    properties: ["Corespondente egale → $a\\parallel b$.", "Alterne interne egale → $a\\parallel b$.", "Alterne externe egale → $a\\parallel b$.", "Co-interne suplementare (suma = 180°) → $a\\parallel b$."],
    steps: ["Identifică tipul de unghiuri date.", "Verifică egalitatea sau suplementaritatea.", "Aplică criteriul corespunzător.", "Formulează concluzia: $a\\parallel b$ sau nu."],
    tips: ["Proprietate: $a\\parallel b$ → unghiuri egale.", "Criteriu (reciproca): unghiuri egale → $a\\parallel b$.", "Criteriile sunt RECIPROCELE proprietăților."],
    examples: [{label:"criteriu corespondente",given:"Corespondente: 50° și 50°",ask:"$a\\parallel b$?",solve:"Corespondente egale → $a\\parallel b$.",answer:"$a\\parallel b$"},{label:"criteriu alterne",given:"Alterne interne: $\\angle 3=65°$ și $\\angle 6=65°$",ask:"Concluzie",solve:"Alterne interne egale → $a\\parallel b$.",answer:"$a\\parallel b$"},{label:"tip examen",given:"Co-interne: $115°$ și $65°$",ask:"$a\\parallel b$?",solve:"$115°+65°=180°$ → co-interne suplementare → $a\\parallel b$.",answer:"$a\\parallel b$"}],
    exercises: ["Corespondente: 73° și 73°. Sunt dreptele paralele?", "Alterne interne: 85° și 95°. Sunt dreptele paralele?", "Co-interne: 110° și 70°. Sunt dreptele paralele? Justificați.", "Dacă $\\angle 1=3x-15°$ și $\\angle 5=2x+10°$ (corespondente), găsiți $x$."]},

  "5.2.4-aplicatii": {type:"geometry",
    learn: "Unghiurile și paralelele în configurații compuse. Strategia: adăugarea unei drepte auxiliare paralele permite rezolvarea problemelor complexe.",
    terms: ["dreaptă auxiliară paralelă: trasată în plus pentru a aplica proprietăți de paralelism", "configurație compusă: mai multe drepte și unghiuri combinate", "suma unghiurilor unui triunghi: 180° (proprietate derivată din paralelism)"],
    properties: ["O paralelă auxiliară poate transforma o configurație complexă în una cu proprietăți cunoscute.", "Suma unghiurilor unui triunghi = 180°.", "Unghiul exterior al triunghiului = suma unghiurilor neadiacente.", "Paralele → proprietăți aplicabile la orice configurație."],
    steps: ["Analizează configurația și identifică unghiurile necunoscute.", "Trasează o paralelă prin vârful sau punctul cheie.", "Aplică proprietățile unghiurilor cu paralele.", "Adună/scade unghiuri parțiale pentru a obține unghiul cerut."],
    tips: ["Auxiliara → descompune unghiuri mari în altele cu proprietăți cunoscute.", "Suma unghiurilor triunghiului = 180°: formulă derivată din paralelism.", "Verifică suma unghiurilor obținute."],
    examples: [{label:"paralelă auxiliară",given:"$a\\parallel b$; punct $C$ între drepte; $\\angle 1=40°$ față de $a$, $\\angle 2=30°$ față de $b$",ask:"$\\angle ACB$",solve:"Paralelă prin $C$: $\\angle 1'=40°$ (alterne cu $a$); $\\angle 2'=30°$ (alterne cu $b$). $\\angle ACB=70°$.",answer:"$70°$"},{label:"triunghi",given:"Două unghiuri ale triunghiului: $50°$ și $70°$",ask:"Al treilea unghi",solve:"$180°-50°-70°=60°$.",answer:"$60°$"},{label:"tip examen",given:"$a\\parallel b$; $\\angle 1=35°$ față de $a$; $\\angle 2=45°$ față de $b$; aceeași parte",ask:"Unghiul format la intersecție",solve:"$180°-35°-45°=100°$.",answer:"$100°$"}],
    exercises: ["$a\\parallel b$; $C$ între ele; unghiuri față de $a$: 55° și față de $b$: 65°. Calculați unghiul la $C$.", "Triunghi cu unghiuri în raportul $1:2:3$. Găsiți fiecare unghi.", "Suma unghiurilor exterioare ale unui triunghi. Calculați.", "Demonstrați că suma unghiurilor unui triunghi = 180° folosind paralelele."]},

  "5.3.1-perpendiculare": {type:"geometry",
    learn: "Două drepte sunt perpendiculare ($a\\perp b$) dacă se intersectează la 90°. Distanța de la un punct la o dreaptă = lungimea perpendicularei din acel punct pe dreaptă.",
    terms: ["drepte perpendiculare: $a\\perp b$; unghi de intersecție = 90°", "piciorul perpendicularei: punctul de intersecție $H$ al perpendicularei cu dreapta", "distanța de la punct la dreaptă: $d(P,d)=PH$ = lungimea perpendicularei; minim posibil", "unghi drept: 90°; marcat cu pătrat la vârf"],
    properties: ["Două perpendiculare formează 4 unghiuri de 90°.", "Distanța minimă de la un punct la o dreaptă = perpendiculara.", "Printr-un punct extern trece o singură perpendiculară pe o dreaptă.", "$a\\perp c$ și $b\\perp c$ → $a\\parallel b$."],
    steps: ["Identifică punctul $P$ și dreapta $d$.", "Trasează perpendiculara din $P$ pe $d$.", "Piciorul $H$ = intersecția perpendicularei cu $d$.", "Distanța $d(P,d) = PH$."],
    tips: ["Distanța se măsoară MEREU pe perpendiculară, nu oblic.", "$a\\perp b$ și $a\\perp c$ → $b\\parallel c$.", "Unghiul drept se marchează cu pătrat mic la vârf."],
    examples: [{label:"distanță",given:"$P$ la 5 cm de $d$ (perpendicular)",ask:"Distanța minimă de la $P$ la $d$",solve:"Distanța minimă = perpendiculara = 5 cm.",answer:"$5$ cm"},{label:"perpendiculare și paralele",given:"$a\\perp c$ și $b\\perp c$",ask:"Relația dintre $a$ și $b$",solve:"Ambele ⊥ pe $c$ → $a\\parallel b$.",answer:"$a\\parallel b$"},{label:"tip examen",given:"Punct $P(3,4)$ și axa $Ox$",ask:"Distanța de la $P$ la $Ox$",solve:"Piciorul perp.: $(3,0)$. Distanța = ordonata = 4.",answer:"$d=4$"}],
    exercises: ["Trasați perpendiculara dintr-un punct pe o dreaptă dată.", "Dacă $a\\perp b$ și $b\\perp c$, care este relația dintre $a$ și $c$?", "Câte perpendiculare se pot duce dintr-un punct pe o dreaptă?", "Calculați distanța de la $P(0,5)$ la axa $Ox$."]},

  "5.3.2-mediatoare": {type:"geometry",
    learn: "Mediatoarea segmentului $[AB]$ este dreapta perpendiculară pe $AB$ în mijlocul său. Proprietate: orice punct de pe mediatoare este egal depărtat de $A$ și $B$.",
    terms: ["mediatoarea lui $[AB]$: dreapta ⊥ $AB$ ce trece prin mijlocul $M$ al $[AB]$", "proprietate: $P$ pe mediatoare ⟺ $PA=PB$", "mijlocul $M$: $MA=MB=AB/2$", "reciproca: dacă $PA=PB$, atunci $P$ este pe mediatoare"],
    properties: ["Mediatoarea ⊥ $AB$ și trece prin mijlocul $M$.", "$P$ pe mediatoare ⟺ $PA=PB$.", "Reciproca: $PA=PB$ → $P$ pe mediatoare.", "Mediatoarea este axă de simetrie a segmentului."],
    steps: ["Găsește mijlocul $M$: la $AB/2$ față de $A$ și $B$.", "Trasează perpendiculara pe $AB$ în $M$.", "Orice punct pe această ⊥ este egal depărtat de $A$ și $B$.", "Verificare: $PA=PB$ pentru $P$ pe mediatoare."],
    tips: ["Mediatoarea = axă de simetrie a segmentului.", "$PA=PB$ → $P$ pe mediatoare (și reciproca).", "Nu confunda mediatoarea cu bisectoarea unghiului."],
    examples: [{label:"construcție",given:"$[AB]$ cu $AB=6$ cm",ask:"Unde se află mediatoarea?",solve:"Mijlocul $M$ la 3 cm de $A$ și $B$. Mediatoarea = perpendiculara pe $AB$ în $M$.",answer:"⊥ pe $AB$ în $M$ (la 3 cm de capete)"},{label:"proprietate",given:"$P$ pe mediatoarea lui $[AB]$",ask:"Relația $PA$ cu $PB$",solve:"Proprietate: $PA=PB$.",answer:"$PA=PB$"},{label:"tip examen",given:"$PA=PB=5$ cm; $AB=6$ cm",ask:"Distanța de la $P$ la $AB$",solve:"$PM\\perp AB$. Pitagora: $PM=\\sqrt{5^2-3^2}=\\sqrt{16}=4$ cm.",answer:"$PM=4$ cm"}],
    exercises: ["Construiți mediatoarea unui segment $[AB]$ cu $AB=8$ cm.", "Un punct $P$: $PA=5$ cm, $PB=5$ cm. Unde se află $P$?", "Dacă $PA=PB$ și $PA=7$ cm, $AB=10$ cm, calculați distanța de la $P$ la $AB$.", "De ce mediatoarea este axă de simetrie a segmentului?"]},

  "5.3.3-simetrie": {type:"geometry",
    learn: "Simetricul punctului $P$ față de axa $d$ este punctul $P'$ astfel încât $d$ este mediatoarea lui $[PP']$. Figurile simetrice au aceleași dimensiuni.",
    terms: ["axă de simetrie $d$: dreapta față de care se construiesc simetricele", "simetricul lui $P$ față de $d$: $P'$ cu $d\\perp PP'$ și $d$ bisectând $[PP']$", "figuri simetrice: aceleași dimensiuni, poziții oglindite", "axă de simetrie a unei figuri: figura se suprapune peste imaginea sa"],
    properties: ["Simetricul lui $P$ față de $d$: $P'$ la aceeași distanță de $d$, de cealaltă parte.", "Simetria păstrează lungimile și unghiurile.", "Simetricul unui segment față de $d$ are aceeași lungime.", "O figură are axă de simetrie dacă coincide cu simetricul ei."],
    steps: ["Identifică axa $d$.", "Pentru fiecare punct $P$: trage ⊥ pe $d$, ia $P'$ de cealaltă parte, la aceeași distanță.", "Unește simetricele punctelor.", "Verifică: $PP'\\perp d$; $d$ trece prin mijlocul $[PP']$."],
    tips: ["Simetricul față de o dreaptă = reflecție în oglindă.", "Distanța de la $P$ la $d$ = distanța de la $P'$ la $d$.", "Dreptele paralele cu $d$: simetricele lor față de $d$ sunt tot paralele."],
    examples: [{label:"simetricul unui punct",given:"$P$ la 3 cm de $d$",ask:"Unde se află $P'$?",solve:"$P'$ de cealaltă parte a $d$, tot la 3 cm. $d$ bisectează $[PP']$.",answer:"$P'$ la 3 cm de $d$, opus"},{label:"axă de simetrie",given:"Dreptunghi",ask:"Câte axe de simetrie are?",solve:"Dreptunghiul are 2 axe: mediatrele laturilor opuse.",answer:"2 axe de simetrie"},{label:"tip examen",given:"Simetricul segmentului $[AB]$ față de $d$",ask:"Ce lungime are $[A'B']$?",solve:"Simetria păstrează lungimile: $A'B'=AB$.",answer:"$A'B'=AB$"}],
    exercises: ["Construiți simetricul punctului $P$ față de dreapta $d$.", "Câte axe de simetrie: a) pătrat; b) cerc; c) dreptunghi?", "Simetricul unui segment de 4 cm. Ce lungime are?", "O figură coincide cu simetricul ei. Ce înseamnă asta despre axa de simetrie?"]},

  "5.4.1-cerc-elemente": {type:"geometry",
    learn: "Cercul de centru $O$ și raza $r$ = locul geometric al punctelor la distanța $r$ față de $O$. Diametrul $d=2r$; coarda unește 2 puncte de pe cerc.",
    terms: ["cerc $(O,r)$: locul geometric al punctelor la distanța $r$ de $O$", "raza $r$: segment de la $O$ la cerc", "diametrul $d=2r$: coarda maximă prin centru", "coarda: segment cu capetele pe cerc (nu neapărat prin $O$)", "arc de cerc: parte din cerc delimitată de 2 puncte"],
    properties: ["Diametrul = $2r$ (cel mai lung segment în disc).", "Orice diametru împarte cercul în 2 semicercuri egale.", "Coarda $\\leq$ diametrul.", "Centrul este egal depărtat de toate punctele cercului (distanța = $r$)."],
    steps: ["Identifică centrul $O$ și raza $r$.", "Diametrul: coardă prin $O$; $d=2r$.", "Verifică dacă un punct e pe cerc ($d=r$), interior ($d<r$) sau exterior ($d>r$).", "Calculează: raza, diametru, coardă după caz."],
    tips: ["Raza ≠ diametru: $d=2r$.", "Punct la $d=r$ → pe cerc; $d<r$ → interior; $d>r$ → exterior.", "Diametrul este cea mai lungă coardă."],
    examples: [{label:"calcul",given:"$r=5$ cm",ask:"Diametrul",solve:"$d=2\\times5=10$ cm.",answer:"$10$ cm"},{label:"poziție",given:"$P$ la 3 cm de centrul unui cerc cu $r=3$ cm",ask:"$P$ pe cerc, în interior sau exterior?",solve:"$d(P,O)=3=r$ → $P$ este pe cerc.",answer:"$P$ pe cerc"},{label:"tip examen",given:"Coardă $AB=8$ cm; $r=5$ cm",ask:"Distanța de la centru la coardă",solve:"Centrul proiectat pe coardă: $AB/2=4$. Pitagora: $d=\\sqrt{25-16}=3$ cm.",answer:"$d=3$ cm"}],
    exercises: ["$r=7$ cm. Calculați diametrul.", "Un punct la 4 cm de centrul unui cerc cu $r=4$ cm. Unde este?", "Coardă $AB=6$ cm; $r=5$ cm. Calculați distanța de la centru la coardă.", "Câte diametre are un cerc?"]},

  "5.4.2-unghi-centru": {type:"geometry",
    learn: "Unghiul la centru $\\angle AOB$ are vârful în centrul cercului. Proprietate: unghiul la centru (în grade) = măsura arcului corespunzător (în grade).",
    terms: ["unghi la centru: $\\angle AOB$ cu vârful în $O$ și laturile $OA$, $OB$ raze", "arc corespunzător: $\\overset{\\frown}{AB}$ delimitat de razele $OA$ și $OB$", "proprietate: $\\angle AOB = m(\\overset{\\frown}{AB})$ (grade)", "arc semicercular: 180° → corespunde unui diametru"],
    properties: ["Unghiul la centru = arcul corespunzător (în grade).", "Diametrul subântinde un arc de 180°.", "Suma arcelor unui cerc = 360°.", "Arce egale ↔ unghiuri la centru egale ↔ coarde egale."],
    steps: ["Identifică vârful $O$ (centrul) și laturile unghiului.", "Unghiul la centru (°) = arcul corespunzător (°).", "Arc complementar = $360°$ − arcul.", "Coarda mai mare ↔ unghi mai mare ↔ arc mai mare."],
    tips: ["Unghi la centru = arc: $\\angle AOB=60°$ → arcul $AB=60°$.", "Suma arcelor = 360°: verificare.", "Diametrul → unghi la centru = 180°."],
    examples: [{label:"arc din unghi",given:"$\\angle AOB=72°$",ask:"Arcul $\\overset{\\frown}{AB}$",solve:"$m(\\overset{\\frown}{AB})=72°$.",answer:"$72°$"},{label:"arc complementar",given:"$\\overset{\\frown}{AB}=110°$",ask:"Arcul complementar",solve:"$360°-110°=250°$.",answer:"$250°$"},{label:"tip examen",given:"$\\angle AOB=80°$; $\\angle BOC=100°$",ask:"$m(\\overset{\\frown}{AC})$ (cel mai scurt)",solve:"$\\angle AOC=360°-80°-100°=180°$. Arc $AC$ = $180°$.",answer:"$180°$"}],
    exercises: ["$\\angle AOB=90°$. Calculați arcul $\\overset{\\frown}{AB}$ și complementul.", "Arcul $\\overset{\\frown}{AB}=120°$. Calculați $\\angle AOB$.", "Arcele: $80°$, $120°$, $?$. Calculați al treilea arc.", "Câte grade are arcul subântins de un diametru?"]}


,

  // ── Cap.6 Triunghiul – topicuri complete ─────────────────────────────────
  "6.1.1-clasificare": {type:"triangle",
    learn: "Triunghiul este poligonul cu 3 laturi și 3 unghiuri. Se clasifică după laturi (scalene, isoscel, echilateral) și după unghiuri (ascuțitunghic, dreptunghic, obtuzunghic).",
    terms: ["triunghi $ABC$: poligon cu 3 vârfuri, 3 laturi și 3 unghiuri", "triunghi scalene: toate laturile diferite", "triunghi isoscel: cel puțin 2 laturi egale", "triunghi echilateral: toate laturile egale", "triunghi dreptunghic: are un unghi de 90°", "perimetrul $P$: suma laturilor $P=a+b+c$"],
    properties: ["Suma celor 3 laturi trebuie să fie mai mare decât laturile rămase (inegalitatea triunghiului).", "Perimetrul $P=a+b+c$.", "Triunghi echilateral: toți cei 3 unghiuri = 60°.", "Triunghi dreptunghic: are exact un unghi de 90°."],
    steps: ["Identifică dacă e isoscel (2 laturi egale), echilateral (3 egale) sau scalene.", "Verifică unghiurile: dacă un unghi = 90° → dreptunghic; > 90° → obtuzunghic; toate < 90° → ascuțitunghic.", "Calculează perimetrul: $P=a+b+c$.", "Verifică inegalitatea triunghiului: suma oricăror 2 laturi > a treia."],
    tips: ["Echilateral: 3 laturi egale → 3 unghiuri de 60°.", "Isoscel: 2 laturi egale → 2 unghiuri la bază egale.", "Dreptunghic: are 90°; catetele sunt laturile care formează dreptul."],
    examples: [{label:"clasificare",given:"Triunghi cu laturile 3, 4, 5 și unghiuri 37°, 53°, 90°",ask:"Tipul triunghiului",solve:"Are un unghi de 90° → dreptunghic. Toate laturile diferite → scalene. Deci: dreptunghic scalene.",answer:"Dreptunghic scalene"},{label:"perimetru",given:"Laturile: $a=5$ cm, $b=7$ cm, $c=9$ cm",ask:"Perimetrul",solve:"$P=5+7+9=21$ cm.",answer:"$P=21$ cm"},{label:"tip examen",given:"Triunghi isoscel cu baza $b=6$ cm și latura egală $l=10$ cm",ask:"Perimetrul",solve:"$P=6+10+10=26$ cm.",answer:"$P=26$ cm"}],
    exercises: ["Clasificați: laturi 5, 5, 8; laturi 6, 6, 6; unghiuri 30°, 60°, 90°.", "Calculați perimetrul unui triunghi cu laturile 7, 8, 12 cm.", "Poate exista un triunghi cu laturile 2, 3, 7? Justificați.", "Un triunghi isoscel are baza 4 cm și perimetrul 18 cm. Ce lungime au laturile egale?"]},

  "6.1.2-unghi-sum": {type:"triangle",
    learn: "Suma unghiurilor unui triunghi = 180°. Dacă cunoaștem 2 unghiuri, calculăm al treilea prin scădere: $\\angle C=180°-\\angle A-\\angle B$.",
    terms: ["suma unghiurilor triunghiului: $\\angle A+\\angle B+\\angle C=180°$", "unghi exterior al triunghiului: format de o latură și prelungirea alteia", "proprietate unghi exterior: = suma unghiurilor neadiacente: $\\angle ext=\\angle A+\\angle B$"],
    properties: ["$\\angle A+\\angle B+\\angle C=180°$ (suma unghiurilor).", "Unghi exterior: $\\angle BCD=\\angle A+\\angle B$ (suma unghiurilor neadiacente).", "Cel puțin 2 unghiuri trebuie să fie ascuțite.", "Triunghi echilateral: fiecare unghi = $180°/3=60°$."],
    steps: ["Scrie ecuația: $\\angle A+\\angle B+\\angle C=180°$.", "Înlocuiește unghiurile cunoscute.", "Calculează necunoscuta prin scădere.", "Verifică: suma = 180°."],
    tips: ["$\\angle C=180°-\\angle A-\\angle B$: formula directă.", "Unghi exterior > oricare unghi interior neadiacent.", "Triunghi cu un unghi obtuz: celelalte 2 sunt ascuțite."],
    examples: [{label:"al treilea unghi",given:"$\\angle A=50°$, $\\angle B=70°$",ask:"$\\angle C$",solve:"$\\angle C=180°-50°-70°=60°$.",answer:"$\\angle C=60°$"},{label:"raport",given:"Unghiurile în raportul $1:2:3$",ask:"Fiecare unghi",solve:"Suma = $1k+2k+3k=6k=180°\\Rightarrow k=30°$. Unghiurile: $30°$, $60°$, $90°$.",answer:"$30°$, $60°$, $90°$"},{label:"tip examen",given:"Unghi exterior $\\angle BCD=110°$; $\\angle A=45°$",ask:"$\\angle B$",solve:"$\\angle BCD=\\angle A+\\angle B\\Rightarrow110°=45°+\\angle B\\Rightarrow\\angle B=65°$.",answer:"$\\angle B=65°$"}],
    exercises: ["$\\angle A=40°$, $\\angle B=75°$. Calculați $\\angle C$.", "Unghiurile în raportul $2:3:4$. Găsiți fiecare unghi.", "Unghi exterior = 120°; un unghi neadiacent = 50°. Găsiți celălalt unghi neadiacent.", "Poate un triunghi să aibă două unghiuri obtuze? Justificați."]},

  "6.1.3-bisectoare": {type:"triangle",
    learn: "Bisectoarea unui unghi al triunghiului împarte unghiul în 2 unghiuri egale și intersectează latura opusă. Mediana uneste vârful cu mijlocul laturii opuse.",
    terms: ["bisectoarea unghiului $\\angle A$: semidreapta din $A$ ce bisectează $\\angle A$; împarte $BC$", "mediana din $A$: segment de la $A$ la mijlocul $M$ al $BC$", "centrul de greutate (centroid): intersecția medianerelor; $G$ împarte fiecare mediană în $2:1$", "proprietatea bisectoarei: $BD/DC=AB/AC$"],
    properties: ["Bisectoarea din $A$: $\\angle BAD=\\angle DAC=\\frac{\\angle A}{2}$.", "Mediana din $A$: uneste $A$ cu mijlocul $M$ al $BC$.", "Toate 3 bisectoarele se intersectează în centrul inscris.", "Toate 3 medioanele se intersectează în centrul de greutate $G$."],
    steps: ["Bisectoarea: din vârful unghiului, împarte unghiul în 2 egale.", "Mediana: de la vârf la mijlocul laturii opuse.", "Identifică intersecția celor 3 bisectoare / medioane.", "Aplică proprietatea bisectoarei: $BD/DC=AB/AC$."],
    tips: ["Bisectoarea împarte unghiul; mediana împarte latura opusă.", "Centrul de greutate $G$: $AG/GM=2/1$ (de 2 ori mai aproape de baza).", "Nu confunda bisectoarea cu mediatoarea laturii."],
    examples: [{label:"bisectoarea",given:"$\\angle A=80°$; bisectoarea din $A$",ask:"$\\angle BAD$ și $\\angle DAC$",solve:"Bisectoarea îl împarte egal: $\\angle BAD=\\angle DAC=80°/2=40°$.",answer:"$40°$ fiecare"},{label:"mediana",given:"Triunghi cu $BC=10$ cm; $M$ mijlocul lui $BC$",ask:"$BM$ și $MC$",solve:"Mediana din $A$ la $M$: $BM=MC=10/2=5$ cm.",answer:"$BM=MC=5$ cm"},{label:"tip examen",given:"$AB=6$ cm, $AC=9$ cm; bisectoarea din $A$ intersectează $BC$ în $D$",ask:"Raportul $BD/DC$",solve:"Prop. bisect.: $BD/DC=AB/AC=6/9=2/3$.",answer:"$BD:DC=2:3$"}],
    exercises: ["Bisectoarea din $A$ cu $\\angle A=96°$. Calculați unghiurile parțiale.", "Mediana unui triunghi cu $BC=14$ cm. Calculați $BM$.", "Bisectoarea din $A$: $AB=8$ cm, $AC=12$ cm; $BC=10$ cm. Calculați $BD$ și $DC$.", "De câte ori este mai aproape centrul de greutate de baza față de vârf?"]},

  "6.2.1-inaltime": {type:"triangle",
    learn: "Înălțimea dintr-un vârf al triunghiului este perpendiculara din acel vârf pe latura opusă (sau prelungirea ei). Cele 3 înălțimi se intersectează în ortocentrul $H$.",
    terms: ["înălțimea dintr-un vârf: perpendiculara din vârf pe latura opusă", "piciorul înălțimii: punctul de intersecție cu latura (sau prelungirea)", "ortocentrul $H$: punctul de intersecție al celor 3 înălțimi", "arie triunghi: $A=\\frac{baza\\times\\text{înălțime}}{2}=\\frac{b\\cdot h}{2}$"],
    properties: ["Înălțimea ⊥ latura opusă.", "Toate 3 înălțimile se intersectează în ortocentrul $H$.", "La triunghi dreptunghic: ortocentrul = vârful dreptului.", "Arie = $(baza \\times \\text{înălțime})/2$."],
    steps: ["Identifică vârful și latura opusă.", "Trasează perpendiculara din vârf pe latura opusă.", "Piciorul înălțimii = $H_a$ pe $BC$.", "Arie = $\\frac{BC \\times h_a}{2}$."],
    tips: ["Înălțimea poate cădea în AFARA triunghiului (triunghiuri obtuzunghice).", "Ortocentrul = interior (ascuțitunghic), pe vârf (dreptunghic), exterior (obtuzunghic).", "Arie: baza × înălțime ÷ 2."],
    examples: [{label:"arie",given:"$BC=8$ cm; $h_a=5$ cm",ask:"Aria triunghiului",solve:"$A=\\frac{8\\times5}{2}=20$ cm².",answer:"$A=20$ cm²"},{label:"înălțimea",given:"Triunghi dreptunghic în $C$; $a=3$ cm, $b=4$ cm",ask:"Înălțimea din $C$ pe ipotenuza $c$",solve:"Arie = $\\frac{ab}{2}=6$ cm². $c=\\sqrt{9+16}=5$ cm. $h_c=\\frac{2\\cdot\\text{Arie}}{c}=\\frac{12}{5}=2{,}4$ cm.",answer:"$h_c=2{,}4$ cm"},{label:"tip examen",given:"Aria = 30 cm²; baza = 10 cm",ask:"Înălțimea corespunzătoare",solve:"$h=\\frac{2A}{b}=\\frac{60}{10}=6$ cm.",answer:"$h=6$ cm"}],
    exercises: ["$b=12$ cm, $h=7$ cm. Calculați aria.", "Aria = 24 cm², baza = 8 cm. Calculați înălțimea.", "Triunghi dreptunghic cu catetele 5 și 12. Calculați ipotenuza și aria.", "Unde se află ortocentrul unui triunghi obtuzunghic?"]},

  "6.2.2-mediatoare-circumcentru": {type:"triangle",
    learn: "Mediatoarea unei laturi a triunghiului este perpendiculara pe acea latură în mijlocul ei. Cele 3 mediatoare se intersectează în circumcentrul $O$ — centrul cercului circumscris.",
    terms: ["mediatoarea laturii $BC$: ⊥ pe $BC$ în mijlocul $M$ al $BC$", "circumcentrul $O$: intersecția celor 3 mediatoare; egal depărtat de cele 3 vârfuri", "circumraza $R$: $OA=OB=OC=R$", "cerc circumscris: trece prin toate 3 vârfurile triunghiului"],
    properties: ["Mediatoarea laturii $BC$: orice punct de pe ea este egal depărtat de $B$ și $C$.", "Circumcentrul $O$: $OA=OB=OC=R$ (raza circumscrisă).", "La triunghi dreptunghic: circumcentrul = mijlocul ipotenuzei.", "La triunghi ascuțitunghic: circumcentrul în interior."],
    steps: ["Găsește mijloacele laturilor.", "Trasează perpendicularele în mijloacele laturilor.", "Intersecția lor = circumcentrul $O$.", "Circumraza $R=OA=OB=OC$."],
    tips: ["Circumcentrul ≠ centrul de greutate ≠ ortocentru (în general).", "La dreptunghic: circumcentrul pe ipotenuză.", "Proprietate mediatoare: punct pe mediatoarea lui $BC$ → egal depărtat de $B$ și $C$."],
    examples: [{label:"circumcentru dreptunghic",given:"Triunghi dreptunghic în $C$; $AB=10$ cm",ask:"Circumraza $R$",solve:"La dreptunghic: circumcentrul = mijlocul ipotenuzei → $R=AB/2=5$ cm.",answer:"$R=5$ cm"},{label:"proprietate",given:"$P$ pe mediatoarea lui $BC$; $PB=7$ cm",ask:"$PC$",solve:"Proprietatea mediatoarei: $PB=PC=7$ cm.",answer:"$PC=7$ cm"},{label:"tip examen",given:"Triunghi echilateral cu latura $a=6$ cm",ask:"Circumraza $R$",solve:"$R=\\frac{a}{\\sqrt{3}}=\\frac{6}{\\sqrt{3}}=2\\sqrt{3}\\approx3{,}46$ cm.",answer:"$R=2\\sqrt{3}$ cm"}],
    exercises: ["Un punct $P$ pe mediatoarea lui $BC$; $PB=9$ cm. Calculați $PC$.", "Triunghi dreptunghic cu ipotenuza 8 cm. Calculați circumraza.", "Unde se află circumcentrul unui triunghi obtuzunghic?", "De ce circumcentrul dreptunghicului se află pe ipotenuză?"]},

  "6.2.3-centroizi": {type:"triangle",
    learn: "Centrul de greutate $G$ (centroidul) este intersecția celor 3 mediane. $G$ împarte fiecare mediană în raportul $2:1$ de la vârf la mijlocul laturii opuse.",
    terms: ["mediana: segment de la vârf la mijlocul laturii opuse", "centrul de greutate $G$: intersecția celor 3 mediane", "raportul $2:1$: $G$ este la $2/3$ din mediană față de vârf", "linii importante: înălțime, mediană, bisectoare, mediatoare"],
    properties: ["Centrul de greutate $G$: $AG/GM=BG/GN=CG/GP=2/1$.", "Coordonatele $G$: $G=\\left(\\frac{x_A+x_B+x_C}{3},\\frac{y_A+y_B+y_C}{3}\\right)$.", "Centrul de greutate împarte triunghiul în 3 triunghiuri cu arii egale.", "Toate 3 medioanele se intersectează într-un singur punct."],
    steps: ["Găsește mijloacele laturilor $M_{BC}$, $M_{AC}$, $M_{AB}$.", "Trasează medioanele: $AM_{BC}$, $BM_{AC}$, $CM_{AB}$.", "Intersecția lor = $G$.", "Raportul $AG/GM=2/1$: $AG=\\frac{2}{3}\\cdot AM$, $GM=\\frac{1}{3}\\cdot AM$."],
    tips: ["$G$ împarte fiecare mediană $2:1$ de la vârf.", "Coordonatele $G$: media aritmetică a coordonatelor vârfurilor.", "$G$ este centrul de greutate fizic al triunghiului."],
    examples: [{label:"raport",given:"Mediana $AM=12$ cm; $G$ centrul de greutate",ask:"$AG$ și $GM$",solve:"$AG=\\frac{2}{3}\\cdot12=8$ cm; $GM=\\frac{1}{3}\\cdot12=4$ cm.",answer:"$AG=8$ cm, $GM=4$ cm"},{label:"coordonate",given:"$A(0,0)$, $B(6,0)$, $C(0,8)$",ask:"Centrul de greutate $G$",solve:"$G=\\left(\\frac{0+6+0}{3},\\frac{0+0+8}{3}\\right)=(2;\\frac{8}{3})$.",answer:"$G=(2;\\frac{8}{3})$"},{label:"tip examen",given:"$G$ centrul de greutate; $AG=10$ cm",ask:"Lungimea medianei $AM$",solve:"$AG=\\frac{2}{3}AM\\Rightarrow AM=\\frac{3}{2}\\cdot10=15$ cm.",answer:"$AM=15$ cm"}],
    exercises: ["Mediana $BN=18$ cm. Calculați $BG$ și $GN$.", "Vârfurile $A(1,2)$, $B(5,2)$, $C(3,8)$. Calculați $G$.", "Dacă $GN=4$ cm, calculați mediana $BN$.", "Ce proprietate specială are centrul de greutate față de ariile celor 3 triunghiuri formate?"]},

  "6.3.1-congruenta-lll": {type:"triangle",
    learn: "Două triunghiuri sunt congruente dacă au toate elementele corespondente egale. Cazul LLL: dacă 3 laturi ale unui triunghi sunt egale cu 3 laturi ale altuia, triunghiurile sunt congruente.",
    terms: ["triunghiuri congruente: $\\triangle ABC\\cong\\triangle DEF$ → $AB=DE$, $BC=EF$, $AC=DF$, $\\angle A=\\angle D$, $\\angle B=\\angle E$, $\\angle C=\\angle F$", "cazul LLL: 3 laturi egale → congruență", "notație: $\\triangle ABC\\cong\\triangle DEF$ (ordinea vârfurilor contează!)"],
    properties: ["LLL: dacă $AB=DE$, $BC=EF$, $AC=DF$ → $\\triangle ABC\\cong\\triangle DEF$.", "Triunghiuri congruente au TOATE elementele corespondente egale.", "La congruență, ordinea vârfurilor arată corespondența.", "Congruența este o relație de echivalență (reflexivă, simetrică, tranzitivă)."],
    steps: ["Identifică cele 3 perechi de laturi egale.", "Verifică corespondența: care vârf cu care.", "Scrie congruența cu ordinea corectă a vârfurilor.", "Concluzionează că unghiurile corespondente sunt și ele egale."],
    tips: ["Ordinea vârfurilor în notația $\\triangle ABC\\cong\\triangle DEF$ CONTEAZĂ.", "LLL: cel mai ușor de verificat (doar laturi).", "Din congruență → toate elementele corespondente sunt egale."],
    examples: [{label:"verificare LLL",given:"$AB=4$, $BC=5$, $AC=6$; $DE=4$, $EF=5$, $DF=6$",ask:"Sunt congruente?",solve:"$AB=DE$, $BC=EF$, $AC=DF$ → LLL → $\\triangle ABC\\cong\\triangle DEF$.",answer:"$\\triangle ABC\\cong\\triangle DEF$ (LLL)"},{label:"proprietate",given:"$\\triangle ABC\\cong\\triangle PQR$; $AB=7$ cm",ask:"Latura $PQ$",solve:"Congruente → elemente corespondente egale: $PQ=AB=7$ cm.",answer:"$PQ=7$ cm"},{label:"tip examen",given:"Triunghi isoscel $ABC$ cu $AB=AC=5$ cm; $D$ mijlocul $BC$",ask:"$\\triangle ABD\\cong\\triangle ACD$? Justificați",solve:"$AB=AC$, $BD=DC$, $AD$ comun → LLL → $\\triangle ABD\\cong\\triangle ACD$ ✓.",answer:"Da, prin LLL"}],
    exercises: ["Verificați congruența prin LLL: $\\triangle ABC$ cu (3,4,5) și $\\triangle PQR$ cu (5,3,4).", "Din $\\triangle ABC\\cong\\triangle DEF$: $BC=8$ cm. Găsiți $EF$.", "Un triunghi isoscel cu $AB=AC$; $M$ mijlocul $BC$. Demonstrați că $\\triangle ABM\\cong\\triangle ACM$.", "Câte laturi sunt suficiente pentru congruența LLL?"]},

  "6.3.2-congruenta-lul-ulu": {type:"triangle",
    learn: "Cazul LUL: două laturi și unghiul CUPRINS între ele. Cazul ULU: două unghiuri și latura CUPRINSĂ între ele. Atenție: unghiul trebuie să fie CUPRINS între laturi (nu oricare).",
    terms: ["LUL: $AB=DE$, $\\angle B=\\angle E$, $BC=EF$ → congruență (unghiul cuprins între laturi)", "ULU: $\\angle A=\\angle D$, $AB=DE$, $\\angle B=\\angle E$ → congruență (latura cuprinsă)", "unghi cuprins: unghiul format de cele 2 laturi date", "latura cuprinsă: latura dintre cele 2 unghiuri date"],
    properties: ["LUL: 2 laturi și unghiul CUPRINS egal → congruență.", "ULU: 2 unghiuri și latura CUPRINSĂ egal → congruență.", "Atenție LUL: unghiul trebuie să fie CUPRINS (nu oricare).", "Din ULU: se pot deduce și celelalte laturi."],
    steps: ["LUL: identifică cele 2 laturi și unghiul DINTRE ele.", "ULU: identifică cele 2 unghiuri și latura DINTRE ele.", "Verifică corespondența vârfurilor.", "Scrie congruența cu ordinea corectă."],
    tips: ["LUL: unghiul trebuie să fie CUPRINS între laturi — greșeala clasică!", "ULU: latura trebuie să fie CUPRINSĂ între unghiuri.", "Dacă unghiul nu e cuprins → nu e suficient pentru congruență (cazul LSS nu e valabil în general)."],
    examples: [{label:"LUL",given:"$AB=DE=5$; $\\angle B=\\angle E=40°$; $BC=EF=7$",ask:"Sunt congruente? Ce caz?",solve:"$AB=DE$, $\\angle B=\\angle E$ (cuprins), $BC=EF$ → LUL → $\\triangle ABC\\cong\\triangle DEF$.",answer:"Da, LUL"},{label:"ULU",given:"$\\angle A=\\angle P=50°$; $AB=PQ=6$; $\\angle B=\\angle Q=70°$",ask:"Congruență? Ce caz?",solve:"$\\angle A=\\angle P$, $AB=PQ$ (latura cuprinsă), $\\angle B=\\angle Q$ → ULU → congruente.",answer:"Da, ULU"},{label:"tip examen",given:"Triunghi isoscel $ABC$, $AB=AC$; $AM$ mediană; $\\angle BAM=\\angle CAM$",ask:"$\\triangle ABM\\cong\\triangle ACM$? Ce caz?",solve:"$AB=AC$, $\\angle BAM=\\angle CAM$ (cuprins), $AM$ comun → LUL → congruente.",answer:"Da, LUL"}],
    exercises: ["Identificați cazul de congruență și demonstrați: $AB=DE$, $\\angle A=\\angle D$, $AC=DF$.", "Două triunghiuri: $\\angle B=\\angle E=60°$, $BC=EF=8$, $\\angle C=\\angle F=70°$. Ce caz? Congruente?", "De ce cazul LSS (latură-latură-unghi opus) NU garantează congruența în general?", "Demonstrați că bisectoarea unui triunghi isoscel este și mediană și înălțime."]},

  "6.3.3-dreptunghice-congruenta": {type:"triangle",
    learn: "La triunghiuri dreptunghice, criteriile speciale de congruență: ipotenuza + catetă (IC) sau ipotenuza + unghi ascuțit (IUA).",
    terms: ["triunghi dreptunghic: are un unghi de 90°", "ipotenuza: latura opusă unghiului drept (cea mai lungă)", "catetele: laturile care formează unghiul drept", "IC: ipotenuza + o catetă → congruență (specifică dreptunghicelor)", "IUA: ipotenuza + un unghi ascuțit → congruență"],
    properties: ["IC: $AB_{ipotenuse}=DE_{ipotenuse}$ și $BC_{cateta}=EF_{cateta}$ → $\\triangle ABC\\cong\\triangle DEF$.", "IUA: ipotenuza egală + un unghi ascuțit egal → congruente.", "Teorema lui Pitagora: $c^2=a^2+b^2$ (verificare în dreptunghic).", "La dreptunghice: unghiurile ascuțite sunt complementare (suma = 90°)."],
    steps: ["Identifică ipotenuza și catetele.", "Verifică: ipotenuze egale + o catetă egală (IC).", "Sau: ipotenuze egale + un unghi ascuțit egal (IUA).", "Scrie congruența cu ordinea corectă."],
    tips: ["La dreptunghice: unghiul drept este deja egal (ambele = 90°).", "IC este un caz special LLL (cel de-al treilea element se deduce din Pitagora).", "Verifică că unghiul drept corespunde corect."],
    examples: [{label:"IC",given:"$\\triangle ABC$ și $\\triangle DEF$ dreptunghice în $C$ și $F$; $AB=DE=13$; $BC=EF=5$",ask:"Sunt congruente?",solve:"Ipotenuze egale ($AB=DE=13$) și catete egale ($BC=EF=5$) → IC → $\\triangle ABC\\cong\\triangle DEF$.",answer:"Da, IC"},{label:"IUA",given:"Dreptunghice în $C$ și $F$; $AB=DE=10$; $\\angle A=\\angle D=30°$",ask:"Congruente?",solve:"Ipotenuze egale + unghiuri ascuțite egale → IUA → congruente.",answer:"Da, IUA"},{label:"tip examen",given:"Triunghi dreptunghic $ABC$ în $C$; $AB=10$ cm, $BC=6$ cm",ask:"Calculați $AC$ și $\\angle A$",solve:"$AC=\\sqrt{AB^2-BC^2}=\\sqrt{100-36}=8$ cm. $\\tan A=BC/AC=6/8=0{,}75\\Rightarrow\\angle A\\approx36{,}9°$.",answer:"$AC=8$ cm, $\\angle A\\approx37°$"}],
    exercises: ["Dreptunghice: $c_1=AB=15$, cateta $BC=9$ și $DE=15$, cateta $EF=9$. IC?", "Dreptunghice: ipotenuze egale = 17; un unghi ascuțit = 28° egal. IUA?", "Triunghi dreptunghic: catetele 8 și 15. Calculați ipotenuza.", "Câte elemente sunt necesare la IC față de LLL?"]},

  "6.4.1-isoscel": {type:"triangle",
    learn: "Triunghiul isoscel are 2 laturi egale (laturile egale) și o bază. Proprietate: unghiurile de la bază sunt egale; bisectoarea, mediana, înălțimea din vârf coincid.",
    terms: ["triunghi isoscel: $AB=AC$ (laturi egale); $BC$ = baza", "unghiuri de la bază: $\\angle B=\\angle C$ (egale)", "vârf: unghiul $\\angle A$ (dintre laturile egale)", "proprietate specială: bisectoarea, mediana și înălțimea din $A$ coincid"],
    properties: ["$AB=AC$ → $\\angle B=\\angle C$ (unghiurile de la bază egale).", "Reciproca: $\\angle B=\\angle C$ → $AB=AC$ (isoscel).", "Bisectoarea din $A$ = mediana din $A$ = înălțimea din $A$.", "$\\angle A=180°-2\\angle B$."],
    steps: ["Verifică dacă $AB=AC$ (isoscel).", "Unghiurile de la bază: $\\angle B=\\angle C=(180°-\\angle A)/2$.", "Bisectoarea din $A$ este și mediană (împarte $BC$ în jumătăți) și înălțime (⊥ $BC$).", "Verifică suma unghiurilor: $\\angle A+2\\angle B=180°$."],
    tips: ["$\\angle B=\\angle C$: nu contează cât de mare e triunghiul.", "Din $\\angle A$ și isoscel: $\\angle B=\\angle C=(180°-\\angle A)/2$.", "Bisectoarea din vârf ⊥ baza (înălțime) și bisectează baza (mediană)."],
    examples: [{label:"unghiuri la baza",given:"Isoscel cu $\\angle A=40°$",ask:"$\\angle B$ și $\\angle C$",solve:"$\\angle B=\\angle C=\\frac{180°-40°}{2}=70°$.",answer:"$\\angle B=\\angle C=70°$"},{label:"latura egala",given:"Isoscel cu $\\angle B=65°$",ask:"$\\angle A$ și $\\angle C$",solve:"$\\angle C=\\angle B=65°$. $\\angle A=180°-65°-65°=50°$.",answer:"$\\angle A=50°$, $\\angle C=65°$"},{label:"tip examen",given:"Isoscel $ABC$; $AB=AC=10$ cm; $\\angle A=36°$; $AM$ înălțimea",ask:"$BM$ și $\\angle ABM$",solve:"$AM\\perp BC$; $M$ mijlocul $BC$ → $BM=BC/2$. $\\angle ABM=\\angle B=\\frac{180°-36°}{2}=72°$.",answer:"$\\angle ABM=72°$"}],
    exercises: ["Isoscel cu $\\angle A=100°$. Calculați $\\angle B$ și $\\angle C$.", "Isoscel cu $\\angle B=50°$. Calculați $\\angle A$.", "Isoscel $ABC$; $AB=AC=13$ cm; $BC=10$ cm. Calculați înălțimea din $A$.", "Demonstrați că bisectoarea din vârf este perpendiculară pe baza."]},

  "6.4.2-echilateral": {type:"triangle",
    learn: "Triunghiul echilateral are toate laturile egale ($a=b=c$) și toate unghiurile egale ($\\alpha=\\beta=\\gamma=60°$). Este cazul special al triunghiului isoscel.",
    terms: ["triunghi echilateral: $AB=BC=CA=a$ și $\\angle A=\\angle B=\\angle C=60°$", "proprietăți speciale: bisectoarele, medianele, înălțimile și mediatoarele coincid câte una", "înălțimea echilateralului: $h=\\frac{a\\sqrt{3}}{2}$", "aria echilateralului: $A=\\frac{a^2\\sqrt{3}}{4}$"],
    properties: ["Toate laturile egale → toate unghiurile = 60°.", "Toți centrii coincid (centrul de greutate = circumcentru = ortocentru).", "Înălțimea: $h=\\frac{a\\sqrt{3}}{2}$.", "Aria: $A=\\frac{a^2\\sqrt{3}}{4}$."],
    steps: ["Verifică dacă toate laturile sunt egale sau toate unghiurile = 60°.", "Calculează înălțimea: $h=a\\sqrt{3}/2$.", "Calculează aria: $A=a^2\\sqrt{3}/4$.", "Verifică perimetrul: $P=3a$."],
    tips: ["Orice proprietate a isoscelului se aplică și echilateralului.", "$\\sqrt{3}\\approx1{,}732$: util la calcule numerice.", "Bisectoarea = mediana = înălțimea = mediatoarea pentru fiecare latură."],
    examples: [{label:"calcul",given:"Echilateral cu $a=6$ cm",ask:"Înălțimea și aria",solve:"$h=6\\sqrt{3}/2=3\\sqrt{3}\\approx5{,}2$ cm. $A=36\\sqrt{3}/4=9\\sqrt{3}\\approx15{,}6$ cm².",answer:"$h=3\\sqrt{3}$ cm; $A=9\\sqrt{3}$ cm²"},{label:"latura din inaltime",given:"Înălțimea echilateralului $h=4\\sqrt{3}$ cm",ask:"Latura $a$",solve:"$h=a\\sqrt{3}/2\\Rightarrow a=2h/\\sqrt{3}=2\\cdot4\\sqrt{3}/\\sqrt{3}=8$ cm.",answer:"$a=8$ cm"},{label:"tip examen",given:"Perimetrul echilateralului $P=24$ cm",ask:"Latura, înălțimea și aria",solve:"$a=8$ cm. $h=8\\sqrt{3}/2=4\\sqrt{3}$ cm. $A=64\\sqrt{3}/4=16\\sqrt{3}$ cm².",answer:"$a=8$; $h=4\\sqrt{3}$; $A=16\\sqrt{3}$ cm²"}],
    exercises: ["Echilateral cu $a=10$ cm. Calculați $h$, $P$, $A$.", "Dacă $h=5\\sqrt{3}$ cm, calculați $a$.", "Un echilateral și un pătrat au același perimetru de 24 cm. Comparați ariile.", "Câte axe de simetrie are un triunghi echilateral?"]},

  "6.4.3-pitagora": {type:"triangle",
    learn: "Teorema lui Pitagora: într-un triunghi dreptunghic, ipotenuza la pătrat = suma pătratelor catetelor: $c^2=a^2+b^2$. Reciproca: dacă $c^2=a^2+b^2$, triunghiul este dreptunghic.",
    terms: ["ipotenuza $c$: latura opusă unghiului drept (cea mai lungă)", "catetele $a, b$: laturile care formează unghiul drept", "teorema lui Pitagora: $c^2=a^2+b^2$", "reciproca lui Pitagora: dacă $c^2=a^2+b^2$ → triunghi dreptunghic", "triplete pitagorice: $(3,4,5)$; $(5,12,13)$; $(8,15,17)$; $(6,8,10)$"],
    properties: ["$c^2=a^2+b^2$ (Pitagora, în triunghi dreptunghic).", "Cateta: $a=\\sqrt{c^2-b^2}$ (dacă cunoaștem ipotenuza și cealaltă catetă).", "Reciproca: $c^2=a^2+b^2$ → unghi drept la $C$.", "Triplete pitagorice: $(3,4,5)$, $(5,12,13)$, $(8,15,17)$."],
    steps: ["Identifică latura opusă unghiului drept (ipotenuza).", "Aplică $c^2=a^2+b^2$.", "Calculează latura necunoscută.", "Verifică: $c>a$ și $c>b$ (ipotenuza e cea mai mare)."],
    tips: ["Ipotenuza = latura opusă dreptului = cea mai lungă.", "Nu aplica Pitagora decât la triunghiuri DREPTUNGHICE.", "Verifică reciproca: $5^2=3^2+4^2=9+16=25$ ✓ → $(3,4,5)$ dreptunghic."],
    examples: [{label:"ipotenuza",given:"Catete $a=3$ cm, $b=4$ cm",ask:"Ipotenuza $c$",solve:"$c^2=3^2+4^2=9+16=25\\Rightarrow c=5$ cm.",answer:"$c=5$ cm"},{label:"cateta",given:"Ipotenuza $c=13$ cm, cateta $b=5$ cm",ask:"Cateta $a$",solve:"$a^2=c^2-b^2=169-25=144\\Rightarrow a=12$ cm.",answer:"$a=12$ cm"},{label:"tip examen",given:"Diagonala unui pătrat cu latura $l=5$ cm",ask:"Lungimea diagonalei",solve:"Diagonala = ipotenuza triunghiului dreptunghic isoscel cu catetele 5. $d=\\sqrt{5^2+5^2}=5\\sqrt{2}$ cm.",answer:"$d=5\\sqrt{2}\\approx7{,}07$ cm"}],
    exercises: ["Catete 6 cm și 8 cm. Calculați ipotenuza.", "Ipotenuza 17 cm, o catetă 8 cm. Calculați cealaltă catetă.", "Verificați dacă $(7, 24, 25)$ este triplet pitagoric.", "O scară de 10 m sprijinită de un zid ajunge la 8 m înălțime. La ce distanță de zid este baza scării?"]}


};


const compactRows = []

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
