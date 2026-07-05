import React from 'react'
import { cx } from '../lib/cx'

export interface TableColumn {
  /** Unique column key; also the row field read when `render` is omitted. */
  key: string
  /** Column header content. */
  header: React.ReactNode
  /** Custom cell renderer; receives the whole row. */
  render?: (row: any) => React.ReactNode
  /** Text alignment for the column. */
  align?: 'left' | 'right' | 'center'
}

export interface TableProps {
  /** Column definitions, left to right. */
  columns: TableColumn[]
  /** Row objects. */
  rows: any[]
  /** Alternate row background for readability. */
  zebra?: boolean
  /** Derive a stable React key per row (defaults to the row index). */
  rowKey?: (row: any, i: number) => string | number
}

/** Bordered data table with sensible defaults for dense on-chain data. */
export function Table({ columns, rows, zebra, rowKey }: TableProps) {
  return (
    <div className="evm-table-wrap">
      <table className={cx('evm-table', zebra && 'evm-table--zebra')}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ textAlign: c.align || 'left' }}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={rowKey ? rowKey(r, i) : i}>
              {columns.map((c) => (
                <td key={c.key} style={{ textAlign: c.align || 'left' }}>
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
