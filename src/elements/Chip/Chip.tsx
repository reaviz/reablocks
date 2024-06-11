import React, { FC, forwardRef, LegacyRef, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { ChipTheme } from './ChipTheme';

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
    | 'info'
    | string;

  /**
   * Size variant for the chip.
   */
  size?: 'small' | 'medium' | 'large' | string;

  /**
   * Style variant for the chip.
   */
  variant?: 'filled' | 'outline' | string;

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
  ref?: LegacyRef<HTMLDivElement>;
}

export const Chip: FC<ChipProps & ChipRef> = forwardRef(
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
      onClick,
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
        tabIndex={onClick ? 0 : -1}
        onClick={!disabled ? onClick : undefined}
        className={twMerge(
          theme.base,
          theme.variants[variant],
          theme.colors[color]?.base,
          theme.colors[color]?.variants?.[variant],
          theme.sizes[size],
          theme.focus,
          !!onClick && !disabled && theme.colors[color]?.selectable?.base,
          !!onClick &&
            !disabled &&
            theme.colors[color]?.selectable?.variants?.[variant]?.base,
          selected &&
            theme.colors[color]?.selectable?.variants?.[variant]?.selected,
          disableMargins && 'm-0',
          'transition-colors duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill]',
          className,
          disabled && theme.disabled
        )}
        aria-disabled={disabled}
      >
        {start && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.start,
              theme.adornment.sizes[size]
            )}
          >
            {start}
          </div>
        )}
        <div className={'flex items-center'}>{children}</div>
        {end && (
          <div
            className={twMerge(
              theme.adornment.base,
              theme.adornment.end,
              theme.adornment.sizes[size]
            )}
          >
            {end}
          </div>
        )}
      </div>
    );
  }
);
