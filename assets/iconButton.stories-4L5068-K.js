import{f as S}from"./index-DcZGqPg1.js";const f=document.createElement("template");f.innerHTML=`
<style>
.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #1ea7fd;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
  </style>

  <button type="button">
      <slot></slot>
  </button>

`;class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(f.content.cloneNode(!0))}connectedCallback(){let t=this.getAttribute("primary");console.log({primary:t}),t=t===void 0?null:t;let a=this.getAttribute("size");a=a===void 0?null:"medium";const z=this.getAttribute("backgroundColor"),B=t?"storybook-button--primary":"storybook-button--secondary",l=this.shadowRoot.querySelector("button");l.className=["storybook-button",`storybook-button--${a}`,B].join(" "),l.style.backgroundColor=z}}customElements.define("wo-icon-button",C);const A={title:"Components/Buttons/iconButton",tags:["autodocs"],render:o=>"<wo-icon-button "+(o.primary?`primary="${o.primary}"`:"")+(o.size?`size="${o.size}"`:"")+`>${o.label}</wo-icon-button>`,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:S()}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},n={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};var c,i,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var b,y,g;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,x,h;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const E=["Primary","Secondary","Large","Small"];export{n as Large,e as Primary,r as Secondary,s as Small,E as __namedExportsOrder,A as default};
