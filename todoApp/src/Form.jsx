import { useState, useEffect } from "react";

function Form({ todos, setTodo, id, setId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Title: ", title);
    console.log("Description : ", description);

    if (id) {
      updatedByID(id);
      setId("");
    } else {
      if (title === "" && description === "") {
        alert("Please fill Title and Description");
      } else {
        const newTodo = {
          id: Math.random(),
          title: title,
          description: description,
        };
        setTodo([...todos, newTodo]);
      }
    }
    setTitle("");
    setDescription("");
    setId("");
  }

  useEffect(() => {
    if (id) {
      const updatedData = todos.filter((todo) => todo.id === id);
      console.log(updatedData);
      setTitle(updatedData[0].title);
      setDescription(updatedData[0].description);
    }
  }, [id]);

  function updatedByID(id) {
    const obj = {
      title,
      description,
    };

    setTodo((prevState) => {
      return prevState.map((todo) =>
        todo.id === id ? { ...todo, ...obj } : todo
      );
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container my-5 text-center">
          <input
            type="text"
            className="mx-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <input
            type="text"
            className="mx-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
          <button className="btn btn-warning">{id ? "Edit" : "Add"}</button>
        </div>
      </form>
    </>
  );
}

export default Form;
