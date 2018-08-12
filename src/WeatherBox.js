import React, { Component } from "react";
import "./css/WeatherBox.css";

class WeatherBox extends Component{
  constructor(props) {
    super(props);

  }
  render(){
    return(
      <div className="weatherBox">
        <div className="boxTitle">{this.props.type}</div>
        <div className="boxContent">
          {this.props.data}
          <span className="unit">{this.props.unit ? `${this.props.unit}` : ''}</span>
        </div> 
      </div>
    );
  }
}

export default WeatherBox;