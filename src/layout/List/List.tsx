import React, { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useComponentTheme } from '../../utils';
import { ListTheme } from './ListTheme';

export type ListProps = InputHTMLAttributes<HTMLDivElement>;

export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...rest }, ref) => {
    const theme: ListTheme = useComponentTheme('list');
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
