import React from 'react'
import { cx } from '../lib/cx'

export interface TabItem {
  /** Stable id used for selection. */
  id: string
  /** Tab label. */
  label: React.ReactNode
  /** Optional count shown as a pill next to the label. */
  count?: number
}

export interface TabsProps {
  /** The tabs to render, left to right. */
  tabs: TabItem[]
  /** Id of the currently active tab. */
  active: string
  /** Called with the tab id when a tab is clicked. */
  onChange?: (id: string) => void
}

/** Underlined tab bar for switching between views. */
export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="evm-tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={t.id === active}
          className={cx('evm-tab', t.id === active && 'evm-tab--active')}
          onClick={() => onChange?.(t.id)}
        >
          {t.label}
          {typeof t.count === 'number' && <span className="evm-tab__count">{t.count}</span>}
        </button>
      ))}
    </div>
  )
}
