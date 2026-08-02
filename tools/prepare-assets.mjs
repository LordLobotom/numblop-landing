// Regenerates web-optimized assets from the Numblop game repo's source art.
// Usage: node tools/prepare-assets.mjs [path-to-Numblop-repo]
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const numblopRepo = process.argv[2] ?? path.resolve(import.meta.dirname, '../../Numblop')
const root = path.resolve(import.meta.dirname, '..')

const branding = (f) => path.join(numblopRepo, 'ui/branding', f)
const mockup = (f) => path.join(numblopRepo, 'docs', f)
const pub = (f) => path.join(root, 'public', f)

await mkdir(pub('screenshots'), { recursive: true })

const wordmark = sharp(branding('numblop_wordmark.png')).trim()

await wordmark
  .clone()
  .resize({ width: 640 })
  .png({ compressionLevel: 9, palette: true })
  .toFile(pub('numblop-wordmark.png'))

await sharp(branding('numblop_ico.png'))
  .trim()
  .resize({ width: 72, height: 72, fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png({ compressionLevel: 9 })
  .toFile(pub('numblop-logo.png'))

await sharp(branding('numblop_ico.png'))
  .resize({ width: 512, height: 512 })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'app/icon.png'))

// Apple touch icons are shown on an opaque tile; flatten onto the brand lime.
await sharp(branding('numblop_ico.png'))
  .flatten({ background: '#b9ef45' })
  .resize({ width: 180, height: 180 })
  .png({ compressionLevel: 9 })
  .toFile(path.join(root, 'app/apple-icon.png'))

// 1200x630 OpenGraph banner: wordmark centered on the dark brand background.
const ogWordmark = await wordmark
  .clone()
  .resize({ width: 900 })
  .png()
  .toBuffer()
await sharp({
  create: { width: 1200, height: 630, channels: 4, background: '#12160a' },
})
  .composite([{ input: ogWordmark, gravity: 'center' }])
  .png({ compressionLevel: 9 })
  .toFile(pub('og-image.png'))

const screenshots = [
  ['mockup_main_screen.png', 'main-screen.png'],
  ['mockup_map.png', 'map.png'],
  ['mockup_arena.png', 'arena.png'],
]
for (const [src, dest] of screenshots) {
  await sharp(mockup(src))
    .resize({ width: 480 })
    .png({ compressionLevel: 9, palette: true })
    .toFile(pub(path.join('screenshots', dest)))
}

console.log('Assets regenerated.')
