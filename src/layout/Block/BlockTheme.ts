export interface BlockTheme {
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

export const blockTheme: BlockTheme = {
  base: '',
  disableMargin: 'm-0',
  label:
    'text-sm leading-none font-semibold text-inputs-colors-normal-text-label-resting',
  centerAlign: 'items-center',
  endAlign: 'items-end',
  horizontal: {
    base: 'flex flex-row items-baseline',
    label: 'mr-2 whitespace-nowrap'
  },
  vertical: {
    base: 'block',
    label: 'block mb-2'
  }
};
