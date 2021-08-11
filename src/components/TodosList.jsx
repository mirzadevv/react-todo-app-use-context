import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContexts";
const TodosList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isCompleted === "completed"}>
            <div className="form-check">
              <label className="form-check-label">
                <input className="checkbox" type="checkbox" />
                {todo.title}
                <i className="input-helper"> </i>
              </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline"></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
