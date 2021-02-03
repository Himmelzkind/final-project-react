import React from "react";
import './App.css';
import './index.css';
import Search from "./Search.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search defaultCity="Tokyo"/>
        <footer> <a href="https://github.com/Himmelzkind/final-project-react.git" target="_blank" rel="noreferrer">Open source code</a> by Laura Himmelreich</footer>
      </div>
      
    </div>
  );
}

