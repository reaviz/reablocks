export interface TypographySize {
  small?: string;
  medium?: string;
  large?: string;
  monospace?: string;
  [key: string]: string;
}

export interface TypographyWeight {
  regular?: string;
  medium?: string;
  bold?: string;
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
    [key: string]: TypographyVariant;
  };
}

export const typographyTheme: TypographyTheme = {
  base: '',
  color: {
    primary: 'text-content-text-neutral-base',
    secondary: 'text-content-text-neutral-2'
  },
  weight: {
    medium: 'font-medium',
    bold: 'font-bold'
  },
  variant: {
    h1: {
      base: 'font-sans text-5xl font-normal leading-12'
    },
    h2: {
      base: 'font-sans text-4xl font-normal leading-9'
    },
    h3: {
      base: 'font-sans text-3xl font-normal leading-8'
    },
    h4: {
      base: 'font-sans text-2xl font-normal leading-7'
    },
    h5: {
      base: 'font-sans text-xl font-normal leading-6'
    },
    h6: {
      base: 'font-sans text-lg font-normal leading-6'
    },
    body: {
      base: 'font-serif text-base font-normal leading-4.5',
      size: {
        large: 'text-lg leading-6',
        small: 'text-sm leading-3.5'
      }
    },
    button: {
      base: 'font-serif text-base font-semibold leading-4.5',
      size: {
        large: 'text-lg leading-6',
        small: 'text-sm leading-3.5'
      }
    },
    label: {
      base: 'font-serif text-sm font-semibold leading-3',
      size: {
        large: 'text-md leading-3.5',
        small: 'text-xs',
        monospace: 'font-mono font-medium text-xs'
      }
    }
  }
};
