import React from 'react';
import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs/blocks';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { theme as defaultTheme } from '../src/utils/Theme/themes/themeDefault';
import { themeUnify } from '../src/utils/Theme/themes/themeUnify';

const THEME = (import.meta as any).env?.VITE_THEME || 'default';
const reablocksTheme = THEME === 'unify' ? themeUnify : defaultTheme;

const cssModules = (import.meta as any).glob([
  '../src/assets/css/default/index.css',
  '../src/assets/css/unify/index.css'
]);
cssModules[`../src/assets/css/${THEME}/index.css`]?.();

const withProvider = (Story, context) => (
  <ThemeProvider theme={reablocksTheme} defaultTheme={reablocksTheme}>
    <Story {...context} />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [
    withProvider,
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark',
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
              <div className={isLight ? 'theme-light' : 'theme-dark'}>
                {children}
              </div>
            </ThemeProvider>
          </DocsContainer>
        );
      },

      codePanel: true
    },
    options: {
      storySort: {
        order: [
          'Docs',
          [
            'Intro',
            'Getting Started',

            'Changelog',
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
