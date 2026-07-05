import React from 'react'
import { Badge } from 'evm-ui'

export const Tones = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Badge tone="neutral">Draft</Badge>
    <Badge tone="accent">Synced</Badge>
    <Badge tone="info">Queued</Badge>
    <Badge tone="purple">Multisig</Badge>
  </div>
)

export const StatusDots = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Badge tone="success" dot>Executed</Badge>
    <Badge tone="warning" dot>Pending</Badge>
    <Badge tone="danger" dot>Failed</Badge>
  </div>
)
