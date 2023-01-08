import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './Chip.module.css';

export interface ChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variant for the chip.
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'warning' | 'info';

  /**
   * Size variant for the chip.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Style variant for the chip.
   */
  variant?: 'filled' | 'outline';

  /**
   * Whether the chip is disabled.
   */
  disabled?: boolean;

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
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
      disabled,
      className,
      disableMargins,
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
      className={classNames(className, css.chip, {
        [css[color]]: true,
        [css[variant]]: true,
        [css[size]]: true,
        [css.selectable]: onClick && !disabled,
        [css.disableMargins]: disableMargins
      })}
    >
      {children}
    </div>
  )
);

Chip.defaultProps = {
  color: 'default',
  variant: 'filled'
};
