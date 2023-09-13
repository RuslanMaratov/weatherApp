import React from "react";
import "../App.css";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.props.weatherMethod}>
          <input
            autoComplete="off"
            className="formInput"
            type="text"
            name="city"
            placeholder="Город(страна)"
          />
          <button className="formButton">Получить погоду</button>
        </form>
      </div>
    );
  }
}

export default Form;
