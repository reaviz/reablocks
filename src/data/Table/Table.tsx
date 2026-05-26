import React, {
  forwardRef,
  HTMLAttributes,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState
} from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { TableContext, TableSize } from './TableContext';

export interface TableProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Density of the table. Controls the height/padding of header and body cells.
   */
  size?: TableSize;

  /**
   * Enable drag-to-resize on header cells that have a `columnId`. Cells
   * without an id or with `resizable={false}` are skipped.
   */
  resizable?: boolean;

  /**
   * Controlled column widths keyed by column id. When provided, you become
   * responsible for updating this map in response to `onColumnResize` —
   * otherwise drag operations will appear to do nothing. Use
   * `defaultColumnWidths` for uncontrolled mode.
   */
  columnWidths?: Record<string, number>;

  /**
   * Initial (uncontrolled) column widths keyed by column id. Used when
   * `columnWidths` is not supplied. Changes to this prop after mount are
   * ignored.
   */
  defaultColumnWidths?: Record<string, number>;

  /**
   * Fires when the user drags a column resize handle. Receives the column id
   * and the new width in pixels.
   */
  onColumnResize?: (id: string, width: number) => void;

  /**
   * Theme for the Table and all of its slots.
   */
  theme?: TableTheme;
}

export const Table = forwardRef<HTMLDivElement, PropsWithChildren<TableProps>>(
  (
    {
      size = 'base',
      resizable = false,
      columnWidths: controlledWidths,
      defaultColumnWidths,
      onColumnResize,
      className,
      theme: customTheme,
      children,
      ...rest
    },
    ref
  ) => {
    const theme: TableTheme = useComponentTheme('table', customTheme);

    const [internalWidths, setInternalWidths] = useState<
      Record<string, number>
    >(defaultColumnWidths ?? {});
    const isControlled = controlledWidths !== undefined;
    const columnWidths = controlledWidths ?? internalWidths;

    const setColumnWidth = useCallback(
      (id: string, width: number) => {
        if (!isControlled) {
          setInternalWidths(prev => ({ ...prev, [id]: width }));
        }
        onColumnResize?.(id, width);
      },
      [isControlled, onColumnResize]
    );

    const [resizingColumnId, setResizingColumnId] = useState<string | null>(
      null
    );

    const ctx = useMemo(
      () => ({
        size,
        theme,
        resizable,
        columnWidths,
        setColumnWidth,
        resizingColumnId,
        setResizingColumnId
      }),
      [size, theme, resizable, columnWidths, setColumnWidth, resizingColumnId]
    );

    return (
      <TableContext.Provider value={ctx}>
        <div
          ref={ref}
          role="table"
          className={cn(
            theme.base,
            className,
            'flex flex-col w-full min-w-0 overflow-x-auto'
          )}
          {...rest}
        >
          {children}
        </div>
      </TableContext.Provider>
    );
  }
);

Table.displayName = 'Table';
