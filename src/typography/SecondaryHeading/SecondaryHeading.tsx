import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

export interface SecondaryHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the heading.
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
   * Font variant for the heading.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}

export interface SecondaryHeadingRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const SecondaryHeading: FC<SecondaryHeadingProps & SecondaryHeadingRef> =
  forwardRef(
    (
      {
        children,
        color,
        variant,
        disableMargins,
        className,
        ...rest
      }: SecondaryHeadingProps,
      ref
    ) => {
      const theme = useComponentTheme('typographyTheme');
      return (
        <h3
          ref={ref}
          className={twMerge(
            theme.colors[color],
            theme.variant[variant],
            theme.secondaryHeading,
            disableMargins && theme.disableMargins,
            className
          )}
          {...rest}
        >
          {children}
        </h3>
      );
    }
  );

SecondaryHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
