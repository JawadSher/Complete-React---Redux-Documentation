# Development Setup for React

## IDE (Integrated Development Environment)

An IDE is a software application that provides comprehensive facilities to programmers for software development. For React development, you can choose from various IDEs including Visual Studio Code (VS Code), WebStorm, Atom, and Sublime Text. Among these, Visual Studio Code is one of the most popular choices due to its robust features, extensions, and community support.

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*c0qfWs8sKeyNY5naAl0X0w.png" >
Download Visual Studio Code : https://code.visualstudio.com/

## Install Latest Node.js

Node.js is commonly used for building web servers, API servers, real-time applications, microservices, and more. Popular frameworks and libraries built on top of Node.js include Express.js for web development, Socket.io for real-time communication, and GraphQL for building APIs.
Download [Node.js](https://nodejs.org/en)

## Create a React App

Create React App is a popular tool provided by the React team for quickly setting up a new React project with all the necessary configurations. It sets up your development environment so that you can use the latest JavaScript features, provides a fast development server, and optimizes your app for production.

## Using Vite

Vite is a next-generation frontend build tool that aims to provide a faster and more efficient development experience, especially for modern JavaScript frameworks like React and Vue.js. It leverages native ES module imports to serve dependencies as close to the browser as possible, resulting in faster cold start and hot module replacement (HMR) performance.

To create a new React project using Vite, follow these steps:

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/61dfcc86-5e64-4b05-97a4-dbbef9dfb2b4)
![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/2b7aa50f-1e17-471c-8176-129cd7d78e8c)
![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/83fe6f19-c8aa-416e-b04c-383a58fc701c)

1. Execute "npm install" command on react-app directory to install all NPM dependencies.
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/8cbf7138-d061-4e5d-8bf9-dca37d0750ff)

3. Execute the "npm run dev" command to execute the server using Vite.
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/6581a78e-7b25-4e46-82b1-9881874dfdd3)
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/f80af944-779e-4df4-8822-72db7969854e)

## Project Structure

The project structure of a typical React application created using tools like Create React App or Vite often follows a convention that separates source code from build and configuration files.

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/bb7d22ce-dcb9-4799-8cc9-fe7c5706547f)

- **node_modules/**: Contains all installed dependencies required by your project. You typically don't edit files in this directory directly.
- **public/**: Contains static assets such as images, fonts, and the main index.html file.
- **src/**: Contains your application's source code, including main components and entry points.
- **.eslintrc.cjs**: Configuration file for ESLint, a linting tool for JavaScript.
- **.gitignore**: Specifies files and directories that should be ignored by Git.
- **package-lock.json**: Record of exact versions of dependencies installed in your project.
- **package.json**: Metadata about your project, including its name, version, and dependencies.
- **README.md**: Contains information about your project, including setup instructions and documentation.
- **vite.config.js**: Configuration file for Vite, a build tool used for modern web development.

