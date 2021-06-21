const redux = require('redux');

const counterReducer = (state = { counter: 0 }, action) => {  // reducer用來改state
  if ( action.type === 'increment'){
    return {
      counter: state.counter + 1
    };
  }

  if ( action.type === 'decrement'){
    return {
      counter: state.counter - 1
    };
  }
};

const store = redux.createStore(counterReducer);  // store用來存state

const counterSubscriber = () => {  // subscriber用來接收state
  const latestState = store.getState();
  console.log(latestState)
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment'});  // dispatch用來指派reducer做某動作
store.dispatch({ type: 'decrement'})