/* eslint-disable react/prop-types */
import './fonts.css';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import type { ThemeVariant } from '../src/utils/Theme/ThemeProvider';
import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import theme from './theme';

let currentCssLink: HTMLLinkElement | null = null;

const loadCss = (variant: ThemeVariant) => {
  if (currentCssLink) {
    currentCssLink.remove();
    currentCssLink = null;
  }

  if (variant === 'custom') {
    return;
  }

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.id = 'reablocks-theme-style';

  if (variant === 'unify') {
    // @ts-expect-error - CSS imports are handled by Storybook's build system
    import('../src/unify.css');
    link.href = '/src/unify.css';
  } else {
    // @ts-expect-error - CSS imports are handled by Storybook's build system
    import('../src/index.css');
    link.href = '/src/index.css';
  }

  document.head.appendChild(link);
  currentCssLink = link;
};

const WithVariant = (Story, context) => {
  const variant = (context.globals?.themeVariant as ThemeVariant) || 'default';

  useEffect(() => {
    loadCss(variant);
  }, [variant]);

  return (
    <ThemeProvider variant={variant}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [
    WithVariant,
    withThemeByClassName({
      themes: {
        light: 'theme-light',
        dark: 'theme-dark'
      },
      defaultTheme: 'dark'
    })
  ],
  initialGlobals: {
    themeVariant: 'default'
  },
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    controls: { hideNoControlsWarning: true },
    docs: {
      theme,
      container: ({ children, ...props }) => {
        const DocsThemeWrapper: React.FC = () => {
          const isLight =
            props.context?.store?.globals?.globals?.theme === 'light';
          const variant =
            (props.context?.store?.globals?.globals?.themeVariant as
              | 'default'
              | 'unify'
              | 'custom') || 'default';

          useEffect(() => {
            loadCss(variant);
          }, [variant]);

          return (
            <DocsContainer {...props} context={props.context}>
              <ThemeProvider variant={variant}>
                <div className={isLight ? 'theme-light' : 'theme-dark'}>
                  {children}
                </div>
              </ThemeProvider>
            </DocsContainer>
          );
        };

        return <DocsThemeWrapper />;
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
