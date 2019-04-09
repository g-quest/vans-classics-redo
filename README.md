# Vans Boilerplate

A Boilerplate project for microsites on vans.com.  The goal is to mimic the Javascript and CSS on the main site into your local environment.  It will output code to be copied directly to the AEM environment in vans.com

## Project Source Files

To edit source files, you can find the project pug (HTML), sass (CSS) and typescript (JS) in the /src/ folder.

##### PUG

PUG is shorthand HTML, you can find documentation at https://pugjs.org/.
If you are making multiple pages, you can duplicate the index.pug file and rename it.  

    /src/pug/index.pug

##### Typescript

Typescript is used in the Boilerplate, it will also compile Vanilla JS.  Here is the typescript documentation https://www.typescriptlang.org/

    /src/ts/app.ts
    
> To Add Type definitions for JS plugins, use the command "pnpm install @types/{your plugin} --save-dev" if there is a DefinitelyTyped definition.  Type definitions for TweenMax and JQuery are included.

##### SASS

SASS is used in the boilerplate. Documentation is here https://sass-lang.com/

    /src/scss/app.scss
    
##### Images

All images added to this folder will be shrunken in size and optimized to upload to scene7 or elsewhere.

    /src/img/*.jpg|png|svg|gif
    
##### Preview References

All assets and folders added here will be placed into the /preview/ folder to reference in BrowserSync preview ONLY.  No files here will be carried to the AEM folder, these are for on-site vans.com reference ONLY.

    /src/references/**/*
    
## Language Linting

Linting files are used in the boilterplate for the src files.  If your IDE supports linter listening, you can add lint checking for the following:

*   TSLint https://palantir.github.io/tslint/
*   StyleLint https://stylelint.io
*   Prettier (Will correct code structure in your file on compile) https://prettier.io/

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

*   Your HTML will be minified
*   Images will be minified
*   SASS will be compiled into CSS and minified
*   Javascript will be minified
*   A browser window will open showing your compiled site in working form
*   Upon changing your app.scss, app.js or index.html files, your browser window will update with the changes
*   Files will be placed into 2 directories
    1. /preview
        > The code that will be updated and view through your browser with vans.com dependencies
    2. /aem-output
        > output-min.html will contain minified code and javascript pre-wrapped in the requirejs function.  This code can be copied straight into AEM
        
> After running gulp once, you can run the following to bypass minifying images and only compile the pug/sass/typescript then serve

    gulp code
        
## Project Configuration

### Package

    /package.json
> This file will contain all the information for the current project.  You will be able to change project config settings and alter RequireJS and JS/CSS loaded into the HTML page.

##### "css"

All required CSS files to be loaded into the page

* onsite

    > CDN links on Vans.com
    
##### "js"

All required JS files to be loaded into the page

* onsite

    > CDN links on Vans.com
    
##### "name"

The project name

##### "repository"

The repository on stash or github

##### "requirejs"

The settings for wrapping the javascript in requirejs.  Include the "paths" and "shim" info for your specific project

