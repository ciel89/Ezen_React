
import TodoItem from "./TodoItem";
import {useState, useMemo} from 'react';


function TodoList({todo,onUpdate,onDelete}){
    const [search,setSearch] = useState('');
    const onChangeSearch = (e) =>{
        setSearch(e.target.value );
    };
    const getSearchResult = ()=>{
        return search ==='' ? todo 
        : todo.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase()));
    };

    //함수 추가 및 수정
    const checkTodo = useMemo(() => {
      console.log('분석함수 호출')
      const totalCount = todo.length;
      const doneCount = todo.filter((it) => it.isDone).length;
      const notDoneCount = totalCount - doneCount;
      return {
        totalCount,
        doneCount,
        notDoneCount,
      };
    }, [todo]);


    const {totalCount, doneCount, notDoneCount} = checkTodo;

    return(
        <div>
            <h4>Todo List 🔍</h4>

            <div>
              <p>총개수 : {totalCount} </p>
              <p>완료된 할 일 : {doneCount}</p>
              <p>미완료 할 일 : {notDoneCount}</p>
            </div>

            <input
                value={search}
                onChange={onChangeSearch}
                className="searchbar"
                placeholder="검색어를 입력하세요"
            />
        <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
      </div>

    );
}

export default TodoList;