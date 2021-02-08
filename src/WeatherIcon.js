import React from "react";
import "./weathericon.css";

export default function WeatherIcon(props){
    
    const codeMapping = {
        "01d": "clear_day",
        "02d": "few_clouds_day",
        "03d": "scattered_clouds_day",
        "04d": "broken_clouds_day",
        "09d": "shower_rain_day",
        "10d": "rain_day",
        "11d": "thunderstorm",
        "15d": "snow",
        "50d": "mist",
        "01n": "clear_night",
        "02n": "few_clouds_night",
        "03n": "scattered_clouds_night",
        "04n": "broken_clouds_night",
        "09n": "shower_rain_night",
        "10n": "rain_night",
        "11n": "thunderstorm",
        "15n": "snow",
        "50n": "mist",
    };
    let iconUrl = `/img/${codeMapping[props.code]}.png`;
    console.log(`iconUrl ist gleich: ${iconUrl}`);

    return(
        
        <img id="icon-main" src={iconUrl} alt={props.altText}/>
    );
}