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
  <h4>Cum aplicăm</h4><ol>${htmlSteps(typeSteps[topic.type])}</ol>
  <div class="atentie"><div class="atentie-label">Tips & tricks</div><ul>${htmlList(typeTips[topic.type])}</ul></div>
  ${solvedBlocks(examplesByType[topic.type])}
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
  "1.3.1-recapitulare-divizibilitate": {type:"divisibility", learn:"Revedem divizibilitatea și criteriile rapide pentru numere naturale.", terms:["$a\\mid b$: a divide b", "divizor", "multiplu", "număr prim"], properties:["Divizibil cu 2: ultima cifră este pară.", "Divizibil cu 3 sau 9: suma cifrelor este divizibilă cu 3 sau 9.", "Divizibil cu 5: ultima cifră este 0 sau 5.", "Divizibil cu 10: ultima cifră este 0." ]},
  "1.3.2-descompunere-factori-primi": {type:"divisibility", learn:"Descompunem numere naturale în produs de factori primi.", terms:["factor prim", "descompunere", "putere", "produs de factori"], properties:["Orice număr natural mai mare decât 1 are descompunere unică în factori primi.", "Factorii egali se scriu ca puteri.", "Rezultatul se verifică prin înmulțire.", "Factorii din descompunere trebuie să fie numere prime." ]},
  "1.3.3-cmmdc": {type:"divisibility", learn:"Calculăm CMMDC și îl folosim în probleme cu împărțiri în grupe identice.", terms:["CMMDC", "divizor comun", "numere prime între ele", "factor comun"], properties:["CMMDC folosește factorii comuni cu exponentul cel mai mic.", "Dacă CMMDC este 1, numerele sunt prime între ele.", "CMMDC nu depășește numărul mai mic.", "CMMDC este util la simplificarea fracțiilor." ]},
  "1.3.4-cmmmc": {type:"divisibility", learn:"Calculăm CMMMC pentru multipli comuni și probleme de repetare.", terms:["CMMMC", "multiplu comun", "factor necomun", "exponent maxim"], properties:["CMMMC folosește toți factorii primi cu exponentul cel mai mare.", "CMMMC este cel puțin egal cu numărul mai mare.", "Pentru numere prime între ele, CMMMC este produsul lor.", "Dacă un număr divide pe celălalt, CMMMC este numărul mai mare." ]},
  "1.3.5-proprietati-divizibilitate": {type:"divisibility", learn:"Aplicăm proprietăți ale divizibilității pentru sume, diferențe și produse.", terms:["divizibilitate", "sumă divizibilă", "diferență divizibilă", "tranzitivitate"], properties:["Dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b+c)$.", "Dacă $a\\mid b$ și $a\\mid c$, atunci $a\\mid(b-c)$ pentru $b\\ge c$.", "Dacă $a\\mid b$, atunci $a\\mid b\\cdot k$.", "Dacă $a\\mid b$ și $b\\mid c$, atunci $a\\mid c$." ]}
};

const compactRows = [
["2.1.1-rapoarte","ratio","Rapoartele compară două mărimi prin împărțire.","$a:b$ sau $\\frac{a}{b}$, cu $b\\ne0$","Raportul se simplifică asemenea unei fracții."],
["2.1.2-proportii","ratio","Proporțiile sunt egalități de rapoarte și permit aflarea unui termen necunoscut.","$\\frac{a}{b}=\\frac{c}{d}$","Produsul mezilor este egal cu produsul extremilor."],
["2.1.3-sir-rapoarte","ratio","Șirurile de rapoarte egale ajută la împărțirea proporțională.","$\\frac{a}{m}=\\frac{b}{n}=k$","Fiecare mărime se obține înmulțind coeficientul comun cu partea ei."],
["2.1.4-marimi-proportionale","ratio","Deosebim mărimile direct proporționale de cele invers proporționale.","direct: $y=kx$; invers: $xy=k$","La proporționalitate inversă, produsul rămâne constant."],
["2.1.5-regula-trei","ratio","Folosim regula de trei simplă în probleme cu mărimi proporționale.","schemă cu două rânduri de date","Metoda depinde de tipul proporționalității."],
["2.1.6-procente","ratio","Transformăm procentele în fracții și calculăm reduceri sau creșteri.","$p\\%=\\frac{p}{100}$","Partea este $\\frac{p}{100}$ din întreg."],
["2.2.1-reprezentare-date","ratio","Citirea tabelelor și graficelor ajută la interpretarea datelor.","frecvență, diagramă, scară","Un grafic corect are titlu, etichete și scară constantă."],
["2.2.2-probabilitati","ratio","Probabilitatea exprimă șansa unui eveniment simplu.","$P=\\frac{cazuri favorabile}{cazuri posibile}$","Probabilitatea este între 0 și 1."],
["3.1.1-reprezentare-axa","integer","Reprezentăm numerele întregi pe axă și citim ordinea lor.","$ℤ=\\{...,-2,-1,0,1,2,...\\}$","Pe axă, numerele cresc spre dreapta."],
["3.1.2-modul","integer","Modulul unui număr întreg este distanța lui față de 0.","$|a|$","Dintre două numere negative, este mai mare cel cu modul mai mic."],
["3.2.1-adunare-scadere","integer","Adunăm și scădem numere întregi cu semne diferite.","opusul unui număr","Scăderea se transformă în adunarea opusului."],
["3.2.2-inmultire","integer","Înmulțim numere întregi folosind regula semnelor.","semne identice sau diferite","Semne identice dau rezultat pozitiv; semne diferite dau rezultat negativ."],
["3.2.3-impartire","integer","Împărțim numere întregi și verificăm prin înmulțire.","$a:b=c$ dacă $b\\cdot c=a$","Nu se împarte niciodată la 0."],
["3.2.4-puteri","integer","Calculăm puteri cu bază întreagă și exponent natural.","$a^n$","Baza negativă cu exponent par dă rezultat pozitiv; cu exponent impar dă rezultat negativ."],
["3.2.5-calcule-combinate","integer","Respectăm ordinea operațiilor în expresii cu numere întregi.","paranteze, puteri, operații","Ordinea este: paranteze, puteri, înmulțiri/împărțiri, adunări/scăderi."],
["3.3.1-ecuatii","integer","Rezolvăm ecuații în mulțimea numerelor întregi.","necunoscută x","Soluția se verifică prin înlocuire."],
["3.3.2-inecuatii","integer","Rezolvăm inecuații și scriem soluțiile întregi.","$\\lt, \\gt, \\le, \\ge$","La împărțirea cu număr negativ, sensul inegalității se schimbă."],
["3.3.3-probleme","integer","Traducem problemele în ecuații sau inecuații în ℤ.","model matematic","Necunoscuta se definește înainte de ecuație."],
["3.3.4-ordinea-operatii","integer","Folosim parantezele pentru a controla ordinea operațiilor.","paranteze rotunde, pătrate, acolade","Se rezolvă mai întâi parantezele interioare."],
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
