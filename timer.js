import React, { useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  
  const handleStart = () => {
    var current = 0;
     current= setInterval(() => {
      setCount(Count => Count + 1);
    }, 1000);
  };

  const handleStop = () => {
    setCount(0);
  };

  return (
    <div>
      <p>Count: {current}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
