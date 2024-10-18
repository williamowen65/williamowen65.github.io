import{f as S}from"./index-DcZGqPg1.js";const x=document.createElement("template");x.innerHTML=`
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

`;class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(x.content.cloneNode(!0))}connectedCallback(){let h=this.getAttribute("primary")||null,f=this.getAttribute("size")||"medium";const z=this.getAttribute("backgroundColor")||null,B=h?"storybook-button--primary":"storybook-button--secondary",s=this.shadowRoot.querySelector("button");s.className=["storybook-button",`storybook-button--${f}`,B].join(" "),s.style.backgroundColor=z}}customElements.define("os-icon-button",C);const A={title:"Components/Buttons/iconButton",tags:["autodocs"],render:o=>"<wo-icon-button "+(o.primary?`primary="${o.primary}"`:"")+(o.size?`size="${o.size}"`:"")+`>${o.label}</wo-icon-button>`,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}},args:{onClick:S()}},t={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},r={args:{size:"large",label:"Button"}},n={args:{size:"small",label:"Button"}};var a,l,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var i,u,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(u=e.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,b,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(d=(b=r.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var y,g,k;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const E=["Primary","Secondary","Large","Small"];export{r as Large,t as Primary,e as Secondary,n as Small,E as __namedExportsOrder,A as default};
