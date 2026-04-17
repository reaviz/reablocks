import { cn, useComponentTheme } from '@/utils';
import React, { FC, HTMLAttributes } from 'react';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
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
