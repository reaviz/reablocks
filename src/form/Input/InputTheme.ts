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
  base: 'flex relative flex-row items-center flex-nowrap box-border transition-colors rounded-sm',
  focused: '',
  input:
    'flex-1 font-normal font-sans bg-transparent border-0 p-0 m-0 disabled:pointer-events-none outline-none px-0.5 disabled:cursor-not-allowed disabled:text-disabled',
  inline: 'bg-transparent border-0 outline-none',
  disabled: '',
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
    'bg-panel border border-surface text-surface-content'
  ].join(' '),
  focused: `${baseTheme.focused} after:bg-bottom-border-glow after:content-[""] after:absolute after:h-0.5 after:z-[2] after:rounded after:-bottom-px after:inset-x-0.5`,
  input: [baseTheme.input, ' placeholder-accent'].join(' '),
  disabled: [baseTheme.disabled, 'disabled-within:bg-dark-disabled'].join(' '),
  adornment: {
    ...baseTheme.adornment,
    base: [baseTheme.adornment.base, 'text-surface-content'].join(' ')
  }
};

export const legacyInputTheme: InputTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-[var(--input-background)] rounded-[var(--input-border-radius)] [border:_var(--input-border)] focus-within:border-[var(--input-border-focus)]'
  ].join(' '),
  error: [baseTheme.error, 'border-[var(--error-background)]'].join(' '),
  sizes: {
    small: '[padding:_var(--input-spacing-sm)]',
    medium: '[padding:_var(--input-spacing-md)]',
    large: 'padding:_var(--input-spacing-lg)'
  },
  adornment: {
    base: [
      baseTheme.adornment.base,
      '[&>svg]:w-[var(--input-adornment-size)] [&>svg]:h-[var(--input-adornment-size)] [&>svg]:fill-[var(--input-adornment-fill)]'
    ].join(' '),
    start: '[padding-right:_calc(var(--list-item-spacing)_/_2)]',
    end: '[padding-left:_calc(var(--list-item-spacing)_/_2)]'
  },
  input: [
    baseTheme.input,
    'placeholder-[var(--input-color-placeholder)] '
  ].join(' '),
  disabled: [baseTheme.disabled, 'text-[var(--disabled-color)]'].join(' ')
};
