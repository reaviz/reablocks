import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Button.module.css';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
  > {
  /**
   * Color variation of the button.
   */
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'success' | 'warning';

  /**
   * Style variant of the button.
   */
  variant?: 'filled' | 'outline' | 'text';

  /**
   * The size variation of the button.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * If true, the button will take up the full width of its container.
   */
  fullWidth?: boolean;

  /**
   * If true, the margins of the button will be disabled.
   */
  disableMargins?: boolean;

  /**
   * If true, the padding of the button will be disabled.
   */
  disablePadding?: boolean;

  /**
   * If true, the animation of the button will be disabled.
   */
  disableAnimation?: boolean;
}

export interface ButtonRef {
  ref?: Ref<HTMLButtonElement>;
}

export const Button: FC<ButtonProps & ButtonRef> = forwardRef(
  (
    {
      color,
      variant,
      children,
      type,
      fullWidth,
      size,
      disableAnimation,
      className,
      disableMargins,
      disablePadding,
      disabled,
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => (
    <motion.button
      {...rest}
      disabled={disabled}
      ref={ref}
      whileTap={{ scale: disabled || disableAnimation ? 1 : 0.9 }}
      type={type || 'button'}
      className={classNames(css.btn, {
        [css.fullWidth]: fullWidth,
        [css.disableMargins]: disableMargins,
        [css.disablePadding]: disablePadding,
        [css[color]]: true,
        [css[size]]: true,
        [css[variant]]: true,
        className
      })}
    >
      {children}
    </motion.button>
  )
);

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
  size: 'medium'
};
