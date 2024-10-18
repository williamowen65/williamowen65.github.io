const n=document.createElement("template");n.innerHTML=`
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

`;class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(n.content.cloneNode(!0))}connectedCallback(){let o=this.getAttribute("primary");console.log({primary:o}),o=o===void 0?null:o;let t=this.getAttribute("size");t=t===void 0?null:"medium";const r=this.getAttribute("backgroundColor"),s=o?"storybook-button--primary":"storybook-button--secondary",e=this.shadowRoot.querySelector("button");e.className=["storybook-button",`storybook-button--${t}`,s].join(" "),e.style.backgroundColor=r}}customElements.define("wo-button",i);
