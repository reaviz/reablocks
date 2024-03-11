import theme from './theme';
import { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { DocsContainer } from '@storybook/addon-docs';

import { ThemeProvider, darkTheme as oldTheme } from '../src/utils/Theme';
import { darkTheme, lightTheme, ThemeProvider as TWThemeProvider } from '../src/utils/Theme/TW';

import '../src/index.css';

const withProvider = (Story, context) => {
  const theme = context.globals.theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={oldTheme}>
      <TWThemeProvider theme={theme}>
        <Story {...context} />
      </TWThemeProvider>
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
          <ThemeProvider theme={oldTheme}>
            <TWThemeProvider theme={darkTheme}>
              {children}
            </TWThemeProvider>
          </ThemeProvider>
        </DocsContainer>
      ),
    },
    options: {
      storySort: {
        order: ['Docs', ['Intro', 'Support', 'Getting Started', ['Setup', 'Philosophy', 'Storybook', 'Migration']], 'Components', '*']
      }
    }
  }
};

export default preview;
