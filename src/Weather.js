import React from "react";
import "./weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function Weather(props){
    return (
            <div className="Weather">                
                <h1>{props.data.city}</h1>
                <h2><FormattedDate date={props.data.date}/></h2>

    
                <div className="weatherToday">
                    <WeatherIcon code={props.data.icon} altText={props.data.description}/>
                    <img id="icon-main" src={props.data.icon} alt={props.data.description} />
                    <strong id="currentTemp">{props.data.temp_max}°</strong>
                    <span className="units"> | {props.data.temp_min}
                        <button className="celsius-link">°C</button>
                        <button className="fahrenheit-link">°F</button>
                    </span>
                    <p className="humidityWind">humidity: {props.data.humidity} % | windspeed: {props.data.windSpeed} km/h</p>
                </div>

                <div className="row forecast_bottom"></div>
                
            </div>)
    } 
    
    