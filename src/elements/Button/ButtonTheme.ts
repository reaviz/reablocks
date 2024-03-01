export interface ReaBlocksButtonTheme {
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

const baseTheme: ReaBlocksButtonTheme = {
  base: 'inline-flex whitespace-no-wrap select-none items-center justify-center px-2.5 py-1 rounded border',
  disabled: 'disabled:cursor-not-allowed',
  fullWidth: 'block w-full',
  group: 'rounded-none first:rounded-s last:rounded-e',
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

// Just make 2 different themes for light and dark instead theme mode
const lightTheme: ReaBlocksButtonTheme = {
  base: 'text-black',
  disabled: 'disabled:bg-gray-400 disabled:text-gray-50',
  variants: {
    filled: 'bg-blue-50 border-blue-500 hover:bg-blue-100',
    outline: 'bg-transparent border-grey border',
    text: 'bg-transparent border-0'
  },
  colors: {
    primary: 'bg-blue-50 hover:bg-blue-100',
    secondary: 'bg-gray-100 hover:bg-gray-100',
    success: 'bg-green-50 hover:bg-green-100',
    warning: 'bg-orange-50 hover:bg-orange-100',
    error: 'bg-red-50 hover:bg-red-100'
  }
};

// Just make 2 different themes for light and dark instead theme mode
const darkTheme: ReaBlocksButtonTheme = {
  base: 'dark:border-gray-500 dark:bg-gray-200 dark:hover:bg-gray-100 dark:text-gray-100',
  disabled: 'dark:disabled:bg-gray-500 dark:disabled:text-gray-50',
  variants: {
    filled: 'dark:bg-gray-200 dark:text-white dark:bg-blue-300',
    outline: 'dark:bg-transparent dark:border-grey dark:border',
    text: 'dark:bg-transparent dark:border-0'
  },
  colors: {
    primary: 'dark:bg-blue-400 dark:text-white dark:border-blue-400',
    secondary: 'dark:bg-blue-500 dark:text-white dark:border-blue-500',
    success: 'dark:bg-green-100 dark:text-white dark:border-green-100',
    warning: 'dark:bg-orange-100 dark:text-white dark:border-orange-100',
    error: 'dark:bg-red-100 dark:text-white dark:border-red-100'
  }
};

// TODO write utility to merge values from base, light and dark themes
export const buttonTheme = {
  base: [baseTheme.base, lightTheme.base, darkTheme.base].join(' '),
  disabled: [baseTheme.disabled, lightTheme.disabled, darkTheme.disabled].join(
    ' '
  ),
  fullWidth: baseTheme.fullWidth,
  group: baseTheme.group,
  groupText: baseTheme.groupText,
  adornment: baseTheme.adornment,
  variants: {
    filled: [lightTheme.variants.filled, darkTheme.variants.filled].join(' '),
    outline: [lightTheme.variants.outline, darkTheme.variants.outline].join(
      ' '
    ),
    text: [lightTheme.variants.text, darkTheme.variants.text].join(' ')
  },
  colors: {
    primary: [lightTheme.colors.primary, darkTheme.colors.primary].join(' '),
    secondary: [lightTheme.colors.secondary, darkTheme.colors.secondary].join(
      ' '
    ),
    success: [lightTheme.colors.success, darkTheme.colors.success].join(' '),
    warning: [lightTheme.colors.warning, darkTheme.colors.warning].join(' '),
    error: [lightTheme.colors.error, darkTheme.colors.error].join(' ')
  },
  sizes: baseTheme.sizes
};
