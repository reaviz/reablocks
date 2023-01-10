module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../docs/**/*.story.tsx',
    '../docs/**/*.story.mdx',
    '../src/**/*.story.tsx'
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      type: 'javascript/auto',
      test: /\.mjs$/,
      include: /node_modules/
    });

    return config;
  }
};
