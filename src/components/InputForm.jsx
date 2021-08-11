import React, { useContext, useState } from "react";
import { TodosContext } from "../context/TodosContexts";
import { v4 as uuidv4 } from "uuid";

const InputForm = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const newTodos = [...todos];
    const newTodoObj = {
      id: uuidv4(),
      title: inputValue,
      isCompleted: false,
    };
    newTodos.unshift(newTodoObj);
    setTodos(newTodos);
    setInputValue("");
  };

  return (
    <div className="add-items d-flex">
      <input
        type="text"
        className="form-control todo-list-input"
        placeholder="What do you need to do today?"
        onChange={(e) => setInputValue(e.currentTarget.value)}
        value={inputValue}
      />
      <button
        className="add btn btn-primary font-weight-bold todo-list-add-btn"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default InputForm;
