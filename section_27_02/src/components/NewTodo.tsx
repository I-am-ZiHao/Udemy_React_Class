import { useRef, useContext } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from '../store/todos-context';

// type NewTodoProps = {
//   onAddTodo: (text: string) => void
// };

const NewTodo = () => {
  const todoTextRef = useRef<HTMLInputElement>(null);
  const todoContext = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoContext.addTodo(enteredText);
    todoTextRef.current!.value = '';
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor='text'>Todo</label>
      <input type="text" id='text' ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodo;