import React, { FC, InputHTMLAttributes } from 'react';
import { ListTheme } from '@/layout/List/ListTheme';
import { cn, useComponentTheme } from '@/utils';
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
    <Small {...(rest as any)} className={cn(theme.header, className)}>
      {children}
    </Small>
  );
};
