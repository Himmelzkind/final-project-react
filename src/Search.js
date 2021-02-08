import React, {useState} from "react";
import "./search.css";
import WeatherToday from "./WeatherToday.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";
import Geolocation from '@react-native-community/geolocation';


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            city: response.data.name,
            latitude:response.data.coord.lat,
            longitude: response.data.coord.lon,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            temp_max: Math.round(response.data.main.temp_max),
            temp_min: Math.round(response.data.main.temp_min),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].description,
            windSpeed: Math.round(response.data.wind.speed),
            icon: response.data.weather[0].icon
        });
    }

    function search(){
      const apiKey = "e2a3cfc5b57e63037c66c950b5e2bb3f";
      let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    function handleInputCity(response){
      setCity(response.target.value);
    }

    function handleSubmit(event){
      event.preventDefault()
      search();
    }

    function searchLocation(position){
      // get current location (coordinates) of your device and pass them on to display temperature of your location
      //position.preventDefault();
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = "361119f7d767ce895ccf917d2e91cc83";
      let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(weatherUrl).then(handleResponse);
    }

    function getCurrentLocation(event){
      event.preventDefault();
      Geolocation.getCurrentPosition(searchLocation());
    }

    if (weatherData.ready){
      return (
        <div className="Search">
          <div className="container">
            <form onSubmit={handleSubmit} id="search-form">
              <div className="form-row align-items-center">
                <div className="col-auto">
                  <input
                    type="search"
                    className="form-control-sm mb-2"
                    id="inlineFormInput"
                    placeholder="Portkey to..."
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleInputCity}
                  />
                </div>

                <div className="col-auto">
                  <button
                    type="submit"
                    className="btn btn-primary mb-2"
                    id="submit-button"
                  ><FontAwesomeIcon icon={faCompass} />
                  </button>
                </div>

                <div>
                  <button className="btn btn-primary mb-2" id="location-button" onClick={getCurrentLocation}>
                    <FontAwesomeIcon icon={faStreetView} />
                  </button>
                </div>
              </div>
            </form>
            <WeatherToday data={weatherData}/>
            <Forecast city={weatherData.city} latitude={weatherData.latitude} longitude={weatherData.longitude}/>

          </div>
        </div>
      );
      } else {
        search();
        return ("loading... Search.js");
    }
    
}