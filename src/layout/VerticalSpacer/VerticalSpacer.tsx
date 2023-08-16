import React, { forwardRef, HTMLAttributes } from 'react';
import classNames from 'classnames';
import css from './VerticalSpacer.module.css';

export interface VerticalSpacerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The amount of space to add.
   */
  space: VerticalSpaceType;
}

export type VerticalSpaceType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export const VerticalSpacer = forwardRef<HTMLDivElement, VerticalSpacerProps>(
  ({ space, className, ...rest }, ref) => (
    <div
      className={classNames(className, {
        [css[space]]: true
      })}
      ref={ref}
      {...rest}
    />
  )
);

VerticalSpacer.defaultProps = {
  space: 'md'
};
