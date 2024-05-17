export interface ToggleTheme {
  base: string;
  disabled: string;
  checked: string;
  handle: {
    base: string;
    disabled: string;
    checked: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: ToggleTheme = {
  base: 'flex items-center justify-start cursor-pointer bg-surface box-border border border-panel-accent rounded-full',
  disabled: 'cursor-not-allowed opacity-60',
  checked: 'checked justify-end bg-primary',
  handle: {
    base: 'rounded-full bg-panel',
    disabled: '',
    checked: 'checked',
    sizes: {
      small: 'w-3 h-full',
      medium: 'w-5 h-full',
      large: 'w-6 h-full'
    }
  },
  sizes: {
    small: 'w-8 h-4 p-px',
    medium: 'w-12 h-6 p-px',
    large: 'w-16 h-7 p-px'
  }
};

export const toggleTheme = baseTheme;

export const legacyToggleTheme: ToggleTheme = {
  ...baseTheme,
  base: [
    baseTheme.base,
    'bg-[var(--toggle-background)] rounded-[var(--toggle-border-radius)] [border:_var(--toggle-border)]'
  ].join(' '),
  disabled: [
    baseTheme.disabled,
    'opacity-[var(--toggle-disabled-opacity,0.8)] bg-[var(--toggle-disabled-background)]'
  ].join(' '),
  checked: [
    baseTheme.checked,
    'bg-[var(--toggle-background-checked)] [border:_var(--toggle-border-checked)]'
  ].join(' '),
  sizes: {
    small:
      'h-[calc(var(--toggle-height,35px)_/_2)] w-[calc(var(--toggle-width,55px)_/_2)] pt-[calc(var(--toggle-spacing)] pb-[2)] px-[/]',
    medium:
      'h-[calc(var(--toggle-height,35px)_/_1.5)] w-[calc(var(--toggle-width,55px)_/_1.5)] pt-[calc(var(--toggle-spacing)] pb-[1.5)] px-[/]',
    large:
      'h-[var(--toggle-height,35px)] w-[var(--toggle-width,55px)] pt-[var(--toggle-spacing)] pr-[var(--toggle-spacing)] pb-[var(--toggle-spacing)] pl-[var(--toggle-spacing)]'
  },
  handle: {
    ...baseTheme.handle,
    base: [
      baseTheme.handle.base,
      'bg-[var(--toggle-handle-background)] rounded-[var(--toggle-handle-border-radius)]'
    ].join(' '),
    disabled: '',
    checked: '',
    sizes: {
      small:
        'h-[calc(var(--toggle-handle-size,25px)_/_2)] w-[calc(var(--toggle-handle-size,25px)_/_2)]',
      medium:
        'h-[calc(var(--toggle-handle-size,25px)_/_1.5)] w-[calc(var(--toggle-handle-size,25px)_/_1.5)]',
      large:
        'h-[var(--toggle-handle-size,25px)] w-[var(--toggle-handle-size,25px)]'
    }
  }
};
