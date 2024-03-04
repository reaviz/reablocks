import React, { FC } from 'react';
import { useComponentTheme } from '../../utils/Theme/TW';
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
}

export const Divider: FC<DividerProps> = ({
  className,
  disableMargins,
  orientation,
  ...rest
}) => {
  const theme: DividerTheme = useComponentTheme('divider');

  return (
    <hr
      {...rest}
      className={twMerge(
        theme.base,
        theme.orientation[orientation],
        disableMargins && theme.disableMargins,
        className
      )}
    />
  );
};

Divider.defaultProps = {
  orientation: 'horizontal',
  disableMargins: false
};
