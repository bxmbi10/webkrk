import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { useSEO } from '../hooks/useSEO'
import { Reveal } from '../components/Reveal'
import { TextReveal } from '../components/TextReveal'
import { ProjectImage } from '../components/PlaceholderImage'
import { Lightbox } from '../components/Lightbox'
import { ContactCTA } from '../components/ContactCTA'
import { Arrow } from '../components/MagneticButton'
import { getProject, getCategory, projects } from '../data/projects'

/** Projekt-Detailseite (Template für alle Referenzen). */
export default function Projekt() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProject(slug) : undefined
  const reducedMotion = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useSEO(
    project
      ? `${project.title} – Referenzen | Architekturbüro Kurok`
      : 'Referenz – Architekturbüro Kurok',
    project?.teaser,
  )

  if (!project) return <Navigate to="/referenzen" replace />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]
  const [hero, ...gallery] = project.images

  return (
    <>
      <article className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <Reveal from="none">
          <Link to="/referenzen" className="link-underline inline-flex items-center gap-2 font-display text-sm font-medium text-ink-soft hover:text-accent">
            <Arrow className="size-4 rotate-180" />
            Alle Referenzen
          </Link>
        </Reveal>

        <div className="mt-8">
          <Reveal from="none" delay={0.05}>
            <p className="kicker mb-4">{getCategory(project.category).label}</p>
          </Reveal>
          <TextReveal text={project.title} className="headline max-w-4xl text-4xl sm:text-6xl lg:text-7xl" delay={0.1} />
        </div>

        {/* Hero-Bild */}
        {hero && (
          <Reveal delay={0.2}>
            <button
              className="group mt-12 block w-full cursor-zoom-in overflow-hidden rounded-xl"
              onClick={() => setLightboxIndex(0)}
              aria-label={`Bild vergrößern: ${hero.alt}`}
            >
              <motion.div
                whileHover={reducedMotion ? undefined : { scale: 1.03 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectImage src={hero.src} alt={hero.alt} aspect="16/8" eager />
              </motion.div>
            </button>
          </Reveal>
        )}

        {/* Beschreibung + Eckdaten */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[2fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            {project.description.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={`leading-relaxed ${i === 0 ? 'text-xl text-ink sm:text-2xl' : 'text-lg text-ink-soft'}`}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal from="right">
            <aside className="h-fit rounded-xl border border-line bg-paper-dim/50 p-7" aria-label="Projektdaten">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
                Eckdaten
              </h2>
              <dl className="mt-5 flex flex-col divide-y divide-line">
                <div className="flex justify-between gap-4 py-3">
                  <dt className="text-sm text-ink-faint">Ort</dt>
                  <dd className="text-right text-sm font-medium">{project.location}</dd>
                </div>
                {project.facts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-sm text-ink-faint">{fact.label}</dt>
                    <dd className="text-right text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </Reveal>
        </div>

        {/* Galerie */}
        {gallery.length > 0 && (
          <section className="mt-20" aria-label="Projektgalerie">
            <div className="columns-1 gap-6 sm:columns-2 [&>*]:mb-6">
              {gallery.map((image, i) => (
                <Reveal key={i} delay={(i % 2) * 0.1}>
                  <button
                    className="block w-full cursor-zoom-in overflow-hidden rounded-xl"
                    onClick={() => setLightboxIndex(i + 1)}
                    aria-label={`Bild vergrößern: ${image.alt}`}
                  >
                    <motion.div
                      whileHover={reducedMotion ? undefined : { scale: 1.03 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ProjectImage src={image.src} alt={image.alt} aspect={image.aspect} />
                    </motion.div>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {/* Vor/Zurück-Navigation */}
        <nav className="mt-20 grid gap-4 border-t border-line pt-10 sm:grid-cols-2" aria-label="Weitere Projekte">
          <Link to={`/referenzen/${prevProject.slug}`} className="group rounded-xl border border-line p-6 transition-colors hover:border-accent/50">
            <p className="flex items-center gap-2 text-sm text-ink-faint">
              <Arrow className="size-3.5 rotate-180" /> Vorheriges Projekt
            </p>
            <p className="mt-2 font-display text-lg font-semibold transition-colors group-hover:text-accent">
              {prevProject.title}
            </p>
          </Link>
          <Link to={`/referenzen/${nextProject.slug}`} className="group rounded-xl border border-line p-6 text-right transition-colors hover:border-accent/50">
            <p className="flex items-center justify-end gap-2 text-sm text-ink-faint">
              Nächstes Projekt <Arrow className="size-3.5" />
            </p>
            <p className="mt-2 font-display text-lg font-semibold transition-colors group-hover:text-accent">
              {nextProject.title}
            </p>
          </Link>
        </nav>
      </article>

      <Lightbox
        images={project.images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />

      <ContactCTA />
    </>
  )
}
