import React, { FC, forwardRef, InputHTMLAttributes, LegacyRef } from 'react';
import { twMerge } from '@/utils';
import { useComponentTheme } from '@/utils';
import { ListTheme } from './ListTheme';

export type ListProps = InputHTMLAttributes<HTMLDivElement> & {
  /**
   * Theme for the List.
   */
  theme?: ListTheme;
};

export interface ListRef {
  /**
   * Reference to the list element.
   */
  ref?: LegacyRef<HTMLDivElement>;
}

export const List: FC<ListProps & ListRef> = forwardRef<
  HTMLDivElement,
  ListProps
>(({ className, children, theme: customTheme, ...rest }, ref) => {
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
});
