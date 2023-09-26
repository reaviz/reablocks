import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './PrimaryHeading.module.css';

export type PrimaryHeadingProps = Typography &
  React.HTMLAttributes<HTMLHeadingElement>;

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
        fontWeight = 'extra-bold',
        ...rest
      }: PrimaryHeadingProps,
      ref: Ref<HTMLHeadingElement>
    ) => (
      <h2
        ref={ref}
        className={classNames(
          common[color],
          common[variant],
          common[fontWeight],
          css.root,
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
  fontWeight: 'normal',
  disableMargins: false
};
