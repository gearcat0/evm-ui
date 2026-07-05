import React from 'react'
import { TypeBadge } from 'evm-ui'

export const Types = () => (
  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
    <TypeBadge type="address" />
    <TypeBadge type="uint256" />
    <TypeBadge type="bool" />
    <TypeBadge type="bytes32" />
    <TypeBadge type="string" />
    <TypeBadge type="address[]" />
  </div>
)
