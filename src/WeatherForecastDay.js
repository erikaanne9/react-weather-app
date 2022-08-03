import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  }

  let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <img src={icon} alt="weather" width={70} />
      <div className="ForecastTemperature">
        <span className="ForecastMax">{maxTemp()} </span>
        <span className="ForecastMin">{minTemp()}</span>
      </div>
    </div>
  );
}
