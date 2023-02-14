import React, { InputHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import css from './ListItem.module.css';

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
   * A start component for the list item.
   */
  start?: React.ReactNode;

  /**
   * A end component for the list item.
   */
  end?: React.ReactNode;
}

export const ListItem: FC<ListItemProps> = ({
  className,
  children,
  active,
  disabled,
  disablePadding,
  disableGutters,
  start,
  end,
  dense,
  onClick,
  ...rest
}) => (
  <div
    {...rest}
    role="listitem"
    onClick={e => !disabled && onClick?.(e)}
    className={classNames(className, css.listItem, {
      [css.disabled]: disabled,
      [css.active]: active,
      [css.clickable]: onClick && !disabled,
      [css.disablePadding]: disablePadding,
      [css.disableGutters]: disableGutters,
      [css.dense]: dense
    })}
  >
    {start && <div className={css.startAdornment}>{start}</div>}
    <div className={css.content}>{children}</div>
    {end && <div className={css.endAdornment}>{end}</div>}
  </div>
);
