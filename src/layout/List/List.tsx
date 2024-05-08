import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '@/utils';
import { ListTheme } from './ListTheme';

export type ListProps = InputHTMLAttributes<HTMLDivElement> & {
  /**
   * Theme for the List.
   */
  theme?: ListTheme;
};

export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, theme: customTheme, ...rest }, ref) => {
    const theme: ListTheme = useComponentTheme('list', customTheme);
    return (
      <div
        {...rest}
        ref={ref}
        role="list"
        className={twMerge(theme.base, className)}
      >
        {children}
      </div>
    );
  }
);
