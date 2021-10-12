import { useState } from "react";
import "./App.css";
// API_Key: "979bcb3167224872adb115058211210";
// const url =
//   "http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=3&aqi=no&alerts=no";

function App() {
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a City" />
        <button>Search</button>
      </div>
    </div>
  );
}

export default App;
