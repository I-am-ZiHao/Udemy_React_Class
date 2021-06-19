import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList" ;
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({expenses}) => {
  const [year, setYear] = useState('2020');  // if the default value is not in options, it will display the first option.

  const filterExpenseHandler = (year) => {
    setYear(year);
  };

  const filteredExpenses = expenses.filter((item) => item.date.getFullYear() === parseInt(year));  // getFullYear() returns number

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterExpense={filterExpenseHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expensesContent={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;