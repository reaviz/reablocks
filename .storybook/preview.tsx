import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { theme as reablocksTheme } from '../src';

import '../src/index.css';

const withProvider = (Story, context) => {
  return (
    <ThemeProvider theme={reablocksTheme}>
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
      theme: theme,
      container: ({ children, ...props }: any) => {
        // NOTE: This feels super hacky but seems to be the only way to get
        // the theme from the story provider


        return (
          <DocsContainer {...props}>
            <ThemeProvider theme={reablocksTheme}>
              {children}
            </ThemeProvider>
          </DocsContainer>
        );
      }
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
          'Blocks',
          [
            'Authentication',
            [
              'Introduction',
              '*'
            ],
            'Administration',
            [
              'Introduction',
              '*'
            ],
          ],
          'Recipes',
          '*'
        ]
      }
    }
  }
};

export default preview;
