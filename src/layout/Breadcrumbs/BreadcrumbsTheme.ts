export interface BreadcrumbsTheme {
  base: string;
  separator: string;
  list: string;
  link: string;
  activePage: string;
}

export const breadcrumbsTheme: BreadcrumbsTheme = {
  base: 'text-breadcrumbs-colors-primary-text-resting',
  separator: '[&>svg]:size-3.5',
  list: 'flex gap-2 items-center',
  link: 'hover:text-breadcrumbs-colors-primary-text-hover transition-colors',
  activePage:
    'text-breadcrumbs-colors-primary-text-selected pointer-events-none'
};
