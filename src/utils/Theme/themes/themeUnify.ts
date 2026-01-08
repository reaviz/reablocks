import type { ReablocksTheme } from './theme';

/**
 * UDS (Unify Design System) theme.
 *
 * This theme uses Unify Design System tokens and styling.
 * Enable it via ThemeProvider's variant prop:
 *
 * @example
 * ```tsx
 * <ThemeProvider variant="uds">
 *   <App />
 * </ThemeProvider>
 * ```
 *
 * NOTE: This theme relies on UDS CSS custom properties being defined.
 * Make sure to import the UDS CSS tokens in your application.
 */
export const themeUDS: ReablocksTheme = {
  components: {
    avatar: {
      base: 'flex justify-center items-center bg-cover bg-center font-bold text-white',
      rounded: 'rounded-[50%]'
    },
    avatarGroup: {
      base: 'flex items-center text-text-primary',
      avatar: '-ml-2.5',
      overflow: 'ml-[5px]'
    },
    arrow: {
      base: 'text-text-primary',
      up: 'rotate-x180',
      down: '',
      left: 'rotate-90',
      right: '-rotate-90'
    },
    backdrop: {
      base: 'fixed top-0 left-0 w-full h-full opacity-0 select-none bg-black',
      opacity: 0.8
    },
    badge: {
      base: 'relative inline-flex align-middle shrink-0 mx-2 my-0',
      disableMargins: 'm-0',
      badge:
        'flex flex-row flex-wrap justify-center content-center items-center absolute box-border leading-none text-sm p-1.5 w-[18px] h-[18px] z-1 rounded-[50%] pointer-events-none',
      position:
        'translate-x-2/4 -translate-y-2/4 origin-[100%_0%] right-0 top-0',
      positions: {
        'top-start':
          'top-0 left-0 -translate-x-2/4 -translate-y-2/4 origin-[0%_0%]',
        'top-end':
          'top-0 right-0 translate-x-2/4 -translate-y-2/4 origin-[100%_0%]',
        'bottom-start':
          'bottom-0 left-0 -translate-x-2/4 translate-y-2/4 origin-[0%_100%]',
        'bottom-end':
          'bottom-0 right-0 translate-x-2/4 translate-y-2/4 origin-[100%_100%]'
      },
      colors: {
        default: 'bg-white text-black',
        primary: 'bg-primary text-text-primary',
        secondary: 'bg-secondary text-text-primary',
        error: 'bg-error text-text-primary'
      }
    },
    block: {
      base: 'mb-2.5',
      disableMargin: 'mb-0',
      label: 'text-sm',
      centerAlign: 'items-center',
      endAlign: 'items-end',
      horizontal: {
        base: 'flex flex-row items-baseline',
        label: 'mr-0.5 whitespace-nowrap'
      },
      vertical: {
        base: 'block',
        label: 'block mb-0.5'
      }
    },
    breadcrumbs: {
      base: '',
      separator: '[&>svg]:size-3.5',
      list: 'flex gap-2 items-center',
      link: 'hover:text-text-primary text-text-secondary transition-colors',
      activePage: 'text-primary pointer-events-none'
    },
    button: {
      base: `
        inline-flex items-center justify-center font-sans
        cursor-pointer font-semibold whitespace-nowrap
        rounded-(--buttons-details-corner-radius-base) select-none transition-colors [&_svg]:transition-all focus-visible:outline-none
      `,
      disabled: 'disabled:opacity-40 disabled:cursor-not-allowed',
      fullWidth: 'flex w-full',
      group:
        'rounded-none first:rounded-s last:rounded-e border-s-0 first:border-s',
      groupText:
        'border border-y-transparent border-l-transparent last:border-r-transparent hover:bg-initial',
      adornment: {
        base: 'flex',
        start: 'pr-(--buttons-details-space-between-horizontal-md)',
        end: 'pl-(--buttons-details-space-between-horizontal-md)',
        sizes: {
          small: '[&>svg]:size-(--buttons-details-asset-size-sm)',
          medium: '[&>svg]:size-(--buttons-details-asset-size-md)',
          large: '[&>svg]:size-(--buttons-details-asset-size-lg)'
        }
      },
      sizes: {
        small:
          'h-(--buttons-details-height-core-icon-sm) text-xs px-(--buttons-details-horizontal-padding-sm)',
        medium:
          'h-(--buttons-details-height-core-icon-md) text-sm px-(--buttons-details-horizontal-padding-md)',
        large:
          'h-(--buttons-details-height-core-icon-lg) text-base px-(--buttons-details-horizontal-padding-lg)'
      },
      iconSizes: {
        small:
          'size-(--buttons-details-height-core-icon-sm) [&>svg]:size-(--buttons-details-asset-size-sm) px-0 py-0',
        medium:
          'size-(--buttons-details-height-core-icon-md) [&>svg]:size-(--buttons-details-asset-size-md) px-0 py-0',
        large:
          'size-(--buttons-details-height-core-icon-lg) [&>svg]:size-(--buttons-details-asset-size-lg) px-0 py-0'
      },
      variants: {
        filled: 'bg-secondary hover:bg-border-secondary-hover',
        outline: 'border',
        text: 'border-0',
        ghost: ''
      },
      colors: {
        default: {
          filled:
            'bg-buttons-colors-core-icon-secondary-background-resting border-buttons-colors-core-icon-secondary-stroke-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-secondary-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected',
          outline:
            'border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected',
          text: 'text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected',
          ghost:
            'bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected'
        },
        primary: {
          filled:
            'bg-buttons-colors-core-icon-primary-background-resting border-buttons-colors-core-icon-primary-stroke-resting text-buttons-colors-core-icon-primary-text-resting [&_svg]:fill-buttons-colors-core-icon-primary-assets-resting hover:bg-buttons-colors-core-icon-primary-background-hover hover:border-buttons-colors-core-icon-primary-stroke-hover hover:text-buttons-colors-core-icon-primary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-primary-assets-hover focus-visible:bg-buttons-colors-core-icon-primary-background-selected focus-visible:border-buttons-colors-core-icon-primary-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-primary-assets-selected',
          outline:
            'border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected',
          text: 'text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected [&_svg]:fill-buttons-colors-link-primary-assets-resting hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected',
          ghost:
            'bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting hover:bg-buttons-colors-core-icon-ghost-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover focus-visible:bg-buttons-colors-core-icon-ghost-background-selected focus-visible:border-buttons-colors-core-icon-ghost-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected'
        },
        secondary: {
          filled:
            'bg-buttons-colors-core-icon-secondary-background-resting border-buttons-colors-core-icon-secondary-stroke-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-secondary-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected',
          outline:
            'border-buttons-colors-core-icon-secondary-background-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting hover:border-buttons-colors-core-icon-secondary-background-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover focus-visible:border-buttons-colors-core-icon-secondary-background-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected',
          text: 'text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected',
          ghost:
            'bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected'
        },
        success: {
          filled:
            'bg-buttons-colors-core-icon-primary-background-resting border-buttons-colors-core-icon-primary-stroke-resting text-buttons-colors-core-icon-primary-text-resting [&_svg]:fill-buttons-colors-core-icon-primary-assets-resting hover:bg-buttons-colors-core-icon-primary-background-hover hover:border-buttons-colors-core-icon-primary-stroke-hover hover:text-buttons-colors-core-icon-primary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-primary-assets-hover focus-visible:bg-buttons-colors-core-icon-primary-background-selected focus-visible:border-buttons-colors-core-icon-primary-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-primary-assets-selected',
          outline:
            'border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected',
          text: 'text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected [&_svg]:fill-buttons-colors-link-primary-assets-resting hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected'
        },
        warning: {
          filled:
            'bg-buttons-colors-core-icon-secondary-background-resting border-buttons-colors-core-icon-secondary-stroke-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-secondary-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected',
          outline:
            'border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected',
          text: 'text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected'
        },
        error: {
          filled:
            'bg-buttons-colors-core-icon-destructive-background-resting border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-core-icon-destructive-text-resting [&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-core-icon-destructive-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-hover focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-selected',
          outline:
            'border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-link-destructive-text-resting [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-link-destructive-text-hover hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-link-destructive-text-selected focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected',
          text: 'text-buttons-colors-link-destructive-text-resting hover:text-buttons-colors-link-destructive-text-hover focus-visible:text-buttons-colors-link-destructive-text-selected [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected'
        }
      }
    },
    // For remaining components, using default theme as placeholder
    // These should be updated with UDS values following the same pattern
    calendar: {
      base: 'relative overflow-hidden',
      header: {
        base: 'flex text-center justify-between mb-2 items-center text-text-secondary',
        prev: 'text-xl leading-4',
        mid: '',
        next: 'text-xl leading-4'
      },
      title: 'font-semibold leading-[normal]',
      content: 'flex',
      days: {
        header:
          'text-center grid grid-cols-7 mb-1 pt-2 font-medium text-text-secondary',
        dayOfWeek: 'text-center font-medium',
        week: 'grid grid-cols-7',
        day: 'font-normal flex p-2 border border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:disabled:bg-transparent! hover:text-black disabled:text-text-secondary/60',
        outside: 'opacity-40 text-text-secondary',
        startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
        cornerStartDateBottom: 'rounded-bl-none',
        endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
        cornerEndDateTop: 'rounded-tr-none',
        range: 'rounded-none',
        selected:
          'text-black border-transparent light:text-white light:border-transparent opacity-100',
        hover:
          'rounded-sm bg-primary-active text-black border-transparent light:text-white opacity-100',
        today: 'rounded-sm border border-panel-accent text-text-primary'
      },
      months: {
        root: 'grid grid-cols-4 gap-2',
        month:
          'p-1.5 hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white',
        selected: 'border-transparent text-black light:text-white'
      },
      years: {
        root: 'grid grid-cols-4 gap-2',
        year: 'p-1.5 hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white',
        selected: 'border-transparent text-black light:text-white'
      },
      time: {
        base: 'flex flex-col h-full gap-0',
        wrapper: 'mt-4 bg-panel z-10 flex flex-row border-panel-border',
        dividerTop: 'w-full',
        dividerLeft: 'h-auto mt-2.5 mx-1 bg-surface z-10',
        header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
        column: {
          base: 'w-6',
          wrapper: 'overflow-y-auto h-52',
          label: 'text-center text-xs text-gray-500',
          list: 'p-0 m-0 list-none',
          scrollbar:
            'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500'
        },
        items: {
          wrapper: 'flex flex-row flex-auto gap-0.25 pt-1 h-46',
          container: 'h-full',
          list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
          divider: 'mx-0',
          item: {
            base: 'py-0.5 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150 text-text-secondary hover:bg-primary-hover hover:text-black',
            selected: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
            disabled: 'cursor-not-allowed opacity-50'
          }
        }
      },
      presets: {
        wrapper: 'bg-panel z-10',
        divider: 'mx-1 h-[calc(100%-26px)] self-end',
        base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
        group:
          'text-sm font-medium my-1 !pr-0 !pl-0 !text-gray-500 dark:text-gray-400',
        item: {
          base: 'text-sm p-1.5 my-0.5 duration-0 hover:text-black dark:hover:bg-primary-hover hover:rounded-sm',
          active: 'bg-primary text-black rounded-sm'
        }
      }
    },
    calendarRange: {
      base: 'relative overflow-hidden',
      header: {
        base: 'flex text-center justify-between mb-2 items-center',
        prev: '',
        mid: '',
        next: ''
      },
      title: 'font-semibold flex grow justify-around',
      content: 'flex gap-4',
      days: {
        header:
          'text-center grid grid-cols-7 mb-1 pt-2 font-medium text-text-secondary',
        dayOfWeek: 'text-center font-medium',
        week: 'grid grid-cols-7',
        day: 'font-normal flex p-2 border border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:disabled:bg-transparent! hover:text-black disabled:text-text-secondary/60',
        outside: 'opacity-40 text-text-secondary',
        startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
        cornerStartDateBottom: 'rounded-bl-none',
        endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
        cornerEndDateTop: 'rounded-tr-none',
        range: 'rounded-none',
        selected:
          'text-black border-transparent light:text-white light:border-transparent opacity-100',
        hover:
          'rounded-sm bg-primary-active text-black border-transparent light:text-white opacity-100',
        today: 'rounded-sm border border-panel-accent text-text-primary'
      },
      presets: {
        wrapper: 'bg-panel z-10',
        divider: 'mx-1 h-[calc(100%-30px)] self-end',
        base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
        group:
          'text-sm font-medium my-1 !pr-0 !pl-0 !text-gray-500 dark:text-gray-400',
        item: {
          base: 'text-sm p-1.5 my-0.5 duration-0 hover:text-black dark:hover:bg-primary-hover hover:rounded-sm',
          active: 'bg-primary text-black rounded-sm'
        }
      },
      time: {
        base: 'flex flex-col h-full gap-0',
        wrapper: 'mt-4 bg-panel z-10 flex flex-row border-panel-border',
        dividerTop: 'w-full',
        dividerLeft: 'h-auto mt-2.5 mx-1 bg-surface z-10',
        header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
        column: {
          base: 'w-6',
          wrapper: 'overflow-y-auto h-52',
          label: 'text-center text-xs text-gray-500',
          list: 'p-0 m-0 list-none',
          scrollbar:
            'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500'
        },
        items: {
          wrapper: 'flex flex-row flex-auto gap-0.25 pt-1 h-46',
          container: 'h-full',
          list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
          divider: 'mx-0',
          item: {
            base: 'py-0.5 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150 text-text-secondary hover:bg-primary-hover hover:text-black',
            selected: 'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
            disabled: 'cursor-not-allowed opacity-50'
          }
        }
      }
    },
    card: {
      base: 'relative flex flex-col p-7 rounded-xs bg-panel border border-panel-accent text-text-primary',
      disablePadding: 'p-0',
      header: 'flex items-center',
      headerText: 'text-sm font-medium mt-0 mb-1',
      content: 'flex-1'
    },
    callout: {
      base: {
        common: 'px-4 py-3 border-b',
        variant: {
          default: 'bg-panel-background border-panel-accent',
          success: 'bg-success-background border-success',
          error: 'bg-error-background border-error',
          warning: 'bg-warning-background border-warning',
          info: 'bg-info-background border-info'
        }
      },
      icon: {
        common: '',
        variant: {
          default: '',
          success: 'text-success',
          error: 'text-error',
          warning: 'text-warning',
          info: 'text-info'
        }
      },
      text: 'text-base'
    },
    checkbox: {
      base: 'inline-flex items-center w-full group',
      label: {
        base: 'ml-3 w-full text-selectors-colors-text-description-not-selected whitespace-nowrap',
        checked: 'checked text-selectors-colors-text-description-selected',
        disabled: 'cursor-not-allowed opacity-40',
        clickable:
          'cursor-pointer transition-colors group-hover:text-selectors-colors-text-label-selected group-focus-within:text-selectors-colors-text-label-selected',
        sizes: {
          small: 'text-xs',
          medium: 'text-sm',
          large: 'text-base'
        }
      },
      check: {
        base: 'stroke-selectors-colors-checkbox-selected-assets-base group-hover:stroke-selectors-colors-checkbox-selected-assets-hover',
        checked: '',
        disabled: 'cursor-not-allowed'
      },
      border: {
        base: '',
        checked: '',
        disabled: 'cursor-not-allowed'
      },
      checkbox: {
        base: 'flex items-center justify-center cursor-pointer border transition-colors focus-visible:outline-none bg-selectors-colors-checkbox-not-selected-background-resting group-hover:bg-selectors-colors-checkbox-not-selected-background-hover group-focus-within:bg-selectors-colors-checkbox-not-selected-background-hover border-selectors-colors-checkbox-not-selected-stroke-resting group-hover:border-selectors-colors-checkbox-not-selected-stroke-hover group-focus-within:border-selectors-colors-checkbox-not-selected-stroke-hover [&>svg>path:first-child]:stroke-transparent [&>svg]:fill-transparent [&>svg]:outline-none',
        checked:
          'bg-selectors-colors-checkbox-selected-background-resting group-hover:bg-selectors-colors-checkbox-selected-background-hover group-focus-within:bg-selectors-colors-checkbox-selected-background-hover border-selectors-colors-checkbox-selected-stroke-resting group-hover:border-selectors-colors-checkbox-selected-stroke-hover group-focus-within:border-selectors-colors-checkbox-selected-stroke-hover',
        disabled:
          'disabled cursor-not-allowed opacity-40 group-hover:bg-selectors-colors-checkbox-selected-resting'
      },
      sizes: {
        small:
          '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
        medium:
          '[&>svg]:size-(--selectors-details-width-radio-checkbox-sm) rounded-(--selectors-details-corner-radius-checkbox-sm)',
        large:
          '[&>svg]:size-(--selectors-details-width-radio-checkbox-lg) rounded-(--selectors-details-corner-radius-checkbox-lg)'
      },
      boxVariants: {
        hover: {
          stroke: '',
          fill: '',
          strokeWidth: 1
        },
        pressed: {
          scale: 0.95
        },
        checked: {
          stroke: '',
          fill: ''
        },
        unchecked: {
          stroke: '',
          fill: ''
        }
      }
    },
    chip: {
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
            filled:
              'bg-panel border-panel text-text-primary hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
            outline:
              'text-text-primary dark:border-gray-100 light:border-gray-900 hover:text-primary-hover hover:border-panel-accent'
          }
        },
        primary: {
          variants: {
            filled:
              'bg-primary border-primary text-panel hover:bg-primary-hover hover:border-primary-hover hover:text-panel',
            outline:
              'text-primary border-panel-accent hover:text-primary-hover hover:border-primary'
          }
        },
        secondary: {
          variants: {
            filled:
              'bg-secondary border-secondary text-text-primary hover:bg-secondary-hover hover:border-secondary-hover hover:text-panel',
            outline:
              'text-secondary border-panel-accent hover:text-secondary-hover hover:border-secondary'
          }
        },
        success: {
          variants: {
            filled:
              'bg-success border-success text-panel hover:bg-success-hover hover:border-success-hover',
            outline:
              'text-success border-panel-accent hover:text-success-hover hover:border-success'
          }
        },
        warning: {
          variants: {
            filled:
              'bg-warning border-warning text-panel hover:bg-warning-hover hover:border-warning-hover hover:text-panel',
            outline:
              'text-warning border-panel-accent hover:text-warning-hover hover:border-warning'
          }
        },
        error: {
          variants: {
            filled:
              'bg-error border-error text-panel hover:bg-error-hover hover:border-error-hover hover:text-panel',
            outline:
              'text-error border-panel-accent hover:text-error-hover hover:border-error'
          }
        },
        info: {
          variants: {
            filled:
              'bg-info border-info text-panel hover:bg-info-hover hover:border-info-hover hover:text-panel',
            outline:
              'text-info border-panel-accent hover:text-info-hover hover:border-info'
          }
        }
      },
      focus: '',
      deleteButton: {
        base: 'text-inherit',
        sizes: {
          small: 'leading-[10px] max-h-2.5',
          medium: 'leading-3 max-h-3',
          large: 'leading-[14px] max-h-3.5'
        }
      },
      disabled: 'opacity-50 cursor-not-allowed'
    },
    contextMenu: {
      enabled: 'cursor-context-menu'
    },
    commandPalette: {
      base: 'w-full border border-panel-accent',
      inner: 'max-h-[80vh] overflow-y-auto bg-panel border-0',
      emptyContainer: 'bg-panel',
      input: {
        base: 'flex w-full items-center border-b-2 bg-panel border-bottom border-panel-accent',
        input:
          'flex-1 border-0 box-border p-2.5 focus-within:outline-hidden focus-visible:outline-hidden bg-panel text-text-primary placeholder:placeholder-accent',
        icon: 'w-4 h-4 ml-2.5'
      },
      item: {
        base: 'transition-colors ease-in-out duration-200',
        active: 'bg-primary text-text-primary',
        clickable:
          'cursor-pointer hover:bg-primary-hover/70 dark:hover:bg-primary-hover dark:hover:text-white'
      },
      section: {
        base: 'bg-panel',
        first: 'pt-2.5'
      }
    },
    collapse: {
      base: 'will-change-[height,opacity] overflow-hidden'
    },
    dateFormat: {
      base: 'cursor-text',
      interactive: 'cursor-pointer hover:underline'
    },
    dateInput: {
      input: {
        base: 'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs bg-panel border border-panel-accent text-text-primary hover:border-panel-accent light:hover:border-panel-accent',
        focused: '',
        input:
          'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-disabled placeholder-accent',
        inline: 'bg-transparent border-0 outline-hidden',
        disabled:
          'text-waterloo cursor-not-allowed disabled-within:bg-dark-disabled disabled-within:after:content-none',
        fullWidth: 'w-full',
        error: 'border-error',
        sizes: {
          small: '[&>input]:text-sm p-1 text-sm',
          medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
          large: '[&>input]:text-lg p-5 text-lg'
        },
        adornment: {
          base: 'flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:current-color text-text-primary',
          start: 'pr-1.5',
          end: 'pl-1.5'
        }
      },
      calendar: {
        base: 'relative overflow-hidden',
        header: {
          base: 'flex text-center justify-between mb-2 items-center text-text-secondary',
          prev: 'text-xl leading-4',
          mid: '',
          next: 'text-xl leading-4'
        },
        title: 'font-semibold leading-[normal]',
        content: 'flex',
        days: {
          header:
            'text-center grid grid-cols-7 mb-1 pt-2 font-medium text-text-secondary',
          dayOfWeek: 'text-center font-medium',
          week: 'grid grid-cols-7',
          day: 'font-normal flex p-2 border border-transparent text-text-secondary opacity-90 hover:bg-primary-hover hover:disabled:bg-transparent! hover:text-black disabled:text-text-secondary/60',
          outside: 'opacity-40 text-text-secondary',
          startRangeDate: 'rounded-tl-md rounded-tr-none rounded-br-none',
          cornerStartDateBottom: 'rounded-bl-none',
          endRangeDate: 'rounded-br-md rounded-bl-none rounded-tl-none',
          cornerEndDateTop: 'rounded-tr-none',
          range: 'rounded-none',
          selected:
            'text-black border-transparent light:text-white light:border-transparent opacity-100',
          hover:
            'rounded-sm bg-primary-active text-black border-transparent light:text-white opacity-100',
          today: 'rounded-sm border border-panel-accent text-text-primary'
        },
        months: {
          root: 'grid grid-cols-4 gap-2',
          month:
            'p-1.5 hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white',
          selected: 'border-transparent text-black light:text-white'
        },
        years: {
          root: 'grid grid-cols-4 gap-2',
          year: 'p-1.5 hover:bg-primary-hover hover:text-black border-transparent text-text-secondary light:hover:text-white',
          selected: 'border-transparent text-black light:text-white'
        },
        time: {
          base: 'flex flex-col h-full gap-0',
          wrapper: 'mt-4 bg-panel z-10 flex flex-row border-panel-border',
          dividerTop: 'w-full',
          dividerLeft: 'h-auto mt-2.5 mx-1 bg-surface z-10',
          header: 'flex gap-4 px-0.5 pb-2.5 mb-2',
          column: {
            base: 'w-6',
            wrapper: 'overflow-y-auto h-52',
            label: 'text-center text-xs text-gray-500',
            list: 'p-0 m-0 list-none',
            scrollbar:
              'scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-500'
          },
          items: {
            wrapper: 'flex flex-row flex-auto gap-0.25 pt-1 h-46',
            container: 'h-full',
            list: 'relative h-full p-0 m-0 list-none overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y',
            divider: 'mx-0',
            item: {
              base: 'py-0.5 px-1.5 text-center select-none cursor-pointer rounded transition-colors duration-150 text-text-secondary hover:bg-primary-hover hover:text-black',
              selected:
                'bg-blue-500 text-white dark:bg-blue-600 dark:text-white',
              disabled: 'cursor-not-allowed opacity-50'
            }
          }
        },
        presets: {
          wrapper: 'bg-panel z-10',
          divider: 'mx-1 h-[calc(100%-26px)] self-end',
          base: 'relative h-59 max-w-52 pr-1 overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-none touch-pan-y space-y-0',
          group:
            'text-sm font-medium my-1 !pr-0 !pl-0 !text-gray-500 dark:text-gray-400',
          item: {
            base: 'text-sm p-1.5 my-0.5 duration-0 hover:text-black dark:hover:bg-primary-hover hover:rounded-sm',
            active: 'bg-primary text-black rounded-sm'
          }
        }
      },
      preset: {
        list: 'w-full border border-panel-accent',
        option: {
          base: 'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
          active: 'bg-vulcan hover:text-mystic'
        }
      }
    },
    dialog: {
      base: 'justify-center items-center flex pointer-events-none top-0 left-0 w-full h-full fixed will-change-transform will-change-opacity',
      inner:
        'flex flex-col box-border outline-0 pointer-events-auto overflow-auto max-w-[80vw] max-h-[80vh] bg-panel text-text-primary border border-panel-accent rounded-sm shadow-2xl',
      content: 'p-[20px] flex-auto overflow-auto',
      footer: 'flex p-[20px] pb-[10px]',
      header: {
        base: 'flex justify-between pt-[20px] px-[20px] pb-[10px]',
        text: 'flex-1 m-0 p-0 inline-flex text-3xl font-bold',
        closeButton:
          'p-0 m-0 ml-[15px] opacity-80 h-auto w-auto inline-flex bg-none border-none cursor-pointer items-center text-[16px] focus:outline-hidden text-text-primary'
      }
    },
    divider: {
      base: 'border-none',
      orientation: {
        horizontal: 'h-px w-full my-2.5',
        vertical: 'w-px h-full mx-2.5'
      },
      variant: {
        primary: 'bg-surface',
        secondary: 'bg-linear-to-r from-transparent to-transparent via-blue-500'
      },
      disableMargins: 'my-0 mx-0'
    },
    dotsLoader: {
      base: 'flex',
      dot: 'rounded-[50%] light:bg-gray-900 dark:bg-gray-100',
      sizes: {
        small: 'w-1 h-1 m-1',
        medium: 'w-1.5 h-1.5 m-1.5',
        large: 'w-2 h-2 m-2'
      }
    },
    drawer: {
      base: 'fixed overflow-y-auto overflow-x-hidden bg-panel text-text-primary',
      header: {
        base: 'flex items-center justify-between px-8 py-5 text-3xl font-bold',
        text: 'flex-1 m-0'
      },
      content: 'px-8 py-5',
      disablePadding: 'p-0',
      closeButton: {
        base: 'opacity-80 h-auto w-auto min-w-[auto] min-h-[auto] cursor-pointer text-base p-0 border-0 focus:outline-hidden',
        headerless: 'absolute right-5 top-5'
      },
      positions: {
        top: 'w-full inset-x-0 top-0',
        end: 'h-full inset-y-0 right-0',
        bottom: 'w-full inset-x-0 bottom-0',
        start: 'h-full inset-y-0 left-0'
      }
    },
    ellipsis: {
      dots: 'cursor-pointer opacity-50 text-[unset] p-0 border-[none] outline-hidden'
    },
    input: {
      base: 'group flex relative flex-row items-center flex-nowrap transition-colors rounded-(--inputs-details-corner-radius-primary) bg-inputs-colors-normal-background-resting border border-inputs-colors-normal-stroke-resting hover:border-inputs-colors-normal-stroke-hover',
      focused:
        'border-inputs-colors-normal-stroke-selected bg-inputs-colors-normal-background-selected [&_svg]:fill-inputs-colors-normal-assets-input-selected!',
      input:
        'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden disabled:cursor-not-allowed disabled:text-disabled transition-colors placeholder:text-inputs-colors-normal-text-input-text-resting focus:placeholder:text-inputs-colors-normal-text-input-text-selected',
      inline: 'bg-transparent border-0 outline-hidden',
      disabled:
        'cursor-not-allowed opacity-40 hover:border-inputs-colors-normal-stroke-resting',
      fullWidth: 'w-full',
      error:
        'border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting [&>input]:text-inputs-colors-error-text-input-filled [&>input]:placeholder:text-inputs-colors-error-text-input-text-resting hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected',
      sizes: {
        small:
          'h-(--inputs-details-height-input-sm) pl-(--inputs-details-horizontal-padding-left-sm) pr-(--inputs-details-horizontal-padding-right-sm) gap-(--inputs-details-space-between-horizontal-sm) [&>input]:text-xs [&>input]:leading-4 [&_svg]:size-(--inputs-details-asset-size-sm)',
        medium:
          'h-(--inputs-details-height-input-md) pl-(--inputs-details-horizontal-padding-left-md) pr-(--inputs-details-horizontal-padding-right-md) gap-(--inputs-details-space-between-horizontal-md) [&>input]:text-sm [&>input]:leading-4.5 [&_svg]:size-(--inputs-details-asset-size-md)',
        large:
          'h-(--inputs-details-height-input-lg) pl-(--inputs-details-horizontal-padding-left-lg) pr-(--inputs-details-horizontal-padding-right-lg) gap-(--inputs-details-space-between-horizontal-lg) [&>input]:text-base [&>input]:leading-6 [&_svg]:size-(--inputs-details-asset-size-lg)'
      },
      adornment: {
        base: 'flex items-center justify-center transition-colors [&>svg]:fill-inputs-colors-normal-assets-input-resting group-hover:[&>svg]:fill-inputs-colors-normal-assets-input-hover',
        start: '',
        end: ''
      }
    },
    jsonTree: {
      node: {
        label: 'font-mono text-anakiwa light:text-blue-500',
        delimiter: 'pr-1',
        symbol: 'px-1 opacity-50 font-mono',
        value: '',
        count: 'opacity-50'
      },
      pager: 'opacity-50 cursor-pointer pl-4'
    },
    kbd: {
      base: 'inline-flex gap-1 items-center',
      chip: 'whitespace-nowrap rounded-sm font-mono'
    },
    list: {
      base: 'flex flex-col text-text-primary',
      header: 'pl-2 pr-2 text-text-primary',
      listItem: {
        base: 'items-center flex p-2.5 relative rounded-none hover:bg-panel-accent hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary [&:has(h3)]:hover:bg-transparent',
        disabled:
          'cursor-not-allowed pointer-events-none opacity-40 text-text-secondary',
        active: 'text-primary-active hover:text-mystic',
        clickable:
          'cursor-pointer transition-color duration-300 ease-linear transition-bg duration-300 ease-linear hover:color-inherit hover:bg-transparent',
        disablePadding: 'p-0',
        disableGutters: 'pl-0 pr-0',
        dense: {
          base: 'p-1',
          content: '',
          startAdornment: 'pr-[calc(5/2)]',
          endAdornment: 'pl-[calc(5/2)]'
        },
        adornment: {
          base: 'items-center flex',
          start: 'pr-1',
          end: 'pl-1',
          svg: 'fill-current'
        },
        content: 'overflow-wrap break-word word-wrap break-all flex-1'
      }
    },
    menu: {
      base: 'relative min-w-[112px] max-w-[500px] p-px',
      inner: 'focus:outline-hidden text-text-primary bg-panel'
    },
    notification: {
      container: '',
      positions:
        'fixed z-9998 h-auto -translate-x-2/4 mb-1 px-24 py-0 left-2/4 bottom-0',
      notification: {
        base: 'flex relative text-base min-w-[400px] rounded-xs mb-2.5 py-2 px-4 bg-panel text-text-primary border-panel-accent border',
        variants: {
          success: {
            base: 'bg-success-background border border-success',
            icon: 'text-success h-4 w-4'
          },
          error: {
            base: 'bg-error-background border border-error',
            icon: 'text-error h-4 w-4'
          },
          warning: {
            base: 'bg-warning-background border border-warning',
            icon: 'text-warning h-4 w-4'
          },
          info: {
            base: 'bg-info-background border border-info',
            icon: 'text-info h-4 w-4'
          }
        },
        content: 'inline-flex items-start flex-1 flex-col justify-center',
        header: 'text-base flex gap-2 items-center',
        closeContainer: 'inline-flex items-center',
        action: 'ml-auto mr-2 items-center flex',
        closeButton:
          'cursor-pointer text-sm font-semibold m-0 border-0 text-text-primary hover:text-text-primary/70',
        body: 'opacity-70 text-sm mt-1'
      }
    },
    pager: {
      base: 'items-center flex user-select-none',
      pages: {
        base: 'inline-flex',
        page: {
          base: 'py-1 text-slate-500',
          active: 'font-bold text-text-primary!'
        }
      },
      ellipsis: 'cursor-pointer',
      pagerDisplayItems: 'mr-1.5 text-slate-500',
      itemsDisplay: '',
      showPageRange: '',
      totalCount: '',
      control:
        '[&>svg]:w-5 [&>svg]:h-5 text-slate-200 light:text-slate-400 disabled:light:text-slate-300',
      firstPage: '',
      prevPage: '',
      lastPage: '',
      nextPage: ''
    },
    popover: {
      base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel text-text-primary',
      disablePadding: 'p-0'
    },
    radio: {
      base: 'box-border leading-none group',
      radio: {
        base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-[100%] bg-transparent border cursor-pointer border-surface group-hover:border-primary-hover hover:border-primary-hover',
        disabled: 'cursor-not-allowed border-secondary-inactive!',
        checked: 'border-primary-active group-hover:border-primary-hover'
      },
      indicator: {
        base: 'rounded-[100%] bg-primary group-hover:bg-primary-hover',
        disabled: 'cursor-not-allowed bg-secondary-inactive!',
        sizes: {
          small: 'w-2 h-2',
          medium: 'w-2.5 h-2.5',
          large: 'w-3.5 h-3.5'
        }
      },
      label: {
        base: 'w-full align-middle ml-2.5 text-text-secondary',
        clickable: 'cursor-pointer hover:text-blue-300',
        disabled: 'cursor-not-allowed text-secondary-inactive/40!',
        checked: 'text-text-primary'
      },
      sizes: {
        small: 'w-3 h-3',
        medium: 'w-4 h-4',
        large: 'w-5 h-5'
      }
    },
    range: {
      base: 'relative box-border w-full h-0.5 bg-surface light:bg-gray-200',
      drag: 'absolute w-4 h-4 -left-2 -top-2 rounded-full',
      inputWrapper: {
        base: 'cursor-pointer inline-block relative h-full w-full rounded-full bg-primary-active hover:bg-primary-hover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.20)]',
        disabled:
          'cursor-not-allowed bg-secondary-inactive hover:bg-secondary-inactive'
      },
      rangeHighlight: {
        base: 'pointer-events-none h-0.5 bg-primary-active',
        disabled: 'cursor-not-allowed bg-secondary-inactive'
      },
      disabled: 'cursor-not-allowed',
      input: 'absolute left-[-9999px]',
      tooltip:
        'absolute top-[-45px] whitespace-nowrap text-center left-2/4 rounded-lg p-2.5 text-text-primary bg-surface'
    },
    redact: {
      base: 'cursor-text text-text-primary',
      interactive: 'cursor-pointer hover:underline'
    },
    sort: {
      base: 'cursor-pointer select-none flex items-center relative text-text-primary',
      disabled: 'cursor-[initial]',
      hasValue: 'cursor-not-allowed',
      icon: {
        base: 'w-4 h-4 align-middle mx-1.5 fill-current',
        ascending: 'rotate-180'
      }
    },
    select: {
      selectInput: {
        base: 'flex flex-nowrap items-center box-border border rounded-sm bg-panel text-text-primary border-panel-accent border-solid hover:border-panel-accent light:hover:border-panel-accent',
        container: 'relative',
        inputContainer:
          'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden',
        input:
          'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-disabled',
        placeholder: 'placeholder:text-secondary-content',
        prefix: 'overflow-hidden whitespace-nowrap text-ellipsis',
        suffix: {
          container: 'flex items-center justify-center',
          button: 'disabled:cursor-not-allowed hover:cursor-pointer',
          refresh: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
          loader: 'mr-2.5',
          close: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
          expand: '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary'
        },
        disabled:
          'cursor-not-allowed text-disabled hover:after:content-none text-text-secondary/40 border-surface light:hover:border-surface',
        unfilterable: 'caret-transparent',
        error: 'border border-solid border-error light:border-error/20',
        open: 'rounded-sm rounded-ee-none rounded-es-none',
        single: {
          prefix: 'overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
          inputContainer: 'flex-nowrap',
          input: 'max-w-full'
        },
        multiple: {
          prefix: 'contents',
          inputContainer: 'flex-wrap'
        },
        chip: {
          base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded-sm border-solid border-transparent [&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40',
          hover: 'hover:brightness-150',
          focused:
            'focused:border-transparent focused:outline-none border-panel-accent',
          disabled: 'disabled:cursor-not-allowed',
          removeButton:
            'cursor-pointer leading-0 ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none [&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40'
        },
        size: {
          small: 'py-1 px-2 text-sm min-h-8',
          medium: 'py-2 px-3 text-base min-h-[35px]',
          large: 'py-2 px-3 text-lg min-h-[42px]'
        }
      },
      selectMenu: {
        base: 'border border-solid rounded-b-md text-center will-change-[transform,opacity] min-w-[112px] max-h-[300px] overflow-y-auto text-left box-border bg-panel text-text-primary border-panel-accent border-t-transparent',
        groupItem: {
          base: 'p-0 border-0 first:pt-2 last:pb-2',
          title: 'font-bold uppercase m-0 px-1.5 py-2.5 text-text-primary',
          size: {
            small: 'px-2.5 text-sm',
            medium: 'px-3 text-sm',
            large: 'px-3.5 text-base'
          }
        },
        option: {
          base: 'flex-1 whitespace-break-spaces break-words py-1.5 px-2.5 text-text-secondary',
          hover:
            'hover:bg-vulcan hover:text-mystic light:hover:bg-vulcan/5 light:hover:text-text-secondary',
          selected: 'text-primary-active',
          active: 'bg-vulcan hover:text-mystic',
          disabled: '',
          checkIcon: 'ml-1',
          content: 'flex flex-row justify-between'
        },
        size: {
          small: 'px-2.5 py-1.5 text-sm',
          medium: 'px-4 py-2 text-base',
          large: 'px-5 py-3 text-lg'
        }
      }
    },
    stack: {
      base: 'flex items-center gap-2.5 text-text-primary',
      dense: 'gap-1',
      inline: 'inline-flex',
      direction: {
        row: 'flex-row',
        column: 'flex-col',
        rowReverse: 'flex-row-reverse',
        columnReverse: 'flex-col-reverse'
      },
      alignItems: {
        start: 'items-start',
        end: 'items-end',
        center: 'items-center',
        stretch: 'items-stretch'
      },
      justifyContent: {
        start: 'justify-start',
        end: 'justify-end',
        center: 'justify-center',
        spaceBetween: 'justify-between'
      }
    },
    stepper: {
      base: 'grid grid-cols-[min-content_1fr] gap-x-3',
      step: {
        base: 'border-l border-solid border-panel-accent translate-x-1/2',
        marker: {
          base: 'rounded-full w-[9px] h-[9px] bg-surface',
          container:
            'w-max pt-1 pb-0.5 backdrop-blur-md -translate-x-[calc(50%+0.5px)]',
          active: 'bg-info',
          label: {
            base: 'flex flex-row items-center gap-1 border border-solid border-surface px-3 py-1 rounded-[20px]',
            active: 'border-info bg-info-background'
          }
        },
        active: 'border-primary',
        content: 'pb-6'
      }
    },
    tabs: {
      base: 'flex flex-col',
      list: {
        base: 'flex text-center flex-wrap -mb-px',
        indicator: {
          base: 'bg-primary absolute bottom-0 left-0 right-0',
          size: {
            small: 'h-0.5',
            medium: 'h-0.5',
            large: 'h-1'
          }
        },
        divider: 'w-full h-px border-0',
        variant: {
          primary: {
            divider: 'bg-surface'
          },
          secondary: {
            divider:
              'bg-linear-to-r from-transparent to-transparent via-primary'
          }
        },
        tab: {
          base: 'relative',
          button:
            'transition-colors text-text-secondary font-bold hover:text-primary-hover',
          selected: 'text-text-primary',
          disabled: 'cursor-not-allowed opacity-40',
          size: {
            small: 'pb-1 text-sm',
            medium: 'pb-2 text-lg',
            large: 'pb-4 text-xl'
          }
        }
      },
      panel: 'mt-2'
    },
    textarea: {
      input:
        'resize-none read-only:cursor-not-allowed flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-disabled placeholder-accent',
      base: 'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs bg-panel border border-panel-accent text-text-primary hover:border-panel-accent light:hover:border-panel-accent disabled-within:hover:after:content-none',
      disabled:
        'text-waterloo cursor-not-allowed disabled-within:bg-dark-disabled disabled-within:after:content-none',
      fullWidth: 'w-full',
      error: 'border-error',
      sizes: {
        small: '[&>input]:text-sm p-1 text-sm',
        medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
        large: '[&>input]:text-lg p-5 text-lg'
      }
    },
    toggle: {
      base: 'flex items-center justify-start cursor-pointer bg-surface box-border border border-panel-accent rounded-full hover:bg-primary-hover transition-[background-color] ease-in-out duration-300',
      disabled: 'cursor-not-allowed bg-transparent hover:bg-transparent',
      checked: 'justify-end bg-primary',
      disabledAndChecked:
        'bg-secondary-inactive hover:bg-secondary-inactive light:bg-gray-400 light:hover:bg-gray-400',
      handle: {
        base: 'rounded-full bg-panel',
        sizes: {
          small: 'w-3 h-full',
          medium: 'w-5 h-full',
          large: 'w-6 h-full'
        },
        disabled: 'bg-secondary-inactive light:bg-gray-400',
        disabledAndChecked: 'bg-black light:bg-white'
      },
      sizes: {
        small: 'w-8 h-4 p-px',
        medium: 'w-12 h-6 p-px',
        large: 'w-16 h-7 p-px'
      }
    },
    tooltip: {
      base: 'whitespace-nowrap text-center will-change-[transform,opacity] p-1.5 rounded-sm bg-panel-accent text-text-primary',
      disablePointer: 'pointer-events-none'
    },
    tree: {
      base: 'relative m-0 p-0 list-none',
      tree: 'border pt-1 pb-1 px-3 border-solid border-transparent',
      arrow: 'w-3 h-3 fill-text-primary',
      node: {
        base: 'pt-0.5 m-0 list-style-none first:pt-0 last:pb-0 text-text-primary',
        collapsed: '-rotate-90',
        disabled: 'opacity-60',
        leaf: 'pl-4',
        label: '',
        button: {
          base: 'min-w-[auto] min-h-[auto] w-auto h-auto transition-transform duration-100 ease-in-out ml-0 mr-1 my-0 p-0',
          icon: 'align-middle block h-2 w-2 m-0.5 fill-text-primary'
        }
      },
      nodeBlock: 'flex items-center',
      subtree: 'relative ml-5 mr-0 mt-1 mb-0 p-0'
    },
    typography: {
      base: '',
      colors: {
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        error: 'text-error',
        info: 'text-info'
      },
      text: {
        thin: 'font-thin',
        bold: 'font-semibold',
        extraBold: 'font-extrabold',
        italic: 'italic'
      },
      variant: {},
      sub: 'text-sm font-semibold mb-0.5',
      smallHeading: 'text-base font-normal mb-1',
      secondaryHeading: 'text-3xl font-normal mb-1',
      primaryHeading: 'text-3xl font-extrabold mb-1',
      pageTitle: 'text-[40px] font-semibold mb-5',
      disableMargins: 'm-0'
    },
    verticalSpacer: {
      base: '',
      size: {
        xs: 'h-0.5',
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-5',
        xl: 'h-6',
        xxl: 'h-8'
      }
    },
    skeleton: {
      base: 'rounded-md light:bg-gray-200 dark:bg-gray-700',
      animated:
        'animate-[pulse_1.5s_ease-in-out_infinite] light:bg-gradient-to-r light:from-gray-200 light:via-gray-300 light:to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%]',
      variants: {
        text: 'h-4 w-full',
        rounded: 'rounded-full w-10 h-10',
        rectangle: 'h-24 w-full',
        square: 'w-24 h-24'
      }
    }
  }
};
