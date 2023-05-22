import React from 'react';
import classNames from 'classnames';
import css from './Spacer.module.css';

export interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If true, the spacer will be dense.
   */
  dense?: boolean;
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ children, className, dense, ...otherProps }, ref) => (
    <div
      className={classNames(css.container, className, { [css.dense]: dense })}
      ref={ref}
      {...otherProps}
    >
      {children}
    </div>
  )
);

Spacer.defaultProps = {
  dense: false
};
