import type { FC, LegacyRef } from 'react';
import React, { forwardRef } from 'react';

import type { TypographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

/**
 * @deprecated
 */
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
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

  fontStyle?: 'default' | 'thin' | 'bold' | 'extraBold' | 'italic';

  /**
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';

  /**
   * Theme for the Typography.
   */
  theme?: TypographyThemeDeprecated;
}

/**
 * @deprecated
 */
export interface TextRef {
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLSpanElement>;
}

/**
 * @deprecated Use `<p>` or `<span>` directly with Tailwind utility classes instead.
 */
export const Text: FC<TextProps & TextRef> = forwardRef(
  (
    {
      color = 'default',
      variant = 'default',
      fontStyle = 'default',
      children,
      className,
      theme: customTheme,
      ...rest
    }: TextProps,
    ref
  ) => {
    const theme: TypographyThemeDeprecated = useComponentTheme(
      'typography_deprecated',
      customTheme
    );

    return (
      <span
        ref={ref}
        className={twMerge(
          theme.colors[color],
          theme.variant[variant],
          theme.text[fontStyle],
          className
        )}
        {...rest}
      >
        {children}
      </span>
    );
  }
);
