import React, { forwardRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from './TypographyTheme';

export interface LargeProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const Large = forwardRef<HTMLDivElement, LargeProps>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme(
      'typography',
      customTheme
    );

    return (
      <div ref={ref} className={twMerge(theme.large, className)} {...rest}>
        {children}
      </div>
    );
  }
);

Large.displayName = 'Large';
