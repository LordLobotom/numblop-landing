import generatedAbout from './generated/about.json'
import type { Locale } from './locales'

export interface AboutContent {
  navLabel: string
  meta: {
    title: string
    description: string
  }
  hero: {
    eyebrow: string
    title: string
    tagline: string
    intro: string[]
    imageAlt: string
  }
  foundation: {
    heading: string
    paragraphs: string[]
    steps: string[]
  }
  rightAnswer: {
    heading: string
    paragraphs: string[]
    callout: string
  }
  adaptive: {
    eyebrow: string
    heading: string
    intro: string
    stages: {
      label: string
      title: string
      description: string
    }[]
    principle: string
    note: string
  }
  methodology: {
    heading: string
    paragraphs: string[]
    imageAlt: string
  }
  evolving: {
    heading: string
    paragraphs: string[]
    location: string
  }
  homeEntry: {
    eyebrow: string
    heading: string
    body: string
    cta: string
  }
  cta: {
    heading: string
    body: string
    button: string
  }
}

const en: AboutContent = {
  navLabel: 'About',
  meta: {
    title: 'About Numblop | Educational Approach & Adaptive Multiplication',
    description:
      'Discover how Numblop combines classroom teaching experience, adaptive learning, and game design to help children practise and master multiplication.',
  },
  hero: {
    eyebrow: 'About Numblop',
    title: 'Built around the way children learn',
    tagline: 'A multiplication game shaped by teaching experience.',
    intro: [
      'Numblop is an independent educational project that brings together practical classroom experience and modern technology.',
      'It began with educational materials and didactic guidelines prepared by a primary school teacher. Those ideas became the learning rules that guide how children practise multiplication in the game.',
    ],
    imageAlt: 'Numblop, the friendly character who guides children through the game',
  },
  foundation: {
    heading: 'From classroom materials to a learning system',
    paragraphs: [
      'Numblop did not begin as a finished game. It began with a careful description of what children need when learning multiplication: gradual challenge, useful feedback, and regular practice focused on the facts that still need attention.',
      'Those teaching principles were translated into a system that can follow progress fact by fact and decide what kind of practice is useful next.',
    ],
    steps: ['Teaching materials', 'Learning rules', 'Adaptive game'],
  },
  rightAnswer: {
    heading: 'More than just the right answer',
    paragraphs: [
      'Getting a multiplication problem right and recalling the answer automatically are two different things.',
      'That is why Numblop does not simply count correct answers. It tracks each multiplication fact individually and considers both accuracy and response time.',
      'Facts that are difficult receive more attention. Familiar facts appear less often, but remain part of regular review.',
    ],
    callout:
      'The goal is not simply to finish every multiplication table. It is to build confidence, fluency, and reliable recall over time.',
  },
  adaptive: {
    eyebrow: 'Learning that adapts',
    heading: 'The practice changes as confidence grows',
    intro:
      'The same fact can be presented in different ways. Numblop gradually asks for more independent recall as a child becomes more confident.',
    stages: [
      {
        label: 'Stage 1',
        title: 'Building familiarity',
        description:
          'Four possible answers offer a simpler format while the fact is still being learned.',
      },
      {
        label: 'Stage 2',
        title: 'Building confidence',
        description:
          'Six possible answers make the exercise more demanding as proficiency grows.',
      },
      {
        label: 'Stage 3',
        title: 'Independent recall',
        description:
          'The answer is entered without multiple-choice assistance, encouraging confident recall.',
      },
    ],
    principle:
      'Practice what needs practice. Reinforce what you have learned. Keep moving forward.',
    note:
      'Practice adjusts as children improve. Difficult facts receive more attention, while familiar ones remain part of regular review. Progress depends on individual performance, not a fixed number of attempts.',
  },
  methodology: {
    heading: 'From educational methodology to a game',
    paragraphs: [
      'Turning teaching principles into a working game meant building a system that tracks individual multiplication facts, evaluates answers, adjusts the form of each question, and chooses what to practise next.',
      'Around that foundation, Numblop gradually grew to include progression, rewards, customization, and other features that make regular practice more engaging.',
      'The educational methodology remains at the core. The game elements are there to support it.',
    ],
    imageAlt: 'A Numblop practice screen where the answer is entered independently',
  },
  evolving: {
    heading: 'An independent project that keeps evolving',
    paragraphs: [
      'Numblop is developed in our spare time as a small independent family project from the Czech Republic.',
      'It brings together classroom experience, software development, game design, and modern AI-assisted development tools.',
      'What began as a collection of educational documents has grown into a multilingual learning game. New features, improvements, languages, and ideas continue to be added with the same goal: making multiplication practice more effective, accessible, and enjoyable.',
    ],
    location: 'Made in the Czech Republic',
  },
  homeEntry: {
    eyebrow: 'Behind the game',
    heading: 'Built from teaching principles, not random questions',
    body: 'See how classroom experience became Numblop’s adaptive practice system.',
    cta: 'About Numblop',
  },
  cta: {
    heading: 'Ready to practise?',
    body: 'Explore multiplication at your own pace with Numblop.',
    button: 'Play Numblop',
  },
}

const cs: AboutContent = {
  navLabel: 'O Numblopu',
  meta: {
    title: 'O Numblopu | Vzdělávací přístup a adaptivní násobilka',
    description:
      'Zjistěte, jak Numblop propojuje zkušenosti z výuky, adaptivní učení a herní design, aby dětem pomohl procvičit a zvládnout násobilku.',
  },
  hero: {
    eyebrow: 'O Numblopu',
    title: 'Vytvořený podle toho, jak se děti učí',
    tagline: 'Hra na násobilku vycházející ze zkušeností z výuky.',
    intro: [
      'Numblop je nezávislý vzdělávací projekt, který propojuje praktické zkušenosti ze školní výuky s moderními technologiemi.',
      'Začal vzdělávacími materiály a didaktickými pokyny připravenými učitelkou prvního stupně. Z těchto myšlenek vznikla pravidla, podle kterých děti v Numblopu násobilku procvičují.',
    ],
    imageAlt: 'Numblop, přátelská postavička, která děti provází hrou',
  },
  foundation: {
    heading: 'Od výukových materiálů k učebnímu systému',
    paragraphs: [
      'Numblop nezačal jako hotová hra. Na začátku byl pečlivý popis toho, co děti při učení násobilky potřebují: postupnou náročnost, užitečnou zpětnou vazbu a pravidelné procvičování zaměřené na spoje, které ještě vyžadují pozornost.',
      'Tyto didaktické principy jsme převedli do systému, který sleduje pokrok u každého spoje zvlášť a rozhoduje, jaké procvičování bude užitečné dál.',
    ],
    steps: ['Výukové materiály', 'Pravidla učení', 'Adaptivní hra'],
  },
  rightAnswer: {
    heading: 'Víc než jen správná odpověď',
    paragraphs: [
      'Vyřešit příklad správně a vybavit si výsledek automaticky jsou dvě různé věci.',
      'Proto Numblop správné odpovědi jen nepočítá. Každý násobilkový spoj sleduje samostatně a zohledňuje správnost i rychlost odpovědi.',
      'Obtížné spoje dostávají více prostoru. Ty známé se objevují méně často, ale zůstávají součástí pravidelného opakování.',
    ],
    callout:
      'Cílem není jen dokončit všechny násobilky. Jde o postupné budování jistoty, plynulosti a spolehlivého vybavování.',
  },
  adaptive: {
    eyebrow: 'Učení, které se přizpůsobuje',
    heading: 'S rostoucí jistotou se mění i procvičování',
    intro:
      'Stejný spoj lze zadat různými způsoby. Jak dítě získává jistotu, Numblop postupně vyžaduje samostatnější vybavení výsledku.',
    stages: [
      {
        label: '1. fáze',
        title: 'Seznamování se spojem',
        description:
          'Čtyři možné odpovědi nabízejí jednodušší formu, dokud se dítě spoj učí.',
      },
      {
        label: '2. fáze',
        title: 'Budování jistoty',
        description:
          'Šest možných odpovědí dělá úlohu s rostoucí znalostí o něco náročnější.',
      },
      {
        label: '3. fáze',
        title: 'Samostatné vybavení',
        description:
          'Dítě zadá výsledek bez nabídky odpovědí a směřuje k jistému vybavení.',
      },
    ],
    principle:
      'Procvičuj, co procvičit potřebuješ. Upevňuj, co už znáš. Pokračuj dál.',
    note:
      'Procvičování se přizpůsobuje tomu, jak se dítě zlepšuje. Obtížné spoje dostávají více pozornosti, zatímco známé zůstávají v pravidelném opakování. Postup závisí na individuálním výkonu, ne na pevném počtu pokusů.',
  },
  methodology: {
    heading: 'Od vzdělávací metodiky ke hře',
    paragraphs: [
      'Převést principy výuky do fungující hry znamenalo vytvořit systém, který sleduje jednotlivé násobilkové spoje, vyhodnocuje odpovědi, upravuje formu otázky a rozhoduje, co procvičovat dál.',
      'K tomuto základu postupně přibyly herní postup, odměny, úpravy vzhledu a další prvky, díky kterým je pravidelné procvičování poutavější.',
      'Vzdělávací metodika zůstává jádrem Numblopu. Herní prvky ji podporují.',
    ],
    imageAlt: 'Procvičovací obrazovka Numblopu se samostatným zadáním výsledku',
  },
  evolving: {
    heading: 'Nezávislý projekt, který se dál vyvíjí',
    paragraphs: [
      'Numblop vyvíjíme ve volném čase jako malý nezávislý rodinný projekt z České republiky.',
      'Propojuje zkušenosti ze školní výuky, vývoj softwaru, herní design a moderní nástroje pro vývoj s podporou AI.',
      'Z původní sbírky vzdělávacích dokumentů vyrostla vícejazyčná výuková hra. Postupně přidáváme nové funkce, vylepšení, jazyky i nápady se stále stejným cílem: aby bylo procvičování násobilky účinnější, dostupnější a příjemnější.',
    ],
    location: 'Vytvořeno v České republice',
  },
  homeEntry: {
    eyebrow: 'Příběh hry',
    heading: 'Vychází z principů výuky, ne z náhodných otázek',
    body: 'Podívejte se, jak se zkušenosti ze třídy proměnily v adaptivní systém Numblopu.',
    cta: 'O Numblopu',
  },
  cta: {
    heading: 'Pustíte se do procvičování?',
    body: 'Objevujte násobilku vlastním tempem s Numblopem.',
    button: 'Hrát Numblop',
  },
}

const additionalAboutContent: Record<Exclude<Locale, 'cs' | 'en'>, AboutContent> =
  generatedAbout

const aboutContent: Record<Locale, AboutContent> = {
  en,
  cs,
  ...additionalAboutContent,
}

export function getAboutContent(locale: Locale): AboutContent {
  return aboutContent[locale]
}
