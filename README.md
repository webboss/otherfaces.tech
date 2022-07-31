<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
# FourthCanvas Gatbyjs Project Starter

This is a starter for internal gatsbyjs projects that consist only of static pages with no dynamic parts like blog, portfolio, etc

## 🚀 Quick start

1.  **Create a New site.**

    Use the FourthCanvas CLI to create a new site, specifying this starter.

    ```shell
    # create a new Gatsby site using this starter
    fourthcanvas new project-name 
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd project-name/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `project-name` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 📂 Folder Structure
.
├── node_modules
├── src
├── .gitignore
├── .prettierrc
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── LICENSE
├── package-lock.json
├── package.json
└── README.md

### 👨‍💻 src/
src
 ┣ components
 ┣ fonts
 ┣ images
 ┣ pages
 ┗ style

- **components**: contents the components of the various pages and layout of the website
- **Images**: Kindly ensure that you group related images into subdirectories, **do not dump all your images in this directory** a popular convention we use is: **icons**, **illustrations**, **screenshots**, etc, these subdirectories can also have subdirectories which will hold help identity the specific component or page were certain images (e.g illustrations) were used.
- **Pages**: Holds the file for each page. Please, do not dump all the code for a page into it's file, kindly break the various sections of the page into components and import them into the page: this makes it easy for you and other developers working on a project to track down bugs on that page.
- **Style**: Primarily holds tailwind.css the file which helps to import all the tailwindcss goodies, you can also do some customization with the file.

### src/components/
components
 ┣ layout
 ┃ ┣ footer
 ┃ ┃ ┗ index.js
 ┃ ┣ header
 ┃ ┃ ┗ index.js
 ┃ ┣ menu
 ┃ ┃ ┗ index.js
 ┃ ┣ index.js
 ┃ ┗ seo.js
 ┣ utils
 ┃ ┣ button
 ┃ ┃ ┗ index.js
 ┃ ┣ container
 ┃ ┃ ┗ index.js
 ┃ ┣ footer
 ┃ ┃ ┗ index.js
 ┃ ┗ page-header
 ┃ ┃ ┗ index.js
 ┗ header.js
- **layout**: contains components that are static and used in **_every_** part of the website such as *Navigation/Menu Bar*, *Footer*, etc. If a component is not used in every part of the website, please do not put it in here.
- **utils**: contains reusable components such as button, page header, container, wrapper, etc. 
_How do you know when to make a component an utility?_
    - It's use is not specific to a page
    - It doesn't appear at a fixed position throughout the website even if it's used on every page of the website
- **pages**: holds the components for the various sections of each page of the website


