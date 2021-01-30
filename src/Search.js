import React from "react";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faStreetView } from "@fortawesome/free-solid-svg-icons";


export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <form id="search-form">
          <div className="form-row align-items-center">
            <div className="col-auto">
              <input
                type="search"
                className="form-control-sm mb-2"
                id="inlineFormInput"
                placeholder="Portkey to..."
                autoComplete="off"
                autoFocus="on"
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
      
    </div>
  );
}