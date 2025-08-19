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
  type: ChipTypeTheme;
}

export const chipTheme: ChipTheme = {
  type: {
    badge: {
      base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-full transition-colors',
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
      variants: {
        filled: '',
        outline: '',
        subtle: ''
      }
    },
    tag: {
      base: 'inline-flex whitespace-nowrap border font-medium select-none items-center justify-center rounded-sm transition-colors outline-none',
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
          small: '[&>svg]:size-2',
          medium: '[&>svg]:size-3',
          large: '[&>svg]:size-4'
        }
      },
      sizes: {
        small: 'text-xs leading-2.5 p-1 gap-1',
        medium: 'text-sm leading-3 p-2 py-1.5 gap-1',
        large: 'text-md leading-3.5 py-2 px-3 gap-1'
      },
      closeButton: {
        base: 'transition-colors ml-1 text-tags-colors-neutral-assets-close-base hover:text-tags-colors-neutral-text-label-base',
        sizes: {
          small: 'size-2 [*>svg]:size-2',
          medium: 'size-3 [*>svg]:size-3',
          large: 'size-3 [*>svg]:size-3'
        }
      },
      disabled: 'cursor-not-allowed opacity-50',
      variants: {
        outline: ''
      }
    }
  }
};
