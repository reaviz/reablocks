import React, { forwardRef, HTMLAttributes } from 'react';
import { useComponentTheme } from '../../utils/Theme/TW';
import { twMerge } from 'tailwind-merge';

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
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      children,
      className,
      direction,
      dense,
      inline,
      alignItems,
      justifyContent,
      ...otherProps
    },
    ref
  ) => {
    const theme = useComponentTheme('stack');
    console.log('direction->', direction, theme[direction]);
    return (
      <div
        className={twMerge(
          theme.base,
          className,
          dense && theme.dense,
          inline && theme.inline,
          theme.direction[direction],
          theme.alignItems[alignItems],
          theme.justifyContent[justifyContent]
        )}
        ref={ref}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
);

Stack.defaultProps = {
  dense: false,
  inline: false,
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'start'
};
