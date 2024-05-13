import React, { FC } from 'react';
import { cn, useComponentTheme } from '@/utils';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbLink: FC<BreadcrumbLinkProps> = ({
  className,
  theme: customTheme,
  href,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return <a className={cn(theme.link, className)} href={href} {...rest} />;
};
