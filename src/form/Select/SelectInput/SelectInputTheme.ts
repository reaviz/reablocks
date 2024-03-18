export interface SelectInputTheme {
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
}

const baseTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded py-1.5 px-3 ',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full',
  input:
    'p-0 bg-transparent text-xs text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-none disabled:text-disabled',
  placeholder: 'placeholder:text-slate-400',
  prefix: 'overflow-hidden whitespace-nowrap text-ellipsis',
  suffix: {
    container: 'flex items-center justify-center',
    button: 'disabled:cursor-not-allowed',
    refresh: 'mr-1.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-slate-500',
    loader: 'mr-2.5',
    close: 'mr-1.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-slate-500',
    expand: '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-slate-500'
  },
  disabled: 'cursor-not-allowed text-disabled',
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
    base: 'cursor-pointer flex text-xs leading-none box-border mr-1 my-px px-1 py-1 rounded border-solid border-transparent',
    hover: '',
    focused: 'focused:border-transparent focused:outline-none',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-[0] ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
  }
};

export const lightSelectInputTheme: SelectInputTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-light-background border-gray-400 text-black'].join(
    ' '
  ),
  disabled: [baseTheme.disabled, 'bg-gray-300'].join(' '),
  error: [baseTheme.error, 'border-error-500'].join(' '),
  placeholder: [baseTheme.placeholder, 'placeholder:text-slate-700'].join(' '),
  input: [baseTheme.input, 'text-black'].join(' '),
  chip: {
    ...baseTheme.chip,
    base: [baseTheme.chip.base, 'bg-primary-500 text-white'].join(' '),
    hover: [baseTheme.chip.hover, ''].join(' '),
    focused: [baseTheme.chip.focused, ''].join(' '),
    removeButton: [baseTheme.chip.removeButton, '[&>svg]:fill-slate-100'].join(
      ' '
    )
  }
};

export const darkSelectInputTheme: SelectInputTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-dark-background border-gray-700'].join(' '),
  disabled: [baseTheme.disabled, 'bg-dark-disabled'].join(' '),
  error: [baseTheme.error, 'border-error-500'].join(' '),
  chip: {
    ...baseTheme.chip,
    base: [baseTheme.chip.base, 'bg-zinc-600 text-white'].join(' '),
    hover: [baseTheme.chip.hover, 'hover:bg-zinc-700'].join(' '),
    focused: [baseTheme.chip.focused, 'border-gray-700'].join(' '),
    removeButton: [baseTheme.chip.removeButton, '[&>svg]:fill-slate-400'].join(
      ' '
    )
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
