import React from 'react'
import { Input } from 'evm-ui'

export const Default = () => (
  <div style={{ maxWidth: 340 }}>
    <Input placeholder="Search addresses…" />
  </div>
)

export const Address = () => (
  <div style={{ maxWidth: 340 }}>
    <Input mono defaultValue="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
  </div>
)

export const Invalid = () => (
  <div style={{ maxWidth: 340 }}>
    <Input invalid mono defaultValue="0xnot-an-address" />
  </div>
)

export const Disabled = () => (
  <div style={{ maxWidth: 340 }}>
    <Input disabled mono defaultValue="0x0000000000000000000000000000000000000000" />
  </div>
)
