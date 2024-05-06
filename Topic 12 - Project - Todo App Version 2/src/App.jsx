import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";

function App() {
  const Items_obj = [
    {
      name: "Buy Milk",
      date: "4/04/2024",
    },
    {
      name: "Go to College",
      date: "4/05/2024",
    },
    {
      name: "Go to College",
      date: "4/05/2024",
    },
    {
      name: "Go to College",
      date: "4/05/2024",
    },
    {
      name: "Go to College",
      date: "4/05/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems myTodoItems={Items_obj}></TodoItems>
    </center>
  );
}

export default App;
