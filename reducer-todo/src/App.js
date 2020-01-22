import React, { useReducer } from 'react';
import { todoReducer, todo } from './reducers/todoReducer';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, todo)
  // console.log(state);

  return (
    <div className="App">
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
