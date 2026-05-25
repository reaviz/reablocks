export interface TypographyTheme {
  /** CSS class applied to the H1 heading element. */
  h1: string;
  /** CSS class applied to the H2 heading element. */
  h2: string;
  /** CSS class applied to the H3 heading element. */
  h3: string;
  /** CSS class applied to the H4 heading element. */
  h4: string;
  /** CSS class applied to the H5 heading element. */
  h5: string;
  /** CSS class applied to the H6 heading element. */
  h6: string;
  /** CSS class applied to the paragraph element. */
  p: string;
  /** CSS class applied to the blockquote element. */
  blockquote: string;
  /** CSS class applied to the Lead text element. */
  lead: string;
  /** CSS class applied to the Large text element. */
  large: string;
  /** CSS class applied to the Small text element. */
  small: string;
  /** CSS class applied to the Muted text element. */
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
