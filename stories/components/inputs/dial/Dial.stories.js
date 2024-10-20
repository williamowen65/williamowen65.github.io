// import { fn } from '@storybook/test';

import './Dial.js';
console.log("dial file")

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Inputs/Dial',
  tags: ['autodocs'],
  render: (args) => {
    return `<os-dial>${args.label}</os-dial>`
  },
  argTypes: {
    backgroundColor: { control: 'color' },
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
  args: { onclick: 'alert("hi")' },
};
