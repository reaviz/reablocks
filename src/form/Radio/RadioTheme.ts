export interface RadioTheme {
  base: string;
  radio: {
    base: string;
    disabled: string;
    checked: string;
  };
  indicator: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  label: {
    base: string;
    clickable: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: RadioTheme = {
  base: 'w-full box-border leading-none',
  radio: {
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-[100%] bg-transparent border cursor-pointer',
    disabled: 'cursor-not-allowed opacity-60',
    checked: ''
  },
  indicator: {
    base: 'rounded-[100%]',
    sizes: {
      small: 'w-1.5 h-1.5',
      medium: 'w-2 h-2',
      large: 'w-2.5 h-2.5'
    }
  },
  label: {
    base: 'w-full align-middle ml-2.5',
    clickable: 'cursor-pointer'
  },
  sizes: {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  }
};

export const lightRadioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-black'].join(' ')
  },
  radio: {
    ...baseTheme.radio,
    base: [baseTheme.radio.base, 'border-gray-500'].join(' '),
    checked: [baseTheme.radio.checked, 'border-primary-500'].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [baseTheme.indicator.base, 'bg-primary-500'].join(' ')
  }
};

export const darkRadioTheme: RadioTheme = {
  ...baseTheme,
  label: {
    ...baseTheme.label,
    base: [baseTheme.label.base, 'text-white'].join(' ')
  },
  radio: {
    ...baseTheme.radio,
    base: [baseTheme.radio.base, 'border-gray-400'].join(' '),
    checked: [baseTheme.radio.checked, 'border-primary-600'].join(' ')
  },
  indicator: {
    ...baseTheme.indicator,
    base: [baseTheme.indicator.base, 'bg-primary-600'].join(' ')
  }
};
