import { Colors, DesignTokens } from '../types';
import { borders, spacings } from './common';

export const darkColors: Colors = {
  black: '#000000',
  white: '#ffffff',
  red: {
    900: '#1f1315',
    800: '#291415',
    700: '#3c181a',
    600: '#481a1d',
    500: '#541b1f',
    400: '#671e22',
    300: '#822025',
    200: '#aa2429',
    100: '#e5484d',
    50: '#f2555a'
  },
  purple: {
    900: '#1b141d',
    800: '#221527',
    700: '#301a3a',
    600: '#3a1e48',
    500: '#432155',
    400: '#4e2667',
    300: '#5f2d84',
    200: '#7938b2',
    100: '#8e4ec6',
    50: '#9d5bd2'
  },
  blue: {
    900: '#0f1720',
    800: '#0f1b2d',
    700: '#10243e',
    600: '#102a4c',
    500: '#0f3058',
    400: '#0d3868',
    300: '#0a4481',
    200: '#0954a5',
    100: '#0091ff',
    50: '#369eff'
  },
  green: {
    900: '#0d1912',
    800: '#0f1e13',
    700: '#132819',
    600: '#16301d',
    500: '#193921',
    400: '#1d4427',
    300: '#245530',
    200: '#2f6e3b',
    100: '#46a758',
    50: '#55b467'
  },
  yellow: {
    900: '#1c1500',
    800: '#221a00',
    700: '#2c2100',
    600: '#352800',
    500: '#3e3000',
    400: '#493c00',
    300: '#594a05',
    200: '#705e00',
    100: '#f5d90a',
    50: '#ffef5c'
  },
  orange: {
    900: '#1f1206',
    800: '#2b1400',
    700: '#391a03',
    600: '#441f04',
    500: '#4f2305',
    400: '#5f2a06',
    300: '#763205',
    200: '#943e00',
    100: '#f76808',
    50: '#ff802b'
  },
  gray: {
    900: '#161616',
    800: '#1c1c1c',
    700: '#232323',
    600: '#282828',
    500: '#2e2e2e',
    400: '#343434',
    300: '#3e3e3e',
    200: '#505050',
    100: '#707070',
    50: '#7e7e7e'
  },
  slate: {
    900: '#151718',
    800: '#1a1d1e',
    700: '#202425',
    600: '#26292b',
    500: '#2b2f31',
    400: '#313538',
    300: '#3a3f42',
    200: '#4c5155',
    100: '#697177',
    50: '#787f85'
  },
  overlay: {
    100: 'rgba(0, 0, 0, 0.01)',
    200: 'rgba(0, 0, 0, 0.02)',
    300: 'rgba(0, 0, 0, 0.03)',
    400: 'rgba(0, 0, 0, 0.04)',
    500: 'rgba(0, 0, 0, 0.05)',
    600: 'rgba(0, 0, 0, 0.06)',
    700: 'rgba(0, 0, 0, 0.07)',
    800: 'rgba(0, 0, 0, 0.08)',
    900: 'rgba(0, 0, 0, 0.09)'
  }
};

/**
 * Dark theme example.
 */
export const darkTheme: DesignTokens = {
  colors: darkColors,
  typography: {
    families: {
      fontFamily: 'Inter, sans-serif',
      monoFontFamily: 'Monaco, monospace'
    },
    sizes: {
      xs: '8px',
      sm: '11px',
      md: '16px',
      lg: '20px',
      xl: '28px',
      xxl: '32px'
    }
  },
  spacings,
  borders,
  gradients: {
    blue: {
      '100': 'linear-gradient(204deg, #19D4EE 10%, #4B5CFA 100%)',
      '200': 'linear-gradient(30deg, #2E27AD 0%, #679BFF 100%)'
    },
    orange: {
      '100': 'linear-gradient(45deg, #C8511B 0%, #FFA800 100%)'
    },
    red: {
      '100': 'linear-gradient(204deg, #FF8A8A 10%, #C14941 100%)'
    },
    green: {
      '100': 'linear-gradient(45deg, #055F4E 0%, #56C0A7 100%)'
    },
    pink: {
      '100': 'linear-gradient(204deg, #FC7AFF 10%, #C15179 100%)'
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
      background: darkColors.gray['900'],
      color: darkColors.white
    },
    primary: {
      background: darkColors.blue['800'],
      color: darkColors.slate['100']
    },
    secondary: {
      background: darkColors.slate['500'],
      color: darkColors.slate['100']
    },
    error: {
      background: darkColors.red['200'],
      color: darkColors.slate['100']
    },
    success: {
      background: darkColors.green['500'],
      color: darkColors.slate['100']
    },
    warning: {
      background: darkColors.orange['500'],
      color: darkColors.slate['100']
    }
  },
  components: {
    divider: {
      'divider-spacing': spacings.md,
      'divider-background': darkColors.gray['500']
    },
    card: {
      'card-border-radius': borders.radius.md,
      'card-spacing': spacings.md,
      'card-background': darkColors.slate['800'],
      'card-color': darkColors.slate['50']
    },
    block: {
      'block-spacing': spacings.md,
      'block-label-spacing': spacings.xs
    },
    list: {
      'list-item-spacing': spacings.md,
      'list-item-dense-spacing': spacings.sm
    },
    button: {
      'button-background': darkColors.blue['800'],
      'button-spacing': `${spacings.sm} ${spacings.md}`,
      'button-border-radius': borders.radius.md,
      'button-color': darkColors.slate['100'],
      'button-border': `solid 1px ${darkColors.gray['500']}`
    },
    input: {
      'input-background': darkColors.slate['800'],
      'input-color': darkColors.white,
      'input-border-radius': borders.radius.md,
      'input-border': `solid 1px ${darkColors.gray['500']}`,
      'input-spacing-md': `${spacings.sm} ${spacings.md}`,
      'input-spacing-sm': spacings.sm,
      'input-spacing-lg': spacings.lg
    }
  }
};
