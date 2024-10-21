import { fn } from '@storybook/test';

import './Dial.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
  This is an incomplete prototype of a Dial component. The idea to to use it for voting or rating.  
  The plan is to add a little animation to the user interaction. You can click and drag the center of the dial to change the value.  
  The center of the dial will move up/down resisting your drag
 */
export default {
  title: 'Components/Inputs/Dial',
  tags: ['autodocs'],
  render: (args) => {
    return `<os-dial></os-dial>`
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
    args: { onchange: fn },
  // args: { onclick: 'alert("hi")' },
};

/* 
  To create a simple button, you can simply extend the Button component and set the label.
*/
export const Primary = {
  args: {
    // primary: true,
    // label: "Button"
  },
};