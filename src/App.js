import { useState } from "react";
import "./App.css";
import Weatherresult from "./components/Weatherresult";

function App() {
  let API_KEY = "979bcb3167224872adb115058211210";

  const [wheatherData, setWheatherData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const citytext = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  async function getdata(value) {
    setLoading(true);
    try {
      const data = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${value}&days=3&aqi=no&alerts=no`
      );
      const result = await data.json();
      setWheatherData(result.forecast.forecastday);
      setError(false);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setCityName(inputValue);
    getdata(inputValue);
    setInputValue("");
  };
  return (
    <div>
      {/* <div className="search">
      
        <input type="text" placeholder="Search a City" onChange={citytext}/>
        <button onClick={() => getdata(cityinput)} >Search</button>
    
      </div> */}

      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search a City"
          value={inputValue}
          onChange={citytext}
        />
        <button type="submit">Search</button>
      </form>
      {!loading && error ? (
        <div>something went wrong</div>
      ) : !loading ? (
        <div>
          <h2 className="items-center">{cityName} in the last three days </h2>

          {wheatherData.map((item, index) => (
            <Weatherresult
              key={index}
              date={item.date}
              icon={item.day.condition.icon}
              condition={item.day.condition.text}
              temp={item.day.avgtemp_c}
              humidity={item.day.avghumidity}
            />
          ))}
        </div>
      ) : (
        <div className="loading"> loading...</div>
      )}
    </div>
  );
}

export default App;
