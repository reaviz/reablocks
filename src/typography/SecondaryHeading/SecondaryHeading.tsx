import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './SecondaryHeading.module.css';
import common from '../Typography.module.css';

export interface SecondaryHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the heading.
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
   * Font variant for the heading.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}
export interface SecondaryHeadingRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const SecondaryHeading: FC<SecondaryHeadingProps & SecondaryHeadingRef> =
  forwardRef(
    (
      {
        children,
        color,
        variant,
        disableMargins,
        className,
        ...rest
      }: SecondaryHeadingProps,
      ref: Ref<HTMLHeadingElement>
    ) => (
      <h3
        ref={ref}
        className={classNames(
          common[color],
          common[variant],
          { [css.disableMargins]: disableMargins },
          className
        )}
        {...rest}
      >
        {children}
      </h3>
    )
  );

SecondaryHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
