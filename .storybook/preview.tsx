/* eslint-disable react/prop-types */
import './fonts.css';

import { DocsContainer } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import React, { useEffect, useRef } from 'react';

import { ThemeProvider } from '../src/utils/Theme/ThemeProvider';
import theme from './theme';

let currentCssLink: HTMLLinkElement | null = null;

const loadCss = (variant: 'default' | 'unify') => {
  if (currentCssLink) {
    currentCssLink.remove();
    currentCssLink = null;
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

const ThemeWrapper: React.FC<{
  Story: React.ComponentType;
  context: { globals?: { themeVariant?: 'default' | 'unify' } };
}> = ({ Story, context }) => {
  const variant =
    (context.globals?.themeVariant as 'default' | 'unify') || 'default';
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!loadedRef.current) {
      loadCss(variant);
      loadedRef.current = true;
    } else {
      loadCss(variant);
    }
  }, [variant]);

  return (
    <ThemeProvider variant={variant}>
      <Story />
    </ThemeProvider>
  );
};

const withProvider = (
  Story: React.ComponentType,
  context: { globals?: { themeVariant?: 'default' | 'unify' } }
) => <ThemeWrapper Story={Story} context={context} />;

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
  globalTypes: {
    themeVariant: {
      description: 'Theme variant',
      defaultValue: 'default',
      toolbar: {
        title: 'Theme Variant',
        icon: 'paintbrush',
        items: [
          { value: 'default', title: 'Default' },
          { value: 'unify', title: 'Unify' }
        ],
        dynamicTitle: true
      }
    }
  },
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on.*' },
    controls: { hideNoControlsWarning: true },
    docs: {
      theme,
      container: ({ children, ...props }) => {
        // For whatever reason the theme is not getting applied to docs
        // This is a workaround to apply the theme to the docs
        const DocsThemeWrapper: React.FC = () => {
          const isLight =
            props.context?.store?.globals?.globals?.theme === 'light';
          const variant =
            (props.context?.store?.globals?.globals?.themeVariant as
              | 'default'
              | 'unify') || 'default';

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
