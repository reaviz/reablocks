import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './SmallHeading.module.css';

export type SmallHeadingProps = Typography &
  React.HTMLAttributes<HTMLHeadingElement>;

export interface SmallHeadingRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const SmallHeading: FC<SmallHeadingProps & SmallHeadingRef> = forwardRef(
  (
    {
      children,
      color,
      variant,
      disableMargins,
      className,
      fontWeight = 'normal',
      ...rest
    }: SmallHeadingProps,
    ref: Ref<HTMLHeadingElement>
  ) => (
    <h5
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
    </h5>
  )
);

SmallHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
