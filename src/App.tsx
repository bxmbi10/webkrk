import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { useLenis } from './hooks/useLenis'

// Code-Splitting: jede Route als eigenes Chunk
const Home = lazy(() => import('./pages/Home'))
const Referenzen = lazy(() => import('./pages/Referenzen'))
const Projekt = lazy(() => import('./pages/Projekt'))
const Buero = lazy(() => import('./pages/Buero'))
const Partner = lazy(() => import('./pages/Partner'))
const Kontakt = lazy(() => import('./pages/Kontakt'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
const NotFound = lazy(() => import('./pages/NotFound'))

/** Scrollt bei Routenwechsel an den Seitenanfang. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  useLenis()
  const location = useLocation()
  const reducedMotion = useReducedMotion()

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="skip-link">Zum Inhalt springen</a>
      <ScrollToTop />
      <Nav />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={location.pathname}
          className="flex-1"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Suspense
            fallback={
              <div className="flex min-h-[60vh] items-center justify-center" aria-label="Seite wird geladen">
                <span className="font-display text-sm uppercase tracking-[0.25em] text-ink-faint">Laden …</span>
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/referenzen" element={<Referenzen />} />
              <Route path="/referenzen/:slug" element={<Projekt />} />
              <Route path="/buero" element={<Buero />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/kontakt" element={<Kontakt />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
