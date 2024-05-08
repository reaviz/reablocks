import React, { FC, forwardRef, LegacyRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { TypographyTheme } from '@/typography/TypographyTheme';

export interface PrimaryHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
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
export interface PrimaryHeadingRef {
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const PrimaryHeading: FC<PrimaryHeadingProps & PrimaryHeadingRef> =
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
      }: PrimaryHeadingProps,
      ref
    ) => {
      const theme: TypographyTheme = useComponentTheme(
        'typography',
        customTheme
      );

      return (
        <h2
          ref={ref}
          className={twMerge(
            theme.colors[color],
            theme.variant[variant],
            theme.primaryHeading,
            disableMargins && theme.disableMargins,
            className
          )}
          {...rest}
        >
          {children}
        </h2>
      );
    }
  );

PrimaryHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
