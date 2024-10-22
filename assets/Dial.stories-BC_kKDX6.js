import"./index-DcZGqPg1.js";import{d as i}from"./DataMockWrapper-CL0a81BX.js";import"./custom-element-BSS606lH.js";const h={title:"Components/Inputs/Dial",tags:["autodocs"],render:e=>"<os-dial "+(e.defaultDialValue?`defaultDialValue="${e.defaultDialValue}" `:"")+(e.range?`range="${e.range}" `:"")+"></os-dial>",argTypes:{data:{description:"Data object to pass to the component",control:{type:"object"}}},args:{data:{onChange:"Callback function to report the value of the dial",onUserVote:"Callback function to report the user voting action",hasUserVoted:"Boolean to show if the user has voted"}},parameters:{docs:{description:{component:`This is an incomplete prototype of a Dial component. The idea to to use it for voting or rating.  
The plan is to add a little animation to the user interaction. You can click and drag the center of the dial to change the value.  
The center of the dial will move up/down resisting your drag

---

This needs work to improve the resistance for the drag (and selecting the value <-- too sensitive). The basics are in place though. I know the styles are pretty bad, but the idea is that if you have not voted yet, the dial is blue and once you do vote it it lit up.`}}}},t={args:{defaultDialValue:5,range:[0,10]},decorators:[e=>i(e,{onChange:(n,s)=>{},onUserVote:(n,s)=>{},hasUserVoted:!1})]};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    // primary: true,
    // label: "Button"
    defaultDialValue: 5,
    range: [0, 10]
  },
  decorators: [Story => {
    return dataMockWrapper(Story, {
      onChange: (e, shadowRoot) => {
        // shadowRoot.querySelector('[data-has-user-voted]').setAttribute('data-has-user-voted', true);
      },
      onUserVote: (e, shadowRoot) => {
        // shadowRoot.querySelector('[data-has-user-voted]').setAttribute('data-has-user-voted', true);
      },
      hasUserVoted: false
    });
  }]
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const c=["Primary"];export{t as Primary,c as __namedExportsOrder,h as default};
