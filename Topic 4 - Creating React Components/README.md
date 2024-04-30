# React File Extensions

## JS

- JS stands for JavaScript.
- Contains regular JavaScript code.
- Used for general logic and components.

## JSX

- JSX stands for JavaScript XML.
- Combines JavaScript with HTML-like tags.
- Makes it easier to design UI components.

## Class Components

Class components are ES6 classes that extend `React.Component`. They have their own state and lifecycle methods and were the traditional way of defining components in React.

### React.Component

- React.Component is a base class provided by the React library.
- Used as a foundation for creating custom components in React applications.

### State

- Represents the data that a component manages internally.
- Allows components to keep track of information that can change over time.
- Accessible within the component class and can be updated using the `setState()` method.

### Lifecycle Methods

- Special methods provided by React that allow components to execute code at specific points during their lifecycle.
- Includes methods like `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()`.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/d37eb7f4-2cd2-41d6-aaa1-4d3f499c3a11)
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/f8fb5b0e-bd9a-4776-88f7-3e6d684eb1d5)
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/e105a697-8fe6-4ae5-a895-7da9014c28ed)
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/6e666a7c-ff81-458f-ac52-d7a0dbf1eed3)

- This line imports the React library and the Component class from the react package. React is necessary for JSX (explained below), and Component is a base class provided by React for creating class components.

   ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/aa11c462-d683-4e36-b8ca-7318e3ecb207)
  
- This line defines a new class named MyComponent that extends the Component class. This means MyComponent inherits all the functionality provided by the Component class, including state management and lifecycle methods.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/b5124e7c-c8ef-4561-a664-f3d8fbe5c2fc)
  
- The render() method is a required method in React class components. It defines what will be rendered to the DOM when the component is rendered. In this case, it returns a JSX expression <div>Hello, World!</div>. JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript.

   ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/cc58baed-fd77-4106-98a7-c858a2f03bd1)
  
- This line exports the MyComponent class as the default export of this module. This means that when another file imports this module, it can import MyComponent directly without having to specify its name, like so:

   ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/4842449e-b65f-4fbd-8898-c9f1c4a9a0e9)

## Functional Components

- Initially stateless.
- Can use Hooks for state & effects.
- Simpler and more concise.
- More popular.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/813d1051-a71f-4bee-9ce2-cd0bc91c0665)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/8cbcaf99-29f8-4eeb-b60b-a8b9250c5a3d)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/490f44bd-be4c-4db3-92d2-8aaf5916b7be)

## What is JSX?

JSX is a syntax extension for JavaScript that allows you to write HTML-like code directly within JavaScript. It's a key feature of React and makes it easier to write and read UI components.

![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/1fb82144-7389-4aa9-aa30-28d935b08d1d)

## Exporting Components

- Enables the use of components in other parts of the application.
- Allows exporting a single component as default from a module.
- Allows exporting multiple items from a module.
- To use an exported component, you need to import it in the destination file using import syntax.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/c2b1be23-9d68-474e-b80a-89601266c78d)

- New Component which return a button :
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/e0263ca2-68c7-4540-b192-5af01cc0f858)

- main.jsx file contain all the dependencies and packeges that comes with react.
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/9a8886a4-e2db-4b9c-9d6a-2b2074aafc37)

- Importing our new component in App.jsx file to add our react app.
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/974bea77-f29a-48ff-957f-a8f9951eb293)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/007357d8-4000-48d1-ad65-ae86c082e871)

 
## Other Important Points

- Component naming must be capitalized.
- Lowercase for default HTML.
- CSS in React can be directly imported into component files, allowing for modular and component-specific styling.

## Dynamic Components

- JSX allows the creation of dynamic & interactive UI components.
- Using `{}`, we can embed any JS expression directly within JSX, including variables, function calls, and more.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/a076a0c1-9d45-416c-ad52-91497ce0e172)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/f5cf41ad-fb0c-46b6-9ef8-04aad32c1e07)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/72677b52-9077-4c0a-ae23-0c64fbfb4b36)


## Reusable Components

- Components are modular, allowing for easy reuse across different parts of an application.
- Reusing components ensures UI consistency and reduces the chance of discrepancies.
- Reduces development time and effort by avoiding duplication of code.
- Changes made to a reused component reflect everywhere it's used, simplifying updates and bug fixes.

- In this example we define a component which returns a random number.
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/f78a25a0-c551-498e-8c58-aaa4a1ecd3cc)

- And here we important the random number component and reuse different part of the application.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/afe302be-4bff-4ede-aaf0-0e84a1fb7cde)
  
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/c9cbf312-cd42-4a08-9a30-6464555f691b)

