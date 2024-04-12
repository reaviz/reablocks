import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { theme as reablocksTheme } from '../src/utils/Theme/themes/theme';

import '../src/index.css';

const withProvider = (Story, context) => (
  <ThemeProvider theme={reablocksTheme}>
    <Story {...context} />
  </ThemeProvider>
);

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
      container: ({ children, ...props }: any) => {
        // For whatever reason the theme is not getting applied to docs
        // This is a workaround to apply the theme to the docs
        const isLight = props.context?.store?.globals?.globals?.theme === 'light';

        return (
          <DocsContainer {...props}>
            <ThemeProvider theme={reablocksTheme}>
              <div className={isLight ? 'light' : 'dark'}>
                {children}
              </div>
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
            'Utils',
            'Advanced',
            'Support',
          ],
          'Components',
          'Blocks',
          [
            'Foundation',
            [
              'Introduction',
              '*'
            ],
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
