# Vans Core Classics SP19

This is the Classics redo using a Single Page Application (SPA) architecture. Routing is done with Navigo, where components are swapped out on route clicks.

Assets are separated into different classes under the ts/assets folder. Generative functions are used to pull values accordingly in the main app.ts file. This allows for easy maintenance and updates for the future (when adding the other shoes, for example)

Products show up randomized on each reload and each route click. This provides each page with a dynamic feel. This is done by first cloning the original array of product objects, shuffling the indexes with the shuffleProducts() function (also located within the app.ts file), slicing it to match the layout count, then mapping each index properly to the values of each block.

Pages completed so far:
All Classics (root)
Era (#era)

Next up:
Sk8-Hi

## Project Source Files

To edit source files, you can find the project pug (HTML), sass (CSS) and typescript (JS) in the /src/ folder.

##### PUG

PUG is shorthand HTML, you can find documentation at https://pugjs.org/.
If you are making multiple pages, you can duplicate the index.pug file and rename it.

    /src/pug/index.pug

##### Typescript

Typescript is used in the Boilerplate, it will also compile Vanilla JS. Here is the typescript documentation https://www.typescriptlang.org/

    /src/ts/app.ts

> To Add Type definitions for JS plugins, use the command "pnpm install @types/{your plugin} --save-dev" if there is a DefinitelyTyped definition. Type definitions for TweenMax and JQuery are included.

##### SASS

SASS is used in the boilerplate. Documentation is here https://sass-lang.com/

    /src/scss/app.scss

##### Images

All images added to this folder will be shrunken in size and optimized to upload to scene7 or elsewhere.

    /src/img/*.jpg|png|svg|gif

##### Preview References

All assets and folders added here will be placed into the /preview/ folder to reference in BrowserSync preview ONLY. No files here will be carried to the AEM folder, these are for on-site vans.com reference ONLY.

    /src/references/**/*

## Language Linting

Linting files are used in the boilterplate for the src files. If your IDE supports linter listening, you can add lint checking for the following:

- TSLint https://palantir.github.io/tslint/
- StyleLint https://stylelint.io
- Prettier (Will correct code structure in your file on compile) https://prettier.io/

When running gulp, the terminal will output any errors the linters come across.

## Compiling Project

### NPM / Gulp

##### Getting Started

> Open terminal from project directory.

> Install Gulp CLI (if not done already).

    npm install gulp-cli -g

> Install PNPM (This will consolidate node_modules across all projects using npm).

    npm install pnpm -g

> Install dependencies (Do NOT run `npm init` as this will override the package.json file).

    pnpm install

##### Compile and Run

    gulp

> This will compile and package your project.

- Your HTML will be minified
- Images will be minified
- SASS will be compiled into CSS and minified
- Javascript will be minified
- A browser window will open showing your compiled site in working form
- Upon changing your app.scss, app.js or index.html files, your browser window will update with the changes
- Files will be placed into 2 directories
  1. /preview
     > The code that will be updated and view through your browser with vans.com dependencies
  2. /aem-output
     > output-min.html will contain minified code and javascript pre-wrapped in the requirejs function. This code can be copied straight into AEM

> After running gulp once, you can run the following to bypass minifying images and only compile the pug/sass/typescript then serve

    gulp code

## Project Configuration

### Package

    /package.json

> This file will contain all the information for the current project. You will be able to change project config settings and alter RequireJS and JS/CSS loaded into the HTML page.

##### "css"

All required CSS files to be loaded into the page

- onsite

  > CDN links on Vans.com

##### "js"

All required JS files to be loaded into the page

- onsite

  > CDN links on Vans.com

##### "name"

The project name

##### "repository"

The repository on stash or github

##### "requirejs"

The settings for wrapping the javascript in requirejs. Include the "paths" and "shim" info for your specific project
