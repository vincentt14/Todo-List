import React from "react";
import DeleteButton from "./DeleteButton";
import DoneButton from "./DoneButton";

const TodoItem = ({ title, createdAt, body, id, onDelete, isDone, onDone }) => {
  return (
    <div className="col-sm-3 my-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>{createdAt}</p>
          <p className="card-text">{body}</p>
          <div className="text-center">
            <DeleteButton id={id} onDelete={onDelete} />
            <DoneButton id={id} isDone={isDone} onDone={onDone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
