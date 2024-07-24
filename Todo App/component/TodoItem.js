
function TodoItem({id, isDone, content, todoDate, onUpdate, onDelete}){
    const onChangeCheckbox = () => {
        onUpdate(id);
      };
      const onClickDelete = () => {
        onDelete(id)
      };
    
    return(
        <div>
            <input type="checkbox" onChange={onChangeCheckbox} checked={isDone} />
            <span>{content}</span>
            <span>{new Date(todoDate).toLocaleDateString()}</span>
            <button onClick={onClickDelete}>삭제</button>
        </div>
    );
}

export default TodoItem;