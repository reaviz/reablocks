import React, { FC, forwardRef, LegacyRef } from 'react';
import { useComponentTheme } from '../../utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from '../TypographyTheme';

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
    | 'info';

  fontStyle?: 'default' | 'thin' | 'bold' | 'extraBold' | 'italic';

  /**
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';

  /**
   * Theme for the Typography.
   */
  theme?: TypographyTheme;
}

export interface TextRef {
  ref?: LegacyRef<HTMLSpanElement>;
}

export const Text: FC<TextProps & TextRef> = forwardRef(
  (
    {
      color,
      variant,
      fontStyle,
      children,
      className,
      theme: customTheme,
      ...rest
    }: TextProps,
    ref
  ) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

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

Text.defaultProps = {
  color: 'default',
  variant: 'default',
  fontStyle: 'default'
};
