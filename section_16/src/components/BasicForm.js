import useInput from "../hooks/use-hook";

const BasicForm = (props) => {
  const isEmpty = value => value.trim() !== '';

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputIsInValid,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput(isEmpty);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputIsInValid,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
  } = useInput(isEmpty);

  const {
    value: enteredEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputIsInValid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredLastNameIsValid && enteredFirstName && enterEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!enteredLastNameIsValid || !enterEmailIsValid || !enteredFirstNameIsValid) {
      return;
    }
    resetLastNameInput();
    resetFirstNameInput();
    resetEmailInput();
  };

  const lastNameInputClasses = lastNameInputIsInValid ? 'form-control invalid' : 'form-control';
  const firstNameInputClasses = firstNameInputIsInValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={firstNameInputChangeHandler} onBlur={firstNameInputBlurHandler} value={enteredFirstName} />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={lastNameInputChangeHandler} onBlur={lastNameInputBlurHandler} value={enteredLastName} />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
