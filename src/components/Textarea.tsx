import React from 'react'
import { cx } from '../lib/cx'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Mark the field as invalid. */
  invalid?: boolean
}

/** Multi-line text input for calldata, notes, and JSON payloads. */
export function Textarea({ invalid, className, ...rest }: TextareaProps) {
  return (
    <textarea className={cx('evm-textarea', invalid && 'evm-input--invalid', className)} {...rest} />
  )
}
