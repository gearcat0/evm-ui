import React from 'react'
import { cx } from '../lib/cx'

export interface CardProps {
  /** Header title. When any of title/subtitle/actions is set, a header renders. */
  title?: React.ReactNode
  /** Secondary line under the title. */
  subtitle?: React.ReactNode
  /** Right-aligned header actions (buttons, menus). */
  actions?: React.ReactNode
  /** Use the flat surface variant (no border, lighter background). */
  flat?: boolean
  /** Card body content. */
  children?: React.ReactNode
  className?: string
}

/** A surface container with an optional header, used to group related content. */
export function Card({ title, subtitle, actions, flat, children, className }: CardProps) {
  const hasHeader = title || subtitle || actions
  return (
    <div className={cx('evm-card', flat && 'evm-card--flat', className)}>
      {hasHeader && (
        <div className="evm-card-header">
          <div>
            {title && <h3 className="evm-card-title">{title}</h3>}
            {subtitle && <div className="evm-card-subtitle">{subtitle}</div>}
          </div>
          {actions && <div className="evm-card-actions">{actions}</div>}
        </div>
      )}
      <div className="evm-card-body">{children}</div>
    </div>
  )
}
