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
    sizes: {
      small: string;
      medium: string;
      large: string;
      [key: string]: string;
    };
  };
  label: {
    base: string;
    clickable: string;
    checked: string;
    disabled: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}
export const radioTheme: RadioTheme = {
  base: 'box-border leading-none group/radio',
  radio: {
    base: 'will-change-[border-color] inline-flex justify-center items-center box-border align-middle rounded-[100%] bg-transparent border cursor-pointer border-surface group-hover/radio:border-primary-hover hover:border-primary-hover',
    disabled: 'cursor-not-allowed border-secondary-inactive!',
    checked: 'border-primary-active group-hover/radio:border-primary-hover'
  },
  indicator: {
    base: 'rounded-[100%] bg-primary group-hover/radio:bg-primary-hover',
    disabled: 'cursor-not-allowed bg-secondary-inactive!',
    sizes: {
      small: 'w-2 h-2',
      medium: 'w-2.5 h-2.5',
      large: 'w-3.5 h-3.5'
    }
  },
  label: {
    base: 'w-full align-middle ml-2.5 text-text-secondary',
    clickable: 'cursor-pointer hover:text-primary-hover',
    disabled: 'cursor-not-allowed text-secondary-inactive/40!',
    checked: 'text-text-primary'
  },
  sizes: {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5'
  }
};
