import React, { Component } from "react";
import Weather from "./components/Weather";
import "./style/App.css";

const API =
  "https://api.openweathermap.org/data/2.5/weather?q=Krakow,pl&appid=4a9de1261b9447a994f9e0ef30fe6867";

class App extends Component {
  state = {
    wether: null,
    loading: true
  };

  async componentDidMount() {
    const url = API;
    const respons = await fetch(url);
    const data = await respons.json();
    this.setState({
      weather: data,
      loading: false,
      icon: data.weather[0].icon
    });
    console.log(data);
    console.log(data.weather[0].icon);
  }

  render() {
    const { weather, icon } = this.state;
    return (
      <>
        <div>
          {this.state.loading ? (
            <h2>Loading...</h2>
          ) : (
            <Weather
              temperature={weather.main.temp}
              humidity={weather.main.humidity}
              icon={icon}
            />
          )}
        </div>
      </>
    );
  }
}

export default App;
