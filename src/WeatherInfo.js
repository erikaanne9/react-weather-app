import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} Weather Conditions</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="currentTemp">
        <img src={props.data.iconUrl} alt={props.data.description} />
        <WeatherTemperature fahrenheit={props.data.temperature} />
      </div>

      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)}m/h</li>
      </ul>
    </div>
  );
}
