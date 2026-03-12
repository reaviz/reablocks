import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Large = forwardRef<HTMLDivElement, LargeProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <div ref={ref} className={cn(theme.large, className)} {...rest}>
        {children}
      </div>
    );
  }
);

Large.displayName = 'Large';
