import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './SecondaryHeading.module.css';

export type SecondaryHeadingProps = Typography &
  React.HTMLAttributes<HTMLHeadingElement>;
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
        fontWeight = 'normal',
        ...rest
      }: SecondaryHeadingProps,
      ref: Ref<HTMLHeadingElement>
    ) => (
      <h3
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
      </h3>
    )
  );

SecondaryHeading.defaultProps = {
  color: 'default',
  variant: 'default',
  disableMargins: false
};
