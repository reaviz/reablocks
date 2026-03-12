import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface H3Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H3 = forwardRef<HTMLHeadingElement, H3Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h3 ref={ref} className={cn(theme.h3, className)} {...rest}>
        {children}
      </h3>
    );
  }
);

H3.displayName = 'H3';
