export interface ChipTheme {
  base: string;
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
    default: { base?: string; selectable?: string; selected?: string };
    primary?: { base?: string; selectable?: string; selected?: string };
    secondary?: { base?: string; selectable?: string; selected?: string };
    success?: { base?: string; selectable?: string; selected?: string };
    warning?: { base?: string; selectable?: string; selected?: string };
    error?: { base?: string; selectable?: string; selected?: string };
    info?: { base?: string; selectable?: string; selected?: string };
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
  focus: string;
  deleteButton: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

const baseTheme: Partial<ChipTheme> = {
  base: `
  inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1
  rounded border border-transparent box-border leading-none text-white transition-colors
  duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill]
  `,
  colors: {
    default: {
      selectable: 'hover:cursor-pointer'
    },
    primary: {
      selectable: 'hover:cursor-pointer'
    },
    secondary: {
      selectable: 'hover:cursor-pointer'
    },
    success: {
      selectable: 'hover:cursor-pointer'
    },
    warning: {
      selectable: 'hover:cursor-pointer'
    },
    error: {
      selectable: 'hover:cursor-pointer'
    },
    info: {
      selectable: 'hover:cursor-pointer'
    }
  },
  adornment: {
    base: 'flex items-center justify-center',
    start: 'mr-1',
    end: 'ml-1',
    sizes: {
      small: '[&>svg]:w-3 [&>svg]:h-3',
      medium: '[&>svg]:w-4 [&>svg]:h-4',
      large: '[&>svg]:w-5 [&>svg]:h-5'
    }
  },
  sizes: {
    small: 'text-[10px] px-1 py-0.5',
    medium: 'text-xs px-2 py-1',
    large: 'text-sm px-2 py-2'
  },
  focus:
    'focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-2',
  deleteButton: {
    base: 'text-inherit',
    sizes: {
      small: 'leading-[10px] max-h-2.5',
      medium: 'leading-3 max-h-3',
      large: 'leading-[14px] max-h-3.5'
    }
  }
};

export const chipTheme: ChipTheme = {
  base: baseTheme.base,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  focus: baseTheme.focus,
  variants: {
    filled: 'text-white',
    outline: 'bg-opacity-0 border hover:bg-transparent text-surface-content',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      base: 'bg-gray-600 border-gray-600 text-gray-300',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-gray-500 hover:border-gray-500'
      ].join(' '),
      selected: '!bg-gray-500 text-white'
    },
    primary: {
      base: 'bg-primary border-primary text-primary',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-primary-hover hover:border-primary-hover'
      ].join(' '),
      selected: '!bg-primary-active text-white'
    },
    secondary: {
      base: 'bg-secondary border-secondary text-secondary',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-secondary-hover hover:border-secondary-hover'
      ].join(' '),
      selected: '!bg-secondary-active text-white'
    },
    success: {
      base: 'bg-success border-success text-success',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-success-hover hover:border-success-hover'
      ].join(' '),
      selected: '!bg-success-active text-white'
    },
    warning: {
      base: 'bg-warning border-warning text-warning',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-warning-hover hover:border-warning-hover'
      ].join(' '),
      selected: '!bg-warning-active text-white'
    },
    error: {
      base: 'bg-error border-error text-error',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-error-hover hover:border-error-hover'
      ].join(' '),
      selected: '!bg-error-active text-white'
    },
    info: {
      base: 'bg-info border-info text-info',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-info-hover hover:border-info-hover'
      ].join(' '),
      selected: '!bg-info-active text-white'
    }
  },
  deleteButton: baseTheme.deleteButton
};

export const legacyChipTheme: ChipTheme = {
  base: [
    baseTheme.base,
    '[font-family:_var(--chip-font-family)] rounded-[var(--chip-border-radius)]'
  ].join(' '),
  adornment: {
    ...baseTheme.adornment,
    start: [baseTheme.adornment.start, 'pr-[var(--spacing-xs)]'].join(' '),
    end: [baseTheme.adornment.end, 'pl-[var(--spacing-xs)]'].join(' ')
  },
  sizes: {
    small: [baseTheme.sizes.small, 'p-[var(--spacing-xs)]'].join(' '),
    medium: [
      baseTheme.sizes.medium,
      'py-[var(--spacing-xs)] px-[var(--spacing-md)]'
    ].join(' '),
    large: [baseTheme.sizes.large, 'p-[var(--spacing-md)]'].join(' ')
  },
  focus: baseTheme.focus,
  variants: {
    filled: '[&>svg]:fill-[var(--chip-color)]',
    outline:
      'bg-opacity-0 border hover:bg-transparent border-[var(--chip-background)] text-[var(--chip-color)] [&>svg]:fill-[var(--chip-color)]',
    text: 'bg-opacity-0 border-0 [&>svg]:fill-[var(--chip-color)]'
  },
  colors: {
    default: {
      base: 'bg-[var(--chip-background)] border-[var(--chip-background)] text-[var(--chip-color)] ',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-gray-500 hover:border-gray-500'
      ].join(' '),
      selected: '!bg-gray-500 text-white'
    },
    primary: {
      base: 'bg-[color:var(--primary-background)] border-[color:var(--primary-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--primary-background-hover)] hover:border-[color:var(--primary-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--primary-background-hover)] text-white'
    },
    secondary: {
      base: 'bg-[color:var(--secondary-background)] border-[color:var(--secondary-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--secondary-background-hover)] hover:border-[color:var(--secondary-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--secondary-background-hover)] text-white'
    },
    success: {
      base: 'bg-[color:var(--success-background)] border-[color:var(--success-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--success-background-hover)] hover:border-[color:var(--success-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--success-background-hover)] text-white'
    },
    warning: {
      base: 'bg-[color:var(--warning-background)] border-[color:var(--warning-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--warning-background-hover)] hover:border-[color:var(--warning-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--warning-background-hover)] text-white'
    },
    error: {
      base: 'bg-[color:var(--error-background)] border-[color:var(--error-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--error-background-hover)] hover:border-[color:var(--error-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--error-background-hover)] text-white'
    },
    info: {
      base: 'bg-[color:var(--info-background)] border-[color:var(--info-background)]',
      selectable: [
        baseTheme.colors.default.selectable,
        'hover:bg-[color:var(--info-background-hover)] hover:border-[color:var(--info-background-hover)]'
      ].join(' '),
      selected: '!bg-[color:var(--info-background-hover)] text-white'
    }
  },
  deleteButton: baseTheme.deleteButton
};
