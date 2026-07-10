import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import type { MouseEvent } from 'react'
import type { Project } from '../data/projects'
import { getCategory } from '../data/projects'
import { ProjectImage } from './PlaceholderImage'

/**
 * Projekt-Kachel für das Referenzen-Grid.
 * Hover: sanfter Bild-Zoom + Cursor-Follow-Chip "Ansehen".
 */
export function ProjectCard({ project, aspect = '3/2' }: { project: Project; aspect?: string }) {
  const reducedMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const chipX = useSpring(cursorX, { stiffness: 320, damping: 26 })
  const chipY = useSpring(cursorY, { stiffness: 320, damping: 26 })

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  const cover = project.images[0]

  return (
    <Link
      to={`/referenzen/${project.slug}`}
      className="group block focus-visible:outline-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      aria-label={`Projekt ansehen: ${project.title}`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <motion.div
          className="h-full w-full"
          whileHover={reducedMotion ? undefined : { scale: 1.045 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectImage src={cover?.src} alt={cover?.alt ?? project.title} aspect={aspect} />
        </motion.div>

        {/* Cursor-Follow-Chip (nur Zeigegeräte, nur ohne reduced motion) */}
        {!reducedMotion && (
          <motion.span
            className="pointer-events-none absolute left-0 top-0 z-10 hidden select-none items-center gap-1.5 rounded-full bg-ink px-4 py-2 font-display text-xs font-semibold uppercase tracking-widest text-paper shadow-lg md:flex"
            style={{ x: chipX, y: chipY, translateX: '-50%', translateY: '-130%' }}
            initial={false}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            aria-hidden="true"
          >
            Ansehen
            <svg viewBox="0 0 16 16" fill="none" className="size-3">
              <path d="M4 12 12 4M6 4h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        )}
      </div>

      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-ink-faint">
            {getCategory(project.category).label} · {project.location}
          </p>
        </div>
        <span className="shrink-0 font-display text-sm text-ink-faint">{project.year}</span>
      </div>
    </Link>
  )
}
