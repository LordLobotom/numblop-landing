// Where the game can actually be played, in one place: the store listing and
// the CTA copy live in different files, and a stale app id would silently point
// the launch traffic at a 404.

export const GOOGLE_PLAY_APP_ID = 'cz.gutcloud.numblop'

export const GOOGLE_PLAY_URL = `https://play.google.com/store/apps/details?id=${GOOGLE_PLAY_APP_ID}`

// The Godot web export, served by the same nginx from ../Numblop's build. It is
// the only way to play on iOS and desktop until a native build exists, so it is
// a first-class option here, not a fallback.
export const WEB_BUILD_URL = '/play/'

export const INSTAGRAM_URL = 'https://www.instagram.com/numblopgame'

export const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@Numblop'

// Trailer. The page never contacts YouTube on load: the poster is a local copy
// of the video thumbnail (public/trailer-poster.webp) and the embed is only
// inserted after a click — see components/landing/trailer.tsx and section 3 of
// the privacy policy, which says exactly that.
export const TRAILER_VIDEO_ID = 'vcndnEocFzM'

export const TRAILER_WATCH_URL = `https://youtu.be/${TRAILER_VIDEO_ID}`

// youtube-nocookie.com is YouTube's own privacy-enhanced host: no persistent
// cookie until playback actually starts.
//
// The origin parameter is not optional here. nginx sends `Referrer-Policy:
// no-referrer` for the whole site, so without it YouTube cannot tell which
// domain is embedding the player and refuses to start with "Error 153 – video
// player configuration error". The iframe also carries its own referrerPolicy
// for the same reason; see components/landing/trailer.tsx.
export function trailerEmbedUrl(origin: string | undefined) {
  const params = new URLSearchParams({ autoplay: '1', rel: '0' })
  // On file:// the origin is the string "null", which YouTube rejects outright
  // — better to send nothing and let it fall back to the referrer.
  if (origin?.startsWith('http')) {
    params.set('origin', origin)
  }
  return `https://www.youtube-nocookie.com/embed/${TRAILER_VIDEO_ID}?${params}`
}
