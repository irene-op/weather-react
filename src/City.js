import React from "react";
import "./App.css";

export default function City() {
  return (
    <div className="mainCity">
      <div className="row location-temp">
        <div className="col">
          <strong id="current-temp">27°C</strong>
        </div>
        <div id="city-country" className="col">
          <h1>Medellin</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h2>
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="Clear"
              id="main-icon"
            />
          </h2>
        </div>
        <div className="col-6">
          <p id="description">Sunny</p>
        </div>
      </div>
      <div className="row">
        <div id="date-time" className="col current-col">
          <ul className="date weather-conditions">
            <li id="day-element">Sunday</li>
            <li id="date-element">17/10/2020</li>
            <li id="time-element">17:29</li>
          </ul>
        </div>
        <div className="col current-col">
          <ul id="current-conditions" class="weather-conditions">
            <li id="pressure">Pressure: 1000 hPa</li>
            <li id="wind-speed">Wind: 2m/s SE</li>
            <li id="humidity">Humidity:80%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
