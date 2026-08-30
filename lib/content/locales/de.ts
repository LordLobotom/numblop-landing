import type { LocaleContent } from '../types'

export const de: LocaleContent = {
  faq: {
    heading: 'Häufige Fragen',
    subheading: 'Was Numblop ist, für wen es gedacht ist und wo man es spielen kann.',
    items: [
      {
        question: 'Was ist Numblop?',
        answer:
          'Numblop ist ein kostenloses, adaptives Lernspiel zum Üben des Einmaleins. Kinder spielen kurze Runden, das Spiel merkt sich, welche Aufgaben schon sitzen, und bringt die schwierigeren häufiger zurück, bis der Abruf automatisch geht.',
      },
      {
        question: 'Für wen ist Numblop gedacht?',
        answer:
          'Vor allem für Kinder, die das kleine Einmaleins lernen oder festigen — also etwa ab dem Zeitpunkt, an dem Multiplikation in der Schule eingeführt wird. Genutzt wird es außerdem von Eltern und Lehrkräften, die zu Hause kurzes Üben ohne Druck möchten.',
      },
      {
        question: 'Wie funktioniert adaptives Einmaleins-Üben?',
        answer:
          'Numblop fragt nicht alle Aufgaben gleich oft ab. Es verfolgt, wie jede einzelne läuft, und kehrt zu denen zurück, die noch wackeln. Sicher beantwortete Aufgaben erscheinen seltener, langsame oder falsche kommen früher wieder. Die Fortschrittskarte zeigt, wie jede Malreihe gerade steht.',
      },
      {
        question: 'Gibt es Numblop für Android?',
        answer:
          'Ja. Numblop ist bei Google Play verfügbar — kostenlos, ohne Werbung und ohne In-App-Käufe.',
      },
      {
        question: 'Gibt es Numblop für iOS?',
        answer:
          'Noch nicht. Eine eigene App für iPhone oder iPad gibt es nicht. Das vollständige Spiel läuft stattdessen im Browser und funktioniert damit auf iOS und am Computer — ohne Installation und ohne Anmeldung.',
      },
      {
        question: 'Ist Numblop nur ein Quiz?',
        answer:
          'Nein. Das Beantworten von Aufgaben ist nur ein Teil. Numblop verbindet das Einmaleins-Üben mit einem Fortschritt über eine Inselkarte, Belohnungen und Münzen, sammelbaren Ausstattungsgegenständen und Spielmechaniken, die eine Runde lohnenswert machen. Nach einem Fehler kommt außerdem eine Erklärung statt einer Strafe.',
      },
    ],
  },
  ui: {
    blog: 'Blog',
    guides: 'Ratgeber',
    home: 'Start',
    blogTitle: 'Der Numblop-Blog',
    blogIntro:
      'Praxisnahe Texte zum Einmaleins und zum Mathelernen zu Hause — für Eltern und Lehrkräfte.',
    blogMetaTitle: 'Blog: Einmaleins und Mathe zu Hause lernen – Numblop',
    blogMetaDescription:
      'Praxisnahe Artikel über das Üben des Einmaleins, Mathe spielerisch lernen und den Lernfortschritt von Kindern zu Hause.',
    relatedHeading: 'Weiterlesen',
    readMore: 'Artikel lesen',
    published: 'Veröffentlicht',
    updated: 'Aktualisiert',
    readingTime: '{n} Min. Lesezeit',
    breadcrumbLabel: 'Brotkrümelnavigation',
    takeawaysHeading: 'Kurz gefasst',
    backToBlog: 'Zurück zum Blog',
  },
  pages: [
    {
      id: 'practice',
      slug: 'einmaleins-ueben',
      title: 'Einmaleins üben, damit es wirklich sitzt',
      metaTitle: 'Einmaleins üben: ein Plan, der wirklich trägt – Numblop',
      metaDescription:
        'Wie Sie mit Ihrem Kind das kleine Einmaleins üben: kurze tägliche Einheiten, die Aufgaben, die wirklich Arbeit brauchen, und der Weg vom Rechnen zum sicheren Abruf.',
      linkLabel: 'Einmaleins üben',
      excerpt:
        'Kurze tägliche Einheiten, die Aufgaben, die wirklich Arbeit brauchen, und wie man Rechnen von echtem Abruf unterscheidet.',
      updated: '2026-08-30',
      image: {
        src: '/posts/step-by-step-en.webp',
        alt: 'Die Fortschrittskarte in Numblop, auf der jede Malreihe Schritt für Schritt vorankommt',
        width: 720,
        height: 900,
      },
      intro: [
        'Das kleine Einmaleins begegnet Kindern etwa in der zweiten und dritten Klasse, und die meisten kommen irgendwann damit zurecht. Enorm unterschiedlich ist jedoch, wie lange es dauert und wie unangenehm der Weg dorthin ist.',
        'Der Unterschied liegt selten an der Begabung. Er liegt daran, wie das Üben organisiert ist: wie lang eine Einheit ist, wie oft sie stattfindet, welche Aufgaben Aufmerksamkeit bekommen, und ob das Kind versteht, was Multiplikation bedeutet, bevor Tempo verlangt wird.',
      ],
      sections: [
        {
          heading: 'Warum sich ein sicheres Einmaleins lohnt',
          blocks: [
            {
              p: 'Die Einmaleins-Aufgaben sind nicht das Ziel der Mathematik, aber sie liegen unter vielem, was danach kommt. Schriftliches Multiplizieren, Division, Brüche, Verhältnisse, Prozente und später Algebra setzen voraus, dass 7 × 8 ohne Nachdenken da ist.',
            },
            {
              p: 'Wenn der Abruf langsam ist, verbraucht das Kind seine Aufmerksamkeit für das Rechnen und hat für die eigentliche Aufgabe nichts mehr übrig. Die Mathematik ist nicht zu schwer — es ist schlicht nichts mehr zum Denken da. Genau diese Aufmerksamkeit wird durch Automatisierung frei.',
            },
          ],
        },
        {
          heading: 'Verstehen kommt vor Tempo',
          blocks: [
            {
              p: 'Ein Kind, das nicht weiß, was 6 × 4 bedeutet, hat nichts, woran es die Antwort aufhängen kann. Auswendiglernen geht trotzdem, aber dieses Gedächtnis ist fragil und bricht unter Druck oder nach den Sommerferien zusammen.',
            },
            {
              p: 'Bevor eine Malreihe geübt wird, lohnen sich ein paar Minuten dafür, was Multiplikation eigentlich ist: gleich große Gruppen, Zeilen und Spalten, wiederholtes Addieren. Vier Reihen mit je sechs Deckeln, sechs Sprünge zu je vier am Zahlenstrahl, ein Rechteck auf Karopapier. Sobald ein Kind eine vergessene Aufgabe wieder herleiten kann, ist Vergessen keine Katastrophe mehr.',
            },
            {
              p: 'Deshalb ist eine Erklärung besser als eine Korrektur. „Nein, es sind 24“ lehrt nichts. 6 × 4 als vier Gruppen zu sechs zu sehen, gibt dem Kind einen Weg, der auch beim nächsten Mal funktioniert.',
            },
          ],
        },
        {
          heading: 'Kurz und oft schlägt lang und selten',
          blocks: [
            {
              p: 'Zwanzig Minuten einmal pro Woche sind schlechter als fünf Minuten täglich, obwohl es insgesamt mehr Zeit ist. Der Abruf verbessert sich durch die Anzahl der einzelnen Gelegenheiten, bei denen eine Aufgabe abgerufen wird, nicht durch die Minuten in einer Sitzung. Verteiltes Üben lässt außerdem etwas Vergessen zu — und genau das Zurückholen halb vergessener Dinge macht das Gedächtnis haltbar.',
            },
            {
              p: 'Fünf bis zehn Minuten reichen den meisten Kindern in diesem Alter. Kurz genug, dass die Konzentration bis zum Ende hält, kurz genug, dass nicht verhandelt werden muss, und kurz genug für einen Tag, an dem schon Hausaufgaben stehen.',
            },
            {
              list: [
                'Ziel sind die meisten Tage, nicht jeder Tag — eine ausgelassene Einheit darf sich nicht wie Scheitern anfühlen.',
                'Aufhören, solange es noch gut läuft, nicht erst wenn die Aufmerksamkeit weg ist.',
                'Feste Uhrzeit, damit daraus Routine statt einer täglichen Entscheidung wird.',
              ],
            },
          ],
        },
        {
          heading: 'Welche Aufgaben wirklich Übung brauchen',
          blocks: [
            {
              p: 'Das kleine Einmaleins sieht nach hundert Aufgaben aus. Tatsächlich sind es viel weniger. Malnehmen mit 1 und 10 ist eine Regel, keine Aufgabe. Die 2er-, 5er- und 4er-Reihe sitzen meist früh. Und weil 7 × 8 und 8 × 7 dieselbe Aufgabe sind, ist die halbe Tabelle das Spiegelbild der anderen Hälfte.',
            },
            {
              p: 'Übrig bleibt eine kleine, hartnäckige Gruppe, mit der fast jedes Kind kämpft — typischerweise die Mitte der 6er-, 7er- und 8er-Reihe. Genau dorthin lohnt es sich immer wieder zurückzukehren, und genau die werden beim Durchgehen der Reihen der Reihe nach am wenigsten geübt.',
            },
            {
              p: 'Die ganze Tabelle gleichmäßig zu üben verbraucht die meiste Zeit für Aufgaben, die längst sitzen. Nur die schwachen zu üben ist entmutigend. Sinnvoll ist eine Mischung: überwiegend schwache Aufgaben, mit genug bekannten dazwischen, damit die Runde machbar bleibt.',
            },
          ],
        },
        {
          heading: 'Neue Aufgaben mit alten mischen',
          blocks: [
            {
              p: 'Wird eine Reihe isoliert gelernt, entsteht ein Kind, das die 7er-Reihe der Reihe nach aufsagt und trotzdem bei 7 × 6 stockt, wenn sie allein auftaucht. Die Reihenfolge wird Teil der Erinnerung — und in echten Aufgaben gibt es keine Reihenfolge.',
            },
            {
              p: 'Sobald eine Reihe eingeführt ist, sollte sie direkt unter alles Bisherige gemischt werden. Gemischtes Üben fühlt sich im Moment schwerer an und führt danach zu besserem Abruf: Das Kind muss die Aufgabe erst erkennen und dann beantworten — genau die Fähigkeit, die später gebraucht wird.',
            },
          ],
        },
        {
          heading: 'Vom Rechnen zum sicheren Abruf',
          blocks: [
            {
              p: 'Es gibt eine Phase, in der ein Kind richtig antwortet, aber über Weiterzählen oder über eine Nachbaraufgabe dorthin kommt — 6 × 7 als 6 × 6 plus 6. Das ist echter Fortschritt und ein gutes Zeichen für Verständnis. Es ist aber noch keine Automatisierung.',
            },
            {
              p: 'Achten Sie weniger auf Richtigkeit als auf das Zögern. Eine Aufgabe sitzt wirklich, wenn die Antwort in ein bis zwei Sekunden kommt, außerhalb der Reihenfolge, auch an einem Tag, an dem das Kind müde ist, und ohne sichtbare Rechenpause.',
            },
            {
              p: 'Hier ist Zeit sinnvoll — als Messung, nicht als Drohung. Ein Countdown, der Langsamkeit bestraft, erzeugt Druck genau dort, wo Kinder ihn ohnehin spüren. Still zu bemerken, welche Aufgaben langsam kommen, und diese mehr zu üben, erreicht dasselbe ohne diesen Preis.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Üben, das sich selbst verwaltet',
        body: 'Numblop übernimmt die Buchhaltung: Es verfolgt, welche Aufgaben sitzen, mischt neue unter alte und kehrt häufiger zu den schwachen zurück — in kurzen Runden, ohne Countdown und ohne Strafen.',
      },
    },
    {
      id: 'play',
      slug: 'mathe-lernspiele-fuer-kinder',
      title: 'Mathe-Lernspiele für Kinder, die wirklich etwas beibringen',
      metaTitle: 'Mathe-Lernspiele für Kinder, die wirklich lehren – Numblop',
      metaDescription:
        'Wie man ein echtes Lernspiel von einem Quiz mit hübscher Grafik unterscheidet, worauf man achten sollte, was man meiden sollte, und welche Mathespiele ohne Bildschirm funktionieren.',
      linkLabel: 'Mathe-Lernspiele',
      excerpt:
        'Was ein Spiel, das Mathe lehrt, von einem Arbeitsblatt mit Soundeffekten unterscheidet — und wie man auswählt.',
      updated: '2026-08-30',
      image: {
        src: '/posts/multiplication-fun-en.webp',
        alt: 'Eine Numblop-Figur in einer verspielten Spielwelt mit sammelbaren Gegenständen',
        width: 720,
        height: 900,
      },
      intro: [
        '„Spielerisch lernen“ umfasst heute alles vom gut gestalteten Spiel bis zum Arbeitsblatt mit Comic-Rahmen. Beworben wird beides gleich, deshalb lohnt es sich zu wissen, was sie unterscheidet.',
        'Die nützliche Frage ist nicht, ob ein Spiel Spaß macht. Sie lautet, ob Spaß und Mathematik dieselbe Tätigkeit sind — oder ob die Mathematik eine Maut ist, die das Kind zahlt, um zurück zum Spaß zu kommen.',
      ],
      sections: [
        {
          heading: 'Was ein Lernspiel zum Lernspiel macht',
          blocks: [
            {
              p: 'In einem Spiel, das lehrt, ist das Denken das Spiel. Die Antwort zu finden bringt einen voran, und besser in Mathe zu werden heißt besser im Spiel zu werden. Fortschritt im Spiel und Fortschritt im Kopf sind dieselbe Linie.',
            },
            {
              p: 'In einem Spiel, das nicht lehrt, ist die Mathematik eine Schranke. Fünf Aufgaben, dann neunzig Sekunden Minispiel; fünf weitere, dann ein Hut. Die Aufgaben unterscheiden sich in nichts von einem Arbeitsblatt, und das Kind lernt, dass Mathe der unangenehme Teil ist, den man hinter sich bringt, um zum guten zu kommen — eine schlechtere Lektion, als das Rechnen wert ist.',
            },
            {
              p: 'Belohnungen sind nicht das Problem. Ein Kind, das eine Runde zu Ende spielen will, weil am Ende etwas Schönes kommt, übt mehr als sonst. Zum Problem wird es erst, wenn die Belohnung das Denken ersetzt, statt daraus zu folgen.',
            },
          ],
        },
        {
          heading: 'Spielen ist keine Belohnung für erledigte Arbeit',
          blocks: [
            {
              p: 'Spielen leistet etwas Bestimmtes für das Lernen, und es ist keine motivationale Verzierung: Es senkt die Kosten des Fehlers. Ein Kind, das spielt, probiert auch eine Aufgabe, bei der es unsicher ist, denn ein Fehler im Spiel ist einfach das, was als Nächstes passiert. Dasselbe Kind hält am Arbeitsblatt oft an und wartet darauf, dass ihm jemand die Antwort sagt.',
            },
            {
              p: 'Genau diese Bereitschaft, etwas Unsicheres zu versuchen, ist der Ort, an dem das meiste Lernen stattfindet. Eine halb gewusste Aufgabe abzurufen bringt dem Gedächtnis mehr als die richtige Antwort zu lesen — aber nur, wenn das Kind es versucht. Alles, was den Versuch billig macht, leistet damit pädagogische Arbeit.',
            },
          ],
        },
        {
          heading: 'Worauf man achten sollte',
          blocks: [
            {
              list: [
                'Die Mathematik ist das Spiel, keine Schranke davor.',
                'Die Schwierigkeit folgt dem Kind: Bekanntes kommt seltener, Fehlendes kehrt zurück.',
                'Nach einem Fehler folgt eine Erklärung, nicht nur ein Summton.',
                'Kurze Runden mit natürlichem Endpunkt.',
                'Der Fortschritt ist sichtbar und für das Kind auf einen Blick lesbar.',
                'Es funktioniert ohne Konto, und es ist klar, was mit den Daten geschieht.',
              ],
            },
          ],
        },
        {
          heading: 'Wovor man sich hüten sollte',
          blocks: [
            {
              list: [
                'Countdown bei jeder Aufgabe — bei ängstlichen Kindern verschlechtert das zuverlässig die Leistung.',
                'Serien, die einen ausgelassenen Tag bestrafen; Druck, der genauso auf die Eltern zielt.',
                'Werbung zwischen den Runden, besonders wenn sie spannender ist als das Spiel.',
                'In-App-Käufe, bei denen das Interessante hinter der Bezahlschranke liegt.',
                'Immer dieselben Aufgaben in derselben Reihenfolge — trainiert die Reihenfolge, nicht die Aufgaben.',
                'Eine Schwierigkeit, die sich nie ändert, egal wie das Kind abschneidet.',
              ],
            },
          ],
        },
        {
          heading: 'Mathespiele ohne Bildschirm',
          blocks: [
            {
              p: 'Ein Bildschirm ist keine Voraussetzung, und eine Mischung ist meist besser als eines allein. Manches vom Besten kostet nichts:',
            },
            {
              list: [
                'Zwei Würfel und ein Wettrennen, wer das Produkt zuerst sagt — mit einem Erwachsenen, der schlagbar ist.',
                'Ein Kartenspiel ohne Bildkarten: zwei umdrehen und multiplizieren.',
                'Rechtecke im Alltag — Eierkarton, Fliesen, Fensterscheiben, Muffinblech, Sitzreihen.',
                'Beim Schulweg laut in Schritten zählen: Vierer, Sechser, Siebener.',
                'Kochen, wo ein Rezept zu verdoppeln Multiplikation mit Anlass ist.',
              ],
            },
            {
              p: 'In einem Punkt sind sie stärker als jede App: Es sind Gespräche. Sie hören, wie das Kind zur Antwort gekommen ist, und das sagt weit mehr aus als die Antwort selbst.',
            },
          ],
        },
        {
          heading: 'Wo Numblop hineinpasst',
          blocks: [
            {
              p: 'Numblop folgt dem ersten Muster. Das Einmaleins ist das Spiel: Antworten bringt einen über die Karte voran, und es gibt kein separates Minispiel, in das man fliehen kann. Belohnungen, Münzen, Ausstattungsgegenstände und neue Inseln folgen aus dem Üben, statt es zu ersetzen.',
            },
            {
              p: 'Es ist bewusst ohne Hetze — kein Countdown, keine Strafe für eine falsche Antwort, stattdessen eine Erklärung. Die Runden sind kurz, der Fortschritt bleibt auf dem Gerät, und es gibt keine Konten, keine Werbung und keine In-App-Käufe.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Im Browser ausprobieren',
        body: 'Numblop läuft unter Android und direkt im Browser auf iPhone, iPad und am Computer — kostenlos, ohne Installation und ohne Anmeldung.',
      },
    },
    {
      id: 'progress',
      slug: 'lernfortschritt-mathe',
      title: 'Lernfortschritt in Mathe erkennen und begleiten',
      metaTitle: 'Lernfortschritt in Mathe erkennen und begleiten – Numblop',
      metaDescription:
        'Wie Sie erkennen, ob eine Einmaleins-Aufgabe wirklich sitzt: lernbegleitendes Nachfragen ohne Notendruck, worauf man achtet und wie man Fortschritt sichtbar macht.',
      linkLabel: 'Lernfortschritt in Mathe',
      excerpt:
        'Wie man erkennt, ob eine Aufgabe wirklich sitzt — ohne aus jedem Tag eine Prüfung zu machen.',
      updated: '2026-08-30',
      image: {
        src: '/posts/rewards-en.webp',
        alt: 'Eine Belohnungstruhe und gesammelte Münzen für abgeschlossene Übungsrunden in Numblop',
        width: 720,
        height: 900,
      },
      intro: [
        'Beim Einmaleins ist die schwierigste Frage nicht, was geübt werden soll, sondern was gerade nicht mehr geübt werden muss. Übt man weiter, was längst sitzt, verschwendet man die knappe Aufmerksamkeit des Kindes. Hört man zu früh auf, ist die Aufgabe nach den Ferien wieder weg.',
        'Diese Frage lässt sich beantworten, und zwar ohne Test. Was dafür nötig ist, nennt man lernbegleitendes oder formatives Feedback: kleine Beobachtungen, die steuern, was als Nächstes geübt wird, und die für das Kind keine Konsequenzen haben.',
      ],
      sections: [
        {
          heading: 'Warum Richtigkeit allein zu wenig sagt',
          blocks: [
            {
              p: 'Ein Kind, das weiterzählt oder von einer Nachbaraufgabe ausgeht, kommt am Ende auch auf die richtige Antwort. Die Antwort ist richtig, die Aufgabe ist aber nicht fertig. Wer nur zählt, wie viele Antworten stimmen, sieht diesen Unterschied nie.',
            },
            {
              p: 'Und genau dieser Unterschied entscheidet später. Beim schriftlichen Dividieren oder bei Brüchen frisst das Rechnen die Aufmerksamkeit, die für die eigentliche Aufgabe gebraucht wird. Deshalb lohnt es sich, auf das Zögern statt auf den Haken zu achten.',
            },
          ],
        },
        {
          heading: 'Drei Signale, die mehr verraten',
          blocks: [
            {
              h3: 'Kommt die Antwort, oder wird sie gebaut?',
            },
            {
              p: 'Achten Sie auf die Pause. Eine abgerufene Aufgabe ist in ein bis zwei Sekunden da. Eine hergeleitete hat eine sichtbare Lücke, in der gezählt oder von einer Nachbaraufgabe aus gerechnet wird. Beides ist richtig, nur eines ist fertig.',
            },
            {
              h3: 'Hält sie außerhalb der Reihenfolge?',
            },
            {
              p: 'Fragen Sie 8 × 7 mitten in einer gemischten Runde, Tage nachdem die 8er-Reihe Thema war. Aufgaben, die nur innerhalb ihrer eigenen Reihe funktionieren, sind noch nicht selbstständig.',
            },
            {
              h3: 'Hält sie an einem schlechten Tag?',
            },
            {
              p: 'Eine Aufgabe, die verschwindet, wenn das Kind müde oder abgelenkt ist, ist noch fragil. Kein Grund zur Sorge — nur ein Grund, sie etwas länger im Umlauf zu lassen.',
            },
            {
              p: 'Die informativste Frage überhaupt kostet nichts: „Wie bist du darauf gekommen?“ Ein „Neun Sechser sind zehn Sechser minus sechs“ zeigt Verständnis ohne Automatisierung. Ein Schulterzucken mit richtiger Antwort heißt meist: fertig.',
            },
          ],
        },
        {
          heading: 'Nachfragen ohne Prüfungsgefühl',
          blocks: [
            {
              p: 'Sobald sich Nachfragen wie eine Prüfung anfühlt, verändert sich das Verhalten: Kinder raten weniger, meiden unsichere Aufgaben und beschäftigen sich mit ihrem Gefühl statt mit der Mathematik. Damit verschwindet genau die Information, die Sie wollten.',
            },
            {
              list: [
                'Beiläufig fragen — beim Tischdecken, im Auto, zwischendurch.',
                'Ohne Wertung reagieren; Kinder lesen ein Seufzen sofort.',
                'Nach dem Weg fragen, nicht nur nach dem Ergebnis.',
                'Ergebnisse nutzen, um das Üben zu ändern, nicht um zu bewerten.',
              ],
            },
          ],
        },
        {
          heading: 'Fortschritt sichtbar machen',
          blocks: [
            {
              p: 'Sie brauchen keine Tabelle am Rechner. Sie brauchen zu wissen, welche Aufgaben noch schwach sind und wie sich das über ein Halbjahr bewegt hat — genug zum Planen, und genug, um dem Kind an einem schlechten Tag einen Beleg zu zeigen.',
            },
            {
              list: [
                'Ein Raster an der Wand, in dem das Kind selbst ausmalt, was sitzt.',
                'Eine kurze Notiz nach jeder Runde mit den zwei, drei langsamen Aufgaben.',
                'Alle paar Wochen eine datierte Arbeitsprobe — der verständlichste Fortschrittsbeleg für ein Kind.',
                'Was die Übungs-App ohnehin erfasst, sofern sie einzelne Aufgaben zeigt und nicht nur Punktzahlen.',
              ],
            },
            {
              p: 'Sichtbarer Fortschritt wirkt stärker, als man erwartet. Kinder überschätzen, wie viel noch fehlt, und sehen den Stapel unbekannter Aufgaben gern schrumpfen.',
            },
          ],
        },
        {
          heading: 'Wo ein Übungswerkzeug hilft',
          blocks: [
            {
              p: 'Software ist schlecht in dem Teil, der am meisten zählt — im Erklären, im Bemerken von Verwirrung, im Gespräch über den Rechenweg. Gut ist sie in dem Teil, der wirklich mühsam ist: sich zu merken, welche von hundert Aufgaben bei diesem Kind gerade schwach sind, und die Wiederholung entsprechend zu planen.',
            },
            {
              p: 'Dafür ist Numblop gedacht. Es verfolgt jede Aufgabe einzeln, mischt Neues unter Altes, kehrt häufiger zu den schwachen zurück und zeigt den Stand auf einer Karte, die das Kind selbst lesen kann. Es läuft unter Android und im Browser auf iPhone, iPad und Computer, der Fortschritt bleibt auf dem Gerät, und ein Konto ist nicht nötig.',
            },
          ],
        },
      ],
      cta: {
        heading: 'Fünf Minuten am Tag',
        body: 'Numblop ist kostenlos, funktioniert nach der Installation auch offline und behält den Fortschritt auf dem Gerät — ohne Konten, Werbung oder In-App-Käufe.',
      },
    },
  ],
  articles: [
    {
      id: 'without-rote',
      slug: 'einmaleins-lernen-ohne-auswendiglernen',
      title: 'Wie Kinder das Einmaleins lernen, ohne es stur auswendig zu pauken',
      metaTitle: 'Einmaleins lernen ohne stures Auswendiglernen – Numblop',
      metaDescription:
        'Warum das Aufsagen der Malreihen oft nicht reicht und was besser funktioniert: erst verstehen, kurz und täglich üben, Aufgaben mischen und Tempo ohne Druck aufbauen.',
      linkLabel: 'Einmaleins ohne Auswendiglernen',
      excerpt:
        'Das Aufsagen der Reihen erzeugt ein Kind, das die 7er-Reihe herunterrattert und trotzdem bei 7 × 6 stockt. Das funktioniert besser.',
      published: '2026-08-30',
      updated: '2026-08-30',
      image: {
        src: '/posts/mistakes-help-en.webp',
        alt: 'Numblop zeigt nach einem Fehler 3 × 5 = 15 als abzählbare Punkte',
        width: 720,
        height: 900,
      },
      takeaways: [
        'Verstehen, was Multiplikation bedeutet, muss vor dem Tempo kommen — sonst hat das Gedächtnis nichts, woran es sich hält.',
        'Fünf Minuten an den meisten Tagen schlagen eine lange Wocheneinheit.',
        'Neue Aufgaben unter alte mischen; eine Reihe der Reihe nach zu üben trainiert die Reihenfolge.',
        'Die meiste Zeit gehört der kleinen Gruppe wirklich schwerer Aufgaben.',
        'Tempo zählt, aber erst nach dem Verstehen — und es wird beobachtet, nicht mit einem Countdown erzwungen.',
        'Fehler erklären statt korrigieren, damit eine vergessene Aufgabe wieder hergeleitet werden kann.',
      ],
      intro: [
        'Fast jeder Erwachsene erinnert sich daran, die Malreihen aufgesagt zu haben. Manche erinnern sich gern, die meisten als Lärm, und ein beachtlicher Teil erinnert sich an die sehr konkrete Angst davor, vor der Klasse nach 7 × 8 gefragt zu werden. Es ist die Standardmethode, weil sie leicht zu organisieren ist, nicht weil sie die beste wäre.',
        'Aufsagen erzeugt durchaus etwas. Nur das Falsche: eine Abfolge. Ein Kind, das die 7er-Reihe als Lied gelernt hat, sagt sie ab 7 × 1 auf und stockt trotzdem, wenn 7 × 6 allein in einer Divisionsaufgabe auftaucht — denn der Weg zur Antwort führt über die ganze Liste.',
        'Was folgt, ist keine Absage ans Üben. Die Aufgaben müssen automatisch werden, und das braucht Wiederholung über Monate. Die Frage ist, welche Art von Wiederholung und in welcher Reihenfolge.',
      ],
      sections: [
        {
          heading: 'Warum Auswendiglernen allein meist scheitert',
          blocks: [
            {
              p: 'Eine auswendig gelernte Aufgabe ohne Bedeutung ist ein zerbrechliches Ding. Es gibt nichts, woran man sie prüfen könnte, also kann ein Kind 6 × 7 = 42 von 6 × 7 = 45 nur dadurch unterscheiden, dass es sich besser erinnert. Und es gibt keinen Rückweg: Ist sie weg, ist sie weg, und die Sommerferien reichen dafür meist aus.',
            },
            {
              p: 'Ein Kind, das Multiplikation versteht, hat ein Netz. 6 × 7 zu vergessen ist eine Kleinigkeit — das ist doppelt 3 × 7, oder 5 × 7 plus sieben, oder sechs Reihen zu sieben, die man notfalls abzählt. Es kommt langsam zur Antwort, aber es kommt an, und jede Herleitung macht den direkten Abruf beim nächsten Mal etwas wahrscheinlicher.',
            },
            {
              p: 'Verstehen ist deshalb kein langsamerer Weg zur Automatisierung. Es ist das, was die Automatisierung stabil hält.',
            },
          ],
        },
        {
          heading: 'Erst klären, was Multiplikation ist',
          blocks: [
            {
              p: 'Vor jedem Üben braucht ein Kind ein Bild. Multiplikation sind gleich große Gruppen: vier Tüten mit je sechs Murmeln. Und sie ist ein Rechteck — Zeilen und Spalten. Dieses Bild zahlt sich später aus, weil daran sichtbar wird, warum 6 × 4 und 4 × 6 dasselbe ergeben. Dreht man das Rechteck um neunzig Grad, ist es dasselbe Rechteck.',
            },
            {
              p: 'Diese eine Einsicht halbiert die Arbeit. Aus hundert Aufgaben werden etwa fünfzig, und Kinder, die das nicht bemerkt haben, lernen still alles doppelt.',
            },
            {
              list: [
                'Deckel, Knöpfe oder Nudeln in Reihen legen und auf zwei Arten zählen.',
                'Rechtecke in der Wohnung suchen: Eierkarton, Fliesen, Muffinblech, Schokoladentafel.',
                'Die Aufgabe auf Karopapier zeichnen und die Kästchen zählen.',
                'Beim Gehen laut in Schritten zählen, damit das Muster auch als Rhythmus ankommt.',
              ],
            },
            {
              p: 'Diese Phase ist kurz. Sie zu überspringen erzeugt aber genau das Kind, das die Reihen aufsagen und nicht anwenden kann.',
            },
          ],
        },
        {
          heading: 'Kurz und oft statt lang und selten',
          blocks: [
            {
              p: 'Der häufigste praktische Fehler ist, das Üben aufzusparen. Eine halbe Stunde am Wochenende wirkt produktiv und funktioniert schlecht. Fünf Minuten an den meisten Tagen funktionieren deutlich besser, obwohl es insgesamt weniger Zeit ist.',
            },
            {
              p: 'Der Grund: Das Gedächtnis reagiert auf die Anzahl der einzelnen, zeitlich verteilten Gelegenheiten des Abrufs, nicht auf die Länge einer Sitzung. Zwischen den Einheiten etwas Vergessen zuzulassen, gehört zum Mechanismus dazu.',
            },
            {
              p: 'Fünf bis zehn Minuten sind ein realistisches Ziel. Kurz genug für durchgehende Aufmerksamkeit, kurz genug um keinen täglichen Streit zu erzeugen, und kurz genug, um eine volle Woche zu überstehen — die einzige Prüfung, auf die es über Monate ankommt.',
            },
          ],
        },
        {
          heading: 'In sinnvoller Reihenfolge vorgehen',
          blocks: [
            {
              p: 'Manche Reihen sind fast geschenkt, und dort zu beginnen baut schnell Sicherheit auf. Die 2er-Reihe ist Verdoppeln. Die 10er und 5er haben offensichtliche Muster. Die 4er sind zweimal verdoppeln. Die 9er haben den Fingertrick und die Quersumme, an denen Kinder weit mehr Freude haben, als deren Nutzen rechtfertigt.',
            },
            {
              p: 'Ist das erledigt, ist der größte Teil abgedeckt, und übrig bleibt ein kleiner hartnäckiger Kern in der Mitte der 6er, 7er und 8er — die klassischen 6 × 7, 7 × 8, 6 × 8. Fast jedes Kind findet diese am schwersten, und genau sie werden beim Durchmarsch durch die Reihen am wenigsten geübt.',
            },
            {
              p: 'Sagen Sie das dem Kind. Zu wissen, dass vielleicht acht wirklich schwere Aufgaben übrig sind und nicht hundert, verändert das Gefühl für die ganze Aufgabe.',
            },
          ],
        },
        {
          heading: 'Schwache Aufgaben unter bekannte mischen',
          blocks: [
            {
              p: 'Rechts und links der richtigen Lösung liegt je ein Fehler. Die ganze Tabelle gleichmäßig zu üben verbringt die meiste Zeit mit Aufgaben, die längst sitzen. Nur die schwachen zu üben ist unerbittlich: Jede Aufgabe ist schwer, und die Runde wird zu etwas, das man erduldet.',
            },
            {
              p: 'Eine Mischung mit überwiegend schwachen Aufgaben und stetigem Nachschub an bekannten hält die Schwierigkeit ehrlich und die Runde erträglich. Die leichten sind nicht verschwendet — sie sind der Grund, warum das Kind morgen wiederkommt.',
            },
            {
              p: 'Auch das Mischen selbst zählt. Aufgaben sollten außerhalb ihrer Reihenfolge und außerhalb ihrer eigenen Reihe auftauchen, denn in keiner anderen Form werden sie je gebraucht.',
            },
          ],
        },
        {
          heading: 'Wann Tempo zu zählen beginnt',
          blocks: [
            {
              p: 'Tempo hat im Mathematikunterricht einen schlechten Ruf, überwiegend zu Recht, weil es meist als Druck eingeführt wird. Automatisierung ist aber ein echtes Ziel, und der Grund ist praktisch, nicht sportlich.',
            },
            {
              p: 'Wenn ein Kind 7 × 8 ausrechnet statt abruft, belegt diese Arbeit die Aufmerksamkeit, die für die eigentliche Aufgabe nötig wäre. In einer Division oder bei Brüchen frisst das Rechnen das Denken.',
            },
            {
              p: 'Tempo zählt also — nach dem Verstehen, nicht statt seiner, und als etwas, das man beobachtet, nicht auferlegt. Merken Sie sich, bei welchen Aufgaben eine Pause entsteht, und üben Sie diese mehr. Das erreicht alles, was ein Countdown erreicht, ohne einem ängstlichen Kind beizubringen, dass es schlecht in Mathe sei.',
            },
          ],
        },
        {
          heading: 'Spielen, und warum es echte Arbeit leistet',
          blocks: [
            {
              p: 'Spiele werden meist damit begründet, dass sie das Üben erträglich machen. Das unterschätzt sie. Spielen verändert, wozu ein Kind bereit ist — konkret: Es macht es bereit zu raten.',
            },
            {
              p: 'Ein Kind, das spielt, versucht auch eine unsichere Aufgabe, denn falsch zu liegen ist im Spiel unauffällig. Dasselbe Kind hält am Arbeitsblatt an und wartet, denn dort ist ein Fehler eine Markierung. Da der Versuch bei halb gewusstem Wissen das Gedächtnis stärkt, lernt das ratende Kind und das wartende nicht.',
            },
            {
              p: 'Bildschirme sind dabei optional. Zwei Würfel, ein Kartenspiel ohne Bildkarten oder Aufgaben während einer Autofahrt tun dasselbe. Eine gut gebaute App fügt vor allem die Buchhaltung hinzu.',
            },
          ],
        },
        {
          heading: 'Motivation ohne Druck',
          blocks: [
            {
              p: 'Das dauert Monate, und das Schwierige ist die Beständigkeit, nicht die Methode. Ein paar Dinge helfen mehr, als man denkt:',
            },
            {
              list: [
                'Fortschritt sichtbar machen. Ein Raster an der Wand gibt dem Kind an einem zähen Tag einen Beleg.',
                'Das Üben loben, nicht die Begabung. „Du bist bei den Siebenern drangeblieben“ lässt sich wiederholen.',
                'Jeden Tag dieselbe Uhrzeit, damit es Routine wird statt einer verhandelbaren Entscheidung.',
                'Aufhören, solange es gut läuft. Ein guter Schluss macht morgen leicht.',
                'Belohnungen sollen dem Aufwand folgen, nicht ihn freischalten.',
              ],
            },
            {
              p: 'Und halten Sie Ihre eigene Reaktion auf Fehler flach. Kinder lesen ein Seufzen sofort, und ein Kind, das glaubt, mit Fehlern zu enttäuschen, meidet künftig genau die Aufgaben, bei denen es am unsichersten ist — also die, die Übung brauchen.',
            },
          ],
        },
        {
          heading: 'Woran man merkt, dass es sitzt',
          blocks: [
            {
              p: 'Die Überprüfung ist keine Prüfung und funktioniert besser, wenn sie nicht danach aussieht. Sie wollen Information für das Üben von morgen, keine Note.',
            },
            {
              list: [
                'Die Antwort kommt in ein bis zwei Sekunden, ohne sichtbare Rechenpause.',
                'Sie hält außerhalb der Reihenfolge, Tage nachdem die Reihe Thema war.',
                'Sie hält an einem müden Tag.',
                'Das Kind kann sagen, wie es die Aufgabe herleiten würde, wenn es sie vergisst.',
              ],
            },
            {
              p: 'Der letzte Punkt ist der Unterschied zu diesem Ansatz und zum Aufsagen. Ein Kind, das „Neun Siebener sind zehn Siebener minus sieben“ sagen kann, hat etwas Haltbares — auch an einem Tag, an dem der direkte Abruf ausbleibt.',
            },
          ],
        },
        {
          heading: 'Wo digitales Üben hineinpasst',
          blocks: [
            {
              p: 'Eine App kann die wichtige Hälfte nicht leisten. Sie bemerkt nicht, dass ein Kind nicht versteht, was Multiplikation bedeutet, sie führt kein Gespräch über den Rechenweg, und sie legt keine Deckel auf den Tisch.',
            },
            {
              p: 'Was sie leisten kann, ist die mühsame Hälfte — und die ist von Hand wirklich schwer: sich zu merken, welche von hundert Aufgaben bei genau diesem Kind gerade schwach sind, und sie häufiger vorzulegen, am richtigen Tag, gemischt mit genug Bekanntem.',
            },
            {
              p: 'Numblop ist um diese Aufgabe herum gebaut. Es verfolgt jede Aufgabe einzeln, bringt langsame und falsche zurück, mischt Neues unter Altes und erklärt einen Fehler — es zeigt 3 × 5 = 15 als Punkte, die das Kind selbst abzählen kann — statt ihn nur anzustreichen. Es gibt keinen Countdown und keine Strafe, die Runden sind kurz, und der Fortschritt steht auf einer Karte, die das Kind auf einen Blick liest. Es läuft unter Android und im Browser auf iPhone, iPad und Computer; der Fortschritt bleibt auf dem Gerät, und es gibt keine Konten, Werbung oder In-App-Käufe.',
            },
            {
              p: 'Es ist ein Werkzeug für einen Teil des Problems. Das Verstehen, das Gespräch und die Routine bleiben bei Ihnen — aber das sind die Teile, die Ihre Zeit wert sind.',
            },
          ],
        },
      ],
    },
  ],
}
