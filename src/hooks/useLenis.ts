import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotion } from 'framer-motion'

/**
 * Aktiviert sanftes Scrollen (Lenis) für die gesamte Seite.
 * Bei `prefers-reduced-motion` bleibt natives Scrollen erhalten.
 */
export function useLenis() {
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const lenis = new Lenis({
      lerp: 0.12,
      wheelMultiplier: 1,
    })

    let rafId: number
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [reducedMotion])
}
