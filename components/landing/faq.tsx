import type { LocaleContent } from '@/lib/content'

/**
 * Plain <details> rather than a JS accordion: the answers stay in the DOM for
 * crawlers either way, and this needs no client bundle. The matching `FAQPage`
 * JSON-LD is emitted by the page from the same `content.faq.items`, so the
 * markup and the visible text can never drift apart.
 */
export function Faq({ content }: { content: LocaleContent }) {
  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl">
            {content.faq.heading}
          </h2>
          <p className="mt-3 text-muted-foreground">{content.faq.subheading}</p>
        </div>
        <div className="divide-y divide-border/60 rounded-2xl border border-border bg-card">
          {content.faq.items.map((item) => (
            <details key={item.question} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
