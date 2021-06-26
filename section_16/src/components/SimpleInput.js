import useInput from "../hooks/use-hook";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputIsInValid,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enterEmailIsValid,
    hasError: emailInputIsInValid,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enterEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid || !enterEmailIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputIsInValid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName} />
        {nameInputIsInValid && <p className="error-text">invalid name</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-mail</label>
        <input type='text' id='name' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail} />
        {emailInputIsInValid && <p className="error-text">invalid e-mail</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
