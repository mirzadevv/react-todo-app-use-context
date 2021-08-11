import React from "react";
import InputForm from "./InputForm";
import TodosList from "./TodosList";
const TodoApp = () => {
  return (
    <div class="page-content page-container" id="page-content">
      <div class="row container d-flex justify-content-center">
        <div class="col-md-12">
          <div class="card px-3">
            <div class="card-body">
              <h4 class="card-title">Simple Todo list</h4>
              <InputForm />
              <TodosList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
