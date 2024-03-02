export interface ButtonTheme {
  base?: string;
  disabled?: string;
  fullWidth?: string;
  group?: string;
  groupText?: string;
  adornment?: {
    base?: string;
    start?: string;
    end?: string;
    sizes?: {
      small?: string;
      medium?: string;
      large?: string;
    };
  };
  variants?: {
    filled?: string;
    outline?: string;
    text?: string;
  };
  colors?: {
    primary?: string;
    secondary?: string;
    success?: string;
    warning?: string;
    error?: string;
  };
  sizes?: {
    small?: string;
    medium?: string;
    large?: string;
  };
}

const baseTheme: ButtonTheme = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded',
  disabled: 'disabled:cursor-not-allowed',
  fullWidth: 'block w-full',
  group:
    'rounded-none first:rounded-s last:rounded-e border-s-0 first:border-s',
  groupText:
    'border border-y-transparent border-l-transparent last:border-r-transparent hover:bg-initial',
  adornment: {
    base: 'flex',
    sizes: {
      small: '[&>svg]:w-3 [&>svg]:h-3',
      medium: '[&>svg]:w-4 [&>svg]:h-4',
      large: '[&>svg]:w-5 [&>svg]:h-5'
    }
  },
  sizes: {
    small: 'text-xs px-5px py-0.5 leading-[normal]',
    medium: 'text-base px-2.5 py-5px leading-[normal]',
    large: 'text-xl px-5 py-2.5 leading-[normal]'
  }
};

export const lightButtonTheme = {
  base: [baseTheme.base, 'text-black'].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-400 disabled:text-gray-50'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  groupText: [baseTheme.groupText, 'border-s-black first:border-s-0'].join(' '),
  variants: {
    filled: 'bg-blue-400 border-blue-500 hover:bg-blue-500',
    outline: 'bg-opacity-0 border-gray-900 border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    primary: 'bg-blue-400 hover:bg-blue-500',
    secondary: 'bg-gray-400 hover:bg-gray-500',
    success: 'bg-green-400 hover:bg-green-500',
    warning: 'bg-orange-400 hover:bg-orange-500',
    error: 'bg-red-400 hover:bg-red-500'
  }
};

export const darkButtonTheme = {
  base: [baseTheme.base, 'text-gray-100'].join(' '),
  disabled: [
    baseTheme.disabled,
    'data-[variant=filled]:disabled:bg-gray-400 disabled:text-gray-50 border-gray-500'
  ].join(' '),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  adornment: baseTheme.adornment,
  sizes: baseTheme.sizes,
  variants: {
    filled: 'bg-gray-800 text-white hover:bg-gray-700 border-gray-800',
    outline: 'bg-opacity-0 border-grey border',
    text: 'bg-opacity-0 border-0'
  },
  colors: {
    primary: 'bg-blue-600 hover:bg-blue-700 border-blue-600 text-white',
    secondary: 'bg-blue-700 hover:bg-blue-800 border-blue-700 text-white',
    success: 'bg-green-700 hover:bg-green-800 border-green-700 text-white',
    warning: 'bg-orange-700 hover:bg-orange-800 border-orange-700 text-white',
    error: 'bg-red-700 hover:bg-red-800 border-red-700 text-white'
  }
};
