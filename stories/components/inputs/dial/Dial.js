import { createCustomElement } from "../../../utils/custom-element.js";
import htmlContent from './Dial.html?raw';
import cssContent from './Dial.css?raw';

// Fetch and create custom element
createCustomElement('os-dial', function () {
  document.addEventListener('DOMContentLoaded', (event) => {
    // Read input value from class dial__input
    const input = this.shadowRoot.querySelector('.dial__input');
    const dialContainer = this.shadowRoot.querySelector('.dial__value');

    input.addEventListener('change', (e) => {
      const value = e.target.value;
      // Report value in .dial__value
      const dialValue = this.shadowRoot.querySelector('.dial__value');
      dialValue.innerText = value;
    });

    if (dialContainer) {
      const startInteraction = (e) => {
        e.preventDefault(); // Prevent default dragging behavior

        const moveInteraction = (event) => {
          // Calculate new value based on mouse or touch movement
          const rect = dialContainer.getBoundingClientRect();
          const clientY = event.clientY || event.touches[0].clientY;
          const offsetY = clientY - rect.top;
          const newValue = Math.max(0, Math.min(100, 100 - (offsetY / rect.height) * 100));
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