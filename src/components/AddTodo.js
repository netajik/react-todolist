import React from "react";

export default function AddTodo({ setTodos }) {
    const inputRef = React.useRef();
    function handleAddTodo(event) {
      event.preventDefault();
      console.log(event.target.elements);
      const text = event.target.elements.addTodo.value;
      const todo = {
        id: Math.random(),
        text,
        done: false
      };
      setTodos((prevTodos) => {
        return prevTodos.concat(todo);
      });
      inputRef.current.value = "";
    }
  
    return (
      <form onSubmit={handleAddTodo}>
        <input name="addTodo" placeholder="Add todo" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    );
  }