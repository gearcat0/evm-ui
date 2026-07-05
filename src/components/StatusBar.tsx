import React from 'react'
import { cx } from '../lib/cx'

export interface StatusBarProps {
  /** {@link StatusItem} / {@link StatusSpacer} children. */
  children: React.ReactNode
}

/** Thin bottom bar for ambient app status (network, sync, counts). */
export function StatusBar({ children }: StatusBarProps) {
  return <div className="evm-statusbar">{children}</div>
}

export interface StatusItemProps {
  /** Muted label shown before the value. */
  label?: React.ReactNode
  /** Monospace value. */
  value?: React.ReactNode
  /** Emphasis tone. */
  tone?: 'default' | 'error'
  /** Free-form content (overrides label/value layout when provided). */
  children?: React.ReactNode
}

/** A single labelled cell inside a {@link StatusBar}. */
export function StatusItem({ label, value, tone = 'default', children }: StatusItemProps) {
  return (
    <span className={cx('evm-statusbar__item', tone === 'error' && 'evm-statusbar__item--error')}>
      {label != null && <span className="evm-statusbar__label">{label}</span>}
      {value != null && <span className="evm-statusbar__value">{value}</span>}
      {children}
    </span>
  )
}

/** Flexible gap that pushes following {@link StatusItem}s to the right. */
export function StatusSpacer() {
  return <span className="evm-statusbar__spacer" />
}
