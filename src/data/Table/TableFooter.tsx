import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableFooterProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableFooter = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableFooterProps>
>(({ className, theme: customTheme, children, ...rest }, ref) => {
  const ctx = useTableContext();
  const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
  const theme = ctx?.theme ?? fallbackTheme;

  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn(theme.footer.base, className)}
      {...rest}
    >
      {children}
    </div>
  );
});

TableFooter.displayName = 'TableFooter';
