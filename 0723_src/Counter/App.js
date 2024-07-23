import {useState, useEffect} from 'react';
import './App.css';
import Viewer from './Viewer';
import Control from './Control';

function App() {
  const [count,setCount] = useState(0);
  const onSetCount = (value) => {
    setCount(count + value);
  }
 
  const reset =()=>{
    setCount(0);
  }

  useEffect( ()=>{console.log('업데이트')}, [count]);

  useEffect(() => {
                    console.log('Component mounted');
                    return () => {
                        console.log('Component unmounted');
                      };
                }, []); 

  return (
    <div className="App">

    </div>
  );
}

export default App;