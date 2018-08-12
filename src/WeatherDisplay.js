import React, { Component } from "react";
import WeatherBox from "./WeatherBox";
import "./css/index.css";

class WeatherDisplay extends Component{
  constructor(props){
    super(props);
  }

  render(){
    var validData = this.props.cityWeatherData.currently;
    return(
      <div className="weatherDisplay">
        <div className="header">
          <div className="temp">{validData ? `${Math.round(this.props.cityWeatherData.currently.apparentTemperature)}` : `—` }&deg;</div>
          <div className="city">{this.props.active}</div>
        </div>
        <div className="boxDisplay">
          <div className="col">
            <WeatherBox type="wind" data={validData ? `${Math.round(this.props.cityWeatherData.currently.windSpeed)}` : `—`} unit="mph"/>
            <WeatherBox type="humidity" data={validData ? `${Math.round(this.props.cityWeatherData.currently.humidity) * 100}` : `—`} unit="%"/>
          </div>
          <div className="col">
            <WeatherBox type="ux index" data={validData ? this.props.cityWeatherData.currently.uvIndex : '—'}/>
          </div>
        </div>
      </div>
    );
  }

}

export default WeatherDisplay;