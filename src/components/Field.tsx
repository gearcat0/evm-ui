import React from 'react'

export interface FieldProps {
  /** Field label rendered above the control. */
  label?: React.ReactNode
  /** Show a required marker next to the label. */
  required?: boolean
  /** Helper text shown below the control (hidden when `error` is set). */
  hint?: React.ReactNode
  /** Error text shown below the control; takes precedence over `hint`. */
  error?: React.ReactNode
  /** `htmlFor` wired to the control's id. */
  htmlFor?: string
  /** The form control (e.g. an {@link Input} or {@link Select}). */
  children: React.ReactNode
}

/** Labelled form-field wrapper: label + control + hint/error, stacked. */
export function Field({ label, required, hint, error, htmlFor, children }: FieldProps) {
  return (
    <div className="evm-field">
      {label && (
        <label className="evm-field-label" htmlFor={htmlFor}>
          {label}
          {required && <span className="evm-field-label__req">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <span className="evm-field-error">{error}</span>
      ) : hint ? (
        <span className="evm-field-hint">{hint}</span>
      ) : null}
    </div>
  )
}
