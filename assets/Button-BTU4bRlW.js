import{c as s}from"./custom-element-BSS606lH.js";const i=`
<button type="button">
    <slot></slot>
</button>`,b=`.storybook-button {
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
  }`;s("os-button",function(){let t=this.getAttribute("primary")||null,n=this.getAttribute("size")||"medium";const r=this.getAttribute("backgroundColor")||null,e=t?"storybook-button--primary":"storybook-button--secondary",o=this.shadowRoot.querySelector("button");o.className=["storybook-button",`storybook-button--${n}`,e].join(" "),o.style.backgroundColor=r},i,b);
