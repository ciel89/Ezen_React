import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ item, onRemove }) {
  return (
    <li className="todo-item">
      {item}
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

TodoItem.propTypes = {
  item: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoItem;
