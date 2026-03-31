import React, { forwardRef, HTMLAttributes } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface H5Props extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H5 = forwardRef<HTMLHeadingElement, H5Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <h5 ref={ref} className={cn(theme.h5, className)} {...rest}>
        {children}
      </h5>
    );
  }
);

H5.displayName = 'H5';
