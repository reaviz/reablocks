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

export const defaultInputTheme: InputTheme = {
  base: [
    'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs bg-panel border border-panel-accent text-text-primary hover:border-panel-accent light:hover:border-panel-accent',
    'hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#242433_100%)] light:hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#E6E6F0_100%)]',
    'hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-2 hover:after:rounded-sm hover:after:-bottom-[1px] hover:after:inset-x-0.5'
  ].join(' '),
  focused: [
    'focus-within:after:bg-[radial-gradient(circle,_#93B6FF_0%,_#105EFF_36%,_#3D3D4D_90%,_#242433_100%)] light:focus-within:after:bg-[radial-gradient(circle,_#105EFF_10%,_#93B6FF_36%,_#E6E6F0_90%)]',
    'focus-within:after:content-[""] focus-within:after:absolute focus-within:after:mx-0 focus-within:after:h-px after:z-2 focus-within:after:rounded-sm focus-within:after:-bottom-[1px] focus-within:after:inset-x-0.5'
  ].join(' '),
  input:
    'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-disabled placeholder-accent',
  inline: 'bg-transparent border-0 outline-hidden',
  disabled:
    'text-waterloo cursor-not-allowed disabled-within:bg-dark-disabled disabled-within:after:content-none',
  fullWidth: 'w-full',
  error: 'border-error',
  sizes: {
    small: '[&>input]:text-sm p-1 text-sm',
    medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
    large: '[&>input]:text-lg p-5 text-lg'
  },
  adornment: {
    base: 'flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:current-color text-text-primary',
    start: 'pr-1.5',
    end: 'pl-1.5'
  }
};

export const unifyInputTheme: InputTheme = {
  base: 'group flex relative flex-row items-center flex-nowrap transition-colors rounded-(--inputs-details-corner-radius-primary) bg-inputs-colors-normal-background-resting border border-inputs-colors-normal-stroke-resting hover:border-inputs-colors-normal-stroke-hover',
  focused:
    'border-inputs-colors-normal-stroke-selected bg-inputs-colors-normal-background-selected [&_svg]:fill-inputs-colors-normal-assets-input-selected!',
  input: `
    flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden disabled:cursor-not-allowed disabled:text-content-text-neutral-5 transition-colors
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
    small: `
      h-(--inputs-details-height-input-sm)
      pl-(--inputs-details-horizontal-padding-left-sm) pr-(--inputs-details-horizontal-padding-right-sm)
      gap-(--inputs-details-space-between-horizontal-sm)
      [&>input]:text-xs [&>input]:leading-4 [&_svg]:size-(--inputs-details-asset-size-sm)
    `,
    medium: `
      h-(--inputs-details-height-input-md)
      pl-(--inputs-details-horizontal-padding-left-md) pr-(--inputs-details-horizontal-padding-right-md)
      gap-(--inputs-details-space-between-horizontal-md)
      [&>input]:text-sm [&>input]:leading-4.5 [&_svg]:size-(--inputs-details-asset-size-md)
    `,
    large: `
      h-(--inputs-details-height-input-lg)
      pl-(--inputs-details-horizontal-padding-left-lg) pr-(--inputs-details-horizontal-padding-right-lg)
      gap-(--inputs-details-space-between-horizontal-lg)
      [&>input]:text-base [&>input]:leading-6 [&_svg]:size-(--inputs-details-asset-size-lg)
    `
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
