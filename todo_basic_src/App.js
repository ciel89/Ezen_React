import React, { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // 할 일을 추가하는 함수
  const addTodo = () => {
    if (todo.trim() === '') return; // 공백만 있는 경우 추가하지 않음
    setTodos([...todos, todo]);
    setTodo('');
  };

  // 할 일을 입력할 때 호출되는 함수
  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  // 할 일을 제거하는 함수
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={todo}
          onChange={handleInputChange}
          placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
