import React, { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TableTheme } from './TableTheme';
import { useTableContext } from './TableContext';

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the row is currently selected.
   */
  selected?: boolean;

  /**
   * Whether the row is disabled. Disables pointer events and dims the row.
   */
  disabled?: boolean;

  /**
   * Theme override for this slot.
   */
  theme?: TableTheme;
}

export const TableRow = forwardRef<
  HTMLDivElement,
  PropsWithChildren<TableRowProps>
>(
  (
    {
      selected = false,
      disabled = false,
      onClick,
      className,
      theme: customTheme,
      children,
      ...rest
    },
    ref
  ) => {
    const ctx = useTableContext();
    const fallbackTheme: TableTheme = useComponentTheme('table', customTheme);
    const theme = ctx?.theme ?? fallbackTheme;

    const clickable = !!onClick && !disabled;

    return (
      <div
        ref={ref}
        role="row"
        onClick={disabled ? undefined : onClick}
        aria-selected={selected || undefined}
        aria-disabled={disabled || undefined}
        className={cn(
          theme.body.row.base,
          selected && theme.body.row.selected,
          clickable && theme.body.row.clickable,
          disabled && theme.body.row.disabled,
          className,
          'relative flex w-full min-w-fit'
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

TableRow.displayName = 'TableRow';
