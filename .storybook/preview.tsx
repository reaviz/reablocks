
/* eslint-disable react/prop-types */
import './fonts.css';
import '../src/index.css';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React, { useEffect } from 'react';

import unifyCss from '../src/unify.css?inline';
import type { ThemeVariant } from '../src/utils/Theme/ThemeProvider';
import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import theme from './theme';

const UNIFY_STYLE_ID = 'reablocks-unify-css';

const applyVariantCss = (variant: ThemeVariant) => {
  const existing = document.getElementById(UNIFY_STYLE_ID);
  if (variant === 'unify') {
    if (!existing) {
      const style = document.createElement('style');
      style.id = UNIFY_STYLE_ID;
      style.textContent = unifyCss;
      document.head.appendChild(style);
    }
  } else {
    existing?.remove();
  }
};

const WithVariant = (Story, context) => {
  const variant = (context.globals?.themeVariant as ThemeVariant) || 'default';

  useEffect(() => {
    applyVariantCss(variant);
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
            applyVariantCss(variant);
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
