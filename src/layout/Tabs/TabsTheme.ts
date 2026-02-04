interface TabVariantConfigTheme {
  divider?: string;
  button?: string;
  selected?: string;
  disabled?: string;
  indicator?: string;
}

export interface TabVariantTheme {
  primary: TabVariantConfigTheme;
  secondary: TabVariantConfigTheme;
  outlined?: TabVariantConfigTheme;
  text?: TabVariantConfigTheme;
  [key: string]: TabVariantConfigTheme;
}

export interface TabSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface TabsTheme {
  base: string;
  list: {
    base: string;
    indicator: {
      base: string;
      size: TabSizeTheme;
    };
    divider: string;
    variant: TabVariantTheme;
    tab: {
      base: string;
      button: string;
      selected: string;
      disabled: string;
      size: TabSizeTheme;
    };
  };
  panel: string;
}

export const defaultTabsTheme: TabsTheme = {
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
        divider: 'bg-linear-to-r from-transparent to-transparent via-primary'
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
};

export const unifyTabsTheme: TabsTheme = {
  base: 'flex flex-col',
  list: {
    base: 'flex text-center flex-wrap -mb-px',
    indicator: {
      base: 'transition-colors',
      size: {
        small: 'h-(--tabs-details-stroke-width-underline-sm)',
        medium: 'h-(--tabs-details-stroke-width-underline-sm)',
        large: 'h-(--tabs-details-stroke-width-underline-lg)'
      }
    },
    divider: 'w-full h-px border-0',
    variant: {
      primary: {
        button: `
          text-tabs-colors-contained-text-resting
          hover:text-tabs-colors-contained-text-hover hover:border-tabs-colors-contained-background-hover hover:bg-tabs-colors-contained-background-hover
          focus-visible:text-tabs-colors-contained-text-hover focus-visible:border-tabs-colors-contained-background-hover focus-visible:bg-tabs-colors-contained-background-hover
          [&_svg]:text-tabs-colors-contained-assets-resting hover:[&_svg]:text-tabs-colors-contained-assets-hover focus-visible:[&_svg]:text-tabs-colors-contained-assets-hover
        `,
        selected: `
          text-tabs-colors-contained-text-selected bg-tabs-colors-contained-background-selected text-tabs-colors-contained-text-selected
          hover:text-tabs-colors-contained-text-selected-hover hover:bg-tabs-colors-contained-background-selected-hover 
          focus-visible:text-tabs-colors-contained-text-selected-hover focus-visible:bg-tabs-colors-contained-background-selected-hover 
          [&_svg]:text-tabs-colors-contained-assets-selected
          hover:[&_svg]:text-tabs-colors-contained-assets-selected-hover focus-visible:[&_svg]:text-tabs-colors-contained-assets-selected-hover
        `,
        disabled:
          'disabled:text-tabs-colors-contained-text-resting hover:text-tabs-colors-contained-text-resting disabled:[&_svg]:text-tabs-colors-contained-assets-resting disabled:bg-transparent disabled:hover:bg-transparent'
      },
      secondary: {
        indicator:
          'bg-tabs-colors-underline-stroke-selected group-hover:bg-tabs-colors-underline-stroke-selected-hover absolute bottom-0 left-0 right-0',
        button: `
          text-tabs-colors-underline-text-resting border-tabs-colors-underline-background-resting border-b rounded-none
          hover:border-tabs-colors-underline-background-hover hover:text-tabs-colors-underline-text-hover
          focus-visible:text-tabs-colors-underline-text-hover
          [&_svg]:text-tabs-colors-underline-assets-resting hover:[&_svg]:text-tabs-colors-underline-assets-hover focus-visible:[&_svg]:text-tabs-colors-underline-assets-hover
        `,
        selected:
          'text-tabs-colors-underline-text-selected group-hover:text-tabs-colors-underline-text-selected-hover [&_svg]:text-tabs-colors-underline-assets-selected',
        disabled:
          'disabled:text-tabs-colors-underline-text-resting hover:text-tabs-colors-underline-text-resting disabled:[&_svg]:text-tabs-colors-underline-assets-resting'
      },
      outlined: {
        button: `
          border border-tabs-colors-outline-stroke-resting text-tabs-colors-outline-text-resting
          hover:text-tabs-colors-outline-text-hover hover:bg-tabs-colors-outline-background-hover hover:border-tabs-colors-outline-stroke-hover
          focus-visible:text-tabs-colors-outline-text-hover focus-visible:bg-tabs-colors-outline-background-hover focus-visible:border-tabs-colors-outline-stroke-hover
          [&_svg]:text-tabs-colors-outline-assets-resting hover:[&_svg]:text-tabs-colors-outline-assets-hover focus-visible:[&_svg]:text-tabs-colors-outline-assets-hover
        `,
        selected: `
          text-tabs-colors-outline-text-selected bg-tabs-colors-outline-background-selected border-tabs-colors-outline-stroke-selected
          hover:text-tabs-colors-outline-text-selected-hover hover:bg-tabs-colors-outline-background-selected-hover hover:border-tabs-colors-outline-stroke-selected-hover
          focus-visible:text-tabs-colors-outline-text-selected-hover focus-visible:bg-tabs-colors-outline-background-selected-hover focus-visible:border-tabs-colors-outline-stroke-selected-hover
          [&_svg]:text-tabs-colors-outline-assets-selected hover:[&_svg]:text-tabs-colors-outline-assets-selected-hover focus-visible:[&_svg]:text-tabs-colors-outline-assets-selected-hover
        `,
        disabled:
          'disabled:text-tabs-colors-outline-text-resting hover:text-tabs-colors-outline-text-resting disabled:[&_svg]:text-tabs-colors-outline-assets-resting disabled:bg-transparent disabled:hover:bg-transparent'
      },
      text: {
        button: `
          text-tabs-colors-text-only-text-resting
          hover:text-tabs-colors-text-only-text-hover
          focus-visible:text-tabs-colors-text-only-text-hover
          [&_svg]:text-tabs-colors-text-only-assets-resting
          hover:[&_svg]:text-tabs-colors-text-only-assets-hover
        `,
        selected: `
          text-tabs-colors-text-only-text-selected
          hover:text-tabs-colors-text-only-text-selected-hover
          focus-visible:text-tabs-colors-text-only-text-selected-hover
          [&_svg]:text-tabs-colors-text-only-assets-selected
          hover:[&_svg]:text-tabs-colors-text-only-assets-selected-hover
        `,
        disabled:
          'disabled:text-tabs-colors-text-only-text-resting hover:text-tabs-colors-text-only-text-resting disabled:[&_svg]:text-tabs-colors-text-only-assets-resting'
      }
    },
    tab: {
      base: 'group relative',
      button: 'transition-colors [&_svg]:transition-colors',
      selected: '',
      disabled: 'cursor-not-allowed opacity-40',
      size: {
        small:
          'h-(--tabs-details-height-sm) px-(--tabs-details-horizontal-padding-sm) text-xxs font-semibold',
        medium:
          'h-(--tabs-details-height-lg) px-(--tabs-details-horizontal-padding-sm) text-xs font-semibold',
        large:
          'h-(--tabs-details-height-lg) px-(--tabs-details-horizontal-padding-lg) text-sm font-semibold'
      }
    }
  },
  panel: 'mt-4'
};
