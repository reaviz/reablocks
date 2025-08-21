export interface RadioSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}
export interface RadioTheme {
  base: string;
  radio: {
    base: string;
    disabled: string;
    checked: string;
  };
  indicator: {
    base: string;
    disabled: string;
    sizes: RadioSizeTheme;
  };
  label: {
    base: string;
    clickable: string;
    checked: string;
    disabled: string;
  };
  sizes: RadioSizeTheme;
}

export const radioTheme: RadioTheme = {
  base: 'box-border leading-none group',
  radio: {
    base: `
          inline-flex justify-center items-center align-middle rounded-full box-content cursor-pointer transition-colors border focus-visible:outline-none
          bg-selectors-colors-radio-not-selected-background-resting group-hover:bg-selectors-colors-radio-not-selected-background-hover group-focus-within:bg-selectors-colors-radio-not-selected-background-hover
          border-selectors-colors-radio-not-selected-stroke-resting group-hover:border-selectors-colors-radio-not-selected-stroke-hover group-focus-within:border-selectors-colors-radio-not-selected-stroke-hover
        `,
    checked: `
          bg-selectors-colors-radio-selected-background-resting group-hover:bg-selectors-colors-radio-selected-background-hover group-focus-within:bg-selectors-colors-radio-selected-background-hover
          border-selectors-colors-radio-selected-stroke-resting group-hover:border-selectors-colors-radio-selected-stroke-hover group-focus-within:border-selectors-colors-radio-selected-stroke-hover
        `,
    disabled:
      'cursor-not-allowed opacity-40 group-hover:bg-inherit group-focus-within:bg-inherit'
  },
  indicator: {
    base: 'rounded-full bg-selectors-colors-radio-selected-assets-base',
    disabled: 'cursor-not-allowed',
    sizes: {
      small: 'size-1.5',
      medium: 'size-2',
      large: 'size-2.5'
    }
  },
  label: {
    base: 'w-full align-middle ml-3 text-selectors-colors-text-label-not-selected',
    clickable:
      'cursor-pointer group-hover:text-selectors-colors-text-label-selected group-focus-within:text-selectors-colors-text-label-selected',
    disabled: 'cursor-not-allowed opacity-40',
    checked: 'text-selectors-colors-text-label-selected'
  },
  sizes: {
    small: 'size-2.5 p-0.5',
    medium: 'size-3 p-0.5',
    large: 'size-3.5 p-0.5'
  }
};
