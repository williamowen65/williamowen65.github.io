import{c as p}from"./custom-element-BSS606lH.js";const g=`<div class="dial-container">
    <div class="dial">
        <div class="dial__value">0</div>
        <input type="range" class="dial__input" min="0" max="100" value="0">
    </div>
</div>`,f=`
/* Define variables? */
:host {
    --theme-color: #3498db; /* Define the theme color within the shadow DOM */
}

.dial input{
    display: none;
    /* Hiding the default range input  */
}
.dial-container{
    position: relative;
    min-height: 100px;
    background: red;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    border-radius: 5px;
}

.dial {
    position: absolute;
    display: inline-flex;
}

.dial__value{
    width: 50px;
    cursor: grab;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--theme-color); /* Use the theme color */
}

.dial-container:active {
    cursor: grabbing; /* Cursor when grabbing */
}

.dial__label{
    align-self:flex-end;
    text-align: center;
}`;p("os-dial",function(){document.addEventListener("DOMContentLoaded",s=>{const i=this.shadowRoot.querySelector(".dial__input"),n=this.shadowRoot.querySelector(".dial__value");if(i.addEventListener("change",t=>{const r=t.target.value,e=this.shadowRoot.querySelector(".dial__value");e.innerText=r}),n){const t=r=>{r.preventDefault();const e=d=>{const c=n.getBoundingClientRect(),h=(d.clientY||d.touches[0].clientY)-c.top,v=Math.max(0,Math.min(100,100-h/c.height*100));i.value=v,i.dispatchEvent(new Event("change"))},o=()=>{document.removeEventListener("mousemove",e),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",e),document.removeEventListener("touchend",o)};document.addEventListener("mousemove",e),document.addEventListener("mouseup",o),document.addEventListener("touchmove",e),document.addEventListener("touchend",o)};n.addEventListener("mousedown",t),n.addEventListener("touchstart",t)}})},g,f);const E={title:"Components/Inputs/Dial",tags:["autodocs"],render:s=>`<os-dial>${s.label}</os-dial>`,argTypes:{},parameters:{docs:{description:{component:`This is an incomplete prototype of a Dial component. The idea to to use it for voting or rating.  
The plan is to add a little animation to the user interaction. You can click and drag the center of the dial to change the value.  
The center of the dial will move up/down resisting your drag`}}}},a={args:{}};var l,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    // primary: true,
    // label: "Button"
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const x=["Primary"];export{a as Primary,x as __namedExportsOrder,E as default};
