import { type Config } from 'tailwindcss';
import { twAdditionalConfiguration } from './src/utils/Theme/TW';

const config: Config = {
  content: [
    './.storybook/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      ...twAdditionalConfiguration,
    },
  },
  plugins: [],
};

export default config;
