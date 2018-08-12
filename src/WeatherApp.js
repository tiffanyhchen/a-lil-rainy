import React, { Component } from "react";
import Cities from "./Cities";
import WeatherDisplay from "./WeatherDisplay";
import "./css/WeatherDisplay.css";

class WeatherApp extends Component{
  constructor(props) {
    super(props);
    this.getWeatherData = this.getWeatherData.bind(this)
    let startCity = "Cupertino"

    this.state = {
      coordinates: {
        "Cupertino": {
          "longitude": 37.3175,
          "latitude": -122.0419
        },
        "London": {
          "longitude": 51.507222,
          "latitude": -0.1275
        },
        "Shanghai": {
          "longitude": 31.228611,
          "latitude": 121.474722
        },
        "Paris": {
          "longitude": 48.8567,
          "latitude": 2.3508
        }
      },
      cityWeatherData: {},
      activeCity: startCity
    };
    console.log(startCity)
    this.getWeatherData(startCity)
  }

  getWeatherData(city){
    console.log(city);
    let cityCoordinates = this.state.coordinates[city];
    
    fetch('https://api.darksky.net/forecast/00b6f10264d907477705c3d6caf80df0/' + cityCoordinates.longitude + ',' + cityCoordinates.latitude )
    .then( response => response.json())
    .then( data => {
        this.setState({
          activeCity: city,
          cityWeatherData: data
        })
      }).catch((e) => {
        this.setState({
          cityWeatherData: {}
        })
      })
  }

  onChangeCity(city) {
    this.getWeatherData(city)
  }

  render(){
    return(
      <div>
        <WeatherDisplay  
          active={this.state.activeCity} 
          coordinates={this.state.coordinates}
          cityWeatherData={this.state.cityWeatherData}
        />
        <div className="Cities">
          <Cities 
            entries={Object.keys(this.state.coordinates)} 
            onChangeCity={this.onChangeCity.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default WeatherApp;