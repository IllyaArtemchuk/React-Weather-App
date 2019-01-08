import React, { Component } from 'react';
import "./WeatherDisplay.css";
import * as format from "../../data/DataFormatter";



class WeatherDetails extends Component {
    render() {

    if(this.props.WeatherData[0] === undefined) {
        return null
    }
    var FilteredWeather = format.dataSelectorDetails(this.props.WeatherData, this.props.SelectedDay);


    
    return (
    <div className="col s4 z-depth-2 card large WeatherDetails">

            <div className="col s12 center-align"> {FilteredWeather.day} </div>
            <div className="col s1"></div>
            <div className= "col s5"> <img src={FilteredWeather.image} className="responsive-img" /></div>
            <div className = "col s6">
                <div className="col s12 Spacer2"></div>
                <div className="col s12"><p>Wind: {FilteredWeather.wind} MPH</p></div>
                <div className="col s12"><p>Humidity: {FilteredWeather.humidity}%</p></div>
                <div className="col s12 Spacer"></div>
                <div className="col s6"> °{FilteredWeather.tempmax}</div>
                <div className="col s6"> °{FilteredWeather.tempmin}</div>
            </div>
        </div>
        )
    }
}

export default WeatherDetails;