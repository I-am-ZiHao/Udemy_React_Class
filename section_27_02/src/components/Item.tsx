import React from 'react';
import classes from './TodoItem.module.css';

type ItemProps = {
  text: string,
  onRemoveTodo: () => void
}

const Item = ({ text, onRemoveTodo }: ItemProps) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>{text}</li>
  );
};

export default Item;