export interface MenuTheme {
  base: string;
  inner: string;
}

export const menuTheme: MenuTheme = {
  base: 'relative min-w-[112px] max-w-[500px] border border-select-menu-items-color-item-stroke-container-resting rounded-md mt-2 bg-select-menu-items-color-item-background-container-base backdrop-blur-md',
  inner: 'focus:outline-hidden',
};
