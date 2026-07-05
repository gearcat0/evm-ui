import React from 'react'
import { Select } from 'evm-ui'

export const Default = () => (
  <div style={{ maxWidth: 340 }}>
    <Select defaultValue="1">
      <option value="1">Ethereum</option>
      <option value="42161">Arbitrum</option>
      <option value="8453">Base</option>
      <option value="10">Optimism</option>
      <option value="137">Polygon</option>
    </Select>
  </div>
)

export const Placeholder = () => (
  <div style={{ maxWidth: 340 }}>
    <Select defaultValue="">
      <option value="">Select a network…</option>
      <option value="1">Ethereum</option>
      <option value="42161">Arbitrum</option>
    </Select>
  </div>
)
