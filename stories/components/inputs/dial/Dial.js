import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './Dial.html?raw';
import cssContent from './Dial.css?raw';

// Fetch and create custom element

  createCustomElement('os-dial',function() {

  }, htmlContent, cssContent);