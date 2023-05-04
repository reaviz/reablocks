import React, { FC, forwardRef, ReactElement, Ref } from 'react';
import classNames from 'classnames';
import css from './Chip.module.css';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color variant for the chip.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

  /**
   * Size variant for the chip.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Style variant for the chip.
   */
  variant?: 'filled' | 'outline';

  /**
   * Whether the chip is selected.
   */
  selected?: boolean;

  /**
   * Whether the chip is disabled.
   */
  disabled?: boolean;

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;

  /**
   * Content to display before the chip label.
   */
  start?: ReactElement | string;

  /**
   * Content to display before the chip label.
   */
  end?: ReactElement | string;
}

export interface ChipRef {
  ref?: Ref<HTMLDivElement>;
}

export const Chip: FC<ChipProps & ChipRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      size,
      selected,
      disabled,
      className,
      disableMargins,
      start,
      end,
      onClick,
      ...rest
    },
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...rest}
      ref={ref}
      tabIndex={onClick ? 0 : -1}
      onClick={onClick}
      className={classNames(css.chip, className, {
        [css[color]]: true,
        [css[variant]]: true,
        [css[size]]: true,
        [css.selected]: !!selected,
        [css.disabled]: disabled,
        [css.selectable]: onClick && !disabled,
        [css.disableMargins]: disableMargins
      })}
    >
      {start && <div className={css.startAdornment}>{start}</div>}
      <div className={css.content}>{children}</div>
      {end && <div className={css.endAdornment}>{end}</div>}
    </div>
  )
);

Chip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled'
};
