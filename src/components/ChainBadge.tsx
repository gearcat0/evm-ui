import React from 'react'
import { CHAIN_COLORS, CHAIN_NAMES } from '../lib/chains'

export interface ChainBadgeProps {
  /** EVM chain id, e.g. 1 for Ethereum mainnet. */
  chainId: number
  /** Override the displayed network name (defaults to the known name). */
  name?: string
  /** Optional network icon URL; falls back to a chain-colored dot. */
  iconUrl?: string
  /** Render as an external link (e.g. to a block explorer). */
  href?: string
}

/** A network label: chain-colored dot (or icon) + the network name. */
export function ChainBadge({ chainId, name, iconUrl, href }: ChainBadgeProps) {
  const label = name ?? CHAIN_NAMES[chainId] ?? `Chain ${chainId}`
  const color = CHAIN_COLORS[chainId]
  const inner = (
    <>
      {iconUrl ? (
        <img className="evm-chain-badge__icon" src={iconUrl} alt="" />
      ) : (
        <span
          className="evm-chain-badge__dot"
          style={{ ['--evm-chain-color' as string]: color } as React.CSSProperties}
        />
      )}
      {label}
    </>
  )
  return href ? (
    <a className="evm-chain-badge" href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    <span className="evm-chain-badge">{inner}</span>
  )
}
