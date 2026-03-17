export interface InputTheme {
  base: string;
  input: string;
  inline: string;
  disabled: string;
  focused: string;
  fullWidth: string;
  error: string;
  sizes: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
  adornment: {
    base: string;
    start: string;
    end: string;
  };
}

const baseTheme: InputTheme = {
  base: 'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs',
  focused: '',
  input:
    'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-disabled',
  inline: 'bg-transparent border-0 outline-hidden',
  disabled: 'text-waterloo cursor-not-allowed',
  fullWidth: 'w-full',
  error: 'border-error',
  sizes: {
    small: '[&>input]:text-sm p-1 text-sm',
    medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
    large: '[&>input]:text-lg p-5 text-lg'
  },
  adornment: {
    base: 'flex items-center justify-center [&>svg]:w-4 [&>svg]:h-4 [&>svg]:current-color',
    start: 'pr-1.5',
    end: 'pl-1.5'
  }
};

export const inputTheme: InputTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-panel border border-panel-accent text-text-primary hover:border-panel-accent light:hover:border-panel-accent',
    'hover:after:bg-[image:var(--input-glow-hover)]',
    'hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-2 hover:after:rounded-sm hover:after:-bottom-[1px] hover:after:inset-x-0.5'
  ].join(' '),
  focused: [
    baseTheme.focused,
    'focus-within:after:bg-[image:var(--input-glow-focus)]',
    'focus-within:after:content-[""] focus-within:after:absolute focus-within:after:mx-0 focus-within:after:h-px after:z-2 focus-within:after:rounded-sm focus-within:after:-bottom-[1px] focus-within:after:inset-x-0.5'
  ].join(' '),
  input: [baseTheme.input, 'placeholder-accent'].join(' '),
  disabled: [
    baseTheme.disabled,
    'disabled-within:bg-dark-disabled disabled-within:after:content-none'
  ].join(' '),
  adornment: {
    ...baseTheme.adornment,
    base: [baseTheme.adornment.base, 'text-text-primary'].join(' ')
  }
};
