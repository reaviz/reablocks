import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyThemeDeprecated } from '@/typography/TypographyThemeDeprecated';

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

export interface TextRef {
  /**
   * Reference to the HTML heading element.
   */
  ref?: LegacyRef<HTMLSpanElement>;
}

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
