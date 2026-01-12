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

export const unifyRangeTheme: RangeTheme = {
  base: `
        group relative box-border w-full h-1 rounded-sm transition-colors
        bg-selectors-colors-range-bar-background-base hover:bg-selectors-colors-range-bar-background-hover focus-within:bg-selectors-colors-range-bar-background-active
      `,
  drag: `
        absolute size-4 -left-1.5 -top-1.5 rounded-sm border
        border-selectors-colors-range-handles-stroke-resting hover:selectors-colors-range-handles-stroke-hover focus-visible:selectors-colors-range-handles-stroke-active
        bg-selectors-colors-range-handles-background-resting hover:selectors-colors-range-handles-background-hover focus-visible:hover:selectors-colors-range-handles-background-active
      `,
  inputWrapper: {
    base: 'cursor-pointer inline-block relative size-full',
    disabled: 'cursor-not-allowed'
  },
  rangeHighlight: {
    base: 'pointer-events-none h-1 bg-selectors-colors-range-bar-background-active-section rounded-sm',
    disabled: 'cursor-not-allowed'
  },
  disabled:
    'cursor-not-allowed opacity-40 disabled:bg-selectors-colors-range-bar-background-base!',
  input: 'absolute left-[-9999px]',
  tooltip:
    'absolute top-[-45px] whitespace-nowrap text-center text-xs font-semibold left-2/4 rounded-sm p-2 bg-tooltip-colors-neutral-background-default text-tooltip-colors-neutral-text-default'
};

export const defaultRangeTheme: RangeTheme = {
  base: 'relative box-border w-full h-0.5 bg-surface light:bg-gray-200',
  drag: 'absolute w-4 h-4 -left-2 -top-2 rounded-full',
  inputWrapper: {
    base: 'cursor-pointer inline-block relative h-full w-full rounded-full bg-primary-active hover:bg-primary-hover shadow-[0px_4px_4px_0px_rgba(0,0,0,0.20)]',
    disabled:
      'cursor-not-allowed bg-secondary-inactive hover:bg-secondary-inactive'
  },
  rangeHighlight: {
    base: 'pointer-events-none h-0.5 bg-primary-active',
    disabled: 'cursor-not-allowed bg-secondary-inactive'
  },
  disabled: 'cursor-not-allowed',
  input: 'absolute left-[-9999px]',
  tooltip:
    'absolute top-[-45px] whitespace-nowrap text-center left-2/4 rounded-lg p-2.5 text-text-primary bg-surface'
};
export const rangeTheme = defaultRangeTheme;
