import React from "react";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }
  let ApiKey = "b1b855fb121f5178057b1006a42c2d0b";
  let lat = props.coord.lat;
  let lon = props.coord.lon;
  let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=imperial`;

  axios.get(ApiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thursday</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="sunny"
            width={70}
          />
          <div className="ForecastTemperature">
            <span className="ForecastMax">80° </span>
            <span className="ForecastMin">65°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
