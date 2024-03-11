import React, { FC, InputHTMLAttributes } from 'react';
import { Sub } from '../../../typography';
import { ListTheme } from '../ListTheme';
import { useComponentTheme } from '../../../utils';
import { twMerge } from 'tailwind-merge';

export type ListHeaderProps = InputHTMLAttributes<HTMLDivElement>;

export const ListHeader: FC<ListHeaderProps> = ({
  className,
  children,
  ...rest
}) => {
  const theme: ListTheme = useComponentTheme('list');
  return (
    <Sub {...(rest as any)} className={twMerge(className, theme.header)}>
      {children}
    </Sub>
  );
};
