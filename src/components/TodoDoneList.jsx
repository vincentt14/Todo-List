import React from "react";
import TodoItem from "./TodoItem";

const TodoDoneList = ({ todos, onDelete, onDone }) => {
  const donnedTodo = todos.filter((todo) => todo.isDone === true);
  // console.log(donnedTodo);

  if (donnedTodo.length !== 0) {
    return (
      <div className="row">
        {donnedTodo.map((todo) => (
          <TodoItem key={todo.id} onDelete={onDelete} onDone={onDone} {...todo} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="row text-center">
        <p>There's no Doned Todo Yet</p>
      </div>
    );
  }
};

export default TodoDoneList;
