export interface CheckboxTheme {
  base: string;
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
  border: {
    base: string;
    disabled: string;
    checked: string;
  };
  checkMark: {
    base: string;
    disabled: string;
    checked: string;
  };
  checkbox: {
    base: string;
    disabled: string;
    checked: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
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

const baseTheme: Partial<CheckboxTheme> = {
  base: 'inline-flex items-center w-full group',
  label: {
    base: 'text-text-primary dark:text-waterloo light:text-charade ml-2.5 w-full',
    checked: 'checked dark:text-athens-gray light:text-vulcan',
    disabled: 'cursor-not-allowed dark:text-gray-600 light:text-waterloo',
    clickable: 'cursor-pointer',
    sizes: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg'
    }
  },
  checkMark: {
    base: 'stroke-white',
    checked: '',
    disabled: 'cursor-not-allowed'
  },
  border: {
    base: 'stroke-gray-400 light:stroke-gray-700',
    checked: 'stroke-blue-500',
    disabled: 'cursor-not-allowed stroke-gray-500'
  },
  checkbox: {
    base: 'fill-transparent flex items-center justify-center cursor-pointer focus-visible:outline-none',
    checked: 'fill-blue-500 checked',
    disabled: 'fill-transparent disabled'
  },
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  }
};
export const checkboxTheme: CheckboxTheme = {
  ...baseTheme,
  checkbox: {
    ...baseTheme.checkbox,
    base: [
      baseTheme.checkbox.base,
      'border border-surface',
      '[&.checked.disabled]:fill-gray-400'
    ].join(' '),
    checked: [
      baseTheme.checkbox.checked,
      'group-hover:fill-blue-400',
      'light:group-hover:fill-blue-600',
      'light:group-hover:[&.disabled]:fill-gray-400'
    ].join(' '),
    disabled: [
      baseTheme.checkbox.disabled,
      'group-hover:transparent',
      'light:group-hover:transparent'
    ].join(' ')
  },
  checkMark: {
    ...baseTheme.checkMark,
    base: [
      baseTheme.checkMark.base,
      'group-hover:stroke-black light:group-hover:stroke-white'
    ].join(' '),
    disabled: [
      baseTheme.checkMark.disabled,
      'stroke-black light:stroke-white group-hover:stroke-black '
    ].join(' ')
  },
  border: {
    ...baseTheme.border,
    base: [
      baseTheme.border.base,
      'dark:group-hover:stroke-blue-300',
      'light:group-hover:stroke-blue-600'
    ].join(' '),
    disabled: [
      baseTheme.border.disabled,
      'dark:group-hover:stroke-gray-500',
      'light:group-hover:stroke-waterloo'
    ].join(' ')
  },
  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'dark:group-hover:text-blue-300 light:group-hover:text-blue-400'
    ].join(' '),
    checked: [baseTheme.label.checked, 'group-hover:text-athens-gray'].join(
      ' '
    ),
    disabled: [
      baseTheme.label.disabled,
      'light:group-hover:text-waterloo',
      'dark:group-hover:text-gray-600'
    ].join(' ')
  },
  boxVariants: {
    hover: {
      strokeWidth: 1
    },
    pressed: { scale: 0.95 }
  }
} as CheckboxTheme;

export const legacyCheckboxTheme: CheckboxTheme = {
  ...baseTheme,
  checkbox: { base: [baseTheme.checkbox, 'fill-transparent'].join(' ') },
  checkMark: {
    base: [
      baseTheme.checkMark.base,
      'stroke-[var(--checkbox-check-stroke)]'
    ].join(' ')
  },
  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-[var(--checkbox-label-color)] ml-[var(--spacing-md)]'
    ].join(' ')
  }
} as CheckboxTheme;
