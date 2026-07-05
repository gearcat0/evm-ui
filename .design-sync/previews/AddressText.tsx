import React from 'react'
import { AddressText } from 'evm-ui'

export const Full = () => (
  <AddressText address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
)

export const Truncated = () => (
  <AddressText address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" truncate />
)

export const Muted = () => (
  <AddressText address="0x0000000000000000000000000000000000000000" muted />
)
