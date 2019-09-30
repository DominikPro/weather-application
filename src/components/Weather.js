import React from "react";
import "../style/weather.css";

const Weather = props => {
  const { temperature, humidity, icon } = props;
  console.log(icon);
  return (
    <>
      <div className="weatherBox">
        <h3 className="weatherBox__title">Weather in Krakow</h3>
        <div>
          <div className={"sprite sprite-" + icon} />
          <div className="weatherBox__temperature">
            {Math.floor(temperature - 273)}
            &#8451;
          </div>
          <p className="weatherBox__humidity">Humidity: {humidity}%</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
