export interface BreadcrumbsTheme {
  /** CSS class applied to the root breadcrumbs container. */
  base: string;
  /** CSS class applied to the separator between breadcrumb items. */
  separator: string;
  /** CSS class applied to the breadcrumb list element. */
  list: string;
  /** CSS class applied to each breadcrumb link. */
  link: string;
  /** CSS class applied to the active (current) page item. */
  activePage: string;
}

export const breadcrumbsTheme: BreadcrumbsTheme = {
  base: '',
  separator: '[&>svg]:size-3.5',
  list: 'flex gap-2 items-center',
  link: 'hover:text-text-primary text-text-secondary transition-colors',
  activePage: 'text-primary pointer-events-none'
};
