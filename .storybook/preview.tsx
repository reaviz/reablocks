import { ThemeProvider, darkTheme } from '../src/utils/Theme';
import theme from './theme';
import { Preview } from '@storybook/react';

const withProvider = (Story, context) => (
  <ThemeProvider theme={darkTheme}>
    <Story {...context} />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [
    withProvider
  ],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    controls: { hideNoControlsWarning: true },
    docs: {
      theme
    },
    options: {
      storySort: {
        order: ['Docs', ['Intro'], 'Components', '*']
      }
    }
  }
};

export default preview;
