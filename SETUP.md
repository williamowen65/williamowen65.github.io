<!-- BEGIN MICROSOFT SECURITY.MD V0.0.9 BLOCK -->


# Setup

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