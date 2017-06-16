import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

export default combineReducers({
  weather: WeatherReducer
})
