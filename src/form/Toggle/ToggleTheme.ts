export interface ToggleSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface ToggleTheme {
  base: string;
  disabled: string;
  checked: string;
  disabledAndChecked: string;
  handle: {
    base: string;
    sizes: ToggleSizeTheme;
    disabled: string;
    disabledAndChecked: string;
  };
  sizes: ToggleSizeTheme;
}

export const defaultToggleTheme: ToggleTheme = {
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

export const unifyToggleTheme: ToggleTheme = {
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
      small: 'size-(--selectors-details-asset-size-toggle-sm)',
      medium: 'size-(--selectors-details-asset-size-toggle-sm)',
      large: 'size-(--selectors-details-asset-size-toggle-lg)'
    },
    disabled: '',
    disabledAndChecked: 'bg-selectors-colors-toggle-on-assets-resting'
  },
  sizes: {
    small:
      'w-(--selectors-details-width-toggle-sm) h-(--selectors-details-height-sm) p-0.5',
    medium:
      'w-(--selectors-details-width-toggle-sm) h-(--selectors-details-height-sm) p-0.5',
    large:
      'w-(--selectors-details-width-toggle-lg) h-(--selectors-details-height-lg) p-0.5'
  }
};
