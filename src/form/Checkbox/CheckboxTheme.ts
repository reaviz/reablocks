export interface CheckboxTheme {
  /** CSS class applied to the root checkbox container. */
  base: string;
  /** Class names for the checkbox label in its various states and sizes. */
  label: {
    base: string;
    clickable: string;
    disabled: string;
    checked: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
  };
  /** Class names for the checkbox border in its various states. */
  border: {
    base: string;
    disabled: string;
    checked: string;
  };
  /** Class names for the check icon in its various states. */
  check: {
    base: string;
    disabled: string;
    checked: string;
  };
  /** Class names for the checkbox box element in its various states. */
  checkbox: {
    base: string;
    disabled: string;
    checked: string;
  };
  /** Class names for each size variant of the checkbox. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
  /** Motion variants used to animate the checkbox box in different states. */
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
  base: 'inline-flex items-center w-full group/checkbox',
  label: {
    base: 'text-text-secondary ml-2.5 w-full group-hover/checkbox:text-primary-hover',
    checked:
      'checked text-text-primary group-hover/checkbox:text-primary-hover',
    disabled:
      'cursor-not-allowed text-text-inactive group-hover/checkbox:text-text-inactive',
    clickable: 'cursor-pointer',
    sizes: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg'
    }
  },
  check: {
    base: 'stroke-white group-hover/checkbox:stroke-panel',
    checked: '',
    disabled:
      'cursor-not-allowed stroke-panel group-hover/checkbox:stroke-panel'
  },
  border: {
    base: 'stroke-secondary group-hover/checkbox:stroke-primary-hover',
    checked: 'stroke-primary',
    disabled:
      'cursor-not-allowed stroke-secondary-inactive group-hover/checkbox:stroke-secondary-inactive'
  },
  checkbox: {
    base: 'fill-transparent flex items-center justify-center cursor-pointer focus-visible:outline-hidden border border-surface [&.checked.disabled]:fill-secondary-inactive',
    checked:
      'fill-primary checked group-hover/checkbox:fill-primary-hover group-hover/checkbox:[&.disabled]:fill-secondary-inactive',
    disabled: 'fill-transparent disabled group-hover/checkbox:fill-transparent'
  },
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  },
  boxVariants: {
    hover: {
      strokeWidth: 1,
      stroke: '',
      fill: ''
    },
    checked: {
      stroke: '',
      fill: ''
    },
    unchecked: {
      stroke: '',
      fill: ''
    },
    pressed: {
      scale: 0.95
    }
  }
};
