module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../docs/**/*.story.mdx',
    '../src/**/*.story.tsx'
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-storysource',
    '@storybook/addon-docs/preset',
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
