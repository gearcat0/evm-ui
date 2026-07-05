import React from 'react'
import { cx } from '../lib/cx'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis of the action. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  /** Control size. */
  size?: 'sm' | 'md' | 'lg'
  /** Stretch to fill the available width. */
  block?: boolean
}

/**
 * The primary action control. Use `primary` for the main affordance on a view,
 * `secondary` for neutral actions, `ghost` for low-emphasis inline actions, and
 * `danger` for destructive ones.
 */
export function Button({
  variant = 'secondary',
  size = 'md',
  block,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx(
        'evm-btn',
        `evm-btn--${variant}`,
        size !== 'md' && `evm-btn--${size}`,
        block && 'evm-btn--block',
        className
      )}
      {...rest}
    />
  )
}
