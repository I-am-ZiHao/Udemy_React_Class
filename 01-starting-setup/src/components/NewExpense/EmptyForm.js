const EmptyForm = ({onExpenseForm}) => {

  const emptyFormHandler = () => {
    onExpenseForm(true);
  }

  return (
    <div>
      <button type="button" onClick={emptyFormHandler}>Add New Expense</button>
    </div>
  )
};

export default EmptyForm;