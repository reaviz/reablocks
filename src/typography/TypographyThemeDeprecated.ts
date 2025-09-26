export interface TypographyThemeDeprecated {
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
    [key: string]: string;
  };
  sub: string;
  smallHeading: string;
  secondaryHeading: string;
  primaryHeading: string;
  pageTitle: string;
  disableMargins?: string;
}

export const typographyThemeDeprecated = {
  text: {
    thin: 'font-thin',
    bold: 'font-semibold',
    extraBold: 'font-extrabold',
    italic: 'italic',
  },
  variant: {
    default: '',
    mono: 'font-mono',
  },
  colors: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    info: 'text-info',
  },
  sub: 'text-sm font-semibold mb-0.5',
  smallHeading: 'text-sm font-normal mb-1',
  secondaryHeading: 'text-2xl font-normal mb-1',
  primaryHeading: 'text-2xl font-extrabold mb-1',
  pageTitle: 'text-[40px] font-semibold mb-5',
  disableMargins: 'm-0',
};
