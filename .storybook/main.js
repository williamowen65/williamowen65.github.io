/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/WelcomePage.mdx",
    "../stories/StartHere.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../stories/**/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
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
  
};
export default config;
