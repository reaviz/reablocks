import React, { forwardRef } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { TypographyTheme } from './TypographyTheme';

export interface H2Props extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Theme for Typography.
   */
  theme?: TypographyTheme;
}

export const H2 = forwardRef<HTMLHeadingElement, H2Props>(
  ({ className, theme: customTheme, children, ...rest }, ref) => {
    const theme: TypographyTheme = useComponentTheme(
      'typography',
      customTheme
    );

    return (
      <h2 ref={ref} className={twMerge(theme.h2, className)} {...rest}>
        {children}
      </h2>
    );
  }
);

H2.displayName = 'H2';
