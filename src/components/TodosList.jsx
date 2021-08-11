import React from "react";
const TodosList = () => {
  return (
    <div class="list-wrapper">
      <ul class="d-flex flex-column todo-list">
        <li>
          <div class="form-check">
            <label class="form-check-label">
              <input class="checkbox" type="checkbox" />
              Buy Milk.
              <i class="input-helper"> </i>
            </label>
          </div>
          <i class="remove mdi mdi-close-circle-outline"></i>
        </li>
        <li class="completed">
          <div class="form-check">
            <label class="form-check-label">
              <input class="checkbox" type="checkbox" checked="" />
              Wash dishes.
              <i class="input-helper"></i>
            </label>
          </div>
          <i class="remove mdi mdi-close-circle-outline"></i>
        </li>
      </ul>
    </div>
  );
};

export default TodosList;
