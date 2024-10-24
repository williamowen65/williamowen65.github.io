import { fn } from '@storybook/test';

import './Dial.js';
import dataMockWrapper from '../../../utils/DataMockWrapper.js';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories

/**
  This is an incomplete prototype of a Dial component. The idea to to use it for voting or rating.  
  The plan is to add a little animation to the user interaction. You can click and drag the center of the dial to change the value.  
  The center of the dial will move up/down resisting your drag

  ---

  * This needs work to improve the resistance for the drag (and selecting the value <-- too sensitive). The basics are in place though. I know the styles are pretty bad, but the idea is that if you have not voted yet, the dial is blue and once you do vote it it lit up.
 */
export default {
  title: 'Components/Inputs/Dial',
  tags: ['autodocs'],
  render: (args) => {
    return `<os-dial ` +
     (args.defaultDialValue ? `defaultDialValue="${args.defaultDialValue}" ` : "") +
     (args.range ? `range="${args.range}" ` : "") +
    `></os-dial>`
  },
  argTypes: {
    // backgroundColor: { control: 'color' },
    // label: { control: 'text' },
    // onclick: { action: 'onClick' },
    // primary: { control: 'boolean' },
    data: {
      description: "Data object to pass to the component",
      control: { type: 'object' },
     
    }
    // size: {
    //   control: { type: 'select' },
    //   options: ['small', 'medium', 'large'],
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: {
      data: {
        onChange: "Callback function to report the value of the dial",
        onUserVote: "Callback function to report the user voting action",
        hasUserVoted: "Boolean to show if the user has voted"
      }
    },
  // args: { onclick: 'alert("hi")' },
};

/* 
  To create a simple button, you can simply extend the Button component and set the label.
*/
export const Primary = {
  args: {
    // primary: true,
    // label: "Button"
    defaultDialValue: 5,
    range: [0, 10],
  },
  decorators: [
    Story => {
      return dataMockWrapper(Story, {
        onChange: (e, shadowRoot) => {  
          // shadowRoot.querySelector('[data-has-user-voted]').setAttribute('data-has-user-voted', true);
        },
        onUserVote: (e, shadowRoot) => {  
          // shadowRoot.querySelector('[data-has-user-voted]').setAttribute('data-has-user-voted', true);
        },
        hasUserVoted: false
      });
    }
  ]
};