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
    [key: string]: string;
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
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    error: 'text-error',
    info: 'text-info'
  },
  sub: 'text-sm font-semibold mb-0.5',
  smallHeading: 'text-base font-normal mb-1',
  secondaryHeading: 'text-3xl font-normal mb-1',
  primaryHeading: 'text-3xl font-extrabold mb-1',
  pageTitle: 'text-[40px] font-semibold mb-5',
  disableMargins: 'm-0'
};

export const typographyTheme = {
  ...baseTheme
};

export const legacyTypographyTheme = {
  ...baseTheme,
  colors: {
    primary: 'text-[var(--primary-color)]',
    secondary: 'text-[var(--secondary-color)]',
    success: 'text-[var(--success-color)]',
    warning: 'text-[var(--warning-color)]',
    error: 'text-[var(--error-color)]',
    info: 'text-[var(--info-color)]'
  },
  pageTitle:
    '[font-family:_var(--font-family)] [font-size:_var(--page-title-font-size)] [font-weight:_var(--page-title-font-weight)] color-[var(--page-title-color)] m-[var(--page-title-margin)]',
  primaryHeading:
    '[font-family:_var(--font-family)] [font-size:_var(--primary-heading-font-size)] [font-weight:_var(--primary-heading-font-weight)] text-[var(--primary-heading-color)] m-[var(--primary-heading-margin)]',
  secondaryHeading:
    '[font-family:_var(--font-family)] [font-size:_var(--secondary-heading-font-size)] [font-weight:_var(--secondary-heading-font-weight)] text-[var(--secondary-heading-color)] m-[var(--secondary-heading-margin)]',
  smallHeading:
    '[font-family:_var(--font-family)] [font-size:_var(--small-heading-font-size)] [font-weight:_var(--small-heading-font-weight)] text-[var(--small-heading-color)] m-[var(--small-heading-margin)]',
  sub: '[font-size:_var(--sub-font-size)] [font-weight:_var(--sub-font-weight)] text-[var(--sub-color)] m-[var(--sub-margin)]',
  text: {
    ...baseTheme.text,
    thin: '[font-weight:_var(--font-weight-thin)]',
    bold: '[font-weight:_var(--font-weight-bold)]',
    extraBold: '[font-weight:_var(--font-weight-extraBold)]'
  }
};
