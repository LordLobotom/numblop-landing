import { ArrowRight } from 'lucide-react'
import { RelatedContent } from '@/components/content/related'
import type { Locale } from '@/lib/i18n/locales'
import { blogPath, getLocaleContent, relatedLinks } from '@/lib/content'

/**
 * The landing page's entry point into the guides and the blog. This is the only
 * place the deeper content is linked from the home page — deliberately a single
 * readable block rather than a keyword-stuffed footer.
 */
export function Explore({ locale }: { locale: Locale }) {
  const content = getLocaleContent(locale)

  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <RelatedContent
          heading={content.ui.guides}
          links={relatedLinks(locale)}
          divider={false}
        />
        <a
          href={blogPath(locale)}
          className="mt-6 inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
        >
          {content.ui.blogTitle}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
