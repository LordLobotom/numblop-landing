import Image from 'next/image'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { blogPath, getLocaleContent } from '@/lib/content'
import { getAboutContent } from '@/lib/i18n/about'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  const { ui } = getLocaleContent(locale)
  const about = getAboutContent(locale)

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <a href={`/${locale}/`} className="flex items-center gap-2">
          {/* 72px source for a 36px mark. The 512px original was ~117 kB on
              every page for a thumbnail. */}
          <Image
            src="/numblop-icon-72.png"
            alt="Numblop"
            width={72}
            height={72}
            priority
            className="size-9 rounded-lg"
          />
          <span className="hidden text-lg font-semibold sm:inline">Numblop</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Keep the project's story and editorial content reachable from
              every page without turning the compact header into a menu bar. */}
          <nav
            className="hidden items-center gap-4 sm:flex"
            aria-label={dict.hero.name}
          >
            <a
              href={`/${locale}/about/`}
              className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
            >
              {about.navLabel}
            </a>
            <a
              href={blogPath(locale)}
              className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline"
            >
              {ui.blog}
            </a>
          </nav>
          <LanguageToggle current={locale} />
          <ThemeToggle />
          <Button asChild size="lg" className="rounded-full font-semibold">
            {/* Points at the section offering both platforms rather than
                straight at Google Play — an iPhone or desktop visitor has no
                app to install. Locale-prefixed because the header also renders
                on /<locale>/privacy/ and /<locale>/contact/, where a bare
                fragment would go nowhere. */}
            <a href={`/${locale}/#get`}>
              <Download aria-hidden="true" />
              <span className="hidden sm:inline">{dict.header.getIt}</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
