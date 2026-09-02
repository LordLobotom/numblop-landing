// Regenerates web-optimized assets from the Numblop game repo's source art.
// Usage: node tools/prepare-assets.mjs [path-to-Numblop-repo]
import sharp from 'sharp'
import { access, mkdir } from 'node:fs/promises'
import path from 'node:path'

const numblopRepo = process.argv[2] ?? path.resolve(import.meta.dirname, '../../Numblop')
const root = path.resolve(import.meta.dirname, '..')

const branding = (f) => path.join(numblopRepo, 'ui/branding', f)
const shot = (f) => path.join(numblopRepo, 'store/screenshots', f)
const post = (f) => path.join(numblopRepo, 'store/posts', f)
const pub = (f) => path.join(root, 'public', f)
const siteIcon = path.join(root, 'app/numblop_icon.png')

await mkdir(pub('screenshots'), { recursive: true })
await mkdir(pub('posts'), { recursive: true })
await mkdir(pub('languages'), { recursive: true })

// Keep the website language picker visually identical to the game. Norwegian
// uses Bokmål (`nb`); Portuguese keeps its regional BCP 47 locale because the
// Brazilian and Portuguese editions have separate copy and flag artwork.
const languageFlags = {
  en: 'english',
  cs: 'czech',
  sk: 'slovakia',
  de: 'germany',
  es: 'spain',
  fi: 'finland',
  fr: 'france',
  nb: 'norway',
  pl: 'poland',
  sv: 'sweden',
  'pt-BR': 'brazil',
  'pt-PT': 'portugal',
  it: 'italy',
  da: 'denmark',
  nl: 'netherlands',
  ja: 'japan',
  ko: 'south-korea',
  tr: 'turkey',
  vi: 'vietnam',
  id: 'indonesia',
}

for (const [locale, source] of Object.entries(languageFlags)) {
  let sourcePath = path.join(numblopRepo, 'ui/buttons', `button_language_${source}.png`)
  if (locale === 'da') {
    // Transitional fallback until the typo is renamed in the game repository.
    // Prefer the corrected filename as soon as it exists.
    try {
      await access(sourcePath)
    } catch {
      sourcePath = path.join(numblopRepo, 'ui/buttons', 'button_languega_denmark.png')
    }
  }
  await sharp(sourcePath)
    .resize({ width: 96, height: 96 })
    .png({ compressionLevel: 9 })
    .toFile(pub(path.join('languages', `${locale}.png`)))
}

const wordmark = sharp(branding('numblop_wordmark.png')).trim()

await wordmark
  .clone()
  .resize({ width: 640 })
  .png({ compressionLevel: 9, palette: true })
  .toFile(pub('numblop-wordmark.png'))

// The hero renders the WebP copies (components/landing/hero.tsx). They are the
// largest above-the-fold images and `images.unoptimized` is on for the static
// export, so whatever ships here is exactly what the browser downloads.
await wordmark
  .clone()
  .resize({ width: 640 })
  .webp({ quality: 85, effort: 6 })
  .toFile(pub('numblop-wordmark.webp'))

await sharp(siteIcon)
  .trim()
  .resize({ width: 72, height: 72, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(pub('numblop-logo.png'))

// Favicon, apple-touch icon, manifest icons and the header mark. The 512px
// source is a full-colour PNG; quantising it costs nothing visible and takes it
// from ~117 kB to ~25 kB on a file every page requests.
for (const size of [512, 192, 72]) {
  await sharp(siteIcon)
    .resize({ width: size, height: size })
    .png({ compressionLevel: 9, palette: true })
    .toFile(pub(`numblop-icon-${size}.png`))
}

// 1200x630 OpenGraph banner: wordmark centered on the dark brand background.
// Two flat colours and a gradient, so a palette encode is ~10x smaller with no
// visible difference.
const ogWordmark = await wordmark
  .clone()
  .resize({ width: 900 })
  .png()
  .toBuffer()
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: '#12160a' },
})
  .composite([{ input: ogWordmark, gravity: 'center' }])
  .png({ compressionLevel: 9, palette: true, colours: 128 })
  .toFile(pub('og-image.png'))

// Real in-game captures (store/screenshots), one set per language. The order
// here defines the order of `dict.screenshots.captions`.
const screenshots = [
  ['home_accessories', 'home'],
  ['map', 'map'],
  ['choice', 'choice'],
  ['keypad', 'keypad'],
  ['reward', 'reward'],
  ['cosmetics', 'cosmetics'],
]
for (const [src, dest] of screenshots) {
  for (const locale of ['cs', 'en']) {
    await sharp(shot(path.join(locale, `${src}.png`)))
      .resize({ width: 540 })
      .webp({ quality: 82 })
      .toFile(pub(path.join('screenshots', `${dest}-${locale}.webp`)))
  }
}

// Store posters (store/posts) carry baked-in copy, so each one ships per locale.
// The game repo suffixes Czech assets with `_cz`; the site uses the `cs` locale code.
const posters = [
  ['multiplic_play', 'multiplication-fun'],
  ['learn_progress', 'step-by-step'],
  ['mistake_helps', 'mistakes-help'],
  ['mottivation_fun', 'rewards'],
]
for (const [src, dest] of posters) {
  for (const [repoLang, locale] of [
    ['cz', 'cs'],
    ['en', 'en'],
  ]) {
    await sharp(post(`${src}_${repoLang}.png`))
      .resize({ width: 720 })
      .webp({ quality: 82 })
      .toFile(pub(path.join('posts', `${dest}-${locale}.webp`)))
  }
}

// Transparent mascot cutout used as the hero companion.
const mascot = sharp(post('numblop.png')).trim().resize({ width: 440, fit: 'inside' })

await mascot.clone().png({ compressionLevel: 9 }).toFile(pub('numblop-mascot.png'))
await mascot
  .clone()
  .webp({ quality: 85, effort: 6 })
  .toFile(pub('numblop-mascot.webp'))

console.log('Assets regenerated.')
