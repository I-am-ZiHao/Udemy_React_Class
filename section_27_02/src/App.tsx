import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todo';
import TodoContextProvider from './store/todos-context';

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
