import React, {
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  Ref
} from 'react';
import { cn, useComponentTheme } from '@/utils';
import {
  ChipColorTheme,
  ChipSizeTheme,
  ChipTheme,
  ChipVariantTheme
} from './ChipTheme';

export interface ChipProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  'color'
> {
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
   * Content to display before the chip label.
   */
  start?: ReactElement | string;

  /**
   * Content to display before the chip label.
   */
  end?: ReactElement | string;

  /**
   * Theme for the Chip.
   */
  theme?: ChipTheme;
}

export interface ChipRef {
  /**
   * Reference to the root element.
   */
  ref?: Ref<HTMLDivElement>;
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      children,
      color = 'default',
      variant = 'filled',
      size = 'medium',
      selected,
      disabled,
      className,
      disableMargins,
      start,
      end,
      theme: customTheme,
      ...rest
    },
    ref
  ) => {
    const theme = useComponentTheme('chip', customTheme);

    return (
      <div
        {...rest}
        ref={ref}
        className={cn(
          theme.base,
          theme.variants[variant],
          theme.colors[color]?.base,
          theme.colors[color]?.variants?.[variant]?.base,
          theme.sizes[size],
          {
            [theme.colors[color]?.variants?.[variant]?.selected]: selected,
            'm-0': disableMargins
          },
          disabled,
          className
        )}
        aria-disabled={disabled}
      >
        {start && (
          <div
            className={cn(
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
            className={cn(
              theme.adornment.base,
              theme.adornment.end,
              theme.adornment.sizes[size],
              theme.colors[color]?.variants?.[variant]?.end
            )}
          >
            {end}
          </div>
        )}
      </div>
    );
  }
);
