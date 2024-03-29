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
  'vulcan': {
    // background
    DEFAULT: '#11111F'
  },
  'charade': {
    // surface
    DEFAULT: '#242433',
  },
  'waterloo': {
    // accent
    DEFAULT: '#77778C'
  },
  'anakiwa': {
    // active accent
    DEFAULT: '#93B6FF'
  }
};

const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './docs/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
    },
    fontSize: {
      sm: '12px',
      base: '14px'
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
      }
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('disabled-within', '&:has(input:is(:disabled),button:is(:disabled))');
    })
  ]
};

export default config;
