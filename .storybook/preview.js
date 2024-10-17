 

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    docs: {
      toc: true
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
 
  },
};

export default preview;
