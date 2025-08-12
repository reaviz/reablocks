export interface NavigationButtonTheme {
  base: string;
  content: string;
  active: string;
  selection: string;
}

export const navigationButtonTheme: NavigationButtonTheme = {
  base: 'group relative',
  content: `
    w-full h-full outline-none
    transition-color relative z-10 p-4 rounded-md border border-transparent text-navigation-colors-text-resting 
    hover:text-navigation-colors-text-hover hover:bg-navigation-colors-background-row-items-hover hover:border-navigation-colors-stroke-row-items-hover
    focus-visible:text-navigation-colors-text-hover focus-visible:bg-navigation-colors-background-row-items-hover focus-visible:border-navigation-colors-stroke-row-items-hover
    duration-300 ease-in-out
  `,
  active: `
    text-navigation-colors-text-selected 
    hover:text-navigation-colors-text-selected
    focus-visible:text-navigation-colors-text-selected
  `,
  selection: `
    absolute z-1 top-0 left-0 w-full h-full rounded-md border
    border-navigation-colors-stroke-row-items-selected bg-navigation-colors-background-row-items-selected
    hover:border-navigation-colors-stroke-row-items-selected hover:bg-navigation-colors-background-row-items-selected
    focus-visible:border-navigation-colors-stroke-row-items-selected focus-visible:bg-navigation-colors-background-row-items-selected
  `
};
