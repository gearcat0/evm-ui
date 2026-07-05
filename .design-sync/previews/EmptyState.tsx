import React from 'react'
import { EmptyState, Button } from 'evm-ui'

export const Default = () => (
  <EmptyState
    title="No addresses yet"
    description="Add your first EVM address to start tracking chain activity."
    action={<Button variant="primary" size="sm">Add Address</Button>}
  />
)
