import {useState} from 'react';

import TodoItem from "./TodoItem";

function TodoList({todo, onUpdate, onDelete}){
    const [search,setSearch] = useState('');
    const onChangeSearch = (e) =>{
        setSearch(e.target.value);
    }
    const getSearchResult = ()=>{
       return search === '' ? todo 
            : todo.filter( (it) => it.content.toLowerCase().includes(search.toLowerCase()));
    }

    const checkTodo = () => {
        const totalCount = todo.length;
        const doneCount = todo.filter( (it)=> it.isDone).length
        const notDoneCount = totalCount - doneCount
        return {totalCount, doneCount,notDoneCount };
    }

    const {totalCount, doneCount,notDoneCount } = checkTodo()

    return(
        <div>
            <h4>Todo List 🔍</h4>
            <input value={search}
                  onChange={onChangeSearch}/>
        <div className="list_wrapper">
        {getSearchResult().map( (it) =>(
          <TodoItem 
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}/>
        ))}
          </div>
          <div>
              <p>총 일정 : {totalCount}</p>
              <p>완료 일정 : {doneCount}</p>
              <p>미완료 일정 : {notDoneCount}</p>

          </div>
      </div>

    );
}

export default TodoList;