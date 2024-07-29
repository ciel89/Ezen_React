import { useDispatch, useSelector } from 'react-redux';
import { plusOne, minusOne } from './Counter';
import { useState } from 'react';
import { plusN, minusN } from './Counter';

function App() {

  const [number, setNmber] = useState(0);

  const counter = useSelector((state) => { // state: store안에 있는 전체 state
    return state.counter;
  });


  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input type="number" value={number} onChange={(event) => {
          const { value } = event.target // 구조 분해 할당
          setNmber(+value); // + : 숫자로 형변환
        }} />
      </div>


      <button onClick={() => {
         //dispatch(plusOne());
        dispatch(plusN(number)); // dispatch는 action객체를 store에 던진다.
      }}>
        +</button>
      <button onClick={() => {
        //dispatch(minusOne())
        dispatch(minusN(number))
      }}>
        -</button>
    </>
  );
}

export default App;