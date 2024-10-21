import { fn } from '@storybook/test';

import './forum-card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/**
 * This button is a simple button that can be used to trigger actions.  
 * Styles need an update.
 */
export default {
  title: 'Components/Cards/Forum Card',
  tags: ['autodocs'],
  render: (args) => {
    return `<os-forum-card></os-forum-card>`
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onclick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onclick: fn },
  // args: { onclick: 'alert("hi")' },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    // primary: true,
    // label: "Button",
  },
};
