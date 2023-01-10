import { DesignTokensProvider, darkTheme } from '../src/utils/DesignTokens';
import { theme } from './theme';
import { DocsContainer } from '@storybook/addon-docs';

export const decorators = [
  Story => (
    <DesignTokensProvider value={darkTheme}>
      <Story />
    </DesignTokensProvider>
  )
];

const order = [
  'docs-intro-',
  'docs-getting-started-setup--page',
  'docs-getting-started-philosophy--page',
  'docs-getting-started-storybook--page',
  'design-tokens-',
  'design-tokens-getting-started',
  'components-',
  'blocks-'
];

export const parameters = {
  layout: 'centered',
  options: {
    storySort: (a, b) => {
      const aName = a[0];
      const bName = b[0];

      if (aName.includes('docs-') || bName.includes('docs-')) {
        const aIdx = order.findIndex(i => aName.indexOf(i) > -1);
        const bIdx = order.findIndex(i => bName.indexOf(i) > -1);
        return aIdx - bIdx;
      }

      return aName < bName ? -1 : 1;
    }
  },
  docs: {
    theme,
    container: ({ context, children }) => (
      <DocsContainer context={context}>
        <DesignTokensProvider value={theme}>
          {children}
        </DesignTokensProvider>
      </DocsContainer>
    )
  },
  controls: {
    hideNoControlsWarning: true
  }
};
