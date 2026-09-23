import { useState } from 'react'
import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

function PauseIcon({ paused }: { paused: boolean }) {
  return paused ? (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
      <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
    </svg>
  )
}

function PauseButton({ paused, onToggle }: { paused: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={paused ? 'Play marquee' : 'Pause marquee'}
      aria-pressed={paused}
      className="absolute right-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-cream text-ink transition-colors hover:bg-white"
    >
      <PauseIcon paused={paused} />
    </button>
  )
}

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
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative">
      <PauseButton paused={paused} onToggle={() => setPaused((v) => !v)} />
      <div className={cx('overflow-hidden', className)}>
        <div
          className={cx(
            'flex w-max animate-marquee-x items-center gap-16',
            paused && '[animation-play-state:paused]',
          )}
          style={direction === 'right' ? { animationDirection: 'reverse' } : undefined}
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-16" aria-hidden={i === 1}>
              {children}
            </div>
          ))}
        </div>
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
  const [paused, setPaused] = useState(false)

  return (
    <div className="relative h-full">
      <PauseButton paused={paused} onToggle={() => setPaused((v) => !v)} />
      <div className={cx('h-full overflow-hidden', className)}>
        <div
          className={cx(
            'flex w-full flex-col gap-6',
            direction === 'down' ? 'animate-marquee-y-down' : 'animate-marquee-y-up',
            paused && '[animation-play-state:paused]',
          )}
        >
          {[0, 1].map((i) => (
            <div key={i} className="flex flex-col gap-6" aria-hidden={i === 1}>
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
