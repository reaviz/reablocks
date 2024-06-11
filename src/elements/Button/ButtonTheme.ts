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
      [key: string]: string;
    };
  };
  variants: {
    filled: string;
    outline: string;
    text: string;
    [key: string]: string;
  };
  colors: {
    default: {
      filled: string;
      outline: string;
      text: string;
    };
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
    [key: string]: {
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
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded-sm font-sans',
  disabled: 'disabled:cursor-not-allowed',
  fullWidth: 'flex w-full',
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
    small: 'text-sm px-2 py-1 leading-[normal]',
    medium: 'text-base px-4 py-2 leading-[normal]',
    large: 'text-xl px-5 py-2.5 leading-[normal]'
  }
};

export const buttonTheme: ButtonTheme = {
  base: [
    baseTheme.base,
    'text-surface-content font-semibold transition-[background-color,_border-color] ease-in-out duration-300'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-600 light:data-[variant=filled]:disabled:bg-gray-400 disabled:text-gray-400 data-[variant=filled]:disabled:text-black light:data-[variant=filled]:disabled:text-white !border-gray-500'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  variants: {
    filled:
      'bg-secondary hover:bg-border-secondary-hover border-secondary light:text-gray-900',
    outline: 'bg-opacity-0 border-grey border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      filled: 'bg-gray-700/40 hover:bg-gray-500/40',
      outline: 'border border-gray-600 hover:border-gray-200',
      text: ''
    },
    primary: {
      filled: '!text-white bg-primary hover:bg-primary-hover border-primary',
      outline: 'border border-primary hover:border-primary-hover',
      text: 'text-primary hover:text-blue-300'
    },
    secondary: {
      filled:
        'bg-gray-700/40 hover:bg-gray-500/40 light:bg-secondary/40 light:hover:bg-blue-300/40',
      outline: 'border border-secondary hover:border-blue-300/40',
      text: 'text-waterloo hover:text-mystic light:text-secondary/40 light:hover:text-blue-300/40'
    },
    success: {
      filled:
        'bg-success hover:bg-success/40 border-success light:bg-success/20 light:hover:bg-success/30 light:border-success/20',
      outline: 'border border-success hover:border-success/40',
      text: 'text-success hover:text-success/40'
    },
    warning: {
      filled:
        'bg-warning hover:bg-warning/40 border-warning light:bg-warning/20 light:hover:bg-warning/30 light:border-warning/20',
      outline: 'border border-warning hover:border-orange-500/40',
      text: 'text-warning hover:text-warning/40'
    },
    error: {
      filled:
        'bg-error hover:bg-error/40 border-error light:bg-error/20 light:hover:bg-error/30 light:border-error/20',
      outline: 'border border-error hover:border-error/40',
      text: 'text-error hover:text-error/40'
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
