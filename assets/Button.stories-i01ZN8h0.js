import{f as B}from"./index-DcZGqPg1.js";import"./Button-BTU4bRlW.js";import"./custom-element-BSS606lH.js";const C={title:"Components/Buttons/Button",tags:["autodocs"],render:r=>"<os-button "+(r.backgroundColor?`backgroundColor="${r.backgroundColor}" `:"")+(r.primary?`primary="${r.primary}" `:"")+(r.size?`size="${r.size}" `:"")+(r.onclick?"onclick='"+String(r.onclick)+"'":"")+`>${r.label}</os-button>`,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onclick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onclick:B},parameters:{docs:{description:{component:`This button is a simple button that can be used to trigger actions.  
Styles need an update.`}}}},o={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},t={args:{size:"small",label:"Button"}};var n,s,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var l,i,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const f=["Primary","Secondary","Large","Small"];export{a as Large,o as Primary,e as Secondary,t as Small,f as __namedExportsOrder,C as default};
