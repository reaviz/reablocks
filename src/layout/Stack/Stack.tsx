import React, { forwardRef, HTMLAttributes } from 'react';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { StackTheme } from './StackTheme';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the stack will be dense.
   */
  dense?: boolean;

  /**
   * If true, the stack will be inline.
   */
  inline?: boolean;

  /**
   * The direction of the stack.
   */
  direction?: 'row' | 'column' | 'rowReverse' | 'columnReverse';

  /**
   * How the content is arranged inside the stack.
   */
  alignItems?: 'start' | 'end' | 'center' | 'stretch';

  /**
   * How the content is arranged inside the stack.
   */
  justifyContent?: 'start' | 'end' | 'center' | 'spaceBetween';

  /**
   * Theme for the Stack.
   */
  theme?: StackTheme;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      direction = 'row',
      dense = false,
      inline = false,
      alignItems = 'center',
      justifyContent = 'start',
      theme: customTheme,
      ...otherProps
    },
    ref
  ) => {
    const theme: StackTheme = useComponentTheme('stack', customTheme);

    return (
      <div
        className={twMerge(
          theme.base,
          dense && theme.dense,
          inline && theme.inline,
          theme.direction[direction],
          theme.alignItems[alignItems],
          theme.justifyContent[justifyContent],
          className
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);
