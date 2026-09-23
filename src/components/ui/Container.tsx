import type { ReactNode } from 'react'
import { cx } from '../../lib/cx'

export function Container({
  children,
  className,
  py = 'py-20',
  ...rest
}: {
  children: ReactNode
  className?: string
  py?: string
  id?: string
}) {
  return (
    <div className={cx('mx-auto max-w-[1300px] px-6', py, className)} {...rest}>
      {children}
    </div>
  )
}
