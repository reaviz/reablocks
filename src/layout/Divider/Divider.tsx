import React, { FC } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { DividerTheme } from './DividerTheme';

export interface DividerProps {
  /**
   * Classname to apply to the divider.
   */
  className?: string;

  /**
   * Disable the margins of the divider.
   * The default margin is: `--spacings-md`.
   */
  disableMargins?: boolean;

  /**
   * Orientation of the divider.
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Additional style attributes. Recommend to use css classes over this.
   */
  style?: React.CSSProperties;

  /**
   * Theme for the Divider.
   */
  theme?: DividerTheme;

  /**
   * Variant of the divider.
   */
  variant?: 'primary' | 'secondary';
}

export const Divider: FC<DividerProps> = ({
  className,
  disableMargins = false,
  orientation = 'horizontal',
  variant = 'primary',
  theme: customTheme,
  ...rest
}) => {
  const theme: DividerTheme = useComponentTheme('divider', customTheme);

  return (
    <hr
      {...rest}
      className={twMerge(
        theme.base,
        theme.variant[variant],
        theme.orientation[orientation],
        disableMargins && theme.disableMargins,
        className
      )}
    />
  );
};
