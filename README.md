# Practice Website Deployment

> This website is deployed via GitHub Pages.  
> Here is a link to the deployment: https://williamowen65.github.io/  
> Check it out!

What I initially decided to do with this space is explore storybook.js, a front-end framework for documenting UI components. 
Storybook can of course be used with frontend frameworks, but
I wanted to keep this as simple as possible so I am using a setup for vanilla HTML/CSS/JS.  

> **I began to wonder how I would use these components in a project and decided to learn about custom HTML elements**

Along with learning about how custom HTML elements work, I learned about JS bundlers, like Webpack and Vite. Vite was used to get up and running with Storybook, Webpack was used to keep custom HTML components split between HTML, JS, and CSS files. 

One thing that is interesting about the setup is the the HTML and CSS files are evaluated by template string. So the custom components can pass attribute props to the HTML and CSS.

The only thing that I really do not like is how you currently have to pass complex data to the components via javascript. To improve this workflow, I may have to introduce JSX or another templating engine to this project. But one of my goals is for the npm deployment to have no dependencies. 

You can learn more about the npm deployment at https://williamowen65.github.io/  
--- 

## Goals

- Create some layouts and components to show off 
- Create an organized storybook

## Setup

The steps to get this working was to:

- Create a github repo with a new project
- Create package.json   
- Create github actions
  - Give github actions permissions to write to repo
  - Create a [script](.github/workflows/deploy-storybook.yml) for github actions 
- Setup Github pages to deploy the branch that the actions write to (gh-pages)

```
npx storybook init --type html
```

**.github\workflows\deploy-storybook.yml**
```
name: Deploy Storybook

on:
  push:
    branches:
      - main  # or your default branch 

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'  # Use the version you need

      - name: Install dependencies
        run: npm install

      - name: Build Storybook
        run: npm run build-storybook

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static

```
