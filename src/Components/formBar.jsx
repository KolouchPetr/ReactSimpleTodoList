import React from "react";

const FormBar = (props) => {
  const handleInputChange = (e) => {
    props.setFormValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    let todos = props.todos.slice();
    todos.push({ content: props.inputText, completed: false });
    props.setTodoList(todos);
    props.setFormValue("");
    e.preventDefault();
  };

  const handleSelectChange = (e) => {
    props.setSearchValue(e.target.value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="Enter your todo here"
        value={props.inputText}
        onChange={handleInputChange}
      />
      <input type="submit" value="Add" onClick={handleFormSubmit} />
      <select onChange={handleSelectChange} value={props.searchValue}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Uncompleted">Uncompleted</option>
      </select>
    </form>
  );
};

export default FormBar;
