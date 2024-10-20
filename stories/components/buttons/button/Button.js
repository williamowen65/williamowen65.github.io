import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './Button.html?raw';
import cssContent from './Button.css?raw';

// Fetch and create custom element

  createCustomElement('os-button',function() {
    
    let primary = this.getAttribute('primary') || null;
    let size = this.getAttribute('size') || "medium"
    const backgroundColor = this.getAttribute('backgroundColor') || null;
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    const btn = this.shadowRoot.querySelector('button')
    btn.className = ['storybook-button', `storybook-button--${size}`, mode].join(' ');
    btn.style.backgroundColor = backgroundColor;
  }, htmlContent, cssContent);