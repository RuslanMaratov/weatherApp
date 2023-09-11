import React from "react";
import "../App.css";

class Info extends React.Component {
  render() {
    return (
      <div className="infoTitle">
        <h1>ПОГОДНОЕ ПРИЛОЖЕНИЕ</h1>
        <p>
          Введите название вашего города(страны). Узнайте какая погода у вас!
        </p>
      </div>
    );
  }
}

export default Info;
