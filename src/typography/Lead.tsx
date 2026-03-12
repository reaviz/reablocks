import React, { forwardRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from './TypographyTheme';

export interface LeadProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Lead = forwardRef<HTMLParagraphElement, LeadProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme(
      'typography',
      customTheme
    );

    return (
      <p ref={ref} className={twMerge(theme.lead, className)} {...rest}>
        {children}
      </p>
    );
  }
);

Lead.displayName = 'Lead';
