// import { useState } from "react";
import "./App.css";

// const url =
//   "http://api.weatherapi.com/v1/forecast.json?key=&q=London&days=3&aqi=no&alerts=no";
import Weatherresult from "./components/Weatherresult";

function App() {
  // const API_Key: "979bcb3167224872adb115058211210"; 
  let cityinput ="";

  const citytext = (e) => {
   e.preventDefault();
   cityinput= e.target.value;
   console.log(cityinput);
  }
  const getdata=(value) => {
  console.log("buton basildi");
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a City" onChange={citytext}/>
        <button onClick={() => getdata(cityinput)} >Search</button>
        
      </div>
      <Weatherresult/>
    </div>
  );
}

export default App;
