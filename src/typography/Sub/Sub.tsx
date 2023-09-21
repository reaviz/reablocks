import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './Sub.module.css';

export type SubProps = Typography & React.HTMLAttributes<HTMLHeadingElement>;

export interface SubRef {
  ref?: Ref<HTMLHeadingElement>;
}

export const Sub: FC<SubProps & SubRef> = forwardRef(
  (
    {
      color,
      variant,
      disableMargins,
      children,
      className,
      fontWeight,
      ...rest
    }: SubProps,
    ref: Ref<HTMLHeadingElement>
  ) => (
    <h6
      style={{ fontWeight }}
      ref={ref}
      className={classNames(
        common[color],
        common[variant],
        css.root,
        { [css.disableMargins]: disableMargins },
        className
      )}
      {...rest}
    >
      {children}
    </h6>
  )
);

Sub.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
