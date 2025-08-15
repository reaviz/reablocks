interface ChipColorConfigTheme {
  base?: string;
  variants?: {
    filled?: string;
    outline?: string;
    [key: string]: string;
  };
  selectable?: {
    base?: string;
    variants?: {
      filled?: {
        base?: string;
        selected?: string;
      };
      outline?: {
        base?: string;
        selected?: string;
      };
      [key: string]: {
        base?: string;
        selected?: string;
      };
    };
  };
}

export interface ChipSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface ChipVariantTheme {
  filled: string;
  outline: string;
  subtle: string;
  [key: string]: string;
}

export interface ChipColorTheme {
  default?: ChipColorConfigTheme;
  primary?: ChipColorConfigTheme;
  secondary?: ChipColorConfigTheme;
  success?: ChipColorConfigTheme;
  warning?: ChipColorConfigTheme;
  error?: ChipColorConfigTheme;
  info?: ChipColorConfigTheme;
  [key: string]: ChipColorConfigTheme;
}

export interface ChipTheme {
  base: string;
  adornment: {
    base: string;
    start: string;
    end: string;
    sizes: ChipSizeTheme;
  };
  variants: ChipVariantTheme;
  colors: ChipColorTheme;
  sizes: ChipSizeTheme;
  focus: string;
  deleteButton: {
    base: string;
    sizes: ChipSizeTheme;
  };
  disabled: string;
}

export const chipTheme: ChipTheme = {
  base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-full transition-colors',
  colors: {
    default: {
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'cursor-pointer',
            selected: ''
          },
          outline: {
            base: 'cursor-pointer',
            selected: ''
          },
          subtle: {
            base: 'cursor-pointer',
            selected: ''
          }
        }
      },
      variants: {
        filled: `
          bg-badges-colors-solid-neutral-background-standard
          border-badges-colors-solid-neutral-stroke-default
          text-badges-colors-solid-neutral-text-default
          [&_svg]:fill-badges-colors-solid-neutral-assets-default
        `,
        outline: `
          bg-badges-colors-outline-neutral-background-standard
          border-badges-colors-outline-neutral-stroke-default
          text-badges-colors-outline-neutral-text-default
          [&_svg]:fill-badges-colors-outline-neutral-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-neutral-background-standard
          border-badges-colors-subtle-neutral-stroke-default
          text-badges-colors-subtle-neutral-text-default
          [&_svg]:fill-badges-colors-subtle-neutral-assets-default
        `
      }
    },
    primary: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-brand-background-standard
          border-badges-colors-solid-brand-stroke-default
          text-badges-colors-solid-brand-text-default
          [&_svg]:fill-badges-colors-solid-brand-assets-default
        `,
        outline: `
          bg-badges-colors-outline-brand-background-standard
          border-badges-colors-outline-brand-stroke-default
          text-badges-colors-outline-brand-text-default
          [&_svg]:fill-badges-colors-outline-brand-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-brand-background-standard
          border-badges-colors-subtle-brand-stroke-default
          text-badges-colors-subtle-brand-text-default
          [&_svg]:fill-badges-colors-subtle-brand-assets-default
        `
      }
    },
    secondary: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-accent-background-standard
          border-badges-colors-solid-accent-stroke-default
          text-badges-colors-solid-accent-text-default
          [&_svg]:fill-badges-colors-solid-accent-assets-default
        `,
        outline: `
          bg-badges-colors-outline-accent-background-standard
          border-badges-colors-outline-accent-stroke-default
          text-badges-colors-outline-accent-text-default
          [&_svg]:fill-badges-colors-outline-accent-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-accent-background-standard
          border-badges-colors-subtle-accent-stroke-default
          text-badges-colors-subtle-accent-text-default
          [&_svg]:fill-badges-colors-subtle-accent-assets-default
        `
      }
    },
    success: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-success-background-standard
          border-badges-colors-solid-success-stroke-default
          text-badges-colors-solid-success-text-default
          [&_svg]:fill-badges-colors-solid-success-assets-default
        `,
        outline: `
          bg-badges-colors-outline-success-background-standard
          border-badges-colors-outline-success-stroke-default
          text-badges-colors-outline-success-text-default
          [&_svg]:fill-badges-colors-outline-success-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-success-background-standard
          border-badges-colors-subtle-success-stroke-default
          text-badges-colors-subtle-success-text-default
          [&_svg]:fill-badges-colors-subtle-success-assets-default
        `
      }
    },
    warning: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-warning-background-standard
          border-badges-colors-solid-warning-stroke-default
          text-badges-colors-solid-warning-text-default
          [&_svg]:fill-badges-colors-solid-warning-assets-default
        `,
        outline: `
          bg-badges-colors-outline-warning-background-standard
          border-badges-colors-outline-warning-stroke-default
          text-badges-colors-outline-warning-text-default
          [&_svg]:fill-badges-colors-outline-warning-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-warning-background-standard
          border-badges-colors-subtle-warning-stroke-default
          text-badges-colors-subtle-warning-text-default
          [&_svg]:fill-badges-colors-subtle-warning-assets-default
        `
      }
    },
    error: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-error-background-standard
          border-badges-colors-solid-error-stroke-default
          text-badges-colors-solid-error-text-default
          [&_svg]:fill-badges-colors-solid-error-assets-default
        `,
        outline: `
          bg-badges-colors-outline-error-background-standard
          border-badges-colors-outline-error-stroke-default
          text-badges-colors-outline-error-text-default
          [&_svg]:fill-badges-colors-outline-error-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-error-background-standard
          border-badges-colors-subtle-error-stroke-default
          text-badges-colors-subtle-error-text-default
          [&_svg]:fill-badges-colors-subtle-error-assets-default
        `
      }
    },
    info: {
      selectable: {
        base: 'hover:cursor-pointer'
      },
      variants: {
        filled: `
          bg-badges-colors-solid-info-background-standard
          border-badges-colors-solid-info-stroke-default
          text-badges-colors-solid-info-text-default
          [&_svg]:fill-badges-colors-solid-info-assets-default        
        `,
        outline: `
          bg-badges-colors-outline-info-background-standard
          border-badges-colors-outline-info-stroke-default
          text-badges-colors-outline-info-text-default
          [&_svg]:fill-badges-colors-outline-info-assets-default
        `,
        subtle: `
          bg-badges-colors-subtle-info-background-standard
          border-badges-colors-subtle-info-stroke-default
          text-badges-colors-subtle-info-text-default
          [&_svg]:fill-badges-colors-subtle-info-assets-default
        `
      }
    }
  },
  adornment: {
    base: 'flex items-center justify-center',
    start: '',
    end: '',
    sizes: {
      small: '[&>svg]:size-3',
      medium: '[&>svg]:size-3',
      large: '[&>svg]:size-4'
    }
  },
  sizes: {
    small: 'text-xs px-1 py gap-0.5',
    medium: 'text-xs px-1.5 py-[3px] gap-0.5',
    large: 'text-sm px-2 py-[5px] gap-1'
  },
  focus: 'focus-visible:outline-none',
  deleteButton: {
    base: 'text-inherit',
    sizes: {
      small: 'leading-[10px] max-h-2.5',
      medium: 'leading-3 max-h-3',
      large: 'leading-[14px] max-h-3.5'
    }
  },
  disabled: 'cursor-not-allowed',
  variants: {
    filled: '',
    outline: '',
    subtle: ''
  }
};
