import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from '../TypographyTheme';

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

  /**
   * Theme for the Typography.
   */
  theme?: TypographyTheme;
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
        theme: customTheme,
        ...rest
      }: SecondaryHeadingProps,
      ref
    ) => {
      const theme: TypographyTheme = useComponentTheme(
        'typography',
        customTheme
      );

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
