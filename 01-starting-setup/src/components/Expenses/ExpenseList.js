import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import './ExpenseList.css'

const ExpenseList = ({expenses}) => {
  const [year, setYear] = useState('2019');  // if the default value is not in options, it will display the first option.

  const filterExpenseHandler = (year) => {
    setYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilterExpense={filterExpenseHandler}/>
        {
          expenses.map((item) => 
            <ExpenseItem key={item.id} {...item}/>
          )
        }
      </Card>
    </div>
  );
}

export default ExpenseList;