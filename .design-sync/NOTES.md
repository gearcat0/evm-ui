# evm-ui — design-sync notes

Repo-specific gotchas for future syncs.

- **esbuild install scripts**: this env blocks postinstall by default. After any
  `npm i`, run `npm approve-scripts esbuild` in both the package root AND
  `.ds-sync/`, or esbuild's binary is missing and build/converter fail.
- **Playwright ↔ cached chromium**: the machine cache has `chromium-1217`, which
  is pinned by **playwright 1.59.1**. Install `playwright-core@1.59.1 playwright@1.59.1`
  into `.ds-sync/` for the render check. A different playwright version fails with
  "Executable doesn't exist".
- **Fonts are system-only by design**: `--evm-font-mono` is `ui-monospace, 'SF Mono', monospace`
  and sans is the system stack — no webfonts ship. Do NOT re-add named fonts like
  "Fira Code"/"Roboto Mono" to the stack; they trip `[FONT_MISSING]` since we don't ship them.
- **Dark-first canvas**: `src/styles.css` sets `body { background: var(--evm-bg) }`.
  This is required — components use light text tokens and are invisible on a light bg.
- **Modal preview**: `Modal` uses `position: fixed`, so its overlay escapes the
  capture cell. The preview wraps it in a `transform`ed `Stage` div so the fixed
  overlay anchors to the box and the full dialog is captured. Keep `cfg.overrides.Modal`
  = `{cardMode: single, viewport: 600x380}`.
- **cardMode column** is set for Field/Input/Textarea (full-width controls) and
  Table/StatusBar (wide) to avoid `[GRID_OVERFLOW]`.
- **StatusSpacer** ships the floor card intentionally — it's an invisible flex
  spacer with nothing to render. Not a failure.

## Re-sync risks / watch-list

- **From-scratch library, not an app build**: the source of truth is
  `/home/claude/evm-ui/src`. Always `npm run build` before the converter so
  `dist/` is current; then `resync.mjs` (first sync omitted `--remote`).
- **Consumer apps not yet migrated**: `evmaddressbook` (/home/claude/addressbook)
  and `tx-builder` (/home/claude/txbuilder) do NOT import evm-ui yet — adopting it
  in those apps is future work. See memory `shared-design-system`.
- **Known render warns**: none — validate exits 0 clean. Any new warn is genuinely new.
- **If a brand webfont is ever added**: wire it via `cfg.extraFonts`, don't just
  name it in the CSS stack.
