import React from 'react';
import TodoItem from './TodoItem.jsx';



const TodoList = ({ list, editingId, editInput, startEditing, saveEdit, deleteTodo, setEditInput }) => (
  <ul>
    {list.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        editingId={editingId}
        editInput={editInput}
        startEditing={startEditing}
        saveEdit={saveEdit}
        deleteTodo={deleteTodo}
        setEditInput={setEditInput}
      />
    ))}
  </ul>
);

export default TodoList;