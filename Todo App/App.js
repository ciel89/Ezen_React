import './App.css';
import {useState,useRef} from 'react';

import Header from './component/Header';
import TodoEditor from "./component/TodoEditor";
import TodoList from './component/TodoList';

const mockTodo = [
  {
    id:0,
    isDone:false,
    content:'리액트 공부하기',
    todoDate: new Date()
  },
  {
    id:1,
    isDone:false,
    content:'포트폴리오 작성하기',
    todoDate: new Date()
  },
]


function App() {  
  const [todo, setTodo] = useState(mockTodo);
  const idRef=useRef(2);

  const onCreate= (content) =>{
    const newItem ={
      id:idRef.current,
      isDone:false,
      content,
      todoDate: new Date()
    };
    setTodo([newItem,...todo]);
    idRef.current+=1;
  }

  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };

  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header/>
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;