# numblop-landing

Bilingual (CZ/EN) marketing landing page for [Numblop](https://numblop.gutcloud.cz/) —
an adaptive multiplication-practice game for children built in Godot
(sibling repo `../Numblop`).

## Architecture

- Next.js App Router, **static export** (`output: 'export'`) — no server runtime.
- `/cs/` and `/en/` are prebuilt locale routes (`app/[locale]/`); the root `/`
  is a client-side redirector that honours a stored language choice
  (`localStorage['numblop-locale']`), then browser language (cs/sk → Czech),
  falling back to Czech.
- Dark/light mode via `next-themes` (class strategy, system default).
- All copy lives in `lib/i18n/dictionary.ts` as typed CZ+EN dictionaries —
  a missing key in either language is a compile error.
- Brand: lime `#b9ef45` (solid fills only on light backgrounds — it fails
  contrast as text on white), Fredoka font with `latin-ext` for Czech diacritics.

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
