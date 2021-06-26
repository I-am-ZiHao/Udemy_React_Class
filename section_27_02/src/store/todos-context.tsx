import { type } from "os";
import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: () => { },
  removeTodo: (id: string) => { }
});

type TodoContextProiverProps = {
  children?: React.ReactNode;
};

const TodoContextProvider = ({ children }: TodoContextProiverProps) => {
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

  const TodoContextProviderValue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodosContext.Provider value={TodoContextProviderValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;