import { cn, useComponentTheme } from '@/utils';
import React, { FC } from 'react';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbPageProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbPage: FC<BreadcrumbPageProps> = ({
  theme: customTheme,
  className,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(theme.activePage, className)}
      {...rest}
    />
  );
};
