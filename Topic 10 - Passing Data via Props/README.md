- Passing data via props is a fundamental concept in React, a JavaScript library for building user interfaces. Props (short for properties) are a way of passing data from parent to child components. Here's a basic explanation of how it works

## Parent component 
- This is the component that renders another component(s) inside it and passes data to them via props.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/bf0ac4d7-298a-4b1f-9147-1e29022923da)

## Child Component 
- This is the component that receives data from its parent through props.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/63337cd6-4fb5-4eb5-9bf0-5023b572d727)

  Props are arguments that is passed to react components. Props are read-only and cannot be modified by the child component. If the data needs to be changed, it should be managed by the parent component, and the updated data can be passed down again via props.

## Props Example 
 - ## Parent Component App.jsx 
   This is the the parent component called App.jsx which's defined data and using child components to render data.
	
   As you can see here we defined two attributes in two components called <ErrorMessg>
  and <FoodItems>. Those attributes basically stores foodItems[] Array data in attribute "foodItems". Where we can used the "foodItems" to access the "foodItems" array data in the child components via props.

    ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/efccd35f-fdf8-49cc-9f4b-ec6e89e80462)

  - ## Child Component Item.jsx
    This is the child component that is busy to catch data from Child Component via props. "Props" is just a name not any keyword actually in javascript object that contain key-value pairs data passed from parent to child component. 

    So, "props" is just a conventional name used to refer to the properties passed from parent components, but it's not a keyword in JavaScript or React.
	
    And also we used the destructuring method to get "footItem" from props and use that "foodItem" in ```<li>``` tag to rander the catch data from child component called "FoodItems.jsx" mention bellow.

    ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/1f40d16a-07e5-49e0-bd07-a52d5c86463f)

  - ## Child Component ErrorMessg.jsx
    This is the child component that is used to display Error Message if the data was not found or Empty the receive data from parent component. And here we use the "foodItems" directly because we already defined in parent component as an attribute in <ErrorMessg> tag.

    ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/28e85ccc-597e-4320-b09f-0b22d2c2e105)

  - ## Child Component FoodItem.jsx
    This is child component that is used to render food items using ```MAP()``` method. And also here we import "Item" because item is being used here and also we used the destructuring method to catch "foodItems" from parent component where we defined as in attribute in ```<FoodItems>``` tag.

    ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/b4eb44ce-8fe3-466d-a353-555acfaed0c5)


## Source Code Output 
  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/3a64f3a4-092f-4da6-bc0a-c053a151c183)

  If Parent component can't export data in this we have array of food item if the array was was empty so we get the "ErrorMessg" Component output.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/ba398570-cd62-4fa6-b0e3-a8bed813aa76)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/aead0358-2775-4d20-9ee8-f3e8851d5433)
