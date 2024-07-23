import React, { useRef, useState } from 'react';

function Timer() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const handleStart = () => {
    countRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(countRef.current);
  };

  return (
    <div>
      <p>Timer: {count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Timer;
