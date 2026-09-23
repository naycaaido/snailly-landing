import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

/** Infinite horizontal marquee. `direction="left"` matches the Partner With spec (right to left). */
export function MarqueeX({
  children,
  direction = 'left',
  className,
}: {
  children: ReactNode
  direction?: 'left' | 'right'
  className?: string
}) {
  return (
    <div className={cx('overflow-hidden', className)}>
      <div
        className="flex w-max animate-marquee-x items-center gap-16"
        style={direction === 'right' ? { animationDirection: 'reverse' } : undefined}
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex items-center gap-16" aria-hidden={i === 1}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

/** Infinite vertical marquee column. `direction="down"` = moves top to bottom, `"up"` = bottom to top. */
export function MarqueeY({
  children,
  direction,
  className,
}: {
  children: ReactNode
  direction: 'up' | 'down'
  className?: string
}) {
  return (
    <div className={cx('h-full overflow-hidden', className)}>
      <div
        className={cx(
          'flex w-full flex-col gap-6',
          direction === 'down' ? 'animate-marquee-y-down' : 'animate-marquee-y-up',
        )}
      >
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-col gap-6" aria-hidden={i === 1}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}
