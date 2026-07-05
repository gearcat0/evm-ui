import React from 'react'
import { cx } from '../lib/cx'

export interface BadgeProps {
  /** Semantic color tone. */
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'purple'
  /** Show a leading status dot in the tone color. */
  dot?: boolean
  children: React.ReactNode
}

/** Compact pill for statuses, counts, and labels. */
export function Badge({ tone = 'neutral', dot, children }: BadgeProps) {
  return (
    <span className={cx('evm-badge', `evm-badge--${tone}`)}>
      {dot && <span className="evm-badge__dot" />}
      {children}
    </span>
  )
}
