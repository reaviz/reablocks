import React from 'react';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import { theme as defaultTheme } from '../src/utils/Theme/themes/themeDefault';
import { themeUnify } from '../src/utils/Theme/themes/themeUnify';

import 'virtual:theme-css';

const THEME = (import.meta as any).env?.VITE_THEME || 'default';
const reablocksTheme = THEME === 'unify' ? themeUnify : defaultTheme;

const withProvider = (Story, context) => (
  <ThemeProvider overrides={reablocksTheme} theme={reablocksTheme}>
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
