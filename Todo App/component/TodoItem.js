import React from "react";
function TodoItem({id, isDone, content, todoDate, onUpdate, onDelete}){


    const onChangeCheckbox = () => {
        onUpdate(id);
      };
      const onClickDelete = () => {
        onDelete(id);
      };
    
    return(
        <div>
            <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
            <span>{content}</span>
            <span>{new Date(todoDate).toLocaleDateString()}</span>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
}

export default React.memo(TodoItem);