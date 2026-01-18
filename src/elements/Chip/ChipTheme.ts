interface ChipColorConfigTheme {
  base?: string;
  variants?: {
    filled?: {
      base: string;
      selected?: string;
      selectable?: string;
      start?: string;
      end?: string;
    };
    outline?: {
      base: string;
      selected?: string;
      selectable?: string;
      start?: string;
      end?: string;
    };
    [key: string]: {
      base: string;
      selected?: string;
      selectable?: string;
      start?: string;
      end?: string;
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
  filled?: string;
  outline?: string;
  subtle?: string;
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

export interface BadgeTypeThemeConfig {
  base: string;
  label?: string;
  adornment: {
    base: string;
    start: string;
    end: string;
    sizes: ChipSizeTheme;
  };
  variants: ChipVariantTheme;
  colors: ChipColorTheme;
  sizes: ChipSizeTheme;
}

export interface TagTypeThemeConfig {
  base: string;
  label?: string;
  adornment: {
    base: string;
    start: string;
    end: string;
    sizes: ChipSizeTheme;
  };
  variants: ChipVariantTheme;
  colors: ChipColorTheme;
  sizes: ChipSizeTheme;
  closeButton: {
    base: string;
    sizes: ChipSizeTheme;
  };
  disabled: string;
}

export interface ChipTypeTheme {
  badge: BadgeTypeThemeConfig;
  tag: TagTypeThemeConfig;
}

export interface ChipTheme {
  types: ChipTypeTheme;
}

export const defaultChipTheme: ChipTheme = {
  types: {
    badge: {
      base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-0.5 rounded-xs leading-none text-white transition-colors duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill] font-medium',
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
      variants: {
        filled: 'border border-transparent box-border',
        outline: 'bg-transparent border hover:bg-transparent'
      },
      colors: {
        default: {
          variants: {
            filled: {
              base: 'bg-panel border-panel text-text-primary',
              selectable:
                'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
              selected: 'bg-primary text-panel'
            },
            outline: {
              base: 'text-text-primary dark:border-gray-100 light:border-gray-900',
              selected: 'border-panel-accent text-primary',
              selectable: 'hover:text-primary-hover hover:border-panel-accent'
            }
          }
        },
        primary: {
          variants: {
            filled: {
              base: 'bg-primary border-primary text-panel',
              selectable:
                'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
              selected: 'bg-primary-hover'
            },
            outline: {
              base: 'text-primary border-panel-accent',
              selectable: 'hover:text-primary-hover hover:border-primary',
              selected: 'border-primary'
            }
          }
        },
        secondary: {
          variants: {
            filled: {
              base: 'bg-secondary border-secondary text-text-primary',
              selectable:
                'hover:bg-secondary-hover hover:border-secondary-hover hover:text-panel',
              selected: 'bg-secondary-hover text-panel'
            },
            outline: {
              base: 'text-secondary border-panel-accent',
              selectable: 'hover:text-secondary-hover hover:border-secondary',
              selected: 'border-secondary'
            }
          }
        },
        success: {
          variants: {
            filled: {
              base: 'bg-success border-success text-panel',
              selected: 'bg-success-hover',
              selectable: 'hover:bg-success-hover hover:border-success-hover'
            },
            outline: {
              base: 'text-success border-panel-accent',
              selected: 'border-success',
              selectable: 'hover:text-success-hover hover:border-success'
            }
          }
        },
        warning: {
          variants: {
            filled: {
              base: 'bg-warning border-warning text-panel',
              selectable:
                'hover:bg-warning-hover hover:border-warning-hover hover:text-panel',
              selected: 'bg-warning-hover'
            },
            outline: {
              base: 'text-warning border-panel-accent',
              selectable: 'hover:text-warning-hover hover:border-warning',
              selected: 'border-warning'
            }
          }
        },
        error: {
          variants: {
            filled: {
              base: 'bg-error border-error text-panel',
              selectable:
                'hover:bg-error-hover hover:border-error-hover hover:text-panel',
              selected: 'bg-error-hover'
            },
            outline: {
              base: 'text-error border-panel-accent',
              selectable: 'hover:text-error-hover hover:border-error',
              selected: 'border-error'
            }
          }
        },
        info: {
          variants: {
            filled: {
              base: 'bg-info border-info text-panel',
              selectable:
                'hover:bg-info-hover hover:border-info-hover hover:text-panel',
              selected: 'bg-info-hover'
            },
            outline: {
              base: 'text-info border-panel-accent',
              selectable: 'hover:text-info-hover hover:border-info',
              selected: 'border-info'
            }
          }
        }
      }
    },
    tag: {
      base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-0.5 rounded-xs leading-none text-white transition-colors duration-300 ease [&>svg]:transition-[fill] [&>svg]:will-change-[fill] font-medium',
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
      variants: {
        filled: 'border border-transparent box-border',
        outline: 'bg-transparent border hover:bg-transparent'
      },
      colors: {
        default: {
          variants: {
            filled: {
              base: 'bg-panel border-panel text-text-primary',
              selectable:
                'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
              selected: 'bg-primary text-panel'
            },
            outline: {
              base: 'text-text-primary border-panel-accent',
              selectable: 'hover:text-primary-hover hover:border-panel-accent',
              selected: 'border-panel-accent text-primary'
            }
          }
        },
        primary: {
          variants: {
            outline: {
              base: 'text-primary border-panel-accent',
              selectable:
                'hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
              selected: 'bg-primary-hover'
            },
            filled: {
              base: 'bg-primary border-primary text-panel',
              selectable: 'hover:text-primary-hover hover:border-primary',
              selected: 'border-primary'
            }
          }
        },
        secondary: {
          variants: {
            filled: {
              base: 'bg-secondary border-secondary text-text-primary',
              selectable:
                'hover:bg-secondary-hover hover:border-secondary-hover hover:text-panel',
              selected: 'bg-secondary-hover text-panel'
            },
            outline: {
              base: 'text-secondary border-panel-accent',
              selectable: 'hover:text-secondary-hover hover:border-secondary',
              selected: 'border-secondary'
            }
          }
        },
        success: {
          variants: {
            filled: {
              base: 'bg-success border-success text-panel',
              selectable: 'hover:bg-success-hover hover:border-success-hover',
              selected: 'bg-success-hover'
            },
            outline: {
              base: 'text-success border-panel-accent',
              selectable: 'hover:text-success-hover hover:border-success',
              selected: 'border-success'
            }
          }
        },
        warning: {
          variants: {
            filled: {
              base: 'bg-warning border-warning text-panel',
              selectable:
                'hover:bg-warning-hover hover:border-warning-hover hover:text-panel',
              selected: 'bg-warning-hover'
            },
            outline: {
              base: 'text-warning border-panel-accent',
              selectable: 'hover:text-warning-hover hover:border-warning',
              selected: 'border-warning'
            }
          }
        },
        error: {
          variants: {
            filled: {
              base: 'bg-error border-error text-panel',
              selectable:
                'hover:bg-error-hover hover:border-error-hover hover:text-panel',
              selected: 'bg-error-hover'
            },
            outline: {
              base: 'text-error border-panel-accent',
              selectable: 'hover:text-error-hover hover:border-error',
              selected: 'border-error'
            }
          }
        },
        info: {
          variants: {
            filled: {
              base: 'bg-info border-info text-panel',
              selectable:
                'hover:bg-info-hover hover:border-info-hover hover:text-panel',
              selected: 'bg-info-hover'
            },
            outline: {
              base: 'text-info border-panel-accent',
              selectable: 'hover:text-info-hover hover:border-info',
              selected: 'border-info'
            }
          }
        }
      },
      closeButton: {
        base: 'text-inherit',
        sizes: {
          small: 'leading-[10px] max-h-2.5',
          medium: 'leading-3 max-h-3',
          large: 'leading-[14px] max-h-3.5'
        }
      },
      disabled: 'opacity-50 cursor-not-allowed'
    }
  }
};

export const unifyChipTheme: ChipTheme = {
  types: {
    badge: {
      base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-(--badges-details-corner-radius-corner-radius) transition-colors',
      label: '',
      colors: {
        default: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-neutral-background-standard
                border-badges-colors-solid-neutral-stroke-default
                text-badges-colors-solid-neutral-text-default
              `,
              start: 'fill-badges-colors-solid-neutral-assets-default',
              end: 'fill-badges-colors-solid-neutral-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-neutral-background-standard
                border-badges-colors-outline-neutral-stroke-default
                text-badges-colors-outline-neutral-text-default
              `,
              start: 'fill-badges-colors-outline-neutral-assets-default',
              end: 'fill-badges-colors-outline-neutral-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-neutral-background-standard
                border-badges-colors-subtle-neutral-stroke-default
                text-badges-colors-subtle-neutral-text-default
              `,
              start: 'fill-badges-colors-subtle-neutral-assets-default',
              end: 'fill-badges-colors-subtle-neutral-assets-default'
            }
          }
        },
        primary: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-brand-background-standard
                border-badges-colors-solid-brand-stroke-default
                text-badges-colors-solid-brand-text-default
              `,
              start: 'fill-badges-colors-solid-brand-assets-default',
              end: 'fill-badges-colors-solid-brand-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-brand-background-standard
                border-badges-colors-outline-brand-stroke-default
                text-badges-colors-outline-brand-text-default
              `,
              start: 'fill-badges-colors-outline-brand-assets-default',
              end: 'fill-badges-colors-outline-brand-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-brand-background-standard
                border-badges-colors-subtle-brand-stroke-default
                text-badges-colors-subtle-brand-text-default
              `,
              start: 'fill-badges-colors-subtle-brand-assets-default',
              end: 'fill-badges-colors-subtle-brand-assets-default'
            }
          }
        },
        secondary: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-accent-background-standard
                border-badges-colors-solid-accent-stroke-default
                text-badges-colors-solid-accent-text-default
              `,
              start: 'fill-badges-colors-solid-accent-assets-default',
              end: 'fill-badges-colors-solid-accent-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-accent-background-standard
                border-badges-colors-outline-accent-stroke-default
                text-badges-colors-outline-accent-text-default
              `,
              start: 'fill-badges-colors-outline-accent-assets-default',
              end: 'fill-badges-colors-outline-accent-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-accent-background-standard
                border-badges-colors-subtle-accent-stroke-default
                text-badges-colors-subtle-accent-text-default
              `,
              start: 'fill-badges-colors-subtle-accent-assets-default',
              end: 'fill-badges-colors-subtle-accent-assets-default'
            }
          }
        },
        success: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-success-background-standard
                border-badges-colors-solid-success-stroke-default
                text-badges-colors-solid-success-text-default
              `,
              start: 'fill-badges-colors-solid-success-assets-default',
              end: 'fill-badges-colors-solid-success-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-success-background-standard
                border-badges-colors-outline-success-stroke-default
                text-badges-colors-outline-success-text-default
              `,
              start: 'fill-badges-colors-outline-success-assets-default',
              end: 'fill-badges-colors-outline-success-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-success-background-standard
                border-badges-colors-subtle-success-stroke-default
                text-badges-colors-subtle-success-text-default
              `,
              start: 'fill-badges-colors-subtle-success-assets-default',
              end: 'fill-badges-colors-subtle-success-assets-default'
            }
          }
        },
        warning: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-warning-background-standard
                border-badges-colors-solid-warning-stroke-default
                text-badges-colors-solid-warning-text-default
              `,
              start: 'fill-badges-colors-solid-warning-assets-default',
              end: 'fill-badges-colors-solid-warning-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-warning-background-standard
                border-badges-colors-outline-warning-stroke-default
                text-badges-colors-outline-warning-text-default
              `,
              start: 'fill-badges-colors-outline-warning-assets-default',
              end: 'fill-badges-colors-outline-warning-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-warning-background-standard
                border-badges-colors-subtle-warning-stroke-default
                text-badges-colors-subtle-warning-text-default
              `,
              start: 'fill-badges-colors-subtle-warning-assets-default',
              end: 'fill-badges-colors-subtle-warning-assets-default'
            }
          }
        },
        error: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-error-background-standard
                border-badges-colors-solid-error-stroke-default
                text-badges-colors-solid-error-text-default
              `,
              start: 'fill-badges-colors-solid-error-assets-default',
              end: 'fill-badges-colors-solid-error-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-error-background-standard
                border-badges-colors-outline-error-stroke-default
                text-badges-colors-outline-error-text-default
              `,
              start: 'fill-badges-colors-outline-error-assets-default',
              end: 'fill-badges-colors-outline-error-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-error-background-standard
                border-badges-colors-subtle-error-stroke-default
                text-badges-colors-subtle-error-text-default
              `,
              start: 'fill-badges-colors-subtle-error-assets-default',
              end: 'fill-badges-colors-subtle-error-assets-default'
            }
          }
        },
        info: {
          variants: {
            filled: {
              base: `
                bg-badges-colors-solid-info-background-standard
                border-badges-colors-solid-info-stroke-default
                text-badges-colors-solid-info-text-default
              `,
              start: 'fill-badges-colors-solid-info-assets-default',
              end: 'fill-badges-colors-solid-info-assets-default'
            },
            outline: {
              base: `
                bg-badges-colors-outline-info-background-standard
                border-badges-colors-outline-info-stroke-default
                text-badges-colors-outline-info-text-default
              `,
              start: 'fill-badges-colors-outline-info-assets-default',
              end: 'fill-badges-colors-outline-info-assets-default'
            },
            subtle: {
              base: `
                bg-badges-colors-subtle-info-background-standard
                border-badges-colors-subtle-info-stroke-default
                text-badges-colors-subtle-info-text-default
              `,
              start: 'fill-badges-colors-subtle-info-assets-default',
              end: 'fill-badges-colors-subtle-info-assets-default'
            }
          }
        }
      },
      adornment: {
        base: 'flex items-center justify-center',
        start: '',
        end: '',
        sizes: {
          small: '[&>svg]:size-(--badges-details-asset-size-sm)',
          medium: '[&>svg]:size-(--badges-details-asset-size-md)',
          large: '[&>svg]:size-(--badges-details-asset-size-lg)'
        }
      },
      sizes: {
        small:
          'h-(--badges-details-height-sm) text-xs gap-(--badges-details-space-between-sm) px-(--badges-details-horizontal-padding-sm)',
        medium:
          'h-(--badges-details-height-md) text-xs gap-(--badges-details-space-between-md) px-(--badges-details-horizontal-padding-md)',
        large:
          'h-(--badges-details-height-lg) text-md gap-(--badges-details-space-between-lg) px-(--badges-details-horizontal-padding-lg)'
      },
      variants: {
        filled: '',
        outline: '',
        subtle: ''
      }
    },
    tag: {
      base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-(--tags-details-corner-radius-base) transition-colors outline-none',
      label: '',
      colors: {
        default: {
          base: 'text-tags-colors-neutral-text-label-base',
          variants: {
            outline: {
              base: `
                border-tags-colors-neutral-stroke-resting bg-tags-colors-neutral-background-resting
              `,
              selected: `
                border-tags-colors-neutral-stroke-selected bg-tags-colors-neutral-background-selected
                hover:border-tags-colors-neutral-stroke-selected hover:bg-tags-colors-neutral-background-selected
              `,
              selectable: `
                hover:border-tags-colors-neutral-stroke-hover hover:bg-tags-colors-neutral-background-hover
                focus-visible:border-tags-colors-neutral-stroke-hover focus-visible:bg-tags-colors-neutral-background-hover
              `,
              start: 'text-tags-colors-neutral-assets-lead-icon-base',
              end: 'text-tags-colors-neutral-assets-lead-icon-base'
            }
          }
        },
        primary: {
          variants: {
            outline: {
              base: `
                border-tags-colors-brand-stroke-resting bg-tags-colors-brand-background-resting
              `,
              selected: `
                border-tags-colors-brand-stroke-selected bg-tags-colors-brand-background-selected
                hover:border-tags-colors-brand-stroke-selected hover:bg-tags-colors-brand-background-selected
              `,
              selectable: `
                hover:border-tags-colors-brand-stroke-hover hover:bg-tags-colors-brand-background-hover
                focus-visible:border-tags-colors-brand-stroke-hover focus-visible:bg-tags-colors-brand-background-hover
              `,
              start: 'text-tags-colors-brand-assets-lead-icon-base',
              end: 'text-tags-colors-brand-assets-lead-icon-base'
            }
          }
        },
        secondary: {
          variants: {
            outline: {
              base: `
                border-tags-colors-accent-stroke-resting bg-tags-colors-accent-background-resting
              `,
              selected: `
                border-tags-colors-accent-stroke-selected bg-tags-colors-accent-background-selected
                hover:border-tags-colors-accent-stroke-selected hover:bg-tags-colors-accent-background-selected
              `,
              selectable: `
                hover:border-tags-colors-accent-stroke-hover hover:bg-tags-colors-accent-background-hover
                focus-visible:border-tags-colors-accent-stroke-hover focus-visible:bg-tags-colors-accent-background-hover
              `,
              start: 'text-tags-colors-accent-assets-lead-icon-base',
              end: 'text-tags-colors-accent-assets-lead-icon-base'
            }
          }
        },
        success: {
          variants: {
            outline: {
              base: `
                border-tags-colors-success-stroke-resting bg-tags-colors-success-background-resting
              `,
              selected: `
                border-tags-colors-success-stroke-selected bg-tags-colors-success-background-selected
                hover:border-tags-colors-success-stroke-selected hover:bg-tags-colors-success-background-selected
              `,
              selectable: `
                hover:border-tags-colors-success-stroke-hover hover:bg-tags-colors-success-background-hover
                focus-visible:border-tags-colors-success-stroke-hover focus-visible:bg-tags-colors-success-background-hover
              `,
              start: 'text-tags-colors-success-assets-lead-icon-base',
              end: 'text-tags-colors-success-assets-lead-icon-base'
            }
          }
        },
        warning: {
          variants: {
            outline: {
              base: `
                border-tags-colors-warning-stroke-resting bg-tags-colors-warning-background-resting
              `,
              selected: `
                border-tags-colors-warning-stroke-selected bg-tags-colors-warning-background-selected
                hover:border-tags-colors-warning-stroke-selected hover:bg-tags-colors-warning-background-selected
              `,
              selectable: `
                hover:border-tags-colors-warning-stroke-hover hover:bg-tags-colors-warning-background-hover
                focus-visible:border-tags-colors-warning-stroke-hover focus-visible:bg-tags-colors-warning-background-hover
              `,
              start: 'text-tags-colors-warning-assets-lead-icon-base',
              end: 'text-tags-colors-warning-assets-lead-icon-base'
            }
          }
        },
        error: {
          variants: {
            outline: {
              base: `
                border-tags-colors-error-stroke-resting bg-tags-colors-error-background-resting
              `,
              selected: `
                border-tags-colors-error-stroke-selected bg-tags-colors-error-background-selected
                hover:border-tags-colors-error-stroke-selected hover:bg-tags-colors-error-background-selected
              `,
              selectable: `
                hover:border-tags-colors-error-stroke-hover hover:bg-tags-colors-error-background-hover
                focus-visible:border-tags-colors-error-stroke-hover focus-visible:bg-tags-colors-error-background-hover
              `,
              start: 'text-tags-colors-error-assets-lead-icon-base',
              end: 'text-tags-colors-error-assets-lead-icon-base'
            }
          }
        },
        info: {
          variants: {
            outline: {
              base: `
                border-tags-colors-info-stroke-resting bg-tags-colors-info-background-resting
              `,
              selected: `
                border-tags-colors-info-stroke-selected bg-tags-colors-info-background-selected
                hover:border-tags-colors-info-stroke-selected hover:bg-tags-colors-info-background-selected
              `,
              selectable: `
                hover:border-tags-colors-info-stroke-hover hover:bg-tags-colors-info-background-hover
                focus-visible:border-tags-colors-info-stroke-hover focus-visible:bg-tags-colors-info-background-hover
              `,
              start: 'text-tags-colors-info-assets-lead-icon-base',
              end: 'text-tags-colors-info-assets-lead-icon-base'
            }
          }
        }
      },
      adornment: {
        base: 'flex items-center justify-center',
        start: '',
        end: '',
        sizes: {
          small: '[&>svg]:size-(--tags-details-asset-size-icon)',
          medium: '[&>svg]:size-(--tags-details-asset-size-icon)',
          large: '[&>svg]:size-(--tags-details-asset-size-icon)'
        }
      },
      sizes: {
        small:
          'h-(--tags-details-height-base) text-xxs gap-(--tags-details-space-between-base) px-(--tags-details-horizontal-padding-base)',
        medium:
          'h-(--tags-details-height-base) text-xs gap-(--tags-details-space-between-base) px-(--tags-details-horizontal-padding-base)',
        large:
          'h-(--tags-details-height-base) text-sm gap-(--tags-details-space-between-base) px-(--tags-details-horizontal-padding-base)'
      },
      closeButton: {
        base: 'transition-colors ml-1 outline-none text-tags-colors-neutral-assets-close-base hover:text-tags-colors-neutral-text-label-base',
        sizes: {
          small: 'size-2 [*>svg]:size-(--tags-details-asset-size-close)',
          medium: 'size-3 [*>svg]:size-(--tags-details-asset-size-close)',
          large: 'size-3 [*>svg]:size-(--tags-details-asset-size-close)'
        }
      },
      disabled: 'cursor-not-allowed opacity-50',
      variants: {
        outline: ''
      }
    }
  }
};
