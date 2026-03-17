export interface FieldTheme {
  base: string;
  disableMargin: string;
  label: string;
  centerAlign: string;
  endAlign: string;
  horizontal: {
    base: string;
    label: string;
  };
  vertical: {
    base: string;
    label: string;
  };
}

const baseTheme: FieldTheme = {
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
};

export const fieldTheme: FieldTheme = {
  ...baseTheme
};
