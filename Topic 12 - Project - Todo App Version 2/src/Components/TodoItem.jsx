import styles from "./AddTodo.module.css";

function TodoItem({TodoName, TodoDate}) {
    return (
        <div className="container">
            <div className="row" style={{marginTop:"10px"}}>
                <div className="col-6">{TodoName}</div>
                <div className="col-4">{TodoDate}</div>
                <div className="col-2">
                    <button type="button" className={`btn btn-danger my-btn ${styles.myBtn}`}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TodoItem;
