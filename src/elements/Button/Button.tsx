import React, { FC, forwardRef, Ref, useContext } from 'react';
import { motion } from 'motion/react';
import { ButtonGroupContext } from './ButtonGroupContext';
import type {
  ButtonColorTheme,
  ButtonSizeTheme,
  ButtonTheme,
  ButtonVariantTheme
} from './ButtonTheme';
import { cn, useComponentTheme } from '@/utils';

export interface ButtonProps extends Omit<
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
  start?: React.ReactNode;

  /**
   * Element to display after the Button content.
   */
  end?: React.ReactNode;

  /**
   * Theme for the Button.
   */
  theme?: ButtonTheme;
}

export interface ButtonRef {
  /**
   * The ref to the button element.
   */
  ref?: Ref<HTMLButtonElement>;
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
      animated = true,
      className,
      disableMargins,
      disablePadding,
      disabled,
      start,
      end,
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
        className={cn(
          theme.base,
          theme.disabled,
          fullWidth && theme.fullWidth,
          theme.variants[groupVariant || variant],
          theme.colors[color]?.[groupVariant || variant],
          theme.sizes[groupSize || size],
          isGroup && theme.group,
          isGroup && groupVariant === 'text' && theme.groupText,
          disableMargins && 'm-0',
          disablePadding && 'p-0',
          className
        )}
      >
        {start && (
          <div
            className={cn(
              theme.adornment.base,
              theme.adornment.sizes[size],
              theme.adornment.start[size]
            )}
          >
            {start}
          </div>
        )}
        {children}
        {end && (
          <div
            className={cn(
              theme.adornment.base,
              theme.adornment.sizes[size],
              theme.adornment.end[size]
            )}
          >
            {end}
          </div>
        )}
      </motion.button>
    );
  }
);
