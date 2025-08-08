import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';

export type SmallHeadingColors =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'success'
  | 'warning'
  | 'info'
  | string;

export interface SmallHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
   */
  color?: SmallHeadingColors;

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

export interface SmallHeadingRef {
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLHeadingElement>;
}

export const SmallHeading: FC<SmallHeadingProps & SmallHeadingRef> = forwardRef(
  (
    {
      children,
      color = 'default',
      variant = 'default',
      disableMargins = false,
      className,
      theme: customTheme,
      ...rest
    }: SmallHeadingProps,
    ref
  ) => {
    const theme: TypographyThemeDeprecated = useComponentTheme(
      'typography_deprecated',
      customTheme
    );

    return (
      <h5
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.smallHeading,
          disableMargins && theme.disableMargins,
          className
        )}
        {...rest}
      >
        {children}
      </h5>
    );
  }
);
