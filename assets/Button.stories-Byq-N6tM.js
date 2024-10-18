import{f as B}from"./index-DcZGqPg1.js";import"./Button-BKbssXlA.js";const C={title:"Components/Buttons/Button",tags:["autodocs"],render:r=>"<os-button "+(r.primary?`primary="${r.primary}"`:"")+(r.size?`size="${r.size}"`:"")+`>${r.label}</os-button>`,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:B()}},e={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};var t,n,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(i=(m=o.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var u,p,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const f=["Primary","Secondary","Large","Small"];export{a as Large,e as Primary,o as Secondary,s as Small,f as __namedExportsOrder,C as default};
