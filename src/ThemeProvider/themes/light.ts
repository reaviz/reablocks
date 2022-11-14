import { Theme } from '../types';

/**
 * Inspired by https://www.radix-ui.com/docs/colors/palette-composition/the-scales
 */
export const lightThemeColors = {
  red: {
    '100': '#fffcfc',
    '200': '#fff8f8',
    '300': '#ffefef',
    '400': '#ffe5e5',
    '500': '#fdd8d8',
    '600': '#f9c6c6',
    '700': '#f3aeaf',
    '800': '#eb9091',
    '900': '#e5484d'
  },
  purple: {
    '100': '#fefcfe',
    '200': '#fdfaff',
    '300': '#f9f1fe',
    '400': '#f3e7fc',
    '500': '#eddbf9',
    '600': '#e3ccf4',
    '700': '#d3b4ed',
    '800': '#be93e4',
    '900': '#8e4ec6'
  },
  blue: {
    '100': '#fbfdff',
    '200': '#f5faff',
    '300': '#edf6ff',
    '400': '#e1f0ff',
    '500': '#cee7fe',
    '600': '#b7d9f8',
    '700': '#96c7f2',
    '800': '#5eb0ef',
    '900': '#0091ff'
  },
  green: {
    '100': '#fbfefc',
    '200': '#f2fcf5',
    '300': '#e9f9ee',
    '400': '#ddf3e4',
    '500': '#ccebd7',
    '600': '#b4dfc4',
    '700': '#92ceac',
    '800': '#5bb98c',
    '900': '#30a46c'
  },
  yellow: {
    '100': '#abab05',
    '200': '#ffdd02',
    '300': '#ffea01',
    '400': '#ffe601',
    '500': '#fcdb00',
    '600': '#f2c900',
    '700': '#e3b200',
    '800': '#ebbc00',
    '900': '#f5d800'
  },
  orange: {
    '100': '#fefcfb',
    '200': '#fef8f4',
    '300': '#fff1e7',
    '400': '#ffe8d7',
    '500': '#ffdcc3',
    '600': '#ffcca7',
    '700': '#ffb381',
    '800': '#fa934e',
    '900': '#f76808'
  },
  grey: {
    '100': '#fcfcfc',
    '200': '#f8f8f8',
    '300': '#f3f3f3',
    '400': '#ededed',
    '500': '#e8e8e8',
    '600': '#e2e2e2',
    '700': '#dbdbdb',
    '800': '#c7c7c7',
    '900': '#8f8f8f'
  },
  slate: {
    '100': '#fbfcfd',
    '200': '#f8f9fa',
    '300': '#f1f3f5',
    '400': '#eceef0',
    '500': '#e6e8eb',
    '600': '#dfe3e6',
    '700': '#d7dbdf',
    '800': '#c1c8cd',
    '900': '#889096'
  },
  overlay: {
    '100': 'rgba(0, 0, 0, 0.01)',
    '200': 'rgba(0, 0, 0, 0.02)',
    '300': 'rgba(0, 0, 0, 0.03)',
    '400': 'rgba(0, 0, 0, 0.04)',
    '500': 'rgba(0, 0, 0, 0.05)',
    '600': 'rgba(0, 0, 0, 0.06)',
    '700': 'rgba(0, 0, 0, 0.07)',
    '800': 'rgba(0, 0, 0, 0.08)',
    '900': 'rgba(0, 0, 0, 0.09)'
  }
};

/**
 * Light theme example.
 */
export const lightTheme: Theme = {
  name: 'light',
  colors: lightThemeColors,
  typography: {
    families: {
      fontFamily: 'Inter, sans-serif',
      monoFontFamily: 'Monaco, monospace'
    },
    sizes: {
      xs: 8,
      sm: 11,
      md: 16,
      lg: 20,
      xl: 28,
      xxl: 32
    }
  },
  spacings: {
    xs: 2,
    sm: 5,
    md: 10,
    lg: 20,
    xl: 24,
    xxl: 30
  },
  borders: {
    radius: {
      sm: 2,
      md: 5,
      lg: 10
    }
  },
  shadows: {
    100: '0 2px 4px 0 rgba(17,22,26,0.16), 0 0 4px 0 rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26,0.04)',
    200: '0 4px 8px 0 rgba(17,22,26,0.16), 0 4px 8px 0 rgba(17,22,26,0.08), 0 8px 16px 0 rgba(17,22,26,0.04)',
    300: '0 0 8px 0 rgba(17,22,26,0.06), 0 4px 16px 0 rgba(17,22,26,0.08), 0 8px 12px 0 rgba(17,22,26,0.06), 0 16px 24px 0 rgba(17,22,26,0.04)',
    400: '0 4px 12px 0 rgba(17,22,26,0.06), 0 4px 24px 8px rgba(17,22,26,0.12), 0 8px 16px 0 rgba(17,22,26,0.06), 0 32px 40px 0 rgba(17,22,26,0.02)',
    500: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    600: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    700: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    800: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)',
    900: '0 4px 12px 0 rgba(0,0,0,0.08), 0 8px 32px 8px rgba(17,22,26,0.12), 0 16px 24px 8px rgba(17,22,26,0.06), 0 64px 48px 8px rgba(17,22,26,0.06)'
  },
  palettes: {
    body: {
      background: 'white',
      color: 'black'
    },
    primary: {
      background: lightThemeColors.blue['800'],
      color: lightThemeColors.slate['100']
    },
    secondary: {
      background: lightThemeColors.slate['500'],
      color: lightThemeColors.slate['100']
    },
    error: {
      background: lightThemeColors.red['500'],
      color: lightThemeColors.slate['100']
    },
    success: {
      background: lightThemeColors.green['500'],
      color: lightThemeColors.slate['100']
    },
    warning: {
      background: lightThemeColors.orange['500'],
      color: lightThemeColors.slate['100']
    }
  }
};
