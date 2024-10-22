import{c as y}from"./custom-element-BSS606lH.js";const V=`<div class="dial-container shadow">
    <div class="dial">
        <div class="dial__lens"></div>
        <div class="dial__value">\${defaultDialValue}</div>
        <input type="range" class="dial__input" min="0" max="100" value="0">
    </div>
</div>`,D=`
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
`;y("os-dial",function(){document.addEventListener("DOMContentLoaded",u=>{var f,p,b;const d=this.getAttribute("defaultDialValue")||5,a=((f=this.data)==null?void 0:f.onChange)||null,h=((p=this.data)==null?void 0:p.onUserVote)||null,x=((b=this.data)==null?void 0:b.hasUserVoted)||!1,n=this.hasAttribute("range")?this.getAttribute("range").split(","):[0,10],i=this.shadowRoot.querySelector(".dial__input"),l=this.shadowRoot.querySelector(".dial__value"),L=this.shadowRoot.querySelector(".dial__lens"),v=this.shadowRoot.querySelector(".dial-container");v.setAttribute("data-has-user-voted",x),i.setAttribute("min",n[0]),i.setAttribute("max",n[1]);function r(e){return e<n[0]||e>n[1]?'<div style="opacity: 0; user-select:none">n/a</div>':`<div>${e}</div>`}i.addEventListener("change",m.bind(this));function m(e,s=!1){const t=+e.target.value,o=this.shadowRoot.querySelector(".dial__value");o.innerHTML=`${r(t+1)}<br><div class="userVote">${r(t)}</div><br>${r(t-1)}`,a&&s==!1&&a(e,this.shadowRoot)}if(m.call(this,{target:{value:d}},!0),l){const e=s=>{s.preventDefault();const t=_=>{const c=v.getBoundingClientRect(),E=(_.clientY||_.touches[0].clientY)-c.top,w=Math.max(n[0]-c.height*30,Math.min(n[1],n[1]-E/c.height*n[1])*3.5);i.value=w,g(w),i.dispatchEvent(new Event("change"))},o=()=>{document.removeEventListener("mousemove",t),document.removeEventListener("mouseup",o),document.removeEventListener("touchmove",t),document.removeEventListener("touchend",o),g(0),h&&h(s,this.shadowRoot)};document.addEventListener("mousemove",t),document.addEventListener("mouseup",o),document.addEventListener("touchmove",t),document.addEventListener("touchend",o)};l.addEventListener("mousedown",e),l.addEventListener("touchstart",e)}function g(e){L.style.top=`${-e}px`}})},V,D);function A(u,d){const a=document.createElement("div");return a.setAttribute("data-mock-wrapper",!0),a.innerHTML=`${u()}`,document.addEventListener("DOMContentLoaded",()=>{a.querySelector("*").data=d}),a}export{A as d};
