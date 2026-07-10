import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ProjectImage as ProjectImageData } from '../data/projects'
import { ProjectImage } from './PlaceholderImage'

interface LightboxProps {
  images: ProjectImageData[]
  /** Index des geöffneten Bildes, null = geschlossen. */
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

/** Vollbild-Galerie mit Tastatursteuerung (Esc, Pfeiltasten). */
export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const open = index !== null

  const prev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const next = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [open, onClose, prev, next])

  const navButton =
    'absolute top-1/2 -translate-y-1/2 z-10 flex size-12 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-accent'

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/95 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`Bild ${index + 1} von ${images.length}: ${images[index].alt}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button
            className="absolute right-5 top-5 z-10 flex size-12 items-center justify-center rounded-full bg-paper/10 text-paper backdrop-blur transition-colors hover:bg-accent"
            onClick={onClose}
            aria-label="Galerie schließen"
            autoFocus
          >
            <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
              <path d="m3 3 10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button className={`${navButton} left-4`} onClick={(e) => { e.stopPropagation(); prev() }} aria-label="Vorheriges Bild">
                <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
                  <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className={`${navButton} right-4`} onClick={(e) => { e.stopPropagation(); next() }} aria-label="Nächstes Bild">
                <svg viewBox="0 0 16 16" fill="none" className="size-4" aria-hidden="true">
                  <path d="m6 3 5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <motion.figure
            key={index}
            className="max-h-full w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden rounded-lg">
              <ProjectImage src={images[index].src} alt={images[index].alt} aspect={images[index].aspect} />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-sm text-paper/70">
              <span>{images[index].alt}</span>
              <span className="font-display">
                {index + 1} / {images.length}
              </span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
