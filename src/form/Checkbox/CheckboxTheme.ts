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

export const defaultCheckboxTheme: CheckboxTheme = {
  base: 'inline-flex items-center w-full group',
  label: {
    base: 'text-text-primary dark:group-hover:text-blue-300 light:group-hover:text-blue-400 ml-2.5 w-full dark:text-gray-400 light:text-gray-700',
    checked:
      'checked group-hover:text-gray-100 dark:text-gray-100 light:text-gray-900',
    disabled:
      'cursor-not-allowed light:group-hover:text-gray-400 dark:group-hover:text-gray-600 dark:text-gray-600 light:text-gray-400',
    clickable: 'cursor-pointer',
    sizes: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg'
    }
  },
  check: {
    base: 'stroke-white group-hover:stroke-black light:group-hover:stroke-white',
    checked: '',
    disabled:
      'cursor-not-allowed stroke-black light:stroke-white group-hover:stroke-black '
  },
  border: {
    base: 'stroke-gray-400 light:stroke-gray-700 dark:group-hover:stroke-blue-300 light:group-hover:stroke-blue-600',
    checked: 'stroke-blue-500',
    disabled:
      'cursor-not-allowed stroke-gray-500 dark:group-hover:stroke-gray-500 light:group-hover:stroke-gray-400'
  },
  checkbox: {
    base: 'fill-transparent flex items-center justify-center cursor-pointer focus-visible:outline-hidden border border-surface [&.checked.disabled]:fill-gray-400',
    checked:
      'fill-blue-500 checked group-hover:fill-blue-400 light:group-hover:fill-blue-600 light:group-hover:[&.disabled]:fill-gray-400',
    disabled:
      'fill-transparent disabled group-hover:transparent light:group-hover:transparent'
  },
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  },
  boxVariants: {
    hover: {
      stroke: '',
      fill: '',
      strokeWidth: 1
    },
    pressed: {
      scale: 0.95
    },
    checked: {
      stroke: '',
      fill: ''
    },
    unchecked: {
      stroke: '',
      fill: ''
    }
  }
} as CheckboxTheme;

export const unifyCheckboxTheme: CheckboxTheme = {
  base: 'inline-flex items-center w-full group',
  label: {
    base: 'ml-(--selectors-details-space-between-horizontal-sm) w-full text-selectors-colors-text-description-not-selected whitespace-nowrap',
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
    base: 'stroke-selectors-colors-checkbox-selected-assets-base group-hover:stroke-selectors-colors-checkbox-selected-assets-hover',
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
          flex items-center justify-center cursor-pointer border transition-colors focus-visible:outline-none
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
    small:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
    medium:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
    large:
      '[&>svg]:size-(--selectors-details-width-radio-checkbox-lg) rounded-(--selectors-details-corner-radius-checkbox-lg)'
  },
  boxVariants: {
    hover: {
      stroke: '',
      fill: '',
      strokeWidth: 1
    },
    pressed: {
      scale: 0.95
    },
    checked: {
      stroke: '',
      fill: ''
    },
    unchecked: {
      stroke: '',
      fill: ''
    }
  }
} as CheckboxTheme;
