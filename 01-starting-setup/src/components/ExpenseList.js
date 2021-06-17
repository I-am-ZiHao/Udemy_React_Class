import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = ({expenses}) => {
  return (
    <div className="expenses">
      {
        expenses.map((item) => 
          <ExpenseItem key={item.id} {...item}/>
        )
      }
    </div>
  );
}

export default ExpenseList;