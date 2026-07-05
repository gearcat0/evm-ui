# evm-ui

Shared design system for the EVM tooling app family (evmaddressbook, tx-builder,
and future related apps). Dark-first, near-black surfaces with a teal accent.

## Usage

```tsx
import { Button, ChainBadge, AddressText } from 'evm-ui'
import 'evm-ui/styles.css' // once, at the app root

<Button variant="primary">Add Address</Button>
<ChainBadge chainId={1} />
<AddressText address="0x1234…" truncate />
```

Every component styles itself through the `evm-` CSS classes in `styles.css`, and
the whole look is driven by CSS custom properties (`--evm-*`) defined at `:root`,
so a host app can retarget the theme by overriding tokens.

## Build

```sh
npm install
npm run build   # → dist/index.es.js, dist/styles.css, dist/*.d.ts
```
