import React from "react";
import "./weather.css";


export default function Weather(){
    return(
    <div className="Weather">
        <h1>Lisbon</h1>
        <ul>
            <li>Wednsday 7:00</li>
            <li>mostly cloudy</li>
        </ul>
        <div className="weatherToday">
            <img id="icon-main" src=""/>
            <strong id="currentTemp">20</strong>
            <span className="units">
                <button className="celsius-link" href="/">°C</button>
                <button className="fahrenheit-link" href="#">°F</button>
            </span>
            <p id="humidity_wind">humidity | windspeed</p>
        </div>
        <div class="row forecast_bottom">
         
        </div>
    </div>);
}