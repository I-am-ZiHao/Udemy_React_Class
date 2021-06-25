import { useRef } from "react";
import classes from './NewTodo.module.css';

type NewTodoProps = {
  onAddTodo: (text: string) => void
};

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
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