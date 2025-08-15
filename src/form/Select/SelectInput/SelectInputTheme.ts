export interface SelectInputSizeTheme {
  small: string;
  medium: string;
  large: string;
  [key: string]: string;
}

export interface SelectInputTheme {
  container: string;
  base: string;
  inputContainer: string;
  input: string;
  placeholder: string;
  prefix: string;
  suffix: {
    container: string;
    button: string;
    refresh: string;
    loader: string;
    close: string;
    expand: string;
  };
  disabled: string;
  unfilterable: string;
  error: string;
  single: {
    prefix: string;
    inputContainer: string;
    input: string;
  };
  multiple: {
    prefix: string;
    inputContainer: string;
  };
  open: string;
  chip: {
    base: string;
    hover: string;
    focused: string;
    disabled: string;
    removeButton: string;
  };
  size: SelectInputSizeTheme;
}

export const selectInputTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded-md border-inputs-colors-normal-stroke-resting',
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden [&_.invisible]:invisible',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-disabled',
  placeholder: '',
  prefix: 'overflow-hidden whitespace-nowrap text-ellipsis flex flex-wrap',
  suffix: {
    container: 'flex items-center justify-center',
    button:
      'disabled:cursor-not-allowed focus-visible:outline-none [&_svg]:text-buttons-colors-core-icon-ghost-assets-resting focus-visible:[&_svg]:text-buttons-colors-core-icon-ghost-assets-selected',
    refresh:
      'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting',
    loader: 'mr-2.5',
    close:
      'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting',
    expand:
      '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:text-inputs-colors-normal-assets-input-resting'
  },
  disabled:
    'cursor-not-allowed text-disabled hover:after:content-none opacity-40',
  unfilterable: 'caret-transparent',
  error: `
    border-inputs-colors-error-stroke-resting bg-inputs-colors-error-background-resting [&>input]:text-inputs-colors-error-text-input-filled [&>input]:placeholder:text-inputs-colors-error-text-input-text-resting
    hover:border-inputs-colors-error-stroke-hover hover:bg-inputs-colors-error-background-hover
    focus-within:border-inputs-colors-error-stroke-selected focus-within:bg-inputs-colors-error-background-selected
  `,
  open: 'rounded-sm',
  single: {
    prefix: 'overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
    inputContainer: 'flex-nowrap',
    input: 'max-w-full'
  },
  multiple: {
    prefix: 'flex flex-wrap',
    inputContainer: 'flex-wrap'
  },
  chip: {
    base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded-sm border-solid border-transparent',
    hover: '',
    focused: 'focused:border-transparent focused:outline-none',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-0 ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
  },
  size: {
    small:
      '[&_input]:text-sm [&_input]:leading-4 [&_svg]:size-4 px-2 py-[5px] gap-2',
    medium:
      '[&_input]:text-sm [&_input]:leading-4 [&_svg]:size-4 px-3 py-[7px] gap-2',
    large: '[&_input]:text-md [&_svg]:size-4.5 px-3 py-[7px] gap-2'
  }
};
