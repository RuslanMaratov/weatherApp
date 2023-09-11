import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./App.css";

const API_KEY = "9c10813ffe85a43b896f495aa170535e";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    feels_like: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined,
  };

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await api_url.json();
      const sunset = data.sys.sunset;
      const date = new Date();
      date.setTime(sunset);
      const sunset_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      const sunrise = data.sys.sunrise;
      date.setTime(sunrise);
      const sunrise_date =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        sunrise: sunrise_date,
        sunset: sunset_date,
        error: undefined,
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        feels_like: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Вы не ввели название города(страны)!",
      });
    }
  };
  render() {
    return (
      <div className="mainWrapper">
        <div className="mainContainer">
          <div className="weatherInfo">
            <Info />
            <Form weatherMethod={this.gettingWeather} />
            <Weather
              city={this.state.city}
              country={this.state.country}
              temp={this.state.temp}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              feels_like={this.state.feels_like}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
