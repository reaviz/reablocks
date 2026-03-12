import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface SmallProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Small = forwardRef<HTMLElement, SmallProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <small ref={ref} className={cn(theme.small, className)} {...rest}>
        {children}
      </small>
    );
  }
);

Small.displayName = 'Small';
