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
