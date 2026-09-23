import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

const BASE =
  'rounded-full bg-primary text-sm font-medium text-white transition-colors hover:bg-primary-dark'

const SIZE = {
  sm: 'px-6 py-3',
  md: 'px-8 py-4',
} as const

export function Button({
  children,
  href,
  size = 'md',
  className,
  ...rest
}: {
  children: ReactNode
  href: string
  size?: keyof typeof SIZE
  className?: string
  target?: string
  rel?: string
  onClick?: () => void
}) {
  return (
    <a href={href} className={cx(BASE, SIZE[size], className)} {...rest}>
      {children}
    </a>
  )
}
