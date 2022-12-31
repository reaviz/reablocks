import React, { InputHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import css from './ListItem.module.css';

export interface ListItemProps extends InputHTMLAttributes<HTMLDivElement> {
  active?: boolean;
  disabled?: boolean;
  disablePadding?: boolean;
  disableGutters?: boolean;
  dense?: boolean;
}

export const ListItem: FC<ListItemProps> = ({
  className,
  children,
  active,
  disabled,
  disablePadding,
  disableGutters,
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
      [css.clickable]: onClick && disabled,
      [css.disablePadding]: disablePadding,
      [css.disableGutters]: disableGutters,
      [css.dense]: dense
    })}
  >
    {children}
  </div>
);
