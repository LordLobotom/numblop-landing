import { Brain, Map, HeartHandshake, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import type { Dictionary } from '@/lib/i18n/dictionary'

const featureIcons = [Brain, Map, HeartHandshake]

export function WhyAdaptive({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          {dict.why.heading}
        </h2>
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-muted-foreground">
          {dict.why.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {dict.why.features.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <Card key={feature.title} className="gap-4 py-5">
                <CardContent className="flex flex-col gap-3 px-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {dict.why.quotes.map((quote) => (
            <blockquote
              key={quote}
              className="flex items-center gap-3 rounded-xl border border-primary/40 bg-card px-6 py-5 text-lg font-medium"
            >
              <Quote className="h-6 w-6 shrink-0 text-accent" aria-hidden="true" />
              {quote}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
