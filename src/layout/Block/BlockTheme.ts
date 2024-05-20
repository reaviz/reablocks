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

const baseTheme: BlockTheme = {
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

export const blockTheme: BlockTheme = {
  ...baseTheme
};

export const legacyBlockTheme: BlockTheme = {
  ...baseTheme,
  base: 'mb-[var(--block-spacing)]',
  label: [
    baseTheme.label,
    '[font-size:_var(--block-label-size)] [font-weight:_var(--block-label-weight)]'
  ].join(' '),
  horizontal: {
    ...baseTheme.horizontal,
    label: [baseTheme.horizontal.label, 'mr-[var(--block-label-spacing)]'].join(
      ' '
    )
  },
  vertical: {
    ...baseTheme.vertical,
    label: [baseTheme.vertical.label, 'mb-[var(--block-label-spacing)]'].join(
      ' '
    )
  }
};
