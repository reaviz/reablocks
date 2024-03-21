import React, { FC, forwardRef, LegacyRef, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';

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
    | 'info';

  /**
   * Size variant for the chip.
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Style variant for the chip.
   */
  variant?: 'filled' | 'outline';

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
}

export interface ChipRef {
  ref?: LegacyRef<HTMLDivElement>;
}

export const Chip: FC<ChipProps & ChipRef> = forwardRef(
  (
    {
      children,
      color = 'default',
      variant = 'filled',
      size,
      selected,
      disabled,
      className,
      disableMargins,
      start,
      end,
      onClick,
      ...rest
    },
    ref
  ) => {
    const theme = useComponentTheme('chip');

    return (
      <div
        {...rest}
        ref={ref}
        tabIndex={onClick ? 0 : -1}
        onClick={onClick}
        className={twMerge(
          theme.base,
          theme.colors[color]?.base,
          theme.sizes[size],
          theme.focus,
          !!onClick && !disabled && theme.colors[color]?.selectable,
          selected && theme.colors[color]?.selected,
          theme.variants[variant],
          disableMargins && 'm-0',
          'transition-colors duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill]',
          className
        )}
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

Chip.defaultProps = {
  color: 'default',
  size: 'medium',
  variant: 'filled'
};
