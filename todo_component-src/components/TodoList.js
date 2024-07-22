import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemove }) {
  return (
    <ul className="todo-list">
      {todos.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          onRemove={() => onRemove(index)}
        />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
