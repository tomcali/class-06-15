//This is our main React file!
//We need to grab all relevant React packages, and connect them to Redux by passing the store into the Provider
//as a prop. Then we pass our routes to our Provider as a child element. 

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"

import routes from './config/routes'
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
document.getElementById('app'));
