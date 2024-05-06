import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ myTodoItems }) => {
  return (
    <div className={styles["items-container"]}>
        {
            myTodoItems.map((item) => <TodoItem TodoDate={item.date} TodoName={item.name}></TodoItem>
        )
        }
    </div>
  );
};
export default TodoItems;
