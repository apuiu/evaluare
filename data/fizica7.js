// ============================================================
//  FIZICĂ - CLASA A VII-A
//  Conținut aliniat cu programa școlară și manualul cls. 7
//  Structură: 4 unități complete
// ============================================================

// ─── Funcții helper (prefixate F7 pentru a evita coliziuni) ───

const listF7 = (items) => items.map((item) => `<li>${item}</li>`).join("\n");

const DIF_LABELS_F7 = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil", "f-dificil": "Foarte dificil" };
const exListF7 = (items) => items.map((item) => `<li><span class="dif-badge dif-${item.level}">${DIF_LABELS_F7[item.level]}</span> ${item.text}${item.solution ? `<details class="rezolvare-toggle"><summary>Vezi rezolvarea</summary><p>${item.solution}</p></details>` : ""}</li>`).join("\n");

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
  <ol>${exListF7(data.exercises)}</ol>
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
  <ol>${exListF7(data.exercises)}</ol>
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
    learn: "Lumina este o formă de energie care se propagă sub formă de unde electromagnetice, vizibile de ochiul uman. O sursă luminoasă poate fi primară (produce propria lumină, ca Soarele sau un bec aprins) sau secundară (reflectă lumina altei surse, ca Luna sau o pagină de carte). În medii omogene, lumina se propagă în linie dreaptă — acest principiu explică de ce se formează umbre nete în spatele obiectelor opace și de ce apar eclipsele. Viteza luminii în vid este enormă, $c=3\\times10^8$ m/s, dar scade atunci când lumina trece printr-un mediu transparent (apă, sticlă).",
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
        given: "Indicele de refracție al apei $n_{\\text{apă}} = 1{,}33$",
        ask: "Viteza luminii în apă",
        solve: "$v = \\dfrac{c}{n} = \\dfrac{3 \\times 10^8}{1{,}33} \\approx 2{,}26 \\times 10^8$ m/s",
        answer: "$v \\approx 2{,}26 \\times 10^8$ m/s"
      }
    ],
    exercises: [
      {level:"usor",text:"De ce vedem fulgerul înainte de a auzi tunetul?",solution:"Viteza luminii ($3\\times10^8$ m/s) este mult mai mare decât viteza sunetului (~340 m/s), deci lumina fulgerului ajunge la ochi aproape instantaneu, iar tunetul ajunge mult mai târziu."},
      {level:"usor",text:"Este Luna o sursă de lumină primară sau secundară? Justificați.",solution:"Luna este o sursă secundară: nu produce lumină proprie, ci reflectă lumina primită de la Soare."},
      {level:"usor",text:"Explicați de ce se formează o umbră netă în spatele unui obiect opac iluminat de o sursă punctiformă.",solution:"Lumina se propagă în linie dreaptă, deci razele blocate de obiect nu pot ajunge în spatele lui, formând o umbră cu contur clar."},
      {level:"mediu",text:"O sursă de lumină se află la $d=1{,}5\\times10^{11}$ m de Pământ (Soarele). Calculați timpul de propagare a luminii.",solution:"$t=\\dfrac{d}{c}=\\dfrac{1{,}5\\times10^{11}}{3\\times10^8}=500$ s $\\approx8$ min 20 s."},
      {level:"mediu",text:"Explicați de ce apare eclipsa totală de Soare.",solution:"Luna se interpune exact între Soare și Pământ, blocând complet lumina soarelui pentru observatorii aflați în zona de umbră a Lunii."},
      {level:"mediu",text:"Lumina trece printr-o prismă de sticlă. Ce fenomen apare și ce culori se observă?",solution:"Apare dispersia luminii albe (fiecare culoare se refractă diferit), iar la ieșire se observă spectrul ROGVAIV."},
      {level:"dificil",text:"Calculați timpul necesar luminii pentru a parcurge distanța de la Lună la Pământ ($d=3{,}84\\times10^8$ m).",solution:"$t=\\dfrac{3{,}84\\times10^8}{3\\times10^8}\\approx1{,}28$ s."},
      {level:"dificil",text:"O sursă punctiformă și o sursă extinsă luminează același obiect opac. Explicați de ce apare penumbră doar în al doilea caz.",solution:"Sursa extinsă trimite raze din puncte diferite, deci unele zone din spatele obiectului sunt parțial luminate (penumbră), pe când sursa punctiformă creează doar umbră completă, cu contur net."},
      {level:"f-dificil",text:"Un satelit se află la $d=3{,}6\\times10^7$ m de Pământ. Calculați timpul în care un semnal ajunge la satelit.",solution:"$t=\\dfrac{3{,}6\\times10^7}{3\\times10^8}=0{,}12$ s."},
      {level:"f-dificil",text:"Explicați de ce eclipsa de Lună este vizibilă de pe o suprafață mult mai mare a Pământului decât eclipsa de Soare.",solution:"Umbra Pământului este mult mai mare decât umbra Lunii (Pământul are diametru mult mai mare), deci acoperă o zonă mult mai extinsă, fiind vizibilă din orice punct de pe partea nopții a Pământului."}
    ]
  },

  "u1-l2-reflexia": {
    learn: "Reflexia este fenomenul prin care lumina se întoarce în primul mediu atunci când întâlnește o suprafață (de exemplu o oglindă). Pentru a descrie reflexia, desenăm normala — perpendiculara pe suprafață în punctul unde cade lumina — și măsurăm unghiurile față de ea, nu față de suprafață. Legile reflexiei spun că raza incidentă, normala și raza reflectată sunt în același plan, iar unghiul de reflexie este egal cu unghiul de incidență ($r=i$). O oglindă plană formează întotdeauna o imagine virtuală (nu poate fi prinsă pe ecran), dreaptă și de aceeași mărime cu obiectul, situată la aceeași distanță de oglindă ca obiectul, dar de partea cealaltă.",
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
      {level:"usor",text:"Raza incidentă face $i=40°$ cu normala. Calculați unghiul de reflexie.",solution:"Conform legii a doua a reflexiei, $r=i=40°$."},
      {level:"usor",text:"O rază de lumină cade perpendicular pe o oglindă plană ($i=0°$). Ce se întâmplă cu raza reflectată?",solution:"Raza reflectată se întoarce exact pe traiectoria razei incidente ($r=i=0°$)."},
      {level:"usor",text:"Un obiect este la 20 cm de o oglindă plană. Unde se formează imaginea? Ce caracteristici are?",solution:"Imaginea se formează la 20 cm în spatele oglinzii; este virtuală, dreaptă și de aceeași mărime."},
      {level:"mediu",text:"Raza incidentă face $i=35°$ cu suprafața oglinzii. Calculați unghiul de reflexie față de normală.",solution:"Unghiul față de normală este $90°-35°=55°$, deci $r=55°$."},
      {level:"mediu",text:"Desenați construcția geometrică a imaginii unui obiect în oglinda plană.",solution:"Se marchează simetricul fiecărui punct al obiectului față de planul oglinzii; imaginea rezultată este virtuală, dreaptă și de aceeași mărime."},
      {level:"mediu",text:"De ce oglinzile retrovizoare ale mașinilor sunt oglinzi convexe și nu plane?",solution:"Oglinda convexă are un câmp vizual mai larg (imagine micșorată, dar cuprinde o zonă mai mare din spate), oferind șoferului o vizibilitate mai bună."},
      {level:"dificil",text:"Două oglinzi plane formează un unghi de 90° între ele. Câte imagini se formează pentru un obiect așezat între ele?",solution:"Se formează 3 imagini: una reflectată de fiecare oglindă și una rezultată din reflexia dublă (imaginea imaginii)."},
      {level:"dificil",text:"O rază de lumină cade pe o oglindă cu $i=60°$. Dacă oglinda este rotită cu 10°, care este noul unghi de reflexie?",solution:"Rotind oglinda cu 10°, unghiul de incidență se schimbă tot cu 10° (devine 50° sau 70°), iar unghiul de reflexie rămâne egal cu noul unghi de incidență."},
      {level:"f-dificil",text:"Demonstrați că imaginea unui punct în oglinda plană este simetrică față de planul oglinzii.",solution:"Din $r=i$ și coplanaritate, congruența triunghiurilor formate de rază, normală și oglindă arată că distanța punct-oglindă este egală cu distanța imagine-oglindă, de o parte și de alta."},
      {level:"f-dificil",text:"Un fascicul de lumină cade pe o oglindă concavă paralel cu axa optică principală. Ce se întâmplă cu razele reflectate?",solution:"Razele paralele reflectate de oglinda concavă converg toate în focarul oglinzii (proprietatea oglinzilor concave de a fi convergente)."}
    ]
  },

  "u1-l3-refractia": {
    learn: "Refracția este schimbarea direcției unei raze de lumină atunci când trece dintr-un mediu transparent în altul cu densitate optică diferită (de exemplu din aer în apă). Fiecare mediu are un indice de refracție $n=\\dfrac{c}{v}$, care arată de câte ori este mai mică viteza luminii în acel mediu față de vid. Legea lui Snell, $n_1\\sin i=n_2\\sin r$, leagă unghiul de incidență de unghiul de refracție. Când lumina trece într-un mediu mai dens optic, raza se apropie de normală; când trece într-un mediu mai puțin dens, se depărtează de normală, iar peste un anumit unghi critic apare reflexia totală internă — fenomen folosit în fibrele optice.",
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
      "Trecere aer→sticlă ($n_{\\text{sticlă}} > n_{\\text{aer}}$): raza se apropie de normală.",
      "Trecere sticlă→aer ($n_{\\text{aer}} < n_{\\text{sticlă}}$): raza se depărtează de normală → posibil reflexie totală.",
      "Fibra optică folosește reflexia totală internă pentru transmiterea luminii."
    ],
    examples: [
      {
        label: "Snell aer→sticlă",
        given: "$n_{\\text{aer}} = 1$; $n_{\\text{sticlă}} = 1{,}5$; $i = 30°$",
        ask: "Unghiul de refracție $r$",
        solve: "$n_1 \\sin i = n_2 \\sin r \\Rightarrow 1 \\cdot \\sin 30° = 1{,}5 \\cdot \\sin r \\Rightarrow \\sin r = \\dfrac{0{,}5}{1{,}5} = 0{,}333 \\Rightarrow r \\approx 19{,}5°$",
        answer: "$r \\approx 19{,}5°$"
      },
      {
        label: "indice de refracție",
        given: "Lumina trece din aer în apă; $i = 45°$, $r = 32°$",
        ask: "Indicele de refracție al apei",
        solve: "$n_{\\text{apă}} = \\dfrac{n_{\\text{aer}} \\cdot \\sin i}{\\sin r} = \\dfrac{1 \\cdot \\sin 45°}{\\sin 32°} = \\dfrac{0{,}707}{0{,}530} \\approx 1{,}33$",
        answer: "$n_{\\text{apă}} \\approx 1{,}33$"
      },
      {
        label: "reflexie totală",
        given: "$n_{\\text{sticlă}} = 1{,}5$; lumina trece din sticlă în aer",
        ask: "Unghiul critic $i_c$",
        solve: "$\\sin i_c = \\dfrac{n_{\\text{aer}}}{n_{\\text{sticlă}}} = \\dfrac{1}{1{,}5} = 0{,}667 \\Rightarrow i_c \\approx 41{,}8°$",
        answer: "$i_c \\approx 41{,}8°$"
      }
    ],
    exercises: [
      {level:"usor",text:"Explicați ce este refracția luminii, în cuvinte simple.",solution:"Refracția este schimbarea direcției razei de lumină la trecerea dintr-un mediu transparent în altul, din cauza schimbării vitezei luminii."},
      {level:"usor",text:"Lumina trece din aer în sticlă. Raza se apropie sau se depărtează de normală?",solution:"Se apropie de normală, pentru că sticla este un mediu mai dens optic decât aerul."},
      {level:"usor",text:"De ce un băț introdus oblic în apă pare frânt?",solution:"Razele de lumină provenite de la partea scufundată se refractă la suprafața apei, schimbându-și direcția, ceea ce face ca bățul să pară frânt."},
      {level:"mediu",text:"Lumina trece din aer ($n=1$) în diamant ($n=2{,}42$) cu $i=20°$. Calculați $r$.",solution:"$\\sin r=\\dfrac{1\\cdot\\sin20°}{2{,}42}\\approx0{,}141\\Rightarrow r\\approx8{,}1°$."},
      {level:"mediu",text:"Calculați unghiul critic pentru sticla cu $n=1{,}6$.",solution:"$\\sin i_c=\\dfrac1{1{,}6}=0{,}625\\Rightarrow i_c\\approx38{,}7°$."},
      {level:"mediu",text:"Ce aplicații practice utilizează reflexia totală internă?",solution:"Fibrele optice, binoclurile cu prisme, bijuteriile tăiate (diamant) care strălucesc puternic."},
      {level:"dificil",text:"Lumina trece din apă ($n=1{,}33$) în aer cu $i=40°$. Calculați $r$ și verificați dacă are loc reflexie totală.",solution:"Unghiul critic este $\\sin i_c=\\dfrac1{1{,}33}=0{,}752\\Rightarrow i_c\\approx48{,}8°$; cum $40°<48{,}8°$, lumina se refractă: $\\sin r=1{,}33\\sin40°\\approx0{,}855\\Rightarrow r\\approx58{,}7°$."},
      {level:"dificil",text:"Explicați de ce fibra optică transmite lumina fără pierderi semnificative pe distanțe mari.",solution:"În interiorul fibrei, lumina lovește pereții sub un unghi mai mare decât unghiul critic, deci suferă reflexie totală internă repetată, fără să iasă din fibră."},
      {level:"f-dificil",text:"Explicați, folosind refracția, de ce un pescar pare deplasat din perspectiva unui pește aflat în apă.",solution:"Razele de lumină de la pescar se refractă la suprafața apei, schimbându-și direcția; din perspectiva peștelui, imaginea pescarului pare deplasată față de poziția reală."},
      {level:"f-dificil",text:"Calculați indicele de refracție relativ al unui mediu față de altul dacă $i=50°$ și $r=30°$, cu $n_1=1$.",solution:"$n_2=\\dfrac{n_1\\sin i}{\\sin r}=\\dfrac{\\sin50°}{\\sin30°}\\approx1{,}53$."}
    ]
  },

  "u1-l4-lentile": {
    learn: "O lentilă este un corp transparent mărginit de suprafețe curbe, care modifică direcția razelor de lumină prin refracție. Lentilele convergente (mai groase la mijloc) adună razele paralele într-un punct numit focar, iar lentilele divergente (mai subțiri la mijloc) le împrăștie. Poziția și caracteristicile imaginii formate se calculează cu ecuația lentilei subțiri, $\\dfrac1f=\\dfrac1{d_o}+\\dfrac1{d_i}$. Dacă $d_i>0$, imaginea este reală; dacă $d_i<0$, imaginea este virtuală. Mărirea $m=-\\dfrac{d_i}{d_o}$ ne spune dacă imaginea este mărită, micșorată, dreaptă sau răsturnată.",
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
      {level:"usor",text:"Ce tip de lentilă adună razele paralele într-un focar?",solution:"Lentila convergentă (convexă, mai groasă la mijloc)."},
      {level:"usor",text:"Ce caracteristici are întotdeauna imaginea formată de o lentilă divergentă?",solution:"Este întotdeauna virtuală, dreaptă și micșorată."},
      {level:"usor",text:"Calculați vergența unui obiectiv fotografic cu $f=50$ mm $=0{,}05$ m.",solution:"$D=\\dfrac1f=\\dfrac1{0{,}05}=20$ dioptrii."},
      {level:"mediu",text:"O lentilă convergentă cu $f=15$ cm are un obiect la $d_o=45$ cm. Calculați $d_i$ și $m$.",solution:"$\\dfrac1{d_i}=\\dfrac1{15}-\\dfrac1{45}=\\dfrac2{45}\\Rightarrow d_i=22{,}5$ cm; $m=-\\dfrac{22{,}5}{45}=-0{,}5$ (reală, răsturnată, micșorată)."},
      {level:"mediu",text:"Ce tip de lentilă se folosește pentru corectarea miopiei? Justificați.",solution:"Lentile divergente, pentru că globul ocular miop este prea lung, iar lentila depărtează punctul de focalizare, aducându-l pe retină."},
      {level:"mediu",text:"Lentilă divergentă $f=-20$ cm; obiect la $d_o=30$ cm. Calculați $d_i$.",solution:"$\\dfrac1{d_i}=-\\dfrac1{20}-\\dfrac1{30}=-\\dfrac5{60}\\Rightarrow d_i=-12$ cm (virtuală)."},
      {level:"dificil",text:"O lentilă convergentă cu $f=10$ cm este folosită ca lupă, cu obiectul la $d_o=6$ cm. Calculați $d_i$ și $m$.",solution:"$\\dfrac1{d_i}=\\dfrac1{10}-\\dfrac16=-\\dfrac2{30}\\Rightarrow d_i=-15$ cm; $m=\\dfrac{15}{6}=2{,}5$ (virtuală, dreaptă, mărită)."},
      {level:"dificil",text:"Explicați de ce ochiul uman miop vede neclar obiectele îndepărtate.",solution:"La ochiul miop, imaginea obiectelor îndepărtate se formează înaintea retinei, nu exact pe ea, deci imaginea percepută este neclară."},
      {level:"f-dificil",text:"O lentilă convergentă formează pe un ecran o imagine reală, de 3 ori mai mare, cu obiectul la $d_o=8$ cm. Calculați $f$.",solution:"Din $|m|=\\dfrac{d_i}{d_o}=3\\Rightarrow d_i=24$ cm; $\\dfrac1f=\\dfrac18+\\dfrac1{24}=\\dfrac4{24}\\Rightarrow f=6$ cm."},
      {level:"f-dificil",text:"Comparați imaginea la un aparat de fotografiat ($d_o>2f$) cu cea la un proiector ($f<d_o<2f$).",solution:"La aparatul foto imaginea reală este micșorată; la proiector imaginea reală este mărită — cu cât obiectul este mai aproape de focar, cu atât imaginea proiectată este mai mare."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 2 – Electricitate statică
  // ══════════════════════════════════════════════════════════

  "u2-l1-electrostatica": {
    learn: "Toate corpurile sunt formate din atomi, care conțin protoni (sarcină pozitivă), electroni (sarcină negativă) și neutroni (fără sarcină). În mod normal, un corp este neutru electric, pentru că are același număr de protoni și electroni. Electrizarea înseamnă să rupem acest echilibru: un corp care PIERDE electroni rămâne cu sarcină pozitivă, iar unul care CâșTIGĂ electroni devine încărcat negativ. Acest lucru se poate întâmpla prin frecare (electronii trec de pe un material pe altul), prin contact (atingerea a două corpuri) sau prin inducție (redistribuirea sarcinilor fără contact direct, doar prin apropierea unui corp încărcat). Regula fundamentală este simplă: sarcinile de același semn se resping, iar cele de semn opus se atrag.",
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
      {level:"usor",text:"Sticla frecată cu mătase se încarcă pozitiv. Explicați ce s-a întâmplat cu electronii.",solution:"Sticla a cedat electroni mătasii, rămânând cu mai puțini electroni decât protoni, deci se încarcă pozitiv."},
      {level:"usor",text:"Ce tip de electrizare are loc când doi atomi se ating direct?",solution:"Electrizare prin contact — sarcinile se redistribuie prin transfer direct la atingere."},
      {level:"usor",text:"Două bile cu sarcini negative sunt apropiate una de alta. Se atrag sau se resping?",solution:"Se resping, pentru că au sarcini de același semn."},
      {level:"mediu",text:"Un corp are $q=+4{,}8\\times10^{-18}$ C. Câți electroni a pierdut?",solution:"$n=\\dfrac{q}{e}=\\dfrac{4{,}8\\times10^{-18}}{1{,}6\\times10^{-19}}=30$ electroni."},
      {level:"mediu",text:"Descrieți electrizarea prin inducție a unei bile metalice cu o tijă încărcată pozitiv.",solution:"Tija pozitivă atrage electronii liberi din bilă spre partea apropiată (care devine negativă), iar partea îndepărtată rămâne pozitivă — fără transfer de sarcină, doar redistribuire."},
      {level:"mediu",text:"De ce baloanele frecate cu lâna se lipesc de perete?",solution:"Balonul încărcat electric induce sarcini de semn opus pe suprafața peretelui, iar atracția dintre sarcinile opuse ține balonul lipit."},
      {level:"dificil",text:"Un corp are sarcina $q=-3{,}2\\times10^{-18}$ C. Câți electroni în exces are corpul?",solution:"$n=\\dfrac{3{,}2\\times10^{-18}}{1{,}6\\times10^{-19}}=20$ electroni în exces."},
      {level:"dificil",text:"Două bile identice, una cu $q_1=+8$ nC și alta neutră, sunt puse în contact și apoi separate. Ce sarcină are fiecare?",solution:"Sarcina totală se împarte egal între cele două bile identice: fiecare rămâne cu $q=+4$ nC."},
      {level:"f-dificil",text:"Explicați de ce electrizarea prin inducție NU transferă sarcină netă corpului indus.",solution:"La inducție, electronii se redistribuie în interiorul corpului, dar numărul total de electroni și protoni rămâne același, deci sarcina totală a corpului rămâne zero."},
      {level:"f-dificil",text:"Două corpuri identice au sarcinile $q_1=+6$ nC și $q_2=-2$ nC. După ce sunt puse în contact și separate, ce sarcină are fiecare?",solution:"Sarcina totală este $6+(-2)=4$ nC, împărțită egal: fiecare corp rămâne cu $q=+2$ nC."}
    ]
  },

  "u2-l2-legea-coulomb": {
    learn: "Legea lui Coulomb descrie matematic forța cu care interacționează două sarcini electrice punctiforme: $F=k\\dfrac{|q_1||q_2|}{r^2}$, unde $k=9\\times10^9$ N·m²/C². Această formulă seamănă izbitor cu legea gravitației universale, dar descrie o forță mult mai puternică la scară mică. Forța este direct proporțională cu produsul sarcinilor și invers proporțională cu pătratul distanței dintre ele — dacă distanța se dublează, forța scade de 4 ori. În jurul oricărei sarcini există un câmp electric $\\vec E$, care poate exercita forță asupra altor sarcini aduse în acea regiune, chiar dacă acestea nu se ating.",
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
      {level:"usor",text:"Calculați forța dintre $q_1=4\\mu C$ și $q_2=-2\\mu C$ aflate la $r=0{,}2$ m.",solution:"$F=9\\times10^9\\cdot\\dfrac{4\\times10^{-6}\\cdot2\\times10^{-6}}{0{,}04}=1{,}8$ N (atractivă, sarcini opuse)."},
      {level:"usor",text:"Ce se întâmplă cu forța Coulomb dacă una dintre sarcini se dublează?",solution:"Forța se dublează, pentru că este direct proporțională cu fiecare sarcină."},
      {level:"usor",text:"Două sarcini identice ca semn sunt aduse mai aproape una de alta. Cum se schimbă forța?",solution:"Forța de respingere crește, pentru că este invers proporțională cu pătratul distanței."},
      {level:"mediu",text:"Forța dintre două sarcini este $F=0{,}9$ N la $r=3$ cm. Ce devine forța dacă $r=6$ cm?",solution:"Distanța se dublează, deci forța scade de 4 ori: $F=0{,}225$ N."},
      {level:"mediu",text:"La ce distanță de $Q=10\\mu C$ câmpul electric are valoarea $E=10^4$ N/C?",solution:"Din $E=k\\dfrac{Q}{r^2}$: $r^2=\\dfrac{9\\times10^9\\times10\\times10^{-6}}{10^4}=9\\Rightarrow r=3$ m."},
      {level:"mediu",text:"Comparați forța Coulomb și forța gravitațională dintre doi protoni, calitativ.",solution:"Forța Coulomb dintre doi protoni este de ordinul a $10^{36}$ ori mai mare decât forța gravitațională dintre ei, la aceeași distanță."},
      {level:"dificil",text:"Calculați forța dintre $q_1=2\\mu C$ și $q_2=3\\mu C$ la $r=0{,}3$ m.",solution:"$F=9\\times10^9\\cdot\\dfrac{6\\times10^{-12}}{0{,}09}=0{,}6$ N."},
      {level:"dificil",text:"Două sarcini egale se resping cu $F=2$ N la $r=0{,}1$ m. Calculați valoarea comună a sarcinilor.",solution:"$q^2=\\dfrac{F r^2}{k}=\\dfrac{2\\times0{,}01}{9\\times10^9}\\approx2{,}22\\times10^{-12}\\Rightarrow q\\approx1{,}49\\times10^{-6}$ C."},
      {level:"f-dificil",text:"Trei sarcini egale sunt plasate în vârfurile unui triunghi echilateral cu latura $r$. Explicați calitativ direcția forței rezultante asupra uneia dintre ele.",solution:"Fiecare sarcină este respinsă de celelalte două cu forțe egale; rezultanta este orientată de-a lungul bisectoarei unghiului format, îndreptându-se spre exteriorul triunghiului."},
      {level:"f-dificil",text:"Calculați intensitatea câmpului electric creat de $Q=5\\mu C$ la $r=0{,}2$ m.",solution:"$E=k\\dfrac{Q}{r^2}=9\\times10^9\\cdot\\dfrac{5\\times10^{-6}}{0{,}04}\\approx1{,}125\\times10^6$ N/C."}
    ]
  },

  "u2-l3-camp-electric": {
    learn: "Câmpul electric este o regiune din spațiu în care o sarcină electrică simte o forță; îl reprezentăm prin linii de câmp care ies din sarcinile pozitive și intră în cele negative, fără să se intersecteze niciodată. Fiecare punct din câmp are un potențial electric $V$, iar diferența de potențial dintre două puncte se numește tensiune electrică, $U=V_A-V_B$, măsurată în volți. Între două plăci paralele încărcate se formează un câmp uniform (linii paralele, egal distanțate), cu intensitatea $E=U/d$. Când o sarcină se deplasează într-un câmp electric sub acțiunea tensiunii $U$, câmpul efectuează asupra ei un lucru mecanic $L=q\\cdot U$.",
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
      {level:"usor",text:"Ce direcție au liniile de câmp electric față de o sarcină pozitivă izolată?",solution:"Liniile ies radial din sarcina pozitivă, îndreptându-se spre exterior."},
      {level:"usor",text:"Cât este 1 volt, exprimat în joule per coulomb?",solution:"$1$ V $=1$ J/C."},
      {level:"usor",text:"Ce instrument măsoară tensiunea electrică și cum se conectează?",solution:"Voltmetrul, conectat în paralel cu elementul de circuit."},
      {level:"mediu",text:"Între două plăci la $d=2$ cm și $U=400$ V. Calculați $E$ și forța pe un electron.",solution:"$E=\\dfrac{400}{0{,}02}=2\\times10^4$ V/m; $F=eE=1{,}6\\times10^{-19}\\times2\\times10^4=3{,}2\\times10^{-15}$ N."},
      {level:"mediu",text:"O sarcină $q=5\\mu C$ se deplasează prin $U=24$ V. Calculați lucrul câmpului.",solution:"$L=qU=5\\times10^{-6}\\times24=120\\mu J$."},
      {level:"mediu",text:"De ce câmpul electric în interiorul unui conductor în echilibru este zero?",solution:"Electronii liberi se redistribuie pe suprafață până când câmpul intern se anulează, altfel ar exista o forță care i-ar mișca în continuare."},
      {level:"dificil",text:"Două plăci paralele la $d=5$ mm creează un câmp $E=4\\times10^4$ V/m. Calculați tensiunea $U$.",solution:"$U=E\\cdot d=4\\times10^4\\times5\\times10^{-3}=200$ V."},
      {level:"dificil",text:"O sarcină $q=2\\mu C$ primește lucrul mecanic $L=50\\mu J$ de la câmp. Calculați tensiunea parcursă.",solution:"$U=\\dfrac{L}{q}=\\dfrac{50\\times10^{-6}}{2\\times10^{-6}}=25$ V."},
      {level:"f-dificil",text:"Descrieți liniile de câmp ale unui câmp uniform și ale unui câmp creat de o sarcină pozitivă izolată.",solution:"Câmpul uniform are linii paralele, egal depărtate, de la placa + spre placa -; câmpul unei sarcini punctiforme are linii radiale, mai dese lângă sarcină."},
      {level:"f-dificil",text:"O particulă cu $q=4\\mu C$ se deplasează într-un câmp uniform cu $E=10^4$ V/m pe o distanță de 3 cm în sensul câmpului. Calculați lucrul mecanic efectuat.",solution:"$U=E\\cdot d=10^4\\times0{,}03=300$ V; $L=qU=4\\times10^{-6}\\times300=1{,}2\\times10^{-3}$ J."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 3 – Curentul electric
  // ══════════════════════════════════════════════════════════

  "u3-l1-curentul-electric": {
    learn: "Curentul electric este mișcarea ordonată a purtătorilor de sarcină electrică (electroni liberi, în cazul metalelor), care apare atunci când există o diferență de potențial (tensiune) într-un circuit închis. Intensitatea curentului $I$ arată câtă sarcină trece printr-o secțiune a conductorului în fiecare secundă, $I=q/t$, și se măsoară în amperi (A). Tensiunea electrică $U$, menținută de o sursă (baterie, generator), este cea care „împinge” purtătorii de sarcină prin circuit. Prin convenție, sensul curentului electric este de la polul pozitiv al generatorului, prin circuitul exterior, spre polul negativ — deși electronii se mișcă în realitate în sens invers.",
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
      {level:"usor",text:"Prin un bec trec $q=30$ C în $t=10$ s. Calculați $I$.",solution:"$I=\\dfrac{q}{t}=\\dfrac{30}{10}=3$ A."},
      {level:"usor",text:"Ce instrument măsoară intensitatea curentului și cum se conectează?",solution:"Ampermetrul, conectat în serie în circuit."},
      {level:"usor",text:"Care este sensul convențional al curentului electric?",solution:"De la polul pozitiv al generatorului, prin circuitul exterior, spre polul negativ."},
      {level:"mediu",text:"Un curent de $I=2$ A circulă timp de $t=5$ min. Calculați sarcina transferată.",solution:"$q=I\\cdot t=2\\times300=600$ C."},
      {level:"mediu",text:"Desenați schema unui circuit simplu: baterie, bec, întrerupător. Indicați sensul convențional.",solution:"Circuitul are bateria, becul și întrerupătorul legați într-o buclă închisă; curentul convențional circulă de la borna + a bateriei, prin întrerupător și bec, spre borna -."},
      {level:"mediu",text:"De ce ampermetrul se montează în serie și voltmetrul în paralel?",solution:"Ampermetrul (rezistență mică) în serie lasă curentul să treacă nemodificat; voltmetrul (rezistență mare) în paralel nu deviază curentul principal, măsurând corect tensiunea."},
      {level:"dificil",text:"Printr-un conductor trec $q=45$ C în $t=15$ s. Calculați $I$ și timpul necesar pentru a trece $q=90$ C la aceeași intensitate.",solution:"$I=\\dfrac{45}{15}=3$ A; pentru $90$ C: $t=\\dfrac{90}{3}=30$ s."},
      {level:"dificil",text:"Un circuit are un bec și o baterie, dar becul nu se aprinde. Ce cauze posibile țin de întreruperea circuitului?",solution:"Îtrerupătorul deschis, filamentul becului ars, un fir deconectat sau bateria descărcată — toate întrerup circuitul și opresc trecerea curentului."},
      {level:"f-dificil",text:"Calculați sarcina transferată de un curent $I=1{,}5$ A timp de o oră.",solution:"$q=I\\cdot t=1{,}5\\times3600=5400$ C."},
      {level:"f-dificil",text:"Explicați de ce, deși electronii se mișcă de la borna negativă la cea pozitivă, sensul convențional al curentului este invers.",solution:"Sensul convențional a fost stabilit istoric înainte de descoperirea electronului, presupunând mișcarea sarcinilor pozitive; convenția a fost păstrată chiar după ce s-a aflat că de fapt electronii (negativi) sunt purtătorii reali de sarcină în metale."}
    ]
  },

  "u3-l2-legea-ohm": {
    learn: "Legea lui Ohm descrie relația dintre tensiune, rezistență și intensitate într-un circuit: $U=R\\cdot I$. Rezistența electrică $R$ măsoară cât de mult se opune un conductor trecerii curentului și se măsoară în ohmi (Ω); ea depinde de materialul conductorului (rezistivitatea $\\rho$), de lungimea lui (direct proporțional) și de secțiunea lui (invers proporțional): $R=\\rho\\dfrac{l}{A}$. Un generator real nu menține mereu aceeași tensiune la borne: din cauza rezistenței sale interne $r$, tensiunea la borne scade cu curentul care circulă, $U_{borne}=E-I\\cdot r$, unde $E$ este tensiunea electromotoare (t.e.m.) a generatorului.",
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
      {level:"usor",text:"Un rezistor de $R=20$ Ω este traversat de $I=0{,}5$ A. Calculați tensiunea la bornele lui.",solution:"$U=RI=20\\times0{,}5=10$ V."},
      {level:"usor",text:"Ce unitate de măsură are rezistența electrică?",solution:"Ohmul (Ω)."},
      {level:"usor",text:"Ce se întâmplă cu intensitatea curentului dacă rezistența se dublează, la aceeași tensiune?",solution:"Intensitatea scade la jumătate ($I=U/R$)."},
      {level:"mediu",text:"Tensiunea la bornele unui rezistor este $U=12$ V; $R=4$ Ω. Calculați $I$ și $P$.",solution:"$I=\\dfrac{12}{4}=3$ A; $P=UI=12\\times3=36$ W."},
      {level:"mediu",text:"De ce cablul electric de cupru are rezistența mică față de o sârmă de nichrom?",solution:"Cuprul are rezistivitate mult mai mică decât nichromul, deci pentru aceeași lungime și secțiune, rezistența cuprului este mult mai mică."},
      {level:"mediu",text:"Generatorul are $E=10$ V, $r=0{,}5$ Ω; $I=2$ A. Calculați $U_{borne}$.",solution:"$U_{borne}=E-Ir=10-2\\times0{,}5=9$ V."},
      {level:"dificil",text:"Un conductor de cupru are $\\rho=1{,}7\\times10^{-8}$ Ω\u00b7m, $l=50$ m, $A=0{,}5$ mm². Calculați rezistența.",solution:"$R=\\rho\\dfrac{l}{A}=1{,}7\\times10^{-8}\\times\\dfrac{50}{0{,}5\\times10^{-6}}=1{,}7$ Ω."},
      {level:"dificil",text:"Un rezistor disipă $P=100$ W la $U=20$ V. Calculați $R$ și $I$.",solution:"$I=\\dfrac{P}{U}=\\dfrac{100}{20}=5$ A; $R=\\dfrac{U}{I}=\\dfrac{20}{5}=4$ Ω."},
      {level:"f-dificil",text:"Un generator cu $E=12$ V și $r=1$ Ω alimentează un rezistor $R=5$ Ω. Calculați $I$ din circuit și $U_{borne}$.",solution:"$I=\\dfrac{E}{R+r}=\\dfrac{12}{6}=2$ A; $U_{borne}=E-Ir=12-2=10$ V."},
      {level:"f-dificil",text:"Două conductoare din același material au aceeași lungime, dar secțiunea celui de-al doilea este dublă. Comparați rezistențele lor.",solution:"Rezistența este invers proporțională cu secțiunea, deci al doilea conductor are rezistența de două ori mai mică."}
    ]
  },

  "u3-l3-circuite": {
    learn: "Când conectăm mai multe rezistoare într-un circuit, putem înlocui întregul grup cu un singur rezistor echivalent, care produce același efect. În conexiunea SERIE (rezistoarele legate cap la cap, pe un singur traseu), curentul este același prin fiecare element, iar rezistențele se ADUNĂ: $R_{ec}=R_1+R_2+\\ldots$ În conexiunea PARALEL (rezistoarele legate între aceleași două noduri), tensiunea este aceeași pe fiecare, iar inversele rezistențelor se adună: $\\dfrac1{R_{ec}}=\\dfrac1{R_1}+\\dfrac1{R_2}+\\ldots$ Instalațiile electrice din case sunt întotdeauna în paralel, pentru ca defectarea unui aparat să nu oprească funcționarea celorlalte.",
    terms: [
      "<strong>Circuit serie</strong>: rezistoarele sunt conectate cap la cap; același curent prin fiecare.",
      "<strong>Circuit paralel</strong>: rezistoarele sunt conectate între aceleași două noduri; aceeași tensiune pe fiecare.",
      "<strong>Rezistența echivalentă serie</strong>: $R_{ec} = R_1 + R_2 + \\ldots$",
      "<strong>Rezistența echivalentă paralel</strong>: $\\dfrac{1}{R_{ec}} = \\dfrac{1}{R_1} + \\dfrac{1}{R_2} + \\ldots$",
      "<strong>Prima lege a lui Kirchhoff (noduri)</strong>: $\\sum I_{\\text{intrare}} = \\sum I_{\\text{ieșire}}$.",
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
      {level:"usor",text:"$R_1=10$ Ω și $R_2=15$ Ω în serie la $U=50$ V. Calculați $R_{ec}$, $I$, $U_1$, $U_2$.",solution:"$R_{ec}=25$ Ω; $I=\\dfrac{50}{25}=2$ A; $U_1=2\\times10=20$ V; $U_2=2\\times15=30$ V."},
      {level:"usor",text:"Ce rămâne același într-un circuit serie: curentul sau tensiunea?",solution:"Curentul este același prin fiecare rezistor în serie."},
      {level:"usor",text:"Ce rămâne același într-un circuit paralel: curentul sau tensiunea?",solution:"Tensiunea este aceeași pe fiecare rezistor în paralel."},
      {level:"mediu",text:"$R_1=8$ Ω și $R_2=8$ Ω în paralel la $U=16$ V. Calculați $R_{ec}$, $I_1$, $I_2$, $I$.",solution:"$R_{ec}=\\dfrac{8\\times8}{16}=4$ Ω; $I_1=I_2=\\dfrac{16}{8}=2$ A; $I=4$ A."},
      {level:"mediu",text:"De ce instalațiile electrice casnice sunt conectate în paralel și nu în serie?",solution:"Pentru ca defectarea sau oprirea unui aparat să nu întrerupă funcționarea celorlalte, iar fiecare aparat să primească aceeași tensiune nominală."},
      {level:"mediu",text:"Trei rezistoare de 6 Ω fiecare sunt în paralel. Calculați $R_{ec}$.",solution:"$\\dfrac1{R_{ec}}=\\dfrac16+\\dfrac16+\\dfrac16=\\dfrac36\\Rightarrow R_{ec}=2$ Ω."},
      {level:"dificil",text:"$R_1=4$ Ω în serie cu gruparea paralel $R_2=6$ Ω și $R_3=3$ Ω; $U=20$ V. Calculați $R_{ec}$ și $I$ total.",solution:"$R_{23}=\\dfrac{6\\times3}{9}=2$ Ω; $R_{ec}=4+2=6$ Ω; $I=\\dfrac{20}{6}\\approx3{,}33$ A."},
      {level:"dificil",text:"Două rezistoare identice de $R$ pot fi conectate în serie sau în paralel. Comparați rezistențele echivalente obținute.",solution:"În serie: $R_{ec}=2R$; în paralel: $R_{ec}=R/2$ — raportul dintre cele două configurații este 4."},
      {level:"f-dificil",text:"Un circuit mixt are $R_1=3$ Ω în serie cu gruparea paralel $R_2=6$ Ω și $R_3=12$ Ω, alimentat la $U=9$ V. Calculați curentul prin $R_2$.",solution:"$R_{23}=4$ Ω, $R_{ec}=7$ Ω, $I=9/7\\approx1{,}29$ A; tensiunea pe grupare este $U_{23}=I\\times4\\approx5{,}14$ V, deci $I_2=\\dfrac{5{,}14}{6}\\approx0{,}86$ A."},
      {level:"f-dificil",text:"Explicați de ce rezistența echivalentă a unei grupări paralele este întotdeauna mai mică decât cea mai mică rezistență din grup.",solution:"Adăugând mai multe căi pentru curent, curentul total crește la aceeași tensiune, deci rezistența echivalentă ($R=U/I$) scade sub valoarea oricărui rezistor individual."}
    ]
  },

  "u3-l4-efecte-curent": {
    learn: "Curentul electric produce trei tipuri principale de efecte, folosite în numeroase aparate din viața de zi cu zi. Efectul termic (Joule) transformă energia electrică în căldură în orice conductor parcurs de curent, $Q=I^2Rt$ — pe acest principiu funcționează fierul de călcat, radiatorul electric sau becul cu filament. Efectul chimic (electroliza) apare când curentul trece printr-o soluție și descompune substanța (de exemplu, apa se descompune în hidrogen și oxigen). Efectul magnetic apare în jurul oricărui conductor parcurs de curent și stă la baza electromagneților, motoarelor și generatoarelor electrice. Puterea electrică $P=UI$ arată câtă energie se transformă în fiecare secundă, iar energia totală consumată este $W=Pt$, măsurată practic în kilowați-oră (kWh).",
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
      {level:"usor",text:"Calculați căldura degajată de $R=5$ Ω, $I=4$ A în $t=10$ min.",solution:"$Q=I^2Rt=16\\times5\\times600=48000$ J $=48$ kJ."},
      {level:"usor",text:"Ce unitate practică se folosește pentru energia electrică consumată în casă?",solution:"Kilowatt-ora (kWh)."},
      {level:"usor",text:"La ce electrod se degajă hidrogen în electroliza apei?",solution:"La catod (electrodul negativ)."},
      {level:"mediu",text:"Un fier de călcat are $P=1{,}2$ kW și funcționează $t=30$ min. Calculați energia în kWh și costul (1 kWh = 1,5 lei).",solution:"$W=1{,}2\\times0{,}5=0{,}6$ kWh; cost $=0{,}6\\times1{,}5=0{,}9$ lei."},
      {level:"mediu",text:"Care sunt aplicațiile electrolizei în industrie?",solution:"Galvanizarea (acoperiri metalice), obținerea aluminiului și a altor metale, purificarea metalelor, producerea hidrogenului."},
      {level:"mediu",text:"Explicați de ce siguranța fuzibilă protejează circuitul electric.",solution:"Siguranța conține un fir subțire care se topesc (efect Joule) la curent prea mare, întrerupând circuitul înainte ca supraîncălzirea să provoace un incendiu."},
      {level:"dificil",text:"Un bec de $P=100$ W funcționează $t=5$ h pe zi, timp de 30 de zile. Calculați energia totală în kWh.",solution:"$W=0{,}1\\text{ kW}\\times5\\times30=15$ kWh."},
      {level:"dificil",text:"Un rezistor $R=10$ Ω este parcurs de $I=2$ A timp de 1 oră. Calculați căldura în kJ.",solution:"$Q=I^2Rt=4\\times10\\times3600=144000$ J $=144$ kJ."},
      {level:"f-dificil",text:"Comparați energia consumată de două becuri, unul de 60 W și altul de 100 W, ambele funcționând 4 ore.",solution:"Becul de 60 W consumă $0{,}24$ kWh, iar cel de 100 W consumă $0{,}4$ kWh — diferență de $0{,}16$ kWh."},
      {level:"f-dificil",text:"Explicați de ce efectul termic Joule este proportional cu pătratul intensității ($I^2$) și nu direct cu $I$.",solution:"Puterea disipată este $P=UI$, iar din legea lui Ohm $U=RI$, deci $P=RI\\cdot I=RI^2$ — dependența pătratică apare din combinarea celor două legi."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 4 – Fenomene magnetice
  // ══════════════════════════════════════════════════════════

  "u4-l1-magneti": {
    learn: "Un magnet este un corp care atrage fierul și alte câteva metale (numite feromagnetice), având întotdeauna doi poli, numiți nord (N) și sud (S). Polii identici se resping, iar polii opuși se atrag — la fel ca la sarcinile electrice, dar cu o diferență importantă: polii magnetici nu pot fi izolați (dacă tăiem un magnet în două, obținem doi magneți noi, fiecare cu ambii poli). În jurul unui magnet există un câmp magnetic, reprezentat prin linii de câmp care ies din polul N și intră în polul S în exterior, fiind întotdeauna curbe închise. Pământul însuși se comportă ca un magnet uriaș, iar busola folosește acest câmp magnetic terestru pentru a indica direcția.",
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
      {level:"usor",text:"De ce nu poți izola un pol magnetic singur (dacă tai un magnet la mijloc)?",solution:"Fiecare bucăță rezultată devine un magnet nou, complet, cu ambii poli N și S — polii magnetici nu există separat."},
      {level:"usor",text:"Ce se întâmplă când apropiem doi poli identici (N-N)?",solution:"Se resping."},
      {level:"usor",text:"Ce material este atras de un magnet: fierul sau aluminiul?",solution:"Fierul (material feromagnetic); aluminiul nu este atras de magneți."},
      {level:"mediu",text:"Cum deosebim un corp magnetic de un corp magnetizat (permanent)?",solution:"Corpul magnetic (feromagnetic, ex. fierul moale) este atras de un magnet dar nu păstrează magnetismul după îndepărtarea acestuia; corpul magnetizat permanent își păstrează proprietățile magnetice."},
      {level:"mediu",text:"Desenați (descriind) liniile de câmp magnetic ale doi magneți cu polii opuși față în față.",solution:"Liniile ies din polul N al unui magnet și intră direct în polul S al celuilalt, formând o zonă densă de linii paralele între cei doi poli (atracție)."},
      {level:"mediu",text:"De ce busola funcționează ca instrument de orientare pe Pământ?",solution:"Pământul se comportă ca un magnet uriaș, iar acul magnetic al busolei se orientează după liniile câmpului magnetic terestru, indicând aproximativ direcția nord-sud."},
      {level:"dificil",text:"Explicați de ce liniile de câmp magnetic sunt întotdeauna curbe închise, spre deosebire de liniile câmpului electric.",solution:"Polii magnetici nu pot fi izolați (nu există „sarcină magnetică” unică), deci liniile trebuie să se întoarcă întotdeauna în același magnet, formând bucle închise; câmpul electric are surse (sarcini + și -) unde liniile pot începe sau se pot termina."},
      {level:"dificil",text:"Un magnet este tăiat în 3 bucăți egale. Câți poli N și câți poli S rezultă în total?",solution:"Fiecare din cele 3 bucăți devine un magnet complet cu un pol N și un pol S, deci în total rezultă 3 poli N și 3 poli S."},
      {level:"f-dificil",text:"Explicați de ce polul nord geografic al Pământului corespunde de fapt unui pol magnetic de tip S.",solution:"Polul N al busolei este atras spre nordul geografic, iar poli opuși se atrag; deci, pentru ca polul N al busolei să fie atras spre nord, acolo trebuie să se afle un pol magnetic de tip S al Pământului."},
      {level:"f-dificil",text:"O busolă este plasată între doi magneți identici, orientați cu polii N unul spre altul, la distanțe egale. Ce se întâmplă cu acul busolei?",solution:"Câmpurile celor doi magneți se anulează parțial în acel punct (fiind simetrice și opuse ca sens spre busolă), deci acul busolei nu are o direcție preferențială clară, putând oscila sau rămâne instabil."}
    ]
  },

  "u4-l2-electromagnetism": {
    learn: "Orice conductor parcurs de curent electric creează în jurul lui un câmp magnetic — aceasta este legătura fundamentală dintre electricitate și magnetism. Înfășurând conductorul în formă de bobină (solenoid) și introducând un miez de fier, obținem un electromagnet, al cărui câmp magnetic poate fi controlat prin intensitatea curentului — spre deosebire de magneții permanenți, poate fi pornit sau oprit după nevoie. Invers, un conductor parcurs de curent și plasat într-un câmp magnetic extern suferă o forță (forța Ampere), $F=BIl\\sin\\alpha$, care stă la baza funcționării motoarelor electrice (transformă energia electrică în mișcare). Fenomenul invers, în care mișcarea unui conductor într-un câmp magnetic produce curent electric, se numește inducție electromagnetică și stă la baza generatoarelor electrice.",
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
      {level:"usor",text:"Un conductor de $l=1$ m, $I=5$ A este plasat perpendicular pe $\\vec{B}=0{,}2$ T. Calculați $F$.",solution:"$F=BIl\\sin90°=0{,}2\\times5\\times1=1$ N."},
      {level:"usor",text:"Ce se întâmplă cu forța Ampere dacă $\\vec I$ este paralel cu $\\vec B$?",solution:"Forța este zero, pentru că $\\sin0°=0$."},
      {level:"usor",text:"Ce transformă un motor electric?",solution:"Transformă energia electrică în energie mecanică (mișcare)."},
      {level:"mediu",text:"Descrieți construcția unui electromagnet și cel puțin 2 aplicații ale sale.",solution:"Un electromagnet este un solenoid (bobină) cu miez de fier, parcurs de curent; aplicații: macarale electromagnetice, sonerii electrice, relee."},
      {level:"mediu",text:"Cum funcționează un motor electric de curent continuu? Explicați principiul de bază.",solution:"Curentul prin spirele rotorului, aflat în câmpul magnetic al statorului, produce forța Ampere, care rotește rotorul; comutatorul schimbă periodic sensul curentului pentru a menține rotația continuă."},
      {level:"mediu",text:"Care este diferența dintre motor electric și generator electric?",solution:"Motorul transformă energia electrică în energie mecanică (folosind forța Ampere); generatorul face invers, transformă energia mecanică în energie electrică (folosind inducția electromagnetică)."},
      {level:"dificil",text:"Un conductor de $l=0{,}8$ m este parcurs de $I=6$ A într-un câmp $B=0{,}25$ T, la un unghi de 30° față de câmp. Calculați forța.",solution:"$F=BIl\\sin30°=0{,}25\\times6\\times0{,}8\\times0{,}5=0{,}6$ N."},
      {level:"dificil",text:"Un electromagnet cu $n=200$ spire produce un câmp $B$. Ce se întâmplă cu $B$ dacă dublăm numărul de spire, păstrând curentul constant?",solution:"Câmpul magnetic se dublează, pentru că $B$ este direct proporțional cu numărul de spire pe unitatea de lungime."},
      {level:"f-dificil",text:"Un motor electric are randamentul $\\eta=0{,}75$ și primește $P_{el}=800$ W. Calculați puterea mecanică furnizată și puterea pierdută.",solution:"$P_{mec}=0{,}75\\times800=600$ W; puterea pierdută (transformată în căldură) este $800-600=200$ W."},
      {level:"f-dificil",text:"Explicați cum ar putea fi mărită forța Ampere asupra unui conductor, enumerând toți factorii posibili.",solution:"Forța crește dacă mărim intensitatea curentului $I$, dacă mărim inducția câmpului magnetic $B$, dacă mărim lungimea conductorului $l$ aflat în câmp, sau dacă orientăm conductorul perpendicular pe câmp (unghiul $\\alpha=90°$, unde $\\sin\\alpha$ este maxim)."}
    ]
  },

  // ══════════════════════════════════════════════════════════
  //  UNITATEA 5 – Mecanică
  // ══════════════════════════════════════════════════════════

  "u5-l1-forta": {
    learn: "Forța este acțiunea prin care un corp modifică starea de mișcare sau forma altui corp; se măsoară în newtoni (N) și este o mărime vectorială (are direcție și sens, nu doar valoare). Cele mai importante forțe studiate la acest nivel sunt: greutatea $G=mg$ (forța de atracție gravitațională exercitată de Pământ asupra unui corp, cu $g\\approx9{,}8$ N/kg), forța elastică (apare atunci când deformăm un resort, proporțională cu deformarea, conform legii lui Hooke: $F_e=kx$) și forța de frecare (se opune mișcării relative dintre două suprafețe aflate în contact, $F_f=\\mu N$, unde $N$ este forța normală). Rezultanta mai multor forțe care acționează asupra unui corp determină mișcarea lui.",
    terms: [
      "<strong>Forța $F$</strong>: mărime vectorială; unitate: newtonul (N).",
      "<strong>Greutatea $G=mg$</strong>: forța de atracție gravitațională a Pământului.",
      "<strong>Constanta elastică $k$</strong>: caracterizează rigiditatea unui resort (N/m).",
      "<strong>Coeficientul de frecare $\\mu$</strong>: raportul dintre forța de frecare și forța normală.",
      "<strong>Forța normală $N$</strong>: forța de reacțiune a suprafeței, perpendiculară pe ea."
    ],
    properties: [
      "$G=mg$, cu $g\\approx9{,}8$ N/kg (uneori aproximat 10 N/kg).",
      "Legea lui Hooke: $F_e=kx$ (forța elastică proporțională cu alungirea).",
      "Forța de frecare: $F_f=\\mu N$, independentă de mărimea suprafeței de contact.",
      "Masa este constantă; greutatea depinde de $g$, care variază cu locul (Pământ, Lună etc.)."
    ],
    steps: [
      "Identifică toate forțele care acționează asupra corpului.",
      "Calculează greutatea cu $G=mg$.",
      "Pentru resort, aplică legea lui Hooke $F_e=kx$.",
      "Pentru frecare, aplică $F_f=\\mu N$."
    ],
    tips: [
      "Nu confunda masa (kg) cu greutatea (N) — sunt legate prin $G=mg$.",
      "Pe Lună, $g$ este de 6 ori mai mic, deci greutatea scade de 6 ori (masa rămâne aceeași).",
      "Forța de frecare statică este de obicei puțin mai mare decât cea cinetică (de alunecare)."
    ],
    examples: [
      {label:"greutate", given:"un corp cu masa $m=5$ kg", ask:"greutatea corpului", solve:"$G=mg=5\\times9{,}8=49$ N.", answer:"$G=49$ N"},
      {label:"forța elastică", given:"un resort cu $k=200$ N/m se alungește cu $x=0{,}05$ m", ask:"forța elastică", solve:"$F_e=kx=200\\times0{,}05=10$ N.", answer:"$F_e=10$ N"},
      {label:"forța de frecare", given:"un corp cu $N=20$ N, $\\mu=0{,}3$", ask:"forța de frecare", solve:"$F_f=\\mu N=0{,}3\\times20=6$ N.", answer:"$F_f=6$ N"}
    ],
    exercises: [
      {level:"usor",text:"Calculați greutatea unui corp cu masa $m=8$ kg ($g=10$ N/kg).",solution:"$G=mg=8\\times10=80$ N."},
      {level:"usor",text:"Un corp are greutatea $G=50$ N. Calculați masa lui ($g=10$ N/kg).",solution:"$m=\\dfrac{G}{g}=\\dfrac{50}{10}=5$ kg."},
      {level:"usor",text:"Ce se întâmplă cu greutatea unui corp dacă îl ducem pe Lună (unde $g$ este de 6 ori mai mic)?",solution:"Greutatea scade de 6 ori, dar masa rămâne aceeași."},
      {level:"mediu",text:"Un resort cu $k=150$ N/m este întins cu forța $F=30$ N. Calculați alungirea.",solution:"$x=\\dfrac{F}{k}=\\dfrac{30}{150}=0{,}2$ m."},
      {level:"mediu",text:"Un corp cu greutatea $N=40$ N are coeficientul de frecare $\\mu=0{,}25$ cu suprafața. Calculați forța de frecare.",solution:"$F_f=\\mu N=0{,}25\\times40=10$ N."},
      {level:"mediu",text:"Un resort nedeformat are 20 cm. Sub o forță de 15 N ajunge la 25 cm. Verificați dacă $k=300$ N/m este corect.",solution:"Alungirea este $5$ cm $=0{,}05$ m; $F=kx=300\\times0{,}05=15$ N — corect, corespunde forței date."},
      {level:"dificil",text:"Un corp cu masa 12 kg este tras pe orizontală cu 40 N, iar frecarea este 15 N. Calculați forța rezultantă.",solution:"$F_{\\text{rezultantă}}=40-15=25$ N (în sensul mișcării)."},
      {level:"dificil",text:"Doi elevi trag de o coardă în sensuri opuse, cu 200 N și 150 N. Calculați forța rezultantă și sensul ei.",solution:"$F_{\\text{rezultantă}}=200-150=50$ N, în sensul forței de 200 N."},
      {level:"f-dificil",text:"Un corp de 10 kg este pe o masă orizontală. Calculați forța normală și explicați de ce este egală cu greutatea.",solution:"$N=G=mg=10\\times9{,}8=98$ N; pe o suprafață orizontală, fără alte forțe verticale, normala echilibrează exact greutatea."},
      {level:"f-dificil",text:"Un resort cu $k=250$ N/m susține un corp cu $m=5$ kg, în echilibru. Calculați alungirea resortului.",solution:"$F_e=G=mg=49$ N; $x=\\dfrac{49}{250}=0{,}196$ m $\\approx19{,}6$ cm."}
    ]
  },

  "u5-l2-legile-newton": {
    learn: "Legile lui Newton descriu relația dintre forțe și mișcare. Prima lege (principiul inerției) spune că un corp își păstrează starea de repaus sau de mișcare rectilinie uniformă atât timp cât asupra lui nu acționează nicio forță (sau forțele se anulează reciproc). A doua lege leagă forța rezultantă de accelerația produsă: $F=ma$ — cu cât forța este mai mare sau masa mai mică, cu atât accelerația este mai mare. A treia lege (acțiune-reacțiune) spune că, dacă un corp A exercită o forță asupra corpului B, atunci B exercită asupra lui A o forță egală ca mărime, dar de sens opus — aceste două forțe acționează pe corpuri diferite, deci NU se anulează reciproc.",
    terms: [
      "<strong>Principiul inerției (legea I)</strong>: fără forță rezultantă, mișcarea rămâne neschimbată.",
      "<strong>Accelerația $a$</strong>: variația vitezei în unitatea de timp (m/s²).",
      "<strong>Legea a II-a</strong>: $F=ma$.",
      "<strong>Acțiune și reacțiune (legea III)</strong>: forțe egale, de sens opus, pe corpuri diferite."
    ],
    properties: [
      "Legea I: fără forță rezultantă, viteza rămâne constantă (inclusiv zero).",
      "Legea a II-a: $F=ma$, deci $a=F/m$.",
      "Legea a III-a: $F_{A\\to B}=-F_{B\\to A}$ (mărimi egale, sensuri opuse, pe corpuri diferite).",
      "Unitatea de forță: 1 N = 1 kg·m/s²."
    ],
    steps: [
      "Identifică toate forțele ce acționează asupra corpului.",
      "Calculează forța rezultantă (suma vectorială).",
      "Aplică $F=ma$ pentru a afla accelerația sau forța.",
      "Pentru perechi acțiune-reacțiune, identifică cele 2 corpuri implicate."
    ],
    tips: [
      "Forțele acțiune-reacțiune acționează pe corpuri DIFERITE, deci nu se echilibrează între ele.",
      "Dacă $F_{\\text{rezultantă}}=0$, corpul este în repaus sau în mișcare rectilinie uniformă (legea I).",
      "La aceeași forță, un corp cu masă mai mare capătă o accelerație mai mică."
    ],
    examples: [
      {label:"legea a II-a", given:"$m=4$ kg, $F=20$ N", ask:"accelerația", solve:"$a=F/m=20/4=5$ m/s².", answer:"$a=5$ m/s²"},
      {label:"forța necesară", given:"un corp cu $m=10$ kg trebuie accelerat cu $a=2$ m/s²", ask:"forța necesară", solve:"$F=ma=10\\times2=20$ N.", answer:"$F=20$ N"},
      {label:"acțiune-reacțiune", given:"o carte așezată pe o masă", ask:"perechea acțiune-reacțiune pentru greutatea cărții", solve:"Cartea apasă masa cu o forță egală cu greutatea ei (acțiune); masa apasă cartea în sus cu o forță egală și de sens opus (reacțiune, forța normală).", answer:"Greutatea cărții pe masă și normala mesei pe carte"}
    ],
    exercises: [
      {level:"usor",text:"Un corp cu $m=2$ kg este acționat de o forță $F=6$ N. Calculați accelerația.",solution:"$a=F/m=6/2=3$ m/s²."},
      {level:"usor",text:"Ce spune legea I a lui Newton (principiul inerției)?",solution:"Un corp își păstrează starea de repaus sau de mișcare rectilinie uniformă dacă forța rezultantă este zero."},
      {level:"usor",text:"Un corp de 5 kg are accelerația 4 m/s². Calculați forța rezultantă.",solution:"$F=ma=5\\times4=20$ N."},
      {level:"mediu",text:"Un corp cu masa $m=8$ kg accelerează cu $a=1{,}5$ m/s². Calculați forța rezultantă.",solution:"$F=ma=8\\times1{,}5=12$ N."},
      {level:"mediu",text:"O forță de 15 N produce accelerația 3 m/s². Calculați masa corpului.",solution:"$m=F/a=15/3=5$ kg."},
      {level:"mediu",text:"Explicați, folosind legea a III-a, de ce o rachetă poate înainta în vidul spațial.",solution:"Racheta expulzează gaze arse spre înapoi (acțiune); gazele împing racheta înainte cu o forță egală și de sens opus (reacțiune), fără să fie nevoie de aer."},
      {level:"dificil",text:"Un corp de 3 kg este supus la 2 forțe opuse: 25 N și 10 N, pe aceeași direcție. Calculați accelerația.",solution:"$F_{\\text{rezultantă}}=25-10=15$ N; $a=15/3=5$ m/s², în sensul forței de 25 N."},
      {level:"dificil",text:"Un elev de 60 kg sare de pe o barcă de 40 kg aflată în repaus pe apă. Explicați, cu legea a III-a, ce se întâmplă cu barca.",solution:"Elevul împinge barca înapoi (acțiune), iar barca îl împinge pe el înainte (reacțiune, forță egală și opusă); barca se deplasează în sens opus săriturii."},
      {level:"f-dificil",text:"Două corpuri cu masele 2 kg și 8 kg sunt acționate de aceeași forță $F=16$ N. Comparați accelerațiile.",solution:"$a_1=16/2=8$ m/s²; $a_2=16/8=2$ m/s²; corpul mai ușor are accelerația de 4 ori mai mare."},
      {level:"f-dificil",text:"Un corp de 4 kg, în repaus, este accelerat uniform 5 s, ajungând la viteza 10 m/s. Calculați forța aplicată.",solution:"$a=\\dfrac{10}{5}=2$ m/s²; $F=ma=4\\times2=8$ N."}
    ]
  },

  "u5-l3-compunerea-fortelor": {
    learn: "Atunci când asupra unui corp acționează mai multe forțe simultan, efectul lor combinat poate fi înlocuit printr-o singură forță echivalentă, numită forță rezultantă. Dacă forțele au aceeași direcție și același sens, rezultanta este suma lor; dacă au aceeași direcție, dar sensuri opuse, rezultanta este diferența lor (în modul), în sensul forței mai mari. Când forțele acționează pe direcții perpendiculare, rezultanta se calculează cu teorema lui Pitagora, $F=\\sqrt{F_1^2+F_2^2}$, deoarece cele două forțe formează catetele unui triunghi dreptunghic, iar rezultanta este ipotenuza.",
    terms: [
      "<strong>Forță rezultantă $F_{rez}$</strong>: forța unică echivalentă cu efectul mai multor forțe.",
      "<strong>Forțe coliniare</strong>: au aceeași direcție (același sens sau sensuri opuse).",
      "<strong>Forțe perpendiculare</strong>: direcții la 90° una față de alta.",
      "<strong>Echilibru</strong>: forța rezultantă este zero."
    ],
    properties: [
      "Forțe cu același sens: $F_{rez}=F_1+F_2$.",
      "Forțe de sens opus: $F_{rez}=|F_1-F_2|$, sensul forței mai mari.",
      "Forțe perpendiculare: $F_{rez}=\\sqrt{F_1^2+F_2^2}$.",
      "Dacă forța rezultantă este zero, corpul este în echilibru."
    ],
    steps: [
      "Identifică direcțiile și sensurile forțelor date.",
      "Dacă sunt coliniare, adună sau scade valorile după sens.",
      "Dacă sunt perpendiculare, aplică Pitagora.",
      "Precizează și sensul forței rezultante."
    ],
    tips: [
      "Forțele se adună ca vectorii, nu ca numerele simple, dacă nu sunt coliniare.",
      "Verifică întotdeauna direcția fiecărei forțe înainte de a alege metoda de compunere.",
      "Echilibrul înseamnă forța rezultantă zero, nu neapărat absența forțelor."
    ],
    examples: [
      {label:"același sens", given:"$F_1=30$ N, $F_2=20$ N, același sens", ask:"rezultanta", solve:"$F_{rez}=30+20=50$ N.", answer:"$F_{rez}=50$ N"},
      {label:"sensuri opuse", given:"$F_1=45$ N, $F_2=30$ N, sensuri opuse", ask:"rezultanta", solve:"$F_{rez}=45-30=15$ N, în sensul lui $F_1$.", answer:"$F_{rez}=15$ N"},
      {label:"perpendiculare", given:"$F_1=3$ N, $F_2=4$ N, perpendiculare", ask:"rezultanta", solve:"$F_{rez}=\\sqrt{3^2+4^2}=\\sqrt{25}=5$ N.", answer:"$F_{rez}=5$ N"}
    ],
    exercises: [
      {level:"usor",text:"$F_1=10$ N și $F_2=15$ N, același sens. Calculați rezultanta.",solution:"$F_{rez}=10+15=25$ N."},
      {level:"usor",text:"$F_1=40$ N și $F_2=25$ N, sensuri opuse. Calculați rezultanta.",solution:"$F_{rez}=40-25=15$ N, în sensul lui $F_1$."},
      {level:"usor",text:"$F_1=6$ N și $F_2=8$ N, perpendiculare. Calculați rezultanta.",solution:"$F_{rez}=\\sqrt{36+64}=\\sqrt{100}=10$ N."},
      {level:"mediu",text:"Trei forțe coliniare de același sens: 12 N, 8 N, 5 N. Calculați rezultanta.",solution:"$F_{rez}=12+8+5=25$ N."},
      {level:"mediu",text:"Două forțe opuse au valorile 60 N și 60 N. Ce fel de echilibru rezultă?",solution:"Rezultanta este 0 N — corpul este în echilibru."},
      {level:"mediu",text:"$F_1=9$ N și $F_2=12$ N, perpendiculare. Calculați rezultanta.",solution:"$F_{rez}=\\sqrt{81+144}=\\sqrt{225}=15$ N."},
      {level:"dificil",text:"Un corp este tras cu 2 forțe: 50 N spre est și 50 N spre vest. Calculați rezultanta și starea corpului.",solution:"$F_{rez}=50-50=0$ N — corpul este în echilibru."},
      {level:"dificil",text:"Un corp are 3 forțe coliniare: 20 N și 15 N (sens pozitiv) și 10 N (sens negativ). Calculați rezultanta.",solution:"$F_{rez}=20+15-10=25$ N, sensul pozitiv."},
      {level:"f-dificil",text:"Un corp este supus la 2 forțe perpendiculare, $F_1=5$ N și $F_2=12$ N. Calculați rezultanta.",solution:"$F_{rez}=\\sqrt{25+144}=\\sqrt{169}=13$ N."},
      {level:"f-dificil",text:"Explicați cum s-ar calcula rezultanta a 3 forțe, dacă 2 sunt perpendiculare, iar a treia este coliniară cu rezultanta primelor 2.",solution:"Se calculează întâi rezultanta celor 2 forțe perpendiculare cu Pitagora, apoi se adună (sau scade) a treia forță, coliniară cu această rezultantă parțială."}
    ]
  },

  "u5-l4-presiunea": {
    learn: "Presiunea arată cât de „concentrată” este o forță pe o suprafață: $p=\\dfrac{F}{S}$, unde $F$ este forța apăsătoare, iar $S$ este suprafața pe care acționează; se măsoară în pascali (Pa), $1$ Pa $=1$ N/m². La aceeași forță, o suprafață mai mică duce la o presiune mai mare — de aceea un cui ascuțit pătrunde mai ușor decât unul bont. În lichide, presiunea hidrostatică crește cu adâncimea, $p=\\rho gh$, unde $\\rho$ este densitatea lichidului, iar $h$ este adâncimea. Legea lui Pascal spune că presiunea exercitată asupra unui lichid aflat într-un vas închis se transmite integral și în toate direcțiile — principiu folosit în presele hidraulice.",
    terms: [
      "<strong>Presiunea $p=F/S$</strong>: unitate pascal (Pa).",
      "<strong>Presiunea hidrostatică $p=\\rho gh$</strong>: depinde de adâncime și densitate.",
      "<strong>Densitatea $\\rho$</strong>: masă/volum (kg/m³).",
      "<strong>Legea lui Pascal</strong>: presiunea se transmite integral în toate direcțiile într-un lichid."
    ],
    properties: [
      "$p=F/S$; unitate: $1$ Pa $=1$ N/m².",
      "$p_{hidrostatic}=\\rho gh$ (crește cu adâncimea și densitatea).",
      "Legea lui Pascal: presiunea se transmite integral în toate direcțiile într-un lichid.",
      "Presa hidraulică: $\\dfrac{F_1}{S_1}=\\dfrac{F_2}{S_2}$ (aceeași presiune pe ambele pistoane)."
    ],
    steps: [
      "Identifică forța și suprafața (pentru presiune solidă) sau densitatea și adâncimea (pentru cea hidrostatică).",
      "Aplică formula potrivită: $p=F/S$ sau $p=\\rho gh$.",
      "Pentru presa hidraulică, egalează presiunile pe cele 2 pistoane.",
      "Verifică unitățile (Pa, N, m²)."
    ],
    tips: [
      "O suprafață mai mică (aceeași forță) → presiune mai mare.",
      "Presiunea hidrostatică nu depinde de forma vasului, doar de adâncime și densitate.",
      "1 atm $\\approx10^5$ Pa."
    ],
    examples: [
      {label:"presiune solidă", given:"$F=200$ N, $S=0{,}02$ m²", ask:"presiunea", solve:"$p=F/S=200/0{,}02=10000$ Pa.", answer:"$p=10^4$ Pa"},
      {label:"presiune hidrostatică", given:"apă cu $\\rho=1000$ kg/m³, $h=3$ m", ask:"presiunea la adâncimea $h$", solve:"$p=\\rho gh=1000\\times9{,}8\\times3=29400$ Pa.", answer:"$p\\approx29400$ Pa"},
      {label:"presa hidraulică", given:"$S_1=10$ cm², $S_2=100$ cm², $F_1=50$ N", ask:"$F_2$", solve:"$\\dfrac{F_1}{S_1}=\\dfrac{F_2}{S_2}\\Rightarrow F_2=F_1\\dfrac{S_2}{S_1}=50\\times10=500$ N.", answer:"$F_2=500$ N"}
    ],
    exercises: [
      {level:"usor",text:"Calculați presiunea unei forțe $F=100$ N pe o suprafață $S=0{,}5$ m².",solution:"$p=100/0{,}5=200$ Pa."},
      {level:"usor",text:"Ce se întâmplă cu presiunea dacă suprafața se dublează, la aceeași forță?",solution:"Presiunea scade la jumătate."},
      {level:"usor",text:"Calculați presiunea hidrostatică a apei ($\\rho=1000$ kg/m³) la adâncimea $h=2$ m.",solution:"$p=1000\\times9{,}8\\times2=19600$ Pa."},
      {level:"mediu",text:"O forță de 300 N acționează pe o suprafață de 0,015 m². Calculați presiunea.",solution:"$p=300/0{,}015=20000$ Pa."},
      {level:"mediu",text:"Calculați presiunea hidrostatică a mercurului ($\\rho=13600$ kg/m³) la $h=0{,}1$ m.",solution:"$p=13600\\times9{,}8\\times0{,}1\\approx13328$ Pa."},
      {level:"mediu",text:"O presă hidraulică are $S_1=5$ cm², $S_2=50$ cm² și $F_1=20$ N. Calculați $F_2$.",solution:"$F_2=F_1\\dfrac{S_2}{S_1}=20\\times10=200$ N."},
      {level:"dificil",text:"Un cub cu latura 0,2 m și greutatea 40 N stă pe o masă. Calculați presiunea pe masă.",solution:"$S=0{,}2^2=0{,}04$ m²; $p=40/0{,}04=1000$ Pa."},
      {level:"dificil",text:"La ce adâncime în apă presiunea hidrostatică atinge 98000 Pa?",solution:"$h=\\dfrac{p}{\\rho g}=\\dfrac{98000}{1000\\times9{,}8}=10$ m."},
      {level:"f-dificil",text:"O presă hidraulică are pistonul mic cu raza 2 cm și cel mare cu raza 10 cm. La 40 N pe pistonul mic, calculați forța pe cel mare.",solution:"$\\dfrac{S_2}{S_1}=\\left(\\dfrac{10}{2}\\right)^2=25$; $F_2=40\\times25=1000$ N."},
      {level:"f-dificil",text:"Explicați de ce o persoană cu schiuri se scufundă mai puțin în zăpadă decât cu cizme obișnuite.",solution:"Schiurile au o suprafață de contact mult mai mare, deci pentru aceeași greutate presiunea exercitată pe zăpadă este mult mai mică ($p=F/S$)."}
    ]
  },

  "u5-l5-arhimede": {
    learn: "Principiul lui Arhimede spune că orice corp scufundat (parțial sau total) într-un fluid este împins de jos în sus de o forță numită forță arhimedică, egală cu greutatea fluidului dezlocuit de corp: $F_A=\\rho_{fluid}\\cdot g\\cdot V_{scufundat}$. Această forță explică de ce unele obiecte plutesc, iar altele se scufundă: dacă forța arhimedică este mai mare sau egală cu greutatea corpului, acesta plutește; dacă este mai mică, corpul se scufundă. Un corp plutește la echilibru atunci când forța arhimedică este exact egală cu greutatea lui — ceea ce înseamnă că doar o parte din corp este scufundată, suficient cât să dezlocuiască un volum de fluid a cărui greutate egalează greutatea corpului.",
    terms: [
      "<strong>Forța arhimedică $F_A$</strong>: forța ascensională exercitată de fluid.",
      "<strong>Volumul scufundat $V_{scufundat}$</strong>: partea din corp aflată sub nivelul fluidului.",
      "<strong>Densitatea fluidului $\\rho_{fluid}$</strong>: masă/volum al fluidului.",
      "<strong>Plutire / scufundare</strong>: rezultatul comparării $F_A$ cu $G$."
    ],
    properties: [
      "$F_A=\\rho_{fluid}\\cdot g\\cdot V_{scufundat}$.",
      "Dacă $F_A\\ge G$, corpul plutește; dacă $F_A<G$, corpul se scufundă.",
      "La plutire în echilibru, $F_A=G$ (corpul este scufundat parțial).",
      "Un corp complet scufundat resimte $F_A$ calculată cu volumul total al corpului."
    ],
    steps: [
      "Calculează greutatea corpului, $G=mg$.",
      "Calculează forța arhimedică pentru volumul scufundat (parțial sau total).",
      "Compară $F_A$ cu $G$ pentru a decide dacă plutește sau se scufundă.",
      "La echilibru (plutire), pune $F_A=G$ pentru a afla volumul scufundat."
    ],
    tips: [
      "Forța arhimedică depinde de volumul scufundat, NU direct de forma sau materialul corpului.",
      "Un obiect din metal poate pluti dacă are formă de vas (volum mare, puțin material) — precum vasele metalice.",
      "Dacă $\\rho_{corp}<\\rho_{fluid}$, corpul plutește."
    ],
    examples: [
      {label:"forța arhimedică", given:"corp cu $V=0{,}002$ m³ complet scufundat în apă ($\\rho=1000$ kg/m³)", ask:"forța arhimedică", solve:"$F_A=1000\\times9{,}8\\times0{,}002=19{,}6$ N.", answer:"$F_A=19{,}6$ N"},
      {label:"plutire sau scufundare", given:"un corp cu $G=15$ N are $F_A=19{,}6$ N (complet scufundat)", ask:"corpul plutește sau se scufundă?", solve:"$F_A>G$, deci corpul plutește.", answer:"Plutește"},
      {label:"volum scufundat la echilibru", given:"un corp cu $G=9{,}8$ N plutește în apă ($\\rho=1000$ kg/m³)", ask:"volumul scufundat", solve:"La echilibru $F_A=G$: $1000\\times9{,}8\\times V=9{,}8\\Rightarrow V=0{,}001$ m³.", answer:"$V=0{,}001$ m³ = 1 litru"}
    ],
    exercises: [
      {level:"usor",text:"Un corp cu $V=0{,}001$ m³ este complet scufundat în apă. Calculați forța arhimedică.",solution:"$F_A=1000\\times9{,}8\\times0{,}001=9{,}8$ N."},
      {level:"usor",text:"Ce condiție trebuie îndeplinită pentru ca un corp să plutească?",solution:"Forța arhimedică trebuie să fie cel puțin egală cu greutatea corpului ($F_A\\ge G$)."},
      {level:"usor",text:"Un corp are $G=12$ N și $F_A=8$ N (complet scufundat). Plutește sau se scufundă?",solution:"Se scufundă, pentru că $F_A<G$."},
      {level:"mediu",text:"Un corp cu $V=0{,}003$ m³ este scufundat complet în ulei ($\\rho=900$ kg/m³). Calculați forța arhimedică.",solution:"$F_A=900\\times9{,}8\\times0{,}003=26{,}46$ N."},
      {level:"mediu",text:"Un corp cu $G=49$ N plutește în apă. Calculați volumul scufundat la echilibru.",solution:"$F_A=G\\Rightarrow1000\\times9{,}8\\times V=49\\Rightarrow V=0{,}005$ m³."},
      {level:"mediu",text:"Explicați de ce un vapor din oțel (mai dens decât apa) poate pluti.",solution:"Forma vaporului conține mult aer în interior, deci volumul scufundat este mare față de greutatea totală, iar forța arhimedică egalează greutatea vaporului."},
      {level:"dificil",text:"Un corp cu masa 2 kg și volumul 0,0025 m³ este scufundat complet în apă. Calculați forța arhimedică și forța rezultantă.",solution:"$G=2\\times9{,}8=19{,}6$ N; $F_A=1000\\times9{,}8\\times0{,}0025=24{,}5$ N; $F_{\\text{rezultantă}}=24{,}5-19{,}6=4{,}9$ N, în sus."},
      {level:"dificil",text:"Un corp cu densitatea 800 kg/m³ este introdus în apă (1000 kg/m³). Ce fracțiune din volum rămâne scufundată?",solution:"La echilibru $V_{scufundat}=\\dfrac{800}{1000}V=0{,}8V$, deci 80% din volum este scufundat."},
      {level:"f-dificil",text:"Un corp are greutatea în aer 50 N și greutatea aparentă în apă 38 N. Calculați forța arhimedică și volumul corpului.",solution:"$F_A=50-38=12$ N; $V=\\dfrac{12}{1000\\times9{,}8}\\approx0{,}00122$ m³."},
      {level:"f-dificil",text:"Comparați forța arhimedică asupra aceluiași corp scufundat, în apă (1000 kg/m³) și în apă sărată (1030 kg/m³).",solution:"Forța este direct proporțională cu densitatea fluidului, deci în apa sărată forța este cu 3% mai mare decât în apa dulce, la același volum scufundat."}
    ]
  },

  "u5-l6-lucrul-mecanic-energia": {
    learn: "Lucrul mecanic măsoară efectul unei forțe care își deplasează punctul de aplicație: $L=F\\cdot d\\cdot\\cos\\alpha$, unde $d$ este distanța parcursă, iar $\\alpha$ este unghiul dintre forță și direcția deplasării; se măsoară în jouli (J). Dacă forța acționează exact în direcția mișcării ($\\alpha=0°$), formula devine $L=F\\cdot d$. Puterea arată cât de repede se efectuează un lucru mecanic, $P=L/t$, măsurată în wați (W). Energia este capacitatea unui corp de a efectua lucru mecanic: energia cinetică $E_c=\\dfrac12mv^2$ depinde de viteză, iar energia potențială gravitațională $E_p=mgh$ depinde de înălțime. Într-un sistem izolat, fără frecări, energia mecanică totală ($E_c+E_p$) se conservă.",
    terms: [
      "<strong>Lucrul mecanic $L=Fd\\cos\\alpha$</strong>: unitate joule (J).",
      "<strong>Puterea $P=L/t$</strong>: unitate watt (W).",
      "<strong>Energia cinetică $E_c=\\frac12mv^2$</strong>: energia datorată mișcării.",
      "<strong>Energia potențială $E_p=mgh$</strong>: energia datorată poziției (înălțimii)."
    ],
    properties: [
      "Dacă $\\alpha=0°$: $L=Fd$; dacă $\\alpha=90°$: $L=0$.",
      "$P=L/t=F\\cdot v$ (pentru mișcare uniformă).",
      "Legea conservării energiei mecanice: $E_c+E_p=$ constant (fără frecări).",
      "Unități: 1 J $=1$ N·m; 1 W $=1$ J/s."
    ],
    steps: [
      "Identifică forța, distanța și unghiul dintre ele.",
      "Calculează lucrul mecanic $L=Fd\\cos\\alpha$.",
      "Pentru putere, împarte lucrul la timp: $P=L/t$.",
      "Pentru energie, aplică $E_c=\\frac12mv^2$ sau $E_p=mgh$ după caz."
    ],
    tips: [
      "Lucrul mecanic este ZERO dacă forța este perpendiculară pe deplasare.",
      "Energia cinetică crește cu pătratul vitezei — dublarea vitezei sfertuplează energia cinetică.",
      "Fără frecări, energia mecanică totală rămâne constantă; cu frecări, o parte se transformă în căldură."
    ],
    examples: [
      {label:"lucru mecanic", given:"$F=50$ N, $d=4$ m, $\\alpha=0°$", ask:"lucrul mecanic", solve:"$L=Fd\\cos0°=50\\times4\\times1=200$ J.", answer:"$L=200$ J"},
      {label:"putere", given:"$L=600$ J efectuat în $t=20$ s", ask:"puterea", solve:"$P=L/t=600/20=30$ W.", answer:"$P=30$ W"},
      {label:"energie cinetică", given:"$m=2$ kg, $v=5$ m/s", ask:"energia cinetică", solve:"$E_c=\\frac12\\times2\\times5^2=25$ J.", answer:"$E_c=25$ J"}
    ],
    exercises: [
      {level:"usor",text:"Calculați lucrul mecanic al unei forțe $F=20$ N care deplasează un corp $d=10$ m, în aceeași direcție.",solution:"$L=Fd=20\\times10=200$ J."},
      {level:"usor",text:"Calculați puterea dezvoltată dacă $L=400$ J se efectuează în $t=8$ s.",solution:"$P=400/8=50$ W."},
      {level:"usor",text:"Calculați energia potențială a unui corp cu $m=3$ kg la înălțimea $h=5$ m ($g=9{,}8$ N/kg).",solution:"$E_p=mgh=3\\times9{,}8\\times5=147$ J."},
      {level:"mediu",text:"Calculați energia cinetică a unui corp cu $m=4$ kg și $v=6$ m/s.",solution:"$E_c=\\frac12\\times4\\times36=72$ J."},
      {level:"mediu",text:"O forță de 30 N deplasează un corp 8 m, dar este perpendiculară pe deplasare. Calculați lucrul mecanic.",solution:"$L=Fd\\cos90°=0$ J."},
      {level:"mediu",text:"Un motor efectuează un lucru de 5000 J în 25 s. Calculați puterea în wați.",solution:"$P=5000/25=200$ W."},
      {level:"dificil",text:"Un corp cade liber de la $h=10$ m. Calculați viteza la sol, folosind conservarea energiei ($g=9{,}8$ N/kg).",solution:"$mgh=\\frac12mv^2\\Rightarrow v=\\sqrt{2gh}=\\sqrt{2\\times9{,}8\\times10}\\approx14$ m/s."},
      {level:"dificil",text:"Un corp de 5 kg are viteza 4 m/s. Calculați energia cinetică și noua valoare dacă viteza se dublează.",solution:"$E_{c1}=\\frac12\\times5\\times16=40$ J; la $v=8$: $E_{c2}=\\frac12\\times5\\times64=160$ J — de 4 ori mai mare."},
      {level:"f-dificil",text:"Un corp de 2 kg este ridicat cu viteză constantă la 3 m înălțime în 2 s. Calculați puterea ($g=9{,}8$ N/kg).",solution:"$L=mgh=2\\times9{,}8\\times3=58{,}8$ J; $P=L/t=58{,}8/2=29{,}4$ W."},
      {level:"f-dificil",text:"Un corp alunecă fără frecare pe un plan înclinat, de la 5 m înălțime. Calculați viteza la bază, indiferent de unghi.",solution:"$v=\\sqrt{2gh}=\\sqrt{2\\times9{,}8\\times5}\\approx9{,}9$ m/s, independent de unghiul planului."}
    ]
  },

  "u5-l7-masini-simple": {
    learn: "Mașinile simple sunt dispozitive care ne ajută să efectuăm o lucrare mecanică folosind o forță mai mică decât ar fi necesar direct, în schimbul parcurgerii unei distanțe mai mari — lucrul mecanic total rămâne (aproximativ) același. Pârghia este o bară rigidă care se rotește în jurul unui punct fix; condiția de echilibru este $F_1\\cdot b_1=F_2\\cdot b_2$, unde $b_1$ și $b_2$ sunt brațele forțelor. Scripetele fix schimbă doar direcția forței (nu o micșorează), în timp ce scripetele mobil înjumătățește forța necesară, dar dublează distanța parcursă de capătul liber al firului. Planul înclinat permite ridicarea unei greutăți cu o forță mai mică decât greutatea însăși, $F=\\dfrac{G\\cdot h}{l}$, unde $h$ este înălțimea, iar $l$ este lungimea planului.",
    terms: [
      "<strong>Pârghie</strong>: braț al forței $b_1$, $b_2$; punct de sprijin.",
      "<strong>Scripete fix / scripete mobil</strong>: schimbă direcția, respectiv reduce forța la jumătate.",
      "<strong>Plan înclinat</strong>: $F=\\dfrac{Gh}{l}$.",
      "<strong>Randamentul mașinii simple</strong>: raportul dintre lucrul util și cel consumat."
    ],
    properties: [
      "Pârghia: echilibru dacă $F_1b_1=F_2b_2$.",
      "Scripete fix: schimbă direcția forței, $F=G$.",
      "Scripete mobil: $F=G/2$, dar firul se trage pe o distanță dublă.",
      "Plan înclinat: $F=\\dfrac{Gh}{l}$ (mai mică decât $G$, dacă $l>h$)."
    ],
    steps: [
      "Identifică tipul mașinii simple folosite.",
      "Pentru pârghie, scrie condiția de echilibru $F_1b_1=F_2b_2$.",
      "Pentru scripete mobil, împarte greutatea la 2.",
      "Pentru planul înclinat, aplică $F=Gh/l$."
    ],
    tips: [
      "Mașinile simple NU reduc lucrul mecanic total, doar schimbă raportul forță-distanță.",
      "Cu cât planul înclinat este mai lung (la aceeași înălțime), cu atât forța necesară este mai mică.",
      "Cu cât brațul forței este mai mare, cu atât forța necesară pentru echilibru este mai mică."
    ],
    examples: [
      {label:"pârghie", given:"$b_1=0{,}5$ m, $F_2=300$ N, $b_2=0{,}1$ m", ask:"forța $F_1$ necesară pentru echilibru", solve:"$F_1b_1=F_2b_2\\Rightarrow F_1=\\dfrac{300\\times0{,}1}{0{,}5}=60$ N.", answer:"$F_1=60$ N"},
      {label:"scripete mobil", given:"o greutate $G=80$ N ridicată cu scripete mobil", ask:"forța necesară", solve:"$F=G/2=80/2=40$ N.", answer:"$F=40$ N"},
      {label:"plan înclinat", given:"$G=500$ N, $h=1$ m, $l=5$ m", ask:"forța necesară pe planul înclinat", solve:"$F=\\dfrac{Gh}{l}=\\dfrac{500\\times1}{5}=100$ N.", answer:"$F=100$ N"}
    ],
    exercises: [
      {level:"usor",text:"O pârghie are $b_1=1$ m, $b_2=0{,}25$ m și $F_2=100$ N. Calculați $F_1$ pentru echilibru.",solution:"$F_1=\\dfrac{100\\times0{,}25}{1}=25$ N."},
      {level:"usor",text:"Ce face un scripete fix cu forța necesară pentru ridicarea unei greutăți?",solution:"Nu o modifică ($F=G$), doar schimbă direcția forței."},
      {level:"usor",text:"O greutate de 60 N este ridicată cu un scripete mobil. Calculați forța necesară.",solution:"$F=60/2=30$ N."},
      {level:"mediu",text:"Un plan înclinat are $h=2$ m, $l=8$ m, iar greutatea corpului este $G=400$ N. Calculați forța necesară.",solution:"$F=\\dfrac{400\\times2}{8}=100$ N."},
      {level:"mediu",text:"O pârghie are $F_1=40$ N, $b_1=0{,}6$ m. Calculați $F_2$ dacă $b_2=0{,}2$ m.",solution:"$F_2=\\dfrac{40\\times0{,}6}{0{,}2}=120$ N."},
      {level:"mediu",text:"Explicați de ce este mai ușor să desfaci un capac cu o cheie lungă decât cu una scurtă.",solution:"Cheia lungă are un braț al forței mai mare, deci pentru același moment necesar este suficientă o forță mai mică."},
      {level:"dificil",text:"O greutate de 900 N trebuie urcată cu un plan înclinat folosind maxim 150 N. Calculați lungimea minimă a planului, la înălțimea 3 m.",solution:"$l=\\dfrac{Gh}{F}=\\dfrac{900\\times3}{150}=18$ m."},
      {level:"dificil",text:"O pârghie de gradul I are brațele în raport 1:4. Ce forță este necesară pentru a echilibra o greutate de 800 N pe brațul scurt?",solution:"Cu raportul brațelor 1:4, forța pe brațul lung este de 4 ori mai mică: $F=800/4=200$ N."},
      {level:"f-dificil",text:"Comparați lucrul mecanic pentru a ridica o greutate de 200 N la 2 m, direct sau cu un plan înclinat cu $l=10$ m (fără frecare).",solution:"Lucrul mecanic este același, $L=Gh=200\\times2=400$ J — planul înclinat reduce forța, dar mărește distanța, păstrând produsul $F\\cdot l=L$ constant."},
      {level:"f-dificil",text:"Un sistem de 2 scripeți mobili ridică o greutate de 400 N. Calculați forța necesară, dacă fiecare înjumătățește forța.",solution:"Cu 2 scripeți mobili în serie, forța se înjumătățește de 2 ori: $F=\\dfrac{400}{2\\times2}=100$ N."}
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
      "La refracție: sticla → aer ($n_{\\text{sticlă}} > n_{\\text{aer}}$) → $r > i$ (depărtare de normală).",
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
      {level:"usor",text:"O rază incidentă face $i=50°$ cu suprafața oglinzii. Calculați $r$ față de normală.",solution:"Unghiul față de normală este $90°-50°=40°$, deci $r=40°$."},
      {level:"usor",text:"Ce tip de imagine formează întotdeauna o oglindă plană?",solution:"Virtuală, dreaptă, de aceeași mărime cu obiectul."},
      {level:"usor",text:"Ce este unghiul critic?",solution:"Unghiul de incidență peste care are loc reflexia totală internă (lumina nu mai trece în al doilea mediu)."},
      {level:"mediu",text:"Lumina trece din aer în apă ($n=1{,}33$) cu $i=30°$. Calculați $r$.",solution:"$\\sin r=\\dfrac{\\sin30°}{1{,}33}=\\dfrac{0{,}5}{1{,}33}\\approx0{,}376\\Rightarrow r\\approx22{,}1°$."},
      {level:"mediu",text:"Calculați unghiul critic al diamantului ($n=2{,}42$).",solution:"$\\sin i_c=\\dfrac1{2{,}42}\\approx0{,}413\\Rightarrow i_c\\approx24{,}4°$."},
      {level:"mediu",text:"O lentilă convergentă cu $f=20$ cm are obiectul la $d_o=60$ cm. Calculați $d_i$.",solution:"$\\dfrac1{d_i}=\\dfrac1{20}-\\dfrac1{60}=\\dfrac2{60}\\Rightarrow d_i=30$ cm."},
      {level:"dificil",text:"O lentilă divergentă are $f=-15$ cm; obiect la $d_o=30$ cm. Calculați $d_i$ și $m$.",solution:"$\\dfrac1{d_i}=-\\dfrac1{15}-\\dfrac1{30}=-\\dfrac3{30}\\Rightarrow d_i=-10$ cm; $m=\\dfrac{10}{30}\\approx0{,}33$ (virtuală, dreaptă, micșorată)."},
      {level:"dificil",text:"Explicați de ce imaginea într-o oglindă convexă este întotdeauna micșorată și virtuală.",solution:"Oglinda convexă diverge razele reflectate, iar prelungirile lor se întâlnesc în spatele oglinzii, formând o imagine virtuală și micșorată indiferent de poziția obiectului."},
      {level:"f-dificil",text:"Lumina trece din sticlă ($n=1{,}5$) în aer cu $i=50°$. Verificați dacă are loc reflexie totală și, dacă nu, calculați $r$.",solution:"Unghiul critic este $\\sin i_c=\\dfrac1{1{,}5}=0{,}667\\Rightarrow i_c\\approx41{,}8°$; cum $50°>41{,}8°$, are loc reflexie totală (nu există rază refractată)."},
      {level:"f-dificil",text:"O lentilă convergentă cu $f=12$ cm formează o imagine reală de 2 ori mai mare decât obiectul. Calculați $d_o$ și $d_i$.",solution:"$|m|=\\dfrac{d_i}{d_o}=2\\Rightarrow d_i=2d_o$; din $\\dfrac1{12}=\\dfrac1{d_o}+\\dfrac1{2d_o}=\\dfrac3{2d_o}\\Rightarrow d_o=18$ cm, $d_i=36$ cm."}
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
      {level:"usor",text:"Calculați forța Coulomb dintre $q_1=6\\mu C$ și $q_2=3\\mu C$ la $r=0{,}3$ m.",solution:"$F=9\\times10^9\\cdot\\dfrac{6\\times10^{-6}\\times3\\times10^{-6}}{0{,}09}=1{,}8$ N."},
      {level:"usor",text:"Ce se întâmplă cu forța Coulomb dacă distanța se înjumătățește?",solution:"Forța crește de 4 ori."},
      {level:"usor",text:"Ce fel de forță apare între două sarcini de același semn?",solution:"Forță de respingere."},
      {level:"mediu",text:"La ce distanță forța devine de 4 ori mai mică față de $r_0=0{,}1$ m?",solution:"Forța scade de 4 ori când distanța se dublează, deci la $r=0{,}2$ m."},
      {level:"mediu",text:"Două plăci la $d=4$ mm și $U=200$ V. Calculați $E$ și forța pe un electron.",solution:"$E=\\dfrac{200}{0{,}004}=5\\times10^4$ V/m; $F=eE=1{,}6\\times10^{-19}\\times5\\times10^4=8\\times10^{-15}$ N."},
      {level:"mediu",text:"Un corp are $q=+3{,}2\\times10^{-18}$ C. Câți electroni a pierdut?",solution:"$n=\\dfrac{3{,}2\\times10^{-18}}{1{,}6\\times10^{-19}}=20$ electroni."},
      {level:"dificil",text:"Calculați forța dintre $q_1=8\\mu C$ și $q_2=-4\\mu C$ la $r=0{,}2$ m.",solution:"$F=9\\times10^9\\cdot\\dfrac{8\\times10^{-6}\\times4\\times10^{-6}}{0{,}04}=7{,}2$ N (atractivă)."},
      {level:"dificil",text:"Un câmp uniform are $E=3\\times10^4$ V/m între plăci la $d=1{,}5$ cm. Calculați tensiunea $U$.",solution:"$U=E\\cdot d=3\\times10^4\\times0{,}015=450$ V."},
      {level:"f-dificil",text:"Explicați de ce forța Coulomb și forța gravitațională au forme matematice similare, dar efecte foarte diferite în natură.",solution:"Ambele scad cu pătratul distanței, dar forța Coulomb poate fi atractivă sau repulsivă (după semnul sarcinilor) și este mult mai intensă, în timp ce forța gravitațională este întotdeauna atractivă și extrem de slabă la scară atomică."},
      {level:"f-dificil",text:"O sarcină $q=5\\mu C$ se deplasează printr-o tensiune $U=40$ V. Calculați lucrul mecanic al câmpului.",solution:"$L=qU=5\\times10^{-6}\\times40=200\\mu J$."}
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
      {level:"usor",text:"$R_1=12$ Ω și $R_2=6$ Ω în serie la $U=36$ V. Calculați $I$, $U_1$, $U_2$.",solution:"$R_{ec}=18$ Ω; $I=\\dfrac{36}{18}=2$ A; $U_1=2\\times12=24$ V; $U_2=2\\times6=12$ V."},
      {level:"usor",text:"Ce lege leagă tensiunea, rezistența și intensitatea?",solution:"Legea lui Ohm: $U=RI$."},
      {level:"usor",text:"Cât este 1 kWh în jouli?",solution:"$1$ kWh $=3{,}6\\times10^6$ J."},
      {level:"mediu",text:"Un bec de 100 W funcționează 10 h. Calculați energia în kWh și costul la 1,5 lei/kWh.",solution:"$W=0{,}1\\times10=1$ kWh; cost $=1{,}5$ lei."},
      {level:"mediu",text:"Rezistor $R=8$ Ω, $I=3$ A timp de $t=2$ min. Calculați $Q$ în kJ.",solution:"$Q=I^2Rt=9\\times8\\times120=8640$ J $\\approx8{,}64$ kJ."},
      {level:"mediu",text:"Explicați de ce siguranța electrică protejează instalația.",solution:"Siguranța întrerupe circuitul când curentul depășește o valoare periculoasă, prevenind supraîncălzirea conductoarelor și posibilele incendii."},
      {level:"dificil",text:"$R_1=4$ Ω și $R_2=12$ Ω în paralel la $U=24$ V. Calculați $R_{ec}$ și puterea totală.",solution:"$R_{ec}=\\dfrac{4\\times12}{16}=3$ Ω; $I=\\dfrac{24}{3}=8$ A; $P=UI=24\\times8=192$ W."},
      {level:"dificil",text:"Un generator cu $E=15$ V și $r=0{,}5$ Ω debitează $I=4$ A. Calculați $U_{borne}$.",solution:"$U_{borne}=E-Ir=15-4\\times0{,}5=13$ V."},
      {level:"f-dificil",text:"Un circuit mixt: $R_1=2$ Ω în serie cu gruparea paralel $R_2=6$ Ω, $R_3=3$ Ω; $U=10$ V. Calculați curentul total.",solution:"$R_{23}=\\dfrac{6\\times3}{9}=2$ Ω; $R_{ec}=2+2=4$ Ω; $I=\\dfrac{10}{4}=2{,}5$ A."},
      {level:"f-dificil",text:"Comparați căldura degajată de același rezistor la $I=2$ A și la $I=4$ A, în același timp.",solution:"Căldura este proporțională cu $I^2$, deci la dublarea curentului căldura degajată crește de 4 ori."}
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
      {level:"usor",text:"Un conductor $l=0{,}6$ m, $I=3$ A este plasat perpendicular pe $\\vec{B}=0{,}5$ T. Calculați $F$.",solution:"$F=BIl=0{,}5\\times3\\times0{,}6=0{,}9$ N."},
      {level:"usor",text:"Ce se întâmplă când apropiem doi poli opuși (N-S)?",solution:"Se atrag."},
      {level:"usor",text:"Ce creează câmp magnetic, pe lângă magneții permanenți?",solution:"Curenții electrici (orice conductor parcurs de curent)."},
      {level:"mediu",text:"Descrieți construcția unui electromagnet și 3 aplicații practice.",solution:"Solenoid cu miez de fier parcurs de curent; aplicații: macarale, sonerii, relee electrice."},
      {level:"mediu",text:"Cum funcționează generatorul electric? Ce lege fizică stă la bază?",solution:"Rotirea unei bobine într-un câmp magnetic induce o tensiune electrică (inducție electromagnetică), transformând energia mecanică în energie electrică."},
      {level:"mediu",text:"De ce liniile de câmp magnetic sunt curbe ÎNCHISE?",solution:"Pentru că polii magnetici nu pot fi izolați, liniile trebuie să se întoarcă întotdeauna în același magnet, formând bucle închise."},
      {level:"dificil",text:"Un conductor $l=0{,}3$ m, $I=8$ A este într-un câmp $B=0{,}4$ T, la un unghi de 45°. Calculați forța.",solution:"$F=BIl\\sin45°=0{,}4\\times8\\times0{,}3\\times0{,}707\\approx0{,}68$ N."},
      {level:"dificil",text:"Un motor electric primește $P_{el}=600$ W cu randamentul $\\eta=0{,}70$. Calculați puterea mecanică.",solution:"$P_{mec}=0{,}70\\times600=420$ W."},
      {level:"f-dificil",text:"Explicați de ce, dacă tăiem un magnet în 4 bucăți, obținem 4 magneți complet funcționali.",solution:"Fiecare atom feromagnetic din material se comportă ca un mic magnet; tăind materialul, fiecare bucată păstrează organizarea internă a acestor mici magneți, apărând astfel din nou ambii poli N și S în fiecare bucată."},
      {level:"f-dificil",text:"Comparați forța Ampere asupra unui conductor la $\\alpha=30°$ față de aceeași situație la $\\alpha=90°$, cu aceleași $B$, $I$, $l$.",solution:"Raportul forțelor este $\\dfrac{\\sin30°}{\\sin90°}=0{,}5$, deci forța la 30° este jumătate din forța la 90°."}
    ]
  },

  "u5-recap": {
    summary: "Unitatea de mecanică fixează forța și legile lui Newton, compunerea forțelor, presiunea și principiul lui Arhimede, lucrul mecanic/energia și mașinile simple.",
    keys: [
      "$F=ma$ (legea a II-a a lui Newton); $G=mg$.",
      "Compunerea forțelor coliniare: adunare/scădere; perpendiculare: Pitagora.",
      "$p=F/S$; $p_{hidrostatic}=\\rho gh$; $F_A=\\rho_{fluid}gV_{scufundat}$.",
      "$L=Fd\\cos\\alpha$; $P=L/t$; $E_c=\\frac12mv^2$; $E_p=mgh$."
    ],
    mistakes: [
      "confundarea masei cu greutatea",
      "uitarea unghiului la calculul lucrului mecanic (dacă forța nu e paralelă cu deplasarea)",
      "aplicarea greșită a principiului lui Arhimede fără a folosi corect volumul scufundat",
      "ignorarea sensului forței rezultante la compunerea forțelor opuse"
    ],
    problem: {
      label: "tip evaluare U5",
      given: "un corp cu masa 3 kg cade liber de la 5 m înălțime",
      ask: "viteza la sol, folosind conservarea energiei ($g=9{,}8$ N/kg)",
      solve: "$mgh=\\frac12mv^2\\Rightarrow v=\\sqrt{2gh}=\\sqrt{2\\times9{,}8\\times5}\\approx9{,}9$ m/s.",
      answer: "$v\\approx9{,}9$ m/s"
    },
    exercises: [
      {level:"usor",text:"Calculați greutatea unui corp cu masa 6 kg ($g=10$ N/kg).",solution:"$G=60$ N."},
      {level:"usor",text:"Un corp cu $m=2$ kg este acționat de $F=8$ N. Calculați accelerația.",solution:"$a=8/2=4$ m/s²."},
      {level:"usor",text:"Calculați presiunea unei forțe de 60 N pe o suprafață de 0,3 m².",solution:"$p=60/0{,}3=200$ Pa."},
      {level:"mediu",text:"$F_1=25$ N și $F_2=15$ N, sensuri opuse. Calculați rezultanta.",solution:"$F_{rez}=25-15=10$ N, în sensul lui $F_1$."},
      {level:"mediu",text:"Un corp cu $V=0{,}004$ m³ este complet scufundat în apă. Calculați forța arhimedică.",solution:"$F_A=1000\\times9{,}8\\times0{,}004=39{,}2$ N."},
      {level:"mediu",text:"Calculați lucrul mecanic al unei forțe de 40 N ce deplasează un corp 5 m, în aceeași direcție.",solution:"$L=40\\times5=200$ J."},
      {level:"dificil",text:"O pârghie are $b_1=0{,}8$ m, $F_2=150$ N, $b_2=0{,}2$ m. Calculați $F_1$ pentru echilibru.",solution:"$F_1=\\dfrac{150\\times0{,}2}{0{,}8}=37{,}5$ N."},
      {level:"dificil",text:"Un corp cu masa 4 kg se mișcă cu viteza 3 m/s. Calculați energia cinetică.",solution:"$E_c=\\frac12\\times4\\times9=18$ J."},
      {level:"f-dificil",text:"Un corp cu greutatea 30 N plutește în apă cu 60% din volum scufundat. Calculați volumul total al corpului.",solution:"La echilibru $F_A=G$: $1000\\times9{,}8\\times0{,}6V=30\\Rightarrow V\\approx0{,}0051$ m³."},
      {level:"f-dificil",text:"Un plan înclinat cu $h=2$ m și $l=10$ m ridică o greutate de 600 N. Calculați forța necesară și lucrul mecanic total.",solution:"$F=\\dfrac{600\\times2}{10}=120$ N; $L=Gh=600\\times2=1200$ J (același, indiferent de metodă, fără frecare)."}
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
    },
    {
      id: "u5-mecanica",
      title: "Unitatea 5 – Mecanică",
      subtitle: "Forțe, legile lui Newton, presiune, Arhimede, lucru mecanic, mașini simple",
      icon: "⚙️",
      chapters: [
        chF7("u5-l1-forta",                  "L1: Forța. Greutatea, forța elastică, forța de frecare"),
        chF7("u5-l2-legile-newton",          "L2: Legile lui Newton"),
        chF7("u5-l3-compunerea-fortelor",    "L3: Compunerea forțelor"),
        chF7("u5-l4-presiunea",              "L4: Presiunea. Legea lui Pascal"),
        chF7("u5-l5-arhimede",               "L5: Principiul lui Arhimede. Plutirea corpurilor"),
        chF7("u5-l6-lucrul-mecanic-energia", "L6: Lucrul mecanic, puterea, energia"),
        chF7("u5-l7-masini-simple",          "L7: Mașini simple: pârghia, scripetele, planul înclinat"),
        recapChF7("u5-recap",                "Recapitulare și evaluare – Unitatea 5")
      ]
    }
  ]
};
