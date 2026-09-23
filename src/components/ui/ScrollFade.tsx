import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function ScrollFade({
  children,
  className,
  delay = 0,
  id,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  as?: 'div' | 'section'
}) {
  const Component = as === 'section' ? motion.section : motion.div
  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Component>
  )
}
