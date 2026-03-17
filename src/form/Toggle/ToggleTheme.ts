export interface ToggleTheme {
  base: string;
  disabled: string;
  checked: string;
  disabledAndChecked: string;
  handle: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
    disabled: string;
    disabledAndChecked: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: ToggleTheme = {
  base: 'flex items-center justify-start cursor-pointer bg-surface box-border border border-panel-accent rounded-full hover:bg-primary-hover transition-[background-color] ease-in-out duration-300',
  disabled: 'cursor-not-allowed bg-transparent hover:bg-transparent',
  checked: 'justify-end bg-primary',
  disabledAndChecked:
    'bg-secondary-inactive hover:bg-secondary-inactive light:bg-gray-400 light:hover:bg-gray-400',
  handle: {
    base: 'rounded-full bg-panel',
    sizes: {
      small: 'w-3 h-full',
      medium: 'w-5 h-full',
      large: 'w-6 h-full'
    },
    disabled: 'bg-secondary-inactive light:bg-gray-400',
    disabledAndChecked: 'bg-black light:bg-white'
  },
  sizes: {
    small: 'w-8 h-4 p-px',
    medium: 'w-12 h-6 p-px',
    large: 'w-16 h-7 p-px'
  }
};

export const toggleTheme = baseTheme;
