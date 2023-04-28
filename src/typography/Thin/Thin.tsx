import classNames from 'classnames';
import React, { FC, forwardRef, Ref } from 'react';
import css from './Thin.module.css';

export interface ThinRef {
  ref?: Ref<HTMLSpanElement>;
}

export const Thin: FC<React.HTMLAttributes<HTMLSpanElement> & ThinRef> =
  forwardRef(
    (
      { children, className, ...rest }: React.HTMLAttributes<HTMLSpanElement>,
      ref: Ref<HTMLSpanElement>
    ) => (
      <span ref={ref} className={classNames(css.thin, className)} {...rest}>
        {children}
      </span>
    )
  );
