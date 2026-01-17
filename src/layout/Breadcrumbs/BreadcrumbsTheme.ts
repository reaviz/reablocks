export interface BreadcrumbsTheme {
  base: string;
  separator: string;
  list: string;
  link: string;
  activePage: string;
}

export const defaultBreadcrumbsTheme: BreadcrumbsTheme = {
  base: '',
  separator: '[&>svg]:size-3.5',
  list: 'flex gap-2 items-center',
  link: 'hover:text-text-primary text-text-secondary transition-colors',
  activePage: 'text-primary pointer-events-none'
};

export const unifyBreadcrumbsTheme: BreadcrumbsTheme = {
  base: 'text-breadcrumbs-colors-primary-text-resting',
  separator: '[&>svg]:size-(--breadcrumbs-details-asset-size-sm)',
  list: 'flex gap-(--breadcrumbs-details-space-between-lg) items-center',
  link: 'hover:text-breadcrumbs-colors-primary-text-hover transition-colors',
  activePage:
    'text-breadcrumbs-colors-primary-text-selected pointer-events-none'
};
