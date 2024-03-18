export interface ToggleTheme {
  base: string;
  disabled: string;
  checked: string;
  handle: {
    base: string;
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
  base: 'flex items-center justify-start cursor-pointer box-border border-0 rounded-xl',
  disabled: 'cursor-not-allowed opacity-60',
  checked: 'justify-end',
  handle: {
    base: 'rounded-full',
    sizes: {
      small: 'w-3 h-3',
      medium: 'w-4 h-4',
      large: 'w-6 h-6 rounded-lg'
    }
  },
  sizes: {
    small: 'w-8 h-4 p-0.5',
    medium: 'w-12 h-6 p-1',
    large: 'w-16 h-9 p-1.5'
  }
};

export const lightToggleTheme: ToggleTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-gray-400'].join(' '),
  checked: [baseTheme.checked, 'bg-primary-400'].join(' '),
  handle: {
    ...baseTheme.handle,
    base: [baseTheme.handle.base, 'bg-gray-500'].join(' ')
  }
};

export const darkToggleTheme: ToggleTheme = {
  ...baseTheme,
  base: [baseTheme.base, 'bg-gray-500'].join(' '),
  checked: [baseTheme.checked, 'bg-primary-600'].join(' '),
  handle: {
    ...baseTheme.handle,
    base: [baseTheme.handle.base, 'bg-gray-700'].join(' ')
  }
};

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
