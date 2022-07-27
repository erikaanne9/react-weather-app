import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function handleResponse(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });

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
        <h1>{weatherData.city} Weather Conditions</h1>
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>
        <div className="currentTemp">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">°F</span>
        </div>

        <ul>
          <li className="text-capitalize">{weatherData.description}</li>
          <li>Humidity: {weatherData.humidity}%</li>
          <li>Wind: {Math.round(weatherData.wind)}m/h</li>
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
