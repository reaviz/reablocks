export interface ButtonTheme {
  /** CSS class applied to the root button element. */
  base: string;
  /** CSS class applied when the button is disabled. */
  disabled: string;
  /** CSS class applied when the button spans the full width of its container. */
  fullWidth: string;
  /** CSS class applied when the button is part of a button group. */
  group: string;
  /** CSS class applied to text buttons within a button group. */
  groupText: string;
  /** Class names for the button's start and end adornment slots. */
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
  /** Class names for each visual button variant. */
  variants: {
    filled: string;
    outline: string;
    text: string;
    [key: string]: string;
  };
  /** Class names for each button color, broken down by variant. */
  colors: {
    default: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    primary: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    secondary: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    success: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    warning: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    error: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
    [key: string]: {
      filled: string;
      outline: string;
      text: string;
      [key: string]: string;
    };
  };
  /** Class names for each button size. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
  /** Class names for icon-only buttons at each size. */
  iconSizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: Partial<ButtonTheme> = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded-xs font-sans cursor-pointer',
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
  },
  iconSizes: {
    small: 'px-2 py-1',
    medium: 'px-4 py-2',
    large: 'px-5 py-2.5'
  }
};

export const buttonTheme: ButtonTheme = {
  base: [baseTheme.base, 'text-text-primary font-semibold'].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-600 disabled:text-gray-400 border-gray-500'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  iconSizes: baseTheme.iconSizes,
  variants: {
    filled:
      'bg-secondary hover:bg-border-secondary-hover border-secondary light:text-gray-100',
    outline: 'border-grey border',
    text: 'border-0'
  },
  colors: {
    default: {
      filled: 'bg-gray-800 hover:bg-gray-700 border-gray-800',
      outline: 'border-secondary border',
      text: 'text-text-primary'
    },
    primary: {
      filled:
        'bg-primary hover:bg-primary-hover border-primary text-text-primary',
      outline: 'border border-primary',
      text: 'text-primary hover:text-primary-hover'
    },
    secondary: {
      filled: 'bg-secondary hover:bg-secondary-hover text-text-primary!',
      outline: 'border border-secondary',
      text: 'text-secondary hover:text-secondary-hover'
    },
    success: {
      filled:
        'bg-success hover:bg-success-hover border-success text-text-primary',
      outline: 'border border-success',
      text: 'text-success hover:text-success-hover'
    },
    warning: {
      filled:
        'bg-warning hover:bg-warning-hover border-warning text-text-primary',
      outline: 'border border-warning',
      text: 'text-warning hover:text-warning-hover'
    },
    error: {
      filled: 'bg-error hover:bg-error-hover border-error text-text-primary',
      outline: 'border border-error',
      text: 'text-error hover:text-error-hover'
    }
  }
};
