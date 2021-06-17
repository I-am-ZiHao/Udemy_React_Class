import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

const ExpenseList = ({expenses}) => {
  return (
    <Card className="expenses">
      {
        expenses.map((item) => 
          <ExpenseItem key={item.id} {...item}/>
        )
      }
    </Card>
  );
}

export default ExpenseList;