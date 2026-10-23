'use client'

import Image from 'next/image'
import { ArrowRight, Ghost, Globe, MoonStar, ShieldCheck, Smartphone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { GOOGLE_PLAY_URL, WEB_BUILD_URL } from '@/lib/links'
import type { Dictionary } from '@/lib/i18n/dictionary'
import { cn } from '@/lib/utils'

const HALLOWEEN_START = Date.parse('2026-10-23T00:00:00Z')
const HALLOWEEN_END = Date.parse('2026-11-08T00:00:00Z')

export function Hero({
  dict,
  halloween,
}: {
  dict: Dictionary
  halloween: { href: string; label: string }
}) {
  // The landing page is a static export, so the browser owns the short-lived
  // campaign window. The normal hero is the safe server-rendered default and
  // returns automatically after the promotion without requiring a redeploy.
  const [showHalloween, setShowHalloween] = useState(false)

  useEffect(() => {
    function updateSeason() {
      const now = Date.now()
      setShowHalloween(now >= HALLOWEEN_START && now < HALLOWEEN_END)
    }

    updateSeason()
    const interval = window.setInterval(updateSeason, 60 * 60 * 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      className={cn(
        'relative overflow-hidden transition-colors duration-500',
        showHalloween &&
          'border-b border-orange-300/50 bg-gradient-to-b from-orange-50/90 via-purple-50/40 to-background dark:border-orange-900/40 dark:from-[#211226] dark:via-[#18101f] dark:to-background',
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-0 transition-opacity duration-500',
          showHalloween
            ? 'bg-[radial-gradient(circle_at_18%_25%,rgba(249,115,22,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(126,34,206,0.22),transparent_32%)]'
            : 'bg-[radial-gradient(ellipse_at_top,_color-mix(in_srgb,var(--primary)_18%,transparent),transparent_60%)]',
        )}
      />
      {showHalloween && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <span className="absolute -right-10 top-10 size-40 rounded-full bg-amber-200/35 shadow-[0_0_80px_rgba(251,191,36,0.24)] sm:right-[8%] sm:size-52" />
          <MoonStar className="absolute right-[8%] top-16 size-10 text-amber-500/50 sm:right-[14%] sm:size-14" />
          <Ghost className="absolute left-[7%] top-28 size-9 -rotate-12 text-purple-500/25 sm:size-12" />
          <Ghost className="absolute bottom-28 right-[6%] size-7 rotate-12 text-orange-500/25 sm:size-10" />
        </div>
      )}
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
        {/* WebP, and the width/height are the real intrinsic sizes: the
            wordmark used to declare 320x213 against a 640x158 file, so the
            browser reserved the wrong box and the hero shifted on load. */}
        <Image
          src={
            showHalloween
              ? '/posts/halloween-numblop.webp'
              : '/numblop-mascot.webp'
          }
          alt=""
          width={showHalloween ? 768 : 440}
          height={showHalloween ? 768 : 463}
          priority
          sizes="(min-width: 640px) 10rem, 8rem"
          className={cn(
            '-mb-2 h-auto drop-shadow-xl transition-all duration-500',
            showHalloween ? 'w-36 sm:w-44' : 'w-32 sm:w-40',
          )}
        />
        <Image
          src="/numblop-wordmark.webp"
          alt="Numblop"
          width={640}
          height={158}
          priority
          sizes="(min-width: 640px) 18rem, 14rem"
          className="h-auto w-56 sm:w-72"
        />
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          {dict.hero.slogan}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="rounded-full border border-accent/40 bg-secondary px-4 py-1 text-sm font-semibold text-secondary-foreground">
            {dict.hero.badge}
          </p>
          {showHalloween && (
            <a
              href={halloween.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-orange-300/70 bg-orange-100/90 px-4 py-1 text-sm font-semibold text-orange-950 shadow-xs transition-colors hover:bg-orange-200 focus-visible:ring-[3px] focus-visible:ring-orange-500/40 focus-visible:outline-none dark:border-orange-700/70 dark:bg-orange-950/80 dark:text-orange-100 dark:hover:bg-orange-900"
            >
              <Ghost className="size-4" aria-hidden="true" />
              {halloween.label}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </a>
          )}
        </div>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          {dict.hero.tagline}
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          {dict.hero.shortDescription}
        </p>
        {/* Both platforms up front: Google Play for Android, the web build for
            iOS and desktop, where there is no native app to send people to. */}
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-10 text-lg font-semibold shadow-lg shadow-primary/30"
          >
            <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
              <Smartphone className="size-5" aria-hidden="true" />
              {dict.hero.googlePlay}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full px-10 text-lg font-semibold"
          >
            <a href={WEB_BUILD_URL}>
              <Globe className="size-5" aria-hidden="true" />
              {dict.hero.playWeb}
            </a>
          </Button>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          {dict.hero.privacy}
        </p>
      </div>
    </section>
  )
}
