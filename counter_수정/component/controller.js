
function Controller({handleSetCount, reset}){

    return(
        <div>
            <button onClick={()=>{handleSetCount(-1)}}>-1</button>
            <button onClick={()=>{handleSetCount(-10)}}>-10</button>
            <button onClick={()=>{handleSetCount(-100)}}>-100</button>
            <button onClick={()=>{handleSetCount(100)}}>+100</button>
            <button onClick={()=>{handleSetCount(10)}}>+10</button>
            <button onClick={()=>{handleSetCount(1)}}>+1</button>
            <button onClick={reset}>초기화</button>
        </div>
    );}

export default Controller;