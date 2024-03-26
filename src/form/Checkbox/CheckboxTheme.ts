import TWConfig from '../../utils/Theme/config';

export interface CheckboxTheme {
  base: string;
  label: {
    base: string;
    clickable: string;
  };
  border: string;
  check: string;
  checkbox: string;
  disabled: string;
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
    clickable: 'cursor-pointer'
  },
  check: '',
  border: '',
  checkbox:
    'flex items-center justify-center cursor-pointer focus-visible:outline-none',
  disabled: 'opacity-60 cursor-not-allowed',
  sizes: {
    small: '[&>svg]:w-3 [&>svg]:min-h-3',
    medium: '[&>svg]:w-4 [&>svg]:h-4',
    large: '[&>svg]:w-5 [&>svg]:h-5'
  }
};

export const lightCheckboxTheme: CheckboxTheme = {
  ...baseTheme,
  checkbox: [baseTheme.checkbox, 'fill-neutral-200'].join(' '),
  check: [baseTheme.check, 'stroke-primary-700'].join(' '),
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-black'].join(' ')
  },
  boxVariants: {
    hover: {
      strokeWidth: 1,
      stroke: TWConfig.colors.slate[700]
    },
    pressed: { scale: 0.95 },
    checked: {
      stroke: TWConfig.colors.primary[700]
    },
    unchecked: {
      stroke: TWConfig.colors.slate[700]
    }
  }
} as CheckboxTheme;

export const darkCheckboxTheme: CheckboxTheme = {
  ...baseTheme,
  checkbox: [baseTheme.checkbox, 'fill-transparent'].join(' '),
  check: [baseTheme.check, 'stroke-primary-400'].join(' '),
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-white'].join(' ')
  },
  boxVariants: {
    hover: {
      strokeWidth: 2,
      stroke: TWConfig.colors.slate[400]
    },
    pressed: { scale: 0.95 },
    checked: {
      stroke: TWConfig.colors.primary[600]
    },
    unchecked: {
      stroke: TWConfig.colors.slate[500]
    }
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
