import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './Sub.module.css';
import common from '../Typography.module.css';

export interface SubProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Color variation of the text.
   */
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

  /**
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}

export interface SubRef {
  ref?: Ref<HTMLSpanElement>;
}

export const Sub: FC<SubProps & SubRef> = forwardRef(
  (
    { color, variant, disableMargins, children, className, ...rest }: SubProps,
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      ref={ref}
      className={classNames(
        css.text,
        common[color],
        common[variant],
        { [css.disableMargins]: disableMargins },
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
);

Sub.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
