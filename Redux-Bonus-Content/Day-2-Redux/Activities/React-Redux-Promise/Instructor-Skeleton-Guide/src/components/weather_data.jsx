//We just need react and lodash here!
//Hold up, no redux? what's lodash?
//1) No redux, because this will be a purely functional display component. More on that in a second!
//2) lodash is a utility library for JS that allows you to do cool things in easy readable ways: https://lodash.com/
//The docs are great, READ THEM ON YOUR OWN TIME!! Note that it is convenction to store the lodash library in an _ variable. (hence a low dash!)

//CODE GOES HERE

//CODE GOES HERE

//Since we may have never seen a purely functional component, here's a skeleton to get you started.
//Note that it is basically just a fat arrow function that returns JSX! That's really all it is - a fat arrow function with an arguement of props.
export default (props) => {

//Here, lets write a function that takes the average of the data it is given. This is because we will get an array of weather data, and need to summarize it for user experience!
//Lodash has a handy function .round, and another .sum. Utilize those to get the average of the numbers in the data array, returning just an integer for ease of display.
  function getAverage(data) {
    return (
      //CODE GOES HERE

      //CODE GOES HERE
    )
  }

//Now, we have to think what we want to display to the user. We need to show them 1) the average of the data and 2) what units this average is in!
//For ease of design, look at the JSON that the action is returning from the API.
//We will have to go a couple of levels deep: action.payload.data (this is done in the reducer)
// Since our action is mapped to component props via mapStateToProps in the parent component(WeatherList), the props will contain the weather array.
//When we map over the weather array to create our WeatherData components, each WeatherData will render the average and units of temperature, pressure, and humudity.
//Recall that in our parent component, WeatherList, are passing down the props when we map over the array of weather data at different times.
//When we map over this array, each WeatherData component will get an array of either: temperature, pressure, or humudity.
//Thus, our component must not only be purely functional, but also completly reusable between these different cases.
//We can accomplish this by passing it props that are its data (which we call getAverage on), and its units, which we display.
  return(
    //CODE GOES HERE

    //CODE GOES HERE
  );
};
