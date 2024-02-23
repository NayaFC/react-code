import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function fahrenheitConvertion(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function celsiusConvertion(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTempertaure">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={fahrenheitConvertion}>
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTempertaure">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={celsiusConvertion}>
            {" "}
            ℃{" "}
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
