// 중앙 state 관리소(store)를 설정하는 부분
//import { createStore } from "redux"; // 스토어를 만드는 API

import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux"; // 리듀서를 하나로 묶는 역할
import counter from "./Counter";

const rootReducer = combineReducers({ // rootReducer : 리듀서를 모아 한개로 만들어놓은 기본 리듀서
    counter: counter
});


const store = createStore(rootReducer); // createStore를 실행해서 리턴값을 store에 넣어준다.

export default store; // store를 애플리케이션에 주입하기 위해서 export해준다.