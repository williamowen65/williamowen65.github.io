const o=document.createElement("template");o.innerHTML=`
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

`;class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){let e=this.getAttribute("primary")||null,n=this.getAttribute("size")||"medium";const r=this.getAttribute("backgroundColor")||null,s=e?"storybook-button--primary":"storybook-button--secondary",t=this.shadowRoot.querySelector("button");t.className=["storybook-button",`storybook-button--${n}`,s].join(" "),t.style.backgroundColor=r}}customElements.define("os-button",a);
