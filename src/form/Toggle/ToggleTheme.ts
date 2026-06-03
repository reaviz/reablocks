export interface ToggleTheme {
  /** CSS class applied to the root toggle container. */
  base: string;
  /** CSS class applied when the toggle is disabled. */
  disabled: string;
  /** CSS class applied when the toggle is checked. */
  checked: string;
  /** CSS class applied when the toggle is both disabled and checked. */
  disabledAndChecked: string;
  /** Class names for the toggle handle, including size and state variants. */
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
  /** Class names for each size variant of the toggle. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

export const toggleTheme: ToggleTheme = {
  base: 'flex items-center justify-start cursor-pointer bg-surface box-border border border-panel-accent rounded-full hover:bg-primary-hover transition-[background-color] ease-in-out duration-300',
  disabled: 'cursor-not-allowed bg-transparent hover:bg-transparent',
  checked: 'justify-end bg-primary',
  disabledAndChecked: 'bg-secondary-inactive hover:bg-secondary-inactive',
  handle: {
    base: 'rounded-full bg-panel',
    sizes: {
      small: 'w-3 h-full',
      medium: 'w-5 h-full',
      large: 'w-6 h-full'
    },
    disabled: 'bg-secondary-inactive',
    disabledAndChecked: 'bg-panel'
  },
  sizes: {
    small: 'w-8 h-4 p-px',
    medium: 'w-12 h-6 p-px',
    large: 'w-16 h-7 p-px'
  }
};
