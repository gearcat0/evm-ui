import React from 'react'
import { Spinner } from 'evm-ui'

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
    <Spinner size={14} />
    <Spinner size={20} />
    <Spinner size={28} />
  </div>
)

export const Inline = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center', color: 'var(--evm-text-2)' }}>
    <Spinner size={14} /> Scanning chains…
  </div>
)
