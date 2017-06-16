//createStore here is a Redux method. It is used to create the store and set it's initial starting point.
import { createStore } from 'redux';

//Here is an example of a reducer. In this case we're using only one reducer. But a reducer is usually responsible for a specific action. If the action matches that reducer, it goes to work. Otherwise you just use the default to return the application state in it's untouched and unchanged form. Using a switch statement to accomplish this is common practice, but remember to include a default case! 
const reducer = function(state, action) {
  switch (action.type) {
    case 'INC_COUNT':
      return {...state, count: state.count+action.payload}
    case 'DEC_COUNT':
      return {...state, count: state.count-action.payload}
    case 'CHANGE_USER':
      return {...state, user: action.payload}
    default:
      return state;
  }
}

//Here we declare our initial store. Remember, we're using that Redux method from earlier. As such, it inherits several methods from the Redux core library. The store itself takes two arguments, the main reducer and the current state.
const store = createStore(reducer, {
  count: 0,
  user: ''
});

//Here we subscribe to the store, and what this means is that everytime the store(or 'application state') is updated, this code is run. This is how you will link the components to the main state of the application. 
store.subscribe(() => {
  //In this instance, all we're doing is console.logging it. But being that it's just a JavaScript function we can run just about anything in here.
  console.log(store.getState())
})

//And here we are dispatching (or 'sending') actions to our application, the reducers interpret that action and update the state, and on state update the console.log is triggered. Resulting in our (in this case) desired outcome.
store.dispatch({type: 'INC_COUNT', payload: 1})
store.dispatch({type: 'INC_COUNT', payload: 30})
store.dispatch({type: 'DEC_COUNT', payload: 20})
store.dispatch({type: 'CHANGE_USER', payload: 'Alex'})
