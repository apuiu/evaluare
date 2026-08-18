// ============================================================
//  ROMÂNĂ - CLASA A 6-A
//  Teorie completă conform programei școlare românești
//  (materia de clasa a VII-a este tratată separat)
// ============================================================

const romana6Data = {
  title: "Română – Clasa a VI-a",
  subtitle: "Teorie completă pentru Evaluarea Națională",
  subject: "romana",
  grade: 6,
  sections: [

    // ============================================================
    //  1. VOCABULAR (LEXICUL)
    // ============================================================
    {
      id: "vocabular",
      title: "Vocabular",
      subtitle: "Mijloace interne de îmbogățire, derivare, compunere, conversiune, omonime, arhaisme",
      icon: "📚",
      chapters: [

        {
          id: "mijloace-interne",
          title: "Mijloacele interne de îmbogățire a vocabularului",
          content: `
            <div class="content-block">
              <h4>🧩 Ce sunt mijloacele interne?</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Mijloacele interne de îmbogățire a vocabularului sunt procedeele prin care se formează cuvinte noi <strong>folosind materialul limbii române</strong> (cuvinte, prefixe, sufixe deja existente).</p>
              </div>
              <p>Există <strong>trei mijloace interne</strong> principale:</p>
              <table class="teoria-table">
                <thead><tr><th>Mijloc</th><th>Cum se formează cuvântul</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Derivarea</strong></td><td>cuvânt de bază + prefix și/sau sufix</td><td><em>floare → floricică, înflori</em></td></tr>
                  <tr><td><strong>Compunerea</strong></td><td>unirea a două sau mai multe cuvinte</td><td><em>floarea-soarelui, untdelemn</em></td></tr>
                  <tr><td><strong>Conversiunea</strong></td><td>schimbarea clasei gramaticale (fără prefix/sufix)</td><td><em>verde (adj.) → verdele (subst.)</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Mijloacele <strong>interne</strong> folosesc materialul limbii române. Împrumuturile din alte limbi (neologismele) sunt un mijloc <strong>extern</strong> și se studiază în clasa a VII-a.</p>
              </div>
            </div>
          `
        },

        {
          id: "derivare-sufixare",
          title: "Derivarea. Sufixarea",
          content: `
            <div class="content-block">
              <h4>🌱 Derivarea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Derivarea este mijlocul de îmbogățire a vocabularului prin care se formează cuvinte noi cu ajutorul <strong>sufixelor</strong> și al <strong>prefixelor</strong>, adăugate la un cuvânt de bază (radical).</p>
              </div>
              <p>Cuvântul nou format se numește <strong>cuvânt derivat</strong>.</p>
              <div class="exemplu">
                <div class="exemplu-label">Structura unui cuvânt derivat</div>
                <p>• <em>ne + cinstit</em> → <strong>necinstit</strong> (prefix + rădăcină)</p>
                <p>• <em>flor + ar</em> → <strong>florar</strong> (rădăcină + sufix)</p>
                <p>• <em>ne + îngrijit</em> → <strong>neîngrijit</strong></p>
              </div>
            </div>

            <div class="content-block">
              <h4>➕ Sufixarea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Sufixul este sunetul sau grupul de sunete adăugat <strong>după rădăcină</strong> pentru a forma un cuvânt nou.</p>
              </div>
              <h5>Sufixe diminutivale</h5>
              <p>Formează cuvinte care arată obiecte <strong>mai mici</strong> sau exprimă alintare, gingășie.</p>
              <table class="teoria-table">
                <thead><tr><th>Sufix</th><th>Cuvânt de bază → derivat</th></tr></thead>
                <tbody>
                  <tr><td>-aș</td><td>copil → copil<strong>aș</strong>; fluture → flutur<strong>aș</strong></td></tr>
                  <tr><td>-uț / -uță</td><td>pat → păt<strong>uț</strong>; casă → căs<strong>uță</strong></td></tr>
                  <tr><td>-el</td><td>băiat → băieț<strong>el</strong>; deget → deget<strong>el</strong></td></tr>
                  <tr><td>-iță</td><td>fată → fet<strong>iță</strong>; poartă → port<strong>iță</strong></td></tr>
                  <tr><td>-uș / -uleț</td><td>cățel → cățel<strong>uș</strong>; urs → urs<strong>uleț</strong></td></tr>
                  <tr><td>-ică / - uliță</td><td>floare → flor<strong>icică</strong>; frunză → frunz<strong>uliță</strong></td></tr>
                </tbody>
              </table>
              <h5>Sufixe augmentative</h5>
              <p>Formează cuvinte care arată obiecte <strong>mai mari</strong> decât cele obișnuite.</p>
              <table class="teoria-table">
                <thead><tr><th>Sufix</th><th>Cuvânt de bază → derivat</th></tr></thead>
                <tbody>
                  <tr><td>-oi</td><td>casă → căs<strong>oi</strong>; băiat → băiet<strong>oi</strong></td></tr>
                  <tr><td>-an</td><td>gras → grăs<strong>an</strong>; lung → lung<strong>an</strong></td></tr>
                  <tr><td>-andru</td><td>copil → copil<strong>andru</strong>; băiat → băieț<strong>andru</strong></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Nu orice cuvânt care se termină în <em>-el</em> sau <em>-oi</em> este derivat! De exemplu, <em>purcel</em> sau <em>cuptor</em> nu conțin sufixe diminutivale/augmentative – sunt cuvinte de bază.</p>
              </div>
            </div>
          `
        },

        {
          id: "prefixare",
          title: "Prefixarea",
          content: `
            <div class="content-block">
              <h4>➖ Prefixarea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Prefixul este sunetul sau grupul de sunete adăugat <strong>înaintea rădăcinii</strong> pentru a forma un cuvânt nou.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Prefix</th><th>Sens</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>ne-</strong></td><td>negație</td><td>necinstit, nefericit, neatent</td></tr>
                  <tr><td><strong>re-</strong></td><td>repetare</td><td>reciti, revedea, reface</td></tr>
                  <tr><td><strong>pre-</strong></td><td>dinainte</td><td>prevedea, preface, prezice</td></tr>
                  <tr><td><strong>stră-</strong></td><td>vechime / traversare</td><td>străbunic, străbate, străvechi</td></tr>
                  <tr><td><strong>des- / dez-</strong></td><td>acțiune contrară</td><td>desface, dezlega, dezgropa</td></tr>
                  <tr><td><strong>în- / îm-</strong></td><td>transformare</td><td>înnegri, împăduri, îmbogăți</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Ortografie – dublarea lui „n”</div>
                <p>Când prefixul <strong>în-</strong> se adaugă la un cuvânt care începe cu <strong>n</strong>, se scriu <strong>doi n</strong>:</p>
                <p>• <em>în + negru</em> → a î<strong>nn</strong>egri</p>
                <p>• <em>în + noapte</em> → a î<strong>nn</strong>opta</p>
                <p>• <em>în + nod</em> → a î<strong>nn</strong>oda</p>
                <p>• <em>în + nor</em> → a se î<strong>nn</strong>ora</p>
              </div>
            </div>
          `
        },

        {
          id: "compunere",
          title: "Compunerea",
          content: `
            <div class="content-block">
              <h4>🔗 Compunerea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Compunerea este mijlocul de îmbogățire a vocabularului prin care se formează cuvinte noi din <strong>două sau mai multe cuvinte</strong> existente.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de compunere</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Prin alăturare</strong></td>
                    <td>cuvintele își păstrează forma (adesea cu cratimă)</td>
                    <td>câine-lup, prim-ministru, Ștefan cel Mare, nord-est</td>
                  </tr>
                  <tr>
                    <td><strong>Prin subordonare</strong> (contopire)</td>
                    <td>cuvintele se contopesc într-unul singur</td>
                    <td>bunăvoință, untdelemn, botgros, primăvară</td>
                  </tr>
                  <tr>
                    <td><strong>Prin abreviere</strong></td>
                    <td>se folosesc inițiale sau fragmente de cuvinte</td>
                    <td>O.N.U., C.F.R., R.A.T.B., prof., aprox.</td>
                  </tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple analizate</div>
                <p>• <em>floarea-soarelui</em> = floare + soare (alăturare cu cratimă)</p>
                <p>• <em>bunăvoință</em> = bună + voință (contopire)</p>
                <p>• <em>S.R.L.</em> = Societate cu Răspundere Limitată (abreviere)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Cuvintele compuse se comportă ca un <strong>singur cuvânt</strong> și au un singur sens global. <em>Floarea-soarelui</em> nu înseamnă „floarea care aparține soarelui”, ci denumește o anumită plantă.</p>
              </div>
            </div>
          `
        },

        {
          id: "conversiune",
          title: "Schimbarea valorii gramaticale (conversiunea)",
          content: `
            <div class="content-block">
              <h4>🔄 Conversiunea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Conversiunea (schimbarea valorii gramaticale) este mijlocul intern prin care se formează cuvinte noi prin <strong>trecerea unui cuvânt de la o parte de vorbire la alta</strong>, fără să i se schimbe forma.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trecere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>adjectiv → substantiv</td><td><em><u>Leneșul</u> mai mult aleargă.</em> (leneș = adj. → subst.)</td></tr>
                  <tr><td>adjectiv → substantiv</td><td><em><u>Binele</u> învinge întotdeauna.</em></td></tr>
                  <tr><td>verb la participiu → adjectiv</td><td><em>un soldat <u>rănit</u>; o temă <u>scrisă</u></em></td></tr>
                  <tr><td>adjectiv → adverb</td><td><em>Cântă <u>frumos</u>. Aleargă <u>repede</u>.</em></td></tr>
                  <tr><td>verb → substantiv (supin/infinitiv)</td><td><em><u>Cititul</u> cărților; <u>mersul</u> pe jos</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Cum recunoaștem conversiunea</div>
                <p>• <em>Elevul <strong>harnic</strong> învață.</em> → <strong>harnic</strong> = adjectiv (determină substantivul „elevul”)</p>
                <p>• <em><strong>Harnicul</strong> este apreciat.</em> → <strong>harnicul</strong> = substantiv (are articol, este subiect)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>La conversiune, forma cuvântului <strong>nu se schimbă</strong> – se schimbă doar rolul lui în propoziție. Adjectivul devine substantiv mai ales când primește articol: <em>bun → bunul</em>, <em>frumos → frumosul</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "familia-lexicala",
          title: "Familia lexicală",
          content: `
            <div class="content-block">
              <h4>🌳 Familia lexicală</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Familia lexicală (familia de cuvinte) cuprinde <strong>toate cuvintele obținute de la un cuvânt de bază</strong> prin derivare, compunere și conversiune. Aceste cuvinte au același radical și înțeles înrudit.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Familia cuvântului „pădure”</div>
                <p>pădur<strong>ar</strong>, pădur<strong>ice</strong>, pădur<strong>eț</strong>, îm<strong>pădur</strong>i, des<strong>pădur</strong>i, îm<strong>pădur</strong>ire</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Familia cuvântului „a învăța”</div>
                <p>învăț<strong>at</strong>, învăț<strong>ător</strong>, învăț<strong>ătură</strong>, învăț<strong>ământ</strong>, ne<strong>învăț</strong>at, învăț<strong>ăcel</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th></th><th>Familia lexicală</th><th>Câmpul lexical</th></tr></thead>
                <tbody>
                  <tr><td>Criteriu</td><td>același radical</td><td>aceeași temă / domeniu</td></tr>
                  <tr><td>Exemplu</td><td>floare, floricică, florar, înflori</td><td>floare, petală, tulpină, parfum, buchet</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Cuvintele împrumutate din alte limbi <strong>nu fac parte</strong> din familia lexicală românească. De exemplu, <em>floral</em> (din franceză) nu intră în familia lui <em>floare</em>, chiar dacă au înțeles apropiat.</p>
              </div>
            </div>
          `
        },

        {
          id: "campuri-lexico-semantice",
          title: "Câmpurile lexico-semantice",
          content: `
            <div class="content-block">
              <h4>🗂️ Câmpul lexico-semantic</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Câmpul lexico-semantic (câmpul lexical) cuprinde <strong>toate cuvintele care se referă la același domeniu</strong> al realității sau la aceeași noțiune, indiferent din ce familie provin.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Câmp lexical</th><th>Cuvinte incluse</th></tr></thead>
                <tbody>
                  <tr><td>Școala</td><td>elev, profesor, catalog, notă, lecție, tablă, caiet, recreație</td></tr>
                  <tr><td>Culorile</td><td>roșu, galben, verde, albastru, alb, negru, portocaliu</td></tr>
                  <tr><td>Apa</td><td>râu, fluviu, lac, mare, ocean, izvor, baltă, cascadă</td></tr>
                  <tr><td>Anotimpurile</td><td>primăvară, vară, toamnă, iarnă, ninsoare, zăpadă, muguri</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Familie vs. câmp lexical</div>
                <p><strong>Familia lexicală</strong> = același radical (floare, floricică, florar).<br>
                <strong>Câmpul lexical</strong> = aceeași temă, radicale diferite (floare, petală, tulpină, buchet).</p>
              </div>
            </div>
          `
        },

        {
          id: "sinonime-antonime",
          title: "Sinonime și antonime (aprofundare)",
          content: `
            <div class="content-block">
              <h4>🔄 Sinonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Sinonimele sunt cuvinte cu <strong>formă diferită</strong> și <strong>sens asemănător sau identic</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Sinonime</th></tr></thead>
                <tbody>
                  <tr><td>a birui</td><td>a învinge, a înfrânge, a triumfa</td></tr>
                  <tr><td>arătos</td><td>frumos, chipeș, atrăgător</td></tr>
                  <tr><td>a se avânta</td><td>a se năpusti, a se repezi, a se arunca</td></tr>
                  <tr><td>rapid</td><td>iute, prompt, grabnic, fulgerător</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>↔️ Antonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Antonimele sunt cuvinte cu <strong>sens opus</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Antonim</th></tr></thead>
                <tbody>
                  <tr><td>harnic</td><td>leneș</td></tr>
                  <tr><td>a urca</td><td>a coborî</td></tr>
                  <tr><td>victorie</td><td>înfrângere</td></tr>
                  <tr><td>bucurie</td><td>tristețe</td></tr>
                  <tr><td>luminos</td><td>întunecos</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "omonime-omofone-omografe",
          title: "Omonimele. Omofone și omografe",
          content: `
            <div class="content-block">
              <h4>🔤 Omonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Omonimele sunt cuvinte cu <strong>formă identică</strong>, dar cu <strong>sens complet diferit</strong>, fără legătură între ele.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Sens 1</th><th>Sens 2</th></tr></thead>
                <tbody>
                  <tr><td><strong>broască</strong></td><td>animal (batracian)</td><td>mecanism de încuiat ușa</td></tr>
                  <tr><td><strong>leu</strong></td><td>animal sălbatic</td><td>monedă (unitate de bani)</td></tr>
                  <tr><td><strong>mină</strong></td><td>expresie a feței</td><td>galerie subterană / de creion</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔊 Omofonele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Omofonele se <strong>pronunță la fel</strong>, dar se <strong>scriu diferit</strong> și au sensuri diferite.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Scris legat</th><th>Scris cu cratimă</th></tr></thead>
                <tbody>
                  <tr><td><strong>sau</strong> (conjuncție: ori)</td><td><strong>s-au</strong> (s-au dus)</td></tr>
                  <tr><td><strong>iau</strong> (verb: eu iau)</td><td><strong>i-au</strong> (i-au spus)</td></tr>
                  <tr><td><strong>neam</strong> (rudă, familie)</td><td><strong>ne-am</strong> (ne-am jucat)</td></tr>
                  <tr><td><strong>nai</strong> (instrument muzical)</td><td><strong>n-ai</strong> (n-ai venit)</td></tr>
                  <tr><td><strong>la</strong> (prepoziție)</td><td><strong>l-a</strong> (l-a văzut)</td></tr>
                  <tr><td><strong>cel</strong> (articol/pronume)</td><td><strong>ce-l</strong> (ce-l doare?)</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>✍️ Omografele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Omografele se <strong>scriu la fel</strong>, dar se <strong>pronunță diferit</strong> (prin schimbarea accentului) și au sensuri diferite.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Formă scrisă</th><th>Sens 1 (accent)</th><th>Sens 2 (accent)</th></tr></thead>
                <tbody>
                  <tr><td><strong>copii</strong></td><td><em>cópii</em> (plural de copil)</td><td><em>copíi</em> (plural de copie)</td></tr>
                  <tr><td><strong>veselă</strong></td><td><em>véselă</em> (adjectiv: bucuroasă)</td><td><em>vesélă</em> (substantiv: vase)</td></tr>
                  <tr><td><strong>mobilă</strong></td><td><em>móbilă</em> (piesă de mobilier)</td><td><em>mobílă</em> (adjectiv: care se mișcă)</td></tr>
                  <tr><td><strong>acele</strong></td><td><em>ácele</em> (adjectiv: acele flori)</td><td><em>acéle</em> (plural de ac)</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "arhaisme-regionalisme",
          title: "Arhaismele și regionalismele",
          content: `
            <div class="content-block">
              <h4>🏛️ Arhaismele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Arhaismele sunt cuvinte, forme sau sensuri <strong>ieșite din uz</strong>, care nu se mai folosesc în limba actuală. Ele apar mai ales în textele istorice și în operele literare care evocă trecutul.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de arhaism</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Lexicale (cuvântul a dispărut)</td><td>logofăt, vornic, postelnic, spătar, hatman, iatac</td></tr>
                  <tr><td>Fonetice (forma veche)</td><td>a lăcui (a locui), pre (pe), inemă (inimă)</td></tr>
                  <tr><td>Gramaticale (forma veche)</td><td>„aceste vorbe” (fără articol), „mă rog dumitale”</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🗺️ Regionalismele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Regionalismele sunt cuvinte sau forme folosite <strong>numai într-o anumită regiune</strong> a țării, nu în toată limba română.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Regionalism</th><th>Cuvânt literar</th><th>Regiunea</th></tr></thead>
                <tbody>
                  <tr><td>curechi</td><td>varză</td><td>Moldova</td></tr>
                  <tr><td>păpușoi / cucuruz</td><td>porumb</td><td>Moldova / Ardeal</td></tr>
                  <tr><td>barabule / crumpene</td><td>cartofi</td><td>Moldova / Ardeal</td></tr>
                  <tr><td>lubeniță</td><td>pepene verde</td><td>Moldova</td></tr>
                  <tr><td>prunc</td><td>copil</td><td>Ardeal</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Regionalismele nu sunt greșeli, ci variante folosite local. În exprimarea literară (oficială) se folosesc cuvintele din limba standard.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  2. FONETICĂ (ACTUALIZARE)
    // ============================================================
    {
      id: "fonetica",
      title: "Fonetică",
      subtitle: "Diftong, triftong, hiat, despărțirea în silabe, cratimă și apostrof",
      icon: "🔤",
      chapters: [

        {
          id: "diftong-triftong-hiat-6",
          title: "Diftongul, triftongul, hiatul",
          content: `
            <div class="content-block">
              <h4>🔀 Diftongul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Diftongul este grupul de sunete alcătuit dintr-o <strong>vocală și o semivocală</strong>, pronunțate în aceeași silabă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Structură</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Urcător (ascendent)</strong></td><td>semivocală + vocală</td><td><em>floa-re</em> [oa], <em>pia-ță</em> [ia], <em>gea-m</em></td></tr>
                  <tr><td><strong>Coborâtor (descendent)</strong></td><td>vocală + semivocală</td><td><em>mâi-ne</em> [âi], <em>cai</em> [ai], <em>nor-oi</em> [oi]</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție (din manual)</div>
                <p>Grupurile <em>ce, ci, ge, gi, che, chi, ghe, ghi</em> aflate înaintea unei vocale <strong>nu formează diftongi</strong>. Ex.: în <em>ceas</em> există consoana [č] + vocala [a], nu diftong.</p>
                <p>Formele verbului <em>a fi</em> (<em>este, e, eram</em>) și pronumele personale <em>el, ele</em> se pronunță cu diftongul [ĭe] la inițială.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔀🔀 Triftongul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Triftongul este grupul de sunete alcătuit dintr-o <strong>vocală și două semivocale</strong>, pronunțate în aceeași silabă.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p>• <em>cre-ioa-ne</em> → silaba <em>ioa</em> = semivocală [ĭ] + vocală [o] + semivocală [a] → triftong</p>
                <p>• <em>eu</em> → se pronunță [ĭeŭ] → triftong</p>
                <p>• <em>ei</em> → se pronunță [ĭeĭ] → triftong</p>
                <p>• <em>ne-au</em> (ne-au adus) → [eaŭ] → triftong când sunt pronunțate împreună</p>
                <p>• <em>mi-a</em> (mi-a adus) → [ia] → diftong când sunt pronunțate împreună</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Metodă de identificare (manual)</div>
                <p>Pentru identificarea diftongilor și triftongilor este necesară <strong>despărțirea în silabe</strong> a cuvintelor. Uneori, în aceeași silabă intră cuvinte diferite legate prin cratimă.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>↔️ Hiatul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Hiatul apare între <strong>două vocale alăturate</strong> ale aceluiași cuvânt, pronunțate în <strong>silabe diferite</strong>.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p>• <em>ca-i-să</em> → vocala [a] și vocala [i] în silabe diferite → hiat</p>
                <p>• <em>a-ri-e, câm-pi-e, fi-in-ță, fo-li-e, po-et, ra-di-o</em> → hiat</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th></th><th>Diftong</th><th>Hiat</th></tr></thead>
                <tbody>
                  <tr><td>Definiție</td><td>vocală + semivocală în <strong>aceeași silabă</strong></td><td>două vocale în <strong>silabe diferite</strong></td></tr>
                  <tr><td>La despărțire</td><td>NU se despart</td><td>DA, se despart</td></tr>
                  <tr><td>Exemplu</td><td><em>floa-re</em> (oa = diftong)</td><td><em>po-et</em> (o-e = hiat)</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exerciții tip din manual – clasificare</div>
                <p>Cuvinte cu diftong: <em>cai, fier, gutui, leac, moară, noroi, pâine, piață, râu</em></p>
                <p>Cuvinte cu triftong: <em>leoarcă, maiou, vreau, creioane, leoaică, tigroaică</em></p>
                <p>Cuvinte cu hiat: <em>arie, câmpie, ființă, folie, liliac, poet, radio, real</em></p>
              </div>
            </div>
          `
        },

        {
          id: "despartire-silabe",
          title: "Regulile de despărțire în silabe",
          content: `
            <div class="content-block">
              <h4>✂️ Recapitulare – despărțirea în silabe</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Silaba este sunetul sau grupul de sunete rostit printr-un singur efort expirator. Fiecare silabă conține <strong>obligatoriu o vocală</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Situație</th><th>Regulă</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>O consoană între vocale</td><td>trece la silaba următoare</td><td>ca-să, ma-re, pă-du-re</td></tr>
                  <tr><td>Două consoane între vocale</td><td>prima rămâne, a doua trece</td><td>car-te, cal-cul, sân-ge</td></tr>
                  <tr><td>Grupurile bl, cl, br, cr, dr, tr...</td><td>NU se despart</td><td>a-flu-ent, co-dru, a-proa-pe</td></tr>
                  <tr><td>Trei consoane</td><td>prima rămâne, restul trec</td><td>con-struc-ție, jert-fă, mon-stru</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Cazuri dificile</div>
                <p>• <em>punct</em> → <strong>punct</strong> (o singură silabă!)</p>
                <p>• <em>astronaut</em> → as-tro-na-ut</p>
                <p>• <em>examen</em> → e-xa-men (⚠️ litera „x” = gz trece la silaba următoare)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Grupurile <strong>ch, gh, ce, ci, ge, gi</strong> notează un singur sunet și nu se despart: <em>chi-tară, ghea-ță, ge-am</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "cratima-apostrof",
          title: "Ortografia: cratima și apostroful",
          content: `
            <div class="content-block">
              <h4>➖ Cratima</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Cratima (liniuța de unire) este semnul ortografic care leagă două cuvinte rostite împreună, marcând adesea <strong>dispariția unei vocale</strong> și pronunțarea într-o singură silabă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Rol al cratimei</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Leagă pronume/verbe auxiliare</td><td>s-a dus, ne-am jucat, l-am văzut, mi-a spus</td></tr>
                  <tr><td>Leagă prepoziție + articol</td><td>într-o zi, dintr-un pom, de-al nostru</td></tr>
                  <tr><td>Marchează forme negate</td><td>n-am, n-ai, nu-i (nu îi)</td></tr>
                  <tr><td>În cuvinte compuse</td><td>floarea-soarelui, bună-cuviință</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔼 Apostroful</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Apostroful este semnul ortografic care marchează <strong>lipsa accidentală</strong> a unui sunet sau a unui grup de sunete, de obicei în vorbirea populară, familiară sau poetică.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>pân' la ziuă</em> (până la)</p>
                <p>• <em>dom'le</em> (domnule)</p>
                <p>• <em>'neaţa</em> (dimineața)</p>
                <p>• <em>clasa a VIII-a, promoția '24</em> (2024)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Cratimă ≠ apostrof</div>
                <p>Cratima leagă <strong>două cuvinte</strong> (s-a, într-o), iar apostroful marchează <strong>lipsa unui sunet</strong> în interiorul aceluiași cuvânt (pân', dom'le). Apostroful este mult mai rar folosit.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  3. MORFOLOGIE (MORFOSINTAXA)
    // ============================================================
    {
      id: "morfologie",
      title: "Morfologie",
      subtitle: "Verbul (moduri), substantivul, pronumele posesiv/demonstrativ, numeralul, adjectivul, părțile neflexibile",
      icon: "📝",
      chapters: [

        {
          id: "verbul-predicativ-nepredicativ",
          title: "Verbul. Verbe predicative și nepredicative",
          content: `
            <div class="content-block">
              <h4>⚡ Verbul – recapitulare</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Verbul este partea de vorbire flexibilă care exprimă o <strong>acțiune, o stare sau existența</strong>. Se modifică după persoană, număr, mod și timp.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔀 Verbe predicative și nepredicative</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Predicative</strong></td>
                    <td>Au înțeles de sine stătător și pot forma singure predicatul</td>
                    <td><em>El <u>aleargă</u>. Copiii <u>citesc</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Nepredicative – copulative</strong></td>
                    <td>Leagă subiectul de numele predicativ (la cls. a VI-a: <strong>numai a fi și a deveni</strong>)</td>
                    <td><em>El <u>este</u> elev. Ea <u>a devenit</u> medic.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Nepredicative – auxiliare</strong></td>
                    <td>Ajută la formarea timpurilor și a modurilor (a fi, a avea, a vrea)</td>
                    <td><em><u>am</u> citit, <u>voi</u> merge, <u>aș</u> vrea</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție – verbul „a fi”</div>
                <p>Verbul <strong>a fi</strong> poate avea trei valori:</p>
                <p>• <strong>predicativ</strong> (= a se afla, a exista): <em>El <u>este</u> acasă.</em></p>
                <p>• <strong>copulativ</strong> (leagă de numele predicativ): <em>El <u>este</u> harnic.</em></p>
                <p>• <strong>auxiliar</strong> (formează timpuri/diateze): <em>El <u>este</u> lăudat de toți.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "mod-indicativ",
          title: "Modurile personale. Modul indicativ",
          content: `
            <div class="content-block">
              <h4>🗣️ Modurile verbului</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Modul arată <strong>felul în care vorbitorul consideră acțiunea</strong>. Modurile <strong>personale</strong> își schimbă forma după persoană și număr: <strong>indicativ, imperativ, conjunctiv, condițional-optativ</strong>.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📅 Modul indicativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Indicativul exprimă o acțiune <strong>reală, sigură</strong>. Este singurul mod care are toate cele șase timpuri.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Timp</th><th>Exemplu (a merge, pers. I sg.)</th><th>Exprimă</th></tr></thead>
                <tbody>
                  <tr><td>Prezent</td><td>merg</td><td>acțiune care se petrece acum</td></tr>
                  <tr><td>Imperfect</td><td>mergeam</td><td>acțiune trecută, neterminată, care dura</td></tr>
                  <tr><td>Perfect compus</td><td>am mers</td><td>acțiune trecută, terminată</td></tr>
                  <tr><td>Perfect simplu</td><td>mersei</td><td>acțiune trecută, terminată recent (regional)</td></tr>
                  <tr><td>Mai-mult-ca-perfectul</td><td>mersesem</td><td>acțiune trecută înaintea alteia trecute</td></tr>
                  <tr><td>Viitor</td><td>voi merge</td><td>acțiune care urmează să se petreacă</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple în context</div>
                <p>• <em>Acum <strong>citesc</strong> o carte.</em> (prezent)</p>
                <p>• <em>Ieri <strong>am citit</strong> toată ziua.</em> (perfect compus)</p>
                <p>• <em>Mâine <strong>voi citi</strong> capitolul următor.</em> (viitor)</p>
              </div>
            </div>
          `
        },

        {
          id: "mod-conjunctiv",
          title: "Modul conjunctiv",
          content: `
            <div class="content-block">
              <h4>🎯 Modul conjunctiv</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Conjunctivul exprimă o acțiune <strong>posibilă, dorită sau realizabilă</strong>. Se recunoaște după conjuncția <strong>„să”</strong> care îl însoțește.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Persoană</th><th>Prezent (a merge)</th><th>Perfect</th></tr></thead>
                <tbody>
                  <tr><td>eu</td><td>să merg</td><td>să fi mers</td></tr>
                  <tr><td>tu</td><td>să mergi</td><td>să fi mers</td></tr>
                  <tr><td>el/ea</td><td>să meargă</td><td>să fi mers</td></tr>
                  <tr><td>noi</td><td>să mergem</td><td>să fi mers</td></tr>
                  <tr><td>voi</td><td>să mergeți</td><td>să fi mers</td></tr>
                  <tr><td>ei/ele</td><td>să meargă</td><td>să fi mers</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție – persoana a III-a</div>
                <p>La conjunctiv, persoana a III-a are o formă <strong>diferită</strong> de indicativ:</p>
                <p>• <em>el merge</em> (indicativ) → <em>el <strong>să meargă</strong></em> (conjunctiv)</p>
                <p>• <em>el citește</em> → <em>el <strong>să citească</strong></em></p>
                <p>• Forme neregulate: <em>să fie, să aibă, să dea, să stea, să ia, să știe, să bea</em></p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple în context</div>
                <p>• <em>Vreau <strong>să învăț</strong> mai mult.</em></p>
                <p>• <em>Trebuie <strong>să meargă</strong> la școală.</em></p>
                <p>• <em>Îmi pare rău <strong>să fi greșit</strong>.</em> (perfect)</p>
              </div>
            </div>
          `
        },

        {
          id: "mod-conditional-optativ",
          title: "Modul condițional-optativ",
          content: `
            <div class="content-block">
              <h4>💭 Modul condițional-optativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Condiționalul-optativ exprimă o acțiune <strong>dorită</strong> (optativ) sau <strong>posibilă, condiționată</strong> de altceva (condițional). Se recunoaște după formele auxiliare <strong>aș, ai, ar, am, ați, ar</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Persoană</th><th>Prezent (a merge)</th><th>Perfect</th></tr></thead>
                <tbody>
                  <tr><td>eu</td><td>aș merge</td><td>aș fi mers</td></tr>
                  <tr><td>tu</td><td>ai merge</td><td>ai fi mers</td></tr>
                  <tr><td>el/ea</td><td>ar merge</td><td>ar fi mers</td></tr>
                  <tr><td>noi</td><td>am merge</td><td>am fi mers</td></tr>
                  <tr><td>voi</td><td>ați merge</td><td>ați fi mers</td></tr>
                  <tr><td>ei/ele</td><td>ar merge</td><td>ar fi mers</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple în context</div>
                <p>• <em><strong>Aș citi</strong> o carte, dacă <strong>aș avea</strong> timp.</em> (condiție)</p>
                <p>• <em><strong>Aș vrea</strong> să călătoresc.</em> (dorință)</p>
                <p>• <em>Dacă m-ai fi ascultat, <strong>ai fi reușit</strong>.</em> (perfect)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Nu confunda auxiliarul <strong>am</strong> de la condițional (<em>noi am merge</em>) cu <strong>am</strong> de la perfectul compus (<em>eu am mers</em>). La condițional, verbul de bază rămâne la <strong>infinitiv</strong> (merge), la perfect compus este la <strong>participiu</strong> (mers).</p>
              </div>
            </div>
          `
        },

        {
          id: "mod-imperativ",
          title: "Modul imperativ",
          content: `
            <div class="content-block">
              <h4>❗ Modul imperativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Imperativul exprimă un <strong>ordin, un îndemn, o rugăminte sau o interdicție</strong>. Are forme numai pentru <strong>persoana a II-a</strong> (singular și plural).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Verb</th><th>Afirmativ sg. (tu)</th><th>Afirmativ pl. (voi)</th><th>Negativ sg. (tu)</th></tr></thead>
                <tbody>
                  <tr><td>a cânta</td><td>Cântă!</td><td>Cântați!</td><td>Nu cânta!</td></tr>
                  <tr><td>a citi</td><td>Citește!</td><td>Citiți!</td><td>Nu citi!</td></tr>
                  <tr><td>a fugi</td><td>Fugi!</td><td>Fugiți!</td><td>Nu fugi!</td></tr>
                  <tr><td>a fi</td><td>Fii cuminte!</td><td>Fiți cuminți!</td><td>Nu fi obraznic!</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție – imperativul negativ la singular</div>
                <p>La forma <strong>negativă de persoana a II-a singular</strong>, verbul se folosește la <strong>infinitiv</strong> (fără „a”):</p>
                <p>• <em>Cântă!</em> → <em>Nu <strong>cânta</strong>!</em> (nu „Nu cântă!”)</p>
                <p>• <em>Citește!</em> → <em>Nu <strong>citi</strong>!</em></p>
                <p>• <em>Scrie!</em> → <em>Nu <strong>scrie</strong>!</em></p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Punctuația</div>
                <p>Propoziția imperativă se termină de obicei cu <strong>semnul exclamării</strong>: <em>Deschide fereastra! Nu alerga pe hol!</em></p>
              </div>
            </div>
          `
        },

        {
          id: "moduri-nepersonale",
          title: "Modurile nepersonale",
          content: `
            <div class="content-block">
              <h4>🚫👤 Modurile nepersonale</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Modurile nepersonale <strong>nu își schimbă forma după persoană și număr</strong>. Ele sunt: <strong>infinitivul, gerunziul, participiul și supinul</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Mod</th><th>Terminație / marcă</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Infinitiv</strong></td><td>a + verb</td><td>a merge, a citi, a fi, a lua</td></tr>
                  <tr><td><strong>Gerunziu</strong></td><td>-ând / -ind</td><td>mergând, citind, fiind, luând</td></tr>
                  <tr><td><strong>Participiu</strong></td><td>-at, -ut, -it, -s, -t</td><td>mers, citit, cântat, scris, făcut</td></tr>
                  <tr><td><strong>Supin</strong></td><td>de/pentru/la + participiu</td><td>de citit, de spălat, la cules</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple în context</div>
                <p>• <em><strong>A învăța</strong> este important.</em> (infinitiv, subiect)</p>
                <p>• <em><strong>Mergând</strong> spre casă, am întâlnit un prieten.</em> (gerunziu)</p>
                <p>• <em>Tema <strong>scrisă</strong> a fost corectă.</em> (participiu cu valoare de adjectiv)</p>
                <p>• <em>Am multe teme <strong>de făcut</strong>.</em> (supin)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Ortografia gerunziului</div>
                <p>Gerunziul se scrie cu <strong>â</strong> în interiorul cuvântului: <em>merg<strong>â</strong>nd, lu<strong>â</strong>nd, mânc<strong>â</strong>nd</em>. Verbele de conjugarea a IV-a au terminația <em>-ind</em>: <em>citind, venind, dormind</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "substantivul",
          title: "Substantivul (actualizare)",
          content: `
            <div class="content-block">
              <h4>📌 Substantivul – recapitulare</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Substantivul denumește ființe, lucruri, fenomene. Are gen (masculin, feminin, neutru), număr (singular, plural) și caz.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔢 Substantive defective și colective</h4>
              <table class="teoria-table">
                <thead><tr><th>Categorie</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Defective de plural</strong></td><td>au numai formă de singular</td><td>aur, sânge, miere, unt, foame, sete, tenis</td></tr>
                  <tr><td><strong>Defective de singular</strong></td><td>au numai formă de plural</td><td>zori, câlți, tăiței, icre, aplauze, Carpați</td></tr>
                  <tr><td><strong>Colective</strong></td><td>la singular denumesc un grup / o mulțime</td><td>turmă, stol, cârd, herghelie, roi, tineret, frunziș</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🏷️ Cazurile și funcțiile sintactice</h4>
              <table class="teoria-table">
                <thead><tr><th>Caz</th><th>Întrebare</th><th>Funcție frecventă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Nominativ</td><td>Cine? Ce?</td><td>subiect, nume predicativ</td><td><em><u>Elevul</u> învață.</em></td></tr>
                  <tr><td>Acuzativ</td><td>Pe cine? Ce? Unde?</td><td>complement (direct, indirect, circumstanțial)</td><td><em>Citesc <u>cartea</u>.</em></td></tr>
                  <tr><td>Genitiv</td><td>Al/a/ai/ale cui?</td><td>atribut substantival genitival</td><td><em>caietul <u>elevului</u></em></td></tr>
                  <tr><td>Dativ</td><td>Cui?</td><td>complement indirect</td><td><em>Dau <u>colegului</u> cartea.</em></td></tr>
                  <tr><td>Vocativ</td><td>(chemare)</td><td>fără funcție sintactică</td><td><em><u>Ioane</u>, vino!</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "pronumele-posesiv",
          title: "Pronumele posesiv și adjectivul pronominal posesiv",
          content: `
            <div class="content-block">
              <h4>🫱 Pronumele posesiv</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele posesiv <strong>înlocuiește numele obiectului posedat și indică posesorul</strong>. Este însoțit de articolul posesiv-genitival <strong>al, a, ai, ale</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Posesor</th><th>Un obiect (masc.)</th><th>Un obiect (fem.)</th><th>Mai multe (masc.)</th><th>Mai multe (fem.)</th></tr></thead>
                <tbody>
                  <tr><td>eu</td><td>al meu</td><td>a mea</td><td>ai mei</td><td>ale mele</td></tr>
                  <tr><td>tu</td><td>al tău</td><td>a ta</td><td>ai tăi</td><td>ale tale</td></tr>
                  <tr><td>el/ea</td><td>al său</td><td>a sa</td><td>ai săi</td><td>ale sale</td></tr>
                  <tr><td>noi</td><td>al nostru</td><td>a noastră</td><td>ai noștri</td><td>ale noastre</td></tr>
                  <tr><td>voi</td><td>al vostru</td><td>a voastră</td><td>ai voștri</td><td>ale voastre</td></tr>
                  <tr><td>ei/ele</td><td colspan="4">al lor, a lor, ai lor, ale lor (formă unică)</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Pronume posesiv vs. adjectiv pronominal posesiv</div>
                <p>• <strong>Adjectiv posesiv</strong> – însoțește un substantiv: <em>Cartea <u>mea</u> este nouă.</em> (mea determină „cartea”)</p>
                <p>• <strong>Pronume posesiv</strong> – înlocuiește substantivul: <em>Cartea ta e veche, <u>a mea</u> este nouă.</em> (a mea = pronume)</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Funcții sintactice</div>
                <p>• <em><strong>Ai mei</strong> au plecat.</em> (subiect)</p>
                <p>• <em>Această carte este <strong>a mea</strong>.</em> (nume predicativ)</p>
              </div>
            </div>
          `
        },

        {
          id: "pronumele-demonstrativ",
          title: "Pronumele demonstrativ și adjectivul pronominal demonstrativ",
          content: `
            <div class="content-block">
              <h4>👉 Pronumele demonstrativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele demonstrativ <strong>înlocuiește un substantiv, arătând în același timp apropierea, depărtarea, identitatea sau diferențierea</strong> obiectului.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Categorie</th><th>Masc. sg.</th><th>Fem. sg.</th><th>Masc. pl.</th><th>Fem. pl.</th></tr></thead>
                <tbody>
                  <tr><td>Apropiere</td><td>acesta</td><td>aceasta</td><td>aceștia</td><td>acestea</td></tr>
                  <tr><td>Depărtare</td><td>acela</td><td>aceea</td><td>aceia</td><td>acelea</td></tr>
                  <tr><td>Identitate</td><td>același</td><td>aceeași</td><td>aceiași</td><td>aceleași</td></tr>
                  <tr><td>Diferențiere</td><td>celălalt</td><td>cealaltă</td><td>ceilalți</td><td>celelalte</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Capcane de scriere</div>
                <p>• <em><strong>aceeași</strong></em> (feminin singular – identitate): <em>aceeași fată</em></p>
                <p>• <em><strong>aceiași</strong></em> (masculin plural – identitate): <em>aceiași băieți</em></p>
                <p>• <em><strong>aceea</strong></em> (feminin singular – depărtare): <em>aceea de acolo</em> ≠ <em><strong>aceeași</strong></em> (identitate)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Pronume vs. adjectiv pronominal demonstrativ</div>
                <p>• <strong>Adjectiv demonstrativ</strong> – însoțește un substantiv: <em><u>Acest</u> băiat citește. / Băiatul <u>acesta</u> citește.</em></p>
                <p>• <strong>Pronume demonstrativ</strong> – înlocuiește substantivul: <em><u>Acesta</u> citește.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "pronumele-reflexiv",
          title: "Pronumele reflexiv",
          content: `
            <div class="content-block">
              <h4>🔁 Pronumele reflexiv</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Pronumele reflexiv exprimă <strong>identitatea de persoană și de număr</strong> dintre obiectul asupra căruia se exercită acțiunea verbelor și subiectul acestora.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">📖 Observație cheie (manual)</div>
                <p>Pronumele reflexiv are <strong>forme proprii numai pentru persoana a III-a</strong> și numai la cazurile <strong>dativ</strong> și <strong>acuzativ</strong>. Formele sunt identice la singular și la plural și nu au gen.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Caz</th><th>Forme</th><th>Persoana a III-a</th></tr></thead>
                <tbody>
                  <tr><td rowspan="2"><strong>Acuzativ</strong></td><td>Accentuate</td><td><strong>(pe) sine</strong></td></tr>
                  <tr><td>Neaccentuate (clitice)</td><td><strong>se, s-</strong></td></tr>
                  <tr><td rowspan="2"><strong>Dativ</strong></td><td>Accentuate</td><td><strong>sieși, sie</strong></td></tr>
                  <tr><td>Neaccentuate (clitice)</td><td><strong>își, și-</strong></td></tr>
                </tbody>
              </table>
              <div class="definitie">
                <div class="definitie-label">La persoanele I și a II-a</div>
                <p>Se folosesc formele neaccentuate ale pronumelui personal. Sunt <strong>reflexive</strong> când au aceeași persoană cu verbul, <strong>personale</strong> când au persoane diferite:</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple din manual</div>
                <p>• <em>Mă <strong>întreb</strong>.</em> (I sg. → I sg.) → <em>mă</em> = <strong>pronume reflexiv</strong></p>
                <p>• <em>Mă <strong>întreabă</strong>.</em> (I sg. → III sg.) → <em>mă</em> = <strong>pronume personal</strong></p>
                <p>• <em>Se machiază, <strong>își</strong> dă cu parfum, se privesc în oglindă, <strong>își</strong> zâmbesc.</em></p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Proverbe cu pronume reflexiv (din manual)</div>
                <p>• <em>„Cine se aseamănă, se adună."</em></p>
                <p>• <em>„Când doi se ceartă, al treilea câștigă."</em></p>
                <p>• <em>„Cum îți așterni, așa vei dormi."</em></p>
              </div>
            </div>
          `
        },

        {
          id: "numeralul",
          title: "Numeralul (actualizare)",
          content: `
            <div class="content-block">
              <h4>🔢 Numeralul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Numeralul exprimă un <strong>număr</strong> sau <strong>ordinea prin numărare</strong> a obiectelor.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Cardinal</strong></td><td>arată un număr / o cantitate</td><td>unu, doi, zece, o sută, o mie</td></tr>
                  <tr><td><strong>Ordinal</strong></td><td>arată ordinea</td><td>primul, al doilea, a treia, al zecelea</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎭 Valoarea substantivală și adjectivală</h4>
              <table class="teoria-table">
                <thead><tr><th>Valoare</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Substantivală</strong></td><td>numeralul stă singur (înlocuiește un substantiv)</td><td><em><u>Doi</u> au lipsit.</em> (subiect)</td></tr>
                  <tr><td><strong>Adjectivală</strong></td><td>numeralul însoțește un substantiv</td><td><em><u>Doi elevi</u> au lipsit.</em> (atribut)</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeli frecvente</div>
                <p>• <strong>doisprezece</strong> (masculin) / <strong>douăsprezece</strong> (feminin)</p>
                <p>• <em>doisprezece băieți</em>, dar <em>douăsprezece fete</em></p>
                <p>• <strong>al doilea</strong> (masc.) / <strong>a doua</strong> (fem.)</p>
              </div>
            </div>
          `
        },

        {
          id: "adjectivul",
          title: "Adjectivul (actualizare)",
          content: `
            <div class="content-block">
              <h4>🎨 Adjectivul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Adjectivul exprimă o însușire a unui substantiv. Se acordă cu substantivul în <strong>gen, număr și caz</strong>.</p>
              </div>
              <h5>Articolul demonstrativ (adjectival) „cel”</h5>
              <p>Formele <strong>cel, cea, cei, cele</strong> însoțesc adjectivul, evidențiindu-l:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>băiatul <strong>cel</strong> harnic</em></p>
                <p>• <em>fata <strong>cea</strong> frumoasă</em></p>
                <p>• <em>elevii <strong>cei</strong> silitori</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>📊 Gradele de comparație</h4>
              <table class="teoria-table">
                <thead><tr><th>Grad</th><th>Formă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Pozitiv</td><td>adjectivul simplu</td><td>frumos</td></tr>
                  <tr><td>Comparativ de superioritate</td><td>mai + adj.</td><td>mai frumos</td></tr>
                  <tr><td>Comparativ de egalitate</td><td>la fel de + adj.</td><td>la fel de frumos</td></tr>
                  <tr><td>Comparativ de inferioritate</td><td>mai puțin + adj.</td><td>mai puțin frumos</td></tr>
                  <tr><td>Superlativ relativ</td><td>cel mai + adj.</td><td>cel mai frumos</td></tr>
                  <tr><td>Superlativ absolut</td><td>foarte + adj.</td><td>foarte frumos</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Adjective invariabile</div>
                <p>Unele adjective <strong>nu se acordă</strong> (au o singură formă): <em>gri, roz, maro, kaki, bordo</em>.</p>
                <p>• <em>pantofi <strong>maro</strong></em>, <em>rochii <strong>roz</strong></em>, <em>ochi <strong>gri</strong></em></p>
              </div>
            </div>
          `
        },

        {
          id: "parti-neflexibile",
          title: "Părțile de vorbire neflexibile",
          content: `
            <div class="content-block">
              <h4>🧭 Adverbul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Adverbul determină un verb, un adjectiv sau alt adverb, arătând o circumstanță (loc, timp, mod). <strong>Nu se modifică</strong> (nu se acordă).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>De loc</td><td>aici, acolo, sus, jos, aproape, departe</td></tr>
                  <tr><td>De timp</td><td>azi, ieri, mâine, acum, atunci, devreme, târziu</td></tr>
                  <tr><td>De mod</td><td>bine, rău, repede, încet, așa, împreună, frumos</td></tr>
                </tbody>
              </table>
              <p>Adverbul are grade de comparație: <em>bine – mai bine – cel mai bine – foarte bine</em>.</p>
              <p><strong>Funcții sintactice:</strong> complement circumstanțial de loc/timp/mod, atribut adverbial (<em>ziua <u>de azi</u></em>).</p>
            </div>

            <div class="content-block">
              <h4>🔗 Prepoziția</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Prepoziția leagă un cuvânt de restul propoziției, arătând un raport. Cere un anumit <strong>caz</strong> (regim cazual).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cazul cerut</th><th>Prepoziții</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Acuzativ</td><td>la, în, pe, cu, de, spre, sub, pentru, fără</td><td><em>Merg <u>la școală</u>.</em></td></tr>
                  <tr><td>Genitiv</td><td>asupra, contra, împotriva, deasupra, înaintea</td><td><em>Lupta <u>împotriva răului</u>.</em></td></tr>
                  <tr><td>Dativ</td><td>datorită, mulțumită, grație</td><td><em>A reușit <u>datorită efortului</u>.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>➕ Conjuncția</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Conjuncția leagă cuvinte cu același rol sau propoziții.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Conjuncții</th></tr></thead>
                <tbody>
                  <tr><td>Coordonatoare</td><td>și, nici (copulative); dar, iar, însă, ci (adversative); sau, ori (disjunctive); deci, așadar (conclusive)</td></tr>
                  <tr><td>Subordonatoare</td><td>că, să, dacă, deoarece, fiindcă, deși, încât, ca să</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>❕ Interjecția</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Interjecția exprimă o emoție, un îndemn sau imită un sunet din natură (onomatopee).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>De emoție / îndemn</td><td>of!, vai!, aoleu!, hei!, măi!, bravo!</td></tr>
                  <tr><td>Onomatopee</td><td>poc!, trosc!, miau!, cucurigu!, ham!</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Interjecția predicativă</div>
                <p>Uneori interjecția ține locul unui predicat:</p>
                <p>• <em><strong>Hai</strong> la joacă!</em></p>
                <p>• <em><strong>Iată</strong> cartea!</em></p>
                <p>• <em><strong>Poc!</strong> se auzi o lovitură.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "adverbul-extins",
          title: "Adverbul – feluri, grade, funcții sintactice",
          content: `
            <div class="content-block">
              <h4>🧭 Adverbul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Adverbul este partea de vorbire care determină un <strong>verb</strong> și care exprimă <strong>împrejurările</strong> desfășurării acțiunii (loc, timp, mod). Nu se modifică după gen, număr sau caz.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th><th>Întrebare</th></tr></thead>
                <tbody>
                  <tr><td><strong>De loc</strong></td><td>aici, acolo, sus, jos, departe, aproape, înăuntru, afară, înainte, înapoi</td><td>Unde?</td></tr>
                  <tr><td><strong>De timp</strong></td><td>azi, ieri, mâine, acum, atunci, devreme, târziu, curând, întotdeauna, niciodată, întruna</td><td>Când?</td></tr>
                  <tr><td><strong>De mod</strong></td><td>bine, rău, repede, încet, frumos, alene, anevoie, tare, greu, astfel</td><td>Cum? În ce fel?</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>📊 Gradele de comparație ale adverbului</h4>
              <p>Adverbele au aceleași grade de comparație ca adjectivele:</p>
              <table class="teoria-table">
                <thead><tr><th>Grad</th><th>Formă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Pozitiv</td><td>adverbul simplu</td><td><em>bine</em></td></tr>
                  <tr><td>Comparativ de superioritate</td><td>mai + adverb</td><td><em>mai bine</em></td></tr>
                  <tr><td>Comparativ de egalitate</td><td>la fel de + adverb</td><td><em>la fel de bine</em></td></tr>
                  <tr><td>Comparativ de inferioritate</td><td>mai puțin + adverb</td><td><em>mai puțin bine</em></td></tr>
                  <tr><td>Superlativ relativ</td><td>cel mai + adverb</td><td><em>cel mai bine</em></td></tr>
                  <tr><td>Superlativ absolut</td><td>foarte + adverb</td><td><em>foarte bine</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual (schimb de replici)</div>
                <p><em>„Cu toții am prezentat <strong>la fel de bine</strong>!"</em> (comparativ de egalitate)</p>
                <p><em>„Cred că <strong>cel mai bine</strong> a prezentat Alina."</em> (superlativ relativ)</p>
                <p><em>„Eu am prezentat <strong>cel mai puțin bine</strong>."</em> (superlativ relativ de inferioritate)</p>
                <p><em>„Ați prezentat <strong>foarte bine</strong> cu toții!"</em> (superlativ absolut)</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔧 Funcțiile sintactice ale adverbului</h4>
              <table class="teoria-table">
                <thead><tr><th>Funcție</th><th>Întrebare</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Complement circumstanțial de loc (CCL)</td><td>Unde?</td><td><em>Fetele s-au întâlnit <u>acasă</u>.</em></td></tr>
                  <tr><td>Complement circumstanțial de timp (CCT)</td><td>Când?</td><td><em>Vino <u>mâine</u>.</em></td></tr>
                  <tr><td>Complement circumstanțial de mod (CCM)</td><td>Cum?</td><td><em>Scrie <u>frumos</u>.</em></td></tr>
                  <tr><td>Atribut adverbial</td><td>Care?</td><td><em>Ziua <u>de ieri</u> a fost grea.</em></td></tr>
                  <tr><td>Nume predicativ</td><td>Cum este?</td><td><em>Este <u>bine</u>.</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },
    {
      id: "sintaxa",
      title: "Sintaxă",
      subtitle: "Felul propozițiilor, fraza, predicatul, subiectul, atributul, complementul",
      icon: "🔗",
      chapters: [

        {
          id: "felul-propozitiilor",
          title: "Felul propozițiilor",
          content: `
            <div class="content-block">
              <h4>📜 Felul propozițiilor</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Propoziția este unitatea sintactică organizată în jurul unui predicat. Propozițiile se clasifică după mai multe criterii.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Criteriu</th><th>Tip</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td rowspan="2">După aspectul predicatului</td><td>Afirmativă</td><td><em>Maria învață.</em></td></tr>
                  <tr><td>Negativă</td><td><em>Maria nu învață.</em></td></tr>
                  <tr><td rowspan="3">După scopul comunicării</td><td>Enunțiativă</td><td><em>Afară plouă.</em></td></tr>
                  <tr><td>Interogativă</td><td><em>Vii la mine?</em></td></tr>
                  <tr><td>Exclamativă</td><td><em>Ce frumos este!</em></td></tr>
                  <tr><td rowspan="2">După structură</td><td>Simplă</td><td><em>Copilul citește.</em></td></tr>
                  <tr><td>Dezvoltată</td><td><em>Copilul harnic citește o carte.</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "fraza-coordonare-subordonare",
          title: "Fraza. Coordonarea și subordonarea",
          content: `
            <div class="content-block">
              <h4>🧱 Fraza</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Fraza este unitatea sintactică formată din <strong>două sau mai multe propoziții</strong>. Numărul propozițiilor dintr-o frază este dat de numărul predicatelor.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Cum numărăm propozițiile</div>
                <p><em>Citesc o carte / și ascult muzică.</em> → 2 predicate (citesc, ascult) = 2 propoziții = frază</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔗 Coordonarea și subordonarea</h4>
              <table class="teoria-table">
                <thead><tr><th>Raport</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Coordonare</strong></td>
                    <td>propozițiile au <strong>același rang</strong> (niciuna nu depinde de alta)</td>
                    <td><em>Ion citește / iar Maria scrie.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Subordonare</strong></td>
                    <td>o propoziție (subordonată) <strong>depinde de alta</strong> (regenta)</td>
                    <td><em>Știu / că vii.</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="definitie">
                <div class="definitie-label">Termeni importanți</div>
                <p>• <strong>Propoziția regentă</strong> – propoziția de care depinde subordonata.<br>
                • <strong>Elementul regent</strong> – cuvântul din regentă (de obicei verbul) care cere subordonata.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Analiză</div>
                <p><em>Sper<sup>(1)</sup> / că vei reuși.<sup>(2)</sup></em></p>
                <p>P1 = regentă; P2 = subordonată; elementul regent = verbul „sper”.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>La clasa a VI-a se studiază <strong>doar noțiunile generale</strong> de coordonare și subordonare. Tipurile de propoziții subordonate (subiectivă, predicativă, atributivă etc.) se învață în clasele a VII-a și a VIII-a.</p>
              </div>
            </div>
          `
        },

        {
          id: "predicatul",
          title: "Predicatul verbal și predicatul nominal",
          content: `
            <div class="content-block">
              <h4>⚡ Predicatul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Predicatul este partea principală de propoziție care arată ce face, ce este sau cum este subiectul.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Structură</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Predicat verbal (PV)</strong></td><td>verb predicativ la un mod personal</td><td><em>Elevul <u>învață</u>.</em></td></tr>
                  <tr><td><strong>Predicat nominal (PN)</strong></td><td>verb copulativ (a fi, a deveni) + nume predicativ</td><td><em>Elevul <u>este harnic</u>.</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple de predicat nominal</div>
                <p>• <em>Ea <strong>este</strong> <u>profesoară</u>.</em> (nume predicativ = substantiv)</p>
                <p>• <em>Cerul <strong>a devenit</strong> <u>senin</u>.</em> (nume predicativ = adjectiv)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Capcană – „a fi” predicativ</div>
                <p>Când <strong>a fi</strong> înseamnă „a se afla, a exista”, este verb <strong>predicativ</strong> și formează un predicat verbal:</p>
                <p>• <em>El <strong>este</strong> în clasă.</em> → PV (este = se află)</p>
                <p>• <em>El <strong>este</strong> cuminte.</em> → PN (este = copulativ + „cuminte” nume predicativ)</p>
              </div>
            </div>
          `
        },

        {
          id: "subiectul-acord",
          title: "Subiectul și acordul cu predicatul",
          content: `
            <div class="content-block">
              <h4>👑 Subiectul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Subiectul este partea principală de propoziție care arată cine face acțiunea sau despre cine se spune ceva. Răspunde la întrebările <strong>Cine? Ce?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de subiect</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Exprimat simplu</td><td>un singur cuvânt</td><td><em><u>Elevul</u> citește.</em></td></tr>
                  <tr><td>Exprimat multiplu</td><td>mai multe cuvinte</td><td><em><u>Ion și Maria</u> citesc.</em></td></tr>
                  <tr><td>Neexprimat inclus</td><td>se deduce din terminația verbului</td><td><em>Citesc.</em> (= eu)</td></tr>
                  <tr><td>Neexprimat subînțeles</td><td>se deduce din context</td><td><em>Ion a venit. A adus o carte.</em> (= Ion)</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🤝 Acordul predicatului cu subiectul</h4>
              <p>Predicatul se acordă cu subiectul în <strong>număr și persoană</strong>.</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Copilul <strong>aleargă</strong>.</em> (sg.) → <em>Copiii <strong>aleargă</strong>.</em> (pl.)</p>
                <p>• <em>Ion și Maria <strong>citesc</strong>.</em> (subiect multiplu → predicat la plural)</p>
                <p>• <em>Eu <strong>învăț</strong>, tu <strong>înveți</strong>, el <strong>învață</strong>.</em> (acord de persoană)</p>
              </div>
            </div>
          `
        },

        {
          id: "atributul",
          title: "Atributul",
          content: `
            <div class="content-block">
              <h4>🏷️ Atributul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Atributul este partea secundară de propoziție care determină un <strong>substantiv</strong> (sau un substitut al lui). Răspunde la întrebările <strong>Care? Ce fel de? Al/A/Ai/Ale cui? Câți/Câte?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de atribut</th><th>Exprimat prin</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Adjectival</strong></td><td>adjectiv</td><td><em>elev <u>harnic</u></em></td></tr>
                  <tr><td><strong>Substantival</strong> (genitival)</td><td>substantiv în genitiv</td><td><em>cartea <u>elevului</u></em></td></tr>
                  <tr><td><strong>Substantival</strong> (prepozițional)</td><td>substantiv cu prepoziție</td><td><em>caiet <u>de matematică</u></em></td></tr>
                  <tr><td><strong>Pronominal</strong></td><td>pronume</td><td><em>cartea <u>lui</u></em></td></tr>
                  <tr><td><strong>Adverbial</strong></td><td>adverb</td><td><em>ziua <u>de azi</u></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Atributul determină întotdeauna un <strong>substantiv</strong>, spre deosebire de complement, care determină de obicei un <strong>verb</strong>.</p>
              </div>
            </div>
          `
        },

        {
          id: "complementul",
          title: "Complementul",
          content: `
            <div class="content-block">
              <h4>🧩 Complementul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Complementul este partea secundară de propoziție care determină un <strong>verb</strong>, completându-i înțelesul.</p>
              </div>
              <h5>Complemente necircumstanțiale</h5>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Întrebare</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Complement direct (CD)</strong></td><td>Pe cine? Ce?</td><td><em>Citesc <u>o carte</u>. Îl văd <u>pe Ion</u>.</em></td></tr>
                  <tr><td><strong>Complement indirect (CI)</strong></td><td>Cui? De cine? Despre ce?</td><td><em>Dau <u>colegului</u> cartea. Mă gândesc <u>la tine</u>.</em></td></tr>
                </tbody>
              </table>
              <h5>Complemente circumstanțiale</h5>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Întrebare</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>De loc (CCL)</strong></td><td>Unde? Încotro? De unde?</td><td><em>Merg <u>la școală</u>.</em></td></tr>
                  <tr><td><strong>De timp (CCT)</strong></td><td>Când? De când? Cât timp?</td><td><em>Vin <u>mâine</u>.</em></td></tr>
                  <tr><td><strong>De mod (CCM)</strong></td><td>Cum? În ce fel?</td><td><em>Scrie <u>frumos</u>.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ CD vs. CI</div>
                <p><strong>Complementul direct</strong> se construiește fără prepoziție sau cu prepoziția <em>pe</em>: <em>Văd <u>filmul</u>. O ajut <u>pe Maria</u>.</em><br>
                <strong>Complementul indirect</strong> apare în dativ sau cu alte prepoziții (la, de, cu, despre): <em>Îi scriu <u>fratelui</u>. Vorbesc <u>despre carte</u>.</em></p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  5. LITERATURĂ (LECTURA)
    // ============================================================
    {
      id: "literatura",
      title: "Literatură",
      subtitle: "Cartea, narațiunea, descrierea, dialogul, figuri de stil, versificația, specii literare",
      icon: "📖",
      chapters: [

        {
          id: "cartea-obiect-cultural",
          title: "Cartea – obiect cultural",
          content: `
            <div class="content-block">
              <h4>📕 Cartea – obiect cultural</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Cartea este un obiect cultural care păstrează și transmite cunoștințe, idei și emoții. Ea are o structură bine organizată.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td><strong>Coperta</strong></td><td>conține titlul, autorul, editura</td></tr>
                  <tr><td><strong>Titlul</strong></td><td>numele operei</td></tr>
                  <tr><td><strong>Cuprinsul</strong></td><td>lista capitolelor și paginile lor</td></tr>
                  <tr><td><strong>Prefața</strong></td><td>text introductiv, așezat la începutul cărții</td></tr>
                  <tr><td><strong>Postfața</strong></td><td>text explicativ, așezat la sfârșitul cărții</td></tr>
                  <tr><td><strong>Notele de subsol</strong></td><td>explicații suplimentare, în josul paginii</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Prefață vs. postfață</div>
                <p><strong>Pre</strong>fața este la în<strong>ceput</strong> (pre = înainte), iar <strong>post</strong>fața este la <strong>sfârșit</strong> (post = după).</p>
              </div>
            </div>
          `
        },

        {
          id: "moduri-expunere",
          title: "Structura operei. Modurile de expunere",
          content: `
            <div class="content-block">
              <h4>🗣️ Modurile de expunere</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Modurile de expunere sunt felurile în care este construit un text: <strong>narațiunea, descrierea și dialogul</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Mod</th><th>Ce face</th><th>Mărci specifice</th></tr></thead>
                <tbody>
                  <tr><td><strong>Narațiunea</strong></td><td>povestește întâmplări</td><td>verbe la trecut, conectori de timp (apoi, după aceea)</td></tr>
                  <tr><td><strong>Descrierea</strong></td><td>prezintă un tablou / un portret</td><td>adjective, epitete, imagini artistice</td></tr>
                  <tr><td><strong>Dialogul</strong></td><td>reproduce vorbirea personajelor</td><td>linia de dialog, verbe de declarație</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "naratiunea",
          title: "Narațiunea. Autor, narator, personaj",
          content: `
            <div class="content-block">
              <h4>📚 Narațiunea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Narațiunea este modul de expunere prin care se prezintă o <strong>succesiune de întâmplări</strong> legate între ele prin timp și cauză.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Autor ≠ narator</div>
                <p>• <strong>Autorul</strong> este persoana reală care scrie opera (ex.: Ion Creangă).<br>
                • <strong>Naratorul</strong> este vocea care povestește în interiorul textului (o „instanță” a operei).<br>
                • <strong>Personajul</strong> este ființa care participă la acțiune.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de narator</th><th>Persoana</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Narator obiectiv (omniscient)</td><td>persoana a III-a</td><td><em>„El mergea pe drum...”</em></td></tr>
                  <tr><td>Narator subiectiv (personaj)</td><td>persoana I</td><td><em>„Am mers atunci spre casă...”</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎭 Momentele subiectului</h4>
              <table class="teoria-table">
                <thead><tr><th>Moment</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>1. Expozițiunea</td><td>prezentarea timpului, a locului și a personajelor</td></tr>
                  <tr><td>2. Intriga</td><td>evenimentul care declanșează acțiunea</td></tr>
                  <tr><td>3. Desfășurarea acțiunii</td><td>seria de întâmplări</td></tr>
                  <tr><td>4. Punctul culminant</td><td>momentul de maximă tensiune</td></tr>
                  <tr><td>5. Deznodământul</td><td>rezolvarea conflictului</td></tr>
                </tbody>
              </table>
              <p>Acțiunea se petrece într-un anumit <strong>timp</strong> și <strong>spațiu</strong>, precizate de indici temporali și spațiali (ex.: <em>„odată”, „într-o zi”, „în pădure”, „la marginea satului”</em>).</p>
            </div>
          `
        },

        {
          id: "descrierea",
          title: "Descrierea. Portretul și tabloul",
          content: `
            <div class="content-block">
              <h4>🖼️ Descrierea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Descrierea este modul de expunere prin care sunt prezentate <strong>trăsăturile unui obiect, ale unui loc sau ale unei ființe</strong>, folosind imagini artistice și figuri de stil.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Ce descrie</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Tabloul</strong></td><td>un peisaj, un colț din natură</td><td>descrierea unei păduri, a unui apus</td></tr>
                  <tr><td><strong>Portretul literar</strong></td><td>înfățișarea și caracterul unei persoane</td><td>descrierea unui personaj</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Portret fizic vs. portret moral</div>
                <p>• <strong>Portret fizic</strong>: înălțimea, ochii, părul, îmbrăcămintea.</p>
                <p>• <strong>Portret moral</strong>: însușirile sufletești (bunătate, curaj, hărnicie).</p>
              </div>
            </div>
          `
        },

        {
          id: "dialogul",
          title: "Dialogul – mijloc de caracterizare",
          content: `
            <div class="content-block">
              <h4>💬 Dialogul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Dialogul este modul de expunere prin care se reproduce direct <strong>vorbirea personajelor</strong>. Prin ceea ce spun, personajele se caracterizează singure (caracterizare indirectă).</p>
              </div>
              <p>Dialogul se marchează prin <strong>linia de dialog (–)</strong> și este însoțit de verbe de declarație: <em>a spune, a zice, a întreba, a răspunde, a striga, a șopti</em>.</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu</div>
                <p>– Unde mergi așa grăbit? întrebă bunicul.</p>
                <p>– La școală, bunicule, răspunse băiatul zâmbind.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Modul în care vorbește un personaj (politicos, obraznic, timid) ne dezvăluie trăsăturile lui de caracter. Acesta este rolul dialogului în caracterizare.</p>
              </div>
            </div>
          `
        },

        {
          id: "figuri-de-stil-antiteza",
          title: "Figuri de stil. Antiteza",
          content: `
            <div class="content-block">
              <h4>✨ Figuri de stil – recapitulare</h4>
              <table class="teoria-table">
                <thead><tr><th>Figură</th><th>Definiție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Epitetul</td><td>însușire deosebită a unui obiect</td><td><em>codrul <strong>verde</strong>, luna <strong>blândă</strong></em></td></tr>
                  <tr><td>Comparația</td><td>alăturarea a două elemente (ca, precum)</td><td><em>alb <strong>ca</strong> zăpada</em></td></tr>
                  <tr><td>Personificarea</td><td>însușiri omenești unor lucruri</td><td><em>vântul <strong>suspină</strong></em></td></tr>
                  <tr><td>Metafora</td><td>comparație prescurtată</td><td><em><strong>perle</strong> de rouă</em></td></tr>
                  <tr><td>Enumerația</td><td>înșiruire de elemente</td><td><em>câmpii, dealuri, munți</em></td></tr>
                  <tr><td>Repetiția</td><td>reluarea unui cuvânt</td><td><em>„Dormi, dormi...”</em></td></tr>
                  <tr><td>Hiperbola</td><td>exagerare</td><td><em>„munți de grâu”</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>⚖️ Antiteza (figură nouă)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Antiteza este figura de stil bazată pe <strong>opoziția puternică</strong> dintre două cuvinte, idei, personaje sau situații.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Unii <strong>râdeau</strong>, alții <strong>plângeau</strong>.</em></p>
                <p>• <em>Bogatul avea de toate, săracul nu avea nimic.</em></p>
                <p>• Eminescu: <em>„Ea — un înger ce se roagă, / El — un demon ce visează.”</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Antiteza scoate în evidență contrastul: lumină–întuneric, viață–moarte, bine–rău, trecut–prezent.</p>
              </div>
            </div>
          `
        },

        {
          id: "versificatia",
          title: "Versificația. Rima, ritmul, măsura",
          content: `
            <div class="content-block">
              <h4>🎵 Versificația</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Versificația cuprinde elementele care dau muzicalitate poeziei: versul, strofa, rima, ritmul și măsura.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Definiție</th></tr></thead>
                <tbody>
                  <tr><td><strong>Versul</strong></td><td>fiecare rând dintr-o poezie</td></tr>
                  <tr><td><strong>Strofa</strong></td><td>grup de versuri (catren = 4 versuri, distih = 2)</td></tr>
                  <tr><td><strong>Rima</strong></td><td>potrivirea sunetelor de la sfârșitul versurilor</td></tr>
                  <tr><td><strong>Ritmul</strong></td><td>alternanța silabelor accentuate și neaccentuate</td></tr>
                  <tr><td><strong>Măsura</strong></td><td>numărul de silabe dintr-un vers</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔁 Tipuri de rimă</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Schemă</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Împerecheată</td><td>a a b b</td><td>versul 1 rimează cu 2, iar 3 cu 4</td></tr>
                  <tr><td>Încrucișată</td><td>a b a b</td><td>versul 1 rimează cu 3, iar 2 cu 4</td></tr>
                  <tr><td>Îmbrățișată</td><td>a b b a</td><td>versul 1 rimează cu 4, iar 2 cu 3</td></tr>
                  <tr><td>Monorima</td><td>a a a a</td><td>toate versurile rimează la fel</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu de măsură</div>
                <p><em>„A-fost o-da-tă ca-n po-vești”</em> → 8 silabe = măsură de 8 silabe.</p>
              </div>
            </div>
          `
        },

        {
          id: "genuri-specii-pastel-fabula-doina",
          title: "Genuri și specii: pastelul, fabula, doina",
          content: `
            <div class="content-block">
              <h4>📚 Genurile literare</h4>
              <table class="teoria-table">
                <thead><tr><th>Gen</th><th>Trăsătură</th><th>Voce</th></tr></thead>
                <tbody>
                  <tr><td><strong>Epic</strong></td><td>povestește întâmplări</td><td>narator</td></tr>
                  <tr><td><strong>Liric</strong></td><td>exprimă sentimente</td><td>eu liric</td></tr>
                  <tr><td><strong>Dramatic</strong></td><td>este destinat scenei</td><td>personaje (dialog + didascalii)</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🌸 Specii obligatorii la clasa a VI-a</h4>
              <table class="teoria-table">
                <thead><tr><th>Specia</th><th>Gen</th><th>Definiție</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Pastelul</strong></td>
                    <td>liric</td>
                    <td>Poezie care descrie un tablou din natură (un anotimp, un moment al zilei), exprimând emoția poetului în fața naturii. Creatorul pastelului în literatura română este <strong>Vasile Alecsandri</strong> (ex.: <em>Iarna</em>, <em>Malul Siretului</em>).</td>
                  </tr>
                  <tr>
                    <td><strong>Fabula</strong></td>
                    <td>epic</td>
                    <td>Narațiune scurtă, în versuri sau proză, cu personaje alegorice (animale, plante, obiecte) care reprezintă tipuri umane. Se încheie cu o <strong>morală</strong>. Ex.: <em>Câinele și cățelul</em> de Grigore Alexandrescu.</td>
                  </tr>
                  <tr>
                    <td><strong>Doina populară</strong></td>
                    <td>liric</td>
                    <td>Specie a liricii populare care exprimă direct un sentiment puternic: dor, jale, revoltă sau dragoste. Are caracter oral și specific național.</td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut – alegoria din fabulă</div>
                <p>În fabulă, animalele reprezintă de fapt <strong>oameni cu anumite defecte</strong>: vulpea = viclenia, lupul = lăcomia, mielul = nevinovăția.</p>
              </div>
            </div>
          `
        },

        {
          id: "texte-nonliterare",
          title: "Texte nonliterare: anunțul și știrea",
          content: `
            <div class="content-block">
              <h4>📰 Textele nonliterare</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textele nonliterare transmit <strong>informații reale</strong>, într-un limbaj clar și obiectiv, fără figuri de stil.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Text</th><th>Scop</th><th>Trăsături</th></tr></thead>
                <tbody>
                  <tr><td><strong>Anunțul</strong></td><td>informează scurt despre un eveniment</td><td>concis, clar, conține data, locul, ora</td></tr>
                  <tr><td><strong>Știrea</strong></td><td>relatează un fapt de actualitate</td><td>obiectivă, răspunde la 6 întrebări</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Cele 6 întrebări ale știrii</div>
                <p><strong>Cine? Ce? Când? Unde? Cum? De ce?</strong></p>
                <p>Ex.: <em>Elevii școlii (cine?) au plantat copaci (ce?) sâmbătă (când?) în parcul din centru (unde?).</em></p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  6. COMUNICARE ȘI REDACTARE
    // ============================================================
    {
      id: "comunicare",
      title: "Comunicare și Redactare",
      subtitle: "Dialog, monolog, rezumat, povestire, scrisoare, motivarea opiniei, punctuație",
      icon: "✍️",
      chapters: [

        {
          id: "comunicare-orala",
          title: "Comunicarea orală",
          content: `
            <div class="content-block">
              <h4>🗣️ Comunicarea orală</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Comunicarea orală este transmiterea unui mesaj prin viu grai. Ea poate fi <strong>dialog</strong> (între două sau mai multe persoane) sau <strong>monolog</strong> (o singură persoană vorbește).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Verbal</strong></td><td>cuvintele folosite</td><td>alegerea potrivită a cuvintelor</td></tr>
                  <tr><td><strong>Nonverbal</strong></td><td>limbajul corpului</td><td>gesturi, mimică, privire, poziția corpului</td></tr>
                  <tr><td><strong>Paraverbal</strong></td><td>felul în care rostim cuvintele</td><td>tonul, intonația, ritmul, pauzele, volumul</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu</div>
                <p>Aceeași propoziție „<em>Vino aici.</em>” poate fi rostită blând sau aspru — diferența este dată de elementele <strong>paraverbale</strong> (tonul).</p>
              </div>
            </div>
          `
        },

        {
          id: "rezumatul",
          title: "Rezumatul",
          content: `
            <div class="content-block">
              <h4>📝 Rezumatul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Rezumatul este prezentarea pe scurt a conținutului unui text, păstrând doar <strong>ideile principale</strong> și ordinea întâmplărilor.</p>
              </div>
              <h5>Reguli de redactare a rezumatului</h5>
              <ul>
                <li>Se scrie la <strong>persoana a III-a</strong>.</li>
                <li>Se folosește un timp trecut sau prezentul, în mod constant.</li>
                <li>Se relatează <strong>obiectiv</strong> (fără păreri personale).</li>
                <li><strong>Nu</strong> se folosește dialogul (vorbirea directă se transformă în vorbire indirectă).</li>
                <li><strong>Nu</strong> se folosesc figuri de stil și <strong>nu</strong> se citează din text.</li>
                <li>Se păstrează doar ideile principale, nu detaliile.</li>
              </ul>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeli frecvente</div>
                <p>• Nu copia propoziții întregi din text.</p>
                <p>• Nu-ți exprima părerea („mi-a plăcut”, „cred că”).</p>
                <p>• Nu păstra dialogul: <em>„– Vino!”</em> devine <em>„El l-a chemat.”</em></p>
              </div>
            </div>
          `
        },

        {
          id: "povestirea",
          title: "Povestirea",
          content: `
            <div class="content-block">
              <h4>📖 Povestirea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Povestirea este relatarea unor întâmplări, reale sau imaginare, respectând ordinea desfășurării lor.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th></th><th>Povestirea</th><th>Rezumatul</th></tr></thead>
                <tbody>
                  <tr><td>Detalii</td><td>păstrează detaliile importante</td><td>doar ideile principale</td></tr>
                  <tr><td>Lungime</td><td>mai amplă</td><td>foarte scurt</td></tr>
                  <tr><td>Dialog</td><td>poate fi transformat în vorbire indirectă</td><td>eliminat</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Când povestim, folosim conectori de timp pentru a marca succesiunea: <em>la început, apoi, după aceea, în cele din urmă, la sfârșit</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "descrierea-redactare",
          title: "Descrierea de tip tablou și de tip portret",
          content: `
            <div class="content-block">
              <h4>🖼️ Cum redactăm o descriere</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Descrierea prezintă trăsăturile unui loc (tablou) sau ale unei persoane (portret), folosind imagini artistice și figuri de stil.</p>
              </div>
              <h5>Descrierea de tip tablou (peisaj)</h5>
              <ul>
                <li>Se alege un cadru din natură (o pădure, un apus, un râu).</li>
                <li>Se folosesc <strong>epitete</strong> și <strong>imagini vizuale, auditive, olfactive</strong>.</li>
                <li>Se pornește de la o imagine de ansamblu spre detalii.</li>
              </ul>
              <h5>Descrierea de tip portret</h5>
              <ul>
                <li><strong>Portret fizic</strong>: statura, chipul, ochii, părul, îmbrăcămintea.</li>
                <li><strong>Portret moral</strong>: însușirile sufletești (bunătatea, curajul, hărnicia).</li>
              </ul>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu de tablou</div>
                <p><em>Soarele auriu cobora încet spre asfințit, iar cerul se aprindea în culori de foc. Frunzele ruginii foșneau ușor în adierea serii.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "scrisoarea-anuntul",
          title: "Scrisoarea și anunțul",
          content: `
            <div class="content-block">
              <h4>✉️ Scrisoarea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Scrisoarea este un text prin care comunicăm în scris cu o persoană aflată la distanță. Poate fi <strong>familiară</strong> (către prieteni, rude) sau <strong>oficială</strong> (către instituții).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Parte a scrisorii</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Localitatea și data</td><td>sus, în dreapta (ex.: <em>București, 12 mai 2024</em>)</td></tr>
                  <tr><td>Formula de adresare</td><td><em>Dragă bunico, / Stimate domn director,</em></td></tr>
                  <tr><td>Conținutul</td><td>mesajul propriu-zis</td></tr>
                  <tr><td>Formula de încheiere</td><td><em>Cu drag, / Cu respect,</em></td></tr>
                  <tr><td>Semnătura</td><td>numele expeditorului</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>📢 Anunțul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Anunțul este un text scurt care informează publicul despre un eveniment. Trebuie să fie <strong>clar și concis</strong>.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu de anunț</div>
                <p><em>ANUNȚ<br>Sâmbătă, 15 iunie, ora 10:00, în curtea școlii va avea loc târgul de carte. Vă așteptăm cu drag!</em></p>
              </div>
            </div>
          `
        },

        {
          id: "motivarea-opiniei",
          title: "Motivarea unei opinii",
          content: `
            <div class="content-block">
              <h4>💬 Motivarea unei opinii</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>A motiva o opinie înseamnă a-ți exprima părerea despre un text, un fapt sau un personaj și a o <strong>susține cu argumente și exemple</strong>.</p>
              </div>
              <h5>Structura unei opinii motivate</h5>
              <table class="teoria-table">
                <thead><tr><th>Etapă</th><th>Formulare</th></tr></thead>
                <tbody>
                  <tr><td>1. Exprimarea opiniei</td><td><em>Consider că... / Părerea mea este că...</em></td></tr>
                  <tr><td>2. Argumentul</td><td><em>...deoarece / pentru că...</em></td></tr>
                  <tr><td>3. Exemplul</td><td><em>De exemplu, în text...</em></td></tr>
                  <tr><td>4. Concluzia</td><td><em>În concluzie / Așadar...</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu</div>
                <p><em>Consider că personajul este curajos, deoarece își apără prietenul. De exemplu, în text el înfruntă pericolul fără să dea înapoi. În concluzie, curajul este trăsătura lui principală.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "textul-argumentativ-cls6",
          title: "Textul argumentativ",
          content: `
            <div class="content-block">
              <h4>💬 Textul argumentativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Textul argumentativ este un text în care autorul susține o <strong>teză (opinie)</strong> prin <strong>argumente</strong> și <strong>exemple</strong>, cu scopul de a-l convinge pe cititor.</p>
              </div>
              <h5>Structura textului argumentativ (manual cls. VI)</h5>
              <table class="teoria-table">
                <thead><tr><th>Parte</th><th>Rol</th><th>Conectori tipici</th></tr></thead>
                <tbody>
                  <tr><td><strong>Introducere / Teză</strong></td><td>prezintă opinia susținută</td><td><em>Cred că... / Consider că... / Există motive...</em></td></tr>
                  <tr><td><strong>Argument 1</strong></td><td>primul motiv</td><td><em>Mai întâi... / În primul rând...</em></td></tr>
                  <tr><td><strong>Argument 2</strong></td><td>al doilea motiv</td><td><em>Apoi... / În al doilea rând...</em></td></tr>
                  <tr><td><strong>Argument 3</strong></td><td>al treilea motiv</td><td><em>În plus... / Pe de altă parte...</em></td></tr>
                  <tr><td><strong>Concluzie</strong></td><td>reafirmarea tezei</td><td><em>În concluzie... / Prin urmare... / Așadar...</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Model din manual – „Motive pentru care călătoriile te fac mai bun" (Samantha Fanelli)</div>
                <p><strong>Teză:</strong> <em>„Cred că plecarea într-o călătorie spre un loc necunoscut [...] este exact unul dintre momentele care te definesc."</em></p>
                <p><strong>Arg. 1</strong> (conector: <em>Mai întâi</em>): Călătoriile ne învață despre noi înșine și ne fac mai independenți. Exemplu: trebuie să ajungi din A în B, să-ți administrezi bugetul.</p>
                <p><strong>Arg. 2</strong> (conector: <em>Apoi</em>): Călătoriile ne ajută să înțelegem că experiențele valorează mai mult decât lucrurile.</p>
                <p><strong>Arg. 3</strong> (conector: <em>Pe de altă parte</em>): Uneori apar situații neplăcute, dar ele te învață să te adaptezi.</p>
                <p><strong>Arg. 4</strong> (conector: <em>În plus</em>): Interacțiunea cu oameni din culturi diferite te ajută să apreciezi diversitatea.</p>
                <p><strong>Concluzie:</strong> <em>„În concluzie, după ce ai prins gustul călătoriilor... ține-te bine!"</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Conectori argumentativi esențiali</div>
                <p><strong>Pentru argumente:</strong> <em>mai întâi, în primul rând, apoi, pe de o parte, pe de altă parte, în plus, de asemenea, mai mult</em></p>
                <p><strong>Pentru exemple:</strong> <em>de exemplu, spre exemplu, astfel, bunăoară</em></p>
                <p><strong>Pentru concluzie:</strong> <em>în concluzie, prin urmare, așadar, ca urmare, deci</em></p>
              </div>
            </div>
          `
        },

        {
          id: "textul-explicativ-cls6",
          title: "Textul explicativ",
          content: `
            <div class="content-block">
              <h4>📋 Textul explicativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VI)</div>
                <p>Textul explicativ oferă <strong>informații organizate</strong> dintr-un domeniu particular al cunoașterii, având ca scop <strong>înțelegerea unui fenomen, a unui fapt sau a unei situații</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Întrebare la care răspunde</th><th>Exemple de texte</th></tr></thead>
                <tbody>
                  <tr><td><strong>Cauzal</strong></td><td>De ce?</td><td>articole de dicționar, texte din manuale/enciclopedii, unele texte din presă</td></tr>
                  <tr><td><strong>Procedural</strong></td><td>Cum?</td><td>rețete, instrucțiuni de utilizare, prospecte, ghiduri</td></tr>
                </tbody>
              </table>
              <h5>Trăsături ale textului explicativ (din manual)</h5>
              <ul>
                <li>Explicațiile sunt introduse prin: <em>fiindcă, pentru că, de aceea, așadar, ca urmare, mai exact, adică</em></li>
                <li>Verbele la modul <strong>indicativ, prezent, persoana a III-a</strong> (sau imperativ/infinitiv în instrucțiuni)</li>
                <li>Limbaj <strong>precis</strong>, adaptat nivelului cititorului</li>
                <li>Pot include <strong>marcatori</strong>, imagini, tabele pentru claritate</li>
              </ul>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemple de întrebări din manual</div>
                <p>• <em>Unde trăiesc pinguinii?</em> (explicativ cauzal)</p>
                <p>• <em>Cum se formează insulele?</em> (explicativ procedural)</p>
                <p>• <em>De ce ne bronzăm la soare?</em> (explicativ cauzal)</p>
              </div>
            </div>
          `
        },

        {
          id: "vorbire-directa-indirecta",
          title: "Vorbirea directă și vorbirea indirectă",
          content: `
            <div class="content-block">
              <h4>💬 Vorbirea directă vs. indirectă</h4>
              <div class="definitie">
                <div class="definitie-label">Definiții (conform manual cls. VI)</div>
                <p><strong>Vorbirea directă</strong> reprezintă <strong>reproducerea întocmai</strong> a cuvintelor atribuite unei persoane sau unui personaj.</p>
                <p><strong>Vorbirea indirectă</strong> reprezintă <strong>redarea, prin relatare</strong>, a spuselor unei persoane sau ale unui personaj.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual – I.L. Caragiale, „D-l Goe..."</div>
                <p><strong>Vorbire directă:</strong></p>
                <p><em>„— Goe! maică! Acolo ești? — Da! — Aide! zice mam' mare, ieși odată! Ne-ai speriat. — Nu pot! zbiară Goe dinăuntru."</em></p>
                <p><strong>Vorbire indirectă:</strong></p>
                <p><em>Bunica îl întreabă pe Goe dacă este în acel loc. Băiatul răspunde afirmativ. Bunica îi cere să iasă odată, fiindcă le-a speriat. Din interior, Goe strigă că nu poate.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔄 Trecerea vorbirii directe în vorbire indirectă</h4>
              <p>Transformarea presupune (din manual):</p>
              <table class="teoria-table">
                <thead><tr><th>Operație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Elimini linia de dialog</td><td>– Vin. → (linia dispare)</td></tr>
                  <tr><td>Folosești verbe de declarație</td><td><em>a spune, a zice, a întreba, a striga, a răspunde, a exclamă</em></td></tr>
                  <tr><td>Adaugi cuvinte de legătură după verbul de declarație</td><td><em>că, să, ca să, dacă, unde, când, care</em></td></tr>
                  <tr><td>Verbele și pronumele trec la persoana a III-a</td><td><em>Vin</em> → <em>că vine</em></td></tr>
                  <tr><td>Elimini enunțurile imperative/exclamative/interogative</td><td>Ieși! → să iasă</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exercițiu tip din manual (Micul Prinț)</div>
                <p><strong>Vorbire directă:</strong> <em>„— De unde vii? îi spuse domnul cel bătrân."</em></p>
                <p><strong>Vorbire indirectă:</strong> <em>Bătrânul îl întrebă de unde vine.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Lista de control (din manual)</div>
                <p>✓ Liniile de dialog au fost eliminate.</p>
                <p>✓ Sunt prezente verbe de declarație.</p>
                <p>✓ După verbe de declarație: <em>că, să, dacă, unde, când, care</em>...</p>
                <p>✓ Enunțurile imperative/exclamative/interogative au fost transformate.</p>
                <p>✓ Verbele și pronumele au trecut la persoana a III-a.</p>
              </div>
            </div>
          `
        },

        {
          id: "punctuatie-ortografie",
          title: "Semnele de punctuație și de ortografie",
          content: `
            <div class="content-block">
              <h4>❓ Semnele de punctuație</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Semnele de punctuație organizează comunicarea scrisă, marcând pauzele, intonația și legăturile dintre cuvinte.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Semn</th><th>Rol</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Punctul (.)</td><td>sfârșitul unei propoziții enunțiative</td><td><em>Afară plouă.</em></td></tr>
                  <tr><td>Virgula (,)</td><td>desparte părți de propoziție de același fel</td><td><em>Am mere, pere, prune.</em></td></tr>
                  <tr><td>Punctul și virgula (;)</td><td>pauză mai mare decât virgula</td><td><em>Unii citeau; alții scriau.</em></td></tr>
                  <tr><td>Semnul întrebării (?)</td><td>propoziția interogativă</td><td><em>Vii la mine?</em></td></tr>
                  <tr><td>Semnul exclamării (!)</td><td>propoziția exclamativă/imperativă</td><td><em>Ce frumos!</em></td></tr>
                  <tr><td>Două puncte (:)</td><td>anunță o enumerare sau vorbirea directă</td><td><em>El a spus: – Vino!</em></td></tr>
                  <tr><td>Linia de dialog (–)</td><td>marchează vorbirea unui personaj</td><td><em>– Bună ziua!</em></td></tr>
                  <tr><td>Linia de pauză (—)</td><td>marchează o pauză în vorbire</td><td><em>El — surprins — tăcu.</em></td></tr>
                  <tr><td>Ghilimelele („ ”)</td><td>marchează un citat sau un titlu</td><td><em>Poezia „Iarna”.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>✍️ Semnele de ortografie</h4>
              <table class="teoria-table">
                <thead><tr><th>Semn</th><th>Rol</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Cratima (-)</td><td>leagă două cuvinte rostite împreună</td><td><em>s-a dus, într-o zi, n-am</em></td></tr>
                  <tr><td>Apostroful (’)</td><td>marchează lipsa unui sunet</td><td><em>pân' la, dom'le</em></td></tr>
                  <tr><td>Punctul (ca semn ortografic)</td><td>după abrevieri</td><td><em>etc., prof., nr.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ De reținut</div>
                <p>Punctul poate fi <strong>semn de punctuație</strong> (la sfârșitul propoziției) sau <strong>semn ortografic</strong> (după o abreviere: <em>etc.</em>).</p>
              </div>
            </div>
          `
        }
      ]
    }

  ]
};
