import React from 'react'

export interface EmptyStateProps {
  /** Headline, e.g. "No addresses yet". */
  title: React.ReactNode
  /** Supporting description under the title. */
  description?: React.ReactNode
  /** A call-to-action (e.g. a {@link Button}). */
  action?: React.ReactNode
  /** Optional icon/illustration above the title. */
  icon?: React.ReactNode
}

/** Centered placeholder for empty lists, tables, and views. */
export function EmptyState({ title, description, action, icon }: EmptyStateProps) {
  return (
    <div className="evm-empty">
      {icon}
      <div className="evm-empty__title">{title}</div>
      {description && <div className="evm-empty__desc">{description}</div>}
      {action}
    </div>
  )
}
