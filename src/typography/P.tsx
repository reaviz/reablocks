import React, { forwardRef } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <p ref={ref} className={cn(theme.p, className)} {...rest}>
        {children}
      </p>
    );
  }
);

P.displayName = 'P';
