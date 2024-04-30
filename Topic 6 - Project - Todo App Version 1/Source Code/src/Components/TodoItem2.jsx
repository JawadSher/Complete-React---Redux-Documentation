function TodoItem2() {
  let todo = "Go to College";
  let Date = "5/04/2024";
  return (
      <div className="container">
          <div className="row my-row">
              <div className="col-6">{todo}</div>
              <div className="col-4">{Date}</div>
              <div className="col-2">
                  <button type="button" className="btn btn-danger my-btn">
                      Delete
                  </button>
              </div>
          </div>
      </div>
  );
}

export default TodoItem2;
