export interface NavigationButtonVariantConfigTheme {
  content: string;
  active: string;
  selection: string;
  disabled: string;
}

export interface NavigationBarDirectionTheme {
  horizontal: string;
  vertical: string;
}

export interface NavigationButtonVariantTheme {
  ghost: NavigationButtonVariantConfigTheme;
  underline: NavigationButtonVariantConfigTheme;
  [key: string]: NavigationButtonVariantConfigTheme;
}

export interface NavigationTheme {
  bar: {
    base: string;
    direction: NavigationBarDirectionTheme;
    start: string;
    navigation: string;
    end: string;
  };
  button: {
    base: string;
    variant: NavigationButtonVariantTheme;
  };
}

export const navigationTheme: NavigationTheme = {
  bar: {
    base: `
    flex h-full w-full p-(--navigation-details-vertical-padding-base) border-r gap-(--navigation-details-space-between-sections-left-nav)
    bg-navigation-colors-background-container-base border-navigation-colors-stroke-container-base
  `,
    direction: {
      vertical: 'flex-col ',
      horizontal: 'flex-row border-none p-0',
    },
    start: 'py-4',
    navigation:
      'flex-1 flex flex-col gap-(--navigation-details-space-between-items-left-nav)',
    end: '',
  },
  button: {
    base: 'group relative',
    variant: {
      ghost: {
        content: `
          w-full h-full outline-none relative z-10
          p-(--navigation-details-horizontal-padding-nav-item-main-row) rounded-(--navigation-details-corner-radius-row-item) border border-transparent text-navigation-colors-text-resting 
          hover:text-navigation-colors-text-hover hover:bg-navigation-colors-background-row-items-hover hover:border-navigation-colors-stroke-row-items-hover
          focus-visible:text-navigation-colors-text-hover focus-visible:bg-navigation-colors-background-row-items-hover focus-visible:border-navigation-colors-stroke-row-items-hover
          transition-colors ease-out duration-300
        `,
        active: `
          text-navigation-colors-text-selected 
          hover:text-navigation-colors-text-selected
          focus-visible:text-navigation-colors-text-selected
        `,
        selection: `
          absolute z-1 top-0 left-0 w-full h-full rounded-(--navigation-details-corner-radius-row-item) border
          border-navigation-colors-stroke-row-items-selected bg-navigation-colors-background-row-items-selected
          hover:border-navigation-colors-stroke-row-items-selected hover:bg-navigation-colors-background-row-items-selected
          focus-visible:border-navigation-colors-stroke-row-items-selected focus-visible:bg-navigation-colors-background-row-items-selected
        `,
        disabled: `
          opacity-40 cursor-not-allowed font-normal text-navigation-colors-text-resting bg-transparent border-transparent
          hover:text-navigation-colors-text-resting hover:bg-transparent hover:border-transparent
        `,
      },
      underline: {
        content: `
          h-(--navigation-details-height-width-items-side-nav)
          relative z-10 p-(--navigation-details-horizontal-padding-nav-item-main-row) outline-none
          text-navigation-colors-text-resting 
          hover:text-navigation-colors-text-hover
          focus-visible:text-navigation-colors-text-hover
          transition-colors ease-out duration-300
        `,
        active: `
          font-semibold
          text-navigation-colors-text-selected
          hover:text-navigation-colors-text-selected
          focus-visible:text-navigation-colors-text-selected
        `,
        selection: `
          absolute z-1 bottom-0 w-full h-0.5 rounded-(--navigation-details-corner-radius-row-item) bg-navigation-colors-stroke-detail-line-active
        `,
        disabled: `
          opacity-40 cursor-not-allowed font-normal text-navigation-colors-text-resting bg-transparent border-transparent
          hover:text-navigation-colors-text-resting hover:bg-transparent hover:border-transparent
        `,
      },
    },
  },
};
