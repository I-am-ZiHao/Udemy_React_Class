import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import EmptyForm from './EmptyForm';
import { useState } from 'react';

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const newExpenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    onAddExpense(newExpenseData);
  }

  const expensesFormHandler = (bool) => {
    setShowExpenseForm(bool);
  };

  let finalForm = showExpenseForm ? <ExpenseForm onExpenseForm={expensesFormHandler} onSaveExpenseData={saveExpenseDataHandler} /> : <EmptyForm onExpenseForm={expensesFormHandler}/>;

  return (
    <div className="new-expense">
      {finalForm}
    </div>
  );
};

export default NewExpense;