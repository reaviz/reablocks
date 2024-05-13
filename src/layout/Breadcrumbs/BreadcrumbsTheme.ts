export interface BreadcrumbsTheme {
  base: string;
  breadcrumb: string;
  activeBreadcrumb: string;
}

export const breadcrumbsTheme: BreadcrumbsTheme = {
  base: 'flex gap-2 items-center',
  breadcrumb:
    'hover:text-panel-content text-panel-secondary-content transition-colors',
  activeBreadcrumb: 'text-primary pointer-events-none'
};

export const legacyBreadcrumbTheme: BreadcrumbsTheme = breadcrumbsTheme;
