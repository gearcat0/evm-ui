/**
 * Design tokens as JS values, mirroring the CSS custom properties in styles.css.
 *
 * For JS-driven styling — inline `style={{}}` objects, canvas, string-built
 * colors — that can't read `var(--evm-*)`. Base colors are 6-digit hex (safe to
 * append an alpha suffix, e.g. `tokens.accent + '55'`); faded variants are rgba().
 *
 * Keep in sync with the `:root` block in styles.css.
 */
export const tokens = {
  bg: '#08080a',
  surface1: '#111114',
  surface2: '#18181c',
  surface3: '#202026',
  surface4: '#28282f',
  border: '#2a2a32',
  borderStrong: '#38383f',
  text1: '#eaeaef',
  text2: '#a0a0b8',
  text3: '#6a6a80',
  text4: '#48485a',
  textOnAccent: '#04120f',
  accent: '#00e4b8',
  accentHover: '#2af0ca',
  accentMuted: 'rgba(0, 228, 184, 0.20)',
  accentFaint: 'rgba(0, 228, 184, 0.09)',
  danger: '#ff4060',
  dangerFaint: 'rgba(255, 64, 96, 0.10)',
  warning: '#ffaa22',
  warningFaint: 'rgba(255, 170, 34, 0.10)',
  success: '#4ade80',
  successFaint: 'rgba(74, 222, 128, 0.10)',
  info: '#5599ff',
  infoFaint: 'rgba(85, 153, 255, 0.10)',
  purple: '#9977ff',
  purpleFaint: 'rgba(153, 119, 255, 0.10)',
} as const

export type Tokens = typeof tokens
