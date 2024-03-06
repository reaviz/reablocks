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
    default: { base: string; selectable: string; selected: string };
    primary?: { base: string; selectable: string; selected: string };
    secondary?: { base: string; selectable: string; selected: string };
    success?: { base: string; selectable: string; selected: string };
    warning?: { base: string; selectable: string; selected: string };
    error?: { base: string; selectable: string; selected: string };
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
  focus: string;
}

const baseTheme: Partial<ChipTheme> = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded border border-transparent box-border leading-none text-white',
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
    small: 'text-xs px-5px py-0.5 leading-[normal]',
    medium: 'text-sm px-2.5 py-5px leading-[normal]',
    large: 'text-base px-5 py-2.5 leading-[normal]'
  },
  focus:
    'focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-2'
};

export const lightChipTheme: ChipTheme = {
  base: baseTheme.base,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  focus: baseTheme.focus,
  variants: {
    filled: '',
    outline: 'bg-opacity-0 border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      base: 'bg-gray-700 border-gray-700',
      selectable: 'hover:cursor-pointer hover:bg-gray-600',
      selected: 'bg-gray-600',
      focus: 'focus-visible:outline-gray-500'
    },
    primary: {
      base: 'bg-primary-700 border-primary-700',
      selectable: 'hover:cursor-pointer hover:bg-primary-600',
      selected: 'bg-primary-600',
      focus: 'focus-visible:outline-primary-500'
    },
    secondary: {
      base: 'bg-secondary-700',
      selectable: 'hover:cursor-pointer hover:bg-secondary-600',
      selected: 'bg-secondary-600'
    },
    success: {
      base: 'bg-success-700',
      selectable: 'hover:cursor-pointer hover:bg-success-600',
      selected: 'bg-success-600'
    },
    warning: {
      base: 'bg-warning-700',
      selectable: 'hover:cursor-pointer hover:bg-warning-600',
      selected: 'bg-warning-600'
    },
    error: {
      base: 'bg-error-700',
      selectable: 'hover:cursor-pointer hover:bg-error-600',
      selected: 'bg-error-600'
    },
    info: {
      base: 'bg-info-700',
      selectable: 'hover:cursor-pointer hover:bg-info-600',
      selected: 'bg-info-600'
    }
  }
};

export const darkChipTheme: ChipTheme = {
  base: baseTheme.base,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  focus: baseTheme.focus,
  variants: {
    filled: 'text-white',
    outline: 'bg-opacity-0 border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    default: {
      base: 'bg-gray-600 border-gray-700 text-gray-600',
      selectable: 'hover:cursor-pointer hover:bg-gray-500',
      selected: 'bg-gray-500'
    },
    primary: {
      base: 'bg-primary-600 border-primary-700 text-primary-600',
      selectable: 'hover:cursor-pointer hover:bg-primary-500',
      selected: 'bg-primary-500'
    },
    secondary: {
      base: 'bg-secondary-600 border-secondary-700 text-secondary-600',
      selectable: 'hover:cursor-pointer hover:bg-secondary-500',
      selected: 'bg-secondary-500'
    },
    success: {
      base: 'bg-success-600 border-success-700 text-success-600',
      selectable: 'hover:cursor-pointer hover:bg-success-500',
      selected: 'bg-success-500'
    },
    warning: {
      base: 'bg-warning-600 border-warning-700 text-warning-600',
      selectable: 'hover:cursor-pointer hover:bg-warning-500',
      selected: 'bg-warning-500'
    },
    error: {
      base: 'bg-error-600 border-error-700 text-error-600',
      selectable: 'hover:cursor-pointer hover:bg-error-500',
      selected: 'bg-error-500'
    },
    info: {
      base: 'bg-info-600 border-info-700 text-info-600',
      selectable: 'hover:cursor-pointer hover:bg-info-500',
      selected: 'bg-info-500'
    }
  }
};
