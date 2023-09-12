import React from "react";
import "../App.css";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.city && (
          <div className="weatherResult">
            <div className="weatherResultText">
              <p>
                Место: {this.props.city}, страна: {this.props.country}
              </p>
              <p>Температура: {this.props.temp} °C</p>
              <p>Чувствуется как: {this.props.feels_like} °C</p>
              <p>Влажность: {this.props.humidity} %</p>
              <p>Облачность: {this.props.clouds} %</p>
              <p>Скорость ветра: {this.props.windSpeed} м/с</p>
            </div>
          </div>
        )}
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
