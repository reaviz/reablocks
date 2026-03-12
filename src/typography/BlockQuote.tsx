import React, { forwardRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from './TypographyTheme';

export interface BlockQuoteProps
  extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const BlockQuote = forwardRef<HTMLQuoteElement, BlockQuoteProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme(
      'typography',
      customTheme
    );

    return (
      <blockquote
        ref={ref}
        className={twMerge(theme.blockquote, className)}
        {...rest}
      >
        {children}
      </blockquote>
    );
  }
);

BlockQuote.displayName = 'BlockQuote';
