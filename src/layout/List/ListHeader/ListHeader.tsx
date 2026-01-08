import type { FC, InputHTMLAttributes } from 'react';
import React from 'react';

import type { ListTheme } from '@/layout/List/ListTheme';
import { Typography } from '@/typography';
import { useComponentTheme } from '@/utils';
import { twMerge } from '@/utils';

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
    <Typography
      variant="button"
      size="small"
      {...(rest as any)}
      className={twMerge(className, theme.header)}
    >
      {children}
    </Typography>
  );
};
