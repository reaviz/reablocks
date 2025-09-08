import React, { FC, forwardRef, LegacyRef, useContext } from 'react';
import { motion } from 'motion/react';
import { ButtonGroupContext } from './ButtonGroupContext';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';
import {
  ButtonColorTheme,
  ButtonSizeTheme,
  ButtonTheme,
  ButtonVariantTheme
} from './ButtonTheme';

export interface ButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'color'
  > {
  /**
   * Color variation of the button.
   */
  color?: keyof ButtonColorTheme;

  /**
   * Style variant of the button.
   */
  variant?: keyof ButtonVariantTheme;

  /**
   * The size variation of the button.
   */
  size?: keyof ButtonSizeTheme;

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
   * @deprecated
   */
  disableAnimation?: boolean;

  /**
   * If false, the animation of the button will be disabled.
   */
  animated?: boolean;

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
      color = 'primary',
      variant = 'filled',
      children,
      fullWidth,
      size = 'medium',
      disableAnimation,
      animated = true,
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
        whileTap={{
          scale: disabled || disableAnimation || !animated ? 1 : 0.9
        }}
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
              theme.adornment.sizes[size],
              theme.adornment.start[size]
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
              theme.adornment.sizes[size],
              theme.adornment.end[size]
            )}
          >
            {endAdornment}
          </div>
        )}
      </motion.button>
    );
  }
);
