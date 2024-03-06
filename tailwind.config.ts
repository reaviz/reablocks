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
      // Define next colors to be used in the project
      // primary, secondary, success, error, warning, info, disabled
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        error: colors.red,
        warning: colors.orange,
        info: colors.sky,
        disabled: colors.gray['400'],
        // text-disabled
        // bg-disabled
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
