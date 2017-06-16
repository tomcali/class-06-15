//Yes, its called index.js, just like our main file. Its just convention. If you don't like it, feel free to use a different name in your PERSONAL projects..
// In more advanced (read: larger) projects, you'll likely separate your action constants into a separate file called types.js


import Axios from 'axios';

//GET NEW API KEY FROM INSTRUCTOR, insert below.
const WEATHER_API_KEY = '';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

//CODE GOES HERE
//Here, we need to create and export a constant that is a string. We do this so that our JS will throw what is called a 'hard fail'.
//If we were to just use ```type: 'FETCH_WEATHER'``` as our action type, and happened to typo it at some point whilst using it, we would have a helluva time debugging the ensuing silent fail.
//However, if we assign it to a const and import it everywhere, if we typo it, we'll get a variable not defined style error, which will be easy to pinpoint.

//CODE GOES HERE


//This code is provided, since it was in the lecture anyway :). However, students please find a parter and walk through the code, explaining what each line does.
//Make sure to cover what kind of js object request is pointing to, and what type & payload mean in the return statement.
//INSTRUCTOR please do: go over with the class.
export function fetchWeather(city) {
  const url = `${rootUrl}&q=${city},us`;

  let request = Axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
