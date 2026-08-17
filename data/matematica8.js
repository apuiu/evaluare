// ============================================================
//  MATEMATICĂ - CLASA A 8-A
//  Conform manualului local și programei OMEN 3393/2017
//  Formule: KaTeX ($...$ și $$...$$)
// ============================================================

function m8List(items) {
  return items.map(function(item) { return '<li>' + item + '</li>'; }).join('');
}

function m8Solved(title, data, ask, solution, answer, check) {
  return `
    <div class="rezolvat">
      <div class="rezolvat-label">${title}</div>
      <p><strong>Se dă:</strong> ${data}</p>
      <p><strong>Se cere:</strong> ${ask}</p>
      <p><strong>Rezolvare:</strong> ${solution}</p>
      ${check ? '<p><strong>Verificare:</strong> ' + check + '</p>' : ''}
      <p><strong>Răspuns:</strong> ${answer}</p>
    </div>
  `;
}

function m8Lesson(spec) {
  return `
    <div class="content-block">
      <h4>Ce învățăm</h4>
      <div class="retine"><div class="retine-label">De reținut</div><p>${spec.learn}</p></div>
      <h4>Termeni și notații</h4>
      <ul>${m8List(spec.terms)}</ul>
      <h4>Formule / Proprietăți</h4>
      ${spec.table || '<ul>' + m8List(spec.formulas) + '</ul>'}
      ${spec.figure || ''}
      <h4>Cum aplicăm</h4>
      <ol>${m8List(spec.steps)}</ol>
      ${spec.solved.map(function(p, i) {
        return m8Solved('Problema ' + (i + 1) + ' - ' + p.title, p.data, p.ask, p.solution, p.answer, p.check);
      }).join('')}
      <div class="atentie"><div class="atentie-label">Tips & tricks</div><p>${spec.tips}</p></div>
      <h4>Exerciții propuse</h4>
      <ul>${m8List(spec.exercises)}</ul>
    </div>
  `;
}

function m8Recap(spec) {
  return `
    <div class="content-block">
      <h4>Formule-cheie</h4>
      <ul>${m8List(spec.formulas)}</ul>
      <div class="atentie"><div class="atentie-label">Greșeli frecvente</div><p>${spec.mistakes}</p></div>
      ${m8Solved('Problema tip Evaluare Națională', spec.en.data, spec.en.ask, spec.en.solution, spec.en.answer, spec.en.check)}
      <h4>Exerciții mixte</h4>
      <ul>${m8List(spec.exercises)}</ul>
    </div>
  `;
}

function m8PrismSvg() {
  return `
    <svg style="width:100%;max-width:520px;height:260px;display:block;margin:14px 0;" viewBox="0 0 520 260" aria-label="Prismă dreaptă">
      <polygon points="120,190 250,190 310,145 180,145" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
      <polygon points="120,80 250,80 310,35 180,35" fill="#eff6ff" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="120" y1="80" x2="120" y2="190" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="250" y1="80" x2="250" y2="190" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="310" y1="35" x2="310" y2="145" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="180" y1="35" x2="180" y2="145" stroke="#1d4ed8" stroke-width="2"/>
      <line x1="335" y1="35" x2="335" y2="145" stroke="#dc2626" stroke-width="2"/>
      <text x="342" y="94" font-size="14" fill="#dc2626">h</text>
      <text x="168" y="212" font-size="14" fill="#334155">bază</text>
    </svg>
  `;
}

function m8PyramidSvg() {
  return `
    <svg style="width:100%;max-width:520px;height:270px;display:block;margin:14px 0;" viewBox="0 0 520 270" aria-label="Piramidă regulată">
      <polygon points="135,220 310,220 380,165 205,165" fill="#fee2e2" stroke="#b91c1c" stroke-width="2"/>
      <line x1="260" y1="45" x2="135" y2="220" stroke="#b91c1c" stroke-width="2"/>
      <line x1="260" y1="45" x2="310" y2="220" stroke="#b91c1c" stroke-width="2"/>
      <line x1="260" y1="45" x2="380" y2="165" stroke="#b91c1c" stroke-width="2"/>
      <line x1="260" y1="45" x2="205" y2="165" stroke="#b91c1c" stroke-width="2"/>
      <line x1="260" y1="45" x2="260" y2="192" stroke="#2563eb" stroke-width="2" stroke-dasharray="5 5"/>
      <text x="268" y="123" font-size="14" fill="#2563eb">h</text>
      <text x="252" y="38" font-size="14" fill="#334155">V</text>
      <text x="267" y="199" font-size="14" fill="#334155">O</text>
    </svg>
  `;
}

function m8RoundSvg() {
  return `
    <svg style="width:100%;max-width:520px;height:260px;display:block;margin:14px 0;" viewBox="0 0 520 260" aria-label="Cilindru și con">
      <ellipse cx="150" cy="195" rx="70" ry="22" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
      <line x1="80" y1="75" x2="80" y2="195" stroke="#15803d" stroke-width="2"/>
      <line x1="220" y1="75" x2="220" y2="195" stroke="#15803d" stroke-width="2"/>
      <ellipse cx="150" cy="75" rx="70" ry="22" fill="#f0fdf4" stroke="#15803d" stroke-width="2"/>
      <line x1="260" y1="205" x2="370" y2="55" stroke="#7c3aed" stroke-width="2"/>
      <line x1="480" y1="205" x2="370" y2="55" stroke="#7c3aed" stroke-width="2"/>
      <ellipse cx="370" cy="205" rx="110" ry="30" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
      <line x1="370" y1="55" x2="370" y2="205" stroke="#dc2626" stroke-width="2" stroke-dasharray="5 5"/>
      <text x="125" y="140" font-size="14" fill="#15803d">cilindru</text>
      <text x="360" y="140" font-size="14" fill="#7c3aed">con</text>
    </svg>
  `;
}

function m8AxesSvg() {
  return `
    <svg style="width:100%;max-width:520px;height:250px;display:block;margin:14px 0;" viewBox="0 0 520 250" aria-label="Grafic de funcție liniară">
      <line x1="45" y1="205" x2="480" y2="205" stroke="#334155" stroke-width="2"/>
      <line x1="120" y1="230" x2="120" y2="25" stroke="#334155" stroke-width="2"/>
      <line x1="70" y1="225" x2="420" y2="50" stroke="#2563eb" stroke-width="3"/>
      <circle cx="120" cy="200" r="4" fill="#dc2626"/>
      <circle cx="260" cy="130" r="4" fill="#dc2626"/>
      <text x="486" y="209" font-size="14" fill="#334155">x</text>
      <text x="126" y="24" font-size="14" fill="#334155">y</text>
      <text x="128" y="196" font-size="13" fill="#dc2626">(0,b)</text>
      <text x="268" y="127" font-size="13" fill="#dc2626">(2,3)</text>
      <text x="320" y="88" font-size="13" fill="#2563eb">f(x)=ax+b</text>
    </svg>
  `;
}

const m8U1 = [
  {
    id: "u1-l1-multimi-proprietate",
    title: "L1: Mulțimi definite printr-o proprietate comună",
    content: m8Lesson({
      learn: "O mulțime poate fi descrisă prin enumerarea elementelor sau printr-o proprietate comună. La Evaluarea Națională, această scriere apare în exerciții cu apartenență, intersecție, reuniune și condiții pe numere întregi.",
      terms: ["$x\\in A$ înseamnă că x aparține mulțimii A.", "$A\\subset B$ înseamnă că orice element din A este și în B.", "$A\\cap B$ conține elementele comune.", "$A\\cup B$ conține elementele care aparțin cel puțin uneia dintre mulțimi.", "$A\\setminus B$ conține elementele din A care nu aparțin lui B."],
      formulas: ["$A=\\{x\\mid x$ are proprietatea $p\\}$", "$A\\cap B=\\{x\\mid x\\in A$ și $x\\in B\\}$", "$A\\cup B=\\{x\\mid x\\in A$ sau $x\\in B\\}$", "$A\\setminus B=\\{x\\mid x\\in A$ și $x\\notin B\\}$"],
      steps: ["Stabilește domeniul: N, Z, Q sau R.", "Transformă proprietatea în condiții clare.", "Enumeră elementele dacă mulțimea este finită.", "La intersecție păstrează doar elementele comune.", "La reuniune scrie fiecare element o singură dată."],
      solved: [
        { title: "enumerare", data: "$A=\\{x\\in N\\mid x\\le5\\}$", ask: "elementele mulțimii", solution: "Numerele naturale cel mult egale cu 5 sunt 0, 1, 2, 3, 4, 5.", answer: "$A=\\{0,1,2,3,4,5\\}$" },
        { title: "intersecție", data: "$A=\\{1,2,3,4,5\\}$ și $B=\\{2,4,6,8\\}$", ask: "$A\\cap B$", solution: "Elementele comune celor două mulțimi sunt 2 și 4.", answer: "$A\\cap B=\\{2,4\\}$" },
        { title: "tip EN", data: "$A=\\{x\\in Z\\mid -2\\le x<4\\}$ și B este mulțimea numerelor pare", ask: "$A\\cap B$", solution: "Elementele lui A sunt $-2,-1,0,1,2,3$. Cele pare sunt $-2,0,2$.", answer: "$A\\cap B=\\{-2,0,2\\}$" }
      ],
      tips: "Citește acoladele astfel: elementele x cu proprietatea... Domeniul este esențial; aceeași condiție poate da răspunsuri diferite în N, Z sau R.",
      exercises: ["Scrieți prin enumerare $A=\\{x\\in N\\mid 2<x\\le8\\}$.", "Determinați $A\\cap B$ pentru $A=\\{1,3,5,7,9\\}$ și $B=\\{3,6,9,12\\}$.", "Scrieți elementele mulțimii $\\{x\\in Z\\mid |x|\\le3\\}$.", "Determinați $\\{0,1,2,3,4,5\\}\\setminus\\{2,4,6\\}$.", "Problemă tip EN: câte elemente are $\\{x\\in Z\\mid -5<x\\le6$, x impar$\\}$?"]
    })
  },
  {
    id: "u1-l2-intervale",
    title: "L2: Intervale numerice și operații cu intervale",
    content: m8Lesson({
      learn: "Intervalele sunt porțiuni continue din axa numerelor. Ele sunt folosite pentru scrierea soluțiilor inecuațiilor și pentru interpretarea condițiilor de tip „între două valori”.",
      terms: ["$[a,b]$ este interval închis: ambele capete aparțin intervalului.", "$(a,b)$ este interval deschis: niciun capăt nu aparține intervalului.", "$[a,b)$ și $(a,b]$ sunt intervale semideschise.", "$(-\\infty,a]$ și $[a,+\\infty)$ sunt intervale nemărginite.", "$\\cap$ înseamnă partea comună, iar $\\cup$ înseamnă reuniunea."],
      table: `<table class="teoria-table"><thead><tr><th>Condiție</th><th>Interval</th></tr></thead><tbody><tr><td>$a\\le x\\le b$</td><td>$[a,b]$</td></tr><tr><td>$a\\lt x\\lt b$</td><td>$(a,b)$</td></tr><tr><td>$x\\ge a$</td><td>$[a,+\\infty)$</td></tr><tr><td>$x\\lt a$</td><td>$(-\\infty,a)$</td></tr></tbody></table>`,
      formulas: [],
      steps: ["Desenează axa și marchează capetele intervalului.", "Folosește punct plin pentru capăt inclus și punct gol pentru capăt care nu este inclus.", "La intersecție păstrează doar partea comună.", "La reuniune păstrează toate valorile acoperite de cel puțin un interval.", "Scrie răspunsul cu paranteze corecte."],
      solved: [
        { title: "condiție în interval", data: "$-2\\le x\\lt5$", ask: "intervalul corespunzător", solution: "Capătul $-2$ aparține intervalului deoarece semnul este $\\le$. Capătul 5 nu aparține intervalului deoarece semnul este $\\lt$.", answer: "$[-2,5)$" },
        { title: "intersecție", data: "$I=[-1,4]$ și $J=(2,6)$", ask: "$I\\cap J$", solution: "Partea comună începe imediat după 2 și se termină la 4. Numărul 2 nu este inclus, iar 4 este inclus.", answer: "$I\\cap J=(2,4]$" },
        { title: "tip EN", data: "$A=(-3,2]$ și $B=[0,5)$", ask: "$A\\cup B$ și $A\\cap B$", solution: "Reuniunea acoperă toate valorile de la $-3$ la 5, fără capete. Intersecția conține valorile comune de la 0 la 2, cu ambele capete incluse.", answer: "$A\\cup B=(-3,5)$, $A\\cap B=[0,2]$" }
      ],
      tips: "Infinitul nu este număr real, deci lângă $-\\infty$ sau $+\\infty$ se folosește mereu paranteză rotundă.",
      exercises: ["Scrieți ca interval: $3\\le x\\lt9$.", "Reprezentați pe axă $(-4,1]$.", "Calculați $[-2,6]\\cap(3,8)$.", "Calculați $(-\\infty,4]\\cup[1,7)$.", "Problemă tip EN: determinați numerele întregi din $(-3,4]$ și calculați suma lor."]
    })
  },
  {
    id: "u1-l3-inecuatii-liniare",
    title: "L3: Inecuații liniare de forma ax + b ≥ 0",
    content: m8Lesson({
      learn: "O inecuație liniară are de obicei o infinitate de soluții, scrise ca interval. Diferența importantă față de ecuații este regula semnului când împărțim la un număr negativ.",
      terms: ["Inecuația compară două expresii cu $\\lt$, $\\le$, $\\gt$, $\\ge$.", "Soluția este mulțimea numerelor care fac inecuația adevărată.", "Dacă înmulțim sau împărțim cu un număr negativ, schimbăm sensul inegalității.", "Soluțiile se reprezintă pe axă și se scriu ca interval."],
      formulas: ["$ax+b\\ge0\\Rightarrow ax\\ge-b$", "Dacă $a\\gt0$, atunci $x\\ge-\\frac{b}{a}$.", "Dacă $a\\lt0$, atunci $x\\le-\\frac{b}{a}$.", "Dacă $a=0$, inecuația se discută separat."],
      steps: ["Mută termenul liber în partea dreaptă.", "Împarte la coeficientul lui x.", "Schimbă sensul inegalității dacă împarți la un număr negativ.", "Scrie soluția ca interval.", "Verifică un număr din interval și unul din afara lui."],
      solved: [
        { title: "coeficient pozitiv", data: "$2x-6\\ge0$", ask: "soluția", solution: "$2x\\ge6$, deci $x\\ge3$.", answer: "$S=[3,+\\infty)$" },
        { title: "coeficient negativ", data: "$-3x+9\\gt0$", ask: "soluția", solution: "$-3x\\gt-9$. Împărțim la $-3$ și schimbăm sensul: $x\\lt3$.", answer: "$S=(-\\infty,3)$" },
        { title: "tip EN", data: "Un abonament costă 20 lei plus 3 lei pe zi. Bugetul este cel mult 50 lei.", ask: "numărul maxim de zile", solution: "Modelăm $20+3x\\le50$, deci $3x\\le30$, $x\\le10$. Cum x este număr natural, maximul este 10.", answer: "cel mult 10 zile" }
      ],
      tips: "Scrie explicit pasul în care împarți la un număr negativ. Acolo se pierde cel mai des semnul corect.",
      exercises: ["Rezolvați $5x-10\\le0$.", "Rezolvați $-2x+8\\ge0$.", "Scrieți ca interval soluția inecuației $4x+1\\gt9$.", "Un taxi costă 8 lei pornirea și 2,5 lei/km. Pentru cel mult 33 lei, câți kilometri se pot parcurge?", "Problemă tip EN: determinați cel mai mare număr întreg care verifică $3x-7\\lt11$."]
    })
  }
];

const m8U2 = [
  {
    id: "u2-l1-operatii-litere",
    title: "L1: Operații cu expresii algebrice",
    content: m8Lesson({
      learn: "Expresiile algebrice permit calculul cu litere. Pentru examen contează reducerea termenilor asemenea, folosirea puterilor și înlocuirea corectă a valorilor.",
      terms: ["Monomul este un produs între un număr și litere cu puteri.", "Coeficientul este partea numerică.", "Partea literală conține literele și exponenții.", "Termenii asemenea au aceeași parte literală.", "Polinomul este o sumă de monoame."],
      formulas: ["$ax^m+bx^m=(a+b)x^m$", "$a^m\\cdot a^n=a^{m+n}$", "$(a^m)^n=a^{mn}$", "$\\frac{a^m}{a^n}=a^{m-n}$ pentru $a\\ne0$"],
      steps: ["Identifică termenii asemenea.", "Calculează doar coeficienții termenilor asemenea.", "La înmulțire, adună exponenții aceleiași baze.", "La împărțire, scade exponenții.", "Respectă ordinea operațiilor."],
      solved: [
        { title: "reducere", data: "$7x-3y+2x+5y$", ask: "forma redusă", solution: "$(7x+2x)+(-3y+5y)=9x+2y$.", answer: "$9x+2y$" },
        { title: "înmulțire", data: "$3x^2y\\cdot4xy^3$", ask: "produsul", solution: "Coeficienții dau 12, iar puterile se adună: $x^{2+1}y^{1+3}$.", answer: "$12x^3y^4$" },
        { title: "tip EN", data: "$E=2(x+3)-4(x-1)+5x$", ask: "valoarea pentru $x=-2$", solution: "$E=2x+6-4x+4+5x=3x+10$. Pentru $x=-2$, $E=4$.", answer: "$4$" }
      ],
      tips: "$x^2$ și x nu sunt termeni asemenea. Nu le aduna chiar dacă ambele conțin litera x.",
      exercises: ["Reduceți $5a-2b+3a+7b$.", "Calculați $2x^3\\cdot5x^2$.", "Simplificați $3(2x-1)-2(x+4)$.", "Calculați $E=x^2-2x+1$ pentru $x=-3$.", "Problemă tip EN: arătați că $2(x-1)+3(x+2)-5x$ este constant."]
    })
  },
  {
    id: "u2-l2-formule-prescurtate",
    title: "L2: Formule de calcul prescurtat",
    content: m8Lesson({
      learn: "Formulele de calcul prescurtat transformă calcule lungi în pași rapizi. Ele sunt folosite atât pentru dezvoltare, cât și pentru factorizare.",
      terms: ["Pătratul sumei are trei termeni.", "Pătratul diferenței are termenul din mijloc negativ.", "Diferența de pătrate devine produsul sumei cu diferența.", "Dezvoltarea scoate parantezele.", "Factorizarea transformă suma în produs."],
      formulas: ["$(a+b)^2=a^2+2ab+b^2$", "$(a-b)^2=a^2-2ab+b^2$", "$(a-b)(a+b)=a^2-b^2$", "$(x+a)^2$ nu este egal cu $x^2+a^2$."],
      steps: ["Identifică tipul expresiei.", "Alege formula potrivită.", "Calculează termenul dublu $2ab$.", "Verifică semnul termenului din mijloc.", "Redu termenii asemenea."],
      solved: [
        { title: "pătratul sumei", data: "$(x+4)^2$", ask: "dezvoltarea", solution: "$(x+4)^2=x^2+2\\cdot x\\cdot4+16$.", answer: "$x^2+8x+16$" },
        { title: "diferență de pătrate", data: "$(3x-2)(3x+2)$", ask: "produsul", solution: "Aplicăm $(a-b)(a+b)=a^2-b^2$, cu $a=3x$, $b=2$.", answer: "$9x^2-4$" },
        { title: "tip EN", data: "$E=(x-5)^2-(x+5)(x-5)$", ask: "forma redusă", solution: "$E=x^2-10x+25-(x^2-25)=-10x+50$.", answer: "$50-10x$" }
      ],
      tips: "La $(a+b)^2$, termenul $2ab$ este obligatoriu. Dacă ai doar două pătrate, formula este greșită.",
      exercises: ["Dezvoltați $(x-7)^2$.", "Calculați $(2x+3)^2$.", "Reduceți $(x+2)^2-(x-2)^2$.", "Arătați că $(n+1)^2-n^2=2n+1$.", "Problemă tip EN: determinați x dacă $(x+3)^2-x^2=39$."]
    })
  },
  {
    id: "u2-l3-descompuneri",
    title: "L3: Descompuneri în factori",
    content: m8Lesson({
      learn: "Descompunerea în factori transformă o expresie într-un produs. Este necesară la simplificarea fracțiilor algebrice și la rezolvarea ecuațiilor.",
      terms: ["Factorul comun apare în fiecare termen.", "Factorizarea înseamnă scrierea ca produs.", "Gruparea se folosește la expresii cu patru termeni.", "Formulele prescurtate pot fi folosite invers.", "Verificarea se face prin înmulțire."],
      formulas: ["$ab+ac=a(b+c)$", "$a^2-b^2=(a-b)(a+b)$", "$a^2+2ab+b^2=(a+b)^2$", "$a^2-2ab+b^2=(a-b)^2$"],
      steps: ["Caută factor comun numeric și literal.", "Verifică dacă ai diferență de pătrate.", "La trei termeni, verifică pătrat perfect.", "La patru termeni, încearcă gruparea.", "Înmulțește rezultatul pentru control."],
      solved: [
        { title: "factor comun", data: "$6x^2-9x$", ask: "descompunerea", solution: "Factorul comun este $3x$.", answer: "$3x(2x-3)$" },
        { title: "formulă", data: "$x^2-25$", ask: "descompunerea", solution: "$x^2-25=x^2-5^2=(x-5)(x+5)$.", answer: "$(x-5)(x+5)$" },
        { title: "tip EN", data: "$E=x^2-6x+9$", ask: "factorizarea și valoarea pentru $x=3$", solution: "$E=(x-3)^2$. Pentru $x=3$, $E=0$.", answer: "$(x-3)^2$, valoarea 0" }
      ],
      tips: "Scoate factorul comun înainte de orice formulă. De multe ori expresia se simplifică imediat.",
      exercises: ["Factorizați $4x+8$.", "Factorizați $x^2-49$.", "Factorizați $x^2+10x+25$.", "Descompuneți $2x^2-8x$.", "Problemă tip EN: rezolvați $(x-2)(x+2)=0$."]
    })
  },
  {
    id: "u2-l4-fractii-algebrice",
    title: "L4: Fracții algebrice",
    content: m8Lesson({
      learn: "Fracțiile algebrice conțin litere la numărător sau numitor. Înainte de calcul stabilim valorile interzise și simplificăm numai factori, nu termeni adunați.",
      terms: ["Fracție algebrică: expresie de forma $\\frac{A(x)}{B(x)}$.", "Condiție de existență: numitorul este diferit de 0.", "Simplificarea se face după factorizare.", "Numitorul comun se folosește la adunare și scădere.", "Valorile interzise rămân interzise și după simplificare."],
      formulas: ["$\\frac{A}{B}$ există pentru $B\\ne0$.", "$\\frac{A}{B}\\cdot\\frac{C}{D}=\\frac{AC}{BD}$.", "$\\frac{A}{B}:\\frac{C}{D}=\\frac{A}{B}\\cdot\\frac{D}{C}$.", "$\\frac{A}{B}+\\frac{C}{B}=\\frac{A+C}{B}$."],
      steps: ["Scrie condițiile de existență.", "Factorizează numărătorul și numitorul.", "Simplifică factorii comuni.", "La adunare, adu la numitor comun.", "Verifică valorile interzise la final."],
      solved: [
        { title: "condiție", data: "$\\frac{x+1}{x-3}$", ask: "condiția de existență", solution: "Numitorul nu poate fi zero: $x-3\\ne0$.", answer: "$x\\ne3$" },
        { title: "simplificare", data: "$\\frac{x^2-9}{x-3}$", ask: "forma simplificată", solution: "$x^2-9=(x-3)(x+3)$, cu $x\\ne3$.", answer: "$x+3$, cu $x\\ne3$" },
        { title: "tip EN", data: "$E=\\frac{x^2-4}{x+2}$", ask: "$E(1)$ și condiția", solution: "Condiția este $x\\ne-2$. Avem $x^2-4=(x-2)(x+2)$, deci $E=x-2$. Pentru $x=1$, $E=-1$.", answer: "$E(1)=-1$, cu $x\\ne-2$" }
      ],
      tips: "Nu simplifica peste semnul plus sau minus. Transformă mai întâi expresia în produs.",
      exercises: ["Stabiliți condiția pentru $\\frac{2x}{x+5}$.", "Simplificați $\\frac{x^2-16}{x-4}$.", "Calculați $\\frac{1}{x}+\\frac{2}{x}$.", "Determinați valorile interzise pentru $\\frac{x+1}{x^2-9}$.", "Problemă tip EN: simplificați $\\frac{x^2+6x+9}{x+3}$ și calculați valoarea pentru $x=1$."]
    })
  },
  {
    id: "u2-l5-ecuatii-gradul-doi",
    title: "L5: Ecuația de forma ax² + bx + c = 0",
    content: m8Lesson({
      learn: "Ecuațiile de gradul al doilea se rezolvă eficient prin factorizare sau cu discriminantul. Pentru clasa a VIII-a este important să alegi metoda mai scurtă și să verifici soluțiile.",
      terms: ["Ecuație de gradul al doilea: $ax^2+bx+c=0$, cu $a\\ne0$.", "Soluțiile se mai numesc rădăcini.", "Produs nul: dacă $AB=0$, atunci $A=0$ sau $B=0$.", "Discriminant: $\\Delta=b^2-4ac$.", "Dacă problema are context, soluțiile trebuie să aibă sens în context."],
      formulas: ["$\\Delta=b^2-4ac$", "Dacă $\\Delta\\gt0$, $x_{1,2}=\\frac{-b\\pm\\sqrt{\\Delta}}{2a}$.", "Dacă $\\Delta=0$, $x=\\frac{-b}{2a}$.", "Dacă $\\Delta\\lt0$, nu există soluții reale."],
      steps: ["Adu ecuația la forma standard.", "Încearcă factorizarea dacă termenii sunt simpli.", "Dacă nu se factorizează ușor, calculează discriminantul.", "Scrie soluțiile.", "Verifică prin înlocuire."],
      solved: [
        { title: "produs nul", data: "$(x-2)(x+5)=0$", ask: "soluțiile", solution: "$x-2=0$ sau $x+5=0$.", answer: "$x=2$ sau $x=-5$" },
        { title: "factorizare", data: "$x^2-7x+10=0$", ask: "soluțiile", solution: "$x^2-7x+10=(x-5)(x-2)$.", answer: "$x=5$ sau $x=2$" },
        { title: "tip EN", data: "$x^2-4x+3=0$", ask: "suma soluțiilor", solution: "$(x-1)(x-3)=0$, deci soluțiile sunt 1 și 3. Suma este 4.", answer: "$4$" }
      ],
      tips: "Pentru ecuațiile cu numere mici, caută două numere cu produs c și sumă opusul coeficientului lui x.",
      exercises: ["Rezolvați $(x-4)(x+1)=0$.", "Rezolvați $x^2-9=0$.", "Rezolvați $x^2-5x+6=0$.", "Calculați discriminantul pentru $x^2+2x+1=0$.", "Problemă tip EN: determinați produsul soluțiilor ecuației $x^2-8x+12=0$."]
    })
  }
];

const m8U3 = [
  {
    id: "u3-l1-func" + "tii-finite",
    title: "L1: Funcții definite pe mulțimi finite",
    content: m8Lesson({
      learn: "O funcție asociază fiecărui element din domeniu exact o valoare. Pentru mulțimi finite, funcția se descrie ușor prin tabel, diagramă sau perechi ordonate.",
      terms: ["Domeniul este mulțimea valorilor de intrare.", "Codomeniul este mulțimea în care se află valorile de ieșire.", "$f(x)$ este valoarea funcției în x.", "Graficul finit este mulțimea punctelor $(x,f(x))$.", "Aceeași intrare nu poate avea două ieșiri diferite."],
      formulas: ["$f:A\\to B$ înseamnă funcție de la A la B.", "$G_f=\\{(x,f(x))\\mid x\\in A\\}$.", "Dacă același x are două imagini, relația nu este funcție."],
      steps: ["Verifică dacă fiecare element din domeniu are o singură imagine.", "Completează tabelul de valori.", "Scrie perechile ordonate.", "Reprezintă punctele dacă se cere graficul.", "Citește valorile numai din domeniul dat."],
      solved: [
        { title: "tabel", data: "$A=\\{1,2,3\\}$, $f(x)=2x+1$", ask: "valorile funcției", solution: "$f(1)=3$, $f(2)=5$, $f(3)=7$.", answer: "3, 5, 7" },
        { title: "verificare", data: "punctele $(1,4),(2,5),(3,6)$", ask: "dacă relația este funcție", solution: "Fiecare valoare x apare o singură dată.", answer: "relația este funcție" },
        { title: "tip EN", data: "$f:\\{-1,0,2\\}\\to R$, $f(x)=x^2-1$", ask: "suma valorilor funcției", solution: "$f(-1)=0$, $f(0)=-1$, $f(2)=3$. Suma este $0-1+3=2$.", answer: "$2$" }
      ],
      tips: "Două intrări pot avea aceeași ieșire. Problema apare doar când aceeași intrare are două ieșiri diferite.",
      exercises: ["Calculați valorile lui $f(x)=3x-2$ pentru $x\\in\\{0,1,4\\}$.", "Stabiliți dacă relația $(1,2),(1,3),(2,4)$ este funcție.", "Scrieți graficul funcției $f:\\{2,3\\}\\to R$, $f(x)=x+5$.", "Determinați x dacă $f(x)=7$ și $f(x)=2x+1$.", "Problemă tip EN: pentru $f(x)=x^2+2x$, $x\\in\\{-2,-1,0,1\\}$, determinați valoarea maximă."]
    })
  },
  {
    id: "u3-l2-functia-liniara",
    title: "L2: Funcția liniară f(x)=ax+b",
    content: m8Lesson({
      learn: "Funcția $f(x)=ax+b$ are grafic o dreaptă. Ea este folosită pentru interpretarea dependențelor liniare, citirea graficelor și calculul intersecțiilor cu axele.",
      terms: ["$a$ este panta dreptei.", "$b$ este ordonata la origine.", "Graficul este o dreaptă.", "Intersecția cu Ox se obține din $f(x)=0$.", "Intersecția cu Oy este punctul $(0,b)$."],
      formulas: ["$f(x)=ax+b$", "Punct pe grafic: $y=f(x)$.", "Intersecție cu Oy: $(0,b)$.", "Intersecție cu Ox: rezolvăm $ax+b=0$.", "Dacă $a\\gt0$, funcția este crescătoare; dacă $a\\lt0$, descrescătoare."],
      figure: m8AxesSvg(),
      steps: ["Calculează două valori ale funcției.", "Scrie cele două puncte obținute.", "Trasează dreapta prin cele două puncte.", "Pentru Oy pune $x=0$.", "Pentru Ox rezolvă $f(x)=0$."],
      solved: [
        { title: "valori", data: "$f(x)=2x+1$", ask: "$f(0)$ și $f(3)$", solution: "$f(0)=1$, $f(3)=7$.", answer: "$1$ și $7$" },
        { title: "intersecție cu Ox", data: "$f(x)=3x-6$", ask: "intersecția cu Ox", solution: "Punem $f(x)=0$: $3x-6=0$, deci $x=2$.", answer: "$(2,0)$" },
        { title: "tip EN", data: "punctul $A(-2,7)$ este pe graficul $f(x)=ax+3$", ask: "valoarea lui a", solution: "Înlocuim: $7=-2a+3$, deci $4=-2a$, $a=-2$.", answer: "$a=-2$" }
      ],
      tips: "Pentru desen sunt suficiente două puncte corecte. Alege valori ale lui x care dau calcule simple.",
      exercises: ["Calculați $f(5)$ pentru $f(x)=x-4$.", "Determinați intersecția cu Oy pentru $f(x)=-2x+6$.", "Aflați x pentru care $f(x)=0$, unde $f(x)=4x+8$.", "Verificați dacă $A(2,5)$ aparține graficului $f(x)=3x-1$.", "Problemă tip EN: dreapta $f(x)=mx+2$ trece prin $B(3,11)$. Determinați m."]
    })
  },
  {
    id: "u3-l3-statistica",
    title: "L3: Elemente de statistică",
    content: m8Lesson({
      learn: "Statistica organizează datele și ajută la formularea unor concluzii. Pentru examen contează media, mediana, modul, amplitudinea și interpretarea tabelelor.",
      terms: ["Media aritmetică este suma valorilor împărțită la numărul lor.", "Mediana este valoarea din mijloc după ordonare.", "Modul este valoarea care apare cel mai des.", "Amplitudinea este diferența dintre maxim și minim.", "Frecvența arată de câte ori apare o valoare."],
      formulas: ["$M=\\frac{x_1+x_2+\\dots+x_n}{n}$", "$M_p=\\frac{x_1f_1+x_2f_2+\\dots+x_kf_k}{f_1+f_2+\\dots+f_k}$", "Amplitudine $=x_{max}-x_{min}$"],
      steps: ["Ordonează datele când calculezi mediana.", "Calculează suma și numărul de date.", "Pentru tabel, înmulțește fiecare valoare cu frecvența ei.", "Identifică modul prin frecvența maximă.", "Scrie concluzia în context."],
      solved: [
        { title: "medie", data: "notele 7, 8, 10", ask: "media", solution: "$M=\\frac{7+8+10}{3}=\\frac{25}{3}$.", answer: "$\\frac{25}{3}$" },
        { title: "mediană", data: "datele 4, 9, 6, 6, 10", ask: "mediana", solution: "Ordonăm: 4, 6, 6, 9, 10. Valoarea din mijloc este 6.", answer: "$6$" },
        { title: "tip EN", data: "5 elevi au nota 8, 3 elevi au nota 9 și 2 elevi au nota 10", ask: "media", solution: "$M=\\frac{5\\cdot8+3\\cdot9+2\\cdot10}{10}=\\frac{87}{10}=8,7$.", answer: "$8,7$" }
      ],
      tips: "Mediana cere date ordonate. Media nu cere ordonare, dar cere să numeri toate valorile sau toate frecvențele.",
      exercises: ["Calculați media numerelor 3, 5, 8, 8.", "Determinați mediana setului 10, 7, 8, 6, 9.", "Aflați modul pentru 2, 4, 4, 5, 5, 5, 8.", "Un tabel are valorile 6, 7, 8 cu frecvențe 2, 3, 5. Calculați media.", "Problemă tip EN: după adăugarea unei note de 10 la notele 7, 8, 8, calculați noua medie."]
    })
  }
];

function m8SpatialLesson(spec) {
  return m8Lesson({
    learn: spec.learn,
    terms: spec.terms,
    formulas: spec.formulas,
    figure: spec.figure || '',
    steps: spec.steps,
    solved: spec.solved,
    tips: spec.tips,
    exercises: spec.exercises
  });
}

const m8U4 = [
  {
    id: "u4-l1-puncte-drepte-plane",
    title: "L1: Puncte, drepte, plane",
    content: m8SpatialLesson({
      learn: "În geometria în spațiu lucrăm cu puncte, drepte și plane. Scopul este să descriem corect pozițiile relative înainte de orice calcul.",
      terms: ["Trei puncte necoliniare determină un plan.", "Două drepte pot fi concurente, paralele sau necoplanare.", "O dreaptă poate fi inclusă într-un plan, paralelă cu el sau secantă la el.", "Notații: $A\\in d$, $d\\subset\\alpha$, $d\\cap\\alpha=\\{A\\}$."],
      formulas: ["Dacă două puncte ale unei drepte aparțin unui plan, atunci dreapta este inclusă în plan.", "Două drepte concurente determină un plan.", "Două drepte paralele determină un plan.", "Dreptele necoplanare nu sunt în același plan."],
      steps: ["Identifică punctele și planele date.", "Verifică dacă dreptele au punct comun.", "Verifică dacă pot fi în același plan.", "Scrie relația geometrică folosind notația corectă.", "Nu te baza doar pe perspectiva desenului."],
      solved: [
        { title: "plan determinat", data: "punctele A, B, C sunt necoliniare", ask: "planul determinat", solution: "Trei puncte necoliniare determină un singur plan.", answer: "$(ABC)$" },
        { title: "dreaptă în plan", data: "$A,B\\in\\alpha$", ask: "poziția dreptei AB față de plan", solution: "Dreapta AB are două puncte în planul $\\alpha$.", answer: "$AB\\subset\\alpha$" },
        { title: "tip EN", data: "cubul $ABCDA'B'C'D'$", ask: "poziția dreptelor AB și $CC'$", solution: "AB este muchie a bazei, iar $CC'$ este muchie verticală. Nu se intersectează și nu sunt paralele.", answer: "drepte necoplanare" }
      ],
      tips: "În spațiu, două drepte care nu se întâlnesc în desen nu sunt automat paralele. Pot fi necoplanare.",
      exercises: ["Numiți planul determinat de A, B, C necoliniare.", "În cub, precizați poziția dreptelor AB și CD.", "În cub, precizați poziția dreptelor AB și $A'B'$.", "Dați exemplu de două drepte necoplanare într-un cub.", "Problemă tip EN: într-o prismă, stabiliți dacă o muchie laterală este inclusă în planul bazei."]
    })
  },
  {
    id: "u4-l2-piramida",
    title: "L2: Piramida, piramida regulată, tetraedrul regulat",
    content: m8SpatialLesson({
      learn: "Piramida are o bază poligonală și fețe laterale triunghiulare. Piramida regulată are baza poligon regulat, iar înălțimea cade în centrul bazei.",
      terms: ["Vârful piramidei este punctul din afara planului bazei.", "Muchiile laterale unesc vârful cu vârfurile bazei.", "Apotema piramidei regulate este înălțimea unei fețe laterale.", "Tetraedrul regulat are toate fețele triunghiuri echilaterale congruente."],
      formulas: ["În piramida regulată, muchiile laterale sunt congruente.", "Înălțimea cade în centrul bazei.", "Pentru calcule se folosesc triunghiuri dreptunghice formate cu înălțimea.", "La baza pătrat, distanța de la centru la vârf este jumătate din diagonala pătratului."],
      figure: m8PyramidSvg(),
      steps: ["Identifică baza și vârful.", "Marchează centrul bazei.", "Construiește înălțimea.", "Alege triunghiul dreptunghic potrivit.", "Aplică Pitagora."],
      solved: [
        { title: "număr de fețe", data: "piramidă patrulateră", ask: "numărul fețelor", solution: "Are o bază patrulater și 4 fețe laterale triunghiulare.", answer: "5 fețe" },
        { title: "număr de muchii", data: "piramidă cu baza pentagon", ask: "numărul muchiilor", solution: "Baza are 5 muchii, iar muchiile laterale sunt tot 5.", answer: "10 muchii" },
        { title: "tip EN", data: "piramidă patrulateră regulată cu latura bazei 6 cm și înălțimea 4 cm", ask: "muchia laterală", solution: "Distanța de la centrul bazei la un vârf este $3\\sqrt2$ cm. Muchia laterală are pătratul $4^2+(3\\sqrt2)^2=16+18=34$.", answer: "$\\sqrt{34}$ cm" }
      ],
      tips: "În piramida regulată, triunghiul-cheie este format din vârf, centrul bazei și un vârf al bazei.",
      exercises: ["Câte fețe are o piramidă hexagonală?", "Câte muchii are o piramidă triunghiulară?", "Într-o piramidă patrulateră regulată cu latura bazei 8 cm, calculați distanța de la centrul bazei la un vârf.", "Dacă înălțimea este 6 cm și distanța de la centrul bazei la un vârf este 8 cm, calculați muchia laterală.", "Problemă tip EN: calculați apotema unei piramide patrulatere regulate cu latura bazei 10 cm și înălțimea 12 cm."]
    })
  },
  {
    id: "u4-l3-prisma-cub-paralelipiped",
    title: "L3: Prisma dreaptă, paralelipipedul dreptunghic, cubul",
    content: m8SpatialLesson({
      learn: "Prisma dreaptă are baze congruente și muchii laterale perpendiculare pe baze. Cubul și paralelipipedul dreptunghic sunt cazuri importante pentru calcule metrice.",
      terms: ["Prisma dreaptă are fețe laterale dreptunghiuri.", "Paralelipipedul dreptunghic are toate fețele dreptunghiuri.", "Cubul are toate fețele pătrate congruente.", "Diagonala corpului unește două vârfuri opuse."],
      formulas: ["Cub: $d_f=a\\sqrt2$, $D=a\\sqrt3$.", "Paralelipiped: $D=\\sqrt{a^2+b^2+c^2}$.", "Înălțimea prismei drepte este muchia laterală.", "Diagonala corpului se calculează cu Pitagora în două etape."],
      figure: m8PrismSvg(),
      steps: ["Identifică dimensiunile bazei și înălțimea.", "Calculează diagonala bazei dacă este necesar.", "Aplică Pitagora cu diagonala bazei și înălțimea.", "Notează unitățile.", "Verifică dacă diagonala corpului este cea mai lungă."],
      solved: [
        { title: "cub", data: "cub cu muchia 5 cm", ask: "diagonala corpului", solution: "$D=5\\sqrt3$.", answer: "$5\\sqrt3$ cm" },
        { title: "paralelipiped", data: "dimensiuni 3 cm, 4 cm, 12 cm", ask: "diagonala", solution: "$D=\\sqrt{3^2+4^2+12^2}=\\sqrt{169}=13$.", answer: "13 cm" },
        { title: "tip EN", data: "prismă patrulateră regulată cu latura bazei 6 cm și înălțimea 8 cm", ask: "diagonala corpului", solution: "Diagonala bazei este $6\\sqrt2$. Deci $D^2=(6\\sqrt2)^2+8^2=72+64=136$.", answer: "$2\\sqrt{34}$ cm" }
      ],
      tips: "La cub și prismă, caută mai întâi dreptunghiul sau triunghiul dreptunghic care conține segmentul cerut.",
      exercises: ["Calculați diagonala unui cub cu muchia 4 cm.", "Calculați diagonala unui paralelipiped de dimensiuni 2, 6, 9 cm.", "O prismă dreaptă are baza dreptunghi 5 cm pe 12 cm și înălțimea 10 cm. Calculați diagonala corpului.", "Stabiliți câte fețe laterale are o prismă hexagonală.", "Problemă tip EN: într-un cub cu muchia 6 cm, calculați diagonala corpului."]
    })
  }
];

const spatialExtra = [
  {
    id: "u4-l4-cilindru-con",
    title: "L4: Cilindrul circular drept și conul circular drept",
    learn: "Cilindrul și conul se studiază prin secțiuni axiale. În con, triunghiul dreptunghic format de rază, înălțime și generatoare este esențial.",
    terms: ["Cilindrul are două baze circulare congruente.", "Conul are o bază circulară și un vârf.", "Generatoarea cilindrului este egală cu înălțimea.", "Generatoarea conului se notează de obicei cu g."],
    formulas: ["Cilindru drept: generatoarea este $h$.", "Con drept: $g^2=h^2+r^2$.", "Secțiunea axială a cilindrului este dreptunghi.", "Secțiunea axială a conului este triunghi isoscel."],
    figure: m8RoundSvg(),
    solved: { data: "con cu $h=12$ cm și $r=5$ cm", ask: "generatoarea", solution: "$g^2=12^2+5^2=169$, deci $g=13$.", answer: "13 cm" }
  },
  {
    id: "u4-l5-drepte-paralele-unghi",
    title: "L5: Drepte paralele. Unghiul a două drepte",
    learn: "Unghiul dintre două drepte din spațiu se măsoară după ce construim două paralele concurente cu ele.",
    terms: ["Dreptele paralele sunt coplanare și nu au punct comun.", "Dreptele necoplanare nu se află în același plan.", "Unghiul a două drepte este unghiul ascuțit sau drept format de paralele concurente."],
    formulas: ["Dacă $a\\parallel a'$ și $b\\parallel b'$, atunci unghiul dintre a și b este unghiul dintre $a'$ și $b'$.", "Muchiile paralele ale unui cub determină unghi de 0°.", "Muchiile perpendiculare ale unei fețe determină unghi de 90°."],
    solved: { data: "cubul $ABCDA'B'C'D'$", ask: "unghiul dintre AB și $AD$", solution: "AB și AD sunt laturi consecutive ale pătratului ABCD.", answer: "90°" }
  },
  {
    id: "u4-l6-dreapta-paralela-plan",
    title: "L6: Dreaptă paralelă cu un plan",
    learn: "O dreaptă este paralelă cu un plan dacă nu are punct comun cu planul și este paralelă cu o dreaptă din acel plan.",
    terms: ["Notație: $d\\parallel\\alpha$.", "Dreapta poate fi inclusă în plan sau paralelă cu planul; sunt situații diferite.", "Pentru demonstrație, căutăm o dreaptă din plan paralelă cu dreapta dată."],
    formulas: ["Dacă $d\\parallel r$ și $r\\subset\\alpha$, iar $d$ nu este inclusă în $\\alpha$, atunci $d\\parallel\\alpha$.", "O muchie superioară a prismei este paralelă cu planul bazei."],
    solved: { data: "cubul $ABCDA'B'C'D'$", ask: "poziția dreptei $A'B'$ față de planul $(ABCD)$", solution: "$A'B'\\parallel AB$ și $AB\\subset(ABCD)$, iar $A'B'$ nu este în planul bazei.", answer: "$A'B'\\parallel(ABCD)$" }
  },
  {
    id: "u4-l7-plane-paralele",
    title: "L7: Plane paralele",
    learn: "Planele paralele nu au puncte comune. În prisme și cuburi, bazele sunt exemple clare de plane paralele.",
    terms: ["Notație: $\\alpha\\parallel\\beta$.", "Două plane paralele nu se intersectează.", "Într-o prismă, planele bazelor sunt paralele.", "Fețele opuse ale cubului sunt în plane paralele."],
    formulas: ["Dacă două drepte concurente dintr-un plan sunt paralele cu două drepte concurente din alt plan, atunci planele sunt paralele.", "Distanța dintre două plane paralele este constantă."],
    solved: { data: "cubul $ABCDA'B'C'D'$", ask: "poziția planelor $(ABCD)$ și $(A'B'C'D')$", solution: "Aceste plane conțin bazele cubului, care sunt pătrate congruente aflate pe niveluri diferite.", answer: "plane paralele" }
  },
  {
    id: "u4-l8-sectiuni-paralele",
    title: "L8: Secțiuni paralele cu baza",
    learn: "O secțiune paralelă cu baza păstrează forma bazei. În piramide și conuri, secțiunile paralele cu baza sunt asemenea bazei.",
    terms: ["Secțiunea este figura obținută prin intersecția corpului cu un plan.", "Secțiunea paralelă cu baza unei prisme este congruentă cu baza.", "În piramidă, secțiunea paralelă cu baza este asemenea bazei.", "În con, secțiunea paralelă cu baza este un cerc."],
    formulas: ["În piramidă, lungimile din secțiunea paralelă se raportează ca distanțele față de vârf.", "În con, raza secțiunii se obține prin asemănare.", "În prismă, secțiunea paralelă cu baza are aceeași arie ca baza."],
    solved: { data: "o piramidă este secționată la jumătatea înălțimii, paralel cu baza pătrată de latură 10 cm", ask: "latura secțiunii", solution: "Raportul de asemănare este $\\frac12$, deci latura secțiunii este $10\\cdot\\frac12=5$.", answer: "5 cm" }
  },
  {
    id: "u4-l9-dreapta-perpendiculara-plan",
    title: "L9: Dreaptă perpendiculară pe un plan",
    learn: "O dreaptă perpendiculară pe un plan este perpendiculară pe orice dreaptă din plan care trece prin piciorul perpendicularei.",
    terms: ["Piciorul perpendicularei este punctul de intersecție cu planul.", "Distanța de la punct la plan este lungimea perpendicularei.", "Înălțimea piramidei este perpendiculară pe planul bazei.", "Înălțimea conului este perpendiculară pe planul bazei."],
    formulas: ["Dacă $d\\perp\\alpha$ și $A=d\\cap\\alpha$, atunci $d\\perp r$ pentru orice dreaptă $r\\subset\\alpha$ care trece prin A.", "Distanța de la punct la plan se măsoară pe perpendiculară."],
    solved: { data: "punctul P este la 6 cm de planul $\\alpha$, iar A este piciorul perpendicularei", ask: "lungimea PA", solution: "Distanța de la punct la plan este chiar segmentul perpendicular.", answer: "PA = 6 cm" }
  },
  {
    id: "u4-l10-distanta-plane-inaltimi",
    title: "L10: Distanța dintre plane paralele și înălțimi",
    learn: "Distanța dintre două plane paralele este lungimea oricărui segment perpendicular pe ambele plane, cu capetele în cele două plane.",
    terms: ["Înălțimea prismei este distanța dintre planele bazelor.", "Înălțimea cilindrului este distanța dintre bazele circulare.", "În trunchiuri, înălțimea este distanța dintre bazele paralele."],
    formulas: ["Pentru prismă dreaptă, $h$ este muchia laterală.", "Pentru cilindru drept, $h$ este generatoarea.", "Distanța dintre plane paralele este constantă."],
    solved: { data: "o prismă dreaptă are muchia laterală de 11 cm", ask: "înălțimea prismei", solution: "La prisma dreaptă, muchia laterală este perpendiculară pe baze.", answer: "11 cm" }
  },
  {
    id: "u4-l11-plane-perpendiculare-sectiuni",
    title: "L11: Plane perpendiculare. Secțiuni diagonale și axiale",
    learn: "Planele perpendiculare formează un unghi diedru drept. Secțiunile diagonale și axiale reduc corpul la figuri plane ușor de calculat.",
    terms: ["Secțiunea diagonală a prismei poate fi un dreptunghi.", "Secțiunea axială a cilindrului este dreptunghi.", "Secțiunea axială a conului este triunghi isoscel.", "Planele perpendiculare formează un unghi de 90°."],
    formulas: ["În cilindru, secțiunea axială are laturile $2r$ și h.", "În con, secțiunea axială are baza $2r$ și laturile egale g.", "Aria unei secțiuni se calculează ca aria figurii plane obținute."],
    solved: { data: "cilindru cu $r=4$ cm și $h=9$ cm", ask: "aria secțiunii axiale", solution: "Secțiunea axială este dreptunghi cu laturile $2r=8$ și 9.", answer: "$8\\cdot9=72$ cm$^2$" }
  },
  {
    id: "u4-l12-proiectii-unghi-dreapta-plan",
    title: "L12: Proiecții pe un plan. Unghiul dintre dreaptă și plan",
    learn: "Unghiul dintre o dreaptă și un plan se măsoară între dreaptă și proiecția ei pe plan.",
    terms: ["Proiecția unui punct pe plan este piciorul perpendicularei.", "Proiecția unui segment se obține proiectând capetele.", "Unghiul dreaptă-plan este unghiul dintre dreaptă și proiecția ei.", "Dacă dreapta este perpendiculară pe plan, unghiul este 90°."],
    formulas: ["Dacă A se proiectează în H pe plan, atunci $AH\\perp\\alpha$.", "În triunghiul format, se pot folosi Pitagora sau trigonometrie.", "Unghiul dreaptă-plan se află în triunghiul dreptunghic determinat de proiecție."],
    solved: { data: "segmentul PA are lungimea 10 cm, iar proiecția lui pe plan are lungimea 8 cm", ask: "distanța de la P la plan", solution: "Se formează un triunghi dreptunghic: $h^2=10^2-8^2=36$.", answer: "6 cm" }
  },
  {
    id: "u4-l13-unghi-diedru",
    title: "L13: Unghi diedru și unghiul a două plane",
    learn: "Unghiul diedru este unghiul format de două semiplane cu aceeași muchie. Pentru calcul, folosim unghiul plan corespunzător.",
    terms: ["Muchia diedrului este dreapta comună a celor două plane.", "Unghiul plan corespunzător se construiește perpendicular pe muchie.", "Două plane perpendiculare formează un unghi diedru de 90°.", "Unghiul a două plane este măsura unghiului plan corespunzător."],
    formulas: ["Construim în fiecare plan câte o dreaptă perpendiculară pe muchia comună.", "Unghiul dintre aceste două perpendiculare este unghiul planelor.", "În cub, fețele alăturate sunt perpendiculare."],
    solved: { data: "două fețe alăturate ale unui cub", ask: "unghiul dintre planele lor", solution: "Fețele alăturate ale cubului sunt pătrate perpendiculare.", answer: "90°" }
  },
  {
    id: "u4-l14-trei-perpendiculare",
    title: "L14: Teorema celor trei perpendiculare",
    learn: "Teorema celor trei perpendiculare ajută la calculul distanței de la un punct la o dreaptă aflată într-un plan.",
    terms: ["Se lucrează cu un punct exterior planului.", "Se proiectează punctul pe plan.", "Dacă proiecția este perpendiculară pe o dreaptă din plan, atunci segmentul inițial către acea dreaptă este tot perpendicular.", "Este utilă în piramide și prisme."],
    formulas: ["Dacă $PA\\perp\\alpha$, $AB\\subset\\alpha$ și $AB\\perp d$, atunci $PB\\perp d$.", "Distanța de la punct la dreaptă este lungimea segmentului perpendicular.", "Calculul final se face de obicei cu Pitagora."],
    solved: { data: "$PA=6$ cm este perpendiculară pe plan, iar $AB=8$ cm este perpendiculară pe dreapta d din plan", ask: "distanța PB", solution: "PB este perpendiculară pe d. În triunghiul dreptunghic PAB, $PB=\\sqrt{6^2+8^2}=10$.", answer: "10 cm" }
  }
];

spatialExtra.forEach(function(spec) {
  m8U4.push({
    id: spec.id,
    title: spec.title,
    content: m8SpatialLesson({
      learn: spec.learn,
      terms: spec.terms,
      formulas: spec.formulas,
      figure: spec.figure || '',
      steps: ["Identifică figura spațială și elementele date.", "Alege planul sau secțiunea în care se poate calcula.", "Construiește perpendiculara, paralela sau proiecția necesară.", "Aplică proprietatea geometrică și apoi calculele metrice.", "Scrie concluzia cu unități și justificare."],
      solved: [
        { title: "recunoaștere", data: spec.terms[0], ask: "ideea geometrică folosită", solution: "Identificăm definiția și o aplicăm pe figura dată.", answer: "proprietatea se aplică direct" },
        { title: "calcul", data: spec.solved.data, ask: spec.solved.ask, solution: spec.solved.solution, answer: spec.solved.answer },
        { title: "tip EN", data: "o configurație spațială în care apare același tip de relație", ask: "metoda de rezolvare", solution: "Se reduce problema la o secțiune plană și se aplică Pitagora, asemănare sau proprietăți de paralelism/perpendicularitate.", answer: "metoda este identificarea secțiunii corecte" }
      ],
      tips: "În geometria în spațiu, prima decizie corectă este alegerea planului de calcul. Abia apoi se aplică formule.",
      exercises: ["Formulați definiția principală a lecției.", "Dați un exemplu pe cub sau prismă.", "Construiți secțiunea sau proiecția necesară într-un desen.", "Rezolvați o cerință numerică folosind Pitagora.", "Problemă tip EN: justificați relația geometrică înainte de calcul."]
    })
  });
});

const m8U5 = [
  {
    id: "u5-l1-distante-unghiuri-corpuri",
    title: "L1: Distanțe și măsuri de unghiuri în corpuri",
    content: m8Lesson({
      learn: "Înainte de arii și volume, trebuie să determinăm corect lungimi și unghiuri în interiorul corpurilor. Cele mai multe calcule se reduc la triunghiuri dreptunghice.",
      terms: ["Diagonala feței este diagonala unei fețe a corpului.", "Diagonala corpului unește două vârfuri opuse.", "Unghiul dintre o dreaptă și un plan se măsoară cu proiecția.", "Distanța minimă se măsoară pe perpendiculară.", "În con, raza, înălțimea și generatoarea formează un triunghi dreptunghic."],
      formulas: ["Pitagora: $a^2+b^2=c^2$.", "Cub: $d_f=a\\sqrt2$, $D=a\\sqrt3$.", "Paralelipiped: $D=\\sqrt{a^2+b^2+c^2}$.", "Con: $g^2=h^2+r^2$."],
      steps: ["Marchează segmentul cerut.", "Găsește triunghiul dreptunghic care îl conține.", "Calculează lungimile intermediare.", "Aplică Pitagora sau trigonometria.", "Verifică dacă răspunsul are unitatea corectă."],
      solved: [
        { title: "cub", data: "cub cu muchia 6 cm", ask: "diagonala feței", solution: "$d_f=6\\sqrt2$.", answer: "$6\\sqrt2$ cm" },
        { title: "con", data: "$r=9$ cm, $h=12$ cm", ask: "generatoarea", solution: "$g=\\sqrt{9^2+12^2}=15$.", answer: "15 cm" },
        { title: "tip EN", data: "paralelipiped cu dimensiunile 6 cm, 8 cm, 24 cm", ask: "diagonala corpului", solution: "$D=\\sqrt{36+64+576}=\\sqrt{676}=26$.", answer: "26 cm" }
      ],
      tips: "Dacă nu vezi triunghiul dreptunghic, trasează proiecția segmentului pe bază sau pe o față.",
      exercises: ["Calculați diagonala feței unui cub cu muchia 10 cm.", "Calculați diagonala corpului pentru dimensiunile 2 cm, 3 cm, 6 cm.", "Aflați generatoarea unui con cu $h=15$ cm și $r=8$ cm.", "Într-un cilindru cu $h=12$ cm și $r=5$ cm, calculați diagonala secțiunii axiale.", "Problemă tip EN: într-un cub cu muchia 4 cm, determinați distanța dintre două vârfuri opuse."]
    })
  }
];

const volumeLessons = [
  {
    id: "u5-l2-prisma-arii-volum",
    title: "L2: Prisma dreaptă - arii și volum",
    topic: "Prisma dreaptă",
    figure: m8PrismSvg(),
    formulas: ["$A_l=P_b\\cdot h$", "$A_t=A_l+2A_b$", "$V=A_b\\cdot h$"],
    solved: [
      { title: "arie laterală", data: "prismă triunghiulară dreaptă cu perimetrul bazei 18 cm și înălțimea 7 cm", ask: "aria laterală", solution: "$A_l=P_b\\cdot h=18\\cdot7=126$.", answer: "126 cm$^2$" },
      { title: "volum", data: "prismă cu $A_b=36$ cm$^2$ și $h=10$ cm", ask: "volumul", solution: "$V=A_b\\cdot h=36\\cdot10=360$.", answer: "360 cm$^3$" },
      { title: "tip EN", data: "prismă patrulateră regulată cu latura bazei 5 cm și înălțimea 12 cm", ask: "aria totală", solution: "$A_b=25$, $P_b=20$, $A_l=20\\cdot12=240$, deci $A_t=240+2\\cdot25=290$.", answer: "290 cm$^2$" }
    ]
  },
  {
    id: "u5-l3-piramida-arii-volum",
    title: "L3: Piramida regulată - arii și volum",
    topic: "Piramida regulată",
    figure: m8PyramidSvg(),
    formulas: ["$A_l=\\frac{P_b\\cdot a_p}{2}$", "$A_t=A_l+A_b$", "$V=\\frac{A_b\\cdot h}{3}$"],
    solved: [
      { title: "arie laterală", data: "piramidă patrulateră regulată cu latura bazei 6 cm și apotema 5 cm", ask: "aria laterală", solution: "$P_b=24$, deci $A_l=\\frac{24\\cdot5}{2}=60$.", answer: "60 cm$^2$" },
      { title: "volum", data: "$A_b=64$ cm$^2$ și $h=9$ cm", ask: "volumul", solution: "$V=\\frac{64\\cdot9}{3}=192$.", answer: "192 cm$^3$" },
      { title: "tip EN", data: "piramidă patrulateră regulată cu latura bazei 8 cm și înălțimea 3 cm", ask: "volumul", solution: "$A_b=8^2=64$, deci $V=\\frac{64\\cdot3}{3}=64$.", answer: "64 cm$^3$" }
    ]
  },
  {
    id: "u5-l4-trunchi-piramida",
    title: "L4: Trunchiul de piramidă regulată - arii și volum",
    topic: "Trunchiul de piramidă regulată",
    figure: m8PyramidSvg(),
    formulas: ["$A_l=\\frac{(P_B+P_b)\\cdot a_t}{2}$", "$A_t=A_l+A_B+A_b$", "$V=\\frac{h}{3}(A_B+A_b+\\sqrt{A_BA_b})$"],
    solved: [
      { title: "arie laterală", data: "trunchi cu perimetrele bazelor 40 cm și 24 cm, apotema 5 cm", ask: "aria laterală", solution: "$A_l=\\frac{(40+24)\\cdot5}{2}=160$.", answer: "160 cm$^2$" },
      { title: "volum", data: "$A_B=100$ cm$^2$, $A_b=25$ cm$^2$, $h=9$ cm", ask: "volumul", solution: "$V=\\frac{9}{3}(100+25+50)=3\\cdot175=525$.", answer: "525 cm$^3$" },
      { title: "tip EN", data: "bazele sunt pătrate cu laturile 10 cm și 6 cm, apotema trunchiului 4 cm", ask: "aria laterală", solution: "$P_B=40$, $P_b=24$, deci $A_l=\\frac{64\\cdot4}{2}=128$.", answer: "128 cm$^2$" }
    ]
  },
  {
    id: "u5-l5-cilindru-arii-volum",
    title: "L5: Cilindrul circular drept - arii și volum",
    topic: "Cilindrul circular drept",
    figure: m8RoundSvg(),
    formulas: ["$A_l=2\\pi rh$", "$A_t=2\\pi r(h+r)$", "$V=\\pi r^2h$"],
    solved: [
      { title: "arie laterală", data: "cilindru cu $r=4$ cm și $h=10$ cm", ask: "aria laterală", solution: "$A_l=2\\pi\\cdot4\\cdot10=80\\pi$.", answer: "$80\\pi$ cm$^2$" },
      { title: "volum", data: "cilindru cu $r=3$ cm și $h=8$ cm", ask: "volumul", solution: "$V=\\pi\\cdot3^2\\cdot8=72\\pi$.", answer: "$72\\pi$ cm$^3$" },
      { title: "tip EN", data: "cilindru cu diametrul 10 cm și înălțimea 6 cm", ask: "volumul", solution: "Raza este 5 cm. $V=\\pi\\cdot25\\cdot6=150\\pi$.", answer: "$150\\pi$ cm$^3$" }
    ]
  },
  {
    id: "u5-l6-con-trunchi-con",
    title: "L6: Conul și trunchiul de con - arii și volume",
    topic: "Conul și trunchiul de con",
    figure: m8RoundSvg(),
    formulas: ["Con: $A_l=\\pi rg$, $A_t=\\pi r(g+r)$, $V=\\frac{\\pi r^2h}{3}$.", "Trunchi de con: $A_l=\\pi(R+r)g$.", "Trunchi de con: $V=\\frac{\\pi h}{3}(R^2+Rr+r^2)$."],
    solved: [
      { title: "generatoare", data: "con cu $r=5$ cm și $h=12$ cm", ask: "generatoarea", solution: "$g=\\sqrt{5^2+12^2}=13$.", answer: "13 cm" },
      { title: "volum con", data: "con cu $r=6$ cm și $h=9$ cm", ask: "volumul", solution: "$V=\\frac{\\pi\\cdot36\\cdot9}{3}=108\\pi$.", answer: "$108\\pi$ cm$^3$" },
      { title: "tip EN", data: "trunchi de con cu $R=6$ cm, $r=3$ cm și $g=5$ cm", ask: "aria laterală", solution: "$A_l=\\pi(6+3)\\cdot5=45\\pi$.", answer: "$45\\pi$ cm$^2$" }
    ]
  },
  {
    id: "u5-l7-sfera",
    title: "L7: Sfera",
    topic: "Sfera",
    figure: '',
    formulas: ["$A=4\\pi R^2$", "$V=\\frac{4\\pi R^3}{3}$", "Secțiunea prin centrul sferei este un cerc mare de rază R."],
    solved: [
      { title: "arie", data: "sferă cu raza 5 cm", ask: "aria", solution: "$A=4\\pi\\cdot25=100\\pi$.", answer: "$100\\pi$ cm$^2$" },
      { title: "volum", data: "sferă cu raza 3 cm", ask: "volumul", solution: "$V=\\frac{4\\pi\\cdot27}{3}=36\\pi$.", answer: "$36\\pi$ cm$^3$" },
      { title: "tip EN", data: "sferă cu diametrul 12 cm", ask: "aria", solution: "Raza este 6 cm. $A=4\\pi\\cdot36=144\\pi$.", answer: "$144\\pi$ cm$^2$" }
    ]
  }
];

volumeLessons.forEach(function(spec) {
  m8U5.push({
    id: spec.id,
    title: spec.title,
    content: m8Lesson({
      learn: spec.topic + " apare în probleme despre recipiente, acoperiri, construcții și volume. Alegerea formulei corecte depinde de ce se cere: arie laterală, arie totală sau volum.",
      terms: ["$A_b$ este aria bazei.", "$P_b$ este perimetrul bazei.", "$A_l$ este aria laterală.", "$A_t$ este aria totală.", "$V$ este volumul.", "Înălțimea se măsoară perpendicular pe bază."],
      formulas: spec.formulas,
      figure: spec.figure,
      steps: ["Identifică tipul corpului.", "Scrie datele cu unități.", "Calculează elementele lipsă, dacă este nevoie.", "Alege formula cerută.", "Verifică unitatea: cm$^2$ pentru arie, cm$^3$ pentru volum."],
      solved: spec.solved,
      tips: "Nu confunda aria cu volumul. Dacă se cere acoperire, ai arie; dacă se cere capacitate, ai volum.",
      exercises: ["Calculați aria laterală pentru un set de date ales din lecție.", "Calculați aria totală a corpului.", "Calculați volumul corpului.", "Rezolvați o problemă cu unități diferite, transformând înainte de calcul.", "Problemă tip EN: comparați două corpuri cu aceeași înălțime și decideți care are volum mai mare."]
    })
  });
});

const matematica8Data = {
  title: "Matematică - Clasa a VIII-a",
  subtitle: "Intervale, calcul algebric, funcții, geometrie în spațiu, arii și volume",
  subject: "matematica",
  grade: 8,
  sections: [
    {
      id: "u1-intervale-inecuatii",
      title: "Unitatea 1 - Intervale de numere reale. Inecuații în R",
      subtitle: "Mulțimi, intervale, inecuații liniare",
      icon: "📏",
      chapters: m8U1.concat([{
        id: "u1-recap",
        title: "Recapitulare și evaluare - Unitatea 1",
        content: m8Recap({
          formulas: ["$A\\cap B$ = elemente comune; $A\\cup B$ = toate elementele din A sau B.", "$[a,b]$ include capetele, $(a,b)$ nu le include.", "La împărțirea unei inecuații cu număr negativ, semnul se schimbă.", "Soluțiile inecuațiilor se scriu frecvent ca intervale."],
          mistakes: "Atenție la parantezele intervalelor și la schimbarea sensului inegalității când se împarte la un număr negativ.",
          en: { data: "$A=(-2,5]$ și $B=[1,7)$", ask: "$A\\cap B$ și numerele întregi din rezultat", solution: "Intersecția este partea comună: $[1,5]$. Numerele întregi sunt 1, 2, 3, 4, 5.", answer: "$[1,5]$, cu 5 numere întregi" },
          exercises: ["Scrieți ca interval: $x\\ge-3$.", "Calculați $[-1,6)\\cap(2,8]$.", "Rezolvați $3x-12\\le0$.", "Rezolvați $-2x+10\\gt0$.", "Determinați cel mai mic număr întreg din soluția inecuației $x+4\\ge1$."]
        })
      }])
    },
    {
      id: "u2-calcul-algebric",
      title: "Unitatea 2 - Calcul algebric în R",
      subtitle: "Expresii, formule, factorizare, fracții algebrice, ecuații de gradul al doilea",
      icon: "🧮",
      chapters: m8U2.concat([{
        id: "u2-recap",
        title: "Recapitulare și evaluare - Unitatea 2",
        content: m8Recap({
          formulas: ["$(a+b)^2=a^2+2ab+b^2$", "$(a-b)^2=a^2-2ab+b^2$", "$a^2-b^2=(a-b)(a+b)$", "$\\frac{A}{B}$ există pentru $B\\ne0$.", "$\\Delta=b^2-4ac$ pentru $ax^2+bx+c=0$."],
          mistakes: "Nu simplifica termeni adunați în fracții algebrice și nu uita condițiile de existență.",
          en: { data: "$E=(x+2)^2-(x-2)(x+2)$", ask: "forma redusă și $E(3)$", solution: "$E=x^2+4x+4-(x^2-4)=4x+8$. Pentru $x=3$, $E=20$.", answer: "$E=4x+8$, $E(3)=20$" },
          exercises: ["Reduceți $4x-2y+5x+7y$.", "Dezvoltați $(2x-1)^2$.", "Factorizați $x^2-36$.", "Simplificați $\\frac{x^2-1}{x-1}$ cu condiție.", "Rezolvați $x^2-3x+2=0$."]
        })
      }])
    },
    {
      id: "u3-func" + "tii",
      title: "Unitatea 3 - Funcții",
      subtitle: "Funcții finite, funcție liniară, statistică",
      icon: "📈",
      chapters: m8U3.concat([{
        id: "u3-recap",
        title: "Recapitulare și evaluare - Unitatea 3",
        content: m8Recap({
          formulas: ["$f(x)=ax+b$ are grafic o dreaptă.", "Intersecția cu Oy este $(0,b)$.", "Intersecția cu Ox se obține din $ax+b=0$.", "$M=\\frac{suma}{numărul\\ valorilor}$.", "Mediana se citește după ordonarea datelor."],
          mistakes: "Nu confunda $f(0)$ cu soluția ecuației $f(x)=0$. Primul dă intersecția cu Oy, al doilea cu Ox.",
          en: { data: "$f(x)=2x-6$", ask: "intersecțiile cu axele", solution: "Cu Oy: $x=0$, deci $f(0)=-6$, punctul $(0,-6)$. Cu Ox: $2x-6=0$, deci $x=3$, punctul $(3,0)$.", answer: "$(0,-6)$ și $(3,0)$" },
          exercises: ["Calculați $f(4)$ pentru $f(x)=3x+1$.", "Determinați x dacă $f(x)=0$ pentru $f(x)=x-5$.", "Verificați dacă $A(2,7)$ este pe graficul $f(x)=4x-1$.", "Calculați media datelor 5, 8, 9, 10.", "Determinați mediana pentru 3, 7, 7, 10, 12."]
        })
      }])
    },
    {
      id: "u4-geometrie-spatiu",
      title: "Unitatea 4 - Elemente ale geometriei în spațiu",
      subtitle: "Puncte, drepte, plane, corpuri și relații metrice",
      icon: "📐",
      chapters: m8U4.concat([{
        id: "u4-recap",
        title: "Recapitulare și evaluare - Unitatea 4",
        content: m8Recap({
          formulas: ["Două drepte în spațiu pot fi paralele, concurente sau necoplanare.", "Distanța de la punct la plan se măsoară pe perpendiculară.", "Unghiul dreaptă-plan se măsoară cu proiecția dreptei pe plan.", "În con: $g^2=h^2+r^2$.", "În cub: $D=a\\sqrt3$."],
          mistakes: "Desenul în perspectivă poate induce în eroare. Justifică prin plan, perpendiculară sau triunghi dreptunghic.",
          en: { data: "un con are $h=12$ cm și $r=5$ cm", ask: "generatoarea", solution: "Secțiunea axială dă un triunghi dreptunghic: $g^2=12^2+5^2=169$.", answer: "$g=13$ cm" },
          exercises: ["Dați exemplu de drepte necoplanare într-un cub.", "Calculați diagonala unui cub cu muchia 3 cm.", "Calculați generatoarea unui con cu $h=8$ cm și $r=6$ cm.", "Într-o prismă dreaptă, identificați înălțimea.", "Problemă tip EN: într-o piramidă regulată, calculați muchia laterală folosind înălțimea și distanța de la centrul bazei la un vârf."]
        })
      }])
    },
    {
      id: "u5-arii-volume",
      title: "Unitatea 5 - Arii și volume ale unor corpuri geometrice",
      subtitle: "Prismă, piramidă, trunchiuri, cilindru, con, sferă",
      icon: "🧊",
      chapters: m8U5.concat([
        {
          id: "u5-recap",
          title: "Recapitulare și evaluare - Unitatea 5",
          content: m8Recap({
            formulas: ["Prismă: $V=A_bh$, $A_l=P_bh$.", "Piramidă: $V=\\frac{A_bh}{3}$.", "Cilindru: $V=\\pi r^2h$, $A_l=2\\pi rh$.", "Con: $V=\\frac{\\pi r^2h}{3}$, $A_l=\\pi rg$.", "Sferă: $A=4\\pi R^2$, $V=\\frac{4\\pi R^3}{3}$."],
            mistakes: "Nu folosi formula de arie laterală când se cere volum. Verifică dacă ai nevoie de rază, diametru, înălțime, generatoare sau apotemă.",
            en: { data: "cilindru cu raza 4 cm și înălțimea 10 cm", ask: "volumul și aria laterală", solution: "$V=\\pi\\cdot4^2\\cdot10=160\\pi$. $A_l=2\\pi\\cdot4\\cdot10=80\\pi$.", answer: "$160\\pi$ cm$^3$, $80\\pi$ cm$^2$" },
            exercises: ["Calculați volumul unei prisme cu $A_b=24$ cm$^2$ și $h=7$ cm.", "Calculați aria totală a unui cub cu muchia 5 cm.", "Calculați volumul unui con cu $r=3$ cm și $h=12$ cm.", "Calculați aria unei sfere cu raza 6 cm.", "Problemă tip EN: un vas cilindric cu raza 5 cm și înălțimea 20 cm este umplut pe jumătate. Calculați volumul apei."]
          })
        },
        {
          id: "u5-evaluare-finala",
          title: "Evaluare sumativă mixtă pentru Evaluarea Națională",
          content: `
            <div class="content-block">
              <h4>Mini-test mixt</h4>
              <div class="retine"><div class="retine-label">Cum lucrezi testul</div>
                <p>Rezolvă întâi cerințele directe, apoi problemele compuse. La geometrie, fă desenul și notează unitățile. La algebră, simplifică înainte să înlocuiești valori.</p>
              </div>
              ${m8Solved('Problema tip Evaluare Națională', '$f(x)=2x+4$ și expresia $E=(x+1)^2-x^2$', 'intersecția graficului cu Ox și valoarea lui E pentru acea abscisă', 'Intersecția cu Ox: $2x+4=0$, deci $x=-2$. Expresia se reduce $E=x^2+2x+1-x^2=2x+1$. Pentru $x=-2$, $E=-3$.', 'punctul $(-2,0)$ și $E=-3$')}
              <div class="atentie"><div class="atentie-label">Tips & tricks</div>
                <p>În testele EN, o problemă poate combina funcții, calcul algebric și geometrie. Păstrează rezultatele intermediare clare, pentru că sunt punctate.</p>
              </div>
              <h4>Exerciții propuse</h4>
              <ul>
                <li>Rezolvați inecuația $-3x+6\\ge0$ și scrieți soluția ca interval.</li>
                <li>Simplificați $E=(x-4)^2-(x-4)(x+4)$.</li>
                <li>Determinați m astfel încât punctul $A(2,9)$ să fie pe graficul $f(x)=mx+1$.</li>
                <li>Calculați diagonala unui paralelipiped cu dimensiunile 4 cm, 6 cm, 12 cm.</li>
                <li>Un cilindru are raza 6 cm și înălțimea 10 cm. Calculați aria laterală și volumul.</li>
                <li>O piramidă regulată are aria bazei 36 cm$^2$ și înălțimea 9 cm. Calculați volumul.</li>
              </ul>
            </div>
          `
        }
      ])
    }
  ]
};
