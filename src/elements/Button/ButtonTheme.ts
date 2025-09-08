export interface ButtonVariantTheme {
  filled: string;
  outline: string;
  text: string;
  ghost: string;
  [key: string]: string;
}

export interface ButtonSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface ButtonColorTheme {
  primary: ButtonVariantTheme;
  secondary: ButtonVariantTheme;
  destructive: ButtonVariantTheme;
  [key: string]: ButtonVariantTheme;
}

export interface ButtonTheme {
  base: string;
  disabled: string;
  fullWidth: string;
  group: string;
  groupText: string;
  adornment: {
    base: string;
    start: string;
    end: string;
    sizes: ButtonSizeTheme;
  };
  variants: ButtonVariantTheme;
  colors: ButtonColorTheme;
  sizes: ButtonSizeTheme;
  iconSizes: ButtonSizeTheme;
}

export const buttonTheme: ButtonTheme = {
  base: `
    inline-flex items-center justify-center px-2.5 py-1 rounded-xs font-sans 
    cursor-pointerfont-semibold whitespace-nowrap 
    rounded-md font-semibold cursor-pointer select-none transition-colors [&_svg]:transition-all focus-visible:outline-none
  `,
  disabled: `
    disabled:opacity-40 disabled:cursor-not-allowed 
  `,
  fullWidth: 'flex w-full',
  group:
    'rounded-none first:rounded-s last:rounded-e border-s-0 first:border-s',
  groupText:
    'border border-y-transparent border-l-transparent last:border-r-transparent hover:bg-initial',
  adornment: {
    base: 'flex',
    start: 'pr-2',
    end: 'pl-2',
    sizes: {
      small: '[&>svg]:size-4',
      medium: '[&>svg]:size-4',
      large: '[&>svg]:size-4.5'
    }
  },
  sizes: {
    small: 'text-xs leading-4 px-2 py-1.5',
    medium: 'text-sm leading-4 px-3 py-2',
    large: 'text-base leading-4.5 px-4 py-2.5'
  },
  iconSizes: {
    xsmall: '[&>svg]:size-4 p-1',
    small: '[&>svg]:size-4 p-[5px]',
    medium: '[&>svg]:size-4 p-[7px]',
    large: '[&>svg]:size-4.5 p-2.5'
  },
  variants: {
    filled: 'bg-secondary hover:bg-border-secondary-hover',
    outline: 'border',
    text: 'border-0',
    ghost: ''
  },
  colors: {
    primary: {
      filled: `
        bg-buttons-colors-core-icon-primary-background-resting border-buttons-colors-core-icon-primary-stroke-resting text-buttons-colors-core-icon-primary-text-resting [&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
        hover:bg-buttons-colors-core-icon-primary-background-hover hover:border-buttons-colors-core-icon-primary-stroke-hover hover:text-buttons-colors-core-icon-primary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-primary-assets-hover
        focus-visible:bg-buttons-colors-core-icon-primary-background-selected focus-visible:border-buttons-colors-core-icon-primary-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-primary-assets-selected
        disabled:bg-buttons-colors-core-icon-primary-background-resting disabled:border-buttons-colors-core-icon-primary-stroke-resting disabled:text-buttons-colors-core-icon-primary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-primary-assets-resting
      `,
      outline: `
        bg-buttons-colors-core-icon-outline-background-resting border-buttons-colors-core-icon-outline-stroke-resting text-buttons-colors-core-icon-outline-text-resting [&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
        hover:bg-buttons-colors-core-icon-outline-background-hover hover:border-buttons-colors-core-icon-outline-stroke-hover hover:text-buttons-colors-core-icon-outline-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-outline-assets-hover
        focus-visible:bg-buttons-colors-core-icon-outline-background-selected focus-visible:border-buttons-colors-core-icon-outline-stroke-selected focus-visible:text-buttons-colors-core-icon-outline-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-outline-assets-selected
        disabled:bg-buttons-colors-core-icon-outline-background-resting disabled:border-buttons-colors-core-icon-outline-stroke-resting disabled:text-buttons-colors-core-icon-outline-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-outline-assets-resting
      `,
      text: `
        text-buttons-colors-link-primary-text-resting hover:text-buttons-colors-link-primary-text-hover focus-visible:text-buttons-colors-link-primary-text-selected
        [&_svg]:fill-buttons-colors-link-primary-assets-resting hover:[&_svg]:fill-buttons-colors-link-primary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-primary-assets-selected
        disabled:text-buttons-colors-link-primary-text-resting disabled:[&_svg]:fill-buttons-colors-link-primary-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-ghost-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-ghost-background-selected focus-visible:border-buttons-colors-core-icon-ghost-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `
    },
    secondary: {
      filled: `
        bg-buttons-colors-core-icon-secondary-background-resting border-buttons-colors-core-icon-secondary-stroke-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
        hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-secondary-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover
        focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected
        disabled:bg-buttons-colors-core-icon-secondary-background-resting disabled:border-buttons-colors-core-icon-secondary-stroke-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
      `,
      outline: `
        border-buttons-colors-core-icon-secondary-background-resting text-buttons-colors-core-icon-secondary-text-resting [&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
        hover:border-buttons-colors-core-icon-secondary-background-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-hover
        focus-visible:border-buttons-colors-core-icon-secondary-background-selected focus-visible:text-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-selected
        disabled:border-buttons-colors-core-icon-secondary-background-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-secondary-assets-resting
      `,
      text: `
        text-buttons-colors-link-secondary-text-resting hover:text-buttons-colors-link-secondary-text-hover focus-visible:text-buttons-colors-link-secondary-text-selected
        [&_svg]:fill-buttons-colors-link-secondary-assets-resting hover:[&_svg]:fill-buttons-colors-link-secondary-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-secondary-assets-selected
        disabled:text-buttons-colors-link-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-link-secondary-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-secondary-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-secondary-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-secondary-background-selected focus-visible:border-buttons-colors-core-icon-secondary-stroke-selected focus-visible:-buttons-colors-core-icon-secondary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-secondary-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `
    },
    destructive: {
      filled: `
        bg-buttons-colors-core-icon-destructive-background-resting border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-core-icon-destructive-text-resting [&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-core-icon-destructive-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-primary-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-selected
        disabled:bg-buttons-colors-core-icon-destructive-background-resting disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-core-icon-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-destructive-assets-resting
      `,
      outline: `
        border-buttons-colors-core-icon-destructive-stroke-resting text-buttons-colors-link-destructive-text-resting [&_svg]:fill-buttons-colors-link-destructive-assets-resting
        hover:border-buttons-colors-core-icon-destructive-stroke-hover hover:text-buttons-colors-link-destructive-text-hover hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover
        focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-link-destructive-text-selected focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:border-buttons-colors-core-icon-destructive-stroke-resting disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      text: `
        text-buttons-colors-link-destructive-text-resting hover:text-buttons-colors-link-destructive-text-hover focus-visible:text-buttons-colors-link-destructive-text-selected
        [&_svg]:fill-buttons-colors-link-destructive-assets-resting hover:[&_svg]:fill-buttons-colors-link-destructive-assets-hover focus-visible:[&_svg]:fill-buttons-colors-link-destructive-assets-selected
        disabled:text-buttons-colors-link-destructive-text-resting disabled:[&_svg]:fill-buttons-colors-link-destructive-assets-resting
      `,
      ghost: `
        bg-buttons-colors-core-icon-ghost-background-resting border-buttons-colors-core-icon-ghost-stroke-resting text-buttons-colors-core-icon-ghost-text-resting [&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
        hover:bg-buttons-colors-core-icon-destructive-background-hover hover:border-buttons-colors-core-icon-ghost-stroke-hover hover:text-buttons-colors-core-icon-ghost-text-hover hover:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-hover
        focus-visible:bg-buttons-colors-core-icon-destructive-background-selected focus-visible:border-buttons-colors-core-icon-destructive-stroke-selected focus-visible:text-buttons-colors-core-icon-ghost-text-selected focus-visible:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-selected
        disabled:bg-buttons-colors-core-icon-ghost-background-resting disabled:border-buttons-colors-core-icon-ghost-stroke-resting disabled:text-buttons-colors-core-icon-ghost-text-resting disabled:[&_svg]:fill-buttons-colors-core-icon-ghost-assets-resting
      `
    }
  }
};
