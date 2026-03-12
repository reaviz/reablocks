import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface H6Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H6 = forwardRef<HTMLHeadingElement, H6Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h6 ref={ref} className={cn(theme.h6, className)} {...rest}>
        {children}
      </h6>
    );
  }
);

H6.displayName = 'H6';
