export interface ButtonTheme {
  base: string;
  disabled: string;
  fullWidth: string;
  group: string;
  groupText: string;
  adornment: {
    base: string;
    start: string;
    end: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  variants: {
    filled: string;
    outline: string;
    text: string;
  };
  colors: {
    primary: {
      filled: string;
      outline: string;
      text: string;
    };
    secondary: {
      filled: string;
      outline: string;
      text: string;
    };
    success: {
      filled: string;
      outline: string;
      text: string;
    };
    warning: {
      filled: string;
      outline: string;
      text: string;
    };
    error: {
      filled: string;
      outline: string;
      text: string;
    };
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: Partial<ButtonTheme> = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded',
  disabled: 'disabled:cursor-not-allowed',
  fullWidth: 'block w-full',
  group:
    'rounded-none first:rounded-s last:rounded-e border-s-0 first:border-s',
  groupText:
    'border border-y-transparent border-l-transparent last:border-r-transparent hover:bg-initial',
  adornment: {
    base: 'flex',
    start: 'pr-1',
    end: 'pl-1',
    sizes: {
      small: '[&>svg]:w-3 [&>svg]:h-3',
      medium: '[&>svg]:w-4 [&>svg]:h-4',
      large: '[&>svg]:w-5 [&>svg]:h-5'
    }
  },
  sizes: {
    small: 'text-xs px-5px py-0.5 leading-[normal]',
    medium: 'text-base px-2.5 py-5px leading-[normal]',
    large: 'text-xl px-5 py-2.5 leading-[normal]'
  }
};

export const lightButtonTheme: ButtonTheme = {
  base: [baseTheme.base, 'text-black'].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-400 data-[variant=filled]:disabled:text-gray-500 disabled:text-gray-400'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  groupText: [baseTheme.groupText, 'border-s-black first:border-s-0'].join(' '),
  variants: {
    filled: 'bg-blue-400 border-blue-500 hover:bg-blue-500',
    outline: 'bg-opacity-0 border-gray-900 border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      filled: 'bg-blue-400 border-blue-500 hover:bg-blue-500',
      outline: 'border border-gray-900',
      text: 'text-black'
    },
    primary: {
      filled: 'bg-primary-400 hover:bg-primary-500',
      outline: 'border border-primary-700',
      text: 'text-primary-400 hover:text-primary-500'
    },
    secondary: {
      filled: 'bg-secondary-400 hover:bg-secondary-500',
      outline: 'border border-secondary-700',
      text: 'text-secondary-400 hover:text-secondary-500'
    },
    success: {
      filled: 'bg-success-400 hover:bg-success-500',
      outline: 'border border-success-700',
      text: 'text-success-400 hover:text-success-500'
    },
    warning: {
      filled: 'bg-warning-400 hover:bg-warning-500',
      outline: 'border border-warning-400',
      text: 'text-warning-400 hover:text-warning-500'
    },
    error: {
      filled: 'bg-error-400 hover:bg-error-500',
      outline: 'border border-error-600',
      text: 'text-error-400 hover:text-error-500'
    }
  }
};

export const darkButtonTheme: ButtonTheme = {
  base: [baseTheme.base, 'text-gray-100'].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-600 disabled:text-gray-400 border-gray-500'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  variants: {
    filled: 'bg-gray-800 text-white hover:bg-gray-700 border-gray-800',
    outline: 'bg-opacity-0 border-grey border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      filled: 'bg-gray-800 text-white hover:bg-gray-700 border-gray-800',
      outline: 'border-grey border',
      text: 'text-white'
    },
    primary: {
      filled:
        'bg-primary-600 hover:bg-primary-700 border-primary-600 text-white',
      outline: 'border border-primary-600',
      text: 'text-primary-600 hover:text-primary-700'
    },
    secondary: {
      filled:
        'bg-secondary-700 hover:bg-secondary-800 border-secondary-700 text-white',
      outline: 'border border-secondary-700',
      text: 'text-secondary-700 hover:text-secondary-800'
    },
    success: {
      filled:
        'bg-success-700 hover:bg-success-800 border-success-700 text-white',
      outline: 'border border-success-700',
      text: 'text-success-700 hover:text-success-800'
    },
    warning: {
      filled:
        'bg-warning-700 hover:bg-warning-800 border-warning-700 text-white',
      outline: 'border border-warning-700',
      text: 'text-warning-700 hover:text-warning-800'
    },
    error: {
      filled: 'bg-error-700 hover:bg-error-800 border-error-700 text-white',
      outline: 'border border-error-700',
      text: 'text-error-700 hover:text-error-800'
    }
  }
};

export const legacyButtonTheme: ButtonTheme = {
  base: [
    baseTheme.base,
    '[border:_var(--button-border)] rounded-[var(--button-border)] [font-family:_var(--button-font-family)] [font-weight:_var(--button-font-weight)]'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-[var(--disabled-background)] disabled:text-[var(--button-disabled-color-on-background)] border-[var(--disabled-background)]'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  sizes: {
    small: '[font-size:_var(--font-size-sm)] p-[var(--button-spacing-sm)]',
    medium: '[font-size:_var(--font-size-md)] p-[var(--button-spacing-md)]',
    large: '[font-size:_var(--font-size-lg)] p-[var(--button-spacing-lg)]'
  },
  adornment: {
    ...baseTheme.adornment,
    start: [
      baseTheme.adornment.start,
      '[padding-right:_calc(var(--list-item-spacing)_/_2)]'
    ].join(' '),
    end: [
      baseTheme.adornment.start,
      '[padding-left:_calc(var(--list-item-spacing)_/_2)]'
    ].join(' '),
    sizes: {
      small:
        '[&>svg]:w-[var(--button-adornment-size-sm)] [&>svg]:h-[var(--button-adornment-size-sm)]',
      medium:
        '[&>svg]:w-[var(--button-adornment-size-md)] [&>svg]:h-[var(--button-adornment-size-md)]',
      large:
        '[&>svg]:w-[var(--button-adornment-size-lg)] [&>svg]:h-[var(--button-adornment-size-lg)]'
    }
  },
  variants: {
    filled:
      'bg-[var(--button-background)] text-[var(--button-color-on-background)] hover:bg-[var(--button-background-hover)] border-[var(--button-background)] hover:border-[var(--button-background-hover)]',
    outline:
      'bg-opacity-0 border-[var(--button-background)] hover:border-[var(--button-background-hover)] text-[var(--button-color)] hover:text-[var(--button-color-hover)] border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      filled:
        'bg-[var(--button-background)] text-[var(--button-color-on-background)] hover:bg-[var(--button-background-hover)] border-[var(--button-background)] hover:border-[var(--button-background-hover)]',
      outline: '',
      text: 'text-[var(--button-color)] hover:text-[var(--button-color-hover)]'
    },
    primary: {
      filled:
        'bg-[var(--primary-background)] hover:bg-[var(--primary-background-hover)] border-[var(--primary-background)] border-[var(--primary-background-hover)] text-[var(--button-color-on-background)]',
      outline: '',
      text: 'text-[var(--primary-color)] hover:text-[var(--primary-color-hover)]'
    },
    secondary: {
      filled:
        'bg-[var(--secondary-background)] hover:bg-[var(--secondary-background-hover)] border-[var(--secondary-background)] hover:border-[var(--secondary-background-hover)] text-[var(--button-color-on-background)]',
      outline: '',
      text: 'text-[var(--secondary-color)] hover:text-[var(--secondary-color-hover)]'
    },
    success: {
      filled:
        'bg-[var(--success-background)] hover:bg-[var(--success-background-hover)] border-[var(--success-background)] hover:border-[var(--success-background-hover)] text-[var(--button-color-on-background)]',
      outline: '',
      text: 'text-[var(--success-color)] hover:text-[var(--success-color-hover)]'
    },
    warning: {
      filled:
        'bg-[var(--warning-background)] hover:bg-[var(--warning-background-hover)] border-[var(--warning-background)] hover:border-[var(--warning-background-hover)] text-[var(--button-color-on-background)]',
      outline: '',
      text: 'text-[var(--warning-color)] hover:text-[var(--warning-color-hover)]'
    },
    error: {
      filled:
        'bg-[var(--error-background)] hover:bg-[var(--error-background-hover)] border-[var(--error-background)] hover:border-[var(--error-background-hover)] text-[var(--button-color-on-background)]',
      outline: '',
      text: 'text-[var(--error-color)] hover:text-[var(--warning-error-hover)]'
    }
  }
};
