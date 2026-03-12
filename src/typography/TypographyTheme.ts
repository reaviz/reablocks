export interface TypographyTheme {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p: string;
  blockquote: string;
  lead: string;
  large: string;
  small: string;
  muted: string;
}

export const typographyTheme: TypographyTheme = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
  h2: 'scroll-m-20 border-b border-surface pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
  h6: 'scroll-m-20 text-base font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 border-surface pl-6 italic',
  lead: 'text-xl text-text-secondary',
  large: 'text-lg font-semibold',
  small: 'text-sm leading-none font-medium',
  muted: 'text-sm text-text-secondary'
};

export const legacyTypographyTheme: TypographyTheme = {
  h1: '[font-size:_var(--page-title-font-size,2.25rem)] [font-weight:_var(--page-title-font-weight,800)] tracking-tight text-balance',
  h2: 'border-b border-[var(--surface)] pb-2 [font-size:_var(--primary-heading-font-size,1.875rem)] [font-weight:_var(--primary-heading-font-weight,600)] tracking-tight first:mt-0',
  h3: '[font-size:_var(--secondary-heading-font-size,1.5rem)] [font-weight:_var(--secondary-heading-font-weight,600)] tracking-tight',
  h4: '[font-size:_var(--small-heading-font-size,1.25rem)] [font-weight:_var(--small-heading-font-weight,600)] tracking-tight',
  h5: '[font-size:_var(--small-heading-font-size,1.125rem)] [font-weight:_var(--small-heading-font-weight,600)] tracking-tight',
  h6: '[font-size:_var(--small-heading-font-size,1rem)] [font-weight:_var(--small-heading-font-weight,600)] tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 border-[var(--surface)] pl-6 italic',
  lead: 'text-xl text-[var(--text-secondary)]',
  large: 'text-lg font-semibold',
  small: 'text-sm leading-none font-medium',
  muted: 'text-sm text-[var(--text-secondary)]'
};
