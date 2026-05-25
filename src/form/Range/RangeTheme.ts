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

export const rangeTheme: RangeTheme = {
  base: 'relative box-border w-full h-0.5 bg-panel-accent',
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
