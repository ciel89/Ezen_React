import React from 'react';
import TodoItem from './TodoItem';

function TodoList({todos, onRemove}) {
  return (
      <ul>
        {todos.map( (item, index) => 
          <TodoItem key={index} item={item} onRemove={()=>{onRemove(index)}}/>
        )}
      </ul>
      

      

    );
}


export default TodoList;