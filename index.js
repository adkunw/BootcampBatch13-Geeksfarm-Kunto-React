const redux = require("redux");

const rootReducer = (currentState = 0, action) => {
  return currentState;
};

const store = redux.createStore(rootReducer);
console.log(store.getState());
