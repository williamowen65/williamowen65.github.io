# Practice Website Deployment

> This website is deployed via GitHub Pages
> Here is a link to check it out: https://williamowen65.github.io/

What I decided to do with this space is explore using storybook.js.  
Storybook can of course be used with frontend frameworks, but  
I wanted to keep this as simple as possible so I am using a setup for vanilla HTML/CSS/JS.

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
