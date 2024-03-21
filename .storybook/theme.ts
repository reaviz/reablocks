import { create } from '@storybook/theming/create';
import ReablocksLogo from '../docs/assets/logo.svg';

export default create({
  base: 'dark',
  brandTitle: 'reablocks',
  brandUrl: 'https://github.com/reaviz/reablocks',
  brandImage: ReablocksLogo,
  colorPrimary: '#0C77FF',
  appContentBg: '#030712',
  appPreviewBg: '#030712',
  fontBase: 'Gilroy,Arial,Helvetica,sans-serif',
  appBg: '#030712',
  textColor: '#FFFFFF',
  barBg: '#030712',
  appBorderColor: '#1f2937',
  inputBorder: '#1f2937',
  buttonBorder: '#1f2937'
});
