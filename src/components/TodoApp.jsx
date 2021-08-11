import React from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
import TodosProvider from "../context/TodosContexts";
const TodoApp = () => {
  return (
    <div className="page-content page-container" id="page-content">
      <div className="row container d-flex justify-content-center">
        <div className="col-md-12">
          <div className="card px-3">
            <div className="card-body">
              <h4 className="card-title">Simple Todo list</h4>
              <TodosProvider>
                <InputForm />
                <TodosList />
              </TodosProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
