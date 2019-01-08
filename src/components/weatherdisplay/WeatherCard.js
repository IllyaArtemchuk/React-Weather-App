import React from 'react'
import "./WeatherDisplay.css"
import * as format from "../../data/DataFormatter";

function WeatherCard(props) {
    return (
        <div className="col">
        <div className="row">
        <div className="card" onClick={() => props.SelectDay(props.DayData.Day)}>
        <div className="card-image">
            <img src={format.weatherImage(props.DayData.weatherDesc)}/>
        </div>
        <div className="card-content">
        <p className="col s6 text"> °{props.DayData.tempMax.toFixed(1)}</p>
        <p className="col s6 text"> °{props.DayData.tempMin.toFixed(1)} </p>
        </div>
        </div>
        </div>
        <h4 className="DayDisplay"> {props.DayData.Day} </h4>
        </div>
        )
}

export default WeatherCard;