// ============================================================
//  ROMÂNĂ - CLASA A 5-A
//  Teoria completă conform programei școlare românești
// ============================================================

const romana5Data = {
  title: "Română – Clasa a V-a",
  subtitle: "Teorie completă pentru Evaluarea Națională",
  subject: "romana",
  grade: 5,
  sections: [

    // ============================================================
    //  1. FONETICĂ
    // ============================================================
    {
      id: "fonetica",
      title: "Fonetică",
      subtitle: "Sunetele limbii române, silaba, diftong, triftong, hiat",
      icon: "🔤",
      chapters: [

        {
          id: "alfabetul",
          title: "Alfabetul limbii române",
          content: `
            <div class="content-block">
              <h4>📖 Alfabetul limbii române</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Alfabetul este totalitatea literelor unei limbi, așezate într-o ordine stabilită prin convenție.</p>
              </div>
              <p>Limba română are <strong>31 de litere</strong>, dintre care unele notează sunete specifice limbii române:</p>
              <table class="teoria-table">
                <thead><tr><th>Litere speciale</th><th>Sunet</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Ă, ă</strong></td><td>vocală mediană</td><td>față, băiat, mână</td></tr>
                  <tr><td><strong>Â, â</strong></td><td>vocală centrală închisă</td><td>pâine, cânt, târziu</td></tr>
                  <tr><td><strong>Î, î</strong></td><td>același sunet ca â</td><td>în, între, înainte</td></tr>
                  <tr><td><strong>Ș, ș</strong></td><td>consoană fricativă</td><td>școală, șarpe, mașină</td></tr>
                  <tr><td><strong>Ț, ț</strong></td><td>consoană africată</td><td>țară, față, plăcință</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p><strong>Î</strong> se folosește la începutul și sfârșitul cuvintelor și al elementelor de compunere (în, înainte, coborî), iar <strong>â</strong> se folosește în interiorul cuvintelor (cânt, pâine, cânta).</p>
              </div>
            </div>
          `
        },

        {
          id: "vocale-consoane",
          title: "Vocale, Consoane, Semivocale",
          content: `
            <div class="content-block">
              <h4>🎵 Vocalele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Vocalele sunt sunetele care <strong>se pronunță neînsoțite de sunete de sprijin</strong> și care pot forma singure o silabă. Vocalele din limba română sunt: <strong>[a], [ă], [î], [e], [i], [o], [u]</strong>.</p>
                <p>Sunetele [a], [ă], [î] sunt <strong>întotdeauna vocale</strong>.</p>
              </div>
              <p>Vocalele sunt nucleul silabei – fiecare silabă conține obligatoriu o vocală.</p>
              <table class="teoria-table">
                <thead><tr><th>Vocala</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>a</strong></td><td>carte, casă, mamă</td></tr>
                  <tr><td><strong>ă</strong></td><td>față, băiat, câmpă</td></tr>
                  <tr><td><strong>â / î</strong></td><td>pâine, cânt, în, înainte</td></tr>
                  <tr><td><strong>e</strong></td><td>elev, pere, lemne</td></tr>
                  <tr><td><strong>i</strong></td><td>iarnă, pisică, linie</td></tr>
                  <tr><td><strong>o</strong></td><td>oaie, coală, floare</td></tr>
                  <tr><td><strong>u</strong></td><td>urs, lume, drum</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔇 Semivocalele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Semivocalele sunt sunete care <strong>seamănă cu vocalele, dar care nu pot forma singure o silabă</strong>. Se transcriu adăugând o căciuliță deasupra literei: [ĕ], [ĭ], [ŏ], [ŭ].</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>iarnă</em> → <strong>i</strong> este semivocală (nu e accentuat, e alăturat vocalei <em>a</em>)</p>
                <p>• <em>seară</em> → <strong>a</strong> este vocală; <strong>e</strong> din „sea-" este semivocală</p>
                <p>• <em>oaie</em> → <strong>a</strong> vocală, <strong>o</strong> și <strong>i</strong> sunt semivocale</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔠 Consoanele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Consoanele sunt sunete care <strong>nu pot forma singure o silabă</strong> și care <strong>se pronunță cu ajutorul unei vocale</strong>.</p>
                <p>Consoanele din limba română redate, de regulă, printr-o singură literă sunt: [b], [k], [d], [f], [g], [h], [j], [l], [m], [n], [p], [r], [s], [ș], [t], [ț], [v], [z].</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🅰️ Litera vs. Sunetul</h4>
              <p>Litera este semnul grafic al unui sunet. În general, în limba română o literă transcrie un singur sunet, dar există excepții importante:</p>
              <table class="teoria-table">
                <thead><tr><th>Situație</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Litera <em>x</em> → sunetele [ks] sau [gz]</td><td><em>pix</em> → [ks]; <em>exact</em> → [gz]</td></tr>
                  <tr><td>Vocala [î] → literele <em>î</em> și <em>â</em></td><td><em>în, înainte; câmp, pâine</em></td></tr>
                  <tr><td>Consoana [k] → literele <em>c, k, q</em></td><td><em>carte, karate, Qatar</em></td></tr>
                  <tr><td>Grupuri <em>ce, ci, ge, gi</em> → un sunet (înaintea vocalei)</td><td><em>cea-ră, ci-reș, ge-am</em></td></tr>
                  <tr><td>Grupuri <em>che, chi, ghe, ghi</em> → un sunet (înaintea vocalei)</td><td><em>chi-tară, ghe-ață</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ i „șoptit" (semi-mut)</div>
                <p>La sfârșitul unor cuvinte apare un <em>i special</em> (i „șoptit"), abia auzit. <strong>Nu</strong> se confundă cu vocala i sau semivocala i:</p>
                <p>• <em>metri</em> → i final este <strong>vocală</strong> (se aude clar)</p>
                <p>• <em>noi</em> → i este <strong>semivocală</strong> (formează diftong cu o)</p>
                <p>• <em>pomi, flori, nori</em> → i final este <strong>i „șoptit"</strong> (abia auzit)</p>
              </div>
            </div>
          `
        },

        {
          id: "silaba",
          title: "Silaba și Despărțirea în Silabe",
          content: `
            <div class="content-block">
              <h4>✂️ Silaba</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Silaba este formată <strong>fie dintr-o vocală</strong>, fie dintr-un <strong>grup de sunete care conține o vocală</strong> și se pronunță cu <strong>un singur efort expirator</strong>.</p>
                <p>Cuvântul poate fi format din una, două sau mai multe silabe. În scris, cuvintele se despart în silabe cu ajutorul liniuței de despărțire (pusă o singură dată, la capăt de rând, fără a se repeta la începutul rândului următor).</p>
              </div>
              <p>Un cuvânt are <strong>atâtea silabe câte vocale</strong> conține:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>ma-mă</em> → 2 silabe</p>
                <p>• <em>e-lev</em> → 2 silabe</p>
                <p>• <em>școa-lă</em> → 2 silabe</p>
                <p>• <em>Ma-te-ma-ti-că</em> → 5 silabe</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📏 Regulile de despărțire în silabe</h4>
              <h5>Regula 1 – O consoană între două vocale</h5>
              <p>O consoană între două vocale trece la silaba următoare:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• ca-sa, ma-re, co-pi-lă, me-ri, bu-nă</p>
              </div>

              <h5>Regula 2 – Două consoane între vocale</h5>
              <p>Când sunt două consoane între două vocale, prima rămâne la silaba anterioară, iar a doua trece la silaba următoare:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• car-te, cal-cul, lin-gou, fân-tâ-nă, sân-ge</p>
              </div>

              <h5>Regula 3 – Grupuri de consoane</h5>
              <p>Grupurile <strong>bl, cl, fl, gl, pl, br, cr, dr, fr, gr, pr, tr, vr, str, spr, scr</strong> nu se despart niciodată; trec împreună la silaba următoare:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• a-brupt, a-pro-ape, co-dru, fri-gul</p>
              </div>

              <h5>Regula 4 – Trei sau mai multe consoane</h5>
              <p>Din trei sau mai multe consoane, de regulă prima rămâne la silaba anterioară, restul trec la silaba următoare (cu excepția grupurilor de la regula 3):</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• con-stant, jus-ti-ție, ins-pi-ra-ție</p>
              </div>

              <h5>Regula 5 – Vocale alăturate (diftongi/triftongi)</h5>
              <p>Diftongii și triftongii nu se despart:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>seară</em> → sea-ră (nu se-a-ră)</p>
                <p>• <em>oaie</em> → oa-ie (nu o-a-ie)</p>
              </div>

              <h5>Regula 6 – Hiat</h5>
              <p>Vocalele aflate în hiat se despart:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>po-e-zie</em>, <em>fi-ind</em>, <em>a-er</em></p>
              </div>

              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Grupurile de litere <strong>ch, gh, ce, ci, ge, gi</strong> notează un singur sunet și nu se despart niciodată: <em>chi-tară</em>, <em>ghea-ță</em>, <em>ge-am</em>.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔊 Accentul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Accentul reprezintă <strong>pronunțarea mai intensă a unei silabe</strong> dintr-un cuvânt. În limba română, accentul <strong>nu are loc fix</strong> (spre deosebire de alte limbi). Accentul poate diferenția sensul cuvintelor scrise la fel.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple de cuvinte deosebite prin accent</div>
                <p>• <em>ácele</em> (pronume demonstrativ) ≠ <em>acéle</em> (plural de ac)</p>
                <p>• <em>cópii</em> (plural de copil) ≠ <em>copíi</em> (plural de copie)</p>
                <p>• <em>véselă</em> (adjectiv) ≠ <em>vesélă</em> (substantiv: veselă de bucătărie)</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – Marin Sorescu, „Ochelarii"</div>
                <p><em>„Strânse-ntr-o carte cu puréci / (Accentul mi-l mută, văzuși? / Un purece, ca pe-un țăruș.)"</em></p>
                <p>Poetul mută intenționat accentul de pe forma normativă <em>púrice</em> pe <em>puréci</em> pentru rima versului. În poezie se admit uneori variante de accentuare diferite față de norma literară.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Accentuare corectă – DOOM3</div>
                <p>Dicționarul ortografic, ortoepic și morfologic al limbii române (DOOM3, ediția 2021) stabilește accentuarea corectă. Formele corecte: <em>ántic, cáracter, tráfic, áripă, fúrie, pícnic, rádio</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "diftong-triftong-hiat",
          title: "Diftong, Triftong, Hiat",
          content: `
            <div class="content-block">
              <div class="atentie">
                <div class="atentie-label">📘 Notă despre programă</div>
                <p>Diftongul, triftongul și hiatul nu sunt introduse ca lecție separată în manualul de clasa a V-a aprobat de MEN (ediția 2022). Ele apar implicit în regulile de despărțire în silabe și sunt aprofundate în <strong>clasa a VI-a</strong>. Conținutul de mai jos este inclus ca referință pentru elevii care vor să aprofundeze.</p>
              </div>
            </div>
            <div class="content-block">
              <h4>🔀 Diftongul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Diftongul este grupul format dintr-o <strong>vocală + semivocală</strong> sau <strong>semivocală + vocală</strong>, pronunțate în aceeași silabă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip diftong</th><th>Structură</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Descendent</td><td>vocală + semivocală</td><td>ai (dai), ei (lei), oi (boi), ui (lui)</td></tr>
                  <tr><td>Urcător</td><td>semivocală + vocală</td><td>ia (iarnă), ie (ieri), io (ion), iu (iute), oa (oaie), ua (două), ue (nouele)</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple detaliate</div>
                <p>• <em>seară</em> → [sea] = semivocala e + vocala a → diftong urcător</p>
                <p>• <em>bou</em> → [ou] = vocala o + semivocala u → diftong descendent</p>
                <p>• <em>iarnă</em> → [ia] = semivocala i + vocala a → diftong urcător</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔀🔀 Triftongul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Triftongul este grupul format dintr-o <strong>vocală și două semivocale</strong> (semivocală + vocală + semivocală), pronunțate în aceeași silabă.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>leoaică</em> → [eoa] = semivocală e + vocală o + semivocală a + ...</p>
                <p>• <em>oaie</em> → [oai] = semivocală o + vocală a + semivocală i → triftong</p>
                <p>• <em>iau</em> → [iau] = semivocală i + vocală a + semivocală u</p>
                <p>• <em>iubiți</em> → [iubi-ți] (nu triftong în acest caz)</p>
                <p>• <em>vreau</em> → [eau] = semivocală e + vocală a + semivocală u</p>
              </div>
            </div>

            <div class="content-block">
              <h4>↔️ Hiatul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Hiatul este întâlnirea a două vocale alăturate care se pronunță în <strong>silabe diferite</strong> (nu formează diftong).</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>po-e-zie</em> → o și e sunt în hiat (silabe diferite)</p>
                <p>• <em>a-er</em> → a și e sunt în hiat</p>
                <p>• <em>fi-ind</em> → cele două i sunt în hiat</p>
                <p>• <em>i-de-e</em> → două e în hiat la final</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th></th><th>Diftong</th><th>Hiat</th></tr></thead>
                <tbody>
                  <tr><td>Definiție</td><td>vocală + semivocală în aceeași silabă</td><td>două vocale în silabe diferite</td></tr>
                  <tr><td>Despărțire</td><td>NU se despart</td><td>DA, se despart</td></tr>
                  <tr><td>Exemplu</td><td>sea-ră (diftong ea)</td><td>po-e-zie (hiat o-e)</td></tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  2. VOCABULAR
    // ============================================================
    {
      id: "vocabular",
      title: "Vocabular",
      subtitle: "Sensul cuvintelor, sinonime, antonime, omonime, paronime, familia de cuvinte",
      icon: "📚",
      chapters: [

        {
          id: "cuvantul",
          title: "Cuvântul – formă și sens",
          content: `
            <div class="content-block">
              <h4>💬 Cuvântul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Cuvântul este unitatea de bază a vocabularului, formată din unul sau mai multe sunete (litere) care exprimă un sens.</p>
              </div>
              <p>Un cuvânt are două aspecte:</p>
              <ul>
                <li><strong>Forma</strong> (învelis sonor/grafic) – cum se pronunță și se scrie</li>
                <li><strong>Sensul</strong> (conținutul) – ce înseamnă</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>🎯 Sensul propriu și sensul figurat</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip de sens</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Sens propriu de bază</strong></td>
                    <td>Sensul obișnuit, uzual al cuvântului</td>
                    <td><em>Câinele are <strong>labă</strong> puternică.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Sens propriu secundar</strong></td>
                    <td>Derivat din sensul de bază, dar tot concret</td>
                    <td><em><strong>Labă</strong> de picior</em> (la om)</td>
                  </tr>
                  <tr>
                    <td><strong>Sens figurat</strong></td>
                    <td>Sens metaforic, imaginativ, folosit în limbajul artistic</td>
                    <td><em>O privire de <strong>gheață</strong></em> (rece, nemiloasă)</td>
                  </tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple sens propriu vs. figurat</div>
                <p>• <em>Inima bate repede.</em> → sens propriu (organ)</p>
                <p>• <em>Inima satului</em> → sens figurat (centrul)</p>
                <p>• <em>Lacul are apă limpede.</em> → sens propriu</p>
                <p>• <em>Are un suflet limpede.</em> → sens figurat (curat, sincer)</p>
              </div>
            </div>
          `
        },

        {
          id: "sinonime",
          title: "Sinonime",
          content: `
            <div class="content-block">
              <h4>🔄 Sinonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Sinonimele sunt cuvinte cu <strong>formă diferită</strong> și cu <strong>sens asemănător sau identic</strong>. Sinonimele trebuie să fie <strong>aceeași parte de vorbire</strong>. Alegerea sinonimului unui cuvânt depinde de <strong>contextul</strong> în care apare cuvântul respectiv.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual – stările lui Riley (filmul „Întors pe dos")</div>
                <p>Când Bucuria controla: <em>bucuroasă, mulțumită, veselă, voioasă</em> → toate sunt sinonime ale stării de bucurie.</p>
                <p>Când Tristețea controla: <em>tristă, supărată, posomorâtă, mâhnită</em> → sinonime ale stării de tristețe.</p>
                <p>Observație: deși sunt sinonime, nu toate sunt perfect interschimbabile în orice context.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Sinonimele contextuale – verbul „a scoate"</div>
                <p>Verbul <em>a scoate</em> are sinonime diferite în funcție de context:</p>
                <p>• <em>Am scos pata de cerneală.</em> → <strong>a îndepărta</strong></p>
                <p>• <em>Ana a scos bani de pe card.</em> → <strong>a retrage</strong></p>
                <p>• <em>Antrenorul l-a scos din lot.</em> → <strong>a exclude</strong></p>
                <p>• <em>Stomatologul i-a scos un dinte.</em> → <strong>a extrage</strong></p>
                <p>• <em>Scriitoarea a scos o carte nouă.</em> → <strong>a publica</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Sinonime</th></tr></thead>
                <tbody>
                  <tr><td>a merge</td><td>a umbla, a se deplasa, a pași</td></tr>
                  <tr><td>frumos</td><td>drăguț, arătos, chipeș, atrăgător</td></tr>
                  <tr><td>mare</td><td>înalt, vast, imens, uriaș, colosal</td></tr>
                  <tr><td>a spune</td><td>a zice, a rosti, a declara, a afirma</td></tr>
                  <tr><td>bucurie</td><td>veselie, fericire, voioșie, încântare</td></tr>
                  <tr><td>repede</td><td>iute, grabnic, prompt, fulgerător</td></tr>
                  <tr><td>etern</td><td>veșnic</td></tr>
                  <tr><td>a birui</td><td>a învinge</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Un cuvânt cu mai multe sensuri are sinonime pentru <strong>fiecare sens</strong>. Înlocuirea unui cuvânt cu sinonimul său nu trebuie să modifice sensul textului.</p>
              </div>
            </div>
          `
        },

        {
          id: "antonime",
          title: "Antonime",
          content: `
            <div class="content-block">
              <h4>↔️ Antonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Antonimele sunt cuvinte cu <strong>formă diferită</strong> și cu <strong>sens opus</strong>. O pereche de antonime este compusă din cuvinte care sunt <strong>aceeași parte de vorbire</strong>.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual</div>
                <p><em>„Adam, îi zic, tu s-o iei pe uliță <strong>în sus</strong>, eu o iau pe uliță <strong>în jos</strong>."</em></p>
                <p>Antonime: <em>în sus</em> ↔ <em>în jos</em></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Antonim</th></tr></thead>
                <tbody>
                  <tr><td>bun</td><td>rău</td></tr>
                  <tr><td>mare</td><td>mic</td></tr>
                  <tr><td>frumos</td><td>urât</td></tr>
                  <tr><td>curat</td><td>murdar / necurat</td></tr>
                  <tr><td>fericit</td><td>nefericit</td></tr>
                  <tr><td>harnic</td><td>leneș</td></tr>
                  <tr><td>a urca</td><td>a coborî</td></tr>
                  <tr><td>a îmbrăca</td><td>a dezbrăca</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Antonime cu prefix negativ</div>
                <p>Unele antonime se formează prin adăugarea unui prefix negativ: <em>fericit → <strong>ne</strong>fericit</em>, <em>cinstit → <strong>ne</strong>cinstit</em>, <em>norocos → <strong>ne</strong>norocos</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "omonime-paronime",
          title: "Omonime și Paronime",
          content: `
            <div class="content-block">
              <div class="atentie">
                <div class="atentie-label">📘 Notă despre programă</div>
                <p>Omonimele și paronimele nu sunt introduse ca lecție separată în manualul de clasa a V-a aprobat de MEN (ediția 2022). Sunt studiate în <strong>clasa a VI-a</strong>. Conținutul de mai jos este inclus ca referință pentru aprofundare.</p>
              </div>
            </div>
            <div class="content-block">
              <h4>🔤 Omonimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Omonimele sunt cuvinte cu <strong>formă identică</strong> (se pronunță și se scriu la fel), dar cu <strong>sens diferit</strong>, fără legătură între ele.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Sens 1</th><th>Sens 2</th></tr></thead>
                <tbody>
                  <tr><td><strong>mai</strong></td><td>luna mai (a 5-a lună)</td><td>mai (adverb de comparație: este mai frumos)</td></tr>
                  <tr><td><strong>lac</strong></td><td>întindere de apă</td><td>substanță folosită la vopsit / lustruit</td></tr>
                  <tr><td><strong>toc</strong></td><td>instrument de scris</td><td>parte a pantofului / ramă de ușă</td></tr>
                  <tr><td><strong>lună</strong></td><td>satelitul Pământului</td><td>perioadă de timp (30 zile)</td></tr>
                  <tr><td><strong>corn</strong></td><td>excrescență pe capul unor animale</td><td>produs de patiserie</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔀 Paronimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Paronimele sunt cuvinte cu <strong>formă asemănătoare</strong> (dar nu identică) și <strong>sens diferit</strong>. Pot crea confuzii în vorbire.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Pereche paronimică</th><th>Sens 1</th><th>Sens 2</th></tr></thead>
                <tbody>
                  <tr><td><strong>original</strong> / <strong>originar</strong></td><td>inedit, nou</td><td>care este de origine din...</td></tr>
                  <tr><td><strong>a emite</strong> / <strong>a admite</strong></td><td>a trimite semnale</td><td>a accepta</td></tr>
                  <tr><td><strong>atlas</strong> / <strong>atlaz</strong></td><td>colecție de hărți</td><td>tip de stofă</td></tr>
                  <tr><td><strong>complement</strong> / <strong>compliment</strong></td><td>termen gramatical</td><td>laudă, apreciere</td></tr>
                  <tr><td><strong>a adopta</strong> / <strong>a adapta</strong></td><td>a lua ca propriu</td><td>a potrivi</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Paronimele sunt o sursă frecventă de greșeli. Atenție la diferențele mici de formă care duc la sensuri complet diferite!</p>
              </div>
            </div>
          `
        },

        {
          id: "familia-de-cuvinte",
          title: "Familia de cuvinte",
          content: `
            <div class="content-block">
              <div class="atentie">
                <div class="atentie-label">📘 Notă despre programă</div>
                <p>Familia de cuvinte (derivarea, prefixarea, compunerea, conversiunea) nu este introdusă ca lecție separată în manualul de clasa a V-a aprobat de MEN (ediția 2022). Aceste noțiuni sunt studiate sistematic în <strong>clasa a VI-a</strong>. Conținutul de mai jos este inclus ca referință pentru aprofundare.</p>
              </div>
            </div>
            <div class="content-block">
              <h4>🌳 Familia de cuvinte</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Familia de cuvinte este totalitatea cuvintelor formate de la același cuvânt de bază (rădăcină), prin derivare sau compunere.</p>
              </div>
              <p>Cuvintele dintr-o familie de cuvinte au înțeles înrudit (se referă la aceeași idee de bază).</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu – familia cuvântului „carte"</div>
                <p>• <strong>carte</strong> (cuvântul de bază)</p>
                <p>• <strong>cărticică</strong> (diminutiv)</p>
                <p>• <strong>cărțulie</strong> (diminutiv)</p>
                <p>• <strong>cărțoi</strong> (augmentativ)</p>
                <p>• <strong>cărturar</strong> (om învățat)</p>
                <p>• <strong>librărie</strong> (împrumutat din fr., nu face familia)</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu – familia cuvântului „apă"</div>
                <p>• <strong>apă</strong> → <strong>apuță</strong>, <strong>apărel</strong>, <strong>apos</strong>, <strong>apăros</strong>, <strong>înota</strong> (nu face familia), <strong>a adăpa</strong>, <strong>adăpătoare</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt de bază</th><th>Familia de cuvinte (exemple)</th></tr></thead>
                <tbody>
                  <tr><td><strong>pădure</strong></td><td>pădureț, pădurice, pădurar, pădureancă, împădurire</td></tr>
                  <tr><td><strong>floare</strong></td><td>floricică, florar, florărie, înflorit, floral</td></tr>
                  <tr><td><strong>drag</strong></td><td>drăguț, drăgălaș, drăgălășenie, drăgostire, îndrăgostit</td></tr>
                  <tr><td><strong>mare</strong> (adj.)</td><td>mărire, mări, măreț, mărețe, mărunt (antonim)</td></tr>
                </tbody>
              </table>
              <h5>Mijloace de formare a cuvintelor</h5>
              <ul>
                <li><strong>Derivarea</strong> – adăugare de prefixe sau sufixe: <em>ne-fericit</em>, <em>frumosețe</em></li>
                <li><strong>Compunerea</strong> – unirea a două sau mai multe cuvinte: <em>floarea-soarelui</em>, <em>untdelemn</em></li>
                <li><strong>Conversiunea</strong> – schimbarea clasei gramaticale fără modificarea formei: <em>binele</em> (substantiv din adjectiv)</li>
              </ul>
            </div>
          `
        },

        {
          id: "camp-lexical",
          title: "Câmpul lexical",
          content: `
            <div class="content-block">
              <h4>🗂️ Câmpul lexical</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Câmpul lexical cuprinde <strong>toate cuvintele care se raportează la aceeași idee</strong>, putând să aibă formă complet diferită sau apropiată. Ele aparțin aceluiași domeniu, având <strong>trăsături de sens comune</strong>, dar și trăsături de sens care le deosebesc.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Reguli importante (manual)</div>
                <p>• Câmpul lexical poate cuprinde cuvinte din <strong>aceeași parte de vorbire</strong> (substantive, adjective sau verbe).</p>
                <p>• În câmpul lexical al unui cuvânt intră și <strong>sinonimele</strong> acestuia și <strong>expresiile</strong> care îl conțin.</p>
                <p>• Un cuvânt cu mai multe sensuri poate intra în <strong>câmpuri lexicale diferite</strong>. De exemplu, <em>amar</em> poate intra în câmpul gustului (<em>gust amar</em>), dar și al sentimentelor (<em>Am mult amar în suflet</em>).</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual – câmpul lexical al relațiilor de rudenie</div>
                <p>mamă, tată, frate, soră, bunic, bunică, unchi, mătușă, văr, verișoară, nepot, cumnată, soț, soție, cumnat</p>
                <p>→ Toate aceste cuvinte sunt <strong>substantive</strong> și se raportează la relații de familie.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual – câmpul lexical al fructelor (Shel Silverstein, „Opșpe arome")</div>
                <p><em>„Măr, migdale, ciocolată, lămâie, cireșe-amare, zmeură, fistic, banane, căpșuni, alune, piersici, cocos, pepene"</em></p>
                <p>→ Câmpul lexical al fructelor/aromelor.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Câmp lexical</th><th>Cuvinte incluse (exemple)</th></tr></thead>
                <tbody>
                  <tr><td>Materii școlare</td><td>biologie, geografie, istorie, matematică, română, fizică, chimie</td></tr>
                  <tr><td>Insecte</td><td>albină, buburuză, furnică, lăcustă, muscă, țânțar</td></tr>
                  <tr><td>Emoții</td><td>bucurie, dezgust, frică, furie, tristețe, mândrie, nesiguranță</td></tr>
                  <tr><td>Jocuri</td><td>de-a v-ați ascunselea, domino, rummy, leapșa, șotron</td></tr>
                  <tr><td>Familia</td><td>mamă, tată, frate, soră, bunic, bunică, unchi, mătușă, văr</td></tr>
                  <tr><td>Transportul</td><td>mașină, tren, avion, autobuz, șofer, pilot, drum, autostradă</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Câmp lexical ≠ Familia de cuvinte</div>
                <p>• <strong>Câmpul lexical</strong>: cuvinte pe aceeași temă, <em>indiferent de origine</em>. Ex.: <em>apă, râu, lac, ocean, ploaie</em> → câmpul lexical al apei.</p>
                <p>• <strong>Familia de cuvinte</strong>: cuvinte derivate din același radical. Ex.: <em>apă, apos, adăpat, adăpătoare</em> → familia lui <em>apă</em>.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  3. MORFOLOGIE
    // ============================================================
    {
      id: "morfologie",
      title: "Morfologie",
      subtitle: "Substantiv, articol, adjectiv, pronume, numeral, verb",
      icon: "📝",
      chapters: [

        {
          id: "substantivul",
          title: "Substantivul",
          content: `
            <div class="content-block">
              <h4>📌 Substantivul – definiție și feluri</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Substantivul este partea de vorbire flexibilă care denumește <strong>ființe, lucruri, fenomene ale naturii, acțiuni, stări, însușiri</strong> considerate ca obiecte.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Comun</strong></td><td>Denumește o clasă de obiecte (se scrie cu literă mică)</td><td>casă, om, floare, carte</td></tr>
                  <tr><td><strong>Propriu</strong></td><td>Denumește un obiect unic (se scrie cu literă mare)</td><td>Ion, România, București, Dunărea</td></tr>
                  <tr><td><strong>Simplu</strong></td><td>Format dintr-un singur cuvânt</td><td>masă, elev, prieten</td></tr>
                  <tr><td><strong>Compus</strong></td><td>Format din două sau mai multe cuvinte</td><td>floarea-soarelui, câine-lup, untdelemn</td></tr>
                  <tr><td><strong>Colectiv</strong></td><td>La singular denumește un grup de obiecte</td><td>turmă, pădure, stol, haită, armată</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>⚧️ Genul substantivului</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Substantivele sunt de trei genuri: <strong>masculin</strong> (un, doi), <strong>feminin</strong> (o, două), <strong>neutru</strong> (un, două).</p>
                <p>Substantivele au două numere: <strong>singular</strong> (un singur obiect) și <strong>plural</strong> (două sau mai multe obiecte).</p>
                <p><strong>Desinențele</strong> sunt sunetele sau grupurile de sunete așezate la sfârșitul substantivelor pentru a indica genul și numărul acestora.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – etimologia cuvântului „casă"</div>
                <p>Substantivul <em>casă</em> înseamnă o clădire destinată locuirii. Provine din limba latină (<em>casa</em>), care însemna „colibă, bordei" (locuință sărăcăcioasă). Sensul s-a îmbogățit în timp.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Gen</th><th>Singular</th><th>Plural</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Masculin</strong></td><td>un</td><td>doi</td><td>un copil – doi copii; un munte – doi munți</td></tr>
                  <tr><td><strong>Feminin</strong></td><td>o</td><td>două</td><td>o casă – două case; o floare – două flori</td></tr>
                  <tr><td><strong>Neutru</strong></td><td>un (ca masc.)</td><td>două (ca fem.)</td><td>un scaun – două scaune; un câmp – două câmpuri</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție – Genul neutru</div>
                <p>Substantivele neutre se comportă ca masculine la singular și ca feminine la plural. Ex: <em>un tablou (masc.) – două tablouri (fem.)</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔢 Numărul substantivului</h4>
              <ul>
                <li><strong>Singular</strong> – un singur obiect: <em>carte, elev, masă</em></li>
                <li><strong>Plural</strong> – mai multe obiecte: <em>cărți, elevi, mese</em></li>
              </ul>
              <p>Unele substantive se folosesc <strong>doar la singular</strong> (<em>singularia tantum</em>): aur, lapte, oțel, sete, foame, vreme (în unele sensuri).</p>
              <p>Altele se folosesc <strong>doar la plural</strong> (<em>pluralia tantum</em>): ochelari, pantaloni, zori, aplauze, finanțe.</p>
            </div>

            <div class="content-block">
              <h4>🏷️ Cazurile substantivului</h4>
              <table class="teoria-table">
                <thead><tr><th>Caz</th><th>Întrebare</th><th>Funcție principală</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Nominativ (N)</strong></td><td>Cine? Ce?</td><td>Subiect, Nume predicativ</td><td><em><u>Elevul</u> citește.</em></td></tr>
                  <tr><td><strong>Acuzativ (Ac)</strong></td><td>Pe cine? Ce? (cu prep.)</td><td>Complement direct, indirect, circumstanțial</td><td><em>Văd <u>cartea</u>. Merg <u>la școală</u>.</em></td></tr>
                  <tr><td><strong>Genitiv (G)</strong></td><td>Al/a/ai/ale cui?</td><td>Atribut genitival</td><td><em>Caietul <u>elevului</u>.</em></td></tr>
                  <tr><td><strong>Dativ (D)</strong></td><td>Cui?</td><td>Complement indirect</td><td><em>Dau <u>colegului</u> cartea.</em></td></tr>
                  <tr><td><strong>Vocativ (V)</strong></td><td>(adresare directă)</td><td>Adresare</td><td><em><u>Ioane</u>, vino!</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "articolul",
          title: "Articolul",
          content: `
            <div class="content-block">
              <h4>🔖 Articolul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Articolul este partea de vorbire care însoțește substantivul și arată dacă obiectul este <strong>cunoscut</strong> (articol hotărât) sau <strong>necunoscut</strong> (articol nehotărât) de vorbitor și ascultător.</p>
              </div>

              <h5>1. Articolul hotărât</h5>
              <p>Arată că obiectul este <strong>cunoscut</strong>. Se adaugă direct la <strong>sfârșitul</strong> substantivului, formând cu acesta o singură unitate. La masculin și neutru sg., se leagă prin sunetul de legătură <em>-u-</em> (de ex. <em>băiatul</em>).</p>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – exercițiu cu „stâlp, stradă, semafor"</div>
                <p>Stâlp → <strong>stâlpul</strong> | Stradă → <strong>strada</strong> | Semafor → <strong>semaforul</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Gen/Număr</th><th>Nominativ-Acuzativ</th><th>Genitiv-Dativ</th></tr></thead>
                <tbody>
                  <tr><td>Masc. sg.</td><td>elevul, copilul (-ul, -l)</td><td>elevului, copilului (-ului, -lui)</td></tr>
                  <tr><td>Fem. sg.</td><td>cartea, casa (-a)</td><td>cărții, casei (-ii, -ei)</td></tr>
                  <tr><td>Neutru sg.</td><td>scaunul (-ul)</td><td>scaunului (-ului)</td></tr>
                  <tr><td>Masc./Neutru pl.</td><td>elevii, scaunele (-ii, -ele)</td><td>elevilor, scaunelor (-ilor, -elor)</td></tr>
                  <tr><td>Fem. pl.</td><td>casele (-ele)</td><td>caselor (-elor)</td></tr>
                </tbody>
              </table>

              <h5>2. Articolul nehotărât</h5>
              <p>Arată că obiectul este necunoscut, nedeterminat. Stă <strong>înaintea</strong> substantivului:</p>
              <table class="teoria-table">
                <thead><tr><th>Gen/Număr</th><th>N-Ac</th><th>G-D</th></tr></thead>
                <tbody>
                  <tr><td>Masc. sg.</td><td>un copil</td><td>unui copil</td></tr>
                  <tr><td>Fem. sg.</td><td>o casă</td><td>unei case</td></tr>
                  <tr><td>Plural (toate gen.)</td><td>niște copii / case</td><td>unor copii / case</td></tr>
                </tbody>
              </table>

              <h5>3. Articolul posesiv-genitival</h5>
              <p>Formele: <strong>al, a, ai, ale</strong>. Însoțește substantivele în genitiv sau adjectivele posesive:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Cartea <strong>a</strong> doi elevi</em></p>
                <p>• <em>Caietul <strong>al</strong> meu</em></p>
                <p>• <em>Prietenii <strong>ai</strong> mei</em></p>
                <p>• <em>Cărțile <strong>ale</strong> mele</em></p>
              </div>

              <h5>4. Articolul demonstrativ (adjectival)</h5>
              <p>Formele: <strong>cel, cea, cei, cele</strong>. Însoțește adjectivele la gradul superlativ sau construcții speciale:</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em><strong>cel</strong> mai bun elev</em></p>
                <p>• <em><strong>cea</strong> mai frumoasă floare</em></p>
                <p>• <em><strong>cei</strong> mai muncitori studenți</em></p>
              </div>
            </div>
          `
        },

        {
          id: "adjectivul",
          title: "Adjectivul",
          content: `
            <div class="content-block">
              <h4>🎨 Adjectivul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Adjectivul este partea de vorbire flexibilă care exprimă <strong>însușiri ale obiectelor</strong> (denumite prin substantive). Adjectivul se acordă cu substantivul în <strong>gen, număr și caz</strong>. În propoziție, adjectivul este de obicei <strong>atribut</strong>.</p>
              </div>

              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – exemplu cu Spiderman</div>
                <p><em>„Spiderman a ajuns un supererou după ce l-a mușcat un păianjen <strong>radioactiv</strong>. El duce o viață <strong>dublă</strong>, eroul ascunzându-se sub înfățișarea <strong>timidă</strong> a lui Peter Parker."</em></p>
                <p>Adjective identificate: <em>radioactiv, dublă, timidă</em> – se acordă cu substantivele pe care le determină.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Propriu-zis</td><td>frumos, mare, bun, vechi, roșu, înalt</td></tr>
                  <tr><td>Provenit din participiu</td><td>scris (caietul scris), citit, învățat</td></tr>
                  <tr><td>Provenit din numeral</td><td>primul elev, a doua zi</td></tr>
                  <tr><td>Pronominal</td><td>acest elev, acel copil, orice om, fiecare zi</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>📊 Gradele de comparație</h4>
              <table class="teoria-table">
                <thead><tr><th>Grad</th><th>Tip</th><th>Structură</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td rowspan="1"><strong>Pozitiv</strong></td><td>–</td><td>adjectivul simplu</td><td><em>un elev bun</em></td></tr>
                  <tr><td rowspan="3"><strong>Comparativ</strong></td><td>de superioritate</td><td>mai + adj.</td><td><em>mai bun (decât)</em></td></tr>
                  <tr><td>de egalitate</td><td>la fel de / tot atât de + adj.</td><td><em>la fel de bun (ca)</em></td></tr>
                  <tr><td>de inferioritate</td><td>mai puțin + adj.</td><td><em>mai puțin bun (decât)</em></td></tr>
                  <tr><td rowspan="2"><strong>Superlativ</strong></td><td>relativ</td><td>cel mai / cel mai puțin + adj.</td><td><em>cel mai bun din clasă</em></td></tr>
                  <tr><td>absolut</td><td>foarte / extrem de / tare + adj.</td><td><em>foarte bun, extrem de frumos</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Adjective cu forme sintetice (neregulate)</div>
                <p>• <em>bun</em> → <strong>mai bun</strong> (corect) sau <em>mai bine</em> (adverb)</p>
                <p>• <em>rău</em> → <strong>mai rău</strong></p>
                <p>• <em>mare</em> → <strong>mai mare</strong></p>
                <p>• <em>mic</em> → <strong>mai mic</strong></p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔗 Acordul adjectivului</h4>
              <p>Adjectivul se acordă <strong>întotdeauna</strong> cu substantivul pe care îl determină:</p>
              <table class="teoria-table">
                <thead><tr><th>Substantiv</th><th>Adjectiv acordat</th></tr></thead>
                <tbody>
                  <tr><td>elev (masc. sg.)</td><td>elev bun</td></tr>
                  <tr><td>elevă (fem. sg.)</td><td>elevă bună</td></tr>
                  <tr><td>elevi (masc. pl.)</td><td>elevi buni</td></tr>
                  <tr><td>eleve (fem. pl.)</td><td>eleve bune</td></tr>
                </tbody>
              </table>
              <h5>Funcții sintactice ale adjectivului</h5>
              <ul>
                <li><strong>Atribut adjectival</strong> – determină un substantiv: <em>Elevul <u>harnic</u> învaţă.</em></li>
                <li><strong>Nume predicativ</strong> – face parte din predicatul nominal: <em>Elevul este <u>harnic</u>.</em></li>
              </ul>
            </div>

            <div class="content-block">
              <h4>🔗 Articolul demonstrativ (adjectival)</h4>
              <p>Articolul demonstrativ (<strong>cel, cea, cei, cele, celui, celei, celor</strong>) leagă un adjectiv de substantivul determinat. Se acordă în gen și număr cu substantivul.</p>
              <table class="teoria-table">
                <thead><tr><th>Gen/Nr.</th><th>N-Ac</th><th>G-D</th></tr></thead>
                <tbody>
                  <tr><td>Masculin sg.</td><td>cel</td><td>celui</td></tr>
                  <tr><td>Feminin sg.</td><td>cea</td><td>celei</td></tr>
                  <tr><td>Masculin pl.</td><td>cei</td><td>celor</td></tr>
                  <tr><td>Feminin pl.</td><td>cele</td><td>celor</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – exemple</div>
                <p><em>Vreau pelerina <strong>cea</strong> roșie, nu pelerina neagră.</em></p>
                <p><em>Va juca rolul lui Superman băiatul <strong>cel</strong> mic, nu băiatul cel înalt.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Grad superlativ relativ</div>
                <p>Articolul demonstrativ este prezent în structura superlativului relativ: <em><strong>cel mai</strong> bun elev</em>, <em><strong>cea mai</strong> frumoasă zi</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "pronumele",
          title: "Pronumele personal și de politețe",
          content: `
            <div class="content-block">
              <h4>👤 Pronumele personal</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Pronumele este partea de vorbire care <strong>înlocuiește un substantiv</strong>, preluând rolul acestuia în propoziție.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">📖 Observație din manual – pronunțare</div>
                <p>Pronumele <em>eu, el, ei, ele</em> se scriu cu <em>e</em> și se pronunță la inițială cu <em>ie</em> (<em>ieu, iel, iei, iele</em>). Pronumele <em>ea</em> se scrie cu <em>e</em> și se pronunță <em>ia</em>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Persoană</th><th>Număr</th><th>N (ac. neacc.)</th><th>Ac. neaccentuat</th><th>D. neaccentuat</th><th>D. accentuat</th></tr></thead>
                <tbody>
                  <tr><td>Pers. I</td><td>sg.</td><td>eu</td><td>mă, m-</td><td>îmi, mi-, mi</td><td>mie</td></tr>
                  <tr><td>Pers. II</td><td>sg.</td><td>tu</td><td>te</td><td>îți, ți-, ți</td><td>ție</td></tr>
                  <tr><td>Pers. III</td><td>sg. masc.</td><td>el</td><td>îl, l-</td><td>îi, i-</td><td>lui</td></tr>
                  <tr><td>Pers. III</td><td>sg. fem.</td><td>ea</td><td>o</td><td>îi, i-</td><td>ei</td></tr>
                  <tr><td>Pers. I</td><td>pl.</td><td>noi</td><td>ne</td><td>ne, ni-</td><td>nouă</td></tr>
                  <tr><td>Pers. II</td><td>pl.</td><td>voi</td><td>vă, v-</td><td>vă, vi-</td><td>vouă</td></tr>
                  <tr><td>Pers. III</td><td>pl. masc.</td><td>ei</td><td>îi, i-</td><td>le, li-</td><td>lor</td></tr>
                  <tr><td>Pers. III</td><td>pl. fem.</td><td>ele</td><td>le</td><td>le, li-</td><td>lor</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎩 Pronumele de politețe</h4>
              <p>Pronumele de politețe se folosesc la adresare formală. Formele principale:</p>
              <table class="teoria-table">
                <thead><tr><th>Formă</th><th>Utilizare</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>dumneavoastră</strong></td><td>politețe față de adulți (sg. și pl.)</td><td><em>Dumneavoastră ați spus...</em></td></tr>
                  <tr><td><strong>dumneata / mata</strong></td><td>politețe familiară</td><td><em>Dumneata ești profesorul?</em></td></tr>
                  <tr><td><strong>dânsul / dânsa</strong></td><td>persoana a III-a, politețe</td><td><em>Dânsul este directorul.</em></td></tr>
                  <tr><td><strong>dânșii / dânsele</strong></td><td>pers. III pl., politețe</td><td><em>Dânșii au sosit.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeală frecventă</div>
                <p>Forma corectă este <strong>dumneavoastră</strong> (nu „dumneavoastre"). La plural rămâne tot <em>dumneavoastră</em>!</p>
              </div>
            </div>
          `
        },

        {
          id: "numeralul",
          title: "Numeralul",
          content: `
            <div class="content-block">
              <h4>🔢 Numeralul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Numeralul este partea de vorbire care exprimă un <strong>număr</strong> sau <strong>ordinea</strong> prin numărare.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">📖 Notă din manual – un/o ca numeral vs. articol</div>
                <p>Cuvintele <em>un</em> și <em>o</em> sunt <strong>numerale cardinale</strong> atunci când: (a) sunt în relație cu alte numerale (<em>o pungă cu aur și <strong>două</strong> cu nestemate</em>); (b) sunt însoțite de <em>singur/singură</em> (<em>Un singur scop avea vrăjitorul</em>); (c) sunt însoțite de <em>numai, doar</em>.</p>
                <p>În celelalte cazuri, <em>un</em> și <em>o</em> sunt <strong>articole nehotărâte</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de numeral</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Cardinal</strong></td><td>exprimă o cantitate</td><td>unu, doi, trei, zece, o sută</td></tr>
                  <tr><td><strong>Ordinal</strong></td><td>exprimă ordinea</td><td>primul, al doilea, a treia, al zecelea</td></tr>
                  <tr><td><strong>Colectiv</strong></td><td>exprimă un grup</td><td>amândoi, tustrei, câteșipatru</td></tr>
                  <tr><td><strong>Distributiv</strong></td><td>exprimă distribuția</td><td>câte unul, câte doi, câte trei</td></tr>
                  <tr><td><strong>Multiplicativ</strong></td><td>exprimă de câte ori</td><td>îndoit, întreit, de două ori</td></tr>
                  <tr><td><strong>Fracționar</strong></td><td>exprimă o fracțiune</td><td>o doime, o treime, două cincimi</td></tr>
                  <tr><td><strong>Adverbial</strong></td><td>exprimă de câte ori (adverbial)</td><td>o dată, de două ori, de trei ori</td></tr>
                </tbody>
              </table>

              <h5>Numeralul cardinal – forme importante</h5>
              <table class="teoria-table">
                <thead><tr><th>Număr</th><th>Masculin / Neutru</th><th>Feminin</th></tr></thead>
                <tbody>
                  <tr><td>1</td><td>unu / un</td><td>una / o</td></tr>
                  <tr><td>2</td><td>doi</td><td>două</td></tr>
                  <tr><td>12</td><td>doisprezece</td><td>douăsprezece</td></tr>
                  <tr><td>20</td><td colspan="2">douăzeci</td></tr>
                  <tr><td>100</td><td colspan="2">o sută</td></tr>
                  <tr><td>1000</td><td colspan="2">o mie</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Greșeli frecvente</div>
                <p>• <strong>doisprezece</strong> (nu „doizece și doi" la 12!)</p>
                <p>• <strong>douăsprezece</strong> (fem.) vs. <strong>doisprezece</strong> (masc.)</p>
                <p>• <strong>o mie</strong> (nu „una mie")</p>
              </div>
            </div>
          `
        },

        {
          id: "verbul",
          title: "Verbul",
          content: `
            <div class="content-block">
              <h4>⚡ Verbul – definiție și feluri</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Verbul este partea de vorbire flexibilă care exprimă o <strong>acțiune, stare sau existență</strong> și se acordă cu subiectul în persoană și număr.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – I.L. Caragiale, „Vizită..."</div>
                <p><em>„El a pus sabia în teacă, <strong>salută</strong> militărește și <strong>merge</strong> într-un colț al salonului unde, pe două mese, pe canapea, pe foteluri și pe jos, <strong>stau</strong> grămădite fel de fel de jucării. Dintre toate, maiorul <strong>alege</strong> o trâmbițâ și o tobă. <strong>Atârnă</strong> toba de gât, <strong>suie</strong> pe un superb cal vânăt rotat, <strong>pune</strong> trâmbița la gură."</em></p>
                <p>Verbele din text arată acțiunile personajului: <em>a pus, salută, merge, stau, alege, atârnă, suie, pune</em>. Prezenţa multor verbe este specifică textului narativ.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de verb</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Predicativ</strong></td><td>are înțeles de sine stătător, poate fi singur predicat</td><td>a merge, a citi, a mânca</td></tr>
                  <tr><td><strong>Copulativ</strong></td><td>leagă subiectul de numele predicativ</td><td>a fi, a deveni, a părea, a se face, a rămâne, a ieși, a ajunge</td></tr>
                  <tr><td><strong>Auxiliar</strong></td><td>ajută la formarea unor timpuri sau diateze</td><td>a fi, a avea, a vrea (voi)</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🔄 Conjugările verbelor</h4>
              <table class="teoria-table">
                <thead><tr><th>Conjugarea</th><th>Infinitiv</th><th>Terminație</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>I</td><td>-a</td><td>-a</td><td>a cânta, a lucra, a merge → (corect: merge = conj. II!)</td></tr>
                  <tr><td>II</td><td>-ea</td><td>-ea</td><td>a merge, a vedea, a tăcea</td></tr>
                  <tr><td>III</td><td>-e</td><td>-e</td><td>a face, a zice, a rupe, a pune</td></tr>
                  <tr><td>IV</td><td>-i / -î</td><td>-i / -î</td><td>a dormi, a fugi, a coborî, a hotărî</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>⏰ Moduri și timpuri</h4>
              <h5>Moduri personale</h5>
              <table class="teoria-table">
                <thead><tr><th>Mod</th><th>Timpuri</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Indicativ</strong></td><td>prezent, imperfect, perf. simplu, perf. compus, mai-mult-ca-perf., viitor</td><td>eu cânt, eu cântam, eu cântai, eu am cântat, eu cântasem, eu voi cânta</td></tr>
                  <tr><td><strong>Conjunctiv</strong></td><td>prezent, perfect</td><td>să cânt, să fi cântat</td></tr>
                  <tr><td><strong>Condițional-optativ</strong></td><td>prezent, perfect</td><td>aș cânta, aș fi cântat</td></tr>
                  <tr><td><strong>Imperativ</strong></td><td>(prezent)</td><td>cântă! (tu), cântați! (voi)</td></tr>
                </tbody>
              </table>
              <h5>Moduri nepersonale</h5>
              <table class="teoria-table">
                <thead><tr><th>Mod</th><th>Forma</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Infinitiv</strong></td><td>a + verb</td><td>a cânta, a merge</td></tr>
                  <tr><td><strong>Gerunziu</strong></td><td>-ând / -ind</td><td>cântând, mergând, venind</td></tr>
                  <tr><td><strong>Participiu</strong></td><td>-at / -ut / -it / -s / -t</td><td>cântat, văzut, venit, scris, tăcut</td></tr>
                  <tr><td><strong>Supin</strong></td><td>de + participiu</td><td>de cântat, de mers, de scris</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>📅 Timpurile indicativului – conjugarea verbului <em>a cânta</em></h4>
              <table class="teoria-table">
                <thead><tr><th>Timp</th><th>Pers. I sg.</th><th>Pers. II sg.</th><th>Pers. III sg.</th><th>Pers. I pl.</th><th>Pers. II pl.</th><th>Pers. III pl.</th></tr></thead>
                <tbody>
                  <tr><td><strong>Prezent</strong></td><td>cânt</td><td>cânți</td><td>cântă</td><td>cântăm</td><td>cântați</td><td>cântă</td></tr>
                  <tr><td><strong>Imperfect</strong></td><td>cântam</td><td>cântai</td><td>cânta</td><td>cântam</td><td>cântați</td><td>cântau</td></tr>
                  <tr><td><strong>Perf. simplu</strong></td><td>cântai</td><td>cântași</td><td>cântă</td><td>cântarăm</td><td>cântarăți</td><td>cântară</td></tr>
                  <tr><td><strong>Perf. compus</strong></td><td>am cântat</td><td>ai cântat</td><td>a cântat</td><td>am cântat</td><td>ați cântat</td><td>au cântat</td></tr>
                  <tr><td><strong>Mai-mult-ca-perf.</strong></td><td>cântasem</td><td>cântaseși</td><td>cântase</td><td>cântaserăm</td><td>cântaserăți</td><td>cântaseră</td></tr>
                  <tr><td><strong>Viitor</strong></td><td>voi cânta</td><td>vei cânta</td><td>va cânta</td><td>vom cânta</td><td>veți cânta</td><td>vor cânta</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>� Verbele auxiliare <em>a fi</em> și <em>a avea</em> la prezent</h4>
              <p>Aceste două verbe sunt foarte importante, pentru că ajută la formarea altor timpuri și moduri. De aceea trebuie știute foarte bine.</p>
              <table class="teoria-table">
                <thead><tr><th>Persoană</th><th>a fi</th><th>a avea</th></tr></thead>
                <tbody>
                  <tr><td>eu</td><td>sunt</td><td>am</td></tr>
                  <tr><td>tu</td><td>ești</td><td>ai</td></tr>
                  <tr><td>el / ea</td><td>este (e)</td><td>are</td></tr>
                  <tr><td>noi</td><td>suntem</td><td>avem</td></tr>
                  <tr><td>voi</td><td>sunteți</td><td>aveți</td></tr>
                  <tr><td>ei / ele</td><td>sunt</td><td>au</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Se scrie și se pronunță <strong>sunt, suntem, sunteți</strong> (nu „sînt”). Formele lui <em>a avea</em> (am, ai, a, au) ajută la formarea perfectului compus: <em>am cântat, ai citit, au mers</em>.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>�🔁 Diatezele verbului</h4>
              <table class="teoria-table">
                <thead><tr><th>Diateză</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Activă</strong></td><td>subiectul face acțiunea</td><td><em>Elevul scrie tema.</em></td></tr>
                  <tr><td><strong>Pasivă</strong></td><td>subiectul suferă acțiunea (a fi + participiu)</td><td><em>Tema este scrisă de elev.</em></td></tr>
                  <tr><td><strong>Reflexivă</strong></td><td>acțiunea se răsfrânge asupra subiectului (se, mă, te...)</td><td><em>Elevul se spală. Mă gândesc.</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "parti-neflexibile-intro",
          title: "Părțile de vorbire neflexibile (introducere)",
          content: `
            <div class="content-block">
              <h4>🧭 Ce sunt părțile neflexibile?</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Părțile de vorbire neflexibile <strong>nu își schimbă forma</strong> (nu se modifică după gen, număr, caz, persoană). Ele sunt: <strong>adverbul, prepoziția, conjuncția și interjecția</strong>.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📍 Adverbul</h4>
              <p>Arată o circumstanță (loc, timp, mod) și determină de obicei un verb.</p>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>De loc</td><td>aici, acolo, sus, jos, aproape</td></tr>
                  <tr><td>De timp</td><td>azi, ieri, mâine, acum, atunci</td></tr>
                  <tr><td>De mod</td><td>bine, repede, încet, așa, frumos</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu</div>
                <p>• <em>Copilul aleargă <strong>repede</strong>.</em> (cum aleargă? repede – adverb de mod)</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔗 Prepoziția</h4>
              <p>Leagă cuvintele într-o propoziție, arătând un raport. Nu are înțeles de sine stătător.</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>Prepoziții: <em>la, în, pe, cu, de, spre, sub, lângă, pentru, fără</em></p>
                <p>• <em>Merg <strong>la</strong> școală. Cartea este <strong>pe</strong> masă.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>➕ Conjuncția</h4>
              <p>Leagă cuvinte de același fel sau propoziții.</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>Conjuncții: <em>și, sau, ori, dar, iar, însă, că, să, deoarece</em></p>
                <p>• <em>Citesc <strong>și</strong> scriu. Vin, <strong>dar</strong> mai târziu.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>❕ Interjecția</h4>
              <p>Exprimă o emoție sau imită un sunet din natură (onomatopee).</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>De emoție: <em>of!, vai!, aoleu!, hei!, bravo!</em></p>
                <p>Onomatopee: <em>poc!, trosc!, miau!, ham!, cucurigu!</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Aceste patru părți de vorbire se studiază pe larg în clasa a VI-a. Aici le-am cunoscut pe scurt, ca să le recunoști în text.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  4. SINTAXĂ
    // ============================================================
    {
      id: "sintaxa",
      title: "Sintaxă",
      subtitle: "Propoziția, subiectul, predicatul, atributul, complementul",
      icon: "🔗",
      chapters: [

        {
          id: "propozitia",
          title: "Propoziția",
          content: `
            <div class="content-block">
              <h4>📜 Propoziția și fraza</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Propoziția este o comunicare cu un <strong>singur predicat</strong>. Părțile de propoziție sunt <strong>principale</strong> (predicatul și subiectul) și <strong>secundare</strong> (care îmbogățesc sensul propoziției).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Criteriu</th><th>Tip</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td rowspan="2">Structură</td><td>Simplă</td><td>Conține numai subiect și predicat</td><td><em>Elevul citește.</em></td></tr>
                  <tr><td>Dezvoltată</td><td>Are și alte elemente (atribute, complemente)</td><td><em>Elevul harnic citește cartea interesantă.</em></td></tr>
                  <tr><td rowspan="2">Conținut</td><td>Afirmativă</td><td>Enunță ceva pozitiv</td><td><em>Maria vine la școală.</em></td></tr>
                  <tr><td>Negativă</td><td>Neagă ceva (nu, nici, niciodată)</td><td><em>Maria nu vine la școală.</em></td></tr>
                  <tr><td rowspan="3">Scop</td><td>Enunțiativă</td><td>Comunică o informație (.)</td><td><em>Plouă afară.</em></td></tr>
                  <tr><td>Interogativă</td><td>Formulează o întrebare (?)</td><td><em>Vine Maria?</em></td></tr>
                  <tr><td>Exclamativă</td><td>Exprimă o emoție (!)</td><td><em>Ce frumos e!</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "subiectul",
          title: "Subiectul",
          content: `
            <div class="content-block">
              <h4>👑 Subiectul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Subiectul este partea principală de propoziție care <strong>arată cine face acțiunea</strong> exprimată de predicat. Răspunde la întrebările <strong>Cine? Ce?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de subiect</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Exprimat simplu</strong></td><td>Un singur element</td><td><em><u>Elevul</u> citește.</em></td></tr>
                  <tr><td><strong>Exprimat multiplu</strong></td><td>Două sau mai multe elemente</td><td><em><u>Ion și Maria</u> citesc.</em></td></tr>
                  <tr><td><strong>Inclus</strong></td><td>Neexprimat, dar inclus în desinența verbului</td><td><em>Citesc. (= eu citesc)</em></td></tr>
                  <tr><td><strong>Subînțeles</strong></td><td>Neexprimat, dar se deduce din context</td><td><em>Ion a venit. A adus o carte. (= Ion)</em></td></tr>
                </tbody>
              </table>
              <h5>Exprimarea subiectului</h5>
              <ul>
                <li><strong>Substantiv</strong>: <em><u>Mama</u> gătește.</em></li>
                <li><strong>Pronume</strong>: <em><u>El</u> citește. <u>Cine</u> vine?</em></li>
                <li><strong>Numeral</strong>: <em><u>Doi</u> au venit.</em></li>
                <li><strong>Infinitiv</strong>: <em><u>A înăța</u> este important.</em></li>
                <li><strong>Supin</strong>: <em><u>De alergat</u> obosește.</em></li>
                <li><strong>Orice parte de vorbire substantivizată</strong>: <em><u>Binele</u> învinge.</em></li>
              </ul>
            </div>
          `
        },

        {
          id: "predicatul",
          title: "Predicatul",
          content: `
            <div class="content-block">
              <h4>⚡ Predicatul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Predicatul este partea principală de propoziție care arată <strong>ce face subiectul</strong>. Poate fi <strong>predicat verbal</strong> (exprimat printr-un verb la mod personal) sau <strong>predicat nominal</strong> (verb copulativ + nume predicativ).</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">📖 Din manual – predicatul verbal</div>
                <p>Când predicatul se exprimă <strong>doar printr-un verb</strong>, se numește <strong>predicat verbal</strong>. Verbul poate fi la mod personal (prezent, perfect etc.) sau se poate combina cu un infinitiv: <em>Poate vorbi. Doresc a desena.</em></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Structură</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Predicat verbal (PV)</strong></td>
                    <td>Verb predicativ la un mod personal</td>
                    <td><em>Elevul <u>citește</u>. Maria <u>vine</u>. Ei <u>cântă</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Predicat nominal (PN)</strong></td>
                    <td>Verb copulativ + Nume predicativ</td>
                    <td><em>Elevul <u>este harnic</u>. Ea <u>a devenit medic</u>.</em></td>
                  </tr>
                </tbody>
              </table>

              <h5>Verbele copulative (leagă subiectul de NP)</h5>
              <p><strong>a fi, a deveni, a părea, a se face, a rămâne, a ieși, a ajunge, a se arăta, a se chema, a se numi, a însemna, a reprezenta</strong></p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple predicate nominale</div>
                <p>• <em>El <strong>este</strong> <u>profesor</u>.</em> → PN: este + NP (substantiv)</p>
                <p>• <em>Ea <strong>pare</strong> <u>tristă</u>.</em> → PN: pare + NP (adjectiv)</p>
                <p>• <em>El <strong>a devenit</strong> <u>director</u>.</em> → PN: a devenit + NP (substantiv)</p>
              </div>

              <h5>Exprimarea numelui predicativ</h5>
              <ul>
                <li><strong>Substantiv</strong>: <em>El este <u>elev</u>.</em></li>
                <li><strong>Adjectiv</strong>: <em>Ea este <u>frumoasă</u>.</em></li>
                <li><strong>Pronume</strong>: <em>Aceasta este <u>ea</u>.</em></li>
                <li><strong>Numeral</strong>: <em>El este <u>primul</u>.</em></li>
                <li><strong>Infinitiv / Supin</strong>: <em>A trăi înseamnă <u>a lupta</u>.</em></li>
              </ul>
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
                <div class="definitie-label">Definiție (conform manual cls. V)</div>
                <p>Atributul este partea secundară de propoziție care <strong>determină un substantiv</strong>. Întrebările atributului sunt: <strong>al/ai/ale cui?, care?, ce fel de?</strong></p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – tipuri de atribut exprimate prin substantiv și adjectiv</div>
                <p>• <em>Casa <strong>bătrânei</strong> este mică.</em> (atribut substantival genitival: al cui?)</p>
                <p>• <em>Casa <strong>nouă</strong> este mare.</em> (atribut adjectival: care casă?)</p>
                <p>• <em>Casa <strong>de cărămidă</strong> are pereți portocalii.</em> (atribut substantival prepozițional: ce fel?)</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de atribut</th><th>Exprimat prin</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Adjectival</strong></td><td>Adjectiv propriu-zis sau pronominal</td><td><em>elevul <u>harnic</u>; <u>acest</u> elev</em></td></tr>
                  <tr><td><strong>Substantival genitival</strong></td><td>Substantiv în genitiv</td><td><em>cartea <u>elevului</u></em></td></tr>
                  <tr><td><strong>Substantival prepozițional</strong></td><td>Substantiv precedat de prepoziție</td><td><em>caietul <u>de matematică</u></em></td></tr>
                  <tr><td><strong>Apozitiv (apoziție)</strong></td><td>Substantiv în nominativ (explică alt substantiv)</td><td><em>Ion, <u>colegul meu</u>, vine.</em></td></tr>
                  <tr><td><strong>Pronominal</strong></td><td>Pronume</td><td><em>cartea <u>lui</u></em></td></tr>
                  <tr><td><strong>Verbal</strong></td><td>Infinitiv, gerunziu, supin</td><td><em>dorința <u>de a reuși</u>; fata <u>cântând</u></em></td></tr>
                  <tr><td><strong>Adverbial</strong></td><td>Adverb</td><td><em>casa <u>de acolo</u>; ziua <u>de ieri</u></em></td></tr>
                </tbody>
              </table>
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
                <div class="definitie-label">Notă (conform manual cls. V)</div>
                <p>La clasa a V-a, manualul introduce atributul ca parte secundară de propoziție. Complementele circumstanțiale (CCL, CCT, CCM) și complementele directe/indirecte sunt studiate mai detaliat în <strong>clasele a V-a–VI-a</strong>. Tabelul de mai jos reunește toate tipurile pentru o imagine completă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Întrebare</th><th>Prep. specifice</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Direct (CD)</strong></td>
                    <td>Pe cine? Ce?</td>
                    <td>fără prep. / pe</td>
                    <td><em>Citesc <u>cartea</u>. Îl văd <u>pe Ion</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Indirect (CI)</strong></td>
                    <td>Cui? De cine? Despre ce?</td>
                    <td>la, cu, de, despre, pentru, față de, împotriva...</td>
                    <td><em>Dau <u>colegului</u> cartea. Mă gândesc <u>la tine</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Circ. de loc (CCL)</strong></td>
                    <td>Unde? Încotro? De unde?</td>
                    <td>la, în, pe, din, spre, lângă...</td>
                    <td><em>Merg <u>la școală</u>. Stau <u>acasă</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Circ. de timp (CCT)</strong></td>
                    <td>Când? De când? Până când? Cât timp?</td>
                    <td>în, pe, la, de, până, după...</td>
                    <td><em>Vin <u>mâine</u>. Plec <u>la ora 8</u>.</em></td>
                  </tr>
                  <tr>
                    <td><strong>Circ. de mod (CCM)</strong></td>
                    <td>Cum? În ce fel? Cât de?</td>
                    <td>ca, fără, cu, în loc de, cu cât...</td>
                    <td><em>Scrie <u>frumos</u>. Aleargă <u>ca vântul</u>.</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ CD vs. CI</div>
                <p><strong>CD</strong> – însoțit de prepoziția <em>pe</em> (pentru persoane) sau fără prepoziție: <em>Văd <u>o floare</u>. Îl cheamă <u>pe Ion</u>.</em><br>
                <strong>CI</strong> – însoțit de altă prepoziție (la, de, cu, despre...) sau în dativ: <em>Îi scriu <u>fratelui</u>. Vorbesc <u>despre tine</u>.</em></p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  5. LITERATURĂ
    // ============================================================
    {
      id: "literatura",
      title: "Literatură",
      subtitle: "Textul literar, figuri de stil, genuri și specii literare",
      icon: "📖",
      chapters: [

        {
          id: "textul-literar",
          title: "Textul literar vs. Textul nonliterar",
          content: `
            <div class="content-block">
              <h4>📖 Textul literar</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textul literar este o creație artistică în care autorul folosește <strong>limbajul artistic</strong> (figuri de stil, imagini, emoții) pentru a exprima trăiri, idei și viziuni despre lume.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Caracteristică</th><th>Text literar</th><th>Text nonliterar</th></tr></thead>
                <tbody>
                  <tr><td>Scop</td><td>estetic, artistic, emoțional</td><td>informativ, practic</td></tr>
                  <tr><td>Limbaj</td><td>figurat, expresiv, sugestiv</td><td>clar, precis, obiectiv</td></tr>
                  <tr><td>Figuri de stil</td><td>prezente</td><td>absente</td></tr>
                  <tr><td>Autor</td><td>scriitor, poet</td><td>jurnalist, om de știință</td></tr>
                  <tr><td>Exemple</td><td>roman, nuvelă, poezie, basm</td><td>știre, rețetă, articol enciclopedic</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "moduri-de-expunere",
          title: "Moduri de expunere",
          content: `
            <div class="content-block">
              <h4>🗣️ Moduri de expunere</h4>
              <table class="teoria-table">
                <thead><tr><th>Mod</th><th>Descriere</th><th>Mărci specifice</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Narațiunea</strong></td>
                    <td>Prezintă o succesiune de întâmplări, fapte, evenimente</td>
                    <td>Verbe la trecut (imperfect, perfect simplu/compus), conectori temporali (apoi, după aceea, în cele din urmă)</td>
                  </tr>
                  <tr>
                    <td><strong>Descrierea</strong></td>
                    <td>Prezintă caracteristicile unui obiect, loc sau persoană</td>
                    <td>Adjective, verbe la prezent, enumerații, comparații</td>
                  </tr>
                  <tr>
                    <td><strong>Dialogul</strong></td>
                    <td>Reproducere directă a vorbirii personajelor</td>
                    <td>Liniuță de dialog (–), ghilimele, verbe dicendi (a spune, a zice, a întreba, a răspunde)</td>
                  </tr>
                  <tr>
                    <td><strong>Monologul</strong></td>
                    <td>Vorbire interioară sau discurs al unui singur personaj</td>
                    <td>Persoana I, verbe de gândire/simțire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "textul-narativ",
          title: "Textul narativ – Momentele subiectului",
          content: `
            <div class="content-block">
              <h4>📚 Textul narativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textul narativ este textul care prezintă o serie de fapte, întâmplări, acțiuni, legate cauzal și temporal. Are <strong>narațiunea</strong> ca mod de expunere dominant.</p>
              </div>
              <h5>Elementele textului narativ</h5>
              <ul>
                <li><strong>Acțiunea</strong> – succesiunea de întâmplări prezentate</li>
                <li><strong>Personajele</strong> – ființele care participă la acțiune (principale, secundare, episodice)</li>
                <li><strong>Timpul acțiunii</strong> – când se petrece acțiunea</li>
                <li><strong>Spațiul acțiunii</strong> – unde se petrece acțiunea</li>
                <li><strong>Naratorul</strong> – cel care povestește</li>
              </ul>
            </div>

            <div class="content-block">
              <h4>🎭 Momentele subiectului</h4>
              <table class="teoria-table">
                <thead><tr><th>Momentul</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td><strong>1. Expozițiunea</strong></td><td>Prezentarea cadrului (timp, spațiu) și a personajelor. Răspunde la: Cine? Unde? Când?</td></tr>
                  <tr><td><strong>2. Intriga</strong></td><td>Momentul care declanșează conflictul, problema care perturbă echilibrul inițial</td></tr>
                  <tr><td><strong>3. Desfășurarea acțiunii</strong></td><td>Seria de evenimente care decurg din intrigă; conflictul se dezvoltă</td></tr>
                  <tr><td><strong>4. Punctul culminant</strong></td><td>Momentul de maximă tensiune, de cea mai mare intensitate a conflictului</td></tr>
                  <tr><td><strong>5. Deznodământul</strong></td><td>Rezolvarea conflictului, restabilirea echilibrului (fericit sau tragic)</td></tr>
                </tbody>
              </table>
              <h5>Naratorul</h5>
              <table class="teoria-table">
                <thead><tr><th>Tip narrator</th><th>Persoană</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Narator obiectiv (omniscient)</td><td>Persoana a III-a</td><td><em>„Ion mergea pe drum..."</em></td></tr>
                  <tr><td>Narator subiectiv (personaj)</td><td>Persoana I</td><td><em>„Am văzut atunci ceva uimitor..."</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "figuri-de-stil",
          title: "Figuri de stil",
          content: `
            <div class="content-block">
              <h4>✨ Figuri de stil</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Figurile de stil sunt procedee artistice prin care limbajul capătă expresivitate, forță și frumusețe. Sunt elemente specifice textului literar.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Figură de stil</th><th>Definiție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Comparația</strong></td>
                    <td>Punerea alăturată a două elemente pe baza unei asemănări; conține un termen comparant și unul comparat, legați prin: ca, precum, parcă, asemenea, ca și...</td>
                    <td><em>„Ochii ei <strong>ca</strong> stelele luceau."</em></td>
                  </tr>
                  <tr>
                    <td><strong>Epitetul</strong></td>
                    <td>Adjectiv sau adverb care exprimă o însușire deosebită a unui obiect sau ființe (nu o caracteristică obișnuită)</td>
                    <td><em>„Codrul <strong>verde</strong>", „luna <strong>albă</strong>", „un zâmbet <strong>trist</strong>"</em></td>
                  </tr>
                  <tr>
                    <td><strong>Personificarea</strong></td>
                    <td>Atribuirea unor însușiri sau acțiuni omenești unor obiecte, animale sau fenomene ale naturii</td>
                    <td><em>„Vântul <strong>suspină</strong>." „Luna <strong>zâmbește</strong>."</em></td>
                  </tr>
                  <tr>
                    <td><strong>Metafora</strong></td>
                    <td>Comparație prescurtată (fără termen de comparație), transferând sensul unui cuvânt la altul pe baza asemănării</td>
                    <td><em>„<strong>Lacul</strong> ochilor tăi" (ochii = lac); „Codrul este <strong>frate</strong> cu românul"</em></td>
                  </tr>
                  <tr>
                    <td><strong>Enumerația</strong></td>
                    <td>Înșiruirea mai multor elemente, fapte, însușiri pentru a crea o imagine completă</td>
                    <td><em>„Câmpii, dealuri, munți, izvoare..."</em></td>
                  </tr>
                  <tr>
                    <td><strong>Repetiția</strong></td>
                    <td>Reluarea unui cuvânt sau a unui grup de cuvinte pentru a sublinia o idee sau pentru muzicalitate</td>
                    <td><em>„Dormi, dormi, dormi, liniștit copil..."</em></td>
                  </tr>
                  <tr>
                    <td><strong>Hiperbola</strong></td>
                    <td>Exagerare intenționată pentru efect expresiv</td>
                    <td><em>„Munți de grâu", „Se vedea de o mie de ori"</em></td>
                  </tr>
                  <tr>
                    <td><strong>Inversiunea</strong></td>
                    <td>Schimbarea ordinii normale a cuvintelor în propoziție</td>
                    <td><em>„Frumoasă-i noaptea" (în loc de „Noaptea e frumoasă")</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "textul-liric",
          title: "Textul liric – Versificația",
          content: `
            <div class="content-block">
              <h4>🎵 Textul liric</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textul liric este creația literară în care autorul/poetul exprimă direct <strong>sentimente, emoții, gânduri și stări sufletești</strong>. Vocea care vorbește se numește <strong>eu liric</strong>.</p>
              </div>
              <h5>Eul liric</h5>
              <p>Eul liric este instanța care exprimă sentimentele în textul liric (≠ autorul real). Poate fi: <em>eul liric mărturisitor</em> (persoana I), <em>contemplativ</em>, <em>meditativ</em>.</p>
            </div>

            <div class="content-block">
              <h4>📏 Versificația</h4>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Definiție</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Versul</strong></td><td>Fiecare rând din poezie</td><td><em>„Pe un picior de plai"</em></td></tr>
                  <tr><td><strong>Strofa</strong></td><td>Grup de versuri separate de altele printr-un spațiu</td><td>catren (4 versuri), distih (2 versuri), terțină (3 versuri)</td></tr>
                  <tr><td><strong>Rima</strong></td><td>Potrivirea sunetelor finale ale versurilor</td><td>–</td></tr>
                  <tr><td><strong>Ritmul</strong></td><td>Alternanța silabelor accentuate și neaccentuate</td><td>trohaic, iambic</td></tr>
                  <tr><td><strong>Măsura</strong></td><td>Numărul de silabe dintr-un vers</td><td>vers de 8 silabe = octosilabic</td></tr>
                </tbody>
              </table>
              <h5>Tipuri de rimă</h5>
              <table class="teoria-table">
                <thead><tr><th>Tip rimă</th><th>Schemă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Împerecheată</strong></td><td>AA BB</td><td>v1 rimează cu v2; v3 cu v4</td></tr>
                  <tr><td><strong>Încrucișată</strong></td><td>AB AB</td><td>v1 rimează cu v3; v2 cu v4</td></tr>
                  <tr><td><strong>Îmbrățișată</strong></td><td>AB BA</td><td>v1 rimează cu v4; v2 cu v3</td></tr>
                  <tr><td><strong>Monorima</strong></td><td>AA AA</td><td>toate versurile rimează între ele</td></tr>
                  <tr><td><strong>Vers alb</strong></td><td>–</td><td>fără rimă</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "genuri-specii",
          title: "Genuri și specii literare",
          content: `
            <div class="content-block">
              <h4>📚 Genuri și specii literare</h4>
              <table class="teoria-table">
                <thead><tr><th>Gen literar</th><th>Definiție</th><th>Specii</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Genul epic</strong></td>
                    <td>Autorul prezintă fapte și întâmplări prin intermediul naratorului. Acțiunea este prezentată la persoana a III-a (de regulă) sau I.</td>
                    <td>basmul, schiţa, nuvela, romanul, povestirea, legenda, fabula</td>
                  </tr>
                  <tr>
                    <td><strong>Genul liric</strong></td>
                    <td>Autorul exprimă direct sentimente și emoții prin intermediul eului liric.</td>
                    <td>pastelul, elegia, oda, imnul, doina, meditația</td>
                  </tr>
                  <tr>
                    <td><strong>Genul dramatic</strong></td>
                    <td>Creații destinate reprezentării scenice. Nu există narator; acțiunea se desfășoară prin dialog și didascalii.</td>
                    <td>comedia, tragedia, drama</td>
                  </tr>
                </tbody>
              </table>

              <h5>Specii epice – definițiile principale (cls. 5)</h5>
              <table class="teoria-table">
                <thead><tr><th>Specia</th><th>Definiție</th></tr></thead>
                <tbody>
                  <tr><td><strong>Basmul</strong></td><td>Narațiune populară sau cultă cu personaje fantastice (zâne, zmei, feți-frumoși), cu o acțiune în care binele învinge răul. Are formule specifice.</td></tr>
                  <tr><td><strong>Schiţa</strong></td><td>Proză scurtă, cu o singură întâmplare, puține personaje, acțiune concentrată (ex: Ion Luca Caragiale).</td></tr>
                  <tr><td><strong>Nuvela</strong></td><td>Proză de dimensiune medie, cu un conflict central bine conturat, mai complexă decât schița.</td></tr>
                  <tr><td><strong>Povestirea</strong></td><td>Proză în care naratorul relatează o întâmplare la persoana I sau a III-a.</td></tr>
                  <tr><td><strong>Legenda</strong></td><td>Narațiune care explică în mod fantastic originea unui lucru, fenomen sau loc.</td></tr>
                  <tr><td><strong>Fabula</strong></td><td>Narațiune scurtă (în versuri sau proză) cu personaje alegorice (animale care simbolizează vicii umane), cu morală la final.</td></tr>
                </tbody>
              </table>

              <h5>Specii lirice – definițiile principale (cls. 5)</h5>
              <table class="teoria-table">
                <thead><tr><th>Specia</th><th>Definiție</th></tr></thead>
                <tbody>
                  <tr><td><strong>Pastelul</strong></td><td>Poezie care descrie un tablou din natură, surprinzând un anotimp sau un moment al zilei. Sentiment de contemplare lirică. (ex: Vasile Alecsandri)</td></tr>
                  <tr><td><strong>Doina</strong></td><td>Specie lirică populară românească, expresie a unui sentiment de jale, dor sau revoltă. Are caracter specific național.</td></tr>
                </tbody>
              </table>
            </div>
          `
        }
      ]
    }

  ]
};
