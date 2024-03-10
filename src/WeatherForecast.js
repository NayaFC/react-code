import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForescast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let city = props.city;
  let key = "ct60b4ef8f613bo52b3607d5ab790c4c";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div>
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt=""
            />
          </div>

          <div className="weatherTemperature">
            <span className="forecastTempMax">19°</span>
            <span className="forecastTempMin">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
