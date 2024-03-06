import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

export interface SubProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the text.
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
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}

export interface SubRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const Sub: FC<SubProps & SubRef> = forwardRef(
  (
    { color, variant, disableMargins, children, className, ...rest }: SubProps,
    ref
  ) => {
    const theme = useComponentTheme('typography');

    return (
      <h6
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.sub,
          disableMargins && theme.disableMargins,
          className
        )}
        {...rest}
      >
        {children}
      </h6>
    );
  }
);

Sub.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
