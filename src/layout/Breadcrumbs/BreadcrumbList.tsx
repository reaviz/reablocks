import React, { FC, OlHTMLAttributes } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbListProps extends OlHTMLAttributes<HTMLOListElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbList: FC<BreadcrumbListProps> = ({
  className,
  theme: customTheme,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return <ol className={cn(theme.list, className)} {...rest} />;
};
