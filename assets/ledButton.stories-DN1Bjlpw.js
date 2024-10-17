import{f as E}from"./index-DcZGqPg1.js";const v=({primary:s=!1,size:n="medium",backgroundColor:f,label:C,onClick:w})=>{const e=document.createElement("button");e.type="button",e.innerText=C,e.addEventListener("click",w);const z=s?"storybook-button--primary":"storybook-button--secondary";return e.className=["storybook-button",`storybook-button--${n}`,z].join(" "),e.style.backgroundColor=f,e},L={title:"Components/Buttons/LED Button",tags:["autodocs"],render:({label:s,...n})=>v({label:s,...n}),argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:E()},parameters:{docs:{description:{component:`Shows a button with visual effects  
Every now and then it will show light   
Click/hover will make the light react`}}}},o={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,u,d,p,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source},description:{story:"test",...(b=(p=r.parameters)==null?void 0:p.docs)==null?void 0:b.description}}};var g,y,k;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var B,S,h;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(h=(S=a.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};const _=["Primary","Secondary","Large","Small"];export{t as Large,o as Primary,r as Secondary,a as Small,_ as __namedExportsOrder,L as default};
