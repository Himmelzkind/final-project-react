import React, { useState } from "react";

export default function WeatherUnits(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return(
            <div className="WeatherUnits">
                <span className="temperature"><strong id="currentTemp">{props.tempmax_celsius}°</strong> | {props.tempmin_celsius}</span>
                <span className="units">
                    <a href="/" className="celsius-link" id="activeC">°C</a>
                    <a href="/" className="fahrenheit-link" onClick={showFahrenheit}> °F</a>
                </span>
            </div>
        );
    } else{
        let fahrenheit_max = Math.round((props.tempmax_celsius * 9/5) + 32);
        let fahrenheit_min = Math.round((props.tempmin_celsius * 9/5) + 32);
        return(
            <div className="WeatherUnits">
                <span className="temperature"><strong id="currentTemp">{fahrenheit_max}°</strong> | {fahrenheit_min}</span>
                <span className="units">
                    <a href="/" className="celsius-link" id="notactive" onClick={showCelsius}>°C</a>
                    <a href="/" className="fahrenheit-link"id="activeF">  °F</a>
                </span>
            </div>
        );
    }
    
}