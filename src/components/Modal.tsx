import React from 'react'

export interface ModalProps {
  /** Whether the modal is visible. */
  open: boolean
  /** Header title. */
  title?: React.ReactNode
  /** Called when the overlay or the close button is activated. */
  onClose?: () => void
  /** Footer content, typically right-aligned action buttons. */
  footer?: React.ReactNode
  /** Modal body content. */
  children?: React.ReactNode
}

/** Centered overlay dialog. Renders nothing when `open` is false. */
export function Modal({ open, title, onClose, footer, children }: ModalProps) {
  if (!open) return null
  return (
    <div className="evm-modal-overlay" onClick={onClose}>
      <div
        className="evm-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {(title || onClose) && (
          <div className="evm-modal-header">
            <h2 className="evm-modal-title">{title}</h2>
            {onClose && (
              <button className="evm-modal-close" onClick={onClose} aria-label="Close">
                ×
              </button>
            )}
          </div>
        )}
        <div className="evm-modal-body">{children}</div>
        {footer && <div className="evm-modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
