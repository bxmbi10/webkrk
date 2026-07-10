import { motion, useReducedMotion } from 'framer-motion'

interface TextRevealProps {
  text: string
  /** HTML-Tag der Headline. */
  as?: 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  delay?: number
}

/**
 * Wort-für-Wort-Textreveal für große Headlines.
 * Jedes Wort gleitet aus einer unsichtbaren Zeile nach oben.
 */
export function TextReveal({ text, as: Tag = 'h1', className, delay = 0 }: TextRevealProps) {
  const reducedMotion = useReducedMotion()
  const words = text.split(' ')

  if (reducedMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
