import React from 'react'
import { cx } from '../lib/cx'

export interface AddressTextProps {
  /** The full 0x address (or any hex string). */
  address: string
  /** Show a shortened `0x1234…abcd` form. */
  truncate?: boolean
  /** Leading/trailing hex chars to keep when truncating (default 4). */
  chars?: number
  /** Use the muted text color. */
  muted?: boolean
}

/** Monospace address display with optional middle-truncation. */
export function AddressText({ address, truncate, chars = 4, muted }: AddressTextProps) {
  const shown =
    truncate && address.length > 2 + chars * 2
      ? `${address.slice(0, 2 + chars)}…${address.slice(-chars)}`
      : address
  return (
    <span className={cx('evm-address', muted && 'evm-address--muted')} title={address}>
      {shown}
    </span>
  )
}
