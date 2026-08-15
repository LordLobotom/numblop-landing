'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ExternalLink, Play, ShieldCheck } from 'lucide-react'
import { TRAILER_WATCH_URL, trailerEmbedUrl } from '@/lib/links'
import type { Dictionary } from '@/lib/i18n/dictionary'

// A facade, not an embed: the poster is a local copy of the video thumbnail, so
// the page contacts YouTube only once someone actually asks to watch. That is
// what section 3 of the privacy policy promises, and what keeps "no cross-site
// tracking" true for a page aimed at children's parents.
//
// Takes its own slice of the dictionary rather than the whole thing: this is the
// one client component on the landing page, and every prop it receives is
// serialized into the RSC payload the browser downloads.
export function Trailer({ dict }: { dict: Dictionary['trailer'] }) {
  // Holds the embed URL rather than a boolean: the URL has to carry the page's
  // own origin, which only exists in the browser, and this is a static export.
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  const playing = embedUrl !== null

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {dict.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          {dict.subheading}
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="relative aspect-video">
            {playing ? (
              <iframe
                src={embedUrl}
                title={dict.heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                // Overrides the site-wide `Referrer-Policy: no-referrer` for
                // this one request. YouTube needs to see the embedding domain
                // or it stops at "Error 153"; strict-origin sends only
                // https://numblop.gutcloud.cz/, never the path.
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setEmbedUrl(trailerEmbedUrl(window.location.origin))}
                aria-label={dict.play}
                className="group absolute inset-0 h-full w-full cursor-pointer outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
              >
                <Image
                  src="/trailer-poster.webp"
                  alt={dict.posterAlt}
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-foreground/10 transition-colors group-hover:bg-foreground/0" />
                <span className="absolute left-1/2 top-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 transition-transform group-hover:scale-110">
                  <Play className="size-8 translate-x-0.5 fill-current" aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.privacyNote}
        </p>

        <p className="mt-4 text-sm">
          <a
            href={TRAILER_WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-accent hover:underline"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            {dict.watchOnYoutube}
          </a>
        </p>
      </div>
    </section>
  )
}
