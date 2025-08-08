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

export const toggleTheme: ToggleTheme = {
  base: 'group flex items-center justify-start cursor-pointer bg-selectors-colors-toggle-off-background-resting box-border border border-selectors-colors-toggle-off-stroke-resting rounded-full hover:bg-selectors-colors-toggle-off-background-hover focus-visible:bg-selectors-colors-toggle-off-background-hover transition-colors ease-in-out duration-300 focus-visible:outline-none',
  disabled:
    'cursor-not-allowed opacity-40 focus-visible:bg-selectors-colors-toggle-off-background-resting',
  checked:
    'justify-end bg-selectors-colors-toggle-on-background-resting hover:bg-selectors-colors-toggle-on-background-hover focus-visible:bg-selectors-colors-toggle-on-background-hover',
  disabledAndChecked:
    'focus-visible:bg-selectors-colors-toggle-on-background-resting',
  handle: {
    base: 'rounded-full bg-selectors-colors-toggle-off-assets-resting group-hover:bg-selectors-colors-toggle-off-assets-hover',
    sizes: {
      small: 'size-2.5',
      medium: 'size-3.5',
      large: 'size-3.5'
    },
    disabled: '',
    disabledAndChecked: 'bg-selectors-colors-toggle-on-assets-resting'
  },
  sizes: {
    small: 'w-7 h-4 p-0.5',
    medium: 'w-8 h-5 p-0.5',
    large: 'w-8 h-5 p-0.5'
  }
};
