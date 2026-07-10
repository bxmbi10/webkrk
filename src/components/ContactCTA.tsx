import { Reveal } from './Reveal'
import { TextReveal } from './TextReveal'
import { MagneticButton, Arrow } from './MagneticButton'
import { site } from '../data/site'

/** Abschluss-Sektion: großer Kontakt-Aufruf auf Akzentfläche. */
export function ContactCTA() {
  return (
    <section className="bg-accent text-paper">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="kicker mb-4 text-paper/70!">Ihr Projekt</p>
        </Reveal>
        <TextReveal
          as="h2"
          text="Lassen Sie uns über Ihr Bauvorhaben sprechen."
          className="headline max-w-4xl text-4xl sm:text-6xl lg:text-7xl"
        />
        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton to="/kontakt" variant="light">
              Kontakt aufnehmen <Arrow />
            </MagneticButton>
            <a
              href={site.phoneHref}
              className="link-underline font-display text-lg font-medium text-paper"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
