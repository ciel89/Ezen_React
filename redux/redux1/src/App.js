import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './counter';
import CounterRedux from './redux/counteredux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Without Redux:</h2>
        <Counter />
        <h2>With Redux:</h2>
        <CounterRedux />
      </div>
      <div>추가 콤포넌트
        <CounterRedux/>
      </div>
    </Provider>
  );
};

export default App;
