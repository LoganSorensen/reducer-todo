import React, { useReducer } from 'react';
import { todoReducer, todo } from './reducers/todoReducer';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, todo)
  console.log(todo);

  return (
    <div className="App">
      <TodoList todo={state} />
      <TodoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
