import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './Dial.html?raw';
import cssContent from './Dial.css?raw';


function getDialValueHTML(value) {
  if (value < 0 || value > 10) {
    return '<div style="opacity: 0; user-select:none">n/a</div>';
  }
  return `<div>${value}</div>`;
}

// Fetch and create custom element
createCustomElement('os-dial', function () {
  document.addEventListener('DOMContentLoaded', (event) => {
    const defaultDialValue = 5;
    // Read input value from class dial__input
    const input = this.shadowRoot.querySelector('.dial__input');
    const dialContainer = this.shadowRoot.querySelector('.dial__value');

    input.addEventListener('change', setDailValueHTML.bind(this));
    function setDailValueHTML(e) {
      const value = +e.target.value;
      // Report value in .dial__value
      const dialValue = this.shadowRoot.querySelector('.dial__value');
      dialValue.innerHTML = `${getDialValueHTML(value + 1)}<br>${getDialValueHTML(value)}<br>${getDialValueHTML(value - 1)}`;
    }

    // Set default value  
    setDailValueHTML.call(this, { target: { value: defaultDialValue } });

    if (dialContainer) {
      const startInteraction = (e) => {
        e.preventDefault(); // Prevent default dragging behavior

        const moveInteraction = (event) => {
          // Calculate new value based on mouse or touch movement
          const rect = dialContainer.getBoundingClientRect();
          const clientY = event.clientY || event.touches[0].clientY;
          const offsetY = clientY - rect.top;
          const newValue = Math.max(0, Math.min(10, 10 - (offsetY / rect.height) * 10));
          input.value = newValue;
          input.dispatchEvent(new Event('change'));
        };

        const endInteraction = () => {
          document.removeEventListener('mousemove', moveInteraction);
          document.removeEventListener('mouseup', endInteraction);
          document.removeEventListener('touchmove', moveInteraction);
          document.removeEventListener('touchend', endInteraction);
        };

        document.addEventListener('mousemove', moveInteraction);
        document.addEventListener('mouseup', endInteraction);
        document.addEventListener('touchmove', moveInteraction);
        document.addEventListener('touchend', endInteraction);
      };

      dialContainer.addEventListener('mousedown', startInteraction);
      dialContainer.addEventListener('touchstart', startInteraction);
    }
  });
}, htmlContent, cssContent);