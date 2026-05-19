import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableHeadProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableHead = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableHeadProps>
>(({ className, theme: customTheme, children, ...rest }, ref) => {
  const ctx = useTableContext();
  const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
  const theme = ctx?.theme ?? fallbackTheme;

  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn(theme.header.base, className)}
      {...rest}
    >
      {children}
    </div>
  );
});

TableHead.displayName = 'TableHead';
