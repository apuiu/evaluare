// ============================================================
//  ROMÂNĂ - CLASA A 8-A
//  Teorie completă conform programei școlare românești
//  Focus: Sintaxa frazei (subordonatele), recapitulare evaluare
// ============================================================

const DIF_LABELS_R8 = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil", "f-dificil": "Foarte dificil" };
const exR8 = (items) => `
  <h5>Exerciții propuse</h5>
  <ol>${items.map((item) => `<li><span class="dif-badge dif-${item.level}">${DIF_LABELS_R8[item.level]}</span> ${item.text}<details class="rezolvare-toggle"><summary>Vezi rezolvarea</summary><p>${item.solution}</p></details></li>`).join("\n")}</ol>
`;

const romana8Data = {
  title: "Română – Clasa a VIII-a",
  subtitle: "Sintaxa frazei + recapitulare pentru Evaluarea Națională",
  subject: "romana",
  grade: 8,
  sections: [

    // ============================================================
    //  1. SINTAXA FRAZEI (NUCLEUL CLASEI A VIII-A)
    // ============================================================
    {
      id: "sintaxa-frazei",
      title: "Sintaxa frazei",
      subtitle: "Propoziții subordonate: SB, PR, AT, CD, CI, CCL, CCT, CCM, CCA, CCS, condițională, concesivă, consecutivă",
      icon: "🔗",
      chapters: [

        {
          id: "fraza-recap",
          title: "Fraza. Cum se analizează",
          content: `
            <div class="content-block">
              <h4>📐 Fraza – recapitulare și metodă de analiză</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Fraza este unitatea sintactică formată din <strong>două sau mai multe propoziții</strong>. Numărul propozițiilor = numărul predicatelor.</p>
              </div>
              <h5>Cum analizăm o frază – pași</h5>
              <ol>
                <li>Identificăm toate <strong>predicatele</strong> (câte predicate, atâtea propoziții).</li>
                <li>Numerotăm propozițiile în ordinea apariției: <sup>(1)</sup>, <sup>(2)</sup>...</li>
                <li>Identificăm <strong>elementele de relație</strong> (conjuncții, pronume relative).</li>
                <li>Stabilim care propoziție este <strong>regentă</strong> și care este <strong>subordonată</strong>.</li>
                <li>Stabilim <strong>tipul subordonatei</strong> (SB, PR, AT, CD etc.).</li>
              </ol>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu analizat</div>
                <p><em>Știu<sup>(1)</sup> / că vine<sup>(2)</sup> / și că aduce o surpriză.<sup>(3)</sup></em></p>
                <p>P1 = principală; P2 = subordonată CD (ce știu?); P3 = subordonată CD (ce știu?)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Cum recunoaștem tipul subordonatei</div>
                <p>Cea mai sigură metodă: <strong>întrebăm</strong> propoziția față de cuvântul/propoziția de care depinde. Întrebarea ne spune tipul: Cine? Ce? → SB sau CD etc.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Numărați propozițiile din fraza: «Știu că vine și că mă ajută.»", solution: "Identificăm predicatele «știu», «vine», «ajută». Sunt 3 predicate, deci 3 propoziții." },
                { level: "usor", text: "Care este primul pas în analiza unei fraze?", solution: "Primul pas este identificarea tuturor predicatelor, deoarece numărul propozițiilor este egal cu numărul predicatelor." },
                { level: "mediu", text: "Analizați pe scurt fraza: «Se vede că a muncit mult.»", solution: "Predicatul «se vede» aparține regentei, iar «a muncit» formează propoziția subordonată. Întrebăm: ce se vede? Rezultă o subordonată subiectivă." },
                { level: "mediu", text: "Indicați elementul de relație în fraza: «Am aflat că examenul se amână.»", solution: "Elementul de relație este conjuncția subordonatoare «că», care leagă subordonata de regentă." },
                { level: "dificil", text: "Explicați de ce în fraza «Cine învață reușește» prima propoziție este subordonată, deși apare înaintea regentei.", solution: "Ordinea nu decide funcția. Întrebăm cine reușește? Răspunsul este «cine învață», deci prima propoziție îndeplinește funcția de subiect și este SB." },
                { level: "dificil", text: "Analizați fraza: «Este important să înțelegi ce citești.»", solution: "«Este important» este regenta cu structură impersonală. «să înțelegi» răspunde la întrebarea ce este important?, deci este SB. În interiorul ei, «ce citești» determină verbul «înțelegi» și răspunde la întrebarea ce înțelegi?, deci este CD." },
                { level: "f-dificil", text: "Formulați o regulă scurtă prin care să deosebiți mai sigur o subordonată de o propoziție principală într-o frază complexă.", solution: "Trebuie identificată dependența sintactică: propoziția principală nu depinde de alta, iar subordonata îndeplinește o funcție sintactică față de regentă și poate fi recunoscută prin întrebare și element de relație." }
              ])}
            </div>
          `
        },

        {
          id: "contragere-expansiune",
          title: "Contragerea și expansiunea în frază",
          content: `
            <div class="content-block">
              <h4>🔄 Contragere și expansiune</h4>
              <div class="definitie">
                <div class="definitie-label">Definiții</div>
                <p><strong>Expansiunea</strong> transformă o parte de propoziție într-o propoziție subordonată.</p>
                <p><strong>Contragerea</strong> transformă o propoziție subordonată într-o parte de propoziție.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Expansiune</td><td><em>Am speranța reușitei.</em> → <em>Am speranța <strong>să reușesc</strong>.</em></td></tr>
                  <tr><td>Contragere</td><td><em>Știu <strong>că vine</strong>.</em> → <em>Știu <strong>venirea lui</strong>.</em></td></tr>
                  <tr><td>AT ↔ atribut</td><td><em>Cartea <strong>pe care am citit-o</strong>...</em> ↔ <em>cartea <strong>citită</strong>...</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Ce verifici la transformare</div>
                <p>Păstrează sensul, funcția sintactică și corectitudinea gramaticală. Nu orice subordonată se poate contracta elegant în comunicarea curentă.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Transformați prin expansiune: «Am convingerea reușitei.»", solution: "Expansiunea corectă este: «Am convingerea că voi reuși.» sau «Am convingerea că reușita este posibilă.»" },
                { level: "usor", text: "Transformați prin contragere: «Știu că va pleca.»", solution: "O variantă de contragere este: «Știu plecarea lui.» Deși este posibilă gramatical, formularea poate suna mai puțin natural în limbajul curent." },
                { level: "mediu", text: "Explicați relația dintre atribut și propoziția atributivă în exemplul: «cartea pe care am citit-o».", solution: "În varianta dezvoltată, propoziția «pe care am citit-o» determină substantivul «cartea», exact cum ar face un atribut simplu sau participial." },
                { level: "mediu", text: "Transformați: «Dorința lui este să reușească» prin contragere parțială, dacă este posibil.", solution: "Se poate obține: «Dorința lui este reușita.» sau «Dorința lui este reușirea.» Important este să se păstreze funcția de nume predicativ." },
                { level: "dificil", text: "Arătați de ce nu orice contragere este recomandată stilistic, chiar dacă este gramatical posibilă.", solution: "Unele construcții rezultate sunt corecte, dar artificiale sau greoaie. De exemplu, «Știu venirea lui» este corect ca exercițiu de contragere, însă în comunicarea obișnuită este mai natural «Știu că vine»." },
                { level: "f-dificil", text: "Realizați o pereche expansiune-contragere pentru o propoziție atributivă și explicați ce se păstrează invariabil.", solution: "Exemplu: «Omul care muncește reușește.» → «Omul muncitor reușește.» Se păstrează sensul de determinare a substantivului «omul» și funcția sintactică de atribut." }
              ])}
            </div>
          `
        },

        {
          id: "predicat-nominal-incomplet",
          title: "Predicatul nominal incomplet și completarea lui",
          content: `
            <div class="content-block">
              <h4>🧩 Predicatul nominal incomplet</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Predicatul nominal este format din <strong>verb copulativ + nume predicativ</strong>. Dacă numele predicativ lipsește, structura este incompletă și se completează adesea prin subordonată <strong>predicativă (PR)</strong>.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p><em>Problema este <strong>că întârzie</strong>.</em> (PR completează predicatul nominal)</p>
                <p><em>Dorința lui a rămas <strong>să plece</strong>.</em> (PR cu verb copulativ)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Diferență utilă</div>
                <p>Dacă regenta are verb impersonal (<em>se știe, se spune</em>) apare mai frecvent <strong>SB</strong>, nu PR.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați verbul copulativ din enunțul: «Problema este că întârzie.»", solution: "Verbul copulativ este «este»." },
                { level: "usor", text: "Ce completează propoziția predicativă în regentă?", solution: "Completează numele predicativ lipsă din structura unui predicat nominal." },
                { level: "mediu", text: "Indicați tipul subordonatei din fraza: «Dorința mea este să reușesc.»", solution: "Subordonata «să reușesc» este predicativă, deoarece completează numele predicativ al verbului copulativ «este»." },
                { level: "mediu", text: "Comparați: «Se știe că întârzie.» și «Problema este că întârzie.»", solution: "În prima frază, «că întârzie» este SB, deoarece regenta este impersonală. În a doua, «că întârzie» este PR, deoarece completează un predicat nominal cu subiect exprimat: «problema»." },
                { level: "dificil", text: "Explicați de ce prezența subiectului în regentă este importantă pentru recunoașterea predicativei.", solution: "Predicativa apare frecvent când există un subiect exprimat sau subînțeles și lipsește numele predicativ. Dacă structura este impersonală, orientarea merge mai degrabă spre SB." },
                { level: "f-dificil", text: "Construiți o frază cu PR și apoi transformați-o într-una apropiată ca sens, dar cu SB.", solution: "Exemplu cu PR: «Adevărul este că ai greșit.» Exemplu cu SB: «Se știe că ai greșit.» Sensul general rămâne apropiat, dar funcția subordonatei se schimbă deoarece se schimbă structura regentei." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-subiectiva",
          title: "Propoziția subordonată subiectivă (SB)",
          content: `
            <div class="content-block">
              <h4>👑 Subiectiva (SB)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată subiectivă îndeplinește funcția de <strong>subiect</strong> față de predicatul din regentă. Răspunde la întrebările <strong>Cine? Ce?</strong></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Context</div>
                <p>Regenta are predicatul exprimat prin: verb <strong>impersonal</strong> (<em>se spune, se știe, se vede</em>) sau expresie impersonală (<em>este bine, este necesar, pare, reiese, rezultă, se cuvine, trebuie</em>).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>că</td><td><em>Se știe<sup>(1)</sup> / că Ion a plecat.<sup>(SB)</sup></em></td></tr>
                  <tr><td>să</td><td><em>E necesar<sup>(1)</sup> / să înveți.<sup>(SB)</sup></em></td></tr>
                  <tr><td>cine (pron. relativ)</td><td><em>Cine muncește<sup>(SB)</sup> / reușește.<sup>(1)</sup></em></td></tr>
                  <tr><td>dacă</td><td><em>Nu se știe<sup>(1)</sup> / dacă vine.<sup>(SB)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ SB vs. CD</div>
                <p>• <em>Se spune<sup>(1)</sup> / că vine.<sup>(SB)</sup></em> → SB (verbul <em>se spune</em> este impersonal, nu are alt subiect)</p>
                <p>• <em>El spune<sup>(1)</sup> / că vine.<sup>(CD)</sup></em> → CD (verbul <em>spune</em> are subiect <em>el</em>; întrebăm: ce spune? → CD)</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați subordonata din fraza: «Este bine să citești.»", solution: "Subordonata este «să citești» și este SB, deoarece răspunde la întrebarea ce este bine?" },
                { level: "usor", text: "La ce întrebări răspunde subiectiva?", solution: "Răspunde la întrebările «Cine?» și «Ce?»." },
                { level: "mediu", text: "Analizați: «Se zvonește că vor pleca mâine.»", solution: "Regenta este impersonală: «se zvonește». Întrebăm ce se zvonește? «că vor pleca mâine», deci subordonata este SB." },
                { level: "mediu", text: "Transformați o SB într-o parte de propoziție: «Cine învață reușește.»", solution: "O contragere posibilă este «Elevul silitor reușește.» sau «Cel studios reușește.». Se păstrează ideea de subiect." },
                { level: "dificil", text: "Explicați de ce în fraza «El spune că reușește» nu avem SB.", solution: "Pentru că verbul din regentă are deja subiect exprimat, «el». Subordonata răspunde la întrebarea ce spune?, deci este completivă directă, nu subiectivă." },
                { level: "f-dificil", text: "Construiți două fraze aproape identice, una cu SB și una cu CD, și explicați diferența.", solution: "Exemplu: «Se vede că a obosit.» are SB, deoarece «se vede» este impersonal. «Îl văd că a obosit» sau mai firesc «Văd că a obosit» are CD, deoarece subordonata determină un verb personal și răspunde la întrebarea ce văd?" }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-predicativa",
          title: "Propoziția subordonată predicativă (PR)",
          content: `
            <div class="content-block">
              <h4>⚡ Predicativa (PR)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată predicativă îndeplinește funcția de <strong>nume predicativ</strong> față de un verb copulativ din regentă. Răspunde la întrebările <strong>Cine este? Ce este? Cum este?</strong></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Context</div>
                <p>Regenta are predicatul exprimat prin verb copulativ (<em>a fi, a deveni, a părea, a ajunge, a rămâne</em>) fără un alt nume predicativ exprimat.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>că</td><td><em>Problema este<sup>(1)</sup> / că nu am timp.<sup>(PR)</sup></em></td></tr>
                  <tr><td>să</td><td><em>Dorința lui e<sup>(1)</sup> / să plece.<sup>(PR)</sup></em></td></tr>
                  <tr><td>cum</td><td><em>Pare<sup>(1)</sup> / cum că știe totul.<sup>(PR)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ PR vs. SB</div>
                <p>• <strong>PR</strong>: verbul copulativ <em>are</em> subiect exprimat, dar <em>lipsește</em> numele predicativ: <em>Problema <u>este</u><sup>(1)</sup> / că n-avem timp.<sup>(PR)</sup></em> (subiectul = Problema)</p>
                <p>• <strong>SB</strong>: verbul <em>nu are</em> subiect: <em><u>Se știe</u><sup>(1)</sup> / că n-avem timp.<sup>(SB)</sup></em></p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați subordonata din fraza: «Adevărul este că a mințit.»", solution: "Subordonata este «că a mințit» și este PR." },
                { level: "usor", text: "Ce funcție are predicativa față de regentă?", solution: "Are funcția de nume predicativ." },
                { level: "mediu", text: "Explicați de ce în fraza «Dorința lui este să câștige» avem PR.", solution: "Pentru că există subiectul «dorința lui», verbul copulativ «este», iar subordonata «să câștige» completează numele predicativ lipsă." },
                { level: "mediu", text: "Comparați: «Este clar că ai dreptate.» și «Clar este că ai dreptate.»", solution: "În ambele cazuri, subordonata poate fi interpretată prin raportare la un centru predicativ copulativ; analiza școlară urmărește dacă propoziția completează numele predicativ. Important este să observăm structura cu verb copulativ și nume predicativ incomplet." },
                { level: "dificil", text: "Formulați o explicație prin care un coleg să nu mai confunde PR cu CD.", solution: "PR nu determină un verb tranzitiv, ci completează numele predicativ într-un predicat nominal. CD determină un verb și răspunde la întrebarea «ce?» sau «pe cine?» față de acel verb." },
                { level: "f-dificil", text: "Construiți o frază cu PR introdusă prin «să» și explicați analiza completă.", solution: "Exemplu: «Ținta noastră este să terminăm la timp.» Regenta are subiectul «ținta noastră» și verbul copulativ «este». Subordonata «să terminăm la timp» completează numele predicativ lipsă, deci este PR." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-atributiva",
          title: "Propoziția subordonată atributivă (AT)",
          content: `
            <div class="content-block">
              <h4>🏷️ Atributiva (AT)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată atributivă îndeplinește funcția de <strong>atribut</strong> față de un substantiv (sau substitut al lui) din regentă. Răspunde la întrebările <strong>Care? Ce fel de?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>care (+ prep.)</td><td><em>Cartea<sup>(1)</sup> / pe care am citit-o<sup>(AT)</sup> / este bună.</em></td></tr>
                  <tr><td>să</td><td><em>Am dorința<sup>(1)</sup> / să reușesc.<sup>(AT)</sup></em></td></tr>
                  <tr><td>că</td><td><em>Am senzația<sup>(1)</sup> / că greșesc.<sup>(AT)</sup></em></td></tr>
                  <tr><td>unde, când</td><td><em>Casa<sup>(1)</sup> / unde locuiesc<sup>(AT)</sup> / e mare.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Acordul pronumelui relativ „care"</div>
                <p>Când <em>care</em> este complement direct la persoana a III-a, se reia obligatoriu printr-un pronume personal:</p>
                <p>• <em>Fata / <strong>pe care</strong> am văzut-<strong>o</strong></em> (feminin singular → <em>o</em>)</p>
                <p>• <em>Băiatul / <strong>pe care</strong> l-am văzut</em> (masculin singular → <em>l</em>)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ AT vs. CD</div>
                <p>• <strong>AT</strong> determină un <strong>substantiv</strong>: <em>Cartea / pe care o citesc / ...</em> (determină „cartea")</p>
                <p>• <strong>CD</strong> determină un <strong>verb</strong>: <em>Știu / că vine / ...</em> (determină „știu")</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați atributiva din fraza: «Cartea pe care ai cumpărat-o este interesantă.»", solution: "Subordonata «pe care ai cumpărat-o» este atributivă, deoarece determină substantivul «cartea»." },
                { level: "usor", text: "La ce întrebări răspunde atributiva?", solution: "Răspunde la întrebările «Care?» și «Ce fel de?»." },
                { level: "mediu", text: "Explicați rolul pronumelui relativ în fraza: «Elevul care citește înțelege mai bine.»", solution: "Pronumele relativ «care» introduce subordonata atributivă și face legătura dintre substantivul determinat «elevul» și propoziția subordonată." },
                { level: "mediu", text: "Analizați: «Am speranța că vom reuși.»", solution: "Subordonata «că vom reuși» determină substantivul «speranța», deci este atributivă." },
                { level: "dificil", text: "Arătați diferența dintre «Știu că vine» și «Vestea că vine m-a surprins».", solution: "În «Știu că vine», subordonata determină verbul «știu» și este CD. În «Vestea că vine m-a surprins», subordonata determină substantivul «vestea» și este AT." },
                { level: "f-dificil", text: "Construiți o frază cu atributivă introdusă prin pronume relativ în dativ și explicați forma folosită.", solution: "Exemplu: «Fata căreia i-am împrumutat cartea a venit azi.» Subordonata este atributivă și determină substantivul «fata». Forma «căreia» este cerută de funcția indirectă din subordonată." }
              ])}
            </div>
          `
        },

        {
          id: "acord-relativ-greseli",
          title: "Acordul pronumelui relativ și greșeli frecvente",
          content: `
            <div class="content-block">
              <h4>🧠 Acord și reluare pronominală</h4>
              <p>În atributivă, pronumele relativ <em>care</em> se acordă după funcția pe care o are în subordonată, iar în anumite contexte se cere reluarea prin pronume personal.</p>
              <table class="teoria-table">
                <thead><tr><th>Corect</th><th>Greșit</th><th>Explicație</th></tr></thead>
                <tbody>
                  <tr><td><em>Fata pe care am văzut-<strong>o</strong></em></td><td><em>Fata pe care am văzut</em></td><td>reluare obligatorie la CD, persoana a III-a</td></tr>
                  <tr><td><em>Băiatul pe care l-am strigat</em></td><td><em>Băiatul pe care am strigat</em></td><td>pronume clitic necesar</td></tr>
                  <tr><td><em>Cartea căreia i-am rupt coperta</em></td><td><em>Cartea care i-am rupt coperta</em></td><td>formă de dativ: <em>căreia</em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Corectați enunțul: «Fata pe care am văzut ieri».", solution: "Forma corectă este «Fata pe care am văzut-o ieri», deoarece reluarea pronominală este obligatorie la complementul direct exprimat prin pronume relativ." },
                { level: "usor", text: "Alegeți forma corectă: «cartea care / căreia i-am rupt coperta».", solution: "Forma corectă este «cartea căreia i-am rupt coperta», deoarece pronumele relativ are funcție în dativ în subordonată." },
                { level: "mediu", text: "Explicați de ce este necesar cliticul în enunțul «Băiatul pe care l-am strigat».", solution: "Pronumele relativ «pe care» introduce subordonata, iar complementul direct este reluat prin cliticul «l-», conform normei actuale." },
                { level: "mediu", text: "Construiți un enunț corect cu pronumele relativ «căreia».", solution: "Exemplu: «Eleva căreia i-am trimis mesajul a răspuns imediat.» Forma «căreia» este cerută de funcția indirectă din subordonată." },
                { level: "dificil", text: "Deosebiți acordul pronumelui relativ de reluarea pronominală obligatorie.", solution: "Acordul privește alegerea formei corecte a pronumelui relativ după funcția sa în subordonată, ca în «căreia». Reluarea pronominală privește folosirea cliticului necesar, ca în «pe care l-am văzut»." },
                { level: "f-dificil", text: "Explicați de ce propoziția atributivă poate genera frecvent greșeli de normă în cazul relativului «care».", solution: "Pentru că elevii tind să acorde pronumele după substantivul antecedent, nu după funcția sa reală din subordonată. În plus, omit uneori cliticul obligatoriu în construcțiile cu complement direct." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-cd",
          title: "Propoziția subordonată completivă directă (CD)",
          content: `
            <div class="content-block">
              <h4>🎯 Completiva directă (CD)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția completivă directă îndeplinește funcția de <strong>complement direct</strong> față de un verb tranzitiv din regentă. Răspunde la întrebările <strong>Pe cine? Ce?</strong></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Context</div>
                <p>Regenta are un verb tranzitiv care cere un obiect direct: <em>a ști, a vedea, a întreba, a spune, a simți, a aude, a înțelege, a afla, a cere, a dori, a ruga</em>...</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>că</td><td><em>Știu<sup>(1)</sup> / că vine.<sup>(CD)</sup></em></td></tr>
                  <tr><td>să</td><td><em>Vreau<sup>(1)</sup> / să plec.<sup>(CD)</sup></em></td></tr>
                  <tr><td>dacă</td><td><em>Întreb<sup>(1)</sup> / dacă vine.<sup>(CD)</sup></em></td></tr>
                  <tr><td>cine, ce, care</td><td><em>Nu știu<sup>(1)</sup> / cine a venit.<sup>(CD)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați completiva directă în fraza: «Știu că ai dreptate.»", solution: "Subordonata «că ai dreptate» este completivă directă, deoarece completează verbul tranzitiv «știu» și răspunde la întrebarea «ce știu?»." },
                { level: "usor", text: "La ce întrebări răspunde completiva directă?", solution: "Răspunde la întrebările «Ce?» sau «Pe cine?», asemenea complementului direct." },
                { level: "mediu", text: "Analizați: «Vreau să citesc mai mult.»", solution: "Subordonata «să citesc mai mult» determină verbul «vreau» și răspunde la întrebarea «ce vreau?», deci este completivă directă." },
                { level: "mediu", text: "Construiți o frază cu CD introdusă prin «dacă».", solution: "Exemplu: «Nu știu dacă va ajunge la timp.» Subordonata introdusă prin «dacă» îndeplinește funcția de completivă directă." },
                { level: "dificil", text: "Deosebiți CD de AT în perechea: «Știu că vine» și «Vestea că vine m-a surprins».", solution: "În primul enunț, subordonata determină verbul «știu» și este CD. În al doilea, determină substantivul «vestea», deci este atributivă." },
                { level: "f-dificil", text: "Explicați de ce subordonata introdusă prin «să» nu este automat propoziție de scop.", solution: "Valoarea se stabilește după termenul regent și întrebarea la care răspunde. În «Vreau să plec», subordonata răspunde la «ce vreau?» și este CD, nu scop." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-ci",
          title: "Propoziția subordonată completivă indirectă (CI)",
          content: `
            <div class="content-block">
              <h4>🔄 Completiva indirectă (CI)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția completivă indirectă îndeplinește funcția de <strong>complement indirect</strong> față de un verb din regentă. Răspunde la întrebările <strong>Cui? De cine? Despre ce? La ce? Față de ce?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>să (după verbe ca a se feri, a se teme)</td><td><em>Se feresc<sup>(1)</sup> / să mintă.<sup>(CI)</sup></em></td></tr>
                  <tr><td>că, de, la ce</td><td><em>Mă gândesc<sup>(1)</sup> / la ce am greșit.<sup>(CI)</sup></em></td></tr>
                  <tr><td>că</td><td><em>Se plânge<sup>(1)</sup> / că e obosit.<sup>(CI)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ CD vs. CI</div>
                <p>• <strong>CD</strong>: verbul cere direct un obiect (<em>a ști, a vedea, a vrea</em>) → fără prepoziție sau cu <em>pe</em>: <em>Știu / că vine.</em></p>
                <p>• <strong>CI</strong>: verbul cere un obiect indirect (<em>a se gândi la, a se plânge de, a se teme de</em>): <em>Mă gândesc / la ce am spus.</em></p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați completiva indirectă în fraza: «Mă gândesc la ce ai spus.»", solution: "Subordonata «la ce ai spus» este completivă indirectă, deoarece completează expresia verbală «mă gândesc la» și răspunde la întrebarea «la ce?»." },
                { level: "usor", text: "La ce întrebări răspunde completiva indirectă?", solution: "Poate răspunde la întrebări precum «Cui?», «Despre ce?», «La ce?», «De ce?» sau «Față de ce?», în funcție de verbul regent." },
                { level: "mediu", text: "Analizați: «Se plânge că este obosit.»", solution: "Subordonata «că este obosit» completează verbul pronominal «se plânge» și exprimă conținutul plângerii, având valoare de completivă indirectă." },
                { level: "mediu", text: "Construiți o frază cu CI introdusă printr-un element relativ.", solution: "Exemplu: «Se teme de ceea ce ar putea urma.» Subordonata «de ceea ce ar putea urma» este completivă indirectă." },
                { level: "dificil", text: "Deosebiți CI de CP în două exemple scurte.", solution: "CI apare când verbul cere un complement indirect, inclusiv în construcții prepoziționale tradițional tratate astfel în programă: «Mă gândesc la ce ai spus». CP este prezentată distinct când accentul cade pe complementul prepozițional cerut de regentă: «Se referă la ceea ce ai spus». Diferența trebuie urmărită după modelul teoretic folosit în lecție." },
                { level: "f-dificil", text: "Explicați de ce delimitarea dintre CI și completiva prepozițională poate crea dificultăți elevilor.", solution: "Ambele pot apărea după verbe care cer prepoziții și pot răspunde la întrebări apropiate. De aceea este important să se urmeze consecvent clasificarea din lecție și să se observe tipul de relație cerut de termenul regent." }
              ])}
            </div>
          `
        },

        {
          id: "prop-ccl",
          title: "Propoziția circumstanțială de loc (CCL)",
          content: `
            <div class="content-block">
              <h4>📍 Circumstanțiala de loc (CCL)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțiala de loc arată <strong>locul</strong> în care se desfășoară acțiunea din regentă. Răspunde la întrebările <strong>Unde? Încotro? De unde? Pe unde?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>unde</td><td><em>Merge<sup>(1)</sup> / unde îl cheamă inima.<sup>(CCL)</sup></em></td></tr>
                  <tr><td>oriunde</td><td><em>Îl urmez<sup>(1)</sup> / oriunde ar merge.<sup>(CCL)</sup></em></td></tr>
                  <tr><td>acolo unde</td><td><em>S-a dus<sup>(1)</sup> / acolo unde era cel mai cald.<sup>(CCL)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați CCL în fraza: «Merg unde mă așteaptă prietenii.»", solution: "Subordonata «unde mă așteaptă prietenii» este circumstanțială de loc, deoarece arată locul acțiunii din regentă." },
                { level: "usor", text: "La ce întrebări răspunde circumstanțiala de loc?", solution: "Răspunde la întrebările «Unde?», «Încotro?», «De unde?» și «Pe unde?»." },
                { level: "mediu", text: "Analizați: «S-a întors acolo unde și-a petrecut copilăria.»", solution: "Regenta este «S-a întors acolo», iar subordonata «unde și-a petrecut copilăria» indică locul spre care se raportează acțiunea, deci este CCL." },
                { level: "mediu", text: "Construiți o frază cu CCL introdusă prin «oriunde».", solution: "Exemplu: «Oriunde ar merge, își face prieteni repede.» Propoziția introdusă prin «oriunde» arată locul și este CCL." },
                { level: "dificil", text: "Explicați de ce în enunțul «Casa unde am crescut s-a vândut» subordonata poate fi considerată AT, nu CCL.", solution: "Pentru că determină substantivul «casa», nu verbul din regentă. Deși are elementul introductiv «unde», funcția ei este atributivă, nu circumstanțială de loc." },
                { level: "f-dificil", text: "Formulați o regulă practică pentru a deosebi CCL de atributiva introdusă prin «unde».", solution: "Dacă propoziția determină un verb și indică locul acțiunii, este CCL. Dacă determină un substantiv și răspunde la întrebarea «care?», este atributivă." }
              ])}
            </div>
          `
        },
        {
          id: "prop-cct",
          title: "Propoziția circumstanțială de timp (CCT)",
          content: `
            <div class="content-block">
              <h4>⏰ Circumstanțiala de timp (CCT)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțiala de timp arată <strong>când</strong> se desfășoară acțiunea din regentă. Răspunde la întrebările <strong>Când? De când? Până când? Cât timp? De câte ori?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>când</td><td><em>Plecăm<sup>(1)</sup> / când ești gata.<sup>(CCT)</sup></em></td></tr>
                  <tr><td>ori de câte ori</td><td><em>Citea<sup>(1)</sup> / ori de câte ori avea timp.<sup>(CCT)</sup></em></td></tr>
                  <tr><td>după ce</td><td><em>S-a odihnit<sup>(1)</sup> / după ce a terminat.<sup>(CCT)</sup></em></td></tr>
                  <tr><td>înainte să</td><td><em>A mâncat<sup>(1)</sup> / înainte să plece.<sup>(CCT)</sup></em></td></tr>
                  <tr><td>de când, până când</td><td><em>Studiez<sup>(1)</sup> / de când m-am trezit.<sup>(CCT)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați CCT în fraza: «Te sun când ajung.»", solution: "Subordonata «când ajung» este circumstanțială de timp, deoarece arată momentul în care are loc acțiunea din regentă." },
                { level: "usor", text: "Ce exprimă o propoziție circumstanțială de timp?", solution: "Exprimă momentul, durata, începutul, sfârșitul sau repetarea unei acțiuni." },
                { level: "mediu", text: "Analizați: «A învățat după ce și-a terminat temele.»", solution: "Subordonata «după ce și-a terminat temele» arată momentul ulterior față de care are loc acțiunea principală, deci este CCT." },
                { level: "mediu", text: "Construiți o frază cu CCT introdusă prin «ori de câte ori».", solution: "Exemplu: «Se emoționează ori de câte ori vorbește în public.» Subordonata exprimă repetarea în timp și este CCT." },
                { level: "dificil", text: "Explicați diferența dintre CCT și atributiva introdusă prin «când» în enunțuri diferite.", solution: "Dacă propoziția determină verbul și arată timpul acțiunii, este CCT: «Pleacă când se înserează». Dacă determină un substantiv, este atributivă: «Ziua când a plecat a fost ploioasă»." },
                { level: "f-dificil", text: "Analizați fraza: «Când îl chemi, vine înainte să termini propoziția.»", solution: "«Când îl chemi» este CCT față de «vine». «înainte să termini propoziția» este tot CCT, dar determină ideea temporală a venirii, arătând raportul de anterioritate." }
              ])}
            </div>
          `
        },

        {
          id: "prop-ccm",
          title: "Propoțiția circumstanțială de mod (CCM)",
          content: `
            <div class="content-block">
              <h4>🎭 Circumstanțiala de mod (CCM)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțiala de mod arată <strong>cum</strong> se desfăşoară acțiunea din regentă. Răspunde la întrebările <strong>Cum? În ce fel?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>cum</td><td><em>Vorbea<sup>(1)</sup> / cum îl tăia gura.<sup>(CCM)</sup></em></td></tr>
                  <tr><td>ca şi cum / de parcă</td><td><em>Acționa<sup>(1)</sup> / ca şi cum ar fi ştiut tot.<sup>(CCM)</sup></em></td></tr>
                  <tr><td>fără să</td><td><em>A plecat<sup>(1)</sup> / fără să spună nimic.<sup>(CCM)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați CCM în fraza: «A răspuns cum a știut mai bine.»", solution: "Subordonata «cum a știut mai bine» este circumstanțială de mod, deoarece arată felul în care s-a desfășurat acțiunea." },
                { level: "usor", text: "La ce întrebări răspunde circumstanțiala de mod?", solution: "Răspunde la întrebările «Cum?» și «În ce fel?»." },
                { level: "mediu", text: "Analizați: «Mergea de parcă ar fi cunoscut locul de ani întregi.»", solution: "Subordonata «de parcă ar fi cunoscut locul de ani întregi» arată modul aparent al acțiunii și este CCM." },
                { level: "mediu", text: "Construiți o frază cu CCM introdusă prin «fără să».", solution: "Exemplu: «A ieșit fără să închidă lumina.» Propoziția subordonată arată modul în care a avut loc acțiunea și este CCM." },
                { level: "dificil", text: "Explicați de ce în construcția «Parcă știe tot» valoarea poate fi diferită de o CCM completă.", solution: "Forma redusă sau incidentă nu trebuie confundată automat cu o propoziție subordonată. Pentru a avea CCM clară, avem nevoie de o structură verbală subordonată dezvoltată, de tipul «ca și cum ar ști tot»." },
                { level: "f-dificil", text: "Deosebiți CCM de consecutivă în perechea: «Muncește cum poate» și «Muncește atât de mult încât obosește».", solution: "În primul enunț, «cum poate» arată modul acțiunii, deci este CCM. În al doilea, «încât obosește» exprimă urmarea intensității din regentă, deci este consecutivă." }
              ])}
            </div>
          `
        },

        {
          id: "prop-cca",
          title: "Propoțiția circumstanțială de cauză (CCA)",
          content: `
            <div class="content-block">
              <h4>❓ Circumstanțiala de cauză (CCA)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțiala de cauză arată <strong>de ce</strong> se produce acțiunea din regentă. Răspunde la întrebările <strong>De ce? Din ce cauză? Din ce pricină?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>fiindcă</td><td><em>A rămas acasă,<sup>(1)</sup> / fiindcă era bolnav.<sup>(CCA)</sup></em></td></tr>
                  <tr><td>deoarece</td><td><em>Nu a venit,<sup>(1)</sup> / deoarece a uitat.<sup>(CCA)</sup></em></td></tr>
                  <tr><td>întrucât</td><td><em>A câştigat,<sup>(1)</sup> / întrucât a muncit mult.<sup>(CCA)</sup></em></td></tr>
                  <tr><td>din cauză că</td><td><em>A pierdut,<sup>(1)</sup> / din cauză că nu a antrenat.<sup>(CCA)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ CCA vs. CCS</div>
                <p>• <strong>CCA</strong> (cauza) arată <em>de ce</em> s-a întâmplat: <em>A plecat / <strong>fiindcă era obosit</strong>.</em></p>
                <p>• <strong>CCS</strong> (scopul) arată <em>pentru ce</em> a acționat: <em>A plecat / <strong>ca să se odihnească</strong>.</em></p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați CCA în fraza: «Nu a venit, deoarece era bolnav.»", solution: "Subordonata «deoarece era bolnav» este circumstanțială de cauză, deoarece arată motivul pentru care nu a venit." },
                { level: "usor", text: "La ce întrebare răspunde CCA?", solution: "Răspunde la întrebările «De ce?», «Din ce cauză?» sau «Din ce pricină?»." },
                { level: "mediu", text: "Analizați: «A greșit fiindcă s-a grăbit.»", solution: "Subordonata «fiindcă s-a grăbit» arată cauza acțiunii din regentă, deci este CCA." },
                { level: "mediu", text: "Construiți o frază cu CCA introdusă prin «întrucât».", solution: "Exemplu: «A obținut un rezultat bun, întrucât a lucrat constant.» Subordonata introdusă prin «întrucât» este CCA." },
                { level: "dificil", text: "Deosebiți CCA de CCS în perechea: «A învățat fiindcă se temea» și «A învățat ca să reușească».", solution: "În prima frază, subordonata exprimă motivul deja existent al acțiunii, deci este CCA. În a doua, exprimă finalitatea urmărită, deci este CCS." },
                { level: "f-dificil", text: "Explicați de ce propoziția cauzală poate sta și înaintea regentei fără să-și schimbe funcția.", solution: "Funcția nu depinde de poziție, ci de raportul logic. În «Fiindcă era obosit, a plecat», subordonata exprimă tot cauza acțiunii, chiar dacă apare înaintea regentei." }
              ])}
            </div>
          `
        },

        {
          id: "prop-ccs",
          title: "Propoțiția circumstanțială de scop (CCS)",
          content: `
            <div class="content-block">
              <h4>🎯 Circumstanțiala de scop (CCS)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțiala de scop arată <strong>cu ce scop</strong> se produce acțiunea din regentă. Răspunde la întrebările <strong>Cu ce scop? Pentru ce?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>ca să</td><td><em>Muncesc<sup>(1)</sup> / ca să reuşesc.<sup>(CCS)</sup></em></td></tr>
                  <tr><td>pentru ca să</td><td><em>Studiez<sup>(1)</sup> / pentru ca să iau note bune.<sup>(CCS)</sup></em></td></tr>
                  <tr><td>să (cu valoare finală)</td><td><em>A plecat devreme<sup>(1)</sup> / să nu întârzie.<sup>(CCS)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați CCS în fraza: «A plecat mai devreme ca să nu întârzie.»", solution: "Subordonata «ca să nu întârzie» este circumstanțială de scop, deoarece arată finalitatea acțiunii din regentă." },
                { level: "usor", text: "La ce întrebare răspunde CCS?", solution: "Răspunde la întrebările «Cu ce scop?» și «Pentru ce?»." },
                { level: "mediu", text: "Analizați: «Învață mult pentru ca să intre la liceul dorit.»", solution: "Subordonata «pentru ca să intre la liceul dorit» exprimă scopul pentru care se desfășoară acțiunea din regentă, deci este CCS." },
                { level: "mediu", text: "Construiți o frază cu CCS introdusă doar prin «să» cu valoare finală.", solution: "Exemplu: «A tăcut să audă mai bine explicația.» Propoziția introdusă prin «să» exprimă scopul și este CCS." },
                { level: "dificil", text: "Deosebiți CCS de CD în exemplul: «Vreau să reușesc» față de «Muncesc să reușesc».", solution: "În «Vreau să reușesc», subordonata determină verbul «vreau» și răspunde la întrebarea ce vreau?, deci este CD. În «Muncesc să reușesc», ea arată scopul acțiunii, deci este CCS." },
                { level: "f-dificil", text: "Explicați de ce scopul presupune o intenție, spre deosebire de cauză sau consecință.", solution: "Scopul indică rezultatul urmărit înaintea realizării acțiunii, deci presupune intenție. Cauza arată motivul deja existent, iar consecința exprimă rezultatul apărut după acțiune." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-conditionala",
          title: "Propoțiția circumstanțială condițională",
          content: `
            <div class="content-block">
              <h4>🔀 Condiționala</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată condițională arată <strong>condiția</strong> de care depinde realizarea acțiunii din regentă. Răspunde la întrebarea <strong>În ce condiție?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>dacă</td><td><em>Dacă înveți,<sup>(cond.)</sup> / vei reuşi.<sup>(1)</sup></em></td></tr>
                  <tr><td>de (popular)</td><td><em>De vii mâine,<sup>(cond.)</sup> / îți spun eu.<sup>(1)</sup></em></td></tr>
                  <tr><td>să (condițional)</td><td><em>Să fi ştiut,<sup>(cond.)</sup> / nu aş fi plecat.<sup>(1)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați propoziția condițională în fraza: «Dacă mă suni, vin imediat.»", solution: "Subordonata «Dacă mă suni» este circumstanțială condițională, deoarece exprimă condiția în care se realizează acțiunea din regentă." },
                { level: "usor", text: "La ce întrebare răspunde condiționala?", solution: "Răspunde la întrebarea «În ce condiție?»." },
                { level: "mediu", text: "Analizați: «Dacă ar fi învățat, ar fi răspuns corect.»", solution: "Subordonata «Dacă ar fi învățat» exprimă condiția nerealizată de care depinde acțiunea din regentă, deci este condițională." },
                { level: "mediu", text: "Construiți o frază cu o condițională introdusă prin «de» în registru popular.", solution: "Exemplu: «De vii mai devreme, plecăm împreună.» Propoziția introdusă prin «de» are valoare condițională." },
                { level: "dificil", text: "Explicați diferența dintre o condițională și o temporală introdusă prin «când».", solution: "Condiționala exprimă o ipoteză sau o condiție: «Când ai timp, treci pe la mine» poate avea sens temporal sau condițional în funcție de context. Temporală indică un moment cert ori repetabil, iar condiționala indică dependența realizării acțiunii." },
                { level: "f-dificil", text: "Analizați valoarea subordonatei din fraza: «Să fi știut adevărul, n-aș fi plecat».", solution: "Subordonata «Să fi știut adevărul» are valoare condițională, chiar dacă este introdusă prin «să». Ea exprimă o condiție nerealizată pentru acțiunea din regentă." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-concesiva",
          title: "Propoțiția circumstanțială concesivă",
          content: `
            <div class="content-block">
              <h4>⚖️ Concesiva</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată concesivă exprimă un <strong>obstacol</strong> care nu împiedică realizarea acțiunii din regentă. Răspunde la întrebarea <strong>În ciuda a ce?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>deşi</td><td><em>Deşi era obosit,<sup>(conc.)</sup> / a continuat să muncească.<sup>(1)</sup></em></td></tr>
                  <tr><td>cu toate că</td><td><em>Cu toate că plouă,<sup>(conc.)</sup> / mergem în excursie.<sup>(1)</sup></em></td></tr>
                  <tr><td>chiar dacă</td><td><em>Chiar dacă nu vrei,<sup>(conc.)</sup> / trebuie să vii.<sup>(1)</sup></em></td></tr>
                  <tr><td>oricât</td><td><em>Oricât ar munci,<sup>(conc.)</sup> / nu reuşeşte.<sup>(1)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Concesivă vs. condițională</div>
                <p>• <strong>Condițională</strong>: <em>Dacă înveți, reuşeşti.</em> (condiția trebuie respectată)</p>
                <p>• <strong>Concesivă</strong>: <em>Deşi a învățat, nu a reuşit.</em> (obstacol care NU împiedică)</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați concesiva în fraza: «Deși ploua, au plecat în excursie.»", solution: "Subordonata «Deși ploua» este circumstanțială concesivă, deoarece exprimă un obstacol care nu împiedică realizarea acțiunii." },
                { level: "usor", text: "Ce exprimă o propoziție concesivă?", solution: "Exprimă un obstacol, o opoziție sau o împrejurare nefavorabilă care nu anulează acțiunea din regentă." },
                { level: "mediu", text: "Analizați: «Chiar dacă nu îl convingi, încearcă să îi explici calm.»", solution: "Subordonata «Chiar dacă nu îl convingi» exprimă o împrejurare care nu anulează acțiunea recomandată în regentă, deci este concesivă." },
                { level: "mediu", text: "Construiți o frază cu concesivă introdusă prin «cu toate că».", solution: "Exemplu: «Cu toate că era obosit, a continuat să citească.» Propoziția subordonată este concesivă." },
                { level: "dificil", text: "Deosebiți concesiva de adversativă în exemple proprii.", solution: "Concesiva este subordonată și exprimă un obstacol: «Deși a plouat, am ieșit». Adversativa coordonează două propoziții: «A plouat, dar am ieșit». Raportul logic este apropiat, dar relația sintactică este diferită." },
                { level: "f-dificil", text: "Explicați de ce în fraza «Oricât ar insista, nu îl convinge» subordonata este concesivă.", solution: "Elementul «oricât» introduce o limită extremă sau o concesie. Ideea este că, indiferent de intensitatea insistenței, rezultatul din regentă nu se schimbă, deci avem o concesivă." }
              ])}
            </div>
          `
        },

        {
          id: "propozitia-consecutiva",
          title: "Propoțiția circumstanțială consecutivă",
          content: `
            <div class="content-block">
              <h4>📈 Consecutiva</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția subordonată consecutivă exprimă <strong>consecința, rezultatul</strong> acțiunii din regentă. Răspunde la întrebarea <strong>Cu ce urmare?</strong></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Context</div>
                <p>În regentă apare un <strong>corelativ</strong>: <em>atât de, atât, atâta, aşa de, astfel, în asemenea măsură</em>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Corelativ</th><th>Element de relație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>atât de</td><td>că, încât</td><td><em>Era atât de obosit,<sup>(1)</sup> / că a adormit imediat.<sup>(cons.)</sup></em></td></tr>
                  <tr><td>atâta</td><td>de</td><td><em>Plângea atâta,<sup>(1)</sup> / de i se rupea inima.<sup>(cons.)</sup></em></td></tr>
                  <tr><td>(fără corelativ)</td><td>încât</td><td><em>A muncit,<sup>(1)</sup> / încât a obosit.<sup>(cons.)</sup></em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Identificați consecutiva în fraza: «Era atât de emoționat, încât nu mai putea vorbi.»", solution: "Subordonata «încât nu mai putea vorbi» este circumstanțială consecutivă, deoarece exprimă urmarea stării prezentate în regentă." },
                { level: "usor", text: "Ce element apare adesea în regenta unei consecutive?", solution: "În regentă apare adesea un corelativ, cum ar fi «atât de», «atâta», «așa de», «astfel»." },
                { level: "mediu", text: "Analizați: «A alergat atât de repede, că i-a întrecut pe toți.»", solution: "Regenta conține corelativul «atât de», iar subordonata «că i-a întrecut pe toți» exprimă urmarea intensității acțiunii, deci este consecutivă." },
                { level: "mediu", text: "Construiți o frază cu consecutivă introdusă prin «încât».", solution: "Exemplu: «A repetat atât de bine, încât a luat nota maximă.» Propoziția introdusă prin «încât» este consecutivă." },
                { level: "dificil", text: "Deosebiți consecutiva de CCM în perechea: «Răspunde cum poate» și «Este atât de emoționat încât se bâlbâie».", solution: "«Cum poate» arată modul acțiunii și este CCM. «Încât se bâlbâie» exprimă urmarea unei stări sau intensități și este consecutivă." },
                { level: "f-dificil", text: "Explicați de ce propoziția «de i se rupea inima» este consecutivă în construcția populară «Plângea atâta, de i se rupea inima».", solution: "În această construcție, «de» are valoare consecutivă, iar subordonata exprimă rezultatul intensității sugerate prin «atâta». Prin urmare, nu indică scopul sau cauza, ci urmarea." }
              ])}
            </div>
          `
        },

        {
          id: "constructii-incidente",
          title: "Construcții incidente și izolare prin punctuație",
          content: `
            <div class="content-block">
              <h4>📝 Construcții incidente</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Construcția incidentă este o intervenție a vorbitorului (comentariu, precizare, atitudine) care nu intră sintactic în structura de bază a enunțului.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p><em>Elevul, <strong>după cum știi</strong>, a câștigat premiul.</em></p>
                <p><em>Cartea aceasta este, <strong>fără îndoială</strong>, valoroasă.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Punctuație</div>
                <p>Incidentele se izolează prin virgule, liniuțe sau paranteze, în funcție de intenția stilistică.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați construcția incidentă în enunțul: «Maria, fără îndoială, va reuși.»", solution: "Construcția incidentă este «fără îndoială», deoarece exprimă atitudinea vorbitorului și nu intră sintactic în structura de bază a propoziției." },
                { level: "usor", text: "Cum se izolează de obicei construcțiile incidente?", solution: "Se izolează prin virgule, linii de pauză sau paranteze, în funcție de intenția stilistică." },
                { level: "mediu", text: "Explicați rolul construcției incidente în enunțul: «Elevul, după cum știi, este foarte conștiincios.»", solution: "Construcția «după cum știi» introduce un comentariu adresat interlocutorului. Ea nu este parte esențială a propoziției, ci o intervenție explicativă." },
                { level: "mediu", text: "Rescrieți corect cu punctuație: «Cartea aceasta fără îndoială merită citită».", solution: "Forma corectă este: «Cartea aceasta, fără îndoială, merită citită.» Incidenta se izolează prin virgule." },
                { level: "dificil", text: "Deosebiți o construcție incidentă de un complement circumstanțial într-un exemplu propriu.", solution: "Exemplu: «El va veni, probabil, mâine.» «probabil» este incidentă, deoarece exprimă atitudinea vorbitorului. În «El va veni mâine», «mâine» este complement circumstanțial de timp, integrat sintactic." },
                { level: "f-dificil", text: "Explicați de ce eliminarea unei construcții incidente nu schimbă structura sintactică de bază a enunțului.", solution: "Construcția incidentă este suprimabilă. Dacă o eliminăm, propoziția rămâne corectă și completă sintactic, pentru că incidenta adaugă doar o nuanță de comentariu sau atitudine." }
              ])}
            </div>
          `
        },

        {
          id: "apozitia",
          title: "Apoziția",
          content: `
            <div class="content-block">
              <h4>🏷️ Apoziția</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Apoziția este o funcție sintactică <strong>suprimabilă</strong>, care exprimă o <strong>relație de echivalență de sens</strong> între două cuvinte sau două grupuri de cuvinte. Prima secvență este baza construcției, iar cea de-a doua este apoziția, care precizează informații suplimentare.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Apoziție ≠ Atribut în nominativ</div>
                <p>Apoziția este <strong>suprimabilă</strong>, stă de obicei în nominativ și se desparte prin virgulă sau linie de pauză. Atributul în nominativ nu este suprimabil și nu se desparte prin virgulă.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p>• <em>Ficțiunea, <strong>plăsmuire a imaginației</strong>, te transportă în locuri diferite.</em></p>
                <p>• <em>Pe cer a apărut astrul nopții: <strong>Luna</strong>.</em></p>
                <p>• <em>Am vizitat Bucureștiul – <strong>capitala țării</strong>.</em></p>
                <p>• <em>I-am spus Anei, <strong>verișoarei mele</strong>, ce îmi doresc.</em></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Simplă</td><td>un singur termen</td><td><em>Sora mea, <strong>Elena</strong>, este profesoară.</em></td></tr>
                  <tr><td>Dezvoltată</td><td>doi sau mai mulți termeni</td><td><em>Acesta este Petre, <strong>colegul de bancă al Inei</strong>.</em></td></tr>
                </tbody>
              </table>
              <div class="definitie">
                <div class="definitie-label">Introdusă prin</div>
                <p>Apoziția poate fi introdusă prin adverbe sau locuțiuni fără funcție sintactică: <em>adică, anume, mai exact, altfel spus</em> etc.</p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Moduri de exprimare</div>
                <p>Prin substantiv, pronume, numeral cu valoare pronominală, adjectiv sau forme verbale nepersonale.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați apoziția în enunțul: «Bucureștiul, capitala României, este un oraș aglomerat.»", solution: "Apoziția este «capitala României», deoarece explică și redenumește substantivul «Bucureștiul»." },
                { level: "usor", text: "Care este o trăsătură esențială a apoziției?", solution: "Este suprimabilă și exprimă o relație de echivalență de sens față de termenul explicat." },
                { level: "mediu", text: "Analizați: «Fratele meu, Andrei, citește mult.»", solution: "«Andrei» este apoziție simplă, deoarece reia și precizează substantivul «fratele meu»." },
                { level: "mediu", text: "Construiți un enunț cu apoziție dezvoltată.", solution: "Exemplu: «Ana, colega mea din banca a doua, a câștigat concursul.» Secvența «colega mea din banca a doua» este apoziție dezvoltată." },
                { level: "dificil", text: "Deosebiți apoziția de atributul în nominativ în două exemple proprii.", solution: "Apoziție: «George, fratele meu, vine.» Secvența este suprimabilă și se izolează. Atribut în nominativ: «fratele George vine» sau o construcție echivalentă fără izolare; determinantul face parte din grupul nominal și nu este suprimabil în același mod." },
                { level: "f-dificil", text: "Explicați rolul semnelor de punctuație în recunoașterea apoziției, fără a le transforma într-unicul criteriu.", solution: "Virgulele sau liniile de pauză ajută la identificare, dar criteriul decisiv rămâne relația de echivalență și caracterul suprimabil. Uneori punctuația semnalează apoziția, dar trebuie verificat și raportul de sens dintre cele două secvențe." }
              ])}
            </div>
          `
        },

        {
          id: "complement-prepozitional-completiva",
          title: "Complementul prepozițional și completiva prepozițională",
          content: `
            <div class="content-block">
              <h4>🔗 Complementul prepozițional</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Complementul prepozițional este partea secundară de propoziție care completează sensul unui verb sau al unui adjectiv precedat obligatoriu de o prepoziție sau o locuțiune prepozițională. Răspunde la întrebările <strong>Despre ce? De ce? La ce? Față de ce? Cu cine?</strong> (cu prepoziție).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Verb / adjectiv regent</th><th>Prepoziție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>a se gândi</td><td>la</td><td><em>Se gândește <u>la concurs</u>.</em></td></tr>
                  <tr><td>a vorbi</td><td>despre</td><td><em>Vorbim <u>despre carte</u>.</em></td></tr>
                  <tr><td>a se teme</td><td>de</td><td><em>Se teme <u>de eșec</u>.</em></td></tr>
                  <tr><td>a se bucura</td><td>de</td><td><em>Se bucură <u>de succes</u>.</em></td></tr>
                  <tr><td>a conta</td><td>pe</td><td><em>Contează <u>pe ajutorul tău</u>.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Complement de agent (tip special)</div>
                <p>Complementul de agent este un tip special de complement prepozițional care denumește autorul acțiunii dintr-o construcție pasivă. Se exprimă prin substantiv/pronume în acuzativ, precedat de <em>de (către)</em>: <em>Cartea este citită <strong>de elev</strong>.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>📐 Completiva prepozițională</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Completiva prepozițională este propoziția subordonată care îndeplinește funcția de <strong>complement prepozițional</strong> față de un verb sau adjectiv care cer o prepoziție obligatorie. Răspunde la aceleași întrebări ca și complementul prepozițional (cu prepoziție).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element introductiv</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>că (după prepoziție)</td><td><em>Se gândește<sup>(1)</sup> / la faptul că va reuși.<sup>(CP)</sup></em></td></tr>
                  <tr><td>să</td><td><em>Se gândește<sup>(1)</sup> / să participe la concurs.<sup>(CP)</sup></em></td></tr>
                  <tr><td>pron./adj. pron. relative</td><td><em>Mă gândesc<sup>(1)</sup> / la ce voi face.<sup>(CP)</sup></em></td></tr>
                  <tr><td>adverbe relative</td><td><em>Se interesează<sup>(1)</sup> / cum să ajungă acolo.<sup>(CP)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ CP vs. CI (Completiva indirectă)</div>
                <p>• <strong>CI</strong>: verbul regent cere dativul (fără prepoziție): <em>Îi scriu <u>colegului</u>.</em></p>
                <p>• <strong>CP</strong>: verbul regent cere o prepoziție specifică: <em>Mă gândesc <u>la tine</u>.</em></p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați complementul prepozițional în enunțul: «Se gândește la vacanță.»", solution: "Complementul prepozițional este «la vacanță», deoarece completează sensul verbului și este introdus obligatoriu prin prepoziția «la»." },
                { level: "usor", text: "Identificați completiva prepozițională în fraza: «Se gândește la ce va spune.»", solution: "Subordonata «la ce va spune» este completivă prepozițională, deoarece îndeplinește funcția unui complement prepozițional." },
                { level: "mediu", text: "Explicați diferența dintre CP și CI în două exemple scurte.", solution: "CP are prepoziție obligatorie: «Se referă la proiect». CI apare fără prepoziție și corespunde, de regulă, dativului: «Îi răspunde colegului»." },
                { level: "mediu", text: "Analizați: «Mă bucur de ceea ce ai reușit.»", solution: "Regenta este «Mă bucur», iar subordonata «de ceea ce ai reușit» este completivă prepozițională, deoarece verbul «a se bucura» cere prepoziția «de»." },
                { level: "dificil", text: "Construiți o pereche de enunțuri în care același verb cere mai întâi un complement prepozițional, apoi o completivă prepozițională.", solution: "Exemplu: «Se teme de examen.» / «Se teme de ce va urma.» În primul caz avem complement prepozițional exprimat prin substantiv, iar în al doilea completivă prepozițională." },
                { level: "f-dificil", text: "Explicați de ce secvența «la faptul că...» poate introduce o completivă prepozițională, deși apare un substantiv intermediar.", solution: "Prepoziția este cerută de regent, iar gruparea «la faptul că...» funcționează ca o dezvoltare a complementului prepozițional. Propoziția introdusă prin «că» completează substantivul suport «faptul», dar ansamblul îndeplinește funcția de CP față de regentă." }
              ])}
            </div>
          `
        },

        {
          id: "constructii-active-pasive",
          title: "Construcții active și pasive. Construcții reflexive și impersonale",
          content: `
            <div class="content-block">
              <h4>✅ Construcțiile active și pasive</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>• Într-o <strong>construcție activă</strong>, subiectul este <strong>autorul acțiunii</strong>: <em>Andrei scrie o compunere.</em></p>
                <p>• Într-o <strong>construcție pasivă</strong>, subiectul <strong>suportă acțiunea</strong> făcută de autorul ei: <em>Compunerea este scrisă de Andrei.</em></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Structura construcției pasive</div>
                <p>Subiect + <strong>verb auxiliar a fi</strong> + <strong>participiu</strong> + complement de agent</p>
                <p>Participiul se acordă în gen și număr cu subiectul: <em>Replica este rostită de Ana. / Replicile sunt rostite de Ana.</em></p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p><strong>Activ:</strong> <em>Scenograful proiectează decorurile.</em></p>
                <p><strong>Pasiv:</strong> <em>Decorurile sunt proiectate de (către) scenograf.</em></p>
                <p>Transformare: subiectul activ → complement de agent; CD activ → subiect pasiv.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Verbele care NU pot forma construcții pasive</div>
                <p>Numai verbele tranzitive (care au complement direct) se transformă în pasiv. Verbele intranzitive nu: <em>A sosit. → Nu se poate: *„A fost sosit."</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔁 Construcțiile cu pronume reflexive</h4>
              <p>Construcțiile cu pronume reflexive pot exprima:</p>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Reflexivă propriu-zisă</td><td>acțiunea se răsfrânge asupra subiectului</td><td><em>El <strong>se spală</strong>.</em></td></tr>
                  <tr><td>Reciprocă</td><td>doi sau mai mulți subiecți realizează acțiunea unul față de celălalt</td><td><em>Ei <strong>se ajută</strong> reciproc.</em></td></tr>
                  <tr><td>Pasivă reflexivă</td><td>pasivul se poate exprima și cu <em>se</em></td><td><em><strong>Se vinde</strong> apartamentul.</em></td></tr>
                  <tr><td>Dinamică</td><td>acțiunea este realizată cu implicare</td><td><em>El <strong>se duce</strong> acolo.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔇 Construcțiile impersonale</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Construcțiile impersonale sunt construcții în care verbul nu are subiect sau are un subiect neidentificabil. Se formează cu:</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Verbe impersonale propriu-zise</td><td><em>plouă, ninge, tună, fulgeră, trecuseră ani</em></td></tr>
                  <tr><td>Construcții impersonale cu <em>se</em></td><td><em>Se spune că..., Se știe că..., Se vede că...</em></td></tr>
                  <tr><td>Expresii impersonale</td><td><em>este bine, este necesar, trebuie, se cuvine, pare, reiese</em></td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Transformați în pasiv: «Elevii citesc textul.»", solution: "Forma pasivă este: «Textul este citit de elevi.» Complementul direct din construcția activă devine subiect în construcția pasivă." },
                { level: "usor", text: "Identificați tipul construcției în enunțul: «Se vând manuale.»", solution: "Este o construcție pasivă reflexivă, deoarece forma cu «se» are sens pasiv: manualele sunt vândute." },
                { level: "mediu", text: "Analizați diferența dintre construcția activă și cea pasivă în perechea: «Profesorul explică lecția.» / «Lecția este explicată de profesor.»", solution: "În construcția activă, subiectul este autorul acțiunii. În construcția pasivă, subiectul suportă acțiunea, iar autorul apare ca complement de agent." },
                { level: "mediu", text: "Dați un exemplu de construcție impersonală și explicați de ce este impersonală.", solution: "Exemplu: «Plouă de dimineață.» Este impersonală deoarece verbul nu are un subiect lexical care să numească autorul acțiunii." },
                { level: "dificil", text: "Explicați de ce verbul din enunțul «A sosit trenul» nu se poate transforma în pasiv.", solution: "Verbul «a sosi» este intranzitiv și nu are complement direct. Numai verbele tranzitive, care pot avea complement direct, pot forma construcții pasive." },
                { level: "f-dificil", text: "Deosebiți într-un exemplu propriu o construcție reflexivă propriu-zisă de una pasivă reflexivă.", solution: "Reflexivă propriu-zisă: «Maria se spală.» Acțiunea se răsfrânge asupra subiectului. Pasivă reflexivă: «Se construiește un pod.» Subiectul logic al acțiunii nu este exprimat, iar forma cu «se» are sens pasiv." }
              ])}
            </div>
          `
        },

        {
          id: "enunturi-eliptice",
          title: "Enunțuri eliptice. Norme de punctuație",
          content: `
            <div class="content-block">
              <h4>✂️ Elipsa</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Elipsa reprezintă <strong>omisiunea unor secvențe recuperabile din context</strong>, exprimate anterior. Apare frecvent în limbajul vorbit.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Ce se omite</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Elipsa verbală</strong></td><td>predicatul (înlocuit de virgulă sau linie de pauză)</td><td><em>Eu am fost în parc și tu, <strong>[ai fost]</strong> la film.</em></td></tr>
                  <tr><td><strong>Elipsa nominală</strong></td><td>un substantiv recuperabil din context</td><td><em>Eu am vrut o prăjitură cu ciocolată, Ioana <strong>[o prăjitură]</strong> cu fistic.</em></td></tr>
                  <tr><td><strong>Propoziție fragmentară</strong></td><td>tot ce e comun, se păstrează informația nouă</td><td><em>— Ce ai prima oră? — Matematică <strong>[am prima oră]</strong>.</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual (Take, Ianke și Cadâr – Victor Ion Popa)</div>
                <p><em>„IANKE: Ce mai ai acolo? / TAKE: Niște sarmale de purcel. / IANKE: Cu varză? / TAKE: Îhî!"</em></p>
                <p>→ Răspunsul „Îhî!" = propoziție fragmentară (înlocuiește „Da, sunt sarmale cu varză").</p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Norme de punctuație</div>
                <p>• Elipsa verbală se marchează în scris prin <strong>virgulă</strong> sau <strong>linie de pauză</strong>.</p>
                <p>• În vorbire, elipsa se marchează printr-o <strong>pauză</strong>.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați elipsa în enunțul: «Eu merg la bibliotecă, iar tu la sală.»", solution: "În a doua secvență este omis predicatul «mergi». Avem o elipsă verbală: «iar tu [mergi] la sală»." },
                { level: "usor", text: "Ce este un enunț eliptic?", solution: "Este un enunț în care anumite cuvinte sau structuri sunt omise, dar pot fi recuperate din context." },
                { level: "mediu", text: "Rescrieți complet: «Noi am ales romanul, ei nuvela.»", solution: "Forma completă este: «Noi am ales romanul, ei au ales nuvela.» În a doua propoziție este elidat predicatul." },
                { level: "mediu", text: "Explicați ce se omite în replica: «— Cine vine? — Andrei.»", solution: "Replica «Andrei» este o propoziție fragmentară. Din context se recuperează structura «Andrei vine»." },
                { level: "dificil", text: "Deosebiți o elipsă intenționată de o exprimare incompletă greșită.", solution: "Elipsa este acceptată când informația lipsă poate fi recuperată clar din context și enunțul rămâne inteligibil. O exprimare incompletă greșită apare când lipsa face mesajul ambiguu sau incorect." },
                { level: "f-dificil", text: "Explicați rolul punctuației în marcarea elipsei verbale în enunțul: «Ea citește poezie, el proză.»", solution: "Virgula marchează locul unde se recuperează predicatul omis «citește». Punctuația semnalează raportul dintre cele două secvențe și ajută cititorul să reconstituie sensul complet." }
              ])}
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  2. VOCABULAR ȘI MORFOLOGIE (RECAPITULARE)
    // ============================================================
    {
      id: "vocabular-recap",
      title: "Vocabular (recapitulare)",
      subtitle: "Sensuri, categorii semantice, vocabular fundamental/de masă, formare internă, neologisme",
      icon: "📚",
      chapters: [

        {
          id: "sens-vocabular",
          title: "Sensul propriu și figurat. Cuvinte polisemantice",
          content: `
            <div class="content-block">
              <h4>🎯 Sensul propriu și sensul figurat</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip de sens</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Propriu de bază</td><td>sensul uzual, de dicționar</td><td><em>lumina soarelui</em></td></tr>
                  <tr><td>Propriu secundar</td><td>derivat din cel de bază, tot concret</td><td><em>lumina lămpii</em></td></tr>
                  <tr><td>Figurat</td><td>metaforic, artistic, conotativ</td><td><em>lumina ochilor tăi</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Polisemie vs. omonimie (recap)</div>
                <p>• <strong>Polisemie</strong>: un singur cuvânt, sensuri înrudite (<em>masă</em> = mobilă / mâncare / mulțime).</p>
                <p>• <strong>Omonimie</strong>: cuvinte diferite, fără legătură (<em>leu</em> animal / <em>leu</em> monedă).</p>
              </div>
              ${exR8([
                { level: "usor", text: "Precizați sensul figurat din expresia «lumina ochilor mei».", solution: "În această expresie, «lumina» are sens figurat și exprimă ideea de persoană foarte dragă, nu de sursă reală de lumină." },
                { level: "usor", text: "Dați un exemplu de cuvânt polisemantic.", solution: "Exemplu: «cap» poate însemna partea corpului, conducătorul unei instituții sau extremitatea unui obiect. Sensurile sunt înrudite, deci avem polisemie." },
                { level: "mediu", text: "Deosebiți sensul propriu de cel figurat în enunțurile: «Piatra e rece.» și «Are o inimă de piatră.»", solution: "În primul enunț, «piatră» are sens propriu, denumind materialul. În al doilea, expresia «inimă de piatră» are sens figurat și sugerează lipsa de sensibilitate." },
                { level: "mediu", text: "Explicați de ce «broască» din sensurile «animal» și «mecanism la ușă» este omonimie, nu polisemie.", solution: "Cele două sensuri nu sunt înrudite semantic. Forma este aceeași, dar cuvintele denumesc realități diferite, fără legătură de sens, deci sunt omonime." },
                { level: "dificil", text: "Construiți un enunț în care același cuvânt să apară cu sens propriu și figurat.", solution: "Exemplu: «Focul ardea în sobă, iar în sufletul lui ardea focul dorului.» În primul caz, «foc» are sens propriu; în al doilea, sens figurat." },
                { level: "f-dificil", text: "Arătați cum poate contextul să stabilească dacă avem sens propriu secundar sau sens figurat pentru cuvântul «lumină».", solution: "În «lumina veiozei», sensul este propriu secundar, pentru că se referă tot la fenomenul fizic al luminii produse de altă sursă. În «lumina vieții mele», sensul este figurat, fiindcă exprimă metaforic valoarea afectivă a unei persoane." }
              ])}
            </div>
          `
        },

        {
          id: "categorii-semantice",
          title: "Categorii semantice (recapitulare)",
          content: `
            <div class="content-block">
              <h4>📖 Recapitulare – sinonime, antonime, omonime, paronime</h4>
              <table class="teoria-table">
                <thead><tr><th>Categorie</th><th>Definiție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Sinonime</td><td>formă diferită, sens asemănător</td><td>a birui = a învinge</td></tr>
                  <tr><td>Antonime</td><td>sens opus</td><td>harnic ≠ leneș</td></tr>
                  <tr><td>Omonime</td><td>formă identică, sensuri fără legătură</td><td>broască (animal / la ușă)</td></tr>
                  <tr><td>Paronime</td><td>formă asemănătoare, sensuri diferite</td><td>eminent / iminent</td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Dați un sinonim pentru «curajos».", solution: "Exemple corecte: «viteaz», «îndrăzneț», «temerar», în funcție de context." },
                { level: "usor", text: "Indicați antonimul cuvântului «generos».", solution: "Un antonim potrivit este «zgârcit» sau «avar», în funcție de nuanța dorită." },
                { level: "mediu", text: "Explicați diferența dintre omonime și paronime.", solution: "Omonimele au formă identică și sensuri diferite, fără legătură. Paronimele au formă asemănătoare, dar nu identică, și sensuri diferite, de exemplu «eminent» și «iminent»." },
                { level: "mediu", text: "Construiți două enunțuri în care «leu» să fie folosit ca omonim.", solution: "Exemplu: «Leul trăiește în savană.» / «Am plătit un leu pentru caiet.» În primul caz este animalul, în al doilea moneda." },
                { level: "dificil", text: "Alegeți corect într-un enunț propriu: «eminent» sau «iminent», apoi justificați alegerea.", solution: "Exemplu: «Pericolul era iminent.» Alegerea este corectă pentru că «iminent» înseamnă pe cale să se producă. «Eminent» înseamnă valoros, remarcabil." },
                { level: "f-dificil", text: "Explicați de ce două sinonime perfecte sunt rare în limbă și cum intervine contextul în alegere.", solution: "Sinonimele totale sunt rare deoarece cuvintele au nuanțe de stil, frecvență sau registru diferite. De exemplu, două cuvinte apropiate ca sens pot fi potrivite în contexte diferite: unul în limbaj curent, altul în limbaj livresc." }
              ])}
            </div>
          `
        },

        {
          id: "vocabular-fundamental-masa",
          title: "Vocabular fundamental și masa vocabularului",
          content: `
            <div class="content-block">
              <h4>🧱 Structura vocabularului</h4>
              <table class="teoria-table">
                <thead><tr><th>Componentă</th><th>Caracteristici</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Vocabular fundamental</td><td>cuvinte foarte frecvente, stabile, uz general</td><td>om, casă, apă, a merge, bun</td></tr>
                  <tr><td>Masa vocabularului</td><td>cuvinte specializate, regionale, neologice, tehnice</td><td>algoritm, fotosinteză, jurisdicție</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 La examen</div>
                <p>Poți primi cerințe despre registru și adecvare: cuvintele din masa vocabularului se aleg în funcție de context (științific, administrativ, literar).</p>
              </div>
              ${exR8([
                { level: "usor", text: "Precizați dacă termenul «apă» aparține vocabularului fundamental sau masei vocabularului.", solution: "«Apă» aparține vocabularului fundamental, deoarece este un cuvânt foarte frecvent, stabil și cunoscut de toți vorbitorii." },
                { level: "usor", text: "Indicați un exemplu de cuvânt din masa vocabularului.", solution: "Exemple potrivite: «algoritm», «jurisdicție», «fotosinteză», pentru că sunt termeni specializați sau mai puțin frecvenți." },
                { level: "mediu", text: "Explicați diferența dintre vocabularul fundamental și masa vocabularului.", solution: "Vocabularul fundamental cuprinde cuvintele de bază, foarte frecvente și necesare comunicării zilnice. Masa vocabularului include cuvinte specializate, regionale, arhaice, tehnice sau neologice." },
                { level: "mediu", text: "Construiți un enunț adecvat unui context științific folosind un cuvânt din masa vocabularului.", solution: "Exemplu: «Fotosinteza este procesul prin care plantele produc substanțe organice.» Termenul «fotosinteza» aparține masei vocabularului, fiind specific limbajului științific." },
                { level: "dificil", text: "Arătați cum același context poate cere fie un termen uzual, fie unul specializat.", solution: "În limbaj obișnuit spunem «boală de inimă», dar într-un context medical putem folosi «afecțiune cardiacă». Alegerea depinde de situația de comunicare și de public." },
                { level: "f-dificil", text: "Explicați de ce masa vocabularului este mult mai mare decât vocabularul fundamental.", solution: "Pentru că include domenii numeroase și specializate, neologisme, regionalisme, arhaisme și termeni tehnici. Comunicarea generală folosește relativ puține cuvinte, dar limba are nevoie de mult mai multe pentru a numi realități diverse." }
              ])}
            </div>
          `
        },

        {
          id: "mijloace-interne-prefixoide",
          title: "Mijloace interne de îmbogățire: prefixoide și sufixoide",
          content: `
            <div class="content-block">
              <h4>🧪 Formare internă a cuvintelor</h4>
              <div class="definitie">
                <div class="definitie-label">Definiții</div>
                <p><strong>Prefixoidele</strong> și <strong>sufixoidele</strong> sunt elemente de compunere cu sens lexical relativ stabil, folosite frecvent în terminologia modernă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th><th>Sens orientativ</th></tr></thead>
                <tbody>
                  <tr><td>Prefixoide</td><td>bio-, auto-, tele-, micro-, macro-</td><td>viață, de sine, la distanță, mic, mare</td></tr>
                  <tr><td>Sufixoide</td><td>-logie, -fil, -fob, -grafie</td><td>știință, iubitor de, teamă de, descriere</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p><em>biologie, telefon, microclimat, cinefil, geografie</em></p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați prefixoidul din cuvântul «microclimat».", solution: "Prefixoidul este «micro-», care sugerează ideea de mic sau redus." },
                { level: "usor", text: "Ce sens are sufixoidul «-logie» în cuvântul «biologie»?", solution: "Sufixoidul «-logie» are sensul de știință sau studiu despre ceva." },
                { level: "mediu", text: "Explicați formarea cuvântului «telefon» din punctul de vedere al elementelor de compunere.", solution: "Cuvântul este format din elemente de compunere de origine greacă: «tele-» înseamnă la distanță, iar «-fon» se leagă de sunet sau voce." },
                { level: "mediu", text: "Construiți două cuvinte cu prefixoide diferite și explicați sensul lor general.", solution: "Exemplu: «autobiografie» cu «auto-» = despre sine și «macrostructură» cu «macro-» = de mari dimensiuni. Prefixoidele orientează sensul întregului cuvânt." },
                { level: "dificil", text: "Deosebiți derivarea obișnuită de compunerea cu prefixoide și sufixoide.", solution: "La derivarea obișnuită folosim afixe gramaticalizate ale limbii, precum prefixe și sufixe productive. Prefixoidele și sufixoidele păstrează mai clar un sens lexical și apar frecvent în termeni savanți sau tehnici." },
                { level: "f-dificil", text: "Explicați de ce astfel de elemente sunt productive mai ales în terminologia modernă și științifică.", solution: "Pentru că permit formarea rapidă a unor termeni preciși, internaționali și ușor de analizat semantic. Domeniile moderne au nevoie de denumiri exacte, iar aceste elemente de compunere oferă flexibilitate și claritate." }
              ])}
            </div>
          `
        },

        {
          id: "valori-fonetice-stilistice",
          title: "Valori expresive fonetice: aliterație și asonanță",
          content: `
            <div class="content-block">
              <h4>🔊 Valori stilistice la nivel fonetic</h4>
              <table class="teoria-table">
                <thead><tr><th>Procedeu</th><th>Definiție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Aliterație</td><td>repetarea unor consoane pentru efect sonor</td><td><em>Vântul viu vuia.</em></td></tr>
                  <tr><td>Asonanță</td><td>repetarea unor vocale</td><td><em>Lin, visând, privind...</em></td></tr>
                </tbody>
              </table>
              <p>Aceste procedee susțin atmosfera textului: calm, tensiune, muzicalitate, dramatism.</p>
              ${exR8([
                { level: "usor", text: "Identificați procedeul fonetic din secvența «Vântul viu vuia».", solution: "Avem aliterație, deoarece se repetă consoana «v», ceea ce creează un efect sonor sugestiv." },
                { level: "usor", text: "Ce este asonanța?", solution: "Asonanța este repetarea unor vocale pentru a crea un efect muzical sau expresiv." },
                { level: "mediu", text: "Explicați rolul aliterației într-un vers sau enunț poetic.", solution: "Aliterația intensifică expresivitatea și poate sugera mișcare, zgomot, tensiune sau armonie, în funcție de sunetele repetate." },
                { level: "mediu", text: "Construiți un exemplu scurt de asonanță.", solution: "Exemplu: «Lin, trist, visând prin iarbă»; repetarea vocalelor «i» și «a» creează un efect sonor recognoscibil." },
                { level: "dificil", text: "Deosebiți aliterația de rima exterioară a versurilor.", solution: "Aliterația este repetarea unui sunet în interiorul aceleiași secvențe sau în versuri apropiate, pe când rima privește corespondența sonoră de la finalul versurilor." },
                { level: "f-dificil", text: "Explicați cum pot procedeele fonetice contribui la atmosfera unui text fără a schimba sensul de bază al cuvintelor.", solution: "Ele acționează asupra planului sonor, nu asupra sensului denotativ. Repetarea anumitor sunete creează impresii afective sau imagistice care însoțesc sensul și îl intensifică." }
              ])}
            </div>
          `
        },

        {
          id: "registrele-limbii",
          title: "Registrele limbii",
          content: `
            <div class="content-block">
              <h4>🎭 Registrele limbii</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Registrele limbii sunt <strong>varietăți de utilizare concretă</strong> a acesteia în funcție de situația de comunicare (relația dintre participanți, locul și timpul comunicării).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Registru</th><th>Context</th><th>Trăsături</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Solemn (oficial)</strong></td>
                    <td>situații oficiale, relații diplomatice, discursuri, ceremonii</td>
                    <td>vocabular pretențios, reguli gramaticale stricte, enunțuri ample, pronunție foarte îngrijită</td>
                    <td><em>Domnilor parlamentari, urmează răspunsurile la întrebările dumneavoastră.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Standard (curent)</strong></td>
                    <td>condiții obișnuite, comunicare generală</td>
                    <td>vocabular uzual, respectă regulile gramaticale, enunțuri scurte, pronunție îngrijită</td>
                    <td><em>Doamnă, vă rog liniște!</em></td>
                  </tr>
                  <tr>
                    <td><strong>Familiar (colocvial)</strong></td>
                    <td>discuții cu persoane apropiate, fără diferențe de statut</td>
                    <td>vocabular mai puțin pretențios (profu' = profesorul), reguli mai relaxate, enunțuri scurte, pronunție îngrijire redusă</td>
                    <td><em>Sst! Domne, vreau s-aud comunicatu' ăsta!</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Argoul și Jargonul</div>
                <p><strong>Argoul</strong>: limbaj codificat elaborat de un grup social restrâns pentru a nu fi înțeles de ceilalți. Ex.: <em>album</em> = cazier; <em>blană</em> = frumos, bun.</p>
                <p><strong>Jargonul</strong>: limbaj de specialitate cu mulți termeni tehnici, folosit între specialiști. Ex.: jargon medical, lingvistic, informatic.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Regulă</div>
                <p>Nu este recomandabil amestecul de registre, fiindcă generează efecte comice. Registrul solemn și cel standard sunt limbaje formale, cel familiar este informal.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Indicați registrul enunțului: «Domnule director, vă rog să aprobați cererea.»", solution: "Enunțul aparține registrului solemn sau oficial, deoarece folosește formule politicoase și vocabular adecvat unei situații formale." },
                { level: "usor", text: "Ce registru este folosit în replica: «Hai, mă, vino odată!»", solution: "Este registrul familiar, deoarece exprimarea este colocvială și potrivită unui context informal." },
                { level: "mediu", text: "Explicați diferența dintre registrul standard și cel familiar.", solution: "Registrul standard respectă normele limbii și este adecvat comunicării obișnuite, îngrijite. Registrul familiar este mai relaxat, apare între persoane apropiate și poate include forme colocviale." },
                { level: "mediu", text: "Rescrieți în registru standard: «Profu' ne-a zis să venim mai repede.»", solution: "Forma standard este: «Profesorul ne-a spus să venim mai repede.» Se evită forma colocvială «profu'» și verbul mai puțin îngrijit «a zis»." },
                { level: "dificil", text: "Deosebiți argoul de jargon prin câte un exemplu.", solution: "Argoul este limbajul unui grup restrâns, adesea cu intenție de criptare sau apartenență: de exemplu, termeni de gașcă. Jargonul este limbajul de specialitate al unui domeniu: termeni medicali, informatici, juridici." },
                { level: "f-dificil", text: "Explicați de ce amestecul registrelor poate produce efect comic sau inadecvare stilistică.", solution: "Pentru că elementele lingvistice transmit informații despre situația de comunicare. Dacă un context solemn include expresii familiare sau argotice, apare o ruptură de ton care poate părea comică ori nepotrivită." }
              ])}
            </div>
          `
        },

        {
          id: "anafora-coerenta",
          title: "Anafora și organizarea coerentă a textului",
          content: `
            <div class="content-block">
              <h4>🔄 Anafora</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Anafora este fenomenul sintactic și semantic ce constă în <strong>reluarea într-un text a unui cuvânt</strong> (numit <em>antecedent</em>) printr-un alt cuvânt care îl înlocuiește (numit <em>anaforic</em>) și care se referă la aceeași realitate a textului.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual</div>
                <p><em>Ana merge la cenaclu, pentru că <strong>ea</strong> scrie poezii.</em></p>
                <p>Antecedent = <em>Ana</em>; anaforic = <em>ea</em></p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Rolul anaforei</div>
                <p>Cu ajutorul anaforei se <strong>elimină repetițiile supărătoare</strong> și se asigură continuitatea logică a textului.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Parte de vorbire a anaforicului</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Pronume personal</td><td><em>Maria citește. <strong>Ea</strong> iubește literatura.</em></td></tr>
                  <tr><td>Pronume demonstrativ</td><td><em>Am cumpărat o carte. <strong>Aceasta</strong> e interesantă.</em></td></tr>
                  <tr><td>Adverb</td><td><em>Am mers la București. <strong>Acolo</strong> am văzut multe.</em></td></tr>
                  <tr><td>Substantiv sinonim</td><td><em>Cartea e interesantă. <strong>Volumul</strong> conține 300 de pagini.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🧱 Coerența textului</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Coerența textului se referă la ansamblul de trăsături care asigură <strong>logica și înțelegerea</strong> acestuia.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Regulă</th><th>Ce cere</th></tr></thead>
                <tbody>
                  <tr><td>Regula continuității</td><td>enunțurile să aibă în comun un minimum de informație</td></tr>
                  <tr><td>Regula progresiei</td><td>fiecare enunț să aducă o informație nouă (nu repetarea cu alte cuvinte)</td></tr>
                  <tr><td>Regula noncontradicției</td><td>enunțurile să nu prezinte informații contradictorii; nu se schimbă persoana și timpul narațiunii</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Coeziune ≠ Coerență</div>
                <p>Fiecare enunț poate fi corect gramatical (are <strong>coeziune</strong>), dar textul în ansamblu poate să nu aibă sens dacă nu există legătură logică între enunțuri (lipsă de <strong>coerență</strong>).</p>
              </div>
              ${exR8([
                { level: "usor", text: "Identificați anaforicul în enunțul: «Maria a ajuns la școală. Ea era emoționată.»", solution: "Anaforicul este pronumele «Ea», care reia antecedentul «Maria»." },
                { level: "usor", text: "Ce rol are anafora într-un text?", solution: "Anafora evită repetițiile supărătoare și contribuie la legarea logică a enunțurilor din text." },
                { level: "mediu", text: "Explicați diferența dintre coeziune și coerență.", solution: "Coeziunea privește legăturile gramaticale și lexicale dintre părțile textului. Coerența privește logica de ansamblu a ideilor și sensul global al textului." },
                { level: "mediu", text: "Dați un exemplu scurt în care un pronume demonstrativ are valoare anaforică.", solution: "Exemplu: «Am citit un roman nou. Acesta m-a impresionat.» Pronumele «Acesta» reia substantivul «roman»." },
                { level: "dificil", text: "Arătați printr-un exemplu cum poate un text să fie coerent gramatical, dar incoerent logic.", solution: "Exemplu: «Ana a deschis cartea. Ieri este albastru. Profesorul aleargă încet prin matematică.» Enunțurile sunt corecte gramatical, dar nu au legătură logică între ele, deci textul nu este coerent." },
                { level: "f-dificil", text: "Explicați cum contribuie regula progresiei la organizarea unui text bun.", solution: "Regula progresiei cere ca fiecare enunț să aducă o informație nouă, pornind de la ceea ce s-a spus deja. Astfel textul avansează logic, fără repetiții inutile și fără rupturi de sens." }
              ])}
            </div>
          `
        },

        {
          id: "neologisme-vocabular",
          title: "Neologismele. Evitarea greșelilor",
          content: `
            <div class="content-block">
              <h4>🌍 Neologismele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Neologismele sunt cuvinte nou-intrate în limbă, provenite mai ales din franceză, engleză, italiană. Ele îmbogățesc vocabularul prin mijloace externe.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeli frecvente cu neologisme</div>
                <p>• <strong>a aloca</strong> (nu „a aloga"), <strong>a implementa</strong>, <strong>a monitoriza</strong></p>
                <p>• <strong>a accesa</strong> (nu „a acesa"), <strong>a achiziționa</strong> (nu „a achizitiona")</p>
                <p>• Nu folosi neologisme când există un cuvânt românesc bun: <em>a îmbunătăți</em> în loc de „a upgrada" în contexte formale.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce sunt neologismele?", solution: "Neologismele sunt cuvinte intrate relativ recent în limbă, adesea preluate din alte limbi, care denumesc realități sau noțiuni noi." },
                { level: "usor", text: "Corectați forma greșită: «a acesa platforma».", solution: "Forma corectă este «a accesa platforma». Verbul se scrie cu dublu «c»." },
                { level: "mediu", text: "Explicați de ce în contexte formale este preferabil «a îmbunătăți» în loc de «a upgrada».", solution: "Pentru că «a îmbunătăți» este un termen românesc adecvat registrului standard sau formal, pe când «a upgrada» este un împrumut colocvial și adesea inadecvat stilistic." },
                { level: "mediu", text: "Construiți un enunț corect cu verbul «a implementa».", solution: "Exemplu: «Școala va implementa un program nou de lectură.» Verbul este folosit corect într-un context administrativ sau educațional." },
                { level: "dificil", text: "Deosebiți neologismul util de folosirea afectată a unui cuvânt străin.", solution: "Un neologism util denumește precis o noțiune și este adecvat contextului. O folosire afectată apare când un cuvânt străin este ales inutil, deși există un echivalent românesc clar și potrivit." },
                { level: "f-dificil", text: "Explicați cum se leagă alegerea neologismelor de registrul limbii și de destinatarul mesajului.", solution: "Alegerea depinde de cine citește sau ascultă și de situația de comunicare. Într-un text tehnic, neologismele pot fi necesare pentru precizie; într-un text adresat publicului larg, prea multe neologisme pot îngreuna înțelegerea." }
              ])}
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  3. LITERATURĂ
    // ============================================================
    {
      id: "literatura",
      title: "Literatură",
      subtitle: "Balada populară, romanul, opera dramatică, eul liric, versificație, alegorie și imagini artistice",
      icon: "📖",
      chapters: [

        {
          id: "balada-populara",
          title: "Balada populară",
          content: `
            <div class="content-block">
              <h4>🎶 Balada populară</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Balada populară este o specie a genului epic în versuri, cu o narațiune dramatică, personaje excepționale și elemente fantastice. A circulat oral, transmisă din generație în generație.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trăsătură</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Gen</td><td>epic (narativ)</td></tr>
                  <tr><td>Formă</td><td>versuri (spre deosebire de nuvelă sau roman)</td></tr>
                  <tr><td>Personaje</td><td>excepționale, supranaturale sau eroice</td></tr>
                  <tr><td>Teme</td><td>destinul, moartea, lupta, sacrificiul</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu – „Miorița"</div>
                <p>Balada prezintă destinul unui cioban condamnat de invidie. Miorița (oița năzdrăvană) îl anunță de moartea iminentă. Tema centrală: acceptarea morții ca nuntă cosmică, integrarea omului în natură.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Precizați genul literar al baladei populare.", solution: "Balada populară aparține genului epic, deoarece prezintă întâmplări și personaje într-o desfășurare narativă." },
                { level: "usor", text: "Numiți o trăsătură a baladei populare.", solution: "O trăsătură este caracterul oral sau tradițional, fiind transmisă din generație în generație." },
                { level: "mediu", text: "Explicați de ce «Miorița» este o baladă populară.", solution: "Are caracter narativ în versuri, include personaje excepționale și o viziune simbolică asupra destinului și morții, specifice baladei populare." },
                { level: "mediu", text: "Identificați o temă importantă a baladei populare.", solution: "Teme frecvente sunt destinul, moartea, eroismul, sacrificiul sau conflictul." },
                { level: "dificil", text: "Arătați diferența dintre balada populară și doină.", solution: "Balada populară este o specie epică în versuri, cu acțiune și personaje, pe când doina este o specie lirică, axată pe exprimarea directă a sentimentelor." },
                { level: "f-dificil", text: "Explicați semnificația expresiei «nuntă cosmică» în interpretarea baladei «Miorița».", solution: "Expresia sugerează transfigurarea morții într-un eveniment de integrare armonioasă în univers. Moartea nu mai apare doar tragic, ci capătă valoare simbolică și ritualică." }
              ])}
            </div>
          `
        },

        {
          id: "textul-discontinuu",
          title: "Textul discontinuu",
          content: `
            <div class="content-block">
              <h4>📊 Textul discontinuu</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Textul discontinuu este un tip de text în care informația este prezentată <strong>nu în propoziții și paragrafe continue</strong>, ci prin elemente grafice și vizuale: grafice, tabele, diagrame, hărți, benzi desenate, formulare, imagini însoțite de legendă etc.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de text discontinuu</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Grafice</td><td>grafic cu bare, grafic circular, histogramă</td></tr>
                  <tr><td>Tabele / scheme</td><td>tabel de date, schemă logică, organigramă</td></tr>
                  <tr><td>Hărți</td><td>hartă geografică, plan al unui oraș</td></tr>
                  <tr><td>Benzi desenate</td><td>comic strip, manga, strip publicitar</td></tr>
                  <tr><td>Formulare</td><td>formular de înscriere, chestionar, CV</td></tr>
                  <tr><td>Imagini cu legendă</td><td>fotografie cu explicații, infografic</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Cum citim un text discontinuu</div>
                <p>1. Citim titlul și legenda (dacă există).</p>
                <p>2. Identificăm tipul de reprezentare (grafic, tabel etc.).</p>
                <p>3. Citim axele, unitățile, categoriile.</p>
                <p>4. Identificăm tendința principală sau valoarea maximă/minimă.</p>
                <p>5. Corelăm informațiile cu contextul din textul continuu care îl însoțește.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Text discontinuu ≠ Text continuu</div>
                <p>Textul continuu este format din propoziții și paragrafe (narativ, descriptiv, argumentativ etc.). Textul discontinuu organizează informația vizual; ambele se pot combina într-un text multimodal.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce este un text discontinuu?", solution: "Este un text în care informația este organizată vizual, prin tabele, grafice, scheme, hărți sau alte forme non-continue." },
                { level: "usor", text: "Dați un exemplu de text discontinuu.", solution: "Exemple: un tabel, un grafic cu bare, un formular, o hartă sau un infografic." },
                { level: "mediu", text: "Explicați ce trebuie urmărit mai întâi la citirea unui grafic.", solution: "Se urmăresc titlul, legenda, axele, unitățile de măsură și categoriile reprezentate, pentru a înțelege corect informația." },
                { level: "mediu", text: "Deosebiți textul continuu de textul discontinuu.", solution: "Textul continuu este alcătuit din propoziții și paragrafe, în timp ce textul discontinuu prezintă informația prin structuri vizuale și grafice." },
                { level: "dificil", text: "Explicați cum poate fi integrat un text discontinuu într-un text multimodal.", solution: "Un text multimodal combină textul scris cu elemente vizuale, precum tabele sau grafice. Textul discontinuu completează sau clarifică informația transmisă prin textul continuu." },
                { level: "f-dificil", text: "Arătați de ce interpretarea corectă a unui text discontinuu cere atât citire vizuală, cât și inferență logică.", solution: "Citirea vizuală ajută la identificarea datelor, iar inferența logică permite compararea, deducerea tendințelor și formularea concluziilor pe baza informațiilor prezentate." }
              ])}
            </div>
          `
        },

        {
          id: "eul-liric-si-viziune",
          title: "Eul liric și viziunea în textul poetic",
          content: `
            <div class="content-block">
              <h4>🪶 Eul liric</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Eul liric este vocea care exprimă sentimentele, ideile și atitudinile în textul liric. Nu se confundă automat cu autorul real.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Indicator</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Persoana I</td><td><em>eu, mi, îmi, mă</em></td></tr>
                  <tr><td>Verbe la persoana I</td><td><em>simt, iubesc, plâng, visez</em></td></tr>
                  <tr><td>Mărci afective</td><td>interjecții, exclamații, adresări</td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Ce este eul liric?", solution: "Eul liric este vocea din textul poetic care exprimă sentimente, idei și atitudini. Nu trebuie confundat automat cu autorul real." },
                { level: "usor", text: "Indicați un semn prin care poate fi recunoscut eul liric.", solution: "Un semn frecvent este folosirea persoanei I, prin pronume și verbe precum «eu», «mă», «simt», «iubesc»." },
                { level: "mediu", text: "Explicați de ce autorul și eul liric nu sunt întotdeauna aceeași persoană.", solution: "Autorul este persoana reală care scrie textul, iar eul liric este o voce artistică construită în interiorul poeziei. Între ele poate exista apropiere, dar nu identitate obligatorie." },
                { level: "mediu", text: "Analizați rolul mărcilor afective într-un text liric.", solution: "Mărcile afective, cum sunt exclamațiile sau adresările, intensifică expresivitatea și arată implicarea emoțională a eului liric." },
                { level: "dificil", text: "Construiți un exemplu de două versuri în care să apară clar eul liric.", solution: "Exemplu: «Privesc spre zare și tresar,/ În mine plânge un amurg amar.» Verbele și pronumele la persoana I indică eul liric." },
                { level: "f-dificil", text: "Explicați cum se poate identifica viziunea despre lume a eului liric într-un text poetic.", solution: "Viziunea despre lume reiese din imaginile poetice, ton, câmpuri lexicale, figuri de stil și atitudinile exprimate. Nu se deduce doar dintr-un cuvânt, ci din întregul sistem de semnificații al textului." }
              ])}
            </div>
          `
        },

        {
          id: "versificatie-vers-liber",
          title: "Elemente de versificație. Versul liber",
          content: `
            <div class="content-block">
              <h4>📏 Versificație</h4>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Măsura</td><td>numărul de silabe dintr-un vers</td></tr>
                  <tr><td>Rima</td><td>împerecheată, încrucișată, îmbrățișată, albă</td></tr>
                  <tr><td>Ritmul</td><td>organizarea accentelor</td></tr>
                  <tr><td>Versul liber</td><td>fără măsură și rimă fixă, dar cu unitate expresivă</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Observație</div>
                <p>Versul liber nu înseamnă lipsă de organizare; muzicalitatea poate fi obținută prin repetiții, pauze și imagini poetice.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce reprezintă măsura unui vers?", solution: "Măsura reprezintă numărul de silabe dintr-un vers." },
                { level: "usor", text: "Ce este versul liber?", solution: "Versul liber este un tip de vers care nu respectă o măsură sau o rimă fixă, dar păstrează unitate expresivă." },
                { level: "mediu", text: "Numiți două tipuri de rimă.", solution: "Exemple: rimă împerecheată, încrucișată, îmbrățișată sau rimă albă." },
                { level: "mediu", text: "Explicați de ce versul liber nu înseamnă dezordine totală.", solution: "Chiar fără rimă și măsură fixă, versul liber poate avea ritm interior, repetiții, pauze și imagini care dau coerență și muzicalitate textului." },
                { level: "dificil", text: "Deosebiți rima albă de versul liber.", solution: "Rima albă înseamnă lipsa rimei, dar versurile pot păstra măsură și ritm regulate. Versul liber renunță mai larg la constrângerile tradiționale de măsură și ritm fix." },
                { level: "f-dificil", text: "Arătați cum analiza versificației poate sprijini interpretarea unui text poetic.", solution: "Structura versurilor, ritmul, rima și pauzele influențează tonul și atmosfera textului. O analiză bună arată cum forma susține sensul și emoția poeziei." }
              ])}
            </div>
          `
        },

        {
          id: "romanul",
          title: "Romanul",
          content: `
            <div class="content-block">
              <h4>📗 Romanul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Romanul este cea mai amplă specie a genului epic în proză, cu o acțiune complexă, desfășurată pe mai multe planuri narative, cu personaje numeroase și bine individualizate.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trăsătură</th><th>Nuvelă</th><th>Roman</th></tr></thead>
                <tbody>
                  <tr><td>Dimensiune</td><td>medie</td><td>amplă</td></tr>
                  <tr><td>Fire narative</td><td>una</td><td>mai multe</td></tr>
                  <tr><td>Personaje</td><td>puțin conturate</td><td>complexe, evoluează</td></tr>
                  <tr><td>Teme</td><td>concentrată</td><td>multiple, sociale, psihologice</td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Ce este romanul?", solution: "Romanul este o specie epică în proză de mare întindere, cu acțiune complexă, mai multe planuri narative și personaje numeroase." },
                { level: "usor", text: "Numiți o diferență între nuvelă și roman.", solution: "Romanul are de obicei o întindere mai mare și mai multe fire narative, pe când nuvela este mai concentrată." },
                { level: "mediu", text: "Explicați de ce personajele din roman sunt considerate mai complexe.", solution: "Pentru că ele evoluează, au trăsături mai nuanțate și sunt surprinse în situații diverse, pe parcursul unei acțiuni ample." },
                { level: "mediu", text: "Precizați două trăsături specifice romanului.", solution: "Două trăsături sunt amploarea acțiunii și existența mai multor planuri narative sau personaje bine individualizate." },
                { level: "dificil", text: "Arătați cum dimensiunea unui roman influențează construcția personajelor și a conflictelor.", solution: "Întinderea mare permite dezvoltarea mai multor conflicte, relații și etape de evoluție pentru personaje, ceea ce oferă profunzime narativă." },
                { level: "f-dificil", text: "Explicați de ce romanul poate integra teme sociale, psihologice și istorice mai ușor decât speciile epice scurte.", solution: "Pentru că dispune de spațiu narativ amplu. Acesta permite dezvoltarea simultană a mai multor perspective, contexte și conflicte, fără a reduce complexitatea personajelor." }
              ])}
            </div>
          `
        },

        {
          id: "opera-dramatica",
          title: "Opera dramatică. Comedia",
          content: `
            <div class="content-block">
              <h4>🎭 Opera dramatică</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Opera dramatică este destinată reprezentării scenice. Narațiunea lipsește; acțiunea se desfășoară prin <strong>dialog</strong> și <strong>didascalii</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Didascalii</td><td>indicații de regie (font italic): locul, gesturile, tonul</td></tr>
                  <tr><td>Act</td><td>diviziunea principală a piesei</td></tr>
                  <tr><td>Scenă / tablou</td><td>subdiviziune a actului</td></tr>
                  <tr><td>Conflict dramatic</td><td>opoziția dintre personaje sau forțe</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Comedia – I.L. Caragiale</div>
                <p>Comedia satirizează defecte umane și sociale, cu final fericit. Ex.: <em>O scrisoare pierdută</em> satirizează corupția și ipocrizia clasei politice.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Prin ce se caracterizează opera dramatică?", solution: "Opera dramatică este destinată reprezentării scenice și își construiește acțiunea prin dialog și didascalii." },
                { level: "usor", text: "Ce sunt didascaliile?", solution: "Didascaliile sunt indicații de regie care oferă informații despre decor, gesturi, mișcare scenică sau tonul personajelor." },
                { level: "mediu", text: "Explicați rolul conflictului dramatic într-o piesă de teatru.", solution: "Conflictul dramatic pune în mișcare acțiunea și organizează opoziția dintre personaje sau forțe, generând tensiune scenică." },
                { level: "mediu", text: "Precizați o trăsătură specifică comediei.", solution: "Comedia satirizează defecte umane sau sociale și urmărește, de regulă, stârnirea râsului, adesea având final favorabil." },
                { level: "dificil", text: "Deosebiți dialogul dramatic de narațiunea epică.", solution: "În textul dramatic, personajele se definesc direct prin replici și acțiune scenică, fără intervenția unui narator. În epic, faptele sunt prezentate și mediate de narator." },
                { level: "f-dificil", text: "Explicați cum realizează comedia critica socială fără a renunța la dimensiunea comică.", solution: "Comedia folosește situații ridicole, limbaj, caractere sau confuzii pentru a provoca râsul, dar în același timp scoate în evidență defecte ale indivizilor și ale societății." }
              ])}
            </div>
          `
        },

        {
          id: "alegoria-figuri",
          title: "Alegoria și figuri de stil (recapitulare)",
          content: `
            <div class="content-block">
              <h4>🔍 Alegoria</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Alegoria este o figură de stil extinsă (la nivel de text sau operă) prin care un plan concret sugerează un plan abstract, simbolic.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu</div>
                <p>Fabula este alegorică: <em>Lupul</em> = lacomia, <em>Mielul</em> = nevinovăția. Povestea concretă transmite o morală abstractă.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>✨ Recapitulare figuri de stil</h4>
              <table class="teoria-table">
                <thead><tr><th>Figură</th><th>Definiție scurtă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Epitetul</td><td>însușire expresivă</td><td><em>luna albă</em></td></tr>
                  <tr><td>Comparația</td><td>element de legătură (ca, precum)</td><td><em>alb ca zăpada</em></td></tr>
                  <tr><td>Personificarea</td><td>calități omenești la lucruri</td><td><em>vântul suspină</em></td></tr>
                  <tr><td>Metafora</td><td>comparație prescurtată</td><td><em>perle de rouă</em></td></tr>
                  <tr><td>Hiperbola</td><td>exagerare</td><td><em>munte de om</em></td></tr>
                  <tr><td>Antiteza</td><td>opoziție</td><td><em>unii râdeau, alții plângeau</em></td></tr>
                  <tr><td>Aliterația</td><td>repetare consoană</td><td><em>vântul viu vuia</em></td></tr>
                  <tr><td>Alegoria</td><td>plan concret = plan abstract</td><td>fabula</td></tr>
                </tbody>
              </table>
              ${exR8([
                { level: "usor", text: "Ce este alegoria?", solution: "Alegoria este o figură de stil extinsă prin care un plan concret trimite la un sens abstract sau simbolic." },
                { level: "usor", text: "Identificați figura de stil din expresia «vântul suspină».", solution: "Este o personificare, deoarece vântului i se atribuie o însușire sau o acțiune omenească." },
                { level: "mediu", text: "Explicați de ce fabula este considerată un text alegoric.", solution: "Pentru că personajele și întâmplările concrete transmit un sens abstract și o morală. Animalele sau obiectele reprezintă tipuri umane și comportamente." },
                { level: "mediu", text: "Dați un exemplu propriu de metaforă.", solution: "Exemplu: «Noaptea era o catifea adâncă.» Avem o comparație implicită, specifică metaforei." },
                { level: "dificil", text: "Deosebiți epitetul de metaforă într-o explicație scurtă.", solution: "Epitetul este un termen expresiv care atribuie o însușire unui substantiv, precum «luna albă». Metafora înlocuiește comparația explicită și transferă sensul, ca în «perle de rouă»." },
                { level: "f-dificil", text: "Explicați cum se poate construi o interpretare pornind de la două figuri de stil din același text.", solution: "Se identifică figurile, apoi se arată efectul lor comun asupra atmosferei, imaginii sau ideii poetice. De exemplu, o metaforă și un epitet pot susține aceeași viziune melancolică sau luminoasă asupra lumii." }
              ])}
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  4. COMUNICARE ȘI REDACTARE
    // ============================================================
    {
      id: "comunicare",
      title: "Comunicare și Redactare",
      subtitle: "Text argumentativ, comentare, conspect, text nonliterar și recapitulare pentru Evaluare",
      icon: "✍️",
      chapters: [

        {
          id: "textul-argumentativ",
          title: "Textul argumentativ",
          content: `
            <div class="content-block">
              <h4>💬 Textul argumentativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textul argumentativ este un text în care autorul susține o <strong>opinie</strong> (teză/ipoteză) prin <strong>argumente</strong> și <strong>exemple</strong>, cu scopul de a-l convinge pe cititor.</p>
              </div>
              <h5>Structura textului argumentativ</h5>
              <table class="teoria-table">
                <thead><tr><th>Parte</th><th>Conținut</th><th>Formulări tipice</th></tr></thead>
                <tbody>
                  <tr><td><strong>1. Ipoteza (teza)</strong></td><td>opinia susținută</td><td><em>Consider că... / În opinia mea...</em></td></tr>
                  <tr><td><strong>2. Argumentul 1</strong></td><td>primul motiv</td><td><em>Un prim argument este... / deoarece...</em></td></tr>
                  <tr><td><strong>3. Exemplul 1</strong></td><td>dovadă / ilustrare</td><td><em>De exemplu... / Astfel...</em></td></tr>
                  <tr><td><strong>4. Argumentul 2</strong></td><td>al doilea motiv</td><td><em>Un alt argument... / În plus...</em></td></tr>
                  <tr><td><strong>5. Exemplul 2</strong></td><td>dovadă</td><td><em>Spre exemplu... / Aceasta se vede în...</em></td></tr>
                  <tr><td><strong>6. Concluzia</strong></td><td>reafirmarea tezei</td><td><em>În concluzie... / Prin urmare... / Așadar...</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Conectori argumentativi</div>
                <p>Folosește conectori specifici: <em>deoarece, fiindcă, în consecință, prin urmare, în plus, de asemenea, cu toate acestea, totuși, în ciuda, în concluzie</em>.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce este textul argumentativ?", solution: "Textul argumentativ este un text în care autorul susține o opinie prin argumente și exemple pentru a convinge cititorul." },
                { level: "usor", text: "Numiți două părți ale unui text argumentativ.", solution: "Două părți esențiale sunt teza sau ipoteza și concluzia. Între ele apar argumentele și exemplele." },
                { level: "mediu", text: "Formulați o teză simplă despre importanța lecturii.", solution: "Exemplu: «Consider că lectura este importantă pentru dezvoltarea vocabularului și a imaginației.» Aceasta exprimă clar opinia de la care pornește argumentarea." },
                { level: "mediu", text: "Dați un exemplu de conector argumentativ și explicați rolul lui.", solution: "Exemplu: «deoarece» introduce un motiv sau o justificare. El leagă logic teza de argument." },
                { level: "dificil", text: "Deosebiți un argument de un exemplu într-o explicație scurtă.", solution: "Argumentul este ideea care susține teza, iar exemplul este dovada concretă care ilustrează argumentul. Un text bun le folosește împreună, nu le confundă." },
                { level: "f-dificil", text: "Explicați de ce ordinea logică a ideilor influențează forța de convingere a unui text argumentativ.", solution: "Dacă ideile sunt așezate clar, de la teză la argumente și concluzie, cititorul urmărește mai ușor raționamentul. O argumentare dezordonată slăbește efectul persuasiv, chiar dacă ideile sunt bune." }
              ])}
            </div>
          `
        },

        {
          id: "comentarea-textului",
          title: "Comentarea unui text la prima vedere",
          content: `
            <div class="content-block">
              <h4>🔍 Cum comentăm un text la prima vedere</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Comentarea unui text presupune <strong>identificarea și interpretarea</strong> elementelor de conținut (idei, teme, personaje) și de formă (figuri de stil, structură).</p>
              </div>
              <h5>Pași de analiză</h5>
              <ol>
                <li><strong>Lectură atentă</strong> — înțelegi despre ce e vorba.</li>
                <li><strong>Identificarea temei</strong> — care este ideea centrală?</li>
                <li><strong>Identificarea figurilor de stil</strong> — epitet, metaforă, personificare etc.</li>
                <li><strong>Modul de expunere</strong> — narațiune, descriere, dialog?</li>
                <li><strong>Opinia personală</strong> — motivată cu citate din text.</li>
              </ol>
              ${exR8([
                { level: "usor", text: "Care este primul pas în comentarea unui text la prima vedere?", solution: "Primul pas este lectura atentă a textului, pentru a înțelege conținutul și sensul general." },
                { level: "usor", text: "Ce trebuie identificat după lectura atentă?", solution: "Trebuie identificată tema sau ideea centrală a textului." },
                { level: "mediu", text: "Explicați de ce citatele sunt utile într-un comentariu.", solution: "Citatele susțin interpretarea și arată că observațiile elevului se bazează pe text, nu pe impresii fără sprijin." },
                { level: "mediu", text: "Precizați două elemente de formă care pot fi analizate într-un text literar.", solution: "Se pot analiza figurile de stil și modul de expunere. În funcție de cerință, se pot adăuga structura sau limbajul artistic." },
                { level: "dificil", text: "Deosebiți rezumatul de comentariu.", solution: "Rezumatul redă pe scurt conținutul textului. Comentariul presupune interpretare, explicarea temei, a mijloacelor artistice și a efectelor acestora." },
                { level: "f-dificil", text: "Explicați de ce un comentariu bun trebuie să combine observația asupra conținutului cu analiza expresiei artistice.", solution: "În literatură, sensul și forma se susțin reciproc. O interpretare completă arată nu doar ce spune textul, ci și cum transmite acest sens prin limbaj și structură." }
              ])}
            </div>
          `
        },

        {
          id: "conspectul",
          title: "Conspectul. Extragerea ideilor esențiale",
          content: `
            <div class="content-block">
              <h4>🗂️ Conspectul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Conspectul este o formă scurtă și clară de notare a ideilor principale dintr-un text, lecție sau discurs.</p>
              </div>
              <h5>Pași practici</h5>
              <ol>
                <li>Citește integral textul.</li>
                <li>Identifică ideea principală a fiecărui paragraf.</li>
                <li>Notează ideile în enunțuri scurte sau puncte-cheie.</li>
                <li>Elimină detaliile secundare și repetițiile.</li>
              </ol>
              <div class="exemplu">
                <div class="exemplu-label">Model simplu</div>
                <p><strong>Tema:</strong> Importanța lecturii</p>
                <p>1) Lectura dezvoltă vocabularul. 2) Îmbunătățește exprimarea. 3) Stimulează imaginația.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce este conspectul?", solution: "Conspectul este o formă scurtă și clară de notare a ideilor principale dintr-un text sau dintr-o lecție." },
                { level: "usor", text: "Ce trebuie eliminat dintr-un conspect?", solution: "Trebuie eliminate detaliile secundare, repetițiile și informațiile mai puțin importante." },
                { level: "mediu", text: "Explicați de ce ideile dintr-un conspect trebuie formulate scurt și clar.", solution: "Scopul conspectului este reținerea rapidă a esențialului. Formulările scurte ajută la recapitulare și organizare eficientă." },
                { level: "mediu", text: "Realizați un conspect de două puncte pentru un text despre sport și sănătate.", solution: "Exemplu: 1. Sportul menține sănătatea fizică. 2. Activitatea fizică reduce stresul și îmbunătățește starea generală." },
                { level: "dificil", text: "Deosebiți conspectul de rezumat.", solution: "Rezumatul este redactat în propoziții legate, urmărind firul textului. Conspectul organizează ideile esențiale schematic, pe puncte sau enunțuri scurte." },
                { level: "f-dificil", text: "Explicați cum poate conspectul să sprijine învățarea pentru examen.", solution: "Conspectul ajută la selectarea informațiilor esențiale, la organizarea logică a materiei și la reluarea rapidă a conținuturilor înaintea examenului." }
              ])}
            </div>
          `
        },

        {
          id: "cronica-film-spectacol",
          title: "Cronica de film și cronica de spectacol",
          content: `
            <div class="content-block">
              <h4>🎬 Cronica (de film / de spectacol)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VIII)</div>
                <p>Cronica este un text nonliterar care <strong>comentează și evaluează</strong> un eveniment cultural de actualitate (premiera unui film, a unui spectacol de teatru, lansarea unui album muzical etc.). Îmbină <strong>informarea</strong> cu <strong>aprecierea critică</strong> a autorului.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Subiect</th><th>Publicat în</th></tr></thead>
                <tbody>
                  <tr><td>Cronică de spectacol</td><td>piese de teatru, spectacole de dans, concerte</td><td>reviste de teatru, ziare, bloguri culturale</td></tr>
                  <tr><td>Cronică de film</td><td>filme artistice, documentare</td><td>reviste de film, ziare, platforme online</td></tr>
                </tbody>
              </table>
              <h5>Structura unei cronici</h5>
              <table class="teoria-table">
                <thead><tr><th>Parte</th><th>Conținut</th></tr></thead>
                <tbody>
                  <tr><td><strong>1. Prezentare</strong></td><td>titlul operei, autorul/regizorul, distribuția principală, contextul (premiere, turnee)</td></tr>
                  <tr><td><strong>2. Rezumat selectiv</strong></td><td>prezentarea subiectului fără a dezvălui finalul (spoiler)</td></tr>
                  <tr><td><strong>3. Analiza și aprecierea</strong></td><td>comentarea scenelor, jocului actorilor, decorului, coloana sonoră, regia; puncte tari și slabe</td></tr>
                  <tr><td><strong>4. Concluzia / Recomandarea</strong></td><td>opinia globală a cronicarului, publicul căruia i se adresează</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – cronica „Omenescul personajelor" de Ștefan Aug. Doinaș (revistaNTeatru", 1956)</div>
                <p>Obiect: piesa <em>Take, Ianke și Cadâr</em> de Victor Ion Popa, la Teatrul de Stat din Pitești.</p>
                <p>Conținut: analiza regiei lui Ion Olteanu, organizarea celor trei acte ca „planuri în adâncime", rolul decorului în revelarea personajelor.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Limbajul cronicii</div>
                <p>• Tonul este <strong>obiectiv-evaluativ</strong> (nu pur subiectiv).</p>
                <p>• Se folosesc termeni de specialitate: <em>regie, distribuție, scenografie, montare, subiect, conflict, personaj</em> etc.</p>
                <p>• Autorul îmbină faptele (informații verificabile) cu opinia motivată.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Ce este cronica de film sau de spectacol?", solution: "Este un text nonliterar care informează și evaluează un eveniment cultural, precum un film sau un spectacol." },
                { level: "usor", text: "Numiți o parte a structurii unei cronici.", solution: "O parte a structurii este prezentarea operei. Alte părți pot fi rezumatul selectiv, analiza și concluzia." },
                { level: "mediu", text: "Explicați de ce într-o cronică nu este recomandat să fie dezvăluit finalul operei.", solution: "Pentru că un rezumat selectiv trebuie să informeze fără a strica experiența receptorului. Dezvăluirea finalului poate diminua interesul publicului." },
                { level: "mediu", text: "Precizați două aspecte care pot fi evaluate într-o cronică de spectacol.", solution: "Se pot evalua jocul actorilor, regia, decorul, scenografia, muzica sau modul în care este construit conflictul." },
                { level: "dificil", text: "Deosebiți cronica de simpla recomandare personală.", solution: "Cronica combină informația verificabilă cu evaluarea argumentată și folosește un ton obiectiv-evaluativ. O recomandare personală poate fi mai scurtă și mai subiectivă." },
                { level: "f-dificil", text: "Explicați cum se menține echilibrul dintre obiectivitate și opinie într-o cronică bună.", solution: "Autorul pornește de la date concrete despre operă și susține aprecierile prin observații clare asupra interpretării, construcției sau limbajului artistic. Opinia există, dar este motivată." }
              ])}
            </div>
          `
        },

        {
          id: "anunt-si-stire",
          title: "Text nonliterar: anunțul și știrea",
          content: `
            <div class="content-block">
              <h4>📰 Anunț și știre</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Scop</th><th>Elemente obligatorii</th></tr></thead>
                <tbody>
                  <tr><td>Anunț</td><td>informare rapidă și practică</td><td>cine, ce, când, unde, date de contact</td></tr>
                  <tr><td>Știre</td><td>relatarea obiectivă a unui fapt</td><td>titlu, lead, detalii esențiale, sursă</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Diferențe</div>
                <p>Anunțul este concis și utilitar. Știrea cere obiectivitate, claritate și ordonarea informației după importanță.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Care este scopul unui anunț?", solution: "Scopul anunțului este informarea rapidă și practică a publicului despre un eveniment, un obiect, o activitate sau o cerință." },
                { level: "usor", text: "Ce element este obligatoriu într-o știre?", solution: "Un element obligatoriu este titlul sau informația esențială despre cine, ce, când și unde." },
                { level: "mediu", text: "Explicați diferența dintre anunț și știre.", solution: "Anunțul este scurt, utilitar și urmărește transmiterea rapidă a unor informații practice. Știrea relatează obiectiv un fapt și dezvoltă informația în mod organizat." },
                { level: "mediu", text: "Redactați un anunț scurt pentru o ședință cu părinții.", solution: "Exemplu: «Anunț: Marți, 24 septembrie, la ora 18:00, va avea loc ședința cu părinții în sala clasei a VIII-a B. Pentru detalii, contactați dirigintele.»" },
                { level: "dificil", text: "Arătați de ce obiectivitatea este esențială într-o știre.", solution: "Știrea trebuie să informeze corect și echilibrat, fără deformarea faptelor prin opinii personale. Cititorul trebuie să distingă clar între informație și comentariu." },
                { level: "f-dificil", text: "Explicați cum ordonarea informației după importanță ajută eficiența unei știri.", solution: "Datele esențiale trebuie să apară primele, pentru ca cititorul să înțeleagă imediat evenimentul. Detaliile suplimentare completează ulterior contextul, fără a întârzia mesajul principal." }
              ])}
            </div>
          `
        },

        {
          id: "structura-evaluare",
          title: "Structura Evaluării Naționale. Sfaturi",
          content: `
            <div class="content-block">
              <h4>📋 Structura examenului</h4>
              <p>Evaluarea Națională la Română are <strong>trei subiecte</strong>:</p>
              <table class="teoria-table">
                <thead><tr><th>Subiect</th><th>Ce se testează</th><th>Punctaj</th></tr></thead>
                <tbody>
                  <tr><td><strong>I</strong></td><td>Citirea unui text literar sau nonliterar + întrebări de înțelegere, vocabular, morfologie, sintaxă</td><td>~30p</td></tr>
                  <tr><td><strong>II</strong></td><td>Text literar cu cerințe de analiză (figuri de stil, structură, caracterizare) sau gramatică</td><td>~30p</td></tr>
                  <tr><td><strong>III</strong></td><td>Redactare: eseu, text argumentativ, caracterizare de personaj sau descriere</td><td>~30p</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Sfaturi esențiale</div>
                <p>• Citește toate textele de <strong>două ori</strong> înainte de a răspunde.</p>
                <p>• La <strong>redactare</strong>: respectă structura (introducere, cuprins, concluzie) și cerința dată.</p>
                <p>• Verifică <strong>ortografia și punctuația</strong> la final.</p>
                <p>• La <strong>sintaxă</strong>: pune întrebările pentru a identifica funcția sintactică și tipul subordonatei.</p>
              </div>
              ${exR8([
                { level: "usor", text: "Câte subiecte are, în linii mari, Evaluarea Națională la Limba și literatura română?", solution: "În această prezentare, examenul este structurat în trei subiecte mari: înțelegerea textului, analiză literară sau gramaticală și redactare." },
                { level: "usor", text: "Ce trebuie verificat la finalul lucrării?", solution: "Trebuie verificate ortografia, punctuația și, în general, claritatea formulărilor." },
                { level: "mediu", text: "Explicați de ce este util să citești textul de două ori înainte de a răspunde.", solution: "Prima lectură oferă înțelegerea globală, iar a doua ajută la observarea detaliilor importante pentru cerințe, vocabular și interpretare." },
                { level: "mediu", text: "Formulați un sfat practic pentru rezolvarea cerințelor de sintaxă.", solution: "Exemplu: «Pornește de la întrebările potrivite și stabilește mai întâi termenul regent, apoi funcția sau tipul subordonatei.»" },
                { level: "dificil", text: "Arătați de ce gestionarea timpului este importantă într-un examen cu cerințe diferite.", solution: "Pentru că elevul trebuie să împartă timpul între citire, rezolvarea itemilor și redactare. Dacă acordă prea mult timp unei singure părți, riscă să trateze superficial restul lucrării." },
                { level: "f-dificil", text: "Explicați cum poate fi construită o strategie de recapitulare folosind structura examenului.", solution: "Recapitularea poate fi organizată pe competențe: înțelegerea textului, gramatică, vocabular, analiză literară și redactare. Astfel, elevul repetă țintit exact tipurile de sarcini pe care le va întâlni în examen." }
              ])}
            </div>
          `
        }
      ]
    }

  ]
};
