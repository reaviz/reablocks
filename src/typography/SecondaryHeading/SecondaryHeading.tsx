import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from '@/typography/TypographyTheme';

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
    | 'info'
    | string;

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
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const SecondaryHeading: FC<SecondaryHeadingProps & SecondaryHeadingRef> =
  forwardRef(
    (
      {
        children,
        color = 'default',
        variant = 'default',
        disableMargins = false,
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
