import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './PageTitle.module.css';

export interface PageTitleProps
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
   * Font variant for the title.
   */
  variant?: 'default' | 'mono';

  /**
   * Whether to disable the margins.
   */
  disableMargins?: boolean;
}
export interface PageTitleRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const PageTitle: FC<PageTitleProps & PageTitleRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      ...rest
    }: PageTitleProps,
    ref: Ref<HTMLHeadingElement>
  ) => (
    <h1
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
    </h1>
  )
);

PageTitle.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
