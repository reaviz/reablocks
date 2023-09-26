import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { Typography } from '../Typography';

import common from '../Typography.module.css';
import css from './Text.module.css';

export interface TextProps
  extends Typography,
    Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'> {
  fontStyle?: 'default' | 'thin' | 'bold' | 'extraBold' | 'italic';
}

export interface TextRef {
  ref?: Ref<HTMLSpanElement>;
}

export const Text: FC<TextProps & TextRef> = forwardRef(
  (
    {
      color,
      variant,
      fontStyle,
      children,
      className,
      fontWeight = 'normal',
      ...rest
    }: TextProps,
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      ref={ref}
      className={classNames(
        common[color],
        common[variant],
        common[fontWeight],
        css[fontStyle],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
);

Text.defaultProps = {
  color: 'default',
  variant: 'default',
  fontStyle: 'default'
};
