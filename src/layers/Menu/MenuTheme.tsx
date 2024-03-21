export interface MenuTheme {
  base: string;
  inner: string;
}

const baseTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-none'
};

export const lightMenuTheme: MenuTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'text-black bg-zinc-300'].join(' ')
};

export const darkMenuTheme: MenuTheme = {
  ...baseTheme,
  inner: [baseTheme.inner, 'text-white bg-zinc-800'].join(' ')
};

export const legacyMenuTheme: MenuTheme = {
  ...baseTheme
};
