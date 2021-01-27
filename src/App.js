import React from "react";
import './App.css';
import Weather from "./Weather.js";
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>weather app app</h1>
        <Search />
        <Weather />
        <footer> <a href="https://github.com/Himmelzkind/final-project-react.git" target="_blank" rel="noreferrer">Open source code</a></footer>
      </div>
      
    </div>
  );
}

