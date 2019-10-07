import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

// method1: 不使用中间件也可处理异步操作
// const store = createStore(reducer)

// method2: 使用redux-thunk中间件处理异步操作
// import thunk from 'redux-thunk';
// const store = createStore(reducer,applyMiddleware(thunk));

// method3: 使用redux-saga中间件实现异步操作
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas)

export default store;