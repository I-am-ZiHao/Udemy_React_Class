// import Todo from "../models/todo";
import Item from "./Item";
import classes from './Todos.module.css';
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

//React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }>
const Todos: React.FC = () => {
  const todoContext = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoContext.items.map(item => (
        <Item key={item.id} text={item.text} onRemoveTodo={todoContext.removeTodo.bind(null, item.id)} />
      ))}
    </ul>
  );
}

export default Todos;