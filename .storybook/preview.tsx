import { ThemeProvider, darkTheme } from '../src/utils/Theme';
import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        dark: darkTheme
      },
      defaultTheme: 'dark',
      Provider: ThemeProvider
    })
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
