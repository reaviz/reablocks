import React, { forwardRef, HTMLAttributes } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { TypographyTheme } from './TypographyTheme';

export interface MutedProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Muted = forwardRef<HTMLParagraphElement, MutedProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme('typography', customTheme);

    return (
      <p ref={ref} className={cn(theme.muted, className)} {...rest}>
        {children}
      </p>
    );
  }
);

Muted.displayName = 'Muted';
