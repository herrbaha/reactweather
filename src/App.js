import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";
import {getDefaultNormalizer} from '@testing-library/react'


 

function App() {
  
 
  let API_KEY = "979bcb3167224872adb115058211210"; 

  let cityinput ="";

  const [wheatherData, setWheatherData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
   e.preventDefault();
   cityinput= e.target.value;
   setInputValue("");
  }
  const handleChange = (e) => {
    setInputValue(e.target.value)
}

  async function getdata(value) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=7&aqi=no&alerts=no`)
    const result = await data.json();
    setWheatherData(result.forecast.forecastday);
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="search">
        <input type="text" placeholder="Search a City" value={inputValue} onChange={handleChange}/>
        <button onClick={() => getdata(cityinput)} >Search</button>
        
      </form>
      {wheatherData.map((item, index) => (
        <Weatherresult key={index} date={item.date} icon={item.day.condition.icon} condition={item.day.condition.text} temp={item.day.avgtemp_c} humidity={item.day.avghumidity}/>
      ))}
    </div>
  );
}

export default App;
