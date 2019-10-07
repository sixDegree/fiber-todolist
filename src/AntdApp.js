import React from 'react';
// import AntdTodoList from './AntdTodoList'
// import TodoListContainer from './TodoListContainer'

import {Provider} from 'react-redux'
import store from './store/index'
import TodoListRd from './TodoListRd'


function AntdApp() {
  return (
    <div className="App">
      <div className="main">
        
        {/*<AntdTodoList/>*/}
       
        {/*<TodoListContainer/>*/}
        
        <Provider store={store}> 
            <TodoListRd/>
        </Provider>
      
      </div>
    </div>
  );
}

export default AntdApp;
