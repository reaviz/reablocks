export interface CheckboxSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface CheckboxTheme {
  base: string;
  label: {
    base: string;
    clickable: string;
    disabled: string;
    checked: string;
    sizes: CheckboxSizeTheme;
  };
  border: {
    base: string;
    disabled: string;
    checked: string;
  };
  check: {
    base: string;
    disabled: string;
    checked: string;
  };
  checkbox: {
    base: string;
    disabled: string;
    checked: string;
  };
  sizes: CheckboxSizeTheme;
  boxVariants: {
    hover: {
      strokeWidth: number;
      stroke: string;
      fill: string;
    };
    pressed: {
      scale: number;
    };
    checked: {
      stroke: string;
      fill: string;
    };
    unchecked: {
      stroke: string;
      fill: string;
    };
  };
}

export const checkboxTheme: CheckboxTheme = {
  base: 'inline-flex items-center w-full group',
  label: {
    base: 'ml-3 w-full text-selectors-colors-text-description-not-selected whitespace-nowrap',
    checked: 'checked text-selectors-colors-text-description-selected',
    disabled: 'cursor-not-allowed opacity-40',
    clickable: `
          cursor-pointer transition-colors
          group-hover:text-selectors-colors-text-label-selected group-focus-within:text-selectors-colors-text-label-selected
        `,
    sizes: {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base'
    }
  },
  check: {
    base: 'stroke-selectors-colors-checkbox-selected-assets-base group-hover:selectors-colors-checkbox-selected-assets-hover',
    checked: '',
    disabled: 'cursor-not-allowed'
  },
  border: {
    base: '',
    checked: '',
    disabled: 'cursor-not-allowed'
  },
  checkbox: {
    base: `
          flex items-center justify-center cursor-pointer rounded border transition-colors focus-visible:outline-none
          bg-selectors-colors-checkbox-not-selected-background-resting group-hover:bg-selectors-colors-checkbox-not-selected-background-hover group-focus-within:bg-selectors-colors-checkbox-not-selected-background-hover
          border-selectors-colors-checkbox-not-selected-stroke-resting group-hover:border-selectors-colors-checkbox-not-selected-stroke-hover group-focus-within:border-selectors-colors-checkbox-not-selected-stroke-hover
          [&>svg>path:first-child]:stroke-transparent [&>svg]:fill-transparent [&>svg]:outline-none
        `,
    checked: `
          bg-selectors-colors-checkbox-selected-background-resting group-hover:bg-selectors-colors-checkbox-selected-background-hover group-focus-within:bg-selectors-colors-checkbox-selected-background-hover
          border-selectors-colors-checkbox-selected-stroke-resting group-hover:border-selectors-colors-checkbox-selected-stroke-hover group-focus-within:border-selectors-colors-checkbox-selected-stroke-hover
        `,
    disabled:
      'disabled cursor-not-allowed opacity-40 group-hover:bg-selectors-colors-checkbox-selected-resting'
  },
  sizes: {
    small: '[&>svg]:size-3',
    medium: '[&>svg]:size-4',
    large: '[&>svg]:size-4'
  }
} as CheckboxTheme;
