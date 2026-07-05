import React from 'react'
import { Field, Input, Select } from 'evm-ui'

export const WithHint = () => (
  <div style={{ maxWidth: 360 }}>
    <Field label="Address" hint="An EOA or contract address">
      <Input mono placeholder="0x…" />
    </Field>
  </div>
)

export const Required = () => (
  <div style={{ maxWidth: 360 }}>
    <Field label="Network" required>
      <Select defaultValue="1">
        <option value="1">Ethereum</option>
        <option value="42161">Arbitrum</option>
      </Select>
    </Field>
  </div>
)

export const WithError = () => (
  <div style={{ maxWidth: 360 }}>
    <Field label="Address" error="Not a valid EVM address">
      <Input invalid mono defaultValue="0xzzz" />
    </Field>
  </div>
)
