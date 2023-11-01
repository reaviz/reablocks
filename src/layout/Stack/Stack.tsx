import React, { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import css from './Stack.module.css';

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
  alignItems?: 'start' | 'end' | 'center';

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
  ) => (
    <div
      className={classNames(css.container, className, {
        [css.dense]: dense,
        [css.inline]: inline,
        [css[direction]]: direction,
        [css[`${alignItems}Align`]]: alignItems,
        [css[`${justifyContent}Justify`]]: justifyContent
      })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  )
);

Stack.defaultProps = {
  dense: false,
  inline: false,
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'start'
};
