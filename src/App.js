import React, { Component } from 'react';
import Header from "./components/header/Header";
import WeatherDetails from "./components/weatherdisplay/WeatherDetails";
import WeatherList from "./components/weatherdisplay/WeatherList";
import "./App.css"
import moment from "moment";
import * as format from "./data/DataFormatter";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      selectedDay: "Null"
    }
  }


  componentDidMount() {
    var WeatherDataArry = []
    fetch("http://api.openweathermap.org/data/2.5/forecast?id=5368361&APPID=fedee6db2e55cdb316e184ec90d01ee6&units=imperial")
    .then(results => {
      return results.json();
    })
    .then(data => {
      data.list.forEach(time => {
        var dataObject = {Day: moment(time.dt*1000).format("dddd"), Hour: moment(time.dt*1000).format("hA"), tempMin: time.main.temp_min, tempMax: time.main.temp_max, weatherDesc: time.weather[0].main, wind: time.wind.speed, humidity: time.main.humidity}
        WeatherDataArry.push(dataObject)
    })
    this.setState({weatherData: WeatherDataArry})
    if(this.state.selectedDay=="Null") {
      this.setState({selectedDay: WeatherDataArry[0].Day})
      }
    })
  }

  changeSelectedDay = (day) => {
    console.log("changeSelectedDay Called")
    this.setState({ selectedDay: day});
    console.log(day)
  }






  render() {
    if(this.state.weatherData.length == 0) {
      return null;
    }

    return (
      <div className="App">
      <div className="row">
      <div className="col s3"></div>
        <Header  />
        <div className= "col s4"></div>
        <WeatherDetails SelectedDay={this.state.selectedDay} WeatherData={this.state.weatherData} image={format.weatherImage(this.state.weatherData[0].weatherDesc)}/>
        <div className="col s2"></div>
        <div className="col s12 SpacerApp"></div>
        <div className="col s3"></div>
        <WeatherList SelectDay={this.changeSelectedDay} WeatherData={this.state.weatherData} SelectedDay={this.state.selectedDay}/>
      </div>
      </div>

    );
  }
}

export default App;
