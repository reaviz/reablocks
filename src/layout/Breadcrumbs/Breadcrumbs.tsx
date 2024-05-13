import { cn, useComponentTheme } from '@/utils';
import React, { FC } from 'react';
import { BreadcrumbsTheme } from './BreadcrumbsTheme';

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  breadcrumbs: { label: string; href: string }[];
  seperator?: React.ReactNode;
  theme?: BreadcrumbsTheme;
}

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

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  breadcrumbs,
  seperator = <Chevron />,
  theme: customTheme,
  ...rest
}) => {
  const theme = useComponentTheme('breadcrumbs', customTheme);

  return (
    <nav aria-label={rest?.['aria-label'] ?? 'breadcrumbs'}>
      <ol className={theme.base}>
        {breadcrumbs.map((breadcrumb, index) => {
          const isActiveBreadcrumb = index === breadcrumbs.length - 1;

          return (
            <li
              className="flex gap-2 items-center"
              key={`breadcrumb-${breadcrumb?.label}-${index}`}
            >
              <a
                className={cn(
                  theme.breadcrumb,
                  isActiveBreadcrumb && theme.activeBreadcrumb
                )}
                {...(isActiveBreadcrumb
                  ? {
                      'aria-current': 'location'
                    }
                  : {})}
                href={breadcrumb.href}
              >
                {breadcrumb.label}
              </a>
              <span aria-hidden={true}>
                {index < breadcrumbs.length - 1 && seperator}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
