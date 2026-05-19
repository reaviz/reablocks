import React, {
  CSSProperties,
  forwardRef,
  HTMLAttributes,
  PropsWithChildren
} from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableCellProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Column identifier. When provided and the Table has a width for this id in
   * its `columnWidths` map, the cell adopts that width — keeping it in sync
   * with the header during drag-to-resize.
   */
  columnId?: string;

  /**
   * Horizontal alignment of the cell contents.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Truncate overflowing content with an ellipsis.
   */
  truncate?: boolean;

  /**
   * Fixed pixel width. Used only when the Table has no entry for this column
   * in `columnWidths`.
   */
  width?: number;

  /**
   * Minimum pixel width for the cell.
   */
  minWidth?: number;

  /**
   * Maximum pixel width for the cell.
   */
  maxWidth?: number;

  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableCell = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableCellProps>
>(
  (
    {
      columnId,
      align = 'left',
      truncate = false,
      width,
      minWidth,
      maxWidth,
      className,
      style,
      theme: customTheme,
      children,
      ...rest
    },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
    const theme = ctx?.theme ?? fallbackTheme;
    const size = ctx?.size ?? 'base';

    const ctxWidth =
      columnId != null && ctx && ctx.columnWidths[columnId] != null
        ? ctx.columnWidths[columnId]
        : undefined;
    const resolvedWidth = ctxWidth ?? width;

    const flexStyle: CSSProperties =
      resolvedWidth != null
        ? { flex: `0 0 ${resolvedWidth}px`, width: `${resolvedWidth}px` }
        : { flex: '1 1 0', minWidth: 0 };
    if (minWidth != null) flexStyle.minWidth = `${minWidth}px`;
    if (maxWidth != null) flexStyle.maxWidth = `${maxWidth}px`;

    return (
      <div
        ref={ref}
        role="cell"
        style={{ ...flexStyle, ...style }}
        className={cn(
          theme.body.cell.base,
          theme.body.cell.size[size],
          theme.body.cell.align[align],
          truncate && theme.body.cell.truncate,
          className,
          'flex items-center min-w-0'
        )}
        {...rest}
      >
        {truncate ? (
          <span className="truncate w-full">{children}</span>
        ) : (
          children
        )}
      </div>
    );
  }
);

TableCell.displayName = 'TableCell';
