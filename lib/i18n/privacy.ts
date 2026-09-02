import generatedPrivacy from './generated/privacy.json'
import type { Locale } from './locales'

// The privacy policy is kept apart from the main dictionary because it is long
// and rarely touched. Czech and English are maintained below; the other eighteen
// complete locale versions live in generated/privacy.json.
//
// Scope note: the whole game is playable offline, signed out, with no Numblop
// account, and it carries no analytics, advertising or in-app purchases. On
// Android it does bundle Google Play Games Services for an optional cloud save,
// so it holds INTERNET and ACCESS_NETWORK_STATE and one encrypted Saved Games
// snapshot goes to Google. If any of that changes, this policy and the Google
// Play Data safety declaration must be updated before the release that changes
// it. The bilingual source text is Numblop's docs/privacy/index.md; this file
// is what is actually published, so the two are edited together.
//
// The *website* is a separate matter, and section 3 covers all of it: the
// contact form at /<locale>/contact/ collects a name, an email address and a
// message, and the landing page carries a click-to-load YouTube trailer that
// contacts Google only once someone presses play. Any change to what the form
// asks for, or to anything the page loads from a third party, has to be
// reflected there first. Legal translations should receive native-speaker
// review whenever the English policy changes.

export const privacyContact = {
  name: 'Michal Gut (LordLobotom)',
  email: 'numblop@gutcloud.cz',
  effectiveDate: '2026-08-13',
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
  effectiveDate: '13. srpna 2026',
  intro: [
    'Numblop je vzdělávací matematická hra, která dětem pomáhá procvičovat násobilku v bezpečném a hravém prostředí.',
    'Tyto zásady vysvětlují, jaké informace Numblop zpracovává, jak s nimi nakládá a jaké možnosti mají uživatelé a jejich rodiče nebo zákonní zástupci.',
    'Shrnutí: celou hru lze používat offline, bez přihlášení a bez účtu Numblop. Neobsahuje reklamy ani nákupy v aplikaci a my sami neprovozujeme žádnou analytiku.',
    'Dvě věci jsou dobrovolné a máte je pod kontrolou: cloudová záloha, která odešle jednu šifrovanou kopii herního postupu do Her Google Play (část 2), a to, co sami uděláte na této webové stránce – napíšete nám kontaktním formulářem, nebo si kliknutím spustíte trailer z YouTube (část 3).',
    'Jedna věc dobrovolná není. Verze pro Android obsahuje součást Hry Google Play od společnosti Google, která se spouští spolu s hrou bez ohledu na to, zda je cloudová záloha zapnutá, a může společnosti Google odesílat diagnostické a výkonnostní údaje, které Google využívá i k analytice. Co to zahrnuje, popisuje část 2.',
  ],
  meta: {
    title: 'Zásady ochrany soukromí – Numblop',
    description:
      'Numblop je dětská hra bez reklam a bez nákupů v aplikaci, hratelná zcela offline. Přečtěte si celé zásady ochrany soukromí.',
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
            { label: 'Kontaktní e-mail', value: 'numblop@gutcloud.cz' },
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
          p: 'Numblop údaje uživatelů neprodává, nepoužívá je k reklamě a neprovozuje žádné sledování chování. Tato část popisuje samotnou hru; údaje zadané do kontaktního formuláře na webu popisuje část 3.',
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
            'nastavení aplikace (jazyk, zvuk, vibrace, cloudová záloha),',
            'volitelnou přezdívku, kterou si hráč sám zadá,',
            'náhodný pseudonymní identifikátor profilu, který si hra sama vytvoří.',
          ],
        },
        {
          p: 'Při vypnuté cloudové záloze tyto údaje zůstávají v zařízení; výjimkou je standardní záloha systému Android nebo přenos do nového zařízení, které plně ovládáte nastavením svého účtu Google.',
        },
        {
          p: 'Přezdívka slouží pouze k oslovení hráče uvnitř hry a nikde se nezveřejňuje ani nezobrazuje jiným hráčům. Přesto doporučujeme nepoužívat jako přezdívku skutečné jméno, e-mail, telefonní číslo, název školy ani adresu.',
        },
        { h: 'Hry Google Play a cloudová záloha' },
        {
          p: 'V systému Android používá Numblop Služby her Google Play. Cloudová záloha je ve výchozím nastavení zapnutá, funguje však pouze tehdy, když Hry Google Play zařízení přihlásí. O existenci a použití profilu Hry Google Play rozhoduje Google a u dětského účtu pod dohledem také Family Link. Cloudovou zálohu lze vypnout v Nastavení Numblopu; hra potom pokračuje pouze s místním uložením.',
        },
        {
          p: 'Při přihlášení a zapnuté cloudové záloze odešle Numblop společnosti Google jednu šifrovanou zálohu Saved Games. Obsahuje výše uvedený herní postup včetně volitelné přezdívky a náhodného identifikátoru profilu, aby bylo možné postup obnovit nebo bezpečně sloučit mezi zařízeními. Numblop také získá identifikátor hráče Hry Google Play, který odděluje zálohy různých účtů. Numblop nezískává e-mailovou adresu hráče a neprovozuje vlastní server s účty.',
        },
        {
          p: 'Hry Google Play mohou samy zpracovávat identifikátory účtu a profilu, IP adresu a přibližnou zemi nebo oblast, herní aktivitu a uložený postup, identifikátory zařízení a diagnostické údaje za účelem poskytování, zabezpečení, řešení problémů a zlepšování služby. Google s těmito údaji nakládá podle zásad ochrany soukromí Google a podle nastavení soukromí profilu Hry Google Play. Tyto údaje neprodáváme ani je nepoužíváme pro reklamu.',
        },
        { h: 'Technické a diagnostické údaje' },
        {
          p: 'Numblop neobsahuje reklamní SDK, vlastní analytické SDK, vlastní hlášení pádů ani vzdálenou konfiguraci. Nezískáváme žádné diagnostické údaje o vašem zařízení ani žádné statistiky o tom, jak se hra hraje.',
        },
        {
          p: 'Výjimkou je součást Hry Google Play od společnosti Google, na kterou se přepínač cloudové zálohy nevztahuje. V systému Android se spouští spolu s hrou bez ohledu na to, zda je cloudová záloha zapnutá, a může společnosti Google odesílat identifikátory zařízení spolu s diagnostickými a výkonnostními údaji, které Google využívá také k analýze a zlepšování Her Google Play. Vypnutí cloudové zálohy zabrání tomu, aby se Numblop přihlašoval a odesílal jakoukoli zálohu; nezabrání však samotným Hrám Google Play v hlášení společnosti Google. To ovládá nastavení Her Google Play a dostupnost této služby v zařízení.',
        },
        { h: 'Online žebříčky' },
        {
          p: 'Aktuální verze hry neobsahuje online žebříček ani veřejný profil. Cloudová záloha je jedinou síťovou funkcí. Pokud by byl žebříček nebo podobná funkce v budoucnu přidán, budou tyto zásady i prohlášení o bezpečnosti dat v Google Play aktualizovány ještě před vydáním takové verze.',
        },
      ],
    },
    {
      heading: '3. Tato webová stránka (kontaktní formulář a video)',
      blocks: [
        {
          p: 'Samotná webová stránka nepoužívá cookies, neprovozuje žádnou analytiku ani sledování napříč weby. Je na ní kontaktní formulář, kterým nám můžete poslat dotaz, nápad nebo hlášení chyby – formulář je jediné místo, kde od vás nějaký údaj získáváme.',
        },
        { h: 'Jaké údaje zpracováváme' },
        {
          p: 'Pouze to, co nám sami napíšete: nepovinné jméno, e-mailovou adresu, na kterou vám máme odpovědět, text vaší zprávy a jazyk stránky, ze které jste ji odeslali. Nic dalšího – žádné cookies, žádnou analytiku ani sledování napříč weby.',
        },
        { h: 'Proč to zpracováváme' },
        {
          p: 'Výhradně proto, abychom si vaši zprávu přečetli a odpověděli vám. Adresu nepoužíváme k marketingu, nezařazujeme ji do žádné rozesílky a nepředáváme ji nikomu dalšímu.',
        },
        { h: 'Právní základ' },
        {
          p: 'Souhlas podle čl. 6 odst. 1 písm. a) GDPR, který udělujete zaškrtnutím políčka ve formuláři. Souhlas můžete kdykoli odvolat e-mailem na adresu numblop@gutcloud.cz; korespondenci poté smažeme.',
        },
        { h: 'Komu se údaje dostanou' },
        {
          p: 'Formulář je odesílán službou Web3Forms (Web3Forms, provozovatel formulářového relé), která zprávu doručí do e-mailové schránky Gmail provozované společností Google. Jiné příjemce nemáme.',
        },
        { h: 'Jak dlouho údaje uchováváme' },
        {
          p: 'Pouze po dobu nutnou k vyřízení vašeho dotazu a k případné navazující komunikaci. Poté zprávu z e-mailové schránky odstraníme, případně dříve na vaši žádost.',
        },
        { h: 'Věková hranice' },
        {
          p: 'Formulář je určen rodičům, učitelům a dospělým uživatelům. Pište prosím pouze z vlastní e-mailové adresy; adresy dětí ani jejich osobní údaje do formuláře nezadávejte.',
        },
        { h: 'Video z YouTube' },
        {
          p: 'Na úvodní stránce je trailer ke hře. Náhledový obrázek je uložený na našem serveru, takže se stránka na YouTube nepřipojí, dokud video sami nespustíte. Teprve po kliknutí se načte přehrávač z domény youtube-nocookie.com; od té chvíle může Google zpracovávat vaši IP adresu a údaje o přehrávání podle vlastních zásad ochrany soukromí. Odkazy na Instagram, Facebook, TikTok a YouTube v patičce jsou obyčejné odkazy – nic se z nich nenačítá, dokud na ně nekliknete.',
        },
        {
          p: 'Napsat nám i spustit video je zcela dobrovolné. Hru si můžete stáhnout z Google Play nebo zahrát v prohlížeči bez zadání jakýchkoli údajů.',
        },
      ],
    },
    {
      heading: '4. Jak informace používáme',
      blocks: [
        {
          p: 'Herní data uložená ve vašem zařízení používá aplikace pouze k tomu, aby:',
        },
        {
          list: [
            'zajistila fungování hry,',
            'uložila a obnovila herní postup,',
            'obnovila nebo bezpečně sloučila postup mezi zařízeními, je-li zapnutá cloudová záloha,',
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
      heading: '5. Soukromí dětí',
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
          p: 'Neprovozujeme žádný systém účtů a nemáme databázi s kopií postupu vašeho dítěte. Údaje, se kterými hra pracuje, jsou záměrně omezeny na minimum: žádné reklamy, žádné sledování, žádná volná komunikace a žádné veřejně viditelné jméno zadané dítětem.',
        },
      ],
    },
    {
      heading: '6. Reklama a nákupy',
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
      heading: '7. Služby třetích stran',
      blocks: [
        {
          p: 'Jedinou součástí třetí strany uvnitř aplikace, která zpracovává údaje uživatelů, jsou Služby her Google Play využité pro dobrovolnou cloudovou zálohu popsanou v části 2. Aplikace neobsahuje žádné reklamní ani analytické SDK.',
        },
        {
          p: 'K distribuci aplikace je využíván obchod Google Play. Google jako provozovatel obchodu zpracovává údaje o stažení a instalaci podle vlastních podmínek a zásad ochrany soukromí; tyto údaje nemáme k dispozici v podobě, která by nám umožnila identifikovat jednotlivé hráče.',
        },
        { p: 'Aktuální seznam služeb třetích stran:' },
        {
          list: [
            'Služby her Google Play (dobrovolná cloudová záloha, viz část 2),',
            'Google Play (distribuce aplikace),',
            'Web3Forms (doručení kontaktního formuláře na webu do e-mailu, viz část 3),',
            'Google Gmail (e-mailová schránka, do níž zprávy chodí),',
            'YouTube / Google (přehrávač traileru, načte se až na vaše kliknutí, viz část 3).',
          ],
        },
        {
          p: 'Numblop neprodává osobní údaje třetím stranám. Žádné další služby v současné době využívány nejsou; seznam bude v těchto zásadách udržován aktuální.',
        },
      ],
    },
    {
      heading: '8. Sdílení údajů',
      blocks: [
        {
          p: 'Neprodáváme, nepronajímáme ani neobchodujeme s údaji uživatelů.',
        },
        {
          p: 'Hra nám neodesílá nic, a nemáme tedy z hry co sdílet s poskytovateli služeb ani s dalšími třetími stranami. Jediným přenosem ven z hry je cloudová záloha, která putuje do Her Google Play na vlastní přihlášený účet hráče (viz část 2). Zprávy z kontaktního formuláře předáváme pouze službám nezbytným k jejich doručení do naší schránky (viz části 3 a 7), nikomu jinému. Údaje bychom dále poskytli pouze v rozsahu vyžadovaném platnými právními předpisy.',
        },
      ],
    },
    {
      heading: '9. Uchovávání údajů',
      blocks: [
        {
          p: 'Herní data zůstávají uložena ve vašem zařízení, dokud nesmažete data aplikace nebo aplikaci neodinstalujete. Odinstalací aplikace se tato data smažou.',
        },
        {
          p: 'Neprovozujeme žádné servery, na kterých by se data hry uchovávala. Data uložená ve vašem zařízení můžete kdykoli sami smazat v nastavení systému Android nebo odinstalací aplikace.',
        },
        {
          p: 'Cloudová záloha zůstává v datech Hry Google Play přihlášeného hráče, dokud není nahrazena nebo dokud hráč nevymaže data hry či profil Hry Google Play pomocí vlastních ovládacích prvků společnosti Google. Vypnutí cloudové zálohy v Numblopu zastaví další přístup ke Hrám Google Play, ale samo o sobě již uloženou zálohu nevymaže.',
        },
        {
          p: 'Zprávy z kontaktního formuláře uchováváme pouze po dobu nutnou k jejich vyřízení, jak je popsáno v části 3.',
        },
      ],
    },
    {
      heading: '10. Zabezpečení údajů',
      blocks: [
        {
          p: 'Herní data jsou uložena v soukromém úložišti aplikace, které systém Android chrání před přístupem jiných aplikací.',
        },
        {
          p: 'Cloudová záloha se do Her Google Play přenáší šifrovaným spojením. Žádný způsob elektronického ukládání ani přenosu není zcela bezpečný a absolutní bezpečnost nelze zaručit.',
        },
      ],
    },
    {
      heading: '11. Práva uživatelů a rodičů',
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
          p: 'O hráčích nevedeme žádné záznamy, a nemáme tedy na své straně co zpřístupnit, opravit ani vymazat. Data hry v zařízení jsou pod vaší kontrolou v nastavení systému Android a cloudová záloha je pod kontrolou hráče v ovládacích prvcích dat Her Google Play (viz části 2 a 9). Jediné, co držíme sami, jsou zprávy odeslané kontaktním formulářem; u nich svá práva uplatníte e-mailem na uvedené adrese a my korespondenci smažeme.',
        },
        {
          p: 'S dotazy se můžete kdykoli obrátit na numblop@gutcloud.cz.',
        },
      ],
    },
    {
      heading: '12. Mezinárodní zpracování údajů',
      blocks: [
        {
          p: 'Od hry nedostáváme nic, a nedochází tak k žádnému mezinárodnímu přenosu osobních údajů z naší strany. Je-li zapnutá cloudová záloha, přenáší se do společnosti Google a zpracovává se na její infrastruktuře, která se může nacházet i mimo Evropský hospodářský prostor, podle podmínek a záruk společnosti Google.',
        },
        {
          p: 'Zpráva odeslaná kontaktním formulářem prochází službami Web3Forms a Google, jejichž servery se mohou nacházet i mimo Evropský hospodářský prostor. Totéž platí pro přehrávač YouTube, pokud si trailer sami spustíte. Tyto přenosy se řídí podmínkami a zárukami uvedených poskytovatelů.',
        },
        {
          p: 'Distribuce prostřednictvím Google Play se řídí podmínkami a zásadami společnosti Google, včetně jejích pravidel pro mezinárodní přenosy.',
        },
      ],
    },
    {
      heading: '13. Změny těchto zásad',
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
      heading: '14. Kontakt',
      blocks: [
        {
          p: 'S dotazy, žádostmi nebo podněty k těmto zásadám se obraťte na:',
        },
        {
          fields: [
            { label: 'Vývojář', value: 'Michal Gut (LordLobotom)' },
            { label: 'E-mail', value: 'numblop@gutcloud.cz' },
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
  effectiveDate: '13 August 2026',
  intro: [
    'Numblop is an educational mathematics game designed to help children practise multiplication in a safe and playful environment.',
    'This Privacy Policy explains what information Numblop processes, how it is used, and what choices users and their parents or legal guardians have.',
    'In short: the complete game works offline, without signing in and without a Numblop account. There are no ads and no in-app purchases, and we run no analytics of our own.',
    'Two things are optional and under your control: cloud save, which sends one encrypted copy of the game progress to Google Play Games (section 2), and whatever you choose to do on this website — writing to us through the contact form, or clicking to start the YouTube trailer (section 3).',
    'One thing is not. The Android version includes Google’s Play Games component, which starts with the game whether or not cloud save is switched on, and may send Google diagnostic and performance information that Google also uses for analytics. Section 2 explains what that covers.',
  ],
  meta: {
    title: 'Privacy Policy – Numblop',
    description:
      'Numblop is a children’s game with no ads and no in-app purchases, playable entirely offline. Read the full privacy policy.',
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
            { label: 'Contact email', value: 'numblop@gutcloud.cz' },
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
          p: 'Numblop does not sell user data, does not use it for advertising, and runs no behavioural analytics. This section describes the game itself; information submitted through the contact form on this website is covered in section 3.',
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
            'application settings (language, audio, vibration, cloud save),',
            'an optional nickname typed in by the player,',
            'a random pseudonymous profile identifier generated by the game.',
          ],
        },
        {
          p: 'With cloud save switched off, this information stays on the device, apart from the standard Android device backup or device-to-device transfer, which is controlled entirely by your own Google account settings.',
        },
        {
          p: 'The nickname is used solely to address the player inside the game and is never published or shown to other players. Even so, we recommend not using a real name, email address, phone number, school name, or address as a nickname.',
        },
        { h: 'Google Play Games and cloud save' },
        {
          p: 'On Android, Numblop includes Google Play Games Services. Cloud save is on by default, but it works only when Google Play Games signs the device in. Google and, for a supervised child, Family Link control whether a Play Games profile exists and may be used. Cloud save can be switched off in Numblop’s Settings; the game then continues using only its local save.',
        },
        {
          p: 'When signed in with cloud save enabled, Numblop sends one encrypted Saved Games snapshot to Google. The snapshot contains the progress listed above, including the optional nickname and the random profile identifier, so that progress can be restored or safely combined across devices. Numblop also receives the Play Games player identifier needed to keep one account’s snapshot separate from another. Numblop does not receive the player’s email address and runs no account server of its own.',
        },
        {
          p: 'Google Play Games may itself process account and profile identifiers, IP address and approximate country or region, game activity and saved progress, device identifiers, and diagnostic information in order to provide, secure, troubleshoot and improve Play Games. Google handles that information under the Google Privacy Policy and the user’s Play Games privacy settings. We do not sell this data or use it for ads.',
        },
        { h: 'Technical and diagnostic data' },
        {
          p: 'Numblop contains no advertising SDK, no analytics SDK of our own, no crash reporting of our own, and no remote configuration. We receive no diagnostic information about your device and no statistics about how the game is played.',
        },
        {
          p: 'Google’s Play Games component is the exception, and it is not covered by the cloud-save switch. On Android it starts together with the game whether or not cloud save is enabled, and it may send Google device identifiers together with diagnostic and performance information, which Google also uses to analyse and improve Play Games. Switching cloud save off stops Numblop from signing in and from sending any snapshot; it does not stop Play Games itself from reporting to Google. Google’s own Play Games settings and the availability of Play Games on the device control that.',
        },
        { h: 'Online leaderboards' },
        {
          p: 'The current version of the game has no online leaderboard and no public profile. Cloud save is the only networked feature. If a leaderboard or a similar feature is ever added, this Privacy Policy and the Google Play Data safety declaration will be updated before that version is released.',
        },
      ],
    },
    {
      heading: '3. This Website (Contact Form and Video)',
      blocks: [
        {
          p: 'The website itself uses no cookies, runs no analytics, and does no cross-site tracking. It offers a contact form for sending us a question, an idea, or a bug report — that form is the only place where we obtain any information from you.',
        },
        { h: 'What we process' },
        {
          p: 'Only what you write yourself: an optional name, the email address we should reply to, the text of your message, and the language of the page you sent it from. Nothing else — no cookies, no analytics, no cross-site tracking.',
        },
        { h: 'Why we process it' },
        {
          p: 'Solely so that we can read your message and reply to it. We do not use your address for marketing, do not add it to any mailing list, and do not pass it on to anyone else.',
        },
        { h: 'Legal basis' },
        {
          p: 'Consent under Article 6(1)(a) GDPR, given by ticking the checkbox in the form. You may withdraw it at any time by writing to numblop@gutcloud.cz, and we will delete the correspondence.',
        },
        { h: 'Who receives the information' },
        {
          p: 'The form is delivered by Web3Forms (a form-to-email relay service), which sends the message to a Gmail mailbox operated by Google. There are no other recipients.',
        },
        { h: 'How long we keep it' },
        {
          p: 'Only as long as it takes to answer your enquiry and handle any follow-up. After that we delete the message from the mailbox — or earlier, at your request.',
        },
        { h: 'Age' },
        {
          p: 'The form is meant for parents, teachers, and adult users. Please write only from your own email address, and do not enter a child’s address or personal details into the form.',
        },
        { h: 'YouTube video' },
        {
          p: 'The home page carries a trailer for the game. The preview image is stored on our own server, so the page makes no connection to YouTube until you start the video yourself. Only after a click is the player loaded from youtube-nocookie.com; from that point Google may process your IP address and playback information under its own privacy policy. The Instagram, Facebook, TikTok and YouTube links in the footer are ordinary links — nothing is loaded from them unless you follow them.',
        },
        {
          p: 'Both writing to us and playing the video are entirely optional. You can download the game from Google Play or play it in your browser without submitting anything.',
        },
      ],
    },
    {
      heading: '4. How We Use Information',
      blocks: [
        {
          p: 'The game data stored on your device is used by the application only to:',
        },
        {
          list: [
            'provide and maintain the game,',
            'save and restore game progress,',
            'restore or safely combine that progress across devices when cloud save is on,',
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
      heading: '5. Children’s Privacy',
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
          p: 'We operate no account system and hold no database containing a copy of your child’s progress. The data the game does handle is minimised deliberately: no ads, no tracking, no free-form communication, and no publicly visible name entered by a child.',
        },
      ],
    },
    {
      heading: '6. Advertising and Purchases',
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
      heading: '7. Third-Party Services',
      blocks: [
        {
          p: 'The only third-party component inside the application that processes user data is Google Play Games Services, used for the optional cloud save described in section 2. There is no advertising or analytics SDK.',
        },
        {
          p: 'Google Play is used to distribute the application. As the store operator, Google processes download and installation information under its own terms and privacy policy; we do not receive that information in a form that would let us identify individual players.',
        },
        {
          p: 'A current list of third-party services:',
        },
        {
          list: [
            'Google Play Games Services (optional cloud save, see section 2),',
            'Google Play (application distribution),',
            'Web3Forms (delivering the website contact form to email, see section 3),',
            'Google Gmail (the mailbox the messages arrive in),',
            'YouTube / Google (the trailer player, loaded only on your click, see section 3).',
          ],
        },
        {
          p: 'Numblop does not sell personal information to third parties. No other services are used at this time; this list will be kept up to date in this Privacy Policy.',
        },
      ],
    },
    {
      heading: '8. Data Sharing',
      blocks: [
        { p: 'We do not sell, rent, or trade user information.' },
        {
          p: 'The game sends nothing to us, so we have nothing from it to share with service providers or any other third party. The only transfer out of the game is the cloud-save snapshot, which goes to Google Play Games on the player’s own signed-in account (see section 2). Messages from the contact form are passed only to the services needed to deliver them to our mailbox (see sections 3 and 7), and to no one else. Beyond that, information would only be disclosed to the extent required by applicable law.',
        },
      ],
    },
    {
      heading: '9. Data Retention',
      blocks: [
        {
          p: 'Game data remains stored on your device until the application data is cleared or the application is uninstalled. Uninstalling the application deletes this data.',
        },
        {
          p: 'We operate no servers on which game data would be retained. You can delete the data stored on your device at any time yourself, through the Android system settings or by uninstalling the application.',
        },
        {
          p: 'A cloud snapshot remains in the signed-in player’s Play Games data until it is replaced, or until the player deletes the game’s Play Games data or profile through Google’s own Play Games controls. Switching cloud save off in Numblop stops any further Play Games access, but it does not by itself delete a snapshot that is already stored.',
        },
        {
          p: 'Messages from the contact form are kept only for as long as it takes to answer them, as described in section 3.',
        },
      ],
    },
    {
      heading: '10. Data Security',
      blocks: [
        {
          p: "Game data is kept in the application's private storage, which Android protects from access by other applications.",
        },
        {
          p: 'The cloud-save snapshot is transmitted to Google Play Games over an encrypted connection. No method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.',
        },
      ],
    },
    {
      heading: '11. User and Parent Rights',
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
          p: 'We keep no records about players, so there is nothing on our side to disclose, correct, or delete. Game data on the device is under your control through the Android settings, and a cloud snapshot is under the player’s control through Google’s Play Games data controls (see sections 2 and 9). Messages sent through the contact form are the one thing we hold ourselves; to exercise your rights over those, write to the contact address and we will delete the correspondence.',
        },
        {
          p: 'You are welcome to contact us at numblop@gutcloud.cz with any question.',
        },
      ],
    },
    {
      heading: '12. International Data Processing',
      blocks: [
        {
          p: 'We receive nothing from the game, so there is no international transfer of personal information on our part. Where cloud save is enabled, the snapshot is transferred to Google and processed on Google’s infrastructure, which may be located outside the European Economic Area, under Google’s own terms and safeguards.',
        },
        {
          p: 'A message submitted through the contact form passes through Web3Forms and Google, whose servers may be located outside the European Economic Area. The same applies to the YouTube player if you choose to start the trailer. Those transfers are governed by the terms and safeguards of those providers.',
        },
        {
          p: "Distribution through Google Play is governed by Google's own terms and policies, including its rules on international transfers.",
        },
      ],
    },
    {
      heading: '13. Changes to This Privacy Policy',
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
      heading: '14. Contact',
      blocks: [
        {
          p: 'For questions, requests, or concerns regarding this Privacy Policy, contact:',
        },
        {
          fields: [
            { label: 'Developer', value: 'Michal Gut (LordLobotom)' },
            { label: 'Email', value: 'numblop@gutcloud.cz' },
            { label: 'Country', value: 'Czech Republic' },
          ],
        },
      ],
    },
  ],
}

const additionalPrivacyPolicies: Record<
  Exclude<Locale, 'cs' | 'en'>,
  PrivacyContent
> = generatedPrivacy

const privacyPolicies: Record<Locale, PrivacyContent> = {
  cs,
  en,
  ...additionalPrivacyPolicies,
}

export function getPrivacyContent(locale: Locale): PrivacyContent {
  return privacyPolicies[locale]
}
