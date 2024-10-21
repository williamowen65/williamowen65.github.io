import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './Dial.html?raw';
import cssContent from './Dial.css?raw';


// Fetch and create custom element
createCustomElement('os-dial', function () {
  document.addEventListener('DOMContentLoaded', (event) => {
    // Get Props
    const defaultDialValue = this.getAttribute('defaultDialValue') || 5;
    const onChange = this.data?.onChange || null;
    const range = this.hasAttribute('range') ? this.getAttribute('range').split(',')  : [0, 10];

    // Read input value from class dial__input
    const input = this.shadowRoot.querySelector('.dial__input');
    const dialValue = this.shadowRoot.querySelector('.dial__value');
    const dialLens = this.shadowRoot.querySelector('.dial__lens');
    const dialContainer = this.shadowRoot.querySelector('.dial-container');
    
    // apply range to range input
    input.setAttribute('min', range[0]);
    input.setAttribute('max', range[1]);

    // apply range to range helper function
    function getDialValueHTML(value) {
      if (value < range[0] || value > range[1]) {
        return '<div style="opacity: 0; user-select:none">n/a</div>';
      }
      return `<div>${value}</div>`;
    }
    
    input.addEventListener('change', setDailValueHTML.bind(this));
    function setDailValueHTML(e) {
      const value = +e.target.value;
      // Report value in .dial__value
      const dialValue = this.shadowRoot.querySelector('.dial__value');
      dialValue.innerHTML = `${getDialValueHTML(value + 1)}<br><div class="userVote">${getDialValueHTML(value)}</div><br>${getDialValueHTML(value - 1)}`;
      // Report value from component in callback
    
      if(onChange) {
        onChange(e)
      }
    }

    // Set default value  
    setDailValueHTML.call(this, { target: { value: defaultDialValue } });

    if (dialValue) {
      const startInteraction = (e) => {
        e.preventDefault(); // Prevent default dragging behavior

        const moveInteraction = (event) => {
          // Calculate new value based on mouse or touch movement
          const rect = dialContainer.getBoundingClientRect();
          const clientY = event.clientY || event.touches[0].clientY;
          const offsetY = clientY - rect.top;
          // Apply custom range to the dial
          const newValue = Math.max(range[0] - rect.height * 30, Math.min(range[1], range[1] - (offsetY / rect.height) * range[1]) * 3.5);
          input.value = newValue;

          // Drag the lens
          dragDialLens(newValue)
          input.dispatchEvent(new Event('change'));
        };

        const endInteraction = () => {
          document.removeEventListener('mousemove', moveInteraction);
          document.removeEventListener('mouseup', endInteraction);
          document.removeEventListener('touchmove', moveInteraction);
          document.removeEventListener('touchend', endInteraction);
          dragDialLens(0)
        };

        document.addEventListener('mousemove', moveInteraction);
        document.addEventListener('mouseup', endInteraction);
        document.addEventListener('touchmove', moveInteraction);
        document.addEventListener('touchend', endInteraction);
      };

      dialValue.addEventListener('mousedown', startInteraction);
      dialValue.addEventListener('touchstart', startInteraction);
    }

    function dragDialLens(offsetY) {
     
      dialLens.style.top = `${-offsetY}px`;
    }
  });
}, htmlContent, cssContent);