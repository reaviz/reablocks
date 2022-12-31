import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import css from './List.module.css';

export type ListProps = InputHTMLAttributes<HTMLDivElement>;

export const List: FC<ListProps> = ({ className, children, ...rest }) => (
  <div {...rest} role="list" className={classNames(className, css.list)}>
    {children}
  </div>
);
