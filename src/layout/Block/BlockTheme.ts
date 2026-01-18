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

export const defaultBlockTheme: BlockTheme = {
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

export const unifyBlockTheme: BlockTheme = {
  base: '',
  disableMargin: 'm-0',
  label: 'text-xs leading-none font-semibold text-content-text-neutral-3',
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
