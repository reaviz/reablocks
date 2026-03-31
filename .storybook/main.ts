import path from 'path';
import { fileURLToPath } from 'url';
import type { StorybookConfig } from '@storybook/react-vite';
import type { Plugin } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function themeCssPlugin(): Plugin {
  const THEME = process.env.VITE_THEME || 'default';
  const virtualId = 'virtual:theme-css';
  const resolvedId = '\0' + virtualId;

  return {
    name: 'theme-css',
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) {
        const cssPath = path.resolve(
          __dirname,
          `../src/assets/css/${THEME}/index.css`
        );
        return `import ${JSON.stringify(cssPath)}`;
      }
    }
  };
}

const config: StorybookConfig = {
  stories: [
    '../docs/**/*.mdx',
    '../docs/**/*.story.tsx',
    '../src/**/*.story.tsx'
  ],
  addons: ['@storybook/addon-themes', '@storybook/addon-docs'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },
  viteFinal: async config => {
    config.plugins = [...(config.plugins || []), themeCssPlugin()];
    return config;
  }
};

export default config;
