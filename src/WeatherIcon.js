import React from "react";

export default function WeatherIcon(props){
    
    const codeMapping = {
        "01d": "clear_day",
        "02d": "few_clouds_day",
        "03d": "scattered_clouds_Day",
        "04d": "broken_clouds_Day",
        "09d": "shower_rain_Day",
        "10d": "rain_day",
        "11d": "thunderstorm_day",
        "15d": "snow_day",
        "50d": "mist_day",
        "01n": "Clear_Night",
        "02n": "few_clouds_night",
        "03n": "scattered_clouds_night",
        "04n": "broken_clouds_night",
        "09n": "shower_rain_night",
        "10n": "rain_night",
        "11n": "thunderstorm_night",
        "15n": "snow_night",
        "50n": "mist_night",
    };
    let iconUrl = `../img/${codeMapping[props.code]}.png`;

    return(
        <img id="icon-main" src={iconUrl} alt={props.altText}/>
    );
}