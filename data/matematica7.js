// ============================================================
//  MATEMATICĂ - CLASA A VII-A
//  Conținut original, aliniat cu programa OMEN 3393/2017
//  Structură păstrată: 7 unități, 44 capitole
// ============================================================

const list7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

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
  <ol>${list7(data.exercises)}</ol>
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
  <ol>${list7(data.exercises)}</ol>
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
    learn: "Înțelegem rădăcina pătrată ca operație inversă ridicării la pătrat și estimăm radicalii care nu sunt pătrate perfecte.",
    terms: ["$\\sqrt{a}$: rădăcina pătrată a lui $a$", "$a$: radicand, cu $a\\ge0$", "pătrat perfect: număr de forma $n^2$", "estimare: încadrare între două numere întregi consecutive"],
    properties: ["$\\sqrt{a}=b$ înseamnă $b^2=a$, cu $b\\ge0$.", "Dacă $n^2<a<(n+1)^2$, atunci $n<\\sqrt{a}<n+1$.", "$\\sqrt{0}=0$.", "Nu există rădăcină pătrată reală pentru numere negative."],
    steps: ["Verifică dacă radicandul este nenegativ.", "Caută cel mai apropiat pătrat perfect.", "Pentru estimare, încadrează radicandul între două pătrate perfecte.", "La final verifică prin ridicare la pătrat."],
    tips: ["Memorează pătratele de la $1^2$ la $20^2$.", "Rădăcina pătrată principală este mereu nenegativă.", "La probleme cu arii de pătrat, latura este rădăcina ariei."],
    examples: [
      {label:"pătrat perfect", given:"$a=144$", ask:"$\\sqrt{144}$", solve:"Deoarece $12^2=144$, rezultă $\\sqrt{144}=12$.", answer:"12"},
      {label:"estimare", given:"$a=50$", ask:"între ce două numere întregi se află $\\sqrt{50}$", solve:"$7^2=49$ și $8^2=64$, iar $49<50<64$.", answer:"$7<\\sqrt{50}<8$"},
      {label:"tip examen", given:"un pătrat are aria 196 cm²", ask:"latura pătratului", solve:"Dacă latura este $l$, atunci $l^2=196$, deci $l=\\sqrt{196}=14$.", check:"$14^2=196$.", answer:"14 cm"}
    ],
    exercises: ["Calculați $\\sqrt{225}$ și $\\sqrt{400}$.", "Estimați $\\sqrt{30}$ între două numere întregi consecutive.", "Dacă $\\sqrt{x}=17$, aflați $x$.", "Un pătrat are aria 289 cm². Calculați latura.", "Arătați între ce două numere întregi consecutive se află $\\sqrt{170}$."]
  },
  "u1-l2-multimea-reale": {
    learn: "Clasificăm numerele în naturale, întregi, raționale, iraționale și reale, alegând cea mai mică mulțime potrivită.",
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
    exercises: ["Clasificați $0$, $-5$, $\\frac{7}{3}$, $\\sqrt{9}$, $\\sqrt{11}$.", "Dați un exemplu din fiecare: N, Z\\N, Q\\Z, R\\Q.", "Decideți dacă orice număr rațional este real.", "Ordonați crescător $-2$, $\\sqrt{5}$, $\\frac{3}{2}$, $0$.", "Explicați de ce $\\sqrt{16}$ nu este irațional."]
  },
  "u1-l3-radicali-reguli": {
    learn: "Aplicăm regulile de calcul cu radicali pentru a simplifica produse, câturi și radicali cu factori pătrați.",
    terms: ["factor scos de sub radical", "factor introdus sub radical", "radicali asemenea", "$\\sqrt{ab}$ și $\\sqrt{\\frac{a}{b}}$"],
    properties: ["Pentru $a,b\\ge0$, $\\sqrt{ab}=\\sqrt a\\cdot\\sqrt b$.", "Pentru $a\\ge0$, $b>0$, $\\sqrt{\\frac ab}=\\frac{\\sqrt a}{\\sqrt b}$.", "$\\sqrt{a^2}=|a|$.", "$\\sqrt{50}=5\\sqrt2$ deoarece $50=25\\cdot2$."],
    steps: ["Descompune radicandul în factori.", "Caută pătrate perfecte.", "Scoate factorul pătrat din radical.", "Verifică prin ridicare la pătrat sau prin înmulțire."],
    tips: ["Nu scoate din radical un factor care nu este pătrat perfect.", "La $\\sqrt{a^2}$ răspunsul general este $|a|$.", "Simplifică înainte să înmulțești radicalii mari."],
    examples: [
      {label:"simplificare", given:"$\\sqrt{72}$", ask:"forma simplificată", solve:"$72=36\\cdot2$, deci $\\sqrt{72}=\\sqrt{36}\\sqrt2=6\\sqrt2$.", answer:"$6\\sqrt2$"},
      {label:"produs", given:"$\\sqrt{12}\\cdot\\sqrt3$", ask:"calculați", solve:"$\\sqrt{12}\\cdot\\sqrt3=\\sqrt{36}=6$.", answer:"6"},
      {label:"tip examen", given:"$x=\\sqrt{75}-\\sqrt{27}$", ask:"simplificați $x$", solve:"$\\sqrt{75}=5\\sqrt3$, $\\sqrt{27}=3\\sqrt3$, deci $x=2\\sqrt3$.", answer:"$2\\sqrt3$"}
    ],
    exercises: ["Simplificați $\\sqrt{48}$ și $\\sqrt{98}$.", "Calculați $\\sqrt{20}\\cdot\\sqrt5$.", "Simplificați $\\sqrt{\\frac{49}{81}}$.", "Arătați că $\\sqrt{18}+\\sqrt{50}=8\\sqrt2$.", "Determinați $x$ dacă $x=\\sqrt{108}-\\sqrt{12}$."]
  },
  "u1-l4-adunare-scadere": {
    learn: "Adunăm și scădem numere reale, în special radicali asemenea, după simplificarea lor.",
    terms: ["radicali asemenea: au același radical rămas", "coeficientul radicalului", "termeni asemenea", "număr real"],
    properties: ["$a\\sqrt m+b\\sqrt m=(a+b)\\sqrt m$.", "Radicalii diferiți nu se adună direct.", "Înainte de adunare se simplifică fiecare radical.", "Semnele se păstrează ca la calculul cu numere reale."],
    steps: ["Simplifică radicalii.", "Grupează radicalii asemenea.", "Adună sau scade coeficienții.", "Lasă radicalii neasemenea separați."],
    tips: ["Nu scrie $\\sqrt2+\\sqrt3=\\sqrt5$; este fals.", "Caută factori pătrați înainte de a decide că radicalii nu sunt asemenea.", "Verifică rezultatul numeric aproximativ dacă ai dubii."],
    examples: [
      {label:"radicali asemenea", given:"$3\\sqrt2+5\\sqrt2$", ask:"suma", solve:"Adunăm coeficienții: $(3+5)\\sqrt2=8\\sqrt2$.", answer:"$8\\sqrt2$"},
      {label:"simplificare înainte", given:"$\\sqrt{50}-\\sqrt8$", ask:"diferența", solve:"$\\sqrt{50}=5\\sqrt2$, $\\sqrt8=2\\sqrt2$, deci diferența este $3\\sqrt2$.", answer:"$3\\sqrt2$"},
      {label:"tip examen", given:"$A=2\\sqrt{12}-\\sqrt{27}+\\sqrt3$", ask:"forma simplificată", solve:"$2\\sqrt{12}=4\\sqrt3$, $\\sqrt{27}=3\\sqrt3$, deci $A=4\\sqrt3-3\\sqrt3+\\sqrt3=2\\sqrt3$.", answer:"$2\\sqrt3$"}
    ],
    exercises: ["Calculați $4\\sqrt5-\\sqrt5$.", "Simplificați $\\sqrt{18}+\\sqrt{32}$.", "Calculați $3\\sqrt{27}-2\\sqrt{12}$.", "Arătați că $\\sqrt{75}+\\sqrt{12}=7\\sqrt3$.", "Determinați valoarea expresiei $\\sqrt{98}-\\sqrt{50}+\\sqrt8$."]
  },
  "u1-l5-inmultire-impartire": {
    learn: "Înmulțim și împărțim numere reale cu radicali, folosind condițiile corecte pentru radicand și numitor.",
    terms: ["produs de radicali", "cât de radicali", "numitor nenul", "factor comun"],
    properties: ["$\\sqrt a\\cdot\\sqrt b=\\sqrt{ab}$ pentru $a,b\\ge0$.", "$\\frac{\\sqrt a}{\\sqrt b}=\\sqrt{\\frac ab}$ pentru $a\\ge0$, $b>0$.", "$(a\\sqrt m)(b\\sqrt n)=ab\\sqrt{mn}$.", "Rezultatul se simplifică dacă radicandul are factor pătrat."],
    steps: ["Verifică domeniul: radicanzi nenegativi și numitori nenuli.", "Înmulțește coeficienții și radicalii separat.", "La împărțire, simplifică fracțiile înainte de radical dacă se poate.", "Simplifică radicalul final."],
    tips: ["Nu împărți la $\\sqrt0$.", "La produs, uneori radicalul final devine număr întreg.", "Simplificarea înainte de calcul reduce erorile."],
    examples: [
      {label:"produs", given:"$2\\sqrt3\\cdot4\\sqrt{12}$", ask:"calculați", solve:"Coeficienții dau 8, iar $\\sqrt3\\cdot\\sqrt{12}=\\sqrt{36}=6$, deci rezultatul este 48.", answer:"48"},
      {label:"cât", given:"$\\frac{\\sqrt{50}}{\\sqrt2}$", ask:"calculați", solve:"$\\frac{\\sqrt{50}}{\\sqrt2}=\\sqrt{25}=5$.", answer:"5"},
      {label:"tip examen", given:"dreptunghi cu laturile $3\\sqrt2$ cm și $5\\sqrt8$ cm", ask:"aria", solve:"$5\\sqrt8=10\\sqrt2$. Aria este $3\\sqrt2\\cdot10\\sqrt2=30\\cdot2=60$.", answer:"60 cm²"}
    ],
    exercises: ["Calculați $\\sqrt6\\cdot\\sqrt{24}$.", "Calculați $3\\sqrt5\\cdot2\\sqrt{20}$.", "Simplificați $\\frac{\\sqrt{72}}{\\sqrt2}$.", "Un dreptunghi are laturile $2\\sqrt3$ cm și $4\\sqrt{12}$ cm. Aflați aria.", "Determinați $x=\\frac{\\sqrt{98}\\cdot\\sqrt2}{7}$."]
  },
  "u1-l6-puteri-ordine": {
    learn: "Folosim puteri cu exponent întreg și ordinea operațiilor în calcule cu numere reale.",
    terms: ["putere cu exponent întreg", "bază nenulă pentru exponent negativ", "operații de același ordin", "paranteze"],
    properties: ["$a^{-n}=\\frac{1}{a^n}$ pentru $a\\ne0$.", "$a^m\\cdot a^n=a^{m+n}$.", "$(a^m)^n=a^{mn}$.", "Ordinea: paranteze, puteri, înmulțiri/împărțiri, adunări/scăderi."],
    steps: ["Rezolvă parantezele interioare.", "Transformă puterile cu exponent negativ.", "Aplică regulile puterilor.", "Efectuează operațiile în ordinea corectă."],
    tips: ["Nu scrie $2^{-3}=-8$; corect este $\\frac18$.", "Semnul minus din paranteză contează la puteri.", "La radicali și puteri, simplifică înainte de calcule lungi."],
    examples: [
      {label:"exponent negativ", given:"$2^{-3}$", ask:"valoarea", solve:"$2^{-3}=\\frac{1}{2^3}=\\frac18$.", answer:"$\\frac18$"},
      {label:"ordine", given:"$3^2-2\\cdot4+6$", ask:"calculați", solve:"$3^2=9$, $2\\cdot4=8$, deci $9-8+6=7$.", answer:"7"},
      {label:"tip examen", given:"$A=(\\sqrt2)^4+3^{-1}\\cdot9$", ask:"calculați", solve:"$(\\sqrt2)^4=4$, iar $3^{-1}\\cdot9=3$, deci $A=7$.", answer:"7"}
    ],
    exercises: ["Calculați $5^{-2}$.", "Simplificați $2^3\\cdot2^{-1}$.", "Calculați $(-2)^4-3^2$.", "Determinați valoarea expresiei $\\sqrt{16}+2^{-1}\\cdot10$.", "Rezolvați $A=(\\sqrt3)^2+4^{-1}\\cdot8$."]
  },
  "u1-l7-rationalizare": {
    learn: "Raționalizăm numitorul unei fracții pentru a elimina radicalul din numitor.",
    terms: ["raționalizare", "numitor", "factor de amplificare", "fracție echivalentă"],
    properties: ["$\\frac{a}{\\sqrt b}=\\frac{a\\sqrt b}{b}$ pentru $b>0$.", "Fracția se amplifică prin același număr nenul.", "După raționalizare se simplifică dacă este posibil.", "Numitorul final nu mai conține radical simplu."],
    steps: ["Identifică radicalul din numitor.", "Amplifică fracția cu radicalul respectiv.", "Folosește $\\sqrt b\\cdot\\sqrt b=b$.", "Simplifică rezultatul."],
    tips: ["Raționalizarea nu schimbă valoarea fracției.", "Nu amplifica doar numitorul; trebuie și numărătorul.", "Pentru sume cu radicali la numitor se folosește conjugata, dacă apare în lecție."],
    examples: [
      {label:"bază", given:"$\\frac{3}{\\sqrt5}$", ask:"raționalizați", solve:"Amplificăm cu $\\sqrt5$: $\\frac{3}{\\sqrt5}=\\frac{3\\sqrt5}{5}$.", answer:"$\\frac{3\\sqrt5}{5}$"},
      {label:"simplificare", given:"$\\frac{6}{\\sqrt3}$", ask:"raționalizați", solve:"$\\frac{6}{\\sqrt3}=\\frac{6\\sqrt3}{3}=2\\sqrt3$.", answer:"$2\\sqrt3$"},
      {label:"tip examen", given:"$A=\\frac{2}{\\sqrt2}+\\sqrt8$", ask:"simplificați", solve:"$\\frac{2}{\\sqrt2}=\\sqrt2$, iar $\\sqrt8=2\\sqrt2$, deci $A=3\\sqrt2$.", answer:"$3\\sqrt2$"}
    ],
    exercises: ["Raționalizați $\\frac{5}{\\sqrt7}$.", "Simplificați $\\frac{12}{\\sqrt3}$.", "Calculați $\\frac{4}{\\sqrt2}+\\sqrt{18}$.", "Raționalizați și comparați $\\frac{1}{\\sqrt5}$ cu $\\frac{\\sqrt5}{5}$.", "Determinați perimetrul unui pătrat cu latura $\\frac{6}{\\sqrt3}$ cm."]
  },
  "u1-l8-medii": {
    learn: "Calculăm media ponderată și media geometrică și alegem media potrivită contextului.",
    terms: ["media aritmetică", "media ponderată", "pondere", "media geometrică"],
    properties: ["Media ponderată: $\\frac{a_1p_1+a_2p_2+...+a_np_n}{p_1+p_2+...+p_n}$.", "Media geometrică a două numere pozitive: $\\sqrt{ab}$.", "Ponderile arată importanța valorilor.", "Media geometrică se folosește pentru produse, proporții și laturi."],
    steps: ["Identifică valorile și ponderile.", "Înmulțește fiecare valoare cu ponderea ei.", "Împarte suma produselor la suma ponderilor.", "Pentru media geometrică, înmulțește valorile și extrage radicalul."],
    tips: ["Nu împărți media ponderată la numărul de valori dacă ponderile nu sunt egale.", "Media geometrică cere valori pozitive.", "În probleme cu note, ponderile pot fi coeficienți sau număr de apariții."],
    examples: [
      {label:"ponderată", given:"notele 8 cu pondere 2 și 10 cu pondere 1", ask:"media", solve:"$\\frac{8\\cdot2+10\\cdot1}{2+1}=\\frac{26}{3}$.", answer:"$\\frac{26}{3}$"},
      {label:"geometrică", given:"numerele 4 și 25", ask:"media geometrică", solve:"$\\sqrt{4\\cdot25}=\\sqrt{100}=10$.", answer:"10"},
      {label:"tip examen", given:"un elev are test 7, proiect 9 și examen 8, cu ponderi 2, 1, 3", ask:"media ponderată", solve:"$\\frac{7\\cdot2+9\\cdot1+8\\cdot3}{2+1+3}=\\frac{47}{6}$.", answer:"$\\frac{47}{6}$"}
    ],
    exercises: ["Calculați media ponderată a valorilor 6 și 9 cu ponderi 1 și 2.", "Calculați media geometrică a numerelor 9 și 16.", "O notă are pondere dublă față de alta. Formulați media.", "Determinați media ponderată pentru 8, 10, 7 cu ponderi 3, 1, 2.", "Aflați numărul x dacă media geometrică a lui x și 9 este 12."]
  },
  "u1-l9-ecuatia-x2-a": {
    learn: "Rezolvăm ecuația $x^2=a$ în mulțimea numerelor reale și verificăm numărul de soluții.",
    terms: ["ecuație pătratică simplă", "soluție reală", "rădăcină pătrată", "verificare prin înlocuire"],
    properties: ["Dacă $a>0$, ecuația $x^2=a$ are soluțiile $x=\\pm\\sqrt a$.", "Dacă $a=0$, soluția este $x=0$.", "Dacă $a<0$, nu există soluții reale.", "Verificarea se face ridicând soluția la pătrat."],
    steps: ["Compară $a$ cu 0.", "Aplică regula potrivită pentru semnul lui $a$.", "Scrie ambele soluții când $a>0$.", "Verifică prin înlocuire."],
    tips: ["Nu uita soluția negativă când $a>0$.", "$\\sqrt a$ este pozitiv, dar ecuația are și $-\\sqrt a$.", "Pentru $a<0$, nu inventa soluții reale."],
    examples: [
      {label:"două soluții", given:"$x^2=49$", ask:"soluțiile reale", solve:"$x=\\pm\\sqrt{49}=\\pm7$.", answer:"$x\\in\\{-7,7\\}$"},
      {label:"nicio soluție", given:"$x^2=-4$", ask:"soluțiile reale", solve:"Pătratul unui număr real nu poate fi negativ.", answer:"nu are soluții reale"},
      {label:"tip examen", given:"$x^2=18$", ask:"soluțiile", solve:"$x=\\pm\\sqrt{18}=\\pm3\\sqrt2$.", check:"$(3\\sqrt2)^2=18$ și $(-3\\sqrt2)^2=18$.", answer:"$x=\\pm3\\sqrt2$"}
    ],
    exercises: ["Rezolvați $x^2=64$.", "Rezolvați $x^2=0$.", "Rezolvați $x^2=3$.", "Explicați de ce $x^2=-9$ nu are soluții reale.", "Aflați latura unui pătrat cu aria 72 cm²."]
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
    exercises: ["Rezolvați o ecuație liniară cu paranteze.", "Verificați dacă o egalitate este identitate.", "Rezolvați un sistem prin substituție.", "Modelați o problemă cu două necunoscute.", "Verificați soluția obținută în enunț."]
  },
  data: {
    steps: ["Identifică axele, coordonatele sau tabelul.", "Extrage datele numerice corecte.", "Aplică formula de distanță, frecvență sau medie.", "Interpretează rezultatul în context."],
    tips: ["În coordonate, ordinea este întotdeauna $(x,y)$.", "Diferențele de coordonate se ridică la pătrat în formula distanței.", "La tabele, verifică totalul frecvențelor."],
    examples: [
      {label:"punct", given:"$A(2,-3)$", ask:"abscisa și ordonata", solve:"Prima coordonată este abscisa, a doua este ordonata.", answer:"abscisa 2, ordonata -3"},
      {label:"distanță", given:"$A(1,2)$ și $B(4,6)$", ask:"$AB$", solve:"$AB=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{9+16}=5$.", answer:"5"},
      {label:"tip examen", given:"valorile 6, 7, 7, 8, 10", ask:"media și modul", solve:"Media este $\\frac{6+7+7+8+10}{5}=\\frac{38}{5}$, iar modul este 7.", answer:"media $\\frac{38}{5}$, modul 7"}
    ],
    exercises: ["Reprezentați punctele $A(1,3)$ și $B(-2,1)$.", "Calculați distanța dintre $A(0,0)$ și $B(6,8)$.", "Completați un tabel de frecvențe pentru 10 valori.", "Determinați media unui set de date.", "Interpretați o problemă cu coordonate și distanțe."]
  },
  quad: {
    steps: ["Desenează figura și marchează datele.", "Alege proprietatea patrulaterului.", "Scrie relația de unghiuri, laturi, diagonale sau arie.", "Verifică unitățile și rezultatul."],
    tips: ["Nu aplica proprietăți de dreptunghi la orice paralelogram.", "La arii, identifică baza și înălțimea perpendiculară.", "În probleme compuse, caută un triunghi dreptunghic pentru Pitagora."],
    examples: [
      {label:"unghiuri", given:"un patrulater cu unghiurile 80°, 95°, 100°", ask:"al patrulea unghi", solve:"Suma unghiurilor este 360°, deci unghiul lipsă este $360°-275°=85°$.", answer:"85°"},
      {label:"arie", given:"paralelogram cu baza 12 cm și înălțimea 7 cm", ask:"aria", solve:"$A=b\\cdot h=12\\cdot7=84$.", answer:"84 cm²"},
      {label:"tip examen", given:"dreptunghi cu laturile 6 cm și 8 cm", ask:"diagonala și aria", solve:"Diagonala este $\\sqrt{6^2+8^2}=10$ cm, aria este $6\\cdot8=48$ cm².", answer:"10 cm și 48 cm²"}
    ],
    exercises: ["Aflați un unghi lipsă într-un patrulater.", "Calculați aria unui paralelogram.", "Determinați diagonala unui dreptunghi prin Pitagora.", "Rezolvați o problemă cu trapez și linie mijlocie.", "Comparați ariile a două patrulatere cu date incomplete."]
  },
  circle: {
    steps: ["Identifică elementele cercului: centru, rază, coardă, arc, tangentă.", "Alege relația dintre unghi și arc sau formula de lungime/arie.", "Înlocuiește datele numeric.", "Scrie răspunsul cu grade, cm, cm² sau cu $\\pi$."],
    tips: ["Unghiul înscris este jumătate din arcul subîntins.", "Tangenta este perpendiculară pe raza dusă în punctul de tangență.", "Dacă se dă diametrul, împarte la 2 pentru rază."],
    examples: [
      {label:"arc și unghi", given:"un arc de 120°", ask:"unghiul înscris care îl subîntinde", solve:"Unghiul înscris este jumătate din arc: $120°:2=60°$.", answer:"60°"},
      {label:"lungime", given:"cerc cu raza 7 cm", ask:"lungimea cercului", solve:"$L=2\\pi r=2\\pi\\cdot7=14\\pi$.", answer:"$14\\pi$ cm"},
      {label:"tip examen", given:"disc cu diametrul 20 cm", ask:"raza și aria", solve:"Raza este 10 cm. Aria este $A=\\pi r^2=100\\pi$.", answer:"10 cm și $100\\pi$ cm²"}
    ],
    exercises: ["Calculați unghiul înscris pentru un arc de 140°.", "Aflați arcul subîntins de un unghi înscris de 35°.", "Calculați lungimea cercului cu raza 5 cm.", "Calculați aria discului cu diametrul 12 cm.", "Rezolvați o problemă cu tangentă și triunghi dreptunghic."]
  },
  similarity: {
    steps: ["Identifică segmentele corespondente.", "Scrie raportul corect.", "Aplică Thales sau criteriul de asemănare.", "Folosește raportul pentru laturi, perimetre sau arii."],
    tips: ["Ordinea segmentelor din raport trebuie păstrată.", "La arii, raportul devine pătrat.", "Verifică paralelismul înainte de a aplica Thales."],
    examples: [
      {label:"raport", given:"$\\frac{x}{6}=\\frac{5}{3}$", ask:"x", solve:"$3x=30$, deci $x=10$.", answer:"$x=10$"},
      {label:"Thales", given:"$DE\\parallel BC$, $AD=4$, $DB=6$, $AE=8$", ask:"EC", solve:"$\\frac{AD}{DB}=\\frac{AE}{EC}$, deci $\\frac46=\\frac8{EC}$. Rezultă $4EC=48$, deci $EC=12$.", answer:"12"},
      {label:"tip examen", given:"două triunghiuri asemenea au raportul laturilor 3:5, iar perimetrul celui mic este 24 cm", ask:"perimetrul celui mare", solve:"Perimetrele au același raport ca laturile: $P_{mare}=24\\cdot\\frac53=40$.", answer:"40 cm"}
    ],
    exercises: ["Calculați un segment folosind o proporție.", "Aplicați teorema lui Thales într-un triunghi.", "Verificați dacă două triunghiuri sunt asemenea.", "Aflați un perimetru folosind raportul de asemănare.", "Aflați raportul ariilor pentru raportul laturilor 2:3."]
  },
  metric: {
    steps: ["Marchează triunghiul dreptunghic și ipotenuza.", "Identifică proiecțiile, catetele sau unghiul cerut.", "Alege formula potrivită.", "Verifică prin Pitagora sau printr-un raport trigonometric."],
    tips: ["Ipotenuza este opusă unghiului drept.", "Cateta opusă și cateta alăturată depind de unghiul ales.", "Nu folosi trigonometrie înainte să stabilești triunghiul dreptunghic."],
    examples: [
      {label:"Pitagora", given:"catetele 9 cm și 12 cm", ask:"ipotenuza", solve:"$c^2=9^2+12^2=225$, deci $c=15$.", answer:"15 cm"},
      {label:"teorema înălțimii", given:"proiecțiile pe ipotenuză 4 cm și 9 cm", ask:"înălțimea", solve:"$h^2=4\\cdot9=36$, deci $h=6$.", answer:"6 cm"},
      {label:"tip examen", given:"triunghi dreptunghic cu ipotenuza 13 cm și o catetă 5 cm", ask:"cealaltă catetă", solve:"$b^2=13^2-5^2=169-25=144$, deci $b=12$.", answer:"12 cm"}
    ],
    exercises: ["Calculați ipotenuza pentru catetele 6 cm și 8 cm.", "Calculați o catetă când ipotenuza este 10 cm și cealaltă catetă 6 cm.", "Aplicați teorema înălțimii pentru proiecții 3 cm și 12 cm.", "Calculați sinusul unui unghi într-un triunghi 3-4-5.", "Rezolvați complet un triunghi dreptunghic cu două laturi cunoscute."]
  }
};

const addTopic7 = (id, type, learn, terms, properties, figure = "") => {
  topics7[id] = {
    learn,
    terms,
    properties,
    figure,
    table: id === "u4-l7-perimetre-arii" ? formulaTable7 : "",
    steps: genericByUnit7[type].steps,
    tips: genericByUnit7[type].tips,
    examples: genericByUnit7[type].examples,
    exercises: genericByUnit7[type].exercises
  };
};

addTopic7("u2-l1-identitati", "algebra", "Folosim transformări echivalente și identități pentru a recunoaște egalități adevărate pentru orice valoare admisă.", ["identitate", "transformare echivalentă", "membru stâng și membru drept", "valoare admisă"], ["O identitate este adevărată pentru toate valorile admise.", "Termenii asemenea se reduc prin adunarea coeficienților.", "Parantezele se desfac respectând semnul din față.", "Verificarea cu o singură valoare nu demonstrează o identitate."]);
addTopic7("u2-l2-axb", "algebra", "Rezolvăm ecuații liniare de forma $ax+b=0$ și interpretăm soluția.", ["ecuație liniară", "coeficient $a$", "termen liber $b$", "soluție"], ["Dacă $a\\ne0$, ecuația are soluția $x=-\\frac ba$.", "Dacă $a=0$ și $b\\ne0$, nu are soluții.", "Dacă $a=0$ și $b=0$, orice număr este soluție.", "Soluția se verifică prin înlocuire."]);
addTopic7("u2-l3-sisteme", "algebra", "Rezolvăm sisteme de două ecuații liniare prin substituție sau reducere.", ["sistem", "pereche soluție $(x,y)$", "metoda substituției", "metoda reducerii"], ["Soluția unui sistem verifică ambele ecuații.", "La substituție, exprimăm o necunoscută dintr-o ecuație.", "La reducere, adunăm ecuații echivalente pentru a elimina o necunoscută.", "Verificarea se face în ambele ecuații."]);
addTopic7("u2-l4-probleme", "algebra", "Modelăm probleme cu text prin ecuații sau sisteme și interpretăm rezultatele numeric.", ["necunoscută", "model algebric", "condiție din enunț", "verificare contextuală"], ["Suma, diferența, produsul sau raportul din text devin relații algebrice.", "Dacă apar două mărimi necunoscute, poate fi util un sistem.", "Rezultatele negative nu sunt acceptate în contexte cu lungimi, vârste sau obiecte.", "Răspunsul final trebuie să fie propoziție, nu doar număr."]);

addTopic7("u3-l1-puncte", "data", "Reprezentăm puncte în sistemul de axe și citim coordonatele lor.", ["origine O", "axa Ox", "axa Oy", "punct $A(x,y)$"], ["Prima coordonată este abscisa.", "A doua coordonată este ordonata.", "Punctele de pe Ox au ordonata 0.", "Punctele de pe Oy au abscisa 0."], plane7);
addTopic7("u3-l2-distanta", "data", "Calculăm distanța dintre două puncte din plan folosind formula derivată din Pitagora.", ["$A(x_1,y_1)$", "$B(x_2,y_2)$", "distanța $AB$", "diferență de coordonate"], ["$AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.", "Dacă punctele au aceeași abscisă, distanța este diferența ordonatelor în modul.", "Dacă punctele au aceeași ordonată, distanța este diferența absciselor în modul.", "Distanța este mereu nenegativă."], plane7);
addTopic7("u3-l3-tabele", "data", "Organizăm date în tabele, calculăm frecvențe și interpretăm media.", ["valoare", "frecvență", "frecvență relativă", "medie"], ["Suma frecvențelor este numărul total de observații.", "Media este suma valorilor împărțită la numărul lor.", "Modul este valoarea cu frecvența cea mai mare.", "Datele trebuie citite împreună cu unitatea lor."]);

addTopic7("u4-l1-patrulater-convex", "quad", "Folosim suma unghiurilor unui patrulater convex și diagonalele care îl împart în triunghiuri.", ["patrulater convex", "diagonală", "unghi interior", "vârfuri consecutive"], ["Suma unghiurilor unui patrulater convex este 360°.", "O diagonală împarte patrulaterul în două triunghiuri.", "Laturile consecutive au un vârf comun.", "Diagonalele unesc vârfuri neconsecutive."], quad7);
addTopic7("u4-l2-paralelogram", "quad", "Aplicăm proprietățile paralelogramului pentru laturi, unghiuri, diagonale și arie.", ["paralelogram", "laturi opuse", "unghiuri opuse", "diagonale"], ["Laturile opuse sunt paralele și egale.", "Unghiurile opuse sunt egale.", "Unghiurile alăturate sunt suplementare.", "Diagonalele se înjumătățesc."], quad7);
addTopic7("u4-l3-dreptunghi", "quad", "Folosim dreptunghiul ca paralelogram cu toate unghiurile drepte.", ["dreptunghi", "lungime", "lățime", "diagonală"], ["Toate unghiurile dreptunghiului au 90°.", "Diagonalele dreptunghiului sunt egale.", "$A=L\\cdot l$.", "Diagonala se calculează cu Pitagora."], quad7);
addTopic7("u4-l4-romb", "quad", "Folosim proprietățile rombului pentru laturi, diagonale și arie.", ["romb", "diagonale perpendiculare", "latură", "înălțime"], ["Toate laturile rombului sunt egale.", "Diagonalele rombului sunt perpendiculare.", "Diagonalele bisectează unghiurile.", "$A=\\frac{d_1d_2}{2}$."], quad7);
addTopic7("u4-l5-patrat", "quad", "Folosim pătratul ca dreptunghi și romb în același timp.", ["pătrat", "latură", "diagonală", "arie"], ["Toate laturile sunt egale.", "Toate unghiurile au 90°.", "Diagonala este $d=l\\sqrt2$.", "Aria este $A=l^2$."], quad7);
addTopic7("u4-l6-trapez", "quad", "Calculăm elemente ale trapezului folosind bazele, linia mijlocie, înălțimea și aria.", ["trapez", "baze", "linie mijlocie", "trapez isoscel"], ["Linia mijlocie este $m=\\frac{B+b}{2}$.", "Aria este $A=\\frac{(B+b)h}{2}$.", "În trapezul isoscel, laturile neparalele sunt egale.", "În trapezul dreptunghic, o latură este perpendiculară pe baze."], quad7);
addTopic7("u4-l7-perimetre-arii", "quad", "Alegem formula corectă de perimetru și arie pentru patrulatere și verificăm unitățile.", ["perimetru", "arie", "bază", "înălțime"], ["Perimetrul se măsoară în unități de lungime.", "Aria se măsoară în unități pătrate.", "Înălțimea trebuie să fie perpendiculară pe bază.", "Conversiile de unități se fac înainte de calcul."], quad7);

addTopic7("u5-l1-coarde-arce", "circle", "Identificăm coarde, arce, raze și diametre într-un cerc.", ["cerc", "rază", "diametru", "coardă", "arc"], ["Diametrul este de două ori raza.", "Coarda unește două puncte de pe cerc.", "Diametrul este cea mai lungă coardă.", "Arcele se măsoară în grade."], circle7);
addTopic7("u5-l2-unghi-inscris", "circle", "Legăm unghiul înscris de arcul pe care îl subîntinde.", ["unghi înscris", "arc subîntins", "semicerc", "diametru"], ["Măsura unghiului înscris este jumătate din măsura arcului subîntins.", "Unghiurile înscrise care subîntind același arc sunt egale.", "Unghiul înscris într-un semicerc este drept.", "Arcul este dublul unghiului înscris."], circle7);
addTopic7("u5-l3-tangente", "circle", "Folosim proprietatea tangentei la cerc și relațiile cu raza.", ["tangentă", "punct de tangență", "rază", "secantă"], ["Tangenta are un singur punct comun cu cercul.", "Raza dusă la punctul de tangență este perpendiculară pe tangentă.", "Din același punct exterior, tangentele la cerc sunt egale.", "Tangenta poate crea triunghiuri dreptunghice."], circle7);
addTopic7("u5-l4-poligoane-regulate", "circle", "Studiem poligoane regulate înscrise în cerc și unghiurile lor centrale.", ["poligon regulat", "înscris în cerc", "unghi la centru", "latură"], ["Un poligon regulat are toate laturile și toate unghiurile egale.", "Unghiul la centru pentru n laturi este $\\frac{360°}{n}$.", "Vârfurile unui poligon regulat înscris sunt pe cerc.", "Raza cercului leagă centrul de fiecare vârf."], circle7);
addTopic7("u5-l5-lungime-aria", "circle", "Calculăm lungimea cercului și aria discului, păstrând corect factorul $\\pi$.", ["lungimea cercului", "aria discului", "raza", "diametrul"], ["$L=2\\pi r$.", "$L=\\pi d$.", "$A=\\pi r^2$.", "Dacă se dă diametrul, raza este $r=\\frac d2$."], circle7);

addTopic7("u6-l1-segmente-proportionale", "similarity", "Lucrăm cu segmente proporționale și rapoarte de lungimi.", ["segment", "raport", "proporție", "segmente corespondente"], ["Segmentele proporționale au rapoarte egale.", "Produsele în cruce sunt egale într-o proporție.", "Lungimile trebuie să fie în aceeași unitate.", "Raportul se simplifică asemenea unei fracții."], thales7);
addTopic7("u6-l2-thales", "similarity", "Aplicăm teorema lui Thales în triunghiuri cu drepte paralele.", ["teorema lui Thales", "paralelă", "segmente determinate", "laturi ale triunghiului"], ["Dacă $DE\\parallel BC$, atunci segmentele de pe laturi sunt proporționale.", "$\\frac{AD}{DB}=\\frac{AE}{EC}$ în configurația standard.", "Se pot folosi și rapoarte cu laturile întregi.", "Paralelismul este condiția esențială."], thales7);
addTopic7("u6-l3-triunghiuri-asemenea", "similarity", "Recunoaștem triunghiuri asemenea și folosim raportul de asemănare.", ["triunghiuri asemenea", "raport de asemănare", "laturi corespondente", "unghiuri corespondente"], ["Triunghiurile asemenea au unghiuri corespondente egale.", "Laturile corespondente sunt proporționale.", "Perimetrele sunt în același raport ca laturile.", "Ariile sunt în raportul pătratului raportului de asemănare."], thales7);
addTopic7("u6-l4-criterii", "similarity", "Aplicăm criteriile de asemănare pentru a demonstra relații în triunghiuri.", ["criteriul UU", "criteriul LUL", "criteriul LLL", "corespondență"], ["UU: două unghiuri corespondente egale.", "LUL: două laturi proporționale și unghiul cuprins egal.", "LLL: toate laturile corespondente proporționale.", "Ordinea vârfurilor indică laturile corespondente."], thales7);

addTopic7("u7-l1-inaltime", "metric", "Aplicăm teorema înălțimii în triunghiul dreptunghic.", ["înălțime pe ipotenuză", "proiecții pe ipotenuză", "ipotenuză", "triunghi dreptunghic"], ["Dacă înălțimea pe ipotenuză este h, iar proiecțiile sunt p și q, atunci $h^2=pq$.", "Înălțimea pe ipotenuză creează două triunghiuri dreptunghice mai mici.", "Toate lungimile trebuie exprimate în aceeași unitate.", "Rezultatul h este pozitiv."], rightTriangle7);
addTopic7("u7-l2-cateta", "metric", "Aplicăm teorema catetei pentru catete și proiecțiile lor pe ipotenuză.", ["catetă", "ipotenuză", "proiecție", "teorema catetei"], ["Pentru cateta a și proiecția p: $a^2=c\\cdot p$.", "Pentru cateta b și proiecția q: $b^2=c\\cdot q$.", "Proiecțiile p și q au suma egală cu ipotenuza.", "Fiecare catetă se leagă de propria proiecție."], rightTriangle7);
addTopic7("u7-l3-pitagora", "metric", "Aplicăm teorema lui Pitagora și reciproca ei.", ["catete", "ipotenuză", "triunghi dreptunghic", "reciproca teoremei"], ["$c^2=a^2+b^2$.", "Dacă $a^2+b^2=c^2$, triunghiul este dreptunghic.", "Ipotenuza este cea mai mare latură.", "Triplete utile: 3-4-5, 5-12-13, 8-15-17."], rightTriangle7);
addTopic7("u7-l4-trigonometrie", "metric", "Folosim sinus, cosinus și tangentă în triunghiul dreptunghic.", ["$\\sin A$", "$\\cos A$", "$\\tan A$", "catetă opusă și catetă alăturată"], ["$\\sin A=\\frac{\\text{cateta opusă}}{\\text{ipotenuză}}$.", "$\\cos A=\\frac{\\text{cateta alăturată}}{\\text{ipotenuză}}$.", "$\\tan A=\\frac{\\text{cateta opusă}}{\\text{cateta alăturată}}$.", "Raportul depinde de unghiul ales."], rightTriangle7);
addTopic7("u7-l5-rezolvare-triunghi", "metric", "Rezolvăm triunghiuri dreptunghice alegând între Pitagora, relații metrice și trigonometrie.", ["rezolvarea triunghiului", "date suficiente", "unghi ascuțit", "latură necunoscută"], ["Cu două laturi se poate folosi Pitagora.", "Cu un unghi și o latură se pot folosi rapoarte trigonometrice.", "Suma unghiurilor ascuțite este 90°.", "Răspunsurile se verifică printr-o relație independentă."], rightTriangle7);

const recapTopics7 = {
  "u1-recap": {
    summary: "Unitatea despre numere reale fixează radicalii, operațiile cu radicali, puterile, mediile și ecuația $x^2=a$.",
    keys: ["$\\sqrt{ab}=\\sqrt a\\sqrt b$", "$\\sqrt{a^2}=|a|$", "$a^{-n}=\\frac1{a^n}$ pentru $a\\ne0$", "Dacă $a>0$, $x^2=a$ are soluțiile $\\pm\\sqrt a$."],
    mistakes: ["uitarea soluției negative la $x^2=a$", "adunarea radicalilor neasemenea", "raționalizarea doar a numitorului", "clasificarea unui radical extras exact ca irațional"],
    problem: {label:"tip Evaluare Națională", given:"$A=\\sqrt{72}-\\sqrt{18}+\\frac{6}{\\sqrt2}$", ask:"forma simplificată", solve:"$\\sqrt{72}=6\\sqrt2$, $\\sqrt{18}=3\\sqrt2$, iar $\\frac{6}{\\sqrt2}=3\\sqrt2$. Deci $A=6\\sqrt2-3\\sqrt2+3\\sqrt2=6\\sqrt2$.", answer:"$6\\sqrt2$"},
    exercises: ["Simplificați $\\sqrt{98}-\\sqrt{50}$.", "Raționalizați $\\frac{4}{\\sqrt7}$.", "Rezolvați $x^2=27$.", "Calculați media geometrică a numerelor 8 și 18.", "Clasificați $-3$, $\\frac25$, $\\sqrt{12}$."]
  },
  "u2-recap": {
    summary: "Unitatea consolidează transformările echivalente, ecuațiile, sistemele și modelarea problemelor cu text.",
    keys: ["$ax+b=0$ are soluția $x=-\\frac ba$ dacă $a\\ne0$.", "Soluția unui sistem este o pereche ordonată.", "Identitatea este adevărată pentru toate valorile admise.", "Problemele cu text se verifică în context."],
    mistakes: ["schimbarea semnului greșit la trecerea termenilor", "verificarea unei singure ecuații din sistem", "alegerea unei necunoscute fără unitate sau sens", "acceptarea unui rezultat imposibil în context"],
    problem: genericByUnit7.algebra.examples[2],
    exercises: ["Rezolvați $4x-7=21$.", "Verificați identitatea $2(x+3)=2x+6$.", "Rezolvați sistemul $x+y=9$, $x-y=1$.", "Modelați o problemă cu vârste.", "Verificați dacă $x=2$, $y=5$ satisface un sistem propus."]
  },
  "u3-recap": {
    summary: "Unitatea despre date leagă coordonatele, distanța dintre puncte și interpretarea tabelelor statistice.",
    keys: ["Punctul se scrie $A(x,y)$.", "$AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.", "Suma frecvențelor este totalul observațiilor.", "Media se calculează din suma valorilor împărțită la numărul lor."],
    mistakes: ["inversarea abscisei cu ordonata", "omiterea pătratelor în formula distanței", "calcularea mediei fără frecvențe", "interpretarea graficului fără scară"],
    problem: genericByUnit7.data.examples[1],
    exercises: ["Reprezentați $A(-1,2)$.", "Calculați distanța dintre $A(2,1)$ și $B(5,5)$.", "Aflați media valorilor 4, 6, 6, 8.", "Determinați modul unui set de date.", "Formulați o concluzie dintr-un tabel de frecvențe."]
  },
  "u4-recap": {
    summary: "Unitatea despre patrulatere fixează proprietăți, unghiuri, diagonale, perimetre, arii și probleme compuse.",
    keys: ["Suma unghiurilor unui patrulater este 360°.", "Paralelogramul are diagonalele care se înjumătățesc.", "Dreptunghiul are diagonalele egale.", "$A_{trapez}=\\frac{(B+b)h}{2}$."],
    mistakes: ["folosirea înălțimii oblice la arie", "confundarea rombului cu pătratul", "aplicarea diagonalei $l\\sqrt2$ la orice patrulater", "uitarea conversiilor de unități"],
    problem: genericByUnit7.quad.examples[2],
    exercises: ["Aflați al patrulea unghi al unui patrulater.", "Calculați aria unui romb cu diagonalele 10 cm și 12 cm.", "Aflați aria unui trapez cu bazele 8 cm și 14 cm, înălțimea 5 cm.", "Calculați diagonala unui dreptunghi 9 cm pe 12 cm.", "Comparați perimetrele unui pătrat și ale unui dreptunghi cu aceeași arie."]
  },
  "u5-recap": {
    summary: "Unitatea despre cerc separă clar coarda, arcul, unghiul înscris, tangenta, lungimea cercului și aria discului.",
    keys: ["$d=2r$.", "Unghiul înscris este jumătate din arc.", "Tangenta este perpendiculară pe rază în punctul de tangență.", "$L=2\\pi r$, $A=\\pi r^2$."],
    mistakes: ["confundarea arcului cu lungimea cercului", "folosirea diametrului în locul razei la arie", "uitarea perpendicularității tangentei", "dublarea greșită a unghiului înscris"],
    problem: genericByUnit7.circle.examples[2],
    exercises: ["Aflați unghiul înscris pentru arc de 100°.", "Calculați lungimea cercului cu diametrul 18 cm.", "Calculați aria discului cu raza 4 cm.", "Identificați raza perpendiculară pe tangentă.", "Rezolvați o problemă cu poligon regulat înscris."]
  },
  "u6-recap": {
    summary: "Unitatea despre proporționalitate geometrică fixează Thales, asemănarea și rapoartele de perimetre și arii.",
    keys: ["În proporție, produsele în cruce sunt egale.", "Thales cere paralelism.", "Triunghiurile asemenea au laturi corespondente proporționale.", "Raportul ariilor este pătratul raportului de asemănare."],
    mistakes: ["inversarea segmentelor în raport", "aplicarea lui Thales fără paralelism", "confundarea raportului laturilor cu raportul ariilor", "nepăstrarea corespondenței vârfurilor"],
    problem: genericByUnit7.similarity.examples[2],
    exercises: ["Rezolvați $\\frac{x}{8}=\\frac34$.", "Aplicați Thales pentru a afla un segment.", "Demonstrați asemănarea prin criteriul UU.", "Aflați un perimetru folosind raportul 2:5.", "Aflați raportul ariilor pentru raportul laturilor 4:7."]
  },
  "u7-recap": {
    summary: "Unitatea despre triunghiul dreptunghic conectează relațiile metrice, Pitagora și trigonometria.",
    keys: ["$h^2=pq$.", "$a^2=cp$ și $b^2=cq$.", "$c^2=a^2+b^2$.", "$\\sin A=\\frac{\\text{cateta opusă}}{\\text{ipotenuză}}$."],
    mistakes: ["alegerea greșită a ipotenuzei", "amestecarea proiecțiilor la teorema catetei", "folosirea catetei alăturate greșite", "rotunjirea prea devreme"],
    problem: genericByUnit7.metric.examples[2],
    exercises: ["Calculați ipotenuza pentru catete 5 cm și 12 cm.", "Aflați o catetă dacă ipotenuza este 17 cm și cealaltă catetă 8 cm.", "Aplicați $h^2=pq$ pentru p=5 cm și q=20 cm.", "Calculați $\\sin A$ într-un triunghi 6-8-10.", "Rezolvați o problemă aplicativă cu scară sau rampă."]
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
    }
  ]
};
