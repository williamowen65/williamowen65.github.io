async function l(t,n,o,c){const e=document.createElement("template");e.innerHTML=`
    <style>
        ${c}
    </style>
    ${o}
    `;class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){n.bind(this)()}}customElements.define(t,s)}export{l as c};
