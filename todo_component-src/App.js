import React, { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim() === '') return; // 공백만 있는 경우 추가하지 않음
    setTodos([...todos, todo]);
    setTodo('');
  };

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput
        todo={todo}
        onChange={handleInputChange}
        onAdd={addTodo}
      />
      <TodoList
        todos={todos}
        onRemove={removeTodo}
      />
    </div>
  );
}

export default App;
