import React from "react";
import Todo from "./todo";

const TodoList = (props) => {
  const rows = [];

  const handleDelete = (content) => {
    const todos = props.todos.slice();
    const newTodos = todos.filter((todo) => todo.content !== content);
    props.setTodoList(newTodos);
  };

  const handleCompleted = (content) => {
    const todos = props.todos.slice();
    const todoIndex = todos.findIndex((todo) => todo.content === content);
    todos[todoIndex].completed = true;
    props.setTodoList(todos);
  };

  props.todos.forEach((todo) => {
    if (props.searchValue === "Completed" && !todo.completed) {
      return;
    } else if (props.searchValue === "Uncompleted" && todo.completed) {
      return;
    }
    rows.push(
      <Todo
        key={todo.content}
        content={todo.content}
        handleCompleted={() => handleCompleted(todo.content)}
        handleDelete={() => handleDelete(todo.content)}
      ></Todo>
    );
  });

  return <div>{rows}</div>;
};

export default TodoList;
