export const locales = ['cs', 'en'] as const
export type Locale = (typeof locales)[number]

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  header: {
    play: string
  }
  hero: {
    name: string
    tagline: string
    slogan: string
    shortDescription: string
    play: string
    privacy: string
  }
  steps: {
    heading: string
    subheading: string
    items: {
      title: string
      description: string
    }[]
  }
  why: {
    heading: string
    paragraphs: string[]
    quotes: string[]
    features: {
      title: string
      description: string
    }[]
  }
  screenshots: {
    heading: string
    subheading: string
    captions: string[]
  }
  footer: {
    privacy: string
    instagram: string
    madeIn: string
  }
}

const cs: Dictionary = {
  meta: {
    title: 'Numblop – Násobilka hrou',
    description: 'Adaptivní hra pro procvičování a automatizaci násobilky.',
  },
  header: {
    play: 'Hrát',
  },
  hero: {
    name: 'Numblop',
    tagline: 'Uč se násobilku hrou',
    slogan: 'Učení je cesta – sleduj svůj pokrok',
    shortDescription:
      'Adaptivní hra pro procvičování a automatizaci násobilky. Přizpůsobuje se pokroku dítěte a vede k jistému vybavování násobilkových spojů.',
    play: 'Hrát',
    privacy: 'Pokrok zůstává v tomto zařízení.',
  },
  steps: {
    heading: 'Objevuj → Procvičuj → Upevňuj → Mám jistotu',
    subheading: 'Čtyři kroky, kterými Numblop provede každý násobilkový spoj.',
    items: [
      {
        title: 'Objevuj',
        description: 'Nové násobky poznáváš postupně a v souvislostech, žádný skok do neznáma.',
      },
      {
        title: 'Procvičuj',
        description: 'Krátká hravá kola udrží pozornost a budují první jistotu.',
      },
      {
        title: 'Upevňuj',
        description: 'Obtížnější spoje se vracejí přesně ve chvíli, kdy je potřeba je zopakovat.',
      },
      {
        title: 'Mám jistotu',
        description: 'Spoj si vybavíš okamžitě a bez počítání – násobilka je automatická.',
      },
    ],
  },
  why: {
    heading: 'Chytřejší procvičování zaměřené na pokrok',
    paragraphs: [
      'Numblop je adaptivní výuková hra pro děti, která pomáhá procvičovat, upevňovat a automatizovat násobilku. Hra se přizpůsobuje pokroku dítěte, pravidelně opakuje obtížnější spoje a postupně vede k jistému vybavování násobilkových spojů.',
      'Děti jsou motivovány hravou formou – sbírají odměny, objevují nové části mapy a učí se vlastním tempem. Krátká přátelská kola reagují na chyby bez trestání: každá chyba je jen další příležitost si spoj zopakovat.',
    ],
    quotes: ['Každá chyba pomáhá učit.', 'Učení je cesta – sleduj svůj pokrok.'],
    features: [
      {
        title: 'Přizpůsobuje se dítěti',
        description: 'Hra sleduje, které spoje už dítě umí, a soustředí se na ty, které potřebují procvičit.',
      },
      {
        title: 'Odměny a objevování',
        description: 'Za každé dokončené procvičování čeká odměna a nové části mapy k prozkoumání.',
      },
      {
        title: 'Vlastní tempo, žádný stres',
        description: 'Žádné odpočítávání ani trestání chyb – jen klidné a pravidelné budování jistoty.',
      },
    ],
  },
  screenshots: {
    heading: 'Podívej se do hry',
    subheading: 'Přátelský průvodce, mapa pokroku a krátká procvičovací kola.',
    captions: ['Domovská obrazovka', 'Mapa pokroku', 'Procvičovací aréna'],
  },
  footer: {
    privacy: 'Pokrok zůstává v tomto zařízení. Žádné účty, žádná reklama, žádné sledování.',
    instagram: 'Sledujte nás na Instagramu',
    madeIn: 'Numblop – Násobilka hrou',
  },
}

const en: Dictionary = {
  meta: {
    title: 'Numblop – Times tables through play',
    description: 'An adaptive game for practising and mastering the times tables.',
  },
  header: {
    play: 'Play',
  },
  hero: {
    name: 'Numblop',
    tagline: 'Learn multiplication through play',
    slogan: 'Learning is a journey – watch your progress',
    shortDescription:
      'An adaptive game for practising and automatising the times tables. It adapts to each child’s progress and leads to confident, instant recall.',
    play: 'Play',
    privacy: 'Progress stays on this device.',
  },
  steps: {
    heading: 'Discover → Practise → Reinforce → I’ve got it',
    subheading: 'Four steps Numblop takes every multiplication fact through.',
    items: [
      {
        title: 'Discover',
        description: 'Meet new facts step by step and in context – no jumping into the unknown.',
      },
      {
        title: 'Practise',
        description: 'Short, playful rounds hold attention and build first confidence.',
      },
      {
        title: 'Reinforce',
        description: 'Trickier facts come back exactly when it’s time to revisit them.',
      },
      {
        title: 'I’ve got it',
        description: 'Recall becomes instant and effortless – multiplication turns automatic.',
      },
    ],
  },
  why: {
    heading: 'Smarter practice focused on progress',
    paragraphs: [
      'Numblop is an adaptive learning game that helps children practise, reinforce, and automatise the multiplication tables. The game adapts to each child’s progress, regularly revisits the harder facts, and gradually leads to confident recall of every multiplication fact.',
      'Children stay motivated through play – collecting rewards, uncovering new parts of the map, and learning at their own pace. Short, friendly sessions respond to mistakes without punishment: every mistake is just another chance to practise.',
    ],
    quotes: ['Every mistake helps you learn.', 'Learning is a journey – watch your progress.'],
    features: [
      {
        title: 'Adapts to the child',
        description: 'The game tracks which facts a child already knows and focuses on the ones that need practice.',
      },
      {
        title: 'Rewards and discovery',
        description: 'Every finished session earns a reward and reveals new parts of the map to explore.',
      },
      {
        title: 'Own pace, no stress',
        description: 'No countdowns, no punishment for mistakes – just calm, steady confidence building.',
      },
    ],
  },
  screenshots: {
    heading: 'A look inside the game',
    subheading: 'A friendly companion, a progress map, and short practice rounds.',
    captions: ['Home screen', 'Progress map', 'Practice arena'],
  },
  footer: {
    privacy: 'Progress stays on this device. No accounts, no ads, no tracking.',
    instagram: 'Follow us on Instagram',
    madeIn: 'Numblop – Times tables through play',
  },
}

const dictionaries: Record<Locale, Dictionary> = { cs, en }

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
