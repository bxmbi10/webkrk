import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import { MagneticButton, Arrow } from '../components/MagneticButton'

export default function NotFound() {
  useSEO('Seite nicht gefunden – Architekturbüro Kurok')

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-center px-5 pt-24 sm:px-8">
      <Reveal from="none">
        <p className="kicker mb-4">Fehler 404</p>
      </Reveal>
      <TextReveal
        text="Diese Seite ist noch nicht gebaut."
        className="headline max-w-3xl text-5xl sm:text-7xl"
        delay={0.1}
      />
      <Reveal delay={0.35}>
        <p className="mt-6 max-w-xl text-lg text-ink-soft">
          Die angeforderte Adresse existiert nicht (mehr). Zurück zur Startseite –
          oder direkt zu den Referenzen.
        </p>
      </Reveal>
      <Reveal delay={0.45}>
        <div className="mt-10 flex flex-wrap gap-4">
          <MagneticButton to="/">Zur Startseite <Arrow /></MagneticButton>
          <MagneticButton to="/referenzen" variant="outline">Referenzen</MagneticButton>
        </div>
      </Reveal>
    </section>
  )
}
