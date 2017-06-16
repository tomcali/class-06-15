import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
//Take a look at reducers/gameReducer for details
import { initialState, gameReducer } from './reducers/gameReducer';
import App from './components/App';
import './index.css';

//The 'Provider' tag is jsx, and as such it part of the 'react-redux' library rather than just redux directly. After all, JSX is a templating language built for React. Remember, Redux CAN be used with other libraries like Angular.

//The createStore method on the other hand, is part of what defines Redux! A top-level store for all state data. createStore takes two arguments, a reducer and a state.

const store = createStore(gameReducer, initialState);

//Nothing out of the ordinary here. We've created our store, but we still need to pass our new store (as a prop) into our provider tags so that everything in our application inbetween the provider tags will have access to that store.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
