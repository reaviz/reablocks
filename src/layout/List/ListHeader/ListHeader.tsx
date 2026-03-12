import React, { FC, InputHTMLAttributes } from 'react';
import { ListTheme } from '@/layout/List/ListTheme';
import { useComponentTheme } from '@/utils';
import { twMerge } from 'tailwind-merge';
import { Small } from '@/typography';

export type ListHeaderProps = InputHTMLAttributes<HTMLDivElement> & {
  /**
   * Theme for the List.
   */
  theme?: ListTheme;
};

export const ListHeader: FC<ListHeaderProps> = ({
  className,
  children,
  theme: customTheme,
  ...rest
}) => {
  const theme: ListTheme = useComponentTheme('list', customTheme);
  return (
    <Small {...(rest as any)} className={twMerge(theme.header, className)}>
      {children}
    </Small>
  );
};
