import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'

interface SectionHeadingProps {
  kicker: string
  title: string
  intro?: string
  align?: 'left' | 'center'
}

/** Einheitlicher Sektionskopf: Kicker, große Headline, optionaler Intro-Text. */
export function SectionHeading({ kicker, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <p className="kicker mb-4">{kicker}</p>
      </Reveal>
      <TextReveal as="h2" text={title} className="headline text-4xl sm:text-5xl lg:text-6xl" />
      {intro && (
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
