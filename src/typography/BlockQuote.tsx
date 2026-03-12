import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface BlockQuoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const BlockQuote = forwardRef<HTMLQuoteElement, BlockQuoteProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <blockquote
        ref={ref}
        className={cn(theme.blockquote, className)}
        {...rest}
      >
        {children}
      </blockquote>
    );
  }
);

BlockQuote.displayName = 'BlockQuote';
