import { cn, useComponentTheme } from '@/utils';
import React, { FC } from 'react';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

const Chevron = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path d="M6.47003 4L5.53003 4.94L8.58336 8L5.53003 11.06L6.47003 12L10.47 8L6.47003 4Z" />
  </svg>
);

export interface BreadcrumbSeparatorProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  theme?: BreadcrumbsTheme;
}

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = ({
  children,
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
      {children ?? <Chevron />}
    </li>
  );
};
