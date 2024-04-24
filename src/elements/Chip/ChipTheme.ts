interface ThemeColor {
  base?: string;
  variants?: {
    filled?: string;
    outline?: string;
  };
  selectable?: {
    base: string;
    variants?: {
      filled?: {
        base?: string;
        selected?: string;
      };
      outline?: {
        base?: string;
        selected?: string;
      };
    };
  };
}

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
  };
  colors: {
    default: ThemeColor;
    primary?: ThemeColor;
    secondary?: ThemeColor;
    success?: ThemeColor;
    warning?: ThemeColor;
    error?: ThemeColor;
    info?: ThemeColor;
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
  disabled: string;
}

const baseTheme: Partial<ChipTheme> = {
  base: `
  inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-0.5
  rounded-sm leading-none text-white transition-colors
  duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill] font-medium
  `,
  colors: {
    default: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    primary: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    secondary: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    success: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    warning: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    error: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
    },
    info: {
      selectable: {
        base: 'hover:cursor-pointer'
      }
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
    medium: 'text-sm px-2 py-0.5',
    large: 'text-base px-3 py-0.5'
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
  },
  disabled: 'bg-opacity-50 border-opacity-50 text-opacity-50 cursor-not-allowed'
};

export const chipTheme: ChipTheme = {
  base: baseTheme.base,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  focus: baseTheme.focus,
  variants: {
    filled: 'border border-transparent box-border',
    outline: 'bg-opacity-0 border hover:bg-transparent'
  },
  colors: {
    default: {
      variants: {
        filled: 'bg-panel border-panel text-panel-content',
        outline: 'text-panel-content border-panel-content'
      },
      selectable: {
        base: `${baseTheme.colors.default.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
            selected: 'bg-primary text-panel'
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
        filled: 'bg-primary border-primary text-panel-content'
      },
      selectable: {
        base: `${baseTheme.colors.primary.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
            selected: 'bg-primary-hover text-panel'
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
        filled: 'bg-secondary border-secondary text-panel-content',
        outline: 'text-secondary border-panel-accent'
      },
      selectable: {
        base: `${baseTheme.colors.secondary.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-secondary-hover hover:border-secondary-hover hover:text-panel',
            selected: 'bg-secondary-hover text-panel'
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
        filled: 'bg-success border-success text-panel',
        outline: 'text-success border-panel-accent'
      },
      selectable: {
        base: `${baseTheme.colors.success.selectable.base}`,
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
        filled: 'bg-warning border-warning text-panel',
        outline: 'text-warning border-panel-accent'
      },
      selectable: {
        base: `${baseTheme.colors.warning.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-warning-hover hover:border-warning-hover hover:text-panel',
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
        filled: 'bg-error border-error text-panel',
        outline: 'text-error border-panel-accent'
      },
      selectable: {
        base: `${baseTheme.colors.error.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-error-hover hover:border-error-hover hover:text-panel',
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
        filled: 'bg-info border-info text-panel',
        outline: 'text-info border-panel-accent'
      },
      selectable: {
        base: `${baseTheme.colors.info.selectable.base}`,
        variants: {
          filled: {
            base: 'hover:bg-info-hover hover:border-info-hover hover:text-panel',
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
  deleteButton: baseTheme.deleteButton,
  disabled: baseTheme.disabled
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
      'bg-opacity-0 border hover:bg-transparent border-[var(--chip-background)] text-[var(--chip-color)] [&>svg]:fill-[var(--chip-color)]'
  },
  colors: {
    default: {
      base: 'bg-[var(--chip-background)] border-[var(--chip-background)] text-[var(--chip-color)] ',
      variants: baseTheme.colors.default.variants,
      selectable: baseTheme.colors.default.selectable
    },
    primary: {
      base: 'bg-[color:var(--primary-background)] border-[color:var(--primary-background)]',
      variants: baseTheme.colors.primary.variants,
      selectable: baseTheme.colors.primary.selectable
    },
    secondary: {
      base: 'bg-[color:var(--secondary-background)] border-[color:var(--secondary-background)]',
      variants: baseTheme.colors.secondary.variants,
      selectable: baseTheme.colors.secondary.selectable
    },
    success: {
      base: 'bg-[color:var(--success-background)] border-[color:var(--success-background)]',
      variants: baseTheme.colors.success.variants,
      selectable: baseTheme.colors.success.selectable
    },
    warning: {
      base: 'bg-[color:var(--warning-background)] border-[color:var(--warning-background)]',
      variants: baseTheme.colors.warning.variants,
      selectable: baseTheme.colors.warning.selectable
    },
    error: {
      base: 'bg-[color:var(--error-background)] border-[color:var(--error-background)]',
      variants: baseTheme.colors.error.variants,
      selectable: baseTheme.colors.error.selectable
    },
    info: {
      base: 'bg-[color:var(--info-background)] border-[color:var(--info-background)]',
      variants: baseTheme.colors.info.variants,
      selectable: baseTheme.colors.info.selectable
    }
  },
  deleteButton: baseTheme.deleteButton,
  disabled: baseTheme.disabled
};
