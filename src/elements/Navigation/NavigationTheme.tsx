export interface NavigationButtonVariantTheme {
  content: string;
  active: string;
  selection: string;
  disabled: string;
}

export interface NavigationTheme {
  bar: {
    base: string;
    direction: {
      horizontal: string;
      vertical: string;
    };
    start: string;
    navigation: string;
    end: string;
  };
  button: {
    base: string;
    variant: {
      ghost: NavigationButtonVariantTheme;
      underline: NavigationButtonVariantTheme;
      [key: string]: NavigationButtonVariantTheme;
    };
  };
}

export const navigationTheme: NavigationTheme = {
  bar: {
    base: `
    flex h-full w-full p-4 border-r gap-4
    bg-navigation-colors-background-container-base border-navigation-colors-stroke-container-base
  `,
    direction: {
      vertical: 'flex-col ',
      horizontal: 'flex-row border-none pb-0'
    },
    start: 'pt-4',
    navigation: 'flex-1 flex flex-col gap-2',
    end: ''
  },
  button: {
    base: 'group relative',
    variant: {
      ghost: {
        content: `
          w-full h-full outline-none relative z-10
          p-4 rounded-md border border-transparent text-navigation-colors-text-resting 
          hover:text-navigation-colors-text-hover hover:bg-navigation-colors-background-row-items-hover hover:border-navigation-colors-stroke-row-items-hover
          focus-visible:text-navigation-colors-text-hover focus-visible:bg-navigation-colors-background-row-items-hover focus-visible:border-navigation-colors-stroke-row-items-hover
          transition-colors ease-out duration-300
        `,
        active: `
          font-semibold
          text-navigation-colors-text-selected 
          hover:text-navigation-colors-text-selected
          focus-visible:text-navigation-colors-text-selected
        `,
        selection: `
          absolute z-1 top-0 left-0 w-full h-full rounded-md border
          border-navigation-colors-stroke-row-items-selected bg-navigation-colors-background-row-items-selected
          hover:border-navigation-colors-stroke-row-items-selected hover:bg-navigation-colors-background-row-items-selected
          focus-visible:border-navigation-colors-stroke-row-items-selected focus-visible:bg-navigation-colors-background-row-items-selected
        `,
        disabled: `
          opacity-40 cursor-not-allowed font-normal text-navigation-colors-text-resting bg-transparent border-transparent
          hover:text-navigation-colors-text-resting hover:bg-transparent hover:border-transparent
        `
      },
      underline: {
        content: `
          relative z-10 p-4 pb-8 outline-none
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
          absolute z-1 bottom-0 w-full h-0.5 rounded-md bg-navigation-colors-stroke-detail-line-active
        `,
        disabled: `
          opacity-40 cursor-not-allowed font-normal text-navigation-colors-text-resting bg-transparent border-transparent
          hover:text-navigation-colors-text-resting hover:bg-transparent hover:border-transparent
        `
      }
    }
  }
};
