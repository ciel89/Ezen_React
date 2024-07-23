import React from 'react';


function TodoItem({item, onRemove}) {
  return (
      <li> {item} 
          <button onClick={onRemove}>Remove</button> 
      </li>
  );
}



export default TodoItem;