import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface H4Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H4 = forwardRef<HTMLHeadingElement, H4Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h4 ref={ref} className={cn(theme.h4, className)} {...rest}>
        {children}
      </h4>
    );
  }
);

H4.displayName = 'H4';
