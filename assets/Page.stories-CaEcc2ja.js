import{w as y,e as s,u as b}from"./index-DcZGqPg1.js";import{c as f}from"./Header-CxHKeHqe.js";import"./Button-DBH6rcwa.js";const B=()=>{const o=document.createElement("article");let e=null,t=null;const n=()=>{const i=document.getElementsByTagName("article")[0];i.replaceChild(c(),i.firstChild)},h=()=>{e={name:"Jane Doe"},n()},v=()=>{e=null,n()},w=()=>{e={name:"Jane Doe"},n()},c=()=>f({onLogin:h,onLogout:v,onCreateAccount:w,user:e});return t=c(),o.appendChild(t),o.insertAdjacentHTML("beforeend",`
  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999" />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </section>
`),o},I={title:"Pages/Home Page",render:()=>B(),tags:["autodocs"],parameters:{layout:"fullscreen"}},a={},r={play:async({canvasElement:o})=>{const e=y(o),t=e.getByRole("button",{name:/Log in/i});await s(t).toBeInTheDocument(),await b.click(t),await s(t).not.toBeInTheDocument();const n=e.getByRole("button",{name:/Log out/i});await s(n).toBeInTheDocument()}};var l,g,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(g=a.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var u,d,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const x=["LoggedOut","LoggedIn"];export{r as LoggedIn,a as LoggedOut,x as __namedExportsOrder,I as default};
