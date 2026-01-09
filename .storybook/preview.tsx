import '../src/assets/css/index.css';
import './fonts.css';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React from 'react';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { theme as reablocksTheme } from '../src/utils/Theme/themes/default';
import theme from './theme';

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
        light: 'theme-light',
        dark: 'theme-dark'
      },
      defaultTheme: 'dark'
    })
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
        const isLight =
          props.context?.store?.globals?.globals?.theme === 'light';

        return (
          <DocsContainer {...props}>
            <ThemeProvider theme={reablocksTheme}>
              <div className={isLight ? 'theme-light' : 'theme-dark'}>
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
          ['Intro', 'Getting Started', 'Changelog', 'Support'],
          'Components',
          '*'
        ]
      }
    }
  }
};

export default preview;
