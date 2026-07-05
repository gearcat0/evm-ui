import React from 'react'
import { StatusBar, StatusItem, StatusSpacer } from 'evm-ui'

export const Default = () => (
  <StatusBar>
    <StatusItem label="Network" value="Ethereum" />
    <StatusItem label="Block" value="21,459,003" />
    <StatusSpacer />
    <StatusItem label="Synced" value="just now" />
  </StatusBar>
)

export const WithError = () => (
  <StatusBar>
    <StatusItem label="RPC" value="mainnet.infura.io" />
    <StatusSpacer />
    <StatusItem tone="error">Rate limited — retrying</StatusItem>
  </StatusBar>
)
