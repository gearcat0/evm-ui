import React from 'react'
import { Textarea } from 'evm-ui'

export const Placeholder = () => (
  <div style={{ maxWidth: 440 }}>
    <Textarea rows={4} placeholder="Paste calldata or a JSON transaction batch…" />
  </div>
)

export const WithCalldata = () => (
  <div style={{ maxWidth: 440 }}>
    <Textarea
      rows={4}
      defaultValue={'0xa9059cbb000000000000000000000000d8da6bf26964af9d7eed9e03e53415d37aa96045000000000000000000000000000000000000000000000000016345785d8a0000'}
    />
  </div>
)
