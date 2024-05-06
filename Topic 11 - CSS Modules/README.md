# CSS Modules Guide

Before diving into CSS Modules, let's discuss why we use them instead of the traditional CSS approach.

## Why CSS Modules?

### Avoids Global Namespace Pollution
With traditional CSS, styles are applied globally, potentially causing naming collisions and unintended style overrides. CSS Modules generate unique class names for each component, preventing global namespace pollution.

### Improved Maintainability
CSS Modules keep styles closely tied to the components they style, enhancing codebase understanding and maintenance. Developers can easily locate and update styles without navigating through a large, monolithic stylesheet.

### Scoped Styles
CSS Modules automatically scope styles to their respective components, preventing styles from one component affecting others. This reduces naming conflicts and unintended style changes.

## Traditional CSS Approach
In this method, all CSS properties are defined in a single stylesheet file, leading to issues like namespace collisions and decreased maintainability.

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/49f4ff15-ee70-436f-8a18-8203a3143cf7)

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/06cae065-c3c8-47ab-b2cf-b950c315ea24)

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/e908c7ff-fb44-4098-a658-4dd4a7f0393c)

By solving these problems using CSS Modules, we can enhance our development workflow.

## CSS Module Approach
To utilize CSS Modules, create a file named `example.module.css`, where `.module.css` extension is crucial to denote CSS Modules.

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/1fc3c35b-9a76-4fe1-8136-5c911fdfdb35)

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/05274a69-e7a8-4fd0-8f32-6449ec6c5847)

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/43da03a4-ba63-496a-9cdb-c30f8abb7dd8)


Define CSS properties in this file, which will be scoped to the component they belong to.

Import the CSS module into your component, and the defined styles will be applied to the specified HTML element.

