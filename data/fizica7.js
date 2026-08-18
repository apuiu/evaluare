// ============================================================
//  FIZICĂ - CLASA A VII-A
//  Conținut aliniat cu programa școlară și manualul cls. 7
//  Structură: 4 unități complete
// ============================================================

// ─── Funcții helper (prefixate F7 pentru a evita coliziuni) ───

const listF7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const solvedF7 = (items) => items.map((item, index) => `
  <div class="rezolvat">
    <div class="rezolvat-label">Exemplu ${index + 1} – ${item.label}</div>
    <p><strong>Se dă:</strong> ${item.given}</p>
    <p><strong>Se cere:</strong> ${item.ask}</p>
    <p><strong>Rezolvare:</strong> ${item.solve}</p>
    ${item.check ? `<p><strong>Verificare:</strong> ${item.check}</p>` : ""}
    <p><strong>Răspuns:</strong> ${item.answer}</p>
  </div>`).join("\n");

const lessonF7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Ce învățăm</div>
    <p>${data.learn}</p>
  </div>
  <h4>Termeni și mărimi fizice</h4>
  <ul>${listF7(data.terms)}</ul>
  <h4>Legi / Formule</h4>
  <ul>${listF7(data.properties)}</ul>
  <h4>Cum aplicăm</h4>
  <ol>${listF7(data.steps)}</ol>
  <div class="atentie">
    <div class="atentie-label">Atenție!</div>
    <ul>${listF7(data.tips)}</ul>
  </div>
  ${solvedF7(data.examples)}
  <h4>Exerciții propuse</h4>
  <ol>${listF7(data.exercises)}</ol>
</div>`;

const recapF7 = (data) => `
<div class="content-block">
  <div class="retine">
    <div class="retine-label">Recapitulare</div>
    <p>${data.summary}</p>
  </div>
  <h4>Formule-cheie</h4>
  <ul>${listF7(data.keys)}</ul>
  <div class="atentie">
    <div class="atentie-label">Greșeli frecvente</div>
    <ul>${listF7(data.mistakes)}</ul>
  </div>
  ${solvedF7([data.problem])}
  <h4>Exerciții mixte</h4>
  <ol>${listF7(data.exercises)}</ol>
</div>`;

const chF7    = (id, title) => ({ id, title, content: lessonF7(topicsF7[id]) });
const recapChF7 = (id, title) => ({ id, title, content: recapF7(recapTopicsF7[id]) });

// ============================================================
//  TOPICS – conținut lecții
// ============================================================

const topicsF7 = {

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 1 – Optică geometrică
  // ══════════════════════════════════════════════════════════

  "u1-l1-lumina": {
    learn: "Descriem proprietățile luminii, sursele luminoase și felul în care se propagă în medii omogene.",
    terms: [
      "<strong>Lumina</strong>: formă de energie electromagnetică vizibilă de ochiul uman.",
      "<strong>Sursă luminoasă primară</strong>: emite propria lumină (Soarele, becul, flacăra).",
      "<strong>Sursă luminoasă secundară</strong>: reflectă lumina altei surse (Luna, obiectele opace luminate).",
      "<strong>Raza de lumină</strong>: linie dreaptă care arată direcția de propagare a luminii.",
      "<strong>Fascicul de lumină</strong>: ansamblu de raze (paralel, convergent, divergent).",
      "<strong>Viteza luminii</strong>: $c = 3 \\times 10^8$ m/s în vid.",
      "<strong>Mediu omogen</strong>: mediu cu proprietăți fizice uniforme (lumina se propagă în linie dreaptă)."
    ],
    properties: [
      "Lumina se propagă în linie dreaptă în medii omogene (principiul propagării rectilinii).",
      "Viteza luminii în vid: $c = 3 \\times 10^8$ m/s; în alte medii este mai mică.",
      "Lumina albă este o combinație de lumini colorate (spectrală); prismă → spectru ROGVAIV.",
      "Umbra și penumbra apar datorită propagării rectilinii a luminii.",
      "Eclipsele sunt explicate prin propagarea rectilinie: Luna/Pământul blochează lumina Soarelui."
    ],
    steps: [
      "Identifică sursa luminoasă (primară sau secundară).",
      "Aplică principiul propagării rectilinii pentru a trasa razele.",
      "Determină zona de umbră (blocaj complet) și penumbră (blocaj parțial).",
      "Calculează viteza luminii în mediu: $v = c/n$ (n = indicele de refracție)."
    ],
    tips: [
      "Lumina se propagă în linie dreaptă NUMAI în medii omogene.",
      "Viteza luminii în apă ≈ $2{,}25 \\times 10^8$ m/s; în sticlă ≈ $2 \\times 10^8$ m/s.",
      "Dacă sursa este punctiformă → umbră cu contur net; sursă extinsă → umbră + penumbră.",
      "Eclipsa de Soare: Luna blochează lumina Soarelui spre Pământ."
    ],
    examples: [
      {
        label: "propagare rectilinie",
        given: "Un corp opac se află între o sursă punctiformă și un ecran",
        ask: "Ce apare pe ecran și de ce?",
        solve: "Razele de lumină nu pot ocoli corpul opac (propagare rectilinie) → în spatele corpului nu ajunge lumina → se formează umbra corpului pe ecran.",
        answer: "Umbra corpului, datorită propagării rectilinii a luminii"
      },
      {
        label: "timp de propagare",
        given: "Distanța Pământ–Lună: $d = 3{,}84 \\times 10^8$ m; $c = 3 \\times 10^8$ m/s",
        ask: "Timpul în care lumina parcurge distanța Pământ–Lună",
        solve: "$t = \\dfrac{d}{c} = \\dfrac{3{,}84 \\times 10^8}{3 \\times 10^8} = 1{,}28$ s",
        answer: "$t \\approx 1{,}28$ s"
      },
      {
        label: "viteza în apă",
        given: "Indicele de refracție al apei $n_{apă} = 1{,}33$",
        ask: "Viteza luminii în apă",
        solve: "$v = \\dfrac{c}{n} = \\dfrac{3 \\times 10^8}{1{,}33} \\approx 2{,}26 \\times 10^8$ m/s",
        answer: "$v \\approx 2{,}26 \\times 10^8$ m/s"
      }
    ],
    exercises: [
      "De ce vedem fulgerul înainte de a auzi tunetul?",
      "O sursă de lumină se află la $d = 1{,}5 \\times 10^{11}$ m de Pământ (Soarele). Calculați timpul de propagare a luminii.",
      "Explicați de ce apare eclipsa totală de Soare.",
      "Lumina trece printr-o prismă de sticlă. Ce fenomen apare și ce culori se observă?"
    ]
  },

  "u1-l2-reflexia": {
    learn: "Enunțăm și aplicăm legile reflexiei luminii pentru oglinzi plane și sferice.",
    terms: [
      "<strong>Reflexia luminii</strong>: întoarcerea luminii în primul mediu la întâlnirea unei suprafețe.",
      "<strong>Raza incidentă</strong>: raza care cade pe suprafața reflectătoare.",
      "<strong>Raza reflectată</strong>: raza care se întoarce în primul mediu.",
      "<strong>Normala</strong>: perpendiculara pe suprafața de separare în punctul de incidență.",
      "<strong>Unghiul de incidență ($i$)</strong>: unghiul dintre raza incidentă și normală.",
      "<strong>Unghiul de reflexie ($r$)</strong>: unghiul dintre raza reflectată și normală.",
      "<strong>Oglindă plană</strong>: suprafață plană perfect reflectătoare.",
      "<strong>Imagine virtuală</strong>: imagine formată de prelungirile razelor reflectate (nu poate fi proiectată pe ecran)."
    ],
    properties: [
      "<strong>Legea I</strong>: raza incidentă, normala și raza reflectată sunt coplanare.",
      "<strong>Legea II</strong>: unghiul de reflexie = unghiul de incidență: $r = i$.",
      "Imaginea în oglinda plană este: virtuală, dreaptă, la aceeași distanță față de oglindă ca obiectul.",
      "Imaginea în oglinda plană este simetrică față de planul oglinzii.",
      "Oglinda concavă (convergentă): adună razele paralele în focarul $F$.",
      "Oglinda convexă (divergentă): împrăștie razele; imaginea este micșorată și virtuală."
    ],
    steps: [
      "Trasează normala în punctul de incidență.",
      "Măsoară unghiul de incidență $i$ față de normală.",
      "Aplică Legea II: $r = i$ → trasează raza reflectată.",
      "Pentru oglinda plană: construiește imaginea simetrică față de planul oglinzii."
    ],
    tips: [
      "Unghiurile $i$ și $r$ se măsoară față de NORMALĂ, nu față de suprafață.",
      "Dacă $i = 0°$ (raza perpendiculară pe suprafață) → raza se întoarce pe ea însăși.",
      "Oglinda plană → imagine virtuală, dreaptă, simetrică (dreapta-stânga inversată).",
      "Nu confundați reflexia (primul mediu) cu refracția (al doilea mediu)."
    ],
    examples: [
      {
        label: "unghi de reflexie",
        given: "Raza incidentă face unghiul $i = 35°$ cu suprafața oglinzii",
        ask: "Unghiul de reflexie față de normală",
        solve: "Unghiul față de suprafață = 35° → unghiul față de normală = 90° − 35° = 55°. Prin Legea II: $r = i = 55°$.",
        answer: "$r = 55°$"
      },
      {
        label: "imagine în oglindă plană",
        given: "Un obiect se află la $d_o = 15$ cm de o oglindă plană",
        ask: "Distanța imaginii față de oglindă și caracteristicile ei",
        solve: "Oglinda plană: distanța imaginii = distanța obiectului față de oglindă → $d_i = 15$ cm. Imagine virtuală, dreaptă, aceeași dimensiune.",
        answer: "$d_i = 15$ cm; imaginea este virtuală, dreaptă, mărire = 1"
      },
      {
        label: "reflexie totală vs. parțială",
        given: "Suprafața apei este iluminată de o sursă de lumină",
        ask: "Ce se întâmplă cu lumina la suprafața apei?",
        solve: "O parte se reflectă (reflexie parțială) → vedem reflecția obiectelor; o parte se refractă și intră în apă.",
        answer: "Reflexie parțială + refracție simultane la suprafața apei"
      }
    ],
    exercises: [
      "Raza incidentă face $i = 40°$ cu normala. Calculați unghiul de reflexie.",
      "Un obiect este la 20 cm de o oglindă plană. Unde se formează imaginea? Ce caracteristici are?",
      "Desenați construcția geometrică a imaginii unui obiect în oglinda plană.",
      "De ce oglinzile retrovizoare ale mașinilor sunt oglinzi convexe și nu plane?"
    ]
  },

  "u1-l3-refractia": {
    learn: "Enunțăm legile refracției și aplicăm legea lui Snell pentru a calcula unghiurile și indicii de refracție.",
    terms: [
      "<strong>Refracția luminii</strong>: schimbarea direcției razei la trecerea dintr-un mediu în altul.",
      "<strong>Indicele de refracție absolut ($n$)</strong>: $n = \\dfrac{c}{v}$ (raportul vitezelor).",
      "<strong>Indicele de refracție relativ</strong>: $n_{12} = \\dfrac{n_2}{n_1} = \\dfrac{\\sin i}{\\sin r}$.",
      "<strong>Unghiul de incidență ($i$)</strong>: față de normală, în primul mediu.",
      "<strong>Unghiul de refracție ($r$)</strong>: față de normală, în al doilea mediu.",
      "<strong>Reflexia totală internă</strong>: apare când $i > i_c$ (unghi critic); lumina nu mai trece în al doilea mediu.",
      "<strong>Mediu mai dens optic</strong>: $n$ mai mare → viteza luminii mai mică."
    ],
    properties: [
      "<strong>Legea I</strong>: raza incidentă, normala și raza refractată sunt coplanare.",
      "<strong>Legea II (Snell–Descartes)</strong>: $n_1 \\sin i = n_2 \\sin r$.",
      "La trecerea în mediu mai dens ($n_2 > n_1$): raza se apropie de normală ($r < i$).",
      "La trecerea în mediu mai puțin dens ($n_2 < n_1$): raza se depărtează de normală ($r > i$).",
      "Reflexia totală internă: $\\sin i_c = \\dfrac{n_2}{n_1}$ (cu $n_1 > n_2$); aplicații: fibra optică."
    ],
    steps: [
      "Identifică mediile și indicii de refracție ($n_1$, $n_2$).",
      "Aplică legea lui Snell: $n_1 \\sin i = n_2 \\sin r$.",
      "Calculează $\\sin r = \\dfrac{n_1 \\sin i}{n_2}$.",
      "Verifică: dacă $n_2 > n_1$ → $r < i$; dacă $n_2 < n_1$ → $r > i$."
    ],
    tips: [
      "Unghiurile $i$ și $r$ sunt față de NORMALĂ.",
      "Trecere aer→sticlă ($n_{sticlă} > n_{aer}$): raza se apropie de normală.",
      "Trecere sticlă→aer ($n_{aer} < n_{sticlă}$): raza se depărtează de normală → posibil reflexie totală.",
      "Fibra optică folosește reflexia totală internă pentru transmiterea luminii."
    ],
    examples: [
      {
        label: "Snell aer→sticlă",
        given: "$n_{aer} = 1$; $n_{sticlă} = 1{,}5$; $i = 30°$",
        ask: "Unghiul de refracție $r$",
        solve: "$n_1 \\sin i = n_2 \\sin r \\Rightarrow 1 \\cdot \\sin 30° = 1{,}5 \\cdot \\sin r \\Rightarrow \\sin r = \\dfrac{0{,}5}{1{,}5} = 0{,}333 \\Rightarrow r \\approx 19{,}5°$",
        answer: "$r \\approx 19{,}5°$"
      },
      {
        label: "indice de refracție",
        given: "Lumina trece din aer în apă; $i = 45°$, $r = 32°$",
        ask: "Indicele de refracție al apei",
        solve: "$n_{apă} = \\dfrac{n_{aer} \\cdot \\sin i}{\\sin r} = \\dfrac{1 \\cdot \\sin 45°}{\\sin 32°} = \\dfrac{0{,}707}{0{,}530} \\approx 1{,}33$",
        answer: "$n_{apă} \\approx 1{,}33$"
      },
      {
        label: "reflexie totală",
        given: "$n_{sticlă} = 1{,}5$; lumina trece din sticlă în aer",
        ask: "Unghiul critic $i_c$",
        solve: "$\\sin i_c = \\dfrac{n_{aer}}{n_{sticlă}} = \\dfrac{1}{1{,}5} = 0{,}667 \\Rightarrow i_c \\approx 41{,}8°$",
        answer: "$i_c \\approx 41{,}8°$"
      }
    ],
    exercises: [
      "Lumina trece din aer ($n=1$) în diamant ($n=2{,}42$) cu $i = 20°$. Calculați $r$.",
      "De ce un băț introdus oblic în apă pare frânt? Explicați cu legea refracției.",
      "Calculați unghiul critic pentru sticla cu $n = 1{,}6$.",
      "Ce aplicații practice utilizează reflexia totală internă?"
    ]
  },

  "u1-l4-lentile": {
    learn: "Descriem tipurile de lentile, construim imaginile și aplicăm formula lentilei subțiri.",
    terms: [
      "<strong>Lentilă convergentă (convexă)</strong>: mai groasă la centru; adună razele paralele în focar $F$.",
      "<strong>Lentilă divergentă (concavă)</strong>: mai subțire la centru; împrăștie razele.",
      "<strong>Focarul principal $F$</strong>: punctul în care razele paralele converg (sau par să divergă).",
      "<strong>Distanța focală $f$</strong>: distanța de la centrul optic la focar; $f > 0$ convergentă, $f < 0$ divergentă.",
      "<strong>Vergența $D$</strong>: $D = \\dfrac{1}{f}$ (dioptrii, D); $f$ în metri.",
      "<strong>Ecuația lentilei subțiri</strong>: $\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$ ($d_o$ = distanța obiect, $d_i$ = distanța imagine).",
      "<strong>Mărirea liniară $m$</strong>: $m = -\\dfrac{d_i}{d_o}$; $|m| > 1$ → imagine mărită."
    ],
    properties: [
      "Lentilă convergentă: $f > 0$; formează imagine reală (răsturnată) dacă $d_o > f$.",
      "Lentilă convergentă: formează imagine virtuală (dreaptă, mărită) dacă $d_o < f$ – lupă.",
      "Lentilă divergentă: $f < 0$; formează mereu imagine virtuală, dreaptă, micșorată.",
      "Vergența: $D = 1/f$ (dioptrii); lentile cu $D > 0$ = convergente; $D < 0$ = divergente.",
      "Ochiul uman: cristalinul este o lentilă convergentă cu vergență variabilă (acomodare)."
    ],
    steps: [
      "Identifică tipul lentilei ($f > 0$ sau $f < 0$).",
      "Aplică ecuația lentilei: $\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$.",
      "Calculează $d_i$; dacă $d_i > 0$ → imagine reală; $d_i < 0$ → virtuală.",
      "Calculează mărirea: $m = -d_i / d_o$; $|m| > 1$ → mărită; $|m| < 1$ → micșorată."
    ],
    tips: [
      "Cele 3 raze principale: paralelă cu axa → prin $F'$; prin $F$ → paralelă cu axa; prin centrul optic → nedeviată.",
      "$d_i > 0$ → imagine reală (de aceeași parte cu ecranul față de lentilă).",
      "$d_i < 0$ → imagine virtuală (de aceeași parte cu obiectul).",
      "Miopie: globul ocular prea lung → lentile divergente; Hipermetropie: lentile convergente."
    ],
    examples: [
      {
        label: "imagine reală",
        given: "Lentilă convergentă, $f = 10$ cm; obiect la $d_o = 30$ cm",
        ask: "Distanța și caracteristicile imaginii",
        solve: "$\\dfrac{1}{d_i} = \\dfrac{1}{f} - \\dfrac{1}{d_o} = \\dfrac{1}{10} - \\dfrac{1}{30} = \\dfrac{2}{30} \\Rightarrow d_i = 15$ cm. $m = -15/30 = -0{,}5$ → imagine reală, răsturnată, micșorată.",
        answer: "$d_i = 15$ cm; reală, răsturnată, micșorată ($|m|=0{,}5$)"
      },
      {
        label: "lupă",
        given: "Lentilă convergentă, $f = 10$ cm; obiect la $d_o = 6$ cm",
        ask: "Distanța și caracteristicile imaginii",
        solve: "$\\dfrac{1}{d_i} = \\dfrac{1}{10} - \\dfrac{1}{6} = \\dfrac{3-5}{30} = -\\dfrac{2}{30} \\Rightarrow d_i = -15$ cm. $m = 15/6 = 2{,}5$ → imagine virtuală, dreaptă, mărită.",
        answer: "$d_i = -15$ cm; virtuală, dreaptă, mărită ($m=2{,}5$)"
      },
      {
        label: "vergență",
        given: "Lentilă cu $f = 20$ cm = $0{,}20$ m",
        ask: "Vergența lentilei în dioptrii",
        solve: "$D = \\dfrac{1}{f} = \\dfrac{1}{0{,}20} = 5$ dioptrii",
        answer: "$D = +5$ dioptrii (convergentă)"
      }
    ],
    exercises: [
      "O lentilă convergentă cu $f = 15$ cm are un obiect la $d_o = 45$ cm. Calculați $d_i$ și $m$.",
      "Ce tip de lentilă se foloseste pentru corectarea miopiei? Justificați.",
      "Calculați vergența unui obiectiv fotografic cu $f = 50$ mm.",
      "Lentilă divergentă $f = -20$ cm; obiect la $d_o = 30$ cm. Calculați $d_i$."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 2 – Electricitate statică
  // ══════════════════════════════════════════════════════════

  "u2-l1-electrostatica": {
    learn: "Descriem electrizarea corpurilor, tipurile de sarcini electrice și interacțiunile dintre ele.",
    terms: [
      "<strong>Sarcina electrică $q$</strong>: proprietate fundamentală a materiei; unitate: coulombul (C).",
      "<strong>Sarcina electrică elementară $e$</strong>: $e = 1{,}6 \\times 10^{-19}$ C (sarcina unui proton).",
      "<strong>Electrizare</strong>: procesul de comunicare a sarcinii electrice unui corp.",
      "<strong>Corp încărcat pozitiv (+)</strong>: a pierdut electroni.",
      "<strong>Corp încărcat negativ (−)</strong>: a câștigat electroni.",
      "<strong>Electrizare prin frecare</strong>: transfer de electroni între două materiale diferite.",
      "<strong>Electrizare prin inducție</strong>: redistribuirea sarcinilor fără contact.",
      "<strong>Electrizare prin contact</strong>: transfer de sarcini prin atingere."
    ],
    properties: [
      "Sarcinile de același semn se resping; sarcinile de semne opuse se atrag.",
      "Sarcina electrică se conservă (legea conservării sarcinii electrice).",
      "Corpul neutru are nr. protoni = nr. electroni.",
      "Electrizare prin frecare: un material cedează electroni (+ ), altul primește (−).",
      "Conductoarele (metale) permit mișcarea liberă a electronilor; izolatoarele nu."
    ],
    steps: [
      "Identifică tipul de electrizare (frecare, contact, inducție).",
      "Determină care corp a pierdut electroni (devine +) și care a câștigat (devine −).",
      "Aplică regula: sarcini egale → respingere; sarcini opuse → atracție.",
      "Verifică conservarea sarcinii totale."
    ],
    tips: [
      "Electronul are sarcina $-e = -1{,}6 \\times 10^{-19}$ C; protonul are $+e$.",
      "La frecare: sticla–mătase → sticla se încarcă +; ebonita–blană → ebonita se încarcă −.",
      "Electrizarea prin inducție nu transferă sarcini – doar le redistribuie.",
      "Conductoare bune: metale; izolatori: plastic, sticlă, cauciuc, lemn uscat."
    ],
    examples: [
      {
        label: "electrizare prin frecare",
        given: "Un balon de cauciuc este frecat cu lână",
        ask: "Cum se încarcă balonul și lâna? Cum interacționează?",
        solve: "Cauciucul preia electroni de la lână → balonul se încarcă negativ (−), lâna pozitiv (+). Sarcini opuse → se atrag.",
        answer: "Balonul: −; lâna: +; se atrag"
      },
      {
        label: "număr de electroni",
        given: "Un corp are sarcina $q = -3{,}2 \\times 10^{-18}$ C",
        ask: "Câți electroni în exces are corpul?",
        solve: "$n = \\dfrac{|q|}{e} = \\dfrac{3{,}2 \\times 10^{-18}}{1{,}6 \\times 10^{-19}} = 20$ electroni în exces",
        answer: "20 electroni în exces"
      },
      {
        label: "interacțiune",
        given: "Două bile: una cu $q_1 = +3$ nC, alta cu $q_2 = +3$ nC",
        ask: "Se atrag sau se resping?",
        solve: "Ambele bile au sarcini de același semn (+) → se resping.",
        answer: "Se resping (sarcini de același semn)"
      }
    ],
    exercises: [
      "Sticla frecată cu mătase se încarcă pozitiv. Explicați ce s-a întâmplat cu electronii.",
      "Un corp are $q = +4{,}8 \\times 10^{-18}$ C. Câți electroni a pierdut?",
      "Descrieți electrizarea prin inducție a unei bile metalice cu o tijă încărcată pozitiv.",
      "De ce baloanele frotate cu lâna se lipesc de perete?"
    ]
  },

  "u2-l2-legea-coulomb": {
    learn: "Enunțăm legea lui Coulomb și calculăm forța de interacțiune dintre sarcini punctiforme.",
    terms: [
      "<strong>Forța electrică (Coulomb) $F$</strong>: forța de interacțiune dintre două sarcini punctiforme.",
      "<strong>Constanta electrică $k$</strong>: $k = 9 \\times 10^9$ N·m²/C².",
      "<strong>Sarcini punctiforme</strong>: corpuri ale căror dimensiuni sunt neglijabile față de distanța dintre ele.",
      "<strong>Legea lui Coulomb</strong>: $F = k \\dfrac{|q_1||q_2|}{r^2}$.",
      "<strong>Câmpul electric $\\vec{E}$</strong>: câmpul creat de o sarcină în spațiul din jur."
    ],
    properties: [
      "Legea lui Coulomb: $F = k \\dfrac{|q_1||q_2|}{r^2}$, unde $r$ = distanța dintre sarcini.",
      "Forța este atractivă dacă sarcinile au semne opuse; repulsivă dacă au același semn.",
      "Forța scade cu pătratul distanței (creste de 4 ori dacă $r$ scade la jumătate).",
      "Câmpul electric: $E = \\dfrac{F}{q} = k \\dfrac{Q}{r^2}$ (câmpul creat de sarcina $Q$ la distanța $r$).",
      "Unitatea câmpului electric: $[E] = $ N/C = V/m."
    ],
    steps: [
      "Identifică sarcinile $q_1$, $q_2$ și distanța $r$ dintre ele.",
      "Aplică legea lui Coulomb: $F = k \\dfrac{|q_1||q_2|}{r^2}$.",
      "Determină sensul forței (atracție sau respingere din semnele sarcinilor).",
      "Verifică unitățile: $q$ în C, $r$ în m → $F$ în N."
    ],
    tips: [
      "Legea lui Coulomb este analogă cu legea gravitației (formă identică, dar forțe diferite).",
      "Dacă $r$ se dublează → $F$ scade de 4 ori ($F \\propto 1/r^2$).",
      "Forța Coulomb este mult mai mare decât forța gravitațională la scară atomică.",
      "Convertiți unitățile: 1 μC = $10^{-6}$ C; 1 nC = $10^{-9}$ C."
    ],
    examples: [
      {
        label: "forța Coulomb",
        given: "$q_1 = 2 \\mu C$; $q_2 = 3 \\mu C$; $r = 0{,}3$ m; $k = 9 \\times 10^9$ N·m²/C²",
        ask: "Forța de interacțiune",
        solve: "$F = k \\dfrac{|q_1||q_2|}{r^2} = 9 \\times 10^9 \\cdot \\dfrac{2 \\times 10^{-6} \\cdot 3 \\times 10^{-6}}{(0{,}3)^2} = 9 \\times 10^9 \\cdot \\dfrac{6 \\times 10^{-12}}{0{,}09} = 0{,}6$ N",
        answer: "$F = 0{,}6$ N (repulsivă, sarcini de același semn)"
      },
      {
        label: "variația cu distanța",
        given: "Forța inițială $F_1 = 0{,}4$ N la $r_1 = 10$ cm. Distanța se dublează la $r_2 = 20$ cm.",
        ask: "Noua forță $F_2$",
        solve: "$F \\propto 1/r^2$. La dublarea distanței: $F_2 = F_1/4 = 0{,}4/4 = 0{,}1$ N.",
        answer: "$F_2 = 0{,}1$ N"
      },
      {
        label: "câmpul electric",
        given: "Sarcina $Q = 5 \\mu C$ la distanța $r = 0{,}2$ m",
        ask: "Intensitatea câmpului electric $E$",
        solve: "$E = k \\dfrac{Q}{r^2} = 9 \\times 10^9 \\cdot \\dfrac{5 \\times 10^{-6}}{(0{,}2)^2} = 9 \\times 10^9 \\cdot \\dfrac{5 \\times 10^{-6}}{0{,}04} = 1{,}125 \\times 10^6$ N/C",
        answer: "$E \\approx 1{,}13 \\times 10^6$ N/C"
      }
    ],
    exercises: [
      "Calculați forța dintre $q_1 = 4 \\mu C$ și $q_2 = -2 \\mu C$ aflate la $r = 0{,}2$ m.",
      "Forța dintre două sarcini este $F = 0{,}9$ N la $r = 3$ cm. Ce devine forța dacă $r = 6$ cm?",
      "La ce distanță de $Q = 10 \\mu C$ câmpul electric are valoarea $E = 10^4$ N/C?",
      "Comparați forța Coulomb și forța gravitațională dintre doi protoni ($m_p = 1{,}67 \\times 10^{-27}$ kg)."
    ]
  },

  "u2-l3-camp-electric": {
    learn: "Descriem câmpul electric, liniile de câmp și energia potențială a sarcinilor în câmp electric.",
    terms: [
      "<strong>Câmpul electric $\\vec{E}$</strong>: regiune a spațiului în care o sarcină de test simte o forță electrică.",
      "<strong>Linii de câmp</strong>: curbe care indică direcția și sensul câmpului; ies din (+), intră în (−).",
      "<strong>Potențialul electric $V$</strong>: energia potențială pe unitate de sarcină; unitate: voltul (V).",
      "<strong>Tensiunea electrică $U$</strong>: diferența de potențial dintre două puncte; $U = V_A - V_B$.",
      "<strong>Câmp uniform</strong>: câmp cu linii paralele și egale (ex: între două plăci paralele).",
      "<strong>Lucrul mecanic al câmpului</strong>: $L = q \\cdot U$."
    ],
    properties: [
      "Câmpul electric este un câmp vectorial: $\\vec{E} = \\vec{F}/q_0$ (sarcina de test $q_0$).",
      "Liniile de câmp: pornesc din (+), se termină în (−); nu se intersectează.",
      "Câmp uniform (plăci paralele): $E = U/d$ ($d$ = distanța dintre plăci).",
      "Lucrul mecanic al forței electrice: $L = q \\cdot U_{AB} = q(V_A - V_B)$.",
      "Unitatea câmpului: $[E] = $ V/m = N/C."
    ],
    steps: [
      "Identifică sarcina și câmpul aplicat.",
      "Câmp uniform: $E = U/d$.",
      "Forța pe o sarcină în câmp: $F = q \\cdot E$.",
      "Lucrul mecanic: $L = q \\cdot U$."
    ],
    tips: [
      "Liniile de câmp sunt mai dese unde câmpul este mai intens.",
      "Câmpul electric în interiorul unui conductor în echilibru electrostatic = 0.",
      "Sarcina pozitivă se mișcă în sensul câmpului; cea negativă invers.",
      "1 V = 1 J/C (voltul = joule pe coulomb)."
    ],
    examples: [
      {
        label: "câmp uniform",
        given: "Două plăci paralele la $d = 5$ mm = $5 \\times 10^{-3}$ m; tensiunea $U = 100$ V",
        ask: "Intensitatea câmpului electric $E$",
        solve: "$E = \\dfrac{U}{d} = \\dfrac{100}{5 \\times 10^{-3}} = 2 \\times 10^4$ V/m",
        answer: "$E = 2 \\times 10^4$ V/m"
      },
      {
        label: "forța în câmp",
        given: "$E = 3 \\times 10^4$ V/m; sarcina $q = 2 \\mu C$",
        ask: "Forța electrică exercitată",
        solve: "$F = q \\cdot E = 2 \\times 10^{-6} \\times 3 \\times 10^4 = 0{,}06$ N = 60 mN",
        answer: "$F = 0{,}06$ N"
      },
      {
        label: "lucru mecanic",
        given: "Sarcina $q = 3 \\mu C$ se deplasează între două puncte cu $U = 12$ V",
        ask: "Lucrul mecanic efectuat de câmpul electric",
        solve: "$L = q \\cdot U = 3 \\times 10^{-6} \\times 12 = 36 \\times 10^{-6}$ J = 36 μJ",
        answer: "$L = 36 \\mu J$"
      }
    ],
    exercises: [
      "Între două plăci la $d = 2$ cm și $U = 400$ V. Calculați $E$ și forța pe un electron.",
      "O sarcină $q = 5 \\mu C$ se deplasează prin $U = 24$ V. Calculați lucrul câmpului.",
      "Desenați liniile de câmp ale unui câmp uniform și ale unui câmp creat de o sarcină pozitivă.",
      "De ce câmpul electric în interiorul unui conductor în echilibru este zero?"
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 3 – Curentul electric
  // ══════════════════════════════════════════════════════════

  "u3-l1-curentul-electric": {
    learn: "Definim curentul electric, tensiunea și intensitatea și descriem circuitul electric simplu.",
    terms: [
      "<strong>Curentul electric</strong>: mișcarea ordonată a purtătorilor de sarcină (electroni liberi în metale).",
      "<strong>Intensitatea curentului $I$</strong>: sarcina care trece prin secțiunea conductorului pe unitatea de timp; $I = q/t$.",
      "<strong>Unitatea de măsură</strong>: amperul (A); $[I] = A$.",
      "<strong>Tensiunea electrică $U$</strong>: diferența de potențial care menține curentul; unitate: voltul (V).",
      "<strong>Sursa de c.e.m. (generatorul)</strong>: menține diferența de potențial (baterie, acumulator, generator).",
      "<strong>Circuit electric</strong>: circuit format din generator, conductori, receptor și elemente de comandă."
    ],
    properties: [
      "Sensul convențional al curentului: de la polul + al generatorului prin circuit spre polul −.",
      "Sensul real al curentului (electroni): de la − la + prin conductor.",
      "$I = q/t$; dacă $q$ în C și $t$ în s → $I$ în A.",
      "Instrumentul de măsură al $I$: ampermetrul (în serie în circuit).",
      "Instrumentul de măsură al $U$: voltmetrul (în paralel pe element).",
      "1 A = 1 C/s."
    ],
    steps: [
      "Identifică elementele circuitului: generator, conductor, receptor, comutator.",
      "Calculează intensitatea: $I = q/t$.",
      "Ampermetrul se montează în serie; voltmetrul în paralel.",
      "Sensul convențional: de la + la − prin circuitul exterior."
    ],
    tips: [
      "Ampermetrul are rezistența internă mică (în serie); voltmetrul are rezistența mare (în paralel).",
      "Curentul există numai în circuit ÎNCHIS.",
      "Sarcina transferată: $q = I \\cdot t$.",
      "1 mA = $10^{-3}$ A; 1 μA = $10^{-6}$ A."
    ],
    examples: [
      {
        label: "intensitatea curentului",
        given: "Prin conductor trec $q = 12$ C în $t = 4$ s",
        ask: "Intensitatea curentului",
        solve: "$I = \\dfrac{q}{t} = \\dfrac{12}{4} = 3$ A",
        answer: "$I = 3$ A"
      },
      {
        label: "sarcina transferată",
        given: "$I = 0{,}5$ A timp de $t = 2$ min = 120 s",
        ask: "Sarcina electrică transferată",
        solve: "$q = I \\cdot t = 0{,}5 \\times 120 = 60$ C",
        answer: "$q = 60$ C"
      },
      {
        label: "montaj corect",
        given: "Trebuie să măsori intensitatea prin bec și tensiunea la bornele becului",
        ask: "Cum montezi ampermetrul și voltmetrul?",
        solve: "Ampermetrul (A) → în serie cu becul (curentul trece prin el). Voltmetrul (V) → în paralel pe bec (măsoară diferența de potențial).",
        answer: "A în serie; V în paralel"
      }
    ],
    exercises: [
      "Prin un bec trec $q = 30$ C în $t = 10$ s. Calculați $I$.",
      "Un curent de $I = 2$ A circulă timp de $t = 5$ min. Calculați sarcina transferată.",
      "Desenați schema unui circuit simplu: baterie, bec, întrerupător. Indicați sensul convențional.",
      "De ce ampermetrul se montează în serie și voltmetrul în paralel?"
    ]
  },

  "u3-l2-legea-ohm": {
    learn: "Enunțăm legea lui Ohm, definim rezistența electrică și calculăm valorile într-un circuit.",
    terms: [
      "<strong>Legea lui Ohm</strong>: $U = R \\cdot I$ (tensiunea = rezistența × intensitatea).",
      "<strong>Rezistența electrică $R$</strong>: mărimea care se opune curentului; unitate: ohmul (Ω).",
      "<strong>1 Ω</strong>: rezistența unui conductor prin care trece 1 A la 1 V.",
      "<strong>Rezistivitate $\\rho$</strong>: proprietate a materialului; $R = \\rho \\cdot \\dfrac{l}{A}$ ($l$ = lungime, $A$ = secțiune).",
      "<strong>Rezistență internă $r$</strong>: rezistența generatorului; $U = E - I \\cdot r$ ($E$ = t.e.m.).",
      "<strong>T.e.m. (tensiunea electromotoare) $E$</strong>: tensiunea în circuit deschis a generatorului."
    ],
    properties: [
      "Legea lui Ohm: $U = R \\cdot I \\Rightarrow R = U/I \\Rightarrow I = U/R$.",
      "Rezistența depinde de: material ($\\rho$), lungime $l$ (direct), secțiune $A$ (invers).",
      "La temperatură constantă: $R$ nu depinde de $U$ sau $I$ (conductor ohmic).",
      "Generator real: $U_{borna} = E - I \\cdot r$ (tensiunea la borne < t.e.m.).",
      "Puterea disipată în rezistență: $P = U \\cdot I = I^2 \\cdot R = U^2/R$."
    ],
    steps: [
      "Identifică mărimile cunoscute ($U$, $I$, $R$).",
      "Aplică legea lui Ohm: $U = R \\cdot I$.",
      "Calculează $R = U/I$ sau $I = U/R$ după caz.",
      "Verifică unitățile: $U$ în V, $I$ în A → $R$ în Ω."
    ],
    tips: [
      "Triunghiul $U = R \\cdot I$: acoperă ce cauți pentru a vedea relația.",
      "$R$ crescând → $I$ scade (la $U$ constant).",
      "Rezistivitate: Cu < Al < Fe (cuprul conduce cel mai bine).",
      "La generator real: dacă $r = 0$ → $U_{borne} = E$ (generator ideal)."
    ],
    examples: [
      {
        label: "legea lui Ohm",
        given: "Rezistor $R = 15$ Ω conectat la $U = 45$ V",
        ask: "Intensitatea curentului",
        solve: "$I = \\dfrac{U}{R} = \\dfrac{45}{15} = 3$ A",
        answer: "$I = 3$ A"
      },
      {
        label: "rezistența",
        given: "$U = 24$ V; $I = 0{,}8$ A",
        ask: "Rezistența circuitului",
        solve: "$R = \\dfrac{U}{I} = \\dfrac{24}{0{,}8} = 30$ Ω",
        answer: "$R = 30$ Ω"
      },
      {
        label: "rezistența unui conductor",
        given: "Conductor de Cu: $\\rho = 1{,}7 \\times 10^{-8}$ Ω·m; $l = 100$ m; $A = 1$ mm² = $10^{-6}$ m²",
        ask: "Rezistența conductorului",
        solve: "$R = \\rho \\cdot \\dfrac{l}{A} = 1{,}7 \\times 10^{-8} \\cdot \\dfrac{100}{10^{-6}} = 1{,}7$ Ω",
        answer: "$R = 1{,}7$ Ω"
      }
    ],
    exercises: [
      "Un rezistor de $R = 20$ Ω este traversat de $I = 0{,}5$ A. Calculați tensiunea la bornele lui.",
      "Tensiunea la bornele unui rezistor este $U = 12$ V; $R = 4$ Ω. Calculați $I$ și $P$.",
      "De ce cablul electric de cupru are rezistența mică față de o sârmă de nichrom?",
      "Generatorul are $E = 10$ V, $r = 0{,}5$ Ω; $I = 2$ A. Calculați $U_{borne}$."
    ]
  },

  "u3-l3-circuite": {
    learn: "Calculăm rezistența echivalentă și valorile din circuitele serie și paralel.",
    terms: [
      "<strong>Circuit serie</strong>: rezistoarele sunt conectate cap la cap; același curent prin fiecare.",
      "<strong>Circuit paralel</strong>: rezistoarele sunt conectate între aceleași două noduri; aceeași tensiune pe fiecare.",
      "<strong>Rezistența echivalentă serie</strong>: $R_{ec} = R_1 + R_2 + \\ldots$",
      "<strong>Rezistența echivalentă paralel</strong>: $\\dfrac{1}{R_{ec}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\ldots$",
      "<strong>Prima lege a lui Kirchhoff (noduri)</strong>: $\\sum I_{intrare} = \\sum I_{ieșire}$.",
      "<strong>A doua lege a lui Kirchhoff (ochiuri)</strong>: $\\sum U = 0$ pe un ochi."
    ],
    properties: [
      "Serie: $I_1 = I_2 = I$ (curent identic); $U = U_1 + U_2 + \\ldots$; $R_{ec} = R_1 + R_2 + \\ldots$",
      "Paralel: $U_1 = U_2 = U$ (tensiune identică); $I = I_1 + I_2 + \\ldots$; $\\dfrac{1}{R_{ec}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2}$.",
      "Două rezistoare egale în paralel: $R_{ec} = R/2$.",
      "$R_{ec}$ paralel < cel mai mic rezistor din grup.",
      "$R_{ec}$ serie > cel mai mare rezistor din grup."
    ],
    steps: [
      "Identifică tipul conexiunii (serie sau paralel).",
      "Serie: $R_{ec} = R_1 + R_2$; $I = U/R_{ec}$; $U_1 = I \\cdot R_1$.",
      "Paralel: $R_{ec} = \\dfrac{R_1 R_2}{R_1 + R_2}$; $U_1 = U_2 = U$; $I_1 = U/R_1$.",
      "Circuit mixt: simplifică pas cu pas (grupezi serie/paralel)."
    ],
    tips: [
      "În serie: dacă un element se defectează → circuitul se întrerupe (bec stins).",
      "În paralel: defectarea unui element nu afectează celelalte.",
      "De aceea instalațiile electrice casnice sunt în PARALEL.",
      "Rezistoarea în paralel cu una mai mică → $R_{ec}$ este mai mică decât ambele individual."
    ],
    examples: [
      {
        label: "circuit serie",
        given: "$R_1 = 4$ Ω, $R_2 = 6$ Ω conectate în serie la $U = 20$ V",
        ask: "$R_{ec}$, $I$ și tensiunile pe fiecare rezistor",
        solve: "$R_{ec} = 4 + 6 = 10$ Ω. $I = U/R_{ec} = 20/10 = 2$ A. $U_1 = 2 \\times 4 = 8$ V; $U_2 = 2 \\times 6 = 12$ V.",
        check: "$U_1 + U_2 = 8 + 12 = 20$ V ✓",
        answer: "$R_{ec} = 10$ Ω; $I = 2$ A; $U_1 = 8$ V, $U_2 = 12$ V"
      },
      {
        label: "circuit paralel",
        given: "$R_1 = 6$ Ω, $R_2 = 12$ Ω conectate în paralel la $U = 12$ V",
        ask: "$R_{ec}$, $I_1$, $I_2$ și $I_{total}$",
        solve: "$R_{ec} = \\dfrac{6 \\times 12}{6+12} = \\dfrac{72}{18} = 4$ Ω. $I_1 = 12/6 = 2$ A; $I_2 = 12/12 = 1$ A. $I = 3$ A.",
        check: "$I = U/R_{ec} = 12/4 = 3$ A ✓",
        answer: "$R_{ec} = 4$ Ω; $I_1 = 2$ A; $I_2 = 1$ A; $I = 3$ A"
      },
      {
        label: "circuit mixt",
        given: "$R_1 = 3$ Ω în serie cu ($R_2 = 6$ Ω ∥ $R_3 = 12$ Ω); $U = 9$ V",
        ask: "Curentul total",
        solve: "$R_{23} = \\dfrac{6 \\times 12}{6+12} = 4$ Ω. $R_{ec} = 3 + 4 = 7$ Ω. $I = 9/7 \\approx 1{,}29$ A.",
        answer: "$I \\approx 1{,}29$ A"
      }
    ],
    exercises: [
      "$R_1 = 10$ Ω și $R_2 = 15$ Ω în serie la $U = 50$ V. Calculați $R_{ec}$, $I$, $U_1$, $U_2$.",
      "$R_1 = 8$ Ω și $R_2 = 8$ Ω în paralel la $U = 16$ V. Calculați $R_{ec}$, $I_1$, $I_2$, $I$.",
      "De ce instalațiile electrice casnice sunt conectate în paralel și nu în serie?",
      "Trei rezistoare de 6 Ω fiecare sunt în paralel. Calculați $R_{ec}$."
    ]
  },

  "u3-l4-efecte-curent": {
    learn: "Descriem efectele termice, chimice și magnetice ale curentului electric și aplicațiile lor.",
    terms: [
      "<strong>Efectul termic (Joule)</strong>: curentul produce căldură în conductori; $Q = I^2 \\cdot R \\cdot t$.",
      "<strong>Legea lui Joule</strong>: $Q = I^2 \\cdot R \\cdot t$ (căldura disipată în rezistor).",
      "<strong>Puterea electrică $P$</strong>: $P = U \\cdot I = I^2 \\cdot R = U^2/R$; unitate: wattul (W).",
      "<strong>Efectul chimic (electroliza)</strong>: curentul descompune compuși chimici (electroliza apei: $2H_2O \\rightarrow 2H_2 + O_2$).",
      "<strong>Efectul magnetic</strong>: curentul creează câmp magnetic în jurul conductorului (baza electromagnetismului).",
      "<strong>Energia electrică $W$</strong>: $W = P \\cdot t = U \\cdot I \\cdot t$; unitate: joulul (J) sau kWh."
    ],
    properties: [
      "Efectul termic Joule: $Q = I^2 R t$ (Q în J dacă R în Ω, I în A, t în s).",
      "Puterea: $P = UI = I^2 R = U^2/R$ (W).",
      "Energia consumată: $W = Pt$ (J sau kWh); 1 kWh = $3{,}6 \\times 10^6$ J.",
      "Electroliza: catioții se depun la catod (−); anioniți la anod (+). Aplicații: galvanizare, electroliza apei.",
      "Efectul magnetic: bobina cu curent = electromagnet; baza motoarelor și generatoarelor."
    ],
    steps: [
      "Identifică efectul dominant (termic, chimic, magnetic).",
      "Efect termic: $Q = I^2 R t$ sau $Q = P \\cdot t$.",
      "Puterea: $P = UI = I^2R = U^2/R$.",
      "Energie electrică: $W = Pt$ (convertiți în kWh: $W[kWh] = W[J] / 3{,}6 \\times 10^6$)."
    ],
    tips: [
      "kWh este unitatea practică: 1 kWh = energie consumată de 1 kW timp de 1 h.",
      "Becul incandescent → efect termic (filamentul se încălzeste până la incandescenta).",
      "Electroliza apei: la catod ($-$) se degajă $H_2$; la anod ($+$) se degajă $O_2$.",
      "Siguranța fuzibilă → se topeste la curent prea mare (efect termic de protecție)."
    ],
    examples: [
      {
        label: "caldura Joule",
        given: "Rezistor $R = 10$ Ω; $I = 3$ A; $t = 5$ min = 300 s",
        ask: "Căldura degajată $Q$",
        solve: "$Q = I^2 \\cdot R \\cdot t = 9 \\times 10 \\times 300 = 27\\,000$ J = 27 kJ",
        answer: "$Q = 27$ kJ"
      },
      {
        label: "putere și energie",
        given: "Bec de $P = 60$ W; funcționează $t = 8$ h",
        ask: "Energia consumată în kWh",
        solve: "$W = P \\cdot t = 60 \\text{ W} \\times 8 \\text{ h} = 480$ Wh = 0,48 kWh",
        answer: "$W = 0{,}48$ kWh"
      },
      {
        label: "electroliza",
        given: "Electroliza apei cu curent continuu",
        ask: "Ce gaze se degajă și la ce electrozi?",
        solve: "$2H_2O \\rightarrow 2H_2 + O_2$. La catod ($-$): $H_2$ (hidrogen); la anod ($+$): $O_2$ (oxigen). Raport volumetric $H_2:O_2 = 2:1$.",
        answer: "Catod ($-$): $H_2$; anod ($+$): $O_2$; raport 2:1"
      }
    ],
    exercises: [
      "Calculați căldura degajată de $R = 5$ Ω, $I = 4$ A în $t = 10$ min.",
      "Un fierul de călcat are $P = 1{,}2$ kW și funcționează $t = 30$ min. Calculați energia în kWh și costul (1 kWh = 1,5 lei).",
      "Care sunt aplicațiile electrolizei în industrie?",
      "Explicați de ce siguranța fuzibilă protejează circuitul electric."
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 4 – Fenomene magnetice
  // ══════════════════════════════════════════════════════════

  "u4-l1-magneti": {
    learn: "Descriem proprietățile magneților, câmpul magnetic și liniile de câmp magnetic.",
    terms: [
      "<strong>Magnet</strong>: corp care atrage fierul și unele aliaje; are doi poli (N și S).",
      "<strong>Pol nord (N)</strong> și <strong>Pol sud (S)</strong>: extremitățile magnetului; poli identici se resping.",
      "<strong>Câmpul magnetic $\\vec{B}$</strong>: câmp creat de magneți sau curenți electrici; unitate: Tesla (T).",
      "<strong>Linii de câmp magnetic</strong>: curbe închise ce ies din N și intră în S (în exterior).",
      "<strong>Câmpul magnetic terestru</strong>: Pământul se comportă ca un magnet gigantic.",
      "<strong>Busola</strong>: ac magnetic care se orientează după câmpul magnetic terestru (N → nord geografic).",
      "<strong>Permeabilitate magnetică $\\mu$</strong>: proprietate a mediului față de câmpul magnetic."
    ],
    properties: [
      "Poli magnetici identici se resping; poli opuși se atrag.",
      "Polii magnetici nu pot fi izolați (tăind un magnet → 2 magneți cu N și S).",
      "Liniile de câmp magnetic: ies din N, intră în S, sunt curbe ÎNCHISE.",
      "Câmpul magnetic poate fi creat de: magneți permanenți sau curenți electrici.",
      "Câmpul magnetic terestru: polul N al busolei indică spre sudul geografic (polul magnetic nord este lângă sudul geografic)."
    ],
    steps: [
      "Identifică polii magnetului (N și S).",
      "Trasează liniile de câmp: din N → în S (exterior); continuă prin interiorul magnetului.",
      "Linii dese → câmp intens; linii rare → câmp slab.",
      "Forța pe un magnet în câmpul altui magnet: aplică regula polilor (N–S atrag; N–N resping)."
    ],
    tips: [
      "Polii unui magnet nu pot fi separați – spre deosebire de sarcinile electrice.",
      "Busola: polul N al acului magnetic indică direcția liniilor de câmp (spre S al câmpului exterior).",
      "Materialele feromagnetice (Fe, Co, Ni) sunt atrase de magneți.",
      "Materialele nemagnetice (Al, Cu, plastic) nu sunt atrase de magneți."
    ],
    examples: [
      {
        label: "interacțiune poli",
        given: "Doi magneți cu polii N–N față în față",
        ask: "Se atrag sau se resping?",
        solve: "Poli identici (N–N) → se resping. Forța de respingere creste la apropierea magneților.",
        answer: "Se resping (poli identici)"
      },
      {
        label: "linii de câmp",
        given: "Un magnet bar cu polul N la stânga și S la dreapta",
        ask: "Cum arată liniile de câmp exterior?",
        solve: "Liniile ies din polul N (stânga), se curbează în jurul magnetului și intră în polul S (dreapta). Sunt mai dense la poli (câmp mai intens).",
        answer: "Linii curbe din N spre S; mai dense la poli"
      },
      {
        label: "busola",
        given: "O busolă este plasată lângă polul N al unui magnet bar",
        ask: "Cum se orientează polul N al busolei?",
        solve: "Polul N al busolei este atras de polul S al câmpului exterior → se orientează spre polul N al magnetului (liniile de câmp ies din N, busola indică direcția lor → polul S al busolei spre N al magnetului).",
        answer: "Polul S al busolei se orientează spre polul N al magnetului"
      }
    ],
    exercises: [
      "De ce nu poți izola un pol magnetic singur (dacă tai un magnet la mijloc)?",
      "Cum deosebim un corp magnetic de un corp magnetizat (permanent)?",
      "Desenați liniile de câmp magnetic ale doi magneți cu polii opuși față în față.",
      "De ce busola funcționează ca instrument de orientare pe Pământ?"
    ]
  },

  "u4-l2-electromagnetism": {
    learn: "Descriem câmpul magnetic al curentului electric, forța electromagnetică și principiul electromagnetului.",
    terms: [
      "<strong>Câmpul magnetic al curentului</strong>: orice conductor parcurs de curent creează câmp magnetic.",
      "<strong>Regula mâinii drepte (solenoid)</strong>: degetul mare indică sensul curentului; degetele îndoite – sensul liniilor de câmp.",
      "<strong>Electromagnet</strong>: solenoid cu miez de fier – câmp magnetic puternic, controlabil.",
      "<strong>Forța electromagnetică (Ampere)</strong>: $F = B \\cdot I \\cdot l \\cdot \\sin\\alpha$; forța pe un conductor în câmp magnetic.",
      "<strong>Regula mâinii stângi</strong>: degetele = sensul $\\vec{B}$; degetul arătător = $\\vec{I}$; degetul mare = forța $\\vec{F}$.",
      "<strong>Motorul electric</strong>: transformă energia electrică în energie mecanică (efect electromagnetic).",
      "<strong>Inductanța electromagnetică</strong>: variația câmpului magnetic induce t.e.m. (generatorul electric)."
    ],
    properties: [
      "Conductor rectiliniu parcurs de curent: linii de câmp circulare; direcție din regula burghiului.",
      "Solenoid (bobină cu miez de fier): câmp uniform la interior; $B = \\mu_0 n I$ ($n$ = nr. spire/m).",
      "Forța pe conductor în câmp: $F = B I l \\sin\\alpha$; maximă când $\\vec{I} \\perp \\vec{B}$ ($\\alpha = 90°$).",
      "Motorul electric: forța Ampere produce rotirea rotorului.",
      "Generatorul electric (principiu inducție): variația fluxului magnetic induce curent."
    ],
    steps: [
      "Identifică sensul curentului și direcția câmpului $\\vec{B}$.",
      "Aplică regula mâinii drepte pentru solenoid → determină polii N și S.",
      "Forța Ampere: $F = BIl\\sin\\alpha$; aplică regula mâinii stângi pentru direcție.",
      "Electromagnet: variând $I$ controlezi intensitatea câmpului."
    ],
    tips: [
      "Regula mâinii drepte (solenoid): degetul mare → curent; degete îndoite → $\\vec{B}$ interior.",
      "Regula mâinii stângi (forța Ampere): $\\vec{B}$ intrări în palmă; $\\vec{I}$ → arătătorul; forța → degetul mare.",
      "Electromagnetul poate fi pornit/oprit (avantaj față de magnetul permanent).",
      "Motor electric → forță EM (electricitate → mișcare); generator → inducție (mișcare → electricitate)."
    ],
    examples: [
      {
        label: "forța Ampere",
        given: "Conductor $l = 0{,}5$ m; $I = 4$ A; $B = 0{,}3$ T; $\\alpha = 90°$",
        ask: "Forța electromagnetică",
        solve: "$F = B \\cdot I \\cdot l \\cdot \\sin 90° = 0{,}3 \\times 4 \\times 0{,}5 \\times 1 = 0{,}6$ N",
        answer: "$F = 0{,}6$ N"
      },
      {
        label: "electromagnet",
        given: "Solenoid cu $n = 500$ spire, $l = 20$ cm, $I = 2$ A, miez de fier",
        ask: "Cum se poate mări câmpul magnetic al electromagnetului?",
        solve: "Câmpul magnetic creste prin: mărirea curentului $I$, creșterea numărului de spire $n$, adăugarea unui miez de fier feromagnetic (amplifică $B$ de sute de ori).",
        answer: "Mărind $I$, $n$ sau adăugând miez de fier"
      },
      {
        label: "motor electric",
        given: "Un motor electric transformă $P_{el} = 500$ W cu randamentul $\\eta = 0{,}80$",
        ask: "Puterea mecanică furnizată",
        solve: "$P_{mec} = \\eta \\cdot P_{el} = 0{,}80 \\times 500 = 400$ W",
        answer: "$P_{mec} = 400$ W"
      }
    ],
    exercises: [
      "Un conductor de $l = 1$ m, $I = 5$ A este plasat perpendicular pe $\\vec{B} = 0{,}2$ T. Calculați $F$.",
      "Descrieți construcția unui electromagnet și cel puțin 2 aplicații ale sale.",
      "Cum funcționează un motor electric de curent continuu? Explicați principiul de bază.",
      "Care este diferența dintre motor electric și generator electric?"
    ]
  }

};

// ============================================================
//  RECAPITULĂRI
// ============================================================

const recapTopicsF7 = {

  "u1-recap": {
    summary: "Lumina se propagă rectiliniu în medii omogene. Reflexia: $r = i$ (față de normală). Refracția: $n_1 \\sin i = n_2 \\sin r$ (Snell). Lentilele formează imagini după ecuația $1/f = 1/d_o + 1/d_i$; lentila convergentă poate fi lupă ($d_o < f$) sau poate proiecta imagini reale ($d_o > f$).",
    keys: [
      "Propagare rectilinie → umbra cu contur net (sursa punctiformă).",
      "Reflexie: $r = i$; imagine în oglindă plană: virtuală, dreaptă, simetrică.",
      "Refracție (Snell): $n_1 \\sin i = n_2 \\sin r$; în mediu mai dens → $r < i$.",
      "Ecuația lentilei: $\\dfrac{1}{f} = \\dfrac{1}{d_o} + \\dfrac{1}{d_i}$; vergența $D = 1/f$ (dioptrii).",
      "Reflexie totală internă: $\\sin i_c = n_2/n_1$; aplicație: fibra optică."
    ],
    mistakes: [
      "Unghiurile $i$ și $r$ se măsoară față de NORMALĂ, nu față de suprafață.",
      "Imaginea în oglinda plană este virtuală (nu poate fi proiectată pe ecran).",
      "La refracție: sticla → aer ($n_{sticlă} > n_{aer}$) → $r > i$ (depărtare de normală).",
      "Nu confundați vergența (+) cu distanța focală: $D = 1/f$ (f în metri)."
    ],
    problem: {
      label: "evaluare U1",
      given: "Lentilă convergentă $f = 12$ cm; obiect la $d_o = 36$ cm",
      ask: "Calculați $d_i$, $m$ și caracterizați imaginea",
      solve: "$\\dfrac{1}{d_i} = \\dfrac{1}{12} - \\dfrac{1}{36} = \\dfrac{3-1}{36} = \\dfrac{2}{36} \\Rightarrow d_i = 18$ cm. $m = -18/36 = -0{,}5$. Imagine reală, răsturnată, micșorată.",
      answer: "$d_i = 18$ cm; reală, răsturnată, $|m|=0{,}5$"
    },
    exercises: [
      "O rază incidentă face $i = 50°$ cu suprafața oglinzii. Calculați $r$ față de normală.",
      "Lumina trece din aer în apă ($n = 1{,}33$) cu $i = 30°$. Calculați $r$.",
      "Calculați unghiul critic al diamantului ($n = 2{,}42$).",
      "O lentilă divergentă are $f = -15$ cm; obiect la $d_o = 30$ cm. Calculați $d_i$ și $m$."
    ]
  },

  "u2-recap": {
    summary: "Corpurile se electrizează prin transfer de electroni (+ pierde, − câștigă). Forța Coulomb: $F = k|q_1||q_2|/r^2$ (respingere/atracție după semne). Câmpul electric $E = F/q$; câmp uniform între plăci: $E = U/d$. Lucrul mecanic: $L = qU$.",
    keys: [
      "Sarcina elementară: $e = 1{,}6 \\times 10^{-19}$ C.",
      "Legea lui Coulomb: $F = k \\dfrac{|q_1||q_2|}{r^2}$; $k = 9 \\times 10^9$ N·m²/C².",
      "Câmp uniform: $E = U/d$; $F = qE$.",
      "Lucrul câmpului electric: $L = q \\cdot U$.",
      "Sarcini opuse → atracție; sarcini egale → respingere."
    ],
    mistakes: [
      "Forța Coulomb scade cu $r^2$ (nu cu $r$): dacă $r$ se dublează, $F$ scade de 4 ori.",
      "Nu confundați câmpul electric $E$ (N/C) cu tensiunea $U$ (V).",
      "Electrizarea prin inducție nu transferă sarcini – le redistribuie.",
      "Câmpul electric în interiorul unui conductor (în echilibru) = 0."
    ],
    problem: {
      label: "evaluare U2",
      given: "$q_1 = 4 \\mu C$; $q_2 = -2 \\mu C$; $r = 0{,}1$ m",
      ask: "Forța electrică și sensul ei",
      solve: "$F = 9 \\times 10^9 \\cdot \\dfrac{4 \\times 10^{-6} \\times 2 \\times 10^{-6}}{(0{,}1)^2} = 9 \\times 10^9 \\cdot \\dfrac{8 \\times 10^{-12}}{0{,}01} = 7{,}2$ N. Sarcini opuse → forță atractivă.",
      answer: "$F = 7{,}2$ N (atracție)"
    },
    exercises: [
      "Calculați forța Coulomb dintre $q_1 = 6 \\mu C$ și $q_2 = 3 \\mu C$ la $r = 0{,}3$ m.",
      "La ce distanță forța devine de 4 ori mai mică față de $r_0 = 0{,}1$ m?",
      "Două plăci la $d = 4$ mm și $U = 200$ V. Calculați $E$ și forța pe un electron.",
      "Un corp are $q = +3{,}2 \\times 10^{-18}$ C. Câți electroni a pierdut?"
    ]
  },

  "u3-recap": {
    summary: "Curentul electric (mișcare de sarcini): $I = q/t$ (A). Legea lui Ohm: $U = RI$. Serie: $R_{ec} = \\sum R_i$; paralel: $1/R_{ec} = \\sum 1/R_i$. Efectul termic Joule: $Q = I^2Rt$; puterea $P = UI$. Efectul chimic = electroliza; efectul magnetic = electromagnetul.",
    keys: [
      "$I = q/t$ (A); $U = RI$ (V); $R = U/I$ (Ω).",
      "Serie: curent identic; $R_{ec} = R_1+R_2$; $U = U_1+U_2$.",
      "Paralel: tensiune identică; $1/R_{ec} = 1/R_1 + 1/R_2$; $I = I_1+I_2$.",
      "Joule: $Q = I^2 R t$; Putere: $P = UI = I^2R$.",
      "1 kWh = $3{,}6 \\times 10^6$ J."
    ],
    mistakes: [
      "Ampermetrul → în serie; voltmetrul → în paralel (nu invers!).",
      "$R_{ec}$ paralel este ÎNTOTDEAUNA mai mic decât cel mai mic rezistor.",
      "La efect Joule: $Q$ în J dacă $I$ în A, $R$ în Ω, $t$ în s.",
      "Energia electrică: $W = Pt$ (nu $W = P/t$)."
    ],
    problem: {
      label: "evaluare U3",
      given: "$R_1 = 6$ Ω în paralel cu $R_2 = 12$ Ω; conectate la $U = 18$ V",
      ask: "$R_{ec}$, $I_1$, $I_2$, $I_{total}$ și puterea totală",
      solve: "$R_{ec} = \\dfrac{6 \\times 12}{18} = 4$ Ω. $I_1 = 18/6 = 3$ A; $I_2 = 18/12 = 1{,}5$ A; $I = 4{,}5$ A. $P = UI = 18 \\times 4{,}5 = 81$ W.",
      answer: "$R_{ec}=4$ Ω; $I_1=3$ A; $I_2=1{,}5$ A; $I=4{,}5$ A; $P=81$ W"
    },
    exercises: [
      "$R_1=12$ Ω și $R_2=6$ Ω în serie la $U=36$ V. Calculați $I$, $U_1$, $U_2$.",
      "Un bec de 100 W funcționează 10 h. Calculați energia în kWh și costul la 1,5 lei/kWh.",
      "Rezistor $R=8$ Ω, $I=3$ A timp de $t=2$ min. Calculați $Q$ în kJ.",
      "Explicați de ce siguranța electrică protejează instalația."
    ]
  },

  "u4-recap": {
    summary: "Câmpul magnetic este creat de magneți permanenți sau curenți electrici. Liniile de câmp magnetic sunt curbe închise (N→S în exterior). Forța Ampere pe un conductor: $F = BIl\\sin\\alpha$. Electromagnetul controlează câmpul prin curent. Motorul electric folosește forța Ampere; generatorul folosește inducția electromagnetică.",
    keys: [
      "Poli identici se resping; opuși se atrag; polii nu pot fi izolați.",
      "Regula mâinii drepte (solenoid): degetul mare → curent, degete → sensul $\\vec{B}$.",
      "Forța Ampere: $F = BIl\\sin\\alpha$; maximă la $\\alpha = 90°$.",
      "Regula mâinii stângi: $\\vec{B}$ în palmă, arătătorul → $\\vec{I}$, degetul mare → $\\vec{F}$.",
      "Motor electric: $W_{el} \\rightarrow W_{mec}$; generator: $W_{mec} \\rightarrow W_{el}$."
    ],
    mistakes: [
      "Polii magnetici nu se separă (spre deosebire de sarcinile electrice).",
      "Forța Ampere este maximă când $\\vec{I} \\perp \\vec{B}$; zero când $\\vec{I} \\parallel \\vec{B}$.",
      "Busola indică nordul geografic, nu polul magnetic nord (care este lângă sudul geografic).",
      "Electromagnetul: curentul mai mare → câmp mai puternic, nu invers."
    ],
    problem: {
      label: "evaluare U4",
      given: "Conductor $l = 0{,}4$ m; $I = 5$ A; $B = 0{,}25$ T; $\\alpha = 90°$",
      ask: "Forța electromagnetică $F$",
      solve: "$F = B \\cdot I \\cdot l \\cdot \\sin 90° = 0{,}25 \\times 5 \\times 0{,}4 \\times 1 = 0{,}5$ N",
      answer: "$F = 0{,}5$ N"
    },
    exercises: [
      "Un conductor $l=0{,}6$ m, $I=3$ A este plasat perpendicular pe $\\vec{B}=0{,}5$ T. Calculați $F$.",
      "Descrieți construcția unui electromagnet și 3 aplicații practice.",
      "Cum funcționează generatorul electric? Ce lege fizică stă la bază?",
      "De ce liniile de câmp magnetic sunt curbe ÎNCHISE (față de liniile câmpului electric care nu sunt)?"
    ]
  }

};

// ============================================================
//  DATE PRINCIPALE – fizica7Data
// ============================================================

const fizica7Data = {
  title: "Fizică – Clasa a VII-a",
  subtitle: "Optică, electricitate statică, curent electric, fenomene magnetice",
  subject: "fizica",
  grade: 7,
  sections: [
    {
      id: "u1-optica",
      title: "Unitatea 1 – Optică geometrică",
      subtitle: "Propagarea luminii, reflexia, refracția, lentile",
      icon: "💡",
      chapters: [
        chF7("u1-l1-lumina",    "L1: Lumina – propagare, viteza, surse"),
        chF7("u1-l2-reflexia",  "L2: Reflexia luminii. Legile reflexiei. Oglinzi"),
        chF7("u1-l3-refractia", "L3: Refracția luminii. Legea lui Snell"),
        chF7("u1-l4-lentile",   "L4: Lentile. Ecuația lentilei. Instrumente optice"),
        recapChF7("u1-recap",   "Recapitulare și evaluare – Unitatea 1")
      ]
    },
    {
      id: "u2-electricitate-statica",
      title: "Unitatea 2 – Electricitate statică",
      subtitle: "Electrizare, legea lui Coulomb, câmpul electric",
      icon: "⚡",
      chapters: [
        chF7("u2-l1-electrostatica", "L1: Electrizarea corpurilor. Tipuri de sarcini"),
        chF7("u2-l2-legea-coulomb",  "L2: Legea lui Coulomb. Câmpul electric"),
        chF7("u2-l3-camp-electric",  "L3: Câmpul electric uniform. Potențialul"),
        recapChF7("u2-recap",        "Recapitulare și evaluare – Unitatea 2")
      ]
    },
    {
      id: "u3-curentul-electric",
      title: "Unitatea 3 – Curentul electric",
      subtitle: "Intensitate, tensiune, legea lui Ohm, circuite, efecte",
      icon: "🔌",
      chapters: [
        chF7("u3-l1-curentul-electric", "L1: Curentul electric. Tensiunea. Intensitatea"),
        chF7("u3-l2-legea-ohm",         "L2: Legea lui Ohm. Rezistența electrică"),
        chF7("u3-l3-circuite",          "L3: Circuite serie și paralel"),
        chF7("u3-l4-efecte-curent",     "L4: Efectele curentului electric"),
        recapChF7("u3-recap",           "Recapitulare și evaluare – Unitatea 3")
      ]
    },
    {
      id: "u4-magnetism",
      title: "Unitatea 4 – Fenomene magnetice",
      subtitle: "Magneți, câmp magnetic, electromagnetism, forța Ampere",
      icon: "🧲",
      chapters: [
        chF7("u4-l1-magneti",         "L1: Magneți. Câmpul magnetic. Linii de câmp"),
        chF7("u4-l2-electromagnetism", "L2: Electromagnetism. Forța Ampere. Motorul electric"),
        recapChF7("u4-recap",          "Recapitulare și evaluare – Unitatea 4")
      ]
    }
  ]
};
