// import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";


 

function App() {
  const APP_KEY: "979bcb3167224872adb115058211210" 

  let cityinput =""
  
  const [wheatherData, setWheatherData] = useState([]);

  const citytext = (e) => {
   e.preventDefault();
   cityinput= e.target.value;
   console.log(cityinput);
  }

  async function getdata(value) {
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${APP_KEY}&q=${value}&days=3&aqi=no&alerts=no`)
    const result = await data.json();
    console.log(result);
  }
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search a City" onChange={citytext}/>
        <button onClick={() => getdata()} >Search</button>
        
      </div>
      <Weatherresult/>
    </div>
  );
}

export default App;
