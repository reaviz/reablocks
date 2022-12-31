module.exports = {
  stories: [
    '../src/**/*.story.mdx',
    '../docs/**/*.story.mdx',
    '../src/**/*.story.tsx'
  ],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-storysource',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@react-theming/storybook-addon'
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
