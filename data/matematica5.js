// ============================================================
//  MATEMATICĂ - CLASA A 5-A
//  Teorie completă conform programei școlare românești
//  Formule: KaTeX ($...$ și $$...$$)
//  Figuri geometrice: SVG inline în U6
// ============================================================

const matematica5Data = {
  title: "Matematică – Clasa a V-a",
  subtitle: "Numere naturale, fracții, geometrie și unități de măsură",
  subject: "matematica",
  grade: 5,
  sections: [

    // ============================================================
    //  U1. OPERAȚII CU NUMERE NATURALE
    // ============================================================
    {
      id: "numere-naturale",
      title: "Operații cu numere naturale",
      subtitle: "Scriere, comparare, cele 4 operații, puteri, baze, ordinea operațiilor",
      icon: "🔢",
      chapters: [

        {
          id: "scriere-citire",
          title: "Scrierea și citirea numerelor naturale",
          content: `
            <div class="content-block">
              <h4>📌 Sistemul zecimal de numerație</h4>
              <p>Numerele naturale se scriu în <strong>sistemul zecimal (baza 10)</strong>, folosind cifrele <strong>0, 1, 2, 3, 4, 5, 6, 7, 8, 9</strong>.</p>
              <div class="retine">
                <div class="retine-label">✏️ De reținut</div>
                <p>Fiecare cifră dintr-un număr are o <strong>valoare pozițională</strong> (ordinul ei). Cifrele se grupează câte trei, de la dreapta spre stânga, formând <em>clase</em>: unități, mii, milioane.</p>
              </div>
              <table class="math-table">
                <thead><tr><th>Clasă</th><th>Ordine</th><th>Exemplu (326 507)</th></tr></thead>
                <tbody>
                  <tr><td>Mii</td><td>mii, zeci de mii, sute de mii</td><td>326 (mii)</td></tr>
                  <tr><td>Unități</td><td>unități, zeci, sute</td><td>507 (unități)</td></tr>
                </tbody>
              </table>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>Numărul <strong>4 328 071</strong> se citește: patru milioane trei sute douăzeci și opt de mii șaptezeci și unu.</p>
              </div>
            </div>
          `
        },

        {
          id: "axa-comparare",
          title: "Axa numerelor. Comparare și ordonare. Aproximări",
          content: `
            <div class="content-block">
              <h4>📏 Axa numerelor naturale</h4>
              <p>Pe axa numerelor, numerele naturale sunt reprezentate ca puncte, în ordine crescătoare de la stânga la dreapta. Distanța dintre puncte consecutive este egală.</p>
              <div class="retine">
                <div class="retine-label">✏️ Comparare</div>
                <p>Fie $a$ și $b$ două numere naturale:</p>
                <ul>
                  <li>$a < b$ dacă $a$ este mai la stânga pe axă decât $b$</li>
                  <li>Dacă au același număr de cifre, se compară cifrele de la stânga la dreapta</li>
                </ul>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Aproximări (rotunjire)</div>
                <p>Se rotunjește la ordinul cerut: dacă cifra de rang inferior este $\\geq 5$, se adaugă 1 la rang superior; altfel, cifra rămâne neschimbată.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$3\,847 \\approx 3\,800$ (la sute) &nbsp;|&nbsp; $3\,850 \\approx 3\,900$ (la sute)</p>
                <p>$72\,364 \\approx 72\,000$ (la mii) &nbsp;|&nbsp; $72\,500 \\approx 73\,000$ (la mii)</p>
              </div>
            </div>
          `
        },

        {
          id: "adunarea",
          title: "Adunarea numerelor naturale. Proprietăți",
          content: `
            <div class="content-block">
              <h4>➕ Adunarea</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Adunarea $a + b = s$ — suma numerelor $a$ (primul termen) și $b$ (al doilea termen) este $s$.</p>
              </div>
              <h5>Proprietăți</h5>
              <table class="math-table">
                <thead><tr><th>Proprietate</th><th>Formulă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Comutativitate</td><td>$a + b = b + a$</td><td>$5 + 3 = 3 + 5 = 8$</td></tr>
                  <tr><td>Asociativitate</td><td>$(a+b)+c = a+(b+c)$</td><td>$(2+3)+4 = 2+(3+4) = 9$</td></tr>
                  <tr><td>Elementul neutru</td><td>$a + 0 = a$</td><td>$7 + 0 = 7$</td></tr>
                </tbody>
              </table>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu — calcul rapid</div>
                <p>$198 + 763 = (200 - 2) + 763 = 963 - 2 = 961$</p>
              </div>
            </div>
          `
        },

        {
          id: "scaderea",
          title: "Scăderea numerelor naturale",
          content: `
            <div class="content-block">
              <h4>➖ Scăderea</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>$a - b = d$ — diferența dintre $a$ (descăzut) și $b$ (scăzător) este $d$ (restul). Verificare: $d + b = a$.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Scăderea în $\\mathbb{N}$ este definită numai când $a \\geq b$. Scăderea nu este comutativă și nici asociativă.</p>
              </div>
              <h5>Proprietăți utile</h5>
              <div class="math-prop">
                <span class="label">Formule</span>
                <p>$a - 0 = a$ &nbsp;&nbsp;&nbsp; $a - a = 0$ &nbsp;&nbsp;&nbsp; $(a+b)-b = a$ &nbsp;&nbsp;&nbsp; $(a-b)+b = a$</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$5\,000 - 347 = 4\,999 - 346 = 4\,653$</p>
              </div>
            </div>
          `
        },

        {
          id: "inmultirea",
          title: "Înmulțirea numerelor naturale. Proprietăți",
          content: `
            <div class="content-block">
              <h4>✖️ Înmulțirea</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>$a \\cdot b = p$ — produsul factorilor $a$ și $b$ este $p$. Prin convenție: $0 \\cdot a = 0$ și $1 \\cdot a = a$.</p>
              </div>
              <h5>Proprietăți</h5>
              <table class="math-table">
                <thead><tr><th>Proprietate</th><th>Formulă</th></tr></thead>
                <tbody>
                  <tr><td>Comutativitate</td><td>$a \\cdot b = b \\cdot a$</td></tr>
                  <tr><td>Asociativitate</td><td>$(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$</td></tr>
                  <tr><td>Elementul neutru</td><td>$a \\cdot 1 = a$</td></tr>
                  <tr><td>Elementul absorbant</td><td>$a \\cdot 0 = 0$</td></tr>
                  <tr><td>Distributivitate față de +</td><td>$a \\cdot (b+c) = a \\cdot b + a \\cdot c$</td></tr>
                  <tr><td>Distributivitate față de −</td><td>$a \\cdot (b-c) = a \\cdot b - a \\cdot c$</td></tr>
                </tbody>
              </table>
              <div class="retine">
                <div class="retine-label">✏️ Factor comun</div>
                <p>$a \\cdot b + a \\cdot c = a \\cdot (b + c)$ — operația se numește <em>scoatere factor comun</em>.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$17 \\cdot 12 = 17 \\cdot 10 + 17 \\cdot 2 = 170 + 34 = 204$</p>
              </div>
            </div>
          `
        },

        {
          id: "factor-comun",
          title: "Factorul comun",
          content: `
            <div class="content-block">
              <h4>🔷 Scoaterea factorului comun</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regulă</div>
                <p>Dacă un factor $a$ apare în fiecare termen al unei sume sau diferențe, îl putem scoate în față (factor comun):</p>
                $$a \\cdot b + a \\cdot c = a \\cdot (b + c)$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$15 \\cdot 7 + 15 \\cdot 3 = 15 \\cdot (7+3) = 15 \\cdot 10 = 150$</p>
                <p>$48 \\cdot 12 - 48 \\cdot 2 = 48 \\cdot (12-2) = 48 \\cdot 10 = 480$</p>
                <p>$24 \\cdot 37 + 24 \\cdot 63 = 24 \\cdot (37+63) = 24 \\cdot 100 = 2400$</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Utilitate</div>
                <p>Factorul comun simplifică calculele, evitând înmulțiri cu numere mari. Caută mereu dacă există un factor comun înainte de a efectua calculele!</p>
              </div>
            </div>
          `
        },

        {
          id: "impartirea-rest0",
          title: "Împărțirea cu rest 0 (exactă)",
          content: `
            <div class="content-block">
              <h4>➗ Împărțirea exactă</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>$a \\div b = c$ (cu $b \\neq 0$) — deîmpărțitul $a$, împărțitorul $b$, câtul $c$. Verificare: $c \\cdot b = a$.</p>
                <p>Împărțirea este exactă (rest 0) când $b$ divide pe $a$, adică $b \\mid a$.</p>
              </div>
              <h5>Proprietăți</h5>
              <div class="math-prop">
                <span class="label">Formule</span>
                <p>$a \\div 1 = a$ &nbsp;&nbsp; $a \\div a = 1$ (pentru $a \\neq 0$) &nbsp;&nbsp; $0 \\div a = 0$ (pentru $a \\neq 0$)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Împărțirea prin 0 este nedefinită!</div>
                <p>$a \\div 0$ nu are sens în mulțimea numerelor naturale.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$360 \\div 8 = 45$ &nbsp; (verificare: $45 \\cdot 8 = 360$ ✓)</p>
                <p>$1\,260 \\div 12 = 105$ &nbsp; (verificare: $105 \\cdot 12 = 1\,260$ ✓)</p>
              </div>
            </div>
          `
        },

        {
          id: "impartirea-cu-rest",
          title: "Împărțirea cu rest (cu rest ≠ 0)",
          content: `
            <div class="content-block">
              <h4>➗ Împărțirea cu rest</h4>
              <div class="retine">
                <div class="retine-label">✏️ Teorema împărțirii cu rest (Euclid)</div>
                <p>Pentru orice numere naturale $a$ și $b$ ($b \\neq 0$), există unice $c$ și $r$ astfel încât:</p>
                $$a = b \\cdot c + r, \\quad 0 \\leq r < b$$
                <p>$a$ = deîmpărțit, $b$ = împărțitor, $c$ = cât, $r$ = rest.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$47 \\div 5$: &nbsp; $47 = 5 \\cdot 9 + 2$, &nbsp; deci câtul este $9$, restul este $2$.</p>
                <p>$100 \\div 7$: &nbsp; $100 = 7 \\cdot 14 + 2$, &nbsp; câtul este $14$, restul este $2$.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Condiție pentru rest</div>
                <p>Restul $r$ este <strong>strict mai mic decât împărțitorul</strong> $b$: $0 \\leq r < b$.</p>
              </div>
            </div>
          `
        },

        {
          id: "puteri",
          title: "Puterea cu exponent natural. Pătratul",
          content: `
            <div class="content-block">
              <h4>⬆️ Puterea unui număr natural</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Puterea numărului $a$ cu exponentul $n \\in \\mathbb{N}^*$ este produsul a $n$ factori egali cu $a$:</p>
                $$a^n = \\underbrace{a \\cdot a \\cdot \\ldots \\cdot a}_{n \\text{ factori}}$$
                <p>$a$ se numește <em>baza</em>, $n$ se numește <em>exponentul</em>.</p>
              </div>
              <div class="math-prop">
                <span class="label">Cazuri speciale</span>
                <p>$a^1 = a$ &nbsp;&nbsp;&nbsp; $a^0 = 1$ (pentru $a \\neq 0$) &nbsp;&nbsp;&nbsp; $0^n = 0$ (pentru $n \\geq 1$) &nbsp;&nbsp;&nbsp; $1^n = 1$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Pătratul unui număr</div>
                <p>$a^2 = a \\cdot a$ se numește <em>pătratul</em> lui $a$. Primele pătrate perfecte: $1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225$.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$ &nbsp;&nbsp; $3^4 = 81$ &nbsp;&nbsp; $10^3 = 1000$</p>
              </div>
            </div>
          `
        },

        {
          id: "reguli-puteri",
          title: "Reguli de calcul cu puteri",
          content: `
            <div class="content-block">
              <h4>⚡ Regulile puterilor</h4>
              <table class="math-table">
                <thead><tr><th>Regulă</th><th>Formulă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Produsul cu aceeași bază</td><td>$a^m \\cdot a^n = a^{m+n}$</td><td>$3^2 \\cdot 3^4 = 3^6 = 729$</td></tr>
                  <tr><td>Câtul cu aceeași bază</td><td>$a^m \\div a^n = a^{m-n}$ ($m \\geq n$)</td><td>$5^7 \\div 5^3 = 5^4 = 625$</td></tr>
                  <tr><td>Puterea unei puteri</td><td>$(a^m)^n = a^{m \\cdot n}$</td><td>$(2^3)^2 = 2^6 = 64$</td></tr>
                  <tr><td>Puterea unui produs</td><td>$(a \\cdot b)^n = a^n \\cdot b^n$</td><td>$(2 \\cdot 3)^4 = 2^4 \\cdot 3^4 = 16 \\cdot 81 = 1296$</td></tr>
                  <tr><td>Puterea unui cât</td><td>$(a \\div b)^n = a^n \\div b^n$</td><td>$(6 \\div 2)^3 = 6^3 \\div 2^3 = 216 \\div 8 = 27$</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "comparare-puteri",
          title: "Compararea puterilor",
          content: `
            <div class="content-block">
              <h4>🔍 Compararea puterilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Metode</div>
                <p><strong>1. Aceeași bază:</strong> $a^m < a^n$ dacă $a > 1$ și $m < n$ &nbsp;(exp. mai mare → putere mai mare)</p>
                <p><strong>2. Același exponent:</strong> $a^n < b^n$ dacă $a < b$ și $n \\geq 1$</p>
                <p><strong>3. Calcul direct:</strong> se calculează ambele valori și se compară</p>
                <p><strong>4. Aducere la aceeași bază sau același exponent</strong></p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>Compară $2^{10}$ și $3^7$:</p>
                <p>$2^{10} = 1024$ &nbsp; și &nbsp; $3^7 = 2187$, &nbsp; deci $2^{10} < 3^7$.</p>
                <p>Compară $4^5$ și $8^3$: &nbsp; $4^5 = (2^2)^5 = 2^{10} = 1024$ &nbsp; și &nbsp; $8^3 = (2^3)^3 = 2^9 = 512$, &nbsp; deci $4^5 > 8^3$.</p>
              </div>
            </div>
          `
        },

        {
          id: "baza2-baza10",
          title: "Scrierea în baza 10 și baza 2",
          content: `
            <div class="content-block">
              <h4>🔟 Baza 10 și Baza 2</h4>
              <div class="retine">
                <div class="retine-label">✏️ Scrierea în baza 10</div>
                <p>Orice număr natural se poate scrie ca o sumă de puteri ale lui 10 ponderate cu cifrele sale:</p>
                $$\\overline{a_n a_{n-1} \\ldots a_1 a_0} = a_n \\cdot 10^n + a_{n-1} \\cdot 10^{n-1} + \\ldots + a_1 \\cdot 10 + a_0$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu baza 10</div>
                <p>$3\,721 = 3 \\cdot 10^3 + 7 \\cdot 10^2 + 2 \\cdot 10 + 1$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Scrierea în baza 2 (binar)</div>
                <p>Se folosesc doar cifrele <strong>0</strong> și <strong>1</strong>. Conversia: împărțim repetat la 2 și citim resturile <em>de jos în sus</em>.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu: $13_{10}$ în baza 2</div>
                <p>$13 \\div 2 = 6$ rest $1$ &nbsp;&nbsp; $6 \\div 2 = 3$ rest $0$ &nbsp;&nbsp; $3 \\div 2 = 1$ rest $1$ &nbsp;&nbsp; $1 \\div 2 = 0$ rest $1$</p>
                <p>$13_{10} = 1101_2$ &nbsp;&nbsp; Verificare: $1 \\cdot 2^3 + 1 \\cdot 2^2 + 0 \\cdot 2 + 1 = 8+4+0+1 = 13$ ✓</p>
              </div>
            </div>
          `
        },

        {
          id: "ordinea-operatiilor",
          title: "Ordinea efectuării operațiilor. Paranteze",
          content: `
            <div class="content-block">
              <h4>📐 Ordinea operațiilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regula PEMDAS / prioritatea operațiilor</div>
                <ol>
                  <li><strong>Paranteze</strong> — de la interior spre exterior: <em>(  )</em> → <em>[  ]</em> → <em>{  }</em></li>
                  <li><strong>Puteri</strong></li>
                  <li><strong>Înmulțiri și împărțiri</strong> — de la stânga la dreapta</li>
                  <li><strong>Adunări și scăderi</strong> — de la stânga la dreapta</li>
                </ol>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu complet</div>
                <p>$\{3 + [5 \\cdot (2^3 - 6)]\} \\div 4$</p>
                <p>$= \{3 + [5 \\cdot (8 - 6)]\} \\div 4$</p>
                <p>$= \{3 + [5 \\cdot 2]\} \\div 4$</p>
                <p>$= \{3 + 10\} \\div 4$</p>
                <p>$= 13 \\div 4 = 3$ rest $1$</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeală frecventă</div>
                <p>$2 + 3 \\cdot 4 = 2 + 12 = 14$ (NU $5 \\cdot 4 = 20$). Înmulțirea are prioritate față de adunare!</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  U2. METODE ARITMETICE
    // ============================================================
    {
      id: "metode-aritmetice",
      title: "Metode aritmetice de rezolvare a problemelor",
      subtitle: "Reducere la unitate, comparație, figurativă, mersul invers, falsa ipoteză",
      icon: "🧩",
      chapters: [

        {
          id: "reducere-unitate",
          title: "Metoda reducerii la unitate",
          content: `
            <div class="content-block">
              <h4>🎯 Metoda reducerii la unitate</h4>
              <div class="retine">
                <div class="retine-label">✏️ Principiu</div>
                <p>Se determină mai întâi valoarea corespunzătoare unei singure unități (1 obiect, 1 oră, 1 muncitor etc.), apoi se calculează valoarea pentru cantitatea cerută.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Pași</div>
                <ol>
                  <li>Identificăm cantitatea dată și valoarea totală.</li>
                  <li>Calculăm valoarea pentru <strong>o singură unitate</strong> (împărțire).</li>
                  <li>Calculăm valoarea pentru cantitatea cerută (înmulțire).</li>
                </ol>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p><em>4 caiete costă 36 de lei. Cât costă 7 caiete?</em></p>
                <p>1 caiet costă: $36 \\div 4 = 9$ lei</p>
                <p>7 caiete costă: $9 \\cdot 7 = 63$ lei</p>
              </div>
            </div>
          `
        },

        {
          id: "metoda-comparatiei",
          title: "Metoda comparației",
          content: `
            <div class="content-block">
              <h4>⚖️ Metoda comparației</h4>
              <div class="retine">
                <div class="retine-label">✏️ Principiu</div>
                <p>Se compară două mărimi care satisfac o relație de tipul <em>„de x ori mai mult/mai puțin"</em> sau <em>„cu y mai mult/mai puțin"</em>.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Tipuri de relații</div>
                <p>• <strong>Raport:</strong> $a$ este de $k$ ori mai mare decât $b$ → $a = k \\cdot b$</p>
                <p>• <strong>Diferență:</strong> $a$ este cu $d$ mai mare decât $b$ → $a = b + d$</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p><em>Ana are de 3 ori mai multe cărți decât Maria. Împreună au 52 de cărți. Câte cărți are fiecare?</em></p>
                <p>Fie Maria = $x$ cărți; Ana = $3x$ cărți.</p>
                <p>$x + 3x = 52 \\Rightarrow 4x = 52 \\Rightarrow x = 13$.</p>
                <p>Maria: 13 cărți, Ana: 39 cărți.</p>
              </div>
            </div>
          `
        },

        {
          id: "metoda-figurativa",
          title: "Metoda figurativă",
          content: `
            <div class="content-block">
              <h4>📊 Metoda figurativă (diagrama benzilor)</h4>
              <div class="retine">
                <div class="retine-label">✏️ Principiu</div>
                <p>Se reprezintă mărimile cu segmente (benzi). Vizualizarea grafică simplifică înțelegerea relațiilor dintre mărimi.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Pași</div>
                <ol>
                  <li>Desenăm o bandă pentru prima mărime.</li>
                  <li>Reprezentăm a doua mărime față de prima.</li>
                  <li>Identificăm valoarea unui segment din desen.</li>
                  <li>Calculăm valorile cerute.</li>
                </ol>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p><em>Un băiat are de 4 ori mai mulți bani decât sora lui. Împreună au 75 lei. Câți bani are fiecare?</em></p>
                <p>Sora = 1 segment. Băiat = 4 segmente. Total = 5 segmente = 75 lei.</p>
                <p>1 segment = $75 \\div 5 = 15$ lei → sora are 15 lei, băiatul 60 lei.</p>
              </div>
            </div>
          `
        },

        {
          id: "mersul-invers",
          title: "Metoda mersului invers",
          content: `
            <div class="content-block">
              <h4>🔄 Metoda mersului invers</h4>
              <div class="retine">
                <div class="retine-label">✏️ Principiu</div>
                <p>Dacă știm rezultatul final și operațiile efectuate, reconstruim valoarea inițială efectuând <strong>operațiile inverse în ordine inversă</strong>.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Reguli de inversare</div>
                <table class="math-table">
                  <thead><tr><th>Operație directă</th><th>Operație inversă</th></tr></thead>
                  <tbody>
                    <tr><td>$+a$</td><td>$-a$</td></tr>
                    <tr><td>$-a$</td><td>$+a$</td></tr>
                    <tr><td>$\\cdot a$</td><td>$\\div a$</td></tr>
                    <tr><td>$\\div a$</td><td>$\\cdot a$</td></tr>
                  </tbody>
                </table>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p><em>M-am gândit la un număr. L-am înmulțit cu 3, am adăugat 5, am împărțit la 4 și am obținut 8. La ce număr m-am gândit?</em></p>
                <p>Mersul invers (plecând de la 8):</p>
                <p>$8 \\cdot 4 = 32$ &nbsp;&nbsp; $32 - 5 = 27$ &nbsp;&nbsp; $27 \\div 3 = 9$</p>
                <p>Numărul gândit este <strong>9</strong>.</p>
              </div>
            </div>
          `
        },

        {
          id: "falsa-ipoteza",
          title: "Metoda falsei ipoteze",
          content: `
            <div class="content-block">
              <h4>🤔 Metoda falsei ipoteze</h4>
              <div class="retine">
                <div class="retine-label">✏️ Principiu</div>
                <p>Presupunem că toate elementele sunt dintr-un singur tip (ipoteză falsă), calculăm valoarea totală, comparăm cu valoarea reală, găsim diferența și o corectăm.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu clasic — picioare de păsări și animale</div>
                <p><em>Într-o curte sunt 10 animale: iepuri (4 picioare) și găini (2 picioare). Total 32 picioare. Câte iepuri și câte găini sunt?</em></p>
                <p><strong>Ipoteza falsă:</strong> toți sunt găini → $10 \\cdot 2 = 20$ picioare.</p>
                <p><strong>Diferența:</strong> $32 - 20 = 12$ picioare în plus.</p>
                <p><strong>Câștig per înlocuire</strong> (găină → iepure): $4 - 2 = 2$ picioare.</p>
                <p><strong>Număr iepuri:</strong> $12 \\div 2 = 6$ iepuri; <strong>Găini:</strong> $10 - 6 = 4$ găini.</p>
                <p>Verificare: $6 \\cdot 4 + 4 \\cdot 2 = 24 + 8 = 32$ ✓</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  U3. DIVIZIBILITATE
    // ============================================================
    {
      id: "divizibilitate",
      title: "Divizibilitatea numerelor naturale",
      subtitle: "Divisori, criterii, numere prime și compuse",
      icon: "🔀",
      chapters: [

        {
          id: "div-definitii",
          title: "Divizibilitatea numerelor naturale",
          content: `
            <div class="content-block">
              <h4>🔷 Definiții fundamentale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Divizibilitate</div>
                <p>Spunem că $a$ este <strong>divizibil cu</strong> $b$ (sau că $b$ <em>divide</em> pe $a$), notat $b \\mid a$, dacă există un număr natural $c$ astfel încât $a = b \\cdot c$.</p>
              </div>
              <div class="math-prop">
                <span class="label">Termeni</span>
                <p>Dacă $b \\mid a$: &nbsp; $b$ este <em>divizor</em> al lui $a$; &nbsp; $a$ este <em>multiplu</em> al lui $b$.</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Proprietăți ale divizibilității</div>
                <p>• $b \\mid a$ și $b \\mid c$ $\\Rightarrow$ $b \\mid (a \\pm c)$ &nbsp; (tranziție prin sumă/diferență)</p>
                <p>• $b \\mid a$ $\\Rightarrow$ $b \\mid a \\cdot k$ pentru orice $k \\in \\mathbb{N}$ &nbsp; (prin produs)</p>
                <p>• $1 \\mid a$ pentru orice $a$ &nbsp;&nbsp;&nbsp; $a \\mid a$ pentru orice $a$</p>
                <p>• $a \\mid 0$ pentru orice $a \\neq 0$</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu — toți divizorii lui 24</div>
                <p>$24 = 1 \\cdot 24 = 2 \\cdot 12 = 3 \\cdot 8 = 4 \\cdot 6$</p>
                <p>Divizorii lui 24: $\{1, 2, 3, 4, 6, 8, 12, 24\}$</p>
              </div>
            </div>
          `
        },

        {
          id: "criterii-div",
          title: "Criterii de divizibilitate",
          content: `
            <div class="content-block">
              <h4>📋 Criterii de divizibilitate</h4>
              <table class="math-table">
                <thead><tr><th>Divizibil cu</th><th>Criteriu</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>2</strong></td><td>Ultima cifră este pară (0,2,4,6,8)</td><td>3 <strong>4</strong> 6 ✓</td></tr>
                  <tr><td><strong>5</strong></td><td>Ultima cifră este 0 sau 5</td><td>12 <strong>5</strong> ✓; 8<strong>0</strong>0 ✓</td></tr>
                  <tr><td><strong>10</strong></td><td>Ultima cifră este 0</td><td>4 7<strong>0</strong> ✓</td></tr>
                  <tr><td><strong>3</strong></td><td>Suma cifrelor este divizibilă cu 3</td><td>4+8+6=18; $3\\mid18$ ✓</td></tr>
                  <tr><td><strong>9</strong></td><td>Suma cifrelor este divizibilă cu 9</td><td>2+7+3+6=18; $9\\mid18$ ✓</td></tr>
                  <tr><td><strong>4</strong></td><td>Ultimele două cifre formează un număr div. cu 4</td><td>5<strong>36</strong>; $4\\mid36$ ✓</td></tr>
                  <tr><td><strong>6</strong></td><td>Div. cu 2 ȘI cu 3</td><td>$6\\mid48$ (par și $4+8=12$) ✓</td></tr>
                  <tr><td><strong>25</strong></td><td>Ultimele două cifre: 00, 25, 50, 75</td><td>3<strong>75</strong> ✓</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Criteriul pentru 7 și 11</div>
                <p>Nu există criterii simple pentru 7 și 11 la nivelul clasei a V-a — se verifică prin împărțire directă.</p>
              </div>
            </div>
          `
        },

        {
          id: "prime-compuse",
          title: "Numere prime. Numere compuse",
          content: `
            <div class="content-block">
              <h4>🔑 Numere prime și compuse</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiții</div>
                <p><strong>Număr prim:</strong> are exact doi divizori: 1 și el însuși. Exemplu: 2, 3, 5, 7, 11, 13, 17, 19, 23...</p>
                <p><strong>Număr compus:</strong> are mai mult de doi divizori. Exemplu: 4, 6, 8, 9, 10, 12...</p>
                <p><strong>Cazuri speciale:</strong> 0 și 1 nu sunt nici prime, nici compuse.</p>
                <p><strong>2</strong> este singurul număr prim par.</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Descompunerea în factori primi</div>
                <p>Orice număr natural $n > 1$ se poate scrie în mod unic (ordinea nu contează) ca produs de factori primi.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu — descompunerea lui 360</div>
                <p>$360 = 2 \\cdot 180 = 2 \\cdot 2 \\cdot 90 = 2^2 \\cdot 90 = 2^2 \\cdot 2 \\cdot 45 = 2^3 \\cdot 45 = 2^3 \\cdot 3^2 \\cdot 5$</p>
                <p>Deci $360 = 2^3 \\cdot 3^2 \\cdot 5$.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  U4. FRACȚII ORDINARE
    // ============================================================
    {
      id: "fractii-ordinare",
      title: "Fracții ordinare",
      subtitle: "Fracții, procente, CMMDC, CMMMC, operații",
      icon: "🧮",
      chapters: [

        {
          id: "fractii-definitii",
          title: "Fracții ordinare. Fracții echivalente. Procente",
          content: `
            <div class="content-block">
              <h4>🍕 Fracții ordinare</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>O fracție ordinară $\\dfrac{a}{b}$ (cu $b \\neq 0$) reprezintă $a$ din $b$ părți egale ale unui întreg.</p>
                <p>$a$ = <em>numărătorul</em>; &nbsp; $b$ = <em>numitorul</em>.</p>
              </div>
              <div class="math-prop">
                <span class="label">Tipuri</span>
                <p>• <strong>Subunitară:</strong> $a < b$ → $\\dfrac{a}{b} < 1$ &nbsp; (ex: $\\dfrac{3}{5}$)</p>
                <p>• <strong>Unitară:</strong> $a = b$ → $\\dfrac{a}{b} = 1$ &nbsp; (ex: $\\dfrac{4}{4}$)</p>
                <p>• <strong>Supraunitară:</strong> $a > b$ → $\\dfrac{a}{b} > 1$ &nbsp; (ex: $\\dfrac{7}{3}$)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Fracții echivalente</div>
                <p>$\\dfrac{a}{b} = \\dfrac{a \\cdot k}{b \\cdot k}$ pentru orice $k \\neq 0$ &nbsp; (amplificare cu $k$)</p>
                <p>$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ când $k \\mid a$ și $k \\mid b$ &nbsp; (simplificare cu $k$)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Procente</div>
                <p>$p\% = \\dfrac{p}{100}$ &nbsp;&nbsp;&nbsp;&nbsp; $\\dfrac{3}{5} = \\dfrac{60}{100} = 60\%$</p>
              </div>
            </div>
          `
        },

        {
          id: "comparare-fractii",
          title: "Compararea fracțiilor. Axa numerelor",
          content: `
            <div class="content-block">
              <h4>⚖️ Compararea fracțiilor</h4>
              <table class="math-table">
                <thead><tr><th>Caz</th><th>Regulă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Același numitor</td><td>$\\dfrac{a}{c}$ vs $\\dfrac{b}{c}$: se compară numărătorii</td><td>$\\dfrac{3}{7} < \\dfrac{5}{7}$</td></tr>
                  <tr><td>Același numărător</td><td>$\\dfrac{a}{b}$ vs $\\dfrac{a}{c}$: numitor mai mic → fracție mai mare</td><td>$\\dfrac{3}{4} > \\dfrac{3}{7}$</td></tr>
                  <tr><td>General</td><td>Se aduc la numitor comun, apoi se compară numărătorii</td><td>$\\dfrac{2}{3}$ vs $\\dfrac{3}{4}$: $\\dfrac{8}{12}$ vs $\\dfrac{9}{12}$ → $\\dfrac{2}{3} < \\dfrac{3}{4}$</td></tr>
                </tbody>
              </table>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu — ordonare</div>
                <p>Ordonează crescător: $\\dfrac{5}{6}, \\dfrac{3}{4}, \\dfrac{7}{12}$</p>
                <p>Numitor comun = 12: &nbsp; $\\dfrac{10}{12}, \\dfrac{9}{12}, \\dfrac{7}{12}$</p>
                <p>Ordine crescătoare: $\\dfrac{7}{12} < \\dfrac{3}{4} < \\dfrac{5}{6}$</p>
              </div>
            </div>
          `
        },

        {
          id: "intregi-fractie",
          title: "Introducerea și scoaterea întregilor dintr-o fracție",
          content: `
            <div class="content-block">
              <h4>🔄 Numere mixte</h4>
              <div class="retine">
                <div class="retine-label">✏️ Scoaterea întregilor (fracție supraunitară → număr mixt)</div>
                $$\\frac{a}{b} = q + \\frac{r}{b} \\quad \\text{unde } a = b \\cdot q + r, \; 0 \\leq r < b$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$\\dfrac{17}{5} = 3 + \\dfrac{2}{5} = 3\\dfrac{2}{5}$ &nbsp; (deoarece $17 = 5 \\cdot 3 + 2$)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Introducerea întregilor (număr mixt → fracție supraunitară)</div>
                $$q\\frac{r}{b} = \\frac{q \\cdot b + r}{b}$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$2\\dfrac{3}{7} = \\dfrac{2 \\cdot 7 + 3}{7} = \\dfrac{17}{7}$</p>
              </div>
            </div>
          `
        },

        {
          id: "cmmdc",
          title: "CMMDC. Amplificarea și simplificarea. Fracții ireductibile",
          content: `
            <div class="content-block">
              <h4>🔷 Cel mai mare divizor comun (CMMDC)</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>CMMDC$(a, b)$ este cel mai mare număr care divide simultan pe $a$ și pe $b$.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Metoda descompunerii în factori primi</div>
                <p>Se scriu $a$ și $b$ ca produse de factori primi. CMMDC = produsul factorilor comuni cu exponentul <strong>cel mai mic</strong>.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>CMMDC$(48, 36)$: &nbsp; $48 = 2^4 \\cdot 3$ și $36 = 2^2 \\cdot 3^2$</p>
                <p>CMMDC$= 2^2 \\cdot 3 = 12$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Fracție ireductibilă</div>
                <p>O fracție $\\dfrac{a}{b}$ este <strong>ireductibilă</strong> dacă CMMDC$(a,b) = 1$. Simplificăm: $\\dfrac{a}{b} = \\dfrac{a \\div d}{b \\div d}$ unde $d = \\text{CMMDC}(a,b)$.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Simplificare</div>
                <p>$\\dfrac{48}{36} = \\dfrac{48 \\div 12}{36 \\div 12} = \\dfrac{4}{3}$ (ireductibilă, deoarece CMMDC$(4,3)=1$)</p>
              </div>
            </div>
          `
        },

        {
          id: "cmmmc",
          title: "CMMMC. Aducerea la numitor comun",
          content: `
            <div class="content-block">
              <h4>🔷 Cel mai mic multiplu comun (CMMMC)</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>CMMMC$(a, b)$ este cel mai mic număr natural nenul care este multiplu simultan al lui $a$ și $b$.</p>
              </div>
              <div class="metoda">
                <div class="metoda-label">📋 Metoda factorilor primi</div>
                <p>CMMMC = produsul <strong>tuturor</strong> factorilor primi cu exponentul <strong>cel mai mare</strong>.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>CMMMC$(12, 18)$: &nbsp; $12 = 2^2 \\cdot 3$ și $18 = 2 \\cdot 3^2$</p>
                <p>CMMMC $= 2^2 \\cdot 3^2 = 36$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Legătura CMMDC–CMMMC</div>
                $$\\text{CMMDC}(a,b) \\cdot \\text{CMMMC}(a,b) = a \\cdot b$$
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Aducerea la numitor comun</div>
                <p>Se amplifică fiecare fracție cu factorul necesar pentru ca numitorii să devină egali cu CMMMC al lor.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$\\dfrac{5}{12}$ și $\\dfrac{7}{18}$: &nbsp; CMMMC$(12,18)=36$</p>
                <p>$\\dfrac{5}{12} = \\dfrac{15}{36}$ &nbsp; și &nbsp; $\\dfrac{7}{18} = \\dfrac{14}{36}$</p>
              </div>
            </div>
          `
        },

        {
          id: "adunare-scadere-fractii",
          title: "Adunarea și scăderea fracțiilor",
          content: `
            <div class="content-block">
              <h4>➕➖ Adunarea și scăderea fracțiilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Același numitor</div>
                $$\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c} \\qquad \\frac{a}{c} - \\frac{b}{c} = \\frac{a-b}{c} \; (a \\geq b)$$
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Numitori diferiți — pași</div>
                <ol>
                  <li>Calculăm CMMMC al numitorilor.</li>
                  <li>Aducem fracțiile la numitorul comun.</li>
                  <li>Adunăm/scădem numărătorii.</li>
                  <li>Simplificăm rezultatul.</li>
                </ol>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$\\dfrac{3}{4} + \\dfrac{5}{6} = \\dfrac{9}{12} + \\dfrac{10}{12} = \\dfrac{19}{12} = 1\\dfrac{7}{12}$</p>
                <p>$\\dfrac{7}{8} - \\dfrac{1}{3} = \\dfrac{21}{24} - \\dfrac{8}{24} = \\dfrac{13}{24}$</p>
              </div>
            </div>
          `
        },

        {
          id: "inmultire-fractii",
          title: "Înmulțirea fracțiilor",
          content: `
            <div class="content-block">
              <h4>✖️ Înmulțirea fracțiilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regulă</div>
                $$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$
                <p>Se înmulțesc numărătorii între ei și numitorii între ei, apoi se simplifică.</p>
              </div>
              <div class="retine">
                <div class="retine-label">💡 Simplificare încrucișată</div>
                <p>Înainte de înmulțire, se pot simplifica numărătorii cu numitorii (diagonal).</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$\\dfrac{3}{4} \\cdot \\dfrac{8}{9} = \\dfrac{3 \\cdot 8}{4 \\cdot 9} = \\dfrac{24}{36} = \\dfrac{2}{3}$</p>
                <p>Simplificare încrucișată: $\\dfrac{^1\!\!\!\\not{3}}{^1\!\!\!\\not{4}} \\cdot \\dfrac{^2\!\!\!\\not{8}}{^3\!\!\!\\not{9}} = \\dfrac{1 \\cdot 2}{1 \\cdot 3} = \\dfrac{2}{3}$</p>
                <p>$5 \\cdot \\dfrac{3}{7} = \\dfrac{5}{1} \\cdot \\dfrac{3}{7} = \\dfrac{15}{7}$</p>
              </div>
            </div>
          `
        },

        {
          id: "impartire-fractii",
          title: "Împărțirea fracțiilor ordinare",
          content: `
            <div class="content-block">
              <h4>➗ Împărțirea fracțiilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Fracția inversă</div>
                <p>Fracția inversă a lui $\\dfrac{a}{b}$ (cu $a \\neq 0$) este $\\dfrac{b}{a}$ (se inversează numărătorul cu numitorul).</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Regulă de împărțire</div>
                $$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c}$$
                <p>A împărți la o fracție = a înmulți cu fracția inversă a ei.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$\\dfrac{3}{4} \\div \\dfrac{5}{8} = \\dfrac{3}{4} \\cdot \\dfrac{8}{5} = \\dfrac{24}{20} = \\dfrac{6}{5} = 1\\dfrac{1}{5}$</p>
                <p>$\\dfrac{7}{9} \\div 7 = \\dfrac{7}{9} \\cdot \\dfrac{1}{7} = \\dfrac{1}{9}$</p>
              </div>
            </div>
          `
        },

        {
          id: "putere-fractii",
          title: "Puterea cu exponent natural a unei fracții",
          content: `
            <div class="content-block">
              <h4>⬆️ Puterea unei fracții</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regulă</div>
                $$\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}, \\quad b \\neq 0$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$\\left(\\dfrac{2}{3}\\right)^3 = \\dfrac{2^3}{3^3} = \\dfrac{8}{27}$</p>
                <p>$\\left(\\dfrac{5}{4}\\right)^2 = \\dfrac{25}{16} = 1\\dfrac{9}{16}$</p>
                <p>$\\left(\\dfrac{1}{2}\\right)^5 = \\dfrac{1}{32}$</p>
              </div>
              <div class="math-prop">
                <span class="label">Cazuri speciale</span>
                <p>$\\left(\\dfrac{a}{b}\\right)^0 = 1$ &nbsp;&nbsp;&nbsp; $\\left(\\dfrac{a}{b}\\right)^1 = \\dfrac{a}{b}$</p>
              </div>
            </div>
          `
        },

        {
          id: "fractii-dintr-un-numar",
          title: "Fracții/procente dintr-un număr",
          content: `
            <div class="content-block">
              <h4>📊 Fracție sau procent dintr-un număr</h4>
              <div class="retine">
                <div class="retine-label">✏️ Formulă</div>
                $$\\frac{a}{b} \\text{ din } n = \\frac{a}{b} \\cdot n = \\frac{a \\cdot n}{b}$$
                $$p\% \\text{ din } n = \\frac{p}{100} \\cdot n$$
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$\\dfrac{3}{4}$ din 80: &nbsp; $\\dfrac{3}{4} \\cdot 80 = \\dfrac{240}{4} = 60$</p>
                <p>25% din 120: &nbsp; $\\dfrac{25}{100} \\cdot 120 = \\dfrac{1}{4} \\cdot 120 = 30$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Aflarea întregului cunoscând fracția</div>
                <p>Dacă $\\dfrac{a}{b}$ din $n = k$, atunci $n = k \\div \\dfrac{a}{b} = k \\cdot \\dfrac{b}{a}$.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$\\dfrac{3}{5}$ din numărul $n$ este 24. Care este $n$?</p>
                <p>$n = 24 \\cdot \\dfrac{5}{3} = \\dfrac{120}{3} = 40$</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  U5. FRACȚII ZECIMALE
    // ============================================================
    {
      id: "fractii-zecimale",
      title: "Fracții zecimale",
      subtitle: "Scriere, operații, numărul rațional pozitiv, media, statistici",
      icon: "📉",
      chapters: [

        {
          id: "fractii-zecimale-def",
          title: "Fracții zecimale. Scriere și transformare",
          content: `
            <div class="content-block">
              <h4>🔢 Fracțiile zecimale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>O fracție zecimală se scrie cu virgulă: $3{,}14$ are partea întreagă $3$ și partea zecimală $14$ sutimi.</p>
                <p>$3{,}14 = 3 + \\dfrac{1}{10} + \\dfrac{4}{100} = 3 + \\dfrac{14}{100} = \\dfrac{314}{100}$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Transformare fracție ordinară → zecimală</div>
                <p>Se amplifică numitorul la o putere a lui 10, sau se împarte numărătorul la numitor.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$\\dfrac{3}{4} = \\dfrac{75}{100} = 0{,}75$</p>
                <p>$\\dfrac{7}{8} = \\dfrac{875}{1000} = 0{,}875$</p>
                <p>$\\dfrac{1}{3} = 0{,}\\overline{3}$ (zecimală periodică)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Transformare zecimală → fracție ordinară</div>
                <p>$0{,}ab = \\dfrac{ab}{100}$ &nbsp;&nbsp;&nbsp; $0{,}abc = \\dfrac{abc}{1000}$ (se simplifică dacă e posibil)</p>
              </div>
            </div>
          `
        },

        {
          id: "aproximari-zecimale",
          title: "Aproximări. Comparare și ordonare. Axa numerelor",
          content: `
            <div class="content-block">
              <h4>📏 Comparare și aproximare zecimale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Comparare</div>
                <p>Se compară mai întâi partea întreagă; la egalitate, se compară zecima cu zecima, sutimea cu sutimea etc.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$3{,}47$ vs $3{,}5$: partea întreagă egală → zecimi: $4 < 5$ → $3{,}47 < 3{,}5$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Aproximare (rotunjire)</div>
                <p>La zecimi: cifra sutimilor $\\geq 5$ → adaugi 1 la zecimi; altfel, rămâne neschimbată.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$3{,}74 \\approx 3{,}7$ (zecimi) &nbsp;&nbsp; $3{,}75 \\approx 3{,}8$ (zecimi)</p>
                <p>$12{,}358 \\approx 12{,}36$ (sutimi)</p>
              </div>
            </div>
          `
        },

        {
          id: "adunare-scadere-zecimale",
          title: "Adunarea și scăderea fracțiilor zecimale",
          content: `
            <div class="content-block">
              <h4>➕➖ Adunare și scădere zecimale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regulă</div>
                <p>Se aliniază <strong>virgulele</strong> (zecimile sub zecimi, sutimile sub sutimi etc.), se completează cu zerouri dacă e necesar, se efectuează operația ca la numere naturale.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$12{,}35 + 4{,}8 = 12{,}35 + 4{,}80 = 17{,}15$</p>
                <p>$7{,}4 - 2{,}37 = 7{,}40 - 2{,}37 = 5{,}03$</p>
              </div>
            </div>
          `
        },

        {
          id: "inmultire-zecimale",
          title: "Înmulțirea fracțiilor zecimale",
          content: `
            <div class="content-block">
              <h4>✖️ Înmulțire zecimale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Regulă</div>
                <p>Se înmulțesc ca numere naturale (ignorând virgula), apoi virgula se plasează astfel încât numărul total de zecimale din rezultat = suma zecimalelor factorilor.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>$1{,}4 \\cdot 2{,}3$: &nbsp; $14 \\cdot 23 = 322$; &nbsp; 1 + 1 = 2 zecimale → $3{,}22$</p>
                <p>$0{,}12 \\cdot 0{,}5$: &nbsp; $12 \\cdot 5 = 60$; &nbsp; 2 + 1 = 3 zecimale → $0{,}060 = 0{,}06$</p>
              </div>
              <div class="math-prop">
                <span class="label">Înmulțire cu puteri ale lui 10</span>
                <p>$a \\cdot 10^n$ → mută virgula cu $n$ poziții spre dreapta.</p>
                <p>$a \\div 10^n$ → mută virgula cu $n$ poziții spre stânga.</p>
              </div>
            </div>
          `
        },

        {
          id: "impartire-media",
          title: "Împărțirea. Media aritmetică",
          content: `
            <div class="content-block">
              <h4>➗ Împărțirea și media aritmetică</h4>
              <div class="retine">
                <div class="retine-label">✏️ Împărțire cu rezultat zecimal</div>
                <p>$a \\div b$ (cu rest) → continuăm împărțirea adăugând zecimale.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$7 \\div 4 = 1{,}75$ &nbsp; (deoarece $7{,}00 \\div 4 = 1$ rest $3$; $30 \\div 4 = 7$ rest $2$; $20 \\div 4 = 5$)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Media aritmetică</div>
                $$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$$
                <p>Media aritmetică a $n$ numere este suma lor împărțită la $n$.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>Media notelor 7, 8, 9, 10, 6: &nbsp; $\\bar{x} = \\dfrac{7+8+9+10+6}{5} = \\dfrac{40}{5} = 8$</p>
              </div>
            </div>
          `
        },

        {
          id: "impartire-zecimale",
          title: "Împărțirea fracțiilor zecimale. Periodice",
          content: `
            <div class="content-block">
              <h4>➗ Împărțire dintre zecimale. Fracții periodice</h4>
              <div class="retine">
                <div class="retine-label">✏️ Împărțire zecimală ÷ număr natural</div>
                <p>Se aliniază virgula: câtul va avea virgula chiar deasupra celei din deîmpărțit.</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Zecimale periodice</div>
                <p>Unele fracții ordinare dau la împărțire zecimale care se repetă:</p>
                <p>$\\dfrac{1}{3} = 0{,}\\overline{3} = 0{,}333\\ldots$ &nbsp;&nbsp; $\\dfrac{1}{7} = 0{,}\\overline{142857}$ &nbsp;&nbsp; $\\dfrac{1}{6} = 0{,}1\\overline{6}$</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Transformare periodică → fracție</div>
                <p>$0{,}\\overline{a} = \\dfrac{a}{9}$ &nbsp;&nbsp;&nbsp; $0{,}\\overline{ab} = \\dfrac{ab}{99}$ &nbsp;&nbsp;&nbsp; $0{,}a\\overline{b} = \\dfrac{ab - a}{90}$</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$0{,}\\overline{3} = \\dfrac{3}{9} = \\dfrac{1}{3}$ &nbsp;&nbsp; $0{,}\\overline{27} = \\dfrac{27}{99} = \\dfrac{3}{11}$</p>
              </div>
            </div>
          `
        },

        {
          id: "numar-rational-pozitiv",
          title: "Număr rațional pozitiv. Ordinea operațiilor",
          content: `
            <div class="content-block">
              <h4>ℚ⁺ Numere raționale pozitive</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Mulțimea numerelor raționale pozitive $\\mathbb{Q}^+$ cuprinde toate numerele de forma $\\dfrac{a}{b}$ cu $a \\in \\mathbb{N}$, $b \\in \\mathbb{N}^*$, inclusiv toate fracțiile zecimale finite sau periodice.</p>
                <p>$\\mathbb{N} \\subset \\mathbb{Q}^+$ &nbsp; (orice număr natural este și rațional pozitiv)</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Ordinea operațiilor cu raționale pozitive</div>
                <p>Aceleași reguli ca la naturale: puteri → înmulțiri/împărțiri → adunări/scăderi; paranteze se efectuează primele.</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>$\\dfrac{1}{2} + \\dfrac{3}{4} \\cdot \\left(\\dfrac{2}{3}\\right)^2 = \\dfrac{1}{2} + \\dfrac{3}{4} \\cdot \\dfrac{4}{9} = \\dfrac{1}{2} + \\dfrac{12}{36} = \\dfrac{1}{2} + \\dfrac{1}{3} = \\dfrac{3}{6} + \\dfrac{2}{6} = \\dfrac{5}{6}$</p>
              </div>
            </div>
          `
        },

        {
          id: "unitati-masura",
          title: "Metode aritmetice cu fracții și unități de măsură",
          content: `
            <div class="content-block">
              <h4>📏 Unități de măsură</h4>
              <div class="retine">
                <div class="retine-label">✏️ Lungime</div>
                <p>$1$ km $= 1\,000$ m $= 100\,000$ cm $= 1\,000\,000$ mm</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Masă</div>
                <p>$1$ t $= 1\,000$ kg; &nbsp; $1$ kg $= 1\,000$ g; &nbsp; $1$ g $= 1\,000$ mg</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Timp</div>
                <p>$1$ an $= 12$ luni $= 365$ zile (366 în bisect); &nbsp; $1$ zi $= 24$ h; &nbsp; $1$ h $= 60$ min; &nbsp; $1$ min $= 60$ s</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Capacitate și volum</div>
                <p>$1$ hl $= 100$ L; &nbsp; $1$ L $= 10$ dL $= 100$ cL $= 1\,000$ mL $= 1\,000$ cm³ $= 1$ dm³</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu cu fracții</div>
                <p>$\\dfrac{3}{4}$ din $2{,}4$ km $= \\dfrac{3}{4} \\cdot 2\,400$ m $= 1\,800$ m $= 1{,}8$ km</p>
              </div>
            </div>
          `
        },

        {
          id: "date-statistice",
          title: "Date statistice. Frecvență. Grafice. Media",
          content: `
            <div class="content-block">
              <h4>📊 Organizarea datelor statistice</h4>
              <div class="retine">
                <div class="retine-label">✏️ Noțiuni de bază</div>
                <p><strong>Frecvența absolută</strong> a unei valori = de câte ori apare în set.</p>
                <p><strong>Frecvența relativă</strong> = frecvența absolută ÷ total observații (exprimată ca fracție sau procent).</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Media aritmetică</div>
                $$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$$
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Tipuri de grafice</div>
                <p>• <strong>Grafic cu linii (linie poligonală)</strong>: evoluție în timp (temperaturi, valori lunare)</p>
                <p>• <strong>Grafic cu bare/coloane</strong>: comparații între categorii</p>
                <p>• <strong>Diagramă circulară (tort)</strong>: procente dintr-un întreg</p>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>Notele unui elev: 7, 8, 10, 9, 8, 7, 10, 8.</p>
                <p>Frecvența lui 8 = 3 &nbsp; → Frecvența relativă $= \\dfrac{3}{8} = 37{,}5\%$</p>
                <p>Media $= \\dfrac{7+8+10+9+8+7+10+8}{8} = \\dfrac{67}{8} = 8{,}375$</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  U6. GEOMETRIE ȘI UNITĂȚI DE MĂSURĂ
    // ============================================================
    {
      id: "geometrie",
      title: "Elemente de geometrie și unități de măsură",
      subtitle: "Punct, dreaptă, unghi, figuri congruente, perimetru, arie, volum",
      icon: "📐",
      chapters: [

        {
          id: "punct-dreapta-plan",
          title: "Punct, dreaptă, plan, semiplan, semidreaptă, segment",
          content: `
            <div class="content-block">
              <h4>📍 Elemente geometrice fundamentale</h4>
              <div class="retine">
                <div class="retine-label">✏️ Noțiuni primitive (nedefinite)</div>
                <p>Punctul, dreapta și planul sunt <em>noțiuni primitive</em> — sunt acceptate fără definiție formală.</p>
              </div>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="30" x2="170" y2="30" stroke="#1a7a4a" stroke-width="2"/>
                    <circle cx="50" cy="30" r="3" fill="#c0392b"/>
                    <circle cx="120" cy="30" r="3" fill="#c0392b"/>
                    <text x="44" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">A</text>
                    <text x="122" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">B</text>
                    <text x="155" y="26" font-size="13" fill="#1a7a4a" font-family="serif" font-style="italic">d</text>
                  </svg>
                  <figcaption>Dreaptă <em>d</em> cu punctele A, B</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="90" y1="5" x2="90" y2="55" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
                    <line x1="10" y1="30" x2="170" y2="30" stroke="#888" stroke-width="1" stroke-dasharray="4,3"/>
                    <line x1="10" y1="30" x2="90" y2="30" stroke="#1a7a4a" stroke-width="2.5"/>
                    <circle cx="10" cy="30" r="3.5" fill="#c0392b"/>
                    <text x="2" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">O</text>
                    <text x="155" y="26" font-size="12" fill="#1a7a4a" font-family="sans-serif">semidreaptă</text>
                  </svg>
                  <figcaption>Semidreaptă cu originea O</figcaption>
                </figure>
              </div>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="40" y1="30" x2="140" y2="30" stroke="#1a7a4a" stroke-width="2.5"/>
                    <circle cx="40" cy="30" r="3.5" fill="#c0392b"/>
                    <circle cx="140" cy="30" r="3.5" fill="#c0392b"/>
                    <text x="32" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">A</text>
                    <text x="142" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">B</text>
                    <text x="82" y="18" font-size="11" fill="#666" font-family="sans-serif">[AB]</text>
                  </svg>
                  <figcaption>Segment <em>[AB]</em></figcaption>
                </figure>
              </div>
              <div class="math-prop">
                <span class="label">Rezumat</span>
                <p>• <strong>Punct</strong>: locație fără dimensiune (A, B, C...)</p>
                <p>• <strong>Dreaptă</strong>: infinit de puncte coliniare, fără capete</p>
                <p>• <strong>Semidreaptă</strong>: o jumătate de dreaptă cu un capăt (originea)</p>
                <p>• <strong>Segment</strong> $[AB]$: porțiunea de dreaptă dintre A și B (cu ambele capete)</p>
                <p>• <strong>Plan</strong>: suprafața infinit plată; <strong>semiplan</strong>: jumătatea unui plan delimitată de o dreaptă</p>
              </div>
            </div>
          `
        },

        {
          id: "pozitii-relative",
          title: "Pozițiile relative ale dreptelor",
          content: `
            <div class="content-block">
              <h4>🔀 Poziții relative a două drepte în plan</h4>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="60" x2="150" y2="60" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="10" y1="85" x2="150" y2="85" stroke="#2e5f8e" stroke-width="2"/>
                    <text x="140" y="56" font-size="12" fill="#1a7a4a" font-family="serif" font-style="italic">d₁</text>
                    <text x="140" y="81" font-size="12" fill="#2e5f8e" font-family="serif" font-style="italic">d₂</text>
                    <text x="50" y="110" font-size="11" fill="#444" font-family="sans-serif">d₁ ∥ d₂</text>
                  </svg>
                  <figcaption>Drepte paralele</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="20" x2="150" y2="100" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="10" y1="100" x2="150" y2="20" stroke="#2e5f8e" stroke-width="2"/>
                    <circle cx="80" cy="60" r="4" fill="#c0392b"/>
                    <text x="84" y="56" font-size="12" fill="#c0392b" font-family="serif" font-style="italic">P</text>
                    <text x="30" y="115" font-size="11" fill="#444" font-family="sans-serif">Drepte concurente (P)</text>
                  </svg>
                  <figcaption>Drepte concurente în P</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10" y1="60" x2="150" y2="60" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="80" y1="10" x2="80" y2="110" stroke="#2e5f8e" stroke-width="2"/>
                    <circle cx="80" cy="60" r="4" fill="#c0392b"/>
                    <rect x="80" y="54" width="8" height="8" fill="none" stroke="#c0392b" stroke-width="1.5"/>
                    <text x="30" y="115" font-size="11" fill="#444" font-family="sans-serif">Drepte perpendiculare</text>
                  </svg>
                  <figcaption>Drepte perpendiculare (d₁ ⊥ d₂)</figcaption>
                </figure>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ De reținut</div>
                <p>Două drepte din plan sunt fie <strong>paralele</strong> (nu se intersectează), fie <strong>concurente</strong> (se intersectează într-un punct). Cazul special al dreptelor concurente: dreptele <strong>perpendiculare</strong> formează unghiuri de 90°.</p>
                <p><strong>Puncte coliniare</strong>: puncte care se află pe aceeași dreaptă.</p>
              </div>
            </div>
          `
        },

        {
          id: "lungime-segment",
          title: "Lungimea unui segment. Distanța. Segmente congruente",
          content: `
            <div class="content-block">
              <h4>📏 Lungimea segmentului și distanța</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiții</div>
                <p>• <strong>Lungimea segmentului</strong> $[AB]$, notată $AB$ sau $|AB|$, este un număr pozitiv care exprimă mărimea lui.</p>
                <p>• <strong>Distanța</strong> dintre două puncte = lungimea segmentului care le unește.</p>
                <p>• <strong>Segmente congruente</strong>: au lungimi egale, notat $[AB] \\equiv [CD]$ sau $AB = CD$.</p>
              </div>
              <div class="geo-figure">
                <svg width="340" height="60" viewBox="0 0 340 60" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20" y1="30" x2="160" y2="30" stroke="#1a7a4a" stroke-width="2.5"/>
                  <circle cx="20" cy="30" r="4" fill="#c0392b"/>
                  <circle cx="160" cy="30" r="4" fill="#c0392b"/>
                  <text x="12" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">A</text>
                  <text x="162" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">B</text>
                  <line x1="85" y1="22" x2="85" y2="38" stroke="#666" stroke-width="1.5"/>
                  <text x="70" y="52" font-size="11" fill="#1a7a4a" font-family="sans-serif">AB = 7 cm</text>
                  <line x1="190" y1="30" x2="330" y2="30" stroke="#2e5f8e" stroke-width="2.5"/>
                  <circle cx="190" cy="30" r="4" fill="#c0392b"/>
                  <circle cx="330" cy="30" r="4" fill="#c0392b"/>
                  <text x="182" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">C</text>
                  <text x="332" y="22" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">D</text>
                  <text x="238" y="52" font-size="11" fill="#2e5f8e" font-family="sans-serif">CD = 7 cm</text>
                  <text x="148" y="32" font-size="14" fill="#666" font-family="sans-serif">≡</text>
                </svg>
                <figcaption>$[AB] \\equiv [CD]$ (segmente congruente)</figcaption>
              </div>
            </div>
          `
        },

        {
          id: "mijloc-segment",
          title: "Mijlocul unui segment. Simetricul unui punct față de un punct",
          content: `
            <div class="content-block">
              <h4>📍 Mijlocul unui segment</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Punctul $M$ este <strong>mijlocul segmentului</strong> $[AB]$ dacă $M \\in [AB]$ și $MA = MB$, adică $MA = MB = \\dfrac{AB}{2}$.</p>
              </div>
              <div class="geo-figure">
                <svg width="300" height="60" viewBox="0 0 300 60" xmlns="http://www.w3.org/2000/svg">
                  <line x1="30" y1="35" x2="270" y2="35" stroke="#1a7a4a" stroke-width="2.5"/>
                  <circle cx="30" cy="35" r="4" fill="#c0392b"/>
                  <circle cx="150" cy="35" r="4" fill="#2e5f8e"/>
                  <circle cx="270" cy="35" r="4" fill="#c0392b"/>
                  <text x="22" y="26" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">A</text>
                  <text x="145" y="26" font-size="13" fill="#2e5f8e" font-family="serif" font-style="italic">M</text>
                  <text x="264" y="26" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">B</text>
                  <text x="70" y="54" font-size="11" fill="#666" font-family="sans-serif">AM</text>
                  <text x="190" y="54" font-size="11" fill="#666" font-family="sans-serif">MB</text>
                  <text x="140" y="54" font-size="12" fill="#1a7a4a" font-family="sans-serif">=</text>
                </svg>
                <figcaption>M este mijlocul lui [AB]; AM = MB</figcaption>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Simetricul față de un punct</div>
                <p>Simetricul punctului $A$ față de punctul $M$ este punctul $A'$ astfel încât $M$ este mijlocul segmentului $[AA']$, deci $MA = MA'$.</p>
              </div>
            </div>
          `
        },

        {
          id: "unghi-definitie",
          title: "Unghi: definiție, notații, elemente",
          content: `
            <div class="content-block">
              <h4>∠ Unghiul</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Unghiul $\\angle AOB$ (sau $\\widehat{AOB}$) este figura geometrică formată din două <em>semidrepte</em> $[OA$ și $[OB$ cu aceeași origine $O$.</p>
                <p>• $O$ = <strong>vârful</strong> unghiului</p>
                <p>• $[OA$ și $[OB$ = <strong>laturile</strong> unghiului</p>
                <p>• <strong>Interiorul</strong>: mulțimea punctelor din planul delimitat de cele două laturi, în interior</p>
              </div>
              <div class="geo-figure">
                <svg width="200" height="160" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                  <line x1="100" y1="130" x2="170" y2="130" stroke="#1a7a4a" stroke-width="2.5"/>
                  <line x1="100" y1="130" x2="50" y2="30" stroke="#2e5f8e" stroke-width="2.5"/>
                  <path d="M 130 130 A 30 30 0 0 0 113 96" fill="none" stroke="#c0392b" stroke-width="2"/>
                  <circle cx="100" cy="130" r="4" fill="#c0392b"/>
                  <text x="90" y="148" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">O</text>
                  <text x="174" y="134" font-size="13" fill="#1a7a4a" font-family="serif" font-style="italic">A</text>
                  <text x="38" y="24" font-size="13" fill="#2e5f8e" font-family="serif" font-style="italic">B</text>
                  <text x="135" y="120" font-size="13" fill="#c0392b" font-family="serif" font-style="italic">α</text>
                </svg>
                <figcaption>Unghiul ∠AOB (sau α)</figcaption>
              </div>
            </div>
          `
        },

        {
          id: "masura-unghi",
          title: "Măsura unui unghi. Unghiuri congruente",
          content: `
            <div class="content-block">
              <h4>📐 Măsura unghiurilor</h4>
              <div class="retine">
                <div class="retine-label">✏️ Unitatea de măsură</div>
                <p>Unghiurile se măsoară în <strong>grade (°)</strong>. Unghiul plin = 360°. Se folosește <strong>raportorul</strong> pentru construcție și măsurare.</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Unghiuri congruente</div>
                <p>Două unghiuri sunt <strong>congruente</strong> dacă au aceeași măsură: $\\angle AOB \\equiv \\angle COD \\Leftrightarrow m(\\angle AOB) = m(\\angle COD)$.</p>
              </div>
              <div class="math-prop">
                <span class="label">Observație</span>
                <p>Unghiurile se adună și se scad: dacă $OB$ este în interiorul $\\angle AOC$, atunci $m(\\angle AOC) = m(\\angle AOB) + m(\\angle BOC)$.</p>
              </div>
            </div>
          `
        },

        {
          id: "clasificare-unghiuri",
          title: "Clasificarea unghiurilor",
          content: `
            <div class="content-block">
              <h4>📊 Clasificarea după măsură</h4>
              <table class="math-table">
                <thead><tr><th>Tip unghi</th><th>Măsură</th></tr></thead>
                <tbody>
                  <tr><td>Unghi nul</td><td>$0°$</td></tr>
                  <tr><td>Unghi ascuțit</td><td>$0° < \\alpha < 90°$</td></tr>
                  <tr><td>Unghi drept</td><td>$\\alpha = 90°$</td></tr>
                  <tr><td>Unghi obtuz</td><td>$90° < \\alpha < 180°$</td></tr>
                  <tr><td>Unghi de 180° (plat / drept)</td><td>$\\alpha = 180°$</td></tr>
                  <tr><td>Unghi reflex</td><td>$180° < \\alpha < 360°$</td></tr>
                  <tr><td>Unghi plin (complet)</td><td>$\\alpha = 360°$</td></tr>
                </tbody>
              </table>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="130" height="110" viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg">
                    <line x1="65" y1="90" x2="120" y2="90" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="65" y1="90" x2="105" y2="30" stroke="#2e5f8e" stroke-width="2"/>
                    <path d="M 90 90 A 25 25 0 0 0 79 65" fill="rgba(192,57,43,0.15)" stroke="#c0392b" stroke-width="1.5"/>
                    <circle cx="65" cy="90" r="3.5" fill="#c0392b"/>
                    <text x="86" y="82" font-size="11" fill="#c0392b">~45°</text>
                    <text x="35" y="108" font-size="12" fill="#444" font-family="sans-serif">Ascuțit</text>
                  </svg>
                </figure>
                <figure class="geo-figure">
                  <svg width="130" height="110" viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg">
                    <line x1="65" y1="90" x2="120" y2="90" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="65" y1="90" x2="65" y2="20" stroke="#2e5f8e" stroke-width="2"/>
                    <rect x="65" y="74" width="16" height="16" fill="none" stroke="#c0392b" stroke-width="1.8"/>
                    <circle cx="65" cy="90" r="3.5" fill="#c0392b"/>
                    <text x="35" y="108" font-size="12" fill="#444" font-family="sans-serif">Drept (90°)</text>
                  </svg>
                </figure>
                <figure class="geo-figure">
                  <svg width="130" height="110" viewBox="0 0 130 110" xmlns="http://www.w3.org/2000/svg">
                    <line x1="65" y1="90" x2="120" y2="90" stroke="#1a7a4a" stroke-width="2"/>
                    <line x1="65" y1="90" x2="20" y2="40" stroke="#2e5f8e" stroke-width="2"/>
                    <path d="M 90 90 A 25 25 0 0 0 49 71" fill="rgba(46,95,142,0.1)" stroke="#c0392b" stroke-width="1.5"/>
                    <circle cx="65" cy="90" r="3.5" fill="#c0392b"/>
                    <text x="60" y="78" font-size="11" fill="#c0392b">~120°</text>
                    <text x="35" y="108" font-size="12" fill="#444" font-family="sans-serif">Obtuz</text>
                  </svg>
                </figure>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Perechi de unghiuri</div>
                <p><strong>Unghiuri complementare:</strong> suma = 90°</p>
                <p><strong>Unghiuri suplementare:</strong> suma = 180°</p>
                <p><strong>Unghiuri explementare:</strong> suma = 360°</p>
              </div>
            </div>
          `
        },

        {
          id: "figuri-congruente-simetrie",
          title: "Figuri congruente. Axa de simetrie",
          content: `
            <div class="content-block">
              <h4>🔄 Figuri congruente</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Două figuri geometrice sunt <strong>congruente</strong> dacă pot fi suprapuse perfect (prin translație, rotație sau simetrie), adică au aceleași dimensiuni și formă.</p>
              </div>
              <div class="retine">
                <div class="retine-label">✏️ Axa de simetrie</div>
                <p>O dreaptă $d$ este <strong>axă de simetrie</strong> a unei figuri dacă, pentru orice punct $P$ al figurii, simetricul lui $P$ față de $d$ aparține tot figurii.</p>
              </div>
              <div class="geo-figure">
                <svg width="300" height="140" viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg">
                  <!-- Left triangle -->
                  <polygon points="30,120 90,120 60,40" fill="rgba(26,122,74,0.15)" stroke="#1a7a4a" stroke-width="2"/>
                  <!-- Axis of symmetry -->
                  <line x1="150" y1="10" x2="150" y2="130" stroke="#c0392b" stroke-width="2" stroke-dasharray="6,4"/>
                  <!-- Right triangle (mirrored) -->
                  <polygon points="210,120 270,120 240,40" fill="rgba(46,95,142,0.15)" stroke="#2e5f8e" stroke-width="2"/>
                  <text x="140" y="8" font-size="12" fill="#c0392b" font-family="serif" font-style="italic">d</text>
                  <text x="50" y="136" font-size="11" fill="#1a7a4a" font-family="sans-serif">Fig. 1</text>
                  <text x="220" y="136" font-size="11" fill="#2e5f8e" font-family="sans-serif">Fig. 2</text>
                  <text x="110" y="136" font-size="10" fill="#c0392b" font-family="sans-serif">axă simtrie</text>
                </svg>
                <figcaption>Figuri simetrice față de dreapta d</figcaption>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Figuri cu axe de simetrie</div>
                <p>• <strong>Pătrat</strong>: 4 axe de simetrie</p>
                <p>• <strong>Dreptunghi</strong>: 2 axe de simetrie</p>
                <p>• <strong>Triunghi echilateral</strong>: 3 axe de simetrie</p>
                <p>• <strong>Cerc</strong>: infinit de axe de simetrie</p>
                <p>• <strong>Triunghi scalén</strong>: 0 axe de simetrie</p>
              </div>
            </div>
          `
        },

        {
          id: "unitati-lungime-perimetru",
          title: "Unități de lungime. Perimetrul",
          content: `
            <div class="content-block">
              <h4>📏 Unități de lungime</h4>
              <table class="math-table">
                <thead><tr><th>Unitate</th><th>Echivalent</th></tr></thead>
                <tbody>
                  <tr><td>1 km</td><td>1 000 m</td></tr>
                  <tr><td>1 m</td><td>10 dm = 100 cm = 1 000 mm</td></tr>
                  <tr><td>1 dm</td><td>10 cm</td></tr>
                  <tr><td>1 cm</td><td>10 mm</td></tr>
                </tbody>
              </table>
            </div>
            <div class="content-block">
              <h4>🔢 Perimetrul</h4>
              <div class="retine">
                <div class="retine-label">✏️ Definiție</div>
                <p>Perimetrul unei figuri plane = suma lungimilor tuturor laturilor.</p>
              </div>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="120" height="80" fill="rgba(26,122,74,0.1)" stroke="#1a7a4a" stroke-width="2"/>
                    <text x="65" y="15" font-size="12" fill="#1a7a4a">a</text>
                    <text x="145" y="65" font-size="12" fill="#1a7a4a">b</text>
                    <text x="65" y="115" font-size="12" fill="#1a7a4a">a</text>
                    <text x="2" y="65" font-size="12" fill="#1a7a4a">b</text>
                  </svg>
                  <figcaption>Dreptunghi: $P = 2(a+b)$</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="80" height="80" fill="rgba(46,95,142,0.1)" stroke="#2e5f8e" stroke-width="2"/>
                    <text x="52" y="15" font-size="12" fill="#2e5f8e">a</text>
                    <text x="104" y="65" font-size="12" fill="#2e5f8e">a</text>
                    <text x="52" y="114" font-size="12" fill="#2e5f8e">a</text>
                    <text x="4" y="65" font-size="12" fill="#2e5f8e">a</text>
                  </svg>
                  <figcaption>Pătrat: $P = 4a$</figcaption>
                </figure>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>Dreptunghi: $a = 8$ cm, $b = 5$ cm → $P = 2(8+5) = 2 \\cdot 13 = 26$ cm</p>
                <p>Pătrat: $a = 7$ cm → $P = 4 \\cdot 7 = 28$ cm</p>
              </div>
            </div>
          `
        },

        {
          id: "unitati-arie",
          title: "Unități de arie. Aria pătratului și dreptunghiului",
          content: `
            <div class="content-block">
              <h4>📐 Unități de arie</h4>
              <table class="math-table">
                <thead><tr><th>Unitate</th><th>Echivalent</th></tr></thead>
                <tbody>
                  <tr><td>1 km²</td><td>1 000 000 m² = 100 ha</td></tr>
                  <tr><td>1 ha</td><td>10 000 m²</td></tr>
                  <tr><td>1 m²</td><td>100 dm² = 10 000 cm²</td></tr>
                  <tr><td>1 dm²</td><td>100 cm²</td></tr>
                  <tr><td>1 cm²</td><td>100 mm²</td></tr>
                </tbody>
              </table>
              <h5>Formule de arie</h5>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="160" height="120" viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="120" height="80" fill="rgba(26,122,74,0.2)" stroke="#1a7a4a" stroke-width="2"/>
                    <text x="65" y="15" font-size="12" fill="#1a7a4a">a</text>
                    <text x="145" y="65" font-size="12" fill="#1a7a4a">b</text>
                    <text x="70" y="68" font-size="14" fill="#1a7a4a" font-weight="bold">A = a·b</text>
                  </svg>
                  <figcaption>Dreptunghi: $\\mathcal{A} = a \\cdot b$</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="80" height="80" fill="rgba(46,95,142,0.2)" stroke="#2e5f8e" stroke-width="2"/>
                    <text x="52" y="15" font-size="12" fill="#2e5f8e">a</text>
                    <text x="104" y="65" font-size="12" fill="#2e5f8e">a</text>
                    <text x="38" y="68" font-size="14" fill="#2e5f8e" font-weight="bold">A = a²</text>
                  </svg>
                  <figcaption>Pătrat: $\\mathcal{A} = a^2$</figcaption>
                </figure>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemplu</div>
                <p>Dreptunghi: $a = 6$ m, $b = 4$ m → $\\mathcal{A} = 6 \\cdot 4 = 24$ m²</p>
                <p>Pătrat: $a = 5$ cm → $\\mathcal{A} = 5^2 = 25$ cm²</p>
              </div>
            </div>
          `
        },

        {
          id: "unitati-volum",
          title: "Unități de volum. Volumul cubului și paralelipipedului",
          content: `
            <div class="content-block">
              <h4>📦 Unități de volum</h4>
              <table class="math-table">
                <thead><tr><th>Unitate</th><th>Echivalent</th></tr></thead>
                <tbody>
                  <tr><td>1 m³</td><td>1 000 dm³ = 1 000 L</td></tr>
                  <tr><td>1 dm³</td><td>1 000 cm³ = 1 L</td></tr>
                  <tr><td>1 cm³</td><td>1 000 mm³ = 1 mL</td></tr>
                </tbody>
              </table>
              <h5>Formule de volum</h5>
              <div class="geo-grid">
                <figure class="geo-figure">
                  <svg width="160" height="140" viewBox="0 0 160 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Cube (axonometric) -->
                    <polygon points="30,100 110,100 110,40 30,40" fill="rgba(26,122,74,0.15)" stroke="#1a7a4a" stroke-width="2"/>
                    <polygon points="110,100 140,70 140,10 110,40" fill="rgba(26,122,74,0.25)" stroke="#1a7a4a" stroke-width="2"/>
                    <polygon points="30,40 110,40 140,10 60,10" fill="rgba(26,122,74,0.2)" stroke="#1a7a4a" stroke-width="2"/>
                    <!-- Labels -->
                    <text x="60" y="126" font-size="12" fill="#1a7a4a" font-family="serif" font-style="italic">a</text>
                    <text x="124" y="90" font-size="12" fill="#1a7a4a" font-family="serif" font-style="italic">a</text>
                    <text x="16" y="72" font-size="12" fill="#1a7a4a" font-family="serif" font-style="italic">a</text>
                    <text x="48" y="78" font-size="12" fill="#1a7a4a" font-weight="bold">V=a³</text>
                  </svg>
                  <figcaption>Cub: $V = a^3$</figcaption>
                </figure>
                <figure class="geo-figure">
                  <svg width="180" height="140" viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
                    <!-- Rectangular prism (axonometric) -->
                    <polygon points="20,110 130,110 130,60 20,60" fill="rgba(46,95,142,0.15)" stroke="#2e5f8e" stroke-width="2"/>
                    <polygon points="130,110 160,80 160,30 130,60" fill="rgba(46,95,142,0.25)" stroke="#2e5f8e" stroke-width="2"/>
                    <polygon points="20,60 130,60 160,30 50,30" fill="rgba(46,95,142,0.2)" stroke="#2e5f8e" stroke-width="2"/>
                    <text x="68" y="128" font-size="12" fill="#2e5f8e" font-family="serif" font-style="italic">a</text>
                    <text x="145" y="95" font-size="12" fill="#2e5f8e" font-family="serif" font-style="italic">b</text>
                    <text x="6" y="86" font-size="12" fill="#2e5f8e" font-family="serif" font-style="italic">c</text>
                    <text x="45" y="90" font-size="11" fill="#2e5f8e" font-weight="bold">V=a·b·c</text>
                  </svg>
                  <figcaption>Paralelipiped dreptunghic: $V = a \\cdot b \\cdot c$</figcaption>
                </figure>
              </div>
              <div class="rezolvat">
                <div class="rezolvat-label">🔍 Exemple</div>
                <p>Cub cu latura $a = 3$ cm: $V = 3^3 = 27$ cm³</p>
                <p>Paralelipiped: $a=5$ m, $b=3$ m, $c=2$ m: $V = 5 \\cdot 3 \\cdot 2 = 30$ m³</p>
              </div>
            </div>
          `
        }
      ]
    }

  ]
};
