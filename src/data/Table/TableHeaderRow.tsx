import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableHeaderRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableHeaderRow = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableHeaderRowProps>
>(({ className, theme: customTheme, children, ...rest }, ref) => {
  const ctx = useTableContext();
  const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
  const theme = ctx?.theme ?? fallbackTheme;

  return (
    <div
      ref={ref}
      role="row"
      className={cn(theme.header.row, className, 'flex w-full min-w-fit')}
      {...rest}
    >
      {children}
    </div>
  );
});

TableHeaderRow.displayName = 'TableHeaderRow';
