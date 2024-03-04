import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

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
        info: {},
        disabled: colors.gray['400'],
      }
    },
  },
  plugins: [],
};

export default config;
