export interface MenuTheme {
  base: string;
  inner: string;
}

const baseTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-none'
};

export const darkMenuTheme: MenuTheme = {
  ...baseTheme,
  inner: [
    baseTheme.inner,
    'text-typography dark:bg-zinc-800 light:bg-zinc-300'
  ].join(' ')
};

export const legacyMenuTheme: MenuTheme = {
  ...baseTheme
};
