import React from 'react'
import { Table, AddressText, ChainBadge, Badge } from 'evm-ui'

export const AddressBook = () => (
  <Table
    zebra
    columns={[
      { key: 'name', header: 'Name' },
      { key: 'address', header: 'Address', render: (r) => <AddressText address={r.address} truncate /> },
      {
        key: 'chains',
        header: 'Chains',
        render: (r) => (
          <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
            {r.chains.map((c: number) => (
              <ChainBadge key={c} chainId={c} />
            ))}
          </div>
        ),
      },
      {
        key: 'status',
        header: 'Status',
        align: 'right',
        render: (r) => (
          <Badge tone={r.status === 'active' ? 'success' : 'neutral'} dot>
            {r.status}
          </Badge>
        ),
      },
    ]}
    rows={[
      { name: 'Vitalik', address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', chains: [1, 42161], status: 'active' },
      { name: 'Treasury', address: '0x1a9C8182C09F50C8318d769245beA52c32BE35BC', chains: [1, 8453, 10], status: 'active' },
      { name: 'Cold wallet', address: '0x220866B1A2219f40e72f5c628B65D54268cA3A9D', chains: [1], status: 'idle' },
    ]}
  />
)
