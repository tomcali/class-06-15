//Here all we need is the combineReducers function to combine our reducers so we can export them to our store

import { combineReducers } from "redux"

import counter from "./counterReducer"
import user from "./userReducer"

export default combineReducers({
  counter,
  user,
})
