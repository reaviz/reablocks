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
