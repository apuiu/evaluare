// ============================================================
//  ROMÂNĂ - CLASA A 7-A
//  Teorie completă conform programei școlare românești
//  (subordonatele detaliate sunt tratate la clasa a VIII-a)
// ============================================================

const romana7Data = {
  title: "Română – Clasa a VII-a",
  subtitle: "Teorie completă pentru Evaluarea Națională",
  subject: "romana",
  grade: 7,
  sections: [

    // ============================================================
    //  1. VOCABULAR (LEXIC)
    // ============================================================
    {
      id: "vocabular",
      title: "Vocabular",
      subtitle: "Sensul în context, împrumuturi, polisemie, paronime, pleonasm, unități frazeologice",
      icon: "📚",
      chapters: [

        {
          id: "sens-context",
          title: "Sensul cuvintelor în context",
          content: `
            <div class="content-block">
              <h4>🎯 Sensul cuvintelor în context</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Sensul unui cuvânt se stabilește <strong>în funcție de context</strong> (de celelalte cuvinte cu care apare). Un cuvânt poate avea un sens de bază și mai multe sensuri secundare sau figurate.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip de sens</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Denotativ</strong></td><td>sensul de bază, obiectiv, de dicționar</td><td><em>foc</em> = ardere cu flacără</td></tr>
                  <tr><td><strong>Conotativ</strong></td><td>sens secundar, afectiv, expresiv</td><td><em>are <u>foc</u> în priviri</em> (pasiune)</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Cum se schimbă sensul cu contextul – cuvântul „gură”</div>
                <p>• <em>Deschide <strong>gura</strong>.</em> (organ – sens propriu)</p>
                <p>• <em><strong>gura</strong> râului</em> (locul unde se varsă – sens figurat)</p>
                <p>• <em><strong>gura</strong> satului</em> (bârfa – sens figurat)</p>
                <p>• <em>o <strong>gură</strong> de aer</em> (o cantitate mică – sens figurat)</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Sensul figurat apare mai ales în textele literare și dă expresivitate limbajului. Numai contextul ne arată dacă un cuvânt este folosit cu sens propriu sau figurat.</p>
              </div>
            </div>
          `
        },

        {
          id: "imprumuturi",
          title: "Împrumuturile (mijloc extern)",
          content: `
            <div class="content-block">
              <h4>🌍 Împrumuturile</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Împrumuturile sunt cuvinte preluate din <strong>alte limbi</strong>. Ele reprezintă principalul <strong>mijloc extern</strong> de îmbogățire a vocabularului. Cuvintele nou-intrate se numesc <strong>neologisme</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Limba de origine</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Franceză</td><td>birou, șofer, avion, bulevard, pardesiu, ecran</td></tr>
                  <tr><td>Engleză</td><td>meci, weekend, computer, mouse, tricou, fotbal</td></tr>
                  <tr><td>Italiană</td><td>pian, spaghete, capodoperă, contabil</td></tr>
                  <tr><td>Latină (savantă)</td><td>familie, literă, computer, biologie</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Intern vs. extern</div>
                <p>• <strong>Mijloace interne</strong> (folosesc materialul limbii): derivarea, compunerea, conversiunea.<br>
                • <strong>Mijloc extern</strong> (aduce cuvinte din afară): împrumutul.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Calcul lingvistic</div>
                <p>Uneori se împrumută doar structura, traducând cuvântul: <em>cal-putere</em> (din fr. <em>cheval-vapeur</em>), <em>a face cunoștință</em>.</p>
              </div>
            </div>
          `
        },

        {
          id: "polisemie",
          title: "Cuvintele polisemantice. Polisemie și omonimie",
          content: `
            <div class="content-block">
              <h4>🔢 Cuvintele polisemantice</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Un cuvânt <strong>polisemantic</strong> are <strong>mai multe sensuri înrudite</strong> între ele, pornind de la un sens de bază.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Cuvântul „masă” (polisemantic)</div>
                <p>• <em>o <strong>masă</strong> de lemn</em> (mobilă)</p>
                <p>• <em>a lua <strong>masa</strong></em> (mâncarea, prânzul)</p>
                <p>• <em>o <strong>masă</strong> de oameni</em> (mulțime)</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Cuvântul „cap” (polisemantic)</div>
                <p>• <em>mă doare <strong>capul</strong></em> (parte a corpului)</p>
                <p>• <em><strong>cap</strong> de pod</em> (capăt)</p>
                <p>• <em>este <strong>capul</strong> familiei</em> (căpetenie)</p>
                <p>• <em>om cu <strong>cap</strong></em> (minte, judecată)</p>
              </div>
            </div>

            <div class="content-block">
              <h4>⚖️ Polisemie vs. omonimie</h4>
              <table class="teoria-table">
                <thead><tr><th></th><th>Polisemie</th><th>Omonimie</th></tr></thead>
                <tbody>
                  <tr><td>Câte cuvinte</td><td>UN singur cuvânt</td><td>DOUĂ (sau mai multe) cuvinte diferite</td></tr>
                  <tr><td>Sensurile</td><td>înrudite (au legătură)</td><td>fără nicio legătură</td></tr>
                  <tr><td>În dicționar</td><td>o singură intrare</td><td>intrări separate</td></tr>
                  <tr><td>Exemplu</td><td><em>masă</em> (mobilă / mâncare / mulțime)</td><td><em>leu</em> (animal) / <em>leu</em> (monedă)</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Cum le deosebim</div>
                <p>Ne întrebăm dacă sensurile <strong>au legătură</strong>. La <em>masă</em>, toate sensurile pornesc de la ideea de „loc unde mănânci” → polisemie. La <em>leu</em>, animalul și moneda nu au nicio legătură → omonimie.</p>
              </div>
            </div>
          `
        },

        {
          id: "paronime",
          title: "Paronimele",
          content: `
            <div class="content-block">
              <h4>🔀 Paronimele</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Paronimele sunt cuvinte cu <strong>formă asemănătoare</strong> (dar nu identică) și cu <strong>sens diferit</strong>. Deoarece se aseamănă, sunt ușor de confundat.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Pereche paronimică</th><th>Sens 1</th><th>Sens 2</th></tr></thead>
                <tbody>
                  <tr><td><strong>eminent</strong> / <strong>iminent</strong></td><td>remarcabil, deosebit</td><td>care urmează să se întâmple curând</td></tr>
                  <tr><td><strong>a preveni</strong> / <strong>a proveni</strong></td><td>a atenționa dinainte</td><td>a-și avea originea din</td></tr>
                  <tr><td><strong>familiar</strong> / <strong>familial</strong></td><td>apropiat, prietenos</td><td>referitor la familie</td></tr>
                  <tr><td><strong>orar</strong> / <strong>oral</strong></td><td>program al orelor</td><td>care se face prin viu grai</td></tr>
                  <tr><td><strong>a investi</strong> / <strong>a învesti</strong></td><td>a plasa bani</td><td>a acorda o funcție, o putere</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Confundarea paronimelor duce la greșeli de sens: <em>„un pericol eminent”</em> este greșit – corect este <em>„un pericol <strong>iminent</strong>”</em> (care urmează să se producă).</p>
              </div>
            </div>
          `
        },

        {
          id: "pleonasm",
          title: "Pleonasmul",
          content: `
            <div class="content-block">
              <h4>🔁 Pleonasmul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pleonasmul este greșeala de exprimare care constă în <strong>folosirea alăturată a două (sau mai multe) cuvinte cu același sens</strong>, repetând inutil aceeași idee.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Exprimare greșită (pleonasm)</th><th>Exprimare corectă</th></tr></thead>
                <tbody>
                  <tr><td>a urca <em>sus</em></td><td>a urca</td></tr>
                  <tr><td>a coborî <em>jos</em></td><td>a coborî</td></tr>
                  <tr><td>a reveni <em>înapoi</em></td><td>a reveni</td></tr>
                  <tr><td>hemoragie <em>de sânge</em></td><td>hemoragie</td></tr>
                  <tr><td>caligrafie <em>frumoasă</em></td><td>caligrafie (înseamnă deja „scris frumos”)</td></tr>
                  <tr><td>a prevedea <em>dinainte</em></td><td>a prevedea</td></tr>
                  <tr><td>a-și aduce <em>aportul</em></td><td>a-și aduce contribuția / a contribui</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Pentru a evita pleonasmul, ne întrebăm dacă unul dintre cuvinte <strong>conține deja sensul celuilalt</strong>. <em>A urca</em> înseamnă deja „a merge în sus”, deci <em>„sus”</em> este de prisos.</p>
              </div>
            </div>
          `
        },

        {
          id: "unitati-frazeologice",
          title: "Unitățile frazeologice (locuțiuni și expresii)",
          content: `
            <div class="content-block">
              <h4>🧩 Unitățile frazeologice</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Unitățile frazeologice sunt <strong>grupuri fixe de cuvinte</strong> care au un înțeles unitar, diferit de sensul cuvintelor luate separat. Ele cuprind <strong>locuțiunile</strong> și <strong>expresiile</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Unitate frazeologică</th><th>Sens</th></tr></thead>
                <tbody>
                  <tr><td><em>a-și lua inima în dinți</em></td><td>a se hotărî, a-și face curaj</td></tr>
                  <tr><td><em>a o lua la sănătoasa</em></td><td>a fugi</td></tr>
                  <tr><td><em>a bate câmpii</em></td><td>a vorbi fără sens, aiurea</td></tr>
                  <tr><td><em>a tăia frunză la câini</em></td><td>a lenevi, a nu face nimic</td></tr>
                  <tr><td><em>a-i pica fisa</em></td><td>a înțelege în sfârșit</td></tr>
                  <tr><td><em>cu noaptea în cap</em></td><td>foarte devreme</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Înțelesul unei unități frazeologice <strong>nu rezultă din suma cuvintelor</strong>. <em>„A tăia frunză la câini”</em> nu are legătură cu frunzele sau cu câinii – înseamnă „a lenevi”.</p>
              </div>
            </div>
          `
        },

        {
          id: "serii-derivative",
          title: "Serii derivative",
          content: `
            <div class="content-block">
              <h4>🌿 Seriile derivative</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>O serie derivativă cuprinde cuvintele derivate <strong>unul din altul, în trepte succesive</strong>, pornind de la un cuvânt de bază.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Serie derivativă – de la „floare”</div>
                <p><strong>floare</strong> → flor<strong>ar</strong> → florăr<strong>ie</strong></p>
                <p>Fiecare cuvânt este format din cel anterior prin adăugarea unui sufix.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Serie derivativă – de la „a lucra”</div>
                <p><strong>a lucra</strong> → lucr<strong>ător</strong> → lucrător<strong>ime</strong></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Serie derivativă vs. familie lexicală</div>
                <p>• <strong>Familia lexicală</strong> = toate cuvintele înrudite (indiferent de ordine).<br>
                • <strong>Seria derivativă</strong> = un lanț în care fiecare cuvânt se formează din cel dinainte.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  2. FONETICĂ
    // ============================================================
    {
      id: "fonetica",
      title: "Fonetică",
      subtitle: "Folosirea corectă a accentului",
      icon: "🔤",
      chapters: [

        {
          id: "accentul",
          title: "Folosirea corectă a accentului",
          content: `
            <div class="content-block">
              <h4>🔊 Accentul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Accentul este pronunțarea mai intensă a unei silabe dintr-un cuvânt. În limba română accentul este <strong>liber</strong> (nu are o poziție fixă).</p>
              </div>
              <h5>Cuvinte care își schimbă sensul după accent (omografe)</h5>
              <table class="teoria-table">
                <thead><tr><th>Cuvânt</th><th>Un accent</th><th>Alt accent</th></tr></thead>
                <tbody>
                  <tr><td>copii</td><td><em>cópii</em> (de la copil)</td><td><em>copíi</em> (de la copie)</td></tr>
                  <tr><td>veselă</td><td><em>véselă</em> (bucuroasă)</td><td><em>vesélă</em> (vase)</td></tr>
                  <tr><td>haină</td><td><em>háină</em> (rea, crudă)</td><td><em>haínă</em> (obiect de îmbrăcăminte)</td></tr>
                  <tr><td>mobilă</td><td><em>móbilă</em> (piesă de mobilier)</td><td><em>mobílă</em> (care se mișcă)</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Cuvinte accentuate frecvent greșit</div>
                <p>Forme corecte: <em>regízor</em> (nu „régizor”), <em>caractér</em> (nu „carácter”), <em>butelíe, dușmán, miros, prevedére</em>. Atenție și la numele proprii pronunțate greșit.</p>
              </div>
            </div>
          `
        }
      ]
    }
    ,

    // ============================================================
    //  3. VERBUL (MORFOSINTAXĂ)
    // ============================================================
    {
      id: "verbul",
      title: "Verbul",
      subtitle: "Verbe copulative, diateze, verbe impersonale, locuțiunea verbală, funcții sintactice",
      icon: "⚡",
      chapters: [

        {
          id: "copulative",
          title: "Verbele copulative",
          content: `
            <div class="content-block">
              <h4>🔗 Verbele copulative</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Verbele copulative sunt verbe nepredicative care <strong>leagă subiectul de numele predicativ</strong>, formând împreună un predicat nominal. Ele nu au înțeles deplin de sine stătător.</p>
              </div>
              <p>La clasa a V-a și a VI-a am folosit <em>a fi</em> și <em>a deveni</em>. La clasa a VII-a se adaugă și alte verbe copulative:</p>
              <table class="teoria-table">
                <thead><tr><th>Verb copulativ</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>a fi</td><td><em>El <u>este</u> harnic.</em></td></tr>
                  <tr><td>a deveni</td><td><em>Ea <u>a devenit</u> medic.</em></td></tr>
                  <tr><td>a ajunge</td><td><em>A <u>ajuns</u> director.</em></td></tr>
                  <tr><td>a ieși</td><td><em>A <u>ieșit</u> câștigător.</em></td></tr>
                  <tr><td>a se face</td><td><em>S-<u>a făcut</u> frig.</em></td></tr>
                  <tr><td>a rămâne</td><td><em>A <u>rămas</u> singur.</em></td></tr>
                  <tr><td>a părea</td><td><em>El <u>pare</u> obosit.</em></td></tr>
                  <tr><td>a însemna</td><td><em>Asta <u>înseamnă</u> prietenie.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Capcană – același verb, valori diferite</div>
                <p>Aceleași verbe pot fi și <strong>predicative</strong>:</p>
                <p>• <em>A ajuns <u>director</u>.</em> → copulativ (+ nume predicativ)</p>
                <p>• <em>A ajuns <u>acasă</u>.</em> → predicativ (= a sosit)</p>
                <p>• <em>A rămas <u>trist</u>.</em> → copulativ; <em>A rămas <u>în clasă</u>.</em> → predicativ (= a stat)</p>
              </div>
            </div>
          `
        },

        {
          id: "diateze",
          title: "Diatezele: activă, pasivă, reflexivă",
          content: `
            <div class="content-block">
              <div class="atentie">
                <div class="atentie-label">📘 Notă despre programă</div>
                <p>Diateza verbului <strong>nu face parte din programa de gimnaziu (2017)</strong> și nu apare în manualul de clasa a VII-a. Conținutul de mai jos este inclus ca aprofundare pentru elevii interesați.</p>
              </div>
            </div>
            <div class="content-block">
              <h4>🔁 Diatezele verbului</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Diateza arată <strong>raportul dintre acțiune, subiect și obiect</strong>. Există trei diateze: activă, pasivă și reflexivă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Diateză</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Activă</strong></td><td>subiectul face acțiunea</td><td><em>Elevul <u>scrie</u> tema.</em></td></tr>
                  <tr><td><strong>Pasivă</strong></td><td>subiectul suferă acțiunea (a fi + participiu)</td><td><em>Tema <u>este scrisă</u> de elev.</em></td></tr>
                  <tr><td><strong>Reflexivă</strong></td><td>acțiunea se răsfrânge asupra subiectului (pronume reflexiv)</td><td><em>Elevul <u>se spală</u>.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎯 Complementul de agent (la diateza pasivă)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>La diateza pasivă, cel care face de fapt acțiunea se numește <strong>complement de agent</strong> și este introdus prin prepoziția <strong>de</strong> sau <strong>de către</strong>.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Cartea este citită <strong>de elev</strong>.</em> (complement de agent = de elev)</p>
                <p>• <em>Grădina a fost udată <strong>de către grădinar</strong>.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Transformarea activ → pasiv</div>
                <p>• Activ: <em><u>Elevul</u> scrie <u>tema</u>.</em> (elevul = subiect, tema = complement direct)</p>
                <p>• Pasiv: <em><u>Tema</u> este scrisă <u>de elev</u>.</em> (tema = subiect, de elev = complement de agent)</p>
              </div>
            </div>
          `
        },

        {
          id: "personale-impersonale",
          title: "Verbe personale și impersonale. Propoziția fără subiect",
          content: `
            <div class="content-block">
              <h4>👤 Verbe personale și impersonale</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td><strong>Personale</strong></td><td>au subiect și se conjugă la toate persoanele</td><td><em>El citește, noi mergem</em></td></tr>
                  <tr><td><strong>Impersonale</strong></td><td>nu au subiect; se folosesc mai ales la persoana a III-a</td><td><em>plouă, ninge, tună, fulgeră, trebuie, se cuvine</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🚫 Propoziția fără subiect</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Când predicatul este exprimat printr-un verb impersonal, propoziția <strong>nu are subiect</strong> (nici exprimat, nici neexprimat).</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Plouă.</em> (nu putem întreba „cine plouă?”)</p>
                <p>• <em>Ninge de dimineață.</em></p>
                <p>• <em>Trebuie să învățăm.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Un verb impersonal ca <em>plouă</em> este diferit de un verb personal folosit fără subiect exprimat. La <em>„Învăț.”</em>, subiectul este inclus (eu); la <em>„Plouă.”</em>, nu există niciun subiect.</p>
              </div>
            </div>
          `
        },

        {
          id: "locutiune-verbala",
          title: "Locuțiunea verbală",
          content: `
            <div class="content-block">
              <h4>🧩 Locuțiunea verbală</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Locuțiunea verbală este un <strong>grup de cuvinte cu înțeles unitar</strong> care se comportă ca un singur verb și poate fi înlocuit printr-un verb.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Locuțiune verbală</th><th>Verbul echivalent</th></tr></thead>
                <tbody>
                  <tr><td><em>a-și aduce aminte</em></td><td>a-și aminti</td></tr>
                  <tr><td><em>a băga de seamă</em></td><td>a observa</td></tr>
                  <tr><td><em>a ține minte</em></td><td>a memora / a reține</td></tr>
                  <tr><td><em>a face de mâncare</em></td><td>a găti</td></tr>
                  <tr><td><em>a da năvală</em></td><td>a năvăli</td></tr>
                  <tr><td><em>a o lua la fugă</em></td><td>a fugi</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 De reținut</div>
                <p>Locuțiunea verbală are, în propoziție, aceeași funcție ca un verb: de obicei este <strong>predicat verbal</strong>. Ex.: <em>El <u>își aduce aminte</u> de tine.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "functii-moduri-nepersonale",
          title: "Formele verbale nepersonale: infinitiv, participiu, gerunziu, supin",
          content: `
            <div class="content-block">
              <h4>🎭 Formele verbale nepersonale</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție generală (conform manual cls. VII)</div>
                <p>La modurile nepersonale (infinitiv, participiu, gerunziu, supin), verbul <strong>nu formează predicat</strong>, ci poate îndeplini alte funcții sintactice (ca un substantiv sau adjectiv).</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📌 Infinitivul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Infinitivul denumește o acțiune sau o stare și reprezintă <strong>forma din dicționar</strong> a verbului. Are marca <strong>a</strong> și sufixe specifice fiecărei conjugări.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Formă</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Cu prepoziția <em>a</em></td><td><em>A ajuta este o dovadă de generozitate.</em></td></tr>
                  <tr><td>Fără prepoziția <em>a</em> (după <em>a putea</em>)</td><td><em>Pot rezolva toate exercițiile.</em></td></tr>
                </tbody>
              </table>
              <div class="definitie">
                <div class="definitie-label">📖 Funcții sintactice (manual)</div>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Funcție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Subiect</td><td><em><u>A visa</u> este minunat.</em></td></tr>
                  <tr><td>Nume predicativ</td><td><em>Pasiunea lui este <u>de a explora</u> culturi diferite.</em></td></tr>
                  <tr><td>Complement direct</td><td><em>Pot <u>învăța</u> din greșeli.</em></td></tr>
                  <tr><td>Complement prepozițional</td><td><em>Se gândește <u>la a da</u> un mesaj.</em></td></tr>
                  <tr><td>Atribut verbal</td><td><em>teama <u>de a vorbi</u> în public</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>📌 Participiul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (manual)</div>
                <p>Participiul arată o acțiune <strong>terminată, suferită sau îndeplinită</strong> de o ființă sau un lucru. Intră în componența timpurilor compuse (perfect compus, viitor anterior etc.).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Conjugare</th><th>Sufix</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>I</td><td>-at</td><td>cântat, lucrat</td></tr>
                  <tr><td>II + unele din III</td><td>-ut</td><td>văzut, plăcut, trecut</td></tr>
                  <tr><td>Unele din III</td><td>-s / -t</td><td>mers, rămas; copt, rupt</td></tr>
                  <tr><td>IV</td><td>-it</td><td>citit, vorbit</td></tr>
                  <tr><td>V</td><td>-ât</td><td>doborât, pârât</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Participiu independent = adjectiv</div>
                <p>Când apare independent, participiul devine <strong>adjectiv provenit din participiu</strong> și are funcție de atribut adjectival sau nume predicativ: <em>cartea <u>citită</u></em>, <em>Amintirile sunt <u>plăcute</u>.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>📌 Gerunziul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (manual)</div>
                <p>Gerunziul denumește o <strong>acțiune în desfășurare</strong>, fără referire precisă la momentul vorbirii. Sufixe: <strong>-ând</strong> (lucrând, mergând) și <strong>-ind</strong> (fugind, muncind).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Funcție sintactică</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Circumstanțial de mod</td><td><em>Cântă <u>atingând clapele</u> cu grație.</em></td></tr>
                  <tr><td>Circumstanțial de timp</td><td><em><u>Trecând prin parc</u>, a văzut-o pe Maria.</em></td></tr>
                  <tr><td>Atribut verbal</td><td><em>Cu hainele <u>fluturând</u>, alerga.</em></td></tr>
                  <tr><td>Complement direct</td><td><em>Văd <u>fulgerând</u> în noapte.</em></td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Din manual – Popa Tanda (Slavici)</div>
                <p><em>„harnic, hotărât, predicând, sfătuind, dojenind, preot, soț, părinte, bunic, muncind, oferind, izbândind, responsabil, apreciat, un exemplu."</em> (poem-diamant)</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📌 Supinul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (manual)</div>
                <p>Supinul denumește acțiunea (similar cu infinitivul) și este alcătuit din <strong>prepoziție + forma de participiu</strong>. Prepozițiile care intră în alcătuire: <em>de, din, după, la, pentru</em>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Funcție sintactică</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Subiect</td><td><em><u>De spus</u> e ușor, <u>de făcut</u> e mai dificil.</em></td></tr>
                  <tr><td>Nume predicativ</td><td><em>Îndemnul lui este <u>de urmat</u>.</em></td></tr>
                  <tr><td>Atribut verbal</td><td><em>cartofi <u>de copt</u>, cartofi <u>de prăjit</u></em></td></tr>
                  <tr><td>Complement direct</td><td><em>Am terminat <u>de citit</u>.</em></td></tr>
                  <tr><td>Complement prepozițional</td><td><em>M-am plictisit <u>de așteptat</u>.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Supin vs. participiu</div>
                <p>Supinul are prepoziție + participiu: <em><strong>de</strong> făcut, <strong>la</strong> cules, <strong>pentru</strong> spus</em>. Participiul singur (fără prepoziție) devine adjectiv.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  4. PRONUMELE
    // ============================================================
    {
      id: "pronume",
      title: "Pronumele",
      subtitle: "Nehotărât, negativ, interogativ, relativ, adjectivul pronominal de întărire",
      icon: "🔁",
      chapters: [

        {
          id: "nehotarat",
          title: "Pronumele și adjectivul pronominal nehotărât",
          content: `
            <div class="content-block">
              <h4>❔ Pronumele nehotărât</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele nehotărât înlocuiește un substantiv, <strong>fără să precizeze exact</strong> despre cine sau ce este vorba.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Categorie</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Simple</td><td>unul, altul, mult, puțin, tot, atât</td></tr>
                  <tr><td>Compuse (cu -va)</td><td>cineva, ceva, careva, cândva, undeva</td></tr>
                  <tr><td>Compuse (cu ori-)</td><td>oricine, orice, oricare, oricât</td></tr>
                  <tr><td>Compuse (cu fie-, oare-)</td><td>fiecare, fiecine, oarecare, oarecine</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Pronume vs. adjectiv pronominal nehotărât</div>
                <p>• <strong>Pronume</strong> (înlocuiește): <em><u>Cineva</u> a sunat. <u>Fiecare</u> a răspuns.</em></p>
                <p>• <strong>Adjectiv pronominal</strong> (însoțește un substantiv): <em><u>Fiecare</u> elev a răspuns. <u>Câțiva</u> copii au plecat.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "negativ",
          title: "Pronumele și adjectivul pronominal negativ",
          content: `
            <div class="content-block">
              <h4>🚫 Pronumele negativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele negativ înlocuiește un substantiv într-o construcție negativă, arătând <strong>absența</strong> ființelor sau a obiectelor.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Pronume negativ</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>nimeni</td><td><em><u>Nimeni</u> nu a venit.</em></td></tr>
                  <tr><td>nimic</td><td><em>Nu știu <u>nimic</u>.</em></td></tr>
                  <tr><td>niciunul / niciuna</td><td><em><u>Niciunul</u> nu a răspuns.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Ortografie – niciun / nicio</div>
                <p>Adjectivul pronominal negativ <strong>niciun</strong> (masculin) și <strong>nicio</strong> (feminin) se scriu <strong>într-un singur cuvânt</strong>:</p>
                <p>• <em>Nu am <strong>niciun</strong> caiet.</em> (nu „nici un”)</p>
                <p>• <em>N-am <strong>nicio</strong> problemă.</em> (nu „nici o”)</p>
                <p>Se scrie separat („nici un”) doar rar, când „un” are sens de numeral: <em>Nu a citit nici măcar o pagină.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Dubla negație</div>
                <p>În limba română, pronumele negativ cere și verbul la formă negativă: <em>Nimeni <strong>nu</strong> a venit.</em> (nu „Nimeni a venit”).</p>
              </div>
            </div>
          `
        },

        {
          id: "interogativ",
          title: "Pronumele și adjectivul pronominal interogativ",
          content: `
            <div class="content-block">
              <h4>❓ Pronumele interogativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele interogativ ține locul unui substantiv <strong>necunoscut, despre care se întreabă</strong>. Apare în propoziții interogative.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Pronume interogativ</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>cine?</td><td><em><u>Cine</u> a venit?</em></td></tr>
                  <tr><td>ce?</td><td><em><u>Ce</u> ai spus?</em></td></tr>
                  <tr><td>care?</td><td><em><u>Care</u> îți place?</em></td></tr>
                  <tr><td>cât? / câtă? / câți? / câte?</td><td><em><u>Câți</u> au lipsit?</em></td></tr>
                  <tr><td>al câtelea? / a câta?</td><td><em><u>Al câtelea</u> ai ieșit?</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Pronume vs. adjectiv pronominal interogativ</div>
                <p>• <strong>Pronume</strong>: <em><u>Cine</u> a venit?</em> (înlocuiește)</p>
                <p>• <strong>Adjectiv pronominal</strong>: <em><u>Care</u> carte îți place?</em> (însoțește substantivul „carte”)</p>
              </div>
            </div>
          `
        },

        {
          id: "relativ",
          title: "Pronumele și adjectivul pronominal relativ",
          content: `
            <div class="content-block">
              <h4>🔗 Pronumele relativ</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Pronumele relativ <strong>înlocuiește un substantiv și, în același timp, leagă</strong> o propoziție subordonată de propoziția regentă.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Pronume relativ</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>care</td><td><em>Băiatul <u>care</u> citește este colegul meu.</em></td></tr>
                  <tr><td>cine</td><td><em>Cine învață reușește.</em></td></tr>
                  <tr><td>ce</td><td><em>Nu știu <u>ce</u> vrei.</em></td></tr>
                  <tr><td>cât</td><td><em>Ia <u>cât</u> îți trebuie.</em></td></tr>
                  <tr><td>ceea ce (compus)</td><td><em>A reușit, <u>ceea ce</u> ne-a bucurat.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Pronumele relativ compus „ceea ce”</div>
                <p>Se scrie în <strong>două cuvinte</strong>: <em>ceea ce</em>. Se referă la o idee întreagă, nu la un singur substantiv: <em>A plouat toată ziua, <strong>ceea ce</strong> ne-a stricat planurile.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Acordul pronumelui relativ „care”</div>
                <p>Când „care” este complement direct, se reia prin pronume și cere „pe”: <em>Fata <strong>pe care</strong> am văzut-<strong>o</strong> este verișoara mea.</em></p>
              </div>
            </div>
          `
        },

        {
          id: "de-intarire",
          title: "Adjectivul pronominal de întărire",
          content: `
            <div class="content-block">
              <h4>💪 Adjectivul pronominal de întărire</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Adjectivul pronominal de întărire <strong>însoțește un substantiv sau un pronume, subliniind (întărind)</strong> persoana despre care se vorbește. Provine din vechiul pronume de întărire.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Persoană</th><th>Masculin</th><th>Feminin</th></tr></thead>
                <tbody>
                  <tr><td>eu</td><td>însumi</td><td>însămi</td></tr>
                  <tr><td>tu</td><td>însuți</td><td>însăți</td></tr>
                  <tr><td>el / ea</td><td>însuși</td><td>însăși</td></tr>
                  <tr><td>noi</td><td>înșine</td><td>însene</td></tr>
                  <tr><td>voi</td><td>înșivă</td><td>însevă</td></tr>
                  <tr><td>ei / ele</td><td>înșiși</td><td>înseși / însele</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• <em>Eu <strong>însumi</strong> am rezolvat problema.</em> (masculin)</p>
                <p>• <em>Ea <strong>însăși</strong> a recunoscut.</em> (feminin)</p>
                <p>• <em>Ei <strong>înșiși</strong> au hotărât.</em></p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție la acord</div>
                <p>Adjectivul de întărire se acordă în gen, număr și persoană cu cuvântul pe care îl întărește: <em>eu <strong>însumi</strong></em> (băiat) / <em>eu <strong>însămi</strong></em> (fată).</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  5. ALTE PĂRȚI DE VORBIRE
    // ============================================================
    {
      id: "alte-parti",
      title: "Alte părți de vorbire",
      subtitle: "Substantivul, numeralul, adjectivul, adverbul (cu locuțiuni), prepoziția, conjuncția, interjecția",
      icon: "🧱",
      chapters: [

        {
          id: "substantiv-locutiune",
          title: "Substantivul. Locuțiunea substantivală",
          content: `
            <div class="content-block">
              <h4>📌 Substantivul – funcții sintactice</h4>
              <p>Substantivul poate îndeplini numeroase funcții sintactice, în funcție de caz:</p>
              <table class="teoria-table">
                <thead><tr><th>Funcție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Subiect</td><td><em><u>Elevul</u> învață.</em></td></tr>
                  <tr><td>Nume predicativ</td><td><em>El este <u>elev</u>.</em></td></tr>
                  <tr><td>Complement direct</td><td><em>Citesc <u>cartea</u>.</em></td></tr>
                  <tr><td>Complement indirect</td><td><em>Dau <u>colegului</u> cartea.</em></td></tr>
                  <tr><td>Atribut substantival genitival</td><td><em>caietul <u>elevului</u></em></td></tr>
                  <tr><td>Atribut substantival prepozițional</td><td><em>caiet <u>de matematică</u></em></td></tr>
                  <tr><td>Atribut apozițional (apoziția)</td><td><em>Ion, <u>colegul meu</u>, vine.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🧩 Locuțiunea substantivală</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Locuțiunea substantivală este un grup de cuvinte cu înțeles unitar care se comportă ca un substantiv.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Locuțiune substantivală</th><th>Echivalent</th></tr></thead>
                <tbody>
                  <tr><td><em>aducere-aminte</em></td><td>amintire</td></tr>
                  <tr><td><em>părere de rău</em></td><td>regret</td></tr>
                  <tr><td><em>băgare de seamă</em></td><td>atenție</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "numeral",
          title: "Numeralul (actualizare)",
          content: `
            <div class="content-block">
              <h4>🔢 Numeralul – tipuri</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Descriere</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Cardinal</td><td>arată un număr</td><td>doi, zece, o sută</td></tr>
                  <tr><td>Ordinal</td><td>arată ordinea</td><td>al doilea, a treia</td></tr>
                  <tr><td>Colectiv</td><td>arată un grup</td><td>amândoi, tustrei, câteșitrei</td></tr>
                  <tr><td>Distributiv</td><td>arată distribuția</td><td>câte doi, câte trei</td></tr>
                  <tr><td>Multiplicativ</td><td>de câte ori crește</td><td>îndoit, întreit, înmiit</td></tr>
                  <tr><td>Fracționar</td><td>o fracțiune</td><td>o doime, o treime, două cincimi</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Funcții sintactice</div>
                <p>Numeralul poate fi subiect (<em><u>Trei</u> au lipsit.</em>), atribut (<em><u>Trei</u> elevi au lipsit.</em>), complement (<em>I-am dat <u>doi</u>.</em>) sau nume predicativ (<em>El este <u>primul</u>.</em>).</p>
              </div>
            </div>
          `
        },

        {
          id: "adjectiv-locutiune",
          title: "Adjectivul. Locuțiunea adjectivală",
          content: `
            <div class="content-block">
              <h4>🎨 Adjectivul – funcții sintactice</h4>
              <table class="teoria-table">
                <thead><tr><th>Funcție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Atribut adjectival</td><td><em>elevul <u>harnic</u></em></td></tr>
                  <tr><td>Nume predicativ</td><td><em>Elevul este <u>harnic</u>.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🧩 Locuțiunea adjectivală</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Locuțiunea adjectivală este un grup de cuvinte cu înțeles unitar care se comportă ca un adjectiv (arată o însușire).</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Locuțiune adjectivală</th><th>Adjectiv echivalent</th></tr></thead>
                <tbody>
                  <tr><td><em>om de treabă</em></td><td>cumsecade</td></tr>
                  <tr><td><em>om cu scaun la cap</em></td><td>înțelept, cuminte</td></tr>
                  <tr><td><em>de nădejde</em></td><td>de încredere</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "adverb-locutiune",
          title: "Adverbul. Locuțiunea adverbială",
          content: `
            <div class="content-block">
              <h4>🧭 Adverbul – tipuri speciale</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Interogative</td><td>unde? când? cum? cât?</td></tr>
                  <tr><td>Relative</td><td>unde, când, cum, cât (leagă propoziții)</td></tr>
                  <tr><td>Nehotărâte</td><td>undeva, cândva, cumva, oriunde, oricând</td></tr>
                  <tr><td>Predicative</td><td>desigur, firește, poate, probabil, negreșit</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Adverbul predicativ</div>
                <p>Un adverb predicativ ține locul unui predicat, urmat de „că” sau „să”: <em><strong>Desigur</strong> că vei reuși. <strong>Poate</strong> că vine.</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>🧩 Locuțiunea adverbială</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Locuțiunea adverbială este un grup de cuvinte cu valoare de adverb.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Locuțiune adverbială</th><th>Sens</th></tr></thead>
                <tbody>
                  <tr><td><em>din când în când</em></td><td>uneori</td></tr>
                  <tr><td><em>cu noaptea în cap</em></td><td>foarte devreme</td></tr>
                  <tr><td><em>pas cu pas</em></td><td>treptat</td></tr>
                  <tr><td><em>de-a valma</em></td><td>amestecat</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "prepozitie-conjunctie-interjectie",
          title: "Prepoziția, conjuncția, interjecția",
          content: `
            <div class="content-block">
              <h4>🔗 Prepoziția și locuțiunea prepozițională</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Prepoziția leagă cuvinte, arătând raporturi. Locuțiunea prepozițională este un grup de cuvinte cu valoare de prepoziție.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Locuțiune prepozițională</th><th>Cazul cerut</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>în fața, în spatele, în jurul</td><td>Genitiv</td><td><em>în fața <u>casei</u></em></td></tr>
                  <tr><td>din cauza, în urma, de-a lungul</td><td>Genitiv</td><td><em>din cauza <u>ploii</u></em></td></tr>
                  <tr><td>în loc de, față de</td><td>Acuzativ</td><td><em>față de <u>colegi</u></em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>➕ Conjuncția și locuțiunea conjuncțională</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Exemple</th></tr></thead>
                <tbody>
                  <tr><td>Conjuncții coordonatoare</td><td>și, dar, iar, sau, ori, deci, însă, ci</td></tr>
                  <tr><td>Conjuncții subordonatoare</td><td>că, să, dacă, deoarece, fiindcă, deși</td></tr>
                  <tr><td>Locuțiuni conjuncționale</td><td>cu toate că, de vreme ce, pentru ca să, în timp ce</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>❕ Interjecția</h4>
              <p>Exprimă emoții sau imită sunete. Poate fi predicativă: <em><strong>Hai</strong> la drum! <strong>Iată</strong> rezultatul!</em></p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>De emoție: <em>vai!, of!, aoleu!, bravo!</em> · Onomatopee: <em>poc!, trosc!, miau!, cucurigu!</em></p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  6. SINTAXĂ
    // ============================================================
    {
      id: "sintaxa",
      title: "Sintaxă",
      subtitle: "Fraza, raporturile de coordonare și de subordonare, circumstanțialul de cauză și de scop",
      icon: "🔗",
      chapters: [

        {
          id: "coordonare-subordonare",
          title: "Raporturile de coordonare și de subordonare",
          content: `
            <div class="content-block">
              <h4>🧱 Raporturile sintactice</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Între cuvintele dintr-o propoziție și între propozițiile dintr-o frază se stabilesc raporturi de <strong>coordonare</strong> (elemente de același fel) sau de <strong>subordonare</strong> (un element depinde de altul).</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🔗 Coordonarea (în propoziție)</h4>
              <p>Se realizează între părți de propoziție de <strong>același fel</strong> (două subiecte, două atribute, două complemente).</p>
              <table class="teoria-table">
                <thead><tr><th>Tip de coordonare</th><th>Conjuncții</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Copulativă</td><td>și, nici</td><td><em>Ion <u>și</u> Maria citesc.</em></td></tr>
                  <tr><td>Adversativă</td><td>dar, iar, însă, ci</td><td><em>Harnic, <u>dar</u> obosit.</em></td></tr>
                  <tr><td>Disjunctivă</td><td>sau, ori, fie</td><td><em>mere <u>sau</u> pere</em></td></tr>
                  <tr><td>Conclusivă</td><td>deci, așadar</td><td><em>gânditor, <u>deci</u> atent</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🌿 Coordonarea și subordonarea (în frază)</h4>
              <table class="teoria-table">
                <thead><tr><th>Raport</th><th>Descriere</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Coordonare</strong></td><td>propoziții de același rang</td><td><em>Citesc<sup>(1)</sup> / și scriu.<sup>(2)</sup></em></td></tr>
                  <tr><td><strong>Subordonare</strong></td><td>o propoziție depinde de alta (regenta)</td><td><em>Știu<sup>(1)</sup> / că vii.<sup>(2)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Atenție</div>
                <p>Tipurile de propoziții subordonate (subiectiva, predicativa, atributiva, completivele, circumstanțialele) se studiază detaliat în <strong>clasa a VIII-a</strong>. Aici înțelegem doar raporturile generale.</p>
              </div>
            </div>
          `
        },

        {
          id: "fraza-norme-punctuatie",
          title: "Fraza. Norme de punctuație",
          content: `
            <div class="content-block">
              <h4>📐 Fraza (conform manual cls. VII)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Fraza este un <strong>enunț complex</strong> alcătuit din <strong>două sau mai multe propoziții</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Raport</th><th>Realizare</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td><strong>Coordonare prin joncțiune</strong></td><td>cu conjuncții (și, dar, sau, ori, ci, deci, iar)</td><td><em>Pi vorbește cu tigrul <strong>și</strong> îl îmblânzește.</em></td></tr>
                  <tr><td><strong>Coordonare prin juxtapunere</strong></td><td>fără cuvinte de legătură; pauză marcată prin virgulă sau punct-și-virgulă</td><td><em>Pi doarme, tigrul doarme, oceanul doarme și el.</em></td></tr>
                  <tr><td><strong>Subordonare</strong></td><td>o propoziție depinde de alta (regenta)</td><td><em>Știu<sup>(1)</sup> că bate vântul<sup>(2)</sup> și că tigrul rage.<sup>(3)</sup></em></td></tr>
                </tbody>
              </table>
              <div class="definitie">
                <div class="definitie-label">Propoziție principală vs. secundară</div>
                <p><strong>Propoziția principală</strong>: are sens de sine stătător; există obligatoriu cel puțin una într-o frază.</p>
                <p><strong>Propoziția secundară</strong>: depinde ca sens de alta; nu poate exista singură.</p>
              </div>
              <h5>Analiza unei fraze – pași (din manual)</h5>
              <ol>
                <li>Identifică predicatele (câte predicate = câte propoziții).</li>
                <li>Identifică elementele de relație dintre propoziții (conjuncții sau semne de punctuație).</li>
                <li>Împarte fraza în propoziții și numerotează-le.</li>
                <li>Stabilește relațiile dintre propoziții (coordonare sau subordonare).</li>
              </ol>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu din manual (Veronica D. Niculescu)</div>
                <p><em>„Ursulețul întinde gâtul<sup>(1)</sup> și adulmecă mireasma dulce a florii.<sup>(2)</sup>"</em></p>
                <p>→ Coordonare prin joncțiune cu <em>și</em>; două propoziții principale.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Punct-și-virgulă în frază</div>
                <p>Punct-și-virgula marchează o pauză mai mare decât virgula și se folosește de obicei la coordonarea prin juxtapunere a unor propoziții lungi sau cu sensuri contrastante.</p>
              </div>
            </div>
          `
        },

        {
          id: "circumstantialul-cauza-scop",
          title: "Circumstanțialul de cauză și de scop",
          content: `
            <div class="content-block">
              <h4>❓ Circumstanțialul de cauză</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Circumstanțialul de cauză arată <strong>motivul</strong> pentru care se produce acțiunea. Răspunde la întrebările <strong>Din ce cauză? De ce? Din ce pricină?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Exprimat prin</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Substantiv + prepoziție (<em>din, de, pentru, datorită</em>)</td><td><em>A absentat <strong>din cauza bolii</strong>.</em></td></tr>
                  <tr><td>Verb la infinitiv (<em>pentru a</em>)</td><td><em>S-a supărat <strong>de a fi uitat</strong>.</em></td></tr>
                  <tr><td>Verb la gerunziu</td><td><em>Tremurând de frig, nu a putut vorbi.</em></td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎯 Circumstanțialul de scop</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VII)</div>
                <p>Circumstanțialul de scop arată <strong>scopul (finalitatea)</strong> pentru care se realizează o acțiune. Răspunde la întrebările <strong>Cu ce scop? În ce scop?</strong></p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Exprimat prin</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr><td>Substantiv/pronume + prepoziție (<em>pentru</em>)</td><td><em>Au muncit <strong>pentru ajutorarea comunității</strong>.</em></td></tr>
                  <tr><td>Verb la infinitiv cu prepoziție (<em>pentru a, spre a, ca să</em>)</td><td><em>Lucrează <strong>pentru a ajuta comunitatea</strong>.</em></td></tr>
                  <tr><td>Verb la supin (<em>la + supin</em>)</td><td><em>Au plecat <strong>la cules mere</strong>.</em></td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">📖 Exemplu din manual (filmul „Dă mai departe")</div>
                <p><em>„Catherine Ryan Hyde este o autoare americană de succes, care scrie <strong>pentru a inspira</strong> încredere și optimism oamenilor."</em></p>
                <p>→ Circ. de scop: <em>pentru a inspira</em> (exprimat prin infinitiv cu prepoziție).</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Cauză vs. Scop</div>
                <p>• <strong>Cauza</strong> arată de ce s-a produs acțiunea: <em>A plecat <strong>fiindcă era obosit</strong>.</em> (cauza = starea anterioară)</p>
                <p>• <strong>Scopul</strong> arată pentru ce a acționat: <em>A plecat <strong>ca să se odihnească</strong>.</em> (scopul = intenția)</p>
              </div>
              <div class="definitie">
                <div class="definitie-label">Punctuație</div>
                <p>Când circumstanțialul de scop stă <strong>înaintea verbului</strong> de care depinde, se desparte prin virgulă: <em><strong>Pentru a reuși,</strong> a făcut eforturi mari.</em></p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  7. LITERATURĂ
    // ============================================================
    {
      id: "literatura",
      title: "Literatură",
      subtitle: "Cartea, structura operei epice, caracterizarea personajelor, figuri de stil, versificația, nuvela, imnul",
      icon: "📖",
      chapters: [

        {
          id: "cartea",
          title: "Cartea – obiect cultural",
          content: `
            <div class="content-block">
              <h4>📕 Cartea – elemente noi</h4>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td><strong>Editura</strong></td><td>instituția care tipărește cartea</td></tr>
                  <tr><td><strong>Colecția</strong></td><td>seria de cărți cu o temă comună</td></tr>
                  <tr><td><strong>Asteriscul (*)</strong></td><td>semn care trimite la o notă explicativă</td></tr>
                  <tr><td><strong>Subsolul de pagină</strong></td><td>spațiul din josul paginii, cu note și explicații</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "structura-opera-epica",
          title: "Structura operei epice",
          content: `
            <div class="content-block">
              <h4>📚 Structura operei epice</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Opera epică prezintă întâmplări prin intermediul unui narator. Ea este organizată pe <strong>secvențe narative</strong> legate între ele.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Secvențele narative</td><td>fragmente de acțiune legate prin timp și cauză</td></tr>
                  <tr><td>Timpul acțiunii</td><td>când se petrec întâmplările</td></tr>
                  <tr><td>Spațiul acțiunii</td><td>unde se desfășoară acțiunea</td></tr>
                  <tr><td>Naratorul</td><td>vocea care povestește (persoana a III-a sau I)</td></tr>
                  <tr><td>Personajele</td><td>ființele care participă la acțiune</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Procedee de legare a secvențelor</div>
                <p>Secvențele se leagă prin indici de timp (<em>apoi, după aceea, într-o zi</em>) și de spațiu (<em>acolo, în celălalt sat</em>).</p>
              </div>
            </div>
          `
        },

        {
          id: "caracterizarea-personajelor",
          title: "Caracterizarea personajelor",
          content: `
            <div class="content-block">
              <h4>🎭 Caracterizarea personajelor</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Caracterizarea unui personaj înseamnă prezentarea trăsăturilor lui fizice și morale. Ea poate fi <strong>directă</strong> sau <strong>indirectă</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Cine / cum</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Directă</strong></td>
                    <td>făcută explicit de narator, de alt personaj sau de personajul însuși</td>
                    <td><em>„Era un om harnic și cinstit.”</em></td>
                  </tr>
                  <tr>
                    <td><strong>Indirectă</strong></td>
                    <td>dedusă din faptele, vorbele, gândurile și relațiile personajului</td>
                    <td><em>își ajută prietenii → deducem că este generos</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Mijloace de caracterizare indirectă</div>
                <p>• prin <strong>fapte</strong> (ce face personajul)</p>
                <p>• prin <strong>limbaj</strong> (cum vorbește)</p>
                <p>• prin <strong>gânduri</strong> și sentimente</p>
                <p>• prin <strong>relațiile</strong> cu celelalte personaje</p>
                <p>• prin <strong>nume</strong> (uneori sugestiv)</p>
              </div>
            </div>
          `
        },

        {
          id: "figuri-aliteratie-metafora-hiperbola",
          title: "Figuri de stil: aliterația, metafora, hiperbola",
          content: `
            <div class="content-block">
              <h4>✨ Figuri de stil (aprofundare)</h4>
              <table class="teoria-table">
                <thead><tr><th>Figură</th><th>Definiție</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Aliterația</strong></td>
                    <td>repetarea unei consoane (sau a unui grup de consoane) pentru efect muzical sau sugestiv</td>
                    <td><em>„Prin <u>v</u>ulturi <u>v</u>ântul <u>v</u>iu <u>v</u>uia” (Coșbuc)</em></td>
                  </tr>
                  <tr>
                    <td><strong>Metafora</strong></td>
                    <td>comparație prescurtată; transferă sensul unui cuvânt asupra altuia</td>
                    <td><em><u>perle</u> de rouă; <u>marea</u> ochilor tăi</em></td>
                  </tr>
                  <tr>
                    <td><strong>Hiperbola</strong></td>
                    <td>exagerare intenționată pentru a impresiona</td>
                    <td><em>un <u>munte</u> de om; „de-o mie de ori”</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Aliterație vs. asonanță</div>
                <p>• <strong>Aliterația</strong> repetă o <strong>consoană</strong>: <em>„vântul viu vuia”</em>.<br>
                • <strong>Asonanța</strong> repetă o <strong>vocală</strong> accentuată.</p>
              </div>
            </div>
          `
        },

        {
          id: "versificatie-picior-ritm",
          title: "Versificația. Piciorul metric și ritmul",
          content: `
            <div class="content-block">
              <h4>🎵 Versificația (aprofundare)</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p><strong>Piciorul metric</strong> este grupul de silabe accentuate și neaccentuate care se repetă într-un vers, dând <strong>ritmul</strong> poeziei.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Ritm</th><th>Structură (picior bisilabic)</th><th>Exemplu</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Trohaic</strong></td>
                    <td>silabă accentuată + neaccentuată (— ∪)</td>
                    <td><em>„<u>Som</u>-no-<u>roa</u>-se <u>pă</u>-să-<u>re</u>-le” (Eminescu)</em></td>
                  </tr>
                  <tr>
                    <td><strong>Iambic</strong></td>
                    <td>silabă neaccentuată + accentuată (∪ —)</td>
                    <td><em>„A <u>fost</u> o-<u>da</u>-tă ca-n po-<u>vești</u>”</em></td>
                  </tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Cum recunoaștem ritmul</div>
                <p>Dacă versul <strong>începe cu o silabă accentuată</strong>, ritmul este trohaic. Dacă <strong>începe cu o silabă neaccentuată</strong>, ritmul este iambic.</p>
              </div>
            </div>
          `
        },

        {
          id: "nuvela",
          title: "Nuvela",
          content: `
            <div class="content-block">
              <h4>📗 Nuvela</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Nuvela este o <strong>specie a genului epic, în proză</strong>, mai amplă decât schița, cu un singur fir narativ, un conflict bine conturat și personaje mai complexe.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trăsături</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Dimensiune</td><td>medie (mai mare decât schița, mai mică decât romanul)</td></tr>
                  <tr><td>Fir narativ</td><td>unul singur, bine conturat</td></tr>
                  <tr><td>Conflict</td><td>puternic, cu evoluție psihologică a personajelor</td></tr>
                  <tr><td>Personaje</td><td>mai bine individualizate decât în schiță</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu – „Popa Tanda” de Ioan Slavici</div>
                <p>Nuvela urmărește transformarea preotului Trandafir, care, prin muncă și perseverență, schimbă un sat sărac și leneș. Personajul evoluează, iar conflictul (om harnic vs. lume leneșă) se rezolvă prin puterea exemplului personal.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">⚠️ Nuvelă vs. schiță</div>
                <p>Schița prezintă un singur moment, cu puține personaje. Nuvela are o acțiune mai amplă, un conflict dezvoltat și personaje care evoluează.</p>
              </div>
            </div>
          `
        },

        {
          id: "imnul",
          title: "Imnul",
          content: `
            <div class="content-block">
              <h4>🎼 Imnul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Imnul este o <strong>specie a genului liric</strong>, o poezie solemnă care exprimă sentimente de <strong>preamărire</strong> a patriei, a libertății, a unui ideal sau a unei personalități.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trăsături</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Ton</td><td>solemn, înălțător</td></tr>
                  <tr><td>Sentiment</td><td>admirație, mândrie, entuziasm</td></tr>
                  <tr><td>Temă</td><td>patria, libertatea, un ideal</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">Exemplu – „Deșteaptă-te, române!” de Andrei Mureșanu</div>
                <p>Imnul național al României este un îndemn la trezire și la unitate națională, exprimând iubirea de țară și dorința de libertate.</p>
              </div>
            </div>
          `
        },

        {
          id: "textul-dramatic",
          title: "Textul dramatic",
          content: `
            <div class="content-block">
              <h4>🎭 Textul dramatic</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VII)</div>
                <p>Textul dramatic, cunoscut și sub denumirea de <strong>piesă de teatru</strong>, este scris cu scopul de a fi <strong>transpus pe scenă</strong>, deci reprezentat.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">📖 Etimologie (din manual)</div>
                <p>Cuvântul <em>teatru</em> vine din fr. <em>théâtre</em> → lat. <em>theatrum</em> → gr. <em>théatron</em> (loc unde oamenii veneau să vadă spectacole), de la verbul <em>theáomai</em> = „a vedea, a observa".</p>
              </div>
            </div>

            <div class="content-block">
              <h4>📋 Structura textului dramatic</h4>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td><strong>Actul</strong></td><td>diviziunea principală a piesei (ca un capitol)</td></tr>
                  <tr><td><strong>Scena / tabloul</strong></td><td>subdiviziune a actului, delimitată de intrarea/ieșirea unui personaj</td></tr>
                  <tr><td><strong>Replica</strong></td><td>intervenția verbală a unui personaj</td></tr>
                  <tr><td><strong>Lista personajelor</strong></td><td>la începutul piesei, prezintă personajele și relațiile dintre ele</td></tr>
                  <tr><td><strong>Indicațiile scenice (didascaliile)</strong></td><td>notațiile autorului (de obicei italic sau paranteză) despre decor, gesturi, ton, mișcări</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Exemplu de indicație scenică (Matei Vișniec, „Vrem să vă dăruim câte o fereastră")</div>
                <p><em>„Decor: Câteva cărți agățate cu fire invizibile de plafon. Câteva cadre de ferestre care «plutesc» și ele în aer, printre cărți."</em></p>
                <p><em>„Lumina scade, parcă intrăm într-un vis, în spatele personajelor, la ferestre, apar niște chipuri fantastice."</em></p>
              </div>
            </div>

            <div class="content-block">
              <h4>👥 Personajul dramatic</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VII)</div>
                <p>Personajul dramatic se aseamănă cu personajul dintr-un text narativ (este rodul imaginației autorului), dar are o <strong>dublă natură</strong>: ființei ficționale i se alătură o ființă reală — <strong>actorul</strong>.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Mod de construire</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Direct</td><td>prin notațiile autorului (lista personajelor, indicații scenice) sau prin intervențiile celorlalte personaje</td></tr>
                  <tr><td>Indirect</td><td>prin deducerea trăsăturilor din comportament, gesturi, limbaj, relații cu celelalte personaje</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Dialogul și monologul în textul dramatic</div>
                <p>Personajele din textul dramatic comunică prin <strong>dialog</strong> (schimb de replici între două sau mai multe personaje) și <strong>monolog</strong> (un singur personaj vorbește). Dialogul este modalitatea <strong>predominantă</strong>.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🎪 Arta spectacolului</h4>
              <p>Într-o reprezentație teatrală sunt implicate mai multe persoane, fiecare cu un rol specific:</p>
              <table class="teoria-table">
                <thead><tr><th>Persoana</th><th>Rol</th></tr></thead>
                <tbody>
                  <tr><td><strong>Regizorul</strong></td><td>propune interpretarea piesei, selectează actorii, coordonează repetiția</td></tr>
                  <tr><td><strong>Actorii</strong></td><td>interpretează personajele pe scenă</td></tr>
                  <tr><td><strong>Scenograful</strong></td><td>desenează decorul și costumele</td></tr>
                  <tr><td><strong>Coregraful</strong></td><td>îndrumă actorii în mișcări ritmice și dansuri</td></tr>
                  <tr><td><strong>Costumierul</strong></td><td>realizează costumele</td></tr>
                  <tr><td><strong>Machieurul</strong></td><td>specialist în arta machiajului</td></tr>
                  <tr><td><strong>Tehnicianul de lumini</strong></td><td>se ocupă de efectele de lumini</td></tr>
                  <tr><td><strong>Tehnicianul de sunet</strong></td><td>răspunde de efectele sonore</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Text dramatic ≠ Proză narativă</div>
                <p>În textul dramatic <strong>lipsește narațiunea</strong>; acțiunea înaintează exclusiv prin dialog și indicații scenice. Autorul nu povestește direct — spectatorii descoperă totul prin replici și gesturi.</p>
              </div>
            </div>
          `
        },

        {
          id: "texte-nonliterare",
          title: "Texte nonliterare",
          content: `
            <div class="content-block">
              <h4>📰 Texte nonliterare</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Textele nonliterare transmit informații reale, practice, într-un limbaj clar și fără figuri de stil.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Text</th><th>Rol</th></tr></thead>
                <tbody>
                  <tr><td><strong>Mersul trenurilor</strong></td><td>orarul plecărilor și sosirilor trenurilor</td></tr>
                  <tr><td><strong>Programul de spectacol</strong></td><td>informații despre piese, ore, actori</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ Literar vs. nonliterar</div>
                <p>Textul nonliterar informează exact și obiectiv; nu are figuri de stil și nu urmărește un scop artistic, ci unul practic.</p>
              </div>
            </div>
          `
        }
      ]
    },

    // ============================================================
    //  8. COMUNICARE ȘI REDACTARE
    // ============================================================
    {
      id: "comunicare",
      title: "Comunicare și Redactare",
      subtitle: "Situația de comunicare, cererea, fișa de lectură, caracterizarea, comentarea, compunerile",
      icon: "✍️",
      chapters: [

        {
          id: "situatia-comunicare",
          title: "Situația de comunicare. Dialog formal și informal",
          content: `
            <div class="content-block">
              <h4>📡 Situația de comunicare</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Situația de comunicare cuprinde toate elementele care participă la transmiterea unui mesaj.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Element</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td><strong>Emițătorul</strong></td><td>cel care transmite mesajul</td></tr>
                  <tr><td><strong>Receptorul</strong></td><td>cel care primește mesajul</td></tr>
                  <tr><td><strong>Mesajul</strong></td><td>informația transmisă</td></tr>
                  <tr><td><strong>Codul</strong></td><td>limba folosită</td></tr>
                  <tr><td><strong>Canalul</strong></td><td>mijlocul de transmitere (viu grai, scris, telefon)</td></tr>
                  <tr><td><strong>Contextul</strong></td><td>situația în care are loc comunicarea</td></tr>
                </tbody>
              </table>
            </div>

            <div class="content-block">
              <h4>🎩 Dialog formal și informal</h4>
              <table class="teoria-table">
                <thead><tr><th></th><th>Formal</th><th>Informal</th></tr></thead>
                <tbody>
                  <tr><td>Cu cine</td><td>persoane necunoscute, autorități, profesori</td><td>prieteni, familie</td></tr>
                  <tr><td>Ton</td><td>politicos, îngrijit</td><td>relaxat, familiar</td></tr>
                  <tr><td>Adresare</td><td>dumneavoastră, domnule</td><td>tu, măi, salut</td></tr>
                  <tr><td>Exemplu</td><td><em>Bună ziua! Ați putea să mă ajutați?</em></td><td><em>Salut! Mă ajuți?</em></td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "cererea",
          title: "Cererea",
          content: `
            <div class="content-block">
              <h4>📄 Cererea</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Cererea este un <strong>text funcțional oficial</strong> prin care o persoană solicită ceva unei instituții sau unei autorități.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Parte a cererii</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Formula de adresare</td><td>sus, ex.: <em>Domnule Director,</em></td></tr>
                  <tr><td>Datele solicitantului</td><td>numele, clasa / adresa</td></tr>
                  <tr><td>Conținutul (solicitarea)</td><td><em>Vă rog să-mi aprobați...</em></td></tr>
                  <tr><td>Formula de încheiere</td><td><em>Vă mulțumesc.</em></td></tr>
                  <tr><td>Data și semnătura</td><td>jos: data (stânga), semnătura (dreapta)</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">⚠️ De reținut</div>
                <p>Cererea se scrie într-un limbaj <strong>oficial, politicos și concis</strong>. Se folosește formula de politețe (<em>Vă rog, Vă mulțumesc</em>).</p>
              </div>
            </div>
          `
        },

        {
          id: "fisa-lectura",
          title: "Fișa de lectură",
          content: `
            <div class="content-block">
              <h4>🗂️ Fișa de lectură</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Fișa de lectură este un text în care notăm informațiile esențiale despre o carte citită, pentru a le reține și a le folosi ulterior.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Rubrică</th><th>Ce conține</th></tr></thead>
                <tbody>
                  <tr><td>Autorul</td><td>numele scriitorului</td></tr>
                  <tr><td>Titlul</td><td>numele operei</td></tr>
                  <tr><td>Editura, anul</td><td>datele de apariție</td></tr>
                  <tr><td>Personajele</td><td>principale și secundare</td></tr>
                  <tr><td>Rezumatul</td><td>pe scurt, acțiunea</td></tr>
                  <tr><td>Impresii personale</td><td>ce ți-a plăcut și de ce</td></tr>
                </tbody>
              </table>
            </div>
          `
        },

        {
          id: "caracterizare-compunere",
          title: "Caracterizarea de personaj (compunere)",
          content: `
            <div class="content-block">
              <h4>🎭 Cum redactăm o caracterizare de personaj</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>Caracterizarea de personaj este o compunere în care prezentăm trăsăturile fizice și morale ale unui personaj, susținute cu dovezi din text.</p>
              </div>
              <h5>Plan de redactare</h5>
              <ol>
                <li><strong>Introducere</strong>: numele personajului, opera, autorul, rolul (principal/secundar).</li>
                <li><strong>Trăsături fizice</strong>: portretul fizic (dacă apare în text).</li>
                <li><strong>Trăsături morale</strong>: cu mijloacele de caracterizare (fapte, vorbe, gânduri, relații).</li>
                <li><strong>Mijloace de caracterizare</strong>: directă și indirectă, cu citate-suport.</li>
                <li><strong>Încheiere</strong>: opinia despre personaj.</li>
              </ol>
              <div class="exemplu">
                <div class="exemplu-label">Model de formulare</div>
                <p><em>„O trăsătură a personajului este hărnicia, reieșită indirect din faptele sale: el muncește de dimineață până seara. Această trăsătură este susținută și direct de narator, care afirmă că «era un om neobosit».”</em></p>
              </div>
            </div>
          `
        },

        {
          id: "comentarea-titlului",
          title: "Comentarea unei secvențe și a titlului",
          content: `
            <div class="content-block">
              <h4>🔍 Comentarea unei secvențe</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție</div>
                <p>A comenta o secvență înseamnă a explica <strong>semnificația</strong> unui fragment: ce se întâmplă, ce sentimente transmite și prin ce mijloace artistice.</p>
              </div>
            </div>

            <div class="content-block">
              <h4>🏷️ Comentarea semnificațiilor titlului</h4>
              <p>Titlul poate anunța tema, un personaj, un simbol sau ideea centrală a operei.</p>
              <div class="exemplu">
                <div class="exemplu-label">Exemple</div>
                <p>• Titlul <em>„Amintiri din copilărie”</em> anunță tema (copilăria) și caracterul memorialistic.</p>
                <p>• Titlul <em>„Popa Tanda”</em> indică personajul principal (porecla preotului).</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Întrebări utile</div>
                <p>La ce se referă titlul? Este propriu sau figurat? Anunță tema, un personaj sau un simbol? Cum se leagă de conținutul operei?</p>
              </div>
            </div>
          `
        },

        {
          id: "interviul",
          title: "Interviul (dialog nonliterar)",
          content: `
            <div class="content-block">
              <h4>🎤 Interviul</h4>
              <div class="definitie">
                <div class="definitie-label">Definiție (conform manual cls. VII)</div>
                <p>Interviul este un dialog nonliterar în care un <strong>jurnalist</strong> (intervievator) adresează întrebări unei <strong>personalități</strong> (intervievat) pentru a obține informații sau opinii care urmează să fie publicate/difuzate.</p>
              </div>
              <table class="teoria-table">
                <thead><tr><th>Trăsătură</th><th>Descriere</th></tr></thead>
                <tbody>
                  <tr><td>Participanți</td><td>intervievator (pune întrebări) + intervievat (răspunde)</td></tr>
                  <tr><td>Scop</td><td>obținere de informații, opinii, declarații</td></tr>
                  <tr><td>Structură</td><td>alternare întrebare–răspuns; nu se folosește linia de dialog, ci numele persoanei</td></tr>
                  <tr><td>Registru</td><td>formal, politicos, adaptat publicului</td></tr>
                  <tr><td>Publicare</td><td>presă scrisă, radio, televiziune, online</td></tr>
                </tbody>
              </table>
              <div class="exemplu">
                <div class="exemplu-label">📖 Fragment din manual – Interviu cu Matei Vișniec</div>
                <p><em><strong>Miruna:</strong> Nu pot să nu vă întreb. Cum este să fiți în cărți?</em></p>
                <p><em><strong>Matei Vișniec:</strong> Este o senzație de stranietate, dar în același timp de mare bucurie. Uneori nu îmi vine să cred că am devenit scriitor, pentru că la ora la care aveam vârsta pe care o ai tu doream deja să fiu scriitor.</em></p>
                <p>Observație: intervievatoarea (Miruna) este elevă de clasa a VII-a, ceea ce arată că oricine poate lua un interviu.</p>
              </div>
              <div class="atentie">
                <div class="atentie-label">💡 Cum se redactează un interviu</div>
                <p>1. Documentează-te despre persoana intervievată.</p>
                <p>2. Pregătește întrebări clare, variate și relevante (nu doar „da/nu").</p>
                <p>3. Ascultă activ; pune întrebări de aprofundare.</p>
                <p>4. La publicare: redă fidel răspunsurile; adaugă context dacă e nevoie.</p>
              </div>
            </div>
          `
        },

        {
          id: "compuneri",
          title: "Compuneri narative, descriptive și informative",
          content: `
            <div class="content-block">
              <h4>✍️ Tipuri de compuneri</h4>
              <table class="teoria-table">
                <thead><tr><th>Tip</th><th>Ce urmărește</th><th>Mărci specifice</th></tr></thead>
                <tbody>
                  <tr><td><strong>Narativă</strong></td><td>povestește o întâmplare</td><td>verbe de acțiune, ordine cronologică</td></tr>
                  <tr><td><strong>Descriptivă</strong></td><td>descrie un loc, o persoană, un obiect</td><td>adjective, epitete, imagini artistice</td></tr>
                  <tr><td><strong>Informativă</strong></td><td>transmite informații clare</td><td>limbaj obiectiv, precis</td></tr>
                </tbody>
              </table>
              <div class="atentie">
                <div class="atentie-label">💡 Inserarea dialogului</div>
                <p>Într-o compunere narativă putem introduce dialog pentru a o face mai vie. Dialogul se marchează cu linia de dialog și dă naturalețe povestirii.</p>
              </div>
              <div class="exemplu">
                <div class="exemplu-label">Structura oricărei compuneri</div>
                <p><strong>Introducere</strong> (prezentarea temei) → <strong>Cuprins</strong> (dezvoltarea ideilor) → <strong>Încheiere</strong> (concluzia).</p>
              </div>
            </div>
          `
        }
      ]
    }

  ]
};
