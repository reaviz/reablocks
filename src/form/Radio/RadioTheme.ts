export interface RadioTheme {
  base: string;
  radio: {
    base: string;
    disabled: string;
    checked: string;
  };
  indicator: {
    base: string;
    disabled: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  label: {
    base: string;
    clickable: string;
    checked: string;
    disabled: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: RadioTheme = {
  base: 'box-border leading-none group',
  radio: {
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-[100%] bg-transparent border cursor-pointer',
    disabled: 'cursor-not-allowed',
    checked: ''
  },
  indicator: {
    base: 'rounded-[100%]',
    disabled: 'cursor-not-allowed',
    sizes: {
      small: 'w-2 h-2',
      medium: 'w-2.5 h-2.5',
      large: 'w-3.5 h-3.5'
    }
  },
  label: {
    base: 'w-full align-middle ml-2.5',
    clickable: 'cursor-pointer hover:text-blue-300',
    disabled: 'cursor-not-allowed',
    checked: ''
  },
  sizes: {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  }
};

export const radioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-panel-secondary-content'].join(' '),
    checked: [baseTheme.label.checked, 'text-panel-content'].join(' '),
    disabled: [baseTheme.label.disabled, '!text-secondary-inactive/40'].join(
      ' '
    )
  },
  radio: {
    ...baseTheme.radio,
    base: [
      baseTheme.radio.base,
      'border-surface group-hover:border-primary-hover hover:border-primary-hover'
    ].join(' '),
    checked: [
      baseTheme.radio.checked,
      'border-primary-active group-hover:border-primary-hover'
    ].join(' '),
    disabled: [baseTheme.radio.disabled, '!border-secondary-inactive'].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [
      baseTheme.indicator.base,
      'bg-primary group-hover:bg-primary-hover'
    ].join(' '),
    disabled: [baseTheme.indicator.disabled, '!bg-secondary-inactive'].join(' ')
  }
};

export const legacyRadioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [
      baseTheme.label.base,
      'text-[var(--radio-label-color)] ml-[var(--spacing-md)]'
    ].join(' ')
  },
  radio: {
    ...baseTheme.radio,
    base: [
      baseTheme.radio.base,
      'bg-[var(--radio-background)] [border:_var(--radio-stroke-size)_solid_var(--radio-stroke)]'
    ].join(' '),
    checked: [
      baseTheme.radio.checked,
      'border-[var(--radio-stroke-active)]'
    ].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [baseTheme.indicator.base, 'bg-[var(--radio-indicator-active)]'].join(
      ' '
    ),
    sizes: {
      small:
        'w-[var(--radio-indicator-size,_6px)] h-[var(--radio-indicator-size,_6px)]',
      medium:
        'w-[var(--radio-indicator-size,_8px)] h-[var(--radio-indicator-size,_8px)]',
      large:
        'w-[var(--radio-indicator-size,_10px)] h-[var(--radio-indicator-size,_10px)]'
    }
  }
};
