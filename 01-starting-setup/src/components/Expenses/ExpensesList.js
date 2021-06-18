import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = ({expensesContent}) => {

  if (expensesContent.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return (
    <ul className="expenses-list">
      {expensesContent.map((item) => <ExpenseItem key={item.id} {...item} />)}
    </ul>
  )
}

export default ExpensesList;