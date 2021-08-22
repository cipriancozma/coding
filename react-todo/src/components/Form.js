import React from "react";

export default function Form({ setToDo, arrayOfTodos, setArrayOfTodos, todo }) {
  const inputHandler = (e) => {
    setToDo(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    setArrayOfTodos([
      ...arrayOfTodos,
      { text: todo, completed: false, id: Math.random() * 1000 },
    ]);

    setToDo("");
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputHandler}
        value={todo}
      />
      <button className="todo-button" type="submit" onClick={submitTodo}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
