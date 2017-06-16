//This is our store file. Often times, like in Activity 3, you'll find that this file's contents in app.js
//They do not explicely need to be separate!
import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import reducer from "./reducers"

const middleware = applyMiddleware(logger())

export default createStore(reducer, middleware)
