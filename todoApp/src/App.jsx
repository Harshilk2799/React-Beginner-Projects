import React from "react";
import Form from "./Form";
import Todos from "./Todos";
import { useState } from "react";

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Python Programming",
      description: "Python is a high level programming language.",
    },
    {
      id: 2,
      title: "Java Programming",
      description: "Java is a object-oriented programming language.",
    },
  ]);

  const [id, setId] = useState("");

  function deleteTodo(id) {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Todo Application</h1>
        <Form todos={todos} setTodo={setTodo} id={id} setId={setId} />
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  );
}

export default App;
