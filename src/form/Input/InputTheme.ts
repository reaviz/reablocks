export interface InputSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface InputTheme {
  base: string;
  input: string;
  inline: string;
  disabled: string;
  focused: string;
  fullWidth: string;
  error: string;
  sizes: InputSizeTheme;
  adornment: {
    base: string;
    start: string;
    end: string;
  };
}

export const inputTheme: InputTheme = {
  base: 'group flex relative flex-row items-center flex-nowrap transition-colors rounded-md border border-inputs-colors-normal-stroke-resting hover:border-inputs-colors-normal-stroke-hover',
  focused:
    'border-inputs-colors-normal-stroke-selected bg-inputs-colors-normal-background-selected [&_svg]:fill-inputs-colors-normal-assets-input-selected!',
  input: `
    flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden disabled:cursor-not-allowed disabled:text-disabled transition-colors
    placeholder:text-inputs-colors-normal-text-input-text-resting focus:placeholder:text-inputs-colors-normal-text-input-text-selected
  `,
  inline: 'bg-transparent border-0 outline-hidden',
  disabled:
    'cursor-not-allowed opacity-40 hover:border-inputs-colors-normal-stroke-resting',
  fullWidth: 'w-full',
  error: `
    border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting [&>input]:text-inputs-colors-error-text-input-filled [&>input]:placeholder:text-inputs-colors-error-text-input-text-resting
    hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
    focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
  `,
  sizes: {
    small:
      '[&>input]:text-sm [&>input]:leading-4 [&_svg]:size-4 px-2 py-[5px] gap-2',
    medium:
      '[&>input]:text-sm [&>input]:leading-4.5 [&_svg]:size-4.5 px-3 py-[7px] gap-2',
    large:
      '[&>input]:text-md [&>input]:leading-6 [&_svg]:size-6 px-3 py-[7px] gap-2'
  },
  adornment: {
    base: `
      flex items-center justify-center transition-colors
      [&>svg]:fill-inputs-colors-normal-assets-input-resting group-hover:[&>svg]:fill-inputs-colors-normal-assets-input-hover
    `,
    start: '',
    end: ''
  }
};
