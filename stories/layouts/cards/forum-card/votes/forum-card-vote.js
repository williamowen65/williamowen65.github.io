
import { createCustomElement } from "../../../../utils/custom-element.js";
import htmlContent from './forum-card-vote.html?raw';
import cssContent from './forum-card-vote.scss?raw';

// Import dependencies components
import '../../../../components/inputs/dial/Dial.js';
import totalCountIcon from './local-assets/total-count-icon.svg?raw';

// Fetch and create custom element

  createCustomElement('os-forum-card-vote',function() {
    document.addEventListener('DOMContentLoaded', (event) => {
          // Get Props
            const totalVoteCount = this.hasAttribute('totalVoteCount') ? +this.getAttribute('totalVoteCount') : 0;
            const averageVote = this.hasAttribute('averageVote') ? +this.getAttribute('averageVote') : "N/A";
            const userVote = this.hasAttribute('userVote') ? +this.getAttribute('userVote') : '';

            const forumCardData = this.data || {};
            console.log('os-forum-card-vote', forumCardData, this, this.data);

            // Handle total vote count
            const countIcon = this.shadowRoot.querySelector('.total-count-icon .svg-container'); 
            const countDisplay = this.shadowRoot.querySelector('.total-count-icon .count'); 
            countIcon.innerHTML = totalCountIcon;
            countDisplay.innerHTML = totalVoteCount;

            // Handle average vote
            const averageDisplay = this.shadowRoot.querySelector('.average-vote');
            averageDisplay.innerHTML = averageVote;

            // Handle user vote
            const userVoteDisplay = this.shadowRoot.querySelector('os-dial');
            userVoteDisplay.setAttribute('defaultDialValue', userVote);

            // Handle user vote change
            userVoteDisplay.data = {
                onChange: (e, dialShadowRoot) => {
                    // you have the current average, how many votes have been cast, and the a new vote gets cast
                    const newAverage = (averageVote * totalVoteCount + +e.target.value) / (totalVoteCount + 1);
                    averageDisplay.innerHTML = newAverage.toFixed(1);
                    if(forumCardData.onChange){
                        forumCardData.onChange(e, this.shadowRoot, dialShadowRoot);
                    }
                },
                hasUserVoted: forumCardData.hasUserVoted || false
            }
    });
  }, htmlContent, cssContent);