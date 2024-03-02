import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
