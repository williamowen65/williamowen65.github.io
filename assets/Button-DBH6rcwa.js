async function i(o,n,e,s){const t=document.createElement("template");t.innerHTML=`
    <style>
        ${s}
    </style>
    ${e}
    `;class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0))}connectedCallback(){n.bind(this)()}}customElements.define(o,r)}const a=`
<button type="button">
    <slot></slot>
</button>`,l=`.storybook-button {
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
  }`;i("os-button",function(){let o=this.getAttribute("primary")||null,n=this.getAttribute("size")||"medium";const e=this.getAttribute("backgroundColor")||null,s=o?"storybook-button--primary":"storybook-button--secondary",t=this.shadowRoot.querySelector("button");t.className=["storybook-button",`storybook-button--${n}`,s].join(" "),t.style.backgroundColor=e},a,l);
