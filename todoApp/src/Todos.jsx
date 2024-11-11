function Todos({ todos, deleteTodo, setId }) {
  return (
    <>
      <div className="container text-center">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => setId(todo.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Todos;
