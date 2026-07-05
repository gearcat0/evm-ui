import React from 'react'
import { ChainBadge } from 'evm-ui'

export const Networks = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <ChainBadge chainId={1} />
    <ChainBadge chainId={42161} />
    <ChainBadge chainId={8453} />
    <ChainBadge chainId={10} />
    <ChainBadge chainId={137} />
    <ChainBadge chainId={43114} />
  </div>
)

export const Unknown = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <ChainBadge chainId={324} />
    <ChainBadge chainId={9999} />
  </div>
)
