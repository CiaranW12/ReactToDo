import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editInput, setEditInput] = useState('');

  const addToDo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);

    setInput('');
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const startEditing = (id, todo) => {
    setEditingId(id);
    setEditInput(todo);
  };

  const saveEdit = (id, newTodo) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, todo: newTodo } : item
    );
    setList(updatedList);
    setEditingId(null);
  };

  return (
    <div className="app-wrapper">
      <h1 className="TodoHeader">Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add</button>
      <TodoList
        list={list}
        editingId={editingId}
        editInput={editInput}
        startEditing={startEditing}
        saveEdit={saveEdit}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}
export default App;