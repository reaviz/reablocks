import { type Config } from 'tailwindcss';

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
    },
  },
  plugins: [],
};

export default config;
