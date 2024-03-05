export interface MenuTheme {
  base: string;
  inner: string;
}

const baseTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-none'
};

export const lightMenuTheme: MenuTheme = {
  ...baseTheme
};

export const darkMenuTheme: MenuTheme = {
  ...baseTheme
};
