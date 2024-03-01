import { darkColors } from '../themes';
import { RecursiveKeyValuePair } from 'tailwindcss/types/config';

export const twAdditionalConfiguration = {
  // Remove it and use default TailwindCSS configuration
  colors: {
    black: darkColors.black,
    white: darkColors.white,
    red: darkColors.red as RecursiveKeyValuePair,
    purple: darkColors.purple as RecursiveKeyValuePair,
    blue: darkColors.blue as RecursiveKeyValuePair,
    green: darkColors.green as RecursiveKeyValuePair,
    yellow: darkColors.yellow as RecursiveKeyValuePair,
    orange: darkColors.orange as RecursiveKeyValuePair,
    gray: darkColors.gray as RecursiveKeyValuePair,
    pink: darkColors.pink as RecursiveKeyValuePair,
    slate: darkColors.slate as RecursiveKeyValuePair,
    primary: darkColors.primary as RecursiveKeyValuePair,
    secondary: darkColors.secondary as RecursiveKeyValuePair,
    overlay: darkColors.overlay as RecursiveKeyValuePair
  },
  spacing: {
    '5px': '5px'
  }
};
