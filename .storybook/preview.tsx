import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { darkTheme, lightTheme } from '../src';

import '../src/index.css';

const withProvider = (Story, context) => {
  const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [
    withProvider,
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    controls: { hideNoControlsWarning: true },
    docs: {
      theme,
      container: ({ children, ...props }: any) => (
        <DocsContainer {...props}>
          <ThemeProvider theme={darkTheme}>
            {children}
          </ThemeProvider>
        </DocsContainer>
      ),
    },
    options: {
      storySort: {
        order: [
          'Docs',
          [
            'Intro',
            'Getting Started',
            [
              'Setup',
              'Philosophy',
              'Storybook',
              'Migration'
            ],
            'Theme',
            [
              'Getting Started',
              'API',
              'Blocks',
              'Example'
            ],
            'Components',
            'Advanced',
            'Support',
          ],
          'Components',
          '*'
        ]
      }
    }
  }
};

export default preview;
