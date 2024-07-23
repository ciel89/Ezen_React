import React from 'react';

function TodoInput({todo, onChange, onAdd}) {
  return (
    <div className="input-container">
        <input type='text' value={todo} onChange={onChange}/>
        <button onClick={onAdd}>Add</button>
    </div>
  );
}

export default TodoInput;