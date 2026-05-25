export interface SelectInputTheme {
  container: string;
  base: string;
  inputContainer: string;
  input: string;
  placeholder: string;
  selectedValue: string;
  actions: {
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
    selectedValue: string;
    inputContainer: string;
    input: string;
  };
  multiple: {
    selectedValue: string;
    inputContainer: string;
  };
  adornment: {
    start: string;
    end: string;
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

export const selectInputTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded-sm bg-panel text-text-primary border-panel-accent border-solid not-disabled-within:hover:border-primary-hover not-disabled-within:focus-within:border-primary',
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-disabled',
  placeholder: 'placeholder:text-secondary-content',
  selectedValue: 'overflow-hidden whitespace-nowrap text-ellipsis',
  actions: {
    container: 'flex items-center justify-center',
    button: 'disabled:cursor-not-allowed hover:cursor-pointer',
    refresh: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    loader: 'mr-2.5',
    close: 'mr-1.5 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary',
    expand: '[&>svg]:w-4 [&>svg]:h-4 [&>svg]:fill-text-secondary'
  },
  disabled:
    'cursor-not-allowed text-disabled text-text-secondary/40 border-surface hover:border-surface',
  unfilterable: 'caret-transparent',
  error: 'border border-solid border-error',
  adornment: {
    start: 'flex items-center mr-1.5',
    end: 'flex items-center ml-1.5'
  },
  open: 'rounded-sm rounded-ee-none rounded-es-none',
  single: {
    selectedValue: 'overflow-hidden whitespace-nowrap text-ellipsis max-w-full',
    inputContainer: 'flex-nowrap',
    input: 'max-w-full'
  },
  multiple: {
    selectedValue: 'contents',
    inputContainer: 'flex-wrap'
  },
  chip: {
    base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded-sm border-solid border-transparent [&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40',
    hover: 'hover:brightness-150',
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
