import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Type a city.." />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York Weather Conditions</h1>
      <h3>Thursday 10:00 am</h3>
      <h3>80°F</h3>
      <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="Clear" />
      <ul>
        <li>Sunny</li>
        <li>Humidity 50%</li>
        <li>Wind: 5m/h</li>
      </ul>
    </div>
  );
}
