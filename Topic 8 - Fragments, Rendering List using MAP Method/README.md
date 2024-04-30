- Before diving into fragments topic lets discuss a react problem.
- As you can see the bellow is the App.jsx file content which is export a basic a list of ```<li>``` tags with ```<ul>``` tag and enclosed with <div> tag.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/c9d032e5-45bb-4a5d-862a-077d44862078)

- The problem is when some exporting a component so make sure the component is an single component. Which means the component is enclosed with any tag which represents the component as single component like the above example.

- Now the output of the App() Component is look like this.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/14d898b1-d10c-481b-b191-deea8b077bf9)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/00f4335c-91e5-4965-a49b-14faaea791cd)

- As you can see here we added an extra <div> tag for enclosing to export the component as a single component.

- In this case we export only a single component let guess we building a complete application.which contain a lot of components and with extra <div> tags. Which is not best practice to enclose a component in <div> tag. So to solve this problem by using Fragments Method of react.

## What is Fragments 

- In React, fragments are a feature that allows you to group multiple children elements without adding extra nodes to the DOM (Document Object Model). They essentially let you group a list of children without adding an extra DOM element.
- Fragments allow you to achieve the same grouping effect without adding extra nodes to the DOM. You can use a fragment by replacing the <div> with an <react.fragment> tag syntax:

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/4b7acceb-855d-4dc2-bbbd-a610a84fa9b4)

  Or using the empty <> </> syntax.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/569eaad1-92e4-4715-8117-f338988ca554)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/4257c430-7001-4d0b-9558-abb2751791a5)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/a968168b-5528-425b-8ee4-aaccdb6c7cc4)

  Now as you can see here there is no any extre <div> tag which make code clean and easier to understand.

## Rendering List using MAP Method 

- In React, the map() method is commonly used for rendering lists of elements dynamically. It allows you to iterate over an array, perform some operation on each item, and return a new array of React elements. Here's how you can use the map() method to render a list in a React component:

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/865b72c9-42d0-489d-9aa0-cbcc455db438)

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/995ba0b2-d381-4a7c-856e-b805a2a0c373)

- We have an array called items containing some Healthy Food names.
- We use the map() method to iterate over the items array. For each item in the array, we return a <li> element containing the item's name. It's important to provide a unique key prop for each element in the list to help React identify which items have changed, been added, or been removed.
- The resulting array of ```<li>``` elements is stored in the listItems variable.
- Inside the render method, we include {items} within the ```<ul>``` element to render the list dynamically.	
  
  Using the map() method in this way allows you to easily render lists of elements in React based on the data you have. This approach is flexible and scalable, making it a common pattern in React applications.
  
  Now if you look at to the console tab in the console tab contain an error called "key" prop.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/e65e256e-12ca-4d29-99b2-6719b64d97ed)


## What is Key Prop 

- In React, the key prop is a special attribute that you need to include when rendering lists of elements. The key prop helps React identify which items have changed, been added, or been removed within a list. It's crucial for React's reconciliation process, which is the algorithm that React uses to efficiently update the UI in response to changes in data or state.
- When you render a list of elements in React, each element in the list needs a unique key prop. This key should be stable, predictable, and unique among its siblings. React uses these keys to efficiently update the DOM without re-rendering all the list elements when something changes.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/c935b67a-dc2e-496b-9e37-3247d6b91916)

  Now there is no any error in the console tab.

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/4f535207-d944-4937-81ae-0470c747c276)






