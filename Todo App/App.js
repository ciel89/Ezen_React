import './App.css';
import {useRef, useReducer} from 'react';

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

function reducer(state, action){
  switch (action.type){
    case 'create' : {
      return [action.newItem,...state];
    }
    case 'update' : {
      return state.map( (it) => it.id === action.targetId ? {...it, isDone: !it.isDone} : it  );
    }
    case 'delete' : {
      return state.filter( (it) => it.id !== action.targetId );
    }
    default : return state;
  }
}

function App() {  
  // const [todo, setTodo] = useState(mockTodo);  수정
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  
  const idRef=useRef(2);

  const onCreate= (content) =>{
    dispatch(
      {
        type:'create',
        newItem : {
          id:idRef.current,
          isDone:false,
          content,
          todoDate:new Date()
        },
      }
    );
    idRef.current+=1;
  }

  const onUpdate = (targetId) => {
    dispatch(
      {
        type:'update',
        targetId
      }
    );
  };

  const onDelete = (targetId) => {
    dispatch(
      {
        type:'delete',
        targetId
      }
    );
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
