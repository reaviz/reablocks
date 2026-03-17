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
