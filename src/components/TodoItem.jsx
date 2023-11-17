
import React, { useState } from 'react';

const TodoItem = ({ todo, editingId, startEditing, saveEdit, deleteTodo }) => {
  const [editInput, setEditInput] = useState(todo.todo);

  const handleInputChange = (e) => {
    setEditInput(e.target.value);
  };

  return (
    <li key={todo.id}>
      {editingId === todo.id ? (
        <>
          <input
            type="text"
            value={editInput}
            onInput={handleInputChange}
          />
          <button className="save-btn" onClick={() => saveEdit(todo.id, editInput)}>
            Save
          </button>
        </>
      ) : (
        <>
          {todo.todo}
          <button className="edit-btn" onClick={() => startEditing(todo.id, todo.todo)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            &times;
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;