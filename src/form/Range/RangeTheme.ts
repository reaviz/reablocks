export interface RangeTheme {
  /** CSS class applied to the root range track container. */
  base: string;
  /** CSS class applied to the draggable thumb handle. */
  drag: string;
  /** Class names for the highlighted (selected) portion of the range. */
  rangeHighlight: {
    base: string;
    disabled: string;
  };
  /** CSS class applied when the range is disabled. */
  disabled: string;
  /** Class names for the input wrapper element. */
  inputWrapper: {
    base: string;
    disabled: string;
  };
  /** CSS class applied to the hidden input element used for keyboard controls. */
  input: string;
  /** CSS class applied to the value tooltip shown above the handle. */
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
    'absolute top-[-45px] whitespace-nowrap text-center left-2/4 rounded-lg p-2.5'
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
