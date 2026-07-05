// Build the evm-ui design system into dist/:
//  - dist/index.es.js : one ESM bundle of every component (React kept external)
//  - dist/styles.css  : the token + component stylesheet, shipped separately
//  - dist/*.d.ts      : TypeScript declarations (the design-sync converter reads
//                       these as each component's API contract)
import { build } from 'esbuild'
import { execSync } from 'node:child_process'
import { copyFileSync, mkdirSync } from 'node:fs'

mkdirSync('dist', { recursive: true })

// CSS lives on disk as a standalone file, not imported into the JS bundle, so
// design-sync can pick it up via cfg.cssEntry and every consumer imports it once.
await build({
  entryPoints: ['src/index.ts'],
  outfile: 'dist/index.es.js',
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  logLevel: 'info'
})

copyFileSync('src/styles.css', 'dist/styles.css')

// Emit declarations (.d.ts) for the whole src tree.
execSync('npx tsc -p tsconfig.json', { stdio: 'inherit' })

console.log('✓ evm-ui built to dist/')
