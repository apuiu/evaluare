// ============================================================
//  ROMÂNĂ - CLASA A 8-A
//  Teorie completă conform programei școlare românești
//  Focus: Sintaxa frazei (subordonatele), recapitulare evaluare
// ============================================================

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
            </div>
          `
        }
      ]
    }

  ]
};
