import React from 'react'
import { Card, Button } from 'evm-ui'

export const WithHeader = () => (
  <div style={{ maxWidth: 420 }}>
    <Card title="Cold Storage" subtitle="12 addresses" actions={<Button size="sm">Sync</Button>}>
      <div style={{ color: 'var(--evm-text-2)' }}>
        Watch-only address book, synced to a shared Anytype space.
      </div>
    </Card>
  </div>
)

export const Plain = () => (
  <div style={{ maxWidth: 420 }}>
    <Card>
      <div style={{ color: 'var(--evm-text-2)' }}>A simple surface with no header.</div>
    </Card>
  </div>
)

export const Flat = () => (
  <div style={{ maxWidth: 420 }}>
    <Card flat title="Summary">
      <div style={{ color: 'var(--evm-text-2)' }}>Flat variant for nested regions.</div>
    </Card>
  </div>
)
