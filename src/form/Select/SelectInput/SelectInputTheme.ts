export interface SelectInputTheme {
  base: string;
  inputContainer: string;
  input: string;
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
  single: string;
  multiple: string;
  open: string;
}

const baseTheme: Partial<SelectInputTheme> = {
  base: 'flex flex-no-wrap items-center box-border border border-gray-700 rounded py-1.5 px-3 ',
  inputContainer: 'flex-no-wrap flex items-center overflow-hidden flex-1',
  input:
    'p-0 bg-transparent text-xs align-middle read-only:cursor-not-allowed focus:outline-none disabled:text-disabled',
  prefix: '',
  suffix: {
    container: 'flex items-center justify-center',
    button: 'disabled:cursor-not-allowed',
    refresh: '',
    loader: '',
    close: 'mr-1.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-slate-500',
    expand: '[&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-slate-500'
  },
  disabled: 'cursor-not-allowed bg-gray-800 text-disabled',
  unfilterable: 'caret-transparent',
  error: 'border border-solid border-error-500',
  open: 'rounded'
};

export const lightSelectInputTheme: SelectInputTheme = {
  base: baseTheme.base,
  inputContainer: baseTheme.inputContainer,
  input: baseTheme.input,
  prefix: baseTheme.prefix,
  suffix: baseTheme.suffix,
  disabled: baseTheme.disabled,
  unfilterable: baseTheme.unfilterable,
  error: baseTheme.error,
  single: '',
  multiple: '',
  open: baseTheme.open
};

export const darkSelectInputTheme: SelectInputTheme = {
  base: [baseTheme.base, 'bg-gray-900'].join(' '),
  inputContainer: baseTheme.inputContainer,
  input: baseTheme.input,
  prefix: baseTheme.prefix,
  suffix: baseTheme.suffix,
  disabled: baseTheme.disabled,
  unfilterable: baseTheme.unfilterable,
  error: baseTheme.error,
  single: '',
  multiple: '',
  open: baseTheme.open
};
