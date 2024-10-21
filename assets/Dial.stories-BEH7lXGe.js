import"./index-DcZGqPg1.js";import{c as D}from"./custom-element-BSS606lH.js";const L=`<div class="dial-container shadow">
    <div class="dial">
        <div class="dial__lens"></div>
        <div class="dial__value">\${defaultDialValue}</div>
        <input type="range" class="dial__input" min="0" max="100" value="0">
    </div>
</div>`,C=`
/* Define variables? */
:host {
    --theme-color: #8a2e44; /* Define the theme color within the shadow DOM */
}

.dial input{
    display: none;
    /* Hiding the default range input  */
}
.dial-container{
    position: relative;
    min-height: 100px;
    background: #baff41;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 5px;
    overflow: hidden;
}

.dial {
    position: absolute;
    display: inline-flex;
}


.dial__value{
    line-height: 15px;
}
.dial__value, .dial__lens{
    width: 50px;
    height: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 1;
}
.dial__value .userVote, .dial__lens{  
    cursor: grab;
}
.dial__lens{
    background: var(--theme-color); /* Use the theme color */
    position: absolute;
}

.dial__value:active {
    cursor: grabbing; /* Cursor when grabbing */
}

.dial-container:active {
    cursor: grabbing; /* Cursor when grabbing */
}

.dial__label{
    align-self:flex-end;
    text-align: center;
}

.shadow {
    box-shadow: inset 0 0 16px #61440e;
}

.userVote{
    color: white
}
`;D("os-dial",function(){document.addEventListener("DOMContentLoaded",e=>{const s=this.getAttribute("defaultDialValue")||5,a=this.data.onChange||null,t=this.hasAttribute("range")?this.getAttribute("range").split(","):[0,10],i=this.shadowRoot.querySelector(".dial__input"),c=this.shadowRoot.querySelector(".dial__value"),y=this.shadowRoot.querySelector(".dial__lens"),w=this.shadowRoot.querySelector(".dial-container");i.setAttribute("min",t[0]),i.setAttribute("max",t[1]);function u(n){return n<t[0]||n>t[1]?'<div style="opacity: 0; user-select:none">n/a</div>':`<div>${n}</div>`}i.addEventListener("change",v.bind(this));function v(n){const r=+n.target.value,o=this.shadowRoot.querySelector(".dial__value");o.innerHTML=`${u(r+1)}<br><div class="userVote">${u(r)}</div><br>${u(r-1)}`,a&&a(n)}if(v.call(this,{target:{value:s}}),c){const n=r=>{r.preventDefault();const o=m=>{const h=w.getBoundingClientRect(),x=(m.clientY||m.touches[0].clientY)-h.top,p=Math.max(t[0]-h.height*30,Math.min(t[1],t[1]-x/h.height*t[1])*3.5);i.value=p,g(p),i.dispatchEvent(new Event("change"))},l=()=>{document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",l),document.removeEventListener("touchmove",o),document.removeEventListener("touchend",l),g(0)};document.addEventListener("mousemove",o),document.addEventListener("mouseup",l),document.addEventListener("touchmove",o),document.addEventListener("touchend",l)};c.addEventListener("mousedown",n),c.addEventListener("touchstart",n)}function g(n){y.style.top=`${-n}px`}})},L,C);function E(e,s){const a=document.createElement("div");return a.innerHTML=`${e()}`,document.addEventListener("DOMContentLoaded",()=>{a.querySelector("os-dial").data=s}),a}const $={title:"Components/Inputs/Dial",tags:["autodocs"],render:e=>"<os-dial "+(e.defaultDialValue?`defaultDialValue="${e.defaultDialValue}" `:"")+(e.range?`range="${e.range}" `:"")+(e.onChange?`onChange='${e.onChange}'`:"")+"></os-dial>",argTypes:{data:{description:"Data object to pass to the component",control:{type:"object"}}},args:{data:{onChange:"Callback function to report the value of the dial"}},parameters:{docs:{description:{component:`This is an incomplete prototype of a Dial component. The idea to to use it for voting or rating.  
The plan is to add a little animation to the user interaction. You can click and drag the center of the dial to change the value.  
The center of the dial will move up/down resisting your drag

---

This needs work to improve the resistance for the drag (and selecting the value <-- too sensitive). The basics are in place though`}}}},d={args:{defaultDialValue:5,range:[0,10]},decorators:[e=>E(e,{onChange:s=>{}})]};var f,_,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    // primary: true,
    // label: "Button"
    defaultDialValue: 5,
    range: [0, 10]
  },
  decorators: [Story => {
    return dataMockWrapper(Story, {
      onChange: e => {
        // console.log('onChange', e.target.value);
      }
    });
  }]
}`,...(b=(_=d.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const S=["Primary"];export{d as Primary,S as __namedExportsOrder,$ as default};
