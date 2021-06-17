import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = (props) => {
  return (
    <div className="expenses">
      {
        props.expenses.map((item) => 
          <ExpenseItem key={item.id} title={item.title} date={item.date} amount={item.amount}/>
        )
      }
    </div>
  );
}

export default ExpenseList;