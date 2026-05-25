export interface RadioTheme {
  /** CSS class applied to the root radio container. */
  base: string;
  /** Class names for the radio circle in its various states. */
  radio: {
    base: string;
    disabled: string;
    checked: string;
  };
  /** Class names for the inner indicator dot, including size variants. */
  indicator: {
    base: string;
    disabled: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
  };
  /** Class names for the radio label in its various states. */
  label: {
    base: string;
    clickable: string;
    checked: string;
    disabled: string;
  };
  /** Class names for each size variant of the radio. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: RadioTheme = {
  base: 'box-border leading-none group/radio',
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
    base: [baseTheme.label.base, 'text-text-secondary'].join(' '),
    checked: [baseTheme.label.checked, 'text-text-primary'].join(' '),
    disabled: [baseTheme.label.disabled, 'text-secondary-inactive/40!'].join(
      ' '
    )
  },
  radio: {
    ...baseTheme.radio,
    base: [
      baseTheme.radio.base,
      'border-surface group-hover/radio:border-primary-hover hover:border-primary-hover'
    ].join(' '),
    checked: [
      baseTheme.radio.checked,
      'border-primary-active group-hover/radio:border-primary-hover'
    ].join(' '),
    disabled: [baseTheme.radio.disabled, 'border-secondary-inactive!'].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [
      baseTheme.indicator.base,
      'bg-primary group-hover/radio:bg-primary-hover'
    ].join(' '),
    disabled: [baseTheme.indicator.disabled, 'bg-secondary-inactive!'].join(' ')
  }
};
