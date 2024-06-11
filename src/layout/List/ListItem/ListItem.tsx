import React, { FC, InputHTMLAttributes, LegacyRef, forwardRef } from 'react';
import { ListTheme } from '@/layout/List/ListTheme';
import { cn, useComponentTheme } from '@/utils';

export interface ListItemProps extends InputHTMLAttributes<HTMLDivElement> {
  /**
   * Whether the item is active or not.
   */
  active?: boolean;

  /**
   * Whether the item is disabled or not.
   */
  disabled?: boolean;

  /**
   * Disable the padding ( including gutters ).
   */
  disablePadding?: boolean;

  /**
   * Disable the gutters ( left + right padding ).
   */
  disableGutters?: boolean;

  /**
   * Whether the item data is dense and reduce the padding.
   */
  dense?: boolean;

  /**
   * Class name for the content element.
   */
  contentClassName?: string;

  /**
   * A start component for the list item.
   */
  start?: React.ReactNode;

  /**
   * A end component for the list item.
   */
  end?: React.ReactNode;

  /**
   * Theme for the List.
   */
  theme?: ListTheme;
}

export interface ListItemRef {
  /**
   * Reference to the list item element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const ListItem: FC<ListItemProps & ListItemRef> = forwardRef<
  HTMLDivElement,
  ListItemProps
>(
  (
    {
      className,
      contentClassName,
      children,
      active,
      disabled,
      disablePadding,
      disableGutters,
      start,
      end,
      dense,
      onClick,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const theme: ListTheme = useComponentTheme('list', customTheme);

    return (
      <div
        {...rest}
        ref={ref}
        role={onClick ? 'button' : 'listitem'}
        tabIndex={onClick ? 0 : undefined}
        onClick={e => !disabled && onClick?.(e)}
        className={cn(
          theme.listItem.base,
          dense && theme.listItem.dense.base,
          disabled && theme.listItem.disabled,
          active && theme.listItem.active,
          onClick && !disabled && theme.listItem.clickable,
          disablePadding && theme.listItem.disablePadding,
          disableGutters && theme.listItem.disableGutters,
          className
        )}
      >
        {start && (
          <div
            className={cn(
              theme.listItem.adornment.base,
              theme.listItem.adornment.start,
              { [theme.listItem.dense.startAdornment]: dense }
            )}
          >
            {start}
          </div>
        )}
        <div
          className={cn(
            theme.listItem.content,
            {
              [theme.listItem.dense.content]: dense
            },
            contentClassName
          )}
        >
          {children}
        </div>
        {end && (
          <div
            className={cn(
              theme.listItem.adornment.base,
              theme.listItem.adornment.end,
              { [theme.listItem.dense.endAdornment]: dense }
            )}
          >
            {end}
          </div>
        )}
      </div>
    );
  }
);
