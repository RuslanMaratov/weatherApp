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
                Город: {this.props.city}, страна: {this.props.country}
              </p>
              <p>Температура: {this.props.temp}</p>
              <p>Восход Солнца: {this.props.sunrise}</p>
              <p>Заход Солнца: {this.props.sunset}</p>
              <p>Чувствуется как: {this.props.feels_like}</p>
            </div>
          </div>
        )}
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;
