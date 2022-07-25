import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                autoFocus="on"
                className="formControl"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York Weather Conditions</h1>
        <h2>Thursday 10:00 am</h2>
        <div className="currentTemp">
          <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Clear" />
          <span className="temperature">{temperature}</span>
          <span className="unit">°F</span>
        </div>

        <ul>
          <li>Partly cloudy</li>
          <li>Humidity: 50%</li>
          <li>Wind: 5m/h</li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "b1b855fb121f5178057b1006a42c2d0b";
    let city = "New York";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
