import Axios from 'axios';

//GET NEW API KEY
const WEATHER_API_KEY = 'f36f6be5b3aa5f063f8358f64dde72ff';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  let request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
