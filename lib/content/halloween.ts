import type { Locale } from '@/lib/i18n/locales'
import type { Article } from './types'

const VIDEO_ID = 'pHXCDB6xstY'
const PUBLISHED = '2026-10-23'

type HalloweenCopy = Omit<
  Article,
  'id' | 'published' | 'updated' | 'video'
> & {
  video: Omit<NonNullable<Article['video']>, 'youtubeId'>
}

function article(copy: HalloweenCopy): Article {
  return {
    id: 'halloween-cosmetics',
    published: PUBLISHED,
    updated: PUBLISHED,
    ...copy,
    video: { youtubeId: VIDEO_ID, ...copy.video },
  }
}

export const halloweenArticles: Record<Locale, Article> = {
  en: article({
    slug: 'halloween-accessories',
    title: 'Halloween has arrived in Numblop: meet four new accessories',
    metaTitle: 'Four new Halloween accessories in Numblop',
    metaDescription:
      'Meet Numblop’s four new permanent Halloween accessories: a witch hat, bat-wing glasses, pumpkin necklace and pumpkin slippers.',
    linkLabel: 'Halloween accessories',
    excerpt:
      'A witch hat, bat-wing glasses, pumpkin necklace and pumpkin slippers have joined Numblop permanently.',
    takeaways: [
      'Four new Halloween accessories are now available to unlock.',
      'Children earn coins through multiplication practice and choose how to spend them.',
      'The accessories are permanent additions, so there is no deadline or pressure to collect them.',
    ],
    intro: [
      'Halloween has arrived in Numblop, bringing four new ways to give your character a spooky-cute makeover.',
      'The update adds a witch hat, bat-wing glasses, a pumpkin necklace and pumpkin slippers. Every item is a permanent addition to the game, ready to unlock at each child’s own pace.',
    ],
    sections: [
      {
        heading: 'Four new ways to dress your Numblop',
        blocks: [
          {
            list: [
              'Witch hat — a classic pointed hat with a Numblop twist.',
              'Bat-wing glasses — spooky wings for a playful disguise.',
              'Pumpkin necklace — a small jack-o’-lantern to wear all year.',
              'Pumpkin slippers — a matching pair to finish the look.',
            ],
          },
          {
            p: 'Wear the complete pumpkin outfit or mix the Halloween pieces with accessories already in the wardrobe. Cosmetics do not change the difficulty or learning progress; they simply let children make their Numblop their own.',
          },
        ],
      },
      {
        heading: 'Permanent, not limited-time',
        blocks: [
          {
            p: 'The Halloween collection does not disappear when October ends. There is no countdown and no fear of missing out. Children can keep practising, earning coins and unlocking the items whenever they are ready.',
          },
        ],
      },
      {
        heading: 'Practice, earn coins and customize',
        blocks: [
          {
            p: 'Numblop adapts multiplication practice to each child’s progress and brings the harder facts back more often. Completed practice earns coins for cosmetic rewards, connecting visible progress and playful customization without ads or in-app purchases.',
          },
        ],
      },
    ],
    video: {
      title: 'Watch the Halloween cosmetics trailer',
      playLabel: 'Play the Numblop Halloween cosmetics trailer',
      privacyNote: 'YouTube loads only after you press play.',
      watchLabel: 'Watch on YouTube',
    },
  }),
  cs: article({
    slug: 'halloweenske-doplnky',
    title: 'Halloween dorazil do Numblopu: seznamte se se čtyřmi novými doplňky',
    metaTitle: 'Čtyři nové halloweenské doplňky v Numblopu',
    metaDescription:
      'Objevte čtyři nové stálé halloweenské doplňky v Numblopu: čarodějnický klobouk, brýle s netopýřími křídly, dýňový náhrdelník a dýňové bačkory.',
    linkLabel: 'Halloweenské doplňky',
    excerpt:
      'Čarodějnický klobouk, netopýří brýle, dýňový náhrdelník a dýňové bačkory zůstávají v Numblopu natrvalo.',
    takeaways: [
      'Ve hře jsou čtyři nové halloweenské doplňky k odemknutí.',
      'Děti získávají mince procvičováním násobilky a samy si vybírají, za co je utratí.',
      'Doplňky zůstávají ve hře natrvalo, takže na jejich získání není žádný časový tlak.',
    ],
    intro: [
      'Halloween dorazil do Numblopu a přinesl čtyři nové možnosti, jak svému Numblopovi vytvořit strašidelně roztomilý vzhled.',
      'Aktualizace přidává čarodějnický klobouk, brýle s netopýřími křídly, dýňový náhrdelník a dýňové bačkory. Všechny předměty jsou trvalou součástí hry a děti je mohou odemykat vlastním tempem.',
    ],
    sections: [
      {
        heading: 'Čtyři nové možnosti, jak obléknout Numblopa',
        blocks: [
          {
            list: [
              'Čarodějnický klobouk — klasický špičatý klobouk v numblopím stylu.',
              'Brýle s netopýřími křídly — strašidelná křídla pro hravé přestrojení.',
              'Dýňový náhrdelník — malá lucerna, kterou lze nosit po celý rok.',
              'Dýňové bačkory — sladěný pár, který celý vzhled dokončí.',
            ],
          },
          {
            p: 'Oblečte celý dýňový komplet nebo halloweenské kousky kombinujte s doplňky, které už máte v šatníku. Kosmetické předměty nemění obtížnost ani postup v učení — jen dětem umožňují vytvořit si vlastního Numblopa.',
          },
        ],
      },
      {
        heading: 'Natrvalo, ne jen na omezenou dobu',
        blocks: [
          {
            p: 'Halloweenská kolekce po skončení října nezmizí. Není tu žádné odpočítávání ani strach, že něco nestihnete. Děti mohou dál procvičovat, získávat mince a odemykat předměty, až budou chtít.',
          },
        ],
      },
      {
        heading: 'Procvičujte, získávejte mince a upravujte vzhled',
        blocks: [
          {
            p: 'Numblop přizpůsobuje procvičování násobilky pokroku každého dítěte a obtížnější příklady vrací častěji. Za dokončené procvičování děti získávají mince na kosmetické odměny — bez reklam a nákupů v aplikaci.',
          },
        ],
      },
    ],
    video: {
      title: 'Podívejte se na trailer halloweenských doplňků',
      playLabel: 'Přehrát trailer halloweenských doplňků v Numblopu',
      privacyNote: 'YouTube se načte až po stisknutí tlačítka přehrát.',
      watchLabel: 'Přehrát na YouTube',
    },
  }),
  sk: article({
    slug: 'halloweenske-doplnky',
    title: 'Halloween dorazil do Numblopu: spoznajte štyri nové doplnky',
    metaTitle: 'Štyri nové halloweenske doplnky v Numblopu',
    metaDescription:
      'Spoznajte štyri nové trvalé halloweenske doplnky v Numblopu: čarodejnícky klobúk, okuliare s netopierími krídlami, tekvicový náhrdelník a papuče.',
    linkLabel: 'Halloweenske doplnky',
    excerpt:
      'Čarodejnícky klobúk, netopierie okuliare, tekvicový náhrdelník a papuče zostávajú v Numblopu natrvalo.',
    takeaways: [
      'V hre sú štyri nové halloweenske doplnky na odomknutie.',
      'Deti získavajú mince precvičovaním násobilky a samy si vyberajú, na čo ich použijú.',
      'Doplnky sú trvalé, takže na ich získanie nie je žiadny časový tlak.',
    ],
    intro: [
      'Halloween dorazil do Numblopu a priniesol štyri nové možnosti, ako dať postavičke strašidelne roztomilý vzhľad.',
      'Aktualizácia pridáva čarodejnícky klobúk, okuliare s netopierími krídlami, tekvicový náhrdelník a tekvicové papuče. Všetky zostávajú v hre natrvalo a deti ich môžu odomykať vlastným tempom.',
    ],
    sections: [
      {
        heading: 'Štyri nové spôsoby, ako obliecť Numblopa',
        blocks: [
          {
            list: [
              'Čarodejnícky klobúk — klasický špicatý klobúk v štýle Numblopu.',
              'Okuliare s netopierími krídlami — hravé strašidelné prestrojenie.',
              'Tekvicový náhrdelník — malá tekvicová lucerna na celý rok.',
              'Tekvicové papuče — zladený pár, ktorý dokončí celý vzhľad.',
            ],
          },
          {
            p: 'Noste celý tekvicový komplet alebo kombinujte nové kúsky s doplnkami zo svojho šatníka. Kozmetické predmety nemenia obťažnosť ani pokrok v učení — iba umožňujú deťom vytvoriť si vlastného Numblopa.',
          },
        ],
      },
      {
        heading: 'Natrvalo, nie iba na obmedzený čas',
        blocks: [
          {
            p: 'Halloweenska kolekcia po októbri nezmizne. Bez odpočítavania a bez strachu, že niečo zmeškáte. Deti môžu ďalej precvičovať, získavať mince a odomykať predmety, keď budú pripravené.',
          },
        ],
      },
      {
        heading: 'Precvičujte, získavajte mince a upravujte vzhľad',
        blocks: [
          {
            p: 'Numblop prispôsobuje precvičovanie násobilky pokroku dieťaťa a náročnejšie príklady vracia častejšie. Za dokončené precvičovanie získavajú deti mince na kozmetické odmeny — bez reklám a nákupov v aplikácii.',
          },
        ],
      },
    ],
    video: {
      title: 'Pozrite si trailer halloweenskych doplnkov',
      playLabel: 'Prehrať trailer halloweenskych doplnkov v Numblopu',
      privacyNote: 'YouTube sa načíta až po stlačení tlačidla prehrávania.',
      watchLabel: 'Pozrieť na YouTube',
    },
  }),
  de: article({
    slug: 'halloween-accessoires',
    title: 'Halloween ist in Numblop angekommen: vier neue Accessoires',
    metaTitle: 'Vier neue Halloween-Accessoires in Numblop',
    metaDescription:
      'Entdecke vier neue dauerhafte Halloween-Accessoires in Numblop: Hexenhut, Fledermausbrille, Kürbiskette und Kürbisschuhe.',
    linkLabel: 'Halloween-Accessoires',
    excerpt:
      'Hexenhut, Fledermausbrille, Kürbiskette und Kürbisschuhe bleiben dauerhaft in Numblop.',
    takeaways: [
      'Vier neue Halloween-Accessoires können jetzt freigeschaltet werden.',
      'Kinder verdienen beim Einmaleins-Üben Münzen und entscheiden selbst, wofür sie sie ausgeben.',
      'Die Accessoires bleiben dauerhaft – es gibt keine Frist und keinen Sammeldruck.',
    ],
    intro: [
      'Halloween ist in Numblop angekommen und bringt vier neue Möglichkeiten für einen schaurig-süßen Look mit.',
      'Das Update enthält einen Hexenhut, eine Fledermausbrille, eine Kürbiskette und Kürbisschuhe. Alle Gegenstände bleiben dauerhaft im Spiel und können im eigenen Tempo freigeschaltet werden.',
    ],
    sections: [
      {
        heading: 'Vier neue Looks für deinen Numblop',
        blocks: [
          {
            list: [
              'Hexenhut – der klassische spitze Hut im Numblop-Stil.',
              'Fledermausbrille – gruselige Flügel für eine verspielte Verkleidung.',
              'Kürbiskette – eine kleine Kürbislaterne für das ganze Jahr.',
              'Kürbisschuhe – das passende Paar für den vollständigen Look.',
            ],
          },
          {
            p: 'Trage das komplette Kürbis-Outfit oder kombiniere die Halloween-Teile mit vorhandenen Accessoires. Kosmetik verändert weder Schwierigkeit noch Lernfortschritt; sie macht den eigenen Numblop einfach persönlicher.',
          },
        ],
      },
      {
        heading: 'Dauerhaft statt zeitlich begrenzt',
        blocks: [
          {
            p: 'Die Halloween-Kollektion verschwindet nach Oktober nicht. Es gibt keinen Countdown und keine Angst, etwas zu verpassen. Kinder können weiter üben, Münzen verdienen und die Teile freischalten, wenn sie bereit sind.',
          },
        ],
      },
      {
        heading: 'Üben, Münzen verdienen und gestalten',
        blocks: [
          {
            p: 'Numblop passt die Einmaleins-Übungen an den Lernfortschritt an und wiederholt schwierigere Aufgaben häufiger. Abgeschlossene Übungen bringen Münzen für kosmetische Belohnungen – ohne Werbung und In-App-Käufe.',
          },
        ],
      },
    ],
    video: {
      title: 'Trailer zu den Halloween-Accessoires ansehen',
      playLabel: 'Trailer zum Numblop-Halloween-Update abspielen',
      privacyNote: 'YouTube wird erst geladen, wenn du auf Wiedergabe drückst.',
      watchLabel: 'Auf YouTube ansehen',
    },
  }),
  es: article({
    slug: 'accesorios-de-halloween',
    title: 'Halloween ha llegado a Numblop: conoce cuatro accesorios nuevos',
    metaTitle: 'Cuatro accesorios nuevos de Halloween en Numblop',
    metaDescription:
      'Descubre cuatro accesorios permanentes de Halloween en Numblop: sombrero de bruja, gafas con alas de murciélago, collar y zapatillas de calabaza.',
    linkLabel: 'Accesorios de Halloween',
    excerpt:
      'El sombrero de bruja, las gafas de murciélago, el collar y las zapatillas de calabaza llegan para quedarse.',
    takeaways: [
      'Ya se pueden desbloquear cuatro accesorios nuevos de Halloween.',
      'Los niños ganan monedas practicando las tablas y eligen cómo gastarlas.',
      'Los accesorios son permanentes: no hay fecha límite ni presión para conseguirlos.',
    ],
    intro: [
      'Halloween ha llegado a Numblop con cuatro formas nuevas de darle al personaje un aspecto adorable y misterioso.',
      'La actualización añade un sombrero de bruja, gafas con alas de murciélago, un collar de calabaza y zapatillas de calabaza. Todos permanecerán en el juego y podrán desbloquearse al ritmo de cada niño.',
    ],
    sections: [
      {
        heading: 'Cuatro formas nuevas de vestir a tu Numblop',
        blocks: [
          {
            list: [
              'Sombrero de bruja: el clásico sombrero puntiagudo al estilo Numblop.',
              'Gafas con alas de murciélago: un disfraz divertido y misterioso.',
              'Collar de calabaza: una pequeña linterna para llevar todo el año.',
              'Zapatillas de calabaza: el par perfecto para completar el conjunto.',
            ],
          },
          {
            p: 'Usa el conjunto completo de calabaza o combina las piezas con los accesorios que ya tienes. Los cosméticos no cambian la dificultad ni el progreso; solo permiten que cada niño haga suyo su Numblop.',
          },
        ],
      },
      {
        heading: 'Permanentes, no por tiempo limitado',
        blocks: [
          {
            p: 'La colección de Halloween no desaparecerá cuando termine octubre. No hay cuenta atrás ni miedo a perderse nada. Los niños pueden seguir practicando, ganar monedas y desbloquear cada objeto cuando quieran.',
          },
        ],
      },
      {
        heading: 'Practica, gana monedas y personaliza',
        blocks: [
          {
            p: 'Numblop adapta la práctica de multiplicación al progreso y repite con más frecuencia las operaciones difíciles. La práctica completada otorga monedas para recompensas cosméticas, sin anuncios ni compras dentro de la aplicación.',
          },
        ],
      },
    ],
    video: {
      title: 'Mira el tráiler de los accesorios de Halloween',
      playLabel: 'Reproducir el tráiler de Halloween de Numblop',
      privacyNote: 'YouTube solo se carga cuando pulsas reproducir.',
      watchLabel: 'Ver en YouTube',
    },
  }),
  fi: article({
    slug: 'halloween-asusteet',
    title: 'Halloween saapui Numblopiin: neljä uutta asustetta',
    metaTitle: 'Neljä uutta Halloween-asustetta Numblopissa',
    metaDescription:
      'Tutustu Numblopin neljään pysyvään Halloween-asusteeseen: noidanhattuun, lepakkolaseihin, kurpitsakaulakoruun ja kurpitsatohveleihin.',
    linkLabel: 'Halloween-asusteet',
    excerpt:
      'Noidanhattu, lepakkolasit, kurpitsakaulakoru ja kurpitsatohvelit jäävät Numblopiin pysyvästi.',
    takeaways: [
      'Neljä uutta Halloween-asustetta on nyt avattavissa.',
      'Lapset ansaitsevat kolikoita kertotauluja harjoittelemalla ja päättävät itse niiden käytöstä.',
      'Asusteet ovat pysyviä, joten niiden keräämisellä ei ole määräaikaa.',
    ],
    intro: [
      'Halloween on saapunut Numblopiin ja tuo neljä uutta tapaa antaa hahmolle hurjan söpö ilme.',
      'Päivitys lisää noidanhatun, lepakkosiipilasit, kurpitsakaulakorun ja kurpitsatohvelit. Kaikki jäävät peliin pysyvästi ja ovat avattavissa omaan tahtiin.',
    ],
    sections: [
      {
        heading: 'Neljä uutta tapaa pukea Numblop',
        blocks: [
          {
            list: [
              'Noidanhattu — klassinen suippohattu Numblopin tyyliin.',
              'Lepakkolasit — siivekäs ja leikkisän karmiva naamio.',
              'Kurpitsakaulakoru — pieni lyhty ympärivuotiseen käyttöön.',
              'Kurpitsatohvelit — yhteensopiva pari viimeistelemään asun.',
            ],
          },
          {
            p: 'Käytä koko kurpitsa-asua tai yhdistä Halloween-osia vaatekaapin muihin asusteisiin. Kosmetiikka ei muuta vaikeustasoa tai oppimisen edistymistä, vaan tekee omasta Numblopista persoonallisen.',
          },
        ],
      },
      {
        heading: 'Pysyviä, ei vain rajoitetun ajan',
        blocks: [
          {
            p: 'Halloween-kokoelma ei katoa lokakuun päättyessä. Ei lähtölaskentaa eikä pelkoa siitä, että jokin jäisi saamatta. Lapset voivat harjoitella, ansaita kolikoita ja avata asusteita silloin kun haluavat.',
          },
        ],
      },
      {
        heading: 'Harjoittele, ansaitse kolikoita ja muokkaa',
        blocks: [
          {
            p: 'Numblop mukauttaa kertotauluharjoittelun lapsen edistymiseen ja palauttaa vaikeat laskut useammin. Harjoittelusta saa kolikoita kosmeettisiin palkintoihin ilman mainoksia tai sovelluksen sisäisiä ostoksia.',
          },
        ],
      },
    ],
    video: {
      title: 'Katso Halloween-asusteiden traileri',
      playLabel: 'Toista Numblopin Halloween-asusteiden traileri',
      privacyNote: 'YouTube latautuu vasta, kun painat toistopainiketta.',
      watchLabel: 'Katso YouTubessa',
    },
  }),
  fr: article({
    slug: 'accessoires-halloween',
    title: 'Halloween arrive dans Numblop : découvrez quatre nouveaux accessoires',
    metaTitle: 'Quatre nouveaux accessoires Halloween dans Numblop',
    metaDescription:
      'Découvrez quatre accessoires Halloween permanents dans Numblop : chapeau de sorcière, lunettes chauve-souris, collier et chaussons citrouille.',
    linkLabel: 'Accessoires Halloween',
    excerpt:
      'Chapeau de sorcière, lunettes chauve-souris, collier et chaussons citrouille restent définitivement dans Numblop.',
    takeaways: [
      'Quatre nouveaux accessoires Halloween peuvent désormais être débloqués.',
      'Les enfants gagnent des pièces en révisant les tables et choisissent comment les dépenser.',
      'Les accessoires sont permanents : aucune date limite ni pression pour les collectionner.',
    ],
    intro: [
      'Halloween arrive dans Numblop avec quatre nouvelles façons de donner au personnage un look adorablement effrayant.',
      'La mise à jour ajoute un chapeau de sorcière, des lunettes aux ailes de chauve-souris, un collier citrouille et des chaussons citrouille. Tous resteront dans le jeu et pourront être débloqués au rythme de chaque enfant.',
    ],
    sections: [
      {
        heading: 'Quatre nouvelles façons d’habiller son Numblop',
        blocks: [
          {
            list: [
              'Chapeau de sorcière — le classique chapeau pointu à la façon Numblop.',
              'Lunettes chauve-souris — des ailes effrayantes pour un déguisement amusant.',
              'Collier citrouille — une petite lanterne à porter toute l’année.',
              'Chaussons citrouille — la paire assortie qui complète la tenue.',
            ],
          },
          {
            p: 'Portez la tenue citrouille complète ou mélangez les nouveautés avec les accessoires déjà débloqués. Les éléments cosmétiques ne changent ni la difficulté ni la progression : ils permettent simplement de personnaliser son Numblop.',
          },
        ],
      },
      {
        heading: 'Permanents, pas en édition limitée',
        blocks: [
          {
            p: 'La collection Halloween ne disparaîtra pas à la fin du mois d’octobre. Aucun compte à rebours et aucune peur de manquer quelque chose. Les enfants peuvent continuer à s’entraîner, gagner des pièces et débloquer les objets quand ils le souhaitent.',
          },
        ],
      },
      {
        heading: 'S’entraîner, gagner des pièces et personnaliser',
        blocks: [
          {
            p: 'Numblop adapte les exercices de multiplication aux progrès de l’enfant et repropose plus souvent les calculs difficiles. Les séances terminées rapportent des pièces pour les récompenses cosmétiques, sans publicité ni achat intégré.',
          },
        ],
      },
    ],
    video: {
      title: 'Regarder la bande-annonce des accessoires Halloween',
      playLabel: 'Lire la bande-annonce Halloween de Numblop',
      privacyNote: 'YouTube ne se charge qu’après avoir appuyé sur lecture.',
      watchLabel: 'Regarder sur YouTube',
    },
  }),
  nb: article({
    slug: 'halloween-tilbehor',
    title: 'Halloween har kommet til Numblop: fire nye tilbehør',
    metaTitle: 'Fire nye Halloween-tilbehør i Numblop',
    metaDescription:
      'Oppdag fire permanente Halloween-tilbehør i Numblop: heksehatt, flaggermusbriller, gresskarkjede og gresskartøfler.',
    linkLabel: 'Halloween-tilbehør',
    excerpt:
      'Heksehatt, flaggermusbriller, gresskarkjede og gresskartøfler blir værende i Numblop.',
    takeaways: [
      'Fire nye Halloween-tilbehør kan nå låses opp.',
      'Barn tjener mynter ved å øve på gangetabellen og velger selv hva de vil bruke dem på.',
      'Tilbehørene er permanente, uten tidsfrist eller press om å samle dem.',
    ],
    intro: [
      'Halloween har kommet til Numblop med fire nye måter å gi figuren et skummelt og søtt uttrykk på.',
      'Oppdateringen legger til en heksehatt, briller med flaggermusvinger, et gresskarkjede og gresskartøfler. Alt blir permanent i spillet og kan låses opp i barnets eget tempo.',
    ],
    sections: [
      {
        heading: 'Fire nye måter å kle opp Numblop på',
        blocks: [
          {
            list: [
              'Heksehatt — den klassiske spisse hatten i Numblop-stil.',
              'Flaggermusbriller — skumle vinger til en leken forkledning.',
              'Gresskarkjede — en liten lykt som kan brukes hele året.',
              'Gresskartøfler — et matchende par som fullfører antrekket.',
            ],
          },
          {
            p: 'Bruk hele gresskarantrekket eller kombiner Halloween-delene med tilbehør fra garderoben. Kosmetikk endrer verken vanskelighetsgrad eller læringsfremgang; det lar bare barnet gjøre Numblop til sin egen.',
          },
        ],
      },
      {
        heading: 'Permanent, ikke tidsbegrenset',
        blocks: [
          {
            p: 'Halloween-samlingen forsvinner ikke når oktober er over. Det finnes ingen nedtelling eller frykt for å gå glipp av noe. Barn kan fortsette å øve, tjene mynter og låse opp delene når de er klare.',
          },
        ],
      },
      {
        heading: 'Øv, tjen mynter og tilpass',
        blocks: [
          {
            p: 'Numblop tilpasser gangetabelløvelsene til barnets fremgang og tar opp vanskelige regnestykker oftere. Fullført øving gir mynter til kosmetiske belønninger, uten reklame eller kjøp i appen.',
          },
        ],
      },
    ],
    video: {
      title: 'Se traileren for Halloween-tilbehørene',
      playLabel: 'Spill av Numblops Halloween-trailer',
      privacyNote: 'YouTube lastes først når du trykker på spill av.',
      watchLabel: 'Se på YouTube',
    },
  }),
  pl: article({
    slug: 'akcesoria-halloween',
    title: 'Halloween zawitało do Numblop: poznaj cztery nowe akcesoria',
    metaTitle: 'Cztery nowe akcesoria halloweenowe w Numblop',
    metaDescription:
      'Poznaj cztery stałe akcesoria halloweenowe w Numblop: kapelusz czarownicy, nietoperzowe okulary, dyniowy naszyjnik i kapcie.',
    linkLabel: 'Akcesoria halloweenowe',
    excerpt:
      'Kapelusz czarownicy, nietoperzowe okulary, dyniowy naszyjnik i kapcie zostają w Numblop na stałe.',
    takeaways: [
      'Można już odblokować cztery nowe akcesoria halloweenowe.',
      'Dzieci zdobywają monety, ćwicząc tabliczkę mnożenia, i same wybierają, na co je wydać.',
      'Akcesoria są stałe — nie ma terminu ani presji, by zebrać je szybko.',
    ],
    intro: [
      'Halloween zawitało do Numblop i przyniosło cztery nowe sposoby na uroczo straszny wygląd postaci.',
      'Aktualizacja dodaje kapelusz czarownicy, okulary ze skrzydłami nietoperza, dyniowy naszyjnik i dyniowe kapcie. Wszystkie zostają w grze na stałe i można je odblokować we własnym tempie.',
    ],
    sections: [
      {
        heading: 'Cztery nowe sposoby na ubranie Numblopa',
        blocks: [
          {
            list: [
              'Kapelusz czarownicy — klasyczny spiczasty kapelusz w stylu Numblop.',
              'Nietoperzowe okulary — straszne skrzydła do zabawnego przebrania.',
              'Dyniowy naszyjnik — mała latarenka do noszenia przez cały rok.',
              'Dyniowe kapcie — dopasowana para, która dopełnia strój.',
            ],
          },
          {
            p: 'Załóż cały dyniowy zestaw albo połącz nowe elementy z posiadanymi dodatkami. Kosmetyki nie zmieniają trudności ani postępów w nauce — pozwalają jedynie stworzyć własnego Numblopa.',
          },
        ],
      },
      {
        heading: 'Na stałe, nie na ograniczony czas',
        blocks: [
          {
            p: 'Kolekcja halloweenowa nie zniknie po październiku. Nie ma odliczania ani obawy, że coś przepadnie. Dzieci mogą ćwiczyć, zdobywać monety i odblokowywać przedmioty, kiedy będą gotowe.',
          },
        ],
      },
      {
        heading: 'Ćwicz, zdobywaj monety i personalizuj',
        blocks: [
          {
            p: 'Numblop dopasowuje ćwiczenia z mnożenia do postępów dziecka i częściej powtarza trudniejsze działania. Ukończone ćwiczenia dają monety na kosmetyczne nagrody — bez reklam i zakupów w aplikacji.',
          },
        ],
      },
    ],
    video: {
      title: 'Obejrzyj zwiastun akcesoriów halloweenowych',
      playLabel: 'Odtwórz halloweenowy zwiastun Numblop',
      privacyNote: 'YouTube załaduje się dopiero po naciśnięciu przycisku odtwarzania.',
      watchLabel: 'Obejrzyj na YouTube',
    },
  }),
  sv: article({
    slug: 'halloween-accessoarer',
    title: 'Halloween har kommit till Numblop: fyra nya accessoarer',
    metaTitle: 'Fyra nya Halloween-accessoarer i Numblop',
    metaDescription:
      'Upptäck fyra permanenta Halloween-accessoarer i Numblop: häxhatt, fladdermusglasögon, pumpahalsband och pumpatofflor.',
    linkLabel: 'Halloween-accessoarer',
    excerpt:
      'Häxhatt, fladdermusglasögon, pumpahalsband och pumpatofflor stannar permanent i Numblop.',
    takeaways: [
      'Fyra nya Halloween-accessoarer går nu att låsa upp.',
      'Barn tjänar mynt genom att öva multiplikation och väljer själva hur de används.',
      'Accessoarerna är permanenta, utan tidsgräns eller press att samla dem.',
    ],
    intro: [
      'Halloween har kommit till Numblop med fyra nya sätt att ge figuren en lagom kuslig och söt stil.',
      'Uppdateringen innehåller en häxhatt, glasögon med fladdermusvingar, ett pumpahalsband och pumpatofflor. Alla stannar i spelet och kan låsas upp i barnets egen takt.',
    ],
    sections: [
      {
        heading: 'Fyra nya sätt att klä din Numblop',
        blocks: [
          {
            list: [
              'Häxhatt — den klassiska spetsiga hatten i Numblop-stil.',
              'Fladdermusglasögon — kusliga vingar för en lekfull förklädnad.',
              'Pumpahalsband — en liten lykta att bära året runt.',
              'Pumpatofflor — ett matchande par som fullbordar stilen.',
            ],
          },
          {
            p: 'Bär hela pumpaklädseln eller blanda Halloween-delarna med accessoarer som redan finns i garderoben. Kosmetik påverkar varken svårighetsgrad eller lärande, utan gör bara Numblop mer personlig.',
          },
        ],
      },
      {
        heading: 'Permanenta, inte tidsbegränsade',
        blocks: [
          {
            p: 'Halloween-samlingen försvinner inte när oktober är slut. Ingen nedräkning och ingen rädsla att missa något. Barn kan fortsätta öva, tjäna mynt och låsa upp delarna när de vill.',
          },
        ],
      },
      {
        heading: 'Öva, tjäna mynt och anpassa',
        blocks: [
          {
            p: 'Numblop anpassar multiplikationsövningen efter barnets framsteg och återkommer oftare till svåra tal. Avslutad övning ger mynt till kosmetiska belöningar, utan reklam eller köp i appen.',
          },
        ],
      },
    ],
    video: {
      title: 'Se trailern för Halloween-accessoarerna',
      playLabel: 'Spela Numblops Halloween-trailer',
      privacyNote: 'YouTube laddas först när du trycker på spela.',
      watchLabel: 'Titta på YouTube',
    },
  }),
  'pt-BR': article({
    slug: 'acessorios-de-halloween',
    title: 'O Halloween chegou ao Numblop: conheça quatro acessórios novos',
    metaTitle: 'Quatro novos acessórios de Halloween no Numblop',
    metaDescription:
      'Conheça quatro acessórios permanentes de Halloween no Numblop: chapéu de bruxa, óculos de morcego, colar e pantufas de abóbora.',
    linkLabel: 'Acessórios de Halloween',
    excerpt:
      'Chapéu de bruxa, óculos de morcego, colar e pantufas de abóbora chegaram para ficar.',
    takeaways: [
      'Quatro novos acessórios de Halloween já podem ser desbloqueados.',
      'As crianças ganham moedas praticando a tabuada e escolhem como gastá-las.',
      'Os acessórios são permanentes, sem prazo nem pressão para colecioná-los.',
    ],
    intro: [
      'O Halloween chegou ao Numblop com quatro novas maneiras de deixar o personagem assustadoramente fofo.',
      'A atualização traz um chapéu de bruxa, óculos com asas de morcego, um colar de abóbora e pantufas de abóbora. Todos ficam no jogo permanentemente e podem ser desbloqueados no ritmo de cada criança.',
    ],
    sections: [
      {
        heading: 'Quatro novas maneiras de vestir seu Numblop',
        blocks: [
          {
            list: [
              'Chapéu de bruxa — o clássico chapéu pontudo no estilo Numblop.',
              'Óculos de morcego — asas assustadoras para um disfarce divertido.',
              'Colar de abóbora — uma pequena lanterna para usar o ano inteiro.',
              'Pantufas de abóbora — um par combinando para completar o visual.',
            ],
          },
          {
            p: 'Use o conjunto completo de abóbora ou combine as peças de Halloween com acessórios já desbloqueados. Os cosméticos não alteram a dificuldade nem o progresso; apenas deixam cada criança criar seu próprio Numblop.',
          },
        ],
      },
      {
        heading: 'Permanentes, não por tempo limitado',
        blocks: [
          {
            p: 'A coleção de Halloween não desaparece quando outubro termina. Não há contagem regressiva nem medo de perder algo. As crianças podem continuar praticando, ganhando moedas e desbloqueando os itens quando quiserem.',
          },
        ],
      },
      {
        heading: 'Pratique, ganhe moedas e personalize',
        blocks: [
          {
            p: 'O Numblop adapta a prática da multiplicação ao progresso da criança e repete com mais frequência as contas difíceis. A prática concluída rende moedas para recompensas cosméticas, sem anúncios nem compras no aplicativo.',
          },
        ],
      },
    ],
    video: {
      title: 'Assista ao trailer dos acessórios de Halloween',
      playLabel: 'Reproduzir o trailer de Halloween do Numblop',
      privacyNote: 'O YouTube só é carregado depois que você aperta o play.',
      watchLabel: 'Assistir no YouTube',
    },
  }),
  'pt-PT': article({
    slug: 'acessorios-de-halloween',
    title: 'O Halloween chegou ao Numblop: conheça quatro acessórios novos',
    metaTitle: 'Quatro novos acessórios de Halloween no Numblop',
    metaDescription:
      'Conheça quatro acessórios permanentes de Halloween no Numblop: chapéu de bruxa, óculos de morcego, colar e chinelos de abóbora.',
    linkLabel: 'Acessórios de Halloween',
    excerpt:
      'Chapéu de bruxa, óculos de morcego, colar e chinelos de abóbora chegaram para ficar.',
    takeaways: [
      'Quatro novos acessórios de Halloween já podem ser desbloqueados.',
      'As crianças ganham moedas ao praticar a tabuada e escolhem como gastá-las.',
      'Os acessórios são permanentes, sem prazo nem pressão para os colecionar.',
    ],
    intro: [
      'O Halloween chegou ao Numblop com quatro novas formas de dar à personagem um visual assustadoramente querido.',
      'A atualização acrescenta um chapéu de bruxa, óculos com asas de morcego, um colar de abóbora e chinelos de abóbora. Todos ficam no jogo permanentemente e podem ser desbloqueados ao ritmo de cada criança.',
    ],
    sections: [
      {
        heading: 'Quatro novas formas de vestir o Numblop',
        blocks: [
          {
            list: [
              'Chapéu de bruxa — o clássico chapéu pontiagudo ao estilo Numblop.',
              'Óculos de morcego — asas assustadoras para um disfarce divertido.',
              'Colar de abóbora — uma pequena lanterna para usar durante todo o ano.',
              'Chinelos de abóbora — um par a combinar para completar o visual.',
            ],
          },
          {
            p: 'Use o conjunto completo de abóbora ou combine as peças de Halloween com acessórios já desbloqueados. Os cosméticos não alteram a dificuldade nem o progresso; permitem apenas que cada criança personalize o seu Numblop.',
          },
        ],
      },
      {
        heading: 'Permanentes, não por tempo limitado',
        blocks: [
          {
            p: 'A coleção de Halloween não desaparece quando outubro termina. Não há contagem decrescente nem receio de perder alguma coisa. As crianças podem continuar a praticar, ganhar moedas e desbloquear os artigos quando quiserem.',
          },
        ],
      },
      {
        heading: 'Praticar, ganhar moedas e personalizar',
        blocks: [
          {
            p: 'O Numblop adapta a prática da multiplicação ao progresso da criança e repete com mais frequência as contas difíceis. A prática concluída rende moedas para recompensas cosméticas, sem anúncios nem compras na aplicação.',
          },
        ],
      },
    ],
    video: {
      title: 'Veja o trailer dos acessórios de Halloween',
      playLabel: 'Reproduzir o trailer de Halloween do Numblop',
      privacyNote: 'O YouTube só é carregado depois de premir reproduzir.',
      watchLabel: 'Ver no YouTube',
    },
  }),
  it: article({
    slug: 'accessori-di-halloween',
    title: 'Halloween è arrivato in Numblop: quattro nuovi accessori',
    metaTitle: 'Quattro nuovi accessori di Halloween in Numblop',
    metaDescription:
      'Scopri quattro accessori permanenti di Halloween in Numblop: cappello da strega, occhiali da pipistrello, collana e pantofole zucca.',
    linkLabel: 'Accessori di Halloween',
    excerpt:
      'Cappello da strega, occhiali da pipistrello, collana e pantofole zucca restano per sempre in Numblop.',
    takeaways: [
      'Ora si possono sbloccare quattro nuovi accessori di Halloween.',
      'I bambini guadagnano monete esercitandosi con le tabelline e scelgono come spenderle.',
      'Gli accessori sono permanenti: nessuna scadenza e nessuna pressione per collezionarli.',
    ],
    intro: [
      'Halloween è arrivato in Numblop con quattro nuovi modi per dare al personaggio un aspetto teneramente spaventoso.',
      'L’aggiornamento aggiunge un cappello da strega, occhiali con ali da pipistrello, una collana zucca e pantofole zucca. Tutti resteranno nel gioco e potranno essere sbloccati con i propri tempi.',
    ],
    sections: [
      {
        heading: 'Quattro nuovi modi per vestire il tuo Numblop',
        blocks: [
          {
            list: [
              'Cappello da strega — il classico cappello a punta in stile Numblop.',
              'Occhiali da pipistrello — ali spaventose per un travestimento giocoso.',
              'Collana zucca — una piccola lanterna da indossare tutto l’anno.',
              'Pantofole zucca — un paio coordinato per completare il look.',
            ],
          },
          {
            p: 'Indossa l’intero completo zucca oppure abbina i pezzi di Halloween agli accessori già sbloccati. Gli elementi cosmetici non cambiano la difficoltà o i progressi: permettono solo di rendere unico il proprio Numblop.',
          },
        ],
      },
      {
        heading: 'Permanenti, non a tempo limitato',
        blocks: [
          {
            p: 'La collezione di Halloween non scomparirà alla fine di ottobre. Nessun conto alla rovescia e nessuna paura di perdere qualcosa. I bambini possono continuare a esercitarsi, guadagnare monete e sbloccare gli oggetti quando vogliono.',
          },
        ],
      },
      {
        heading: 'Esercitati, guadagna monete e personalizza',
        blocks: [
          {
            p: 'Numblop adatta gli esercizi di moltiplicazione ai progressi del bambino e ripropone più spesso i calcoli difficili. Gli esercizi completati danno monete per ricompense cosmetiche, senza pubblicità o acquisti in-app.',
          },
        ],
      },
    ],
    video: {
      title: 'Guarda il trailer degli accessori di Halloween',
      playLabel: 'Riproduci il trailer di Halloween di Numblop',
      privacyNote: 'YouTube si carica solo dopo aver premuto Riproduci.',
      watchLabel: 'Guarda su YouTube',
    },
  }),
  da: article({
    slug: 'halloween-tilbehor',
    title: 'Halloween er kommet til Numblop: fire nye accessories',
    metaTitle: 'Fire nye Halloween-accessories i Numblop',
    metaDescription:
      'Se fire permanente Halloween-accessories i Numblop: heksehat, flagermusbriller, græskarhalskæde og græskartøfler.',
    linkLabel: 'Halloween-accessories',
    excerpt:
      'Heksehat, flagermusbriller, græskarhalskæde og græskartøfler bliver permanent i Numblop.',
    takeaways: [
      'Fire nye Halloween-accessories kan nu låses op.',
      'Børn tjener mønter ved at øve gangetabeller og vælger selv, hvad de bruges på.',
      'Delene er permanente, så der er ingen tidsfrist eller pres for at samle dem.',
    ],
    intro: [
      'Halloween er kommet til Numblop med fire nye måder at give figuren et uhyggeligt nuttet udseende på.',
      'Opdateringen tilføjer en heksehat, briller med flagermusvinger, en græskarhalskæde og græskartøfler. Alle bliver i spillet og kan låses op i barnets eget tempo.',
    ],
    sections: [
      {
        heading: 'Fire nye måder at klæde Numblop på',
        blocks: [
          {
            list: [
              'Heksehat — den klassiske spidse hat i Numblop-stil.',
              'Flagermusbriller — uhyggelige vinger til en sjov forklædning.',
              'Græskarhalskæde — en lille lygte, der kan bæres hele året.',
              'Græskartøfler — et matchende par, der fuldender sættet.',
            ],
          },
          {
            p: 'Brug hele græskarsættet, eller kombiner Halloween-delene med tilbehør fra garderoben. Kosmetik ændrer hverken sværhedsgrad eller læringsfremskridt; det gør bare barnets Numblop personlig.',
          },
        ],
      },
      {
        heading: 'Permanent, ikke tidsbegrænset',
        blocks: [
          {
            p: 'Halloween-samlingen forsvinder ikke efter oktober. Ingen nedtælling og ingen frygt for at gå glip af noget. Børn kan fortsætte med at øve, tjene mønter og låse delene op, når de er klar.',
          },
        ],
      },
      {
        heading: 'Øv, tjen mønter og tilpas',
        blocks: [
          {
            p: 'Numblop tilpasser gangeøvelserne til barnets fremskridt og gentager svære regnestykker oftere. Gennemført øvelse giver mønter til kosmetiske belønninger uden reklamer eller køb i appen.',
          },
        ],
      },
    ],
    video: {
      title: 'Se traileren til Halloween-accessories',
      playLabel: 'Afspil Numblops Halloween-trailer',
      privacyNote: 'YouTube indlæses først, når du trykker på afspil.',
      watchLabel: 'Se på YouTube',
    },
  }),
  nl: article({
    slug: 'halloween-accessoires',
    title: 'Halloween is aangekomen in Numblop: vier nieuwe accessoires',
    metaTitle: 'Vier nieuwe Halloween-accessoires in Numblop',
    metaDescription:
      'Ontdek vier permanente Halloween-accessoires in Numblop: heksenhoed, vleermuisbril, pompoenketting en pompoensloffen.',
    linkLabel: 'Halloween-accessoires',
    excerpt:
      'Heksenhoed, vleermuisbril, pompoenketting en pompoensloffen blijven voorgoed in Numblop.',
    takeaways: [
      'Er zijn vier nieuwe Halloween-accessoires om vrij te spelen.',
      'Kinderen verdienen munten door tafels te oefenen en kiezen zelf waaraan ze die uitgeven.',
      'De accessoires blijven permanent, dus er is geen deadline of verzameldruk.',
    ],
    intro: [
      'Halloween is aangekomen in Numblop en brengt vier nieuwe manieren om je personage een griezelig-schattige uitstraling te geven.',
      'De update voegt een heksenhoed, een bril met vleermuisvleugels, een pompoenketting en pompoensloffen toe. Alles blijft permanent in het spel en kan in het eigen tempo worden vrijgespeeld.',
    ],
    sections: [
      {
        heading: 'Vier nieuwe manieren om je Numblop aan te kleden',
        blocks: [
          {
            list: [
              'Heksenhoed — de klassieke puntmuts in Numblop-stijl.',
              'Vleermuisbril — griezelige vleugels voor een speelse vermomming.',
              'Pompoenketting — een kleine lantaarn voor het hele jaar.',
              'Pompoensloffen — een bijpassend paar dat de outfit afmaakt.',
            ],
          },
          {
            p: 'Draag de volledige pompoenoutfit of combineer Halloween-onderdelen met accessoires uit de kledingkast. Cosmetica verandert de moeilijkheid of leerprogressie niet; het maakt de eigen Numblop alleen persoonlijker.',
          },
        ],
      },
      {
        heading: 'Permanent, niet tijdelijk',
        blocks: [
          {
            p: 'De Halloween-collectie verdwijnt niet na oktober. Geen aftelklok en geen angst om iets mis te lopen. Kinderen kunnen blijven oefenen, munten verdienen en de onderdelen vrijspelen wanneer ze eraan toe zijn.',
          },
        ],
      },
      {
        heading: 'Oefen, verdien munten en pas aan',
        blocks: [
          {
            p: 'Numblop past de tafeloefeningen aan de voortgang aan en laat moeilijke sommen vaker terugkomen. Voltooide oefeningen leveren munten op voor cosmetische beloningen, zonder advertenties of in-appaankopen.',
          },
        ],
      },
    ],
    video: {
      title: 'Bekijk de trailer van de Halloween-accessoires',
      playLabel: 'Speel de Halloween-trailer van Numblop af',
      privacyNote: 'YouTube wordt pas geladen nadat je op afspelen drukt.',
      watchLabel: 'Bekijken op YouTube',
    },
  }),
  ja: article({
    slug: 'halloween-accessories',
    title: 'Numblopにハロウィン到来！4つの新アクセサリー',
    metaTitle: 'Numblopに4つの新しいハロウィンアクセサリー',
    metaDescription:
      '魔女の帽子、コウモリ羽メガネ、カボチャのネックレス、カボチャのスリッパ。Numblopに追加された4つの常設アクセサリーを紹介します。',
    linkLabel: 'ハロウィンアクセサリー',
    excerpt:
      '魔女の帽子、コウモリ羽メガネ、カボチャのネックレスとスリッパが常設アイテムになりました。',
    takeaways: [
      '4つの新しいハロウィンアクセサリーをアンロックできます。',
      'かけ算を練習してコインを集め、好きなアイテムと交換できます。',
      'すべて常設アイテムなので、期限を気にせず自分のペースで集められます。',
    ],
    intro: [
      'Numblopにハロウィンがやってきました。ちょっぴりこわくてかわいい姿に着せ替えられる、4つの新アクセサリーが登場です。',
      '魔女の帽子、コウモリの羽が付いたメガネ、カボチャのネックレス、カボチャのスリッパを追加しました。どれも期間限定ではなく、いつでも自分のペースでアンロックできます。',
    ],
    sections: [
      {
        heading: 'Numblopを飾る4つの新アイテム',
        blocks: [
          {
            list: [
              '魔女の帽子 — Numblopらしくアレンジした定番のとんがり帽子。',
              'コウモリ羽メガネ — 遊び心のあるハロウィン変装。',
              'カボチャのネックレス — 一年中身につけられる小さなランタン。',
              'カボチャのスリッパ — コーディネートを仕上げるおそろいの一足。',
            ],
          },
          {
            p: 'カボチャの全身コーデにしたり、これまでのアクセサリーと自由に組み合わせたりできます。アクセサリーは難易度や学習の進み方には影響せず、自分だけのNumblopを作るためのアイテムです。',
          },
        ],
      },
      {
        heading: '期間限定ではなく、ずっと遊べます',
        blocks: [
          {
            p: 'ハロウィンコレクションは10月が終わっても消えません。カウントダウンも取り逃す心配もありません。練習してコインを集め、好きなときにゆっくりアンロックできます。',
          },
        ],
      },
      {
        heading: '練習して、コインを集めて、着せ替えよう',
        blocks: [
          {
            p: 'Numblopは子どもの進み具合に合わせてかけ算練習を調整し、苦手な問題をより多く出します。練習を終えるとアクセサリー用のコインを獲得できます。広告やアプリ内課金はありません。',
          },
        ],
      },
    ],
    video: {
      title: 'ハロウィンアクセサリーのトレーラーを見る',
      playLabel: 'Numblopのハロウィントレーラーを再生',
      privacyNote: '再生ボタンを押すまでYouTubeは読み込まれません。',
      watchLabel: 'YouTubeで見る',
    },
  }),
  ko: article({
    slug: 'halloween-accessories',
    title: 'Numblop에 핼러윈이 찾아왔어요: 새로운 액세서리 4종',
    metaTitle: 'Numblop의 새로운 핼러윈 액세서리 4종',
    metaDescription:
      '마녀 모자, 박쥐 날개 안경, 호박 목걸이와 호박 슬리퍼. Numblop에 영구 추가된 핼러윈 액세서리 4종을 만나 보세요.',
    linkLabel: '핼러윈 액세서리',
    excerpt:
      '마녀 모자, 박쥐 안경, 호박 목걸이와 호박 슬리퍼가 Numblop에 영구 추가됐어요.',
    takeaways: [
      '새로운 핼러윈 액세서리 4종을 잠금 해제할 수 있어요.',
      '구구단을 연습해 코인을 얻고 원하는 아이템에 사용할 수 있어요.',
      '모든 액세서리는 영구 아이템이라 마감이나 수집 압박이 없어요.',
    ],
    intro: [
      'Numblop에 핼러윈이 찾아왔어요. 캐릭터를 으스스하면서도 귀엽게 꾸밀 수 있는 새로운 액세서리 4종을 소개합니다.',
      '마녀 모자, 박쥐 날개 안경, 호박 목걸이, 호박 슬리퍼가 추가됐어요. 모두 기간 한정이 아닌 영구 아이템이며 아이가 자기 속도에 맞춰 잠금 해제할 수 있습니다.',
    ],
    sections: [
      {
        heading: 'Numblop을 꾸미는 새로운 방법 4가지',
        blocks: [
          {
            list: [
              '마녀 모자 — Numblop 스타일로 만든 뾰족 모자.',
              '박쥐 날개 안경 — 장난스럽고 으스스한 변장 아이템.',
              '호박 목걸이 — 일 년 내내 착용할 수 있는 작은 랜턴.',
              '호박 슬리퍼 — 호박 코디를 완성하는 한 쌍.',
            ],
          },
          {
            p: '호박 세트를 모두 착용하거나 기존 옷장의 액세서리와 자유롭게 조합해 보세요. 꾸미기 아이템은 난이도나 학습 진도에 영향을 주지 않으며, 나만의 Numblop을 만드는 즐거움을 더합니다.',
          },
        ],
      },
      {
        heading: '기간 한정이 아닌 영구 아이템',
        blocks: [
          {
            p: '핼러윈 컬렉션은 10월이 끝나도 사라지지 않아요. 카운트다운도, 놓칠 걱정도 없습니다. 계속 연습하고 코인을 모아 원할 때 천천히 잠금 해제할 수 있어요.',
          },
        ],
      },
      {
        heading: '연습하고, 코인을 얻고, 꾸며 보세요',
        blocks: [
          {
            p: 'Numblop은 아이의 진도에 맞춰 구구단 연습을 조절하고 어려운 문제를 더 자주 다시 보여 줍니다. 연습을 마치면 꾸미기 보상에 쓸 코인을 얻으며, 광고나 앱 내 구매는 없습니다.',
          },
        ],
      },
    ],
    video: {
      title: '핼러윈 액세서리 트레일러 보기',
      playLabel: 'Numblop 핼러윈 트레일러 재생',
      privacyNote: '재생 버튼을 누른 뒤에만 YouTube가 로드됩니다.',
      watchLabel: 'YouTube에서 보기',
    },
  }),
  tr: article({
    slug: 'cadilar-bayrami-aksesuarlari',
    title: 'Cadılar Bayramı Numblop’a geldi: dört yeni aksesuar',
    metaTitle: 'Numblop’ta dört yeni Cadılar Bayramı aksesuarı',
    metaDescription:
      'Numblop’taki dört kalıcı Cadılar Bayramı aksesuarını keşfedin: cadı şapkası, yarasa gözlüğü, balkabağı kolye ve terlikler.',
    linkLabel: 'Cadılar Bayramı aksesuarları',
    excerpt:
      'Cadı şapkası, yarasa gözlüğü, balkabağı kolye ve terlikler Numblop’ta kalıcı olarak yerini aldı.',
    takeaways: [
      'Dört yeni Cadılar Bayramı aksesuarının kilidi artık açılabilir.',
      'Çocuklar çarpım tablosu çalışarak jeton kazanır ve nasıl harcayacaklarına karar verir.',
      'Aksesuarlar kalıcıdır; toplamak için süre veya baskı yoktur.',
    ],
    intro: [
      'Cadılar Bayramı, karaktere sevimli ve ürkütücü bir görünüm kazandıran dört yeni aksesuarla Numblop’a geldi.',
      'Güncelleme cadı şapkası, yarasa kanatlı gözlük, balkabağı kolye ve balkabağı terlikler ekliyor. Hepsi oyunda kalıcı ve çocuklar kendi hızlarında kilitlerini açabilir.',
    ],
    sections: [
      {
        heading: 'Numblop’u giydirmenin dört yeni yolu',
        blocks: [
          {
            list: [
              'Cadı şapkası — Numblop dokunuşuyla klasik sivri şapka.',
              'Yarasa gözlüğü — eğlenceli bir kılık için ürkütücü kanatlar.',
              'Balkabağı kolye — yıl boyu takılabilecek küçük bir fener.',
              'Balkabağı terlikler — görünümü tamamlayan uyumlu bir çift.',
            ],
          },
          {
            p: 'Balkabağı takımının tamamını giyin veya Cadılar Bayramı parçalarını gardıroptaki aksesuarlarla karıştırın. Kozmetik ürünler zorluğu ya da öğrenme ilerlemesini değiştirmez; yalnızca Numblop’u kişiselleştirir.',
          },
        ],
      },
      {
        heading: 'Süreli değil, kalıcı',
        blocks: [
          {
            p: 'Cadılar Bayramı koleksiyonu ekim bitince kaybolmayacak. Geri sayım ve kaçırma korkusu yok. Çocuklar çalışmaya, jeton kazanmaya ve hazır olduklarında parçaları açmaya devam edebilir.',
          },
        ],
      },
      {
        heading: 'Çalış, jeton kazan ve kişiselleştir',
        blocks: [
          {
            p: 'Numblop çarpma alıştırmalarını çocuğun ilerlemesine uyarlar ve zor işlemleri daha sık tekrarlar. Tamamlanan çalışmalar kozmetik ödüller için jeton kazandırır; reklam ve uygulama içi satın alma yoktur.',
          },
        ],
      },
    ],
    video: {
      title: 'Cadılar Bayramı aksesuarları fragmanını izle',
      playLabel: 'Numblop Cadılar Bayramı fragmanını oynat',
      privacyNote: 'YouTube yalnızca oynat düğmesine bastığınızda yüklenir.',
      watchLabel: 'YouTube’da izle',
    },
  }),
  vi: article({
    slug: 'phu-kien-halloween',
    title: 'Halloween đã đến Numblop: bốn phụ kiện mới',
    metaTitle: 'Bốn phụ kiện Halloween mới trong Numblop',
    metaDescription:
      'Khám phá bốn phụ kiện Halloween vĩnh viễn trong Numblop: mũ phù thủy, kính cánh dơi, vòng cổ và dép bí ngô.',
    linkLabel: 'Phụ kiện Halloween',
    excerpt:
      'Mũ phù thủy, kính cánh dơi, vòng cổ và dép bí ngô đã được thêm vĩnh viễn vào Numblop.',
    takeaways: [
      'Bốn phụ kiện Halloween mới hiện đã có thể mở khóa.',
      'Trẻ kiếm xu khi luyện bảng cửu chương và tự chọn cách sử dụng.',
      'Các phụ kiện là bổ sung vĩnh viễn, không có hạn chót hay áp lực sưu tập.',
    ],
    intro: [
      'Halloween đã đến Numblop với bốn cách mới để tạo cho nhân vật vẻ ngoài vừa đáng yêu vừa ma quái.',
      'Bản cập nhật thêm mũ phù thủy, kính cánh dơi, vòng cổ bí ngô và dép bí ngô. Tất cả đều ở lại trong trò chơi và có thể được mở khóa theo nhịp độ riêng của mỗi trẻ.',
    ],
    sections: [
      {
        heading: 'Bốn cách mới để trang điểm cho Numblop',
        blocks: [
          {
            list: [
              'Mũ phù thủy — chiếc mũ nhọn cổ điển theo phong cách Numblop.',
              'Kính cánh dơi — đôi cánh ma quái cho một màn hóa trang vui nhộn.',
              'Vòng cổ bí ngô — chiếc đèn nhỏ có thể đeo quanh năm.',
              'Dép bí ngô — một đôi đồng bộ để hoàn thiện diện mạo.',
            ],
          },
          {
            p: 'Mặc trọn bộ bí ngô hoặc kết hợp các món Halloween với phụ kiện đã có. Vật phẩm trang trí không thay đổi độ khó hay tiến độ học tập; chúng chỉ giúp trẻ tạo ra Numblop của riêng mình.',
          },
        ],
      },
      {
        heading: 'Vĩnh viễn, không giới hạn thời gian',
        blocks: [
          {
            p: 'Bộ sưu tập Halloween không biến mất khi tháng Mười kết thúc. Không có đếm ngược và không sợ bỏ lỡ. Trẻ có thể tiếp tục luyện tập, kiếm xu và mở khóa vật phẩm khi sẵn sàng.',
          },
        ],
      },
      {
        heading: 'Luyện tập, kiếm xu và tùy chỉnh',
        blocks: [
          {
            p: 'Numblop điều chỉnh bài luyện phép nhân theo tiến độ của trẻ và đưa các phép tính khó trở lại thường xuyên hơn. Hoàn thành luyện tập sẽ nhận xu cho phần thưởng trang trí, không có quảng cáo hay mua hàng trong ứng dụng.',
          },
        ],
      },
    ],
    video: {
      title: 'Xem trailer phụ kiện Halloween',
      playLabel: 'Phát trailer Halloween của Numblop',
      privacyNote: 'YouTube chỉ tải sau khi bạn nhấn phát.',
      watchLabel: 'Xem trên YouTube',
    },
  }),
  id: article({
    slug: 'aksesori-halloween',
    title: 'Halloween telah tiba di Numblop: empat aksesori baru',
    metaTitle: 'Empat aksesori Halloween baru di Numblop',
    metaDescription:
      'Temukan empat aksesori Halloween permanen di Numblop: topi penyihir, kacamata kelelawar, kalung dan sandal labu.',
    linkLabel: 'Aksesori Halloween',
    excerpt:
      'Topi penyihir, kacamata kelelawar, kalung dan sandal labu hadir permanen di Numblop.',
    takeaways: [
      'Empat aksesori Halloween baru kini dapat dibuka.',
      'Anak memperoleh koin dengan berlatih perkalian dan memilih sendiri cara menggunakannya.',
      'Aksesori ini permanen, tanpa batas waktu atau tekanan untuk mengoleksinya.',
    ],
    intro: [
      'Halloween telah tiba di Numblop dengan empat cara baru untuk memberi karakter tampilan seram sekaligus menggemaskan.',
      'Pembaruan ini menambahkan topi penyihir, kacamata bersayap kelelawar, kalung labu, dan sandal labu. Semuanya tetap tersedia permanen dan dapat dibuka sesuai kecepatan masing-masing anak.',
    ],
    sections: [
      {
        heading: 'Empat cara baru mendandani Numblop',
        blocks: [
          {
            list: [
              'Topi penyihir — topi runcing klasik dengan gaya Numblop.',
              'Kacamata kelelawar — sayap seram untuk penyamaran yang ceria.',
              'Kalung labu — lentera kecil yang bisa dipakai sepanjang tahun.',
              'Sandal labu — pasangan serasi untuk melengkapi penampilan.',
            ],
          },
          {
            p: 'Kenakan set labu lengkap atau padukan bagian Halloween dengan aksesori yang sudah dimiliki. Kosmetik tidak mengubah tingkat kesulitan atau kemajuan belajar; fungsinya hanya membuat Numblop terasa lebih personal.',
          },
        ],
      },
      {
        heading: 'Permanen, bukan berbatas waktu',
        blocks: [
          {
            p: 'Koleksi Halloween tidak akan hilang setelah Oktober berakhir. Tidak ada hitung mundur dan tidak perlu takut ketinggalan. Anak dapat terus berlatih, memperoleh koin, dan membuka item saat siap.',
          },
        ],
      },
      {
        heading: 'Berlatih, dapatkan koin, dan sesuaikan',
        blocks: [
          {
            p: 'Numblop menyesuaikan latihan perkalian dengan kemajuan anak dan mengulang soal sulit lebih sering. Latihan yang selesai memberikan koin untuk hadiah kosmetik, tanpa iklan atau pembelian dalam aplikasi.',
          },
        ],
      },
    ],
    video: {
      title: 'Tonton trailer aksesori Halloween',
      playLabel: 'Putar trailer Halloween Numblop',
      privacyNote: 'YouTube baru dimuat setelah Anda menekan putar.',
      watchLabel: 'Tonton di YouTube',
    },
  }),
  hu: article({
    slug: 'halloween-kiegeszitok',
    title: 'Megérkezett a Halloween a Numblopba: négy új kiegészítő',
    metaTitle: 'Négy új halloweeni kiegészítő a Numblopban',
    metaDescription:
      'Ismerd meg a Numblop négy állandó halloweeni kiegészítőjét: boszorkánykalap, denevérszárnyas szemüveg, töklánc és tökpapucs.',
    linkLabel: 'Halloweeni kiegészítők',
    excerpt:
      'A boszorkánykalap, a denevérszemüveg, a töklánc és a tökpapucs végleg beköltözött a Numblopba.',
    takeaways: [
      'Négy új halloweeni kiegészítő oldható fel.',
      'A gyerekek a szorzótábla gyakorlásával érméket szereznek, és maguk döntik el, mire költik.',
      'A kiegészítők állandóak, így nincs határidő vagy gyűjtési kényszer.',
    ],
    intro: [
      'Megérkezett a Halloween a Numblopba, és négy új lehetőséget hozott a figura ijesztően aranyos átalakításához.',
      'A frissítés boszorkánykalapot, denevérszárnyas szemüveget, töknyakláncot és tökpapucsot ad a játékhoz. Mindegyik végleg elérhető marad, és a gyerekek a saját tempójukban oldhatják fel őket.',
    ],
    sections: [
      {
        heading: 'Négy új mód a Numblop felöltöztetésére',
        blocks: [
          {
            list: [
              'Boszorkánykalap — klasszikus csúcsos kalap Numblop módra.',
              'Denevérszárnyas szemüveg — játékosan ijesztő álca.',
              'Töknyaklánc — apró lámpás, amely egész évben viselhető.',
              'Tökpapucs — összeillő pár a teljes megjelenéshez.',
            ],
          },
          {
            p: 'Viseld a teljes tökszettet, vagy kombináld a halloweeni darabokat a már megszerzett kiegészítőkkel. A kozmetikai tárgyak nem módosítják a nehézséget vagy a tanulási haladást; csak egyedivé teszik a Numblopot.',
          },
        ],
      },
      {
        heading: 'Állandó, nem időszakos',
        blocks: [
          {
            p: 'A halloweeni kollekció október végén sem tűnik el. Nincs visszaszámlálás és nincs félelem a lemaradástól. A gyerekek tovább gyakorolhatnak, érméket gyűjthetnek, és akkor oldhatják fel a darabokat, amikor készen állnak.',
          },
        ],
      },
      {
        heading: 'Gyakorolj, szerezz érméket és alakítsd kedvedre',
        blocks: [
          {
            p: 'A Numblop a gyermek fejlődéséhez igazítja a szorzási feladatokat, és a nehezebb példákat gyakrabban ismétli. A befejezett gyakorlás érméket ad kozmetikai jutalmakra, reklámok és alkalmazáson belüli vásárlások nélkül.',
          },
        ],
      },
    ],
    video: {
      title: 'Nézd meg a halloweeni kiegészítők előzetesét',
      playLabel: 'A Numblop halloweeni előzetesének lejátszása',
      privacyNote: 'A YouTube csak a lejátszás megnyomása után töltődik be.',
      watchLabel: 'Megnézem a YouTube-on',
    },
  }),
}
