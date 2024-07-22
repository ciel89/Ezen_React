import {useState, useEffect} from 'react';
import './App.css';
import Viewer from './component/viewer';
import Controller from './component/controller';


function App() {
  var [count,setCount] = useState(0);
  var handleSetCount = (value) => {
    setCount(count + value);
  }
 
  const reset = () => {
    setCount(0);
  };


  /*useEffect(() => {
    console.log('Component mounted');

    // 클린업 함수로 언마운트 시 메시지를 출력
    return () => {
      console.log('Component unmounted');
    };
  }, []); // 빈 배열을 의존성 배열로 사용하여 마운트 시 한 번만 실행*/


  useEffect(() => {
    // 클린업 함수로만 사용하여 언마운트 시에만 실행
    return () => {
      console.log('Component unmounted');
    };
  }, []); // 빈 배열을 의존성 배열로 사용




  /*useEffect(()=>{
    console.log('업데이트 : ', count);}, [count]);*/


  return (
    <div className="App">
      <h1>현재 카운트</h1>
      <Viewer count={count}/>
      <Controller handleSetCount={handleSetCount} reset={reset}/>
      <hr/>
    </div>
  );
}

export default App;
