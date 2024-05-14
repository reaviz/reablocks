import { Arrow } from '@/elements';
import { cn, useComponentTheme } from '@/utils';
import React, { FC } from 'react';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbSeparatorProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = ({
  children = <Arrow direction="right" />,
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
