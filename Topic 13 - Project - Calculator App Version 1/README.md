## Project Tree

  ![image](https://github.com/JawadSher/Complete-React-Redux-Documentation/assets/158135119/246a23cd-1120-4e91-ba95-b77c5c3160e0)

# Simple Calculator App

This project is a simple calculator application built using React. It features components for displaying the input/output and buttons for performing arithmetic operations.

## Introduction

The calculator app allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It provides a clean and intuitive user interface for quick calculations.

## Components

### Display.jsx
    
    import React from 'react';
    import styles from "./Display.module.css";
    const Display = () => {
        return <input type="text" name="" className={styles.display}/>
    }
    export default Display;


## Features

- **Basic Arithmetic Operations**: Users can perform addition, subtraction, multiplication, and division.
- **Clear Functionality**: Clear button (C) allows users to clear the input field.
- **Responsive Design**: The application adapts to different screen sizes, ensuring usability on various devices.

## Project Structure

The project is structured into separate components, each responsible for a specific part of the application:
- **Display.jsx**: Component for displaying the input/output of the calculator.
- **BtnsContainer.jsx**: Component for rendering the buttons used for arithmetic operations.
- **App.jsx**: Main component integrating other components and defining the overall layout of the calculator.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS Modules**: Used for styling React components, providing scoped styles to avoid conflicts.
- **Bootstrap**: Included for styling and layout consistency.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/simple-calculator.git
