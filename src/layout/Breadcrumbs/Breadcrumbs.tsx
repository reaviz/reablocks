import type { FC } from 'react';
import React from 'react';

import { cn, useComponentTheme } from '@/utils';

import type { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  theme?: BreadcrumbsTheme;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  theme: customTheme,
  className,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return (
    <nav
      className={cn(theme.base, className)}
      aria-label={rest?.['aria-label'] ?? 'breadcrumbs'}
      {...rest}
    />
  );
};
