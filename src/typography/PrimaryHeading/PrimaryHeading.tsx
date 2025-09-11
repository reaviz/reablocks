import React, { FC, forwardRef, LegacyRef } from 'react';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';
import { TypographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';

/**
 * @deprecated
 */
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
  theme?: TypographyThemeDeprecated;
}

/**
 * @deprecated
 */
export interface PrimaryHeadingRef {
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLHeadingElement>;
}

/**
 * @deprecated
 */
export const PrimaryHeading: FC<PrimaryHeadingProps & PrimaryHeadingRef> =
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
      }: PrimaryHeadingProps,
      ref
    ) => {
      const theme: TypographyThemeDeprecated = useComponentTheme(
        'typography_deprecated',
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
