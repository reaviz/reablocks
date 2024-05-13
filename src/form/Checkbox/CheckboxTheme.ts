import TWConfig from '@/utils/Theme/config';

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
  base: 'inline-flex items-center w-full',
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
  disabled: 'disabled opacity-60 cursor-not-allowed',
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:min-h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  }
};

export const checkboxTheme: CheckboxTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'group',
    // label
    'dark:text-waterloo light:text-charade',
    '[&.checked]:text-athens-gray',

    // disabled
    'hover:[&>.disabled]:text-athens-gray',
    '[&>.checkbox.disabled]:fill-gray-500'
  ].join(' '),
  checkbox: [
    baseTheme.checkbox,
    'fill-transparent border border-surface',
    'group-hover:[&.checked]:fill-blue-300',
    '[&.checked]:fill-blue-500'
  ].join(' '),
  check: [baseTheme.check, 'stroke-white', 'group-hover:stroke-black'].join(
    ' '
  ),
  border: [
    baseTheme.border,
    'stroke-slate-500',
    '[&.checked]:stroke-blue-500',
    'group-hover:stroke-blue-300',
    '[&.disabled]:stroke-gray-500'
  ].join(' '),

  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-surface-content text-inherit group-hover:text-blue-300'
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
