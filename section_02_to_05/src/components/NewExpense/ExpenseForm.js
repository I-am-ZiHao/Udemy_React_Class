import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({ onExpenseForm, onSaveExpenseData }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: event.target.value
    //   };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value
    //   };
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value
    //   };
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredExpenseData = {
      title: enteredTitle,
      amount: +enteredAmount,  // 強制轉型成number
      date: new Date(enteredDate)
    }

    onSaveExpenseData(enteredExpenseData);
    onExpenseForm(false);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const expenseFormHandler = () => {
    onExpenseForm(false);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2021-01-01" max="2021-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button type="button" onClick={expenseFormHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;