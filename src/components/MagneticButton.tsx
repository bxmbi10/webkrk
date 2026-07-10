import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'
import type { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

interface MagneticButtonProps {
  children: ReactNode
  /** Interne Route (rendert <Link>) … */
  to?: string
  /** … oder externer Link (rendert <a>). */
  href?: string
  /** … oder Button (z. B. type="submit"). */
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'light'
  className?: string
  onClick?: () => void
}

const variants: Record<string, string> = {
  primary:
    'bg-ink text-paper hover:bg-accent',
  outline:
    'border border-ink/25 text-ink hover:border-accent hover:text-accent',
  light:
    'bg-paper text-ink hover:bg-accent hover:text-paper',
}

/**
 * Button mit Magnet-Effekt: folgt dem Cursor leicht, solange er darüber schwebt.
 * Bei reduzierter Bewegung oder Touch bleibt er statisch.
 */
export function MagneticButton({
  children,
  to,
  href,
  type,
  variant = 'primary',
  className = '',
  onClick,
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18 })
  const springY = useSpring(y, { stiffness: 260, damping: 18 })

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (reducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * 0.28)
    y.set((e.clientY - rect.top - rect.height / 2) * 0.28)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  const baseClass = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`

  const inner = (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  )

  if (to) {
    return (
      <Link to={to} className={baseClass} onMouseMove={handleMouseMove} onMouseLeave={reset} onClick={onClick}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {inner}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} className={baseClass} onMouseMove={handleMouseMove} onMouseLeave={reset} onClick={onClick}>
      {inner}
    </button>
  )
}

/** Pfeil-Glyph für CTAs. */
export function Arrow({ className = 'size-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
