import React from 'react'
import { StatusItem } from 'evm-ui'

export const Items = () => (
  <div
    style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      background: 'var(--evm-surface-1)',
      padding: '6px 12px',
      borderRadius: 6,
    }}
  >
    <StatusItem label="Gas" value="12 gwei" />
    <StatusItem label="Nonce" value="42" />
    <StatusItem tone="error">Disconnected</StatusItem>
  </div>
)
