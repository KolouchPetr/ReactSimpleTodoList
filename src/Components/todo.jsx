import React from "react";

const Todo = (props) => {
  return (
    <>
      <li>{props.content}</li>
      <button
        onClick={() => {
          props.handleDelete(props.content);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          props.handleCompleted(props.content);
        }}
      >
        Completed
      </button>
    </>
  );
};

export default Todo;
