export interface MenuTheme {
  base: string;
  inner: string;
}

const baseTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-none'
};

export const menuTheme: MenuTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'text-text-content-primary bg-panel'].join(' ')
};

export const legacyMenuTheme: MenuTheme = {
  ...baseTheme
};
