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

export const defaultSelectInputTheme: SelectInputTheme = {
  base: [
    'flex flex-nowrap items-center box-border border rounded-sm bg-panel text-text-primary border-panel-accent border-solid hover:border-panel-accent light:hover:border-panel-accent',
    'hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#242433_100%)] light:hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#E6E6F0_100%)]',
    'focus-within:after:bg-[radial-gradient(circle,_#93B6FF_0%,_#105EFF_36%,_#3D3D4D_90%,_#242433_100%)] light:focus-within:after:bg-[radial-gradient(circle,_#105EFF_10%,_#93B6FF_36%,_#E6E6F0_90%)]',
    'hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-2 hover:after:rounded-sm hover:after:-bottom-[0px] hover:after:inset-x-0.5',
    'focus-within:after:content-[""] focus-within:after:absolute focus-within:after:mx-0 focus-within:after:h-px after:z-2 focus-within:after:rounded-sm focus-within:after:-bottom-[0px] focus-within:after:inset-x-0.5'
  ].join(' '),
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-disabled',
  placeholder: ' placeholder:text-secondary-content',
  prefix: 'overflow-hidden whitespace-nowrap text-ellipsis',
  suffix: {
    container: 'flex items-center justify-center',
    button: 'disabled:cursor-not-allowed hover:cursor-pointer',
    refresh: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    loader: 'mr-2.5',
    close: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    expand: '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary'
  },
  disabled: [
    'cursor-not-allowed text-disabled hover:after:content-none',
    'text-text-secondary/40 border-surface light:hover:border-surface'
  ].join(' '),
  unfilterable: 'caret-transparent',
  error: 'border border-solid border-error light:border-error/20',
  open: 'rounded-sm rounded-ee-none rounded-es-none',
  single: {
    prefix: 'overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
    inputContainer: 'flex-nowrap',
    input: 'max-w-full'
  },
  multiple: {
    prefix: 'contents',
    inputContainer: 'flex-wrap'
  },
  chip: {
    base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded-sm border-solid border-transparent [&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40',
    hover: ' hover:brightness-150',
    focused:
      'focused:border-transparent focused:outline-none border-panel-accent',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-0 ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none [&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40'
  },
  size: {
    small: 'py-1 px-2 text-sm min-h-8',
    medium: 'py-2 px-3 text-base min-h-[35px]',
    large: 'py-2 px-3 text-lg min-h-[42px]'
  }
};

export const unifySelectInputTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded-md border-inputs-colors-normal-stroke-resting bg-inputs-colors-normal-background-resting hover:border-inputs-colors-normal-stroke-hover focus-within:border-inputs-colors-normal-stroke-selected focus-within:bg-inputs-colors-normal-background-selected',
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden [&_.invisible]:invisible',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-content-text-neutral-5 text-inputs-colors-normal-text-input-text-resting',
  placeholder:
    'placeholder:text-inputs-colors-normal-text-input-text-resting focus:placeholder:text-inputs-colors-normal-text-input-text-selected',
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
    'cursor-not-allowed text-content-text-neutral-5 hover:after:content-none opacity-40',
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
    prefix: 'contents',
    inputContainer: 'flex-wrap'
  },
  chip: {
    base: 'cursor-pointer flex text-xs leading-none box-border mr-(--spacing-space-between-2xs) px-(--spacing-padding-3xs) py-(--spacing-padding-3xs) rounded-sm border-solid border-transparent',
    hover: '',
    focused: 'focused:border-transparent focused:outline-none',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-0 ml-(--spacing-space-between-2xs) p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
  },
  size: {
    small:
      '[&_input]:text-xs [&_input]:leading-4 [&_svg]:size-4 px-(--inputs-details-horizontal-padding-left-sm) py-(--spacing-padding-2xs) gap-(--inputs-details-space-between-horizontal-sm)',
    medium:
      '[&_input]:text-sm [&_input]:leading-4 [&_svg]:size-4 px-(--inputs-details-horizontal-padding-left-md) py-(--inputs-details-vertical-padding-inside) gap-(--inputs-details-space-between-horizontal-md)',
    large:
      '[&_input]:text-base [&_svg]:size-4.5 px-(--inputs-details-horizontal-padding-left-lg) py-(--inputs-details-vertical-padding-inside) gap-(--inputs-details-space-between-horizontal-lg)'
  }
};
