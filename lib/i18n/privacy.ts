import type { Locale } from './dictionary'

// The privacy policy is kept apart from the main dictionary: it is long, rarely
// touched, and needs to stay verbatim in both languages.
//
// Scope note: Numblop is a fully offline game. It has no accounts, no
// leaderboard, no analytics, no advertising and no third-party SDKs, and it
// does not request the Android INTERNET permission. If any of that ever
// changes, this policy and the Google Play Data safety declaration must be
// updated before the release that changes it.

export const privacyContact = {
  name: 'Michal Gut (LordLobotom)',
  email: 'lordlobotom@gmail.com',
  effectiveDate: '2026-08-03',
} as const

export type PrivacyBlock =
  | { p: string }
  | { h: string }
  | { list: string[] }
  | { fields: { label: string; value: string }[] }

export interface PrivacyContent {
  title: string
  effectiveDateLabel: string
  effectiveDate: string
  intro: string[]
  sections: { heading: string; blocks: PrivacyBlock[] }[]
  meta: { title: string; description: string }
  backToHome: string
}

const cs: PrivacyContent = {
  title: 'Zásady ochrany soukromí – Numblop',
  effectiveDateLabel: 'Účinné od',
  effectiveDate: '3. srpna 2026',
  intro: [
    'Numblop je vzdělávací matematická hra, která dětem pomáhá procvičovat násobilku v bezpečném a hravém prostředí.',
    'Tyto zásady vysvětlují, jaké informace Numblop zpracovává, jak s nimi nakládá a jaké možnosti mají uživatelé a jejich rodiče nebo zákonní zástupci.',
    'Shrnutí: Numblop je plně offline aplikace. Neshromažďujeme, nepřenášíme ani nesdílíme žádné osobní údaje.',
  ],
  meta: {
    title: 'Zásady ochrany soukromí – Numblop',
    description:
      'Numblop je plně offline hra bez sběru dat, bez účtů, bez reklam a bez sledování. Přečtěte si celé zásady ochrany soukromí.',
  },
  backToHome: 'Zpět na úvodní stránku',
  sections: [
    {
      heading: '1. Vývojář a kontaktní údaje',
      blocks: [
        { p: 'Numblop vyvíjí a provozuje:' },
        {
          fields: [
            { label: 'Vývojář', value: 'Michal Gut (LordLobotom)' },
            { label: 'Země', value: 'Česká republika' },
            { label: 'Kontaktní e-mail', value: 'lordlobotom@gmail.com' },
          ],
        },
        {
          p: 'S jakýmikoli dotazy nebo žádostmi týkajícími se soukromí se na nás obraťte na uvedené e-mailové adrese.',
        },
      ],
    },
    {
      heading: '2. Jaké informace zpracováváme',
      blocks: [
        {
          p: 'Numblop neshromažďuje, neukládá mimo zařízení, nepřenáší, neprodává ani nesdílí žádné osobní údaje ani údaje o používání – od dětí ani od kohokoli jiného.',
        },
        { h: 'Herní data ve vašem zařízení' },
        {
          p: 'Hra ukládá průběh hraní pouze do soukromého úložiště aplikace ve vašem zařízení. Jde zejména o:',
        },
        {
          list: [
            'herní postup,',
            'odemčené násobilky,',
            'úroveň zvládnutí jednotlivých spojů,',
            'získané zkušenostní body,',
            'mince a odměny,',
            'úspěchy a trofeje,',
            'vybrané kosmetické doplňky,',
            'nastavení aplikace (jazyk, zvuk),',
            'volitelnou přezdívku, kterou si hráč sám zadá.',
          ],
        },
        {
          p: 'Tato data zařízení neopouštějí. Aplikace nežádá o oprávnění INTERNET, takže technicky nemůže nic odeslat mimo zařízení. Jedinou výjimkou je standardní záloha systému Android, kterou plně ovládáte nastavením svého účtu Google.',
        },
        {
          p: 'Přezdívka slouží pouze k oslovení hráče uvnitř hry a nikam se neodesílá. Přesto doporučujeme nepoužívat jako přezdívku skutečné jméno, e-mail, telefonní číslo, název školy ani adresu.',
        },
        { h: 'Technické a diagnostické údaje' },
        {
          p: 'Numblop neobsahuje analytiku, hlášení pádů ani žádné SDK třetích stran, a proto neshromažďuje ani nezpracovává technické ani diagnostické údaje o vašem zařízení.',
        },
        { h: 'Online žebříčky' },
        {
          p: 'Aktuální verze hry neobsahuje online žebříček, účty ani jiné síťové funkce. Pokud by taková funkce byla v budoucnu přidána, budou tyto zásady i prohlášení o bezpečnosti dat v Google Play aktualizovány ještě před vydáním takové verze.',
        },
      ],
    },
    {
      heading: '3. Jak informace používáme',
      blocks: [
        {
          p: 'Herní data uložená ve vašem zařízení používá aplikace pouze k tomu, aby:',
        },
        {
          list: [
            'zajistila fungování hry,',
            'uložila a obnovila herní postup,',
            'vypočítala zkušenosti, odměny a úspěchy,',
            'přizpůsobila procvičování pokroku dítěte,',
            'zachovala zvolené nastavení a doplňky.',
          ],
        },
        {
          p: 'Nepoužíváme žádné údaje k cílené reklamě, přímému marketingu ani k vytváření reklamních profilů.',
        },
      ],
    },
    {
      heading: '4. Soukromí dětí',
      blocks: [
        {
          p: 'Numblop je určen dětem a rodinám, a proto je navržen tak, aby žádné osobní údaje nezískával.',
        },
        { p: 'Hra po dětech nikdy nepožaduje:' },
        {
          list: [
            'skutečné jméno,',
            'adresu bydliště,',
            'e-mailovou adresu,',
            'telefonní číslo,',
            'název školy,',
            'přesnou polohu,',
            'fotografie,',
            'kontakty,',
            'soukromé zprávy.',
          ],
        },
        {
          p: 'Hra neobsahuje chat, soukromé zprávy, sdílení obrázků ani jinou komunikaci mezi uživateli.',
        },
        {
          p: 'Protože aplikace nesbírá žádná data od nikoho, nezískáváme ani nezpracováváme žádné osobní údaje o vašem dítěti – v souladu s GDPR i COPPA už z principu.',
        },
      ],
    },
    {
      heading: '5. Reklama a nákupy',
      blocks: [
        { p: 'Numblop:' },
        {
          list: [
            'nezobrazuje reklamu třetích stran,',
            'nepoužívá data uživatelů k reklamním účelům,',
            'je k dispozici zdarma,',
            'neobsahuje předplatné ani nákupy v aplikaci.',
          ],
        },
        {
          p: 'Pokud by se tato praxe v budoucnu změnila, budou tyto zásady i prohlášení o bezpečnosti dat v Google Play aktualizovány ještě před zavedením takové funkce.',
        },
      ],
    },
    {
      heading: '6. Služby třetích stran',
      blocks: [
        {
          p: 'Aplikace neobsahuje žádné SDK ani knihovny třetích stran, které by zpracovávaly údaje uživatelů.',
        },
        {
          p: 'K distribuci aplikace je využíván obchod Google Play. Google jako provozovatel obchodu zpracovává údaje o stažení a instalaci podle vlastních podmínek a zásad ochrany soukromí; tyto údaje nemáme k dispozici v podobě, která by nám umožnila identifikovat jednotlivé hráče.',
        },
        { p: 'Aktuální seznam služeb třetích stran využívaných aplikací:' },
        { list: ['Google Play (distribuce aplikace).'] },
        {
          p: 'Numblop neprodává osobní údaje třetím stranám. Žádné další služby v současné době využívány nejsou; seznam bude v těchto zásadách udržován aktuální.',
        },
      ],
    },
    {
      heading: '7. Sdílení údajů',
      blocks: [
        {
          p: 'Neprodáváme, nepronajímáme ani neobchodujeme s údaji uživatelů.',
        },
        {
          p: 'Protože aplikace žádné údaje neshromažďuje ani neodesílá, nemáme co sdílet s poskytovateli služeb ani s dalšími třetími stranami. Údaje bychom mohli poskytnout pouze v rozsahu vyžadovaném platnými právními předpisy, pokud bychom jimi vůbec disponovali.',
        },
      ],
    },
    {
      heading: '8. Uchovávání údajů',
      blocks: [
        {
          p: 'Herní data zůstávají uložena ve vašem zařízení, dokud nesmažete data aplikace nebo aplikaci neodinstalujete. Odinstalací aplikace se tato data smažou.',
        },
        {
          p: 'Neuchováváme žádné údaje na svých serverech, protože žádné neshromažďujeme. Data uložená ve vašem zařízení můžete kdykoli sami smazat v nastavení systému Android nebo odinstalací aplikace.',
        },
      ],
    },
    {
      heading: '9. Zabezpečení údajů',
      blocks: [
        {
          p: 'Herní data jsou uložena v soukromém úložišti aplikace, které systém Android chrání před přístupem jiných aplikací.',
        },
        {
          p: 'Protože aplikace neodesílá žádná data po síti, nedochází k přenosu údajů, který by mohl být zachycen. Žádný způsob elektronického ukládání není zcela bezpečný a absolutní bezpečnost nelze zaručit.',
        },
      ],
    },
    {
      heading: '10. Práva uživatelů a rodičů',
      blocks: [
        {
          p: 'Podle platných právních předpisů mohou uživatelé nebo jejich rodiče či zákonní zástupci mít právo:',
        },
        {
          list: [
            'požádat o přístup k uloženým osobním údajům,',
            'požádat o opravu nepřesných údajů,',
            'požádat o výmaz údajů,',
            'vznést námitku proti zpracování nebo je omezit,',
            'odvolat souhlas, pokud je zpracování založeno na souhlasu,',
            'podat stížnost u příslušného dozorového úřadu (v České republice Úřad pro ochranu osobních údajů).',
          ],
        },
        {
          p: 'Protože o uživatelích nevedeme žádné záznamy, nemáme k dispozici žádné osobní údaje, které bychom mohli zpřístupnit, opravit nebo vymazat. Veškerá data hry jsou plně pod vaší kontrolou ve vašem zařízení.',
        },
        {
          p: 'S dotazy se můžete kdykoli obrátit na lordlobotom@gmail.com.',
        },
      ],
    },
    {
      heading: '11. Mezinárodní zpracování údajů',
      blocks: [
        {
          p: 'Aplikace neodesílá žádné údaje mimo vaše zařízení, a nedochází tak k žádnému mezinárodnímu přenosu osobních údajů z naší strany.',
        },
        {
          p: 'Distribuce prostřednictvím Google Play se řídí podmínkami a zásadami společnosti Google, včetně jejích pravidel pro mezinárodní přenosy.',
        },
      ],
    },
    {
      heading: '12. Změny těchto zásad',
      blocks: [
        {
          p: 'Tyto zásady můžeme aktualizovat, pokud se změní aplikace, její funkce nebo právní požadavky.',
        },
        {
          p: 'Aktualizovaná verze bude zveřejněna na této stránce s novým datem účinnosti.',
        },
        {
          p: 'Podstatné změny týkající se údajů dětí nebo způsobu využití informací budou zveřejněny zde ještě předtím, než nabydou účinnosti, a zároveň bude odpovídajícím způsobem upraveno prohlášení o bezpečnosti dat v obchodě.',
        },
      ],
    },
    {
      heading: '13. Kontakt',
      blocks: [
        {
          p: 'S dotazy, žádostmi nebo podněty k těmto zásadám se obraťte na:',
        },
        {
          fields: [
            { label: 'Vývojář', value: 'Michal Gut (LordLobotom)' },
            { label: 'E-mail', value: 'lordlobotom@gmail.com' },
            { label: 'Země', value: 'Česká republika' },
          ],
        },
      ],
    },
  ],
}

const en: PrivacyContent = {
  title: 'Privacy Policy for Numblop',
  effectiveDateLabel: 'Effective date',
  effectiveDate: '3 August 2026',
  intro: [
    'Numblop is an educational mathematics game designed to help children practise multiplication in a safe and playful environment.',
    'This Privacy Policy explains what information Numblop processes, how it is used, and what choices users and their parents or legal guardians have.',
    'In short: Numblop is a fully offline application. We do not collect, transmit, or share any personal data.',
  ],
  meta: {
    title: 'Privacy Policy – Numblop',
    description:
      'Numblop is a fully offline game with no data collection, no accounts, no ads and no tracking. Read the full privacy policy.',
  },
  backToHome: 'Back to the home page',
  sections: [
    {
      heading: '1. Developer and Contact Information',
      blocks: [
        { p: 'Numblop is developed and operated by:' },
        {
          fields: [
            { label: 'Developer', value: 'Michal Gut (LordLobotom)' },
            { label: 'Country', value: 'Czech Republic' },
            { label: 'Contact email', value: 'lordlobotom@gmail.com' },
          ],
        },
        {
          p: 'For any privacy-related questions or requests, please contact us using the email address above.',
        },
      ],
    },
    {
      heading: '2. Information We Process',
      blocks: [
        {
          p: 'Numblop does not collect, store off-device, transmit, sell, or share any personal data or usage data — from children or from anyone else.',
        },
        { h: 'Game data on your device' },
        {
          p: "The game stores gameplay information only in the application's private storage on your device. This includes:",
        },
        {
          list: [
            'game progress,',
            'unlocked multiplication tables,',
            'mastery levels for individual facts,',
            'earned experience points,',
            'coins and rewards,',
            'achievements and trophies,',
            'selected cosmetic items,',
            'application settings (language, audio),',
            'an optional nickname typed in by the player.',
          ],
        },
        {
          p: 'This data never leaves the device. The application does not request the Android INTERNET permission, so it is technically unable to send anything off the device. The only exception is the standard Android device backup, which is controlled entirely by your own Google account settings.',
        },
        {
          p: 'The nickname is used solely to address the player inside the game and is never transmitted anywhere. Even so, we recommend not using a real name, email address, phone number, school name, or address as a nickname.',
        },
        { h: 'Technical and diagnostic data' },
        {
          p: 'Numblop contains no analytics, no crash reporting, and no third-party SDKs, and therefore does not collect or process any technical or diagnostic information about your device.',
        },
        { h: 'Online leaderboards' },
        {
          p: 'The current version of the game has no online leaderboard, no accounts, and no other networked features. If such a feature is ever added, this Privacy Policy and the Google Play Data safety declaration will be updated before that version is released.',
        },
      ],
    },
    {
      heading: '3. How We Use Information',
      blocks: [
        {
          p: 'The game data stored on your device is used by the application only to:',
        },
        {
          list: [
            'provide and maintain the game,',
            'save and restore game progress,',
            'calculate experience, rewards and achievements,',
            "adapt the practice to the child's progress,",
            'keep the chosen settings and cosmetic items.',
          ],
        },
        {
          p: 'We do not use any information for targeted advertising, direct marketing, or the creation of advertising profiles.',
        },
      ],
    },
    {
      heading: '4. Children’s Privacy',
      blocks: [
        {
          p: 'Numblop is intended for children and families, and is therefore designed so that no personal information is gathered at all.',
        },
        { p: 'The game never asks children to provide:' },
        {
          list: [
            'their real name,',
            'home address,',
            'email address,',
            'phone number,',
            'school name,',
            'precise location,',
            'photographs,',
            'contacts,',
            'private messages.',
          ],
        },
        {
          p: 'The game provides no chat, private messaging, image sharing, or any other communication between users.',
        },
        {
          p: 'Because the application collects no data from anyone, no personal information about your child is ever gathered or processed by us — COPPA and GDPR compliant by design.',
        },
      ],
    },
    {
      heading: '5. Advertising and Purchases',
      blocks: [
        { p: 'Numblop:' },
        {
          list: [
            'does not display third-party advertising,',
            'does not use user data for advertising,',
            'is available free of charge,',
            'contains no subscriptions and no in-app purchases.',
          ],
        },
        {
          p: 'If these practices change in the future, this Privacy Policy and the Google Play Data safety declaration will be updated before the relevant functionality is introduced.',
        },
      ],
    },
    {
      heading: '6. Third-Party Services',
      blocks: [
        {
          p: 'The application contains no third-party SDKs or libraries that process user data.',
        },
        {
          p: 'Google Play is used to distribute the application. As the store operator, Google processes download and installation information under its own terms and privacy policy; we do not receive that information in a form that would let us identify individual players.',
        },
        {
          p: 'A current list of third-party services used by the application:',
        },
        { list: ['Google Play (application distribution).'] },
        {
          p: 'Numblop does not sell personal information to third parties. No other services are used at this time; this list will be kept up to date in this Privacy Policy.',
        },
      ],
    },
    {
      heading: '7. Data Sharing',
      blocks: [
        { p: 'We do not sell, rent, or trade user information.' },
        {
          p: 'Because the application collects and transmits no information, there is nothing to share with service providers or any other third party. Information could only be disclosed to the extent required by applicable law, if we held any at all.',
        },
      ],
    },
    {
      heading: '8. Data Retention',
      blocks: [
        {
          p: 'Game data remains stored on your device until the application data is cleared or the application is uninstalled. Uninstalling the application deletes this data.',
        },
        {
          p: 'We retain no information on any server, because we collect none. You can delete the data stored on your device at any time yourself, through the Android system settings or by uninstalling the application.',
        },
      ],
    },
    {
      heading: '9. Data Security',
      blocks: [
        {
          p: "Game data is kept in the application's private storage, which Android protects from access by other applications.",
        },
        {
          p: 'Because the application sends no data over the network, there is no transmission that could be intercepted. No method of electronic storage is completely secure, and absolute security cannot be guaranteed.',
        },
      ],
    },
    {
      heading: '10. User and Parent Rights',
      blocks: [
        {
          p: 'Depending on applicable law, users or their parents or legal guardians may have the right to:',
        },
        {
          list: [
            'request access to stored personal information,',
            'request correction of inaccurate information,',
            'request deletion of information,',
            'object to or restrict certain processing,',
            'withdraw consent where processing is based on consent,',
            'lodge a complaint with a competent data protection authority (in the Czech Republic, the Office for Personal Data Protection).',
          ],
        },
        {
          p: 'Because we keep no records about users, we hold no personal information that we could disclose, correct, or delete. All game data is entirely under your control on your own device.',
        },
        {
          p: 'You are welcome to contact us at lordlobotom@gmail.com with any question.',
        },
      ],
    },
    {
      heading: '11. International Data Processing',
      blocks: [
        {
          p: 'The application sends no information off your device, so there is no international transfer of personal information on our part.',
        },
        {
          p: "Distribution through Google Play is governed by Google's own terms and policies, including its rules on international transfers.",
        },
      ],
    },
    {
      heading: '12. Changes to This Privacy Policy',
      blocks: [
        {
          p: 'We may update this Privacy Policy when the application, its features, or legal requirements change.',
        },
        {
          p: 'The updated version will be published on this page with a revised effective date.',
        },
        {
          p: "Material changes affecting children's data or the way information is used will be published here before they take effect, and the in-store data-safety declaration will be updated to match.",
        },
      ],
    },
    {
      heading: '13. Contact',
      blocks: [
        {
          p: 'For questions, requests, or concerns regarding this Privacy Policy, contact:',
        },
        {
          fields: [
            { label: 'Developer', value: 'Michal Gut (LordLobotom)' },
            { label: 'Email', value: 'lordlobotom@gmail.com' },
            { label: 'Country', value: 'Czech Republic' },
          ],
        },
      ],
    },
  ],
}

const privacyPolicies: Record<Locale, PrivacyContent> = { cs, en }

export function getPrivacyContent(locale: Locale): PrivacyContent {
  return privacyPolicies[locale]
}
