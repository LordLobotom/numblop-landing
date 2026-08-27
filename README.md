# numblop-landing

Ten-language marketing landing page for [Numblop](https://numblop.gutcloud.cz/) —
an adaptive multiplication-practice game for children built in Godot
(sibling repo `../Numblop`).

## Architecture

- Next.js App Router, **static export** (`output: 'export'`) — no server runtime.
- English, Czech, Slovak, German, Spanish, Finnish, French, Norwegian Bokmål,
  Polish, and Swedish are prebuilt locale routes (`app/[locale]/`). The root
  `/` is a client-side redirector that honours a stored language choice
  (`localStorage['numblop-locale']`), then the browser language, falling back
  to English. `lib/i18n/locales.ts` is the shared locale/SEO catalog.
- Dark/light mode via `next-themes` (class strategy, system default).
- Czech and English source copy lives in `lib/i18n/dictionary.ts`; the other
  complete dictionaries live in `lib/i18n/generated/dictionaries.json`. The
  privacy policy is kept separately in `lib/i18n/privacy.ts` plus
  `lib/i18n/generated/privacy.json` because it is long and rarely touched.
- Imagery comes from the game repo via `tools/prepare-assets.mjs`: the language
  picker reuses all ten game flags. Store posters (`store/posts/`) and in-game
  screenshots (`store/screenshots/`) currently ship with baked-in copy only in
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

## Serving

The shared user-level nginx (config in `../Numblop/deploy/nginx.conf`, systemd
unit `numblop-nginx.service`) serves this repo's `out/` directory at
`numblop.gutcloud.cz/` and the Godot web export at `numblop.gutcloud.cz/play/`.
A system-wide Cloudflare Tunnel forwards the public hostname to that nginx.

## Commands

```bash
corepack pnpm install
corepack pnpm dev          # local dev server
corepack pnpm build        # static export to out/ (this IS the deploy)
node tools/prepare-assets.mjs   # regenerate images from ../Numblop source art
deploy/update-landing.sh   # guarded production update (ff-only pull + build)
```
