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
    primary: 'bg-primary-400 hover:bg-primary-500',
    secondary: 'bg-secondary-400 hover:bg-secondary-500',
    success: 'bg-success-400 hover:bg-success-500',
    warning: 'bg-warning-400 hover:bg-warning-500',
    error: 'bg-error-400 hover:bg-error-500'
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
    primary:
      'bg-primary-600 hover:bg-primary-700 border-primary-600 text-white',
    secondary:
      'bg-secondary-700 hover:bg-secondary-800 border-secondary-700 text-white',
    success:
      'bg-success-700 hover:bg-success-800 border-success-700 text-white',
    warning:
      'bg-warning-700 hover:bg-warning-800 border-warning-700 text-white',
    error: 'bg-error-700 hover:bg-error-800 border-error-700 text-white'
  }
};
