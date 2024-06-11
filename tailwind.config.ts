import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';
import { createThemes } from 'tw-colors';
import { colorPalette } from './src/utils/Theme/themes/colorPalette';

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
        // Primary
        'button-gradient': 'linear-gradient(283deg, #0808A5 0%, #0808a500 100%)',
        'button-gradient-hover': 'linear-gradient(283deg, #44F 0%, #1717ff1a 100%)',
        'button-gradient-focus': 'linear-gradient(283deg, #0D0DD2 0%, #1717ff1a 100%)',
        'button-gradient-light': 'linear-gradient(283deg, #009BFF 0%, #009bff00 100%)',
        'button-gradient-hover-light': 'linear-gradient(283deg, #45B6FF 0%, #45b6ff4d 100%)',
      }
    }
  },
  plugins: [
    createThemes({
      light: {
        primary: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[600],
          inactive: colorPalette.gray[500]
        },
        secondary: {
          DEFAULT: colorPalette.blue[200],
          active: colorPalette.blue[200],
          hover: colorPalette.blue[300],
          inactive: colorPalette.waterloo
        },
        success: {
          DEFAULT: colorPalette.green[500],
          active: colorPalette.green[500],
          hover: colorPalette.green[600],
          background: colorPalette.green[100]
        },
        error: {
          DEFAULT: colorPalette.red[500],
          active: colorPalette.red[400],
          hover: colorPalette.red[600],
          background: colorPalette.red[100]
        },
        warning: {
          DEFAULT: colorPalette.orange[500],
          active: colorPalette.orange[500],
          hover: colorPalette.orange[600],
          background: colorPalette.orange[100]
        },
        info: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[600],
          background: colorPalette.blue[100]
        },
        panel: {
          // Panel backgrounds, such as cards, tables, popovers, dialogs, dropdown menus, etc.
          DEFAULT: colorPalette['white'],
          content: colorPalette['vulcan'],
          'secondary-content': colorPalette.gray[700],
          accent: colorPalette['mystic']
        },
        surface: {
          // Form component backgrounds, such as text fields, checkboxes, select, etc.
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
          hover: colorPalette.blue[400],
          inactive: colorPalette.blue[200]
        },
        secondary: {
          DEFAULT: colorPalette.charade,
          active: colorPalette.charade,
          hover: colorPalette.gray[700],
          inactive: colorPalette.gray[600]
        },
        success: {
          DEFAULT: colorPalette.green[500],
          active: colorPalette.green[500],
          hover: colorPalette.green[400],
          background: colorPalette.green[950]
        },
        error: {
          DEFAULT: colorPalette.red[500],
          active: colorPalette.red[500],
          hover: colorPalette.red[400],
          background: colorPalette.red[950]
        },
        warning: {
          DEFAULT: colorPalette.orange[500],
          active: colorPalette.orange[500],
          hover: colorPalette.orange[400],
          background: colorPalette.orange[950]
        },
        info: {
          DEFAULT: colorPalette.blue[500],
          active: colorPalette.blue[500],
          hover: colorPalette.blue[400],
          background: colorPalette.blue[950]
        },
        panel: {
          // Panel backgrounds, such as cards, tables, popovers, dialogs, dropdown menus, etc.
          DEFAULT: colorPalette['black-pearl'],
          content: colorPalette['athens-gray'],
          'secondary-content': colorPalette['waterloo'],
          accent: colorPalette['charade']
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
        '&:has(input:is(:disabled),textarea:is(:disabled),button:is(:disabled))'
      );
    })
  ]
};

export default config;
