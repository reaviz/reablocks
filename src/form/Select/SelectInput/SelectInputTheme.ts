export interface SelectInputTheme {
  /** CSS class applied to the outer container element. */
  container: string;
  /** CSS class applied to the root select input. */
  base: string;
  /** CSS class applied to the input container wrapping the input element. */
  inputContainer: string;
  /** CSS class applied to the inner input element. */
  input: string;
  /** CSS class applied to the placeholder text. */
  placeholder: string;
  /** CSS class applied to the displayed selected value. */
  selectedValue: string;
  /** Class names for the action buttons (refresh, loader, close, expand). */
  actions: {
    container: string;
    button: string;
    refresh: string;
    loader: string;
    close: string;
    expand: string;
  };
  /** CSS class applied when the select input is disabled. */
  disabled: string;
  /** CSS class applied when the select is not filterable. */
  unfilterable: string;
  /** CSS class applied when the select input is in an error state. */
  error: string;
  /** Class names applied when the select is in single-select mode. */
  single: {
    selectedValue: string;
    inputContainer: string;
    input: string;
  };
  /** Class names applied when the select is in multi-select mode. */
  multiple: {
    selectedValue: string;
    inputContainer: string;
  };
  /** Class names for start and end adornments. */
  adornment: {
    start: string;
    end: string;
  };
  /** CSS class applied when the select menu is open. */
  open: string;
  /** Class names for chips shown for selected options. */
  chip: {
    base: string;
    hover: string;
    focused: string;
    disabled: string;
    removeButton: string;
  };
  /** Class names for each size variant of the select input. */
  size: {
    small: string;
    medium: string;
    large: string;
    [key: string]: string;
  };
}

const baseTheme: SelectInputTheme = {
  base: 'flex flex-nowrap items-center box-border border rounded-sm',
  container: 'relative',
  inputContainer:
    'flex-wrap flex items-center overflow-hidden flex-1 max-w-full [&>div]:max-w-full [&_.invisible]:text-ellipsis [&_.invisible]:overflow-hidden',
  input:
    'p-0 bg-transparent text-ellipsis align-middle max-w-full read-only:cursor-not-allowed focus:outline-hidden disabled:text-disabled',
  placeholder: '',
  selectedValue: 'overflow-hidden whitespace-nowrap text-ellipsis',
  actions: {
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
    base: 'cursor-pointer flex text-sm leading-none box-border mr-1 px-1 py-1 rounded-sm border-solid border-transparent',
    hover: '',
    focused: 'focused:border-transparent focused:outline-none',
    disabled: 'disabled:cursor-not-allowed',
    removeButton:
      'cursor-pointer leading-0 ml-1 p-0 border-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:align-baseline [&>svg]:pointer-events-none'
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
    'hover:after:content-[""] hover:after:absolute hover:after:mx-1 hover:after:h-px after:z-2 hover:after:rounded-sm hover:after:-bottom-[0px] hover:after:inset-x-0.5',
    'focus-within:after:content-[""] focus-within:after:absolute focus-within:after:mx-0 focus-within:after:h-px after:z-2 focus-within:after:rounded-sm focus-within:after:-bottom-[0px] focus-within:after:inset-x-0.5'
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
  actions: {
    ...baseTheme.actions,
    button: [baseTheme.actions.button, 'hover:cursor-pointer'].join(' ')
  },
  chip: {
    ...baseTheme.chip,
    base: [
      baseTheme.chip.base,
      '[&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40'
    ].join(' '),
    hover: [baseTheme.chip.hover, 'hover:brightness-150'].join(' '),
    focused: [baseTheme.chip.focused, 'border-panel-accent'].join(' '),
    removeButton: [
      baseTheme.chip.removeButton,
      '[&>svg]:fill-text-primary [&>svg]:disabled:fill-text-secondary/40'
    ].join(' ')
  }
};
