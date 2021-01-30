import React from "react";
import './App.css';
import './index.css';
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>weather app app</h1>
        <Weather />
        <footer> <a href="https://github.com/Himmelzkind/final-project-react.git" target="_blank" rel="noreferrer">Open source code</a> by Laura Himmelreich</footer>
      </div>
      
    </div>
  );
}

