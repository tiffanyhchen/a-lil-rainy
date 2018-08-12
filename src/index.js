import React, { Component } from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./WeatherApp"
 
var destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
      <WeatherApp/>
    </div>,
    destination
);