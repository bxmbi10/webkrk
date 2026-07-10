import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** Verzögerung in Sekunden, z. B. für gestaffelte Reihen. */
  delay?: number
  /** Einblendrichtung. */
  from?: 'bottom' | 'left' | 'right' | 'none'
  className?: string
}

/** Blendet Inhalte beim Scrollen sanft ein (einmalig, IntersectionObserver-basiert). */
export function Reveal({ children, delay = 0, from = 'bottom', className }: RevealProps) {
  const reducedMotion = useReducedMotion()

  const offset =
    from === 'bottom' ? { y: 36 } : from === 'left' ? { x: -36 } : from === 'right' ? { x: 36 } : {}

  return (
    <motion.div
      className={className}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
