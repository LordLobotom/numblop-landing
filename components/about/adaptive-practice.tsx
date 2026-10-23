import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import type { AboutContent } from '@/lib/i18n/about'

const answers = [
  ['48', '54', '56', '64'],
  ['42', '48', '54', '56', '63', '64'],
]

function AnswerChoices({ count }: { count: 4 | 6 }) {
  return (
    <div
      className={`grid gap-2 ${count === 4 ? 'grid-cols-2' : 'grid-cols-3'}`}
      aria-hidden="true"
    >
      {answers[count === 4 ? 0 : 1].map((answer) => (
        <span
          key={answer}
          className="flex h-10 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold shadow-xs"
        >
          {answer}
        </span>
      ))}
    </div>
  )
}

export function AdaptivePractice({
  content,
}: {
  content: AboutContent['adaptive']
}) {
  return (
    <section className="bg-muted/50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {content.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{content.intro}</p>
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-[16.67%] right-[16.67%] top-7 hidden h-px bg-border md:block" />
          {content.stages.map((stage, index) => (
            <div key={stage.title} className="relative flex flex-col">
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-muted bg-primary text-lg font-bold text-primary-foreground shadow-sm">
                {index + 1}
              </div>
              {index < 2 && (
                <>
                  <ArrowDown
                    className="mx-auto my-2 size-5 text-accent md:hidden"
                    aria-hidden="true"
                  />
                  <ArrowRight
                    className="absolute -right-4 top-5 z-20 hidden size-5 rounded-full bg-muted text-accent md:block"
                    aria-hidden="true"
                  />
                </>
              )}
              <article className="mt-3 flex flex-1 flex-col rounded-3xl border border-border bg-card p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  {stage.label}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{stage.title}</h3>
                <div className="my-5 rounded-2xl bg-secondary/70 p-4">
                  <p className="mb-4 text-center text-2xl font-bold">
                    7 × 8 = ?
                  </p>
                  {index < 2 ? (
                    <AnswerChoices count={index === 0 ? 4 : 6} />
                  ) : (
                    <div
                      className="mx-auto flex h-12 max-w-32 items-center justify-center rounded-xl border-2 border-dashed border-accent/60 bg-background text-xl font-semibold text-muted-foreground"
                      aria-hidden="true"
                    >
                      ?
                    </div>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
              </article>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/50 bg-card px-5 py-5 sm:px-7">
          <p className="flex gap-3 font-semibold">
            <Check className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
            {content.principle}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  )
}
