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
  size: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded',
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-none disabled:text-disabled',
  placeholder: '',
  prefix: 'overflow-hidden whitespace-nowrap text-ellipsis',
  suffix: {
    container: 'flex items-center justify-center',
    button: 'disabled:cursor-not-allowed',
    refresh: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    loader: 'mr-2.5',
    close: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    expand: '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary'
  },
  disabled: 'cursor-not-allowed text-disabled hover:after:content-none',
  unfilterable: 'caret-transparent',
  error: 'border border-solid',
  open: 'rounded rounded-ee-none rounded-es-none',
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
    base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded border-solid border-transparent',
    hover: '',
    focused: 'focused:border-transparent focused:outline-none',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-[0] ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
  },
  size: {
    small: 'py-1 px-2 text-sm min-h-8',
    medium: 'py-2 px-3 text-base min-h-[35px]',
    large: 'py-2 px-3 text-lg min-h-[42px]'
  }
};

export const selectInputTheme: SelectInputTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-panel text-text-primary border-panel-accent border-solid hover:border-panel-accent light:hover:border-panel-accent',
    'hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#242433_100%)] light:hover:after:bg-[radial-gradient(circle,_#105EFF_0%,_#105EFF_36%,_#E6E6F0_100%)]',
    'focus-within:after:bg-[radial-gradient(circle,_#93B6FF_0%,_#105EFF_36%,_#3D3D4D_90%,_#242433_100%)] light:focus-within:after:bg-[radial-gradient(circle,_#105EFF_10%,_#93B6FF_36%,_#E6E6F0_90%)]',
    'hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-[2] hover:after:rounded hover:after:-bottom-[0px] hover:after:inset-x-0.5',
    'focus-within:after:content-[""] focus-within:after:absolute focus-within:after:mx-0 focus-within:after:h-px after:z-[2] focus-within:after:rounded focus-within:after:-bottom-[0px] focus-within:after:inset-x-0.5'
  ].join(' '),
  placeholder: [
    baseTheme.placeholder,
    'placeholder:text-secondary-content'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    'text-text-secondary/40 border-surface light:hover:border-surface'
  ].join(' '),
  error: [baseTheme.error, 'border-error light:border-error/20'].join(' '),
  suffix: {
    ...baseTheme.suffix,
    button: [baseTheme.suffix.button, 'hover:cursor-pointer'].join(' ')
  },
  chip: {
    ...baseTheme.chip,
    base: [
      baseTheme.chip.base,
      '[&>svg]:fill-text-primary disabled:[&>svg]:fill-text-secondary/40'
    ].join(' '),
    hover: [baseTheme.chip.hover, 'hover:brightness-150'].join(' '),
    focused: [baseTheme.chip.focused, 'border-panel-accent'].join(' '),
    removeButton: [
      baseTheme.chip.removeButton,
      '[&>svg]:fill-text-primary disabled:[&>svg]:fill-text-secondary/40'
    ].join(' ')
  }
};

export const cssVarsSelectInputTheme: SelectInputTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-[var(--select-input-background)] p-[var(--select-input-spacing)] rounded-[var(--select-input-border-radius)] [border:_var(--select-input-border)]'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    'text-[var(--select-input-disabled-color)]'
  ].join(' '),
  placeholder: [
    baseTheme.placeholder,
    'text-[var(--select-input-placeholder-color)]'
  ].join(' '),
  error: [baseTheme.error, 'border-[var(--select-input-error)]'].join(' '),
  input: [baseTheme.input, 'text-[var(--select-input-color)]'].join(' '),
  suffix: {
    ...baseTheme.suffix,
    close: [
      baseTheme.suffix.close,
      '[&>svg]:fill-[var(--select-input-icon-color)]'
    ].join(' '),
    expand: [
      baseTheme.suffix.expand,
      '[&>svg]:fill-[var(--select-input-icon-color)]'
    ].join(' ')
  },
  chip: {
    ...baseTheme.chip,
    base: [
      baseTheme.chip.base,
      'bg-[var(--select-chip-background)] text-[var(--select-chip-color)] [border:_var(--select-chip-border)]'
    ].join(' '),
    removeButton: [
      baseTheme.chip.removeButton,
      '[&>svg]:fill-[var(--select-chip-icon-color)]'
    ].join(' ')
  }
};
