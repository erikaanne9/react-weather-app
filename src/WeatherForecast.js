import React, { useState } from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    let icon = `http://openweathermap.org/img/${forecast[0].weather.icon}@2x.png`;
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="ForecastDay">{forecast[0].dt}</div>
            <img src={icon} alt="weather" width={70} />
            <div className="ForecastTemperature">
              <span className="ForecastMax">{forecast[0].temp.max}° </span>
              <span className="ForecastMin">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let ApiKey = "b1b855fb121f5178057b1006a42c2d0b";
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=imperial`;

    axios.get(ApiUrl).then(handleResponse);
    return null;
  }
}
