import {useState} from 'react';
import './App.css';
import Viewer from './component/viewer';
import Controller from './component/controller';

function App() {
  const [count,setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <Viewer count={count}/>
      <Controller handleSetCount={handleSetCount}/>
    </div>
  );
}

export default App;
