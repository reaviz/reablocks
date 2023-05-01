import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';
import css from './Text.module.css';
import common from '../Typography.module.css';

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
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

  fontStyle?: 'default' | 'thin' | 'bold' | 'extraBold' | 'italic';

  /**
   * Font variant for the text.
   */
  variant?: 'default' | 'mono';
}

export interface TextRef {
  ref?: Ref<HTMLSpanElement>;
}

export const Text: FC<TextProps & TextRef> = forwardRef(
  (
    { color, variant, fontStyle, children, className, ...rest }: TextProps,
    ref: Ref<HTMLSpanElement>
  ) => (
    <span
      ref={ref}
      className={classNames(
        common[color],
        common[variant],
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
