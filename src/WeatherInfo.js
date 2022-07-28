import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city} Weather Conditions</h1>
      <h2>
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="currentTemp">
        <img src={props.data.iconUrl} alt={props.data.description} />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="unit">°F</span>
      </div>

      <ul>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {Math.round(props.data.wind)}m/h</li>
      </ul>
    </div>
  );
}
