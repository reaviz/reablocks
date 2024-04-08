import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';

export const colorPalette = {
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F2F3F7',
    200: '#E2E2EA',
    300: '#C6CBD9',
    400: '#9A9AAF',
    500: '#7E7E8F',
    600: '#656575',
    700: '#535362',
    800: '#2E2E3A',
    900: '#262631',
    950: '#16161E'
  },
  magenta: {
    100: '#FAE5F6',
    200: '#F1BFE9',
    300: '#E480D3',
    400: '#D740BE',
    500: '#C900A8',
    600: '#AB018F',
    700: '#8C0276',
    800: '#6E025C',
    900: '#4F0343',
    950: '#31042A'
  },
  pink: {
    100: '#FDE5F1',
    200: '#F9BFDB',
    300: '#F480B7',
    400: '#EE4094',
    500: '#DE006B',
    600: '#BB015A',
    700: '#98014A',
    800: '#740239',
    900: '#510229',
    950: '#2E0318'
  },
  lime: {
    100: '#F4FAE5',
    200: '#E3F3BF',
    300: '#C6E880',
    400: '#AADC40',
    500: '#8ED000',
    600: '#78B001',
    700: '#628F01',
    800: '#4C6F02',
    900: '#364E02',
    950: '#202E03'
  },
  teal: {
    100: '#E5FBF9',
    200: '#BFF6F0',
    300: '#80EDE0',
    400: '#40E5D1',
    500: '#00DCC2',
    600: '#00C2AB',
    700: '#019A88',
    800: '#017365',
    900: '#024B42',
    950: '#02231F'
  },
  cyan: {
    100: '#E5F9FE',
    200: '#BFF0FB',
    300: '#80E2F8',
    400: '#40D3F4',
    500: '#00C5F0',
    600: '#01A7CB',
    700: '#0289A6',
    800: '#036B82',
    900: '#044D5D',
    950: '#052F38'
  },
  violet: {
    100: '#F0E8FD',
    200: '#DAC5F9',
    300: '#B58BF3',
    400: '#9152EE',
    500: '#6C18E8',
    600: '#5B14C5',
    700: '#4B10A1',
    800: '#3A0D7E',
    900: '#2A095B',
    950: '#190537'
  },
  purple: {
    100: '#F3E5FC',
    200: '#E2BFF7',
    300: '#C580F0',
    400: '#A840E8',
    500: '#8B00E0',
    600: '#7501BC',
    700: '#5F0298',
    800: '#490274',
    900: '#330350',
    950: '#1D042D'
  },
  red: {
    100: '#FCE5E6',
    200: '#F7BFC1',
    300: '#F08083',
    400: '#E84045',
    500: '#E00007',
    600: '#B70006',
    700: '#8E0005',
    800: '#660104',
    900: '#3D0103',
    950: '#200204'
  },
  orange: {
    100: '#FEF3E5',
    200: '#FDE1BF',
    300: '#FBC280',
    400: '#F8A340',
    500: '#F68500',
    600: '#CB6E00',
    700: '#9F5701',
    800: '#743F01',
    900: '#482802',
    950: '#251602'
  },
  yellow: {
    100: '#FFF9E5',
    200: '#FFF1BF',
    300: '#FFE380',
    400: '#FFD440',
    500: '#FFC600',
    600: '#D2A300',
    700: '#A58001',
    800: '#785E01',
    900: '#4B3B02',
    950: '#261F03'
  },
  green: {
    100: '#EEF8E9',
    200: '#D5EFC8',
    300: '#AADF91',
    400: '#80CE5B',
    500: '#55BE24',
    600: '#469D1D',
    700: '#377C16',
    800: '#275C10',
    900: '#183B09',
    950: '#091A02'
  },
  blue: {
    100: '#E7EFFF',
    200: '#C3D7FF',
    300: '#87AEFF',
    400: '#4C86FF',
    500: '#105EFF',
    600: '#0D4ED2',
    700: '#0A3DA6',
    800: '#082D79',
    900: '#051C4C',
    950: '#041028'
  },
  // I really don't like this but this solution wouldn't
  // work for me because it would cause circular loops
  // https://tailwindcss.com/docs/theme#referencing-other-values
  'black-pearl': '#02020F',
  'athens-gray': '#F7F7FA',
  vulcan: '#11111F',
  charade: '#242433',
  waterloo: '#77778C',
  anakiwa: '#93B6FF'
};

const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{js,jsx,ts,tsx,mdx}'
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      sm: '0.75rem', // 12px
      base: '0.875rem', // 14px
      lg: '1rem', // 16px
      // Rest are defaults
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    extend: {
      colors: colorPalette,
      backgroundImage: {
        'bottom-border-glow': `radial-gradient(circle at center, ${colorPalette.anakiwa} 0, blue, transparent 100%)`,
        'button-gradient':
          'linear-gradient(283deg, #0808A5 0%, rgba(8, 8, 165, 0.00) 100%)',
        'button-gradient-hover':
          'linear-gradient(283deg, #44F 0%, rgba(23, 23, 255, 0.10) 100%)',
        'button-gradient-focus':
          'linear-gradient(283deg, #0D0DD2 0%, rgba(23, 23, 255, 0.10) 100%)'
      }
    }
  },
  plugins: [
    createThemes({
      light: {
        primary: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[400],
          inactive: colorPalette.gray[500]
        },
        secondary: {
          DEFAULT: colorPalette.gray[300],
          active: colorPalette.gray[300],
          hover: colorPalette.gray[200],
          inactive: colorPalette.gray[800]
        },
        success: {
          DEFAULT: colorPalette.green[500],
          active: colorPalette.green[500],
          hover: colorPalette.green[400],
          fill: colorPalette.green[950]
        },
        error: {
          DEFAULT: colorPalette.red[500],
          active: colorPalette.red[400],
          hover: colorPalette.red[600],
          fill: colorPalette.red[950]
        },
        warning: {
          DEFAULT: colorPalette.orange[500],
          active: colorPalette.orange[500],
          hover: colorPalette.orange[400],
          fill: colorPalette.orange[950]
        },
        info: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[400],
          fill: colorPalette.blue[950]
        },
        background: {
          level1: colorPalette.white,
          level2: colorPalette.gray[100],
          level3: colorPalette.gray[200],
          level4: colorPalette.gray[300]
        },
        panel: {
          DEFAULT: colorPalette['white'],
          content: colorPalette['vulcan'],
          'secondary-content': colorPalette.gray[700]
        },
        surface: {
          DEFAULT: colorPalette.gray[300],
          content: colorPalette.black,
          accent: colorPalette.blue[500],
          disabled: colors.gray[300]
        }
      },
      dark: {
        primary: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[600],
          inactive: colorPalette.blue[200]
        },
        secondary: {
          DEFAULT: colorPalette.gray[700],
          active: colorPalette.gray[700],
          hover: colorPalette.gray[800],
          inactive: colorPalette.gray[400]
        },
        success: {
          DEFAULT: colorPalette.green[500],
          active: colorPalette.green[500],
          hover: colorPalette.green[600],
          fill: colorPalette.green[100]
        },
        error: {
          DEFAULT: colorPalette.red[500],
          active: colorPalette.red[500],
          hover: colorPalette.red[600],
          fill: colorPalette.red[100]
        },
        warning: {
          DEFAULT: colorPalette.orange[500],
          active: colorPalette.orange[500],
          hover: colorPalette.orange[600],
          fill: colorPalette.orange[100]
        },
        info: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[600],
          fill: colorPalette.blue[100]
        },
        background: {
          // Page background
          level1: colorPalette.white,
          level2: colorPalette.gray[950],
          level3: colorPalette.gray[900],
          level4: colorPalette.gray[800]
        },
        panel: {
          // Panel backgrounds, such as cards, tables, popovers, dialogs, dropdown menus, etc.
          DEFAULT: colorPalette['black-pearl'],
          content: colorPalette['athens-gray'],
          'secondary-content': colorPalette.gray[600]
        },
        surface: {
          // Form component backgrounds, such as text fields, checkboxes, select, etc.
          DEFAULT: colorPalette['charade'],
          content: colorPalette['athens-gray'],
          accent: colorPalette.blue[500],
          disabled: colors.gray[800]
        }
      }
    }),
    plugin(({ addVariant }) => {
      addVariant(
        'disabled-within',
        '&:has(input:is(:disabled),button:is(:disabled))'
      );
    })
  ]
};

export default config;
