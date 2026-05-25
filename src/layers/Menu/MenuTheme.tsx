export interface MenuTheme {
  base: string;
  inner: string;
}

export const menuTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] p-px',
  inner: 'focus:outline-hidden text-text-primary bg-panel'
};
