import React from 'react'
import { cx } from '../lib/cx'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Mark the field as invalid. */
  invalid?: boolean
}

/** Native select styled to match the design system, with a custom chevron. */
export function Select({ invalid, className, children, ...rest }: SelectProps) {
  return (
    <select className={cx('evm-select', invalid && 'evm-input--invalid', className)} {...rest}>
      {children}
    </select>
  )
}
