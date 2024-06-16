import React, { FC, forwardRef, LegacyRef, useContext } from 'react';
import { motion } from 'framer-motion';
import { ButtonGroupContext } from './ButtonGroupContext';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { ButtonTheme } from './ButtonTheme';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
  > {
  /**
   * Color variation of the button.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | string;

  /**
   * Style variant of the button.
   */
  variant?: 'filled' | 'outline' | 'text' | string;

  /**
   * The size variation of the button.
   */
  size?: 'small' | 'medium' | 'large' | string;

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

  /**
   * Theme for the Button.
   */
  theme?: ButtonTheme;
}

export interface ButtonRef {
  /**
   * The ref to the button element.
   */
  ref?: LegacyRef<HTMLButtonElement>;
}

export const Button: FC<ButtonProps & ButtonRef> = forwardRef(
  (
    {
      color = 'default',
      variant = 'filled',
      children,
      fullWidth,
      size = 'medium',
      disableAnimation,
      className,
      disableMargins,
      disablePadding,
      disabled,
      startAdornment,
      endAdornment,
      theme: customTheme,
      type = 'button',
      ...rest
    }: ButtonProps,
    ref
  ) => {
    const theme = useComponentTheme('button', customTheme);

    const { variant: groupVariant, size: groupSize } =
      useContext(ButtonGroupContext);

    const isGroup = !!groupVariant && !!groupSize;

    return (
      <motion.button
        {...rest}
        type={type}
        disabled={disabled}
        ref={ref}
        whileTap={{ scale: disabled || disableAnimation ? 1 : 0.9 }}
        data-variant={groupVariant || variant}
        className={twMerge(
          theme.base,
          theme.disabled,
          fullWidth && theme.fullWidth,
          theme.variants[groupVariant || variant],
          theme.colors[color][groupVariant || variant],
          theme.sizes[groupSize || size],
          isGroup && theme.group,
          isGroup && groupVariant === 'text' && theme.groupText,
          disableMargins && 'm-0',
          disablePadding && 'p-0',
          className
        )}
      >
        {startAdornment && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.start,
              theme.adornment.sizes[size]
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
              theme.adornment.end,
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
