import { useReducer } from "react";

const initialInputState = {
  enteredValue: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      enteredValue: action.value,
      isTouched: state.isTouched
    }
  }
  if (action.type === 'BLUR') {
    return {
      isTouched: true,
      enteredValue: state.enteredValue
    }
  }
  if (action.type === 'RESET') {
    return {
      isTouched: false,
      enteredValue: ''
    }
  }
  return initialInputState;
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  const valueIsValid = validateValue(inputState.enteredValue);
  const hasError = !valueIsValid && inputState.isTouched;

  const inputBlurHandler = () => {
    dispatch({
      type: 'BLUR'
    })
  };

  const valueChangeHandler = event => {
    dispatch({
      type: 'INPUT',
      value: event.target.value
    })
  };

  const reset = () => {
    dispatch({
      type: 'RESET'
    })
  }

  return {
    value: inputState.enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
};

export default useInput;