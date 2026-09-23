import { cx } from '../../lib/cx'

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cx(
        'rounded-full bg-cream px-3 py-1 text-xs font-medium text-body',
        className,
      )}
    >
      {children}
    </span>
  )
}
