import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";
import {getDefaultNormalizer} from '@testing-library/react'


 

function App() {
  
 
  let API_KEY = "979bcb3167224872adb115058211210"; 

  let cityinput =""

  const [wheatherData, setWheatherData] = useState([]);

  const citytext = (e) => {
   e.preventDefault();
   cityinput= e.target.value;
   console.log(cityinput);
  }

  async function getdata(value) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no&lang=tr`)
    const result = await data.json();
    setWheatherData(result.forecast.forecastday);
    console.log(result.forecast.forecastday)
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a City" onChange={citytext}/>
        <button onClick={() => getdata(cityinput)} >Search</button>
        
      </div>
      {wheatherData.map((item, index) => (
        <Weatherresult key={index} date={item.date} icon={item.day.condition.icon} minTemp={item.day.mintemp_c} maxTemp={item.day.maxtemp_c} condition={item.day.condition.text}/>
      ))}
    </div>
  );
}

export default App;
