import "./App.css";
import FormBar from "./Components/formBar";
import TodoList from "./Components/todoList";
import { useState } from "react";

function App() {
  const [formValue, setFormValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [searchValue, setSearchValue] = useState("all");

  return (
    <div>
      <FormBar
        inputText={formValue}
        setFormValue={setFormValue}
        setTodoList={setTodoList}
        todos={todoList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></FormBar>
      <TodoList
        todos={todoList}
        setTodoList={setTodoList}
        searchValue={searchValue}
      ></TodoList>
    </div>
  );
}

export default App;
