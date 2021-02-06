import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherForcastPreview(props){
    function formatDay(timestamp) {
        let date = new Date(timestamp);
        let weekDays = [ 
        "su",
        "mo", 
        "tu", 
        "we", 
        "th", 
        "fr", 
        "sa"
        ];
        let day = weekDays[date.getDay()];
        return day
        }
    
    function temperature(){
        let maxTemp = Math.round(props.data.temp.max);
        let minTemp = Math.round(props.data.temp.min);

        return(
            `<strong>${maxTemp}°</strong>|${minTemp}°`
        )
    }

    return(
        <div class="col-2">
            <h3>{formatDay(props.data.dt * 1000)}</h3>
            <WeatherIcon code={props.data.weather[0].icon} />
            <div class="weather-forecast-temp">
                {temperature()}
            </div>
        </div>
    );
    
}