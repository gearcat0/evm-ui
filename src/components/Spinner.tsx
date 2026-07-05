import React from 'react'

export interface SpinnerProps {
  /** Diameter in pixels. */
  size?: number
  /** Accessible label for screen readers. */
  label?: string
}

/** Indeterminate loading spinner in the accent color. */
export function Spinner({ size = 16, label }: SpinnerProps) {
  return (
    <span
      className="evm-spinner"
      role="status"
      aria-label={label || 'Loading'}
      style={{ width: size, height: size }}
    />
  )
}
