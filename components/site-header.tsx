import Image from 'next/image'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import type { Dictionary, Locale } from '@/lib/i18n/dictionary'

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale
  dict: Dictionary
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4">
        <a href={`/${locale}/`} className="flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Numblop"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold">Numblop</span>
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
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
              {dict.header.getIt}
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
