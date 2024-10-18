// create an HTML template element
const template = document.createElement('template')

template.innerHTML = `
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

`;

export class ledButton extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
    connectedCallback() {
      let primary = this.getAttribute('primary') || null;
      let size = this.getAttribute('size') || "medium"
      const backgroundColor = this.getAttribute('backgroundColor') || null;
      const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
      const btn = this.shadowRoot.querySelector('button')
      btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');
      btn.style.backgroundColor = backgroundColor;
  }
}

customElements.define('os-led-button', ledButton)