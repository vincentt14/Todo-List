import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button type="button" className="btn btn-outline-danger mx-3" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
};

export default DeleteButton;
