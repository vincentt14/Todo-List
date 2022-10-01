import React from "react";

const DoneButton = ({ id, isDone, onDone }) => {
  return (
    <button type="button" className="btn btn-outline-success mx-3" onClick={() => onDone(id)}>
      {isDone === false ? `Done` : `Undo`}
    </button>
  );
};

export default DoneButton;
