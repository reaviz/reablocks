import React from 'react';
import classNames from 'classnames';
import css from './Spacer.module.css';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the spacer will be dense.
   */
  dense?: boolean;

  /**
   * If true, the spacer will be inline.
   */
  inline?: boolean;

  /**
   * The direction of the spacer.
   */
  direction?: 'row' | 'column';

  /**
   * How the content is arranged inside the spacer.
   */
  alignItems?: 'start' | 'end' | 'center';

  /**
   * How the content is arranged inside the spacer.
   */
  justifyContent?: 'start' | 'end' | 'center' | 'spaceBetween';
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
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

Spacer.defaultProps = {
  dense: false,
  inline: true,
  direction: 'row',
  alignItems: 'center',
  justifyContent: 'start'
};
