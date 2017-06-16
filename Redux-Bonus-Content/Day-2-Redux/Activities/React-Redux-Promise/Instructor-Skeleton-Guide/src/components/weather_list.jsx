//This will be our component that uses a table to list all the data we are fetching from the API!
//For this file, we will need to import React, Component, and a new component called WeatherData.
//Lets write those, and then jump into creating the WeatherData component so we know what kind of data to pass into it!
//CODE GOES HERE

//CODE GOES HERE


//Now we need to fill in the WeatherList skeleton with valid code. Since there's so much data manipulation, a more detailed skeleton has been provided.
class WeatherList extends Component{

  renderWeather(cityData) {
    //REMEMBER: Look up the units that the API is providing and feed them into the WeatherData component too! Hint: console.log(JSON)!
    //each of these consts will need a map with a fat arrow functioning returning what weather detail we need so that we get only one type of weather detail
    //per constant. This is MUCH easier to feed into our WeatherData component! 
    const cityName;
    const cityTemps;
    const cityPressures;
    const cityHumidity;


    return(
      <tr key={"unique key goes here!"}>
        <td>WeatherData should go here, with the proper props!</td>
        <td>WeatherData should go here, with the proper props!</td>
        <td>WeatherData should go here, with the proper props!</td>
      </tr>
    );
  }

  render(){
    return(
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temp(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
};


//Here we have to write a mapStateToProps to get the proper chunk of our application state into our component.
//Again, look up docs when decessary! mapStateToProps takes the state as an arguement, and returns an object with the key being what you want the state to be
//when it is attached to this.props, and a value that is pulled off our state. Note that object destructuring { weather } just  pulls the weather state off of
//application state! Then, returning { weather } is just syntactic sugar for return { weather: weather }
//CODE GOES HERE

//CODE GOES HERE

//now we must export and connect! remember that mapStateToProps is the first arguement to connect, and the second is unnecessary if there is no mapDispatchToProps.
//And don't forget to pass it the component as well!
//CODE GOES HERE

//CODE GOES HERE
