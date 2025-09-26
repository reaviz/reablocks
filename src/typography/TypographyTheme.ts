export interface TypographySize {
  small?: string;
  medium?: string;
  large?: string;
  [key: string]: string;
}

export interface TypographyWeight {
  thin?: string;
  extralight?: string;
  light?: string;
  regular?: string;
  medium?: string;
  semibold?: string;
  bold?: string;
  extrabold?: string;
  black?: string;
  [key: string]: string;
}

export interface TypographyColor {
  primary?: string;
  secondary?: string;
  [key: string]: string;
}

interface TypographyVariant {
  base?: string;
  size?: TypographySize;
}

export interface TypographyTheme {
  base: string;
  color?: TypographyColor;
  weight?: TypographyWeight;
  variant: {
    h1?: TypographyVariant;
    h2?: TypographyVariant;
    h3?: TypographyVariant;
    h4?: TypographyVariant;
    h5?: TypographyVariant;
    h6?: TypographyVariant;
    body?: TypographyVariant;
    label?: TypographyVariant;
    button?: TypographyVariant;
    monospace?: TypographyVariant;
    [key: string]: TypographyVariant;
  };
}

export const typographyTheme: TypographyTheme = {
  base: '',
  color: {
    primary: 'text-content-text-neutral-base',
    secondary: 'text-content-text-neutral-2',
  },
  weight: {
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  },
  variant: {
    h1: {
      base: 'font-sans text-8xl font-normal',
    },
    h2: {
      base: 'font-sans text-6xl font-normal',
    },
    h3: {
      base: 'font-sans text-4xl font-normal',
    },
    h4: {
      base: 'font-sans text-2xl font-normal',
    },
    h5: {
      base: 'font-sans text-lg font-normal',
    },
    h6: {
      base: 'font-sans text-base font-normal',
    },
    body: {
      base: 'font-serif text-sm font-normal',
      size: {
        large: 'text-base leading-6',
        small: 'text-xs leading-3.5',
      },
    },
    button: {
      base: 'font-serif text-sm font-semibold',
      size: {
        large: 'text-base',
        small: 'text-xs',
      },
    },
    label: {
      base: 'font-serif text-xs font-semibold',
      size: {
        large: 'text-sm',
        small: 'text-xxs',
      },
    },
    monospace: {
      base: 'font-mono font-medium text-xxs',
    },
  },
};
