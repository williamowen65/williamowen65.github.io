import{ae as e,af as s}from"./index-f2KUJTUi.js";import{u as o}from"./index-CnY6Yx5j.js";import"./iframe-GO7WIAUw.js";import"../sb-preview/runtime.js";import"./index-7z4G-Two.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";const x=()=>{const i={path:"path",svg:"svg",...o()};return e.jsx(i.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(i.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function n(i){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Configure your project/Start Here"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(t.h1,{id:"configure-your-project",children:"Configure your project"}),e.jsxs(t.p,{children:["To use any of these components in your project, you need to install the ",e.jsx(t.code,{children:"os-ui-components"})," package."]}),e.jsx(t.p,{children:e.jsx(t.code,{children:"npm install os-ui-components"})}),e.jsx(t.p,{children:"Add it to your project by including a script tag in your HTML file:"}),e.jsx(t.p,{children:e.jsx(t.code,{children:'<script src="node_modules/os-ui-components/main.js"><\/script>'})}),e.jsx(t.p,{children:"This package has no dependencies, so you can use it in any project. The components are built using web components, so they can be used in any framework or library."}),e.jsx(t.p,{children:"Currently it only includes a few components, but more will be added soon. Ths script tag currently imports the full library, but in the future, you will be able to import individual components."}),e.jsxs(t.blockquote,{children:[`
`,e.jsxs(t.p,{children:["Visit the npm page: ",e.jsx(t.a,{href:"https://www.npmjs.com/package/os-ui-components",rel:"nofollow",children:"https://www.npmjs.com/package/os-ui-components"})]}),`
`]}),e.jsx(t.h2,{id:"available-components",children:"Available components"}),e.jsxs(t.p,{children:[e.jsx(t.code,{children:"<os-button>"}),`
`,e.jsx(t.code,{children:"<os-dial>"})]})]})}),`
`,e.jsx("style",{children:`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `})]})}function h(i={}){const{wrapper:t}={...o(),...i.components};return t?e.jsx(t,{...i,children:e.jsx(n,{...i})}):n(i)}export{x as RightArrow,h as default};
