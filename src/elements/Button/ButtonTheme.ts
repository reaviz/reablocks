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
    small: 'text-xs px-5px py-0.5 leading-[normal]',
    medium: 'text-base px-2.5 py-1.5 leading-[normal]',
    large: 'text-xl px-5 py-2.5 leading-[normal]'
  }
};

export const buttonTheme: ButtonTheme = {
  base: [baseTheme.base, 'text-typography'].join(' '),
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
    filled:
      'bg-secondary hover:bg-border-secondary-hover border-secondary light:text-gray-100',
    outline: 'bg-opacity-0 border-grey border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      filled: 'bg-gray-800 hover:bg-gray-700 border-gray-800',
      outline: 'border-secondary border',
      text: 'text-typography'
    },
    primary: {
      filled:
        'bg-primary hover:bg-primary-hover border-primary text-typography',
      outline: 'border border-primary',
      text: 'text-primary hover:text-primary-hover'
    },
    secondary: {
      filled:
        'bg-secondary hover:bg-secondary-hover border-secondary text-typography',
      outline: 'border border-secondary',
      text: 'text-secondary hover:text-secondary-hover'
    },
    success: {
      filled:
        'bg-success hover:bg-success-hover border-success text-typography',
      outline: 'border border-success',
      text: 'text-success hover:text-success-hover'
    },
    warning: {
      filled:
        'bg-warning hover:bg-warning-hover border-warning text-typography',
      outline: 'border border-warning',
      text: 'text-warning hover:text-warning-hover'
    },
    error: {
      filled: 'bg-error hover:bg-error-hover border-error text-typography',
      outline: 'border border-error',
      text: 'text-error hover:text-error-hover'
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
