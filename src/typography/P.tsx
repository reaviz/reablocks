import React, { forwardRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from './TypographyTheme';

export interface PProps extends React.HTMLAttributes<HTMLParagraphElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme(
      'typography',
      customTheme
    );

    return (
      <p ref={ref} className={twMerge(theme.p, className)} {...rest}>
        {children}
      </p>
    );
  }
);

P.displayName = 'P';
