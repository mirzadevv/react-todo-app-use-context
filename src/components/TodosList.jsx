import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContexts";
const TodosList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleCompletedChange = (todoId) => {
    let newTodos = [...todos];
    const index = todos.findIndex((element) => element.id === todoId);
    newTodos[index] = {
      ...newTodos[index],
      isCompleted: !newTodos[index].isCompleted,
    };
    setTodos(newTodos);
  };

  const handleDelete = (todoId) => {
    const newTodos = [...todos];
    setTodos(newTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className="list-wrapper">
      <ul className="d-flex flex-column todo-list">
        {todos.length === 0 && <h4>There are no todos</h4>}
        {todos.map((todo) => (
          <li className={todo.isCompleted ? "completed" : ""} key={todo.id}>
            <div className="form-check">
              <label className="form-check-label">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={todo.isCompleted ? true : false}
                  onChange={() => handleCompletedChange(todo.id)}
                />
                {todo.title}
                <i className="input-helper"> </i>
              </label>
            </div>
            <i
              className="remove mdi mdi-close-circle-outline"
              onClick={() => handleDelete(todo.id)}
            ></i>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
