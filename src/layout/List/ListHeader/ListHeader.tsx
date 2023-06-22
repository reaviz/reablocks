import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Sub } from '../../../typography';
import css from './ListHeader.module.css';

export type ListHeaderProps = InputHTMLAttributes<HTMLDivElement>;

export const ListHeader: FC<ListHeaderProps> = ({
  className,
  children,
  ...rest
}) => (
  <Sub {...(rest as any)} className={classNames(className, css.header)}>
    {children}
  </Sub>
);
