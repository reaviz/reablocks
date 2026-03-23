import React, { forwardRef, HTMLAttributes } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface H1Props extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H1 = forwardRef<HTMLHeadingElement, H1Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h1 ref={ref} className={cn(theme.h1, className)} {...rest}>
        {children}
      </h1>
    );
  }
);

H1.displayName = 'H1';
