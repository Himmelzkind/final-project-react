import React, {useState} from "react";
import "./search.css";
import Weather from "./Weather.js";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";


export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response){
        setWeatherData({
            ready: true,
            city: response.data.name,
            date: new Date(response.data.dt * 1000),
            temperature: Math.round(response.data.main.temp),
            temp_max: Math.round(response.data.main.temp_max),
            temp_min: Math.round(response.data.main.temp_min),
            humidity: Math.round(response.data.main.humidity),
            description: response.data.weather[0].description,
            windSpeed: Math.round(response.data.wind.speed),
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
    }

    function search(){
      const apiKey = "361119f7d767ce895ccf917d2e91cc83";
      let apiUrl =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
      return (
        "loading..."
        )
    }

    function handleSubmit(event){
      event.preventDefault()
      search();
    }

    function handleInputCity(response){
      setCity(response.target.value);
    
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
                  <button className="btn btn-primary mb-2" id="location-button">
                    <FontAwesomeIcon icon={faStreetView} />
                  </button>
                </div>
              </div>
          </form>
          </div>
          <Weather data={weatherData}/>
          
        </div>
      );
      } else {
        search();
        return ("loading...");
    }
    
}