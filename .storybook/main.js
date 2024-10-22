// .storybook/main.js
const config = {
  stories: [
    "../stories/WelcomePage.mdx",
    "../stories/StartHere.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/**/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/**/**/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.html$/i,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.css$/i,
      use: 'raw-loader',
    });
    config.module.rules.push({
      test: /\.scss$/i,
      use: 'raw-loader ! sass-loader',
    });
    config.module.rules.push({
      test: /\.svg$/i,
      use: 'raw-loader',
    });

    return config;
  },
};

module.exports = config;
