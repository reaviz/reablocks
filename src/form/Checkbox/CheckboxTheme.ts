export interface CheckboxTheme {
  base: string;
  label: {
    base: string;
    clickable: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  border: string;
  check: string;
  checkbox: string;
  disabled: string;
  checked: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
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
    base: 'ml-2.5 w-full',
    clickable: 'cursor-pointer',
    sizes: {
      small: 'text-sm',
      medium: 'text-base',
      large: 'text-lg'
    }
  },
  check: 'check',
  border: '',
  checkbox:
    'checkbox flex items-center justify-center cursor-pointer focus-visible:outline-none',
  checked: 'checked',
  disabled: 'disabled dark:opacity-60 cursor-not-allowed',
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:min-h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  }
};

export const checkboxTheme: CheckboxTheme = {
  ...baseTheme,
  checkbox: [
    baseTheme.checkbox,
    'fill-transparent border border-surface',
    'light:group-hover:[&.checked]:fill-blue-600',
    'light:[&.checked.disabled]:fill-waterloo',
    'light:group-hover:[&.checked.disabled]:fill-waterloo',
    'group-hover:[&.checked]:fill-blue-400',
    'group-hover:[&.checked.disabled]:fill-gray-400',
    '[&.checked]:fill-blue-500',
    '[&.checked.disabled]:fill-gray-400 '
  ].join(' '),
  check: [
    baseTheme.check,
    'light:group-hover:stroke-white',
    'light:[&.disabled]:stroke-white',
    'stroke-white',
    'group-hover:stroke-black',
    'group-hover:[&.disabled]:stroke-black',
    '[&.disabled]:stroke-black'
  ].join(' '),
  border: [
    baseTheme.border,
    'light:stroke-waterloo',
    'light:group-hover:stroke-blue-600',
    'light:group-hover:[&.disabled]:stroke-waterloo',
    'stroke-gray-300',
    'group-hover:stroke-blue-400',
    'group-hover:[&.disabled]:stroke-gray-500',
    '[&.checked]:stroke-blue-500',
    '[&.disabled]:stroke-gray-500'
  ].join(' '),

  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-surface-content',
      'light:text-charade',
      'light:[&.disabled]:text-waterloo',
      'light:group-hover:[&.disabled]:text-waterloo',
      'light:[&.checked]:text-vulcan',
      'light:group-hover:text-blue-400',
      'dark:text-waterloo',
      'group-hover:text-blue-300',
      'group-hover:[&.disabled]:text-waterloo',
      'group-hover:[&.checked.disabled]:text-athens-gray',
      '[&.checked]:text-athens-gray'
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
  checkbox: [baseTheme.checkbox, 'fill-transparent'].join(' '),
  check: [baseTheme.check, 'stroke-[var(--checkbox-check-stroke)]'].join(' '),
  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-[var(--checkbox-label-color)] ml-[var(--spacing-md)]'
    ].join(' ')
  }
} as CheckboxTheme;
