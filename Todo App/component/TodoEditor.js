import {useState, useRef} from 'react';

const TodoEditor = ({onCreate}) => {
    const [content, setContent] = useState("");
    const inputRef =  useRef();
  
    const onChangeContent = (e) => {
        setContent(e.target.value)
    };
    
    const onSubmit = () => {
      if(!content) {inputRef.current.focus()}
      onCreate(content);
      setContent('');
    };

  
    return (
      <div className="TodoEditor">
        <h3>새로운 Todo List 작성하기 ✏️ </h3>
        <div className="editor_wrapper">
          <input ref={inputRef}
                 value={content}
                 onChange={onChangeContent}/>
          <button onClick={onSubmit}>추가</button>
        </div>
      </div>
    );
}

export default TodoEditor;