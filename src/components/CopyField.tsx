import React, { useState } from 'react'
import { cx } from '../lib/cx'

export interface CopyFieldProps {
  /** The full value copied to the clipboard. */
  value: string
  /** Optional muted label shown before the value. */
  label?: React.ReactNode
  /** Middle-truncate the shown value to this many leading/trailing chars. */
  truncate?: number
}

/** A monospace value with a one-click copy button (e.g. an address or hash). */
export function CopyField({ value, label, truncate }: CopyFieldProps) {
  const [copied, setCopied] = useState(false)
  const shown =
    truncate && value.length > truncate * 2 + 3
      ? `${value.slice(0, truncate)}…${value.slice(-truncate)}`
      : value
  const copy = () => {
    try {
      navigator.clipboard?.writeText(value)
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }
  return (
    <span className="evm-copyfield">
      {label && <span className="evm-copyfield__label">{label}</span>}
      <span className="evm-copyfield__value" title={value}>
        {shown}
      </span>
      <button
        className={cx('evm-copyfield__btn', copied && 'evm-copyfield__btn--copied')}
        onClick={copy}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </span>
  )
}
