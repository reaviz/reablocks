import type { FC, LegacyRef } from 'react';
import React, { forwardRef } from 'react';

import type { TypographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

/**
 * @deprecated
 */
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
    | 'info'
    | string;

  /**
   * Font variant for the text.
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
export interface SubRef {
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLHeadingElement>;
}

/**
 * @deprecated
 */
export const Sub: FC<SubProps & SubRef> = forwardRef(
  (
    {
      color = 'default',
      variant = 'default',
      disableMargins = false,
      children,
      className,
      theme: customTheme,
      ...rest
    }: SubProps,
    ref,
  ) => {
    const theme: TypographyThemeDeprecated = useComponentTheme(
      'typography_deprecated',
      customTheme,
    );

    return (
      <h6
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.sub,
          disableMargins && theme.disableMargins,
          className,
        )}
        {...rest}
      >
        {children}
      </h6>
    );
  },
);
