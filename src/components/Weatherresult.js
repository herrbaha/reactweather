import React from 'react';
import "./weatherresult.css";

const Weatherresult = ({date, icon, minTemp, maxTemp, condition}) => {
    return (
       <div className="result">
          <h2>{date}</h2>
          <ul>
              <li><img src={icon} alt=""/></li>
              <li>{condition}</li>
              <li>{minTemp} C / {maxTemp} C</li>
          </ul> 
       </div>
    )
}

export default Weatherresult;
