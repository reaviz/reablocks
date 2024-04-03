import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

// I really don't like this but this solution wouldn't
// work for me because it would cause circular loops
// https://tailwindcss.com/docs/theme#referencing-other-values
const newColors = {
  'blue-ribbon': {
    // primary
    DEFAULT: '#105EFF'
  },
  'black-pearl': {
    // panel
    DEFAULT: '#02020F'
  },
  'athens-gray': {
    // text
    DEFAULT: '#F7F7FA'
  },
  vulcan: {
    // background
    DEFAULT: '#11111F'
  },
  charade: {
    // surface
    DEFAULT: '#242433'
  },
  waterloo: {
    // accent
    DEFAULT: '#77778C'
  },
  anakiwa: {
    // active accent
    DEFAULT: '#93B6FF'
  }
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
      '9xl': '8rem',
    },
    extend: {
      colors: {
        ...newColors,
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        error: colors.red,
        warning: colors.orange,
        info: colors.sky,
        disabled: colors.gray['400'], // text-disabled
        light: {
          background: colors.gray['100'],
          disabled: colors.gray['200'],
        },
        dark: {
          background: newColors['vulcan'].DEFAULT,
          disabled: colors.zinc['600']
        }
      },
      backgroundImage: {
        'bottom-border-glow': `radial-gradient(circle at center, ${newColors.anakiwa.DEFAULT} 0, blue, transparent 100%)`,
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
    plugin(({ addVariant }) => {
      addVariant(
        'disabled-within',
        '&:has(input:is(:disabled),button:is(:disabled))'
      );
    })
  ]
};

export default config;
