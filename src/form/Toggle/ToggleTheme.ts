export interface ToggleTheme {
  base: string;
  disabled: string;
  checked: string;
  disabledAndChecked: string;
  handle: {
    base: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
    };
    disabled: string;
    disabledAndChecked: string;
  };
  sizes: {
    small: string;
    medium: string;
    large: string;
  };
}

const baseTheme: ToggleTheme = {
  base: 'flex items-center justify-start cursor-pointer bg-surface box-border border border-panel-accent rounded-full hover:bg-primary-hover transition-[background-color] ease-in-out duration-300',
  disabled: 'cursor-not-allowed bg-transparent hover:bg-transparent',
  checked: 'justify-end bg-primary',
  disabledAndChecked:
    'bg-secondary-inactive hover:bg-secondary-inactive light:bg-gray-400 light:hover:bg-gray-400',
  handle: {
    base: 'rounded-full bg-panel',
    sizes: {
      small: 'w-3 h-full',
      medium: 'w-5 h-full',
      large: 'w-6 h-full'
    },
    disabled: 'bg-secondary-inactive light:bg-gray-400',
    disabledAndChecked: 'bg-black light:bg-white'
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
