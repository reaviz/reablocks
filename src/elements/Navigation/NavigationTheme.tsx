export interface NavigationButtonVariantConfigTheme {
  /** CSS class applied to the button's content wrapper. */
  content: string;
  /** CSS class applied when the button is active. */
  active: string;
  /** CSS class applied to the button's selection indicator. */
  selection: string;
  /** CSS class applied when the button is disabled. */
  disabled: string;
}

export interface NavigationBarDirectionTheme {
  /** CSS class applied when the navigation bar is laid out horizontally. */
  horizontal: string;
  /** CSS class applied when the navigation bar is laid out vertically. */
  vertical: string;
}

export interface NavigationButtonVariantTheme {
  /** Configuration for the ghost button variant. */
  ghost: NavigationButtonVariantConfigTheme;
  /** Configuration for the underline button variant. */
  underline: NavigationButtonVariantConfigTheme;
  /** Configuration for any additional custom button variant. */
  [key: string]: NavigationButtonVariantConfigTheme;
}

export interface NavigationTheme {
  /** Class names for the navigation bar layout slots. */
  bar: {
    base: string;
    direction: NavigationBarDirectionTheme;
    start: string;
    navigation: string;
    end: string;
  };
  /** Class names and variant configuration for navigation buttons. */
  button: {
    base: string;
    variant: NavigationButtonVariantTheme;
  };
}

export const navigationTheme: NavigationTheme = {
  bar: {
    base: 'flex h-full w-full p-4 border-r gap-4 bg-panel border-panel-accent',
    direction: {
      vertical: 'flex-col',
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
        content:
          'w-full h-full outline-none relative z-10 p-4 rounded-md border border-transparent text-text-secondary hover:text-text-primary hover:bg-panel-accent transition-colors ease-out duration-300',
        active:
          'text-text-primary hover:text-text-primary focus-visible:text-text-primary',
        selection:
          'absolute z-1 top-0 left-0 w-full h-full rounded-md border border-panel-accent bg-panel-accent hover:border-panel-accent hover:bg-panel-accent focus-visible:border-panel-accent focus-visible:bg-panel-accent',
        disabled:
          'opacity-40 cursor-not-allowed font-normal text-text-secondary bg-transparent border-transparent hover:text-text-secondary hover:bg-transparent hover:border-transparent'
      },
      underline: {
        content:
          'relative z-10 p-4 pb-8 outline-none text-text-secondary hover:text-text-primary focus-visible:text-text-primary transition-colors ease-out duration-300',
        active:
          'font-semibold text-text-primary hover:text-text-primary focus-visible:text-text-primary',
        selection: 'absolute z-1 bottom-0 w-full h-0.5 rounded-md bg-primary',
        disabled:
          'opacity-40 cursor-not-allowed font-normal text-text-secondary bg-transparent border-transparent hover:text-text-secondary hover:bg-transparent hover:border-transparent'
      }
    }
  }
};
