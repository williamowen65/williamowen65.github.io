import { fn } from '@storybook/test';

import './forum-card-vote';
import dataMockWrapper from '../../../../utils/DataMockWrapper';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
/**
 * This button is a simple button that can be used to trigger actions.  
 * Styles need an update.
 */
export default {
  title: 'Components/Cards/Forum Card/Votes',
  tags: ['autodocs'],
  render: (args) => {
    return `<os-forum-card-vote ` +
    `${args.totalVoteCount? `totalVoteCount=${args.totalVoteCount} ` : ""} ` +
    `${args.averageVote? `averageVote=${args.averageVote} ` : ""} ` +
    `${args.userVote? `userVote=${args.userVote} ` : ""} ` +
    `></os-forum-card-vote>`
  },
  argTypes: {
    userVote: { control: 'number', min: 0, max: 10 },
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
    totalVoteCount: 1,
    averageVote: 10,
    // userVote: 10
  },
  decorators: [
    Story => {
      return dataMockWrapper(Story, {
        onChange: (e, forumShadowRoot, dialShadowRoot) => {  
            console.log("story", dialShadowRoot)
          },
        onUserVote: (e,  forumShadowRoot, dialShadowRoot) => {  
          dialShadowRoot.querySelector('[data-has-user-voted]').setAttribute('data-has-user-voted', true);
          forumShadowRoot.querySelector('.count').innerText = 2
        },
        hasUserVoted: false
      });
    }
]
};
