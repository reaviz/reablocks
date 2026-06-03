interface ThemeColor {
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

export interface ChipTheme {
  /** CSS class applied to the root chip element. */
  base: string;
  /** CSS class applied to the chip's label text. */
  label: string;
  /** Class names for the chip's start and end adornment slots. */
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
  /** Class names for each visual chip variant. */
  variants: {
    filled: string;
    outline: string;
    [key: string]: string;
  };
  /** Class names for each chip color, including selectable states. */
  colors: {
    default?: ThemeColor;
    primary?: ThemeColor;
    secondary?: ThemeColor;
    success?: ThemeColor;
    warning?: ThemeColor;
    error?: ThemeColor;
    info?: ThemeColor;
    [key: string]: ThemeColor;
  };
  /** Class names for each chip size. */
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
  /** CSS class applied to the chip when focused. */
  focus: string;
  /** Class names for the chip's delete button at each size. */
  deleteButton: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
  };
  /** CSS class applied when the chip is disabled. */
  disabled: string;
}

export const chipTheme: ChipTheme = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-0.5 rounded-xs leading-none text-white transition-colors duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill] font-medium',
  label: 'flex items-center',
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
    small: 'text-[10px] leading-[inherit] px-1 py-0.5',
    medium: 'text-sm leading-[inherit] px-2 py-0.5',
    large: 'text-base leading-[inherit] px-3 py-0.5'
  },
  focus:
    'focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-2',
  variants: {
    filled: 'border border-transparent box-border',
    outline: 'bg-transparent border hover:bg-transparent'
  },
  colors: {
    default: {
      variants: {
        filled: 'bg-panel border-panel text-text-primary',
        outline: 'text-text-primary border-current'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-primary-hover hover:border-primary-hover hover:text-white',
            selected: 'bg-primary text-white'
          },
          outline: {
            base: 'hover:text-primary-hover hover:border-panel-accent',
            selected: 'border-panel-accent text-primary'
          }
        }
      }
    },
    primary: {
      variants: {
        outline: 'text-primary border-panel-accent',
        filled: 'bg-primary border-primary text-white'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-primary-hover hover:border-primary-hover hover:text-white',
            selected: 'bg-primary-hover'
          },
          outline: {
            base: 'hover:text-primary-hover hover:border-primary',
            selected: 'border-primary'
          }
        }
      }
    },
    secondary: {
      variants: {
        filled: 'bg-secondary border-secondary text-text-primary',
        outline: 'text-secondary border-panel-accent'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-secondary-hover hover:border-secondary-hover hover:text-white',
            selected: 'bg-secondary-hover text-white'
          },
          outline: {
            base: 'hover:text-secondary-hover hover:border-secondary',
            selected: 'border-secondary'
          }
        }
      }
    },
    success: {
      variants: {
        filled: 'bg-success border-success text-white',
        outline: 'text-success border-panel-accent'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-success-hover hover:border-success-hover',
            selected: 'bg-success-hover'
          },
          outline: {
            base: 'hover:text-success-hover hover:border-success',
            selected: 'border-success'
          }
        }
      }
    },
    warning: {
      variants: {
        filled: 'bg-warning border-warning text-white',
        outline: 'text-warning border-panel-accent'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-warning-hover hover:border-warning-hover hover:text-white',
            selected: 'bg-warning-hover'
          },
          outline: {
            base: 'hover:text-warning-hover hover:border-warning',
            selected: 'border-warning'
          }
        }
      }
    },
    error: {
      variants: {
        filled: 'bg-error border-error text-white',
        outline: 'text-error border-panel-accent'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-error-hover hover:border-error-hover hover:text-white',
            selected: 'bg-error-hover'
          },
          outline: {
            base: 'hover:text-error-hover hover:border-error',
            selected: 'border-error'
          }
        }
      }
    },
    info: {
      variants: {
        filled: 'bg-info border-info text-white',
        outline: 'text-info border-panel-accent'
      },
      selectable: {
        base: 'hover:cursor-pointer',
        variants: {
          filled: {
            base: 'hover:bg-info-hover hover:border-info-hover hover:text-white',
            selected: 'bg-info-hover'
          },
          outline: {
            base: 'hover:text-info-hover hover:border-info',
            selected: 'border-info'
          }
        }
      }
    }
  },
  deleteButton: {
    base: 'text-inherit',
    sizes: {
      small: 'leading-[10px] max-h-2.5',
      medium: 'leading-3 max-h-3',
      large: 'leading-[14px] max-h-3.5'
    }
  },
  disabled: 'opacity-50 cursor-not-allowed'
};
