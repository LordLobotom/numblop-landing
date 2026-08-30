import type { Block, Section } from '@/lib/content'

// One renderer for every long-form page: guides, articles and anything added
// later. Mirrors the block idiom the privacy policy already uses.
function ProseBlock({ block }: { block: Block }) {
  if ('h3' in block) {
    return <h3 className="mt-8 text-lg font-semibold text-foreground">{block.h3}</h3>
  }
  if ('list' in block) {
    return (
      <ul className="ml-5 list-disc space-y-2">
        {block.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )
  }
  return <p>{block.p}</p>
}

export function ProseSections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading} className="mt-10">
          <h2 className="text-xl font-semibold sm:text-2xl">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {section.blocks.map((block, index) => (
              <ProseBlock key={index} block={block} />
            ))}
          </div>
        </section>
      ))}
    </>
  )
}

export function ProseIntro({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="mt-6 space-y-4 text-lg text-muted-foreground">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
      ))}
    </div>
  )
}
