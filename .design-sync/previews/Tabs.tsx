import React, { useState } from 'react'
import { Tabs } from 'evm-ui'

export const Default = () => {
  const [active, setActive] = useState('addresses')
  return (
    <Tabs
      active={active}
      onChange={setActive}
      tabs={[
        { id: 'addresses', label: 'Addresses', count: 24 },
        { id: 'chains', label: 'Chains', count: 10 },
        { id: 'settings', label: 'Settings' },
      ]}
    />
  )
}

export const OnSecond = () => {
  const [active, setActive] = useState('chains')
  return (
    <Tabs
      active={active}
      onChange={setActive}
      tabs={[
        { id: 'addresses', label: 'Addresses', count: 24 },
        { id: 'chains', label: 'Chains', count: 10 },
        { id: 'settings', label: 'Settings' },
      ]}
    />
  )
}
