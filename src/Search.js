import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form">
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input
              type="search"
              className="form-control-sm mb-2"
              id="inlineFormInput"
              placeholder="Portkey to..."
              autoComplete="off"
            />
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary mb-2"
              id="submit-button"
            >
              <i className="far fa-compass"></i>
            </button>
          </div>

          <div>
            <button className="btn btn-primary mb-2" id="location-button">
              <i className="fas fa-street-view"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}