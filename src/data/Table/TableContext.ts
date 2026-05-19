import { createContext, useContext } from 'react';
import { TableTheme } from './TableTheme';

export type TableSize = 'base' | 'condensed';

export interface TableContextValue {
  /**
   * Density of the table. Propagates to all cells.
   */
  size: TableSize;

  /**
   * Resolved theme for child components.
   */
  theme: TableTheme;

  /**
   * Whether the table allows column resizing.
   */
  resizable: boolean;

  /**
   * Current per-column widths keyed by column id.
   */
  columnWidths: Record<string, number>;

  /**
   * Setter for a single column's width.
   */
  setColumnWidth: (id: string, width: number) => void;

  /**
   * Id of the column currently being resized, or null when no drag is in
   * progress.
   */
  resizingColumnId: string | null;

  /**
   * Setter for the currently-resizing column id.
   */
  setResizingColumnId: (id: string | null) => void;
}

export const TableContext = createContext<TableContextValue | null>(null);

export const useTableContext = (): TableContextValue | null =>
  useContext(TableContext);
