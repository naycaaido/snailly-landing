import type { ReactNode } from 'react'
import { Fragment } from 'react'

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
    <div className={`overflow-hidden ${className ?? ''}`}>
      <div
        className="flex w-max animate-marquee-x items-center gap-16"
        style={direction === 'right' ? { animationDirection: 'reverse' } : undefined}
      >
        {[0, 1].map((i) => (
          <Fragment key={i}>{children}</Fragment>
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
    <div className={`h-full overflow-hidden ${className ?? ''}`}>
      <div
        className={`flex w-full flex-col gap-6 ${
          direction === 'down' ? 'animate-marquee-y-down' : 'animate-marquee-y-up'
        }`}
      >
        {[0, 1].map((i) => (
          <Fragment key={i}>{children}</Fragment>
        ))}
      </div>
    </div>
  )
}
