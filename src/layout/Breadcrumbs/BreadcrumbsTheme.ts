export interface BreadcrumbsTheme {
  base: string;
  separator: string;
  list: string;
  link: string;
  activePage: string;
}

export const breadcrumbsTheme: BreadcrumbsTheme = {
  base: '',
  separator: '[&>svg]:size-3.5',
  list: 'flex gap-2 items-center',
  link: 'hover:text-text-content-primary text-text-content-secondary transition-colors',
  activePage: 'text-primary pointer-events-none'
};

export const legacyBreadcrumbTheme: BreadcrumbsTheme = breadcrumbsTheme;
