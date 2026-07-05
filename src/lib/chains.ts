/**
 * Canonical brand color and display name per EVM chain id, shared by every app
 * in the family. Extend these maps as new networks are supported.
 */
export const CHAIN_COLORS: Record<number, string> = {
  1: '#627EEA',
  10: '#FF0420',
  56: '#F0B90B',
  100: '#04795B',
  137: '#8247E5',
  250: '#1969FF',
  324: '#8B8DFC',
  8453: '#0052FF',
  42161: '#28A0F0',
  43114: '#E84142',
}

export const CHAIN_NAMES: Record<number, string> = {
  1: 'Ethereum',
  10: 'Optimism',
  56: 'BNB Chain',
  100: 'Gnosis',
  137: 'Polygon',
  250: 'Fantom',
  324: 'zkSync Era',
  8453: 'Base',
  42161: 'Arbitrum',
  43114: 'Avalanche',
}
