import React, { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import css from './List.module.css';

export type ListProps = InputHTMLAttributes<HTMLDivElement>;

export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ className, children, ...rest }, ref) => (
    <div
      {...rest}
      ref={ref}
      role="list"
      className={classNames(className, css.list)}
    >
      {children}
    </div>
  )
);
