# evm-ui conventions

Shared design system for a family of EVM tooling apps. **Dark-first**: near-black
surfaces (`--evm-bg: #08080a`) with a teal accent (`--evm-accent: #00e4b8`).

## Setup

No provider or theme wrapper is required. Import the stylesheet once at the app
root; it defines all tokens on `:root` and sets the near-black body canvas:

```tsx
import 'evm-ui/styles.css'
import { Button, Card, ChainBadge } from 'evm-ui'
```

Components are plain React — configured through **props**, not className. They
style themselves internally via the `evm-` classes in the stylesheet, so you do
not pass utility classes to them. Because the DS is dark-first, build screens on
a dark surface (`--evm-bg` / `--evm-surface-1`) — light backgrounds break the
light text tokens.

## Styling idiom — use the tokens for your own layout glue

The design language is carried by **CSS custom properties**. For your own
wrappers/spacing/color, reference `var(--evm-*)`; **never introduce raw hex
colors** — always map to a token. Real token families (all under `:root`):

- **Surfaces**: `--evm-bg`, `--evm-surface-1|2|3|4` (canvas → raised)
- **Borders**: `--evm-border`, `--evm-border-strong`
- **Text**: `--evm-text-1|2|3|4` (primary → faint), `--evm-text-on-accent`
- **Accent**: `--evm-accent`, `--evm-accent-hover`, `--evm-accent-muted`, `--evm-accent-faint`
- **Semantic** (each with an `-faint` alpha background): `--evm-danger`, `--evm-warning`, `--evm-success`, `--evm-info`, `--evm-purple`
- **Radius**: `--evm-radius-sm|md|lg|pill`
- **Spacing** (4px base): `--evm-space-1|2|3|4|5|6`
- **Type**: `--evm-font-sans`, `--evm-font-mono`, `--evm-text-xs|sm|body|md|lg|xl`, `--evm-weight-normal|medium|semibold`
- **Elevation / motion**: `--evm-shadow-md|lg`, `--evm-transition`

Use `--evm-font-mono` for anything hex — addresses, hashes, calldata, amounts.

## Components

Actions & inputs: `Button` (variant `primary|secondary|ghost|danger`, size
`sm|md|lg`), `Input` (`mono`, `invalid`), `Select`, `Textarea`, `Field`
(label + control + hint/error wrapper). Surfaces & data: `Card`, `Table`
(column-driven), `Modal`, `EmptyState`, `Spinner`. Labels: `Badge` (tone), `ChainBadge`
(`chainId` → brand-colored dot + network name), `TypeBadge` (Solidity types),
`CopyField` (mono value + copy), `AddressText` (`truncate`). Chrome: `Tabs`,
`StatusBar` + `StatusItem` + `StatusSpacer`.

Domain helpers `CHAIN_COLORS` and `CHAIN_NAMES` (keyed by chain id) back
`ChainBadge` and are exported for your own use.

Read the bound `styles.css` and each component's `.d.ts` / `.prompt.md` before
styling — they are the source of truth for the exact props and class names.

## Idiomatic example

```tsx
<Card title="Cold Storage" subtitle="12 addresses"
  actions={<Button variant="primary" size="sm">Add Address</Button>}>
  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--evm-space-3)' }}>
    <Field label="Address" hint="An EOA or contract address">
      <Input mono placeholder="0x…" />
    </Field>
    <div style={{ display: 'flex', gap: 'var(--evm-space-2)' }}>
      <ChainBadge chainId={1} />
      <ChainBadge chainId={42161} />
    </div>
  </div>
</Card>
```
