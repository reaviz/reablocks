import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './PrimaryHeading.module.css';

export interface PrimaryHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * Color variation of the title.
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
export interface PrimaryHeadingRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const PrimaryHeading: FC<PrimaryHeadingProps & PrimaryHeadingRef> =
  forwardRef(
    (
      {
        children,
        color,
        variant,
        disableMargins,
        className,
        ...rest
      }: PrimaryHeadingProps,
      ref: Ref<HTMLHeadingElement>
    ) => (
      <h2
        ref={ref}
        className={classNames(
          css[color],
          css[variant],
          { [css.disableMargins]: disableMargins },
          className
        )}
        {...rest}
      >
        {children}
      </h2>
    )
  );

PrimaryHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
