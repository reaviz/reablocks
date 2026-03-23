export interface FieldTheme {
  base: string;
  disableMargin: string;
  label: string;
  centerAlign: string;
  endAlign: string;
  horizontal: {
    base: string;
    label: string;
    content: string;
  };
  vertical: {
    base: string;
    label: string;
  };
  hint: string;
  error: string;
  errorState: string;
}

const baseTheme: FieldTheme = {
  base: 'mb-2.5',
  disableMargin: 'mb-0',
  label: 'text-sm',
  centerAlign: 'items-center',
  endAlign: 'items-end',
  horizontal: {
    base: 'flex flex-row items-baseline',
    label: 'mr-0.5 whitespace-nowrap',
    content: 'flex-1 min-w-0'
  },
  vertical: {
    base: 'block',
    label: 'block mb-0.5'
  },
  hint: 'text-xs text-text-secondary mt-1',
  error: 'text-xs text-error mt-1',
  errorState: ''
};

export const defaultFieldTheme: FieldTheme = {
  ...baseTheme
};

export const unifyFieldTheme: FieldTheme = {
  ...baseTheme
};
