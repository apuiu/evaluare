// ============================================================
//  ROMÂNĂ - CLASA A 7-A
//  Teorie completă conform programei școlare românești
//  (subordonatele detaliate sunt tratate la clasa a VIII-a)
// ============================================================

// ─── Helper – exerciții cu dificultate progresivă și rezolvare ───
const DIF_LABELS_R7 = { usor: "Ușor", mediu: "Mediu", dificil: "Dificil", "f-dificil": "Foarte dificil" };
const exR7 = (items) => `
            <div class="content-block">
              <h4>✏️ Exerciții propuse</h4>
              <ol>
                ${items.map((item) => `<li><span class="dif-badge dif-${item.level}">${DIF_LABELS_R7[item.level]}</span> ${item.text}<details class="rezolvare-toggle"><summary>Vezi rezolvarea</summary><p>${item.solution}</p></details></li>`).join("\n                ")}
              </ol>
            </div>`;

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
            ${exR7([
              {level:"usor",text:"Ce este sensul denotativ al unui cuvânt?",solution:"Sensul de bază, obiectiv, de dicționar al unui cuvânt."},
              {level:"usor",text:"Ce este sensul conotativ?",solution:"Sensul secundar, afectiv, expresiv, care apare mai ales în context figurat."},
              {level:"usor",text:"În propoziția „Deschide gura!”, cuvântul „gură” are sens propriu sau figurat?",solution:"Sens propriu (organul)."},
              {level:"mediu",text:"Precizați sensul cuvântului subliniat: „Gura satului vorbește mult.”",solution:"Sens figurat: bârfa, vorbele oamenilor din sat."},
              {level:"mediu",text:"Construiți o propoziție în care cuvântul „inimă” să aibă sens propriu și una în care să aibă sens figurat.",solution:"Sens propriu: Inima îi bate repede după alergare. Sens figurat: Are o inimă de aur (este bun)."},
              {level:"mediu",text:"De ce este important contextul pentru a stabili sensul unui cuvânt?",solution:"Pentru că multe cuvinte au mai multe sensuri, iar doar cuvintele din jur (contextul) ne arată care sens este folosit."},
              {level:"dificil",text:"Explicați diferența dintre sensul propriu și cel figurat folosind cuvântul „foc”.",solution:"Sens propriu: arderea cu flacără („a aprins un foc”); sens figurat: pasiune, intensitate („are foc în priviri”)."},
              {level:"dificil",text:"Identificați sensul (propriu/figurat) în: „O gură de aer proaspăt m-a liniștit.”",solution:"Sens figurat: o cantitate mică de aer, nu organul."},
              {level:"f-dificil",text:"Explicați de ce sensul figurat este mai frecvent în textele literare decât în cele științifice.",solution:"Textele literare urmăresc expresivitatea și sugestia, folosind sensul figurat; textele științifice necesită precizie, deci preferă sensul denotativ."},
              {level:"f-dificil",text:"Alcătuiți un enunț în care „a curge” să fie folosit cu sens propriu, apoi cu sens figurat.",solution:"Sens propriu: Apa curge din robinet. Sens figurat: Timpul curge repede."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este un împrumut lingvistic?",solution:"Un cuvânt preluat dintr-o altă limbă."},
              {level:"usor",text:"Cum se numesc cuvintele nou intrate în limbă prin împrumut?",solution:"Neologisme."},
              {level:"usor",text:"Din ce limbă provine cuvântul „meci”?",solution:"Din engleză."},
              {level:"mediu",text:"Clasificați cuvintele „șofer”, „weekend”, „pian” după limba de origine.",solution:"Șofer - franceză; weekend - engleză; pian - italiană."},
              {level:"mediu",text:"Ce diferență este între mijloacele interne și mijlocul extern de îmbogățire a vocabularului?",solution:"Mijloacele interne (derivare, compunere, conversiune) folosesc materialul limbii; mijlocul extern (împrumutul) aduce cuvinte din alte limbi."},
              {level:"mediu",text:"Ce este un calc lingvistic? Dați un exemplu.",solution:"Este împrumutarea doar a structurii unei expresii, tradusă cuvânt cu cuvânt, ex: „cal-putere” din franceza „cheval-vapeur”."},
              {level:"dificil",text:"De ce limba română conține multe neologisme din franceză și engleză?",solution:"Franceza a influențat puternic româna în secolul al XIX-lea; engleza influențează masiv limbajul actual, mai ales prin tehnologie."},
              {level:"dificil",text:"Identificați limba de origine pentru: bulevard, contabil, biologie.",solution:"Bulevard - franceză; contabil - italiană; biologie - latină savantă."},
              {level:"f-dificil",text:"Explicați de ce împrumuturile sunt considerate un mijloc extern, spre deosebire de derivare.",solution:"Derivarea folosește elemente deja existente în limbă, pe când împrumutul aduce cuvinte întregi din afara sistemului lingvistic românesc."},
              {level:"f-dificil",text:"Explicați rolul neologismelor în adaptarea limbii la realități noi.",solution:"Neologismele permit limbii să denumească concepte, obiecte și fenomene noi pentru care nu exista deja un termen, facilitând comunicarea eficientă."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este un cuvânt polisemantic?",solution:"Un cuvânt cu mai multe sensuri înrudite între ele."},
              {level:"usor",text:"Câte cuvinte diferite sunt implicate în polisemie?",solution:"Un singur cuvânt, cu mai multe sensuri."},
              {level:"usor",text:"Ce este omonimia?",solution:"Relația dintre două sau mai multe cuvinte diferite, care au aceeași formă dar sensuri fără nicio legătură."},
              {level:"mediu",text:"Explicați polisemia cuvântului „cap” cu 2 exemple.",solution:"‘Mă doare capul’ (parte a corpului) și ‘este capul familiei’ (căpetenie) - sensuri înrudite prin ideea de conducere/parte principală."},
              {level:"mediu",text:"De ce „leu” (animal) și „leu” (monedă) sunt omonime și nu polisemantice?",solution:"Pentru că cele două sensuri nu au nicio legătură logică între ele."},
              {level:"mediu",text:"Explicați diferența principală dintre polisemie și omonimie.",solution:"La polisemie este un singur cuvânt cu sensuri înrudite; la omonimie sunt cuvinte diferite, cu formă identică dar sensuri fără legătură."},
              {level:"dificil",text:"De ce în dicționar cuvintele polisemantice au o singură intrare, iar omonimele au intrări separate?",solution:"Pentru că polisemia este un singur cuvânt cu sensuri multiple înrudite, în timp ce omonimele sunt cuvinte distincte lexical, doar cu formă identică."},
              {level:"dificil",text:"Analizați dacă „masă” (mobilă) și „masă” (mulțime de oameni) reprezintă polisemie sau omonimie.",solution:"Polisemie, deoarece sensurile sunt înrudite prin ideea de ‘grup/loc de adunare’."},
              {level:"f-dificil",text:"Construiți un exemplu propriu de omonimie și explicați de ce nu este polisemie.",solution:"‘Toc’ (obiect de scris) și ‘toc’ (parte a pantofului) - nu au nicio legătură de sens, deci sunt omonime."},
              {level:"f-dificil",text:"Explicați de ce testul ‘au sensurile legătură între ele?’ este criteriul esențial pentru a distinge polisemia de omonimie.",solution:"Forma identică poate fi întâmplătoare (omonimie) sau rezultatul evoluției unui singur cuvânt (polisemie); doar analiza legăturii de sens clarifică situația."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce sunt paronimele?",solution:"Cuvinte cu formă asemănătoare dar sens diferit."},
              {level:"usor",text:"Ce înseamnă „iminent”?",solution:"Care urmează să se întâmple curând."},
              {level:"usor",text:"Ce înseamnă „eminent”?",solution:"Remarcabil, deosebit."},
              {level:"mediu",text:"Explicați diferența dintre „a preveni” și „a proveni”.",solution:"‘A preveni’ înseamnă a atenționa dinainte; ‘a proveni’ înseamnă a-și avea originea din."},
              {level:"mediu",text:"Corectați greșeala: „un pericol eminent”.",solution:"Corect: ‘un pericol iminent’ (care urmează să se producă)."},
              {level:"mediu",text:"Alcătuiți câte o propoziție cu „orar” și cu „oral”.",solution:"Am consultat orarul de curs. / Am susținut un examen oral."},
              {level:"dificil",text:"Explicați diferența de sens dintre „a investi” și „a învesti”, cu exemple.",solution:"‘A investi’ = a plasa bani (a investi într-o afacere); ‘a învesti’ = a acorda o funcție/putere (a fost învestit primar)."},
              {level:"dificil",text:"De ce paronimele sunt ușor de confundat în vorbire?",solution:"Pentru că au o formă foarte asemănătoare, deși sensurile lor sunt complet diferite."},
              {level:"f-dificil",text:"Găsiți o pereche de paronime nemenționată în lecție și explicați diferența de sens.",solution:"‘complementar’ / ‘suplimentar’ - complementar înseamnă ‘care completează’; suplimentar înseamnă ‘în plus’."},
              {level:"f-dificil",text:"Explicați de ce folosirea greșită a paronimelor poate schimba complet sensul unui mesaj.",solution:"Deși cuvintele sunt asemănătoare fonetic, sensurile lor sunt diferite, iar înlocuirea greșită duce la transmiterea unei informații incorecte."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este pleonasmul?",solution:"Greșeala de exprimare ce constă în folosirea alăturată a două cuvinte cu același sens."},
              {level:"usor",text:"De ce „a urca sus” este un pleonasm?",solution:"Pentru că ‘a urca’ înseamnă deja ‘a merge în sus’, deci ‘sus’ este de prisos."},
              {level:"usor",text:"Corectați: „a coborî jos”.",solution:"A coborî."},
              {level:"mediu",text:"Corectați pleonasmele: „hemoragie de sânge”, „a reveni înapoi”.",solution:"Hemoragie; a reveni."},
              {level:"mediu",text:"De ce „caligrafie frumoasă” este pleonasm?",solution:"Pentru că ‘caligrafie’ înseamnă deja ‘scris frumos’, deci adjectivul repetă inutil ideea."},
              {level:"mediu",text:"Cum ne dăm seama dacă o exprimare este pleonastică?",solution:"Ne întrebăm dacă unul dintre cuvinte conține deja sensul celuilalt."},
              {level:"dificil",text:"Corectați și explicați: „și-a adus aportul”.",solution:"Corect: ‘și-a adus contribuția’ sau ‘a contribuit’; ‘aport’ înseamnă deja ‘contribuție’."},
              {level:"dificil",text:"Construiți un exemplu propriu de pleonasm și corectați-l.",solution:"‘A avansa înainte’ → corect: ‘a avansa’ (avansul implică deja mișcarea înainte)."},
              {level:"f-dificil",text:"Explicați de ce pleonasmul este considerat o greșeală de exprimare și nu o simplă redundanță stilistică.",solution:"Pentru că repetă inutil o informație deja conținută în celălalt cuvânt, fără a adăuga sens sau expresivitate."},
              {level:"f-dificil",text:"Există pleonasme acceptate stilistic (repetiții intenționate)? Explicați diferența față de pleonasmul-greșeală.",solution:"Da, în textele literare repetiția poate fi folosită intenționat pentru accentuare; pleonasmul-greșeală apare din neatenție și nu are rol stilistic."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce sunt unitățile frazeologice?",solution:"Grupuri fixe de cuvinte cu un înțeles unitar, diferit de sensul cuvintelor separate."},
              {level:"usor",text:"Ce înseamnă expresia „a bate câmpii”?",solution:"A vorbi fără sens, aiurea."},
              {level:"usor",text:"Ce înseamnă „a tăia frunză la câini”?",solution:"A lenevi, a nu face nimic."},
              {level:"mediu",text:"Explicați sensul expresiei „a-și lua inima în dinți”.",solution:"A se hotărî, a-și face curaj."},
              {level:"mediu",text:"Ce înseamnă „cu noaptea în cap”?",solution:"Foarte devreme."},
              {level:"mediu",text:"Construiți o propoziție cu expresia „a o lua la sănătoasa”.",solution:"Când a văzut câinele, hoțul a luat-o la sănătoasa."},
              {level:"dificil",text:"De ce sensul unei unități frazeologice nu poate fi dedus din sensul cuvintelor componente?",solution:"Pentru că unitatea frazeologică funcționează ca un tot unitar, cu un sens figurat convențional, diferit de suma sensurilor individuale."},
              {level:"dificil",text:"Explicați sensul expresiei „a-i pica fisa” și construiți un exemplu.",solution:"Înseamnă ‘a înțelege în sfârșit’; ex: ‘După ce i-a explicat de trei ori, în sfârșit i-a picat fisa.’"},
              {level:"f-dificil",text:"Găsiți o unitate frazeologică nemenționată și explicați-i sensul.",solution:"‘A rupe gura târgului’ - a vorbi foarte tare (sau a fi cel mai bun la ceva)."},
              {level:"f-dificil",text:"Explicați de ce unitățile frazeologice sunt considerate parte a vocabularului expresiv al unei limbi.",solution:"Pentru că îmbogățesc exprimarea cu imagini și sensuri figurate specifice culturii unei limbi, dificil de tradus literal."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este o serie derivativă?",solution:"O succesiune de cuvinte derivate unul din altul, în trepte, pornind de la un cuvânt de bază."},
              {level:"usor",text:"Din ce cuvânt derivă „florar”?",solution:"Din „floare”."},
              {level:"usor",text:"Continuați seria: lucra → lucrător → ?",solution:"Lucrătorime."},
              {level:"mediu",text:"Formați o serie derivativă pornind de la „prieten”.",solution:"prieten → prietenie → prietenos."},
              {level:"mediu",text:"Ce diferență este între familia lexicală și seria derivativă?",solution:"Familia lexicală cuprinde toate cuvintele înrudite, indiferent de ordine; seria derivativă este un lanț în care fiecare cuvânt derivă din cel anterior."},
              {level:"mediu",text:"Identificați sufixul care leagă fiecare pereche: floare → florar → florărie.",solution:"floare→florar: sufixul -ar; florar→florărie: sufixul -ie."},
              {level:"dificil",text:"Explicați de ce ordinea cuvintelor contează într-o serie derivativă.",solution:"Pentru că fiecare cuvânt din serie se formează pe baza cuvântului anterior prin adăugarea unui sufix/prefix, deci ordinea reflectă etapele reale de formare."},
              {level:"dificil",text:"Construiți o serie derivativă proprie de minimum 3 termeni.",solution:"Exemplu: bucurie → a se bucura → bucuros."},
              {level:"f-dificil",text:"Explicați de ce nu orice grup de cuvinte înrudite formează o serie derivativă.",solution:"Pentru că seria derivativă necesită o relație de derivare succesivă, nu doar o înrudire generală de sens sau rădăcină, cum e cazul familiei lexicale."},
              {level:"f-dificil",text:"Analizați seria: lucra → lucrător → lucrătorime, precizând tipul de derivare pentru fiecare pas.",solution:"lucra→lucrător: derivare cu sufixul -tor (formează un substantiv din verb); lucrător→lucrătorime: derivare cu sufixul -ime (formează un colectiv)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este accentul?",solution:"Pronunțarea mai intensă a unei silabe dintr-un cuvânt."},
              {level:"usor",text:"Este accentul în limba română fix sau liber?",solution:"Liber (nu are o poziție fixă)."},
              {level:"usor",text:"Cum se pronunță corect „regizor”?",solution:"regizór (accent pe ultima silabă)."},
              {level:"mediu",text:"Explicați diferența de sens dintre „cópii” și „copíi”, în funcție de accent.",solution:"„Cópii” = de la copil (plural); „copíi” = de la copie (plural)."},
              {level:"mediu",text:"Cum se schimbă sensul cuvântului „veselă” în funcție de accent?",solution:"„Véselă” = bucuroasă (adjectiv); „vesélă” = vase (substantiv)."},
              {level:"mediu",text:"Alcătuiți 2 propoziții cu „haină” accentuat diferit, arătând sensurile diferite.",solution:"„Este o soartă háină.” (crudă) / „Mi-am cumpărat o haínă nouă.” (îmbrăcăminte)."},
              {level:"dificil",text:"De ce cuvintele „mobilă” și „haină” sunt numite omografe?",solution:"Pentru că se scriu la fel, dar au sensuri și accentuări (deci și pronunții) diferite."},
              {level:"dificil",text:"Corectați accentuarea greșită: „cáracter”, „régizor”.",solution:"Corect: caractér, regizór."},
              {level:"f-dificil",text:"Explicați de ce accentul liber al limbii române poate provoca ambiguități de sens.",solution:"Pentru că același cuvânt scris identic poate avea sensuri diferite în funcție de silaba accentuată, iar contextul scris nu marchează întotdeauna accentul."},
              {level:"f-dificil",text:"Construiți o pereche de propoziții care să folosească „mobilă” cu ambele accentuări posibile.",solution:"„Am cumpărat o móbilă nouă pentru living.” (piesă de mobilier) / „Frontiera a fost mobílă în acea perioadă.” (care se mișcă)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce sunt verbele copulative?",solution:"Verbe nepredicative care leagă subiectul de numele predicativ, formând un predicat nominal."},
              {level:"usor",text:"Numiți 2 verbe copulative în afară de „a fi”.",solution:"A deveni, a ajunge (sau a ieși, a rămâne, a părea, a însemna, a se face)."},
              {level:"usor",text:"În „El este harnic”, care este verbul copulativ?",solution:"„Este”."},
              {level:"mediu",text:"Identificați predicatul nominal în: „Ea a devenit medic.”",solution:"„A devenit medic” (verb copulativ „a devenit” + nume predicativ „medic”)."},
              {level:"mediu",text:"Explicați diferența dintre „A ajuns director” și „A ajuns acasă”.",solution:"În prima, „a ajunge” este copulativ (+ nume predicativ „director”); în a doua, este predicativ, cu sensul „a sosit”."},
              {level:"mediu",text:"Construiți o propoziție cu „a rămâne” folosit ca verb copulativ.",solution:"„A rămas surprins de veste.” (surprins = nume predicativ)."},
              {level:"dificil",text:"Analizați: „S-a făcut frig.” Ce valoare are verbul „a se face”?",solution:"Este verb copulativ, iar „frig” este numele predicativ; formează împreună predicatul nominal."},
              {level:"dificil",text:"Explicați de ce verbele copulative „nu au înțeles deplin de sine stătător”.",solution:"Pentru că, spre deosebire de verbele predicative, sensul lor complet se realizează numai împreună cu numele predicativ, nu izolat."},
              {level:"f-dificil",text:"Comparați „A rămas trist.” și „A rămas în clasă.”, precizând valoarea verbului „a rămâne” în fiecare caz.",solution:"„A rămas trist” - verb copulativ (+ nume predicativ „trist”); „A rămas în clasă” - verb predicativ, cu sensul „a stat”."},
              {level:"f-dificil",text:"Construiți 2 propoziții cu „a ieși”, una în care să fie copulativ și una în care să fie predicativ.",solution:"Copulativ: „A ieșit câștigător la concurs.” Predicativ: „A ieșit din casă.” (= a părăsit locul)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Câte diateze există în limba română?",solution:"Trei: activă, pasivă și reflexivă."},
              {level:"usor",text:"Ce se întâmplă la diateza activă?",solution:"Subiectul face acțiunea."},
              {level:"usor",text:"Cum se formează diateza pasivă?",solution:"Cu ajutorul verbului 'a fi' + participiul verbului de conjugat."},
              {level:"mediu",text:"Transformați la diateza pasivă: „Elevul scrie tema.”",solution:"„Tema este scrisă de elev.”"},
              {level:"mediu",text:"Identificați complementul de agent în: „Grădina a fost udată de către grădinar.”",solution:"„De către grădinar”."},
              {level:"mediu",text:"Ce diateză are verbul din „Elevul se spală.”?",solution:"Diateza reflexivă."},
              {level:"dificil",text:"Prin ce prepoziții se introduce complementul de agent?",solution:"Prin 'de' sau 'de către'."},
              {level:"dificil",text:"Transformați în diateza activă: „Cartea este citită de elev.”",solution:"„Elevul citește cartea.”"},
              {level:"f-dificil",text:"Explicați ce se schimbă gramatical (subiect, complement) când transformăm o propoziție din activ în pasiv.",solution:"Complementul direct din activ devine subiect în pasiv, iar subiectul din activ devine complement de agent în pasiv."},
              {level:"f-dificil",text:"De ce diateza nu se studiază obligatoriu în programa de gimnaziu, dar apare totuși în unele manuale?",solution:"Pentru că este considerată conținut de aprofundare, util pentru înțelegerea completă a raportului dintre subiect și acțiune, deși nu este testată obligatoriu la evaluarea națională."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce sunt verbele impersonale?",solution:"Verbe care nu au subiect, folosite mai ales la persoana a III-a (ex: plouă, ninge)."},
              {level:"usor",text:"Dați 2 exemple de verbe impersonale.",solution:"Plouă, ninge (sau tună, fulgeră, trebuie)."},
              {level:"usor",text:"Are propoziția „Plouă.” subiect?",solution:"Nu, nu are subiect (nici exprimat, nici neexprimat)."},
              {level:"mediu",text:"De ce nu putem întreba „cine plouă?”",solution:"Pentru că verbul „a ploua” este impersonal și nu are subiect logic asociat."},
              {level:"mediu",text:"Explicați diferența dintre „Învăț.” și „Plouă.” din punctul de vedere al subiectului.",solution:"„Învăț” are subiect inclus în desinență (eu); „Plouă” nu are niciun subiect, fiind verb impersonal."},
              {level:"mediu",text:"Construiți o propoziție cu verbul impersonal „trebuie”.",solution:"„Trebuie să învățăm pentru examen.”"},
              {level:"dificil",text:"Identificați tipul verbului (personal/impersonal) în: „Ninge de dimineață.”",solution:"Impersonal - propoziția nu are subiect."},
              {level:"dificil",text:"Explicați de ce propoziția cu verb impersonal se numește „propoziție fără subiect”.",solution:"Pentru că acțiunea exprimată de verb nu poate fi atribuită niciunui subiect logic, spre deosebire de verbele personale."},
              {level:"f-dificil",text:"Analizați verbul din „Se cuvine să mulțumim.” și explicați de ce este impersonal.",solution:"„Se cuvine” este o construcție impersonală (nu are subiect propriu), exprimând o obligație morală generală, nu acțiunea unei persoane anume."},
              {level:"f-dificil",text:"De ce este important să recunoaștem verbele impersonale la analiza sintactică a unei propoziții?",solution:"Pentru că aceste propoziții nu au subiect, deci nu trebuie să căutăm forțat un subiect inexistent, evitând astfel greșeli de analiză."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este o locuțiune verbală?",solution:"Un grup de cuvinte cu înțeles unitar care se comportă ca un singur verb."},
              {level:"usor",text:"Cu ce verb poate fi înlocuită locuțiunea „a-și aduce aminte”?",solution:"A-și aminti."},
              {level:"usor",text:"Cu ce verb poate fi înlocuită locuțiunea „a ține minte”?",solution:"A memora / a reține."},
              {level:"mediu",text:"Înlocuiți cu un verb: „a băga de seamă”.",solution:"A observa."},
              {level:"mediu",text:"Ce funcție sintactică are de obicei locuțiunea verbală într-o propoziție?",solution:"De obicei este predicat verbal."},
              {level:"mediu",text:"Construiți o propoziție cu locuțiunea verbală „a da năvală”.",solution:"Copiii au dat năvală în curte la pauza mare."},
              {level:"dificil",text:"Explicați de ce „a face de mâncare” este o locuțiune verbală și nu o simplă îmbinare liberă de cuvinte.",solution:"Pentru că are un sens unitar (a găti), diferit de suma literală a cuvintelor, și se comportă gramatical ca un singur verb."},
              {level:"dificil",text:"Identificați locuțiunea verbală din: „El își aduce aminte de tine.” și precizați funcția ei sintactică.",solution:"Locuțiunea verbală este ‘își aduce aminte’; are funcția de predicat verbal."},
              {level:"f-dificil",text:"Explicați diferența dintre o locuțiune verbală și o altă unitate frazeologică non-verbală.",solution:"Locuțiunea verbală se comportă gramatical ca un verb (poate fi predicat, se conjugă), în timp ce alte unități frazeologice au alte funcții și nu se conjugă."},
              {level:"f-dificil",text:"Construiți 2 propoziții proprii cu locuțiuni verbale diferite de cele din lecție.",solution:"‘Îlmi dau seama că am greșit.’ (a-și da seama = a realiza); ‘Am luat parte la concurs.’ (a lua parte = a participa)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce marchează infinitivul?",solution:"Forma din dicționar a verbului, care denumește o acțiune sau o stare."},
              {level:"usor",text:"Ce sufixe are gerunziul?",solution:"-ând și -ind."},
              {level:"usor",text:"Din ce este alcătuit supinul?",solution:"Din prepoziție + forma de participiu."},
              {level:"mediu",text:"Precizați funcția sintactică a infinitivului din: „A visa este minunat.”",solution:"Subiect."},
              {level:"mediu",text:"Ce devine participiul atunci când apare independent (fără verb auxiliar)?",solution:"Devine adjectiv provenit din participiu, cu funcție de atribut adjectival sau nume predicativ."},
              {level:"mediu",text:"Identificați funcția supinului din: „Am terminat de citit.”",solution:"Complement direct."},
              {level:"dificil",text:"Explicați diferența dintre supin și participiu, cu exemple.",solution:"Supinul are prepoziție + participiu (de făcut, la cules); participiul singur, fără prepoziție, devine adjectiv (cartea citită)."},
              {level:"dificil",text:"Identificați forma verbală nepersonală și funcția ei în: „Trecând prin parc, a văzut-o pe Maria.”",solution:"Gerunziul ‘trecând’, cu funcția de circumstanțial de timp."},
              {level:"f-dificil",text:"Explicați de ce modurile nepersonale nu formează predicat, spre deosebire de modurile personale.",solution:"Pentru că nu exprimă o acțiune raportată la o persoană gramaticală și un timp precis, ci funcționează ca substantive, adjective sau adverbe."},
              {level:"f-dificil",text:"Analizați forma verbală din „teama de a vorbi în public” și precizați forma nepersonală și funcția ei.",solution:"Infinitivul ‘a vorbi’, cu funcția de atribut verbal (determină substantivul ‘teama’)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce face pronumele nehotărât?",solution:"Înlocuiește un substantiv, fără să precizeze exact despre cine sau ce este vorba."},
              {level:"usor",text:"Dați 2 exemple de pronume nehotărâte simple.",solution:"Unul, altul (sau mult, puțin, tot, atât)."},
              {level:"usor",text:"Ce fel de pronume este „cineva”?",solution:"Pronume nehotărât compus (cu -va)."},
              {level:"mediu",text:"Identificați valoarea (pronume/adjectiv pronominal) în: „Fiecare elev a răspuns.”",solution:"Adjectiv pronominal nehotărât (însoțește substantivul ‘elev’)."},
              {level:"mediu",text:"Identificați valoarea în: „Fiecare a răspuns.”",solution:"Pronume nehotărât (înlocuiește substantivul)."},
              {level:"mediu",text:"Construiți o propoziție cu „oricare” ca pronume nehotărât.",solution:"„Oricare dintre voi poate răspunde.”"},
              {level:"dificil",text:"Explicați diferența dintre pronumele nehotărât și adjectivul pronominal nehotărât.",solution:"Pronumele înlocuiește un substantiv; adjectivul pronominal însoțește (determină) un substantiv."},
              {level:"dificil",text:"Clasificați după categorie: careva, oricine, fiecare.",solution:"Careva - compus cu -va; oricine - compus cu ori-; fiecare - compus cu fie-."},
              {level:"f-dificil",text:"Analizați „Câțiva copii au plecat.” și precizați valoarea morfologică a lui „câțiva”.",solution:"Adjectiv pronominal nehotărât, deoarece însoțește substantivul ‘copii’."},
              {level:"f-dificil",text:"Construiți două propoziții cu „orice”, una în care să fie pronume și una în care să fie adjectiv pronominal.",solution:"Pronume: „Spune orice.” Adjectiv pronominal: „Orice carte este binevenită.”"}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce arată pronumele negativ?",solution:"Absența ființelor sau a obiectelor."},
              {level:"usor",text:"Dați 2 exemple de pronume negative.",solution:"Nimeni, nimic (sau niciunul/niciuna)."},
              {level:"usor",text:"Cum se scrie corect adjectivul pronominal negativ la masculin: „niciun” sau „nici un”?",solution:"„Niciun”, într-un singur cuvânt."},
              {level:"mediu",text:"Corectați: „Nu am nici un caiet.”",solution:"„Nu am niciun caiet.”"},
              {level:"mediu",text:"Explicați regula dublei negații în limba română, cu exemplu.",solution:"Pronumele negativ cere și verbul la forma negativă: „Nimeni nu a venit” (nu „Nimeni a venit”)."},
              {level:"mediu",text:"Construiți o propoziție cu „nicio” (adjectiv pronominal negativ, feminin).",solution:"„N-am nicio problemă cu asta.”"},
              {level:"dificil",text:"Când se scrie separat „nici un” și nu „niciun”?",solution:"Rar, când ‘un’ are sens de numeral: ‘Nu a citit nici măcar o pagină.’"},
              {level:"dificil",text:"Identificați valoarea (pronume/adjectiv pronominal) în: „Niciunul nu a răspuns.”",solution:"Pronume negativ (înlocuiește un substantiv)."},
              {level:"f-dificil",text:"Explicați de ce „Nimeni nu a venit” nu este considerată o dublă negație greșită, spre deosebire de alte limbi (ex. engleza).",solution:"În română, dubla negație (pronume negativ + verb negat) este norma gramaticală corectă, nu o greșeală, spre deosebire de engleză, unde dubla negație este incorectă."},
              {level:"f-dificil",text:"Construiți o propoziție cu adjectiv pronominal negativ și una cu pronume negativ, folosind aceeași rădăcină.",solution:"Adjectiv pronominal: „Niciun elev nu a lipsit.” Pronume: „Niciunul nu a lipsit.”"}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce face pronumele interogativ?",solution:"Ține locul unui substantiv necunoscut, despre care se întreabă."},
              {level:"usor",text:"Dați 2 exemple de pronume interogative.",solution:"Cine, ce (sau care, cât)."},
              {level:"usor",text:"În ce tip de propoziție apare pronumele interogativ?",solution:"În propoziții interogative."},
              {level:"mediu",text:"Identificați valoarea în: „Cine a venit?”",solution:"Pronume interogativ (înlocuiește un substantiv necunoscut)."},
              {level:"mediu",text:"Identificați valoarea în: „Care carte îți place?”",solution:"Adjectiv pronominal interogativ (însoțește substantivul „carte”)."},
              {level:"mediu",text:"Construiți o propoziție cu „al câtelea”.",solution:"„Al câtelea ai ieșit la concurs?”"},
              {level:"dificil",text:"Explicați diferența dintre pronumele interogativ și cel relativ, la nivel formal.",solution:"Au aceeași formă, dar pronumele interogativ apare în propoziții interogative, iar cel relativ leagă o subordonată de regentă."},
              {level:"dificil",text:"Identificați valoarea (pronume/adjectiv) în: „Câți au lipsit?”",solution:"Pronume interogativ (înlocuiește un substantiv, fără să fie urmat de altul)."},
              {level:"f-dificil",text:"Construiți două propoziții cu „ce”, una în care să fie pronume interogativ și una în care să fie adjectiv pronominal interogativ.",solution:"Pronume: „Ce ai spus?” Adjectiv pronominal: „Ce carte citești?”"},
              {level:"f-dificil",text:"Explicați de ce pronumele interogativ „al câtelea”/„a câta” este considerat o formă specială, ordinală.",solution:"Pentru că se referă la ordinea/poziția într-o succesiune, spre deosebire de celelalte pronume interogative care se referă la identitate sau cantitate."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce face pronumele relativ?",solution:"Înlocuiește un substantiv și, în același timp, leagă o subordonată de regentă."},
              {level:"usor",text:"Dați 2 exemple de pronume relative.",solution:"Care, cine (sau ce, cât)."},
              {level:"usor",text:"Cum se scrie pronumele relativ compus care se referă la o idee întreagă?",solution:"„Ceea ce”, în două cuvinte."},
              {level:"mediu",text:"Identificați pronumele relativ în: „Băiatul care citește este colegul meu.”",solution:"„Care”."},
              {level:"mediu",text:"Explicați la ce se referă „ceea ce” în: „A reușit, ceea ce ne-a bucurat.”",solution:"Se referă la o idee întreagă (faptul că a reușit), nu la un singur substantiv."},
              {level:"mediu",text:"Construiți o propoziție cu pronumele relativ „cine”.",solution:"„Cine învață reușește.”"},
              {level:"dificil",text:"Explicați de ce „care” complement direct cere reluare prin pronumele personal și prepoziția „pe”.",solution:"Pentru că substantivele/pronumele în acuzativ cu funcția de complement direct se construiesc de obicei cu ‘pe’ când sunt determinate (‘pe care’), și sunt reluate prin pronumele personal neaccentuat corespunzător."},
              {level:"dificil",text:"Corectați, dacă este cazul: „Fata pe care am văzut este verișoara mea.”",solution:"Corect: „Fata pe care am văzut-o este verișoara mea.” (lipsește reluarea prin ‘o’)."},
              {level:"f-dificil",text:"Explicați dubla funcție a pronumelui relativ, spre deosebire de pronumele interogativ.",solution:"Pronumele relativ înlocuiește un substantiv ȘI leagă gramatical o subordonată de regenta ei, pe când pronumele interogativ doar înlocuiește, fără rol de conector între propoziții."},
              {level:"f-dificil",text:"Analizați „Ia cât îiți trebuie.” și precizați rolul lui „cât”.",solution:"‘Cât’ este pronume relativ, înlocuiește o cantitate nespecificată și leagă subordonata de regentă."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce face adjectivul pronominal de întărire?",solution:"Însoțește un substantiv sau un pronume, subliniind (întărind) persoana despre care se vorbește."},
              {level:"usor",text:"Care este forma de întărire pentru „eu” (masculin)?",solution:"Însumi."},
              {level:"usor",text:"Care este forma de întărire pentru „ea”?",solution:"Însăși."},
              {level:"mediu",text:"Cu ce se acordă adjectivul pronominal de întărire?",solution:"Cu genul, numărul și persoana cuvântului pe care îl întărește."},
              {level:"mediu",text:"Completați: „Ei ___ au hotărât.” (formă de întărire, masculin plural)",solution:"Înșiși."},
              {level:"mediu",text:"Construiți o propoziție cu „însăți”.",solution:"„Ea însăși a recunoscut greșeala.”"},
              {level:"dificil",text:"Corectați dacă este greșit: „Eu însămi am rezolvat problema.” (vorbitor băiat)",solution:"Greșit; corect: „Eu însumi am rezolvat problema.” (forma masculină, pentru un vorbitor băiat)."},
              {level:"dificil",text:"Care este forma corectă de întărire pentru „noi” (feminin)?",solution:"Însene."},
              {level:"f-dificil",text:"Explicați de ce adjectivul pronominal de întărire provine dintr-un vechi pronume de întărire.",solution:"Pentru că forma sa (însumi, însăți etc.) s-a păstrat istoric ca element separat cu rol de accentuare a identității, fiind ulterior clasificat ca adjectiv pronominal, deoarece însoțește un substantiv/pronume."},
              {level:"f-dificil",text:"Construiți 3 propoziții, folosind forma de întărire pentru persoana I, a II-a și a III-a singular.",solution:"„Eu însumi am scris scrisoarea.” „Tu însuți ai ales.” „El însuși a decis.”"}
            ])}
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
            ${exR7([
              {level:"usor",text:"Numiți 3 funcții sintactice pe care le poate avea substantivul.",solution:"Subiect, complement direct, atribut (sau oricare 3 din listă)."},
              {level:"usor",text:"Ce este o locuțiune substantivală?",solution:"Un grup de cuvinte cu înțeles unitar care se comportă ca un substantiv."},
              {level:"usor",text:"Cu ce cuvânt poate fi înlocuită locuțiunea „aducere-aminte”?",solution:"Amintire."},
              {level:"mediu",text:"Identificați funcția substantivului subliniat: „Citesc cartea.”",solution:"Complement direct."},
              {level:"mediu",text:"Identificați funcția substantivului subliniat: „caietul elevului”.",solution:"Atribut substantival genitival."},
              {level:"mediu",text:"Înlocuiți cu un substantiv locuțiunea „părere de rău”.",solution:"Regret."},
              {level:"dificil",text:"Explicați diferența dintre atributul substantival genitival și cel prepozițional, cu exemple.",solution:"Genitivalul se exprimă prin genitiv fără prepoziție (caietul elevului); prepozițional se leagă printr-o prepoziție (caiet de matematică)."},
              {level:"dificil",text:"Analizați funcția substantivului din: „Ion, colegul meu, vine.”",solution:"‘Colegul meu’ are funcția de atribut apozițional (apoziție), determinând substantivul ‘Ion’."},
              {level:"f-dificil",text:"Construiți o propoziție în care substantivul „profesorului” să aibă funcția de atribut substantival genitival.",solution:"‘Cartea profesorului este pe masă.’ - ‘profesorului’ este atribut substantival genitival."},
              {level:"f-dificil",text:"Explicați de ce locuțiunea substantivală „băgare de seamă” este considerată un tot unitar și nu o simplă combinație de cuvinte.",solution:"Pentru că are un sens unic, echivalent cu ‘atenție’, diferit de suma literală a cuvintelor componente."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce arată numeralul cardinal?",solution:"Un număr exact (doi, zece)."},
              {level:"usor",text:"Ce arată numeralul ordinal?",solution:"Ordinea (al doilea, a treia)."},
              {level:"usor",text:"Dați un exemplu de numeral colectiv.",solution:"Amândoi (sau tustrei, câteșitrei)."},
              {level:"mediu",text:"Ce tip de numeral este „câte doi”?",solution:"Distributiv."},
              {level:"mediu",text:"Ce tip de numeral este „o treime”?",solution:"Fracționar."},
              {level:"mediu",text:"Identificați funcția numeralului din: „Trei au lipsit.”",solution:"Subiect."},
              {level:"dificil",text:"Ce tip de numeral este „îndoit” și ce arată el?",solution:"Multiplicativ; arată de câte ori crește o cantitate."},
              {level:"dificil",text:"Identificați funcția numeralului din: „El este primul.”",solution:"Nume predicativ."},
              {level:"f-dificil",text:"Construiți o propoziție în care numeralul „doi” să aibă funcția de complement.",solution:"‘I-am dat doi (bomboane).’ - ‘doi’ este complement direct."},
              {level:"f-dificil",text:"Explicați diferența dintre numeralul distributiv și cel multiplicativ, cu exemple.",solution:"Distributivul arată repartizarea în grupuri egale (câte doi, câte trei); multiplicativul arată de câte ori crește o cantitate (îndoit, întreit)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce funcție sintactică are adjectivul din „elevul harnic”?",solution:"Atribut adjectival."},
              {level:"usor",text:"Ce funcție are adjectivul din „Elevul este harnic.”?",solution:"Nume predicativ."},
              {level:"usor",text:"Ce este o locuțiune adjectivală?",solution:"Un grup de cuvinte cu înțeles unitar care se comportă ca un adjectiv."},
              {level:"mediu",text:"Cu ce adjectiv poate fi înlocuită locuțiunea „om de treabă”?",solution:"Cumsecade."},
              {level:"mediu",text:"Cu ce adjectiv poate fi înlocuită locuțiunea „om cu scaun la cap”?",solution:"Înțelept, cuminte."},
              {level:"mediu",text:"Construiți o propoziție cu locuțiunea adjectivală „de nădejde”.",solution:"‘Are un prieten de nădejde.’ (de încredere)"},
              {level:"dificil",text:"Explicați de ce locuțiunea adjectivală „om de treabă” nu se referă literal la o meserie („treabă”).",solution:"Pentru că sensul unitar al expresiei este ‘cumsecade, om bun’, complet diferit de sensul literal al cuvântului ‘treabă’."},
              {level:"dificil",text:"Identificați funcția sintactică a locuțiunii adjectivale din: „Este un om de nădejde.”",solution:"Nume predicativ."},
              {level:"f-dificil",text:"Construiți o propoziție în care o locuțiune adjectivală să aibă funcția de atribut adjectival.",solution:"‘Am cunoscut un om de treabă.’ - ‘de treabă’ este atribut adjectival al substantivului ‘om’."},
              {level:"f-dificil",text:"Explicați asemănarea funcțională dintre adjectiv și locuțiunea adjectivală.",solution:"Ambele exprimă o însușire a substantivului și pot avea aceeași funcții sintactice, diferența fiind doar formală (un cuvânt vs. un grup de cuvinte)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce tip de adverb este „poate” în „Poate că vine.”?",solution:"Adverb predicativ."},
              {level:"usor",text:"Dați un exemplu de adverb nehotărât.",solution:"Undeva (sau cândva, cumva, oriunde)."},
              {level:"usor",text:"Ce este o locuțiune adverbială?",solution:"Un grup de cuvinte cu valoare de adverb."},
              {level:"mediu",text:"Ce sens are locuțiunea adverbială „din când în când”?",solution:"Uneori."},
              {level:"mediu",text:"Ce sens are locuțiunea adverbială „pas cu pas”?",solution:"Treptat."},
              {level:"mediu",text:"Construiți o propoziție cu adverbul predicativ „desigur”.",solution:"‘Desigur că vei reuși la examen.’"},
              {level:"dificil",text:"Ce urmează, de obicei, după un adverb predicativ?",solution:"Conjuncția ‘că’ sau ‘să’."},
              {level:"dificil",text:"Explicați diferența dintre adverbul interogativ și cel relativ, deși au aceeași formă.",solution:"Adverbul interogativ apare în propoziții interogative (Unde mergi?); cel relativ leagă o subordonată de regentă (Locul unde stau este liniștit)."},
              {level:"f-dificil",text:"Construiți o propoziție cu locuțiunea adverbială „de-a valma”.",solution:"‘Cărțile erau puse de-a valma pe masă.’ (amestecat)"},
              {level:"f-dificil",text:"Explicați de ce adverbul predicativ „ține locul unui predicat”.",solution:"Pentru că exprimă, singur, atitudinea vorbitorului față de o afirmație, funcționând practic ca predicat, urmat de o subordonată introdusă prin ‘că’/‘să’."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce rol are prepoziția?",solution:"Leagă cuvinte, arătând raporturi între ele."},
              {level:"usor",text:"Numiți 2 conjuncții coordonatoare.",solution:"Și, dar (sau iar, sau, ori, deci, însă, ci)."},
              {level:"usor",text:"Ce exprimă interjecția?",solution:"Emoții sau imită sunete."},
              {level:"mediu",text:"Ce caz cere locuțiunea prepozițională „în fața”?",solution:"Genitiv."},
              {level:"mediu",text:"Clasificați conjuncțiile: „că”, „și”, „deoarece”.",solution:"„Că” și „deoarece” - subordonatoare; „și” - coordonatoare."},
              {level:"mediu",text:"Dați un exemplu de locuțiune conjuncțională.",solution:"Cu toate că (sau de vreme ce, pentru ca să, în timp ce)."},
              {level:"dificil",text:"Ce caz cere locuțiunea prepozițională „față de”?",solution:"Acuzativ."},
              {level:"dificil",text:"Explicați ce înseamnă că interjecția poate fi predicativă, cu exemplu.",solution:"Înseamnă că poate ține locul unui predicat verbal: „Hai la drum!” (hai = du-te/mergem), „Iată rezultatul!” (iată = a se vedea)."},
              {level:"f-dificil",text:"Clasificați interjecțiile: „vai!”, „poc!”, „bravo!”.",solution:"„Vai!” și „bravo!” - interjecții de emoție; „poc!” - onomatopee (imită un sunet)."},
              {level:"f-dificil",text:"Construiți o propoziție cu o locuțiune prepozițională de genitiv și una cu o locuțiune conjuncțională subordonatoare.",solution:"„Am mers de-a lungul râului.” (locuțiune prepozițională + genitiv); „Am întârziat, cu toate că am plecat devreme.” (locuțiune conjuncțională subordonatoare)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este raportul de coordonare?",solution:"Relația dintre elemente de același fel (două subiecte, două propoziții de același rang etc.)."},
              {level:"usor",text:"Ce este raportul de subordonare?",solution:"Relația în care un element depinde de altul."},
              {level:"usor",text:"Numiți o conjuncție care exprimă coordonare adversativă.",solution:"Dar (sau iar, însă, ci)."},
              {level:"mediu",text:"Ce tip de coordonare exprimă conjuncția „sau”?",solution:"Coordonare disjunctivă."},
              {level:"mediu",text:"Identificați raportul din: „Citesc și scriu.”",solution:"Coordonare (copulativă, prin ‘și’)."},
              {level:"mediu",text:"Identificați raportul din: „Știu că vii.”",solution:"Subordonare (a doua propoziție depinde de prima)."},
              {level:"dificil",text:"Explicați diferența dintre coordonarea în propoziție și coordonarea în frază.",solution:"În propoziție, coordonarea leagă părți de propoziție de același fel; în frază, leagă propoziții de același rang."},
              {level:"dificil",text:"Construiți o propoziție cu coordonare conclusivă.",solution:"‘Era obosit, deci s-a odihnit.’"},
              {level:"f-dificil",text:"De ce tipurile de propoziții subordonate nu se studiază detaliat în clasa a VII-a?",solution:"Pentru că programa școlară amână acest conținut pentru clasa a VIII-a, unde se aprofundează analiza propozițiilor subordonate."},
              {level:"f-dificil",text:"Analizați fraza „Harnic, dar obosit” și precizați tipul raportului.",solution:"Coordonare adversativă, realizată prin conjuncția ‘dar’, între două atribute adjectivale de același fel."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este fraza?",solution:"Un enunț complex alcătuit din două sau mai multe propoziții."},
              {level:"usor",text:"Cum se numește propoziția care are sens de sine stătător?",solution:"Propoziție principală."},
              {level:"usor",text:"Cum se realizează coordonarea prin juxtapunere?",solution:"Fără cuvinte de legătură, doar prin pauză marcată cu virgulă sau punct-și-virgulă."},
              {level:"mediu",text:"Care este primul pas în analiza unei fraze?",solution:"Identificarea predicatelor (câte predicate, atâtea propoziții)."},
              {level:"mediu",text:"Ce tip de coordonare este exemplificat în: „Pi vorbește cu tigrul și îl îmblânzește.”?",solution:"Coordonare prin joncțiune (cu conjuncția ‘și’)."},
              {level:"mediu",text:"Câte propoziții are fraza: „Pi doarme, tigrul doarme, oceanul doarme și el.”?",solution:"3 propoziții, coordonate prin juxtapunere (primele două) și prin joncțiune (ultima, cu ‘și’)."},
              {level:"dificil",text:"Explicați diferența dintre propoziția principală și cea secundară.",solution:"Principala are sens de sine stătător; secundara depinde ca sens de alta și nu poate exista singură."},
              {level:"dificil",text:"Când se folosește punctul-și-virgula într-o frază?",solution:"Pentru a marca o pauză mai mare decât virgula, de obicei la coordonarea prin juxtapunere a unor propoziții lungi sau contrastante."},
              {level:"f-dificil",text:"Analizați fraza „Ursulețul întinde gâtul și adulmecă mireasma dulce a florii.” conform pașilor din manual.",solution:"2 predicate (‘întinde’, ‘adulmecă’) → 2 propoziții; element de relație: conjuncția ‘și’; raport: coordonare prin joncțiune."},
              {level:"f-dificil",text:"Construiți o frază proprie cu 3 propoziții, coordonate prin juxtapunere.",solution:"‘Ploua, vântul bătea puternic, copacii se clătinau.’ (3 propoziții coordonate prin juxtapunere)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"La ce întrebări răspunde circumstanțialul de cauză?",solution:"Din ce cauză? De ce? Din ce pricină?"},
              {level:"usor",text:"La ce întrebări răspunde circumstanțialul de scop?",solution:"Cu ce scop? În ce scop?"},
              {level:"usor",text:"Prin ce parte de vorbire poate fi exprimat circumstanțialul de scop la supin?",solution:"Verb la supin (la + supin)."},
              {level:"mediu",text:"Identificați circumstanțialul de cauză din: „A absentat din cauza bolii.”",solution:"„Din cauza bolii”."},
              {level:"mediu",text:"Identificați circumstanțialul de scop din: „Lucrează pentru a ajuta comunitatea.”",solution:"„Pentru a ajuta comunitatea”."},
              {level:"mediu",text:"Construiți o propoziție cu circumstanțial de cauză exprimat prin gerunziu.",solution:"„Tremurând de frig, nu a putut vorbi.” (tremurând de frig = circumstanțial de cauză)."},
              {level:"dificil",text:"Explicați diferența dintre circumstanțialul de cauză și cel de scop, cu exemple proprii.",solution:"Cauza arată motivul din trecut al acțiunii („A plecat fiindcă era obosit”); scopul arată intenția acțiunii („A plecat ca să se odihnească”)."},
              {level:"dificil",text:"Ce regulă de punctuație se aplică circumstanțialului de scop plasat înaintea verbului?",solution:"Se desparte prin virgulă: „Pentru a reuși, a făcut eforturi mari.”"},
              {level:"f-dificil",text:"Analizați propoziția „Catherine Ryan Hyde scrie pentru a inspira încredere oamenilor.” și precizați tipul și modul de exprimare al circumstanțialului.",solution:"Circumstanțial de scop, exprimat prin verb la infinitiv cu prepoziție („pentru a inspira”)."},
              {level:"f-dificil",text:"Construiți o propoziție în care să existe atât un circumstanțial de cauză, cât și unul de scop.",solution:"„A studiat mult din cauza examenului, pentru a obține o notă mare.” (din cauza examenului = cauză; pentru a obține o notă mare = scop)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este editura?",solution:"Instituția care tipărește cartea."},
              {level:"usor",text:"Ce este o colecție de carte?",solution:"Seria de cărți cu o temă comună."},
              {level:"usor",text:"La ce trimite asteriscul (*) dintr-o carte?",solution:"La o notă explicativă."},
              {level:"mediu",text:"Unde se află subsolul de pagină și ce conține?",solution:"În josul paginii; conține note și explicații."},
              {level:"mediu",text:"De ce este util asteriscul pentru cititor?",solution:"Pentru că îl direcționează rapid spre o explicație suplimentară, fără a întrerupe firul lecturii principale."},
              {level:"mediu",text:"Explicați rolul unei colecții editoriale pentru cititori.",solution:"Îi ajută pe cititori să găsească mai ușor cărți similare ca temă sau gen literar."},
              {level:"dificil",text:"De ce editurile organizează cărțile în colecții?",solution:"Pentru a facilita orientarea cititorilor spre un anumit tip de conținut și pentru a crea o identitate pentru anumite serii tematice."},
              {level:"dificil",text:"Explicați diferența dintre nota de subsol și textul principal al unei cărți.",solution:"Textul principal conține conținutul narativ/informativ propriu-zis; nota de subsol oferă explicații suplimentare fără a întrerupe lectura."},
              {level:"f-dificil",text:"Analizați rolul editurii în procesul de la manuscris la carte publicată.",solution:"Editura selectează, corectează, tehnoredactează, tipărește și distribuie manuscrisul, transformându-l în carte."},
              {level:"f-dificil",text:"Explicați de ce cunoașterea elementelor unei cărți (editură, colecție, note) este utilă pentru un cititor avizat.",solution:"Îi permite să evalueze calitatea unei publicații, să găsească informații suplimentare rapid și să identifice alte lucrări similare."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce prezintă opera epică?",solution:"Întâmplări, prin intermediul unui narator."},
              {level:"usor",text:"Ce este o secvență narativă?",solution:"Un fragment de acțiune legat de celelalte prin timp și cauză."},
              {level:"usor",text:"Cine este naratorul?",solution:"Vocea care povestește (la persoana a III-a sau I)."},
              {level:"mediu",text:"Prin ce procedee se leagă secvențele narative?",solution:"Prin indici de timp (apoi, după aceea) și de spațiu (acolo, în celălalt sat)."},
              {level:"mediu",text:"Ce este timpul acțiunii într-o operă epică?",solution:"Momentul/perioada când se petrec întâmplările."},
              {level:"mediu",text:"Ce este spațiul acțiunii?",solution:"Locul unde se desfășoară acțiunea."},
              {level:"dificil",text:"Explicați de ce secvențele narative trebuie legate logic între ele.",solution:"Pentru ca acțiunea să aibă coerență și cititorul să poată urmări firul cauzal și cronologic al întâmplărilor."},
              {level:"dificil",text:"Ce rol au personajele într-o operă epică?",solution:"Sunt ființele care participă la acțiune, prin faptele, vorbele și relațiile lor construindu-se conflictul și tema operei."},
              {level:"f-dificil",text:"Analizați de ce naratorul la persoana I aduce o perspectivă diferită față de cel la persoana a III-a.",solution:"Naratorul la persoana I este implicat direct în acțiune, oferind o perspectivă subiectivă; cel la persoana a III-a este de obicei omniscient sau obiectiv."},
              {level:"f-dificil",text:"Construiți un exemplu de legătură între două secvențe narative folosind un indice de timp.",solution:"‘A plecat de acasă dis-de-dimineață. Apoi, ajuns la oraș, a căutat un loc de muncă.’ - ‘apoi’ leagă cele două secvențe."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este caracterizarea unui personaj?",solution:"Prezentarea trăsăturilor lui fizice și morale."},
              {level:"usor",text:"Câte tipuri de caracterizare există?",solution:"Două: directă și indirectă."},
              {level:"usor",text:"Cine poate face caracterizarea directă?",solution:"Naratorul, un alt personaj sau personajul însuși."},
              {level:"mediu",text:"Din ce se deduce caracterizarea indirectă?",solution:"Din faptele, vorbele, gândurile și relațiile personajului."},
              {level:"mediu",text:"Numiți 3 mijloace de caracterizare indirectă.",solution:"Fapte, limbaj, gânduri (sau relații, nume)."},
              {level:"mediu",text:"Analizați: „Își ajută prietenii.” Ce trăsătură deducem și prin ce tip de caracterizare?",solution:"Deducem că este generos; caracterizare indirectă (prin fapte)."},
              {level:"dificil",text:"Explicați diferența dintre caracterizarea directă și cea indirectă, cu exemple proprii.",solution:"Directă: naratorul afirmă explicit o trăsătură (‘Era harnic’); indirectă: trăsătura se deduce din acțiuni (‘Muncea din zori până-n seară’)."},
              {level:"dificil",text:"De ce numele unui personaj poate fi un mijloc de caracterizare indirectă?",solution:"Pentru că uneori numele este ales sugestiv de autor, sugerând o trăsătură dominantă a personajului."},
              {level:"f-dificil",text:"Analizați un personaj la alegere și identificați câte un exemplu de caracterizare directă și una indirectă.",solution:"Ex: Harap-Alb - direct: naratorul îl numește ‘viteaz’; indirect: faptul că îi ajută pe cei aflați la nevoie arată bunătatea sa."},
              {level:"f-dificil",text:"Explicați de ce caracterizarea indirectă este considerată mai valoroasă artistic decât cea directă.",solution:"Pentru că implică cititorul activ în deducerea trăsăturilor, oferind o imagine mai nuanțată și credibilă a personajului."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este aliterația?",solution:"Repetarea unei consoane pentru efect muzical sau sugestiv."},
              {level:"usor",text:"Ce este metafora?",solution:"O comparație prescurtată, care transferă sensul unui cuvânt asupra altuia."},
              {level:"usor",text:"Ce este hiperbola?",solution:"O exagerare intenționată pentru a impresiona."},
              {level:"mediu",text:"Identificați figura de stil din: „un munte de om”.",solution:"Hiperbolă."},
              {level:"mediu",text:"Identificați figura de stil din: „perle de rouă”.",solution:"Metaforă."},
              {level:"mediu",text:"Explicați diferența dintre aliterație și asonanță.",solution:"Aliterația repetă o consoană; asonanța repetă o vocală accentuată."},
              {level:"dificil",text:"Analizați versul „Prin vulturi vântul viu vuia” și identificați figura de stil, cu explicație.",solution:"Aliterație - repetarea consoanei „v”, creând un efect sonor sugestiv pentru vânt."},
              {level:"dificil",text:"Construiți o metaforă proprie pornind de la cuvântul „ochi”.",solution:"„Marea ochilor tăi” (ochii comparați implicit cu marea, prin transfer de sens)."},
              {level:"f-dificil",text:"Explicați de ce metafora este considerată o comparație „prescurtată”.",solution:"Pentru că elimină elementele de comparație explicite (ca, precum), păstrând direct echivalarea celor doi termeni."},
              {level:"f-dificil",text:"Construiți o propoziție cu hiperbolă și explicați efectul ei asupra cititorului.",solution:"„Te-am așteptat o veșnicie.” - hiperbola exagerează durata așteptării pentru a sublinia intensitatea emoției."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este piciorul metric?",solution:"Grupul de silabe accentuate și neaccentuate care se repetă într-un vers."},
              {level:"usor",text:"Ce ritm are un vers care începe cu o silabă accentuată?",solution:"Ritm trohaic."},
              {level:"usor",text:"Ce ritm are un vers care începe cu o silabă neaccentuată?",solution:"Ritm iambic."},
              {level:"mediu",text:"Ce structură are piciorul metric trohaic?",solution:"Silabă accentuată + neaccentuată (— ∪)."},
              {level:"mediu",text:"Ce structură are piciorul metric iambic?",solution:"Silabă neaccentuată + accentuată (∪ —)."},
              {level:"mediu",text:"Determinați ritmul versului „Somnoroase păsărele” (Eminescu).",solution:"Ritm trohaic (începe cu silabă accentuată: ‘Som-’)."},
              {level:"dificil",text:"Determinați ritmul versului „A fost odată ca-n povești”.",solution:"Ritm iambic (începe cu silabă neaccentuată: ‘A’)."},
              {level:"dificil",text:"Explicați rolul ritmului într-o poezie.",solution:"Ritmul dă muzicalitate versurilor și contribuie la efectul emoțional și estetic al poeziei, ajutând la memorare."},
              {level:"f-dificil",text:"Analizați un vers propriu (2 variante) care să ilustreze ritmul trohaic, respectiv iambic.",solution:"Trohaic: ‘Vine, vine primăvara’ (începe accentuat); Iambic: ‘Și-n zare-o rază se ivea’ (începe neaccentuat)."},
              {level:"f-dificil",text:"Explicați de ce identificarea corectă a ritmului necesită mai întâi identificarea silabelor accentuate din vers.",solution:"Pentru că ritmul se stabilește exact pe baza alternării dintre silabele accentuate și neaccentuate."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este nuvela?",solution:"O specie a genului epic, în proză, mai amplă decât schița."},
              {level:"usor",text:"Câte fire narative are de obicei o nuvelă?",solution:"Unul singur, bine conturat."},
              {level:"usor",text:"Cum sunt personajele într-o nuvelă, comparativ cu schița?",solution:"Mai complexe și mai bine individualizate."},
              {level:"mediu",text:"Ce dimensiune are nuvela, comparativ cu schița și romanul?",solution:"Medie: mai mare decât schița, mai mică decât romanul."},
              {level:"mediu",text:"Ce conflict este specific nuvelei „Popa Tanda”?",solution:"Om harnic vs. lume leneșă (transformarea satului prin puterea exemplului)."},
              {level:"mediu",text:"Cum se rezolvă conflictul din „Popa Tanda”?",solution:"Prin puterea exemplului personal al preotului Trandafir, care muncește și schimbă satul."},
              {level:"dificil",text:"Explicați diferența dintre nuvelă și schiță.",solution:"Schița prezintă un singur moment, cu puține personaje; nuvela are o acțiune mai amplă și personaje care evoluează."},
              {level:"dificil",text:"De ce se spune că personajul din nuvelă „evoluează”?",solution:"Pentru că suferă o transformare pe parcursul acțiunii, ca urmare a conflictului și a experiențelor trăite."},
              {level:"f-dificil",text:"Explicați de ce „Popa Tanda” este considerată nuvelă și nu roman.",solution:"Pentru că are un singur fir narativ concentrat pe transformarea unui personaj și a comunității sale, fără planuri narative multiple."},
              {level:"f-dificil",text:"Analizați rolul conflictului în evoluția psihologică a personajului dintr-o nuvelă.",solution:"Conflictul pune personajul în situații care îi testează și îi modifică trăsăturile, determinând o evoluție vizibilă."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este imnul?",solution:"O specie a genului liric, o poezie solemnă de preamărire."},
              {level:"usor",text:"Ce ton are imnul?",solution:"Solemn, înălțător."},
              {level:"usor",text:"Ce teme abordează imnul?",solution:"Patria, libertatea, un ideal."},
              {level:"mediu",text:"Cine a scris imnul național al României?",solution:"Andrei Mureșanu."},
              {level:"mediu",text:"Ce sentimente exprimă un imn?",solution:"Admirație, mândrie, entuziasm."},
              {level:"mediu",text:"Ce exprimă „Deșteaptă-te, române!”?",solution:"Un îndemn la trezire și unitate națională, iubirea de țară și dorința de libertate."},
              {level:"dificil",text:"Explicați de ce imnul este considerat specie a genului liric.",solution:"Pentru că exprimă direct sentimentele eului liric față de un ideal, folosind un limbaj afectiv și expresiv, specific liricii."},
              {level:"dificil",text:"Comparați tema imnului cu tema unei poezii de dragoste.",solution:"Imnul are o temă colectivă, patriotică; poezia de dragoste are o temă individuală, intimă."},
              {level:"f-dificil",text:"Explicați de ce imnurile sunt adesea folosite ca simboluri naționale.",solution:"Pentru că exprimă condensat valorile, istoria și aspirațiile unei națiuni, unind cetățenii printr-un sentiment comun de apartenență."},
              {level:"f-dificil",text:"Analizați rolul tonului solemn în transmiterea mesajului unui imn.",solution:"Tonul solemn conferă gravitate și importanță mesajului, sporind impactul emoțional și determinând o receptare colectivă, festivă a textului."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este textul dramatic?",solution:"O piesă de teatru, scrisă pentru a fi transpusă pe scenă."},
              {level:"usor",text:"Ce este actul?",solution:"Diviziunea principală a piesei de teatru."},
              {level:"usor",text:"Ce sunt didascaliile?",solution:"Indicațiile scenice ale autorului despre decor, gesturi, ton, mișcări."},
              {level:"mediu",text:"Ce este replica?",solution:"Intervenția verbală a unui personaj."},
              {level:"mediu",text:"Prin ce comunică personajele dintr-un text dramatic?",solution:"Prin dialog (predominant) și monolog."},
              {level:"mediu",text:"Ce rol are regizorul într-un spectacol?",solution:"Propune interpretarea piesei, selectează actorii și coordonează repetiția."},
              {level:"dificil",text:"Explicați dubla natură a personajului dramatic.",solution:"Este o ființă ficțională (creată de autor), dar căreia i se alătură o ființă reală - actorul, care îl interpretează pe scenă."},
              {level:"dificil",text:"Explicați de ce textul dramatic nu conține narațiune.",solution:"Pentru că acțiunea înaintează exclusiv prin dialog și indicații scenice; nu există un narator care să povestească direct evenimentele."},
              {level:"f-dificil",text:"Comparați modul de construire directă și indirectă a personajului dramatic, cu exemple.",solution:"Direct: prin lista personajelor sau indicații scenice; indirect: prin deducerea trăsăturilor din felul în care vorbește sau acționează personajul."},
              {level:"f-dificil",text:"Explicați de ce arta spectacolului implică colaborarea mai multor specialiști (regizor, scenograf, actori etc.).",solution:"Pentru că un spectacol reușit necesită atât interpretare actoricească, cât și elemente vizuale și sonore, fiecare specialist contribuind cu o competență distinctă."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce transmit textele nonliterare?",solution:"Informații reale, practice, într-un limbaj clar."},
              {level:"usor",text:"Conțin textele nonliterare figuri de stil?",solution:"Nu."},
              {level:"usor",text:"Dați un exemplu de text nonliterar.",solution:"Mersul trenurilor (sau programul de spectacol)."},
              {level:"mediu",text:"Ce informații conține mersul trenurilor?",solution:"Orarul plecărilor și sosirilor trenurilor."},
              {level:"mediu",text:"Ce informații conține un program de spectacol?",solution:"Informații despre piese, ore, actori."},
              {level:"mediu",text:"Care este scopul principal al unui text nonliterar?",solution:"Un scop practic, de informare exactă și obiectivă."},
              {level:"dificil",text:"Explicați diferența dintre textul literar și cel nonliterar.",solution:"Textul literar are scop artistic, folosește figuri de stil; textul nonliterar informează exact și obiectiv, fără intenție estetică."},
              {level:"dificil",text:"De ce este important ca un text nonliterar să fie clar și lipsit de ambiguități?",solution:"Pentru că scopul lui este transmiterea corectă a unei informații practice, iar ambiguitatea ar putea duce la erori sau confuzii."},
              {level:"f-dificil",text:"Analizați dacă o rețetă culinară este text literar sau nonliterar și justificați.",solution:"Este text nonliterar, deoarece transmite informații practice (ingrediente, pași) într-un limbaj clar, fără scop artistic."},
              {level:"f-dificil",text:"Explicați de ce anumite texte pot combina elemente literare și nonliterare (ex: un articol de popularizare științifică).",solution:"Pentru că autorul urmărește atât informarea corectă (element nonliterar), cât și captarea interesului cititorului printr-un limbaj atractiv (element literar)."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este emițătorul?",solution:"Cel care transmite mesajul."},
              {level:"usor",text:"Ce este receptorul?",solution:"Cel care primește mesajul."},
              {level:"usor",text:"Ce este codul, în situația de comunicare?",solution:"Limba folosită."},
              {level:"mediu",text:"Ce este canalul de comunicare? Dați un exemplu.",solution:"Mijlocul de transmitere a mesajului, ex: viu grai, scris, telefon."},
              {level:"mediu",text:"Cum se adresează cineva într-un dialog formal?",solution:"Cu dumneavoastră, domnule/doamnă."},
              {level:"mediu",text:"Transformați în stil formal: „Salut! Mă ajuți?”",solution:"„Bună ziua! Ați putea să mă ajutați?”"},
              {level:"dificil",text:"Explicați diferența dintre contextul comunicării și mesaj.",solution:"Contextul este situația în care are loc comunicarea; mesajul este informația propriu-zisă transmisă."},
              {level:"dificil",text:"De ce alegerea corectă a registrului (formal/informal) este importantă în comunicare?",solution:"Pentru că un registru nepotrivit poate fi perceput ca lipsă de respect sau ca prea rigid, afectând relația dintre interlocutori."},
              {level:"f-dificil",text:"Construiți un scurt dialog (2 replici) în registru formal și transformați-l în registru informal.",solution:"Formal: „Bună ziua! Ați putea să-mi spuneți ora?” „Desigur, este ora zece.” Informal: „Salut! Ce oră e?” „E ora zece.”"},
              {level:"f-dificil",text:"Explicați cum influențează relația dintre emițător și receptor alegerea canalului de comunicare.",solution:"O relație formală (elev-director) favorizează canale scrise/oficiale; o relație apropiată (prieteni) permite canale informale."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este cererea?",solution:"Un text funcțional oficial prin care o persoană solicită ceva unei instituții sau autorități."},
              {level:"usor",text:"Unde se scrie formula de adresare într-o cerere?",solution:"Sus, la începutul cererii."},
              {level:"usor",text:"Ce conține formula de încheiere a unei cereri?",solution:"O formulă de mulțumire, ex: „Vă mulțumesc.”"},
              {level:"mediu",text:"Unde se plasează data și semnătura într-o cerere?",solution:"Jos: data în stânga, semnătura în dreapta."},
              {level:"mediu",text:"Ce ton trebuie să aibă o cerere?",solution:"Oficial, politicos și concis."},
              {level:"mediu",text:"Ce informații trebuie incluse despre solicitant într-o cerere?",solution:"Numele și clasa (sau adresa)."},
              {level:"dificil",text:"De ce este important să folosim formule de politețe într-o cerere?",solution:"Pentru că cererea este un text oficial, iar politețea arată respect, sporind șansele de a fi rezolvată favorabil."},
              {level:"dificil",text:"Redactați formula de adresare potrivită pentru o cerere adresată directorului școlii.",solution:"„Domnule Director,”"},
              {level:"f-dificil",text:"Explicați de ce cererea trebuie să fie concisă și clară, spre deosebire de o compunere narativă.",solution:"Pentru că scopul cererii este strict practic, deci informația trebuie transmisă rapid și fără ambiguități."},
              {level:"f-dificil",text:"Redactați o cerere scurtă (3-4 rânduri) prin care solicitați o adeverință de elev.",solution:"„Domnule Director, Subsemnatul(a) [nume], elev(ă) în clasa a VII-a, vă rog să-mi aprobați eliberarea unei adeverințe de elev. Vă mulțumesc.”"}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este fișa de lectură?",solution:"Un text în care notăm informațiile esențiale despre o carte citită."},
              {level:"usor",text:"Ce rubrică include numele scriitorului?",solution:"Autorul."},
              {level:"usor",text:"Ce conține rubrica „personajele”?",solution:"Personajele principale și secundare."},
              {level:"mediu",text:"Ce conține rubrica „rezumatul” dintr-o fișă de lectură?",solution:"Acțiunea pe scurt."},
              {level:"mediu",text:"Ce conține rubrica „impresii personale”?",solution:"Ce ți-a plăcut din carte și de ce."},
              {level:"mediu",text:"De ce este utilă o fișă de lectură?",solution:"Pentru a reține și organiza informațiile esențiale despre o carte, pentru a le folosi ulterior."},
              {level:"dificil",text:"Explicați diferența dintre rubrica „rezumat” și rubrica „impresii personale”.",solution:"Rezumatul prezintă obiectiv acțiunea cărții; impresiile personale exprimă opinia subiectivă a cititorului."},
              {level:"dificil",text:"Ce informații despre apariția cărții trebuie incluse în fișa de lectură?",solution:"Editura și anul apariției."},
              {level:"f-dificil",text:"Explicați de ce este util să notezi mijloacele de caracterizare a personajelor într-o fișă de lectură.",solution:"Pentru a putea susține ulterior, cu argumente din text, o caracterizare de personaj sau o discuție despre carte."},
              {level:"f-dificil",text:"Realizați (schematic) rubricile unei fișe de lectură pentru o carte la alegere.",solution:"Autor: [nume]; Titlu: [titlu]; Editura, anul: [...]; Personaje: [...]; Rezumat: [...]; Impresii personale: [...]."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este o caracterizare de personaj?",solution:"O compunere în care prezentăm trăsăturile fizice și morale ale unui personaj, susținute cu dovezi din text."},
              {level:"usor",text:"Ce trebuie precizat în introducerea unei caracterizări de personaj?",solution:"Numele personajului, opera, autorul, rolul (principal/secundar)."},
              {level:"usor",text:"Cu ce trebuie susținute trăsăturile morale ale unui personaj?",solution:"Cu dovezi (citate) din text."},
              {level:"mediu",text:"Câte tipuri de mijloace de caracterizare trebuie folosite într-o compunere de caracterizare?",solution:"Două: directă și indirectă."},
              {level:"mediu",text:"Ce se scrie în încheierea unei caracterizări de personaj?",solution:"Opinia proprie despre personaj."},
              {level:"mediu",text:"De ce este important să includem citate-suport într-o caracterizare?",solution:"Pentru a demonstra concret, cu argumente din text, trăsăturile pe care le atribuim personajului."},
              {level:"dificil",text:"Explicați de ce trăsăturile fizice se prezintă doar „dacă apar în text”.",solution:"Pentru că nu toate operele oferă un portret fizic detaliat; caracterizarea trebuie să se bazeze pe informațiile oferite efectiv de text."},
              {level:"dificil",text:"Analizați modelul de formulare dat în lecție și identificați tipul de caracterizare folosit.",solution:"Este folosită atât caracterizarea indirectă (dedusă din fapte), cât și cea directă (afirmația naratorului: „era un om neobosit”)."},
              {level:"f-dificil",text:"Redactați un scurt paragraf (3-4 rânduri) de caracterizare a unui personaj cunoscut, folosind ambele tipuri de caracterizare.",solution:"Ex: „Harap-Alb este un personaj curajos și generos. Caracterizarea indirectă reiese din faptele sale, iar naratorul îl numește direct «viteaz».”"},
              {level:"f-dificil",text:"Explicați de ce structura în 5 părți ajută la o caracterizare completă și coerentă.",solution:"Pentru că organizează informația logic, de la prezentarea generală la detalii argumentate, terminând cu o opinie personală."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce înseamnă a comenta o secvență?",solution:"A explica semnificația unui fragment: ce se întâmplă, ce sentimente transmite și prin ce mijloace artistice."},
              {level:"usor",text:"Ce poate anunța titlul unei opere?",solution:"Tema, un personaj, un simbol sau ideea centrală."},
              {level:"usor",text:"Ce anunță titlul „Popa Tanda”?",solution:"Personajul principal (porecla preotului)."},
              {level:"mediu",text:"Ce anunță titlul „Amintiri din copilărie”?",solution:"Tema (copilăria) și caracterul memorialistic al operei."},
              {level:"mediu",text:"Ce întrebare ne ajută să stabilim dacă titlul este folosit cu sens propriu sau figurat?",solution:"La ce se referă titlul? Este propriu sau figurat?"},
              {level:"mediu",text:"Construiți o întrebare utilă pentru a comenta titlul unei opere la alegere.",solution:"Cum se leagă titlul de conținutul operei?"},
              {level:"dificil",text:"Explicați de ce comentarea titlului este un pas important în înțelegerea unei opere literare.",solution:"Pentru că titlul oferă adesea o cheie de interpretare a temei sau mesajului operei, ghidând înțelegerea cititorului."},
              {level:"dificil",text:"Analizați titlul unei opere cunoscute și explicați ce anunță acesta.",solution:"Ex: „Amintiri din copilărie” anunță tema copilăriei și tonul evocator, memorialistic al povestirii."},
              {level:"f-dificil",text:"Explicați diferența dintre un titlu cu sens propriu și unul cu sens figurat/simbolic.",solution:"Titlul cu sens propriu denumește direct un element concret; titlul cu sens figurat sugerează o idee mai profundă, descoperită prin lectură."},
              {level:"f-dificil",text:"Comentați semnificația unui titlu la alegere, argumentând legătura cu conținutul operei.",solution:"Răspuns liber: se identifică elementul anunțat de titlu (temă/personaj/simbol) și se argumentează cu exemple din operă."}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce este interviul?",solution:"Un dialog nonliterar în care un intervievator adresează întrebări unei personalități pentru a obține informații sau opinii."},
              {level:"usor",text:"Cine sunt participanții la un interviu?",solution:"Intervievatorul (pune întrebări) și intervievatul (răspunde)."},
              {level:"usor",text:"Ce se folosește pentru a marca vorbitorii într-un interviu, în loc de linia de dialog?",solution:"Numele persoanei."},
              {level:"mediu",text:"Care este scopul unui interviu?",solution:"Obținerea de informații, opinii sau declarații."},
              {level:"mediu",text:"Unde poate fi publicat un interviu?",solution:"În presa scrisă, la radio, televiziune sau online."},
              {level:"mediu",text:"Ce ar trebui să facă intervievatorul înainte de interviu?",solution:"Să se documenteze despre persoana intervievată și să pregătească întrebări clare și relevante."},
              {level:"dificil",text:"De ce nu sunt recomandate întrebările de tip „da/nu” într-un interviu?",solution:"Pentru că oferă răspunsuri scurte, fără dezvoltare, limitând informațiile pe care le poate oferi intervievatul."},
              {level:"dificil",text:"Explicați ce înseamnă „ascultarea activă” în timpul unui interviu.",solution:"Înseamnă a urmări cu atenție răspunsurile intervievatului pentru a putea formula întrebări de aprofundare pe baza lor."},
              {level:"f-dificil",text:"Analizați fragmentul din interviul cu Matei Vișniec și explicați ce arată faptul că intervievatoarea este elevă de clasa a VII-a.",solution:"Arată că oricine, indiferent de vârstă, poate documenta și realiza un interviu de calitate, dacă se pregătește corespunzător."},
              {level:"f-dificil",text:"Redactați 2 întrebări potrivite pentru un interviu cu un scriitor.",solution:"„Ce v-a inspirat să scrieți această carte?” „Cum a evoluat pasiunea dvs. pentru scris de-a lungul timpului?”"}
            ])}
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
            ${exR7([
              {level:"usor",text:"Ce urmărește o compunere narativă?",solution:"Povestirea unei întâmplări."},
              {level:"usor",text:"Ce urmărește o compunere descriptivă?",solution:"Descrierea unui loc, a unei persoane sau a unui obiect."},
              {level:"usor",text:"Ce urmărește o compunere informativă?",solution:"Transmiterea unor informații clare."},
              {level:"mediu",text:"Ce mărci specifice are compunerea descriptivă?",solution:"Adjective, epitete, imagini artistice."},
              {level:"mediu",text:"Ce mărci specifice are compunerea narativă?",solution:"Verbe de acțiune, ordine cronologică."},
              {level:"mediu",text:"Care sunt cele 3 părți ale structurii oricărei compuneri?",solution:"Introducere, cuprins, încheiere."},
              {level:"dificil",text:"De ce se poate insera dialog într-o compunere narativă?",solution:"Pentru a face povestirea mai vie și mai naturală, apropiind-o de modul real în care comunică personajele."},
              {level:"dificil",text:"Explicați diferența dintre limbajul folosit într-o compunere descriptivă și unul folosit într-o compunere informativă.",solution:"Descriptiva folosește un limbaj expresiv, cu figuri de stil; informativa folosește un limbaj obiectiv și precis, fără elemente artistice."},
              {level:"f-dificil",text:"Construiți un scurt fragment (2-3 rânduri) de compunere narativă care să includă un dialog.",solution:"„M-am apropiat de bancă și am întrebat: «Pot să mă așez aici?» Ea mi-a zâmbit și a răspuns: «Sigur, te rog.»”"},
              {level:"f-dificil",text:"Explicați de ce structura introducere-cuprins-încheiere este comună tuturor tipurilor de compuneri, indiferent de scopul lor.",solution:"Pentru că oferă un cadru logic universal de organizare a ideilor: prezentarea temei, dezvoltarea ei și o concluzie."}
            ])}
          `
        }
      ]
    }

  ]
};
