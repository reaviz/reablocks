import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
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
          background: colors.zinc['800'],
          disabled: colors.zinc['600'],
        }
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('disabled-within', '&:has(input:is(:disabled),button:is(:disabled))');
    })
  ],
};

export default config;
