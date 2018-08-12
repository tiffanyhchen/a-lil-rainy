import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./css/CityButton.css";

class Cities extends React.Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e) {
    this.props.onChangeCity(e.target.id)
  }

  render(){
    var cities = this.props.entries;
    console.log(cities)
    var self = this
    return(
        cities.map((city, i) => {
          return  <button key={i}
          id={city}
          onClick={self.handleOnClick} 
          className="cityButton">
            {city}
          </button>
        })
    );
  }

}

Cities.propTypes = {
  onChangeCity: PropTypes.func
}

export default Cities;