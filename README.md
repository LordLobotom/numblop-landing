# numblop-landing

Twenty-language marketing landing page for [Numblop](https://numblop.gutcloud.cz/) —
an adaptive multiplication-practice game for children built in Godot
(sibling repo `../Numblop`).

## Architecture

- Next.js App Router, **static export** (`output: 'export'`) — no server runtime.
- English, Czech, Slovak, German, Spanish, Finnish, French, Norwegian Bokmål,
  Polish, Swedish, Brazilian Portuguese, European Portuguese, Italian, Danish,
  Dutch, Japanese, Korean, Turkish, Vietnamese, and Indonesian are prebuilt
  locale routes (`app/[locale]/`).
  `lib/i18n/locales.ts` is the shared locale/SEO catalog.
- The root `/` is redirected **server-side**: nginx answers it with a 302 to the
  Accept-Language match (`deploy/nginx-locale-redirect.conf` — install it once,
  it is not part of the build). The static `/index.html` remains the fallback
  for no-JS clients and for hosts without the snippet: a crawlable language
  picker that honours a stored choice (`localStorage['numblop-locale']`), then
  the browser language, falling back to English, with `rel=canonical` to `/en/`.
- Dark/light mode via `next-themes` (class strategy, system default).
- Czech and English source copy lives in `lib/i18n/dictionary.ts`; the other
  complete dictionaries live in `lib/i18n/generated/dictionaries.json`. The
  privacy policy is kept separately in `lib/i18n/privacy.ts` plus
  `lib/i18n/generated/privacy.json` because it is long and rarely touched.
- Imagery comes from the game repo via `tools/prepare-assets.mjs`: the language
  picker uses all twenty-one language flags. Store posters (`store/posts/`) and
  in-game screenshots (`store/screenshots/`) currently ship with baked-in copy only in
  Czech and English, so the other locale pages use English artwork with fully
  localized surrounding copy and alt text.
- Brand: lime `#b9ef45` (solid fills only on light backgrounds — it fails
  contrast as text on white), Fredoka font with `latin-ext` for Czech diacritics.
- **Getting people into the game** is what the page is for. Two destinations,
  both first-class, defined once in `lib/links.ts`: the Google Play listing
  (`cz.gutcloud.numblop`) for Android, and the Godot web export at `/play/` for
  iOS and desktop, where there is no native build. They appear together in the
  hero, in the `#get` section (`components/landing/download.tsx`) and in the
  closing CTA; the header button points at `/<locale>/#get` rather than straight
  at the store, so an iPhone visitor is not sent to an app they cannot install.
- **Trailer** (`components/landing/trailer.tsx`): a click-to-load facade, not an
  embed. The poster (`public/trailer-poster.webp`) is a local copy of the YouTube
  thumbnail — unlike the rest of `public/`, it does *not* come from
  `tools/prepare-assets.mjs`, so re-cut the trailer and it has to be replaced by
  hand. The `youtube-nocookie.com` iframe is inserted only after a click, which
  is what keeps "no cross-site tracking" honest and is described that way in
  section 3 of the privacy policy. Video id and channel live in `lib/links.ts`.
- **Contact form**: a secondary page at `/<locale>/contact/`, linked from the
  footer, collecting an optional name, an email and a message. There is no
  backend — the browser posts to Web3Forms, which emails the submission to the
  inbox the access key belongs to. Config lives in `lib/contact.ts`; the access
  key is public by design (an alias for an inbox, not a credential) and is
  deliberately not an env var, because `deploy/update-landing.sh` builds on the
  server where a missing `.env.local` would silently ship a dead form.
  **Section 3 of the privacy policy (`lib/i18n/privacy.ts`) describes exactly
  what this form collects — any change to the form's fields has to be reflected
  there first.**

## Editorial content and SEO

Everything beyond the landing page lives in `lib/content/`, deliberately apart
from `lib/i18n/` — `Dictionary` is mirrored by the generated
`dictionaries.json`, and prose-sized fields would fight the generator on every
regeneration.

- `lib/content/locales/<locale>.ts` (or generated `.json`) — per locale: the landing FAQ, three
  evergreen guides, and the blog articles. `lib/content/types.ts` defines the
  block idiom (`{p} | {list} | {h3}`), the same one the privacy policy uses, and
  one renderer (`components/content/prose.tsx`) covers every long-form page.
- `lib/content/index.ts` is the registry and the single source of URLs.
  **Slugs are localized** (`/cs/procvicovani-nasobilky/` vs
  `/en/times-tables-practice/`), so pages are paired across languages by a
  stable `id`, never by path. `seoPagePaths(id)` / `articlePaths(id)` build the
  hreflang map; `localeAlternatesFromPaths` in `lib/seo.ts` turns it into
  metadata. `localeAlternates` in `lib/i18n/locales.ts` still covers the routes
  that do share one path across locales (home, contact, privacy, blog index).
- `lib/i18n/generated/content-routes.json` is the small client-side counterpart
  used by the language picker. It pairs translated guide and article slugs so a
  language change stays on the equivalent page instead of producing a 404.
- Three guides per locale, each targeting one search intent, framed for the
  local market rather than translated: practice, learning through play, and a
  third that is homeschooling where that is a real intent (cs, sk, en, pl) and
  formative assessment / progress tracking in the other seventeen markets.
  Adding a fourth means adding an id to `seoPageIds` and an entry to all
  twenty-one locale files — the type will tell you which are missing.
- Blog at `/<locale>/blog/`, articles at `/<locale>/blog/<localized-slug>/`,
  with `BlogPosting` markup, breadcrumbs and publication dates. Add a post by
  extending `articleIds` and every locale file; routes, sitemap, hreflang and
  related-links all follow automatically.
- Cross-links are generated (`relatedLinks`, `guideLinks`), never authored, so a
  new page is linked from its siblings the moment it exists.
- Structured data is centralised in `components/structured-data.tsx` and shares
  one `@id` graph (`#organization`, `#website`, `#app`). **It must never carry
  ratings or review counts** — there is no verifiable source for them and
  fabricated review markup is a manual-action offence.
- `lastModified` in `app/sitemap.ts` comes from `updated` fields in the content
  and from `lib/content/revisions.ts`. Do **not** reintroduce `new Date()`:
  stamping every URL with the build time claims the whole site changed on every
  deploy, which crawlers learn to ignore. Bump the date when the copy changes.

## Serving

The shared user-level nginx (config in `../Numblop/deploy/nginx.conf`, systemd
unit `numblop-nginx.service`) serves this repo's `out/` directory at
`numblop.gutcloud.cz/` and the Godot web export at `numblop.gutcloud.cz/play/`.
A system-wide Cloudflare Tunnel forwards the public hostname to that nginx.

`deploy/nginx-locale-redirect.conf` adds the 302 on `/`. **It is already
installed** in `../Numblop/deploy/nginx.conf` (the `map` in `http { }`, the
`location = /` in the `server { }`) — the file here is the source of truth to
copy from if that config is ever rebuilt. It is *not* touched by
`deploy/update-landing.sh`, so a redeploy never reapplies it; changing the
locale list means editing the live nginx config by hand and reloading:

```bash
~/.local/opt/nginx-1.24.0/usr/sbin/nginx -p ~/src/Numblop/ -c deploy/nginx.conf -t
systemctl --user reload numblop-nginx
```

Note that `../Numblop/deploy/` is untracked, so that config is not in version
control — take a copy before editing it. Without the block the site still
works; `/` just falls back to the static language picker.

## Commands

```bash
corepack pnpm install
corepack pnpm dev          # local dev server
corepack pnpm build        # static export to out/ (this IS the deploy)
node tools/prepare-assets.mjs   # regenerate images from ../Numblop source art
deploy/update-landing.sh   # guarded production update (ff-only pull + build)
```
