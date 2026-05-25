export interface MenuTheme {
  /** CSS class applied to the root menu container. */
  base: string;
  /** CSS class applied to the inner menu wrapper. */
  inner: string;
}

const baseTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-hidden'
};

export const menuTheme: MenuTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'text-text-primary bg-panel'].join(' ')
};
