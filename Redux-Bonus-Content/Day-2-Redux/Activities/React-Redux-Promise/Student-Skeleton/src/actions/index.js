import Axios from 'axios';

//GET NEW API KEY FROM INSTRUCTOR, insert below.
const WEATHER_API_KEY = '';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

//CODE GOES HERE

//CODE GOES HERE

export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  let request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
