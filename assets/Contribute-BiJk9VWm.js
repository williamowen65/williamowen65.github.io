import{ae as e,af as s}from"./index-DC5OSrOD.js";import{u as t}from"./index-CDFMD25t.js";import"./iframe-CqXch59I.js";import"../sb-preview/runtime.js";import"./index-7z4G-Two.js";import"./index-D-8MO0q_.js";import"./index-DrFu-skq.js";const h=()=>{const n={path:"path",svg:"svg",...t()};return e.jsx(n.svg,{viewBox:"0 0 14 14",width:"8px",height:"14px",style:{marginLeft:"4px",display:"inline-block",shapeRendering:"inherit",verticalAlign:"middle",fill:"currentColor","path fill":"currentColor"},children:e.jsx(n.path,{d:"m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"})})};function o(n){const i={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Configure your project/Contribute"}),`
`,e.jsx("div",{className:"sb-container",children:e.jsxs("div",{className:"sb-section-title",children:[e.jsx(i.h1,{id:"contribute",children:"Contribute"}),e.jsxs(i.blockquote,{children:[`
`,e.jsxs(i.p,{children:["View issues",e.jsx(i.br,{}),`
`,"Make PRs",e.jsx(i.br,{}),`
`,"Guidelines"]}),`
`]}),e.jsxs(i.blockquote,{children:[`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://github.com/williamowen65/williamowen65.github.io.git",rel:"nofollow",children:"Repo link"})}),`
`]}),e.jsx(i.h2,{id:"guidelines",children:"Guidelines"}),e.jsx(i.p,{children:"In order to contribute to this project, you need to follow the guidelines below:"}),e.jsx(i.h3,{id:"creating-a-new-component",children:"Creating a new component"}),e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Create a folder for your component in the ",e.jsx(i.code,{children:"stories"})," folder",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Try to place it where it makes sense"}),`
`,e.jsxs(i.li,{children:["A component folder should have:",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"A stories.js file"}),`
`,e.jsxs(i.li,{children:["A js file (component file)",`
`,e.jsxs(i.ul,{children:[`
`,e.jsxs(i.li,{children:["Use the ",e.jsx(i.code,{children:"os-"})," prefix for all components"]}),`
`]}),`
`]}),`
`,e.jsx(i.li,{children:"A css file (component styles)"}),`
`,e.jsxs(i.li,{children:["An HTML file (component markup)",`
`,e.jsxs(i.ul,{children:[`
`,e.jsx(i.li,{children:"Define compoents as custom HTML elements"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(i.li,{children:["Import your compoent file in the ",e.jsx(i.code,{children:"index.js"})," file"]}),`
`,e.jsxs(i.li,{children:["Tag your PR with the ",e.jsx(i.code,{children:"new components"})," tag"]}),`
`]})]})}),`
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
  `})]})}function m(n={}){const{wrapper:i}={...t(),...n.components};return i?e.jsx(i,{...n,children:e.jsx(o,{...n})}):o(n)}export{h as RightArrow,m as default};
