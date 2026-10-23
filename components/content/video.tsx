'use client'

import { ExternalLink, Play, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import type { Article } from '@/lib/content'
import { youtubeEmbedUrl } from '@/lib/links'

export function ArticleVideo({ video }: { video: NonNullable<Article['video']> }) {
  const [embedUrl, setEmbedUrl] = useState<string | null>(null)
  const watchUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold sm:text-2xl">{video.title}</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <div className="relative aspect-video">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() =>
                setEmbedUrl(youtubeEmbedUrl(video.youtubeId, window.location.origin))
              }
              aria-label={video.playLabel}
              className="group absolute inset-0 flex h-full w-full cursor-pointer flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_35%,oklch(0.72_0.17_55/0.45),transparent_38%),linear-gradient(145deg,oklch(0.22_0.04_290),oklch(0.12_0.03_285))] px-6 text-center text-white outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
            >
              {video.poster && (
                <Image
                  src={video.poster.src}
                  alt=""
                  width={video.poster.width}
                  height={video.poster.height}
                  sizes="(min-width: 768px) 26rem, 65vw"
                  className="absolute -bottom-[18%] right-[2%] h-[112%] w-auto object-contain opacity-85 sm:right-[8%]"
                />
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
              <span className="relative z-10 max-w-[70%] self-start text-left text-lg font-semibold sm:max-w-[55%] sm:text-2xl">
                {video.title}
              </span>
              <span className="relative z-10 mt-5 flex size-16 self-start items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform group-hover:scale-110">
                <Play className="size-7 translate-x-0.5 fill-current" aria-hidden="true" />
              </span>
            </button>
          )}
        </div>
      </div>
      <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
        {video.privacyNote}
      </p>
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        {video.watchLabel}
      </a>
    </section>
  )
}
