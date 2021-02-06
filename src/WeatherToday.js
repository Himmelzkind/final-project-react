import React from "react";
import "./weatherToday.css";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherUnits from "./WeatherUnits.js";

export default function WeatherToday(props){
    return (
        <div className="WeatherToday">                
            <h1>{props.data.city}</h1>
            <h2><FormattedDate date={props.data.date}/></h2>
    
            <div className="weatherMain">
                <WeatherIcon code={props.data.icon} altText={props.data.description}/>
                <WeatherUnits tempmax_celsius={props.data.temp_max} tempmin_celsius={props.data.temp_min}/>
                <p className="humidityWind">humidity: {props.data.humidity} % | windspeed: {props.data.windSpeed} km/h</p>
            </div>

            <div className="row forecast_bottom">        
            </div>
                
        </div>)
    } 
    
    