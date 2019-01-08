import React, { Component } from 'react'
import WeatherCard from "./WeatherCard";
import * as format from "../../data/DataFormatter";



class WeatherList extends Component {
    render() {
    if(this.props.WeatherData[0] === undefined) {
        return null
    }
    var FilteredWeather = format.dataSelectorList(this.props.WeatherData)

    return (

    <div className="col s6">
    {FilteredWeather.map(Day => < WeatherCard key={Day.Day} DayData={Day}  SelectDay={this.props.SelectDay}/>)}
    </div>
        )
}

}

export default WeatherList;