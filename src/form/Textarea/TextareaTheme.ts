export interface TextareaSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface TextareaTheme {
  base: string;
  input: string;
  fullWidth: string;
  error: string;
  disabled: string;
  sizes: TextareaSizeTheme;
}

export const unifyTextareaTheme: TextareaTheme = {
  base: `
    flex items-center transition-colors rounded-md border
    border-inputs-colors-normal-stroke-resting bg-inputs-colors-normal-background-resting
    hover:border-inputs-colors-normal-stroke-hover hover:bg-inputs-colors-normal-background-hover
    focus-within:border-inputs-colors-normal-stroke-selected focus-within:bg-inputs-colors-normal-background-selected
    disabled-within:hover:border-inputs-colors-normal-stroke-resting disabled-within:hover:bg-inputs-colors-normal-background-resting
  `,
  input: 'border-0 resize-none read-only:cursor-not-allowed outline-hidden',
  fullWidth: 'w-full',
  error: `
    border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting
    hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
    focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
    disabled-within:hover:border-inputs-colors-error-stroke-resting disabled-within:hover:bg-inputs-colors-error-background-resting
  `,
  disabled: 'cursor-not-allowed opacity-40',
  sizes: {
    small: 'text-xs px-2 py-[3px]',
    medium: 'text-sm px-3 py-[7px]',
    large: 'text-base px-3 py-[7px]'
  }
} as TextareaTheme;

export const defaultTextareaTheme: TextareaTheme = {
  base: ' flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-xs bg-panel border border-panel-accent text-text-primary hover:border-panel-accent hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#242433_100%)] hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-2 hover:after:rounded-sm hover:after:-bottom-[1px] hover:after:inset-x-0.5 disabled-within:hover:after:content-none',
  input:
    'resize-none read-only:cursor-not-allowed flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-hidden px-0.5 disabled:cursor-not-allowed disabled:text-disabled placeholder-accent',
  disabled:
    ' text-waterloo cursor-not-allowed disabled-within:bg-dark-disabled disabled-within:after:content-none',
  fullWidth: 'w-full',
  error: 'border-error',
  sizes: {
    small: '[&>input]:text-sm p-1 text-sm',
    medium: '[&>input]:text-base px-2.5 py-1.5 text-base',
    large: '[&>input]:text-lg p-5 text-lg'
  }
} as TextareaTheme;
