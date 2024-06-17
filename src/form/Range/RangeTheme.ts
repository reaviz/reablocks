export interface RangeTheme {
  base: string;
  drag: string;
  rangeHighlight: {
    base: string;
    disabled: string;
  };
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
  drag: 'absolute w-4 h-4 -left-2 -top-2 rounded-full',
  inputWrapper: {
    base: 'cursor-pointer inline-block relative h-full w-full rounded-full',
    disabled: 'cursor-not-allowed'
  },
  rangeHighlight: {
    base: 'pointer-events-none h-0.5',
    disabled: 'cursor-not-allowed'
  },
  disabled: 'cursor-not-allowed',
  input: 'absolute left-[-9999px]', // The hidden input used for keyboard controls
  tooltip:
    'absolute top-[-45px] -translate-x-2/4 whitespace-nowrap text-center left-2/4 rounded-lg p-2.5'
};

export const rangeTheme: RangeTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-surface light:bg-gray-200'].join(' '),
  inputWrapper: {
    ...baseTheme.inputWrapper,
    base: [
      baseTheme.inputWrapper.base,
      'bg-primary-active hover:bg-primary-hover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.20)]'
    ].join(' '),
    disabled: [
      baseTheme.inputWrapper.disabled,
      'bg-secondary-inactive hover:bg-secondary-inactive'
    ].join(' ')
  },
  rangeHighlight: {
    base: [baseTheme.rangeHighlight.base, 'bg-primary-active'].join(' '),
    disabled: [baseTheme.rangeHighlight.disabled, 'bg-secondary-inactive'].join(
      ' '
    )
  },
  tooltip: [baseTheme.tooltip, 'text-text-primary bg-surface'].join(' ')
};

export const legacyRangeTheme: RangeTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'h-[var(--range-track-size)] bg-[var(--range-track-background)] rounded-[var(--range-track-border-radius)]'
  ].join(' '),
  drag: [
    baseTheme.drag,
    'top-[calc(-1_*_(var(--range-handle-size)_-_var(--range-track-size))_/_2)] left-[calc(-1_*_var(--range-handle-size)_/_2)] w-[var(--range-handle-size)] h-[var(--range-handle-size)] bg-[var(--range-handle-background)] rounded-[var(--range-handle-border-radius)]'
  ].join(' '),
  rangeHighlight: {
    ...baseTheme.rangeHighlight,
    base: [
      baseTheme.rangeHighlight.base,
      'h-[var(--range-track-size)] bg-[var(--range-track-active-background)]'
    ].join(' ')
  },
  tooltip: [
    baseTheme.tooltip,
    'rounded-[var(--border-radius-md)] [padding:_var(--spacing-md)] bg-[var(--tooltip-background)] text-[var(--tooltip-color)]'
  ].join(' ')
};
