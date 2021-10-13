import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";
import {getDefaultNormalizer} from '@testing-library/react'


 

function App() {
  const APP_KEY: "979bcb3167224872adb115058211210" 

  let cityinput =""

  const [wheatherData, setWheatherData] = useState([]);
  
  function citytext(){
    document.querySelector("input").addEventListener("input", (e) =>{
      e.preventDefault();
      cityinput = e.target.value;
      console.log(cityinput)
    })
  }
  // const citytext = (e) => {
  //  e.preventDefault();
  //  cityinput= e.target.value;
  //  console.log(cityinput);
  // }

  async function getdata(value) 
  {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3`)
    const result = await data.json();
    setWheatherData(result.forecast.forecastday)
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a City" onChange={citytext}/>
        <button onClick={() => getdata(cityinput)} >Search</button>
        
      </div>
      {wheatherData.map(item => (<Weatherresult/>))}
    </div>
  );
}

export default App;
