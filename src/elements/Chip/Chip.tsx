import type { HTMLMotionProps } from 'motion/react';
import { motion } from 'motion/react';
import type { LegacyRef, ReactElement, ReactNode } from 'react';
import React, { forwardRef } from 'react';

import CloseIcon from '@/assets/icons/close.svg?react';
import type {
  ChipColorTheme,
  ChipSizeTheme,
  ChipTheme,
  ChipTypeTheme,
  ChipVariantTheme,
  TagTypeThemeConfig
} from '@/elements';
import { twMerge } from '@/utils';
import { cn, useComponentTheme } from '@/utils';

export interface ChipProps extends Omit<HTMLMotionProps<'div'>, 'color'> {
  /**
   * Type of the chip, e.g., badge or tag.
   */
  type?: keyof ChipTypeTheme;

  /**
   * Color variant for the chip.
   */
  color?: keyof ChipColorTheme;

  /**
   * Size variant for the chip.
   */
  size?: keyof ChipSizeTheme;

  /**
   * Style variant for the chip.
   */
  variant?: keyof ChipVariantTheme;

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
   * If false, the animation of the chip will be disabled.
   */
  animated?: boolean;

  /**
   * Content to display before the chip label.
   */
  start?: ReactElement | string;

  /**
   * Content to display before the chip label.
   */
  end?: ReactElement | string;

  /**
   * Close icon for the chip, typically used in closable chips.
   */
  closeIcon?: ReactElement;

  /**
   * Close handler for the chip, typically used in closable chips.
   */
  onClose?: () => void;

  /**
   * Theme for the Chip.
   */
  theme?: ChipTheme;
}

export interface ChipRef {
  /**
   * Reference to the root element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      children,
      type = 'badge',
      color = 'default',
      variant = 'filled',
      size = 'medium',
      selected,
      disabled,
      className,
      disableMargins,
      animated = true,
      start,
      end,
      closeIcon = <CloseIcon />,
      onClose,
      onClick,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const theme = useComponentTheme('chip', customTheme).types[type];
    const isClickable = type === 'tag' && onClick && !disabled;

    return (
      <motion.div
        whileTap={{
          scale: !isClickable || !animated || onClose ? 1 : 0.9
        }}
        {...rest}
        ref={ref}
        tabIndex={onClick ? 0 : -1}
        onClick={!disabled ? onClick : undefined}
        className={cn(
          theme.base,
          theme.variants[variant],
          theme.colors[color]?.base,
          theme.colors[color]?.variants?.[variant]?.base,
          theme.sizes[size],
          {
            [theme.colors[color]?.variants?.[variant]?.selected]: selected,
            [theme.colors[color]?.variants?.[variant]?.selectable]: isClickable,
            'cursor-pointer': isClickable
          },
          disableMargins && 'm-0',
          disabled && type === 'tag' && (theme as TagTypeThemeConfig).disabled,
          className
        )}
        aria-disabled={disabled}
      >
        {start && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.start,
              theme.adornment.sizes[size],
              theme.colors[color]?.variants?.[variant]?.start
            )}
          >
            {start}
          </div>
        )}
        <div className={theme.label}>{children as ReactNode}</div>
        {end && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.end,
              theme.adornment.sizes[size],
              theme.colors[color]?.variants?.[variant]?.end
            )}
          >
            {end}
          </div>
        )}
        {onClose && (
          <motion.button
            whileTap={{ scale: disabled || !animated ? 1 : 0.9 }}
            className={cn(
              (theme as TagTypeThemeConfig).closeButton?.base,
              (theme as TagTypeThemeConfig).closeButton?.sizes?.[size]
            )}
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
          >
            {closeIcon}
          </motion.button>
        )}
      </motion.div>
    );
  }
);
