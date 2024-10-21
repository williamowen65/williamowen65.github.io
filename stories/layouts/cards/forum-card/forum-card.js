
import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './forum-card.html?raw';
import cssContent from './forum-card.scss?raw';

// Import dependencies components
import '../../../components/inputs/dial/Dial.js';
import totalCountIcon from './local-assets/total-count-icon.svg?raw';

// Fetch and create custom element

  createCustomElement('os-forum-card',function() {
    const countIcon = this.shadowRoot.querySelector('.total-count-icon .svg-container'); 
    countIcon.innerHTML = totalCountIcon;
  }, htmlContent, cssContent);