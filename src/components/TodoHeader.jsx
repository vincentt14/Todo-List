import React from "react";
import TodoSearch from "./TodoSearch";

const TodoHeader = ({ searchEngine }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Todo App Using React and Bootstrap</a>
        <TodoSearch searchEngine={searchEngine} />
      </div>
    </nav>
  );
};

export default TodoHeader;
