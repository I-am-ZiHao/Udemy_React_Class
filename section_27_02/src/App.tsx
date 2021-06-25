import React, { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todo';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId)
    })
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
