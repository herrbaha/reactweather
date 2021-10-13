import React from 'react';
import "./weatherresult.css";

const Weatherresult = ({date, humidity, temp,icon, condition}) => {
    return (
       <div className="result">
          <h2>{date}</h2>
          <ul>
              <li>{temp} C</li>
              <li><img src={icon} alt=""/></li>
              <li>{condition}</li>
              <li>{humidity}%</li>
          </ul> 
       </div>
    )
}

export default Weatherresult;
