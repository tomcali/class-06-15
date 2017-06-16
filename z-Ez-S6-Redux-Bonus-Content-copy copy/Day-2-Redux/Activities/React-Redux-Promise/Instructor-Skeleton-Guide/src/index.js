//INSTRUCTOR DO: Please go over the imports, and what the { NameGoesHere } is for.
//(It pulls only a specific object out of a package of objects, using ES6 syntax. This keeps our files lightweight!!)
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';


//CODE GOES HERE
//import App and Reducers here!

//CODE GOES HERE


//CODE GOES HERE
//create your const createStoreWithMiddleware here
//CODE GOES HERE


//apply the createStoreWithMiddleware to your reducers in the store below, and select the proper document element to render to.
ReactDOM.render(
  <Provider store={}>
    <App />
  </Provider>
  , document.querySelector());
