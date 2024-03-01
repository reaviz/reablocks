import React, { FC, forwardRef, Ref, useContext } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ButtonGroupContext } from './ButtonGroupContext';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

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
    const theme = useComponentTheme('button');

    const { variant: groupVariant, size: groupSize } =
      useContext(ButtonGroupContext);

    const isGroup = !!groupVariant && !!groupSize;

    return (
      <motion.button
        {...rest}
        disabled={disabled}
        ref={ref}
        whileTap={{ scale: disabled || disableAnimation ? 1 : 0.9 }}
        className={twMerge(
          theme.base,
          theme.disabled,
          fullWidth && theme.fullWidth,
          theme.variants[groupVariant || variant],
          theme.colors[color],
          theme.sizes[groupSize || size],
          isGroup && theme.group,
          isGroup && groupVariant === 'text' && theme.groupText,
          className
        )}
      >
        {startAdornment && (
          <div
            className={classNames(
              twMerge(
                theme.adornment.base,
                theme.adornment.start,
                theme.adornment.sizes[size]
              )
            )}
          >
            {startAdornment}
          </div>
        )}
        {children}
        {endAdornment && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.start,
              theme.adornment.sizes[size]
            )}
          >
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
