import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <div>
      <div className="task_add_delete">
        <div className="col">
          {editable ? (
            <input
              type="text"
              className="search"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4 className="todos">{todo.name}</h4>
          )}
        </div>
        <button
          className="edit_button"
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name,
              })
            );
            if (editable) {
              setName(todo.name);
            }
            setEditable(!editable);
          }}
        >
          {editable ? "Update" : "Edit"}
        </button>
        <div
          className="delete_btn"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
