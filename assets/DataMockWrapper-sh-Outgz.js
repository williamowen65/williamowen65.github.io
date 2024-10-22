import{c as L}from"./custom-element-BSS606lH.js";const E=`<div class="dial-container shadow">
    <div class="dial">
        <div class="dial__lens"></div>
        <div class="dial__value">\${defaultDialValue}</div>
        <input type="range" class="dial__input" min="0" max="100" value="0">
    </div>
</div>`,y=`
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
    &[data-has-user-voted="false"]{
        background: #f0eef3;
    }
}

.dial {
    position: absolute;
    display: inline-flex;
}


.dial__value{
    line-height: 15px;
    cursor: grab;
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

[data-has-user-voted="false"]{
    .dial__lens{
        background: #3b18d8;
    }
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
    &[data-has-user-voted="false"]{
        box-shadow: inset 0 0 16px #3b18d8;
    }
}

.userVote{
    color: white
}
`;L("os-dial",function(){document.addEventListener("DOMContentLoaded",u=>{var g,f;const s=this.getAttribute("defaultDialValue")||5,n=((g=this.data)==null?void 0:g.onChange)||null,_=((f=this.data)==null?void 0:f.hasUserVoted)||!1,t=this.hasAttribute("range")?this.getAttribute("range").split(","):[0,10],o=this.shadowRoot.querySelector(".dial__input"),d=this.shadowRoot.querySelector(".dial__value"),x=this.shadowRoot.querySelector(".dial__lens"),h=this.shadowRoot.querySelector(".dial-container");h.setAttribute("data-has-user-voted",_),o.setAttribute("min",t[0]),o.setAttribute("max",t[1]);function l(e){return e<t[0]||e>t[1]?'<div style="opacity: 0; user-select:none">n/a</div>':`<div>${e}</div>`}o.addEventListener("change",v.bind(this));function v(e,r=!1){const a=+e.target.value,i=this.shadowRoot.querySelector(".dial__value");i.innerHTML=`${l(a+1)}<br><div class="userVote">${l(a)}</div><br>${l(a-1)}`,n&&r==!1&&n(e,this.shadowRoot)}if(v.call(this,{target:{value:s}},!0),d){const e=r=>{r.preventDefault();const a=p=>{const c=h.getBoundingClientRect(),w=(p.clientY||p.touches[0].clientY)-c.top,b=Math.max(t[0]-c.height*30,Math.min(t[1],t[1]-w/c.height*t[1])*3.5);o.value=b,m(b),o.dispatchEvent(new Event("change"))},i=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",i),document.removeEventListener("touchmove",a),document.removeEventListener("touchend",i),m(0)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",i),document.addEventListener("touchmove",a),document.addEventListener("touchend",i)};d.addEventListener("mousedown",e),d.addEventListener("touchstart",e)}function m(e){x.style.top=`${-e}px`}})},E,y);function M(u,s){const n=document.createElement("div");return n.setAttribute("data-mock-wrapper",!0),n.innerHTML=`${u()}`,document.addEventListener("DOMContentLoaded",()=>{n.querySelector("*").data=s}),console.log("el",n),n}export{M as d};
