import React, { forwardRef, HTMLAttributes } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface LeadProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <p ref={ref} className={cn(theme.lead, className)} {...rest}>
        {children}
      </p>
    );
  }
);

Lead.displayName = 'Lead';
