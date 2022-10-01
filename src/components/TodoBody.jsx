import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoDoneList from "./TodoDoneList";

const TodoBody = ({ todos, onDelete, onDone, addTodo }) => {
  // console.log(addTodo);
  return (
    <div className="m-5">
      <TodoInput addTodo={addTodo}/>
      <h5>Planned</h5>
      <TodoList todos={todos} onDelete={onDelete} onDone={onDone} />
      <h5>Done</h5>
      <TodoDoneList todos={todos} onDelete={onDelete} onDone={onDone} />
    </div>
  );
};

export default TodoBody;
