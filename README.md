# Practice Website Deployment

> This website is deployed via GitHub Pages.  
> Here is a link to the deployment: https://williamowen65.github.io/  
> Check it out!

What I initially decided to do with this space is explore storybook.js, a front-end framework for documenting UI components. 
Storybook can of course be used with frontend frameworks, but
I wanted to keep this as simple as possible so I am using a setup for vanilla HTML/CSS/JS.  

> **I began to wonder how I would use these components in a project and decided to learn about custom HTML elements**

Along with learning about how custom HTML elements work, I learned about JS bundlers, like Webpack and Vite to be able to use `import * from 'file.[html|css|svg]'`. Vite was used to get up and running with Storybook, Webpack was used to keep custom HTML components split between HTML, JS, and CSS files. 

One goals is to make the components available for use via the npm deployment and for that package to have no dependencies, or to use loose coupling if dependencies are necessary. 

I'm continuing to investigate possibilities for the workflow, such as how components are imported to a project and creating customizable theming.

- One thing that is interesting about the setup is the the HTML and CSS files are evaluated by template string when making the custom components. I am hoping to be able to take advantage of that.
- The only thing that I really do not like is how you currently have to pass complex data to the components via javascript. To improve this workflow, I may have to introduce JSX or another templating engine to this project. But one of my goals is for the npm deployment to have no dependencies. 

> You can learn more about the components and the npm deployment at https://williamowen65.github.io/  



## Setup

The steps to get this working was to:

- Create a github repo with a new project
- Create package.json   
  - Install Storybook
  - Install Webpack
    - Use Webpack to keep modular code files and to create the npm-deployment branch.
- Create github actions (.github/workflows/*)
  - One action:  Deploy the Storybook to GitHub pages.
  - Second action: Create branch for the npm-deployment.
  - Third action: Deploy the npm-deployment branch to npm servers.

> I created this project with the "HTML" storybook setup

It didn't come setup for custom HTML elements out of the box. So I updated each of the default stories to be custom HTML elements manually.

```
npx storybook init --type html
```

> I created a helpper method for creating custom HTML elements  
> .\stories\utils\custom-element.js