import React from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props){
    return (
            <div className="Weather">                
                <h1>{props.data.city}</h1>
                <h2><FormattedDate date={props.data.date}/></h2>

    
                <div className="weatherToday">
                    <img id="icon-main" src={props.data.iconUrl} alt={props.data.description} />
                    <strong id="currentTemp">{props.data.temperature}</strong>
                    <span className="units">{props.data.temperature}
                        <button className="celsius-link">°C</button>
                        <button className="fahrenheit-link">°F</button>
                    </span>
                    <p className="humidityWind">humidity: {props.data.humidity} % | windspeed: {props.data.windSpeed} km/h</p>
                </div>

                <div className="row forecast_bottom"></div>
                
            </div>)
    } 
    
    