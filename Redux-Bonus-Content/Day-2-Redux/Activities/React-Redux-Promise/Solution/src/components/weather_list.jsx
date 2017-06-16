import React, {Component} from 'react';
import {connect} from 'react-redux';

import WeatherGraph from './weather_graph';


class WeatherList extends Component{

  renderWeather(cityData) {
    const cityName = cityData.city.name;
    const cityTemps = cityData.list.map((weather) => weather.main.temp)
    const cityPressures = cityData.list.map((weather) => weather.main.pressure)
    const cityHumidity = cityData.list.map((weather) => weather.main.humidity)
    const { lat, lon } = cityData.city.coord

    return(
      <tr key={cityName}>
        <td>{cityName}</td>
        <td><WeatherGraph data={cityTemps} color='red' units="K" /></td>
        <td><WeatherGraph data={cityPressures} color='orange' units="hPa" /></td>
        <td><WeatherGraph data={cityHumidity} color='yellow' units="%" /></td>
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

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList)
