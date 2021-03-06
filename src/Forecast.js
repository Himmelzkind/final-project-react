import React, {useState} from "react";
import WeatherForcastPreview from "./WeatherForcastPreview.js";
import "./forecast.css";
import axios from "axios";

export default function Forecast(props){
    const [loaded,setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
   
    
    function displayForecast(response){
        setForecast(response.data);
        setLoaded(true);
    }
    

    if (loaded && props.latitude  === forecast.lat){
        return (
            <div className="Forecast">
                <div className="row forecast_bottom">
                    <WeatherForcastPreview data={forecast.daily[0]}/>
                    <WeatherForcastPreview data={forecast.daily[1]}/>
                    <WeatherForcastPreview data={forecast.daily[2]}/>
                    <WeatherForcastPreview data={forecast.daily[3]}/>
                    <WeatherForcastPreview data={forecast.daily[4]}/>
                    <WeatherForcastPreview data={forecast.daily[5]}/>
                </div>
            </div>
        );
    } else {
        //search for forcast temperature
        let apiKey = "7278a92a998556c3037c9188443f7369";
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=minutely&appid=${apiKey}&units=metric`;
        console.log(apiUrl);
        axios.get(apiUrl).then(displayForecast);
       
        return null;
    }
 
}