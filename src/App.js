import React from "react";
import './App.css';
import './index.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo"/>
        <footer> <a href="https://github.com/Himmelzkind/final-project-react.git" target="_blank" rel="noreferrer">Open source code</a> by Laura Himmelreich</footer>
      </div>
      
    </div>
  );
}

