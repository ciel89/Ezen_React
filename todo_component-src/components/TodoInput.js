import React from 'react';
import PropTypes from 'prop-types';

function TodoInput({ todo, onChange, onAdd }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={todo}
        onChange={onChange}
        placeholder="Add a new todo"
      />
      <button onClick={onAdd}>Add</button>
    </div>
  );
}

TodoInput.propTypes = {
  todo: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};

export default TodoInput;
