import React, { FC } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbListProps
  extends React.OlHTMLAttributes<HTMLOListElement> {
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
