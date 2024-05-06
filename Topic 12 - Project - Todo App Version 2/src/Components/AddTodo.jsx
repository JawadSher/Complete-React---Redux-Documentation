import styles from "./AddTodo.module.css";

function AddTodo() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6">
                    <input type="text" placeholder="Enter Todo Here" className={styles.inputField} />
                </div>
                <div className="col-4">
                    <input type="date" className={styles.inputField} />
                </div>
                <div className="col-2">
                    <button type="button" className={`btn btn-success ${styles.myBtn} `}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
