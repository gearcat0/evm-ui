import React from 'react'
import { CopyField } from 'evm-ui'

export const Address = () => (
  <CopyField value="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" truncate={6} />
)

export const Labeled = () => (
  <CopyField label="Safe" value="0x1a9C8182C09F50C8318d769245beA52c32BE35BC" truncate={6} />
)

export const TxHash = () => (
  <CopyField
    label="Tx"
    value="0x88b0 f2a1 4c3d 9e77 0a12 bb45 6789 cd01 2233 4455 6677 8899 aabb ccdd eeff 0011"
    truncate={8}
  />
)
