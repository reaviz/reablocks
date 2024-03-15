export interface TypographyTheme {
  base?: string;
  text?: {
    thin?: string;
    bold?: string;
    extraBold?: string;
    italic?: string;
  };
  variant?: {
    default?: string;
    mono?: string;
  };
  colors?: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    info: string;
  };
  sub: string;
  smallHeading: string;
  secondaryHeading: string;
  primaryHeading: string;
  pageTitle: string;
  disableMargins?: string;
}

const baseTheme: TypographyTheme = {
  text: {
    thin: 'font-thin',
    bold: 'font-semibold',
    extraBold: 'font-extrabold',
    italic: 'italic'
  },
  variant: {
    default: '',
    mono: 'font-mono'
  },
  colors: {
    primary: 'text-primary-800',
    secondary: 'text-secondary-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
    info: 'text-info-500'
  },
  sub: 'text-xs font-semibold mb-0.5',
  smallHeading: 'text-base font-normal mb-1',
  secondaryHeading: 'text-3xl font-normal mb-1',
  primaryHeading: 'text-3xl font-extrabold mb-1',
  pageTitle: 'text-[40px] font-semibold mb-5',
  disableMargins: 'ml-0 mr-0 mb-0 mt-0'
};

export const lightTypographyTheme = {
  ...baseTheme
};

export const darkTypographyTheme = {
  ...baseTheme
};
