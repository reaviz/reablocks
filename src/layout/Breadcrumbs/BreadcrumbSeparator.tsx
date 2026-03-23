import type { FC, LiHTMLAttributes } from 'react';
import React from 'react';

import { cn, useComponentTheme } from '@/utils';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg?react';

import type { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbSeparatorProps extends LiHTMLAttributes<HTMLLIElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = ({
  children = <ArrowRightIcon />,
  className,
  theme: customTheme,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return (
    <li
      role="presentation"
      aria-hidden={true}
      className={cn(theme.separator, className)}
      {...rest}
    >
      {children}
    </li>
  );
};
