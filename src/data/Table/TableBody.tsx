import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableBody = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableBodyProps>
>(({ className, theme: customTheme, children, ...rest }, ref) => {
  const ctx = useTableContext();
  const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
  const theme = ctx?.theme ?? fallbackTheme;

  return (
    <div
      ref={ref}
      role="rowgroup"
      className={cn(
        theme.body.base,
        className,
        'flex flex-col flex-1 min-h-0 min-w-fit overflow-y-auto'
      )}
      {...rest}
    >
      {children}
    </div>
  );
});

TableBody.displayName = 'TableBody';
