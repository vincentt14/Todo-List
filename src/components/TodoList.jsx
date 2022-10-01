import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onDone }) => {
  const plannedTodo = todos.filter((todo) => todo.isDone === false);
  // console.log(plannedTodo);

  if (plannedTodo.length !== 0) {
    return (
      <div className="row">
        {plannedTodo.map((todo) => (
          <TodoItem key={todo.id} onDelete={onDelete} onDone={onDone} {...todo} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="row text-center">
        <p>Yay you've done all your task</p>
      </div>
    );
  }
};

export default TodoList;
