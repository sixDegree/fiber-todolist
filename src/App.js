import React from 'react';
import './App.css';

import TodoList from './TodoList'
import ToggleButton from './ToggleButton'
import ToggleButtonCSSTransition from './ToggleButtonCSSTransition'
import ToggleButtonTransitionGroup from './ToggleButtonTransitionGroup'

function App() {
  return (
    <div className="App">
      <div className="main">
        <hr/>
        <TodoList/>
        <hr/>
        
        <ToggleButton/>
        <hr/>
        <ToggleButtonCSSTransition/>
        <hr/>
        <ToggleButtonTransitionGroup/>
        
      </div>
    </div>
  );
}

export default App;
