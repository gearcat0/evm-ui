import React from 'react'
import { cx } from '../lib/cx'

export interface TypeBadgeProps {
  /** A Solidity type string, e.g. "address", "uint256", "bool", "bytes32". */
  type: string
}

/** Monospace badge that color-codes a Solidity ABI type by category. */
export function TypeBadge({ type }: TypeBadgeProps) {
  const base = type.replace(/\[\]$/, '')
  let kind: 'default' | 'address' | 'uint' | 'bool' | 'bytes' = 'default'
  if (base === 'address') kind = 'address'
  else if (/^u?int\d*$/.test(base)) kind = 'uint'
  else if (base === 'bool') kind = 'bool'
  else if (/^bytes\d*$/.test(base) || base === 'string') kind = 'bytes'
  return (
    <span className={cx('evm-typebadge', kind !== 'default' && `evm-typebadge--${kind}`)}>{type}</span>
  )
}
