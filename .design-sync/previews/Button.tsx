import React from 'react'
import { Button } from 'evm-ui'

export const Variants = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary">Add Address</Button>
    <Button variant="secondary">Import</Button>
    <Button variant="ghost">Cancel</Button>
    <Button variant="danger">Delete Book</Button>
  </div>
)

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
  </div>
)

export const States = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <Button variant="primary" disabled>Signing…</Button>
    <Button variant="secondary" disabled>Disabled</Button>
    <Button variant="primary" block style={{ maxWidth: 160 }}>Full width</Button>
  </div>
)
