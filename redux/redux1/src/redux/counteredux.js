import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';

const CounterRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterRedux;
