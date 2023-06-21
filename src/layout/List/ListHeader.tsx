import React, { FC, InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import css from './List.module.css';
import { SmallHeading } from '../../typography';

export type ListHeaderProps = InputHTMLAttributes<HTMLDivElement>;

export const ListHeader: FC<ListHeaderProps> = ({
  className,
  children,
  ...rest
}) => (
  <SmallHeading
    {...(rest as any)}
    className={classNames(className, css.header)}
  >
    {children}
  </SmallHeading>
);
