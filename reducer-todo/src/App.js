import React, { useState, useReducer } from 'react';
import { todoReducer, todo } from './reducers/todoReducer';
import TodoList from './components/todo-list';
import TodoForm from './components/todo-form';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, todo)

  return (
    <div className="App">
      <TodoList todo={todo} />
      <TodoForm />
    </div>
  );
}

export default App;
