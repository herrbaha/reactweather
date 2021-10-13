// import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";
// import {getDefaultNormalizer} from '@testing-library/react'


 

function App() {
  let API_KEY = "03eca12fc063192fc55adf45336b2248";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=izmir&appid=${API_KEY}&units=metric&lang=de`;


  // let APP_KEY: "979bcb3167224872adb115058211210" 

  let cityinput =""

  // const [wheatherData, setWheatherData] = useState([]);

  const citytext = (e) => {
   e.preventDefault();
   cityinput= e.target.value;
   console.log(cityinput);
  }

  async function getdata(value) {
    const data = await fetch(url)
    const result = await data.json();
    console.log(result);
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
