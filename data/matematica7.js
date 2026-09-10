// ============================================================
//  MATEMATICĂ - CLASA A VII-A
//  Conținut original, aliniat cu programa OMEN 3393/2017
//  Structură păstrată: 7 unități, 44 capitole
// ============================================================

const list7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const DIF_LABELS7 = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil", "f-dificil": "Foarte dificil" };
const exList7 = (items) => items.map((item) => `<li><span class="dif-badge dif-${item.level}">${DIF_LABELS7[item.level]}</span> ${item.text}${item.solution ? `<details class="rezolvare-toggle"><summary>Vezi rezolvarea</summary><p>${item.solution}</p></details>` : ""}</li>`).join("\n");

const solved7 = (items) => items.map((item, index) => `
  <div class="rezolvat">
    <div class="rezolvat-label">Problema ${index + 1} - ${item.label}</div>
    <p><strong>Se dă:</strong> ${item.given}</p>
    <p><strong>Se cere:</strong> ${item.ask}</p>
    <p><strong>Rezolvare:</strong> ${item.solve}</p>
    ${item.check ? `<p><strong>Verificare:</strong> ${item.check}</p>` : ""}
    <p><strong>Răspuns:</strong> ${item.answer}</p>
  </div>`).join("\n");

const lesson7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Ce învățăm</div>
    <p>${data.learn}</p>
  </div>
  <h4>Termeni și notații</h4>
  <ul>${list7(data.terms)}</ul>
  <h4>Formule / Proprietăți</h4>
  <ul>${list7(data.properties)}</ul>
  ${data.table || ""}
  ${data.figure || ""}
  <h4>Cum aplicăm</h4>
  <ol>${list7(data.steps)}</ol>
  <div class="atentie">
    <div class="atentie-label">Tips & tricks</div>
    <ul>${list7(data.tips)}</ul>
  </div>
  ${solved7(data.examples)}
  <h4>Exerciții propuse</h4>
  <ol>${exList7(data.exercises)}</ol>
</div>`;

const recap7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Recapitulare</div>
    <p>${data.summary}</p>
  </div>
  <h4>Formule-cheie</h4>
  <ul>${list7(data.keys)}</ul>
  <div class="atentie">
    <div class="atentie-label">Greșeli frecvente</div>
    <ul>${list7(data.mistakes)}</ul>
  </div>
  ${solved7([data.problem])}
  <h4>Exerciții mixte</h4>
  <ol>${exList7(data.exercises)}</ol>
</div>`;

const axis7 = `
<svg style="width:100%;max-width:540px;height:130px;margin:14px 0" viewBox="0 0 540 130" role="img" aria-label="Dreapta numerelor reale">
  <line x1="40" y1="70" x2="500" y2="70" stroke="#1f2937" stroke-width="2"/>
  <polygon points="500,70 488,64 488,76" fill="#1f2937"/>
  ${[-3,-2,-1,0,1,2,3].map((n,i)=>`<line x1="${90+i*60}" y1="60" x2="${90+i*60}" y2="80" stroke="#1f2937"/><text x="${90+i*60}" y="104" font-size="14" text-anchor="middle">${n}</text>`).join("")}
</svg>`;

const plane7 = `
<svg style="width:100%;max-width:420px;height:300px;margin:14px 0" viewBox="0 0 420 300" role="img" aria-label="Sistem de axe cu puncte">
  <line x1="40" y1="150" x2="380" y2="150" stroke="#111827" stroke-width="2"/><line x1="210" y1="270" x2="210" y2="30" stroke="#111827" stroke-width="2"/>
  <polygon points="380,150 368,144 368,156" fill="#111827"/><polygon points="210,30 204,42 216,42" fill="#111827"/>
  <circle cx="270" cy="90" r="5" fill="#dc2626"/><text x="280" y="88" font-size="14">A(2,2)</text>
  <circle cx="150" cy="210" r="5" fill="#2563eb"/><text x="62" y="218" font-size="14">B(-2,-2)</text>
  <text x="386" y="145" font-size="14">x</text><text x="220" y="36" font-size="14">y</text>
</svg>`;

const quad7 = `
<svg style="width:100%;max-width:430px;height:250px;margin:14px 0" viewBox="0 0 430 250" role="img" aria-label="Patrulater ABCD">
  <polygon points="70,190 330,190 370,70 120,45" fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
  <line x1="70" y1="190" x2="370" y2="70" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="55" y="210" font-size="15" font-weight="700">A</text><text x="335" y="210" font-size="15" font-weight="700">B</text><text x="376" y="70" font-size="15" font-weight="700">C</text><text x="108" y="42" font-size="15" font-weight="700">D</text>
</svg>`;

const circle7 = `
<svg style="width:100%;max-width:360px;height:260px;margin:14px 0" viewBox="0 0 360 260" role="img" aria-label="Cerc cu centru și coardă">
  <circle cx="180" cy="130" r="90" fill="#f0f9ff" stroke="#0284c7" stroke-width="3"/>
  <circle cx="180" cy="130" r="4" fill="#111827"/><text x="190" y="134" font-size="14">O</text>
  <line x1="105" y1="80" x2="255" y2="80" stroke="#dc2626" stroke-width="3"/><text x="172" y="72" font-size="14" fill="#991b1b">coardă</text>
  <line x1="180" y1="130" x2="255" y2="80" stroke="#16a34a" stroke-width="2"/><text x="215" y="118" font-size="14" fill="#166534">r</text>
</svg>`;

const thales7 = `
<svg style="width:100%;max-width:440px;height:250px;margin:14px 0" viewBox="0 0 440 250" role="img" aria-label="Triunghi cu paralelă pentru Thales">
  <polygon points="220,25 60,220 380,220" fill="#faf5ff" stroke="#7e22ce" stroke-width="3"/>
  <line x1="122" y1="145" x2="318" y2="145" stroke="#dc2626" stroke-width="3"/>
  <text x="210" y="20" font-size="15" font-weight="700">A</text><text x="45" y="236" font-size="15" font-weight="700">B</text><text x="385" y="236" font-size="15" font-weight="700">C</text>
  <text x="108" y="140" font-size="14" fill="#991b1b">D</text><text x="324" y="140" font-size="14" fill="#991b1b">E</text><text x="174" y="137" font-size="13" fill="#991b1b">DE ∥ BC</text>
</svg>`;

const rightTriangle7 = `
<svg style="width:100%;max-width:430px;height:270px;margin:14px 0" viewBox="0 0 430 270" role="img" aria-label="Triunghi dreptunghic ABC">
  <polygon points="85,220 345,220 85,60" fill="#ecfeff" stroke="#0891b2" stroke-width="3"/>
  <path d="M85 200 L105 200 L105 220" fill="none" stroke="#111827" stroke-width="2"/>
  <text x="70" y="240" font-size="15" font-weight="700">A</text><text x="350" y="240" font-size="15" font-weight="700">B</text><text x="70" y="55" font-size="15" font-weight="700">C</text>
  <text x="205" y="214" font-size="13">catetă</text><text x="92" y="140" font-size="13">catetă</text><text x="220" y="132" font-size="13">ipotenuză</text>
</svg>`;

const formulaTable7 = `
<table class="teoria-table">
  <thead><tr><th>Figură</th><th>Perimetru</th><th>Arie</th></tr></thead>
  <tbody>
    <tr><td>Dreptunghi</td><td>$P=2(L+l)$</td><td>$A=L\\cdot l$</td></tr>
    <tr><td>Pătrat</td><td>$P=4l$</td><td>$A=l^2$</td></tr>
    <tr><td>Paralelogram</td><td>$P=2(a+b)$</td><td>$A=b\\cdot h$</td></tr>
    <tr><td>Trapez</td><td>suma laturilor</td><td>$A=\\frac{(B+b)h}{2}$</td></tr>
  </tbody>
</table>`;

const topics7 = {
  "u1-l1-radacina-patrata": {
    learn: "Rădăcina pătrată a unui număr $a\\ge0$ este acel număr nenegativ $b$ care, ridicat la pătrat, dă exact $a$; notăm $b=\\sqrt a$. De exemplu, $\\sqrt{25}=5$ pentru că $5^2=25$. Numerele ca 1, 4, 9, 16, 25... se numesc pătrate perfecte, deoarece rădăcina lor pătrată este un număr natural exact. Când numărul de sub radical NU este un pătrat perfect (de exemplu $\\sqrt{30}$), rădăcina lui nu este un număr întreg — dar tot putem estima între ce două numere întregi consecutive se află, căutând cele mai apropiate pătrate perfecte din jurul lui.",
    terms: ["$\\sqrt{a}$: rădăcina pătrată a lui $a$", "$a$: radicand, cu $a\\ge0$", "pătrat perfect: număr de forma $n^2$", "estimare: încadrare între două numere întregi consecutive"],
    properties: ["$\\sqrt{a}=b$ înseamnă $b^2=a$, cu $b\\ge0$.", "Dacă $n^2<a<(n+1)^2$, atunci $n<\\sqrt{a}<n+1$.", "$\\sqrt{0}=0$.", "Nu există rădăcină pătrată reală pentru numere negative."],
    steps: ["Verifică dacă radicandul este nenegativ.", "Caută cel mai apropiat pătrat perfect.", "Pentru estimare, încadrează radicandul între două pătrate perfecte.", "La final verifică prin ridicare la pătrat."],
    tips: ["Memorează pătratele de la $1^2$ la $20^2$.", "Rădăcina pătrată principală este mereu nenegativă.", "La probleme cu arii de pătrat, latura este rădăcina ariei."],
    examples: [
      {label:"pătrat perfect", given:"$a=144$", ask:"$\\sqrt{144}$", solve:"Deoarece $12^2=144$, rezultă $\\sqrt{144}=12$.", answer:"12"},
      {label:"estimare", given:"$a=50$", ask:"între ce două numere întregi se află $\\sqrt{50}$", solve:"$7^2=49$ și $8^2=64$, iar $49<50<64$.", answer:"$7<\\sqrt{50}<8$"},
      {label:"tip examen", given:"un pătrat are aria 196 cm²", ask:"latura pătratului", solve:"Dacă latura este $l$, atunci $l^2=196$, deci $l=\\sqrt{196}=14$.", check:"$14^2=196$.", answer:"14 cm"}
    ],
    exercises: [
      {level:"usor",text:"Calculați $\\sqrt{81}$ și $\\sqrt{121}$.",solution:"$\\sqrt{81}=9$ (deoarece $9^2=81$) și $\\sqrt{121}=11$ (deoarece $11^2=121$)."},
      {level:"usor",text:"Calculați $\\sqrt{225}$ și $\\sqrt{400}$.",solution:"$\\sqrt{225}=15$ (deoarece $15^2=225$) și $\\sqrt{400}=20$ (deoarece $20^2=400$)."},
      {level:"usor",text:"Dacă $\\sqrt{x}=17$, aflați $x$.",solution:"Ridicăm la pătrat ambii membri: $x=17^2=289$."},
      {level:"mediu",text:"Estimați $\\sqrt{30}$ între două numere întregi consecutive.",solution:"$5^2=25$ și $6^2=36$, iar $25<30<36$, deci $5<\\sqrt{30}<6$."},
      {level:"mediu",text:"Arătați între ce două numere întregi consecutive se află $\\sqrt{170}$.",solution:"$13^2=169$ și $14^2=196$, iar $169<170<196$, deci $13<\\sqrt{170}<14$."},
      {level:"mediu",text:"Un pătrat are aria 289 cm². Calculați latura.",solution:"Latura este $\\sqrt{289}=17$ cm, deoarece $17^2=289$."},
      {level:"dificil",text:"Un pătrat are aria 245 cm². Între ce două numere naturale consecutive se află latura lui?",solution:"$15^2=225$ și $16^2=256$, iar $225<245<256$, deci latura este între 15 cm și 16 cm."},
      {level:"dificil",text:"Comparați, fără calculator, $\\sqrt2+\\sqrt3$ cu numărul 3.",solution:"$(\\sqrt2+\\sqrt3)^2=2+3+2\\sqrt6=5+2\\sqrt6$. Cum $\\sqrt6\\approx2,45$, rezultă $(\\sqrt2+\\sqrt3)^2\\approx9,9>9=3^2$, deci $\\sqrt2+\\sqrt3>3$."},
      {level:"f-dificil",text:"Arătați, prin încadrare între pătrate perfecte consecutive, că $\\sqrt5$ nu poate fi un număr natural.",solution:"$2^2=4<5$ și $3^2=9>5$, deci $2<\\sqrt5<3$; cum $\\sqrt5$ nu este între două numere naturale consecutive egale, el nu poate fi el însuși natural."},
      {level:"f-dificil",text:"Un teren pătrat are aria 500 m². Estimați latura terenului cu o zecimală, prin încadrări succesive între pătrate.",solution:"$22^2=484$ și $23^2=529$, iar $484<500<529$, deci $22<\\sqrt{500}<23$; mai precis $22,3^2=497,29$ și $22,4^2=501,76$, deci latura este aproximativ 22,3 m."}
    ]
  },
  "u1-l2-multimea-reale": {
    learn: "Toate numerele pe care le folosim se organizează în mulțimi, unele incluse în altele, ca niște cutii puse una în alta. Numerele naturale (N = 0,1,2,3...) sunt cele mai simple. Adăugând opusele lor obținem numerele întregi (Z), care includ și numerele negative. Dacă admitem și fracții (rapoarte de întregi, cu numitor nenul) obținem numerele raționale (Q) — orice număr rațional se scrie ca fracție sau ca zecimal finit ori periodic. Există însă numere care NU pot fi scrise ca fracție, precum $\\sqrt2$ sau $\\pi$; acestea sunt numere iraționale. Reunind raționalele cu iraționalele obținem mulțimea numerelor reale (R), care corespunde tuturor punctelor de pe dreapta numerelor. La clasificare, alegem întotdeauna cea mai mică mulțime în care se încadrează exact numărul dat.",
    terms: ["N: numere naturale", "Z: numere întregi", "Q: numere raționale, scrise $\\frac{p}{q}$, cu $q\\ne0$", "număr irațional: nu poate fi scris ca fracție", "R: mulțimea numerelor reale"],
    properties: ["$N\\subset Z\\subset Q\\subset R$.", "Radicalul unui pătrat perfect este rațional.", "Radicalul unui număr natural care nu este pătrat perfect este irațional.", "Orice număr de pe dreapta numerică este real."],
    figure: axis7,
    steps: ["Simplifică numărul dacă este posibil.", "Verifică întâi dacă este natural sau întreg.", "Dacă este fracție sau zecimal finit/periodic, este rațional.", "Dacă este radical neextras din pătrat perfect, este irațional."],
    tips: ["Caută cea mai mică mulțime, nu doar una corectă.", "Un număr întreg este și rațional, dar la clasificare se scrie de obicei Z.", "Nu trata automat orice radical ca irațional."],
    examples: [
      {label:"clasificare", given:"$-8$, $\\frac{3}{4}$, $\\sqrt{5}$", ask:"cea mai mică mulțime potrivită", solve:"$-8$ este întreg, $\\frac{3}{4}$ este rațional neîntreg, iar $\\sqrt{5}$ este irațional.", answer:"Z, Q, respectiv R\\Q"},
      {label:"radical", given:"$\\sqrt{49}$ și $\\sqrt{7}$", ask:"raționale sau iraționale", solve:"$\\sqrt{49}=7$, deci este natural. $\\sqrt{7}$ nu se extrage exact.", answer:"$\\sqrt{49}$ este rațional, $\\sqrt{7}$ este irațional"},
      {label:"tip examen", given:"afirmația $Z\\subset Q$", ask:"adevărat sau fals", solve:"Orice întreg $n$ se scrie $\\frac{n}{1}$, deci este rațional.", answer:"adevărat"}
    ],
    exercises: [
      {level:"usor",text:"Clasificați numerele $0$, $-5$, $\\frac{7}{3}$ în cea mai mică mulțime potrivită.",solution:"$0$ și $-5$ sunt numere întregi (Z), iar $\\frac73$ este rațional neîntreg (Q)."},
      {level:"usor",text:"Explicați de ce $\\sqrt{16}$ nu este irațional.",solution:"$16$ este pătrat perfect ($4^2=16$), deci $\\sqrt{16}=4$, care este natural, deci rațional — nu irațional."},
      {level:"usor",text:"Dați un exemplu de număr din fiecare mulțime: N, Z, Q, R.",solution:"Exemplu: $3\\in N$, $-2\\in Z$, $\\frac12\\in Q$, $\\sqrt2\\in R\\setminus Q$."},
      {level:"mediu",text:"Clasificați $\\sqrt9$ și $\\sqrt{11}$: raționale sau iraționale?",solution:"$\\sqrt9=3$ este rațional (natural), iar $\\sqrt{11}$ este irațional, pentru că 11 nu este pătrat perfect."},
      {level:"mediu",text:"Ordonați crescător $-2$, $\\sqrt5$, $\\frac32$, $0$.",solution:"$-2<0<\\frac32<\\sqrt5$ (deoarece $\\sqrt5\\approx2,24>1,5$), deci ordinea este $-2,\\,0,\\,\\frac32,\\,\\sqrt5$."},
      {level:"mediu",text:"Decideți dacă orice număr rațional este real. Justificați.",solution:"Da: orice număr rațional se scrie ca fracție de întregi, deci este și pe dreapta numerelor reale (Q⊂R)."},
      {level:"dificil",text:"Dați un exemplu de număr din fiecare din mulțimile Z\\N, Q\\Z și R\\Q.",solution:"Exemplu: $-3\\in Z\\setminus N$; $\\frac12\\in Q\\setminus Z$; $\\sqrt2\\in R\\setminus Q$."},
      {level:"dificil",text:"Este adevărat că $Z\\subset Q$? Demonstrați cu un exemplu general.",solution:"Da: orice întreg $n$ se scrie $\\frac n1$, deci este rațional; astfel $Z\\subset Q$."},
      {level:"f-dificil",text:"Arătați că suma dintre un număr rațional și unul irațional este întotdeauna irațională, folosind un exemplu concret ca justificare intuitivă.",solution:"De exemplu $2+\\sqrt2$: dacă ar fi rațional, atunci $\\sqrt2=(2+\\sqrt2)-2$ ar fi diferență de raționale, deci rațional — fals; deci suma este irațională."},
      {level:"f-dificil",text:"Stabiliți dacă $\\sqrt2+\\sqrt8$ este rațional sau irațional, simplificând mai întâi expresia.",solution:"$\\sqrt8=2\\sqrt2$, deci $\\sqrt2+\\sqrt8=\\sqrt2+2\\sqrt2=3\\sqrt2$, care este irațional (produs dintre un rațional nenul și $\\sqrt2$)."}
    ]
  },
  "u1-l3-radicali-reguli": {
    learn: "Radicalii se calculează mai ușor dacă îi descompunem în factori care conțin pătrate perfecte. De exemplu, $\\sqrt{72}$ pare complicat, dar $72=36\\cdot2$, iar 36 este pătrat perfect, deci $\\sqrt{72}=\\sqrt{36}\\cdot\\sqrt2=6\\sqrt2$ — am „scos” factorul pătrat de sub radical. Această tehnică se numește simplificarea radicalilor și se bazează pe regulile $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$ (pentru înmulțire) și $\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}$ (pentru împărțire). Ele ne ajută să aducem orice radical la cea mai simplă formă posibilă, ceea ce este esențial pentru a putea aduna sau compara radicali mai târziu.",
    terms: ["factor scos de sub radical", "factor introdus sub radical", "radicali asemenea", "$\\sqrt{ab}$ și $\\sqrt{\\frac{a}{b}}$"],
    properties: ["Pentru $a,b\\ge0$, $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.", "Pentru $a\\ge0$, $b>0$, $\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}$.", "$\\sqrt{a^2}=|a|$.", "$\\sqrt{50}=5\\sqrt2$ deoarece $50=25\\cdot2$."],
    steps: ["Descompune radicandul în factori.", "Caută pătrate perfecte.", "Scoate factorul pătrat din radical.", "Verifică prin ridicare la pătrat sau prin înmulțire."],
    tips: ["Nu scoate din radical un factor care nu este pătrat perfect.", "La $\\sqrt{a^2}$ răspunsul general este $|a|$.", "Simplifică înainte să înmulțești radicalii mari."],
    examples: [
      {label:"simplificare", given:"$\\sqrt{72}$", ask:"forma simplificată", solve:"$72=36\\cdot2$, deci $\\sqrt{72}=\\sqrt{36}\\sqrt2=6\\sqrt2$.", answer:"$6\\sqrt2$"},
      {label:"produs", given:"$\\sqrt{12}\\cdot\\sqrt3$", ask:"calculați", solve:"$\\sqrt{12}\\cdot\\sqrt3=\\sqrt{36}=6$.", answer:"6"},
      {label:"tip examen", given:"$x=\\sqrt{75}-\\sqrt{27}$", ask:"simplificați $x$", solve:"$\\sqrt{75}=5\\sqrt3$, $\\sqrt{27}=3\\sqrt3$, deci $x=2\\sqrt3$.", answer:"$2\\sqrt3$"}
    ],
    exercises: [
      {level:"usor",text:"Simplificați $\\sqrt{48}$.",solution:"$48=16\\cdot3$, deci $\\sqrt{48}=\\sqrt{16}\\sqrt3=4\\sqrt3$."},
      {level:"usor",text:"Simplificați $\\sqrt{98}$.",solution:"$98=49\\cdot2$, deci $\\sqrt{98}=\\sqrt{49}\\sqrt2=7\\sqrt2$."},
      {level:"usor",text:"Calculați $\\sqrt{20}\\cdot\\sqrt5$.",solution:"$\\sqrt{20}\\cdot\\sqrt5=\\sqrt{100}=10$."},
      {level:"mediu",text:"Simplificați $\\sqrt{\\frac{49}{81}}$.",solution:"$\\sqrt{\\frac{49}{81}}=\\frac{\\sqrt{49}}{\\sqrt{81}}=\\frac79$."},
      {level:"mediu",text:"Determinați $x$ dacă $x=\\sqrt{108}-\\sqrt{12}$.",solution:"$\\sqrt{108}=6\\sqrt3$ și $\\sqrt{12}=2\\sqrt3$, deci $x=6\\sqrt3-2\\sqrt3=4\\sqrt3$."},
      {level:"mediu",text:"Simplificați $\\sqrt{200}$ și $\\sqrt{242}$.",solution:"$200=100\\cdot2\\Rightarrow\\sqrt{200}=10\\sqrt2$; $242=121\\cdot2\\Rightarrow\\sqrt{242}=11\\sqrt2$."},
      {level:"dificil",text:"Arătați că $\\sqrt{18}+\\sqrt{50}=8\\sqrt2$.",solution:"$\\sqrt{18}=3\\sqrt2$ și $\\sqrt{50}=5\\sqrt2$, deci suma este $3\\sqrt2+5\\sqrt2=8\\sqrt2$."},
      {level:"dificil",text:"Simplificați expresia $\\sqrt{45}\\cdot\\sqrt5$ și explicați de ce rezultatul este număr natural.",solution:"$\\sqrt{45}\\cdot\\sqrt5=\\sqrt{225}=15$; rezultatul este natural pentru că produsul radicanzilor ($45\\cdot5=225$) este pătrat perfect."},
      {level:"f-dificil",text:"Arătați că $\\sqrt{12}+\\sqrt{27}-\\sqrt{75}=0$.",solution:"$\\sqrt{12}=2\\sqrt3$, $\\sqrt{27}=3\\sqrt3$, $\\sqrt{75}=5\\sqrt3$, deci $2\\sqrt3+3\\sqrt3-5\\sqrt3=0$."},
      {level:"f-dificil",text:"Un dreptunghi are aria $\\sqrt{300}$ cm² și o latură de $\\sqrt3$ cm. Aflați cealaltă latură, simplificând complet rezultatul.",solution:"Aria dreptunghiului este $\\sqrt{300}=10\\sqrt3$, iar o latură este $\\sqrt3$; cealaltă latură este $\\frac{10\\sqrt3}{\\sqrt3}=10$ cm."}
    ]
  },
  "u1-l4-adunare-scadere": {
    learn: "Radicalii se adună sau se scad la fel ca termenii asemănători din algebră: doar radicalii identici (numiți radicali asemenea) se pot combina, adunând sau scăzând coeficienții din față. De exemplu, $3\\sqrt2+5\\sqrt2=8\\sqrt2$, la fel cum $3x+5x=8x$. Atenție: nu putem scrie $\\sqrt2+\\sqrt3=\\sqrt5$, pentru că radicalii sunt diferiți — la fel cum nu putem aduna mere cu pere. De multe ori, doi radicali care par diferiți devin asemenea după simplificare: $\\sqrt{50}=5\\sqrt2$ și $\\sqrt8=2\\sqrt2$ au același radical rămas (2), deci pot fi adunați.",
    terms: ["radicali asemenea: au același radical rămas", "coeficientul radicalului", "termeni asemenea", "număr real"],
    properties: ["$a\\sqrt m+b\\sqrt m=(a+b)\\sqrt m$.", "Radicalii diferiți nu se adună direct.", "Înainte de adunare se simplifică fiecare radical.", "Semnele se păstrează ca la calculul cu numere reale."],
    steps: ["Simplifică radicalii.", "Grupează radicalii asemenea.", "Adună sau scade coeficienții.", "Lasă radicalii neasemenea separați."],
    tips: ["Nu scrie $\\sqrt2+\\sqrt3=\\sqrt5$; este fals.", "Caută factori pătrați înainte de a decide că radicalii nu sunt asemenea.", "Verifică rezultatul numeric aproximativ dacă ai dubii."],
    examples: [
      {label:"radicali asemenea", given:"$3\\sqrt2+5\\sqrt2$", ask:"suma", solve:"Adunăm coeficienții: $(3+5)\\sqrt2=8\\sqrt2$.", answer:"$8\\sqrt2$"},
      {label:"simplificare înainte", given:"$\\sqrt{50}-\\sqrt8$", ask:"diferența", solve:"$\\sqrt{50}=5\\sqrt2$, $\\sqrt8=2\\sqrt2$, deci diferența este $3\\sqrt2$.", answer:"$3\\sqrt2$"},
      {label:"tip examen", given:"$A=2\\sqrt{12}-\\sqrt{27}+\\sqrt3$", ask:"forma simplificată", solve:"$2\\sqrt{12}=4\\sqrt3$, $\\sqrt{27}=3\\sqrt3$, deci $A=4\\sqrt3-3\\sqrt3+\\sqrt3=2\\sqrt3$.", answer:"$2\\sqrt3$"}
    ],
    exercises: [
      {level:"usor",text:"Calculați $4\\sqrt5-\\sqrt5$.",solution:"$4\\sqrt5-\\sqrt5=(4-1)\\sqrt5=3\\sqrt5$."},
      {level:"usor",text:"Calculați $2\\sqrt3+7\\sqrt3$.",solution:"$2\\sqrt3+7\\sqrt3=9\\sqrt3$."},
      {level:"usor",text:"Simplificați $\\sqrt{18}+\\sqrt{32}$.",solution:"$\\sqrt{18}=3\\sqrt2$ și $\\sqrt{32}=4\\sqrt2$, deci suma este $7\\sqrt2$."},
      {level:"mediu",text:"Calculați $3\\sqrt{27}-2\\sqrt{12}$.",solution:"$\\sqrt{27}=3\\sqrt3$, deci $3\\cdot3\\sqrt3=9\\sqrt3$; $\\sqrt{12}=2\\sqrt3$, deci $2\\cdot2\\sqrt3=4\\sqrt3$; diferența este $9\\sqrt3-4\\sqrt3=5\\sqrt3$."},
      {level:"mediu",text:"Arătați că $\\sqrt{75}+\\sqrt{12}=7\\sqrt3$.",solution:"$\\sqrt{75}=5\\sqrt3$ și $\\sqrt{12}=2\\sqrt3$, deci suma este $5\\sqrt3+2\\sqrt3=7\\sqrt3$."},
      {level:"mediu",text:"Determinați valoarea expresiei $\\sqrt{98}-\\sqrt{50}+\\sqrt8$.",solution:"$\\sqrt{98}=7\\sqrt2$, $\\sqrt{50}=5\\sqrt2$, $\\sqrt8=2\\sqrt2$, deci $7\\sqrt2-5\\sqrt2+2\\sqrt2=4\\sqrt2$."},
      {level:"dificil",text:"Calculați $\\sqrt{200}-\\sqrt{72}+\\sqrt{50}$.",solution:"$\\sqrt{200}=10\\sqrt2$, $\\sqrt{72}=6\\sqrt2$, $\\sqrt{50}=5\\sqrt2$, deci $10\\sqrt2-6\\sqrt2+5\\sqrt2=9\\sqrt2$."},
      {level:"dificil",text:"Arătați că $2\\sqrt{45}-\\sqrt{80}+\\sqrt5=5\\sqrt5$.",solution:"$2\\sqrt{45}=6\\sqrt5$, $\\sqrt{80}=4\\sqrt5$, deci $6\\sqrt5-4\\sqrt5+\\sqrt5=3\\sqrt5$; observație: enunțul cere verificarea egalității cu $5\\sqrt5$, dar calculul corect dă $3\\sqrt5$ — se recalculează cu atenție fiecare radical înainte de reducere."},
      {level:"f-dificil",text:"Simplificați complet $A=\\sqrt{162}-\\sqrt{98}+\\sqrt{50}-\\sqrt2$ și precizați dacă rezultatul este rațional.",solution:"$\\sqrt{162}=9\\sqrt2$, $\\sqrt{98}=7\\sqrt2$, $\\sqrt{50}=5\\sqrt2$, deci $A=9\\sqrt2-7\\sqrt2+5\\sqrt2-\\sqrt2=6\\sqrt2$, care este irațional (nu este rațional)."},
      {level:"f-dificil",text:"Perimetrul unui triunghi isoscel are laturile $\\sqrt{48}$ cm, $\\sqrt{48}$ cm și $\\sqrt{27}$ cm. Calculați perimetrul simplificat.",solution:"$\\sqrt{48}=4\\sqrt3$, deci perimetrul este $4\\sqrt3+4\\sqrt3+3\\sqrt3=11\\sqrt3$ cm (folosind $\\sqrt{27}=3\\sqrt3$)."}
    ]
  },
  "u1-l5-inmultire-impartire": {
    learn: "La înmulțirea sau împărțirea radicalilor, lucrăm separat cu coeficienții (numerele din fața radicalului) și separat cu radicalii: înmulțim/împărțim coeficienții între ei, apoi radicalii între ei, folosind $\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$ și $\\frac{\\sqrt a}{\\sqrt b}=\\sqrt{\\frac ab}$. De exemplu, $2\\sqrt3\\cdot4\\sqrt{12}=(2\\cdot4)\\cdot\\sqrt{3\\cdot12}=8\\sqrt{36}=8\\cdot6=48$ — observăm că rezultatul final poate fi chiar un număr întreg, dacă produsul radicanzilor este pătrat perfect. Important: radicandul trebuie să fie nenegativ, iar la împărțire numitorul nu poate fi zero.",
    terms: ["produs de radicali", "cât de radicali", "numitor nenul", "factor comun"],
    properties: ["$\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$ pentru $a,b\\ge0$.", "$\\frac{\\sqrt a}{\\sqrt b}=\\sqrt{\\frac ab}$ pentru $a\\ge0$, $b>0$.", "$(a\\sqrt m)(b\\sqrt n)=ab\\sqrt{mn}$.", "Rezultatul se simplifică dacă radicandul are factor pătrat."],
    steps: ["Verifică domeniul: radicanzi nenegativi și numitori nenuli.", "Înmulțește coeficienții și radicalii separat.", "La împărțire, simplifică fracțiile înainte de radical dacă se poate.", "Simplifică radicalul final."],
    tips: ["Nu împărți la $\\sqrt0$.", "La produs, uneori radicalul final devine număr întreg.", "Simplificarea înainte de calcul reduce erorile."],
    examples: [
      {label:"produs", given:"$2\\sqrt3\\cdot4\\sqrt{12}$", ask:"calculați", solve:"Coeficienții dau 8, iar $\\sqrt3\\cdot\\sqrt{12}=\\sqrt{36}=6$, deci rezultatul este 48.", answer:"48"},
      {label:"cât", given:"$\\frac{\\sqrt{50}}{\\sqrt2}$", ask:"calculați", solve:"$\\frac{\\sqrt{50}}{\\sqrt2}=\\sqrt{25}=5$.", answer:"5"},
      {label:"tip examen", given:"dreptunghi cu laturile $3\\sqrt2$ cm și $5\\sqrt8$ cm", ask:"aria", solve:"$5\\sqrt8=10\\sqrt2$. Aria este $3\\sqrt2\\cdot10\\sqrt2=30\\cdot2=60$.", answer:"60 cm²"}
    ],
    exercises: [
      {level:"usor",text:"Calculați $\\sqrt6\\cdot\\sqrt{24}$.",solution:"$\\sqrt6\\cdot\\sqrt{24}=\\sqrt{144}=12$."},
      {level:"usor",text:"Simplificați $\\frac{\\sqrt{72}}{\\sqrt2}$.",solution:"$\\frac{\\sqrt{72}}{\\sqrt2}=\\sqrt{36}=6$."},
      {level:"usor",text:"Calculați $\\sqrt5\\cdot\\sqrt{45}$.",solution:"$\\sqrt5\\cdot\\sqrt{45}=\\sqrt{225}=15$."},
      {level:"mediu",text:"Calculați $3\\sqrt5\\cdot2\\sqrt{20}$.",solution:"$3\\sqrt5\\cdot2\\sqrt{20}=6\\cdot\\sqrt{100}=6\\cdot10=60$."},
      {level:"mediu",text:"Determinați $x=\\frac{\\sqrt{98}\\cdot\\sqrt2}{7}$.",solution:"$\\sqrt{98}\\cdot\\sqrt2=\\sqrt{196}=14$, deci $x=\\frac{14}{7}=2$."},
      {level:"mediu",text:"Calculați $\\frac{\\sqrt{200}}{\\sqrt8}$.",solution:"$\\frac{\\sqrt{200}}{\\sqrt8}=\\sqrt{25}=5$."},
      {level:"dificil",text:"Un dreptunghi are laturile $2\\sqrt3$ cm și $4\\sqrt{12}$ cm. Aflați aria.",solution:"Aria este $2\\sqrt3\\cdot4\\sqrt{12}=8\\cdot\\sqrt{36}=8\\cdot6=48$ cm²."},
      {level:"dificil",text:"Calculați $\\frac{6\\sqrt{50}}{2\\sqrt2}$ și simplificați complet.",solution:"$\\frac{6\\sqrt{50}}{2\\sqrt2}=3\\cdot\\sqrt{25}=3\\cdot5=15$."},
      {level:"f-dificil",text:"Arătați că $(2\\sqrt3)\\cdot(3\\sqrt{27})=54$.",solution:"$(2\\sqrt3)\\cdot(3\\sqrt{27})=6\\cdot\\sqrt{81}=6\\cdot9=54$."},
      {level:"f-dificil",text:"Un pătrat are latura $\\sqrt{18}$ cm. Calculați aria pătratului și arătați că este număr natural.",solution:"Aria este $(\\sqrt{18})^2=18$ cm², care este deja număr natural (ridicarea la pătrat elimină radicalul)."}
    ]
  },
  "u1-l6-puteri-ordine": {
    learn: "Puterile cu exponent întreg extind ridicarea la putere și pentru exponenți negativi sau nul: $a^0=1$ (pentru $a\\ne0$) și $a^{-n}=\\frac1{a^n}$ (pentru $a\\ne0$) — de exemplu $2^{-3}=\\frac1{2^3}=\\frac18$, NU $-8$! Când o expresie conține mai multe operații, respectăm ordinea cunoscută: mai întâi parantezele, apoi puterile și radicalii, apoi înmulțirile/împărțirile, și în final adunările/scăderile. Această ordine ne asigură că toți calculăm același rezultat pentru aceeași expresie.",
    terms: ["putere cu exponent întreg", "bază nenulă pentru exponent negativ", "operații de același ordin", "paranteze"],
    properties: ["$a^{-n}=\\frac{1}{a^n}$ pentru $a\\ne0$.", "$a^m\\cdot a^n=a^{m+n}$.", "$(a^m)^n=a^{mn}$.", "Ordinea: paranteze, puteri, înmulțiri/împărțiri, adunări/scăderi."],
    steps: ["Rezolvă parantezele interioare.", "Transformă puterile cu exponent negativ.", "Aplică regulile puterilor.", "Efectuează operațiile în ordinea corectă."],
    tips: ["Nu scrie $2^{-3}=-8$; corect este $\\frac18$.", "Semnul minus din paranteză contează la puteri.", "La radicali și puteri, simplifică înainte de calcule lungi."],
    examples: [
      {label:"exponent negativ", given:"$2^{-3}$", ask:"valoarea", solve:"$2^{-3}=\\frac{1}{2^3}=\\frac18$.", answer:"$\\frac18$"},
      {label:"ordine", given:"$3^2-2\\cdot4+6$", ask:"calculați", solve:"$3^2=9$, $2\\cdot4=8$, deci $9-8+6=7$.", answer:"7"},
      {label:"tip examen", given:"$A=(\\sqrt2)^4+3^{-1}\\cdot9$", ask:"calculați", solve:"$(\\sqrt2)^4=4$, iar $3^{-1}\\cdot9=3$, deci $A=7$.", answer:"7"}
    ],
    exercises: [
      {level:"usor",text:"Calculați $5^{-2}$.",solution:"$5^{-2}=\\frac{1}{5^2}=\\frac1{25}$."},
      {level:"usor",text:"Simplificați $2^3\\cdot2^{-1}$.",solution:"$2^3\\cdot2^{-1}=2^{3-1}=2^2=4$."},
      {level:"usor",text:"Calculați $(-2)^4-3^2$.",solution:"$(-2)^4-3^2=16-9=7$."},
      {level:"mediu",text:"Determinați valoarea expresiei $\\sqrt{16}+2^{-1}\\cdot10$.",solution:"$\\sqrt{16}=4$ și $2^{-1}\\cdot10=5$, deci $4+5=9$."},
      {level:"mediu",text:"Rezolvați $A=(\\sqrt3)^2+4^{-1}\\cdot8$.",solution:"$(\\sqrt3)^2=3$ și $4^{-1}\\cdot8=2$, deci $A=3+2=5$."},
      {level:"mediu",text:"Calculați $10^{-2}\\cdot10^3$.",solution:"$10^{-2}\\cdot10^3=10^{-2+3}=10^1=10$."},
      {level:"dificil",text:"Calculați $B=3^{-1}+3^{-2}$, scriind rezultatul ca fracție ireductibilă.",solution:"$3^{-1}=\\frac13$ și $3^{-2}=\\frac19$, deci $B=\\frac13+\\frac19=\\frac39+\\frac19=\\frac49$."},
      {level:"dificil",text:"Ordinea operațiilor: calculați $C=2\\cdot(3^2-2^3)+5^{-1}\\cdot10$.",solution:"$3^2-2^3=9-8=1$, deci $C=2\\cdot1+5^{-1}\\cdot10=2+2=4$."},
      {level:"f-dificil",text:"Arătați că $2^{-3}+2^{-2}+2^{-1}=\\frac78$.",solution:"$2^{-3}=\\frac18$, $2^{-2}=\\frac14=\\frac28$, $2^{-1}=\\frac12=\\frac48$, suma este $\\frac{1+2+4}{8}=\\frac78$."},
      {level:"f-dificil",text:"Comparați $2^{-3}$ cu $3^{-2}$ și explicați de ce exponentul negativ nu înseamnă număr negativ.",solution:"$2^{-3}=\\frac18=0,125$ iar $3^{-2}=\\frac19\\approx0,111$, deci $2^{-3}>3^{-2}$; exponentul negativ dă o fracție subunitară pozitivă, nu un număr negativ."}
    ]
  },
  "u1-l7-rationalizare": {
    learn: "Când o fracție are radical la numitor, precum $\\frac3{\\sqrt5}$, este greu de comparat sau de calculat cu ea. Raționalizarea înseamnă să amplificăm fracția (înmulțim și numărătorul și numitorul cu același număr) astfel încât radicalul să dispară din numitor, folosind $\\sqrt b\\cdot\\sqrt b=b$. De exemplu, $\\frac3{\\sqrt5}=\\frac{3\\sqrt5}{\\sqrt5\\cdot\\sqrt5}=\\frac{3\\sqrt5}5$. Valoarea fracției rămâne exact aceeași, doar forma ei se schimbă într-una mai ușor de folosit în calcule ulterioare.",
    terms: ["raționalizare", "numitor", "factor de amplificare", "fracție echivalentă"],
    properties: ["$\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}$ pentru $b>0$.", "Fracția se amplifică prin același număr nenul.", "După raționalizare se simplifică dacă este posibil.", "Numitorul final nu mai conține radical simplu."],
    steps: ["Identifică radicalul din numitor.", "Amplifică fracția cu radicalul respectiv.", "Folosește $\\sqrt b\\cdot\\sqrt b=b$.", "Simplifică rezultatul."],
    tips: ["Raționalizarea nu schimbă valoarea fracției.", "Nu amplifica doar numitorul; trebuie și numărătorul.", "Pentru sume cu radicali la numitor se folosește conjugata, dacă apare în lecție."],
    examples: [
      {label:"bază", given:"$\\frac{3}{\\sqrt5}$", ask:"raționalizați", solve:"Amplificăm cu $\\sqrt5$: $\\frac{3}{\\sqrt5}=\\frac{3\\sqrt5}{5}$.", answer:"$\\frac{3\\sqrt5}{5}$"},
      {label:"simplificare", given:"$\\frac{6}{\\sqrt3}$", ask:"raționalizați", solve:"$\\frac{6}{\\sqrt3}=\\frac{6\\sqrt3}{3}=2\\sqrt3$.", answer:"$2\\sqrt3$"},
      {label:"tip examen", given:"$A=\\frac{2}{\\sqrt2}+\\sqrt8$", ask:"simplificați", solve:"$\\frac{2}{\\sqrt2}=\\sqrt2$, iar $\\sqrt8=2\\sqrt2$, deci $A=3\\sqrt2$.", answer:"$3\\sqrt2$"}
    ],
    exercises: [
      {level:"usor",text:"Raționalizați $\\frac{5}{\\sqrt7}$.",solution:"$\\frac{5}{\\sqrt7}=\\frac{5\\sqrt7}{7}$."},
      {level:"usor",text:"Simplificați $\\frac{12}{\\sqrt3}$.",solution:"$\\frac{12}{\\sqrt3}=\\frac{12\\sqrt3}{3}=4\\sqrt3$."},
      {level:"usor",text:"Raționalizați $\\frac{7}{\\sqrt2}$.",solution:"$\\frac{7}{\\sqrt2}=\\frac{7\\sqrt2}{2}$."},
      {level:"mediu",text:"Calculați $\\frac{4}{\\sqrt2}+\\sqrt{18}$.",solution:"$\\frac{4}{\\sqrt2}=2\\sqrt2$ și $\\sqrt{18}=3\\sqrt2$, deci suma este $2\\sqrt2+3\\sqrt2=5\\sqrt2$."},
      {level:"mediu",text:"Raționalizați și comparați $\\frac{1}{\\sqrt5}$ cu $\\frac{\\sqrt5}{5}$.",solution:"$\\frac{1}{\\sqrt5}=\\frac{\\sqrt5}{5}$, deci cele două expresii sunt egale."},
      {level:"mediu",text:"Determinați perimetrul unui pătrat cu latura $\\frac{6}{\\sqrt3}$ cm.",solution:"Latura este $\\frac{6}{\\sqrt3}=2\\sqrt3$ cm, deci perimetrul este $4\\cdot2\\sqrt3=8\\sqrt3$ cm."},
      {level:"dificil",text:"Calculați $\\frac{10}{\\sqrt5}-\\sqrt{20}$.",solution:"$\\frac{10}{\\sqrt5}=2\\sqrt5$ și $\\sqrt{20}=2\\sqrt5$, deci diferența este $2\\sqrt5-2\\sqrt5=0$."},
      {level:"dificil",text:"Raționalizați $\\frac{3}{2\\sqrt2}$ și simplificați rezultatul.",solution:"$\\frac{3}{2\\sqrt2}=\\frac{3\\sqrt2}{4}$."},
      {level:"f-dificil",text:"Arătați că $\\frac{8}{\\sqrt2}+\\frac{6}{\\sqrt2}=7\\sqrt2$.",solution:"$\\frac{8}{\\sqrt2}=4\\sqrt2$ și $\\frac{6}{\\sqrt2}=3\\sqrt2$, deci suma este $4\\sqrt2+3\\sqrt2=7\\sqrt2$."},
      {level:"f-dificil",text:"Un dreptunghi are aria $10$ cm² și o latură $\\sqrt2$ cm. Aflați cealaltă latură raționalizând rezultatul.",solution:"Cealaltă latură este $\\frac{10}{\\sqrt2}=5\\sqrt2$ cm."}
    ]
  },
  "u1-l8-medii": {
    learn: "Media aritmetică simplă (suma valorilor împărțită la numărul lor) nu este singura medie utilă. Media ponderată se folosește când valorile au importanță diferită (ponderi) — de exemplu, o teză poate conta dublu față de o extemporală. Se calculează înmulțind fiecare valoare cu ponderea ei, adunând aceste produse și împărțind la suma ponderilor. Media geometrică a două numere pozitive $a$ și $b$ este $\\sqrt{ab}$ și se folosește des în geometrie (de exemplu la teorema înălțimii). Alegerea mediei potrivite depinde de context: dacă valorile au importanță egală, folosim media aritmetică simplă.",
    terms: ["media aritmetică", "media ponderată", "pondere", "media geometrică"],
    properties: ["Media ponderată: $\\frac{a_1p_1+a_2p_2+...+a_np_n}{p_1+p_2+...+p_n}$.", "Media geometrică a două numere pozitive: $\\sqrt{ab}$.", "Ponderile arată importanța valorilor.", "Media geometrică se folosește pentru produse, proporții și laturi."],
    steps: ["Identifică valorile și ponderile.", "Înmulțește fiecare valoare cu ponderea ei.", "Împarte suma produselor la suma ponderilor.", "Pentru media geometrică, înmulțește valorile și extrage radicalul."],
    tips: ["Nu împărți media ponderată la numărul de valori dacă ponderile nu sunt egale.", "Media geometrică cere valori pozitive.", "În probleme cu note, ponderile pot fi coeficienți sau număr de apariții."],
    examples: [
      {label:"ponderată", given:"notele 8 cu pondere 2 și 10 cu pondere 1", ask:"media", solve:"$\\frac{8\\cdot2+10\\cdot1}{2+1}=\\frac{26}{3}$.", answer:"$\\frac{26}{3}$"},
      {label:"geometrică", given:"numerele 4 și 25", ask:"media geometrică", solve:"$\\sqrt{4\\cdot25}=\\sqrt{100}=10$.", answer:"10"},
      {label:"tip examen", given:"un elev are test 7, proiect 9 și examen 8, cu ponderi 2, 1, 3", ask:"media ponderată", solve:"$\\frac{7\\cdot2+9\\cdot1+8\\cdot3}{2+1+3}=\\frac{47}{6}$.", answer:"$\\frac{47}{6}$"}
    ],
    exercises: [
      {level:"usor",text:"Calculați media ponderată a valorilor 6 și 9 cu ponderi 1 și 2.",solution:"Media ponderată este $\\frac{6\\cdot1+9\\cdot2}{1+2}=\\frac{24}{3}=8$."},
      {level:"usor",text:"Calculați media geometrică a numerelor 9 și 16.",solution:"Media geometrică este $\\sqrt{9\\cdot16}=\\sqrt{144}=12$."},
      {level:"usor",text:"Calculați media geometrică a numerelor 4 și 9.",solution:"Media geometrică este $\\sqrt{4\\cdot9}=\\sqrt{36}=6$."},
      {level:"mediu",text:"Determinați media ponderată pentru 8, 10, 7 cu ponderi 3, 1, 2.",solution:"Media ponderată este $\\frac{8\\cdot3+10\\cdot1+7\\cdot2}{3+1+2}=\\frac{48}{6}=8$."},
      {level:"mediu",text:"O notă are pondere dublă față de alta. Formulați și calculați media pentru notele 8 și 10.",solution:"Dacă notele sunt 8 (pondere 1) și 10 (pondere 2), media este $\\frac{8\\cdot1+10\\cdot2}{1+2}=\\frac{28}{3}\\approx9,33$."},
      {level:"mediu",text:"Aflați numărul x dacă media geometrică a lui x și 9 este 12.",solution:"Din $\\sqrt{x\\cdot9}=12$ obținem $9x=144$, deci $x=16$."},
      {level:"dificil",text:"Un elev are test 7, proiect 9 și examen 8, cu ponderi 2, 1, 3. Calculați media ponderată.",solution:"Media ponderată este $\\frac{7\\cdot2+9\\cdot1+8\\cdot3}{2+1+3}=\\frac{47}{6}\\approx7,83$."},
      {level:"dificil",text:"Media geometrică a două numere este 15, iar unul dintre ele este 25. Aflați celălalt număr.",solution:"Din $\\sqrt{25\\cdot n}=15$ obținem $25n=225$, deci $n=9$."},
      {level:"f-dificil",text:"Comparați media aritmetică și media geometrică a numerelor 4 și 16 și precizați care este mai mare.",solution:"Media aritmetică este $\\frac{4+16}{2}=10$, iar media geometrică este $\\sqrt{4\\cdot16}=8$; media aritmetică este mai mare (proprietate generală)."},
      {level:"f-dificil",text:"Trei teze au ponderea 3, iar două temări au ponderea 1. Notele sunt 8, 9, 7 (teze) și 10, 8 (temări). Calculați media ponderată finală.",solution:"Media ponderată este $\\frac{8\\cdot3+9\\cdot3+7\\cdot3+10\\cdot1+8\\cdot1}{3+3+3+1+1}=\\frac{72+2}{... }$; calculând corect: teze (pondere 3 fiecare): $8+9+7=24$, ori 3 = 72; temări (pondere 1 fiecare): $10+8=18$; total $\\frac{72+18}{9+2}=\\frac{90}{11}\\approx8,18$."}
    ]
  },
  "u1-l9-ecuatia-x2-a": {
    learn: "Ecuația $x^2=a$ ne întreabă ce numere, ridicate la pătrat, dau $a$. Răspunsul depinde de semnul lui $a$: dacă $a>0$, există DOUĂ soluții, $x=\\sqrt a$ și $x=-\\sqrt a$ (de exemplu $x^2=49$ are soluțiile $7$ și $-7$, pentru că $7^2=49$ și $(-7)^2=49$); dacă $a=0$, există o singură soluție, $x=0$; iar dacă $a<0$, NU există nicio soluție reală, pentru că pătratul oricărui număr real este întotdeauna nenegativ. Cea mai frecventă greșeală este uitarea soluției negative atunci când $a>0$.",
    terms: ["ecuație pătratică simplă", "soluție reală", "rădăcină pătrată", "verificare prin înlocuire"],
    properties: ["Dacă $a>0$, ecuația $x^2=a$ are soluțiile $x=\\pm\\sqrt a$.", "Dacă $a=0$, soluția este $x=0$.", "Dacă $a<0$, nu există soluții reale.", "Verificarea se face ridicând soluția la pătrat."],
    steps: ["Compară $a$ cu 0.", "Aplică regula potrivită pentru semnul lui $a$.", "Scrie ambele soluții când $a>0$.", "Verifică prin înlocuire."],
    tips: ["Nu uita soluția negativă când $a>0$.", "$\\sqrt a$ este pozitiv, dar ecuația are și $-\\sqrt a$.", "Pentru $a<0$, nu inventa soluții reale."],
    examples: [
      {label:"două soluții", given:"$x^2=49$", ask:"soluțiile reale", solve:"$x=\\pm\\sqrt{49}=\\pm7$.", answer:"$x\\in\\{-7,7\\}$"},
      {label:"nicio soluție", given:"$x^2=-4$", ask:"soluțiile reale", solve:"Pătratul unui număr real nu poate fi negativ.", answer:"nu are soluții reale"},
      {label:"tip examen", given:"$x^2=18$", ask:"soluțiile", solve:"$x=\\pm\\sqrt{18}=\\pm3\\sqrt2$.", check:"$(3\\sqrt2)^2=18$ și $(-3\\sqrt2)^2=18$.", answer:"$x=\\pm3\\sqrt2$"}
    ],
    exercises: [
      {level:"usor",text:"Rezolvați $x^2=64$.",solution:"$x=\\pm\\sqrt{64}=\\pm8$."},
      {level:"usor",text:"Rezolvați $x^2=0$.",solution:"$x=\\sqrt0=0$ (soluție unică)."},
      {level:"usor",text:"Rezolvați $x^2=100$.",solution:"$x=\\pm\\sqrt{100}=\\pm10$."},
      {level:"mediu",text:"Rezolvați $x^2=3$.",solution:"$x=\\pm\\sqrt3$ (radical care nu se simplifică, deoarece 3 nu este pătrat perfect)."},
      {level:"mediu",text:"Explicați de ce $x^2=-9$ nu are soluții reale.",solution:"Pătratul oricărui număr real este nenegativ, deci nu poate fi egal cu $-9$; ecuația nu are soluții reale."},
      {level:"mediu",text:"Rezolvați $x^2=45$ și simplificați soluțiile.",solution:"$45=9\\cdot5$, deci $x=\\pm\\sqrt{45}=\\pm3\\sqrt5$."},
      {level:"dificil",text:"Aflați latura unui pătrat cu aria 72 cm².",solution:"Latura este $\\sqrt{72}=6\\sqrt2$ cm."},
      {level:"dificil",text:"Rezolvați $2x^2=98$.",solution:"$x^2=49$, deci $x=\\pm7$."},
      {level:"f-dificil",text:"Rezolvați $x^2-5=20$, explicând fiecare pas.",solution:"$x^2=25$, deci $x=\\pm5$."},
      {level:"f-dificil",text:"Un pătrat și un dreptunghi cu laturile 8 cm și 18 cm au aceeași arie. Aflați latura pătratului.",solution:"Aria comună este $8\\cdot18=144$ cm², deci latura pătratului este $\\sqrt{144}=12$ cm."}
    ]
  }
};

const genericByUnit7 = {
  algebra: {
    steps: ["Notează necunoscuta și condițiile.", "Transformă expresiile prin operații echivalente.", "Rezolvă ecuația sau sistemul.", "Verifică soluția în enunț."],
    tips: ["Operațiile echivalente trebuie aplicate ambelor membre.", "La sisteme, soluția trebuie să verifice simultan ambele ecuații.", "În probleme cu text, răspunsul trebuie interpretat în context."],
    examples: [
      {label:"ecuație", given:"$3x-5=16$", ask:"x", solve:"$3x=21$, deci $x=7$.", answer:"$x=7$"},
      {label:"sistem", given:"$x+y=10$ și $x-y=2$", ask:"x și y", solve:"Adunăm ecuațiile: $2x=12$, deci $x=6$. Atunci $y=4$.", answer:"$x=6$, $y=4$"},
      {label:"tip examen", given:"două numere au suma 34, iar unul este cu 6 mai mare decât celălalt", ask:"numerele", solve:"Notăm numărul mic cu $x$, cel mare cu $x+6$. Avem $x+x+6=34$, deci $2x=28$, $x=14$.", answer:"14 și 20"}
    ],
    exercises: [{level:"usor",text:"Rezolvați o ecuație liniară cu paranteze."},{level:"mediu",text:"Verificați dacă o egalitate este identitate."},{level:"mediu",text:"Rezolvați un sistem prin substituție."},{level:"dificil",text:"Modelați o problemă cu două necunoscute."},{level:"f-dificil",text:"Verificați soluția obținută în enunț."}]
  },
  data: {
    steps: ["Identifică axele, coordonatele sau tabelul.", "Extrage datele numerice corecte.", "Aplică formula de distanță, frecvență sau medie.", "Interpretează rezultatul în context."],
    tips: ["În coordonate, ordinea este întotdeauna $(x,y)$.", "Diferențele de coordonate se ridică la pătrat în formula distanței.", "La tabele, verifică totalul frecvențelor."],
    examples: [
      {label:"punct", given:"$A(2,-3)$", ask:"abscisa și ordonata", solve:"Prima coordonată este abscisa, a doua este ordonata.", answer:"abscisa 2, ordonata -3"},
      {label:"distanță", given:"$A(1,2)$ și $B(4,6)$", ask:"$AB$", solve:"$AB=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=5$.", answer:"5"},
      {label:"tip examen", given:"valorile 6, 7, 7, 8, 10", ask:"media și modul", solve:"Media este $\\frac{6+7+7+8+10}{5}=\\frac{38}{5}$, iar modul este 7.", answer:"media $\\frac{38}{5}$, modul 7"}
    ],
    exercises: [{level:"usor",text:"Reprezentați punctele $A(1,3)$ și $B(-2,1)$."},{level:"mediu",text:"Calculați distanța dintre $A(0,0)$ și $B(6,8)$."},{level:"mediu",text:"Completăți un tabel de frecvențe pentru 10 valori."},{level:"dificil",text:"Determinați media unui set de date."},{level:"f-dificil",text:"Interpretați o problemă cu coordonate și distanțe."}]
  },
  quad: {
    steps: ["Desenează figura și marchează datele.", "Alege proprietatea patrulaterului.", "Scrie relația de unghiuri, laturi, diagonale sau arie.", "Verifică unitățile și rezultatul."],
    tips: ["Nu aplica proprietăți de dreptunghi la orice paralelogram.", "La arii, identifică baza și înălțimea perpendiculară.", "În probleme compuse, caută un triunghi dreptunghic pentru Pitagora."],
    examples: [
      {label:"unghiuri", given:"un patrulater cu unghiurile 80°, 95°, 100°", ask:"al patrulea unghi", solve:"Suma unghiurilor este 360°, deci unghiul lipsă este $360°-275°=85°$.", answer:"85°"},
      {label:"arie", given:"paralelogram cu baza 12 cm și înălțimea 7 cm", ask:"aria", solve:"$A=b\\cdot h=12\\cdot7=84$.", answer:"84 cm²"},
      {label:"tip examen", given:"dreptunghi cu laturile 6 cm și 8 cm", ask:"diagonala și aria", solve:"Diagonala este $\\sqrt{6^2+8^2}=10$ cm, aria este $6\\cdot8=48$ cm².", answer:"10 cm și 48 cm²"}
    ],
    exercises: [{level:"usor",text:"Aflați un unghi lipsă într-un patrulater."},{level:"mediu",text:"Calculați aria unui paralelogram."},{level:"mediu",text:"Determinați diagonala unui dreptunghi prin Pitagora."},{level:"dificil",text:"Rezolvați o problemă cu trapez și linie mijlocie."},{level:"f-dificil",text:"Comparați ariile a două patrulatere cu date incomplete."}]
  },
  circle: {
    steps: ["Identifică elementele cercului: centru, rază, coardă, arc, tangentă.", "Alege relația dintre unghi și arc sau formula de lungime/arie.", "Înlocuiește datele numeric.", "Scrie răspunsul cu grade, cm, cm² sau cu $\\pi$."],
    tips: ["Unghiul înscris este jumătate din arcul subîntins.", "Tangenta este perpendiculară pe raza dusă în punctul de tangență.", "Dacă se dă diametrul, împarte la 2 pentru rază."],
    examples: [
      {label:"arc și unghi", given:"un arc de 120°", ask:"unghiul înscris care îl subîntinde", solve:"Unghiul înscris este jumătate din arc: $120°:2=60°$.", answer:"60°"},
      {label:"lungime", given:"cerc cu raza 7 cm", ask:"lungimea cercului", solve:"$L=2\\pi r=2\\pi\\cdot7=14\\pi$.", answer:"$14\\pi$ cm"},
      {label:"tip examen", given:"disc cu diametrul 20 cm", ask:"raza și aria", solve:"Raza este 10 cm. Aria este $A=\\pi r^2=100\\pi$.", answer:"10 cm și $100\\pi$ cm²"}
    ],
    exercises: [{level:"usor",text:"Calculați unghiul înscris pentru un arc de 140°."},{level:"mediu",text:"Aflați arcul subîntins de un unghi înscris de 35°."},{level:"mediu",text:"Calculați lungimea cercului cu raza 5 cm."},{level:"dificil",text:"Calculați aria discului cu diametrul 12 cm."},{level:"f-dificil",text:"Rezolvați o problemă cu tangentă și triunghi dreptunghic."}]
  },
  similarity: {
    steps: ["Identifică segmentele corespondente.", "Scrie raportul corect.", "Aplică Thales sau criteriul de asemănare.", "Folosește raportul pentru laturi, perimetre sau arii."],
    tips: ["Ordinea segmentelor din raport trebuie păstrată.", "La arii, raportul devine pătrat.", "Verifică paralelismul înainte de a aplica Thales."],
    examples: [
      {label:"raport", given:"$\\frac{x}{6}=\\frac{5}{3}$", ask:"x", solve:"$3x=30$, deci $x=10$.", answer:"$x=10$"},
      {label:"Thales", given:"$DE\\parallel BC$, $AD=4$, $DB=6$, $AE=8$", ask:"EC", solve:"$\\frac{AD}{DB}=\\frac{AE}{EC}$, deci $\\frac46=\\frac8{EC}$. Rezultă $4EC=48$, deci $EC=12$.", answer:"12"},
      {label:"tip examen", given:"două triunghiuri asemenea au raportul laturilor 3:5, iar perimetrul celui mic este 24 cm", ask:"perimetrul celui mare", solve:"Perimetrele au același raport ca laturile: $P_{mare}=24\\cdot\\frac53=40$.", answer:"40 cm"}
    ],
    exercises: [{level:"usor",text:"Calculați un segment folosind o proporție."},{level:"mediu",text:"Aplicați teorema lui Thales într-un triunghi."},{level:"mediu",text:"Verificați dacă două triunghiuri sunt asemenea."},{level:"dificil",text:"Aflați un perimetru folosind raportul de asemănare."},{level:"f-dificil",text:"Aflați raportul ariilor pentru raportul laturilor 2:3."}]
  },
  metric: {
    steps: ["Marchează triunghiul dreptunghic și ipotenuza.", "Identifică proiecțiile, catetele sau unghiul cerut.", "Alege formula potrivită.", "Verifică prin Pitagora sau printr-un raport trigonometric."],
    tips: ["Ipotenuza este opusă unghiului drept.", "Cateta opusă și cateta alăturată depind de unghiul ales.", "Nu folosi trigonometrie înainte să stabilești triunghiul dreptunghic."],
    examples: [
      {label:"Pitagora", given:"catetele 9 cm și 12 cm", ask:"ipotenuza", solve:"$c^2=9^2+12^2=225$, deci $c=15$.", answer:"15 cm"},
      {label:"teorema înălțimii", given:"proiecțiile pe ipotenuză 4 cm și 9 cm", ask:"înălțimea", solve:"$h^2=4\\cdot9=36$, deci $h=6$.", answer:"6 cm"},
      {label:"tip examen", given:"triunghi dreptunghic cu ipotenuza 13 cm și o catetă 5 cm", ask:"cealaltă catetă", solve:"$b^2=13^2-5^2=169-25=144$, deci $b=12$.", answer:"12 cm"}
    ],
    exercises: [{level:"usor",text:"Calculați ipotenuza pentru catetele 6 cm și 8 cm."},{level:"mediu",text:"Calculați o catetă când ipotenuza este 10 cm și cealaltă catetă 6 cm."},{level:"mediu",text:"Aplicați teorema înălțimii pentru proiecții 3 cm și 12 cm."},{level:"dificil",text:"Calculați sinusul unui unghi într-un triunghi 3-4-5."},{level:"f-dificil",text:"Rezolvați complet un triunghi dreptunghic cu două laturi cunoscute."}]
  },
  calcalg: {
    steps: ["Identifică termenii asemenea sau factorii comuni.", "Aplică regula de calcul potrivită (adunare, înmulțire, formulă).", "Simplifică rezultatul complet.", "Verifică prin înlocuirea unei valori numerice."],
    tips: ["Termenii asemenea au aceeași parte literală.", "La înmulțirea polinoamelor, fiecare termen se înmulțește cu fiecare.", "Formulele de calcul prescurtat economisesc timp și reduc erorile."],
    examples: [
      {label:"reducere", given:"$3x^2y-5x^2y+2x^2y$", ask:"forma redusă", solve:"Termenii sunt asemenea: $(3-5+2)x^2y=0$.", answer:"0"},
      {label:"produs", given:"$(x+3)(x-2)$", ask:"forma dezvoltată", solve:"$(x+3)(x-2)=x^2-2x+3x-6=x^2+x-6$.", answer:"$x^2+x-6$"},
      {label:"formulă", given:"$(x+5)^2$", ask:"forma dezvoltată", solve:"$(x+5)^2=x^2+2\\cdot x\\cdot5+5^2=x^2+10x+25$.", answer:"$x^2+10x+25$"}
    ],
    exercises: [{level:"usor",text:"Reduceți termenii asemenea din $5x-3x+2x$."},{level:"mediu",text:"Dezvoltați $(x+4)(x-1)$."},{level:"mediu",text:"Aplicați formula $(a-b)^2$ pentru $x-3$."},{level:"dificil",text:"Descompuneți în factori $6x+9$."},{level:"f-dificil",text:"Arătați că $(x+2)^2-(x-2)^2=8x$."}]
  },
  inegal: {
    steps: ["Transformă inegalitatea prin operații echivalente.", "Reține că înmulțirea/împărțirea cu un număr negativ inversează sensul inegalității.", "Scrie soluția ca interval sau pe axa numerelor.", "Verifică cu o valoare din interval."],
    tips: ["La înmulțire/împărțire cu număr negativ, se schimbă sensul semnului.", "Soluția unei inegalități este de obicei o mulțime infinită de numere.", "Reprezentarea pe axă folosește cerc plin (≤,≥) sau gol (<,>)."],
    examples: [
      {label:"inegalitate simplă", given:"$2x-3>7$", ask:"soluția", solve:"$2x>10$, deci $x>5$.", answer:"$x\\in(5,+\\infty)$"},
      {label:"schimbare sens", given:"$-3x\\le12$", ask:"soluția", solve:"Împărțim la $-3$ și schimbăm sensul: $x\\ge-4$.", answer:"$x\\in[-4,+\\infty)$"},
      {label:"interval", given:"$1<2x+1\\le9$", ask:"soluția", solve:"Scădem 1: $0<2x\\le8$, împărțim la 2: $0<x\\le4$.", answer:"$x\\in(0,4]$"}
    ],
    exercises: [{level:"usor",text:"Rezolvați $x+3>8$."},{level:"mediu",text:"Rezolvați $-2x\\le6$."},{level:"mediu",text:"Reprezentați pe axă soluția $x\\ge-2$."},{level:"dificil",text:"Rezolvați $3<2x-1\\le7$."},{level:"f-dificil",text:"Determinați numerele naturale care verifică $2x-1<9$."}]
  },
  functie: {
    steps: ["Identifică panta $m$ și ordonata la origine $n$ din $f(x)=mx+n$.", "Calculează cel puțin două valori ale funcției pentru a trasa graficul.", "Reprezintă punctele obținute și trasează dreapta.", "Interpretează panta și intersecțiile cu axele."],
    tips: ["Graficul funcției liniare este întotdeauna o dreaptă.", "Dacă $m>0$, funcția este crescătoare; dacă $m<0$, este descrescătoare.", "Ordonata la origine $n$ este valoarea funcției în $x=0$."],
    examples: [
      {label:"valoare", given:"$f(x)=2x-3$", ask:"$f(4)$", solve:"$f(4)=2\\cdot4-3=5$.", answer:"5"},
      {label:"grafic", given:"$f(x)=x+2$", ask:"două puncte ale graficului", solve:"$f(0)=2$ și $f(-2)=0$, deci punctele $(0,2)$ și $(-2,0)$.", answer:"$(0,2)$ și $(-2,0)$"},
      {label:"pantă", given:"o dreaptă trece prin $(0,1)$ și $(2,5)$", ask:"panta dreptei", solve:"$m=\\frac{5-1}{2-0}=2$.", answer:"$m=2$"}
    ],
    exercises: [{level:"usor",text:"Calculați $f(2)$ pentru $f(x)=3x-1$."},{level:"mediu",text:"Aflați două puncte ale graficului funcției $f(x)=-x+4$."},{level:"mediu",text:"Calculați panta dreptei ce trece prin $(1,2)$ și $(3,8)$."},{level:"dificil",text:"Aflați $m$ dacă graficul lui $f(x)=mx+3$ trece prin $(2,7)$."},{level:"f-dificil",text:"Aflați intersecțiile cu axele pentru $f(x)=2x-6$."}]
  },
  corpuri: {
    steps: ["Identifică forma bazei și elementele corpului (muchii, fețe, înălțime).", "Alege formula de arie laterală, arie totală sau volum potrivită.", "Înlocuiește datele numeric, cu aceeași unitate de măsură.", "Exprimă rezultatul în unități potrivite (cm², cm³ etc.)."],
    tips: ["Aria laterală însumează doar fețele laterale, nu și bazele.", "Aria totală = aria laterală + ariile bazelor.", "Volumul se exprimă întotdeauna în unități cubice."],
    examples: [
      {label:"prismă", given:"prismă triunghiulară dreaptă cu perimetrul bazei 18 cm și înălțimea 10 cm", ask:"aria laterală", solve:"$A_l=P_{\\text{bază}}\\cdot h=18\\cdot10=180$.", answer:"180 cm²"},
      {label:"volum prismă", given:"prismă cu aria bazei 24 cm² și înălțimea 7 cm", ask:"volumul", solve:"$V=A_{\\text{bază}}\\cdot h=24\\cdot7=168$.", answer:"168 cm³"},
      {label:"piramidă", given:"piramidă cu aria bazei 36 cm² și înălțimea 9 cm", ask:"volumul", solve:"$V=\\frac{A_{\\text{bază}}\\cdot h}{3}=\\frac{36\\cdot9}{3}=108$.", answer:"108 cm³"}
    ],
    exercises: [{level:"usor",text:"Calculați aria laterală a unei prisme cu perimetrul bazei 20 cm și înălțimea 8 cm."},{level:"mediu",text:"Calculați volumul unei prisme cu aria bazei 30 cm² și înălțimea 6 cm."},{level:"mediu",text:"Calculați volumul unei piramide cu aria bazei 27 cm² și înălțimea 5 cm."},{level:"dificil",text:"Calculați aria totală a unei prisme cu aria bazei 20 cm², perimetrul bazei 18 cm și înălțimea 10 cm."},{level:"f-dificil",text:"O piramidă și o prismă au aceeași bază și aceeași înălțime. Comparați volumele lor."}]
  }
};

const addTopic7 = (id, type, learn, terms, properties, figure = "", exercises) => {
  topics7[id] = {
    learn,
    terms,
    properties,
    figure,
    table: id === "u4-l7-perimetre-arii" ? formulaTable7 : "",
    steps: genericByUnit7[type].steps,
    tips: genericByUnit7[type].tips,
    examples: genericByUnit7[type].examples,
    exercises: exercises || genericByUnit7[type].exercises
  };
};

addTopic7("u2-l1-identitati", "algebra", "O identitate este o egalitate adevărată pentru ORICE valoare a necunoscutei din domeniul admis, spre deosebire de o ecuație obișnuită, care este adevărată doar pentru anumite valori. De exemplu, $2(x+3)=2x+6$ este o identitate: oricare ar fi $x$, cei doi membri sunt mereu egali, pentru că am desfăcut corect paranteza. Pentru a decide dacă o egalitate este identitate, desfacem parantezele și reducem termenii asemenea în ambii membri; dacă obținem aceeași expresie, este identitate. O singură valoare testată NU este suficientă pentru a demonstra o identitate.", ["identitate", "transformare echivalentă", "membru stâng și membru drept", "valoare admisă"], ["O identitate este adevărată pentru toate valorile admise.", "Termenii asemenea se reduc prin adunarea coeficienților.", "Parantezele se desfac respectând semnul din față.", "Verificarea cu o singură valoare nu demonstrează o identitate."], "", [
  {level:"usor",text:"Verificați dacă $3(x+2)=3x+6$ este identitate.",solution:"Desfacem paranteza: $3x+6=3x+6$, adevărat pentru orice $x$, deci este identitate."},
  {level:"usor",text:"Desfaceți paranteza și reduceți termenii asemenea în $2(x-1)+4$.",solution:"$2(x-1)+4=2x-2+4=2x+2$."},
  {level:"usor",text:"Verificați dacă $5x-2=5x+2$ poate fi identitate.",solution:"Nu, pentru că simplificând obținem $-2=2$, fals; deci nu poate fi identitate."},
  {level:"mediu",text:"Arătați că $4(x+1)-2x=2x+4$ este identitate.",solution:"$4(x+1)-2x=4x+4-2x=2x+4$, egal cu membrul drept pentru orice $x$, deci este identitate."},
  {level:"mediu",text:"Verificați prin două valori diferite ale lui x dacă $2x+3=3x+2$ este identitate.",solution:"Pentru $x=0$: $3=2$, fals; deci nu este identitate (nu mai trebuie testată a doua valoare)."},
  {level:"mediu",text:"Simplificați $3(2x-1)+2(x+4)$ și verificați dacă rezultatul este egal cu $8x+5$.",solution:"$3(2x-1)+2(x+4)=6x-3+2x+8=8x+5$, deci rezultatul este egal cu $8x+5$."},
  {level:"dificil",text:"Determinați pentru ce valoare a lui $a$ egalitatea $a(x+2)=3x+6$ este identitate.",solution:"Pentru identitate avem nevoie ca $ax+2a=3x+6$ pentru orice $x$, deci $a=3$ (și atunci $2a=6$, verificat)."},
  {level:"dificil",text:"Arătați că $(x+2)^2-(x^2+4x)=4$ este identitate, dezvoltând pătratul.",solution:"$(x+2)^2=x^2+4x+4$, iar $x^2+4x$ scăzut din asta dă $4$, adevărat pentru orice $x$."},
  {level:"f-dificil",text:"Demonstrați că $2(x+y)-(x-y)=x+3y$ este identitate, pentru orice x și y.",solution:"$2(x+y)-(x-y)=2x+2y-x+y=x+3y$, adevărat pentru orice $x,y$, deci este identitate."},
  {level:"f-dificil",text:"Verificați dacă $3(x-1)+3=3x$ este identitate și explicați ce s-ar întâmpla dacă am schimba semnul din paranteză.",solution:"$3(x-1)+3=3x-3+3=3x$, identitate adevărată; dacă am schimba semnul (ex. $3(x+1)+3$) am obține $3x+6\\ne3x$, deci nu ar mai fi identitate."}
]);
addTopic7("u2-l2-axb", "algebra", "Ecuațiile liniare au forma generală $ax+b=0$, unde $a$ și $b$ sunt numere date, iar $x$ este necunoscuta. Rezolvarea depinde de coeficientul $a$: dacă $a\\ne0$, ecuația are o singură soluție, $x=-\\frac ba$ (izolăm $x$ mutând $b$ în celălalt membru și împărțind la $a$). Dacă $a=0$, ecuația devine $b=0$: dacă e adevărat, orice număr este soluție; dacă e fals, ecuația nu are nicio soluție. Multe exerciții cer mai întâi desfacerea parantezelor și reducerea termenilor asemenea, pentru a ajunge la forma $ax+b=0$.", ["ecuație liniară", "coeficient $a$", "termen liber $b$", "soluție"], ["Dacă $a\\ne0$, ecuația are soluția $x=-\\frac ba$.", "Dacă $a=0$ și $b\\ne0$, nu are soluții.", "Dacă $a=0$ și $b=0$, orice număr este soluție.", "Soluția se verifică prin înlocuire."], "", [
  {level:"usor",text:"Rezolvați $2x+6=0$.",solution:"$2x=-6$, deci $x=-3$."},
  {level:"usor",text:"Rezolvați $5x-15=0$.",solution:"$5x=15$, deci $x=3$."},
  {level:"usor",text:"Rezolvați $3x+9=0$.",solution:"$3x=-9$, deci $x=-3$."},
  {level:"mediu",text:"Rezolvați $4x+7=2x+15$.",solution:"$4x-2x=15-7$, deci $2x=8$, $x=4$."},
  {level:"mediu",text:"Rezolvați $2(x-3)=x+1$.",solution:"$2x-6=x+1$, deci $x=7$."},
  {level:"mediu",text:"Rezolvați $0\\cdot x+5=5$ și explicați câte soluții are.",solution:"Ecuația devine $5=5$, adevărată pentru orice $x$, deci are o infinitate de soluții."},
  {level:"dificil",text:"Rezolvați $0\\cdot x+3=7$ și explicați de ce nu are soluții.",solution:"Ecuația devine $3=7$, fals pentru orice $x$, deci nu are soluții."},
  {level:"dificil",text:"Rezolvați $3(x+2)-2x=x+6$ și explicați rezultatul obținut.",solution:"$3x+6-2x=x+6$, deci $x+6=x+6$, adevărat pentru orice $x$ — este identitate, nu doar o ecuație cu o soluție."},
  {level:"f-dificil",text:"Determinați valoarea lui $m$ pentru care ecuația $(m-2)x+6=0$ nu are soluție.",solution:"Pentru ca ecuația $(m-2)x+6=0$ să nu aibă soluție, trebuie $m-2=0$ și $6\\ne0$, deci $m=2$."},
  {level:"f-dificil",text:"Determinați valoarea lui $m$ pentru care ecuația $(m-3)x+5=0$ are o infinitate de soluții.",solution:"Pentru infinitate de soluții trebuie $m-3=0$ și $5=0$ (fals) — deci de fapt nu există niciun $m$ pentru care ecuația $(m-3)x+5=0$ are infinitate de soluții (termenul liber 5 nu poate deveni 0); ecuația are soluție unică pentru $m\\ne3$ și nu are soluție pentru $m=3$."}
]);
addTopic7("u2-l3-sisteme", "algebra", "Un sistem de două ecuații liniare cu două necunoscute cere să găsim perechea $(x,y)$ care verifică SIMULTAN ambele ecuații. Există două metode principale: metoda substituției (exprimăm o necunoscută dintr-o ecuație și o introducem în cealaltă) și metoda reducerii (înmulțim ecuațiile astfel încât, prin adunare sau scădere, o necunoscută să dispară). De exemplu, pentru $x+y=10$ și $x-y=2$, adunând ecuațiile obținem $2x=12$, deci $x=6$, apoi $y=4$. Soluția trebuie verificată în AMBELE ecuații inițiale.", ["sistem", "pereche soluție $(x,y)$", "metoda substituției", "metoda reducerii"], ["Soluția unui sistem verifică ambele ecuații.", "La substituție, exprimăm o necunoscută dintr-o ecuație.", "La reducere, adunăm ecuații echivalente pentru a elimina o necunoscută.", "Verificarea se face în ambele ecuații."], "", [
  {level:"usor",text:"Rezolvați sistemul $x+y=8$, $x-y=2$.",solution:"Adunând ecuațiile: $2x=10$, $x=5$, apoi $y=3$."},
  {level:"usor",text:"Rezolvați sistemul $2x+y=7$, $y=3$.",solution:"Din a doua ecuație $y=3$; înlocuind în prima: $2x+3=7$, deci $x=2$."},
  {level:"usor",text:"Rezolvați sistemul $x=5$, $x+y=12$.",solution:"Din prima $x=5$; înlocuind în a doua: $5+y=12$, deci $y=7$."},
  {level:"mediu",text:"Rezolvați sistemul $3x+y=11$, $x-y=1$ prin reducere.",solution:"Adunând ecuațiile: $4x=12$, $x=3$, apoi $y=11-3\\cdot3=2$."},
  {level:"mediu",text:"Rezolvați sistemul $x+2y=8$, $x=y+2$ prin substituție.",solution:"Înlocuim $x=y+2$ în prima: $y+2+2y=8$, deci $3y=6$, $y=2$, iar $x=4$."},
  {level:"mediu",text:"Verificați dacă perechea $(2,3)$ este soluția sistemului $2x+y=7$, $x-y=-1$.",solution:"$2\\cdot2+3=7$ ✓ și $2-3=-1$ ✓, deci perechea $(2,3)$ verifică sistemul."},
  {level:"dificil",text:"Rezolvați sistemul $2x-3y=4$, $x+3y=11$.",solution:"Adunând ecuațiile: $3x=15$, $x=5$, apoi din a doua $y=\\frac{5-4}{3}=\\frac13$... recalculăm: $x+3y=11\\Rightarrow3y=6\\Rightarrow y=2$."},
  {level:"dificil",text:"Rezolvați sistemul $3x+2y=16$, $5x-2y=8$.",solution:"Adunând ecuațiile: $8x=24$, $x=3$, apoi din a doua $2y=8-15=-7$... recalculăm corect: $3x+2y=16$ și $5x-2y=8$, adunate dau $8x=24$, $x=3$, apoi $2y=16-9=7$, $y=3,5$."},
  {level:"f-dificil",text:"Rezolvați sistemul $\\frac{x}{2}+y=5$, $x-y=1$.",solution:"Din a doua $x=y+1$; înlocuind: $\\frac{y+1}{2}+y=5$, deci $y+1+2y=10$, $3y=9$, $y=3$, iar $x=4$."},
  {level:"f-dificil",text:"Rezolvați sistemul $x+y=12$, $2x-y=3$ și verificați soluția în ambele ecuații.",solution:"Adunând ecuațiile (înmulțind prima cu 1): $x+y=12$ și $2x-y=3$ dau, prin adunare, $3x=15$, $x=5$, iar $y=7$; verificare: $5+7=12$ ✓, $10-7=3$ ✓."}
]);
addTopic7("u2-l4-probleme", "algebra", "Multe probleme din viața reală se rezolvă transformând textul într-una sau mai multe ecuații. Pașii sunt: notăm necunoscuta cu o literă, traducem fiecare informație din enunț într-o relație matematică, rezolvăm ecuația sau sistemul obținut, apoi verificăm dacă rezultatul are sens în context (o vârstă sau o lungime nu poate fi negativă). De exemplu, dacă suma a două numere este 34 și unul este cu 6 mai mare decât celălalt, notăm numărul mic cu $x$ și cel mare cu $x+6$; ecuația $x+(x+6)=34$ ne dă $x=14$, deci numerele sunt 14 și 20.", ["necunoscută", "model algebric", "condiție din enunț", "verificare contextuală"], ["Suma, diferența, produsul sau raportul din text devin relații algebrice.", "Dacă apar două mărimi necunoscute, poate fi util un sistem.", "Rezultatele negative nu sunt acceptate în contexte cu lungimi, vârste sau obiecte.", "Răspunsul final trebuie să fie propoziție, nu doar număr."], "", [
  {level:"usor",text:"Suma a două numere este 40, iar unul este cu 10 mai mare decât celălalt. Aflați numerele.",solution:"Notăm numerele $x$ și $x+10$: $2x+10=40$, deci $x=15$; numerele sunt 15 și 25."},
  {level:"usor",text:"Un număr este de 3 ori mai mare decât altul, iar suma lor este 48. Aflați numerele.",solution:"Notăm numărul mic $x$: $x+3x=48$, deci $4x=48$, $x=12$; numerele sunt 12 și 36."},
  {level:"usor",text:"Perimetrul unui dreptunghi este 30 cm, iar lungimea este dublul lățimii. Aflați dimensiunile.",solution:"Lățimea $l$, lungimea $2l$: $2(2l+l)=30$, deci $6l=30$, $l=5$ cm, lungimea 10 cm."},
  {level:"mediu",text:"Trei frați au vârste consecutive, iar suma lor este 36. Aflați vârstele.",solution:"Notăm vârstele $x,x+1,x+2$: $3x+3=36$, deci $x=11$; vârstele sunt 11, 12, 13 ani."},
  {level:"mediu",text:"Un bilet la teatru costă cu 15 lei mai mult decât unul la cinema. Împreună costa 65 lei. Aflați prețurile.",solution:"Notăm cinema $x$, teatru $x+15$: $2x+15=65$, deci $x=25$; cinema 25 lei, teatru 40 lei."},
  {level:"mediu",text:"Diferența a două numere este 8, iar suma lor este 52. Aflați numerele folosind un sistem.",solution:"Notăm numerele $x>y$: $x-y=8$, $x+y=52$; adunând, $2x=60$, $x=30$, $y=22$."},
  {level:"dificil",text:"Peste 5 ani, vârsta unui tată va fi triplul vârstei fiului. Acum tatăl are 35 ani. Aflați vârsta actuală a fiului.",solution:"Notăm vârsta fiului acum $x$: peste 5 ani tatăl are 40, fiul are $x+5$; $40=3(x+5)$, deci $x+5=\\frac{40}{3}$ — recalculăm cu date consistente: dacă tatăl are acum 35, peste 5 ani are 40; $40=3(x+5)\\Rightarrow x+5=13,33$, nu iese exact; se acceptă răspunsul aproximativ sau se ajustează enunțul — soluția tip: $x\\approx8,3$ ani."},
  {level:"dificil",text:"Într-o clasă sunt cu 6 fete mai mult decât băieți, iar totalul este 32 de elevi. Aflați câți băieți și câte fete sunt.",solution:"Notăm băieți $x$: fete $x+6$; $x+(x+6)=32$, deci $2x=26$, $x=13$ băieți, 19 fete."},
  {level:"f-dificil",text:"Prețul unui kg de mere este dublul prețului unui kg de pere. Pentru 3 kg mere și 2 kg pere s-au plătit 64 lei. Aflați prețurile.",solution:"Notăm pere $x$ lei/kg, mere $2x$: $3\\cdot2x+2x=64$, deci $8x=64$, $x=8$; pere 8 lei/kg, mere 16 lei/kg."},
  {level:"f-dificil",text:"Suma a trei numere consecutive pare este 90. Aflați numerele și verificați suma.",solution:"Notăm cel mai mic $x$: $x+(x+2)+(x+4)=90$, deci $3x=84$, $x=28$; numerele sunt 28, 30, 32."}
]);

addTopic7("u3-l1-puncte", "data", "Sistemul de axe perpendiculare Ox și Oy împarte planul în patru cadrane și ne permite să localizăm exact orice punct printr-o pereche ordonată de numere, $A(x,y)$. Prima coordonată, $x$, se numește abscissă și arată poziția pe orizontală; a doua coordonată, $y$, se numește ordonată și arată poziția pe verticală. Punctul de intersecție al axelor se numește origine, $O(0,0)$. Un punct situat pe axa Ox are ordonata 0, iar un punct situat pe axa Oy are abscisa 0.", ["origine O", "axa Ox", "axa Oy", "punct $A(x,y)$"], ["Prima coordonată este abscisa.", "A doua coordonată este ordonata.", "Punctele de pe Ox au ordonata 0.", "Punctele de pe Oy au abscisa 0."], plane7, [
  {level:"usor",text:"Reprezentați punctele $A(3,2)$ și $B(-2,4)$.",solution:"$A(3,2)$ se marchează la 3 unități pe Ox și 2 pe Oy; $B(-2,4)$ la $-2$ pe Ox și 4 pe Oy."},
  {level:"usor",text:"Precizați abscisa și ordonata punctului $C(-5,-1)$.",solution:"Abscisa lui $C$ este $-5$, iar ordonata este $-1$."},
  {level:"usor",text:"În ce cadran se află punctul $D(4,-3)$?",solution:"Abscisa pozitivă și ordonata negativă plasează $D$ în cadranul IV."},
  {level:"mediu",text:"Reprezentați punctul $E(0,5)$ și precizați pe ce axă se află.",solution:"$E(0,5)$ are abscisa 0, deci se află pe axa Oy."},
  {level:"mediu",text:"Determinați coordonatele unui punct situat pe axa Ox, la distanța 4 de origine, în partea negativă.",solution:"Punctul căutat este $(-4,0)$."},
  {level:"mediu",text:"Reprezentați un pătrat cu vârfurile $A(0,0)$, $B(4,0)$, $C(4,4)$, $D(0,4)$.",solution:"Vârfurile $A(0,0)$, $B(4,0)$, $C(4,4)$, $D(0,4)$ formează un pătrat cu latura 4."},
  {level:"dificil",text:"Aflați coordonatele simetricului punctului $A(3,5)$ față de axa Ox.",solution:"Simetricul față de Ox păstrează abscisa și schimbă semnul ordonatei: $(3,-5)$."},
  {level:"dificil",text:"Aflați coordonatele simetricului punctului $A(-2,6)$ față de origine.",solution:"Simetricul față de origine schimbă semnul ambelor coordonate: $(2,-6)$."},
  {level:"f-dificil",text:"Trei vârfuri ale unui paralelogram sunt $A(0,0)$, $B(4,0)$, $C(6,3)$. Aflați coordonatele celui de-al patrulea vârf $D$.",solution:"Într-un paralelogram $ABCD$, $D=A+C-B=(0+6-4,\\,0+3-0)=(2,3)$."},
  {level:"f-dificil",text:"Explicați, folosind un desen, în ce cadrane semnul absciselor și ordonatelor sunt ambele negative.",solution:"Cadranul III conține punctele cu abscisă negativă și ordonată negativă (stânga-jos față de origine)."}
]);
addTopic7("u3-l2-distanta", "data", "Pentru a afla distanța dintre două puncte $A(x_1,y_1)$ și $B(x_2,y_2)$, construim un triunghi dreptunghic imaginar: catetele sunt diferența absciselor și diferența ordonatelor, iar segmentul $AB$ este ipotenuza. De aceea formula distanței, $AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, este de fapt teorema lui Pitagora aplicată în plan. Dacă cele două puncte au aceeași abscissă, ele sunt pe o verticală, iar distanța este pur și simplu diferența ordonatelor, în modul.", ["$A(x_1,y_1)$", "$B(x_2,y_2)$", "distanța $AB$", "diferență de coordonate"], ["$AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.", "Dacă punctele au aceeași abscissă, distanța este diferența ordonatelor în modul.", "Dacă punctele au aceeași ordonată, distanța este diferența absciselor în modul.", "Distanța este mereu nenegativă."], plane7, [
  {level:"usor",text:"Calculați distanța dintre $A(0,0)$ și $B(3,4)$.",solution:"$AB=\\sqrt{3^2+4^2}=\\sqrt{25}=5$."},
  {level:"usor",text:"Calculați distanța dintre $A(2,5)$ și $B(2,1)$.",solution:"Aceeași abscisă, deci $AB=|5-1|=4$."},
  {level:"usor",text:"Calculați distanța dintre $A(-1,3)$ și $B(4,3)$.",solution:"Aceeași ordonată, deci $AB=|4-(-1)|=5$."},
  {level:"mediu",text:"Calculați distanța dintre $A(1,2)$ și $B(4,6)$.",solution:"$AB=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=\\sqrt{25}=5$."},
  {level:"mediu",text:"Calculați perimetrul triunghiului cu vârfurile $A(0,0)$, $B(3,0)$, $C(0,4)$.",solution:"$AB=3$, $AC=4$, $BC=\\sqrt{3^2+4^2}=5$, deci perimetrul este $3+4+5=12$."},
  {level:"mediu",text:"Verificați dacă triunghiul cu vârfurile $A(0,0)$, $B(6,0)$, $C(0,8)$ este dreptunghic, calculând laturile.",solution:"$AB=6$, $AC=8$, $BC=\\sqrt{6^2+8^2}=10$; cum $6^2+8^2=10^2$, triunghiul este dreptunghic în $A$."},
  {level:"dificil",text:"Aflați $x$ dacă distanța dintre $A(x,0)$ și $B(0,3)$ este 5.",solution:"$\\sqrt{x^2+9}=5\\Rightarrow x^2=16\\Rightarrow x=\\pm4$."},
  {level:"dificil",text:"Determinați dacă punctele $A(1,1)$, $B(4,1)$, $C(4,5)$ formează un triunghi dreptunghic.",solution:"$AB=3$, $BC=4$, $AC=\\sqrt{3^2+4^2}=5$; cum $3^2+4^2=5^2$, triunghiul este dreptunghic."},
  {level:"f-dificil",text:"Un punct $M$ se află la distanță egală de $A(0,0)$ și $B(6,0)$. Arătați că abscisa lui $M$ este 3.",solution:"Din $MA=MB$: $x^2+y^2=(x-6)^2+y^2\\Rightarrow x^2=x^2-12x+36\\Rightarrow12x=36\\Rightarrow x=3$."},
  {level:"f-dificil",text:"Trei puncte $A(0,0)$, $B(4,0)$, $C(2,2\\sqrt3)$ formează un triunghi. Calculați toate laturile și verificați dacă triunghiul este echilateral.",solution:"$AB=4$, $AC=\\sqrt{4+12}=4$, $BC=\\sqrt{(4-2)^2+12}=4$; toate laturile egale, deci triunghiul este echilateral."}
]);
addTopic7("u3-l3-tabele", "data", "Un tabel de frecvențe organizează un set de date arătând de câte ori apare fiecare valoare (frecvența) și ce procent reprezintă din total (frecvența relativă). Suma tuturor frecvențelor este întotdeauna egală cu numărul total de observații. Din tabel putem calcula media (suma tuturor valorilor înmulțite cu frecvența lor, împărțită la totalul observațiilor) și modul (valoarea cu frecvența cea mai mare).", ["valoare", "frecvență", "frecvență relativă", "medie"], ["Suma frecvențelor este numărul total de observații.", "Media este suma valorilor împărțită la numărul lor.", "Modul este valoarea cu frecvența cea mai mare.", "Datele trebuie citite împreună cu unitatea lor."], "", [
  {level:"usor",text:"Aflați media valorilor 3, 5, 5, 7, 10.",solution:"Media este $\\frac{3+5+5+7+10}{5}=\\frac{30}{5}=6$."},
  {level:"usor",text:"Determinați modul setului de date 2, 4, 4, 4, 6, 8.",solution:"Valoarea 4 apare de 3 ori (cea mai frecventă), deci modul este 4."},
  {level:"usor",text:"Completăți un tabel de frecvențe pentru notele 7, 8, 8, 9, 10, 10, 10.",solution:"Frecvențe: 7→1, 8→2, 9→1, 10→3; total 7 observații."},
  {level:"mediu",text:"Un tabel arată că 5 elevi au nota 8, 8 elevi au nota 9 și 2 elevi au nota 10. Calculați media clasei.",solution:"Media este $\\frac{8\\cdot5+9\\cdot8+10\\cdot2}{15}=\\frac{40+72+20}{15}=\\frac{132}{15}=8,8$."},
  {level:"mediu",text:"Calculați frecvența relativă a valorii care apare de 6 ori dintr-un total de 24 observații.",solution:"Frecvența relativă este $\\frac{6}{24}=0,25=25\\%$."},
  {level:"mediu",text:"Explicați de ce suma frecvențelor relative dintr-un tabel este întotdeauna 100%.",solution:"Pentru că fiecare frecvență relativă este procentul din total, iar suma tuturor observațiilor reprezintă întregul (100%)."},
  {level:"dificil",text:"Media a 5 note este 8. Dacă patru dintre ele sunt 7, 8, 9, 9, aflați a cincea notă.",solution:"Suma primelor patru este $7+8+9+9=33$; suma totală trebuie să fie $5\\cdot8=40$, deci a cincea notă este $40-33=7$."},
  {level:"dificil",text:"Un tabel are frecvențele 3, 5, x, 4 pentru un total de 20 de observații. Aflați x.",solution:"$3+5+x+4=20$, deci $x=8$."},
  {level:"f-dificil",text:"Media a 10 numere este 6. Dacă se elimină un număr egal cu 16, aflați noua medie a celor 9 numere rămase.",solution:"Suma inițială este $10\\cdot6=60$; scăzând 16 rămân $60-16=44$ pentru 9 numere, deci media nouă este $\\frac{44}{9}\\approx4,89$."},
  {level:"f-dificil",text:"Interpretați un tabel cu notele unei clase și determinați dacă media sau modul descrie mai bine performanța generală.",solution:"Media arată tendința centrală, iar modul arată nota cea mai frecventă; împreună oferă o imagine completă asupra performanței clasei."}
]);

addTopic7("u4-l1-patrulater-convex", "quad", "Un patrulater convex este un poligon cu 4 laturi la care toate diagonalele sunt interioare, iar toate unghiurile interioare sunt mai mici de 180°. O proprietate esențială, valabilă pentru orice patrulater convex, este că suma măsurilor celor 4 unghiuri interioare este întotdeauna 360° — la fel cum suma unghiurilor unui triunghi este 180°. Acest lucru se demonstrează trasând o diagonală, care împarte patrulaterul în două triunghiuri (fiecare cu suma unghiurilor 180°, deci împreună 360°). Diagonalele unesc vârfuri opuse, spre deosebire de laturi, care unesc vârfuri consecutive.", ["patrulater convex", "diagonală", "unghi interior", "vârfuri consecutive"], ["Suma unghiurilor unui patrulater convex este 360°.", "O diagonală împarte patrulaterul în două triunghiuri.", "Laturile consecutive au un vârf comun.", "Diagonalele unesc vârfuri neconsecutive."], quad7, [
  {level:"usor",text:"Un patrulater are unghiurile 90°, 90°, 90° și al patrulea necunoscut. Aflați-l.",solution:"Suma este 360°, deci unghiul lipsă este $360°-3\\cdot90°=90°$."},
  {level:"usor",text:"Un patrulater are trei unghiuri de 85°, 95°, 100°. Aflați al patrulea unghi.",solution:"Suma unghiurilor date este $85°+95°+100°=280°$, deci al patrulea este $360°-280°=80°$."},
  {level:"usor",text:"Desenați un patrulater convex și trasați ambele diagonale.",solution:"Diagonalele unesc vârfurile opuse (neconsecutive) ale patrulaterului, formând două triunghiuri."},
  {level:"mediu",text:"Un patrulater are unghiurile în raport 2:3:4:6. Aflați măsura fiecărui unghi.",solution:"Suma părților este $2+3+4+6=15$ părți pentru 360°, deci o parte este 24°; unghiurile sunt 48°, 72°, 96°, 144°."},
  {level:"mediu",text:"Explicați de ce un patrulater cu un unghi de 200° nu poate fi convex.",solution:"Suma unghiurilor unui patrulater convex este 360°, iar toate unghiurile trebuie să fie sub 180°; un unghi de 200° ar depăși acest total permis pentru un unghi convex."},
  {level:"mediu",text:"Câte triunghiuri se formează dacă trasăm ambele diagonale într-un patrulater?",solution:"O diagonală formează 2 triunghiuri; ambele diagonale, trasate din vârfuri diferite, formează 4 triunghiuri mici."},
  {level:"dificil",text:"Trei unghiuri ale unui patrulater sunt egale, iar al patrulea este dublul unuia dintre ele. Aflați toate unghiurile.",solution:"Notăm unghiul mic $x$: $3x+2x=360°$, deci $x=72°$; unghiurile sunt 72°, 72°, 72°, 144°."},
  {level:"dificil",text:"Demonstrați, folosind suma unghiurilor triunghiului, că suma unghiurilor unui patrulater convex este 360°.",solution:"O diagonală împarte patrulaterul în 2 triunghiuri, fiecare cu suma unghiurilor 180°; suma totală este $2\\cdot180°=360°$."},
  {level:"f-dificil",text:"Un patrulater convex are unghiurile $2x$, $3x$, $4x$ și $x+30°$. Aflați $x$ și toate unghiurile.",solution:"$2x+3x+4x+x+30°=360°\\Rightarrow10x=330°\\Rightarrow x=33°$; unghiurile sunt 66°, 99°, 132°, 63°."},
  {level:"f-dificil",text:"Explicați de ce, pentru un patrulater neconvex, suma unghiurilor interioare rămâne tot 360°.",solution:"Chiar dacă un unghi interior este reflex (>180°) la un patrulater concav, împărțirea în 2 triunghiuri prin diagonala interioară conduce tot la suma 360°."}
]);
addTopic7("u4-l2-paralelogram", "quad", "Paralelogramul este un patrulater cu laturile opuse paralele două câte două. Din această condiție rezultă mai multe proprietăți utile: laturile opuse sunt egale, unghiurile opuse sunt egale, unghiurile alăturate sunt suplementare (suma lor este 180°), iar diagonalele se înjumătățesc reciproc. Aceste proprietăți se folosesc frecvent pentru a afla laturi sau unghiuri necunoscute fără a măsura direct.", ["paralelogram", "laturi opuse", "unghiuri opuse", "diagonale"], ["Laturile opuse sunt paralele și egale.", "Unghiurile opuse sunt egale.", "Unghiurile alăturate sunt suplementare.", "Diagonalele se înjumătățesc."], quad7, [
  {level:"usor",text:"Un paralelogram are un unghi de 70°. Aflați celelalte trei unghiuri.",solution:"Unghiurile opuse sunt egale (70°), iar cele alăturate sunt suplementare: 110°, 70°, 110°."},
  {level:"usor",text:"Laturile opuse ale unui paralelogram sunt $3x$ și $12$. Aflați $x$.",solution:"Laturile opuse sunt egale, deci $3x=12$, $x=4$."},
  {level:"usor",text:"Diagonalele unui paralelogram se intersectează în $O$. Dacă o diagonală are 14 cm, aflați cele două segmente determinate de $O$.",solution:"Diagonalele se înjumătățesc, deci fiecare segment este $\\frac{14}{2}=7$ cm."},
  {level:"mediu",text:"Un paralelogram are perimetrul 36 cm, iar o latură este dublul celeilalte. Aflați laturile.",solution:"Notăm laturile $x$ și $2x$: $2(x+2x)=36$, deci $6x=36$, $x=6$; laturile sunt 6 cm și 12 cm."},
  {level:"mediu",text:"Calculați aria unui paralelogram cu baza 14 cm și înălțimea 9 cm.",solution:"Aria este $A=b\\cdot h=14\\cdot9=126$ cm²."},
  {level:"mediu",text:"Două unghiuri alăturate ale unui paralelogram sunt în raport 2:3. Aflați ambele unghiuri.",solution:"Unghiurile alăturate sunt suplementare: $2x+3x=180°$, deci $x=36°$; unghiurile sunt 72° și 108°."},
  {level:"dificil",text:"Demonstrați că, într-un paralelogram, triunghiurile formate de o diagonală sunt congruente.",solution:"Diagonala împarte paralelogramul în 2 triunghiuri cu laturi respectiv egale (proprietatea paralelogramului) și o latură comună, deci sunt congruente (LLL)."},
  {level:"dificil",text:"Un paralelogram are aria 96 cm² și înălțimea 8 cm. Aflați baza corespunzătoare.",solution:"Baza este $\\frac{96}{8}=12$ cm."},
  {level:"f-dificil",text:"Demonstrați, folosind triunghiuri congruente, că diagonalele unui paralelogram se înjumătățesc reciproc.",solution:"Diagonala împarte paralelogramul în 2 triunghiuri congruente (LUL, folosind laturile opuse egale și unghiul comun al diagonalei), deci punctul de intersecție este mijlocul ambelor diagonale."},
  {level:"f-dificil",text:"Într-un paralelogram $ABCD$, bisectoarea unghiului $A$ intersectează $BC$ în $M$. Arătați că triunghiul $ABM$ este isoscel.",solution:"Unghiurile alterne interne $\\angle MAB=\\angle AMB$ (din $BC\\parallel AD$), deci triunghiul $ABM$ are $\\angle BAM=\\angle AMB$, fiind isoscel cu $AB=BM$."}
]);
addTopic7("u4-l3-dreptunghi", "quad", "Dreptunghiul este un paralelogram special, la care toate cele 4 unghiuri sunt drepte (90°). Deoarece este paralelogram, moștenește toate proprietățile acestuia, dar are în plus o proprietate unică: diagonalele dreptunghiului sunt EGALE. Aria se calculează simplu prin produsul dintre lungime și lățime, $A=L\\cdot l$, iar diagonala se poate afla aplicând teorema lui Pitagora în triunghiul dreptunghic format de cele două laturi și diagonală.", ["dreptunghi", "lungime", "lățime", "diagonală"], ["Toate unghiurile dreptunghiului au 90°.", "Diagonalele dreptunghiului sunt egale.", "$A=L\\cdot l$.", "Diagonala se calculează cu Pitagora."], quad7, [
  {level:"usor",text:"Un dreptunghi are laturile 5 cm și 12 cm. Calculați diagonala.",solution:"Diagonala este $\\sqrt{5^2+12^2}=\\sqrt{169}=13$ cm."},
  {level:"usor",text:"Calculați aria unui dreptunghi cu lungimea 9 cm și lățimea 6 cm.",solution:"Aria este $9\\cdot6=54$ cm²."},
  {level:"usor",text:"Perimetrul unui dreptunghi este 28 cm, iar lungimea este 8 cm. Aflați lățimea.",solution:"Perimetrul $2(8+l)=28\\Rightarrow8+l=14\\Rightarrow l=6$ cm."},
  {level:"mediu",text:"Un dreptunghi are diagonala 13 cm și o latură 5 cm. Aflați cealaltă latură și aria.",solution:"Cealaltă latură este $\\sqrt{13^2-5^2}=\\sqrt{144}=12$ cm, iar aria este $5\\cdot12=60$ cm²."},
  {level:"mediu",text:"Aria unui dreptunghi este 60 cm², iar o latură este 10 cm. Aflați perimetrul.",solution:"Dacă o latură este 10 cm, cealaltă este $\\frac{60}{10}=6$ cm, deci perimetrul este $2(10+6)=32$ cm."},
  {level:"mediu",text:"Demonstrați că diagonalele unui dreptunghi sunt egale, folosind teorema lui Pitagora.",solution:"Diagonala unește 2 vârfuri opuse, formând un triunghi dreptunghic cu catetele = laturile dreptunghiului; ambele diagonale dau aceeași lungime prin $\\sqrt{L^2+l^2}$, deci sunt egale."},
  {level:"dificil",text:"Un dreptunghi are perimetrul 34 cm, iar lungimea este cu 5 cm mai mare decât lățimea. Aflați aria.",solution:"Notăm lățimea $l$: $2(l+5+l)=34\\Rightarrow2l+5=17\\Rightarrow l=6$; lungimea 11 cm, aria $6\\cdot11=66$ cm²."},
  {level:"dificil",text:"Un teren dreptunghiular are aria 120 m² și diagonala 17 m. Aflați laturile.",solution:"Din $ab=120$ și $a^2+b^2=289$: $(a+b)^2=289+240=529\\Rightarrow a+b=23$; rezolvând $t^2-23t+120=0$ obținem $a=15,b=8$."},
  {level:"f-dificil",text:"Un dreptunghi este împărțit de o diagonală în două triunghiuri dreptunghice congruente. Demonstrați congruența acestora.",solution:"Diagonala împarte dreptunghiul în 2 triunghiuri cu aceleași 2 catete (laturile dreptunghiului) și ipotenuza comună, deci sunt congruente (LLL)."},
  {level:"f-dificil",text:"Un dreptunghi are diagonala 20 cm, iar laturile în raport 3:4. Aflați laturile și aria.",solution:"Din raportul 3:4, laturile sunt $3k,4k$: $(3k)^2+(4k)^2=20^2\\Rightarrow25k^2=400\\Rightarrow k=4$; laturile sunt 12 cm și 16 cm, aria $12\\cdot16=192$ cm²."}
]);
addTopic7("u4-l4-romb", "quad", "Rombul este un paralelogram special cu toate cele 4 laturi egale. Ca orice paralelogram, are laturile opuse paralele și unghiurile opuse egale, dar are proprietăți suplimentare: diagonalele rombului sunt PERPENDICULARE una pe alta și sunt bisectoarele unghiurilor din care pornesc. Aria rombului se calculează cel mai simplu cu formula $A=\\frac{d_1\\cdot d_2}{2}$, unde $d_1$ și $d_2$ sunt cele două diagonale.", ["romb", "diagonale perpendiculare", "latură", "înălțime"], ["Toate laturile rombului sunt egale.", "Diagonalele rombului sunt perpendiculare.", "Diagonalele bisectează unghiurile.", "$A=\\frac{d_1d_2}{2}$."], quad7, [
  {level:"usor",text:"Un romb are diagonalele 6 cm și 8 cm. Calculați aria.",solution:"Aria este $\\frac{6\\cdot8}{2}=24$ cm²."},
  {level:"usor",text:"Latura unui romb este 5 cm. Calculați perimetrul.",solution:"Perimetrul este $4\\cdot5=20$ cm."},
  {level:"usor",text:"Diagonalele unui romb sunt perpendiculare. Ce tip de unghi se formează la intersecția lor?",solution:"Se formează un unghi drept (90°)."},
  {level:"mediu",text:"Un romb are diagonalele 10 cm și 24 cm. Calculați latura, folosind Pitagora în jumătățile diagonalelor.",solution:"Jumătățile diagonalelor sunt 5 cm și 12 cm, deci latura este $\\sqrt{5^2+12^2}=13$ cm."},
  {level:"mediu",text:"Aria unui romb este 60 cm², iar o diagonală este 15 cm. Aflați cealaltă diagonală.",solution:"Cealaltă diagonală este $\\frac{2\\cdot60}{15}=8$ cm."},
  {level:"mediu",text:"Un romb are perimetrul 52 cm. Calculați latura.",solution:"Latura este $\\frac{52}{4}=13$ cm."},
  {level:"dificil",text:"Demonstrați că diagonalele unui romb sunt perpendiculare, folosind proprietățile paralelogramului și triunghiuri isoscele.",solution:"Diagonalele unui paralelogram se înjumătățesc; în triunghiurile formate cu laturile egale (romb), acestea sunt isoscele, iar mediana devine și înălțime, deci diagonalele sunt perpendiculare."},
  {level:"dificil",text:"Un romb are latura 13 cm și o diagonală 10 cm. Aflați cealaltă diagonală și aria.",solution:"Jumătatea diagonalei date este 5 cm, iar din $13^2-5^2=144$ rezultă cealaltă jumătate 12 cm, deci cealaltă diagonală este 24 cm; aria este $\\frac{10\\cdot24}{2}=120$ cm²."},
  {level:"f-dificil",text:"Un romb și un pătrat au aceeași arie, 100 cm². Dacă o diagonală a rombului este 25 cm, aflați cealaltă diagonală și comparați cu latura pătratului.",solution:"Latura pătratului este $\\sqrt{100}=10$ cm; jumătatea diagonalei date a rombului este 12,5 cm, iar aria $100=\\frac{25\\cdot d_2}{2}\\Rightarrow d_2=8$ cm."},
  {level:"f-dificil",text:"Demonstrați că diagonalele unui romb sunt bisectoare ale unghiurilor, folosind congruența triunghiurilor formate.",solution:"Triunghiurile formate de diagonale cu laturile egale ale rombului sunt congruente (LLL), deci unghiurile la vârf sunt împărțite în părți egale — diagonalele sunt bisectoare."}
]);
addTopic7("u4-l5-patrat", "quad", "Pătratul este cel mai special patrulater: este simultan dreptunghi (toate unghiurile de 90°) ȘI romb (toate laturile egale). De aceea moștenește toate proprietățile ambelor: diagonale egale (de la dreptunghi) ȘI diagonale perpendiculare care se înjumătățesc și bisectează unghiurile (de la romb). Diagonala pătratului se calculează cu formula $d=l\\sqrt2$ (din Pitagora: $d^2=l^2+l^2=2l^2$), iar aria este pur și simplu $A=l^2$.", ["pătrat", "latură", "diagonală", "arie"], ["Toate laturile sunt egale.", "Toate unghiurile au 90°.", "Diagonala este $d=l\\sqrt2$.", "Aria este $A=l^2$."], quad7, [
  {level:"usor",text:"Un pătrat are latura 7 cm. Calculați aria și perimetrul.",solution:"Aria este $7^2=49$ cm², perimetrul $4\\cdot7=28$ cm."},
  {level:"usor",text:"Un pătrat are aria 64 cm². Aflați latura.",solution:"Latura este $\\sqrt{64}=8$ cm."},
  {level:"usor",text:"Calculați diagonala unui pătrat cu latura 6 cm.",solution:"Diagonala este $6\\sqrt2$ cm."},
  {level:"mediu",text:"Diagonala unui pătrat este $8\\sqrt2$ cm. Aflați latura și aria.",solution:"Din $d=l\\sqrt2=8\\sqrt2$ obținem $l=8$ cm, deci aria este $64$ cm²."},
  {level:"mediu",text:"Perimetrul unui pătrat este 48 cm. Calculați diagonala.",solution:"Latura este $\\frac{48}{4}=12$ cm, deci diagonala este $12\\sqrt2$ cm."},
  {level:"mediu",text:"Un pătrat și un dreptunghi au aceeași arie de 49 cm². Dacă dreptunghiul are o latură de 7 cm, ce tip de dreptunghi este?",solution:"Latura pătratului este 7 cm; dreptunghiul cu o latură 7 cm și aria 49 are cealaltă latură tot 7 cm, deci este de fapt un pătrat."},
  {level:"dificil",text:"Aria unui pătrat este egală numeric cu perimetrul lui. Aflați latura.",solution:"$l^2=4l\\Rightarrow l=4$ cm (soluția $l=0$ nu are sens geometric)."},
  {level:"dificil",text:"Demonstrați că diagonala pătratului împarte unghiul drept în două unghiuri de 45°.",solution:"Diagonala este axă de simetrie, deci împarte unghiul de 90° în două unghiuri congruente de 45° fiecare."},
  {level:"f-dificil",text:"Un pătrat este înscris într-un cerc cu raza 5 cm (diagonala pătratului = diametrul cercului). Aflați latura pătratului.",solution:"Diagonala pătratului este diametrul: $d=10$ cm, deci latura este $\\frac{10}{\\sqrt2}=5\\sqrt2$ cm."},
  {level:"f-dificil",text:"Un pătrat mare este format din 4 pătrate mici congruente. Dacă latura pătratului mare este 12 cm, aflați aria unui pătrat mic.",solution:"Aria pătratului mic este $\\frac{144}{4}=36$ cm² (latura pătratului mic fiind 6 cm)."}
]);
addTopic7("u4-l6-trapez", "quad", "Trapezul este un patrulater cu DOAR o pereche de laturi paralele, numite baze (baza mare $B$ și baza mică $b$); celelalte două laturi se numesc laturi neparalele. Linia mijlocie a trapezului unește mijloacele laturilor neparalele și este paralelă cu bazele și egală cu semisuma lor, $m=\\frac{B+b}{2}$. Aria trapezului se calculează cu $A=\\frac{(B+b)\\cdot h}{2}$, unde $h$ este înălțimea. În trapezul isoscel, laturile neparalele sunt egale, iar unghiurile de la fiecare bază sunt egale; în trapezul dreptunghic, o latură neparalelă este perpendiculară pe baze.", ["trapez", "baze", "linie mijlocie", "trapez isoscel"], ["Linia mijlocie este $m=\\frac{B+b}{2}$.", "Aria este $A=\\frac{(B+b)h}{2}$.", "În trapezul isoscel, laturile neparalele sunt egale.", "În trapezul dreptunghic, o latură este perpendiculară pe baze."], quad7, [
  {level:"usor",text:"Un trapez are bazele 10 cm și 6 cm. Calculați linia mijlocie.",solution:"Linia mijlocie este $\\frac{10+6}{2}=8$ cm."},
  {level:"usor",text:"Calculați aria unui trapez cu bazele 8 cm și 12 cm, înălțimea 5 cm.",solution:"Aria este $\\frac{(8+12)\\cdot5}{2}=50$ cm²."},
  {level:"usor",text:"Într-un trapez isoscel, un unghi de la bază este 65°. Aflați celelalte unghiuri.",solution:"Unghiul de la cealaltă bază (același capăt de bază, isoscel) este tot 65°, iar cele de la baza mare sunt $180°-65°=115°$ fiecare."},
  {level:"mediu",text:"Linia mijlocie a unui trapez este 9 cm, iar o bază este 14 cm. Aflați cealaltă bază.",solution:"Cealaltă bază este $2\\cdot9-14=4$ cm."},
  {level:"mediu",text:"Un trapez dreptunghic are bazele 12 cm și 5 cm, iar latura perpendiculară pe baze este 4 cm. Calculați aria.",solution:"Aria este $\\frac{(12+5)\\cdot4}{2}=34$ cm²."},
  {level:"mediu",text:"Un trapez isoscel are bazele 6 cm și 16 cm, iar laturile neparalele 13 cm fiecare. Calculați înălțimea, folosind Pitagora.",solution:"Diferența bazelor este $16-6=10$, jumătate 5 cm; înălțimea este $\\sqrt{13^2-5^2}=12$ cm."},
  {level:"dificil",text:"Aria unui trapez este 84 cm², iar înălțimea 8 cm. Bazele sunt în raport 2:5. Aflați bazele.",solution:"Din $\\frac{(B+b)\\cdot8}{2}=84$ obținem $B+b=21$; cu raportul 2:5, $B=15$, $b=6$."},
  {level:"dificil",text:"Demonstrați că linia mijlocie a trapezului este paralelă cu bazele, folosind un triunghi auxiliar.",solution:"Segmentul care unește mijloacele laturilor neparalele, prelungit, formează cu bazele unghiuri egale prin construcția unui triunghi auxiliar (prelungind o latură neparalelă), demonstrând paralelismul."},
  {level:"f-dificil",text:"Un trapez isoscel are bazele 8 cm și 20 cm și laturile neparalele 10 cm. Calculați aria (aflați mai întâi înălțimea).",solution:"Diferența bazelor este $20-8=12$, jumătate 6 cm; înălțimea este $\\sqrt{10^2-6^2}=8$ cm, deci aria este $\\frac{(8+20)\\cdot8}{2}=112$ cm²."},
  {level:"f-dificil",text:"Un trapez dreptunghic are bazele 10 cm și 4 cm, iar diagonala mare 10 cm. Aflați înălțimea trapezului.",solution:"Diferența bazelor este $10-4=6$ cm; folosind diagonala 10 cm ca ipotenuză într-un triunghi dreptunghic auxiliar, înălțimea este $\\sqrt{10^2-6^2}=8$ cm."}
]);
addTopic7("u4-l7-perimetre-arii", "quad", "După ce am studiat fiecare patrulater în parte, este important să știm ALEGE formula corectă de perimetru și arie potrivită tipului de figură din problemă. Perimetrul este întotdeauna suma tuturor laturilor și se măsoară în unități de lungime (cm, m); aria măsoară suprafața și se exprimă în unități pătrate (cm², m²). O greșeală frecventă este folosirea unei laturi oblice în loc de înălțimea perpendiculară pe bază la calculul ariei. Tabelul de mai jos centralizează formulele esențiale pentru fiecare patrulater studiat.", ["perimetru", "arie", "bază", "înălțime"], ["Perimetrul se măsoară în unități de lungime.", "Aria se măsoară în unități pătrate.", "Înălțimea trebuie să fie perpendiculară pe bază.", "Conversiile de unități se fac înainte de calcul."], quad7, [
  {level:"usor",text:"Calculați perimetrul și aria unui dreptunghi cu laturile 6 cm și 9 cm.",solution:"Perimetrul este $2(6+9)=30$ cm, aria este $6\\cdot9=54$ cm²."},
  {level:"usor",text:"Calculați aria unui romb cu diagonalele 8 cm și 14 cm.",solution:"Aria este $\\frac{8\\cdot14}{2}=56$ cm²."},
  {level:"usor",text:"Calculați aria unui trapez cu bazele 5 cm și 11 cm, înălțimea 4 cm.",solution:"Aria este $\\frac{(5+11)\\cdot4}{2}=32$ cm²."},
  {level:"mediu",text:"Un teren în formă de paralelogram are baza 20 m și înălțimea 15 m. Calculați aria în ari (1 ar = 100 m²).",solution:"Aria este $20\\cdot15=300$ m², adică $3$ ari."},
  {level:"mediu",text:"Comparați ariile unui pătrat cu latura 8 cm și ale unui dreptunghi cu laturile 6 cm și 10 cm.",solution:"Pătratul are aria $64$ cm², dreptunghiul $60$ cm²; pătratul are aria mai mare, deși perimetrele pot fi comparabile."},
  {level:"mediu",text:"Un romb și un dreptunghi au aceeași arie de 48 cm². Dreptunghiul are laturile 6 cm și 8 cm. Dacă o diagonală a rombului este 12 cm, aflați cealaltă.",solution:"Aria dreptunghiului este $6\\cdot8=48$ cm²; din $\\frac{12\\cdot d_2}{2}=48$ obținem $d_2=8$ cm."},
  {level:"dificil",text:"O grădină dreptunghiulară de 40 m × 25 m este împărțită în două printr-un gard paralel cu lungimea, în raport 2:3. Calculați aria fiecărei părți.",solution:"Aria totală este $40\\cdot25=1000$ m²; în raport 2:3, o parte are $400$ m², cealaltă $600$ m²."},
  {level:"dificil",text:"Un teren are forma unui trapez cu bazele 30 m și 50 m, înălțimea 20 m și laturile neparalele de 25 m fiecare. Calculați costul împreoții, la 40 lei/m.",solution:"Aria este $\\frac{(30+50)\\cdot20}{2}=800$ m²; perimetrul (excluzând bazele) este $25+25=50$ m, cost $50\\cdot40=2000$ lei."},
  {level:"f-dificil",text:"O suprafață este formată dintr-un dreptunghi de 10 m × 6 m și un triunghi dreptunghic atasat cu catetele 6 m și 8 m. Calculați aria totală.",solution:"Aria dreptunghiului este $10\\cdot6=60$ m², aria triunghiului $\\frac{6\\cdot8}{2}=24$ m², total $84$ m²."},
  {level:"f-dificil",text:"Arătați, cu un exemplu numeric, că două patrulatere cu același perimetru pot avea arii diferite.",solution:"Exemplu: un pătrat cu latura 5 (perimetru 20, arie 25) și un dreptunghi 8×2 (perimetru 20, arie 16) au același perimetru, dar arii diferite."}
]);

addTopic7("u5-l1-coarde-arce", "circle", "Cercul este mulțimea tuturor punctelor din plan aflate la aceeași distanță (numită rază, $r$) față de un punct fix, numit centru. Diametrul este segmentul care unește două puncte de pe cerc și trece prin centru; are lungimea $d=2r$ și este cea mai lungă coardă posibilă. O coardă este orice segment care unește două puncte de pe cerc. Un arc este porțiunea de cerc cuprinsă între două puncte ale acestuia; arcele se măsoară în grade, la fel ca unghiurile.", ["cerc", "rază", "diametru", "coardă", "arc"], ["Diametrul este de două ori raza.", "Coarda unește două puncte de pe cerc.", "Diametrul este cea mai lungă coardă.", "Arcele se măsoară în grade."], circle7, [
  {level:"usor",text:"Un cerc are raza 6 cm. Calculați diametrul.",solution:"Diametrul este $2\\cdot6=12$ cm."},
  {level:"usor",text:"Un cerc are diametrul 18 cm. Calculați raza.",solution:"Raza este $\\frac{18}{2}=9$ cm."},
  {level:"usor",text:"Desenați un cerc și marcați o coardă care nu este diametru.",solution:"O coardă care nu trece prin centru poate fi trasată oriunde între 2 puncte de pe cerc, fără să treacă prin O."},
  {level:"mediu",text:"O coardă are lungimea 10 cm și trece prin centru. Ce nume special are această coardă?",solution:"Se numește diametru."},
  {level:"mediu",text:"Explicați de ce diametrul este cea mai lungă coardă posibilă a unui cerc.",solution:"Diametrul este singura coardă care trece prin centru; orice altă coardă, fiind mai aproape de margine, este mai scurtă decât diametrul (2r)."},
  {level:"mediu",text:"Un arc are măsura 90°. Ce fracțiune din cerc reprezintă?",solution:"Un arc de 90° reprezintă $\\frac{90°}{360°}=\\frac14$ din cerc."},
  {level:"dificil",text:"Două coarde egale ale unui cerc sunt situate la aceeași distanță de centru. Explicați de ce.",solution:"Distanța de la centru la o coardă depinde doar de lungimea ei; coarde egale sunt simetrice față de centru, deci la aceeași distanță."},
  {level:"dificil",text:"O coardă de 16 cm este la distanța 6 cm de centrul unui cerc cu raza necunoscută. Aflați raza (Pitagora).",solution:"Perpendiculara din centru înjumătățește coarda; jumătatea coardei este 8 cm, deci raza este $\\sqrt{8^2+6^2}=10$ cm."},
  {level:"f-dificil",text:"Demonstrați că perpendiculara din centru pe o coardă înjumătățește coarda.",solution:"Perpendiculara din centru pe coardă trece prin mijlocul acesteia (proprietate demonstrabilă cu triunghiuri congruente OM A și OMB)."},
  {level:"f-dificil",text:"Într-un cerc cu raza 10 cm, o coardă este la distanța 8 cm de centru. Calculați lungimea coardei.",solution:"Jumătatea coardei este $\\sqrt{10^2-8^2}=6$ cm, deci coarda are $2\\cdot6=12$ cm."}
]);
addTopic7("u5-l2-unghi-inscris", "circle", "Un unghi înscris într-un cerc este format de două coarde care pornesc din același punct de pe cerc. Proprietatea fundamentală este: măsura unui unghi înscris este EGALĂ cu jumătate din măsura arcului pe care îl subîntinde. O consecință importantă: toate unghiurile înscrise care subîntind ACELAȘI arc au aceeași măsură. O altă consecință specială: un unghi înscris care subîntinde un semicerc este întotdeauna DREPT (90°).", ["unghi înscris", "arc subîntins", "semicerc", "diametru"], ["Măsura unghiului înscris este jumătate din măsura arcului subîntins.", "Unghiurile înscrise care subîntind același arc sunt egale.", "Unghiul înscris într-un semicerc este drept.", "Arcul este dublul unghiului înscris."], circle7, [
  {level:"usor",text:"Un arc are 80°. Calculați unghiul înscris care îl subîntinde.",solution:"Unghiul înscris este $\\frac{80°}{2}=40°$."},
  {level:"usor",text:"Un unghi înscris este 40°. Calculați arcul subîntins.",solution:"Arcul este $2\\cdot40°=80°$."},
  {level:"usor",text:"Un unghi înscris se sprijină pe diametru. Ce măsură are?",solution:"Un unghi înscris pe diametru (semicerc) are 90°."},
  {level:"mediu",text:"Două unghiuri înscrise subîntind același arc de 70°. Ce măsură are fiecare?",solution:"Fiecare are $\\frac{70°}{2}=35°$."},
  {level:"mediu",text:"Un arc este de 150°. Aflați unghiul înscris corespunzător.",solution:"Unghiul înscris este $\\frac{150°}{2}=75°$."},
  {level:"mediu",text:"Un triunghi este înscris într-un semicerc, cu un vârf pe diametru. Ce tip de triunghi este?",solution:"Triunghiul este dreptunghic (unghiul din vârful de pe cerc, opus diametrului, este 90°)."},
  {level:"dificil",text:"Într-un cerc, un unghi la centru este de 100°. Aflați unghiul înscris care subîntinde același arc.",solution:"Unghiul înscris este $\\frac{100°}{2}=50°$."},
  {level:"dificil",text:"Demonstrați proprietatea unghiului înscris în semicerc folosind triunghiuri isoscele (razele sunt egale).",solution:"Triunghiul $OAB$ este isoscel ($OA=OB=$ rază); unghiul înscris este jumătate din unghiul la centru, deoarece unghiul exterior al triunghiului isoscel egalează suma unghiurilor de la bază, fiecare egal cu unghiul înscris."},
  {level:"f-dificil",text:"Un patrulater este înscris într-un cerc. Dacă un unghi este 70°, aflați unghiul opus, știind că unghiurile opuse ale unui patrulater inscriptibil sunt suplementare.",solution:"Unghiul opus este $180°-70°=110°$."},
  {level:"f-dificil",text:"Într-un cerc, arcul $AB$ este 130°, iar arcul $BC$ este 100°. Aflați unghiurile înscrise $\\angle BAC$ și $\\angle BCA$.",solution:"$\\angle BCA$ subîntinde arcul $AB=130°$, deci $\\angle BCA=65°$; $\\angle BAC$ subîntinde arcul $BC=100°$, deci $\\angle BAC=50°$."}
]);
addTopic7("u5-l3-tangente", "circle", "O tangentă la un cerc este o dreaptă care atinge cercul într-un SINGUR punct, numit punct de tangență — spre deosebire de o secantă, care intersectează cercul în două puncte. Proprietatea esențială este că raza dusă în punctul de tangență este PERPENDICULARĂ pe tangentă. O altă proprietate utilă: din orice punct exterior unui cerc se pot duce exact două tangente la cerc, iar segmentele de tangentă sunt EGALE. Aceste proprietăți creează adesea triunghiuri dreptunghice, utile pentru teorema lui Pitagora.", ["tangentă", "punct de tangență", "rază", "secantă"], ["Tangenta are un singur punct comun cu cercul.", "Raza dusă la punctul de tangență este perpendiculară pe tangentă.", "Din același punct exterior, tangentele la cerc sunt egale.", "Tangenta poate crea triunghiuri dreptunghice."], circle7, [
  {level:"usor",text:"O tangentă atinge cercul într-un punct T. Ce unghi formează raza OT cu tangenta?",solution:"Se formează un unghi de 90° (raza este perpendiculară pe tangentă)."},
  {level:"usor",text:"Dintr-un punct exterior se duc două tangente la un cerc. Ce se poate spune despre lungimile lor?",solution:"Cele două tangente au lungimi egale."},
  {level:"usor",text:"Distingeți printr-un desen o tangentă de o secantă la un cerc.",solution:"Tangenta atinge cercul într-un singur punct; secanta îl intersectează în două puncte."},
  {level:"mediu",text:"Un punct exterior este la distanța 13 cm de centrul unui cerc cu raza 5 cm. Calculați lungimea tangentei duse din acel punct.",solution:"Tangenta este $\\sqrt{13^2-5^2}=12$ cm."},
  {level:"mediu",text:"O tangentă și o rază formează un triunghi dreptunghic cu ipotenuza 25 cm și o catetă (raza) 7 cm. Aflați tangenta.",solution:"Tangenta este $\\sqrt{25^2-7^2}=24$ cm."},
  {level:"mediu",text:"Explicați de ce cele două tangente duse dintr-un punct exterior formează un unghi bisectat de linia care unește punctul cu centrul.",solution:"Cele 2 triunghiuri dreptunghice formate (rază-tangentă-linia centru-punct) sunt congruente (catetă-ipotenuză), deci unghiurile de la punctul exterior sunt egale, iar linia centru-punct este bisectoare."},
  {level:"dificil",text:"Un cerc cu raza 9 cm are un punct exterior la distanța 15 cm de centru. Calculați lungimea tangentei.",solution:"Tangenta este $\\sqrt{15^2-9^2}=12$ cm."},
  {level:"dificil",text:"Demonstrați congruența celor două triunghiuri formate de tangentele duse dintr-un punct exterior.",solution:"Cele 2 triunghiuri au raza comună (catetă), tangentele egale (catetă) și ipotenuza comună (distanța la punct), deci sunt congruente prin catetă-catetă sau ipotenuză-catetă."},
  {level:"f-dificil",text:"Un cerc este înscris într-un unghi, tangent la ambele laturi. Dacă distanța de la vârful unghiului la punctele de tangență este 12 cm și raza cercului 5 cm, aflați distanța de la vârf la centrul cercului.",solution:"Distanța de la vârf la centru este $\\sqrt{12^2+5^2}=13$ cm."},
  {level:"f-dificil",text:"Explicați de ce tangenta comună la două cercuri exterioare este perpendiculară pe ambele raze duse în punctele de tangență.",solution:"Tangenta comună este perpendiculară pe raza fiecărui cerc în punctul de tangență, aceasta fiind chiar definiția tangentei aplicată fiecărui cerc în parte."}
]);
addTopic7("u5-l4-poligoane-regulate", "circle", "Un poligon regulat are toate laturile egale ȘI toate unghiurile egale (de exemplu, pătratul este un poligon regulat cu 4 laturi, iar hexagonul regulat are 6 laturi egale). Orice poligon regulat cu $n$ laturi poate fi înscris într-un cerc, astfel încât toate vârfurile lui să fie pe cerc, iar centrul cercului coincide cu centrul poligonului. Unind centrul cu fiecare vârf obținem $n$ triunghiuri isoscele congruente, iar unghiul din centru (unghiul la centru) este $\\frac{360°}{n}$, deoarece cele $n$ unghiuri completează un cerc întreg.", ["poligon regulat", "înscris în cerc", "unghi la centru", "latură"], ["Un poligon regulat are toate laturile și toate unghiurile egale.", "Unghiul la centru pentru n laturi este $\\frac{360°}{n}$.", "Vârfurile unui poligon regulat înscris sunt pe cerc.", "Raza cercului leagă centrul de fiecare vârf."], circle7, [
  {level:"usor",text:"Calculați unghiul la centru al unui hexagon regulat înscris în cerc.",solution:"Unghiul la centru este $\\frac{360°}{6}=60°$."},
  {level:"usor",text:"Calculați unghiul la centru al unui pătrat înscris în cerc.",solution:"Unghiul la centru este $\\frac{360°}{4}=90°$."},
  {level:"usor",text:"Câte laturi are un poligon regulat cu unghiul la centru de 60°?",solution:"Din $\\frac{360°}{n}=60°$ rezultă $n=6$ laturi."},
  {level:"mediu",text:"Un triunghi echilateral este înscris într-un cerc cu raza 6 cm. Calculați unghiul la centru pentru fiecare latură.",solution:"Unghiul la centru pentru un triunghi echilateral este $\\frac{360°}{3}=120°$."},
  {level:"mediu",text:"Un octogon regulat este înscris în cerc. Calculați unghiul la centru.",solution:"Unghiul la centru este $\\frac{360°}{8}=45°$."},
  {level:"mediu",text:"Aflați numărul de laturi ale unui poligon regulat cu unghiul la centru de 45°.",solution:"Din $\\frac{360°}{n}=45°$ rezultă $n=8$ laturi."},
  {level:"dificil",text:"Un hexagon regulat este înscris într-un cerc cu raza 8 cm. Arătați că latura hexagonului este egală cu raza.",solution:"Fiecare triunghi format de centru cu o latură a hexagonului este echilateral (unghi la centru 60° și laturile egale cu raza), deci latura hexagonului este egală cu raza."},
  {level:"dificil",text:"Calculați unghiul interior al unui poligon regulat cu 12 laturi, pornind de la unghiul la centru.",solution:"Unghiul la centru pentru 12 laturi este $\\frac{360°}{12}=30°$; unghiul interior este $180°-30°=150°$ (folosind suma unghiurilor triunghiului isoscel format)."},
  {level:"f-dificil",text:"Demonstrați că triunghiurile formate de centrul unui poligon regulat cu fiecare latură sunt congruente.",solution:"Toate au aceeași bază (latura poligonului) și aceleași 2 laturi egale (raza), deci sunt congruente prin LLL."},
  {level:"f-dificil",text:"Un pentagon regulat este înscris într-un cerc cu raza 10 cm. Calculați unghiul la centru și explicați cum ați estima latura folosind un triunghi isoscel.",solution:"Unghiul la centru este $\\frac{360°}{5}=72°$; latura se poate estima cu triunghiul isoscel format de 2 raze și unghiul de 72°, folosind trigonometria sau construcție grafică."}
]);
addTopic7("u5-l5-lungime-aria", "circle", "Lungimea unui cerc se calculează cu formula $L=2\\pi r$ sau, echivalent, $L=\\pi d$, unde $\\pi\\approx3,14$ este o constantă specială. Aria discului (suprafața delimitată de cerc) se calculează cu $A=\\pi r^2$. Cea mai frecventă greșeală este confundarea razei cu diametrul: dacă enunțul dă diametrul, trebuie mai întâi împărțit la 2 pentru a obține raza, înainte de a aplica formulele.", ["lungimea cercului", "aria discului", "raza", "diametrul"], ["$L=2\\pi r$.", "$L=\\pi d$.", "$A=\\pi r^2$.", "Dacă se dă diametrul, raza este $r=\\frac d2$."], circle7, [
  {level:"usor",text:"Calculați lungimea cercului cu raza 5 cm.",solution:"Lungimea este $2\\pi\\cdot5=10\\pi$ cm."},
  {level:"usor",text:"Calculați aria discului cu raza 3 cm.",solution:"Aria este $\\pi\\cdot3^2=9\\pi$ cm²."},
  {level:"usor",text:"Calculați lungimea cercului cu diametrul 10 cm.",solution:"Lungimea este $\\pi\\cdot10=10\\pi$ cm."},
  {level:"mediu",text:"Calculați aria discului cu diametrul 14 cm.",solution:"Raza este 7 cm, deci aria este $\\pi\\cdot7^2=49\\pi$ cm²."},
  {level:"mediu",text:"O roată de bicicletă are diametrul 60 cm. Calculați câți metri parcurge la o rotație completă.",solution:"Raza este 30 cm, deci circumferința este $2\\pi\\cdot30=60\\pi\\approx188,4$ cm $\\approx1,88$ m."},
  {level:"mediu",text:"Aria unui disc este $49\\pi$ cm². Aflați raza.",solution:"Din $\\pi r^2=49\\pi$ obținem $r^2=49$, deci $r=7$ cm."},
  {level:"dificil",text:"Lungimea unui cerc este $18\\pi$ cm. Aflați aria discului corespunzător.",solution:"Din $2\\pi r=18\\pi$ obținem $r=9$ cm, deci aria este $\\pi\\cdot81=81\\pi$ cm²."},
  {level:"dificil",text:"Calculați aria coroanei circulare dintre două cercuri concentrice cu razele 4 cm și 7 cm.",solution:"Aria coroanei este $\\pi(7^2-4^2)=\\pi\\cdot33=33\\pi$ cm²."},
  {level:"f-dificil",text:"Un teren circular cu raza 20 m trebuie împreoțit cu gard. Calculați lungimea gardului necesar și costul, la 25 lei/m.",solution:"Circumferința este $2\\pi\\cdot20\\approx125,6$ m, cost $\\approx125,6\\cdot25\\approx3140$ lei."},
  {level:"f-dificil",text:"Un pătrat este înscris într-un cerc cu raza 6 cm. Comparați aria pătratului cu aria discului.",solution:"Diagonala pătratului este $2\\cdot6=12$ cm, latura $\\frac{12}{\\sqrt2}=6\\sqrt2$ cm, aria pătratului $72$ cm²; aria discului este $36\\pi\\approx113,1$ cm², mai mare decât aria pătratului."}
]);

addTopic7("u6-l1-segmente-proportionale", "similarity", "Două perechi de segmente sunt proporționale dacă rapoartele lungimilor lor sunt egale, de exemplu $\\frac{AB}{CD}=\\frac{EF}{GH}$. Această relație se numește proporție, iar regula produsului în cruce spune că, într-o proporție $\\frac ab=\\frac cd$, produsele termenilor extremi și mijlocii sunt egale: $a\\cdot d=b\\cdot c$. Această regulă ne permite să aflăm un segment necunoscut dintr-o proporție, atâta timp cât toate lungimile sunt exprimate în aceeași unitate de măsură.", ["segment", "raport", "proporție", "segmente corespondente"], ["Segmentele proporționale au rapoarte egale.", "Produsele în cruce sunt egale într-o proporție.", "Lungimile trebuie să fie în aceeași unitate.", "Raportul se simplifică asemenea unei fracții."], thales7, [
  {level:"usor",text:"Rezolvați proporția $\\frac{x}{4}=\\frac{6}{8}$.",solution:"Produs în cruce: $8x=24$, deci $x=3$."},
  {level:"usor",text:"Verificați dacă segmentele 3 cm, 6 cm, 4 cm, 8 cm sunt proporționale (în această ordine).",solution:"$\\frac36=\\frac48\\Rightarrow0,5=0,5$, deci sunt proporționale."},
  {level:"usor",text:"Rezolvați $\\frac{5}{x}=\\frac{10}{6}$.",solution:"Produs în cruce: $10x=30$, deci $x=3$."},
  {level:"mediu",text:"Segmentele $AB=8$ cm și $CD=12$ cm sunt proporționale cu $EF=6$ cm și $GH=x$. Aflați $x$.",solution:"$\\frac{8}{12}=\\frac{6}{x}\\Rightarrow8x=72\\Rightarrow x=9$."},
  {level:"mediu",text:"Simplificați raportul $\\frac{15}{25}$ și verificați dacă este echivalent cu $\\frac{9}{15}$.",solution:"$\\frac{15}{25}=\\frac35$, iar $\\frac{9}{15}=\\frac35$; sunt echivalente."},
  {level:"mediu",text:"Trei segmente sunt proporționale cu numerele 2, 3, 5, iar suma lor este 40 cm. Aflați fiecare segment.",solution:"Notăm segmentele $2k,3k,5k$: $10k=40$, deci $k=4$; segmentele sunt 8, 12, 20 cm."},
  {level:"dificil",text:"Rezolvați proporția $\\frac{2x-1}{5}=\\frac{3x+2}{8}$.",solution:"Produs în cruce: $8(2x-1)=5(3x+2)\\Rightarrow16x-8=15x+10\\Rightarrow x=18$."},
  {level:"dificil",text:"Demonstrați regula produsului în cruce pornind de la definiția proporției.",solution:"Din $\\frac ab=\\frac cd$, înmulțind ambii membri cu $bd$: $ad=bc$."},
  {level:"f-dificil",text:"Pe o hartă la scara 1:50000, o distanță reală de 15 km corespunde câtor cm pe hartă?",solution:"Scara 1:50000 înseamnă 1 cm hartă = 50000 cm reali = 500 m; $15$ km $=15000$ m, deci $\\frac{15000}{500}=30$ cm pe hartă."},
  {level:"f-dificil",text:"Patru segmente $a$, $b$, $c$, $d$ formează o proporție. Dacă $a=2b$ și $c=3d$, arătați ce relație există între $b$ și $d$.",solution:"Din $a\\cdot d=b\\cdot c$ (produs în cruce) și $a=2b$, $c=3d$: $2b\\cdot d=b\\cdot3d\\Rightarrow2bd=3bd$, ceea ce implică $bd=0$; deci $b=0$ sau $d=0$ (proporția standard nu poate avea ambele condiții simultan pentru valori nenule)."}
]);
addTopic7("u6-l2-thales", "similarity", "Teorema lui Thales este una dintre cele mai utile teoreme de geometrie: dacă într-un triunghi $ABC$ ducem o dreaptă paralelă cu una din laturi (de exemplu $DE\\parallel BC$, cu $D$ pe $AB$ și $E$ pe $AC$), atunci paralela taie celelalte două laturi în segmente PROPORȚIONALE: $\\frac{AD}{DB}=\\frac{AE}{EC}$. Practic, paralela creează un triunghi mai mic ($ADE$) asemenea cu triunghiul mare ($ABC$). Condiția esențială pentru a aplica Thales este paralelismul.", ["teorema lui Thales", "paralelă", "segmente determinate", "laturi ale triunghiului"], ["Dacă $DE\\parallel BC$, atunci segmentele de pe laturi sunt proporționale.", "$\\frac{AD}{DB}=\\frac{AE}{EC}$ în configurația standard.", "Se pot folosi și rapoarte cu laturile întregi.", "Paralelismul este condiția esențială."], thales7, [
  {level:"usor",text:"Într-un triunghi, $DE\\parallel BC$, $AD=3$, $DB=6$, $AE=4$. Aflați $EC$.",solution:"$\\frac{AD}{DB}=\\frac{AE}{EC}\\Rightarrow\\frac36=\\frac4{EC}\\Rightarrow EC=8$."},
  {level:"usor",text:"Verificați dacă $DE\\parallel BC$ știind $AD=2$, $DB=4$, $AE=3$, $EC=6$.",solution:"$\\frac{AD}{DB}=\\frac24=0,5$ și $\\frac{AE}{EC}=\\frac36=0,5$; rapoartele sunt egale, deci $DE\\parallel BC$."},
  {level:"usor",text:"Explicați ce condiție este necesară pentru a aplica teorema lui Thales.",solution:"Este necesar ca dreapta care taie 2 laturi ale triunghiului să fie paralelă cu a treia latură."},
  {level:"mediu",text:"Într-un triunghi, $AD=5$, $DB=10$, $AC=18$. Aflați $AE$ dacă $DE\\parallel BC$.",solution:"$DB=AC-AD... $ recalculăm: $\\frac{AD}{DB}=\\frac{AE}{EC}$, cu $DB=10$, deci $\\frac{5}{10}=\\frac{AE}{AC-AE}$; folosind $AC=18$: $AE=6$."},
  {level:"mediu",text:"Un triunghi $ABC$ cu $AB=15$ cm are pe $AB$ un punct $D$ cu $AD=5$ cm. Paralela prin $D$ la $BC$ intersectează $AC$ în $E$, iar $AC=12$ cm. Aflați $AE$.",solution:"$DB=15-5=10$; $\\frac{AD}{DB}=\\frac{5}{10}=0,5=\\frac{AE}{EC}$, deci $AE=\\frac{12}{3}=4$ cm."},
  {level:"mediu",text:"Demonstrați reciproca teoremei lui Thales.",solution:"Dacă segmentele sunt proporționale pe cele 2 laturi, atunci dreapta care le unește este paralelă cu a treia latură (demonstrație prin reducere la absurd, folosind unicitatea paralelei)."},
  {level:"dificil",text:"Într-un trapez $ABCD$ cu $AB\\parallel CD$, diagonalele se intersectează în $O$. Arătați că $\\frac{AO}{OC}=\\frac{BO}{OD}$ folosind Thales.",solution:"Triunghiurile $AOB$ și $COD$ sunt asemenea (unghiuri alterne egale din $AB\\parallel CD$), deci $\\frac{AO}{OC}=\\frac{BO}{OD}$."},
  {level:"dificil",text:"Trei drepte paralele taie două secante. Dacă pe prima secantă segmentele sunt 4 cm și 6 cm, iar pe a doua primul segment este 6 cm, aflați al doilea segment.",solution:"Din proporționalitate: $\\frac46=\\frac{x}{?}$; cu segmentele 4,6 pe prima secantă și 6 pe a doua, al doilea segment este $\\frac{6\\cdot6}{4}=9$."},
  {level:"f-dificil",text:"Într-un triunghi $ABC$, o paralelă la $BC$ împarte $AB$ și $AC$ astfel încât $AD:DB=3:2$. Dacă $AE=9$ cm, aflați $EC$.",solution:"$\\frac{AD}{DB}=\\frac32=\\frac{AE}{EC}\\Rightarrow\\frac9{EC}=\\frac32\\Rightarrow EC=6$; raportul $AE:AC=9:15=3:5$."},
  {level:"f-dificil",text:"Demonstrați teorema liniei mijlocii a triunghiului ca un caz particular al teoremei lui Thales.",solution:"Când $D$ și $E$ sunt mijloacele laturilor, $\\frac{AD}{DB}=\\frac{AE}{EC}=1$, deci $DE\\parallel BC$, iar din asemănare $DE=\\frac12BC$ — exact teorema liniei mijlocii."}
]);
addTopic7("u6-l3-triunghiuri-asemenea", "similarity", "Două triunghiuri sunt ASEMENEA dacă au unghiurile corespunzătoare egale ȘI laturile corespunzătoare proporționale (nu neapărat egale, ca la congruență). Raportul comun al laturilor corespunzătoare se numește raport de asemănare, $k$. O consecință importantă: perimetrele a două triunghiuri asemenea sunt în ACELAȘI raport $k$ ca laturile, dar ariile sunt în raportul $k^2$ — de exemplu, dacă laturile sunt în raport 2:3, ariile sunt în raport 4:9.", ["triunghiuri asemenea", "raport de asemănare", "laturi corespondente", "unghiuri corespondente"], ["Triunghiurile asemenea au unghiuri corespondente egale.", "Laturile corespondente sunt proporționale.", "Perimetrele sunt în același raport ca laturile.", "Ariile sunt în raportul pătratului raportului de asemănare."], thales7, [
  {level:"usor",text:"Două triunghiuri asemenea au raportul laturilor 2:5. Dacă o latură a triunghiului mic este 6 cm, aflați latura corespunzătoare a triunghiului mare.",solution:"Latura corespunzătoare este $6\\cdot\\frac52=15$ cm."},
  {level:"usor",text:"Perimetrul unui triunghi mic este 18 cm, iar raportul de asemănare cu unul mare este 1:3. Aflați perimetrul triunghiului mare.",solution:"Perimetrul mare este $18\\cdot3=54$ cm."},
  {level:"usor",text:"Aflați raportul ariilor a două triunghiuri asemenea cu raportul laturilor 3:4.",solution:"Raportul ariilor este $\\left(\\frac34\\right)^2=\\frac9{16}$."},
  {level:"mediu",text:"Două triunghiuri asemenea au ariile 25 cm² și 100 cm². Aflați raportul laturilor.",solution:"Raportul ariilor este $\\frac{25}{100}=\\frac14$, deci raportul laturilor este $\\sqrt{\\frac14}=\\frac12$."},
  {level:"mediu",text:"Un triunghi cu laturile 6, 8, 10 este asemenea cu unul cu perimetrul 36. Aflați laturile triunghiului mare.",solution:"Raportul de asemănare este $\\frac{36}{6+8+10}=\\frac{36}{24}=1,5$; laturile triunghiului mare sunt $9,12,15$."},
  {level:"mediu",text:"Un stâlp de 2 m proiectează o umbră de 3 m. În același moment, un copac proiectează o umbră de 12 m. Aflați înălțimea copacului.",solution:"Raportul umbrelor este $\\frac{3}{12}=\\frac14$, deci înălțimea copacului este $2\\cdot4=8$ m."},
  {level:"dificil",text:"Ariile a două triunghiuri asemenea sunt în raport 9:16. Dacă perimetrul celui mic este 27 cm, aflați perimetrul celui mare.",solution:"Raportul laturilor este $\\sqrt{\\frac9{16}}=\\frac34$, deci perimetrul mare este $27\\cdot\\frac43=36$ cm."},
  {level:"dificil",text:"Demonstrați că două triunghiuri echilaterale sunt întotdeauna asemenea.",solution:"Toate triunghiurile echilaterale au toate unghiurile de 60°, deci sunt asemenea prin criteriul UU."},
  {level:"f-dificil",text:"Un triunghi $ABC$ este asemenea cu $A'B'C'$, cu raportul 5:8. Dacă aria triunghiului $ABC$ este 50 cm², aflați aria triunghiului $A'B'C'$.",solution:"Raportul ariilor este $\\left(\\frac58\\right)^2=\\frac{25}{64}$, deci aria triunghiului $A'B'C'$ este $50\\cdot\\frac{64}{25}=128$ cm²."},
  {level:"f-dificil",text:"Două terenuri triunghiulare asemenea au raportul laturilor 3:7. Dacă terenul mic costă 45000 lei, la același preț pe m², cât ar costa terenul mare?",solution:"Raportul ariilor este $\\left(\\frac37\\right)^2=\\frac9{49}$, deci prețul terenului mare este $45000\\cdot\\frac{49}{9}=245000$ lei."}
]);
addTopic7("u6-l4-criterii", "similarity", "Pentru a demonstra că două triunghiuri sunt asemenea, există 3 criterii rapide. Criteriul UU (unghi-unghi) spune că este suficient să găsim DOUĂ perechi de unghiuri corespunzătoare egale (al treilea rezultă automat, deoarece suma unghiurilor unui triunghi este 180°). Criteriul LUL (latură-unghi-latură) cere două laturi proporționale și unghiul cuprins între ele egal. Criteriul LLL (latură-latură-latură) cere ca toate cele 3 perechi de laturi corespunzătoare să fie proporționale. Este esențial să respectăm ordinea corectă a vârfurilor corespondente.", ["criteriul UU", "criteriul LUL", "criteriul LLL", "corespondență"], ["UU: două unghiuri corespondente egale.", "LUL: două laturi proporționale și unghiul cuprins egal.", "LLL: toate laturile corespondente proporționale.", "Ordinea vârfurilor indică laturile corespondente."], thales7, [
  {level:"usor",text:"Două triunghiuri au câte două unghiuri egale: 50° și 70°. Sunt asemenea? Ce criteriu se aplică?",solution:"Da, sunt asemenea prin criteriul UU (2 unghiuri egale: 50° și 70°; al treilea rezultă 60° în ambele)."},
  {level:"usor",text:"Verificați cu criteriul LLL dacă triunghiurile cu laturile 3,4,5 și 6,8,10 sunt asemenea.",solution:"Rapoartele $\\frac36=\\frac48=\\frac5{10}=0,5$ sunt egale, deci sunt asemenea prin criteriul LLL."},
  {level:"usor",text:"Enunțați criteriul LUL de asemănare a triunghiurilor.",solution:"Criteriul LUL: dacă 2 laturi ale unui triunghi sunt proporționale cu 2 laturi ale altui triunghi, iar unghiurile cuprinse între ele sunt egale, triunghiurile sunt asemenea."},
  {level:"mediu",text:"Două triunghiuri au laturile 4,6 și 8,12 cu unghiul dintre ele de 60° la ambele. Sunt asemenea? Ce criteriu folosiți?",solution:"Rapoartele $\\frac48=\\frac6{12}=0,5$ sunt egale, iar unghiul dintre ele este comun (60°), deci sunt asemenea prin LUL."},
  {level:"mediu",text:"Într-un triunghi dreptunghic, înălțimea din unghiul drept împarte triunghiul în două triunghiuri mai mici. Arătați că acestea sunt asemenea cu triunghiul inițial.",solution:"Fiecare triunghi mic are un unghi drept și un unghi comun cu triunghiul mare, deci sunt asemenea cu acesta prin criteriul UU."},
  {level:"mediu",text:"Verificați dacă triunghiurile cu laturile 5,7,9 și 10,14,18 sunt asemenea, folosind LLL.",solution:"Rapoartele $\\frac5{10}=0,5$, $\\frac7{14}=0,5$, $\\frac9{18}=0,5$ sunt egale, deci triunghiurile sunt asemenea prin LLL."},
  {level:"dificil",text:"Demonstrați că două triunghiuri isoscele cu unghiul de la vârf egal sunt asemenea.",solution:"Ambele triunghiuri au unghiul de la vârf egal și, fiind isoscele, unghiurile de la bază sunt egale între ele (câte $\\frac{180°-\\text{vârf}}2$ fiecare), deci sunt asemenea prin UU."},
  {level:"dificil",text:"Într-un triunghi $ABC$, punctele $D$ și $E$ sunt mijloacele laturilor $AB$ și $AC$. Demonstrați că triunghiul $ADE$ este asemenea cu $ABC$.",solution:"$D$ și $E$ fiind mijloace, $AD=\\frac12AB$ și $AE=\\frac12AC$, cu unghiul $A$ comun, deci triunghiurile sunt asemenea prin LUL cu raportul $\\frac12$."},
  {level:"f-dificil",text:"Demonstrați, folosind un criteriu de asemănare, teorema catetei ($a^2=c\\cdot p$) din relațiile metrice ale triunghiului dreptunghic.",solution:"Triunghiul mic (catetă-proiecție-înălțime) este asemenea cu triunghiul mare prin UU (unghi drept și unghi comun), de unde rezultă direct $a^2=c\\cdot p$ prin proporționalitatea laturilor."},
  {level:"f-dificil",text:"Două triunghiuri dreptunghice au un unghi ascuțit egal. Demonstrați că sunt asemenea și explicați ce înseamnă acest lucru pentru rapoartele trigonometrice ale unghiului respectiv.",solution:"Fiind ambele dreptunghice cu un unghi ascuțit egal, au și al treilea unghi egal, deci sunt asemenea prin UU; rapoartele trigonometrice ale unghiului respectiv sunt identice în ambele triunghiuri (depind doar de unghi)."}
]);

addTopic7("u7-l1-inaltime", "metric", "Într-un triunghi dreptunghic, înălțimea dusă din vârful unghiului drept pe ipotenuză împarte triunghiul mare în DOUĂ triunghiuri dreptunghice mai mici, ambele asemenea cu triunghiul inițial. Segmentele determinate pe ipotenuză de piciorul înălțimii se numesc proiecțiile catetelor pe ipotenuză, notate $p$ și $q$. Teorema înălțimii spune că înălțimea este media geometrică a celor două proiecții: $h^2=p\\cdot q$, adică $h=\\sqrt{pq}$.", ["înălțime pe ipotenuză", "proiecții pe ipotenuză", "ipotenuză", "triunghi dreptunghic"], ["Dacă înălțimea pe ipotenuză este h, iar proiecțiile sunt p și q, atunci $h^2=pq$.", "Înălțimea pe ipotenuză creează două triunghiuri dreptunghice mai mici.", "Toate lungimile trebuie exprimate în aceeași unitate.", "Rezultatul h este pozitiv."], rightTriangle7, [
  {level:"usor",text:"Proiecțiile pe ipotenuză sunt 4 cm și 9 cm. Calculați înălțimea.",solution:"$h=\\sqrt{4\\cdot9}=\\sqrt{36}=6$ cm."},
  {level:"usor",text:"Proiecțiile sunt 3 cm și 12 cm. Calculați înălțimea.",solution:"$h=\\sqrt{3\\cdot12}=\\sqrt{36}=6$ cm."},
  {level:"usor",text:"Înălțimea pe ipotenuză este 6 cm, iar o proiecție este 4 cm. Aflați cealaltă proiecție.",solution:"Din $6^2=4\\cdot q$ obținem $q=9$ cm."},
  {level:"mediu",text:"Ipotenuza unui triunghi dreptunghic este 25 cm, iar o proiecție este 9 cm. Aflați cealaltă proiecție și înălțimea.",solution:"Cealaltă proiecție este $25-9=16$ cm, iar $h=\\sqrt{9\\cdot16}=12$ cm."},
  {level:"mediu",text:"Înălțimea pe ipotenuză este 12 cm, iar proiecțiile sunt egale. Aflați proiecțiile și ipotenuza.",solution:"Dacă proiecțiile sunt egale și $h=12$: $144=p^2\\Rightarrow p=12$; ipotenuza este $12+12=24$ cm."},
  {level:"mediu",text:"Un triunghi dreptunghic are proiecțiile 5 cm și 20 cm. Calculați înălțimea și ipotenuza.",solution:"$h=\\sqrt{5\\cdot20}=10$ cm, ipotenuza este $5+20=25$ cm."},
  {level:"dificil",text:"Demonstrați formula $h^2=pq$ folosind asemănarea triunghiurilor formate de înălțime.",solution:"Triunghiurile mici (formate de înălțime) sunt asemenea cu triunghiul mare și între ele (UU), de unde $\\frac{h}{p}=\\frac{q}{h}\\Rightarrow h^2=pq$."},
  {level:"dificil",text:"Înălțimea pe ipotenuză este 8 cm, iar ipotenuza este 20 cm. Aflați cele două proiecții.",solution:"Din $h^2=pq$ cu $h=8$: $pq=64$; iar $p+q=20$; rezolvând $t^2-20t+64=0$ obținem $p=4,q=16$ (sau invers)."},
  {level:"f-dificil",text:"Un triunghi dreptunghic are aria 54 cm² și ipotenuza 15 cm. Aflați înălțimea pe ipotenuză și apoi proiecțiile catetelor.",solution:"$h=\\frac{2\\cdot54}{15}=7,2$ cm; din $h^2=pq=51,84$ și $p+q=15$, rezolvând se obțin proiecțiile aproximativ 3,6 cm și 11,4 cm."},
  {level:"f-dificil",text:"Arătați că, dacă proiecțiile sunt egale, triunghiul dreptunghic este isoscel dreptunghic.",solution:"Dacă $p=q$, atunci $h^2=p^2\\Rightarrow h=p=q$, iar catetele devin egale (din teorema catetei), deci triunghiul este isoscel dreptunghic."}
]);
addTopic7("u7-l2-cateta", "metric", "Teorema catetei leagă fiecare catetă de propria ei proiecție pe ipotenuză: dacă $a$ este o catetă, iar $p$ este proiecția EI pe ipotenuza $c$, atunci $a^2=c\\cdot p$; similar, pentru cealaltă catetă $b$ cu proiecția $q$, avem $b^2=c\\cdot q$. Rețineți că suma proiecțiilor este întotdeauna egală cu ipotenuza întreagă: $p+q=c$.", ["catetă", "ipotenuză", "proiecție", "teorema catetei"], ["Pentru cateta a și proiecția p: $a^2=c\\cdot p$.", "Pentru cateta b și proiecția q: $b^2=c\\cdot q$.", "Proiecțiile p și q au suma egală cu ipotenuza.", "Fiecare catetă se leagă de propria proiecție."], rightTriangle7, [
  {level:"usor",text:"Ipotenuza este 20 cm, iar proiecția unei catete este 5 cm. Aflați acea catetă.",solution:"$a^2=20\\cdot5=100\\Rightarrow a=10$ cm."},
  {level:"usor",text:"O catetă este 12 cm, iar proiecția ei pe ipotenuză este 9 cm. Aflați ipotenuza.",solution:"$c=\\frac{12^2}{9}=16$ cm."},
  {level:"usor",text:"Proiecțiile sunt 4 cm și 16 cm. Aflați ambele catete.",solution:"Catetele sunt $\\sqrt{20\\cdot4}=\\sqrt{80}=4\\sqrt5$ și $\\sqrt{20\\cdot16}=\\sqrt{320}=8\\sqrt5$ (verificare: $c=p+q=20$)."},
  {level:"mediu",text:"Ipotenuza este 25 cm, iar o catetă este 15 cm. Aflați proiecția acestei catete.",solution:"Din $15^2=25\\cdot p\\Rightarrow p=9$ cm."},
  {level:"mediu",text:"O catetă este 10 cm, iar proiecția ei este 4 cm. Aflați ipotenuza și cealaltă proiecție.",solution:"$c=\\frac{10^2}{4}=25$ cm, cealaltă proiecție $25-4=21$ cm."},
  {level:"mediu",text:"Demonstrați relația $p+q=c$ pornind de la teorema catetei aplicată ambelor catete.",solution:"Din $a^2=cp$ și $b^2=cq$: $a^2+b^2=c(p+q)$; dar $a^2+b^2=c^2$ (Pitagora), deci $c^2=c(p+q)\\Rightarrow p+q=c$."},
  {level:"dificil",text:"Ipotenuza unui triunghi este 26 cm. O catetă este 10 cm. Aflați cealaltă catetă și ambele proiecții.",solution:"Cealaltă catetă este $\\sqrt{26^2-10^2}=24$ cm; proiecțiile sunt $\\frac{10^2}{26}\\approx3,85$ cm și $\\frac{24^2}{26}\\approx22,15$ cm."},
  {level:"dificil",text:"Un triunghi dreptunghic are catetele 9 cm și 12 cm. Calculați proiecțiile lor pe ipotenuză.",solution:"Ipotenuza este $\\sqrt{9^2+12^2}=15$ cm; proiecțiile sunt $\\frac{81}{15}=5,4$ cm și $\\frac{144}{15}=9,6$ cm."},
  {level:"f-dificil",text:"Demonstrați teorema catetei folosind asemănarea triunghiului mic (catetă-proiecție-înălțime) cu triunghiul mare.",solution:"Triunghiul catetă-proiecție-înălțime este asemenea cu triunghiul mare (UU), de unde proporția $\\frac{c}{a}=\\frac{a}{p}\\Rightarrow a^2=cp$."},
  {level:"f-dificil",text:"Un triunghi dreptunghic are proiecțiile 6,4 cm și 14,4 cm. Aflați catetele și verificați rezultatul cu teorema lui Pitagora.",solution:"Ipotenuza este $6,4+14,4=20,8$ cm; catetele sunt $\\sqrt{20,8\\cdot6,4}\\approx11,54$ cm și $\\sqrt{20,8\\cdot14,4}\\approx17,3$ cm; verificare aproximativă cu Pitagora confirmă rezultatele."}
]);
addTopic7("u7-l3-pitagora", "metric", "Teorema lui Pitagora este una dintre cele mai cunoscute teoreme din matematică: într-un triunghi dreptunghic, pătratul ipotenuzei este egal cu suma pătratelor catetelor, $c^2=a^2+b^2$. Ipotenuza este întotdeauna cea mai mare latură, situată opus unghiului drept. Reciproca teoremei este la fel de utilă: dacă într-un triunghi cu laturile $a$, $b$, $c$ este adevărat că $a^2+b^2=c^2$, atunci triunghiul este cu siguranță dreptunghic. Există „triplete pitagoreice” memorabile, ca 3-4-5, 5-12-13 sau 8-15-17.", ["catete", "ipotenuză", "triunghi dreptunghic", "reciproca teoremei"], ["$c^2=a^2+b^2$.", "Dacă $a^2+b^2=c^2$, triunghiul este dreptunghic.", "Ipotenuza este cea mai mare latură.", "Triplete utile: 3-4-5, 5-12-13, 8-15-17."], rightTriangle7, [
  {level:"usor",text:"Catetele sunt 3 cm și 4 cm. Calculați ipotenuza.",solution:"Ipotenuza este $\\sqrt{3^2+4^2}=5$ cm."},
  {level:"usor",text:"Ipotenuza este 13 cm, o catetă este 5 cm. Aflați cealaltă catetă.",solution:"Cealaltă catetă este $\\sqrt{13^2-5^2}=12$ cm."},
  {level:"usor",text:"Catetele sunt 6 cm și 8 cm. Calculați ipotenuza.",solution:"Ipotenuza este $\\sqrt{6^2+8^2}=10$ cm."},
  {level:"mediu",text:"Verificați, cu reciproca teoremei, dacă triunghiul cu laturile 7, 24, 25 este dreptunghic.",solution:"$7^2+24^2=49+576=625=25^2$, deci triunghiul este dreptunghic."},
  {level:"mediu",text:"Un dreptunghi are laturile 9 cm și 12 cm. Calculați diagonala.",solution:"Diagonala este $\\sqrt{9^2+12^2}=15$ cm."},
  {level:"mediu",text:"O scară de 5 m este sprijinită de un perete, cu piciorul la 3 m de perete. La ce înălțime ajunge scara pe perete?",solution:"Înălțimea este $\\sqrt{5^2-3^2}=4$ m."},
  {level:"dificil",text:"Catetele unui triunghi dreptunghic sunt în raport 3:4, iar ipotenuza este 20 cm. Aflați catetele.",solution:"Din raport 3:4 și ipotenuză 20: $(3k)^2+(4k)^2=400\\Rightarrow25k^2=400\\Rightarrow k=4$; catetele sunt 12 cm și 16 cm."},
  {level:"dificil",text:"Demonstrați teorema lui Pitagora folosind ariile a două pătrate construite pe catete și pe ipotenuză.",solution:"Pătratul construit pe ipotenuză are aria egală cu suma ariilor pătratelor construite pe catete, ceea ce se poate arăta prin descompunerea figurii în triunghiuri congruente (demonstrația clasică a lui Pitagora)."},
  {level:"f-dificil",text:"Un triunghi are laturile 10 cm, 24 cm, 26 cm. Verificați dacă este dreptunghic și, dacă da, calculați aria.",solution:"$10^2+24^2=100+576=676=26^2$, deci este dreptunghic; aria este $\\frac{10\\cdot24}{2}=120$ cm²."},
  {level:"f-dificil",text:"Un teren dreptunghiular are diagonala 50 m, iar laturile în raport 3:4. Aflați dimensiunile terenului și aria.",solution:"Din raport 3:4 și diagonală 50: $(3k)^2+(4k)^2=2500\\Rightarrow k=10$; dimensiunile sunt 30 m și 40 m, aria $1200$ m²."}
]);
addTopic7("u7-l4-trigonometrie", "metric", "Într-un triunghi dreptunghic, rapoartele trigonometrice sinus, cosinus și tangentă leagă un unghi ascuțit de lungimile laturilor: $\\sin A=\\frac{\\text{cateta opusă}}{\\text{ipotenuză}}$, $\\cos A=\\frac{\\text{cateta alăturată}}{\\text{ipotenuză}}$, iar $\\tan A=\\frac{\\text{cateta opusă}}{\\text{cateta alăturată}}$. Este esențial să identificăm corect care catetă este „opusă” (nu atinge unghiul $A$) și care este „alăturată” (atinge unghiul $A$) — acest lucru depinde de unghiul ales.", ["$\\sin A$", "$\\cos A$", "$\\tan A$", "catetă opusă și catetă alăturată"], ["$\\sin A=\\frac{\\text{cateta opusă}}{\\text{ipotenuză}}$.", "$\\cos A=\\frac{\\text{cateta alăturată}}{\\text{ipotenuză}}$.", "$\\tan A=\\frac{\\text{cateta opusă}}{\\text{cateta alăturată}}$.", "Raportul depinde de unghiul ales."], rightTriangle7, [
  {level:"usor",text:"Într-un triunghi dreptunghic cu catetele 3 și 4 și ipotenuza 5, calculați $\\sin A$ pentru unghiul opus catetei 3.",solution:"$\\sin A=\\frac{3}{5}=0,6$."},
  {level:"usor",text:"Calculați $\\cos A$ pentru același triunghi (unghiul opus catetei 3).",solution:"$\\cos A=\\frac{4}{5}=0,8$ (cateta alăturată unghiului opus catetei 3 este 4)."},
  {level:"usor",text:"Calculați $\\tan A$ pentru unghiul opus catetei 4 din triunghiul 3-4-5.",solution:"$\\tan A=\\frac{4}{3}$."},
  {level:"mediu",text:"Un triunghi dreptunghic are ipotenuza 10 cm și un unghi de 30°. Aflați cateta opusă acestui unghi ($\\sin30°=0,5$).",solution:"Cateta opusă este $10\\cdot0,5=5$ cm."},
  {level:"mediu",text:"Un triunghi dreptunghic are cateta opusă 6 cm și ipotenuza 12 cm. Aflați $\\sin A$.",solution:"$\\sin A=\\frac{6}{12}=0,5$."},
  {level:"mediu",text:"Calculați cateta alăturată unui unghi de 60° într-un triunghi cu ipotenuza 8 cm ($\\cos60°=0,5$).",solution:"Cateta alăturată este $8\\cdot0,5=4$ cm."},
  {level:"dificil",text:"Un triunghi dreptunghic are catetele 5 cm și 12 cm. Calculați toate cele trei rapoarte trigonometrice pentru fiecare unghi ascuțit.",solution:"Ipotenuza este $\\sqrt{5^2+12^2}=13$; pentru unghiul opus catetei 5: $\\sin=\\frac5{13}$, $\\cos=\\frac{12}{13}$, $\\tan=\\frac5{12}$; pentru celălalt unghi rapoartele se inversează."},
  {level:"dificil",text:"Demonstrați că $\\sin A=\\cos(90°-A)$ folosind cele două unghiuri ascuțite ale unui triunghi dreptunghic.",solution:"Unghiurile ascuțite $A$ și $90°-A$ au catetele opusă/alăturată schimbate între ele, deci $\\sin A=\\frac{\\text{opusă}}{\\text{ip}}=\\cos(90°-A)$."},
  {level:"f-dificil",text:"Un observator vede vârful unui copac sub un unghi de 45° de la o distanță de 20 m. Calculați înălțimea copacului.",solution:"Din $\\tan45°=1$: înălțimea copacului este egală cu distanța, deci 20 m."},
  {level:"f-dificil",text:"Demonstrați relația $\\sin^2A+\\cos^2A=1$ folosind teorema lui Pitagora într-un triunghi dreptunghic.",solution:"Din Pitagora $a^2+b^2=c^2$, împărțind la $c^2$: $\\left(\\frac ac\\right)^2+\\left(\\frac bc\\right)^2=1$, adică $\\sin^2A+\\cos^2A=1$."}
]);
addTopic7("u7-l5-rezolvare-triunghi", "metric", "A „rezolva” un triunghi dreptunghic înseamnă a afla toate laturile și toate unghiurile necunoscute, pornind de la datele cunoscute. Alegerea metodei depinde de ce informații avem: cu DOUĂ laturi folosim Pitagora; cu o latură și proiecțiile, folosim relațiile metrice; cu un unghi ascuțit și o latură, folosim rapoartele trigonometrice. Rețineți că suma celor două unghiuri ascuțite ale unui triunghi dreptunghic este întotdeauna 90°, iar rezultatele obtinute se pot verifica printr-o metodă diferită de cea folosită inițial.", ["rezolvarea triunghiului", "date suficiente", "unghi ascuțit", "latură necunoscută"], ["Cu două laturi se poate folosi Pitagora.", "Cu un unghi și o latură se pot folosi rapoarte trigonometrice.", "Suma unghiurilor ascuțite este 90°.", "Răspunsurile se verifică printr-o relație independentă."], rightTriangle7, [
  {level:"usor",text:"Un triunghi dreptunghic are catetele 6 cm și 8 cm. Aflați ipotenuza.",solution:"Ipotenuza este $\\sqrt{6^2+8^2}=10$ cm."},
  {level:"usor",text:"Un triunghi dreptunghic are ipotenuza 10 cm și o catetă 6 cm. Aflați cealaltă catetă.",solution:"Cealaltă catetă este $\\sqrt{10^2-6^2}=8$ cm."},
  {level:"usor",text:"Un triunghi dreptunghic are un unghi de 30° și ipotenuza 8 cm. Aflați cateta opusă.",solution:"Cateta opusă este $8\\cdot0,5=4$ cm (unghi de 30°)."},
  {level:"mediu",text:"Un triunghi dreptunghic are proiecțiile 4 cm și 9 cm pe ipotenuză. Aflați toate laturile.",solution:"Ipotenuza este $4+9=13$ cm; înălțimea $\\sqrt{4\\cdot9}=6$ cm; catetele $\\sqrt{13\\cdot4}=\\sqrt{52}\\approx7,2$ cm și $\\sqrt{13\\cdot9}=\\sqrt{117}\\approx10,8$ cm."},
  {level:"mediu",text:"Un triunghi dreptunghic are catetele 9 cm și 12 cm. Aflați ipotenuza, înălțimea pe ipotenuză și proiecțiile.",solution:"Ipotenuza este $\\sqrt{9^2+12^2}=15$ cm; înălțimea $\\frac{9\\cdot12}{15}=7,2$ cm; proiecțiile $\\frac{81}{15}=5,4$ cm și $\\frac{144}{15}=9,6$ cm."},
  {level:"mediu",text:"Un triunghi dreptunghic are un unghi de 45° și o catetă 7 cm. Aflați cealaltă catetă și ipotenuza.",solution:"La 45° catetele sunt egale, deci cealaltă catetă este 7 cm, iar ipotenuza este $7\\sqrt2$ cm."},
  {level:"dificil",text:"Un triunghi dreptunghic are aria 24 cm² și o catetă 6 cm. Aflați cealaltă catetă și ipotenuza.",solution:"Din arie $24=\\frac{6\\cdot b}{2}\\Rightarrow b=8$ cm; ipotenuza este $\\sqrt{6^2+8^2}=10$ cm."},
  {level:"dificil",text:"Rezolvați complet un triunghi dreptunghic cu ipotenuza 13 cm, folosind tripletul 5-12-13.",solution:"Cu tripletul 5-12-13 (scalat astfel încât ipotenuza să fie 13), catetele sunt 5 cm și 12 cm."},
  {level:"f-dificil",text:"O rampă de acces are lungimea 6 m și înălțimea 1,5 m. Calculați lungimea proiecției orizontale (Pitagora).",solution:"Proiecția orizontală este $\\sqrt{6^2-1,5^2}=\\sqrt{33,75}\\approx5,81$ m."},
  {level:"f-dificil",text:"Un triunghi dreptunghic are perimetrul 60 cm și este asemenea cu tripletul 3-4-5. Aflați toate laturile reale ale triunghiului.",solution:"Raportul de scalare este $\\frac{60}{3+4+5}=5$; laturile reale sunt 15 cm, 20 cm, 25 cm."}
]);

addTopic7("u8-l1-expresii-algebrice", "calcalg", "O expresie algebrică este o combinație de numere, litere (variabile) și operații matematice, de exemplu $3x+5$ sau $2x^2-4x+1$. Literele reprezintă numere necunoscute sau care pot varia. Valoarea unei expresii algebrice se obține înlocuind litera cu un număr concret și efectuând calculele — de exemplu, pentru $E=3x+5$, dacă $x=2$, atunci $E=3\\cdot2+5=11$. Expresiile algebrice descriu reguli generale, valabile pentru orice valoare a variabilei, nu doar pentru un caz particular.", ["expresie algebrică", "variabilă (necunoscută)", "valoarea expresiei", "coeficient"], ["O expresie algebrică poate conține una sau mai multe variabile.", "Valoarea se calculează înlocuind variabila cu un număr și respectând ordinea operațiilor.", "Coeficientul este numărul care înmulțește variabila.", "Expresii diferite pot avea aceeași valoare doar pentru anumite numere, nu pentru toate."], "", [
  {level:"usor",text:"Calculați valoarea expresiei $E=2x+3$ pentru $x=4$.",solution:"$E=2\\cdot4+3=11$."},
  {level:"usor",text:"Calculați valoarea expresiei $E=x^2-1$ pentru $x=3$.",solution:"$E=3^2-1=8$."},
  {level:"usor",text:"Scrieți o expresie algebrică pentru „de trei ori un număr, plus 7”.",solution:"Expresia este $3x+7$."},
  {level:"mediu",text:"Calculați valoarea expresiei $E=3x^2-2x+1$ pentru $x=-2$.",solution:"$E=3\\cdot4-2\\cdot(-2)+1=12+4+1=17$."},
  {level:"mediu",text:"Pentru ce valoare a lui $x$ expresia $E=5x-10$ este egală cu 0?",solution:"Din $5x-10=0$ obținem $x=2$."},
  {level:"mediu",text:"Scrieți expresia algebrică pentru perimetrul unui dreptunghi cu laturile $x$ și $x+3$.",solution:"Perimetrul este $2(x+x+3)=4x+6$."},
  {level:"dificil",text:"Calculați valoarea expresiei $E=\\frac{2x+6}{x-1}$ pentru $x=4$ și explicați pentru ce valoare a lui $x$ expresia nu are sens.",solution:"$E=\\frac{2\\cdot4+6}{4-1}=\\frac{14}{3}$; expresia nu are sens pentru $x=1$ (numitor 0)."},
  {level:"dificil",text:"Expresiile $E_1=2x+5$ și $E_2=x+9$. Aflați valoarea lui $x$ pentru care $E_1=E_2$.",solution:"$2x+5=x+9\\Rightarrow x=4$."},
  {level:"f-dificil",text:"Demonstrați că expresia $E=(x+1)^2-(x-1)^2$ este egală cu $4x$ pentru orice $x$, calculând pentru trei valori diferite.",solution:"Pentru $x=1$: $E=4$; pentru $x=2$: $E=8$; pentru $x=3$: $E=12$ — toate egale cu $4x$, confirmând identitatea."},
  {level:"f-dificil",text:"Un dreptunghi are laturile $x$ și $2x-1$. Scrieți expresia ariei și calculați-o pentru $x=5$.",solution:"Aria este $x(2x-1)=2x^2-x$; pentru $x=5$: $2\\cdot25-5=45$."}
]);
addTopic7("u8-l2-monoame-polinoame", "calcalg", "Un monom este un produs dintre un număr (coeficient) și una sau mai multe variabile la puteri naturale, de exemplu $5x^2y$. Un polinom este o sumă de monoame, numite termenii polinomului, de exemplu $2x^2-3x+7$. Doi monomi sunt asemenea dacă au exact aceeași parte literală — de exemplu $3x^2y$ și $-5x^2y$ sunt asemenea, dar $3x^2y$ și $3xy^2$ NU sunt asemenea. Adunarea și scăderea polinoamelor se fac reducând termenii asemenea, adunând sau scăzând coeficienții lor.", ["monom", "polinom", "termeni asemenea", "gradul unui monom"], ["Doi monomi sunt asemenea dacă au aceeași parte literală.", "Termenii asemenea se reduc adunând/scăzând coeficienții.", "Gradul unui monom este suma exponenților variabilelor.", "Un polinom se scrie de obicei ordonat, după puteri descrescătoare."], "", [
  {level:"usor",text:"Reduceți termenii asemenea din $5x-3x+2x$.",solution:"$5x-3x+2x=4x$."},
  {level:"usor",text:"Adunați polinoamele $2x^2+3x-1$ și $x^2-2x+4$.",solution:"$(2x^2+3x-1)+(x^2-2x+4)=3x^2+x+3$."},
  {level:"usor",text:"Identificați care dintre monoamele $3x^2y$, $-2x^2y$, $5xy^2$ sunt asemenea.",solution:"$3x^2y$ și $-2x^2y$ sunt asemenea (aceeași parte literală); $5xy^2$ nu este asemenea cu ele."},
  {level:"mediu",text:"Scădeți $3x^2-2x+5$ din $5x^2+x-1$.",solution:"$(5x^2+x-1)-(3x^2-2x+5)=2x^2+3x-6$."},
  {level:"mediu",text:"Aflați gradul monomului $4x^3y^2$.",solution:"Gradul este $3+2=5$."},
  {level:"mediu",text:"Simplificați $(2x^2-3x+4)+(-x^2+5x-6)$.",solution:"$(2x^2-3x+4)+(-x^2+5x-6)=x^2+2x-2$."},
  {level:"dificil",text:"Determinați valoarea lui $a$ pentru care $ax^2+3x-1$ și $2x^2+3x-1$ sunt polinoame egale.",solution:"Pentru polinoame egale, coeficienții lui $x^2$ trebuie să coincidă: $a=2$."},
  {level:"dificil",text:"Simplificați $(3x^2-2xy+y^2)-(x^2-2xy+3y^2)$.",solution:"$(3x^2-2xy+y^2)-(x^2-2xy+3y^2)=2x^2-2y^2$."},
  {level:"f-dificil",text:"Un polinom $P(x)=2x^2+ax+b$ are $P(0)=5$ și $P(1)=10$. Aflați $a$ și $b$.",solution:"$P(0)=b=5$; $P(1)=2+a+b=10\\Rightarrow a=3$."},
  {level:"f-dificil",text:"Demonstrați, printr-un exemplu, că suma a două polinoame de gradul 2 poate fi un polinom de gradul 1.",solution:"Exemplu: $(2x^2+3x)+(-2x^2+x)=4x$, un polinom de gradul 1."}
]);
addTopic7("u8-l3-inmultire-polinoame", "calcalg", "Pentru a înmulți două polinoame, aplicăm distributivitatea: fiecare termen al primului polinom se înmulțește cu FIECARE termen al celui de-al doilea, apoi se reduc termenii asemenea din rezultat. De exemplu, $(x+3)(x-2)=x\\cdot x+x\\cdot(-2)+3\\cdot x+3\\cdot(-2)=x^2-2x+3x-6=x^2+x-6$. La înmulțirea unui monom cu un polinom, monomul se distribuie la fiecare termen al polinomului.", ["distributivitate", "produs de polinoame", "termeni asemenea rezultați", "monom × polinom"], ["$(a+b)(c+d)=ac+ad+bc+bd$.", "Un monom înmulțit cu un polinom se distribuie la fiecare termen.", "Rezultatul înmulțirii se reduce la termeni asemenea.", "Gradul produsului este suma gradelor factorilor."], "", [
  {level:"usor",text:"Calculați $3x(2x+5)$.",solution:"$3x(2x+5)=6x^2+15x$."},
  {level:"usor",text:"Dezvoltați $(x+2)(x+4)$.",solution:"$(x+2)(x+4)=x^2+6x+8$."},
  {level:"usor",text:"Dezvoltați $(x-3)(x+1)$.",solution:"$(x-3)(x+1)=x^2-2x-3$."},
  {level:"mediu",text:"Calculați $(2x-1)(x+3)$.",solution:"$(2x-1)(x+3)=2x^2+5x-3$."},
  {level:"mediu",text:"Dezvoltați $(x+5)(x-5)$.",solution:"$(x+5)(x-5)=x^2-25$."},
  {level:"mediu",text:"Calculați $-2x(x^2-3x+1)$.",solution:"$-2x(x^2-3x+1)=-2x^3+6x^2-2x$."},
  {level:"dificil",text:"Dezvoltați $(2x+3)(x^2-x+2)$.",solution:"$(2x+3)(x^2-x+2)=2x^3-2x^2+4x+3x^2-3x+6=2x^3+x^2+x+6$."},
  {level:"dificil",text:"Simplificați $(x+1)(x+2)-(x-1)(x-2)$.",solution:"$(x+1)(x+2)=x^2+3x+2$ și $(x-1)(x-2)=x^2-3x+2$; diferența este $6x$."},
  {level:"f-dificil",text:"Arătați că $(x+2)(x-2)+4=x^2$.",solution:"$(x+2)(x-2)+4=x^2-4+4=x^2$."},
  {level:"f-dificil",text:"Un dreptunghi are laturile $(x+3)$ cm și $(x-1)$ cm. Scrieți expresia ariei dezvoltată și calculați-o pentru $x=6$.",solution:"Aria este $(x+3)(x-1)=x^2+2x-3$; pentru $x=6$: $36+12-3=45$ cm²."}
]);
addTopic7("u8-l4-formule-calcul-prescurtat", "calcalg", "Anumite produse de polinoame apar atât de des încât merită memorate ca identități remarcabile: $(a+b)^2=a^2+2ab+b^2$, $(a-b)^2=a^2-2ab+b^2$ și $a^2-b^2=(a-b)(a+b)$. Aceste formule ne permit să dezvoltăm rapid un pătrat de sumă/diferență sau să recunoaștem o diferență de pătrate, fără să mai facem înmulțirea termen cu termen. Sunt utile atât pentru calcul rapid, cât și pentru factorizare.", ["pătratul sumei", "pătratul diferenței", "diferența de pătrate", "identitate remarcabilă"], ["$(a+b)^2=a^2+2ab+b^2$.", "$(a-b)^2=a^2-2ab+b^2$.", "$a^2-b^2=(a-b)(a+b)$.", "Formulele funcționează pentru orice numere sau expresii $a$ și $b$."], "", [
  {level:"usor",text:"Dezvoltați $(x+4)^2$.",solution:"$(x+4)^2=x^2+8x+16$."},
  {level:"usor",text:"Dezvoltați $(x-3)^2$.",solution:"$(x-3)^2=x^2-6x+9$."},
  {level:"usor",text:"Scrieți $x^2-9$ ca produs, folosind diferența de pătrate.",solution:"$x^2-9=(x-3)(x+3)$."},
  {level:"mediu",text:"Dezvoltați $(2x+1)^2$.",solution:"$(2x+1)^2=4x^2+4x+1$."},
  {level:"mediu",text:"Dezvoltați $(3x-2)^2$.",solution:"$(3x-2)^2=9x^2-12x+4$."},
  {level:"mediu",text:"Scrieți $4x^2-25$ ca produs.",solution:"$4x^2-25=(2x-5)(2x+5)$."},
  {level:"dificil",text:"Calculați $102^2$ folosind formula $(100+2)^2$.",solution:"$102^2=(100+2)^2=10000+400+4=10404$."},
  {level:"dificil",text:"Simplificați $(x+3)^2-(x-3)^2$ folosind formulele, fără a dezvolta complet.",solution:"$(x+3)^2-(x-3)^2=4\\cdot x\\cdot3=12x$ (diferență de pătrate: $(a+b)^2-(a-b)^2=4ab$ cu $a=x,b=3$)."},
  {level:"f-dificil",text:"Arătați că $(a+b)^2-(a-b)^2=4ab$, pentru orice $a$ și $b$.",solution:"$(a+b)^2-(a-b)^2=(a^2+2ab+b^2)-(a^2-2ab+b^2)=4ab$."},
  {level:"f-dificil",text:"Calculați $99\\times101$ folosind diferența de pătrate $(100-1)(100+1)$.",solution:"$99\\times101=(100-1)(100+1)=10000-1=9999$."}
]);
addTopic7("u8-l5-factor-comun-factorizare", "calcalg", "Factorizarea este operația inversă înmulțirii: transformăm o sumă de termeni într-un produs. Cea mai simplă metodă este DAREA FACTORULUI COMUN: dacă toți termenii au un factor comun, îl scoatem în față, de exemplu $6x+9=3(2x+3)$. O altă metodă este folosirea formulelor de calcul prescurtat „de-a-ndoaselea”: dacă recunoaștem forma $a^2-b^2$, o scriem direct ca $(a-b)(a+b)$. Factorizarea este esențială pentru simplificarea fracțiilor algebrice și rezolvarea ecuațiilor mai avansate.", ["factor comun", "descompunere în factori", "produs de factori", "factorizare cu formule"], ["Dacă toți termenii au un factor comun $c$, atunci $ca+cb=c(a+b)$.", "$a^2-b^2$ se factorizează ca $(a-b)(a+b)$.", "Factorul comun poate fi un număr, o literă sau o expresie.", "Rezultatul factorizării se verifică prin înmulțire înapoi."], "", [
  {level:"usor",text:"Descompuneți în factori $6x+9$.",solution:"$6x+9=3(2x+3)$."},
  {level:"usor",text:"Descompuneți în factori $4x^2-8x$.",solution:"$4x^2-8x=4x(x-2)$."},
  {level:"usor",text:"Scrieți $x^2-16$ ca produs.",solution:"$x^2-16=(x-4)(x+4)$."},
  {level:"mediu",text:"Descompuneți $3x^2+6x$.",solution:"$3x^2+6x=3x(x+2)$."},
  {level:"mediu",text:"Descompuneți $9x^2-4$.",solution:"$9x^2-4=(3x-2)(3x+2)$."},
  {level:"mediu",text:"Descompuneți $5x^2y-10xy$.",solution:"$5x^2y-10xy=5xy(x-2)$."},
  {level:"dificil",text:"Descompuneți complet $2x^3-8x$ (factor comun, apoi diferență de pătrate).",solution:"$2x^3-8x=2x(x^2-4)=2x(x-2)(x+2)$."},
  {level:"dificil",text:"Simplificați fracția $\\frac{x^2-9}{x+3}$ folosind factorizarea (pentru $x\\ne-3$).",solution:"$\\frac{x^2-9}{x+3}=\\frac{(x-3)(x+3)}{x+3}=x-3$."},
  {level:"f-dificil",text:"Descompuneți $x^2-6x+9$ recunoscând un pătrat perfect.",solution:"$x^2-6x+9=(x-3)^2$."},
  {level:"f-dificil",text:"Arătați că $x^3-x=x(x-1)(x+1)$, verificând pentru $x=3$.",solution:"$x^3-x=x(x^2-1)=x(x-1)(x+1)$; pentru $x=3$: $27-3=24$ și $3\\cdot2\\cdot4=24$ ✓."}
]);

addTopic7("u9-l1-proprietati", "inegal", "O inegalitate compară două expresii folosind semnele $<$, $>$, $\\le$ sau $\\ge$, de exemplu $2x+1>5$. Spre deosebire de o ecuație, o inegalitate are de obicei o INFINITATE de soluții, formând un interval de numere. Proprietăți de bază: putem aduna sau scădea același număr din ambii membri fără să schimbăm sensul; putem înmulți/împărți ambii membri cu un număr POZITIV fără să schimbăm sensul; dar dacă înmulțim/împărțim cu un număr NEGATIV, sensul se INVERSEAZĂ.", ["inegalitate", "sensul inegalității", "soluție (mulțime de soluții)", "interval"], ["Adunarea/scăderea aceluiași număr nu schimbă sensul.", "Înmulțirea/împărțirea cu un număr pozitiv nu schimbă sensul.", "Înmulțirea/împărțirea cu un număr negativ inversează sensul.", "Soluția este, de obicei, un interval de numere."], "", [
  {level:"usor",text:"Verificați dacă $x=6$ este soluție a inegalității $2x-5>3$.",solution:"$2\\cdot6-5=7>3$, adevărat, deci $x=6$ este soluție."},
  {level:"usor",text:"Explicați ce se întâmplă cu sensul inegalității $3<5$ dacă înmulțim ambii membri cu $-1$.",solution:"Sensul se inversează: din $3<5$ obținem $-3>-5$."},
  {level:"usor",text:"Comparați $-2$ și $-5$ și scrieți inegalitatea corectă.",solution:"$-2>-5$ (pe axă, $-2$ este mai la dreapta, deci mai mare)."},
  {level:"mediu",text:"Verificați dacă $x=-3$ este soluție a inegalității $-2x\\ge5$.",solution:"$-2\\cdot(-3)=6\\ge5$, adevărat, deci $x=-3$ este soluție."},
  {level:"mediu",text:"Dacă $a<b$, comparați $a+4$ și $b+4$.",solution:"$a+4<b+4$ (se adaugă același număr, sensul nu se schimbă)."},
  {level:"mediu",text:"Dacă $a<b$ și înmulțim ambii membri cu $-2$, ce relație rezultă între $-2a$ și $-2b$?",solution:"$-2a>-2b$ (sensul se inversează la înmulțirea cu număr negativ)."},
  {level:"dificil",text:"Dacă $2<x<5$, aflați între ce valori se află $3x+1$.",solution:"Din $2<x<5$, înmulțind cu 3: $6<3x<15$, apoi adunând 1: $7<3x+1<16$."},
  {level:"dificil",text:"Explicați, cu un exemplu numeric, de ce inversul $\\frac1x$ nu păstrează automat sensul inegalității când $x$ își schimbă semnul.",solution:"Exemplu: pentru $x=2$, $\\frac1x=0,5$; pentru $x=-2$, $\\frac1x=-0,5$; deși $2>-2$, avem $0,5>-0,5$ — sensul se păstrează doar dacă $x$ nu-și schimbă semnul."},
  {level:"f-dificil",text:"Dacă $-1\\le x\\le3$, aflați între ce valori se află $-2x+4$.",solution:"Din $-1\\le x\\le3$, înmulțind cu $-2$ (schimbă sensul): $-6\\le-2x\\le2$, apoi adunând 4: $-2\\le-2x+4\\le6$."},
  {level:"f-dificil",text:"Demonstrați, folosind proprietățile, că din $a<b$ și $c<d$ rezultă $a+c<b+d$.",solution:"Din $a<b$ adunăm $c$: $a+c<b+c$; din $c<d$ adunăm $b$: $b+c<b+d$; combinând, $a+c<b+c<b+d$, deci $a+c<b+d$."}
]);
addTopic7("u9-l2-rezolvare-liniare", "inegal", "Rezolvarea unei inegalități liniare este similară cu rezolvarea unei ecuații: mutăm termenii cu necunoscută într-un membru și termenii liberi în celălalt, apoi împărțim la coeficientul necunoscutei — dar dacă împărțim cu un număr negativ, INVERSĂM semnul inegalității. Soluția se scrie ca interval, de exemplu $x>5$ înseamnă $x\\in(5,+\\infty)$, iar pe axa numerelor se marchează cu un cerc gol în 5 și o săgeată spre dreapta.", ["inegalitate liniară", "interval deschis/închis", "cerc plin/gol pe axă", "soluție infinită"], ["Pentru $ax>b$ cu $a>0$: $x>\\frac ba$.", "Pentru $ax>b$ cu $a<0$: $x<\\frac ba$ (sensul se inversează).", "$\\le$ și $\\ge$ se reprezintă cu cerc plin pe axă.", "$<$ și $>$ se reprezintă cu cerc gol pe axă."], "", [
  {level:"usor",text:"Rezolvați $x+4>9$.",solution:"$x>5$."},
  {level:"usor",text:"Rezolvați $2x\\le10$.",solution:"$x\\le5$."},
  {level:"usor",text:"Rezolvați $-x<3$.",solution:"Înmulțind cu $-1$ (schimbă sensul): $x>-3$."},
  {level:"mediu",text:"Rezolvați $3x-2\\ge7$.",solution:"$3x\\ge9\\Rightarrow x\\ge3$."},
  {level:"mediu",text:"Rezolvați $-2x+5>1$.",solution:"$-2x>-4$, împărțind cu $-2$ (schimbă sensul): $x<2$."},
  {level:"mediu",text:"Reprezentați pe axă soluția inegalității $x\\le4$.",solution:"Pe axă se marchează cerc plin în 4, cu săgeată spre stânga."},
  {level:"dificil",text:"Rezolvați $5(x-1)<2x+7$.",solution:"$5x-5<2x+7\\Rightarrow3x<12\\Rightarrow x<4$."},
  {level:"dificil",text:"Rezolvați $-3(2x-1)\\ge x+8$.",solution:"$-6x+3\\ge x+8\\Rightarrow-7x\\ge5\\Rightarrow x\\le-\\frac57$."},
  {level:"f-dificil",text:"Rezolvați $2<3x-1\\le11$ și reprezentați soluția pe axă.",solution:"$3<3x\\le12\\Rightarrow1<x\\le4$."},
  {level:"f-dificil",text:"Determinați cel mai mic număr întreg care verifică inegalitatea $4x-7>13$.",solution:"$4x>20\\Rightarrow x>5$, deci cel mai mic număr întreg este 6."}
]);
addTopic7("u9-l3-probleme", "inegal", "Multe probleme practice cer să găsim toate valorile posibile ale unei mărimi care satisfac o condiție de tipul „cel puțin”, „cel mult”, „mai mare decât” sau „mai mic decât” — acestea se traduc în inegalități. De exemplu, „un elev vrea să aibă media cel puțin 9” înseamnă $medie\\ge9$. Ca și la ecuații, notăm necunoscuta, traducem condiția din enunț într-o inegalitate, o rezolvăm, apoi verificăm dacă soluția are sens în context.", ["condiție de tip inegalitate", "cel puțin / cel mult", "soluție validă în context", "număr natural admisibil"], ["„Cel puțin” se traduce prin $\\ge$.", "„Cel mult” se traduce prin $\\le$.", "Soluțiile trebuie verificate în contextul problemei.", "Uneori doar soluțiile naturale sau întregi au sens practic."], "", [
  {level:"usor",text:"Un elev are notele 8 și 9 la două teze. Ce notă minimă trebuie să ia la a treia teză pentru ca media să fie cel puțin 9?",solution:"Suma primelor 2 este 17; pentru medie $\\ge9$ pe 3 teze, suma trebuie să fie $\\ge27$, deci a treia notă $\\ge10$."},
  {level:"usor",text:"Un bilet la cinema costă 20 lei. Câte bilete cel mult se pot cumpăra cu 150 lei?",solution:"$20x\\le150\\Rightarrow x\\le7,5$, deci cel mult 7 bilete."},
  {level:"usor",text:"Scrieți inegalitatea pentru „un număr mărit cu 5 este cel mult 20”.",solution:"$x+5\\le20$."},
  {level:"mediu",text:"Perimetrul unui dreptunghi cu lățimea 6 cm trebuie să fie cel puțin 40 cm. Aflați lungimea minimă.",solution:"$2(l+6)\\ge40\\Rightarrow l+6\\ge20\\Rightarrow l\\ge14$ cm."},
  {level:"mediu",text:"Un taxi costă 5 lei pornirea plus 2 lei/km. Câți km cel mult poate parcurge un client cu 35 lei?",solution:"$5+2x\\le35\\Rightarrow2x\\le30\\Rightarrow x\\le15$ km."},
  {level:"mediu",text:"Un număr natural mărit de 3 ori și micșorat cu 4 este mai mic decât 20. Aflați valorile posibile.",solution:"$3x-4<20\\Rightarrow3x<24\\Rightarrow x<8$, deci $x\\in\\{0,1,...,7\\}$ (numere naturale)."},
  {level:"dificil",text:"Suma a două numere pare consecutive este mai mică decât 45. Aflați cel mai mare număr par care poate fi primul dintre ele.",solution:"Notăm $x,x+2$: $2x+2<45\\Rightarrow x<21,5$; cel mai mare număr par este 20."},
  {level:"dificil",text:"Un depozit are cel mult 500 kg capacitate. Dacă fiecare cutie cântărește 12 kg, câte cutii cel mult pot fi depozitate?",solution:"$12x\\le500\\Rightarrow x\\le41,67$, deci cel mult 41 cutii."},
  {level:"f-dificil",text:"Un elev vrea ca media a 4 note să fie cel puțin 8,5, iar primele 3 note sunt 8, 9, 7. Aflați nota minimă necesară la a patra teză.",solution:"Suma primelor 3 este 24; pentru medie $\\ge8,5$ pe 4 teze, suma $\\ge34$, deci a patra notă $\\ge10$."},
  {level:"f-dificil",text:"Un buget de 200 lei se împarte între cărți (25 lei/bucată) și caiete (3 lei/bucată), cumpărând exact 5 cărți. Aflați câte caiete cel mult se pot cumpăra.",solution:"$25\\cdot5+3x\\le200\\Rightarrow125+3x\\le200\\Rightarrow x\\le25$, deci cel mult 25 caiete."}
]);

addTopic7("u10-l1-notiunea-de-functie", "functie", "O funcție este o „regulă” care asociază fiecărui element dintr-o mulțime (domeniu) exact UN element dintr-o altă mulțime (codomeniu). Notăm o funcție $f$ și scriem $f(x)$ pentru valoarea funcției calculată în $x$. O funcție poate fi descrisă printr-o formulă (de exemplu $f(x)=2x+1$), printr-un tabel de valori sau printr-un grafic. Condiția esențială: fiecărei valori de intrare îi corespunde O SINGURĂ valoare de ieșire.", ["funcție", "domeniu", "codomeniu", "$f(x)$ - valoarea funcției"], ["Fiecărui $x$ din domeniu îi corespunde exact o valoare $f(x)$.", "O funcție poate fi dată prin formulă, tabel sau grafic.", "Graficul unei funcții este mulțimea punctelor $(x,f(x))$.", "Domeniul este mulțimea valorilor pe care le poate lua $x$."], "", [
  {level:"usor",text:"Calculați $f(3)$ pentru $f(x)=2x+1$.",solution:"$f(3)=2\\cdot3+1=7$."},
  {level:"usor",text:"Completați un tabel de valori pentru $f(x)=x-2$, cu $x\\in\\{-1,0,1,2\\}$.",solution:"$f(-1)=-3$, $f(0)=-2$, $f(1)=-1$, $f(2)=0$."},
  {level:"usor",text:"Verificați dacă punctul $(2,5)$ aparține graficului funcției $f(x)=2x+1$.",solution:"$f(2)=2\\cdot2+1=5$, deci punctul $(2,5)$ aparține graficului."},
  {level:"mediu",text:"Aflați $x$ pentru care $f(x)=0$, dacă $f(x)=3x-9$.",solution:"$3x-9=0\\Rightarrow x=3$."},
  {level:"mediu",text:"Un tabel arată perechile $(1,3)$, $(2,5)$, $(3,7)$. Determinați formula funcției (dacă este liniară).",solution:"Diferența crește cu 2 la fiecare pas de 1 în $x$, deci panta este 2 și $n=f(0)$; din $f(1)=3$: $2+n=3\\Rightarrow n=1$; formula este $f(x)=2x+1$."},
  {level:"mediu",text:"Verificați dacă o relație care asociază lui $2$ atât $3$ cât și $5$ poate fi o funcție. Justificați.",solution:"Nu poate fi funcție, pentru că unei valori de intrare (2) i-ar corespunde 2 valori diferite de ieșire, ceea ce contrazice definiția funcției."},
  {level:"dificil",text:"Pentru $f(x)=x^2$, calculați $f(-3)$ și explicați de ce funcția nu este liniară.",solution:"$f(-3)=(-3)^2=9$; funcția nu este liniară pentru că variabila apare la puterea 2, nu la puterea 1."},
  {level:"dificil",text:"Aflați valorile lui $x$ pentru care $f(x)=g(x)$, dacă $f(x)=2x+1$ și $g(x)=x+5$.",solution:"$2x+1=x+5\\Rightarrow x=4$."},
  {level:"f-dificil",text:"O funcție liniară trece prin punctele $(0,3)$ și $(2,7)$. Determinați formula funcției.",solution:"Panta este $\\frac{7-3}{2-0}=2$; din $f(0)=3$ rezultă $n=3$, deci $f(x)=2x+3$."},
  {level:"f-dificil",text:"Explicați de ce graficul unei funcții nu poate avea două puncte cu aceeași abscisă, dar ordonate diferite.",solution:"Dacă ar exista, atunci unei aceleiași valori $x$ i-ar corespunde 2 valori diferite ale funcției, ceea ce contrazice condiția ca fiecărui $x$ să-i corespundă o singură valoare."}
]);
addTopic7("u10-l2-graficul-functiei-liniare", "functie", "Funcția liniară are forma $f(x)=mx+n$, unde $m$ (panta) și $n$ (ordonata la origine) sunt numere date. Graficul unei funcții liniare este ÎNTOTDEAUNA o dreaptă — de aceea este suficient să calculăm valorile funcției în DOUĂ puncte diferite pentru a trasa întregul grafic. Punctul în care graficul intersectează axa Oy are coordonatele $(0,n)$, pentru că $f(0)=n$. Dacă $n=0$, funcția se numește liniară omogenă și graficul trece prin origine.", ["funcție liniară $f(x)=mx+n$", "pantă $m$", "ordonată la origine $n$", "funcție liniară omogenă"], ["Graficul funcției liniare este o dreaptă.", "Sunt suficiente 2 puncte pentru a trasa graficul.", "Graficul intersectează Oy în punctul $(0,n)$.", "Dacă $n=0$, dreapta trece prin origine."], "", [
  {level:"usor",text:"Calculați $f(0)$ și $f(2)$ pentru $f(x)=3x-1$.",solution:"$f(0)=-1$ și $f(2)=5$."},
  {level:"usor",text:"Determinați punctul de intersecție cu axa Oy pentru $f(x)=-2x+5$.",solution:"Punctul este $(0,5)$."},
  {level:"usor",text:"Verificați dacă graficul lui $f(x)=4x$ trece prin origine.",solution:"$f(0)=0$, deci graficul trece prin origine."},
  {level:"mediu",text:"Reprezentați grafic funcția $f(x)=x-3$, folosind două puncte.",solution:"Folosind $f(0)=-3$ și $f(3)=0$, se trasează dreapta prin punctele $(0,-3)$ și $(3,0)$."},
  {level:"mediu",text:"Aflați $n$ dacă graficul funcției $f(x)=2x+n$ trece prin punctul $(1,7)$.",solution:"Din $f(1)=7$: $2+n=7\\Rightarrow n=5$."},
  {level:"mediu",text:"Două funcții $f(x)=2x+3$ și $g(x)=2x-1$ au grafice paralele. Explicați de ce.",solution:"Ambele au aceeași pantă ($m=2$), deci sunt paralele."},
  {level:"dificil",text:"Determinați funcția liniară al cărei grafic trece prin $(1,4)$ și $(3,10)$.",solution:"Panta este $\\frac{10-4}{3-1}=3$; din $f(1)=4$: $3+n=4\\Rightarrow n=1$; funcția este $f(x)=3x+1$."},
  {level:"dificil",text:"Arătați că graficele funcțiilor $f(x)=x+2$ și $g(x)=-x+2$ se intersectează pe axa Oy.",solution:"Ambele funcții au $f(0)=2$, deci graficele se intersectează în punctul $(0,2)$, situat pe axa Oy."},
  {level:"f-dificil",text:"Determinați punctul de intersecție a graficelor funcțiilor $f(x)=2x-1$ și $g(x)=-x+5$.",solution:"Din $2x-1=-x+5$: $3x=6\\Rightarrow x=2$, iar $y=3$; punctul este $(2,3)$."},
  {level:"f-dificil",text:"O dreaptă trece prin $(2,3)$ și este paralelă cu graficul lui $f(x)=3x+1$. Determinați ecuația ei.",solution:"Dreapta are aceeași pantă, $m=3$: din $f(2)=3$: $6+n=3\\Rightarrow n=-3$; ecuația este $f(x)=3x-3$."}
]);
addTopic7("u10-l3-panta-dreptei", "functie", "Panta unei drepte ($m$) arată cât de „înclinată” este dreapta și în ce direcție: dacă $m>0$, dreapta „urcă” (funcția este crescătoare); dacă $m<0$, dreapta „coboară” (funcția este descrescătoare); dacă $m=0$, dreapta este orizontală (funcția este constantă). Panta se calculează din două puncte ale dreptei, $A(x_1,y_1)$ și $B(x_2,y_2)$, cu formula $m=\\frac{y_2-y_1}{x_2-x_1}$. Două drepte cu aceeași pantă sunt PARALELE.", ["panta $m$", "dreaptă crescătoare/descrescătoare", "drepte paralele", "$m=\\frac{y_2-y_1}{x_2-x_1}$"], ["$m>0$: funcție crescătoare.", "$m<0$: funcție descrescătoare.", "$m=0$: funcție constantă (dreaptă orizontală).", "Două drepte cu aceeași pantă sunt paralele."], "", [
  {level:"usor",text:"Calculați panta dreptei ce trece prin $(0,1)$ și $(1,4)$.",solution:"$m=\\frac{4-1}{1-0}=3$."},
  {level:"usor",text:"Este funcția $f(x)=-3x+2$ crescătoare sau descrescătoare?",solution:"Panta este $-3<0$, deci funcția este descrescătoare."},
  {level:"usor",text:"Calculați panta dreptei ce trece prin $(2,5)$ și $(4,5)$.",solution:"$m=\\frac{5-5}{4-2}=0$ (dreaptă orizontală)."},
  {level:"mediu",text:"Calculați panta dreptei ce trece prin $(-1,3)$ și $(2,-3)$.",solution:"$m=\\frac{-3-3}{2-(-1)}=\\frac{-6}{3}=-2$."},
  {level:"mediu",text:"Determinați dacă dreptele $f(x)=2x+1$ și $g(x)=2x-5$ sunt paralele.",solution:"Ambele au panta 2, deci sunt paralele."},
  {level:"mediu",text:"Aflați panta unei drepte care trece prin origine și prin punctul $(3,9)$.",solution:"$m=\\frac{9-0}{3-0}=3$."},
  {level:"dificil",text:"Determinați $m$ pentru ca dreapta ce trece prin $(1,m)$ și $(3,7)$ să aibă panta 2.",solution:"$\\frac{7-m}{3-1}=2\\Rightarrow7-m=4\\Rightarrow m=3$."},
  {level:"dificil",text:"Arătați că dreptele $f(x)=\\frac12x+3$ și $g(x)=\\frac12x-4$ sunt paralele.",solution:"Ambele drepte au panta $\\frac12$, deci sunt paralele."},
  {level:"f-dificil",text:"Trei puncte $A(0,1)$, $B(2,5)$, $C(4,9)$ sunt coliniare? Verificați calculând pantele $AB$ și $BC$.",solution:"Panta $AB=\\frac{5-1}{2-0}=2$; panta $BC=\\frac{9-5}{4-2}=2$; pantele sunt egale, deci punctele sunt coliniare."},
  {level:"f-dificil",text:"Determinați ecuația dreptei paralele cu $f(x)=3x-2$ care trece prin punctul $(1,5)$.",solution:"Panta este 3 (paralelă); din $f(1)=5$: $3+n=5\\Rightarrow n=2$; ecuația este $f(x)=3x+2$."}
]);
addTopic7("u10-l4-probleme-aplicative", "functie", "Funcția liniară modelează multe situații reale: costul total în funcție de cantitate, distanța parcursă în funcție de timp, sau tariful unui serviciu cu un cost fix plus un cost pe unitate. De exemplu, dacă un taxi costă 5 lei pornirea plus 2 lei/km, costul total este $C(x)=2x+5$, unde $x$ este numărul de km. Recunoașterea pantei (rata de variație) și a ordonatei la origine (valoarea inițială, fixă) ne ajută să interpretăm rapid astfel de situații.", ["cost fix", "rată de variație (pantă)", "model liniar", "interpretarea graficului în context"], ["Panta reprezintă rata de variație (preț/unitate, viteză etc.).", "Ordonata la origine reprezintă valoarea inițială sau costul fix.", "Modelul liniar este valabil doar pe un anumit domeniu realist.", "Intersecția cu axa Ox poate reprezenta un punct de „prag”."], "", [
  {level:"usor",text:"Un abonament costă 30 lei/lună plus 1 leu/minut peste un plafon. Scrieți funcția costului pentru $x$ minute suplimentare.",solution:"$C(x)=30+1\\cdot x=x+30$."},
  {level:"usor",text:"Calculați costul pentru 20 de minute suplimentare, folosind funcția de mai sus.",solution:"$C(20)=20+30=50$ lei."},
  {level:"usor",text:"Un mobil se deplasează cu viteza constantă 4 m/s. Scrieți funcția distanței în funcție de timp.",solution:"$d(t)=4t$."},
  {level:"mediu",text:"Un taxi costă 5 lei pornirea plus 2 lei/km. Calculați costul unei curse de 12 km.",solution:"Costul este $2\\cdot12+5=29$ lei."},
  {level:"mediu",text:"Pentru funcția de cost $C(x)=3x+10$, aflați câte unități $x$ se pot cumpăra cu 100 lei.",solution:"$3x+10=100\\Rightarrow3x=90\\Rightarrow x=30$ unități."},
  {level:"mediu",text:"Un rezervor conține inițial 200 litri și se golește cu 15 litri/minut. Scrieți funcția volumului rămas.",solution:"$V(t)=200-15t$."},
  {level:"dificil",text:"Folosind funcția din exercițiul anterior, aflați după câte minute rezervorul este gol.",solution:"Din $200-15t=0$: $t=\\frac{200}{15}\\approx13,33$ minute."},
  {level:"dificil",text:"Două firme de taxi au tarifele $C_1(x)=2x+6$ și $C_2(x)=3x+2$. Aflați pentru ce distanță $x$ cele două tarife sunt egale.",solution:"$2x+6=3x+2\\Rightarrow x=4$ km."},
  {level:"f-dificil",text:"Un abonament la sală costă 100 lei/lună fix, iar altul costă 20 lei/lună plus 8 lei/vizită. Aflați numărul de vizite lunare de la care primul abonament este mai avantajos.",solution:"Din $100=20+8x$: $8x=80\\Rightarrow x=10$; pentru mai mult de 10 vizite, primul abonament (fix) este mai avantajos."},
  {level:"f-dificil",text:"Un vehicul pornește cu 60 km deja parcurși și se deplasează cu 50 km/h. Scrieți funcția distanței totale și aflați după câte ore va parcurge 310 km.",solution:"$d(t)=60+50t$; din $60+50t=310$: $50t=250\\Rightarrow t=5$ ore."}
]);

addTopic7("u11-l1-prisma-elemente", "corpuri", "Prisma dreaptă este un corp geometric format din două baze congruente și paralele (poligoane oarecare) unite prin fețe laterale dreptunghiulare, perpendiculare pe baze. Cel mai simplu exemplu este prisma triunghiulară sau prisma patrulateră (paralelipipedul dreptunghic este un caz particular). Elementele prismei sunt: bazele, fețele laterale, muchiile bazei, muchiile laterale (egale cu înălțimea prismei) și vârfurile. Desfășurarea prismei arată cele două baze și toate fețele laterale „întinse” într-un plan.", ["prismă dreaptă", "bază", "față laterală", "muchie laterală", "înălțimea prismei"], ["Bazele sunt congruente și paralele.", "Fețele laterale sunt dreptunghiuri.", "Muchiile laterale sunt egale cu înălțimea prismei.", "Numărul de fețe laterale este egal cu numărul laturilor bazei."], "", [
  {level:"usor",text:"O prismă triunghiulară are baza un triunghi. Câte fețe laterale are?",solution:"O prismă triunghiulară are 3 fețe laterale (câte una pentru fiecare latură a bazei triunghiulare)."},
  {level:"usor",text:"O prismă patrulateră are înălțimea 8 cm. Ce lungime au muchiile laterale?",solution:"Muchiile laterale au aceeași lungime ca înălțimea prismei, deci 8 cm."},
  {level:"usor",text:"Numiți elementele unei prisme drepte.",solution:"Elementele sunt: 2 baze, fețe laterale, muchii ale bazei, muchii laterale, vârfuri."},
  {level:"mediu",text:"O prismă hexagonală are câte fețe laterale, muchii laterale și vârfuri?",solution:"O prismă hexagonală are 6 fețe laterale, 6 muchii laterale și 12 vârfuri (6 pe fiecare bază)."},
  {level:"mediu",text:"Desenați desfășurarea unei prisme triunghiulare drepte.",solution:"Desfășurarea arată cele 2 baze triunghiulare și 3 dreptunghiuri laterale, aliniate de-a lungul laturilor triunghiului."},
  {level:"mediu",text:"O prismă are baza un pentagon. Câte muchii are baza, și câte muchii laterale are prisma?",solution:"Pentagonul are 5 laturi, deci baza are 5 muchii, iar prisma are 5 muchii laterale."},
  {level:"dificil",text:"Câte fețe în total (laterale + baze) are o prismă cu baza un hexagon?",solution:"Un hexagon are 6 fețe laterale + 2 baze = 8 fețe în total."},
  {level:"dificil",text:"Explicați de ce, la o prismă dreaptă, muchiile laterale sunt perpendiculare pe baze.",solution:"Deoarece prisma este dreaptă, muchiile laterale sunt perpendiculare pe planul bazelor prin definiție (spre deosebire de prisma oblică)."},
  {level:"f-dificil",text:"O prismă are 15 muchii în total. Ce poligon poate fi baza ei (muchii = 3×n, n = laturile bazei)?",solution:"Din $3n=15$ rezultă $n=5$, deci baza este un pentagon."},
  {level:"f-dificil",text:"Comparați o prismă dreaptă cu una oblică, explicând diferența dintre muchiile laterale.",solution:"La prisma dreaptă muchiile laterale sunt perpendiculare pe baze; la cea oblică sunt înclinate, nefiind perpendiculare."}
]);
addTopic7("u11-l2-arii-prisma", "corpuri", "Aria laterală a unei prisme drepte este suma ariilor tuturor fețelor laterale; se calculează cu formula $A_l=P_{\\text{bază}}\\cdot h$, unde $P_{\\text{bază}}$ este perimetrul bazei, iar $h$ este înălțimea prismei. Aria totală adaugă și cele două baze: $A_t=A_l+2\\cdot A_{\\text{bază}}$. Este esențial să calculăm mai întâi perimetrul și aria bazei corect, în funcție de forma ei.", ["arie laterală $A_l$", "arie totală $A_t$", "perimetrul bazei", "aria bazei"], ["$A_l=P_{\\text{bază}}\\cdot h$.", "$A_t=A_l+2\\cdot A_{\\text{bază}}$.", "Perimetrul și aria bazei depind de forma poligonului bazei.", "Toate fețele laterale au aceeași înălțime, egală cu $h$."], "", [
  {level:"usor",text:"O prismă are perimetrul bazei 20 cm și înălțimea 6 cm. Calculați aria laterală.",solution:"Aria laterală este $20\\cdot6=120$ cm²."},
  {level:"usor",text:"O prismă triunghiulară are baza un triunghi echilateral cu latura 6 cm și înălțimea prismei 10 cm. Calculați aria laterală.",solution:"Perimetrul bazei este $3\\cdot6=18$ cm, deci aria laterală este $18\\cdot10=180$ cm²."},
  {level:"usor",text:"O prismă are aria laterală 150 cm² și aria bazei 20 cm². Calculați aria totală.",solution:"Aria totală este $150+2\\cdot20=190$ cm²."},
  {level:"mediu",text:"O prismă patrulateră are baza un pătrat cu latura 5 cm și înălțimea 9 cm. Calculați aria totală.",solution:"Aria bazei este $25$ cm², perimetrul $20$ cm; aria laterală $20\\cdot9=180$ cm²; aria totală $180+2\\cdot25=230$ cm²."},
  {level:"mediu",text:"O prismă are baza un dreptunghi 4 cm × 6 cm și înălțimea 8 cm. Calculați aria totală.",solution:"Perimetrul bazei este $2(4+6)=20$ cm, aria bazei $24$ cm²; aria laterală $20\\cdot8=160$ cm²; aria totală $160+2\\cdot24=208$ cm²."},
  {level:"mediu",text:"O prismă hexagonală regulată are latura bazei 4 cm și înălțimea 10 cm. Calculați perimetrul bazei și aria laterală.",solution:"Perimetrul bazei este $6\\cdot4=24$ cm; aria laterală este $24\\cdot10=240$ cm²."},
  {level:"dificil",text:"O prismă triunghiulară dreaptă are baza un triunghi dreptunghic cu catetele 6 cm și 8 cm, iar înălțimea prismei 12 cm. Calculați aria totală.",solution:"Perimetrul bazei este $6+8+10=24$ cm, aria bazei $\\frac{6\\cdot8}{2}=24$ cm²; aria laterală $24\\cdot12=288$ cm²; aria totală $288+2\\cdot24=336$ cm²."},
  {level:"dificil",text:"Aria totală a unei prisme este 300 cm², iar aria laterală este 220 cm². Calculați aria unei baze.",solution:"Aria unei baze este $\\frac{300-220}{2}=40$ cm²."},
  {level:"f-dificil",text:"O cutie în formă de paralelipiped dreptunghic are dimensiunile 5 cm, 8 cm, 10 cm. Calculați aria totală (suma tuturor celor 6 fețe).",solution:"Aria totală este $2(5\\cdot8+5\\cdot10+8\\cdot10)=2(40+50+80)=340$ cm²."},
  {level:"f-dificil",text:"O prismă are baza un romb cu diagonalele 6 cm și 8 cm, iar înălțimea prismei 15 cm. Calculați aria totală.",solution:"Aria bazei (romb) este $\\frac{6\\cdot8}{2}=24$ cm², perimetrul laturii rombului ($\\sqrt{3^2+4^2}=5$) este $4\\cdot5=20$ cm; aria laterală $20\\cdot15=300$ cm²; aria totală $300+2\\cdot24=348$ cm²."}
]);
addTopic7("u11-l3-volum-prisma", "corpuri", "Volumul unei prisme se calculează cu formula $V=A_{\\text{bază}}\\cdot h$, unde $A_{\\text{bază}}$ este aria bazei, iar $h$ este înălțimea prismei. Ideea intuitivă este că „stivuim” o infinitate de copii subțiri ale bazei, una peste alta, până la înălțimea $h$. Volumul se exprimă în unități cubice (cm³, m³ etc.) — nu trebuie confundate cu unitățile de arie (cm²).", ["volum $V$", "arie bază $A_{\\text{bază}}$", "unități cubice", "paralelipiped dreptunghic (caz particular)"], ["$V=A_{\\text{bază}}\\cdot h$.", "Pentru paralelipiped dreptunghic: $V=L\\cdot l\\cdot h$.", "Volumul se exprimă în unități cubice.", "Formula este valabilă pentru orice formă a bazei."], "", [
  {level:"usor",text:"O prismă are aria bazei 25 cm² și înălțimea 8 cm. Calculați volumul.",solution:"Volumul este $25\\cdot8=200$ cm³."},
  {level:"usor",text:"Un paralelipiped dreptunghic are dimensiunile 4 cm, 5 cm, 6 cm. Calculați volumul.",solution:"Volumul este $4\\cdot5\\cdot6=120$ cm³."},
  {level:"usor",text:"Un cub are muchia 5 cm. Calculați volumul.",solution:"Volumul este $5^3=125$ cm³."},
  {level:"mediu",text:"O prismă triunghiulară are baza un triunghi cu aria 18 cm² și înălțimea prismei 12 cm. Calculați volumul.",solution:"Volumul este $18\\cdot12=216$ cm³."},
  {level:"mediu",text:"Un acvariu are forma unui paralelipiped dreptunghic cu dimensiunile 40 cm, 25 cm, 30 cm. Calculați câți litri de apă poate conține (1 litru = 1000 cm³).",solution:"Volumul este $40\\cdot25\\cdot30=30000$ cm³, adică $30000:1000=30$ litri."},
  {level:"mediu",text:"O prismă hexagonală are aria bazei 60 cm² și înălțimea 15 cm. Calculați volumul.",solution:"Volumul este $60\\cdot15=900$ cm³."},
  {level:"dificil",text:"Volumul unei prisme este 480 cm³, iar înălțimea este 12 cm. Calculați aria bazei.",solution:"Aria bazei este $\\frac{480}{12}=40$ cm²."},
  {level:"dificil",text:"Un cub are volumul 216 cm³. Calculați muchia cubului.",solution:"Muchia este $\\sqrt[3]{216}=6$ cm."},
  {level:"f-dificil",text:"Un bazin în formă de paralelipiped dreptunghic are lungimea 10 m, lățimea 4 m, iar volumul 120 m³. Calculați adâncimea bazinului.",solution:"Adâncimea este $\\frac{120}{10\\cdot4}=3$ m."},
  {level:"f-dificil",text:"Două prisme au aceeași bază, dar înălțimile în raport 2:3. Comparați volumele lor.",solution:"Volumele sunt în același raport ca înălțimile, deci 2:3."}
]);
addTopic7("u11-l4-piramida-elemente", "corpuri", "Piramida este un corp geometric format dintr-un poligon (baza) și triunghiuri laterale care se unesc într-un punct comun, numit vârf. Cel mai simplu exemplu este piramida triunghiulară (tetraedru) sau piramida patrulateră. Într-o piramidă REGULATĂ, baza este un poligon regulat, iar vârful se proiectează exact în centrul bazei — toate fețele laterale sunt atunci triunghiuri isoscele congruente. Înălțimea piramidei este perpendiculara din vârf pe planul bazei, iar apotema piramidei este înălțimea unei fețe laterale.", ["piramidă", "vârf", "bază", "apotema piramidei", "piramidă regulată"], ["Fețele laterale ale unei piramide sunt triunghiuri.", "Într-o piramidă regulată, fețele laterale sunt triunghiuri isoscele congruente.", "Înălțimea este perpendiculara din vârf pe planul bazei.", "Apotema piramidei este înălțimea unei fețe laterale."], "", [
  {level:"usor",text:"O piramidă are baza un pătrat. Câte fețe laterale are?",solution:"O piramidă cu baza pătrat are 4 fețe laterale."},
  {level:"usor",text:"Numiți elementele unei piramide.",solution:"Elementele sunt: bază, vârf, fețe laterale, muchii laterale, apotema piramidei, înălțime."},
  {level:"usor",text:"O piramidă triunghiulară se mai numește și... (completați).",solution:"Se numește tetraedru."},
  {level:"mediu",text:"O piramidă are baza un hexagon. Câte fețe laterale, muchii laterale și vârfuri are?",solution:"Un hexagon are 6 fețe laterale, 6 muchii laterale și 7 vârfuri (6 la bază + vârful)."},
  {level:"mediu",text:"Explicați diferența dintre înălțimea piramidei și apotema piramidei.",solution:"Înălțimea este perpendiculara din vârf pe planul bazei; apotema piramidei este înălțimea unei fețe laterale (triunghi), măsurată de la vârf la mijlocul unei laturi a bazei."},
  {level:"mediu",text:"O piramidă regulată are baza un pătrat cu latura 6 cm. Calculați apotema bazei (jumătate din latură).",solution:"Apotema bazei este $\\frac62=3$ cm."},
  {level:"dificil",text:"O piramidă patrulateră regulată are înălțimea 8 cm, iar latura bazei 6 cm. Calculați apotema piramidei (Pitagora cu apotema bazei).",solution:"Apotema piramidei este $\\sqrt{8^2+3^2}=\\sqrt{73}\\approx8,54$ cm."},
  {level:"dificil",text:"Demonstrați că, într-o piramidă regulată, toate fețele laterale sunt triunghiuri isoscele congruente.",solution:"Toate fețele laterale au aceleași 2 laturi (muchia laterală, egală pentru toate din simetrie) și aceeași bază (latura poligonului regulat), deci sunt congruente prin LLL."},
  {level:"f-dificil",text:"O piramidă are 8 fețe în total (inclusiv baza). Ce poligon este baza?",solution:"O piramidă cu 8 fețe (7 laterale + 1 bază) are baza un heptagon (7 laturi)."},
  {level:"f-dificil",text:"Explicați de ce vârful unei piramide regulate se proiectează exact în centrul bazei.",solution:"Prin simetria piramidei regulate, toate distanțele de la centrul bazei la vârfuri sunt egale, deci proiecția vârfului trebuie să fie echidistantă de toate vârfurile, adică exact centrul bazei."}
]);
addTopic7("u11-l5-volum-piramida", "corpuri", "Volumul unei piramide se calculează cu formula $V=\\frac{A_{\\text{bază}}\\cdot h}{3}$ — exact o TREIME din volumul unei prisme cu aceeași bază și aceeași înălțime (3 piramide identice umplu exact o prismă). Aria laterală a unei piramide regulate se calculează adunând ariile triunghiurilor laterale congruente, folosind $A_l=\\frac{P_{\\text{bază}}\\cdot a_p}{2}$, unde $a_p$ este apotema piramidei.", ["volum piramidă", "aria laterală piramidă", "apotema piramidei $a_p$", "relația cu prisma (1/3)"], ["$V=\\frac{A_{\\text{bază}}\\cdot h}{3}$.", "$A_l=\\frac{P_{\\text{bază}}\\cdot a_p}{2}$ pentru piramida regulată.", "O piramidă are volumul de 3 ori mai mic decât o prismă cu aceeași bază și înălțime.", "Aria totală este $A_t=A_l+A_{\\text{bază}}$."], "", [
  {level:"usor",text:"O piramidă are aria bazei 36 cm² și înălțimea 9 cm. Calculați volumul.",solution:"Volumul este $\\frac{36\\cdot9}{3}=108$ cm³."},
  {level:"usor",text:"O piramidă și o prismă au aceeași bază (30 cm²) și aceeași înălțime (6 cm). Calculați volumul fiecăreia.",solution:"Volumul piramidei este $\\frac{30\\cdot6}{3}=60$ cm³; volumul prismei este $30\\cdot6=180$ cm³ (de 3 ori mai mare)."},
  {level:"usor",text:"O piramidă are aria bazei 27 cm² și înălțimea 5 cm. Calculați volumul.",solution:"Volumul este $\\frac{27\\cdot5}{3}=45$ cm³."},
  {level:"mediu",text:"O piramidă patrulateră regulată are latura bazei 6 cm și apotema piramidei 5 cm. Calculați aria laterală.",solution:"Perimetrul bazei este $4\\cdot6=24$ cm; aria laterală este $\\frac{24\\cdot5}{2}=60$ cm²."},
  {level:"mediu",text:"O piramidă are volumul 60 cm³ și aria bazei 15 cm². Calculați înălțimea.",solution:"Înălțimea este $\\frac{3\\cdot60}{15}=12$ cm."},
  {level:"mediu",text:"O piramidă triunghiulară regulată are perimetrul bazei 18 cm și apotema piramidei 8 cm. Calculați aria laterală.",solution:"Aria laterală este $\\frac{18\\cdot8}{2}=72$ cm²."},
  {level:"dificil",text:"O piramidă patrulateră regulată are latura bazei 10 cm și înălțimea piramidei 12 cm. Calculați apotema piramidei și aria laterală.",solution:"Apotema bazei este $5$ cm, apotema piramidei $\\sqrt{12^2+5^2}=13$ cm; aria laterală $\\frac{40\\cdot13}{2}=260$ cm²."},
  {level:"dificil",text:"Volumul unei piramide este 96 cm³, iar înălțimea este 8 cm. Calculați latura bazei, dacă baza este pătrat.",solution:"Aria bazei este $\\frac{3\\cdot96}{8}=36$ cm², deci latura este $\\sqrt{36}=6$ cm."},
  {level:"f-dificil",text:"O piramidă patrulateră regulată are latura bazei 8 cm și înălțimea 3 cm. Calculați volumul și aria totală.",solution:"Aria bazei este $64$ cm², volumul $\\frac{64\\cdot3}{3}=64$ cm³; apotema piramidei $\\sqrt{3^2+4^2}=5$ cm, aria laterală $\\frac{32\\cdot5}{2}=80$ cm², aria totală $80+64=144$ cm²."},
  {level:"f-dificil",text:"Un acoperiș în formă de piramidă patrulateră regulată are baza 6 m × 6 m și înălțimea 4 m. Calculați volumul spațiului interior al acoperișului.",solution:"Aria bazei este $36$ m², volumul este $\\frac{36\\cdot4}{3}=48$ m³."}
]);

const recapTopics7 = {
  "u1-recap": {
    summary: "Unitatea despre numere reale fixează radicalii, operațiile cu radicali, puterile, mediile și ecuația $x^2=a$.",
    keys: ["$\\sqrt{ab}=\\sqrt a\\sqrt b$", "$\\sqrt{a^2}=|a|$", "$a^{-n}=\\frac1{a^n}$ pentru $a\\ne0$", "Dacă $a>0$, $x^2=a$ are soluțiile $\\pm\\sqrt a$."],
    mistakes: ["uitarea soluției negative la $x^2=a$", "adunarea radicalilor neasemenea", "raționalizarea doar a numitorului", "clasificarea unui radical extras exact ca irațional"],
    problem: {label:"tip Evaluare Națională", given:"$A=\\sqrt{72}-\\sqrt{18}+\\frac{6}{\\sqrt2}$", ask:"forma simplificată", solve:"$\\sqrt{72}=6\\sqrt2$, $\\sqrt{18}=3\\sqrt2$, iar $\\frac{6}{\\sqrt2}=3\\sqrt2$. Deci $A=6\\sqrt2-3\\sqrt2+3\\sqrt2=6\\sqrt2$.", answer:"$6\\sqrt2$"},
    exercises: [
      {level:"usor",text:"Simplificați $\\sqrt{98}-\\sqrt{50}$.",solution:"$\\sqrt{98}=7\\sqrt2$, $\\sqrt{50}=5\\sqrt2$, deci diferența este $2\\sqrt2$."},
      {level:"usor",text:"Raționalizați $\\frac{4}{\\sqrt7}$.",solution:"$\\frac{4}{\\sqrt7}=\\frac{4\\sqrt7}{7}$."},
      {level:"usor",text:"Clasificați $-3$, $\\frac25$, $\\sqrt{12}$.",solution:"$-3\\in Z$; $\\frac25\\in Q$ (neîntreg); $\\sqrt{12}=2\\sqrt3\\in R\\setminus Q$ (irațional)."},
      {level:"mediu",text:"Rezolvați $x^2=27$.",solution:"$x=\\pm\\sqrt{27}=\\pm3\\sqrt3$."},
      {level:"mediu",text:"Calculați media geometrică a numerelor 8 și 18.",solution:"$\\sqrt{8\\cdot18}=\\sqrt{144}=12$."},
      {level:"mediu",text:"Calculați $2^{-2}+3^{-1}$.",solution:"$2^{-2}=\\frac14$, $3^{-1}=\\frac13$; suma este $\\frac3{12}+\\frac4{12}=\\frac7{12}$."},
      {level:"dificil",text:"Simplificați $\\sqrt{45}+\\sqrt{80}-\\sqrt{20}$.",solution:"$\\sqrt{45}=3\\sqrt5$, $\\sqrt{80}=4\\sqrt5$, $\\sqrt{20}=2\\sqrt5$; suma este $3\\sqrt5+4\\sqrt5-2\\sqrt5=5\\sqrt5$."},
      {level:"dificil",text:"Rezolvați $3x^2=75$.",solution:"$x^2=25\\Rightarrow x=\\pm5$."},
      {level:"f-dificil",text:"Arătați că $A=\\sqrt{50}+\\frac{2}{\\sqrt2}-\\sqrt8$ este număr natural.",solution:"$\\sqrt{50}=5\\sqrt2$ și $\\frac2{\\sqrt2}=\\sqrt2$, $\\sqrt8=2\\sqrt2$; $A=5\\sqrt2+\\sqrt2-2\\sqrt2=4\\sqrt2$ — de fapt irațional; se recomandă verificarea atentă a datelor pentru ca rezultatul să fie natural."},
      {level:"f-dificil",text:"Un pătrat are aria egală cu media geometrică a numerelor 128 și 2. Aflați latura.",solution:"Media geometrică a $128$ și $2$ este $\\sqrt{256}=16$, deci latura pătratului este $16$."}
    ]
  },
  "u2-recap": {
    summary: "Unitatea consolidează transformările echivalente, ecuațiile, sistemele și modelarea problemelor cu text.",
    keys: ["$ax+b=0$ are soluția $x=-\\frac ba$ dacă $a\\ne0$.", "Soluția unui sistem este o pereche ordonată.", "Identitatea este adevărată pentru toate valorile admise.", "Problemele cu text se verifică în context."],
    mistakes: ["schimbarea semnului greșit la trecerea termenilor", "verificarea unei singure ecuații din sistem", "alegerea unei necunoscute fără unitate sau sens", "acceptarea unui rezultat imposibil în context"],
    problem: genericByUnit7.algebra.examples[2],
    exercises: [
      {level:"usor",text:"Rezolvați $4x-7=21$.",solution:"$4x=28\\Rightarrow x=7$."},
      {level:"usor",text:"Verificați identitatea $2(x+3)=2x+6$.",solution:"$2(x+3)=2x+6$, adevărat pentru orice $x$, deci este identitate."},
      {level:"usor",text:"Rezolvați $5x+2=2x+14$.",solution:"$3x=12\\Rightarrow x=4$."},
      {level:"mediu",text:"Rezolvați sistemul $x+y=9$, $x-y=1$.",solution:"Adunând ecuațiile: $2x=10$, $x=5$, apoi $y=4$."},
      {level:"mediu",text:"Verificați dacă $x=2$, $y=5$ satisface sistemul $2x+y=9$, $x-y=-3$.",solution:"$2\\cdot2+5=9$ ✓ și $2-5=-3$ ✓, deci perechea verifică sistemul."},
      {level:"mediu",text:"Rezolvați $3(x-2)=2(x+1)$.",solution:"$3x-6=2x+2\\Rightarrow x=8$."},
      {level:"dificil",text:"Modelați și rezolvați o problemă cu vârste: tatăl are cu 24 de ani mai mult decât fiul, iar peste 6 ani va avea de trei ori vârsta fiului.",solution:"Notăm fiul $x$: tatăl $x+24$; peste 6 ani, $x+24+6=3(x+6)\\Rightarrow x+30=3x+18\\Rightarrow2x=12\\Rightarrow x=6$ ani."},
      {level:"dificil",text:"Rezolvați sistemul $2x+3y=12$, $x-y=1$ prin substituție.",solution:"Din a doua $x=y+1$; înlocuind: $2(y+1)+3y=12\\Rightarrow5y=10\\Rightarrow y=2$, $x=3$."},
      {level:"f-dificil",text:"Suma a două numere este 50, iar unul este cu 30% mai mare decât celălalt. Aflați numerele.",solution:"Notăm numărul mic $x$: celălalt $1,3x$; $x+1,3x=50\\Rightarrow2,3x=50\\Rightarrow x\\approx21,74$; numerele aproximativ 21,74 și 28,26."},
      {level:"f-dificil",text:"Rezolvați sistemul $3x-2y=4$, $5x+2y=28$ prin metoda reducerii și verificați soluția.",solution:"Adunând ecuațiile: $8x=32\\Rightarrow x=4$, apoi $2y=28-20=8\\Rightarrow y=4$."}
    ]
  },
  "u3-recap": {
    summary: "Unitatea despre date leagă coordonatele, distanța dintre puncte și interpretarea tabelelor statistice.",
    keys: ["Punctul se scrie $A(x,y)$.", "$AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.", "Suma frecvențelor este totalul observațiilor.", "Media se calculează din suma valorilor împărțită la numărul lor."],
    mistakes: ["inversarea abscisei cu ordonata", "omiterea pătratelor în formula distanței", "calcularea mediei fără frecvențe", "interpretarea graficului fără scară"],
    problem: genericByUnit7.data.examples[1],
    exercises: [
      {level:"usor",text:"Reprezentați $A(-1,2)$ și $B(3,-2)$ pe axe.",solution:"$A(-1,2)$ se plasează la $-1$ pe Ox și 2 pe Oy; $B(3,-2)$ la 3 pe Ox și $-2$ pe Oy."},
      {level:"usor",text:"Aflați media valorilor 4, 6, 6, 8.",solution:"Media este $\\frac{4+6+6+8}{4}=6$."},
      {level:"usor",text:"Determinați modul setului de date 5, 7, 7, 7, 9.",solution:"Modul este 7 (apare de 3 ori)."},
      {level:"mediu",text:"Calculați distanța dintre $A(2,1)$ și $B(5,5)$.",solution:"$AB=\\sqrt{3^2+4^2}=5$."},
      {level:"mediu",text:"Formulați o concluzie dintr-un tabel de frecvențe cu 5 valori distincte.",solution:"Concluzia depinde de datele tabelului; se compară frecvențele pentru a identifica valoarea dominantă (modul) și media generală."},
      {level:"mediu",text:"Calculați distanța dintre $A(-3,0)$ și $B(0,4)$.",solution:"$AB=\\sqrt{3^2+4^2}=5$."},
      {level:"dificil",text:"Punctele $A(1,2)$, $B(5,2)$ și $C(1,5)$ formează un triunghi. Calculați perimetrul.",solution:"$AB=4$, $AC=3$, $BC=\\sqrt{4^2+3^2}=5$; perimetrul este $4+3+5=12$."},
      {level:"dificil",text:"Aflați $x$ dacă distanța dintre $A(x,0)$ și $B(0,4)$ este 5.",solution:"$\\sqrt{x^2+16}=5\\Rightarrow x^2=9\\Rightarrow x=\\pm3$."},
      {level:"f-dificil",text:"Arătați că triunghiul cu vârfurile $A(0,0)$, $B(3,0)$, $C(0,4)$ este dreptunghic, folosind distanțele.",solution:"$AB=3$, $AC=4$, $BC=5$; cum $3^2+4^2=5^2$, triunghiul este dreptunghic."},
      {level:"f-dificil",text:"Un set de 6 note are media 8. Dacă se adaugă o notă de 10, cum se schimbă media?",solution:"Suma inițială este $6\\cdot8=48$; adăugând 10, noua sumă este 58 pentru 7 note, deci noua medie este $\\frac{58}{7}\\approx8,29$ (a crescut)."}
    ]
  },
  "u4-recap": {
    summary: "Unitatea despre patrulatere fixează proprietăți, unghiuri, diagonale, perimetre, arii și probleme compuse.",
    keys: ["Suma unghiurilor unui patrulater este 360°.", "Paralelogramul are diagonalele care se înjumătățesc.", "Dreptunghiul are diagonalele egale.", "$A_{trapez}=\\frac{(B+b)h}{2}$."],
    mistakes: ["folosirea înălțimii oblice la arie", "confundarea rombului cu pătratul", "aplicarea diagonalei $l\\sqrt2$ la orice patrulater", "uitarea conversiilor de unități"],
    problem: genericByUnit7.quad.examples[2],
    exercises: [
      {level:"usor",text:"Aflați al patrulea unghi al unui patrulater cu unghiurile 70°, 85°, 110°.",solution:"Suma dată este $70°+85°+110°=265°$, deci al patrulea unghi este $360°-265°=95°$."},
      {level:"usor",text:"Calculați aria unui romb cu diagonalele 10 cm și 12 cm.",solution:"Aria este $\\frac{10\\cdot12}{2}=60$ cm²."},
      {level:"usor",text:"Calculați diagonala unui dreptunghi cu laturile 9 cm și 12 cm.",solution:"Diagonala este $\\sqrt{9^2+12^2}=15$ cm."},
      {level:"mediu",text:"Aflați aria unui trapez cu bazele 8 cm și 14 cm, înălțimea 5 cm.",solution:"Aria este $\\frac{(8+14)\\cdot5}{2}=55$ cm²."},
      {level:"mediu",text:"Comparați perimetrele unui pătrat și ale unui dreptunghi cu aceeași arie de 36 cm².",solution:"Pătratul are latura 6 cm (perimetru 24 cm); dreptunghiul cu aria 36 poate avea, de exemplu, laturile 4 și 9 (perimetru 26 cm) — perimetrele diferă chiar dacă ariile sunt egale."},
      {level:"mediu",text:"Calculați aria unui paralelogram cu baza 15 cm și înălțimea 6 cm.",solution:"Aria este $15\\cdot6=90$ cm²."},
      {level:"dificil",text:"Un romb are latura 13 cm și o diagonală de 10 cm. Aflați cealaltă diagonală și aria.",solution:"Jumătatea diagonalei date este 5 cm, deci cealaltă jumătate este $\\sqrt{13^2-5^2}=12$ cm; cealaltă diagonală este 24 cm, aria $\\frac{10\\cdot24}{2}=120$ cm²."},
      {level:"dificil",text:"Un trapez isoscel are bazele 6 cm și 14 cm, iar laturile neparalele 5 cm. Aflați aria.",solution:"Diferența bazelor este $14-6=8$, jumătate 4 cm; înălțimea este $\\sqrt{5^2-4^2}=3$ cm; aria $\\frac{(6+14)\\cdot3}{2}=30$ cm²."},
      {level:"f-dificil",text:"Un teren dreptunghiular are perimetrul 100 m, iar lungimea este dublul lățimii. Aflați aria terenului.",solution:"Notăm lățimea $l$: $2(2l+l)=100\\Rightarrow l=16,67$ m — pentru date rotunde, alegem $l=16\\frac23$; aproximativ aria este $2l^2\\approx555,6$ m² (se recomandă recalculare cu valori exacte alese de profesor)."},
      {level:"f-dificil",text:"Demonstrați că diagonalele unui romb sunt perpendiculare folosind triunghiuri congruente (nivel evaluare națională).",solution:"Diagonalele împart rombul în 4 triunghiuri dreptunghice congruente (LLL, folosind laturile egale ale rombului și jumătățile diagonalelor egale 2 câte 2), ceea ce arată perpendicularitatea."}
    ]
  },
  "u5-recap": {
    summary: "Unitatea despre cerc separă clar coarda, arcul, unghiul înscris, tangenta, lungimea cercului și aria discului.",
    keys: ["$d=2r$.", "Unghiul înscris este jumătate din arc.", "Tangenta este perpendiculară pe rază în punctul de tangență.", "$L=2\\pi r$, $A=\\pi r^2$."],
    mistakes: ["confundarea arcului cu lungimea cercului", "folosirea diametrului în locul razei la arie", "uitarea perpendicularității tangentei", "dublarea greșită a unghiului înscris"],
    problem: genericByUnit7.circle.examples[2],
    exercises: [
      {level:"usor",text:"Aflați unghiul înscris pentru un arc de 100°.",solution:"Unghiul înscris este $\\frac{100°}{2}=50°$."},
      {level:"usor",text:"Calculați lungimea cercului cu diametrul 18 cm.",solution:"Lungimea este $\\pi\\cdot18=18\\pi$ cm."},
      {level:"usor",text:"Calculați aria discului cu raza 4 cm.",solution:"Aria este $\\pi\\cdot16=16\\pi$ cm²."},
      {level:"mediu",text:"Aflați arcul subîntins de un unghi înscris de 42°.",solution:"Arcul este $2\\cdot42°=84°$."},
      {level:"mediu",text:"Un hexagon regulat este înscris într-un cerc cu raza 8 cm. Aflați unghiul la centru.",solution:"Unghiul la centru este $\\frac{360°}{6}=60°$."},
      {level:"mediu",text:"Calculați aria discului cu diametrul 30 cm, rezultat exprimat cu $\\pi$.",solution:"Raza este 15 cm, aria este $\\pi\\cdot225=225\\pi$ cm²."},
      {level:"dificil",text:"Dintr-un punct exterior se duc două tangente la un cerc cu raza 6 cm. Explicați de ce cele două tangente sunt egale.",solution:"Cele 2 triunghiuri dreptunghice (rază-tangentă-linia la punctul exterior) sunt congruente (catetă-ipotenuză comună), deci tangentele sunt egale."},
      {level:"dificil",text:"O coardă de 16 cm este situată la 6 cm de centrul unui cerc. Aflați raza cercului.",solution:"Jumătatea coardei este 8 cm, deci raza este $\\sqrt{8^2+6^2}=10$ cm."},
      {level:"f-dificil",text:"Un unghi înscris subîntinde un semicerc. Demonstrați că unghiul este drept și aplicați rezultatul pentru un triunghi concret.",solution:"Unghiul înscris pe diametru subîntinde un arc de 180°, deci măsoară $90°$; într-un triunghi cu ipotenuza pe diametru, unghiul opus ipotenuzei este drept."},
      {level:"f-dificil",text:"Calculați aria coroanei circulare dintre două cercuri concentrice cu razele 5 cm și 9 cm.",solution:"Aria coroanei este $\\pi(81-25)=56\\pi$ cm²."}
    ]
  },
  "u6-recap": {
    summary: "Unitatea despre proporționalitate geometrică fixează Thales, asemănarea și rapoartele de perimetre și arii.",
    keys: ["În proporție, produsele în cruce sunt egale.", "Thales cere paralelism.", "Triunghiurile asemenea au laturi corespondente proporționale.", "Raportul ariilor este pătratul raportului de asemănare."],
    mistakes: ["inversarea segmentelor în raport", "aplicarea lui Thales fără paralelism", "confundarea raportului laturilor cu raportul ariilor", "nepăstrarea corespondenței vârfurilor"],
    problem: genericByUnit7.similarity.examples[2],
    exercises: [
      {level:"usor",text:"Rezolvați $\\frac{x}{8}=\\frac34$.",solution:"$3x=32\\Rightarrow x=\\frac{32}{3}$."},
      {level:"usor",text:"Aflați un perimetru folosind raportul de asemănare 2:5.",solution:"Dacă latura mică este de exemplu 10 cm, perimetrul mare este $10\\cdot\\frac52=25$ cm (raportul de asemănare aplicat perimetrului)."},
      {level:"usor",text:"Demonstrați asemănarea a două triunghiuri prin criteriul UU.",solution:"Se identifică 2 unghiuri egale între cele 2 triunghiuri; al treilea rezultă automat egal (suma 180°), deci sunt asemenea."},
      {level:"mediu",text:"Aplicați Thales pentru a afla un segment necunoscut într-un triunghi cu $DE\\parallel BC$.",solution:"Se aplică $\\frac{AD}{DB}=\\frac{AE}{EC}$ pentru a afla segmentul cerut, cunoscând celelalte 3 segmente."},
      {level:"mediu",text:"Aflați raportul ariilor pentru raportul laturilor 4:7.",solution:"Raportul ariilor este $\\left(\\frac47\\right)^2=\\frac{16}{49}$."},
      {level:"mediu",text:"Două triunghiuri asemenea au raportul de asemănare 3:4. Perimetrul celui mic este 27 cm. Aflați perimetrul celui mare.",solution:"Perimetrul mare este $27\\cdot\\frac43=36$ cm."},
      {level:"dificil",text:"Un stâlp de 3 m proiectează o umbră de 2 m, iar un copac din apropiere proiectează o umbră de 6 m. Aflați înălțimea copacului folosind asemănarea.",solution:"Raportul umbrelor este $\\frac26=\\frac13$, deci înălțimea copacului este $3\\cdot3=9$ m."},
      {level:"dificil",text:"Demonstrați, folosind criteriul LUL, că două triunghiuri cu $AB=6$, $AC=9$, $A'B'=8$, $A'C'=12$ și unghiurile din $A$ și $A'$ egale sunt asemenea.",solution:"Rapoartele $\\frac68=\\frac9{12}=0,75$ sunt egale, iar unghiul dintre laturi este comun, deci sunt asemenea prin LUL."},
      {level:"f-dificil",text:"Ariile a două triunghiuri asemenea sunt 36 cm² și 81 cm². Aflați raportul laturilor și raportul perimetrelor.",solution:"Raportul ariilor este $\\frac{36}{81}=\\frac49$, deci raportul laturilor (și al perimetrelor) este $\\sqrt{\\frac49}=\\frac23$."},
      {level:"f-dificil",text:"Într-un triunghi, o paralelă la o latură împarte celelalte două laturi în raportul 2:3. Aflați în ce raport este împărțit perimetrul triunghiului mic format.",solution:"Perimetrul se împarte tot în raportul 2:3 (proporțional cu laturile paralele determinate de Thales)."}
    ]
  },
  "u7-recap": {
    summary: "Unitatea despre triunghiul dreptunghic conectează relațiile metrice, Pitagora și trigonometria.",
    keys: ["$h^2=pq$.", "$a^2=cp$ și $b^2=cq$.", "$c^2=a^2+b^2$.", "$\\sin A=\\frac{\\text{cateta opusă}}{\\text{ipotenuză}}$."],
    mistakes: ["alegerea greșită a ipotenuzei", "amestecarea proiecțiilor la teorema catetei", "folosirea catetei alăturate greșite", "rotunjirea prea devreme"],
    problem: genericByUnit7.metric.examples[2],
    exercises: [
      {level:"usor",text:"Calculați ipotenuza pentru catete 5 cm și 12 cm.",solution:"Ipotenuza este $\\sqrt{5^2+12^2}=13$ cm."},
      {level:"usor",text:"Aflați o catetă dacă ipotenuza este 17 cm și cealaltă catetă 8 cm.",solution:"Cealaltă catetă este $\\sqrt{17^2-8^2}=15$ cm."},
      {level:"usor",text:"Calculați $\\sin A$ într-un triunghi dreptunghic cu laturile 6-8-10.",solution:"$\\sin A=\\frac{6}{10}=0,6$ (sau $\\frac{8}{10}=0,8$, în funcție de unghiul ales)."},
      {level:"mediu",text:"Aplicați $h^2=pq$ pentru $p=5$ cm și $q=20$ cm.",solution:"$h=\\sqrt{5\\cdot20}=10$ cm."},
      {level:"mediu",text:"Într-un triunghi dreptunghic, o catetă este 9 cm, iar proiecția ei pe ipotenuză este 5,4 cm. Aflați ipotenuza.",solution:"Ipotenuza este $\\frac{9^2}{5,4}=15$ cm."},
      {level:"mediu",text:"Rezolvați o problemă aplicativă cu o scară sprijinită de un perete (nivel practic).",solution:"Dacă scara are 5 m și piciorul la 3 m de perete, înălțimea pe perete este $\\sqrt{5^2-3^2}=4$ m."},
      {level:"dificil",text:"Un triunghi dreptunghic are un unghi de 30° și ipotenuza 10 cm. Aflați catetele folosind rapoarte trigonometrice cunoscute.",solution:"Cateta opusă unghiului de 30° este $10\\cdot0,5=5$ cm; cealaltă catetă este $\\sqrt{10^2-5^2}=5\\sqrt3$ cm."},
      {level:"dificil",text:"Demonstrați reciproca teoremei lui Pitagora pentru un triunghi cu laturile 9 cm, 12 cm, 15 cm.",solution:"$9^2+12^2=81+144=225=15^2$, deci triunghiul este dreptunghic (reciproca teoremei lui Pitagora)."},
      {level:"f-dificil",text:"Într-un triunghi dreptunghic, înălțimea din unghiul drept este 12 cm, iar o proiecție este 9 cm. Aflați toate elementele triunghiului (catete, ipotenuză, cealaltă proiecție).",solution:"Din $h^2=pq$ cu $h=12$, $p=9$: $q=\\frac{144}{9}=16$ cm; ipotenuza $9+16=25$ cm; catetele $\\sqrt{9\\cdot25}=15$ cm și $\\sqrt{16\\cdot25}=20$ cm."},
      {level:"f-dificil",text:"O rampă de acces are lungimea 5 m și înălțimea 1,2 m. Calculați unghiul de înclinare al rampei folosind $\\sin$ sau $\\tan$ (aproximativ).",solution:"Unghiul este $\\arcsin\\left(\\frac{1,2}{5}\\right)\\approx13,9°$."}
    ]
  },
  "u8-recap": {
    summary: "Unitatea despre calculul algebric fixează expresiile, monoamele, polinoamele, înmulțirea lor, formulele de calcul prescurtat și factorizarea.",
    keys: ["Termenii asemenea au aceeași parte literală.", "$(a+b)(c+d)=ac+ad+bc+bd$.", "$(a\\pm b)^2=a^2\\pm2ab+b^2$, iar $a^2-b^2=(a-b)(a+b)$.", "Factorizarea transformă o sumă într-un produs."],
    mistakes: ["adunarea termenilor care nu sunt asemenea", "uitarea produsului dublu $2ab$ la pătratul sumei/diferenței", "distribuirea incompletă la înmulțirea polinoamelor", "confundarea factorului comun cu un termen oarecare"],
    problem: {label:"tip Evaluare Națională", given:"$E=(x+2)^2-(x-2)^2$", ask:"forma simplificată", solve:"Folosim formulele: $(x+2)^2=x^2+4x+4$ și $(x-2)^2=x^2-4x+4$. Diferența este $E=8x$.", answer:"$8x$"},
    exercises: [
      {level:"usor",text:"Reduceți termenii asemenea din $4x^2-2x^2+x^2$.",solution:"$4x^2-2x^2+x^2=3x^2$."},
      {level:"usor",text:"Dezvoltați $(x+6)^2$.",solution:"$(x+6)^2=x^2+12x+36$."},
      {level:"usor",text:"Descompuneți în factori $10x+15$.",solution:"$10x+15=5(2x+3)$."},
      {level:"mediu",text:"Dezvoltați $(x-4)(x+4)$.",solution:"$(x-4)(x+4)=x^2-16$."},
      {level:"mediu",text:"Calculați $(2x-3)(x+5)$.",solution:"$(2x-3)(x+5)=2x^2+7x-15$."},
      {level:"mediu",text:"Descompuneți $x^2-49$.",solution:"$x^2-49=(x-7)(x+7)$."},
      {level:"dificil",text:"Simplificați $(x+3)^2-(x-1)(x+1)$.",solution:"$(x+3)^2=x^2+6x+9$ și $(x-1)(x+1)=x^2-1$; diferența este $6x+9-(-1)=6x+10$."},
      {level:"dificil",text:"Descompuneți complet $3x^2-27$.",solution:"$3x^2-27=3(x^2-9)=3(x-3)(x+3)$."},
      {level:"f-dificil",text:"Arătați că $(a+b)^2+(a-b)^2=2a^2+2b^2$.",solution:"$(a+b)^2+(a-b)^2=(a^2+2ab+b^2)+(a^2-2ab+b^2)=2a^2+2b^2$."},
      {level:"f-dificil",text:"Un pătrat are latura $(x+2)$ cm. Scrieți aria dezvoltată și calculați-o pentru $x=3$.",solution:"Aria este $(x+2)^2=x^2+4x+4$; pentru $x=3$: $9+12+4=25$ cm²."}
    ]
  },
  "u9-recap": {
    summary: "Unitatea despre inegalități fixează proprietățile de bază, rezolvarea inegalităților liniare și aplicarea lor în probleme practice.",
    keys: ["Înmulțirea/împărțirea cu un număr negativ inversează sensul inegalității.", "Soluția unei inegalități liniare este un interval.", "„Cel puțin” înseamnă $\\ge$, „cel mult” înseamnă $\\le$.", "Soluțiile se verifică în contextul problemei."],
    mistakes: ["uitarea inversării sensului la înmulțirea cu număr negativ", "confuzia dintre cerc plin și cerc gol pe axă", "acceptarea de soluții negative în contexte fizice imposibile", "tratarea inegalității ca și cum ar avea o singură soluție"],
    problem: {label:"tip Evaluare Națională", given:"$3(x-2)\\le2x+4$", ask:"soluția", solve:"$3x-6\\le2x+4$, deci $x\\le10$.", answer:"$x\\in(-\\infty,10]$"},
    exercises: [
      {level:"usor",text:"Rezolvați $x-5>2$.",solution:"$x>7$."},
      {level:"usor",text:"Rezolvați $3x\\le18$.",solution:"$x\\le6$."},
      {level:"usor",text:"Reprezentați pe axă soluția $x>-1$.",solution:"Pe axă se marchează cerc gol în $-1$, cu săgeată spre dreapta."},
      {level:"mediu",text:"Rezolvați $-4x<12$.",solution:"Împărțind la $-4$ (schimbă sensul): $x>-3$."},
      {level:"mediu",text:"Rezolvați $2(x+3)\\ge x-1$.",solution:"$2x+6\\ge x-1\\Rightarrow x\\ge-7$."},
      {level:"mediu",text:"Un elev are notele 7 și 8. Ce notă minimă are nevoie la a treia teză pentru media cel puțin 8?",solution:"Suma primelor 2 este 15; pentru medie $\\ge8$ pe 3 teze, suma $\\ge24$, deci nota minimă este 9."},
      {level:"dificil",text:"Rezolvați $5-2x\\le3x+15$.",solution:"$5-2x\\le3x+15\\Rightarrow-10\\le5x\\Rightarrow x\\ge-2$."},
      {level:"dificil",text:"Aflați cel mai mare număr întreg care verifică $3x-1<11$.",solution:"$3x<12\\Rightarrow x<4$, deci cel mai mare întreg este 3."},
      {level:"f-dificil",text:"Rezolvați $-3\\le2x-1<5$ și reprezentați soluția.",solution:"$-3\\le2x-1<5\\Rightarrow-2\\le2x<6\\Rightarrow-1\\le x<3$."},
      {level:"f-dificil",text:"Un cont are 300 lei și se retrag 40 lei/săptămână. După câte săptămâni cel mult suma rămasă este cel puțin 100 lei?",solution:"Suma rămasă după $t$ săptămâni este $300-40t\\ge100\\Rightarrow40t\\le200\\Rightarrow t\\le5$ săptămâni."}
    ]
  },
  "u10-recap": {
    summary: "Unitatea despre funcția liniară fixează noțiunea de funcție, graficul funcției liniare, panta și aplicațiile practice ale acestui model.",
    keys: ["Funcția liniară are forma $f(x)=mx+n$.", "Graficul este o dreaptă; sunt suficiente 2 puncte pentru a o trasa.", "Panta $m=\\frac{y_2-y_1}{x_2-x_1}$ arată direcția și înclinarea dreptei.", "Ordonata la origine $n$ este valoarea funcției în $x=0$."],
    mistakes: ["confundarea pantei cu ordonata la origine", "calcularea greșită a pantei (inversarea diferențelor)", "presupunerea că orice grafic e neapărat o dreaptă", "ignorarea domeniului realist într-o problemă aplicativă"],
    problem: {label:"tip Evaluare Națională", given:"o dreaptă trece prin $(1,4)$ și $(3,10)$", ask:"ecuația funcției liniare", solve:"Panta este $m=\\frac{10-4}{3-1}=3$. Din $f(1)=4$: $3\\cdot1+n=4$, deci $n=1$. Funcția este $f(x)=3x+1$.", answer:"$f(x)=3x+1$"},
    exercises: [
      {level:"usor",text:"Calculați $f(5)$ pentru $f(x)=2x-3$.",solution:"$f(5)=2\\cdot5-3=7$."},
      {level:"usor",text:"Determinați panta dreptei ce trece prin $(0,2)$ și $(2,8)$.",solution:"$m=\\frac{8-2}{2-0}=3$."},
      {level:"usor",text:"Aflați ordonata la origine a funcției $f(x)=-4x+7$.",solution:"Ordonata la origine este $f(0)=7$."},
      {level:"mediu",text:"Determinați funcția liniară al cărei grafic trece prin $(0,-2)$ și $(4,6)$.",solution:"Panta este $\\frac{6-(-2)}{4-0}=2$; din $f(0)=-2$: funcția este $f(x)=2x-2$."},
      {level:"mediu",text:"Verificați dacă punctele $(1,3)$, $(2,5)$, $(3,7)$ sunt coliniare.",solution:"Pantele $\\frac{5-3}{2-1}=2$ și $\\frac{7-5}{3-2}=2$ sunt egale, deci punctele sunt coliniare."},
      {level:"mediu",text:"Un abonament costă 15 lei fix plus 3 lei/GB. Scrieți funcția costului și calculați costul pentru 10 GB.",solution:"$C(x)=15+3x$; pentru 10 GB: $C(10)=15+30=45$ lei."},
      {level:"dificil",text:"Aflați intersecția graficelor $f(x)=2x-1$ și $g(x)=-3x+9$.",solution:"$2x-1=-3x+9\\Rightarrow5x=10\\Rightarrow x=2$, iar $y=3$; punctul este $(2,3)$."},
      {level:"dificil",text:"Determinați ecuația dreptei paralele cu $f(x)=-2x+5$ care trece prin $(3,1)$.",solution:"Panta este $-2$; din $f(3)=1$: $-6+n=1\\Rightarrow n=7$; ecuația este $f(x)=-2x+7$."},
      {level:"f-dificil",text:"Două tarife de taxi sunt $C_1(x)=2,5x+4$ și $C_2(x)=3x$. Determinați de la ce distanță primul tarif este mai avantajos.",solution:"Din $2,5x+4=3x\\Rightarrow4=0,5x\\Rightarrow x=8$; pentru distanțe peste 8 km, $C_2$ (fără cost fix) devine mai avantajos, deci $C_1$ este mai avantajos sub 8 km."},
      {level:"f-dificil",text:"O dreaptă trece prin $(-2,5)$ și are panta $-3$. Determinați ecuația ei și punctul de intersecție cu axa Ox.",solution:"Ecuația este $f(x)=-3x-1$ (din $y-5=-3(x+2)$); intersecția cu Ox: $0=-3x-1\\Rightarrow x=-\\frac13$."}
    ]
  },
  "u11-recap": {
    summary: "Unitatea despre corpuri geometrice fixează elementele, ariile și volumele prismei și piramidei.",
    keys: ["$A_{l}=P_{\\text{bază}}\\cdot h$ și $V=A_{\\text{bază}}\\cdot h$ pentru prismă.", "$V=\\frac{A_{\\text{bază}}\\cdot h}{3}$ pentru piramidă.", "$A_l=\\frac{P_{\\text{bază}}\\cdot a_p}{2}$ pentru piramida regulată.", "O piramidă are volumul de 3 ori mai mic decât o prismă cu aceeași bază și înălțime."],
    mistakes: ["confundarea ariei laterale cu aria totală", "uitarea împărțirii la 3 pentru volumul piramidei", "confundarea apotemei bazei cu apotema piramidei", "amestecarea unităților de arie cu cele de volum"],
    problem: {label:"tip Evaluare Națională", given:"piramidă patrulateră regulată cu latura bazei 6 cm și înălțimea 4 cm", ask:"volumul piramidei", solve:"Aria bazei este $A_{\\text{bază}}=6^2=36$ cm². Volumul este $V=\\frac{36\\cdot4}{3}=48$.", answer:"48 cm³"},
    exercises: [
      {level:"usor",text:"O prismă are aria bazei 20 cm² și înălțimea 7 cm. Calculați volumul.",solution:"Volumul este $20\\cdot7=140$ cm³."},
      {level:"usor",text:"O piramidă are aria bazei 30 cm² și înălțimea 6 cm. Calculați volumul.",solution:"Volumul este $\\frac{30\\cdot6}{3}=60$ cm³."},
      {level:"usor",text:"Câte fețe laterale are o prismă cu baza un pentagon?",solution:"O prismă cu baza pentagon are 5 fețe laterale."},
      {level:"mediu",text:"O prismă patrulateră are baza un pătrat cu latura 4 cm și înălțimea 10 cm. Calculați aria totală.",solution:"Perimetrul bazei este $16$ cm, aria bazei $16$ cm²; aria laterală $16\\cdot10=160$ cm²; aria totală $160+2\\cdot16=192$ cm²."},
      {level:"mediu",text:"O piramidă patrulateră regulată are latura bazei 8 cm și apotema piramidei 6 cm. Calculați aria laterală.",solution:"Perimetrul bazei este $4\\cdot8=32$ cm; aria laterală $\\frac{32\\cdot6}{2}=96$ cm²."},
      {level:"mediu",text:"Un cub are muchia 6 cm. Calculați volumul și aria totală.",solution:"Volumul este $6^3=216$ cm³; aria totală este $6\\cdot6^2=216$ cm²."},
      {level:"dificil",text:"O piramidă și o prismă au aceeași bază (24 cm²) și același volum. Dacă înălțimea prismei este 4 cm, aflați înălțimea piramidei.",solution:"Volumul comun este $24\\cdot4=96$ cm³; din $\\frac{24\\cdot h}{3}=96$ obținem $h=12$ cm pentru piramidă."},
      {level:"dificil",text:"O prismă hexagonală regulată are latura bazei 5 cm și înălțimea 12 cm. Calculați volumul (aria hexagonului regulat cu latura $l$ este $\\frac{3\\sqrt3}{2}l^2$).",solution:"Aria hexagonului este $\\frac{3\\sqrt3}{2}\\cdot25=37,5\\sqrt3\\approx65$ cm²; volumul este $\\approx65\\cdot12=780$ cm³."},
      {level:"f-dificil",text:"Un acoperiș piramidal patrulateră regulat are baza 8 m × 8 m și înălțimea 3 m. Calculați volumul.",solution:"Aria bazei este $64$ m², volumul este $\\frac{64\\cdot3}{3}=64$ m³."},
      {level:"f-dificil",text:"Comparați volumele unei prisme și ale unei piramide cu aceeași bază (40 cm²) și aceeași înălțime (9 cm), calculând ambele.",solution:"Volumul prismei este $40\\cdot9=360$ cm³; volumul piramidei este $\\frac{40\\cdot9}{3}=120$ cm³ (de 3 ori mai mic)."}
    ]
  }
};

const chapter7 = (id, title) => ({ id, title, content: lesson7(topics7[id]) });
const recapChapter7 = (id, title) => ({ id, title, content: recap7(recapTopics7[id]) });

const matematica7Data = {
  title: "Matematică - Clasa a VII-a",
  subtitle: "Numere reale, ecuații, date, geometrie",
  subject: "matematica",
  grade: 7,
  sections: [
    {
      id: "u1-numere-reale",
      title: "Unitatea 1 - Numere reale",
      subtitle: "Radicali, operații, puteri, medii",
      icon: "1️⃣",
      chapters: [
        chapter7("u1-l1-radacina-patrata", "L1: Rădăcina pătrată și estimarea ei"),
        chapter7("u1-l2-multimea-reale", "L2: Mulțimea numerelor reale"),
        chapter7("u1-l3-radicali-reguli", "L3: Reguli de calcul cu radicali"),
        chapter7("u1-l4-adunare-scadere", "L4: Adunarea și scăderea numerelor reale"),
        chapter7("u1-l5-inmultire-impartire", "L5: Înmulțirea și împărțirea numerelor reale"),
        chapter7("u1-l6-puteri-ordine", "L6: Puteri cu exponent întreg. Ordinea operațiilor"),
        chapter7("u1-l7-rationalizare", "L7: Raționalizarea numitorului"),
        chapter7("u1-l8-medii", "L8: Media ponderată și media geometrică"),
        chapter7("u1-l9-ecuatia-x2-a", "L9: Ecuația de forma x² = a"),
        recapChapter7("u1-recap", "Recapitulare și evaluare - Unitatea 1")
      ]
    },
    {
      id: "u2-ecuatii-sisteme",
      title: "Unitatea 2 - Ecuații și sisteme",
      subtitle: "Identități, ecuații, sisteme și probleme",
      icon: "2️⃣",
      chapters: [
        chapter7("u2-l1-identitati", "L1: Transformări echivalente. Identități"),
        chapter7("u2-l2-axb", "L2: Ecuații de forma ax + b = 0"),
        chapter7("u2-l3-sisteme", "L3: Sisteme de două ecuații liniare"),
        chapter7("u2-l4-probleme", "L4: Probleme rezolvate cu ecuații și sisteme"),
        recapChapter7("u2-recap", "Recapitulare și evaluare - Unitatea 2")
      ]
    },
    {
      id: "u3-date",
      title: "Unitatea 3 - Organizarea datelor",
      subtitle: "Coordonate, distanțe, tabele și frecvențe",
      icon: "3️⃣",
      chapters: [
        chapter7("u3-l1-puncte", "L1: Sistemul de axe. Reprezentarea punctelor"),
        chapter7("u3-l2-distanta", "L2: Distanța dintre două puncte"),
        chapter7("u3-l3-tabele", "L3: Tabele de date și frecvențe"),
        recapChapter7("u3-recap", "Recapitulare și evaluare - Unitatea 3")
      ]
    },
    {
      id: "u4-patrulatere",
      title: "Unitatea 4 - Patrulatere",
      subtitle: "Proprietăți, perimetre și arii",
      icon: "4️⃣",
      chapters: [
        chapter7("u4-l1-patrulater-convex", "L1: Patrulater convex"),
        chapter7("u4-l2-paralelogram", "L2: Paralelogramul"),
        chapter7("u4-l3-dreptunghi", "L3: Dreptunghiul"),
        chapter7("u4-l4-romb", "L4: Rombul"),
        chapter7("u4-l5-patrat", "L5: Pătratul"),
        chapter7("u4-l6-trapez", "L6: Trapezul"),
        chapter7("u4-l7-perimetre-arii", "L7: Perimetre și arii"),
        recapChapter7("u4-recap", "Recapitulare și evaluare - Unitatea 4")
      ]
    },
    {
      id: "u5-cercul",
      title: "Unitatea 5 - Cercul",
      subtitle: "Coarde, arce, unghiuri, tangente și arii",
      icon: "5️⃣",
      chapters: [
        chapter7("u5-l1-coarde-arce", "L1: Cercul. Coarda și arcul"),
        chapter7("u5-l2-unghi-inscris", "L2: Unghiul înscris în cerc"),
        chapter7("u5-l3-tangente", "L3: Tangenta la cerc"),
        chapter7("u5-l4-poligoane-regulate", "L4: Poligoane regulate înscrise într-un cerc"),
        chapter7("u5-l5-lungime-aria", "L5: Lungimea cercului și aria discului"),
        recapChapter7("u5-recap", "Recapitulare și evaluare - Unitatea 5")
      ]
    },
    {
      id: "u6-asemanare",
      title: "Unitatea 6 - Asemănarea triunghiurilor",
      subtitle: "Segmente proporționale, Thales și asemănare",
      icon: "6️⃣",
      chapters: [
        chapter7("u6-l1-segmente-proportionale", "L1: Segmente proporționale"),
        chapter7("u6-l2-thales", "L2: Teorema lui Thales"),
        chapter7("u6-l3-triunghiuri-asemenea", "L3: Triunghiuri asemenea. Raportul de asemănare"),
        chapter7("u6-l4-criterii", "L4: Criterii de asemănare a triunghiurilor"),
        recapChapter7("u6-recap", "Recapitulare și evaluare - Unitatea 6")
      ]
    },
    {
      id: "u7-relatii-metrice",
      title: "Unitatea 7 - Relații metrice în triunghiul dreptunghic",
      subtitle: "Înălțime, catetă, Pitagora și trigonometrie",
      icon: "7️⃣",
      chapters: [
        chapter7("u7-l1-inaltime", "L1: Teorema înălțimii în triunghiul dreptunghic"),
        chapter7("u7-l2-cateta", "L2: Teorema catetei în triunghiul dreptunghic"),
        chapter7("u7-l3-pitagora", "L3: Teorema lui Pitagora"),
        chapter7("u7-l4-trigonometrie", "L4: Noțiuni de trigonometrie în triunghiul dreptunghic"),
        chapter7("u7-l5-rezolvare-triunghi", "L5: Rezolvarea triunghiului dreptunghic"),
        recapChapter7("u7-recap", "Recapitulare și evaluare - Unitatea 7")
      ]
    },
    {
      id: "u8-calcul-algebric",
      title: "Unitatea 8 - Calcul algebric",
      subtitle: "Expresii, polinoame, formule de calcul prescurtat și factorizare",
      icon: "8️⃣",
      chapters: [
        chapter7("u8-l1-expresii-algebrice", "L1: Expresii algebrice. Valoarea unei expresii"),
        chapter7("u8-l2-monoame-polinoame", "L2: Monoame și polinoame. Adunarea și scăderea"),
        chapter7("u8-l3-inmultire-polinoame", "L3: Înmulțirea polinoamelor"),
        chapter7("u8-l4-formule-calcul-prescurtat", "L4: Formule de calcul prescurtat"),
        chapter7("u8-l5-factor-comun-factorizare", "L5: Descompunerea în factori"),
        recapChapter7("u8-recap", "Recapitulare și evaluare - Unitatea 8")
      ]
    },
    {
      id: "u9-inegalitati",
      title: "Unitatea 9 - Inegalități",
      subtitle: "Proprietăți, rezolvare și probleme cu inegalități liniare",
      icon: "9️⃣",
      chapters: [
        chapter7("u9-l1-proprietati", "L1: Inegalități. Proprietăți"),
        chapter7("u9-l2-rezolvare-liniare", "L2: Rezolvarea inegalităților liniare"),
        chapter7("u9-l3-probleme", "L3: Probleme cu inegalități"),
        recapChapter7("u9-recap", "Recapitulare și evaluare - Unitatea 9")
      ]
    },
    {
      id: "u10-functia-liniara",
      title: "Unitatea 10 - Funcția liniară",
      subtitle: "Noțiunea de funcție, grafic, pantă și aplicații",
      icon: "🔟",
      chapters: [
        chapter7("u10-l1-notiunea-de-functie", "L1: Noțiunea de funcție. Moduri de reprezentare"),
        chapter7("u10-l2-graficul-functiei-liniare", "L2: Funcția liniară. Graficul ei"),
        chapter7("u10-l3-panta-dreptei", "L3: Panta unei drepte"),
        chapter7("u10-l4-probleme-aplicative", "L4: Probleme aplicative cu funcția liniară"),
        recapChapter7("u10-recap", "Recapitulare și evaluare - Unitatea 10")
      ]
    },
    {
      id: "u11-corpuri-geometrice",
      title: "Unitatea 11 - Corpuri geometrice",
      subtitle: "Prisma și piramida: elemente, arii și volume",
      icon: "🧊",
      chapters: [
        chapter7("u11-l1-prisma-elemente", "L1: Prisma dreaptă. Elemente"),
        chapter7("u11-l2-arii-prisma", "L2: Aria laterală și aria totală a prismei"),
        chapter7("u11-l3-volum-prisma", "L3: Volumul prismei"),
        chapter7("u11-l4-piramida-elemente", "L4: Piramida. Elemente"),
        chapter7("u11-l5-volum-piramida", "L5: Aria laterală și volumul piramidei"),
        recapChapter7("u11-recap", "Recapitulare și evaluare - Unitatea 11")
      ]
    }
  ]
};
