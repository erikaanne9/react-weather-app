import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
