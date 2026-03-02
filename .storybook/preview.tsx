/* eslint-disable react/prop-types */
import './fonts.css';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React, { useLayoutEffect } from 'react';

import type { ThemeVariant } from '../src/utils/Theme/ThemeProvider';
import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import theme from './theme';

const CSS_PATHS: Record<Exclude<ThemeVariant, 'custom'>, string> = {
  default: '/src/index.css',
  unify: '/src/unify.css'
};

let currentVariant: ThemeVariant = 'default';

const getThemeLink = () =>
  document.getElementById('reablocks-theme-style') as HTMLLinkElement | null;

const loadCss = (variant: ThemeVariant) => {
  if (variant === currentVariant) return;
  currentVariant = variant;

  const link = getThemeLink();
  if (!link) return;

  if (variant === 'custom') {
    link.disabled = true;
    return;
  }

  link.href = CSS_PATHS[variant];
  link.disabled = false;
};

const WithVariant = (Story, context) => {
  const variant = (context.globals?.themeVariant as ThemeVariant) || 'default';

  useLayoutEffect(() => {
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

          useLayoutEffect(() => {
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
