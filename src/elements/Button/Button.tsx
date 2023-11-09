import React, { FC, forwardRef, Ref, useContext } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import css from './Button.module.css';
import { ButtonGroupContext } from './ButtonGroupContext';

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

  /**
   * Element to display before the Button content.
   */
  startAdornment?: any;

  /**
   * Element to display after the Button content.
   */
  endAdornment?: any;
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
      fullWidth,
      size,
      disableAnimation,
      className,
      disableMargins,
      disablePadding,
      disabled,
      startAdornment,
      endAdornment,
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { variant: groupVariant, size: groupSize } =
      useContext(ButtonGroupContext);

    return (
      <motion.button
        {...rest}
        disabled={disabled}
        ref={ref}
        whileTap={{ scale: disabled || disableAnimation ? 1 : 0.9 }}
        className={classNames(
          css.btn,
          {
            [css.fullWidth]: fullWidth,
            [css.disableMargins]: disableMargins,
            [css.disablePadding]: disablePadding,
            [css[color]]: true,
            [css[groupSize || size]]: true,
            [css[groupVariant || variant]]: true,
            [css['group']]: !!groupVariant && !!groupSize
          },
          className
        )}
      >
        {startAdornment && (
          <div
            className={classNames(css.startAdornment, { [css[size]]: true })}
          >
            {startAdornment}
          </div>
        )}
        {children}
        {endAdornment && (
          <div className={classNames(css.endAdornment, { [css[size]]: true })}>
            {endAdornment}
          </div>
        )}
      </motion.button>
    );
  }
);

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
  size: 'medium',
  type: 'button'
};
