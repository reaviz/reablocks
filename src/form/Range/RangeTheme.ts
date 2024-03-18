export interface RangeTheme {
  base: string;
  drag: string;
  rangeHighlight: string;
  disabled: string;
  inputWrapper: {
    base: string;
    disabled: string;
  };
  input: string;
  tooltip: string;
}

const baseTheme: RangeTheme = {
  base: 'relative box-border w-full h-0.5',
  drag: 'absolute w-3.5 h-3.5 -left-[7px] -top-[7px] rounded-full',
  inputWrapper: {
    base: 'cursor-pointer inline-block relative h-full w-full rounded-full',
    disabled: 'cursor-not-allowed'
  },
  rangeHighlight: 'pointer-events-none h-0.5',
  disabled: 'cursor-not-allowed opacity-60',
  input: 'absolute left-[-9999px]', // The hidden input used for keyboard controls
  tooltip:
    'absolute top-[-45px] -translate-x-2/4 whitespace-nowrap text-center left-2/4 rounded-lg p-2.5'
};

export const lightRangeTheme: RangeTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-zinc-400'].join(' '),
  inputWrapper: {
    ...baseTheme.inputWrapper,
    base: [baseTheme.inputWrapper.base, 'bg-primary-500'].join(' ')
  },
  rangeHighlight: [baseTheme.rangeHighlight, 'bg-primary-500'].join(' '),
  tooltip: [baseTheme.tooltip, 'text-black bg-light-background'].join(' ')
};

export const darkRangeTheme: RangeTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-zinc-700'].join(' '),
  inputWrapper: {
    ...baseTheme.inputWrapper,
    base: [baseTheme.inputWrapper.base, 'bg-primary-600'].join(' ')
  },
  rangeHighlight: [baseTheme.rangeHighlight, 'bg-primary-600'].join(' '),
  tooltip: [baseTheme.tooltip, 'text-white bg-dark-background'].join(' ')
};

export const cssVarsRangeTheme: RangeTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'h-[var(--range-track-size)] bg-[var(--range-track-background)] rounded-[var(--range-track-border-radius)]'
  ].join(' '),
  drag: [
    baseTheme.drag,
    'top-[calc(-1_*_(var(--range-handle-size)_-_var(--range-track-size))_/_2)] left-[calc(-1_*_var(--range-handle-size)_/_2)] w-[var(--range-handle-size)] h-[var(--range-handle-size)] bg-[var(--range-handle-background)] rounded-[var(--range-handle-border-radius)]'
  ].join(' '),
  rangeHighlight: [
    baseTheme.rangeHighlight,
    'h-[var(--range-track-size)] bg-[var(--range-track-active-background)]'
  ].join(' '),
  tooltip: [
    baseTheme.tooltip,
    'rounded-[var(--border-radius-md)] [padding:_var(--spacing-md)] bg-[var(--tooltip-background)] text-[var(--tooltip-color)]'
  ].join(' ')
};
