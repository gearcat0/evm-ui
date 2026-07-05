import React from 'react'
import { cx } from '../lib/cx'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render the value in a monospace font (addresses, hashes, amounts). */
  mono?: boolean
  /** Mark the field as invalid (red border + focus ring). */
  invalid?: boolean
}

/** Single-line text input. Pair with {@link Field} for a label and error text. */
export function Input({ mono, invalid, className, ...rest }: InputProps) {
  return (
    <input
      className={cx('evm-input', mono && 'evm-input--mono', invalid && 'evm-input--invalid', className)}
      {...rest}
    />
  )
}
