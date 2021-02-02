import React, {useState} from "react";
import "./weather.css";
import Search from "./Search.js";
import axios from "axios";

export default function Weather(props){

    const [weatherData, setWeatherData] = useState({ready:false});
    function handleSubmit(response){
        console.log(response.data.name);
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: "Wednesday 7:00",
            temperature: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].description,
            windSpeed: Math.round(response.data.wind.speed),
            iconUrl: "https://icons-for-free.com/iconfiles/png/512/cloud+day+forecast+lightning+shine+storm+sun+weather+icon-1320183295537909806.png"
        });
    }

    if (weatherData.ready){
        return (
            <div className="Weather">
                <Search />
                <h1>{weatherData.city}</h1>
                <h2>{weatherData.date}</h2>

    
                <div className="weatherToday">
                    <img id="icon-main" src={weatherData.iconUrl} alt={weatherData.description} />
                    <strong id="currentTemp">{weatherData.temperature}</strong>
                    <span className="units">{weatherData.temperature}
                        <button className="celsius-link">°C</button>
                        <button className="fahrenheit-link">°F</button>
                    </span>
                    <p className="humidityWind">humidity: {weatherData.humidity} % | windspeed: {weatherData.windSpeed} km/h</p>
                </div>

                <div className="row forecast_bottom"></div>
                
            </div>)
    } else {
        const apiKey = "361119f7d767ce895ccf917d2e91cc83";
        let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleSubmit);
        return (
            "loading..."
        )
    }
    
    
}